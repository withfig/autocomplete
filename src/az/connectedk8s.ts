const completionSpec: Fig.Spec = {
  name: "connectedk8s",
  description: "Commands to manage connected kubernetes clusters",
  subcommands: [
    {
      name: "connect",
      description: "Onboard a connected kubernetes cluster to azure",
    },
    {
      name: "delete",
      description:
        "Delete a connected kubernetes cluster along with connected cluster agents",
    },
    {
      name: "disable-features",
      description: "Disables the selective features on the connected cluster",
    },
    {
      name: "enable-features",
      description: "Enables the selective features on the connected cluster",
    },
    { name: "list", description: "List connected kubernetes clusters" },
    {
      name: "proxy",
      description: "Get access to a connected kubernetes cluster",
    },
    {
      name: "show",
      description: "Show details of a connected kubernetes cluster",
    },
    {
      name: "update",
      description: "Update properties of the onboarded agents",
    },
    {
      name: "upgrade",
      description:
        "Atomically upgrade onboarded agents to the specific version or default to the latest version",
    },
  ],
};

export default completionSpec;
