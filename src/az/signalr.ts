const completionSpec: Fig.Spec = {
  name: "signalr",
  description: "Manage Azure SignalR Service",
  subcommands: [
    {
      name: "cors",
      description: "Manage CORS for Azure SignalR Service",
      subcommands: [
        {
          name: "add",
          description: "Add allowed origins to a SignalR Service",
        },
        {
          name: "list",
          description: "List allowed origins of a SignalR Service",
        },
        {
          name: "remove",
          description: "Remove allowed origins from a SignalR Service",
        },
        {
          name: "update",
          description: "Update allowed origins to a SignalR Service",
        },
      ],
    },
    { name: "create", description: "Creates a SignalR Service" },
    { name: "delete", description: "Deletes a SignalR Service" },
    {
      name: "identity",
      description: "Manage managed identity settings",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identity for SignalR Service",
        },
        {
          name: "remove",
          description: "Remove managed identity for SignalR Service",
        },
        {
          name: "show",
          description: "Show managed identity for SignalR Service",
        },
      ],
    },
    {
      name: "key",
      description: "Manage keys for Azure SignalR Service",
      subcommands: [
        {
          name: "list",
          description: "List the access keys for a SignalR Service",
        },
        {
          name: "renew",
          description: "Regenerate the access key for a SignalR Service",
        },
      ],
    },
    {
      name: "list",
      description:
        "Lists all the SignalR Service under the current subscription",
    },
    {
      name: "network-rule",
      description: "Manage network rules",
      subcommands: [
        {
          name: "list",
          description: "Get the Network access control of SignalR Service",
        },
        {
          name: "update",
          description: "Update the Network access control of SignalR Service",
        },
      ],
    },
    { name: "restart", description: "Restart an existing SignalR Service" },
    { name: "show", description: "Get the details of a SignalR Service" },
    { name: "update", description: "Update an existing SignalR Service" },
    {
      name: "upstream",
      description: "Manage upstream settings",
      subcommands: [
        {
          name: "clear",
          description: "List upstream settings of an existing SignalR Service",
        },
        {
          name: "list",
          description: "List upstream settings of an existing SignalR Service",
        },
        {
          name: "update",
          description:
            "Update order sensitive upstream settings for an existing SignalR Service",
        },
      ],
    },
  ],
};

export default completionSpec;
