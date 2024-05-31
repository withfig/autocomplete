const sharedOpts: Record<string, Fig.Option> = {
  help: {
    name: ["-h", "--help"],
    description: "Displays help on commandline options",
    isPersistent: true,
  },
  helpAll: {
    name: "--help-all",
    description: "Displays help including Qt specific options",
    isPersistent: true,
  },
  verbose: {
    name: ["-v", "--verbose"],
    description:
      "Increase logging verbosity. Repeat the 'v' in the short " +
      "option for more detail. Maximum verbosity is obtained " +
      "with 4 (or more) v's, i.e. -vvvv",
    isPersistent: true,
  },
  format: {
    name: "--format",
    description:
      "Output list in the requested format. " +
      "Valid formats are: table (default), json, csv and yaml",
    args: {
      name: "format",
      suggestions: ["table", "json", "csv", "yaml"],
      default: "table",
    },
  },
  timeout: {
    name: "--timeout",
    description:
      "Maximum time, in seconds, to wait for the command to " +
      "complete. Note that some background operations may " +
      "continue beyond that. By default, instance startup and " +
      "initialization is limited to 5 minutes each",
    args: {
      name: "timeout",
      default: "300",
    },
  },
};

const multipassGenerators: Record<string, Fig.Generator> = {
  allAvailableImages: {
    script: ["multipass", "find", "--format=json"],
    postProcess: (out) => {
      const images = JSON.parse(out).images;
      return Object.keys(images).map((key) => {
        return {
          name: key,
          description: images[key].os + " " + images[key].release,
        };
      });
    },
  },
  allAvailableInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state !== "Deleted") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allRunningInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Running") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allStoppedInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Stopped") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
      });
    },
  },
  allDeletedInstances: {
    script: ["multipass", "list", "--format=json"],
    postProcess: (out) => {
      return JSON.parse(out).list.map((instance) => {
        if (instance.state === "Deleted") {
          return {
            name: instance.name,
            description: instance.release,
          };
        }
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
    },
    {
      name: "aliases",
      description: "List available aliases",
      options: [sharedOpts.format],
    },
    {
      name: "delete",
      description: "Delete instances",
      options: [
        {
          name: "--all",
          description: "Delete all instances",
        },
        {
          name: ["-p", "--purge"],
          description: "Purge instances immediately",
        },
      ],
      args: {
        isVariadic: true,
        name: "name",
        description: "Name of instances to delete",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "exec",
      description: "Run a command on an instance",
      args: [
        {
          name: "name",
          description: "Name of the instance to run the command on",
          generators: multipassGenerators.allAvailableInstances,
        },
        {
          name: "command",
          description: "Command to execute on the instance",
        },
      ],
    },
    {
      name: "find",
      description: "Display available images to create instances from",
      options: [
        sharedOpts.format,
        {
          name: "--show-unsupported",
          description: "Show unsupported cloud images as well",
        },
      ],
      args: {
        isOptional: true,
        name: "string",
        description:
          "An optional value to search for in [<remote:>]<string> " +
          "format, where <remote> can be either 'release' or 'daily'. " +
          "If <remote> is omitted, it will search 'release' first, " +
          "and if no matches are found, it will then search 'daily'. " +
          "<string> can be a partial image hash or an Ubuntu release " +
          "version, codename or alias.",
      },
    },
    {
      name: "get",
      description: "Get a configuration setting",
      options: [
        {
          name: "--raw",
          description:
            "Output in raw format. For now, this affects only the " +
            'representation of empty values (i.e. "" instead of "<empty>")',
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
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "launch",
      description: "Create and start an Ubuntu instance",
      options: [
        sharedOpts.timeout,
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
            "Disk space to allocate. Positive integers, in bytes, or " +
            "with K, M, G suffix " +
            "Minimum: 512M, default: 5G.",
          args: {
            name: "disk",
            default: "5G",
          },
        },
        {
          name: ["-m", "--mem"],
          description:
            "Amount of memory to allocate. Positive integers, in " +
            "bytes, or with K, M, G suffix " +
            "Minimum: 128M, default: 1G.",
          args: {
            name: "mem",
            default: "1G",
          },
        },
        {
          name: ["-n", "--name"],
          description:
            "Name for the instance. If it is 'primary' (the " +
            "configured primary instance name), the user's home " +
            "directory is mounted inside the newly launched instance, " +
            "in 'Home'",
          args: {
            name: "name",
            default: "primary",
          },
        },
        {
          name: "--cloud-init",
          description:
            "Path to a user-data cloud-init configuration, or '-' for" +
            "stdin",
          args: {
            name: "file",
          },
        },
        {
          name: "--network",
          description:
            "Add a network interface to the instance, where <spec> is " +
            'in the "key=value,key=value" format',
          args: {
            name: "spec",
          },
        },
        {
          name: "--bridged",
          description: "Adds one `--network bridged` network",
        },
      ],
      args: {
        isOptional: true,
        name: "image",
        description:
          "Optional image to launch. If omitted, then the default " +
          "Ubuntu LTS will be used",
        generators: multipassGenerators.allAvailableImages,
      },
    },
    {
      name: "list",
      description: "List all available instances",
      options: [sharedOpts.format],
    },
    {
      name: "mount",
      description: "Mount a local directory in the instance",
      options: [
        {
          name: ["-g", "--gid-map"],
          description:
            "A mapping of group IDs for use in the mount. " +
            "File and folder ownership will be mapped from " +
            "<host> to <instance> inside the instance. Can " +
            "be used multiple times",
          args: {
            name: "host:instance",
          },
        },
        {
          name: ["-u", "--uid-map"],
          description:
            "A mapping of user IDs for use in the mount. " +
            "File and folder ownership will be mapped from " +
            "<host> to <instance> inside the instance. Can " +
            "be used multiple times",
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
            "Target mount points, in <name>[:<path>] " +
            "format, where <name> is an instance name, and " +
            "optional <path> is the mount point. If " +
            "omitted, the mount point will be the same as " +
            "the source's absolute path",
        },
      ],
    },
    {
      name: "networks",
      description: "List all available networks interfaces",
      options: [sharedOpts.format],
    },
    {
      name: "purge",
      description: "Purge all deleted instances permanently",
    },
    {
      name: "recover",
      description: "Recover deleted instances",
      options: [
        {
          name: "--all",
          description: "Recover all deleted instances",
        },
      ],
      args: {
        isVariadic: true,
        name: "name",
        description: "Names of instances to recover",
        generators: multipassGenerators.allDeletedInstances,
      },
    },
    {
      name: "restart",
      description: "Restart instances",
      options: [
        sharedOpts.timeout,
        {
          name: "--all",
          description: "Restart all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to restart. If omitted, and without " +
          "the --all option, 'primary' will be assumed",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "set",
      description: "Set a configuration setting",
      args: {
        name: "key=value",
        description:
          "A key-value pair. The key specifies a path to " +
          "the setting to configure. The value is its intended value",
        suggestions: [
          "client.gui.autostart=",
          "client.gui.hotkey=",
          "client.primary-name=",
          "local.bridged-network=",
          "local.driver=",
          "local.privileged-mounts=",
        ],
      },
    },
    {
      name: "shell",
      description: "Open a shell on a running instance",
      options: [sharedOpts.timeout],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Name of the instance to open a shell on. If omitted, " +
          "'primary' (the configured primary instance name) will be " +
          "assumed. If the instance is not running, an attempt is " +
          "made to start it (see `start` for more info)",
        generators: multipassGenerators.allAvailableInstances,
      },
    },
    {
      name: "start",
      description: "Start instances",
      options: [
        sharedOpts.timeout,
        {
          name: "--all",
          description: "Start all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to start. If omitted, and without the " +
          "--all option, 'primary' (the configured primary instance " +
          "name) will be assumed. If 'primary' does not exist but is " +
          "included in a successful start command either implicitly " +
          "or explicitly), it is launched automatically (see" +
          "`launch` for more info).",
        generators: multipassGenerators.allStoppedInstances,
      },
    },
    {
      name: "stop",
      description: "Stop running instances",
      options: [
        {
          name: "--all",
          description: "Stop all instances",
        },
        {
          name: ["-t", "--time"],
          description:
            "Time from now, in minutes, to delay shutdown of the instance",
          args: {
            name: "time",
          },
        },
        {
          name: ["-c", "--cancel"],
          description: "Cancel a pending delayed shutdown",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to stop. If omitted, and without the " +
          "--all option, 'primary' will be assumed.",
        generators: multipassGenerators.allRunningInstances,
      },
    },
    {
      name: "suspend",
      description: "Suspend running instances",
      options: [
        {
          name: "--all",
          description: "Suspend all instances",
        },
      ],
      args: {
        isVariadic: true,
        isOptional: true,
        name: "name",
        description:
          "Names of instances to suspend. If omitted, and without the " +
          "--all option, 'primary' will be assumed.",
        generators: multipassGenerators.allRunningInstances,
      },
    },
    {
      name: "transfer",
      description: "Transfer files between the host and instances",
      args: [
        {
          isVariadic: true,
          name: "source",
          description:
            "One or more paths to transfer, prefixed with <name:> for paths " +
            "inside the instance, or '-' for stdin",
          template: "filepaths",
        },
        {
          name: "destination",
          description:
            "The destination path, prefixed with <name:> for paths inside " +
            "the instance, or '-' for stdout",
          template: "filepaths",
        },
      ],
    },
    {
      name: "umount",
      description: "Unmount a directory from an instance",
      args: {
        isVariadic: true,
        name: "mount",
        description:
          "Mount points, in <name>[:<path>] format, where <name> are " +
          "instance names, and optional <path> are mount points. If " +
          "omitted, all mounts will be removed from the named instances.",
      },
    },
    {
      name: "unalias",
      description: "Remove an alias",
      args: {
        name: "name",
        description: "The name of the alias to remove",
      },
    },
    {
      name: "version",
      description: "Show version details",
      options: [sharedOpts.format],
    },
  ],
  options: [sharedOpts.help, sharedOpts.helpAll, sharedOpts.verbose],
  // Only uncomment if multipass takes an argument
  // args: {}
};
export default completionSpec;
