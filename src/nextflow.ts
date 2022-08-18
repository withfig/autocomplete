const runname: Fig.Generator = {
  script: "cat .nextflow/history | awk '{ print $4 }'",
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((runname) => {
      return { name: runname.replace("*", "").trim(), description: "Run name" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "nextflow",
  description: "",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  subcommands: [
    {
      name: "clean",
      description: "Clean up project cache and work directories",
      args: {
        name: "run_name|session_id",
        generators: runname,
      },
      options: [
        {
          name: "-after",
          description: "Clean up runs executed after the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-before",
          description: "Clean up runs executed before the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-but",
          description: "Clean up all runs except the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: ["-n", "-dry-run"],
          description:
            "Print names of file to be removed without deleting them (Default: false)",
        },
        {
          name: ["-f", "-force"],
          description: "Force clean command (Default: false)",
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: ["-k", "-keep-logs"],
          description:
            "Removes only temporary files but retains execution log entries and metadata (Default: false)",
        },
        {
          name: ["-q", "-quiet"],
          description: "Do not print names of files removed (Default: false)",
        },
      ],
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
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
      ],
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
      args: {
        name: "project name",
      },
    },
    {
      name: "list",
      description: "List all downloaded projects",
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
      ],
    },
    {
      name: "log",
      description: "Print executions log and runtime info",
      options: [
        {
          name: "-after",
          description:
            "Show log entries for runs executed after the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-before",
          description:
            "Show log entries for runs executed before the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: "-but",
          description: "Show log entries of all runs except the specified one",
          args: {
            name: "run name",
            generators: runname,
          },
        },
        {
          name: ["-f", "-fields"],
          description:
            "Comma separated list of fields to include in the printed log -- Use the `-l` option to show the list of available fields",
          args: {
            name: "field1,field2,...",
          },
        },
        {
          name: ["-F", "filter"],
          description:
            "Filter log entries by a custom expression e.g. process =~ /foo.*/ && status == 'COMPLETED'",
          args: {
            name: "expression",
          },
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: ["-l", "-list-fields"],
          description: "Show all available fields (Default: false)",
        },
        {
          name: ["-q", "-quiet"],
          description: "Show only run names (Default: false)",
        },
        {
          name: "-s",
          description: "Character used to separate column values (Default: )",
          args: {
            name: "character",
          },
        },
        {
          name: ["-t", "-template"],
          description: "Text template used to each record in the log",
          args: {
            name: "template",
          },
        },
      ],
    },
    {
      name: "pull",
      description: "Download or update a project",
      args: {
        name: "project name or repository url to pull",
      },
      options: [
        {
          name: "-all",
          description: "Update all downloaded projects (Default: false)",
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-hub",
          description: "Service hub where the project is hosted",
        },
        {
          name: ["-r", "-revision"],
          description:
            "Revision of the project to run (either a git branch, tag or commit SHA number)",
        },
        {
          name: "-user",
          description: "Private repository user name",
        },
      ],
    },
    {
      name: "run",
      description: "Execute a pipeline project",
      args: {
        name: "project name",
      },
    },
    {
      name: "self-update",
      description: "Update nextflow runtime to the latest available version",
      options: [
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
      ],
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
      args: {
        name: "configuration file",
      },
    },
    {
      name: "-D",
      description: "Set JVM properties",
      insertValue: "-D{cursor}",
      args: {
        name: "custom Java system property",
      },
    },
    {
      name: "-bg",
      description: "Execute nextflow in background",
    },
    {
      name: ["-c", "-config"],
      description: "Add the specified file to configuration set",
      args: {
        name: "configuration file",
      },
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
