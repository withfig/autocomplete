const completionSpec: Fig.Spec = {
  name: "provider",
  description: "Manage resource providers",
  subcommands: [
    {
      name: "list",
      description: "Gets all resource providers for a subscription",
    },
    {
      name: "operation",
      description: "Get provider operations metadatas",
      subcommands: [
        { name: "list", description: "Get operations from all providers" },
        {
          name: "show",
          description: "Get an individual provider's operations",
        },
      ],
    },
    {
      name: "permission",
      description: "Manage permissions for a provider",
      subcommands: [
        { name: "list", description: "List permissions from a provider" },
      ],
    },
    { name: "register", description: "Register a provider" },
    { name: "show", description: "Gets the specified resource provider" },
    { name: "unregister", description: "Unregister a provider" },
  ],
};

export default completionSpec;
