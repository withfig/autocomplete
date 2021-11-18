/**
 * The signature of the `postProcess` function in a `languagesGenerator`.
 *
 * `langs` is a record of file extension to the kind of file it is recognised
 * as.
 */
type LanguageProcessor = (langs: Record<string, string>) => Fig.Suggestion[];

/**
 * A standard `Fig.Generator`, without the "script" and "postProcess"
 * properties.
 */
type NoScriptGen = Omit<Fig.Generator, "script" | "postProcess">;

/**
 * A `Fig.Generator` without the script property and a `LanguageProcessor` for
 * its `postProcess`.
 */
type LanguagesGenerator = NoScriptGen & { postProcess: LanguageProcessor };

/**
 * Create a `Fig.Generator` where `postProcess` will be given a record of file
 * extension to language name instead of the output of running `script`.
 *
 * Use it in place of an object literal.
 *
 * @example
 * ```typescript
 * // suggests only file extensions
 * const gen: Fig.Generator = languagesGenerator({
 *   postProcess: (languages) => {
 *     return Object.keys(languages).map((key) => ({ name: key }));
 *   },
 * });
 * ```
 */
function languagesGenerator(init: LanguagesGenerator): Fig.Generator {
  return {
    ...init,
    // Every line follows the pattern of `Language Name (ext1[,ext2,ext3])`
    script: "scc --languages",
    postProcess: (out: string) => {
      const lines = out.split("\n");
      const languages: Record<string, string> = {};
      for (const line of lines) {
        const match = line.match(/(.*) \((.*)\)/);
        const lang = match[1];
        const exts = match[2].split(",");
        for (const ext of exts) {
          languages[ext] = lang;
        }
      }
      return init.postProcess(languages);
    },
  };
}

const completionSpec: Fig.Spec = {
  name: "scc",
  description:
    "Sloc, Cloc and Code. Count lines of code in a directory with complexity estimation",
  options: [
    {
      name: "--avg-wage",
      description: "Average salary value used for basic COCOMO calculation",
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
        'Change COCOMO model type (allows custom models, eg. "name,1,1,1,1")',
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
        'Count extension as language [e.g. jsp:htm,chead:"C Header" maps extension jsp to html and chead to C Header]',
      // TODO: contextual suggestions (this will use `languagesGenerator`)
      //       (trigger on ':', remove on ',')
      args: {
        name: "string",
      },
    },
    { name: "--debug", description: "Enable debug output" },
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
        suggestions: [
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
        ],
      },
    },
    {
      name: "--format-multi",
      description:
        "Have multiple format output overriding --format [e.g. tabular:stdout,csv:file.csv,json:file.json]",
      // TODO: contextual suggestions.
      // suggest formats immediately, then files on `:`, then reset to formats on `,`
      args: {
        name: "string",
      },
    },
    {
      name: "--gen",
      description: "Identify generated files",
    },
    {
      name: "--generated-markers",
      description: "String markers in head of generated files",
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
        generators: languagesGenerator({
          getQueryTerm: ",",
          postProcess: (languages) =>
            Object.entries(languages).map(([extension, language]) => ({
              name: extension,
              description: language,
              icon: "fig://icon?type=string",
            })),
        }),
      },
    },
    {
      name: "--include-symlinks",
      description: "If set will count symlink files",
    },
    {
      name: ["-l", "--languages"],
      description: "Print supported languages and extensions",
    },
    {
      name: "--large-byte-count",
      description:
        "Number of bytes a file can contain before being removed from output",
      args: {
        name: "int",
        default: "1000000",
      },
    },
    {
      name: "--large-line-count",
      description:
        "Number of lines a file can contain before being removed from output",
      args: {
        name: "int",
        default: "40000",
      },
    },
    { name: "--min", description: "Identify minified files" },
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
      description: "Remove COCOMO calculation output",
    },
    {
      name: ["-c", "--no-complexity"],
      description: "Skip calculation of code complexity",
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
        "Ignore files over certain byte and line size set by max-line-count and max-byte-count",
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
        'Inspect every file and remap by checking for a string and remapping the language [e.g. "-*- C++ -*-":",C Header"]',
      args: {
        name: "string",
      },
    },
    {
      name: "--remap-unknown",
      insertValue: "--remap-unknown '{cursor}'",
      description:
        'Inspect files of unknown type and remap by checking for a string and remapping the language [e.g. "-*- C++ -*-":"C Header"]',
      args: {
        name: "string",
      },
    },
    {
      name: "--size-unit",
      description: "Set size unit",
      args: {
        name: "string",
        default: "si",
        suggestions: [
          { name: "si", icon: "fig://icon?type=string" },
          { name: "binary", icon: "fig://icon?type=string" },
          { name: "mixed", icon: "fig://icon?type=string" },
          { name: "xkcd-kb", icon: "fig://icon?type=string" },
          { name: "xkcd-kelly", icon: "fig://icon?type=string" },
          { name: "xkcd-imaginary", icon: "fig://icon?type=string" },
          { name: "xkcd-intel", icon: "fig://icon?type=string" },
          { name: "xkcd-drive", icon: "fig://icon?type=string" },
          { name: "xkcd-bakers", icon: "fig://icon?type=string" },
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
        "Use supplied name as the project identifier for the current run. Only valid with the --format sql or sql-insert option",
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
  },
};

export default completionSpec;
