const completionSpec: Fig.Spec = {
  name: "purview",
  description: "Manage Purview",
  subcommands: [
    {
      name: "account",
      description: "Manage account with purview",
      subcommands: [
        {
          name: "add-root-collection-admin",
          description:
            "Add the administrator for root collection associated with this account",
        },
        { name: "create", description: "Create an account" },
        { name: "delete", description: "Deletes an account resource" },
        {
          name: "list",
          description:
            "List accounts in ResourceGroup And List accounts in Subscription",
        },
        {
          name: "list-key",
          description:
            "List the authorization keys associated with this account",
        },
        { name: "show", description: "Get an account" },
        { name: "update", description: "Updates an account" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the purview account is met",
        },
      ],
    },
    {
      name: "default-account",
      description: "Manage default account with purview",
      subcommands: [
        {
          name: "remove",
          description: "Removes the default account from the scope",
        },
        { name: "set", description: "Sets the default account for the scope" },
        { name: "show", description: "Get the default account for the scope" },
      ],
    },
  ],
};

export default completionSpec;
