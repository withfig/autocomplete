const completionSpec: Fig.Spec = {
  name: "managedapp",
  description:
    "Manage template solutions provided and maintained by Independent Software Vendors (ISVs)",
  subcommands: [
    { name: "create", description: "Create a managed application" },
    {
      name: "definition",
      description: "Manage Azure Managed Applications",
      subcommands: [
        {
          name: "create",
          description: "Create a managed application definition",
        },
        {
          name: "delete",
          description: "Delete a managed application definition",
        },
        { name: "list", description: "List managed application definitions" },
        { name: "show", description: "Gets a managed application definition" },
        {
          name: "update",
          description: "Update a managed application definition",
        },
      ],
    },
    { name: "delete", description: "Delete a managed application" },
    { name: "list", description: "List managed applications" },
    { name: "show", description: "Gets a managed application" },
  ],
};

export default completionSpec;
