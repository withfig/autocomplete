const sharedOpts: Record<string, Fig.Option> = {
  help: {
    name: ["-h", "--help"],
    description: "Displays help on commandline options",
  },
  helpAll: {
    name: "--help-all",
    description: "Displays help including Qt specific options",
  },
  verbose: {
    name: ["-v", "--verbose"],
    description:
      "Increase logging verbosity. Repeat the 'v' in the short option for more detail. Maximum verbosity is obtained with 4 (or more) v's, i.e. -vvvv",
  },
  format: {
    name: "--format",
    description:
      "Output list in the requested format. Valid formats are: table (default), json, csv and yaml",
    args: {
      name: "format",
      suggestions: ["table", "json", "csv", "yaml"],
      default: "table",
    },
  },
};

const completionSpec: Fig.Spec = {
  name: "multipass",
  description: "Create, control and connect to Ubuntu instances",
  subcommands: [
    {
      name: "alias",
      description: "Create an alias",
      args: [
        {
          name: "options",
          isOptional: true,
        },
        {
          name: "definition",
          description: "Alias definition in the form <instance>:<command>",
        },
        {
          isOptional: true,
          name: "name",
          description:
            "Name given to the alias being defined, defaults to <command>",
        },
      ],
      options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
    },
    {
      name: "aliases",
      description: "List available aliases",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        sharedOpts.format,
      ],
    },
    {
      name: "delete",
      description: "Delete instances",
      args: {
        isVariadic: true,
        name: "name",
        description: "Name of instances to delete",
      },
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        {
          name: "--all",
          description: "Delete all instances",
        },
        {
          name: ["-p", "--purge"],
          description: "Purge instances immediately",
        },
      ],
    },
    {
      name: "exec",
      description: "Run a command on an instance",
      args: [
        {
          name: "name",
          description: "Name of the instance to run the command on",
        },
        {
          name: "command",
          description: "Command to execute on the instance",
        },
      ],
      options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
    },
    {
      name: "find",
      description: "Display available images to create instances from",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        sharedOpts.format,
        {
          name: "--show-unsupported",
          description: "Show unsupported cloud images as well",
        },
      ],
      args: {
        name: "string",
        description:
          "An optional value to search for in [<remote:>]<string> format, where <remote> can be either 'release’ or 'daily’. If <remote> is omitted, it will search 'release' first, and if no matches are found, it will then search 'daily'. <string> can be a partial image hash or an Ubuntu release version, codename or alias",
      },
    },
    {
      name: "get",
      description: "Get a configuration setting",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        {
          name: "--raw",
          description:
            'Output in raw format. For now, this affects only the representation of empty values (i.e. "" instead of "<empty>")',
        },
      ],
      args: {
        name: "key",
        description:
          "Path to the setting whose configured value should be obtained",
        suggestions: [
          "client.gui.autostart",
          "client.gui.hotkey",
          "client.primary-name",
          "local.bridged-network",
          "local.driver",
          "local.privileged-mounts",
        ],
      },
    },
    {
      name: "help",
      description: "Display help about a command",
      options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
      args: {
        name: "command",
        description: "Name of command to display help for",
        isOptional: true,
      },
    },
    {
      name: "info",
      description: "Display information about instances",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        sharedOpts.format,
        {
          name: "--all",
          description: "Display info for all instances",
        },
      ],
      args: {
        isVariadic: true,
        name: "name",
        description: "Names of instances to display information about",
      },
    },
  ],
  options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
  // Only uncomment if multipass takes an argument
  // args: {}
};
export default completionSpec;
