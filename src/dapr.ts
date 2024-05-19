const completionSpec: Fig.Spec = {
  name: "dapr",
  description: "",
  subcommands: [
    {
      name: "annotate",
      description:
        "Add dapr annotations to a Kubernetes configuration. Supported platforms: Kubernetes",
    },
    {
      name: "build-info",
      description: "Print build info of Dapr CLI and runtime",
    },
    {
      name: "completion",
      description: "Generates shell completion scripts",
      subcommands: [
        {
          name: "bash",
          description: "Generates bash completion scripts",
        },
        {
          name: "fish",
          description: "Generates fish completion scripts",
        },
        {
          name: "powershell",
          description: "Generates powershell completion scripts",
        },
        {
          name: "zsh",
          description: "Generates zsh completion scripts",
        },
      ],
    },
    {
      name: "components",
      description: "List all Dapr components. Supported platforms: Kubernetes",
      options: [
        {
          name: ["--kubernetes", "-k"],
          description: "List all Dapr components in a Kubernetes cluster",
        },
      ],
    },
    {
      name: "configurations",
      description:
        "List all Dapr configurations. Supported platforms: Kubernetes",
      options: [
        {
          name: ["--kubernetes", "-k"],
          description: "List all Dapr configurations in a Kubernetes cluster",
        },
      ],
    },
    {
      name: "dashboard",
      description:
        "Start Dapr dashboard. Supported platforms: Kubernetes and self-hosted",
    },
    {
      name: "help",
      description: "Help about any command",
    },
    {
      name: "init",
      description:
        "Install Dapr on supported hosting platforms. Supported platforms: Kubernetes and self-hosted",
    },
    {
      name: "invoke",
      description:
        "Invoke a method on a given Dapr application. Supported platforms: Self-hosted",
    },
    {
      name: "list",
      description:
        "List all Dapr instances. Supported platforms: Kubernetes and self-hosted",
    },
    {
      name: "logs",
      description:
        "Get Dapr sidecar logs for an application. Supported platforms: Kubernetes",
    },
    {
      name: "mtls",
      description: "Check if mTLS is enabled. Supported platforms: Kubernetes",
    },
    {
      name: "publish",
      description: "Publish a pub-sub event. Supported platforms: Self-hosted",
    },
    {
      name: "run",
      description:
        "Run Dapr and (optionally) your application side by side. Supported platforms: Self-hosted",
    },
    {
      name: "status",
      description:
        "Show the health status of Dapr services. Supported platforms: Kubernetes",
    },
    {
      name: "stop",
      description:
        "Stop Dapr instances and their associated apps. Supported platforms: Self-hosted",
    },
    {
      name: "uninstall",
      description:
        "Uninstall Dapr runtime. Supported platforms: Kubernetes and self-hosted",
    },
    {
      name: "upgrade",
      description:
        "Upgrades or downgrades a Dapr control plane installation in a cluster. Supported platforms: Kubernetes",
    },
    {
      name: "version",
      description: "Print the Dapr runtime and CLI version",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for dapr",
    },
    {
      name: "--log-as-json",
      description: "Log output in JSON format",
    },
    {
      name: "--runtime-path",
      description: "The path to the dapr runtime installation directory",
    },
    {
      name: ["--version", "-v"],
      description: "Version for dapr",
    },
  ],
  // Only uncomment if dapr takes an argument
  // args: {}
};
export default completionSpec;
