const completion: Fig.Spec = {
  name: "managementpartner",
  description:
    "Allows the partners to associate a Microsoft Partner Network(MPN) ID to a user or service principal in the customer's Azure directory",
  subcommands: [
    {
      name: "create",
      description:
        "Associates a Microsoft Partner Network(MPN) ID to the current authenticated user or service principal",
      options: [
        {
          name: "--partner-id",
          description: "Microsoft partner network ID",
          args: { name: "partner-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "delete",
      description:
        "Delete the Microsoft Partner Network(MPN) ID of the current authenticated user or service principal",
      options: [
        {
          name: "--partner-id",
          description: "Microsoft partner network ID",
          args: { name: "partner-id" },
          isRequired: true,
        },
      ],
    },
    {
      name: "show",
      description:
        "Gets the Microsoft Partner Network(MPN) ID of the current authenticated user or service principal",
      options: [
        {
          name: "--partner-id",
          description: "Microsoft partner network ID",
          args: { name: "partner-id" },
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the Microsoft Partner Network(MPN) ID of the current authenticated user or service principal",
      options: [
        {
          name: "--partner-id",
          description: "Microsoft partner network ID",
          args: { name: "partner-id" },
          isRequired: true,
        },
      ],
    },
  ],
};

export default completion;
