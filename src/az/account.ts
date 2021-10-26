const completionSpec: Fig.Spec = {
  name: "account",
  description: "Manage Azure subscription information",
  subcommands: [
    {
      name: "alias",
      description: "Manage subscription alias",
      subcommands: [
        { name: "create", description: "Create Alias Subscription" },
        { name: "delete", description: "Delete Alias" },
        { name: "list", description: "List Alias Subscriptions" },
        { name: "show", description: "Get Alias Subscription" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the account alias is met",
        },
      ],
    },
    {
      name: "clear",
      description: "Clear all subscriptions from the CLI's local cache",
    },
    { name: "create", description: "Create a subscription" },
    {
      name: "get-access-token",
      description: "Get a token for utilities to access Azure",
    },
    {
      name: "list",
      description: "Get a list of subscriptions for the logged in account",
    },
    {
      name: "list-locations",
      description: "List supported regions for the current subscription",
    },
    {
      name: "lock",
      description: "Manage Azure subscription level locks",
      subcommands: [
        { name: "create", description: "Create a subscription lock" },
        { name: "delete", description: "Delete a subscription lock" },
        {
          name: "list",
          description: "List lock information in the subscription",
        },
        {
          name: "show",
          description: "Show the details of a subscription lock",
        },
        { name: "update", description: "Update a subscription lock" },
      ],
    },
    {
      name: "management-group",
      description: "Manage Azure Management Groups",
      subcommands: [
        { name: "create", description: "Create a new management group" },
        { name: "delete", description: "Delete an existing management group" },
        { name: "list", description: "List all management groups" },
        { name: "show", description: "Get a specific management group" },
        {
          name: "subscription",
          description: "Subscription operations for Management Groups",
          subcommands: [
            {
              name: "add",
              description: "Add a subscription to a management group",
            },
            {
              name: "remove",
              description:
                "Remove an existing subscription from a management group",
            },
          ],
        },
        { name: "update", description: "Update an existing management group" },
      ],
    },
    {
      name: "set",
      description: "Set a subscription to be the current active subscription",
    },
    { name: "show", description: "Get the details of a subscription" },
    {
      name: "subscription",
      description: "Manage subscriptions",
      subcommands: [
        { name: "cancel", description: "Cancel subscription" },
        { name: "enable", description: "Enable subscription" },
        { name: "list", description: "Get all subscriptions for a tenant" },
        {
          name: "list-location",
          description:
            "This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list",
        },
        { name: "rename", description: "Rename subscription" },
        {
          name: "show",
          description: "Get details about a specified subscription",
        },
      ],
    },
    {
      name: "tenant",
      description: "Manage tenant",
      subcommands: [
        { name: "list", description: "Get the tenants for your account" },
      ],
    },
  ],
};

export default completionSpec;
