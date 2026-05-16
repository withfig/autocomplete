const completionSpec: Fig.Spec = {
  name: "rome",
  description: "Rome CLI",
  options: [
    {
      name: "--colors",
      description: "Set the formatting mode for markup",
      args: {
        name: "mode",
        suggestions: ["off", "force"],
      },
    },
    {
      name: "--use-server",
      description: "Connect to a running instance of the Rome daemon server",
    },
    {
      name: "--version",
      description: "Show the Rome version information and quit",
    },
    {
      name: "--files-max-size",
      description: "The maximum allowed size for source code files in bytes",
      args: {
        name: "BYTES",
      },
    },
  ],
  subcommands: [
    {
      name: "check",
      description: "Run the linter on a set of files",
      args: {
        name: "file, dir",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: "--apply",
          description: "Apply safe fixes",
        },
        {
          name: "--apply-unsafe",
          description: "Apply safe and unsafe fixes",
        },
        {
          name: "--max-diagnostics",
          description: "Cap the amount of diagnostics displayed",
          args: {
            name: "NUMBER",
          },
        },
        {
          name: "--config-path",
          description:
            "Set the filesystem path to the config dir of the rome.json file",
          args: {
            name: "dir",
            template: ["folders"],
            isVariadic: true,
          },
        },
        {
          name: "--verbose",
          description: "Print additional verbose advices on diagnostics",
        },
      ],
    },
    {
      name: "ci",
      description: "Run the linter and formatter check on a set of files",
      args: {
        name: "file, dir",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: "--formatter-enabled",
          description: "Allow to enable or disable the formatter check",
        },
        {
          name: "--linter-enabled",
          description: "Allow to enable or disable the linter check",
        },
        {
          name: "--organize-imports-enabled",
          description: "Allow to enable or disable the organize imports",
        },
        {
          name: "--max-diagnostics",
          description: "Cap the amount of diagnostics displayed",
          args: {
            name: "NUMBER",
          },
        },
        {
          name: "--config-path",
          description:
            "Set the filesystem path to the config dir of the rome.json file",
          args: {
            name: "dir",
            template: ["folders"],
            isVariadic: true,
          },
        },
        {
          name: "--verbose",
          description: "Print additional verbose advices on diagnostics",
        },
        {
          name: "--indent-style",
          description: "Change the indention character",
          args: {
            name: "style",
            suggestions: ["tabs", "space"],
          },
        },
        {
          name: "--indent-size",
          description: "How many spaces should be used for indentation",
          args: {
            name: "SIZE",
          },
        },
        {
          name: "--line-width",
          description:
            "How many characters the formatter is allowed to print in a single line",
          args: {
            name: "width",
          },
        },
        {
          name: "--quote-style",
          description: "Changes the quotation character for strings",
          args: {
            name: "style",
            suggestions: ["single", "double"],
          },
        },
        {
          name: "--quote-properties",
          description: "Changes when properties in object should be quoted",
          args: {
            name: "property",
            suggestions: ["as-needed", "preserve"],
          },
        },
        {
          name: "--trailing-comma",
          description:
            "Changes trailing commas in multi-line comma-separated syntactic structures",
          args: {
            name: "trailing",
            suggestions: ["all", "es5", "none"],
          },
        },
        {
          name: "--semicolons",
          description: "Changes when to print semicolons for statements",
          args: {
            name: "rule",
            suggestions: ["always", "as-needed"],
          },
        },
      ],
    },
    {
      name: "format",
      description: "Run the formatter on a set of files",
      args: {
        name: "file, dir",
        template: ["filepaths", "folders"],
        isVariadic: true,
      },
      options: [
        {
          name: "--write",
          description:
            "Edit the files in place (beware!) instead of printing the diff to the console",
        },
        {
          name: "--skip-errors",
          description:
            "Skip over files containing syntax errors instead of emitting an error diagnostic",
        },
        {
          name: "--max-diagnostics",
          description: "Cap the amount of diagnostics displayed",
          args: {
            name: "NUMBER",
          },
        },
        {
          name: "--config-path",
          description:
            "Set the filesystem path to the config dir of the rome.json file",
          args: {
            name: "dir",
            template: ["folders"],
            isVariadic: true,
          },
        },
        {
          name: "--verbose",
          description: "Print additional verbose advices on diagnostics",
        },
        {
          name: "--indent-style",
          description: "Change the indention character",
          args: {
            name: "style",
            suggestions: ["tabs", "space"],
          },
        },
        {
          name: "--indent-size",
          description: "How many spaces should be used for indentation",
          args: {
            name: "SIZE",
          },
        },
        {
          name: "--line-width",
          description:
            "How many characters the formatter is allowed to print in a single line",
          args: {
            name: "width",
          },
        },
        {
          name: "--quote-style",
          description: "Changes the quotation character for strings",
          args: {
            name: "style",
            suggestions: ["single", "double"],
          },
        },
        {
          name: "--quote-properties",
          description: "Changes when properties in object should be quoted",
          args: {
            name: "property",
            suggestions: ["as-needed", "preserve"],
          },
        },
        {
          name: "--trailing-comma",
          description:
            "Changes trailing commas in multi-line comma-separated syntactic structures",
          args: {
            name: "trailing",
            suggestions: ["all", "es5", "none"],
          },
        },
        {
          name: "--semicolons",
          description: "Changes when to print semicolons for statements",
          args: {
            name: "rule",
            suggestions: ["always", "as-needed"],
          },
        },
        {
          name: "--stdin-file-path",
          description:
            "A file name with its extension to pass when reading from standard in",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "init",
      description: "Bootstraps a new rome project",
    },
    {
      name: "start",
      description: "Start the Rome daemon server process",
    },
    {
      name: "stop",
      description: "Stop the Rome daemon server process",
    },
    {
      name: "lsp-proxy",
      description:
        "Acts as a server for the Language Server Protocol over stdin/stdout",
    },
    {
      name: "rage",
      description: "Prints information for debugging",
    },
    {
      name: "version",
      description: "Shows the Rome version information and quit",
    },
    {
      name: "help",
      description: "Prints help message",
    },
  ],
};

export default completionSpec;
