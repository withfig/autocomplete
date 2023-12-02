import { valueList } from "@fig/autocomplete-generators";

const sections = {
  "1": "General commands",
  "2": "System calls",
  "3": "C library functions",
  "4": "Devices and special files",
  "5": "File formats and conventions",
  "6": "Games, etc",
  "7": "Miscellanea",
  "8": "System admin and daemons",
};

/** Cache of page suggestions. The key is the first letter of the `name` */
const pageSuggestionCache = new Map<string, Fig.Suggestion[]>();

// JS time, so this is in milliseconds
let lastCachedAt = 0;
// 60m ttl
const pageSuggestionCacheTTL = 1000 * 60 * 60;
// A lock-ish thing to prevent running the command multiple times. Without this
// lock, `man -k .` can be run multiple times, causing some visual slowness/jank
let isGeneratingSuggestions = false;

/** Suggests manual pages, caches the list once */
const generateManualPages: Fig.Generator = {
  // only trigger when the token length transitions to or from 0
  // soon: { on: "threshold", length: 0 }
  trigger: (current, previous) =>
    current.length === 0 || (previous.length === 0 && current.length > 0),

  // Most of the time, this will complete instantly. When building the cache,
  // it may take a few seconds. This is set to 15s for slower/older machines
  // where FS access may be slower.
  scriptTimeout: 15000,

  custom: async (tokens, executeShellCommand) => {
    const finalToken = tokens[tokens.length - 1];

    // Clear the cache if the TTL has elapsed
    const now = Date.now();
    if (now - lastCachedAt > pageSuggestionCacheTTL) {
      pageSuggestionCache.clear();
      lastCachedAt = now;
    }

    // If there's nothing in the cache yet, build it
    if (!isGeneratingSuggestions && pageSuggestionCache.size === 0) {
      // try/finally is unnecessary because the operations in this block
      // aren't fallible
      isGeneratingSuggestions = true;

      // Same as `apropos .`, lists all manual pages with a brief description
      const { stdout } = await executeShellCommand({
        command: "man",
        args: ["-k", "."],
      });
      const seenPageNameCache = new Set<string>();

      // Guaranteed to be one per line
      for (const line of stdout.split("\n")) {
        const splitIndex = line.indexOf(" - ");

        const pageNames = line.slice(0, splitIndex);
        let description = line.slice(splitIndex + 3) || "Manual page";
        description = description[0].toLocaleUpperCase() + description.slice(1);

        const pages = pageNames.split(", ");

        for (const page of pages) {
          const i = page.lastIndexOf("(");
          const name = page.slice(0, i);
          const section = page.slice(i);
          if (seenPageNameCache.has(name)) {
            continue;
          }
          seenPageNameCache.add(name);
          const suggestion = {
            name,
            description: `${section} ${description}`,
            icon: "fig://icon?type=string",
          };
          const arr = pageSuggestionCache.get(name[0]);

          if (arr) {
            arr.push(suggestion);
          } else {
            pageSuggestionCache.set(name[0], [suggestion]);
          }
        }
      }
      isGeneratingSuggestions = false;
    } else if (isGeneratingSuggestions) {
      // If the suggestions are being generated, try waiting 4 seconds before
      // attempting to show the results
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 4000));
    }
    return pageSuggestionCache.get(finalToken[0] || "a") || [];
  },
};

const completionSpec: Fig.Spec = {
  name: "man",
  description: "Format and display the on-line manual pages",
  args: {
    generators: generateManualPages,
    isOptional: true,
    isVariadic: true,
  },
  options: [
    {
      name: "-C",
      description: "Specify the configuration file to use",
      args: {
        name: "config_file",
      },
    },
    {
      name: "-M",
      description:
        "Specify the list of directories to search (colon separated)",
      args: {
        name: "path",
        generators: {
          template: "folders",
          getQueryTerm: ":",
        },
      },
    },
    {
      name: "-P",
      description: "Specify the pager program",
      args: {
        name: "pager",
      },
    },
    {
      name: "-B",
      description: "Specify which browser to use for HTML files",
      args: {
        name: "browser",
        default: "/usr/bin/less -is",
      },
    },
    {
      name: "-H",
      description: "Specify a command that renders HTML files as text",
      args: {
        name: "command",
        default: "/bin/cat",
      },
    },
    {
      name: "-S",
      description:
        "Specify a colon-separated list of manual sections to search",
      args: {
        name: "sections",
        generators: valueList({
          delimiter: ":",
          insertDelimiter: true,
          values: Object.entries(sections).map(([name, description]) => ({
            name,
            description,
            icon: "📑",
          })),
        }),
      },
    },
    {
      name: "-a",
      description: "Open every matching page instead of just the first",
    },
    {
      name: "-c",
      description:
        "Reformat the source page, even when an up-to-date cat-page exists",
    },
    {
      name: "-d",
      description: "Don't actually display the pages (dry run)",
    },
    {
      name: "-D",
      description: "Both display and print debugging info",
    },
    {
      name: "-f",
      description: "Equivalent to `whatis`",
    },
    {
      name: ["-F", "--preformat"],
      description: "Format only, do not display",
    },
    {
      name: "-h",
      description: "Print a help message and exit",
    },
    {
      name: "-k",
      description: "Equivalent to apropos",
    },
    {
      name: "-K",
      description: "Search for a given string in all pages",
    },
    {
      name: "-m",
      description:
        "Specify an alternate set of pages to search based on the system name given",
      args: {
        name: "system",
      },
    },
    {
      name: "-p",
      description:
        "Specify the sequence of preprocessors to run before nroff or troff",
      args: {
        name: "preprocessors",
      },
    },
    {
      name: "-t",
      description: "Use `/usr/bin/groff -Tps -mandoc -c` to format the page",
    },
    {
      name: ["-w", "--path"],
      description: "Print the location of files that would be displayed",
    },
    {
      name: "-W",
      description: "Print file locations, one per line",
    },
  ],
};

export default completionSpec;
