const completionSpec: Fig.Spec = {
  name: "databricks",
  description: "Manage databricks workspaces",
  subcommands: [
    {
      name: "workspace",
      description: "Commands to manage databricks workspace",
      subcommands: [
        { name: "create", description: "Create a new workspace" },
        { name: "delete", description: "Delete the workspace" },
        { name: "list", description: "Get all the workspaces" },
        { name: "show", description: "Show the workspace" },
        { name: "update", description: "Update the workspace" },
        {
          name: "vnet-peering",
          description: "Commands to manage databricks workspace vnet peering",
          subcommands: [
            {
              name: "create",
              description: "Create a vnet peering for a workspace",
            },
            { name: "delete", description: "Delete the vnet peering" },
            {
              name: "list",
              description: "List vnet peerings under a workspace",
            },
            { name: "show", description: "Show the vnet peering" },
            { name: "update", description: "Update the vnet peering" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the Databricks workspace vnet peering is met",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Databricks workspace is met",
        },
      ],
    },
  ],
};

export default completionSpec;
