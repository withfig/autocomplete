const completionSpec: Fig.Spec = {
  name: "redisenterprise",
  description:
    "Manage dedicated Redis Enterprise caches for your Azure applications",
  subcommands: [
    {
      name: "create",
      description: "Create new Redis Enterprise cache instance",
    },
    {
      name: "database",
      description: "Manage Redis Enterprise databases",
      subcommands: [
        {
          name: "create",
          description: "Create new database for a Redis Enterprise cache",
        },
        {
          name: "delete",
          description: "Delete a single database in a Redis Enterprise cache",
        },
        {
          name: "export",
          description: "Export data stored in a Redis Enterprise database",
        },
        {
          name: "import",
          description: "Import data into a Redis Enterprise database",
        },
        {
          name: "list",
          description: "List all databases in a Redis Enterprise cache",
        },
        {
          name: "list-keys",
          description:
            "Retrieve all access keys for a Redis Enterprise database",
        },
        {
          name: "regenerate-key",
          description:
            "Regenerate an access key for a Redis Enterprise database",
        },
        {
          name: "show",
          description:
            "Get information about a database in a Redis Enterprise cache",
        },
        {
          name: "update",
          description: "Update an existing Redis Enterprise database",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Redis Enterprise database is met",
        },
      ],
    },
    { name: "delete", description: "Delete a Redis Enterprise cache" },
    { name: "list", description: "List Redis Enterprise caches" },
    {
      name: "operation-status",
      description: "Manage Redis Enterprise operation status",
      subcommands: [
        { name: "show", description: "Get the status of an operation" },
      ],
    },
    {
      name: "show",
      description: "Get information about a Redis Enterprise cache",
    },
    {
      name: "update",
      description: "Update an existing Redis Enterprise cache cluster",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the Redis Enterprise cache cluster is met",
    },
  ],
};

export default completionSpec;
