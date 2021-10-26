const completionSpec: Fig.Spec = {
  name: "tsi",
  description: "Manage Azure Time Series Insights",
  subcommands: [
    {
      name: "access-policy",
      description: "Manage access policy with timeseriesinsights",
      subcommands: [
        {
          name: "create",
          description: "Create an access policy in the specified environment",
        },
        { name: "delete", description: "Delete the access policy" },
        {
          name: "list",
          description:
            "List all the available access policies associated with the environment",
        },
        {
          name: "show",
          description:
            "Show the access policy with the specified name in the specified environment",
        },
        { name: "update", description: "Update the access policy" },
      ],
    },
    {
      name: "environment",
      description: "Manage environment with Azure Time Series Insights",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the environment with the specified name in the specified subscription and resource group",
        },
        {
          name: "gen1",
          description:
            "Manage a gen1 environment in the specified subscription and resource group",
          subcommands: [
            {
              name: "create",
              description:
                "Create a gen1 environment in the specified subscription and resource group",
            },
            {
              name: "update",
              description:
                "Update a gen1 environment in the specified subscription and resource group",
            },
          ],
        },
        {
          name: "gen2",
          description:
            "Manage a gen2 environment in the specified subscription and resource group",
          subcommands: [
            {
              name: "create",
              description:
                "Create a gen2 environment in the specified subscription and resource group",
            },
            {
              name: "update",
              description:
                "Update a gen2 environment in the specified subscription and resource group",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the available environments associated with the subscription and within the specified resource group",
        },
        {
          name: "show",
          description:
            "Show the environment with the specified name in the specified subscription and resource group",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the timeseriesinsights environment is met",
        },
      ],
    },
    {
      name: "event-source",
      description: "Manage event source with timeseriesinsights",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the event source with the specified name in the specified subscription, resource group, and environment",
        },
        {
          name: "eventhub",
          description:
            "Manage event source with timeseriesinsights sub group event-hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create an event source under the specified environment",
            },
            {
              name: "update",
              description:
                "Update an event source under the specified environment",
            },
          ],
        },
        {
          name: "iothub",
          description:
            "Manage event source with timeseriesinsights sub group iot-hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create an event source under the specified environment",
            },
            {
              name: "update",
              description:
                "Update an event source under the specified environment",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the available event sources associated with the subscription and within the specified resource group and environment",
        },
        {
          name: "show",
          description:
            "Show the event source with the specified name in the specified environment",
        },
      ],
    },
    {
      name: "reference-data-set",
      description: "Manage reference data set with timeseriesinsights",
      subcommands: [
        {
          name: "create",
          description:
            "Create a reference data set in the specified environment",
        },
        { name: "delete", description: "Delete the reference data set" },
        {
          name: "list",
          description:
            "List all the available reference data sets associated with the subscription and within the specified resource group and environment",
        },
        {
          name: "show",
          description:
            "Show the reference data set with the specified name in the specified environment",
        },
        { name: "update", description: "Update the reference data set" },
      ],
    },
  ],
};

export default completionSpec;
