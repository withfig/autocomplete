const namespaces: Fig.Generator = {
  script: ["kubectl", "get", "namespaces"],
  postProcess: (out) => {
    return out
      .split("\n")
      .slice(1)
      .map((line) => {
        return {
          name: line.split(" ").shift(),
          description: "Kubernetes namespace",
        };
      });
  },
};

const completionSpec: Fig.Spec = {
  name: "k9s",
  description:
    "K9s is a terminal based UI to interact with your Kubernetes clusters",
  subcommands: [
    {
      name: "help",
      description: "Help about any command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    {
      name: "info",
      description: "Print configuration info",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for info",
        },
      ],
    },
    {
      name: "version",
      description: "Print version/build info",
      options: [
        {
          name: ["-h", "--help"],
          description: "Help for version",
        },
        {
          name: ["-s", "--short"],
          description: "Prints K9s version info in short format",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-A", "--all-namespaces"],
      description: "Launch K9s in all namespaces",
    },
    {
      name: "--as",
      description: "Username to impersonate for the operation",
      args: {
        name: "string",
        description: "The username you want to impersonate",
      },
    },
    {
      name: "--as-group",
      description: "Group to impersonate for the operation",
      args: {
        name: "stringArray",
        description: "The group you want to impersonate",
      },
    },
    {
      name: "--certificate-authority",
      description: "Path to a cert file for the certificate authority",
      args: {
        name: "string",
        description: "The path to a cert file",
        template: "filepaths",
      },
    },
    {
      name: "--client-key",
      description: "Path to a client key file for TLS",
      args: {
        name: "string",
        description: "The path to a client key file",
        template: "filepaths",
      },
    },
    {
      name: ["-c", "--command"],
      description:
        "Overrides the default resource to load when the application launches",
      args: {
        name: "string",
        description: "The command you want to execute",
      },
    },
    {
      name: "--context",
      description: "The name of the kubeconfig context to use",
      args: {
        name: "string",
        description: "The name of the kubeconfig context",
      },
    },
    {
      name: "--crumbsless",
      description: "Turn K9s crumbs off",
    },
    {
      name: "--headless",
      description: "Turn K9s header off",
    },
    {
      name: ["-h", "--help"],
      description: "Show help for k9s",
    },
    {
      name: "--insecure-skip-tls-verify",
      description:
        "If true, the server's caCertFile will not be checked for validity",
    },
    {
      name: "--kubeconfig",
      description: "Path to the kubeconfig file to use for CLI requests",
      args: {
        name: "string",
        description: "The path to the kubeconfig file",
        template: "filepaths",
      },
    },
    {
      name: "--logFile",
      description: "Specify the log file",
      args: {
        name: "string",
        description: "The path of the log file",
        template: "filepaths",
        suggestCurrentToken: true,
      },
    },
    {
      name: ["-l", "--logLevel"],
      description:
        "Specify a log level (info, warn, debug, trace, error) (default 'info')",
      args: {
        name: "string",
        description: "The log level",
        default: "info",
        suggestions: ["info", "warn", "debug", "trace", "error"],
      },
    },
    {
      name: "--logoless",
      description: "Turn K9s logo off",
    },
    {
      name: ["-n", "--namespace"],
      description: "If present, the namespace scope for this CLI request",
      args: {
        name: "string",
        description: "The namespace",
        generators: namespaces,
        debounce: true,
      },
    },
    {
      name: "--readonly",
      description:
        "Sets readOnly mode by overriding readOnly configuration setting",
    },
    {
      name: ["-r", "--refresh"],
      description:
        "Specify the default refresh rate as an integer (sec) (default 2)",
      args: {
        name: "int",
        description: "The refresh rate (sec)",
        default: "2",
      },
    },
    {
      name: "--request-timeout",
      description:
        "The length of time to wait before giving up on a single server request",
      args: {
        name: "string",
        description: "The length of time to wait",
      },
    },
    {
      name: "--screen-dump-dir",
      description: "Sets a path to a dir for a screen dumps",
      args: {
        name: "string",
        description: "The path to a dir for a screen dumps",
      },
    },
    {
      name: "--token",
      description: "Bearer token for authentication to the API server",
      args: {
        name: "string",
        description: "The Bearer token",
      },
    },
    {
      name: "--user",
      description: "The name of the kubeconfig user to use",
      args: {
        name: "string",
        description: "The name of the kubeconfig user",
      },
    },
    {
      name: "--write",
      description:
        "Sets write mode by overriding the readOnly configuration setting",
    },
  ],
};
export default completionSpec;
