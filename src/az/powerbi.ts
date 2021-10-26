const completionSpec: Fig.Spec = {
  name: "powerbi",
  description: "Manage PowerBI resources",
  subcommands: [
    {
      name: "embedded-capacity",
      description: "Manage PowerBI embedded capacity",
      subcommands: [
        {
          name: "create",
          description: "Create a new PowerBI embedded capacity",
        },
        {
          name: "delete",
          description: "Delete the specified PowerBI embedded capacity",
        },
        {
          name: "list",
          description:
            "List all the embedded capacities for the given resource group",
        },
        {
          name: "show",
          description:
            "Get details about the specified PowerBI embedded capacity",
        },
        {
          name: "update",
          description: "Update the specified PowerBI embedded capacity",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of PowerBI embedded capacity is met",
        },
      ],
    },
  ],
};

export default completionSpec;
