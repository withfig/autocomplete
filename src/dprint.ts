const helpSubcommand: Fig.Subcommand = {
  name: "help",
  description: "Prints the help of the given subcommand(s)",
  args: {
    name: "SUBCOMMAND",
    isVariadic: true,
    description: "The subcommand whose help message to display",
  },
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
};

const configurableCommandOptions: Fig.Option[] = [
  {
    name: "--excludes",
    description:
      "List of file patterns or directories in quotes to exclude when formatting. This overrides what is specified in the config file",
    args: {
      name: "pattern",
      template: ["filepaths", "folders"],
    },
    isRepeatable: true,
  },
  {
    name: "--allow-node-modules",
    description:
      "Allows traversing node module directories (unstable - This flag will be renamed to be non-node specific in the future)",
    icon: "fig://icon?type=npm",
  },
];

const checkCommandOptions: Fig.Option[] = [
  {
    name: "--incremental",
    description:
      "Only format files when they change. This may alternatively be specified in the configuration file",
    args: {
      name: "incremental",
      suggestions: ["true", "false"],
      isOptional: true,
    },
  },
  ...configurableCommandOptions,
];

const filesArgument: Fig.Arg = {
  name: "files",
  isVariadic: true,
  description:
    "List of file patterns in quotes to format. This overrides what is specified in the config file",
};

const completionSpec: Fig.Spec = {
  name: "dprint",
  description:
    "A pluggable and configurable code formatting platform written in Rust",
  requiresSubcommand: true,
  subcommands: [
    {
      name: "init",
      description: "Initializes a configuration file in the current directory",
      icon: "⚙️",
      priority: 60,
    },
    {
      name: "fmt",
      description:
        "Formats the source files and writes the result to the file system",
      icon: "🛠",
      args: filesArgument,
      priority: 76,
      options: [
        {
          name: "--diff",
          description: "Outputs a check-like diff of every formatted file",
          icon: `fig://template?badge=${encodeURIComponent("+-")}&color=ffffff`,
        },
        {
          name: "--stdin",
          description:
            "Format stdin and output the result to stdout. Provide an absolute file path to apply the inclusion and exclusion rules or an extension or file name to always format the text",
          args: {
            name: "extension/file-name/file-path",
            template: "filepaths",
          },
        },
        ...checkCommandOptions,
      ],
    },
    {
      name: "check",
      description: "Checks for any files that haven't been formatted",
      icon: "💬",
      args: filesArgument,
      options: checkCommandOptions,
      priority: 60,
    },
    {
      name: "config",
      description: "Functionality related to the configuration file",
      icon: "⚙️",
      priority: 60,
      subcommands: [
        {
          name: "add",
          description: "Adds a plugin to the configuration file",
          args: {
            name: "url-or-plugin-name",
          },
        },
        {
          name: "init",
          description:
            "Initializes a configuration file in the current directory",
        },
        {
          name: "update",
          description: "Updates the plugins in the configuration file",
          icon: "⤴️",
          options: [
            {
              name: ["-y", "--yes"],
              description:
                "Upgrade process plugins without prompting to confirm checksums",
            },
          ],
        },
        helpSubcommand,
      ],
      requiresSubcommand: true,
    },
    {
      name: "output-file-paths",
      description:
        "Prints the resolved file paths for the plugins based on the args and configuration",
      options: configurableCommandOptions,
      args: filesArgument,
    },
    {
      name: "output-resolved-config",
      description:
        "Prints the resolved configuration for the plugins based on the args and configuration",
    },
    {
      name: "output-format-times",
      description:
        "Prints the amount of time it takes to format each file. Use this for debugging",
      options: checkCommandOptions,
      args: filesArgument,
    },
    {
      name: "clear-cache",
      description: "Deletes the plugin cache directory",
    },
    {
      name: "upgrade",
      icon: "⤴️",
      description: "Upgrades the dprint executable",
      priority: 55,
    },
    {
      name: "license",
      description: "Outputs the software license",
    },
    helpSubcommand,
  ],
  options: [
    {
      name: ["-c", "--config"],
      icon: "⚙️",
      description:
        "Path or url to JSON configuration file. Defaults to dprint.json or .dprint.json in current or ancestor directory when not provided",
      args: {
        name: "config",
      },
      isPersistent: true,
    },
    {
      name: ["-h", "--help"],
      description: "Prints help information",
      isPersistent: true,
    },
    {
      name: "--plugins",
      icon: "🔌",
      description:
        "List of urls or file paths of plugins to use. This overrides what is specified in the config file",
      args: {
        name: "urls/files",
        template: "filepaths",
      },
      isRepeatable: true,
      isPersistent: true,
    },
    {
      name: "--verbose",
      icon: "📢",
      description: "Prints additional diagnostic information",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
