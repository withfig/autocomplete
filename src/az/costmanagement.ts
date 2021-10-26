const completionSpec: Fig.Spec = {
  name: "costmanagement",
  description: "Manage cost and billing in Azure",
  subcommands: [
    {
      name: "export",
      description: "Costmanagement export",
      subcommands: [
        { name: "create", description: "The operation to create an export" },
        { name: "delete", description: "The operation to delete an export" },
        {
          name: "list",
          description: "The operation to list all exports at the given scope",
        },
        {
          name: "show",
          description:
            "The operation to get the execution history of an export for the defined scope by export name",
        },
        { name: "update", description: "The operation to update an export" },
      ],
    },
    { name: "query", description: "Query the usage data for scope defined" },
  ],
};

export default completionSpec;
