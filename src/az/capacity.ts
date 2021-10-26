const completionSpec: Fig.Spec = {
  name: "capacity",
  description: "Manage capacity",
  subcommands: [
    {
      name: "reservation",
      description: "Manage capacity reservation",
      subcommands: [
        { name: "create", description: "Create capacity reservation" },
        { name: "delete", description: "Delete capacity reservation" },
        {
          name: "group",
          description: "Manage capacity reservation group",
          subcommands: [
            {
              name: "create",
              description: "Create capacity reservation group",
            },
            {
              name: "delete",
              description: "Delete capacity reservation group",
            },
            {
              name: "list",
              description: "List the capacity reservation groups",
            },
            { name: "show", description: "Show capacity reservation group" },
            {
              name: "update",
              description: "Update capacity reservation group",
            },
          ],
        },
        { name: "list", description: "List capacity reservation" },
        { name: "show", description: "Show capacity reservation" },
        { name: "update", description: "Update capacity reservation" },
      ],
    },
  ],
};

export default completionSpec;
