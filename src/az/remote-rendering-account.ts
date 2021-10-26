const completionSpec: Fig.Spec = {
  name: "remote-rendering-account",
  description: "Manage remote rendering account with mixed reality",
  subcommands: [
    { name: "create", description: "Create a remote rendering account" },
    { name: "delete", description: "Delete a remote rendering account" },
    {
      name: "key",
      description: "Manage developer keys of a remote rendering account",
      subcommands: [
        {
          name: "renew",
          description: "Regenerate specified key of a remote rendering account",
        },
        {
          name: "show",
          description: "List both of the 2 keys of a remote rendering account",
        },
      ],
    },
    {
      name: "list",
      description:
        "List resources by resource group and list remote rendering accounts by subscription",
    },
    { name: "show", description: "Retrieve a remote rendering account" },
    { name: "update", description: "Update a remote rendering account" },
  ],
};

export default completionSpec;
