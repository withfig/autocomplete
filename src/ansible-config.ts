const completionSpec: Fig.Spec = {
  name: "ansible-config",
  description: "View ansible configuration",
  subcommands: [
    {
      name: "list",
      description: "List and output available configs",
      options: [
        {
          name: ["--config", "-c"],
          description:
            "Path to configuration file, defaults to first file found in precedence",
          args: {
            name: "CONFIG_FILE",
            description: "Path to configuration file",
            isDangerous: false,
            template: ["filepaths"],
          },
        },
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",
            isDangerous: false,
            suggestions: [
              "all",
              "base",
              "become",
              "cache",
              "callback",
              "cliconf",
              "connection",
              "httpapi",
              "inventory",
              "lookup",
              "netconf",
              "shell",
              "vars",
            ],
            default: "all",
          },
        },
      ],
    },
    {
      name: "dump",
      description:
        "Shows the current settings, merges ansible.cfg if specified",
      options: [
        {
          name: ["--only-changed", "--changed-only"],
          description:
            "Only show configurations that have changed from the default",
          args: {
            isDangerous: false,
            isOptional: true,
          },
        },
        {
          name: ["--config", "-c"],
          description:
            "Path to configuration file, defaults to first file found in precedence",
          args: {
            name: "CONFIG_FILE",
            description: "Path to configuration file",
            isDangerous: false,
            template: ["filepaths"],
          },
        },
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",
            isDangerous: false,
            suggestions: [
              "all",
              "base",
              "become",
              "cache",
              "callback",
              "cliconf",
              "connection",
              "httpapi",
              "inventory",
              "lookup",
              "netconf",
              "shell",
              "vars",
            ],
            default: "all",
          },
        },
      ],
    },
    {
      name: "view",
      description: "Displays the current config file",
      options: [
        {
          name: ["--config", "-c"],
          description:
            "Path to configuration file, defaults to first file found in precedence",
          args: {
            name: "CONFIG_FILE",
            description: "Path to configuration file",
            isDangerous: false,
            template: ["filepaths"],
          },
        },
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",
            isDangerous: false,
            suggestions: [
              "all",
              "base",
              "become",
              "cache",
              "callback",
              "cliconf",
              "connection",
              "httpapi",
              "inventory",
              "lookup",
              "netconf",
              "shell",
              "vars",
            ],
            default: "all",
          },
        },
      ],
    },
    {
      name: "init",
      description: "Initializes a new config file (to stdout)",
      options: [
        {
          name: "--disabled",
          description:
            "Prefixes all entries with a comment character to disable them",
          args: {
            isDangerous: false,
            isOptional: true,
          },
        },
        {
          name: ["--format", "-f"],
          description: "Output format for init",
          args: {
            name: "FORMAT",
            description: "Output format",
            isDangerous: false,
            isOptional: true,
            suggestions: ["ini", "env", "vars"],
            default: "ini",
          },
        },
        {
          name: ["--config", "-c"],
          description:
            "Path to configuration file, defaults to first file found in precedence",
          args: {
            name: "CONFIG_FILE",
            description: "Path to configuration file",
            isDangerous: false,
            template: ["filepaths"],
          },
        },
        {
          name: ["--type", "-t"],
          description: "Filter down to a specific plugin type",
          args: {
            name: "TYPE",
            description: "Plugin type",
            isDangerous: false,
            suggestions: [
              "all",
              "base",
              "become",
              "cache",
              "callback",
              "cliconf",
              "connection",
              "httpapi",
              "inventory",
              "lookup",
              "netconf",
              "shell",
              "vars",
            ],
            default: "all",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--version",
      description:
        "Shows version number, config file location, module search path, module location, executable location and exit",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: ["--help", "-h"],
      description: "Show help and exit",
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "--verbose",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      exclusiveOn: ["-v"],
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
    {
      name: "-v",
      description:
        "Verbose mode (-vvv for more, -vvvv to enable connection debugging)",
      isRepeatable: 5,
      exclusiveOn: ["--verbose"],
      args: {
        isOptional: true,
        isDangerous: false,
      },
    },
  ],
};
export default completionSpec;
