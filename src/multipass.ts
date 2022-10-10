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

const multipassGenerators: Record<string, Fig.Generator> = {
  allInstances: {
    script: "multipass list --format=csv | tail -n +2 | cut -d, -f1",
    postProcess: (out) => {
      return out.split("\n").map((instance) => {
        const instanceSplit = instance.split(",");
        return {
          name: instanceSplit[0],
          description: instanceSplit[4],
        };
      });
    },
  },
  allAvailableImages: {
    script: "multipass find --format=csv | tail -n +2",
    postProcess: (out) => {
      return out.split("\n").map((image) => {
        const imageSplit = image.split(",");
        return {
          name: imageSplit[0],
          description: imageSplit[3] + " " + imageSplit[4],
        };
      });
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
    {
      name: "launch",
      description: "Create and start an Ubuntu instance",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        {
          name: ["-c", "--cpus"],
          description: "Number of CPUs to allocate. Minimum: 1, default: 1",
          args: {
            name: "cpus",
            default: "1",
          },
        },
        {
          name: ["-d", "--disk"],
          description:
            "Disk space to allocate. Positive integers, in bytes, or with K, M, G suffix",
          args: {
            name: "disk",
          },
        },
        {
          name: ["-m", "--mem"],
          description:
            "Amount of memory to allocate. Positive integers, in bytes, or with K, M, G suffix",
        },
        {
          name: ["-n", "--name"],
          description:
            "Name for the instance. If it is 'primary' (the configured primary instance name), the user's home directory is mounted inside the newly launched instance, in 'Home'",
        },
        {
          name: "--cloud-init",
          description:
            "Path to a user-data cloud-init configuration, or '-' for stdin",
          args: {
            name: "file",
          },
        },
        {
          name: "--network",
          description:
            'Add a network interface to the instance, where <spec> is in the "key=value,key=value" format',
          args: {
            name: "spec",
          },
        },
        {
          name: "--bridged",
          description: "Adds one `--network bridged` network",
        },
        {
          name: "--timeout",
          description:
            "Maximum time, in seconds, to wait for the command to complete. Note that some background operations may continue beyond that. By default, instance startup and initialization is limited to 5 minutes each",
          args: {
            name: "timeout",
            default: "300",
          },
        },
      ],
      args: {
        isOptional: true,
        name: "image",
        description:
          "Optional image to launch. If omitted, then the default Ubuntu LTS will be used",
        generators: multipassGenerators.allAvailableImages,
      },
    },
    {
      name: "list",
      description: "List all available instances",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        sharedOpts.format,
      ],
    },
    {
      name: "mount",
      description: "Mount a local directory in the instance",
      options: [
        sharedOpts.help,
        sharedOpts.helpAll,
        sharedOpts.verbose,
        {
          name: ["-g", "--gid-map"],
          description:
            "A mapping of group IDs for use in the mount. File and folder ownership will be mapped from <host> to <instance> inside the instance. Can be used multiple times",
          args: {
            name: "host:instance",
          },
        },
        {
          name: ["-u", "--uid-map"],
          description:
            "A mapping of user IDs for use in the mount. File and folder ownership will be mapped from <host> to <instance> inside the instance. Can be used multiple times",
          args: {
            name: "host:instance",
          },
        },
      ],
      args: [
        {
          name: "source",
          description: "Path to the local directory to mount",
          template: "folders",
        },
        {
          isVariadic: true,
          name: "target",
          description:
            "Target mount points, in <name>[:<path>] format, where <name> is an instance name, and optional <path> is the mount point. If omitted, the mount point will be the same as the source's absolute path",
        },
      ],
    },
  ],
  options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
  // Only uncomment if multipass takes an argument
  // args: {}
};
export default completionSpec;
