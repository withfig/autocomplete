const completionSpec: Fig.Spec = {
  name: "guestconfig",
  description: "Manage Guest Configuration",
  subcommands: [
    {
      name: "guest-configuration-assignment",
      description: "Guestconfig guest-configuration-assignment",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an association between a VM and guest configuration",
        },
        {
          name: "delete",
          description: "Delete a guest configuration assignment",
        },
        {
          name: "list",
          description:
            "List all guest configuration assignments for a virtual machine",
        },
        {
          name: "show",
          description: "Get information about a guest configuration assignment",
        },
        {
          name: "update",
          description:
            "Creates an association between a VM and guest configuration",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the guestconfig guest-configuration-assignment is met",
        },
      ],
    },
    {
      name: "guest-configuration-assignment-report",
      description: "Guestconfig guest-configuration-assignment-report",
      subcommands: [
        {
          name: "list",
          description:
            "List all reports for the guest configuration assignment, latest report first",
        },
        {
          name: "show",
          description:
            "Get a report for the guest configuration assignment, by reportId",
        },
      ],
    },
    {
      name: "guest-configuration-hcrp-assignment",
      description: "Guestconfig guest-configuration-hcrp-assignment",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an association between a ARC machine and guest configuration",
        },
        {
          name: "delete",
          description: "Delete a guest configuration assignment",
        },
        {
          name: "list",
          description:
            "List all guest configuration assignments for an ARC machine",
        },
        {
          name: "show",
          description: "Get information about a guest configuration assignment",
        },
        {
          name: "update",
          description:
            "Creates an association between a ARC machine and guest configuration",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the guestconfig guest-configuration-hcrp-assignment is met",
        },
      ],
    },
    {
      name: "guest-configuration-hcrp-assignment-report",
      description: "Guestconfig guest-configuration-hcrp-assignment-report",
      subcommands: [
        {
          name: "list",
          description:
            "List all reports for the guest configuration assignment, latest report first",
        },
        {
          name: "show",
          description:
            "Get a report for the guest configuration assignment, by reportId",
        },
      ],
    },
  ],
};

export default completionSpec;
