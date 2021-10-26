const completionSpec: Fig.Spec = {
  name: "portal",
  description: "Manage Portal",
  subcommands: [
    {
      name: "dashboard",
      description: "Manage portal dashboards",
      subcommands: [
        { name: "create", description: "Creates or updates a dashboard" },
        { name: "delete", description: "Deletes a dashboard" },
        { name: "import", description: "Imports a dashboard from a JSON file" },
        {
          name: "list",
          description:
            "Lists the dashboards within a subscription or resource group",
        },
        { name: "show", description: "Gets details for a single dashboard" },
        { name: "update", description: "Updates an existing dashboard" },
      ],
    },
  ],
};

export default completionSpec;
