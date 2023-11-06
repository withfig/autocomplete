const languageGenerator: Fig.Generator = {
  script: ["tokei", "--languages"],
  splitOn: "\n",
};

const compleation: Fig.Spec = {
  name: "tokei",
  description: "Count your code, quickly",
  options: [
    {
      name: ["-f", "--files"],
      description: "Will print out statistics on individual files",
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
    },
    {
      name: "--hidden",
      description: "Count hidden files",
    },
    {
      name: ["-l", "--languages"],
      description: "Prints out supported languages and their extensions",
    },
    {
      name: "--no-ignore",
      description: "Don't respect ignore files (.gitignore, .ignore, etc.)",
    },
    {
      name: "--no-ignore-dot",
      description:
        "Don't respect .ignore and .tokeignore files, including those in parent directories",
    },
    {
      name: "--no-ignore-parent",
      description:
        "Don't respect ignore files (.gitignore, .ignore, etc.) in parent directories",
    },
    {
      name: "--no-ignore-vcs",
      description:
        "Don't respect VCS ignore files (.gitignore, .hgignore, etc.), including those in parent directories",
    },
    {
      name: ["-V", "--version"],
      description: "Prints version information",
    },
    {
      name: ["-v", "--verbose"],
      description: "Set log output level:",
      isRepeatable: 3,
    },
    {
      name: ["-c", "--columns"],
      description:
        "Sets a strict column width of the output, only available for terminal output",
      args: {
        name: "columns",
      },
    },
    {
      name: ["-e", "--exclude"],
      description: "Ignore all files & directories matching the pattern",
      isRepeatable: true,
      args: {
        name: "exclude",
        template: "filepaths",
      },
    },
    {
      name: ["-i", "--input"],
      description:
        'Gives statistics from a previous tokei run. Can be given a file path, or "stdin" to read from stdin',
      args: {
        name: "input",
        suggestions: ["stdin"],
        template: "filepaths",
      },
    },
    {
      name: ["-o", "--output"],
      description: "Outputs Tokei in a specific format",
      args: {
        name: "output",
        suggestions: ["cbor", "json", "yaml"],
      },
    },
    {
      name: ["-s", "--sort"],
      description: "Sort languages based on column",
      args: {
        name: "sort",
        suggestions: ["files", "lines", "blanks", "code", "comments"],
      },
    },
    {
      name: ["-t", "--type"],
      description:
        "Filters output by language type, seperated by a comma. i.e. -t=Rust,Markdown",
      args: {
        name: "type",
        generators: languageGenerator,
      },
    },
  ],
};

export default compleation;
