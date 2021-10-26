const completionSpec: Fig.Spec = {
  name: "support",
  description: "Manage Azure support resource",
  subcommands: [
    {
      name: "services",
      description: "Azure services and related problem categories",
      subcommands: [
        {
          name: "list",
          description:
            "Lists all the Azure services available for support ticket creation. Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids",
        },
        {
          name: "problem-classifications",
          description: "Problem classifications for an Azure service",
          subcommands: [
            {
              name: "list",
              description:
                "Lists all the problem classifications (categories) available for an Azure service. Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids",
            },
            {
              name: "show",
              description:
                "Gets the problem classification details for an Azure service",
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets a specific Azure service for support ticket creation",
        },
      ],
    },
    {
      name: "tickets",
      description: "Create and manage Azure support ticket",
      subcommands: [
        {
          name: "communications",
          description: "Manage support ticket communications",
          subcommands: [
            {
              name: "create",
              description:
                "Adds a new customer communication to an Azure support ticket",
            },
            {
              name: "list",
              description:
                "Lists all communications (attachments not included) for a support ticket",
            },
            {
              name: "show",
              description: "Gets communication details for a support ticket",
            },
          ],
        },
        {
          name: "create",
          description:
            "Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription",
        },
        {
          name: "list",
          description:
            "Lists all the support tickets for an Azure subscription",
        },
        {
          name: "show",
          description: "Gets support ticket details for an Azure subscription",
        },
        {
          name: "update",
          description:
            "Updates severity level, status and customer contact information for a support ticket",
        },
      ],
    },
  ],
};

export default completionSpec;
