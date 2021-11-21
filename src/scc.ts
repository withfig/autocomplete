/** The output of processing `scc --languages` */
interface SccLanguages {
  /** A map of file extension to language name. */
  files: Record<string, string>;
  /** An array of language names. */
  langs: string[];
}

/** Process the output of `scc --languages`. */
function processSccLanguages(out: string): SccLanguages {
  const languages: SccLanguages = {
    files: {},
    langs: [],
  };
  // All lines are in the form of 'Languages (ext1,ext2,...)'
  const matches = out.matchAll(/^(.*) \((.*)\)$/gm);
  for (const match of matches) {
    const name = match[1];
    languages.langs.push(name);
    const exts = match[2].split(",");
    for (const ext of exts) {
      languages.files[ext] = name;
    }
  }
  return languages;
}

/** Get the index of the last `:` or `,` in a string */
function lastColonOrComma(token: string) {
  const colonIdx = token.lastIndexOf(":");
  const commaIdx = token.lastIndexOf(",");
  const lastPunctuationIdx = Math.max(colonIdx, commaIdx);
  return lastPunctuationIdx;
}

/** Trigger when the index of the last colon or comma has changed. */
const triggerColonComma: Fig.Generator["trigger"] = (newToken, oldToken) => {
  const newTokenIdx = lastColonOrComma(newToken);
  const oldTokenIdx = lastColonOrComma(oldToken);
  return newTokenIdx !== oldTokenIdx;
};

/** Make the query term everything after the last colon or comma. */
const getQueryTermColonComma: Fig.Generator["getQueryTerm"] = (token) => {
  const lastPunctuationIdx = lastColonOrComma(token);
  return token.slice(lastPunctuationIdx + 1);
};

/**
 * In a comma-separated key:value string, check if the final term (the part the
 * user is writing) is a key.
 */
function finalTermIsKey(token: string) {
  const lastPunctuationIdx = lastColonOrComma(token);
  const lastPunctuation = token[lastPunctuationIdx];
  // If we're writing a file extension, suggest known extensions
  return lastPunctuationIdx === -1 || lastPunctuation === ",";
}

/**
 * Used for --remap-all and --remap-unknown. This is factored out into its
 * own value because it is shared by two options.
 *
 * Suggests nothing while the user is entering the string, and suggests
 * language names when required.
 *
 * Even though the user is entering an arbitrary string, it's okay
 * to be dumb about parsing colons and commas because SCC just calls
 * `strings.Split` on the input.
 * https://github.com/boyter/scc/blob/cb04a8d/processor/workers.go#L500-L501
 */
const remapGenerator: Fig.Generator = {
  trigger: triggerColonComma,
  getQueryTerm: getQueryTermColonComma,
  script: "scc --languages",
  postProcess: (out, tokens) => {
    const { langs } = processSccLanguages(out);
    const lastToken = tokens[tokens.length - 1];

    // If we're writing a string, suggest nothing
    if (finalTermIsKey(lastToken)) {
      return [];
    }

    // We're writing a language name, suggest names
    return langs.map((lang) => ({ name: lang }));
  },
};

/** The formats that SCC can output. */
const formats = [
  { name: "tabular", icon: "fig://icon?type=string" },
  { name: "wide", icon: "fig://icon?type=string" },
  { name: "json", icon: "fig://icon?type=string" },
  { name: "csv", icon: "fig://icon?type=string" },
  { name: "csv-stream", icon: "fig://icon?type=string" },
  { name: "cloc-yaml", icon: "fig://icon?type=string" },
  { name: "html", icon: "fig://icon?type=string" },
  { name: "html-table", icon: "fig://icon?type=string" },
  { name: "sql", icon: "fig://icon?type=string" },
  { name: "sql-insert", icon: "fig://icon?type=string" },
] as Fig.Suggestion[];

/**
 * Size of the Drivemaker's Kilobyte. Starting at 908 bytes 2013,
 * shrinking by 4 each year for marketing reasons.
 *
 * @see https://xkcd.com/394
 *
 * Adapted from SCC source:
 * https://github.com/boyter/scc/blob/9f2bb6b/processor/formatters.go#L1057-L1063
 */
const xkcdDrive = 908 - (new Date().getFullYear() - 2013) * 4;

const completionSpec: Fig.Spec = {
  name: "scc",
  description:
    "Sloc, Cloc and Code. Count lines of code in a directory with complexity estimation",
  options: [
    {
      name: "--avg-wage",
      description: "Average salary value used for COCOMO calculations",
      args: {
        name: "int",
        default: "56286",
      },
    },
    {
      name: "--binary",
      description: "Disable binary file detection",
    },
    {
      name: "--by-file",
      description: "Display output for every file",
    },
    {
      name: "--ci",
      description: "Enable CI output settings where stdout is ASCII",
    },
    {
      name: "--cocomo-project-type",
      description:
        'Change the COCOMO model type (allows custom models, eg. "name,1,1,1,1")',
      args: {
        name: "string",
        default: "organic",
        suggestions: [
          { name: "organic", icon: "fig://icon?type=string" },
          { name: "semi-detached", icon: "fig://icon?type=string" },
          { name: "embedded", icon: "fig://icon?type=string" },
        ],
      },
    },
    {
      name: "--count-as",
      description:
        "Count a file extension as a language (comma-separated key:value list, eg. jst:js,tpl:Markdown)",
      args: {
        name: "string",
        generators: {
          trigger: triggerColonComma,
          getQueryTerm: getQueryTermColonComma,
          script: "scc --languages",
          postProcess: (out, tokens) => {
            const { files, langs } = processSccLanguages(out);
            const lastToken = tokens[tokens.length - 1];

            // If we're writing a file extension, suggest known extensions
            if (finalTermIsKey(lastToken)) {
              return Object.entries(files).map(([ext, name]) => ({
                name: ext,
                description: name,
              }));
            }

            // We're writing a language name
            return langs.map((lang) => ({ name: lang }));
          },
        },
      },
    },
    {
      name: "--debug",
      description: "Enable debug output",
    },
    {
      name: "--exclude-dir",
      description: "Directories to exclude",
      args: {
        name: "strings",
        generators: {
          template: "folders",
          getQueryTerm: ",",
        },
      },
    },
    {
      name: "--file-gc-count",
      description: "Number of files to parse before turning the GC on",
      args: {
        name: "int",
        default: "10000",
      },
    },
    {
      name: ["-f", "--format"],
      description: "Set output format",
      args: {
        name: "string",
        default: "tabular",
        suggestions: formats,
      },
    },
    {
      name: "--format-multi",
      description:
        "Multiple outputs with different formats (comma-separated key:value list, eg. tabular:stdout,csv:scc.csv)",
      args: {
        name: "string",
        generators: {
          trigger: triggerColonComma,
          getQueryTerm: getQueryTermColonComma,
          custom: async (tokens, executeShellCommand) => {
            const lastToken = tokens[tokens.length - 1];

            // If we're writing a format, suggest supported formats
            if (finalTermIsKey(lastToken)) {
              return formats;
            }

            // We're writing an output, suggest stdout
            const out = await executeShellCommand("ls -lAF1");
            const suggestions: Fig.Suggestion[] = out
              .split("\n")
              .map((file) => ({
                name: file.slice(file.lastIndexOf("/") + 1),
                icon: `fig://${file}`,
              }));
            suggestions.push({ name: "stdout", priority: 51 });
            return suggestions;
          },
        },
      },
    },
    {
      name: "--gen",
      description: "Identify generated files",
    },
    {
      name: "--generated-markers",
      insertValue: "--generated-markers '{cursor}'",
      description:
        "Identify generated files by the presence of a string (comma-separated list)",
      args: {
        name: "strings",
        default: "do not edit,<auto-generated />",
      },
    },
    {
      name: ["-h,", "--help"],
      description: "Help for scc",
    },
    {
      name: ["-i", "--include-ext"],
      description: "Limit to these file extensions (comma-separated list)",
      args: {
        name: "strings",
        generators: {
          getQueryTerm: ",",
          script: "scc --languages",
          postProcess: (out) => {
            const { files } = processSccLanguages(out);
            return Object.entries(files).map(([ext, lang]) => ({
              name: ext,
              description: lang,
              icon: "fig://icon?type=string",
            }));
          },
        },
      },
    },
    {
      name: "--include-symlinks",
      description: "Count symbolic links",
    },
    {
      name: ["-l", "--languages"],
      description: "Print supported languages and extensions",
    },
    {
      name: "--large-byte-count",
      description: "Number of bytes a file can contain before being omitted",
      args: {
        name: "int",
        default: "1000000",
      },
    },
    {
      name: "--large-line-count",
      description: "Number of lines a file can contain before being omitted",
      args: {
        name: "int",
        default: "40000",
      },
    },
    {
      name: "--min",
      description: "Identify minified files",
    },
    {
      name: ["-z", "--min-gen"],
      description: "Identify minified or generated files",
    },
    {
      name: "--min-gen-line-length",
      description:
        "Number of bytes per average line for file to be considered minified or generated",
      args: {
        name: "int",
        default: "255",
      },
    },
    {
      name: "--no-cocomo",
      description: "Skip COCOMO calculation",
    },
    {
      name: ["-c", "--no-complexity"],
      description: "Skip code complexity calculation",
    },
    {
      name: ["-d", "--no-duplicates"],
      description: "Remove duplicate files from stats and output",
    },
    {
      name: "--no-gen",
      description: "Ignore generated files in output (implies --gen)",
    },
    {
      name: "--no-gitignore",
      description: "Disables .gitignore file logic",
    },
    {
      name: "--no-ignore",
      description: "Disables .ignore file logic",
    },
    {
      name: "--no-large",
      description:
        "Ignore files over certain byte and line size set by --max-line-count and --max-byte-count",
    },
    {
      name: "--no-min",
      description: "Ignore minified files in output (implies --min)",
    },
    {
      name: "--no-min-gen",
      description:
        "Ignore minified or generated files in output (implies --min-gen)",
    },
    {
      name: "--no-size",
      description: "Remove size calculation output",
    },
    {
      name: ["-M", "--not-match"],
      insertValue: "-M '{cursor}'",
      description: "Ignore files and directories matching regular expression",
      args: {
        name: "regex",
      },
    },
    {
      name: ["-o", "--output"],
      description: "Output filename (defaults to stdout if not provided)",
      args: {
        name: "string",
        template: "filepaths",
      },
    },
    {
      name: "--remap-all",
      description:
        'Inspect every file and set its type by checking for a string (comma-separated key:value list, eg. "-*- C++ -*-":"C Header")',
      args: {
        name: "string",
        generators: remapGenerator,
      },
    },
    {
      name: "--remap-unknown",
      description:
        'Inspect files of unknown type and set its type by checking for a string (comma-separated key:value list, eg. "-*- C++ -*-":"C Header")',
      args: {
        name: "string",
        generators: remapGenerator,
      },
    },
    {
      name: "--size-unit",
      description: "Set the unit used for file size output",
      args: {
        name: "string",
        description: "See https://xkcd.com/394/",
        default: "si",
        suggestions: [
          {
            name: "si",
            icon: "fig://icon?type=string",
            description: "1000^2 bytes",
          },
          {
            name: "binary",
            icon: "fig://icon?type=string",
            description: "1024^2 bytes",
          },
          {
            name: "mixed",
            icon: "fig://icon?type=string",
            description: "1,024,000 bytes (Binary kilobytes, SI megabytes)",
          },
          {
            name: "xkcd-kb",
            icon: "fig://icon?type=string",
            description: "1000 bytes during leap years, 1024 otherwise",
          },
          {
            name: "xkcd-kelly",
            icon: "fig://icon?type=string",
            description:
              "1012 bytes (a compromise between 1000 and 1024 bytes)",
          },
          {
            name: "xkcd-imaginary",
            icon: "fig://icon?type=string",
            description: "1024*sqrt(-1) bytes (used in quantum computing)",
          },
          {
            name: "xkcd-intel",
            icon: "fig://icon?type=string",
            description: "1023.937528 bytes (calculated on Pentium FPU)",
          },
          {
            name: "xkcd-drive",
            icon: "fig://icon?type=string",
            description: `Currently ${xkcdDrive} bytes (shrinks by 4 each year for marketing reasons)`,
          },
          {
            name: "xkcd-bakers",
            icon: "fig://icon?type=string",
            description:
              "1152 bytes (9 bits per byte, because you're such a good customer)",
          },
        ],
      },
    },
    {
      name: ["-s", "--sort"],
      description: "Column to sort by",
      args: {
        name: "string",
        default: "files",
        suggestions: [
          { name: "files", icon: "fig://icon?type=string" },
          { name: "name", icon: "fig://icon?type=string" },
          { name: "lines", icon: "fig://icon?type=string" },
          { name: "blanks", icon: "fig://icon?type=string" },
          { name: "code", icon: "fig://icon?type=string" },
          { name: "comments", icon: "fig://icon?type=string" },
          { name: "complexity", icon: "fig://icon?type=string" },
        ],
      },
    },
    {
      name: "--sql-project",
      description:
        "Use supplied name as the project identifier for the current run. Only valid with the '--format sql' or '--format sql-insert' option",
      args: {
        name: "string",
      },
    },
    {
      name: ["-t", "--trace"],
      description:
        "Enable trace output (not recommended when processing multiple files)",
    },
    {
      name: ["-v", "--verbose"],
      description: "Verbose output",
    },
    {
      name: "--version",
      description: "Version for scc",
    },
    {
      name: ["-w", "--wide"],
      description:
        "Wider output with additional statistics (implies --complexity)",
    },
  ],
  args: {
    name: "files or directories",
    template: ["filepaths", "folders"],
    isOptional: true,
    isVariadic: true,
  },
};

export default completionSpec;
