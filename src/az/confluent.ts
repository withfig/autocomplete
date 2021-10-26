const completionSpec: Fig.Spec = {
  name: "confluent",
  description: "Manage confluent resources",
  subcommands: [
    {
      name: "offer-detail",
      description: "Manage confluent offer details",
      subcommands: [
        {
          name: "show",
          description: "Get the offer details for available offers",
        },
      ],
    },
    {
      name: "organization",
      description: "Manage organization with confluent",
      subcommands: [
        { name: "create", description: "Create Organization resource" },
        { name: "delete", description: "Delete Organization resource" },
        {
          name: "list",
          description:
            "List all Organizations under the specified resource group. And List all organizations under the specified subscription",
        },
        {
          name: "show",
          description: "Get the properties of a specific Organization resource",
        },
        { name: "update", description: "Update Organization resource" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the confluent organization is met",
        },
      ],
    },
    {
      name: "terms",
      description:
        "Manage marketplace agreement with confluent. This command group will be deprecated, please use 'az term' instead",
      subcommands: [
        {
          name: "list",
          description:
            "List Confluent marketplace agreements in the subscription. This command will be deprecated, please use 'az term show' instead",
        },
      ],
    },
  ],
};

export default completionSpec;
