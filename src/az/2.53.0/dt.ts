const completion: Fig.Spec = {
  name: "dt",
  description: "Manage Azure Digital Twins solutions & infrastructure",
  subcommands: [
    {
      name: "create",
      description: "Create or update a Digital Twins instance",
      options: [
        {
          name: ["--dt-name", "--dtn", "-n"],
          description: "Digital Twins instance name",
          args: { name: "dt-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--assign-identity",
          description:
            "Argument 'assign_identity' has been deprecated and will be removed in a future release. Use '--mi-system-assigned' instead. Assign a system generated identity to the Digital Twins instance",
          args: { name: "assign-identity", suggestions: ["false", "true"] },
        },
        {
          name: ["--location", "-l"],
          description:
            "Digital Twins instance location. If no location is provided the resource group location is used.You can configure the default location using az configure --defaults location=<name>",
          args: { name: "location" },
        },
        {
          name: "--mi-system-assigned",
          description:
            "Assign a system generated identity to this Digital Twins instance",
          args: { name: "mi-system-assigned", suggestions: ["false", "true"] },
        },
        {
          name: "--mi-user-assigned",
          description:
            "Space-separated user identity resource ids to add to the Digital Twins instance",
          args: { name: "mi-user-assigned" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--public-network-access", "--pna"],
          description:
            "Determines if the Digital Twins instance can be accessed from a public network",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--role",
          description: "Role name or Id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: "--scopes",
          description:
            "Space-separated scopes the system assigned identity can access. Cannot be used with --no-wait",
          args: { name: "scopes" },
        },
        {
          name: "--tags",
          description:
            "Digital Twins instance tags. Property bag in key-value pairs with the following format: a=b c=d",
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an existing Digital Twins instance",
      options: [
        {
          name: ["--dt-name", "--dtn", "-n"],
          description: "Digital Twins instance name",
          args: { name: "dt-name" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description:
        "List the collection of Digital Twins instances by subscription or resource group",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "reset",
      description:
        "Reset an existing Digital Twins instance by deleting associated assets. Currently only supports deleting models and twins",
      options: [
        {
          name: ["--dt-name", "--dtn", "-n"],
          description: "Digital Twins instance name",
          args: { name: "dt-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "show",
      description: "Show an existing Digital Twins instance",
      options: [
        {
          name: ["--dt-name", "--dtn", "-n"],
          description: "Digital Twins instance name",
          args: { name: "dt-name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until an operation on an Digital Twins instance is complete",
      options: [
        {
          name: ["--dt-name", "--dtn", "-n"],
          description: "Digital Twins instance name",
          args: { name: "dt-name" },
          isRequired: true,
        },
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
      ],
    },
    {
      name: "data-history",
      description: "Manage and configure data history",
      subcommands: [
        {
          name: "connection",
          description: "Manage and configure data history connections",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a data history connection configured on a Digital Twins instance",
              options: [
                {
                  name: ["--conn-name", "--cn"],
                  description: "Name of data history connection",
                  args: { name: "conn-name" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--clean", "-c"],
                  description:
                    "Specifies whether or not to attempt to clean up artifacts that were created in order to establish a connection to the time series database. This is a best-effort attempt that will fail if appropriate permissions are not in place. Setting this to 'true' does not delete any recorded data",
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all data history connections configured on a Digital Twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details of a data history connection configured on a Digital Twins instance",
              options: [
                {
                  name: ["--conn-name", "--cn"],
                  description: "Name of data history connection",
                  args: { name: "conn-name" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Wait until an operation on a data history connection is complete",
              options: [
                {
                  name: ["--conn-name", "--cn"],
                  description: "Name of data history connection",
                  args: { name: "conn-name" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: "--created",
                  description:
                    "Wait until created with 'provisioningState' at 'Succeeded'",
                },
                {
                  name: "--custom",
                  description:
                    "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                  args: { name: "custom" },
                },
                { name: "--deleted", description: "Wait until deleted" },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--timeout",
                  description: "Maximum wait in seconds",
                  args: { name: "timeout" },
                },
                {
                  name: "--updated",
                  description:
                    "Wait until updated with provisioningState at 'Succeeded'",
                },
              ],
            },
            {
              name: "create",
              description:
                "Creates a data history connection between a Digital Twins instance and supported resources",
              subcommands: [
                {
                  name: "adx",
                  description:
                    "Creates a data history connection between a Digital Twins instance and an Azure Data Explorer database. Requires pre-created Azure Data Explorer and Event Hub resources",
                  options: [
                    {
                      name: ["--adx-cluster-name", "--adxc"],
                      description:
                        "Name of Azure Data Explorer cluster to integrate with",
                      args: { name: "adx-cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--adx-database-name", "--adxd"],
                      description:
                        "Name of Azure Data Explorer database to integrate with",
                      args: { name: "adx-database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Name of data history connection",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--eventhub", "--eh"],
                      description: "Name of EventHub to integrate with",
                      args: { name: "eventhub" },
                      isRequired: true,
                    },
                    {
                      name: ["--eventhub-namespace", "--ehn"],
                      description: "EventHub Namespace identifier",
                      args: { name: "eventhub-namespace" },
                      isRequired: true,
                    },
                    {
                      name: ["--adx-property-events-table", "--adxpet"],
                      description:
                        "The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships",
                      args: { name: "adx-property-events-table" },
                    },
                    {
                      name: ["--adx-record-removals", "--adxrr"],
                      description:
                        "Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). Setting this property to 'true' will generate an additional column in the property events table in ADX",
                    },
                    {
                      name: ["--adx-relationship-events-table", "--adxret"],
                      description:
                        "The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified",
                      args: { name: "adx-relationship-events-table" },
                    },
                    {
                      name: ["--adx-resource-group", "--adxg"],
                      description:
                        "Name of Azure Data Explorer resource group. If not provided, will use the Digital Twin's resource group",
                      args: { name: "adx-resource-group" },
                    },
                    {
                      name: ["--adx-subscription", "--adxs"],
                      description:
                        "Name or id of subscription where the Azure Data Explorer exists. If not provided, will use the subscription that contains the Digital Twin Instance",
                      args: { name: "adx-subscription" },
                    },
                    {
                      name: ["--adx-table-name", "--adxt"],
                      description:
                        "Option '--adx-table-name' has been deprecated and will be removed in a future release. Use '--adx-property-events-table' instead. The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships",
                      args: { name: "adx-table-name" },
                    },
                    {
                      name: ["--adx-twin-events-table", "--adxtet"],
                      description:
                        "The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified",
                      args: { name: "adx-twin-events-table" },
                    },
                    {
                      name: ["--eventhub-consumer-group", "--ehc"],
                      description:
                        "The EventHub consumer group to use when ADX reads from EventHub",
                      args: { name: "eventhub-consumer-group" },
                    },
                    {
                      name: ["--eventhub-resource-group", "--ehg"],
                      description:
                        "Name of EventHub resource group. If not provided, will use the Digital Twin's resource group",
                      args: { name: "eventhub-resource-group" },
                    },
                    {
                      name: ["--eventhub-subscription", "--ehs"],
                      description:
                        "Name or id of subscription where the EventHub exists. If not provided, will use the subscription that contains the Digital Twin Instance",
                      args: { name: "eventhub-subscription" },
                    },
                    {
                      name: ["--mi-user-assigned", "--user"],
                      description:
                        "Use an user-assigned managed identity for data history connection authentication. Accepts the identity resource id. If not provided, will use system identity instead",
                      args: { name: "mi-user-assigned" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description:
                        "Do not prompt for confirmation when assigning required roles",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "endpoint",
      description: "Manage and configure Digital Twins instance endpoints",
      subcommands: [
        {
          name: "delete",
          description: "Remove an endpoint from a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--endpoint-name", "--en"],
              description: "Endpoint name",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description:
            "List all egress endpoints configured on a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of an endpoint configured on a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--endpoint-name", "--en"],
              description: "Endpoint name",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "wait",
          description: "Wait until an endpoint operation is done",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--endpoint-name", "--en"],
              description: "Endpoint name",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: "--created",
              description:
                "Wait until created with 'provisioningState' at 'Succeeded'",
            },
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
            },
            { name: "--deleted", description: "Wait until deleted" },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--timeout",
              description: "Maximum wait in seconds",
              args: { name: "timeout" },
            },
          ],
        },
        {
          name: "create",
          description: "Add egress endpoints to a Digital Twins instance",
          subcommands: [
            {
              name: "eventgrid",
              description:
                "Adds an EventGrid Topic endpoint to a Digital Twins instance. Requires pre-created resource",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--eventgrid-topic", "--egt"],
                  description: "Name of EventGrid Topic to integrate with",
                  args: { name: "eventgrid-topic" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-name", "--en"],
                  description: "Endpoint name",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: ["--deadletter-sas-uri", "--dsu"],
                  description:
                    "Dead-letter storage container URL with SAS token for Key based authentication",
                  args: { name: "deadletter-sas-uri" },
                },
                {
                  name: ["--deadletter-uri", "--du"],
                  description:
                    "Dead-letter storage container URL for Identity based authentication",
                  args: { name: "deadletter-uri" },
                },
                {
                  name: ["--eventgrid-resource-group", "--egg"],
                  description:
                    "Name of EventGrid Topic resource group. If not provided, the Digital Twin instance resource group will be used",
                  args: { name: "eventgrid-resource-group" },
                },
                {
                  name: ["--eventgrid-subscription", "--egs"],
                  description:
                    "Name or id of subscription where the endpoint resource exists. If no subscription is provided the default subscription is used",
                  args: { name: "eventgrid-subscription" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "eventhub",
              description:
                "Adds an EventHub endpoint to a Digital Twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--eventhub", "--eh"],
                  description: "Name of EventHub to integrate with",
                  args: { name: "eventhub" },
                  isRequired: true,
                },
                {
                  name: ["--eventhub-namespace", "--ehn"],
                  description: "EventHub Namespace identifier",
                  args: { name: "eventhub-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-name", "--en"],
                  description: "Endpoint name",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Argument 'auth_type' has been deprecated and will be removed in a future release. Use 'identity' instead. Endpoint authentication type",
                  args: {
                    name: "auth-type",
                    suggestions: ["IdentityBased", "KeyBased"],
                  },
                },
                {
                  name: ["--deadletter-sas-uri", "--dsu"],
                  description:
                    "Dead-letter storage container URL with SAS token for Key based authentication",
                  args: { name: "deadletter-sas-uri" },
                },
                {
                  name: ["--deadletter-uri", "--du"],
                  description:
                    "Dead-letter storage container URL for Identity based authentication",
                  args: { name: "deadletter-uri" },
                },
                {
                  name: ["--eventhub-resource-group", "--ehg"],
                  description:
                    "Name of EventHub resource group. If not provided, the Digital Twin instance resource group will be used",
                  args: { name: "eventhub-resource-group" },
                },
                {
                  name: ["--eventhub-policy", "--ehp"],
                  description:
                    "EventHub policy to use for endpoint configuration. Required when --auth-type is KeyBased",
                  args: { name: "eventhub-policy" },
                },
                {
                  name: ["--eventhub-subscription", "--ehs"],
                  description:
                    "Name or id of subscription where the endpoint resource exists. If no subscription is provided the default subscription is used",
                  args: { name: "eventhub-subscription" },
                },
                {
                  name: ["--mi-system-assigned", "--system"],
                  description:
                    "Use the system-assigned managed identity for endpoint authentication",
                  args: {
                    name: "mi-system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--mi-user-assigned", "--user"],
                  description:
                    "Use an user-assigned managed identity for endpoint authentication. Accepts the identity resource id",
                  args: { name: "mi-user-assigned" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "servicebus",
              description:
                "Adds a ServiceBus Topic endpoint to a Digital Twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--endpoint-name", "--en"],
                  description: "Endpoint name",
                  args: { name: "endpoint-name" },
                  isRequired: true,
                },
                {
                  name: ["--servicebus-namespace", "--sbn"],
                  description: "ServiceBus Namespace identifier",
                  args: { name: "servicebus-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--servicebus-topic", "--sbt"],
                  description: "Name of ServiceBus Topic to integrate with",
                  args: { name: "servicebus-topic" },
                  isRequired: true,
                },
                {
                  name: "--auth-type",
                  description:
                    "Argument 'auth_type' has been deprecated and will be removed in a future release. Use 'identity' instead. Endpoint authentication type",
                  args: {
                    name: "auth-type",
                    suggestions: ["IdentityBased", "KeyBased"],
                  },
                },
                {
                  name: ["--deadletter-sas-uri", "--dsu"],
                  description:
                    "Dead-letter storage container URL with SAS token for Key based authentication",
                  args: { name: "deadletter-sas-uri" },
                },
                {
                  name: ["--deadletter-uri", "--du"],
                  description:
                    "Dead-letter storage container URL for Identity based authentication",
                  args: { name: "deadletter-uri" },
                },
                {
                  name: ["--mi-system-assigned", "--system"],
                  description:
                    "Use the system-assigned managed identity for endpoint authentication",
                  args: {
                    name: "mi-system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--mi-user-assigned", "--user"],
                  description:
                    "Use an user-assigned managed identity for endpoint authentication. Accepts the identity resource id",
                  args: { name: "mi-user-assigned" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--servicebus-resource-group", "--sbg"],
                  description:
                    "Name of ServiceBus resource group. If not provided, the Digital Twin instance resource group will be used",
                  args: { name: "servicebus-resource-group" },
                },
                {
                  name: ["--servicebus-policy", "--sbp"],
                  description:
                    "ServiceBus Topic policy to use for endpoint configuration. Required when --auth-type is KeyBased",
                  args: { name: "servicebus-policy" },
                },
                {
                  name: ["--servicebus-subscription", "--sbs"],
                  description:
                    "Name or id of subscription where the endpoint resource exists. If no subscription is provided the default subscription is used",
                  args: { name: "servicebus-subscription" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage identites of a Digital Twins instance",
      subcommands: [
        {
          name: "assign",
          description: "Assign managed identities to a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--mi-system-assigned", "--system"],
              description:
                "Assign a system-assigned managed identity to this Digital Twin instance",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--mi-user-assigned", "--user"],
              description:
                "Assign user-assigned managed identities to this Digital Twin instance. Accepts space-separated list of identity resource ids",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "Role to assign to the digital twin's system-assigned managed identity",
              args: { name: "role" },
            },
            {
              name: "--scopes",
              description:
                "Space separated list of scopes to assign the role (--role) for the system-assigned managed identity",
              args: { name: "scopes" },
            },
          ],
        },
        {
          name: "remove",
          description:
            "Remove managed identities from a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--mi-system-assigned", "--system"],
              description:
                "Remove the system-assigned managed identity to this Digital Twin instance",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--mi-user-assigned", "--user"],
              description:
                "Remove user-assigned managed identities to this Digital Twin instance. Accepts space-separated list of identity resource ids",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the identity properties of a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Manage and configure jobs for a digital twin instance",
      subcommands: [
        {
          name: "deletion",
          description:
            "Manage and configure jobs for deleting model, twin and relationships data in a digital twin instance.\n\n\t\tA deletion job cannot be cancelled or deleted",
          subcommands: [
            {
              name: "create",
              description:
                "Create and execute a deletion job on a digital twin instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all deletion jobs executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details of a deletion job executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "import",
          description:
            "Manage and configure jobs for importing model, twin and relationships data to a digital twin instance",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancel a data import job executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create and execute a data import job on a digital twin instance",
              options: [
                {
                  name: ["--data-file", "--df"],
                  description:
                    "Name of data file input to the bulk import job. The file must be in 'ndjson' format. Sample input data file: https://github.com/Azure/azure-iot-cli-extension/tree/dev/docs/samples/adt-bulk-import-data-sample.ndjson",
                  args: { name: "data-file" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--input-blob-container", "--ibc"],
                  description:
                    "Name of Azure Storage blob container which contains the bulk import data file",
                  args: { name: "input-blob-container" },
                  isRequired: true,
                },
                {
                  name: ["--input-storage-account", "--isa"],
                  description:
                    "Name of Azure Storage account containing blob container which stores the bulk import data file",
                  args: { name: "input-storage-account" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                },
                {
                  name: ["--output-blob-container", "--obc"],
                  description:
                    "Name of Azure Storage blob container where the bulk import job's output file will be created. If not provided, will use the input blob container",
                  args: { name: "output-blob-container" },
                },
                {
                  name: ["--output-file", "--of"],
                  description:
                    "Name of the bulk import job's output file. This file will contain logs as well as error information. The file gets created automatically once the job finishes. The file gets overwritten if it already exists. If not provided the output file is created with the name: <job_id>_output.txt",
                  args: { name: "output-file" },
                },
                {
                  name: ["--output-storage-account", "--osa"],
                  description:
                    "Name of Azure Storage account containing blob container where bulk import job's output file will be created. If not provided, will use the input storage account",
                  args: { name: "output-storage-account" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a data import job executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all data import jobs executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details of a data import job executed on a digital twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--job-id", "-j"],
                  description:
                    "Id of job. A system generated id is assigned when this parameter is ommitted during job creation",
                  args: { name: "job-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "model",
      description:
        "Manage DTDL models and definitions on a Digital Twins instance",
      subcommands: [
        {
          name: "create",
          description: "Uploads one or more models",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--failure-policy", "--fp"],
              description:
                "Indicates the failure policy when an error occurs while processing a models batch. In the 'Rollback' mode all models created in previous batches are deleted one at a time. When selected as 'None' the models created in previous batches are not deleted from DT instance",
              args: {
                name: "failure-policy",
                suggestions: ["None", "Rollback"],
              },
            },
            {
              name: ["--from-directory", "--fd"],
              description:
                "The directory JSON model files will be parsed from. Please Note: Models are created atomically when directory contains 250 or lesser models, hence in case of an error none of the models get created.Input model set is chunked & created in batches when directory has more than 250 models(API limit). In case of an error processing a batch, the behavior is determined by the --failure-policy parameter",
              args: { name: "from-directory" },
            },
            {
              name: ["--max-models-per-batch", "--mmpb"],
              description:
                "The maximum model size per batch when creating more than 250 models.Reduce this number to prevent a DTDLParser error",
              args: { name: "max-models-per-batch" },
            },
            {
              name: "--models",
              description:
                "Inline model JSON or file path to model JSON. Please Note: Models are created atomically when model JSON contains 250 or lesser models, hence in case of an error none of the models get created.Input model set is chunked & created in batches when model JSON has more than 250 models(API limit). In case of an error processing a batch, the behavior is determined by the --failure-policy parameter",
              args: { name: "models" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a model. A model can only be deleted if no other models reference it",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--model-id", "--dtmi", "-m"],
              description:
                "Digital Twins model Id. Example: dtmi:com:example:Room;2",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete-all",
          description: "Delete all models within a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List model metadata, definitions and dependencies",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--definition", "--def"],
              description: "The operation will retrieve the model definition",
            },
            {
              name: "--dependencies-for",
              description:
                "The set of models which will have their dependencies retrieved. If omitted, all models are retrieved. Format is a whitespace separated list",
              args: { name: "dependencies-for" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a target model or model definition",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--model-id", "--dtmi", "-m"],
              description:
                "Digital Twins model Id. Example: dtmi:com:example:Room;2",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: ["--definition", "--def"],
              description: "The operation will retrieve the model definition",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Updates the metadata for a model. Currently a model can only be decommisioned",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--model-id", "--dtmi", "-m"],
              description:
                "Digital Twins model Id. Example: dtmi:com:example:Room;2",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: "--decommission",
              description: "Indicates intent to decommission a target model",
              args: { name: "decommission", suggestions: ["false", "true"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "network",
      description:
        "Manage Digital Twins network configuration including private links and endpoint connections",
      subcommands: [
        {
          name: "private-endpoint",
          description:
            "Manage Digital Twins instance private-endpoints.\n\n\t\tUse 'az network private-endpoint create' to create a private-endpoint and link to a Digital Twins resource",
          subcommands: [
            {
              name: "connection",
              description:
                "Manage Digital Twins instance private-endpoint connections",
              subcommands: [
                {
                  name: "delete",
                  description:
                    "Delete a private-endpoint connection associated with the Digital Twins instance",
                  options: [
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List private-endpoint connections associated with the Digital Twins instance",
                  options: [
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "set",
                  description:
                    "Set the state of a private-endpoint connection associated with the Digital Twins instance",
                  options: [
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: "--status",
                      description:
                        "The status of a private endpoint connection",
                      args: {
                        name: "status",
                        suggestions: [
                          "Approved",
                          "Disconnected",
                          "Pending",
                          "Rejected",
                        ],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--actions-required", "--ar"],
                      description:
                        "A message indicating if changes on the service provider require any updates on the consumer",
                      args: { name: "actions-required" },
                    },
                    {
                      name: ["--description", "--desc"],
                      description:
                        "Description for the private endpoint connection",
                      args: { name: "description" },
                    },
                    {
                      name: "--group-ids",
                      description:
                        "Space separated list of group ids that the private endpoint should connect to",
                      args: { name: "group-ids" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Show a private-endpoint connection associated with the Digital Twins instance",
                  options: [
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Wait until an operation on a private-endpoint connection is complete",
                  options: [
                    {
                      name: ["--conn-name", "--cn"],
                      description: "Private endpoint connection name",
                      args: { name: "conn-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--dt-name", "--dtn", "-n"],
                      description: "Digital Twins instance name",
                      args: { name: "dt-name" },
                      isRequired: true,
                    },
                    {
                      name: "--custom",
                      description:
                        "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
                      args: { name: "custom" },
                    },
                    { name: "--deleted", description: "Wait until deleted" },
                    {
                      name: "--interval",
                      description: "Polling interval in seconds",
                      args: { name: "interval" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--timeout",
                      description: "Maximum wait in seconds",
                      args: { name: "timeout" },
                    },
                    {
                      name: "--updated",
                      description:
                        "Wait until updated with provisioningState at 'Succeeded'",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "private-link",
          description: "Manage Digital Twins instance private-link operations",
          subcommands: [
            {
              name: "list",
              description:
                "List private-links associated with the Digital Twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description: "Show a private-link associated with the instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description: "Digital Twins instance name",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--link-name", "--ln"],
                  description: "Private link name",
                  args: { name: "link-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "role-assignment",
      description:
        "Manage RBAC role assignments for a Digital Twins instance.\n\n\t\tNote that in order to perform role assignments, the logged in principal needs permissions\nsuch as Owner or User Access Administrator at the assigned scope.\nThis command group is provided for convenience. For more complex role assignment scenarios\nuse the 'az role assignment' command group",
      subcommands: [
        {
          name: "create",
          description:
            "Assign a user, group or service principal to a role against a Digital Twins instance",
          options: [
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
              isRequired: true,
            },
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: "--role",
              description: "Role name or Id",
              args: { name: "role" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Remove a user, group or service principal role assignment from a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: "--assignee",
              description:
                "Represent a user, group, or service principal. supported format: object id, user sign-in name, or service principal name",
              args: { name: "assignee" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or Id",
              args: { name: "role" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the existing role assignments of a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description: "Digital Twins instance name",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: "--include-inherited",
              description: "Include assignments applied on parent scopes",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "Role name or Id",
              args: { name: "role" },
            },
          ],
        },
      ],
    },
    {
      name: "route",
      description:
        "Manage and configure event routes.\n\n\t\tNote that an endpoint must first be configured before adding an event route",
      subcommands: [
        {
          name: "create",
          description: "Add an event route to a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--endpoint-name", "--en"],
              description: "Endpoint name",
              args: { name: "endpoint-name" },
              isRequired: true,
            },
            {
              name: ["--route-name", "--rn"],
              description: "Event route name",
              args: { name: "route-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Event route filter",
              args: { name: "filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Remove an event route from a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--route-name", "--rn"],
              description: "Event route name",
              args: { name: "route-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List the configured event routes of a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of an event route configured on a Digital Twins instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--route-name", "--rn"],
              description: "Event route name",
              args: { name: "route-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
      ],
    },
    {
      name: "twin",
      description:
        "Manage and configure the digital twins of a Digital Twins instance",
      subcommands: [
        {
          name: "create",
          description: "Create a digital twin on an instance",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--model-id", "--dtmi", "-m"],
              description:
                "Digital Twins model Id. Example: dtmi:com:example:Room;2",
              args: { name: "model-id" },
              isRequired: true,
            },
            {
              name: ["--twin-id", "-t"],
              description: "The digital twin Id",
              args: { name: "twin-id" },
              isRequired: true,
            },
            {
              name: "--if-none-match",
              description:
                "Indicates the create operation should fail if an existing twin with the same id exists",
            },
            {
              name: ["--properties", "-p"],
              description:
                "Initial property values for instantiating a digital twin or related components. Provide file path or inline JSON. Properties are required for twins that contain components, at the minimum you must provide an empty $metadata object for each component",
              args: { name: "properties" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Remove a digital twin. All relationships referencing this twin must already be deleted",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--twin-id", "-t"],
              description: "The digital twin Id",
              args: { name: "twin-id" },
              isRequired: true,
            },
            {
              name: ["--etag", "-e"],
              description:
                "Entity tag value. The command will succeed if the etag matches the current etag for the resource",
              args: { name: "etag" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "delete-all",
          description:
            "Deletes all digital twins within a Digital Twins instance, including all relationships for those twins",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "query",
          description:
            "Query the digital twins of an instance. Allows traversing relationships and filtering by property values",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--query-command", "-q"],
              description: "User query to be executed",
              args: { name: "query-command" },
              isRequired: true,
            },
            {
              name: ["--show-cost", "--cost"],
              description: "Calculates and shows the query charge",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a digital twin",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--twin-id", "-t"],
              description: "The digital twin Id",
              args: { name: "twin-id" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update an instance digital twin via JSON patch specification",
          options: [
            {
              name: ["--dt-name", "--dtn", "-n"],
              description:
                "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
              args: { name: "dt-name" },
              isRequired: true,
            },
            {
              name: ["--json-patch", "--patch"],
              description:
                "An update specification described by JSON-patch. Updates to property values and $model elements may happen in the same request. Operations are limited to add, replace and remove. Provide file path or inline JSON",
              args: { name: "json-patch" },
              isRequired: true,
            },
            {
              name: ["--twin-id", "-t"],
              description: "The digital twin Id",
              args: { name: "twin-id" },
              isRequired: true,
            },
            {
              name: ["--etag", "-e"],
              description:
                "Entity tag value. The command will succeed if the etag matches the current etag for the resource",
              args: { name: "etag" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "component",
          description:
            "Show and update the digital twin components of a Digital Twins instance",
          subcommands: [
            {
              name: "show",
              description: "Show details of a digital twin component",
              options: [
                {
                  name: "--component",
                  description: "The path to the DTDL component",
                  args: { name: "component" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "-t"],
                  description: "The digital twin Id",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a digital twin component via JSON patch specification",
              options: [
                {
                  name: "--component",
                  description: "The path to the DTDL component",
                  args: { name: "component" },
                  isRequired: true,
                },
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--json-patch", "--patch"],
                  description:
                    "An update specification described by JSON-patch. Updates to property values and $model elements may happen in the same request. Operations are limited to add, replace and remove. Provide file path or inline JSON",
                  args: { name: "json-patch" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "-t"],
                  description: "The digital twin Id",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Entity tag value. The command will succeed if the etag matches the current etag for the resource",
                  args: { name: "etag" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "relationship",
          description:
            "Manage and configure the digital twin relationships of a Digital Twins instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a relationship between source and target digital twins",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--relationship", "--kind"],
                  description:
                    "Relationship name or kind. For example: 'contains'",
                  args: { name: "relationship" },
                  isRequired: true,
                },
                {
                  name: ["--relationship-id", "-r"],
                  description: "Relationship Id",
                  args: { name: "relationship-id" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--target-twin-id", "--target"],
                  description: "The target twin Id for a relationship",
                  args: { name: "target-twin-id" },
                  isRequired: true,
                },
                {
                  name: "--if-none-match",
                  description:
                    "Indicates the create operation should fail if an existing twin with the same id exists",
                },
                {
                  name: ["--properties", "-p"],
                  description:
                    "Initial property values for instantiating a digital twin relationship. Provide file path or inline JSON",
                  args: { name: "properties" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a digital twin relationship on a Digital Twins instance",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--relationship-id", "-r"],
                  description: "Relationship Id",
                  args: { name: "relationship-id" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Entity tag value. The command will succeed if the etag matches the current etag for the resource",
                  args: { name: "etag" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete-all",
              description:
                "Deletes all digital twin relationships within a Digital Twins instance, including incoming relationships",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List the relationships of a digital twin",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: "--incoming",
                  description:
                    "Retrieves all incoming relationships for a digital twin",
                },
                {
                  name: ["--relationship", "--kind"],
                  description: "Filter result by the kind of relationship",
                  args: { name: "relationship" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of a digital twin relationship",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--relationship-id", "-r"],
                  description: "Relationship Id",
                  args: { name: "relationship-id" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the properties of a relationship between two digital twins via JSON patch specification",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--json-patch", "--patch"],
                  description:
                    "An update specification described by JSON-patch. Updates to property values and $model elements may happen in the same request. Operations are limited to add, replace and remove. Provide file path or inline JSON",
                  args: { name: "json-patch" },
                  isRequired: true,
                },
                {
                  name: ["--relationship-id", "-r"],
                  description: "Relationship Id",
                  args: { name: "relationship-id" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "--source", "-t"],
                  description: "The source twin Id for a relationship",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: ["--etag", "-e"],
                  description:
                    "Entity tag value. The command will succeed if the etag matches the current etag for the resource",
                  args: { name: "etag" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
              ],
            },
          ],
        },
        {
          name: "telemetry",
          description:
            "Test and validate the event routes and endpoints of a Digital Twins instance",
          subcommands: [
            {
              name: "send",
              description:
                "Sends telemetry on behalf of a digital twin. If component path is provided the emitted telemetry is on behalf of the component",
              options: [
                {
                  name: ["--dt-name", "--dtn", "-n"],
                  description:
                    "Digital Twins instance name or hostname. If an instance name is provided, the user subscription is first queried for the target instance to retrieve the hostname. If a hostname is provided, the subscription query is skipped and the provided value is used for subsequent interaction",
                  args: { name: "dt-name" },
                  isRequired: true,
                },
                {
                  name: ["--twin-id", "-t"],
                  description: "The digital twin Id",
                  args: { name: "twin-id" },
                  isRequired: true,
                },
                {
                  name: "--component",
                  description:
                    "The path to the DTDL component. If set, telemetry will be emitted on behalf of the component",
                  args: { name: "component" },
                },
                {
                  name: "--dt-id",
                  description:
                    "A unique message identifier (in the scope of the digital twin id) that is commonly used for de-duplicating messages. If no value is provided a GUID is automatically generated",
                  args: { name: "dt-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Digital Twins instance resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--telemetry",
                  description:
                    "Inline telemetry JSON or file path to telemetry JSON. Default payload is an empty object: {}",
                  args: { name: "telemetry" },
                },
                {
                  name: ["--telemetry-source-time", "--tst"],
                  description:
                    "An RFC 3339 timestamp that identifies the time the telemetry was measured",
                  args: { name: "telemetry-source-time" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
