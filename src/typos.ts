const completionSpec: Fig.Spec = {
  name: "typos",
  description: "Source code spelling correction",
  args: {
    name: "path",
    template: ["filepaths", "folders"],
    isVariadic: true,
    isOptional: true,
    suggestions: [{ name: "-", hidden: true, description: "Read from stdin" }],
  },
  options: [
    {
      name: ["-c", "--config"],
      args: { name: "path", template: "filepaths" },
      description: "Custom config file",
    },
    { name: "--isolated", description: "Ignore implicit configuration files" },
    { name: "--diff", description: "Print a diff of what would change" },
    { name: ["-w", "--write-changes"], description: "Write fixes out" },
    {
      name: "--files",
      description: "Debug: Print each file that would be spellchecked",
    },
    {
      name: "--identifiers",
      description: "Debug: Print each identifier that would be spellchecked",
    },
    {
      name: "--words",
      description: "Debug: Print each word that would be spellchecked",
    },
    {
      name: "--dump-config",
      args: {
        name: "path",
        template: "filepaths",
        suggestions: [
          { name: "-", hidden: true, description: "Print to stdout" },
        ],
      },
      description:
        "Write the current configuration to file with `-` for stdout",
    },
    { name: "--type-list", description: "Show all supported file types" },
    {
      name: "--format",
      args: {
        name: "format",
        suggestions: ["silent", "brief", "long", "json"],
      },
      description: "Set the output format",
    },
    {
      name: ["-j", "--threads"],
      args: { name: "number" },
      description: "The approximate number of threads to use",
    },
    {
      name: "--exclude",
      args: { name: "glob" },
      description: "Ignore files & directories matching the glob",
    },
    { name: "--hidden", description: "Search hidden files and directories" },
    { name: "--no-ignore", description: "Don't respect ignore files" },
    { name: "--no-ignore-dot", description: "Don't respect .ignore files" },
    {
      name: "--no-ignore-global",
      description: "Don't respect global ignore files",
    },
    {
      name: "--no-ignore-parent",
      description: "Don't respect ignore files in parent directories",
    },
    {
      name: "--no-ignore-vcs",
      description: "Don't respect ignore files in vcs directories",
    },
    { name: "--binary", description: "Search binary files" },
    {
      name: "--no-check-filenames",
      description: "Skip verifying spelling in file names",
    },
    {
      name: "--no-check-files",
      description: "Skip verifying spelling in files",
    },
    {
      name: "--no-unicode",
      description: "Only allow ASCII characters in identifiers",
    },
    {
      name: "--locale",
      args: {
        name: "locale",
        suggestions: ["en", "en-us", "en-gb", "en-ca", "en-au"],
      },
      description: "Set the locale to use",
    },
    {
      name: "--color",
      args: { name: "when", suggestions: ["auto", "always", "never"] },
      description: "Controls when to use color",
    },
    { name: ["-v", "--verbose"], description: "More output per occurrence" },
    { name: ["-q", "--quiet"], description: "Less output per occurrence" },
    { name: ["-h", "--help"], description: "Print help information" },
    { name: ["-V", "--version"], description: "Print version information" },
  ],
};

export default completionSpec;
