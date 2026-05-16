const sessionid: Fig.Generator = {
  script: ["bash", "-c", "cat .nextflow/history | awk '{ print $7 }'"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((sessionid) => {
      return {
        name: sessionid.replace("*", "").trim(),
        description: "Session ID",
      };
    });
  },
};

const runname: Fig.Generator = {
  script: ["bash", "-c", "cat .nextflow/history | awk '{ print $4 }'"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((runname) => {
      return { name: runname.replace("*", "").trim(), description: "Run name" };
    });
  },
};

const projectname: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `{ find * -maxdepth 0 -type f -name '*.nf' 2> /dev/null && find $HOME/.nextflow/assets/* -maxdepth 1 -type d | cut -d/ -f6,7 | grep / | grep -v assets; } 2> /dev/null`,
  ],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((projectname) => {
      return {
        name: projectname.replace("*", "").trim(),
        description: "Project name",
      };
    });
  },
};

const dockerimage: Fig.Generator = {
  script: ["bash", "-c", "docker images | cut -w -f 1 | grep -v REPOSITORY"],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((dockerimage) => {
      return {
        name: dockerimage.replace("*", "").trim(),
        description: "Docker image",
      };
    });
  },
};

const secretname: Fig.Generator = {
  script: [
    "bash",
    "-c",
    `grep -o '"name": *"[^"]*"' $HOME/.nextflow/secrets/store.json | grep -o '"[^"]*"$' | tr -d \\"`,
  ],
  postProcess: (output) => {
    if (output == "") {
      return [];
    }
    return output.split("\n").map((secretname) => {
      return {
        name: secretname.replace("*", "").trim(),
        description: "Secret name",
      };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "nextflow",
  description:
    "Nextflow enables scalable and reproducible scientific workflows using software containers. It allows the adaptation of pipelines written in the most common scripting languages",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
    optionArgSeparators: ["=", "."],
  },
  subcommands: [
    {
      name: "clean",
      description:
        "Clean up project cache and work directories (Default: last run)",
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
        generators: projectname,
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
        generators: projectname,
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
        generators: projectname,
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
        generators: projectname,
      },
      options: [
        {
          name: "-E",
          description:
            "Exports all current system environment (Default: false)",
        },
        {
          name: "-ansi-log",
          description: "Enable/disable ANSI console logging",
        },
        {
          name: "-bucket-dir",
          description:
            "Remote bucket where intermediate result files are stored",
          args: {
            name: "remote bucket",
          },
        },
        {
          name: "-cache",
          description: "Enable/disable processes caching",
        },
        {
          name: "-disable-jobs-cancellation",
          description:
            "Prevent the cancellation of child jobs on execution termination",
        },
        {
          name: "-dsl1",
          description:
            "Execute the workflow using DSL1 syntax (Default: false)",
        },
        {
          name: "-dsl2",
          description:
            "Execute the workflow using DSL2 syntax (Default: false)",
        },
        {
          name: "-dump-channels",
          description: "Dump channels for debugging purpose",
        },
        {
          name: "-dump-hashes",
          description:
            "Dump task hash keys for debugging purpose (Default: false)",
        },
        {
          name: "-e",
          description:
            "Add the specified variable to execution environment. Syntax: -e.key=value (Default: {})",
          requiresSeparator: ".",
          args: {
            name: "key=value",
          },
        },
        {
          name: "-entry",
          description: "Entry workflow name to be executed",
          args: {
            name: "entry workflow name",
          },
        },
        {
          name: "-head-cpus",
          description:
            "Specify number of CPUs requested for the Nextflow pod (Default: 0)",
        },
        {
          name: "-head-memory",
          description:
            "Specify amount of memory requested for the Nextflow pod",
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-hub",
          description:
            "Service hub where the project is hosted (Default: github)",
          args: {
            name: "service hub",
          },
        },
        {
          name: "-latest",
          description: "Pull latest changes before run (Default: false)",
        },
        {
          name: "-lib",
          description: "Library extension path",
          args: {
            name: "library extension path",
          },
        },
        {
          name: "-main-script",
          description:
            "The script file to be executed when launching a project directory or repository",
          args: {
            name: "script file",
          },
        },
        {
          name: "-name",
          description: "Assign a mnemonic name to the a pipeline run",
          args: {
            name: "name",
          },
        },
        {
          name: ["-n", "-namespace"],
          description: "Specify the K8s namespace to use",
        },
        {
          name: "-offline",
          description:
            "Do not check for remote project updates (Default: false)",
        },
        {
          name: "-params-file",
          description: "Load script parameters from a JSON/YAML file",
          args: {
            name: "JSON/YAML file",
            template: ["filepaths"],
          },
        },
        {
          name: "-plugins",
          description:
            "Specify the plugins to be applied for this run e.g. nf-amazon,nf-tower",
          args: {
            name: "plugins ids separated by comma",
          },
        },
        {
          name: "-pod-image",
          description: "Specify the container image for the Nextflow pod",
        },
        {
          name: "-process",
          description:
            "Set process options. Syntax: -process.key=value (Default: {}",
          requiresSeparator: ".",
          args: {
            name: "key=value",
          },
        },
        {
          name: "-profile",
          description: "Choose a configuration profile",
          args: {
            name: "profile",
          },
        },
        {
          name: ["-qs", "-queue-size"],
          description:
            "Max number of processes that can be executed in parallel by each executor",
          args: {
            name: "number",
          },
        },
        {
          name: "-remoteProfile",
          description: "Choose a configuration profile in the remoteConfig",
        },
        {
          name: "-resume",
          description:
            "Execute the script using the cached results, useful to continue executions that was stopped by an error",
        },
        {
          name: ["-r", "-revision"],
          description:
            "Revision of the project to run (either a git branch, tag or commit SHA number)",
          args: {
            name: "project revision (tag/branch/hash",
          },
        },
        {
          name: ["-stub-run", "-stub"],
          description:
            "Execute the workflow replacing process scripts with command stubs (Default: false)",
        },
        {
          name: "-test",
          description: "Test a script function with the name specified",
          args: {
            name: "name",
          },
        },
        {
          name: "-user",
          description: "Private repository user name",
          args: {
            name: "username",
          },
        },
        {
          name: ["-v", "-volume-mount"],
          description: "Volume claim mounts eg. my-pvc:/mnt/path",
        },
        {
          name: "-with-charliecloud",
          description:
            "Enable process execution in a Charliecloud container runtime",
        },
        {
          name: "-with-conda",
          description:
            "Use the specified Conda environment package or file (must end with .yml|.yaml suffix)",
          args: {
            name: "conda .yml/.yaml file",
          },
        },
        {
          name: "-with-dag",
          description: "Create pipeline DAG file",
          args: {
            name: "filename, e.g. dag.dot",
          },
        },
        {
          name: "-with-docker",
          description: "Enable process execution in a Docker container",
          args: {
            name: "a docker container image",
            isOptional: true,
            generators: dockerimage,
          },
        },
        {
          name: ["-N", "-with-notification"],
          description:
            "Send a notification email on workflow completion to the specified recipients",
          args: {
            name: "email",
          },
        },
        {
          name: "-with-podman",
          description: "Enable process execution in a Podman container",
        },
        {
          name: "-with-report",
          description: "Create processes execution html report",
          args: {
            name: "report filename e.g. report.html",
          },
        },
        {
          name: "-with-singularity",
          description: "Enable process execution in a Singularity container",
        },
        {
          name: "-with-timeline",
          description: "Create processes execution timeline file",
          args: {
            name: "timeline filename e.g. timeline.html",
          },
        },
        {
          name: "-with-tower",
          description: "Monitor workflow execution with Seqera Tower service",
        },
        {
          name: "-with-trace",
          description: "Create processes execution tracing file",
          args: {
            name: "trace text filename e.g. trace.txt",
          },
        },
        {
          name: "-with-weblog",
          description: "Send workflow status messages via HTTP to target URL",
          args: {
            name: "target web URL",
          },
        },
        {
          name: "-without-docker",
          description: "Disable process execution with Docker (Default: false)",
        },
        {
          name: "-without-podman",
          description: "Disable process execution in a Podman container",
        },
        {
          name: ["-w", "-work-dir"],
          description: "Directory where intermediate result files are stored",
          args: {
            name: "work dir",
          },
        },
      ],
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
      args: {
        name: "run name",
        generators: runname,
      },
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
        generators: projectname,
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
        name: "project name, repository url, or local path",
        generators: projectname,
      },
      options: [
        {
          name: "-E",
          description:
            "Exports all current system environment (Default: false)",
        },
        {
          name: "-ansi-log",
          description: "Enable/disable ANSI console logging",
        },
        {
          name: "-bucket-dir",
          description:
            "Remote bucket where intermediate result files are stored",
          args: {
            name: "remote bucket",
          },
        },
        {
          name: "-cache",
          description: "Enable/disable processes caching",
        },
        {
          name: "-disable-jobs-cancellation",
          description:
            "Prevent the cancellation of child jobs on execution termination",
        },
        {
          name: "-dsl1",
          description:
            "Execute the workflow using DSL1 syntax (Default: false)",
        },
        {
          name: "-dsl2",
          description:
            "Execute the workflow using DSL2 syntax (Default: false)",
        },
        {
          name: "-dump-channels",
          description: "Dump channels for debugging purpose",
        },
        {
          name: "-dump-hashes",
          description:
            "Dump task hash keys for debugging purpose (Default: false)",
        },
        {
          name: "-e.",
          description:
            "Add the specified variable to execution environment. Syntax: -e.key=value (Default: {})",
          insertValue: "-e.{cursor}",
          args: {
            name: "key=value",
          },
        },
        {
          name: "-entry",
          description: "Entry workflow name to be executed",
          args: {
            name: "entry workflow name",
          },
        },
        {
          name: ["-h", "-help"],
          description: "Print the command usage (Default: false)",
        },
        {
          name: "-hub",
          description:
            "Service hub where the project is hosted (Default: github)",
          args: {
            name: "service hub",
          },
        },
        {
          name: "-latest",
          description: "Pull latest changes before run (Default: false)",
        },
        {
          name: "-lib",
          description: "Library extension path",
          args: {
            name: "library extension path",
          },
        },
        {
          name: "-main-script",
          description:
            "The script file to be executed when launching a project directory or repository",
          args: {
            name: "script file",
          },
        },
        {
          name: "-name",
          description: "Assign a mnemonic name to the a pipeline run",
          args: {
            name: "name",
          },
        },
        {
          name: "-offline",
          description:
            "Do not check for remote project updates (Default: false)",
        },
        {
          name: "-params-file",
          description: "Load script parameters from a JSON/YAML file",
          args: {
            name: "JSON/YAML file",
            template: ["filepaths"],
          },
        },
        {
          name: "-plugins",
          description:
            "Specify the plugins to be applied for this run e.g. nf-amazon,nf-tower",
          args: {
            name: "plugins ids separated by comma",
          },
        },
        {
          name: "-process.",
          description:
            "Set process options. Syntax: -process.key=value (Default: {}",
          insertValue: "-process.{cursor}",
          args: {
            name: "key=value",
          },
        },
        {
          name: "-profile",
          description: "Choose a configuration profile",
          args: {
            name: "profile",
          },
        },
        {
          name: ["-qs", "-queue-size"],
          description:
            "Max number of processes that can be executed in parallel by each executor",
          args: {
            name: "number",
          },
        },
        {
          name: "-resume",
          description:
            "Execute the script using the cached results, useful to continue executions that was stopped by an error",
          args: {
            name: "session ID",
            isOptional: true,
            generators: sessionid,
          },
        },
        {
          name: ["-r", "-revision"],
          description:
            "Revision of the project to run (either a git branch, tag or commit SHA number)",
          args: {
            name: "project revision (tag/branch/hash",
          },
        },
        {
          name: ["-stub-ru", "-stub"],
          description:
            "Execute the workflow replacing process scripts with command stubs (Default: false)",
        },
        {
          name: "-test",
          description: "Test a script function with the name specified",
          args: {
            name: "name",
          },
        },
        {
          name: "-user",
          description: "Private repository user name",
          args: {
            name: "username",
          },
        },
        {
          name: "-with-charliecloud",
          description:
            "Enable process execution in a Charliecloud container runtime",
        },
        {
          name: "-with-conda",
          description:
            "Use the specified Conda environment package or file (must end with .yml|.yaml suffix)",
          args: {
            name: "conda .yml/.yaml file",
          },
        },
        {
          name: "-with-dag",
          description: "Create pipeline DAG file",
          args: {
            name: "filename, e.g. dag.dot",
          },
        },
        {
          name: "-with-docker",
          description: "Enable process execution in a Docker container",
          args: {
            name: "a docker container image",
            isOptional: true,
            generators: dockerimage,
          },
        },
        {
          name: ["-N", "-with-notification"],
          description:
            "Send a notification email on workflow completion to the specified recipients",
          args: {
            name: "email",
          },
        },
        {
          name: "-with-podman",
          description: "Enable process execution in a Podman container",
        },
        {
          name: "-with-report",
          description: "Create processes execution html report",
          args: {
            name: "report filename e.g. report.html",
          },
        },
        {
          name: "-with-singularity",
          description: "Enable process execution in a Singularity container",
        },
        {
          name: "-with-timeline",
          description: "Create processes execution timeline file",
          args: {
            name: "timeline filename e.g. timeline.html",
          },
        },
        {
          name: "-with-tower",
          description: "Monitor workflow execution with Seqera Tower service",
        },
        {
          name: "-with-trace",
          description: "Create processes execution tracing file",
          args: {
            name: "trace text filename e.g. trace.txt",
          },
        },
        {
          name: "-with-weblog",
          description: "Send workflow status messages via HTTP to target URL",
          args: {
            name: "target web URL",
          },
        },
        {
          name: "-without-docker",
          description: "Disable process execution with Docker (Default: false)",
        },
        {
          name: "-without-podman",
          description: "Disable process execution in a Podman container",
        },
        {
          name: ["-w", "-work-dir"],
          description: "Directory where intermediate result files are stored",
          args: {
            name: "work dir",
          },
        },
      ],
    },
    {
      name: "secrets",
      description:
        "Handle and manage sensitive information for pipeline execution in a safe manner",
      options: [
        {
          name: "list",
          description:
            "List secrets available in the current store e.g. nextflow secrets list",
        },
        {
          name: "get",
          description:
            "Allows retrieving a secret value e.g. nextflow secrets get FOO",
          args: {
            name: "secret name",
            generators: secretname,
          },
        },
        {
          name: "set",
          description:
            'Allows creating creating a new secret or overriding an existing one e.g. nextflow secrets set FOO "Hello world"',
          isDangerous: true,
          args: {
            name: "secret name and value",
            generators: secretname,
            suggestCurrentToken: true,
          },
        },
        {
          name: "delete",
          description:
            "Allows deleting an existing secret e.g. nextflow secrets delete FOO",
          isDangerous: true,
          args: {
            name: "secret name",
            generators: secretname,
          },
        },
      ],
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
        generators: projectname,
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
        template: ["filepaths"],
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
        template: ["filepaths"],
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
