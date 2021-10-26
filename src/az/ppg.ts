const completionSpec: Fig.Spec = {
  name: "ppg",
  description: "Manage Proximity Placement Groups",
  subcommands: [
    { name: "create", description: "Create a proximity placement group" },
    { name: "delete", description: "Delete a proximity placement group" },
    { name: "list", description: "List proximity placement groups" },
    { name: "show", description: "Get a proximity placement group" },
    { name: "update", description: "Update a proximity placement group" },
  ],
};

export default completionSpec;
