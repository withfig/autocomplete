const completionSpec: Fig.Spec = {
  name: "communication",
  description: "Manage communication service with communication",
  subcommands: [
    {
      name: "create",
      description:
        "Create a new CommunicationService or update an existing CommunicationService",
    },
    {
      name: "delete",
      description: "Operation to delete a CommunicationService",
    },
    {
      name: "link-notification-hub",
      description:
        "Links an Azure Notification Hub to this communication service",
    },
    {
      name: "list",
      description:
        "Handles requests to list all resources in a resource group. And Handles requests to list all resources in a subscription",
    },
    {
      name: "list-key",
      description: "Get the access keys of the CommunicationService resource",
    },
    {
      name: "regenerate-key",
      description:
        "Regenerate CommunicationService access key. PrimaryKey and SecondaryKey cannot be regenerated at the same time",
    },
    {
      name: "show",
      description: "Get the CommunicationService and its properties",
    },
    {
      name: "update",
      description: "Operation to update an existing CommunicationService",
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of the communication is met",
    },
  ],
};

export default completionSpec;
