// Linux incompatible

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

const sectionIcon = "📑";

const sectionNames = new Set(Object.keys(sections));

let loginShell: string | undefined;

const generateManualPages: Fig.Generator = {
  trigger: (curr, prev) => curr.length === 0 && prev.length > 0,
  custom: async (tokens, executeShellCommand) => {
    // Fish has a lot of extra man pages, if the login shell is fish
    // then use its manpath instead of the default
    if (!loginShell) {
      const out = await executeShellCommand(
        "dscl . read /Users/$(id -un) UserShell"
      );
      loginShell = out.slice("UserShell: ".length);
    }
    const manpathCommand = loginShell.endsWith("fish")
      ? `"${loginShell}" -NPc 'man -w'`
      : "man -w";

    // If the previous token was a section, we want to search for it
    const maybeSection = tokens[tokens.length - 2];
    const sectionGlob = sectionNames.has(maybeSection) ? maybeSection : "[18]";
    const out = await executeShellCommand(
      `while IFS=':' read -ra manpath; do for path in "\${manpath[@]}"; do \\ls -1 "$path/man"${sectionGlob} 2>/dev/null; done; done <<< "$(${manpathCommand})" | sort -u`.trim()
    );

    const suggestions: Fig.Suggestion[] = [];
    for (const line of out.split("\n")) {
      const lastDot = line.lastIndexOf(".");
      // Output includes directories, empty lines, and non-man-pages
      if (
        line.length === 0 ||
        line.startsWith("/") ||
        !sectionNames.has(line[lastDot + 1])
      ) {
        continue;
      }
      suggestions.push({
        name: line.slice(0, lastDot),
        priority: /^[a-z]/.test(line) ? 51 : 50,
        description: "Manual page",
        icon: "fig://icon?type=string",
      });
    }
    return suggestions;
  },
};

const completionSpec: Fig.Spec = {
  name: "man",
  description: "Format and display the on-line manual pages",
  args: {
    isVariadic: true,
    generators: generateManualPages,
    suggestions: Object.entries(sections).map(([number, topic]) => ({
      name: number,
      insertValue: `${number} {cursor}`,
      description: `Section ${number}: ${topic}`,
      priority: 49,
      icon: sectionIcon,
    })),
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
        generators: {
          getQueryTerm: ":",
          custom: async (tokens) =>
            Object.entries(sections)
              .filter(([name]) => !tokens[tokens.length - 1].includes(name))
              .map(([name, description]) => ({
                name,
                description,
                insertValue: name + ":",
                icon: sectionIcon,
              })),
        },
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
