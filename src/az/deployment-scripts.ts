const completionSpec: Fig.Spec = {
  name: "deployment-scripts",
  description:
    "Manage deployment scripts at subscription or resource group scope",
  subcommands: [
    { name: "delete", description: "Delete a deployment script" },
    { name: "list", description: "List all deployment scripts" },
    { name: "show", description: "Retrieve a deployment script" },
    { name: "show-log", description: "Show deployment script logs" },
  ],
};

export default completionSpec;
