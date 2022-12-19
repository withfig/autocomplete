import fig from "./fig";

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
};

export default completionSpec;
