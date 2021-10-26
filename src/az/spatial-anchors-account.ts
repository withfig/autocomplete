const completionSpec: Fig.Spec = {
  name: "spatial-anchors-account",
  description: "Manage spatial anchor account with mixed reality",
  subcommands: [
    { name: "create", description: "Create a spatial anchors account" },
    { name: "delete", description: "Delete a spatial anchors account" },
    {
      name: "key",
      description: "Manage developer keys of a spatial anchors account",
      subcommands: [
        {
          name: "renew",
          description: "Regenerate specified key of a spatial anchors account",
        },
        {
          name: "show",
          description: "List both of the 2 keys of a spatial anchors account",
        },
      ],
    },
    {
      name: "list",
      description:
        "List resources by resource group and list spatial anchors accounts by subscription",
    },
    { name: "show", description: "Retrieve a spatial anchors account" },
    { name: "update", description: "Update a spatial anchors account" },
  ],
};

export default completionSpec;
