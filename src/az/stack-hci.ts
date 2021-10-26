const completionSpec: Fig.Spec = {
  name: "stack-hci",
  description: "Manage Azure Stack HCI",
  subcommands: [
    {
      name: "cluster",
      description: "Commands to manage stack-hci cluster",
      subcommands: [
        { name: "create", description: "Create an HCI cluster" },
        { name: "delete", description: "Delete an HCI cluster" },
        {
          name: "list",
          description: "List all HCI clusters in a subscription",
        },
        { name: "show", description: "Get HCI cluster" },
        { name: "update", description: "Update an HCI cluster" },
      ],
    },
  ],
};

export default completionSpec;
