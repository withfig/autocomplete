const completionSpec: Fig.Spec = {
  name: "nextflow",
  description: "",
  subcommands: [
    {
      name: "clean",
      description: "Clean up project cache and work directories",
    },
    {
      name: "clone",
      description: "Clone a project into a folder",
      args: {
        name: "namespace/repository_name",
      },
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-hub",
          description:
            "Service hub where the project is hosted (Default: GitHub)",
          args: {
            name: "gitlab|github|bitbucket",
          },
        },
        {
          name: "-r",
          description:
            "Revision to clone - It can be a git branch, tag or revision number",
          args: {
            name: "revision",
          },
        },
        {
          name: "-user",
          description: "Private repository user name",
          args: {
            name: "username",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Print a project configuration",
      args: {
        name: "project name",
      },
      options: [
        {
          name: "-flat",
          description: "Print config using flat notation (Default: false)",
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-profile",
          description: "Choose a configuration profile",
        },
        {
          name: "-properties",
          description:
            "Prints config using Java properties notatio (Default: false)",
        },
        {
          name: ["-a", "-show-profiles"],
          description: "Show all configuration profiles",
        },
        {
          name: "-sort",
          description: "Sort config attributes (Default: false)",
        },
      ],
    },
    {
      name: "console",
      description: "Launch Nextflow interactive console",
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
      ],
    },
    {
      name: "drop",
      description: "Delete the local copy of a project",
      args: {
        name: "name of the project to drop",
      },
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-f",
          description:
            "Delete the repository without taking care of local changes (Default: false)",
        },
      ],
    },
    {
      name: "help",
      description: "Print the usage help for a command",
    },
    {
      name: "info",
      description: "Print project and system runtime information",
      args: {
        name: "project name",
      },
      options: [
        {
          name: ["-u", "-check-updates"],
          description: "Check for remote updates (Default: false)",
        },
        {
          name: "-d",
          description: "Show detailed information (Default: false)",
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-o",
          description: "Output format, either: text (default), json, yaml",
        },
      ],
    },
    {
      name: "kuberun",
      description: "Execute a workflow in a Kubernetes cluster (experimental)",
    },
    {
      name: "list",
      description: "List all downloaded projects",
    },
    {
      name: "log",
      description: "Print executions log and runtime info",
    },
    {
      name: "pull",
      description: "Download or update a project",
    },
    {
      name: "run",
      description: "Execute a pipeline project",
    },
    {
      name: "self-update",
      description: "Update nextflow runtime to the latest available version",
    },
    {
      name: "view",
      description: "View project script file(s)",
      args: {
        name: "project name",
      },
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-l",
          description: "List repository content (Default: false)",
        },
        {
          name: "-q",
          description: "Hide header line (Default: false)",
        },
      ],
    },
  ],
  options: [
    {
      name: "-C",
      description:
        "Use the specified configuration file(s) overriding any defaults",
    },
    {
      name: "-D",
      description: "Set JVM properties",
    },
    {
      name: "-bg",
      description: "Execute nextflow in background",
    },
    {
      name: ["-c", "-config"],
      description: "Add the specified file to configuration set",
    },
    {
      name: ["-d", "-dockerize"],
      description: "Launch nextflow via Docker (experimental)",
    },
    {
      name: "-h",
      description: "Print this help",
    },
    {
      name: "-log",
      description: "Set nextflow log file path",
    },
    {
      name: ["-q", "-quiet"],
      description: "Do not print information messages",
    },
    {
      name: "-syslog",
      description: "Send logs to syslog server (eg. localhost:514)",
    },
    {
      name: ["-v", "-version"],
      description: "Print the program version",
    },
  ],
  // Only uncomment if nextflow takes an argument
  // args: {}
};
export default completionSpec;
