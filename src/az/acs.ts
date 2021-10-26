const completionSpec: Fig.Spec = {
  name: "acs",
  description: "Manage Azure Container Services",
  subcommands: [
    {
      name: "browse",
      description:
        "Show the dashboard for a service container's orchestrator in a web browser",
    },
    { name: "create", description: "Create a new container service" },
    {
      name: "dcos",
      description:
        "Commands to manage a DC/OS-orchestrated Azure Container Service",
      subcommands: [
        {
          name: "browse",
          description:
            "Creates an SSH tunnel to the Azure container service, and opens the Mesosphere DC/OS dashboard in the browser",
        },
        {
          name: "install-cli",
          description:
            "Download and install the DC/OS command-line tool for a cluster",
        },
      ],
    },
    { name: "delete", description: "Delete a container service" },
    {
      name: "kubernetes",
      description:
        "Commands to manage a Kubernetes-orchestrated Azure Container Service",
      subcommands: [
        {
          name: "browse",
          description: "Launch a proxy and browse the Kubernetes web UI",
        },
        {
          name: "get-credentials",
          description:
            "Download and install credentials to access a cluster. This command requires the same private-key used to create the cluster",
        },
        {
          name: "install-cli",
          description:
            "Download and install the Kubernetes command-line tool for a cluster",
        },
      ],
    },
    { name: "list", description: "List container services" },
    {
      name: "list-locations",
      description:
        "List locations where Azure Container Service is in preview and in production",
    },
    {
      name: "scale",
      description: "Change the private agent count of a container service",
    },
    { name: "show", description: "Show the details for a container service" },
    {
      name: "wait",
      description: "Wait for a container service to reach a desired state",
    },
  ],
};

export default completionSpec;
