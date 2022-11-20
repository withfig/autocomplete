const colorOptions: Fig.Option = {
  name: "--colors",
  args: {
    name: "COLORS",
    default: "auto",
    suggestions: ["auto", "always", "never"],
  },
  description: "Set color values for the output",
};

const verboseOption: Fig.Option = {
  name: "--verbose",
  description: "Enable verbose logging format",
};

const completionSpec: Fig.Spec = {
  name: "taplo",
  description:
    "Tool for validation, formatting, and querying TOML documents with a jq-like fashion",
  subcommands: [
    {
      name: ["config", "cfg"],
      description: "Operations with the Taplo config file",
      options: [
        {
          name: ["--help", "-h"],
          description: "Print help information for config",
        },
        {
          name: "--log-spans",
          description: "Enable logging spans",
        },
        verboseOption,
        colorOptions,
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
      name: ["format", "fmt"],
      description: "Format TOML documents",
      args: {
        name: "FILES ...",
        description: "Paths or glob patterns to TOML documents",
        template: "filepaths",
        suggestCurrentToken: true,
        isOptional: true,
      },
      options: [
        {
          name: ["--config", "-c"],
          description: "Path to the Taplo configuration file",
          args: {
            name: "CONFIG",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--cache-path",
          description: "Set a cache path",
          args: {
            name: "CACHE_PATH",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--check",
          description: "Report any files that are not correctly formatted",
          args: {
            name: "CACHE_PATH",
            template: "filepaths",
            suggestCurrentToken: true,
            isOptional: true,
          },
        },
        colorOptions,
        {
          name: "--diff",
          description: "Print the differences in patch formatting to `stdout`",
        },
        {
          name: ["f", "--force"],
          description: "Force formatting of files",
          args: {
            name: "FILES ...",
            template: "filepaths",
            suggestCurrentToken: true,
            isOptional: true,
          },
        },
        {
          name: ["--help", "-h"],
          description: "Print help information for format",
        },
        {
          name: "--log-spans",
          description: "Enable logging spans",
        },
        {
          name: "--no-auto-config",
          description: "Do not search for a configuration file",
        },
        {
          name: ["--option", "-o"],
          description:
            "A formatter option given as a 'key=value', can be set multiple times",
          args: {
            name: "OPTIONS",
            suggestions: ["indent_tables=true", "indent_tables=false"],
          },
        },
        {
          name: "--stdin-filepath",
          description:
            "A path to the file that the taplo will treat like stdin",
          args: {
            name: "STDIN_FILEPATH",
            template: "filepaths",
            suggestCurrentToken: true,
          },
        },
        verboseOption,
      ],
    },

    {
      name: "get",
      description: "Extract a value from the given TOML document",
      options: [
        {
          name: ["--file-path", "-f"],
          description: "Path to the TOML document",
          args: {
            name: "FILE_PATH",
            template: "filepaths",
            suggestCurrentToken: true,
          },
          isRequired: true,
        },
        colorOptions,
        {
          name: ["--help", "-h"],
          description: "Print help information for get",
        },
        {
          name: "--log-spans",
          description: "Enable logging spans",
        },
        {
          name: ["-o", "--output-format"],
          description: "The format specifying how the output is printed",
          args: {
            name: "OUTPUT_FORMAT",
            default: "value",
            suggestions: ["value", "json", "toml"],
          },
        },
        {
          name: ["--strip-newline", "-s"],
          description: "Strip the trailing newline from the output",
        },
        verboseOption,
      ],
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
    verboseOption,
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
