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
        {
          name: "--format",
          description:
            "Output list in the requested format. Valid formats are: table (default), json, csv and yaml",
          args: {
            name: "format",
            suggestions: ["table", "csv", "json", "yaml"],
          },
        },
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
  ],
  options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
  // Only uncomment if multipass takes an argument
  // args: {}
};
export default completionSpec;
