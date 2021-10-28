const completionSpec: Fig.Spec = {
  name: "scw",
  description: "Command Line Interface for Scaleway",
  subcommands: [
    {
      name: "account",
      description: "Account API",
    },
    {
      name: "apple-silicon",
      description: "Apple silicon API",
    },
    {
      name: "autocomplete",
      description: "Autocomplete related subcommands",
    },
    {
      name: "baremetal",
      description: "Baremetal API",
    },
    {
      name: "config",
      description: "Config file management",
    },
    {
      name: "dns",
      description: "DNS API",
    },
    {
      name: "feedback",
      description: "Send feedback to the Scaleway CLI Team!",
    },
    {
      name: "help",
      description: "Get help about how the CLI works",
    },
    {
      name: "info",
      description: "Get info about current settings",
    },
    {
      name: "init",
      description: "Initialize the config",
    },
    {
      name: "instance",
      description: "Instance API",
    },
    {
      name: "iot",
      description: "This API allows you to manage IoT hubs and devices",
    },
    {
      name: "k8s",
      description: "Kapsule API",
    },
    {
      name: "lb",
      description: "This API allows you to manage your load balancer service",
    },
    {
      name: "marketplace",
      description: "Marketplace API",
    },
    {
      name: "object",
      description: "Object-storage utils",
    },
    {
      name: "rdb",
      description: "Database RDB API",
    },
    {
      name: "registry",
      description: "Container registry API",
    },
    {
      name: "version",
      description: "Display CLI version",
    },
    {
      name: "vpc",
      description: "VPC API",
    },
  ],
  options: [
    {
      name: ["-c", "--config"],
      description: "The path to the config file",
      isPersistent: true,
      args: {
        name: "config",
        template: "filepaths",
      },
    },
    {
      name: ["-D", "--debug"],
      isPersistent: true,
      description: "Enable debug mode",
    },
    {
      name: ["-h", "--help"],
      isPersistent: true,
      description: "Show help for scw",
    },
    {
      name: ["-o", "--output"],
      description:
        "Output format: json or human, see `scw help output` for more info (default: `human`)",
      isPersistent: true,
      args: {
        name: "output",
        default: "human",
        suggestions: ["json", "human"],
      },
    },
    {
      name: ["-p", "--profile"],
      description: "The config profile to use",
      isPersistent: true,
      args: {
        name: "profile",
      },
    },
  ],
};
export default completionSpec;
