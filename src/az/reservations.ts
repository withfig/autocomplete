const completionSpec: Fig.Spec = {
  name: "reservations",
  description: "Manage Azure Reservations",
  subcommands: [
    {
      name: "catalog",
      description: "See catalog of available reservations",
      subcommands: [
        { name: "show", description: "Get catalog of available reservation" },
      ],
    },
    {
      name: "reservation",
      description: "Manage reservation entities",
      subcommands: [
        { name: "list", description: "Get all reservations" },
        { name: "list-history", description: "Get history of a reservation" },
        { name: "merge", description: "Merge two reservations" },
        { name: "show", description: "Get details of a reservation" },
        { name: "split", description: "Split a reservation" },
        {
          name: "update",
          description: "Updates the applied scopes of the reservation",
        },
      ],
    },
    {
      name: "reservation-order",
      description:
        "Manage reservation order, which is container for reservations",
      subcommands: [
        {
          name: "calculate",
          description: "Calculate price for a reservation order",
        },
        { name: "list", description: "Get all reservation orders" },
        { name: "purchase", description: "Purchase reservation order" },
        { name: "show", description: "Get a specific reservation order" },
      ],
    },
    {
      name: "reservation-order-id",
      description: "See reservation order ids that are applied to subscription",
      subcommands: [
        {
          name: "list",
          description: "Get list of applicable reservation order ids",
        },
      ],
    },
  ],
};

export default completionSpec;
