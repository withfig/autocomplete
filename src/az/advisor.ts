const completionSpec: Fig.Spec = {
  name: "advisor",
  description: "Manage Azure Advisor",
  subcommands: [
    {
      name: "configuration",
      description: "Manage Azure Advisor configuration",
      subcommands: [
        {
          name: "list",
          description:
            "List Azure Advisor configuration for the entire subscription",
        },
        {
          name: "show",
          description:
            "Show Azure Advisor configuration for the given subscription or resource group",
        },
        { name: "update", description: "Update Azure Advisor configuration" },
      ],
    },
    {
      name: "recommendation",
      description: "Review Azure Advisor recommendations",
      subcommands: [
        {
          name: "disable",
          description: "Disable Azure Advisor recommendations",
        },
        { name: "enable", description: "Enable Azure Advisor recommendations" },
        { name: "list", description: "List Azure Advisor recommendations" },
      ],
    },
  ],
};

export default completionSpec;
