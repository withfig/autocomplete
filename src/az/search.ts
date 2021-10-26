const completionSpec: Fig.Spec = {
  name: "search",
  description: "Manage Azure Search services, admin keys and query keys",
  subcommands: [
    {
      name: "admin-key",
      description: "Manage Azure Search admin keys",
      subcommands: [
        {
          name: "renew",
          description:
            "Regenerates either the primary or secondary admin API key",
        },
        {
          name: "show",
          description:
            "Gets the primary and secondary admin API keys for the specified Azure Cognitive Search service",
        },
      ],
    },
    {
      name: "private-endpoint-connection",
      description: "Manage Azure Search private endpoint connections",
      subcommands: [
        {
          name: "delete",
          description:
            "Disconnects the private endpoint connection and deletes it from the search service",
        },
        {
          name: "list",
          description:
            "Gets a list of all private endpoint connections in the given service",
        },
        {
          name: "show",
          description:
            "Gets the details of the private endpoint connection to the search service in the given resource group",
        },
        {
          name: "update",
          description:
            "Update an existing private endpoint connection in a Search service in the given resource group",
        },
      ],
    },
    {
      name: "private-link-resource",
      description: "Manage Azure Search private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "Gets a list of all supported private link resource types for the given service",
        },
      ],
    },
    {
      name: "query-key",
      description: "Manage Azure Search query keys",
      subcommands: [
        {
          name: "create",
          description:
            "Generates a new query key for the specified search service",
        },
        { name: "delete", description: "Deletes the specified query key" },
        {
          name: "list",
          description:
            "Returns the list of query API keys for the given Azure Cognitive Search service",
        },
      ],
    },
    {
      name: "service",
      description: "Manage Azure Search services",
      subcommands: [
        {
          name: "create",
          description: "Creates a Search service in the given resource group",
        },
        {
          name: "delete",
          description:
            "Deletes a search service in the given resource group, along with its associated resources",
        },
        {
          name: "list",
          description:
            "Gets a list of all search services in the given resource group",
        },
        {
          name: "show",
          description:
            "Gets the search service with the given name in the given resource group",
        },
        {
          name: "update",
          description:
            "Update partition and replica of the given search service",
        },
        { name: "wait", description: "Wait for async service operations" },
      ],
    },
    {
      name: "shared-private-link-resource",
      description: "Manage Azure Search shared private link resources",
      subcommands: [
        {
          name: "create",
          description:
            "Create shared privatelink resources in a Search service in the given resource group",
        },
        {
          name: "delete",
          description:
            "Initiates the deletion of the shared private link resource from the search service",
        },
        {
          name: "list",
          description:
            "Gets a list of all shared private link resources managed by the given service",
        },
        {
          name: "show",
          description:
            "Gets the details of the shared private link resource managed by the search service in the given resource group",
        },
        {
          name: "update",
          description:
            "Update shared privatelink resources in a Search service in the given resource group",
        },
        {
          name: "wait",
          description: "Wait for async shared private link resource operations",
        },
      ],
    },
  ],
};

export default completionSpec;
