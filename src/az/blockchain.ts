const completionSpec: Fig.Spec = {
  name: "blockchain",
  description: "Manage blockchain",
  subcommands: [
    {
      name: "consortium",
      description: "Blockchain consortium",
      subcommands: [
        {
          name: "list",
          description: "List the available consortiums for a subscription",
        },
      ],
    },
    {
      name: "member",
      description: "Blockchain member",
      subcommands: [
        { name: "create", description: "Create a blockchain member" },
        { name: "delete", description: "Delete a blockchain member" },
        { name: "list", description: "List the blockchain members" },
        {
          name: "list-api-key",
          description: "List the API keys for a blockchain member",
        },
        {
          name: "list-consortium-member",
          description: "List the consortium members for a blockchain member",
        },
        {
          name: "regenerate-api-key",
          description: "Regenerate the API keys for a blockchain member",
        },
        {
          name: "show",
          description: "Show the details about a blockchain member",
        },
        { name: "update", description: "Update a blockchain member" },
        {
          name: "wait",
          description: "Wait until a blockchain member is created or deleted",
        },
      ],
    },
    {
      name: "transaction-node",
      description: "Blockchain transaction-node",
      subcommands: [
        { name: "create", description: "Create a transaction node" },
        { name: "delete", description: "Delete the transaction node" },
        {
          name: "list",
          description: "List the transaction nodes for a blockchain member",
        },
        {
          name: "list-api-key",
          description: "List the API keys for the transaction node",
        },
        {
          name: "regenerate-api-key",
          description: "Regenerate the API keys for the blockchain member",
        },
        {
          name: "show",
          description: "Show the details of the transaction node",
        },
        { name: "update", description: "Update the transaction node" },
        {
          name: "wait",
          description: "Wait until the transaction node is created or deleted",
        },
      ],
    },
  ],
};

export default completionSpec;
