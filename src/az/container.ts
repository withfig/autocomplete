const completionSpec: Fig.Spec = {
  name: "container",
  description: "Manage Azure Container Instances",
  subcommands: [
    {
      name: "app",
      description: "Commands to Manage Azure Container Instances App",
      subcommands: [
        {
          name: "up",
          description:
            "Deploy to Azure Container Instances using GitHub Actions",
        },
      ],
    },
    {
      name: "attach",
      description:
        "Attach local standard output and error streams to a container in a container group",
    },
    { name: "create", description: "Create a container group" },
    { name: "delete", description: "Delete a container group" },
    {
      name: "exec",
      description:
        "Execute a command from within a running container of a container group",
    },
    { name: "export", description: "Export a container group in yaml format" },
    { name: "list", description: "List container groups" },
    {
      name: "logs",
      description: "Examine the logs for a container in a container group",
    },
    {
      name: "restart",
      description: "Restarts all containers in a container group",
    },
    { name: "show", description: "Get the details of a container group" },
    {
      name: "start",
      description: "Starts all containers in a container group",
    },
    { name: "stop", description: "Stops all containers in a container group" },
  ],
};

export default completionSpec;
