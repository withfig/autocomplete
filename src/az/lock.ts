const completionSpec: Fig.Spec = {
  name: "lock",
  description: "Manage Azure locks",
  subcommands: [
    { name: "create", description: "Create a lock" },
    { name: "delete", description: "Delete a lock" },
    { name: "list", description: "List lock information" },
    { name: "show", description: "Show the properties of a lock" },
    { name: "update", description: "Update a lock" },
  ],
};

export default completionSpec;
