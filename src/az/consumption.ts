const completionSpec: Fig.Spec = {
  name: "consumption",
  description: "Manage consumption of Azure resources",
  subcommands: [
    {
      name: "budget",
      description: "Manage budgets for an Azure subscription",
      subcommands: [
        {
          name: "create",
          description: "Create a budget for an Azure subscription",
        },
        {
          name: "delete",
          description: "Delete a budget for an Azure subscription",
        },
        { name: "list", description: "List budgets for an Azure subscription" },
        { name: "show", description: "Show budget for an Azure subscription" },
      ],
    },
    {
      name: "marketplace",
      description:
        "Inspect the marketplace usage data of an Azure subscription within a billing period",
      subcommands: [
        {
          name: "list",
          description:
            "List the marketplace for an Azure subscription within a billing period",
        },
      ],
    },
    {
      name: "pricesheet",
      description:
        "Inspect the price sheet of an Azure subscription within a billing period",
      subcommands: [
        {
          name: "show",
          description:
            "Show the price sheet for an Azure subscription within a billing period",
        },
      ],
    },
    {
      name: "reservation",
      description: "Manage reservations for Azure resources",
      subcommands: [
        {
          name: "detail",
          description: "List reservation details",
          subcommands: [
            {
              name: "list",
              description:
                "List the details of a reservation by order id or reservation id",
            },
          ],
        },
        {
          name: "summary",
          description: "List reservation summaries",
          subcommands: [
            {
              name: "list",
              description:
                "List reservation summaries for daily or monthly by order Id or reservation id",
            },
          ],
        },
      ],
    },
    {
      name: "usage",
      description: "Inspect the usage of Azure resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the details of Azure resource consumption, either as an invoice or within a billing period",
        },
      ],
    },
  ],
};

export default completionSpec;
