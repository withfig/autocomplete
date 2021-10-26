const completionSpec: Fig.Spec = {
  name: "identity",
  description: "Managed Service Identities",
  subcommands: [
    {
      name: "create",
      description:
        "Create or update an identity in the specified subscription and resource group",
    },
    { name: "delete", description: "Deletes the identity" },
    { name: "list", description: "List Managed Service Identities" },
    {
      name: "list-operations",
      description:
        "Lists available operations for the Managed Identity provider",
    },
    { name: "show", description: "Gets the identity" },
  ],
};

export default completionSpec;
