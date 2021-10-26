const completionSpec: Fig.Spec = {
  name: "snapshot",
  description:
    "Manage point-in-time copies of managed disks, native blobs, or other snapshots",
  subcommands: [
    { name: "create", description: "Create a snapshot" },
    { name: "delete", description: "Deletes a snapshot" },
    { name: "grant-access", description: "Grant read access to a snapshot" },
    { name: "list", description: "List snapshots" },
    { name: "revoke-access", description: "Revoke read access to a snapshot" },
    { name: "show", description: "Gets information about a snapshot" },
    { name: "update", description: "Update a snapshot" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a snapshot is met",
    },
  ],
};

export default completionSpec;
