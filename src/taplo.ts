const completionSpec: Fig.Spec = {
  name: "taplo",
  description:
    "Tool for validation, formatting, and querying TOML documents with a jq-like fashion",
  subcommands: [
    {
      name: "config",
      description: "Operations with the Taplo config file",
      options: [
        {
          name: "--colors",
          args: {
            name: "COLORS",
            default: "auto",
            suggestions: ["auto", "always", "never"],
          },
        },
        {
          name: ["--help", "-h"],
          description: "Print help information for config",
        },
        {
          name: "--log-spans",
          description: "Enable logging spans",
        },
        {
          name: "--verbose",
          description: "Enable verbose logging format",
        },
      ],
      subcommands: [
        {
          name: "default",
          description: "Print the default `.taplo.toml` configuration file",
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
        },
        {
          name: "schema",
          description:
            "Print the JSON schema of the `.taplo.toml` configuration file",
        },
      ],
    },

    {
      name: "format",
      description: "Format TOML documents",

      args: {
        name: "FILES ...",
        description: "Paths or glob patterns to TOML documents",
        template: "filepaths",
        suggestCurrentToken: true,
        isOptional: true,
      },
    },

    {
      name: "get",
      description: "Extract a value from the given TOML document",
    },
    {
      name: "help",
      description: "Print help information for taplo",
    },
    {
      name: "lint",
      description: "Lint a TOML documents",
      args: {
        name: "TOML file",
        template: "filepaths",
        suggestCurrentToken: true,
        isOptional: true,
      },
    },
    {
      name: "lsp",
      description: "Language server operations",
    },
    {
      name: "check",
      description:
        "Validate a TOML file , by default looks for syntax and semantic errors",
      args: {
        name: "file",
        description: "The TOML file to validate",
        template: "filepaths",
        suggestCurrentToken: true,
        isOptional: true,
      },
      options: [
        {
          name: "--schema",
          description: "The JSON schema to validate against",
          args: {
            name: "URL",
            template: "history",
          },
        },
      ],
    },
    {
      name: "fmt",
      description: "Format files in-place or via standard i/o",
      args: {
        name: "file",
        description: "The TOML file to validate",
        template: "filepaths",
        suggestCurrentToken: true,
        isOptional: true,
      },
      options: [
        {
          name: "--option",
          description: "Formatter options are read from the configuration file",
          args: {
            suggestions: ["indent_tables=true", "indent_tables=false"],
          },
        },
        {
          name: "--check",
          description:
            "Check whether the given files are properly formatted. When this flag is supplied, no formatting will be done",
          args: {
            suggestions: ["indent_tables=true", "indent_tables=false"],
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Print help information for taplo",
    },
    {
      name: ["--version", "-V"],
      description: "Print version information for taplo",
    },
    {
      name: "--verbose",
      description: "Enable verbose logging format",
    },
    {
      name: [
        "--colors <COLORS>",
        "[default: auto] [possible values: auto, always, never]",
      ],
    },
    {
      name: "--log-spans",
      description: "Enable logging of spans",
    },
  ],
  // Only uncomment if taplo takes an argument
  // args: {}
};
export default completionSpec;
