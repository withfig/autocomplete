const completionSpec: Fig.Spec = {
  name: "logic",
  description: "Manage Logic",
  subcommands: [
    {
      name: "integration-account",
      description: "Logic integration-account",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates an integration account",
        },
        { name: "delete", description: "Deletes an integration account" },
        {
          name: "import",
          description: "Import an integration account from a JSON file",
        },
        {
          name: "list",
          description: "Gets a list of integration accounts by subscription",
        },
        { name: "show", description: "Gets an integration account" },
        { name: "update", description: "Updates an integration account" },
      ],
    },
    {
      name: "workflow",
      description: "Logic workflow",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a workflow using a JSON file for the defintion",
        },
        { name: "delete", description: "Deletes a workflow" },
        {
          name: "list",
          description: "Gets a list of workflows by subscription",
        },
        { name: "show", description: "Gets a workflow" },
        { name: "update", description: "Updates a workflow" },
      ],
    },
  ],
};

export default completionSpec;
