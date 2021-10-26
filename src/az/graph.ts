const completionSpec: Fig.Spec = {
  name: "graph",
  description: "Query the resources managed by Azure Resource Manager",
  subcommands: [
    {
      name: "query",
      description: "Query the resources managed by Azure Resource Manager",
    },
    {
      name: "shared-query",
      description: "Manage shared query of Azure resource graph",
      subcommands: [
        { name: "create", description: "Create a shared query" },
        { name: "delete", description: "Delete a shared query" },
        {
          name: "list",
          description: "List all shared query in a resource group",
        },
        { name: "show", description: "Show the properties of a shared query" },
      ],
    },
  ],
};

export default completionSpec;
