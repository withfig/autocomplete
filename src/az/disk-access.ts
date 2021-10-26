const completionSpec: Fig.Spec = {
  name: "disk-access",
  description: "Manage disk access resources",
  subcommands: [
    { name: "create", description: "Create a disk access resource" },
    { name: "delete", description: "Delete a disk access resource" },
    { name: "list", description: "List disk access resources" },
    { name: "show", description: "Get information of a disk access resource" },
    { name: "update", description: "Update a disk access resource" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a disk access is met",
    },
  ],
};

export default completionSpec;
