const completionSpec: Fig.Spec = {
  name: "relay",
  description:
    "Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules",
  subcommands: [
    {
      name: "hyco",
      description:
        "Manage Azure Relay Service Hybrid Connection and Authorization Rule",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service Hybrid Connection Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for given Relay Service Hybrid Connection",
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the given Relay Service Hybrid Connection",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Relay Service Hybrid Connection",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Relay Service Hybrid Connection",
                },
              ],
            },
            {
              name: "list",
              description:
                "Shows list of Authorization Rule by Relay Service Hybrid Connection",
            },
            {
              name: "show",
              description:
                "Shows the details of Authorization Rule for given Relay Service Hybrid Connection",
            },
            {
              name: "update",
              description:
                "Create Authorization Rule for given Relay Service Hybrid Connection",
            },
          ],
        },
        {
          name: "create",
          description: "Create the Relay Service Hybrid Connection",
        },
        {
          name: "delete",
          description: "Deletes the Relay Service Hybrid Connection",
        },
        {
          name: "list",
          description: "List the Hybrid Connection by Relay Service Namespace",
        },
        {
          name: "show",
          description: "Shows the Relay Service Hybrid Connection Details",
        },
        {
          name: "update",
          description: "Updates the Relay Service Hybrid Connection",
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage Azure Relay Service Namespace",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service Namespace Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Relay Service Namespace",
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the Relay Service Namespace",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule connection strings for Namespace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Relay Service Namespace",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for the Relay Service Namespace",
                },
              ],
            },
            {
              name: "list",
              description:
                "Shows the list of Authorization Rule by Relay Service Namespace",
            },
            {
              name: "show",
              description:
                "Shows the details of Relay Service Namespace Authorization Rule",
            },
            {
              name: "update",
              description:
                "Updates Authorization Rule for the given Relay Service Namespace",
            },
          ],
        },
        { name: "create", description: "Create a Relay Service Namespace" },
        { name: "delete", description: "Deletes the Relay Service Namespace" },
        {
          name: "exists",
          description:
            "Check for the availability of the given name for the Namespace",
        },
        { name: "list", description: "List the Relay Service Namespaces" },
        {
          name: "show",
          description: "Shows the Relay Service Namespace details",
        },
        { name: "update", description: "Updates a Relay Service Namespace" },
      ],
    },
    {
      name: "wcfrelay",
      description:
        "Manage Azure Relay Service WCF Relay and Authorization Rule",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service WCF Relay Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Relay Service WCF Relay",
            },
            {
              name: "delete",
              description:
                "Delete the Authorization Rule of Relay Service WCF Relay",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Relay Service WCF Relay",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Relay Service WCF Relay",
                },
              ],
            },
            {
              name: "list",
              description:
                "List of Authorization Rule by Relay Service WCF Relay",
            },
            {
              name: "show",
              description:
                "Show properties of Authorization Rule for the given Relay Service WCF Relay",
            },
            {
              name: "update",
              description:
                "Update Authorization Rule for the given Relay Service WCF Relay",
            },
          ],
        },
        { name: "create", description: "Create the Relay Service WCF Relay" },
        { name: "delete", description: "Deletes the Relay Service WCF Relay" },
        {
          name: "list",
          description: "List the WCF Relay by Relay Service Namespace",
        },
        {
          name: "show",
          description: "Shows the Relay Service WCF Relay Details",
        },
        {
          name: "update",
          description: "Updates existing Relay Service WCF Relay",
        },
      ],
    },
  ],
};

export default completionSpec;
