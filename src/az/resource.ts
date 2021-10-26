const completionSpec: Fig.Spec = {
  name: "resource",
  description: "Manage Azure resources",
  subcommands: [
    { name: "create", description: "Create a resource" },
    { name: "delete", description: "Delete a resource" },
    { name: "invoke-action", description: "Invoke an action on the resource" },
    {
      name: "link",
      description: "Manage links between resources",
      subcommands: [
        { name: "create", description: "Create a new link between resources" },
        { name: "delete", description: "Delete a link between resources" },
        { name: "list", description: "List resource links" },
        {
          name: "show",
          description: "Gets a resource link with the specified ID",
        },
        { name: "update", description: "Update link between resources" },
      ],
    },
    { name: "list", description: "List resources" },
    {
      name: "lock",
      description: "Manage Azure resource level locks",
      subcommands: [
        { name: "create", description: "Create a resource-level lock" },
        { name: "delete", description: "Delete a resource-level lock" },
        {
          name: "list",
          description: "List lock information in the resource-level",
        },
        {
          name: "show",
          description: "Show the details of a resource-level lock",
        },
        { name: "update", description: "Update a resource-level lock" },
      ],
    },
    {
      name: "move",
      description:
        "Moves resources from one resource group to another(can be under different subscription)",
    },
    { name: "show", description: "Get the details of a resource" },
    { name: "tag", description: "Tag a resource" },
    { name: "update", description: "Update a resource" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a resources is met",
    },
  ],
};

export default completionSpec;
