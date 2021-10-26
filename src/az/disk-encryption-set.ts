const completionSpec: Fig.Spec = {
  name: "disk-encryption-set",
  description: "Disk Encryption Set resource",
  subcommands: [
    { name: "create", description: "Create a disk encryption set" },
    { name: "delete", description: "Delete a disk encryption set" },
    { name: "list", description: "List disk encryption sets" },
    {
      name: "list-associated-resources",
      description:
        "Lists all resources that are encrypted with this disk encryption set",
    },
    { name: "show", description: "Get information of a disk encryption sets" },
    { name: "update", description: "Update a disk encryption set" },
  ],
};

export default completionSpec;
