const completionSpec: Fig.Spec = {
  name: "managedservices",
  description: "Manage the registration assignments and definitions in Azure",
  subcommands: [
    {
      name: "assignment",
      description: "Manage the registration assignments in Azure",
      subcommands: [
        {
          name: "create",
          description: "Creates a new registration assignment",
        },
        { name: "delete", description: "Deletes the registration assignment" },
        { name: "list", description: "List all the registration assignments" },
        { name: "show", description: "Gets a registration assignment" },
      ],
    },
    {
      name: "definition",
      description: "Manage the registration definitions in Azure",
      subcommands: [
        {
          name: "create",
          description: "Creates a new registration definition",
        },
        { name: "delete", description: "Deletes a registration" },
        {
          name: "list",
          description:
            "List all the registration definitions under the default scope or under the subscription provided",
        },
        { name: "show", description: "Gets a registration definition" },
      ],
    },
  ],
};

export default completionSpec;
