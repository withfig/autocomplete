const completionSpec: Fig.Spec = {
  name: "group",
  description: "Manage resource groups and template deployments",
  subcommands: [
    { name: "create", description: "Create a new resource group" },
    { name: "delete", description: "Delete a resource group" },
    {
      name: "deployment",
      description: "Manage Azure Resource Manager deployments",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a currently running template deployment",
        },
        { name: "create", description: "Start a deployment" },
        {
          name: "delete",
          description: "Deletes a deployment from the deployment history",
        },
        {
          name: "export",
          description: "Export the template used for a deployment",
        },
        {
          name: "list",
          description: "Get all the deployments for a resource group",
        },
        {
          name: "operation",
          description: "Manage deployment operations",
          subcommands: [
            {
              name: "list",
              description: "Gets all deployments operations for a deployment",
            },
            { name: "show", description: "Get a deployment's operation" },
          ],
        },
        { name: "show", description: "Gets a deployment" },
        {
          name: "validate",
          description: "Validate whether a template is syntactically correct",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a deployment condition is met",
        },
      ],
    },
    { name: "exists", description: "Check if a resource group exists" },
    { name: "export", description: "Captures a resource group as a template" },
    { name: "list", description: "List resource groups" },
    {
      name: "lock",
      description: "Manage Azure resource group locks",
      subcommands: [
        { name: "create", description: "Create a resource group lock" },
        { name: "delete", description: "Delete a resource group lock" },
        {
          name: "list",
          description: "List lock information in the resource-group",
        },
        {
          name: "show",
          description: "Show the details of a resource group lock",
        },
        { name: "update", description: "Update a resource group lock" },
      ],
    },
    { name: "show", description: "Gets a resource group" },
    { name: "update", description: "Update a resource group" },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the resource group is met",
    },
  ],
};

export default completionSpec;
