const completionSpec: Fig.Spec = {
  name: "eventhubs",
  description:
    "Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias",
  subcommands: [
    {
      name: "cluster",
      description: "Manage Azure EventHubs Clusters",
      subcommands: [
        {
          name: "available-region",
          description:
            "List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region",
        },
        { name: "create", description: "Create EventHubs Cluster" },
        {
          name: "delete",
          description: "Delete an existing Event Hubs Cluster",
        },
        {
          name: "list",
          description:
            "List the available Event Hubs Clusters within an ARM resource group",
        },
        {
          name: "namespace",
          description: "Manage Azure EventHubs Cluster for namespace",
          subcommands: [
            {
              name: "list",
              description: "List of Namespaces within given Cluster",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the resource description of the specified Event Hubs Cluster",
        },
        { name: "update", description: "Update tags of EventHubs Cluster" },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Cluster operation is completed",
        },
      ],
    },
    {
      name: "eventhub",
      description: "Manage Azure EventHubs eventhub and authorization-rule",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure Service Bus Authorizationrule for Eventhub",
          subcommands: [
            {
              name: "create",
              description: "Creates Authorizationrule for the given Eventhub",
            },
            {
              name: "delete",
              description: "Deletes the Authorizationrule of Eventhub",
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorizationrule connection strings for Eventhub",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Shows the connection strings of Authorizationrule for the Eventhub",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate the connection strings of Authorizationrule for the namespace",
                },
              ],
            },
            {
              name: "list",
              description: "Shows the list of Authorization-rules by Eventhub",
            },
            {
              name: "show",
              description: "Shows the details of Authorizationrule",
            },
            {
              name: "update",
              description: "Updates Authorizationrule for the given Eventhub",
            },
          ],
        },
        {
          name: "consumer-group",
          description: "Manage Azure Event Hubs consumergroup",
          subcommands: [
            {
              name: "create",
              description: "Creates the EventHub ConsumerGroup",
            },
            { name: "delete", description: "Deletes the ConsumerGroup" },
            { name: "list", description: "List the ConsumerGroup by Eventhub" },
            { name: "show", description: "Shows the ConsumerGroup Details" },
            {
              name: "update",
              description: "Updates the EventHub ConsumerGroup",
            },
          ],
        },
        { name: "create", description: "Creates the EventHubs Eventhub" },
        { name: "delete", description: "Deletes the Eventhub" },
        { name: "list", description: "List the EventHub by Namespace" },
        { name: "show", description: "Shows the Eventhub Details" },
        { name: "update", description: "Updates the EventHubs Eventhub" },
      ],
    },
    {
      name: "georecovery-alias",
      description: "Manage Azure EventHubs Geo Recovery configuration Alias",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias",
          subcommands: [
            {
              name: "keys",
              description:
                "Manage Azure Event Hubs Authorizationrule connection strings for Geo Recovery configuration Alias",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Shows the keys and connection strings of Authorizationrule for the EventHubs Namespace",
                },
              ],
            },
            {
              name: "list",
              description: "List of Authorizationrule by EventHubs Namespace",
            },
            {
              name: "show",
              description:
                "Show properties of EventHubs Geo-Disaster Recovery Configuration Alias and Namespace Authorizationrule",
            },
          ],
        },
        {
          name: "break-pair",
          description:
            "Disables Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces",
        },
        {
          name: "delete",
          description: "Delete Geo-Disaster Recovery Configuration Alias",
        },
        {
          name: "exists",
          description:
            "Check the availability of Geo-Disaster Recovery Configuration Alias Name",
        },
        {
          name: "fail-over",
          description:
            "Invokes Geo-Disaster Recovery Configuration Alias to point to the secondary namespace",
        },
        {
          name: "list",
          description: "Gets all Alias(Disaster Recovery configurations)",
        },
        {
          name: "set",
          description:
            "Sets a Geo-Disaster Recovery Configuration Alias for the give Namespace",
        },
        {
          name: "show",
          description:
            "Shows properties of Geo-Disaster Recovery Configuration Alias for Primay or Secondary Namespace",
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage Azure EventHubs namespace and Authorizationrule",
      subcommands: [
        {
          name: "authorization-rule",
          description: "Manage Azure EventHubs Authorizationrule for Namespace",
          subcommands: [
            {
              name: "create",
              description: "Creates Authorizationrule for the given Namespace",
            },
            {
              name: "delete",
              description: "Deletes the Authorizationrule of the namespace",
            },
            {
              name: "keys",
              description:
                "Manage Azure EventHubs Authorizationrule connection strings for Namespace",
              subcommands: [
                {
                  name: "list",
                  description: "Shows the connection strings for namespace",
                },
                {
                  name: "renew",
                  description:
                    "Regenerate the connection strings of Authorizationrule for the namespace",
                },
              ],
            },
            {
              name: "list",
              description: "Shows the list of Authorizationrule by Namespace",
            },
            {
              name: "show",
              description: "Shows the details of Authorizationrule",
            },
            {
              name: "update",
              description: "Updates Authorizationrule for the given Namespace",
            },
          ],
        },
        { name: "create", description: "Creates the EventHubs Namespace" },
        { name: "delete", description: "Deletes the Namespaces" },
        {
          name: "exists",
          description:
            "Check for the availability of the given name for the Namespace",
        },
        { name: "list", description: "Lists the EventHubs Namespaces" },
        {
          name: "network-rule",
          description: "Manage Azure EventHubs networkruleset for namespace",
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
          name: "private-endpoint-connection",
          description: "Manage eventhubs namespace private endpoint connection",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for eventhubs namesapce",
            },
            {
              name: "delete",
              description:
                "Delete a private endpoint connection request for eventhubs namespace",
            },
            {
              name: "list",
              description:
                "Gets the available PrivateEndpointConnections within a namespace",
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for eventhubs namespace",
            },
            {
              name: "show",
              description:
                "Show details of a private endpoint connection request for eventhubs namespace",
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage eventhubs namespace private link resources",
          subcommands: [
            {
              name: "show",
              description:
                "Get the private link resources that need to be created for a eventhubs namespace",
            },
          ],
        },
        { name: "show", description: "Shows the Event Hubs Namespace Details" },
        { name: "update", description: "Updates the EventHubs Namespace" },
      ],
    },
  ],
};

export default completionSpec;
