import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "typst",
  description: "The Typst compiler",
  icon: "📄",
  subcommands: [
    {
      name: ["compile", "c"],
      description: "Compiles an input file into a supported output format",
      icon: "📄",
      options: [
        {
          name: "--root",
          description: "Configures the project root (for absolute paths)",
          args: {
            name: "root",
            template: "folders",
          },
        },
        {
          name: "--font-path",
          description: "Adds additional directories to search for fonts",
          isRepeatable: true,
          args: {
            name: "font_paths",
            template: "filepaths",
          },
        },
        {
          name: "--diagnostic-format",
          description: "The format to emit diagnostics in",
          args: {
            name: "diagnostic_format",
            suggestions: ["human", "short"],
            default: "human",
          },
        },
        {
          name: ["-f", "--format"],
          description:
            "The format of the output file, inferred from the extension by default",
          args: {
            name: "format",
            suggestions: ["pdf", "png", "svg"],
          },
        },
        {
          name: "--open",
          description:
            "Opens the output file using the default viewer after compilation",
          args: {
            name: "open",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--ppi",
          description: "The PPI (pixels per inch) to use for PNG export",
          args: {
            name: "ppi",
            default: "144.0",
          },
        },
        {
          name: "--flamegraph",
          description: "Produces a flamegraph of the compilation process",
          args: {
            name: "flamegraph",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "input",
          description: "Path to input Typst file",
          generators: filepaths({
            extensions: ["typ"],
          }),
        },
        {
          name: "output",
          description: "Path to output file (PDF, PNG, or SVG)",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: ["watch", "w"],
      description: "Watches an input file and recompiles on changes",
      icon: "🔄",
      options: [
        {
          name: "--root",
          description: "Configures the project root (for absolute paths)",
          args: {
            name: "root",
            template: "folders",
          },
        },
        {
          name: "--font-path",
          description: "Adds additional directories to search for fonts",
          isRepeatable: true,
          args: {
            name: "font_paths",
            template: "filepaths",
          },
        },
        {
          name: "--diagnostic-format",
          description: "The format to emit diagnostics in",
          args: {
            name: "diagnostic_format",
            suggestions: ["human", "short"],
            default: "human",
          },
        },
        {
          name: ["-f", "--format"],
          description:
            "The format of the output file, inferred from the extension by default",
          args: {
            name: "format",
            suggestions: ["pdf", "png", "svg"],
          },
        },
        {
          name: "--open",
          description:
            "Opens the output file using the default viewer after compilation",
          args: {
            name: "open",
            isVariadic: true,
            isOptional: true,
          },
        },
        {
          name: "--ppi",
          description: "The PPI (pixels per inch) to use for PNG export",
          args: {
            name: "ppi",
            default: "144.0",
          },
        },
        {
          name: "--flamegraph",
          description: "Produces a flamegraph of the compilation process",
          args: {
            name: "flamegraph",
            isVariadic: true,
            isOptional: true,
            template: "filepaths",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "input",
          description: "Path to input Typst file",
          generators: filepaths({
            extensions: ["typ"],
          }),
        },
        {
          name: "output",
          description: "Path to output file (PDF, PNG, or SVG)",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "query",
      description: "Processes an input file to extract provided metadata",
      icon: "🔍",
      options: [
        {
          name: "--root",
          description: "Configures the project root (for absolute paths)",
          args: {
            name: "root",
            template: "folders",
          },
        },
        {
          name: "--font-path",
          description: "Adds additional directories to search for fonts",
          isRepeatable: true,
          args: {
            name: "font_paths",
            template: "filepaths",
          },
        },
        {
          name: "--diagnostic-format",
          description: "The format to emit diagnostics in",
          args: {
            name: "diagnostic_format",
            suggestions: ["human", "short"],
            default: "human",
          },
        },
        {
          name: "--field",
          description: "Extracts just one field from all retrieved elements",
          args: {
            name: "field",
          },
        },
        {
          name: "--format",
          description: "The format to serialize in",
          args: {
            name: "format",
            suggestions: ["json", "yaml"],
            default: "json",
          },
        },
        {
          name: "--one",
          description: "Expects and retrieves exactly one element",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: [
        {
          name: "input",
          description: "Path to input Typst file",
          generators: filepaths({
            extensions: ["typ"],
          }),
        },
        {
          name: "selector",
          description: "Defines which elements to retrieve",
        },
      ],
    },
    {
      name: "fonts",
      description: "Lists all discovered fonts in system and custom font paths",
      icon: "🔤",
      options: [
        {
          name: "--font-path",
          description: "Adds additional directories to search for fonts",
          isRepeatable: true,
          args: {
            name: "font_paths",
            template: "filepaths",
          },
        },
        {
          name: "--variants",
          description: "Also lists style variants of each font family",
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
    },
    {
      name: "update",
      description: "Self update the Typst CLI (disabled)",
      icon: "🆙",
      options: [
        {
          name: "--force",
          description:
            "Forces a downgrade to an older version (required for downgrading)",
          exclusiveOn: ["--revert"],
        },
        {
          // TODO: Make it impossible to use with one or more of the other specified arguments (e.g version)
          name: "--revert",
          description:
            "Reverts to the version from before the last update (only possible if `typst update` has previously ran)",
          exclusiveOn: ["--force"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help",
        },
      ],
      args: {
        name: "version",
        description: "Which version to update to (defaults to latest)",
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "Print this message or the help of the given subcommand(s)",
      icon: "ℹ️",
      subcommands: [
        {
          name: "compile",
          description: "Compiles an input file into a supported output format",
          icon: "📄",
        },
        {
          name: "watch",
          description: "Watches an input file and recompiles on changes",
          icon: "🔄",
        },
        {
          name: "query",
          description: "Processes an input file to extract provided metadata",
          icon: "🔍",
        },
        {
          name: "fonts",
          description:
            "Lists all discovered fonts in system and custom font paths",
          icon: "🔤",
        },
        {
          name: "update",
          description: "Self update the Typst CLI (disabled)",
          icon: "🆙",
        },
        {
          name: "help",
          description:
            "Print this message or the help of the given subcommand(s)",
          icon: "ℹ️",
        },
      ],
    },
  ],
  options: [
    {
      name: "--cert",
      description:
        "Path to a custom CA certificate to use when making network requests",
      args: {
        name: "cert",
        template: "filepaths",
      },
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the level of logging verbosity: -v = warning & error, -vv = info, -vvv = debug, -vvvv = trace",
      isRepeatable: 4,
    },
    {
      name: ["-h", "--help"],
      description: "Print help",
    },
    {
      name: ["-V", "--version"],
      description: "Print version",
    },
  ],
};

export default completionSpec;
