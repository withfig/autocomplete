const completionSpec: Fig.Spec = {
  name: "redis",
  description: "Manage dedicated Redis caches for your Azure applications",
  subcommands: [
    { name: "create", description: "Create new Redis Cache instance" },
    { name: "delete", description: "Deletes a Redis cache" },
    { name: "export", description: "Export data stored in a Redis cache" },
    {
      name: "firewall-rules",
      description: "Manage Redis firewall rules",
      subcommands: [
        { name: "create", description: "Create a redis cache firewall rule" },
        {
          name: "delete",
          description:
            "Deletes a single firewall rule in a specified redis cache",
        },
        {
          name: "list",
          description: "Gets all firewall rules in the specified redis cache",
        },
        {
          name: "show",
          description: "Gets a single firewall rule in a specified redis cache",
        },
        { name: "update", description: "Update a redis cache firewall rule" },
      ],
    },
    { name: "force-reboot", description: "Reboot specified Redis node(s)" },
    { name: "import", description: "Import data into a Redis cache" },
    { name: "import-method", description: "Import data into Redis cache" },
    { name: "list", description: "List Redis Caches" },
    { name: "list-keys", description: "Retrieve a Redis cache's access keys" },
    {
      name: "patch-schedule",
      description: "Manage Redis patch schedules",
      subcommands: [
        {
          name: "create",
          description: "Create patching schedule for Redis cache",
        },
        {
          name: "delete",
          description: "Deletes the patching schedule of a redis cache",
        },
        {
          name: "show",
          description: "Gets the patching schedule of a redis cache",
        },
        {
          name: "update",
          description: "Update the patching schedule for Redis cache",
        },
      ],
    },
    {
      name: "regenerate-keys",
      description: "Regenerate Redis cache's access keys",
    },
    {
      name: "server-link",
      description: "Manage Redis server links",
      subcommands: [
        {
          name: "create",
          description:
            "Adds a server link to the Redis cache (requires Premium SKU)",
        },
        {
          name: "delete",
          description:
            "Deletes the linked server from a redis cache (requires Premium SKU)",
        },
        {
          name: "list",
          description:
            "Gets the list of linked servers associated with this redis cache (requires Premium SKU)",
        },
        {
          name: "show",
          description:
            "Gets the detailed information about a linked server of a redis cache (requires Premium SKU)",
        },
      ],
    },
    { name: "show", description: "Gets a Redis cache (resource description)" },
    { name: "update", description: "Update a Redis cache" },
  ],
};

export default completionSpec;
