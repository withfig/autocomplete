const completionSpec: Fig.Spec = {
  name: "customlocation",
  description: "Commands to Create, Get, List and Delete CustomLocations",
  subcommands: [
    { name: "create", description: "Create a Custom Location" },
    { name: "delete", description: "Delete a Customlocation" },
    { name: "list", description: "Command to list CustomLocations" },
    {
      name: "list-enabled-resource-types",
      description: "Get details of Enabled Resource Types for a CustomLocation",
    },
    { name: "patch", description: "Patch a Custom Location" },
    { name: "show", description: "Get details of a Customlocation" },
    { name: "update", description: "Update a Custom Location" },
  ],
};

export default completionSpec;
