const completionSpec: Fig.Spec = {
  name: "disk",
  description: "Manage Azure Managed Disks",
  subcommands: [
    { name: "create", description: "Create a managed disk" },
    { name: "delete", description: "Delete a managed disk" },
    {
      name: "grant-access",
      description: "Grant a resource access to a managed disk",
    },
    { name: "list", description: "List managed disks" },
    {
      name: "revoke-access",
      description: "Revoke a resource's read access to a managed disk",
    },
    { name: "show", description: "Gets information about a disk" },
    { name: "update", description: "Update a managed disk" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a managed disk is met",
    },
  ],
};

export default completionSpec;
