const completionSpec: Fig.Spec = {
  name: "storagesync",
  description: "Manage Azure File Sync",
  subcommands: [
    { name: "create", description: "Create a new storage sync service" },
    { name: "delete", description: "Delete a given storage sync service" },
    {
      name: "list",
      description:
        "List all storage sync services in a resource group or a subscription",
    },
    {
      name: "registered-server",
      description: "Manage registered server",
      subcommands: [
        {
          name: "delete",
          description:
            "Unregister an on-premises server from it's storage sync service",
        },
        {
          name: "list",
          description:
            "List all registered servers for a given storage sync service",
        },
        {
          name: "show",
          description: "Show the properties for a given registered server",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of a registered server is met",
        },
      ],
    },
    {
      name: "show",
      description: "Show the properties for a given storage sync service",
    },
    {
      name: "sync-group",
      description: "Manage sync group",
      subcommands: [
        {
          name: "cloud-endpoint",
          description: "Manage cloud endpoint",
          subcommands: [
            { name: "create", description: "Create a new cloud endpoint" },
            { name: "delete", description: "Delete a given cloud endpoint" },
            {
              name: "list",
              description: "List all cloud endpoints in a sync group",
            },
            {
              name: "show",
              description: "Show the properties for a given cloud endpoint",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a cloud endpoint is met",
            },
          ],
        },
        { name: "create", description: "Create a new sync group" },
        { name: "delete", description: "Delete a given sync group" },
        {
          name: "list",
          description: "List all sync groups in a storage sync service",
        },
        {
          name: "server-endpoint",
          description: "Manage server endpoint",
          subcommands: [
            { name: "create", description: "Create a new server endpoint" },
            { name: "delete", description: "Delete a given server endpoint" },
            {
              name: "list",
              description: "List all server endpoints in a sync group",
            },
            {
              name: "show",
              description: "Show the properties for a given server endpoint",
            },
            {
              name: "update",
              description: "Update the properties for a given server endpoint",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of a server endpoint is met",
            },
          ],
        },
        {
          name: "show",
          description: "Show the properties for a given sync group",
        },
      ],
    },
  ],
};

export default completionSpec;
