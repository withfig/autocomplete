const completionSpec: Fig.Spec = {
  name: "servicebus",
  description:
    "Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias",
  subcommands: [
    {
      name: "georecovery-alias",
      description:
        "Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias",
          subcommands: [
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Service Bus Namespace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for the Service Bus Namespace",
                },
              ],
            },
            {
              name: "list",
              description:
                "Shows the list of Authorization Rule by Service Bus Namespace",
            },
            {
              name: "show",
              description:
                "Gets an authorization rule for a namespace by rule name",
            },
          ],
        },
        {
          name: "break-pair",
          description:
            "Disables Service Bus Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces",
        },
        {
          name: "delete",
          description:
            "Deletes Service Bus Geo-Disaster Recovery Configuration Alias request accepted",
        },
        {
          name: "exists",
          description: "Check if Geo Recovery Alias Name is available",
        },
        {
          name: "fail-over",
          description:
            "Invokes Service Bus Geo-Disaster Recovery Configuration Alias failover and re-configure the alias to point to the secondary namespace",
        },
        {
          name: "list",
          description: "Gets all Alias(Disaster Recovery configurations)",
        },
        {
          name: "set",
          description:
            "Sets Service Bus Geo-Disaster Recovery Configuration Alias for the give Namespace",
        },
        {
          name: "show",
          description:
            "Shows properties of Service Bus Geo-Disaster Recovery Configuration Alias for Primay/Secondary Namespace",
        },
      ],
    },
    {
      name: "migration",
      description: "Manage Azure Service Bus Migration of Standard to Premium",
      subcommands: [
        {
          name: "abort",
          description:
            "Disable the Service Bus Migration of Standard to Premium namespace",
        },
        {
          name: "complete",
          description:
            "Completes the Service Bus Migration of Standard to Premium namespace",
        },
        {
          name: "show",
          description:
            "Shows properties of properties of Service Bus Migration",
        },
        {
          name: "start",
          description:
            "Create and Start Service Bus Migration of Standard to Premium namespace",
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage Azure Service Bus Namespace",
      subcommands: [
        {
          name: "authorization-rule",
          description: "Manage Azure Service Bus Namespace Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Service Bus Namespace",
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the Service Bus Namespace",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule connection strings for Namespace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Service Bus Namespace",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for the Service Bus Namespace",
                },
              ],
            },
            {
              name: "list",
              description:
                "Shows the list of Authorization Rule by Service Bus Namespace",
            },
            {
              name: "show",
              description:
                "Shows the details of Service Bus Namespace Authorization Rule",
            },
            {
              name: "update",
              description:
                "Updates Authorization Rule for the given Service Bus Namespace",
            },
          ],
        },
        { name: "create", description: "Create a Service Bus Namespace" },
        { name: "delete", description: "Deletes the Service Bus Namespace" },
        {
          name: "exists",
          description:
            "Check for the availability of the given name for the Namespace",
        },
        { name: "list", description: "List the Service Bus Namespaces" },
        {
          name: "network-rule",
          description: "Manage Azure ServiceBus networkruleSet for namespace",
          subcommands: [
            { name: "add", description: "Add a network rule for a namespace" },
            {
              name: "list",
              description:
                "Show properties of Network rule of the given Namespace",
            },
            {
              name: "remove",
              description: "Remove network rule for a namespace",
            },
          ],
        },
        {
          name: "show",
          description: "Shows the Service Bus Namespace details",
        },
        { name: "update", description: "Updates a Service Bus Namespace" },
      ],
    },
    {
      name: "queue",
      description: "Manage Azure Service Bus Queue and Authorization Rule",
      subcommands: [
        {
          name: "authorization-rule",
          description: "Manage Azure Service Bus Queue Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Service Bus Queue",
            },
            {
              name: "delete",
              description: "Delete the Authorization Rule of Service Bus Queue",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Service Bus Queue",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for the given Service Bus Queue",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Service Bus Queue",
                },
              ],
            },
            {
              name: "list",
              description: "List of Authorization Rule by Service Bus Queue",
            },
            {
              name: "show",
              description:
                "Show properties of Authorization Rule for the given Service Bus Queue",
            },
            {
              name: "update",
              description:
                "Update Authorization Rule for the given Service Bus Queue",
            },
          ],
        },
        { name: "create", description: "Create the Service Bus Queue" },
        { name: "delete", description: "Deletes the Service Bus Queue" },
        {
          name: "list",
          description: "List the Queue by Service Bus Namespace",
        },
        { name: "show", description: "Shows the Service Bus Queue Details" },
        { name: "update", description: "Updates existing Service Bus Queue" },
      ],
    },
    {
      name: "topic",
      description: "Manage Azure Service Bus Topic and Authorization Rule",
      subcommands: [
        {
          name: "authorization-rule",
          description: "Manage Azure Service Bus Topic Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for given Service Bus Topic",
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the given Service Bus Topic",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Service Bus Topic",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Service Bus Topic",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Service Bus Topic",
                },
              ],
            },
            {
              name: "list",
              description:
                "Shows list of Authorization Rule by Service Bus Topic",
            },
            {
              name: "show",
              description:
                "Shows the details of Authorization Rule for given Service Bus Topic",
            },
            {
              name: "update",
              description:
                "Create Authorization Rule for given Service Bus Topic",
            },
          ],
        },
        { name: "create", description: "Create the Service Bus Topic" },
        { name: "delete", description: "Deletes the Service Bus Topic" },
        {
          name: "list",
          description: "List the Topic by Service Bus Namespace",
        },
        { name: "show", description: "Shows the Service Bus Topic Details" },
        {
          name: "subscription",
          description: "Manage Azure Service Bus Subscription",
          subcommands: [
            {
              name: "create",
              description: "Create the ServiceBus Subscription",
            },
            {
              name: "delete",
              description: "Deletes the Service Bus Subscription",
            },
            {
              name: "list",
              description: "List the Subscription by Service Bus Topic",
            },
            {
              name: "rule",
              description: "Manage Azure Service Bus Rule",
              subcommands: [
                {
                  name: "create",
                  description: "Create the ServiceBus Rule for Subscription",
                },
                { name: "delete", description: "Deletes the ServiceBus Rule" },
                {
                  name: "list",
                  description: "List the ServiceBus Rule by Subscription",
                },
                { name: "show", description: "Shows ServiceBus Rule Details" },
                {
                  name: "update",
                  description: "Updates the ServiceBus Rule for Subscription",
                },
              ],
            },
            {
              name: "show",
              description: "Shows Service Bus Subscription Details",
            },
            {
              name: "update",
              description: "Updates the ServiceBus Subscription",
            },
          ],
        },
        { name: "update", description: "Updates the Service Bus Topic" },
      ],
    },
  ],
};

export default completionSpec;
