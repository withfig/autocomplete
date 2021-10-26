const completionSpec: Fig.Spec = {
  name: "ts",
  description: "Manage template specs at subscription or resource group scope",
  subcommands: [
    {
      name: "create",
      description: "Create a template spec and or template spec version",
    },
    {
      name: "delete",
      description:
        "Delete a specified template spec or template spec version by name or resource ID",
    },
    {
      name: "export",
      description:
        "Export the specified template spec version and artifacts (if any) to the specified output folder",
    },
    {
      name: "list",
      description: "List template specs or template spec versions",
    },
    {
      name: "show",
      description: "Get the specified template spec or template spec version",
    },
    { name: "update", description: "Update a template spec version" },
  ],
};

export default completionSpec;
