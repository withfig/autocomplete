const completionSpec: Fig.Spec = {
  name: "webpubsub",
  description: "Commands to manage Webpubsub",
  subcommands: [
    {
      name: "client",
      description: "Commands to manage client connections",
      subcommands: [
        { name: "start", description: "Start a interactive client connection" },
      ],
    },
    { name: "create", description: "Create a Webpubsub" },
    { name: "delete", description: "Delete a Webpubsub" },
    {
      name: "event-handler",
      description: "Commands to manage Webpubsub event handler settings",
      subcommands: [
        {
          name: "clear",
          description: "Clear event handler settings for WebPubSub Service",
        },
        {
          name: "hub",
          description: "Commands to manage Webpubsub hub settings",
          subcommands: [
            {
              name: "remove",
              description: "Remove a hub's event handler settings",
            },
            {
              name: "update",
              description: "Update a hub's event handler settings",
            },
          ],
        },
        {
          name: "show",
          description: "Show event handler settings for WebPubSub Service",
        },
        {
          name: "update",
          description: "Update event handler settings for WebPubSub Service",
        },
      ],
    },
    {
      name: "key",
      description: "Commands to manage Webpubsub keys",
      subcommands: [
        {
          name: "regenerate",
          description: "Regenerate keys for a WebPubSub Service",
        },
        {
          name: "show",
          description:
            "Show connetion strings and keys for a WebPubSub Service",
        },
      ],
    },
    { name: "list", description: "List Webpubsub" },
    {
      name: "network-rule",
      description: "Commands to manage Webpubsub network rules",
      subcommands: [
        {
          name: "show",
          description: "Get the Network access control of WebPubSub Service",
        },
        {
          name: "update",
          description: "Update the Network access control of WebPubSub Service",
        },
      ],
    },
    { name: "restart", description: "Restart a Webpubsub" },
    {
      name: "service",
      description: "Commands to manage Webpubsub service",
      subcommands: [
        { name: "broadcast", description: "Broadcast messages to hub" },
        {
          name: "connection",
          description: "Commands to manage Webpubsub service connections",
          subcommands: [
            {
              name: "close",
              description: "Close a specific client connection",
            },
            {
              name: "exist",
              description: "Check whether client connection exists",
            },
            { name: "send", description: "Send a message to connection" },
          ],
        },
        {
          name: "group",
          description: "Commands to manage Webpubsub service groups",
          subcommands: [
            {
              name: "add-connection",
              description: "Add a connection to group",
            },
            { name: "add-user", description: "Add a user to group" },
            {
              name: "remove-connection",
              description: "Remove a connection from group",
            },
            { name: "remove-user", description: "Remove a user from group" },
            { name: "send", description: "Send a message to group" },
          ],
        },
        {
          name: "permission",
          description: "Commands to manage Webpubsub service permissions",
          subcommands: [
            {
              name: "check",
              description:
                "Check if a connection has permission to the specified group",
            },
            {
              name: "grant",
              description: "Grant a group permission to the connection",
            },
            {
              name: "revoke",
              description: "Revoke a group permission from the connection",
            },
          ],
        },
        {
          name: "user",
          description: "Commands to manage Webpubsub service users",
          subcommands: [
            {
              name: "exist",
              description:
                "Check if there are any client connections connected for the given user",
            },
            { name: "send", description: "Send a message to user" },
          ],
        },
      ],
    },
    { name: "show", description: "Show details of a Webpubsub" },
    { name: "update", description: "Update a Webpubsub" },
  ],
};

export default completionSpec;
