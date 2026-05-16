import fig from "./fig";

const sharedArgs = {
  UID: {
    name: "UID",
  },
};
let globalOptions: Fig.Option[] = [
  {
    name: "--argo-base-href",
    description:
      "An path to use with HTTP client (e.g. due to BASE_HREF). Defaults to the ARGO_BASE_HREF environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--argo-http1",
    description:
      "If True, Use the HTTP client. Defaults to the ARGO_HTTP1 environment variable",
  },
  {
    name: ["--argo-server", "-s"],
    description:
      "API server host:port. e.g. localhost:2746. Defaults to the ARGO_SERVER environment variable",
    args: {
      name: "host:port",
    },
  },
  {
    name: "--as",
    description: "Username to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--as-group",
    description:
      "Group to impersonate for the operation, This flag can be repeated to specify multiple groups",
    args: {
      name: "stringArray",
    },
  },
  {
    name: "--as-uid",
    description: "UID to impersonate for the operation",
    args: {
      name: "string",
    },
  },
  {
    name: "--certificate-authorityk",
    description: "Path to a cert file for the certificate authority",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-certificate",
    description: "Path to a client certificate file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--client-key",
    description: "Path to a client key file for TLS",
    args: {
      name: "string",
    },
  },
  {
    name: "--cluster",
    description: "The name of the kubeconfig cluster to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--context",
    description: "The name of the kubeconfig context to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--gloglevel",
    description: "Set the glog logging level",
    args: {
      name: "int",
    },
  },
  {
    name: ["--header", "-H"],
    description:
      "Sets additional header to all requests made by Argo CLI. (Can be repeated multiple times to add multiple headers",
    args: {
      name: "int",
    },
  },
  {
    name: ["--help", "-h"],
    description: "Help for argo",
  },
  {
    name: "--insecure-skip-tls-verify",
    description:
      "If True, The server's certificate will not be checked for validity. This will make your HTTPS connections insecure",
  },
  {
    name: ["--insecure-skip-verify", "-k"],
    description:
      "If true the Argo Server's certificate will not be checked for validity. This will make your HTTPS connections insecure. Defaults to the ARGO_INSECURE_SKIP_VERIFY environment variable",
  },
  {
    name: "--instanceid",
    description:
      "Submit with a specific controller's instance id label. Default to the ARGO_INSTANCEID environment variable",
    args: {
      name: "string",
    },
  },
  {
    name: "--kubeconfig",
    description: "Path to a kube config. Only required if out-of-cluster",
    args: {
      name: "string",
    },
  },
  {
    name: "--loglevel",
    description:
      'Set the logging level. One of: debug|info|warn|error (default "info")',
    args: {
      name: "string",
    },
  },
  {
    name: ["--namespace", "-n"],
    description: "If present the namespace scope for this CLI request",
    args: {
      name: "string",
    },
  },
  {
    name: "--password",
    description: "Password for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--proxy-url",
    description: "This URL will be used to connect via proxy",
    args: {
      name: "string",
    },
  },
  {
    name: "--request-timeout",
    description:
      "The length of time to wait before giving up on a single server request. Non-zero values should contain a corresponding time unit (e.g. 1s, 2m)",
    args: {
      name: "string",
    },
  },
  {
    name: ["--secure", "-e"],
    description:
      "Whether or not the server is using TLS with the Argo Server. Defaults to the ARGO_SECURE environment variable. (default true)",
  },
  {
    name: "--server",
    description: "The address and port of the Kubernetes API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--tls-server-name",
    description:
      "If Provided, This name will be used to validate server certificate. If this is not provided",
    args: {
      name: "string",
    },
  },
  {
    name: "--token",
    description: "Bearer token for authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: "--user",
    description: "The name of the kubeconfig user to use",
    args: {
      name: "string",
    },
  },
  {
    name: "--username",
    description: "Username for basic authentication to the API server",
    args: {
      name: "string",
    },
  },
  {
    name: ["--verbose", "-v"],
    description: "Enabled verbose logging i.e. --loglevel debug",
  },
];

globalOptions = globalOptions.map((option) => ({
  isPersistent: true,
  ...option,
}));

const completionSpec: Fig.Spec = {
  name: "argo",
  description: "",
  subcommands: [
    {
      name: "archive",
      description: "Manage the workflow archive",
      subcommands: [
        {
          name: "delete",
          description: "Delete a workflow in the archive",
          args: sharedArgs.UID,
        },
        {
          name: "get",
          description: "Get a workflow in the archive",
          args: sharedArgs.UID,
          options: [
            {
              name: ["--output", "-o"],
              description:
                'Output format. One of: json|yaml|wide (default "wide")',
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list",
          description: "List workflows in the archive",
          options: [
            {
              name: "--chunk-size",
              description:
                "Return large lists in chunks rather than all at once. Pass 0 to disable",
              args: {
                name: "int",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            {
              name: ["--output", "-o"],
              description:
                'Output format. One of: json|yaml|wide (default "wide")',
              args: {
                name: "string",
              },
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "list-label-keys",
          description: "List workflows label keys in the archive",
        },
        {
          name: "list-label-values",
          description: "Get workflow label values in the archive",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for list-label-values",
            },
            {
              name: ["--selector", "-l"],
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "resubmit",
          description: "Resubmit one or more workflows",
          args: sharedArgs.UID,
          options: [
            {
              name: "--field-selector",
              description:
                "Selector (field query) to filter on supports '=' '==' and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for resubmit",
            },
            {
              name: "--log",
              description: "Log the workflow until it completes",
            },
            {
              name: "--memoized",
              description:
                "Re-use successful steps & outputs from the previous run",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|json|yaml|wide",
              args: {
                name: "string",
              },
            },
            {
              name: ["--parameter", "-p"],
              description:
                "Input parameter to override on the original workflow spec",
              args: {
                name: "stringArray",
              },
            },
            {
              name: "--priority",
              description: "Workflow priority",
              args: {
                name: "int32",
              },
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1,key2=value2)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait for the workflow to complete only works when a single workflow is resubmitted",
            },
            {
              name: "--watch",
              description:
                "Watch the workflow until it completes only works when a single workflow is resubmitted",
            },
          ],
        },
        {
          name: "retry",
          description: "Retry zero or more workflows",
          args: sharedArgs.UID,
          options: [
            {
              name: "--field-selector",
              description: "Selector (field query) to filter on, supports '='",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for retry",
            },
            {
              name: "--log",
              description: "Log the workflow until it completes",
            },
            {
              name: "--node-field-selector",
              description:
                "Selector of nodes to reset eg: --node-field-selector inputs.paramaters.myparam.value=abc",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|json|yaml|wide",
              args: {
                name: "string",
              },
            },
            {
              name: ["--parameter", "-p"],
              description:
                "Input parameter to override on the original workflow spec",
              args: {
                name: "stringArray",
              },
            },
            {
              name: "--restart-successful",
              description:
                "Indicates to restart successful nodes matching the --node-field-selector",
            },
            {
              name: ["--selector", "-l"],
              description:
                "Selector (label query) to filter on not including uninitialized ones supports '=' '=='",
              args: {
                name: "string",
              },
            },
            {
              name: ["--wait", "-w"],
              description:
                "Wait for the workflow to complete only works when a single workflow is retried",
            },
            {
              name: "--watch",
              description:
                "Watch the workflow until it completes only works when a single workflow is retried",
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Manage authentication settings",
      subcommands: [
        {
          name: "token",
          description: "Print the auth token",
        },
      ],
    },
    {
      name: ["cluster-template", "cwftmpl", "cwft"],
      description: "Manipulate cluster workflow templates",
      subcommands: [
        {
          name: "create",
          description: "Create a cluster workflow template",
          args: {
            name: "files",
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for create",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|json|yaml|wide",
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a cluster workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
          },
          options: [
            {
              name: "--all",
              description: "Delete all cluster workflow templates",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a cluster workflow template",
          args: [
            {
              name: "CLUSTER",
            },
            {
              name: "WORKFLOW_TEMPLATE",
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for get",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "lint",
          description:
            "Validate files or directories of cluster workflow template manifests",
          args: {
            name: "FILE",
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            {
              name: ["--output", "-o"],
              description:
                'Linting results output format. One of: pretty|simple (default "pretty")',
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List cluster workflow templates",
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: wide|name",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "completion",
      description:
        "Output shell completion code for the specified shell (bash or zsh)",
      args: { name: "SHELL" },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for completion",
        },
      ],
    },
    {
      name: "cp",
      description: "Copy artifacts from workflow",
      args: [{ name: "my-wf" }, { name: "output-directory" }],
      options: [
        {
          name: "--artifact-name",
          description: "Name of output artifact in workflow",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for cp",
        },
        {
          name: "--node-id",
          description: "Id of node in workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--path",
          description:
            'Use variables {workflowName} {nodeId} {templateName} {artifactName} and {namespace} to create a customized path to store the artifacts; example: {workflowName}/{templateName}/{artifactName} (default "{namespace}/{workflowName}/{nodeId}/outputs/{artifactName}")',
          args: {
            name: "string",
          },
        },
        {
          name: "--template-name",
          description: "Name of template in workflow",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "cron",
      description: "Manage cron workflows",
      options: [
        {
          name: "--help",
          description: "Help for cron",
        },
      ],
      subcommands: [
        {
          name: "create",
          description: "Create a cron workflow",
          args: {
            name: "FILE1 FILE2...",
          },
          options: [
            {
              name: "--entrypoint",
              description: "Override entrypoint",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-name",
              description: "Override metadata.generateName",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for create",
            },
            {
              name: ["--labels", "-l"],
              description:
                "Comma separated labels to apply to the workflow. Will override previous values",
              args: {
                name: "string",
              },
            },
            {
              name: "--name",
              description: "Override metadata.name",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|json|yaml|wide",
              args: {
                name: "string",
              },
            },
            {
              name: ["--parameter", "-p"],
              description: "Pass an input parameter",
              args: {
                name: "stringArray",
              },
            },
            {
              name: ["--parameter-file", "-f"],
              description: "Pass a file containing all input parameters",
              args: {
                name: "string",
              },
            },
            {
              name: "--schedule",
              description: "Override cron workflow schedule",
              args: {
                name: "string",
              },
            },
            {
              name: "--serviceaccount",
              description:
                "Run all pods in the workflow using specified serviceaccount",
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a cron workflow",
          args: {
            name: "[CRON_WORKFLOW... | --all]",
          },
          options: [
            {
              name: "--all",
              description: "Delete all cron workflows",
            },
            {
              name: ["--help", "-h"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a cron workflow",
          args: {
            name: "CRON_WORKFLOW",
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for get",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: json|yaml|wide",
              args: {
                name: "string",
              },
            },
          ],
        },
        {
          name: "lint",
          description:
            "Validate files or directories of cron workflow manifests",
          args: {
            name: "FILE",
          },
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            {
              name: ["--output", "-o"],
              description:
                'Linting results output format. One of: pretty|simple (default "pretty")',
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List cron workflows",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "Show workflows from all namespaces",
            },
            {
              name: "--chunk-size",
              description:
                "Return large lists in chunks rather than all at once. Pass 0 to disable",
              args: {
                name: "int",
              },
            },
            {
              name: "--completed",
              description:
                "Show completed workflows. Mutually exclusive with --running",
            },
            {
              name: "--field-selector",
              description:
                "Selector (field query) to filter on. Supports '=' '==' and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
              args: {
                name: "string",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            {
              name: "--no-headers",
              description: "Don't print headers (default print headers)",
            },
            {
              name: "--older",
              description:
                "List completed workflows finished before the specified duration (e.g. 10m 3h 1d)",
              args: {
                name: "string",
              },
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|wide|yaml|json",
              args: {
                name: "string",
              },
            },
            {
              name: "--prefix",
              description: "Filter workflows by prefix",
              args: {
                name: "string",
              },
            },
            {
              name: "--resubmitted",
              description: "Show resubmitted workflows",
            },
            {
              name: "--running",
              description:
                "Show running workflows. Mutually exclusive with --completed",
            },
            {
              name: ["--selector", "-l"],
              description: "Selector (label query) to filter on",
              args: {
                name: "string",
              },
            },
            {
              name: "--since",
              description:
                "Show only workflows created after than a relative duration",
              args: {
                name: "string",
              },
            },
            {
              name: "--status",
              description: "Filter by status (comma separated)",
              args: {
                name: "strings",
              },
            },
          ],
        },
        {
          name: "resume",
          description: "Resume zero or more cron workflows",
          args: {
            name: "CRON_WORKFLOW",
          },
        },
        {
          name: "suspend",
          description: "Suspend zero or more cron workflows",
          args: {
            name: "CRON_WORKFLOW",
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete workflows",
      args: {
        name: "WORKFLOW",
      },
      options: [
        {
          name: "--all",
          description: "Delete all workflows",
        },
        {
          name: ["--all-namespaces", "-A"],
          description: "Delete workflows from all namespaces",
        },
        {
          name: "--completed",
          description: "Delete completed workflows",
        },
        {
          name: "--dry-run",
          description:
            "Do not delete the workflow only print what would happen",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on supports '=' '==' and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description: "Force delete workflows by removing finalizers",
        },
        {
          name: ["--help", "-h"],
          description: "Help for delete",
        },
        {
          name: "--older",
          description:
            "Delete completed workflows finished before the specified duration (e.g. 10m 3h 1d)",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description: "Delete workflows by prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--resubmitted",
          description: "Delete resubmitted workflows",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on not including uninitialized ones supports '=''=='and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "executor-plugin",
      description: "Manage executor plugins",
      subcommands: [
        {
          name: "build",
          description: "Build an executor plugin",
          args: {
            name: "DIR",
          },
        },
      ],
    },
    {
      name: "get",
      description: "Display details about a workflow",
      args: {
        name: "WORKFLOW",
      },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for get",
        },
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        {
          name: "--no-utf8",
          description: "Use plain 7-bits ascii characters",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display, Eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output format. One of: json|yaml|short|wide",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filter by status (Pending, Running, Succeeded, Skipped, Failed, Error)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "lint",
      description: "Validate files or directories of manifests",
      args: {
        name: "FILE",
      },
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for lint",
        },
        {
          name: "--kinds",
          description:
            "Which kinds will be linted. Can be: workflows|workflowtemplates|cronworkflows|clusterworkflowtemplates (default [all])",
          args: {
            name: "strings",
          },
        },
        {
          name: "--offline",
          description: "Perform offline linting",
        },
        {
          name: ["--output", "-o"],
          description:
            'Linting results output format. One of: pretty|simple (default "pretty")',
          args: {
            name: "string",
          },
        },
        {
          name: "--strict",
          description: "Perform strict workflow validation (default true)",
        },
      ],
    },
    {
      name: "list",
      description: "List workflows",
      options: [
        {
          name: ["--all-namespaces", "-A"],
          description: "Show workflows from all namespaces",
        },
        {
          name: "--chunk-size",
          description:
            "Return large lists in chunks rather than all at once. Pass 0 to disable",
          args: {
            name: "int",
          },
        },
        {
          name: "--completed",
          description:
            "Show completed workflows. Mutually exclusive with --running",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on supports '=' '==' and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for list",
        },
        {
          name: "--no-headers",
          description: "Don't print headers (default print headers)",
        },
        {
          name: "--older",
          description:
            "List completed workflows finished before the specified duration (e.g. 10m 3h 1d)",
          args: {
            name: "string",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output format. One of: name|wide|yaml|json",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description: "Filter workflows by prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--resubmitted",
          description: "Show resubmitted workflows",
        },
        {
          name: "--running",
          description:
            "Show running workflows. Mutually exclusive with --completed",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: "--since",
          description:
            "Show only workflows created after than a relative duration",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "Filter by status (comma separated)",
          args: {
            name: "strings",
          },
        },
      ],
    },
    {
      name: "logs",
      description: "View logs of a pod or workflow",
      args: [
        {
          name: "WORKFOW",
        },
        {
          name: "POD",
          isOptional: true,
        },
      ],
      options: [
        {
          name: ["--container", "-c"],
          description: 'Print the logs of this container (default "main")',
          args: {
            name: "string",
          },
        },
        {
          name: ["--follow", "-f"],
          description: "Specify if the logs should be streamed",
        },
        {
          name: "--grep",
          description: "Grep for lines",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for logs",
        },
        {
          name: "--no-color",
          description: "Disable colorized output",
        },
        {
          name: ["--previous", "-p"],
          description:
            "Specify if the previously terminated container logs should be returned",
        },
        {
          name: ["--selector", "-l"],
          description: "Log selector for some pod",
          args: {
            name: "string",
          },
        },
        {
          name: "--since",
          description:
            "Only return logs newer than a relative duration like 5s 2m or 3h. Defaults to all logs. Only one of since-time / since may be used",
          args: {
            name: "duration",
          },
        },
        {
          name: "--since-time",
          description:
            "Only return logs after a specific date (RFC3339). Defaults to all logs. Only one of since-time / since may be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--tail",
          description:
            "If set the number of lines from the end of the logs to show. If not specified logs are shown from the creation of the container or sinceSeconds or sinceTime (default -1)",
          args: {
            name: "int",
          },
        },
        {
          name: "--timestamps",
          description: "Include timestamps on each line in the log output",
        },
      ],
    },
    {
      name: "node",
      description: "Perform action on a node in a workflow",
      args: [
        {
          name: "ACTION",
        },
        {
          name: "WORKFLOW",
        },
        {
          name: "FLAGS",
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for node",
        },
        {
          name: ["--message", "-m"],
          description: 'Set the message of a node eg: --message "Hello World"',
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to set eg: --node-field-selector inputs.paramaters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["--output-parameter", "-p"],
          description:
            'Set a "supplied" output parameter of node eg: --output-parameter parameter-name="Hello world!"',
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--phase",
          description: "Phase to set the node to eg: --phase Succeeded",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "resubmit",
      description: "Resubmit one or more workflows",
      args: { name: "WORKFLOW..." },
      options: [
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on: supports '=' '==' and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for resubmit",
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--memoized",
          description:
            "Re-use successful steps & outputs from the previous run",
        },
        {
          name: ["--output", "-o"],
          description: "Output format. One of: name|json|yaml|wide",
          args: {
            name: "string",
          },
        },
        {
          name: ["--parameter", "-p"],
          description:
            "Input parameter to override on the original workflow spec",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--priority",
          description: "Workflow priority",
          args: {
            name: "int32",
          },
        },
        {
          name: ["--selector", "-l"],
          description: "Selector (label query) to filter on",
          args: {
            name: "string",
          },
        },
        {
          name: ["--wait", "-w"],
          description:
            "Wait for the workflow to complete - only works when a single workflow is resubmitted",
        },
        {
          name: "--watch",
          description:
            "Watch the workflow until it completes - only works when a single workflow is resubmitted",
        },
      ],
    },
    {
      name: "resume",
      description: "Resume zero or more workflows",
      args: [
        {
          name: "WORKFLOW1",
        },
        {
          name: "WORKFLOW2...",
        },
      ],
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for resume",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to resume, Eg: --node-field-selector inputs.paramaters.myparam.value=abc",
          args: { name: "string" },
        },
      ],
    },
    {
      name: "retry",
      description: "Retry zero or more workflows",
      args: {
        name: "WORKFLOW...",
      },
      options: [
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on, Supports '='; '=='; and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["--help", "-h"],
          description: "Help for retry",
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of nodes to reset; eg: --node-field-selector inputs.paramaters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["--output", "-o"],
          description: "Output format. One of: name|json|yaml|wide",
          args: {
            name: "string",
          },
        },
        {
          name: ["--parameter", "-p"],
          description:
            "Input parameter to override on the original workflow spec",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--restart-successful",
          description:
            "Indicates to restart successful nodes matching the --node-field-selector",
        },
        {
          name: ["--selector", "-l"],
          description:
            "Selector (label query) to filter on; not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1,key2=value2)",
          args: {
            name: "string",
          },
        },
        {
          name: ["--wait", "-w"],
          description:
            "Wait for the workflow to complete only works when a single workflow is retried",
        },
        {
          name: "--watch",
          description:
            "Watch the workflow until it completes only works when a single workflow is retried",
        },
      ],
    },
    {
      name: "server",
      description: "Start the Argo Server",
      options: [
        {
          name: "--access-control-allow-origin",
          description:
            "Set Access-Control-Allow-Origin header in HTTP responses",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-link-protocol",
          description:
            "Allowed link protocol in configMap. Used if the allowed configMap links protocol are different from http https. Defaults to the environment variable ALLOWED_LINK_PROTOCOL (default [http https])",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--api-rate-limit",
          description: "Set limit per IP for api ratelimiter (default 1000)",
          args: {
            name: "uint",
          },
        },
        {
          name: "--auth-mode",
          description:
            "API server authentication mode. Any 1 or more length permutation of: client server sso (default [client])",
          args: {
            name: "stringArray",
          },
        },
        {
          name: "--basehref",
          description:
            'Value for base href in index.html. Used if the server is running behind reverse proxy under subpath different from /. Defaults to the environment variable BASE_HREF. (default " /")',
          args: {
            name: "string",
          },
        },
        {
          name: ["-b", "--browser"],
          description: "Enable automatic launching of the browser [local mode]",
        },
        {
          name: "--configmap",
          description:
            'Name of K8s configmap to retrieve workflow controller configuration (default "workflow-controller-configmap")',
          args: {
            name: "string",
          },
        },
        {
          name: "--event-async-dispatch",
          description: "Dispatch event async",
        },
        {
          name: "--event-operation-queue-size",
          description:
            "How many events operations that can be queued at once (default 16)",
          args: {
            name: "int",
          },
        },
        {
          name: "--event-worker-count",
          description: "How many event workers to run (default 4)",
          args: {
            name: "int",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for server",
        },
        {
          name: "--hsts",
          description:
            "Whether or not we should add a HTTP Secure Transport Security header. This only has effect if secure is enabled. (default true)",
        },
        {
          name: "--log-format",
          description:
            'The formatter to use for logs. One of: text|json (default "text")',
          args: {
            name: "string",
          },
        },
        {
          name: "--managed-namespace",
          description:
            "Namespace that watches default to the installation namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespaced",
          description: "Run as namespaced mode",
        },
        {
          name: ["-p", "--port"],
          description: "Port to listen on (default 2746)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tls-certificate-secret-name",
          description:
            "The name of a Kubernetes secret that contains the server certificates",
          args: {
            name: "string",
          },
        },
        {
          name: "--x-frame-options",
          description:
            'Set X-Frame-Options header in HTTP responses. (default "DENY")',
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "stop",
      description:
        "Stop zero or more workflows allowing all exit handlers to run",
      args: [
        {
          name: "WORKFLOW1",
        },
        {
          name: "WORKFLOW2...",
        },
      ],
      options: [
        {
          name: "--dry-run",
          description:
            "If true, only stop the workflows that would be stopped, without stopping them",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on  supports '='  '=='  and '!='.(e.g. --field-selector key1=value1,key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for stop",
        },
        {
          name: "--message",
          description: "Message to add to previously running nodes",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to stop eg: --node-field-selector inputs.paramaters.myparam.value=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["-l", "--selector"],
          description:
            "Selector (label query) to filter on not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1, key2=value2)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "submit",
      description: "Submit a workflow",
      args: {
        name: "FILE...",
      },
      options: [
        {
          name: "--dry-run",
          description:
            "Modify the workflow on the client-side without creating it",
        },
        {
          name: "--entrypoint",
          description: "Override entrypoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--from",
          description:
            "Submit from an existing kind/name E.g. --from=cronwf/hello-world-cwf",
          args: {
            name: "kind/name",
          },
        },
        {
          name: "--generate-name",
          description: "Override metadata.generateName",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for submit",
        },
        {
          name: ["-l", "--labels"],
          description:
            "Comma separated labels to apply to the workflow. Will override previous values",
          args: {
            name: "string",
          },
        },
        {
          name: "--log",
          description: "Log the workflow until it completes",
        },
        {
          name: "--name",
          description: "Override metadata.name",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        {
          name: ["-o", "--output"],
          description: "Output format. One of: name|json|yaml|wide",
          args: {
            name: "string",
          },
        },
        {
          name: ["-p", "--parameter"],
          description: "Pass an input parameter",
          args: {
            name: "stringArray",
          },
        },
        {
          name: ["-f", "--parameter-file"],
          description: "Pass a file containing all input parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--priority",
          description: "Workflow priority",
          args: {
            name: "int32",
          },
        },
        {
          name: "--scheduled-time",
          description:
            "Override the workflow's scheduledTime parameter (useful for backfilling). The time must be RFC3339",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-dry-run",
          description:
            "Send request to server with dry-run flag which will modify the workflow without creating it",
        },
        {
          name: "--serviceaccount",
          description:
            "Run all pods in the workflow using specified serviceaccount",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filter by status (Pending Running Succeeded Skipped Failed Error). Should only be used with --watch",
          args: {
            name: "string",
          },
        },
        {
          name: "--strict",
          description: "Perform strict workflow validation (default true)",
        },
        {
          name: ["-w", "--wait"],
          description: "Wait for the workflow to complete",
        },
        {
          name: "--watch",
          description: "Watch the workflow until it completes",
        },
      ],
    },
    {
      name: "suspend",
      description: "Suspend zero or more workflow",
      args: [
        {
          name: "WORKFLOW1",
        },
        {
          name: "WORKFLOW2...",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for suspend",
        },
      ],
    },
    {
      name: "template",
      description: "Manipulate workflow templates",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for template",
        },
      ],
      subcommands: [
        {
          name: "create",
          description: "Create a workflow template",
          args: [
            {
              name: "FILE1",
            },
            {
              name: "FILE2...",
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for create",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: name|json|yaml|wide",
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
          },
          options: [
            {
              name: "--all",
              description: "Delete all workflow templates",
            },
            {
              name: ["-h", "--help"],
              description: "Help for delete",
            },
          ],
        },
        {
          name: "get",
          description: "Display details about a workflow template",
          args: {
            name: "WORKFLOW_TEMPLATE",
          },
          options: [
            {
              name: ["-h", "--help"],
              description: "Help for get",
            },
            {
              name: ["-o", "--output"],
              args: {
                name: "string",
              },
              description: "Output format. One of: json|yaml|wide",
            },
          ],
        },
        {
          name: "lint",
          description:
            "Validate a file or directory of workflow template manifests",
          args: [
            {
              name: "DIRECTORY",
            },
            {
              name: "FILE1 FILE2 FILE3...",
            },
          ],
          options: [
            {
              name: ["--help", "-h"],
              description: "Help for lint",
            },
            {
              name: ["--output", "-o"],
              description:
                'Linting results output format. One of: pretty|simple (default "pretty")',
              args: {
                name: "string",
              },
            },
            {
              name: "--strict",
              description: "Perform strict workflow validation (default true)",
            },
          ],
        },
        {
          name: "list",
          description: "List workflow templates",
          options: [
            {
              name: ["--all-namespaces", "-A"],
              description: "Show workflows from all namespaces",
            },
            {
              name: ["--help", "-h"],
              description: "Help for list",
            },
            {
              name: ["--output", "-o"],
              description: "Output format. One of: wide|name",
              args: {
                name: "string",
              },
            },
          ],
        },
      ],
    },
    {
      name: "terminate",
      description: "Terminate zero or more workflows immediately",
      args: {
        name: "WORKFLOOW WORKFLOW2...",
      },
      options: [
        {
          name: "--dry-run",
          description:
            "Do not terminate the workflow only print what would happen",
        },
        {
          name: "--field-selector",
          description:
            "Selector (field query) to filter on supports '=' '==' and '!='.(e.g. --field-selector key1=value1key2=value2). The server only supports a limited number of field queries per type",
          args: {
            name: "string",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Help for terminate",
        },
        {
          name: ["-l", "--selector"],
          description:
            "Selector (label query) to filter on not including uninitialized ones supports '=' '==' and '!='.(e.g. -l key1=value1key2=value2)",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print version information",
      options: [
        {
          name: ["--help", "-h"],
          description: "Help for version",
        },
        {
          name: "--short",
          description: "Print just the version number",
        },
      ],
    },
    {
      name: "wait",
      description: "Waits for workflows to complete",
      args: {
        name: "[WORKFLOW...]",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for wait",
        },
        {
          name: "--ignore-not-found",
          description: "Ignore the wait if the workflow is not found",
        },
      ],
    },
    {
      name: "watch",
      description: "Watch a workflow until it completes",
      args: {
        name: "WORKFLOW",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for watch",
        },
        {
          name: "--node-field-selector",
          description:
            "Selector of node to display eg: --node-field-selector phase=abc",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Filter by status (Pending, Running, Succeeded, Skipped, Failed, Error)",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
  options: globalOptions,
  // Only uncomment if argo takes an argument
  // args: {}
};
export default completionSpec;
