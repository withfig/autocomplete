const completionSpec: Fig.Spec = {
  name: "footprint",
  description: "",
  subcommands: [
    {
      name: "experiment",
      description: "Commands to manage experiments under a profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a Footprint experiment with the specified properties",
        },
        {
          name: "delete",
          description: "Deletes an existing Footprint experiment",
        },
        {
          name: "list",
          description:
            "Retrieves the information about all experiments under a Footprint profile",
        },
        {
          name: "show",
          description:
            "Retrieves the information about a single Footprint experiment",
        },
        {
          name: "update",
          description:
            "Creates or updates a Footprint experiment with the specified properties",
        },
      ],
    },
    {
      name: "measurement-endpoint",
      description: "Commands to manage measurement endpoints under a profile",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a single measurement endpoint under a Footprint profile with the specified properties",
        },
        {
          name: "delete",
          description:
            "Deletes an existing measurement endpoint under a Footprint profile",
        },
        {
          name: "list",
          description:
            "Retrieves the information about all measurement endpoints under a Footprint profile",
        },
        {
          name: "show",
          description:
            "Retrieves the information about a single measurement endpoint under a Footprint profile",
        },
        {
          name: "update",
          description:
            "Creates or updates a single measurement endpoint under a Footprint profile with the specified properties",
        },
      ],
    },
    {
      name: "measurement-endpoint-condition",
      description:
        "Commands to manage measurement endpoint conditions under a measurement endpoint",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a measurement endpoint condition under a Footprint measurement with the specified properties",
        },
        {
          name: "delete",
          description:
            "Deletes an existing measurement endpoint condition under a Footprint measurement",
        },
        {
          name: "list",
          description:
            "Retrieves the information about all measurement endpoint conditions under a Footprint measurement endpoint",
        },
        {
          name: "show",
          description:
            "Retrieves the information about a single measurement endpoint condition under a Footprint measurement endpoint",
        },
        {
          name: "update",
          description:
            "Creates or updates a measurement endpoint condition under a Footprint measurement with the specified properties",
        },
      ],
    },
    {
      name: "profile",
      description: "Commands to manage Footprint profiles",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a Footprint profile with the specified properties",
        },
        {
          name: "delete",
          description: "Deletes an existing Footprint profile",
        },
        {
          name: "list",
          description:
            "Retrieves the information about all Footprint profiles under a subscription",
        },
        {
          name: "show",
          description:
            "Retrieves the information about a single Footprint profile",
        },
        {
          name: "update",
          description: "Updates an existing Footprint profile resource",
        },
      ],
    },
  ],
};

export default completionSpec;
