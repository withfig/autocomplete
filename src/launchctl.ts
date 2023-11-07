const serviceOrDomain: Fig.Arg = {
  name: "service",
  description: "Service or domain target",
  template: "filepaths",
};

const servicePath: Fig.Arg = {
  name: "service-path",
  isVariadic: true,
  description: "Service path(s)",
  template: "filepaths",
};

const serviceTarget = {
  name: "service",
  description: "Service or domain target",
};

const loadUnloadOptions = [
  {
    name: "-w",
    description: "Enable if disabled",
  },
  {
    name: "-F",
    description: "Force load",
  },
  {
    name: "-S",
    description: "Session",
    args: {
      name: "session",
    },
  },
  {
    name: "-D",
    description: "Load files from specified domain",
    args: {
      name: "domain",
    },
  },
];

const limitArgs = [
  {
    name: "[both]",
    description: "Specify a limit for both soft and hard",
  },
  {
    isOptional: true,
    name: "[soft | hard]",
    description: "Specify a soft/hard limit pair",
  },
];

const listGenerator: Fig.Generator = {
  script: ["launchctl", "list"],
  // The list command outputs 3 columns: PID	Status	Label
  // we want the last column ([2])
  postProcess: function (out) {
    return out
      .split("\n")
      .slice(1)
      .map((line) => {
        const parts = line.split(/\s/);
        return {
          name: parts[2],
        };
      })
      .filter((data) => data.name);
  },
};

const labelArg = {
  name: "label",
  generators: listGenerator,
};

const completionSpec: Fig.Spec = {
  name: "launchctl",
  description: "Interfaces with launchd",
  args: {},
  subcommands: [
    {
      name: "bootstrap",
      description: "Bootstraps a domain or a service into a domain",
      args: [serviceOrDomain, servicePath],
    },
    {
      name: "bootout",
      description: "Tears down a domain or removes a service from a domain",
      args: [serviceOrDomain, servicePath],
    },
    {
      name: "enable",
      description: "Enables an existing service",
      args: serviceTarget,
    },
    {
      name: "disable",
      description: "Disables an existing service",
      args: serviceTarget,
    },
    {
      name: "kickstart",
      description: "Forces an existing service to start",
      options: [
        {
          name: "-k",
          description: "Kill instance before restarting",
        },
        {
          name: "-p",
          description: "Print PID",
        },
      ],
      args: serviceTarget,
    },
    {
      name: "attach",
      description: "Attach the system's debugger to a service",
      options: [
        {
          name: "-k",
          description: "Kill instance",
        },
        {
          name: "-s",
          description: "Force the service to start",
        },
        {
          name: "-x",
          description: "Attach xpcproxy",
        },
      ],
      args: serviceTarget,
    },
    {
      name: "debug",
      description: "Configures the next invocation of a service for debugging",
      options: [
        {
          name: "--program",
          description: "Use program path as executable",
          args: {
            name: "program-path",
          },
        },
        {
          name: "--guard-malloc",
          description: "Turn on libgmalloc",
        },
        {
          name: "--malloc-stack-logging",
          description: "Turn on malloc(3) stack logging",
        },
        {
          name: "--malloc-nano-allocator",
          description: "Turn on malloc(3) nano allocator",
        },
        {
          name: "--debug-libraries",
          description: "Set the DYLD_IMAGE_SUFFIX",
        },
        {
          name: "--introspection-libraries",
          description: "Add introspection libraries to the DYLD_IMAGE_PATH",
        },
        {
          name: "--NSZombie",
          description: "Enables NSZombie",
        },
        {
          name: "--32",
          description: "Runs service on appropriate 32-bit architecture",
        },
        {
          name: "--stdin",
          description: "Sets the stdin path",
          args: {
            name: "stdin-path",
            template: "filepaths",
          },
        },
        {
          name: "--stdout",
          description: "Sets the stdout path",
          args: {
            name: "stdout-path",
            template: "filepaths",
          },
        },
        {
          name: "--stderr",
          description: "Sets the stderr path",
          args: {
            name: "stderr-path",
            template: "filepaths",
          },
        },
        {
          name: "--environment",
          description: "Sets environment variables",
          args: {
            name: "environment-variables",
            isVariadic: true,
          },
        },
      ],
      args: {
        name: "argv",
        description: "Variable args: argv0 argv1",
        isVariadic: true,
      },
    },
    {
      name: "kill",
      description: "Sends a signal to the service instance",
      args: [
        {
          name: "signal",
          description: "Specify signal-name or signal-number",
        },
        serviceTarget,
      ],
    },
    {
      name: "blame",
      description: "Prints the reason a service is running",
      args: serviceTarget,
    },
    {
      name: "print",
      description: "Prints a description of a domain or service",
      args: serviceOrDomain,
    },
    {
      name: "print-cache",
      description: "Prints information about the service cache",
    },
    {
      name: "print-disabled",
      description: "Prints which services are disabled",
      args: {
        name: "domain-target",
      },
    },
    {
      name: "plist",
      description:
        "Prints a property list embedded in a binary (targets the Info.plist by default)",
      args: [
        {
          name: "segment",
          description: "Segment or section",
        },
        {
          name: "Mach-O",
          isOptional: true,
          template: "filepaths",
        },
      ],
    },
    {
      name: "procinfo",
      description: "Prints port information about a process",
      args: {
        name: "pid",
      },
    },
    {
      name: "hostinfo",
      description: "Prints port information about the host",
    },
    {
      name: "resolveport",
      description:
        "Resolves a port name from a process to an endpoint in launchd",
      args: [
        {
          name: "owner-pid",
        },
        {
          name: "port-name",
        },
      ],
    },
    {
      name: "limit",
      description: "Reads or modifies launchd's resource limits",
      options: [
        { name: "cpu", args: limitArgs },
        { name: "filesize", args: limitArgs },
        { name: "data", args: limitArgs },
        { name: "stack", args: limitArgs },
        { name: "core", args: limitArgs },
        { name: "rss", args: limitArgs },
        { name: "memlock", args: limitArgs },
        { name: "maxproc", args: limitArgs },
        { name: "maxfiles", args: limitArgs },
      ],
    },
    {
      name: "runstats",
      description: "Prints performance statistics for a service",
      args: serviceTarget,
    },
    {
      name: "examine",
      description:
        "Runs the specified analysis tool against launchd in a non-re-entrant manner",
      args: [
        {
          name: "tool",
        },
        {
          isVariadic: true,
          name: "[args | @PID]",
        },
      ],
    },
    {
      name: "config",
      description:
        "Modifies persistent configuration parameters for launchd domains",
      args: [
        {
          name: "[system | user]",
          suggestions: ["system"],
        },
        {
          name: "param",
          description: "A key for a key/value pair",
        },
        {
          name: "value",
          description: "A value for a key/value pair",
        },
      ],
    },
    {
      name: "dumpstate",
      description: "Dumps launchd state to stdout",
    },
    {
      name: "dumpjpcategory",
      description: "Dumps the jetsam properties category for all services",
    },
    {
      name: "reboot",
      description: "Initiates a system reboot of the specified type",
      options: [
        { name: "system" },
        { name: "userspace" },
        { name: "halt" },
        { name: "logout" },
        { name: "apps" },
      ],
    },
    {
      name: "load",
      description:
        "Recommended alternatives: bootstrap | enable. Bootstraps a service or directory of services",
      options: loadUnloadOptions,
      args: {
        isVariadic: true,
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "unload",
      description:
        "Recommended alternatives: bootout | disable. Unloads a service or directory of services",
      options: loadUnloadOptions,
      args: {
        isVariadic: true,
        name: "path",
        template: "filepaths",
      },
    },
    {
      name: "remove",
      description: "Unloads the specified service name",
      args: labelArg,
    },
    {
      name: "list",
      description: "Lists information about services",
      args: {
        isOptional: true,
        name: "label",
        generators: listGenerator,
      },
    },
    {
      name: "start",
      description: "Starts the specified service",
      args: labelArg,
    },
    {
      name: "stop",
      description: "Stops the specified service if it is running",
      args: labelArg,
    },
    {
      name: "setenv",
      description:
        "Sets the specified environment variables for all services within the domain",
      args: [
        {
          name: "key",
        },
        {
          name: "value",
        },
      ],
    },
    {
      name: "unsetenv",
      description:
        "Unsets the specified environment variables for all services within the domain",
      args: {
        name: "key",
      },
    },
    {
      name: "getenv",
      description:
        "Gets the value of an environment variable from within launchd",
      args: {
        name: "key",
      },
    },
    {
      name: "bsexec",
      description: "Execute a program in another process' bootstrap context",
      args: [
        {
          name: "PID",
        },
        {
          name: "command",
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "asuser",
      description: "Execute a program in the bootstrap context of a given user",
      args: [
        {
          name: "UID",
        },
        {
          name: "command",
        },
        {
          name: "args",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "submit",
      description: "Submit a basic job from the command line",
      options: [
        {
          name: "-p",
          description: "Program to execute",
          args: {
            name: "executable",
          },
        },
        {
          name: "-o",
          description: "Std out path",
          args: {
            name: "stdout-path",
            template: "filepaths",
          },
        },
        {
          name: "-e",
          description: "Std err path",
          args: {
            name: "stderr-path",
            template: "filepaths",
          },
        },
      ],
      args: [
        {
          name: "-l",
          description: "Label flag",
        },
        {
          name: "label",
          description: "Unique label to assign to launchd",
          generators: listGenerator,
        },
        {
          name: "command",
          description: "Command to run",
        },
        {
          name: "arg",
          isVariadic: true,
          isOptional: true,
        },
      ],
    },
    {
      name: "managerpid",
      description: "Prints the PID of the launchd controlling the session",
    },
    {
      name: "manageruid",
      description: "Prints the UID of the current launchd session",
    },
    {
      name: "managername",
      description: "Prints the name of the current launchd session",
    },
    {
      name: "error",
      description: "Prints a description of an error",
      args: [
        {
          name: "type",
          description: "Error domain type",
          suggestions: ["posix", "mach", "bootstrap"],
        },
        {
          name: "code",
          description: "Numeric code",
        },
      ],
    },
    {
      name: "variant",
      description: "Prints the launchd variant",
    },
    {
      name: "version",
      description: "Prints the launchd version",
    },
    {
      name: "help",
      description: "Prints the usage for a given subcommand",
    },
  ],
};

export default completionSpec;
