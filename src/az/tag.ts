const completionSpec: Fig.Spec = {
  name: "tag",
  description: "Tag Management on a resource",
  subcommands: [
    { name: "add-value", description: "Create a tag value" },
    { name: "create", description: "Create tags on a specific resource" },
    { name: "delete", description: "Delete tags on a specific resource" },
    {
      name: "list",
      description: "List the entire set of tags on a specific resource",
    },
    {
      name: "remove-value",
      description: "Deletes a predefined tag value for a predefined tag name",
    },
    {
      name: "update",
      description: "Selectively update the set of tags on a specific resource",
    },
  ],
};

export default completionSpec;
