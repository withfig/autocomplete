const completion: Fig.Spec = {
  name: "tsi",
  description: "Manage Azure Time Series Insights",
  subcommands: [
    {
      name: "access-policy",
      description: "Manage access policy with timeseriesinsights",
      subcommands: [
        {
          name: "create",
          description: "Create an access policy in the specified environment",
          options: [
            {
              name: ["--access-policy-name", "--name", "-n"],
              description: "Name of the access policy",
              args: { name: "access-policy-name" },
              isRequired: true,
            },
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--description",
              description: "An description of the access policy",
              args: { name: "description" },
            },
            {
              name: "--principal-object-id",
              description:
                "The objectId of the principal in Azure Active Directory. Values from: az ad user, az ad sp",
              args: { name: "principal-object-id" },
            },
            {
              name: "--roles",
              description:
                'The list of roles the principal is assigned on the environment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "roles" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the access policy with the specified name in the specified subscription, resource group, and environment",
          options: [
            {
              name: ["--access-policy-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights access policy associated with the specified environment",
              args: { name: "access-policy-name" },
            },
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "List all the available access policies associated with the environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the access policy with the specified name in the specified environment",
          options: [
            {
              name: ["--access-policy-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights access policy associated with the specified environment",
              args: { name: "access-policy-name" },
            },
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the access policy with the specified name in the specified subscription, resource group, and environment",
          options: [
            {
              name: ["--access-policy-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights access policy associated with the specified environment",
              args: { name: "access-policy-name" },
            },
            {
              name: "--description",
              description: "An description of the access policy",
              args: { name: "description" },
            },
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--roles",
              description:
                'The list of roles the principal is assigned on the environment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "roles" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
      ],
    },
    {
      name: "environment",
      description: "Manage environment with Azure Time Series Insights",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the environment with the specified name in the specified subscription and resource group",
          options: [
            {
              name: ["--environment-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "List all the available environments within a subscription, irrespective of the resource groups",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the environment with the specified name in the specified subscription and resource group",
          options: [
            {
              name: ["--environment-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--expand",
              description:
                "Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "gen1",
          description:
            "Manage a gen1 environment in the specified subscription and resource group",
          subcommands: [
            {
              name: "create",
              description:
                "Create a gen1 environment in the specified subscription and resource group",
              options: [
                {
                  name: "--data-retention-time",
                  description:
                    "ISO8601 timespan specifying the minimum number of days the environment's events will be available for query",
                  args: { name: "data-retention-time" },
                  isRequired: true,
                },
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "Name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--sku",
                  description:
                    "The sku determines the type of environment, either S1 or S2. For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate",
                  args: { name: "sku" },
                  isRequired: true,
                },
                {
                  name: [
                    "--storage-limit-exceeded-behavior",
                    "--exceeded-behavior",
                  ],
                  description:
                    'The behavior the Time Series Insights service should take when the environment\'s capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData',
                  args: {
                    name: "storage-limit-exceeded-behavior",
                    suggestions: ["PauseIngress", "PurgeOldData"],
                  },
                },
                {
                  name: ["--partition-key-properties", "--key-properties"],
                  description:
                    "The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported",
                  args: { name: "partition-key-properties" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a gen1 environment in the specified subscription and resource group",
              options: [
                {
                  name: "--data-retention-time",
                  description:
                    "ISO8601 timespan specifying the minimum number of days the environment's events will be available for query",
                  args: { name: "data-retention-time" },
                },
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "Name of the environment",
                  args: { name: "environment-name" },
                },
                {
                  name: [
                    "--storage-limit-exceeded-behavior",
                    "--exceeded-behavior",
                  ],
                  description:
                    'The behavior the Time Series Insights service should take when the environment\'s capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData',
                  args: {
                    name: "storage-limit-exceeded-behavior",
                    suggestions: ["PauseIngress", "PurgeOldData"],
                  },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--sku",
                  description:
                    "The sku determines the type of environment, either S1 or S2. For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate",
                  args: { name: "sku" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
        {
          name: "gen2",
          description:
            "Manage a gen2 environment in the specified subscription and resource group",
          subcommands: [
            {
              name: "create",
              description:
                "Create a gen2 environment in the specified subscription and resource group",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "Name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--time-series-id-properties", "--id-properties"],
                  description:
                    "The list of event properties which will be used to define the environment's time series id",
                  args: { name: "time-series-id-properties" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--sku",
                  description: "The sku determines the type of environment, L1",
                  args: { name: "sku" },
                  isRequired: true,
                },
                {
                  name: ["--storage-configuration", "--storage-config"],
                  description:
                    "The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data",
                  args: { name: "storage-configuration" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--warm-store-configuration", "--warm-store-config"],
                  description:
                    "The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query",
                  args: { name: "warm-store-configuration" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update a gen2 environment in the specified subscription and resource group",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "Name of the environment",
                  args: { name: "environment-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--storage-configuration", "--storage-config"],
                  description:
                    "The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data",
                  args: { name: "storage-configuration" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--warm-store-configuration", "--warm-store-config"],
                  description:
                    "The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query",
                  args: { name: "warm-store-configuration" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "event-source",
      description: "Manage event source with timeseriesinsights",
      subcommands: [
        {
          name: "delete",
          description:
            "Delete the event source with the specified name in the specified subscription, resource group, and environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: ["--event-source-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights event source associated with the specified environment",
              args: { name: "event-source-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "List all the available event sources associated with the subscription and within the specified resource group and environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the event source with the specified name in the specified environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: ["--event-source-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights event source associated with the specified environment",
              args: { name: "event-source-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "eventhub",
          description:
            "Manage event source with timeseriesinsights sub group event-hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create an event source under the specified environment",
              options: [
                {
                  name: "--consumer-group-name",
                  description:
                    "The name of the event hub's consumer group that holds the partitions from which events will be read",
                  args: { name: "consumer-group-name" },
                  isRequired: true,
                },
                {
                  name: "--environment-name",
                  description:
                    "The name of the Time Series Insights environment associated with the specified resource group",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: "--event-hub-name",
                  description: "The name of the event hub",
                  args: { name: "event-hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--event-source-name", "--name", "-n"],
                  description:
                    "The name of the Time Series Insights event source associated with the specified environment",
                  args: { name: "event-source-name" },
                  isRequired: true,
                },
                {
                  name: ["--event-source-resource-id", "--resource-id"],
                  description:
                    "The resource id of the event source in Azure Resource Manager",
                  args: { name: "event-source-resource-id" },
                  isRequired: true,
                },
                {
                  name: ["--shared-access-policy-name", "--key-name"],
                  description:
                    "The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub",
                  args: { name: "shared-access-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--service-bus-namespace", "--namespace"],
                  description:
                    "The name of the service bus that contains the event hub",
                  args: { name: "service-bus-namespace" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--shared-access-key",
                  description:
                    "The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses",
                  args: { name: "shared-access-key" },
                  isRequired: true,
                },
                {
                  name: "--local-timestamp",
                  description:
                    "An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. Expected value: json-string/@json-file",
                  args: { name: "local-timestamp" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--timestamp-property-name", "--ts-property-name"],
                  description:
                    "The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used",
                  args: { name: "timestamp-property-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an event source under the specified environment",
              options: [
                {
                  name: "--environment-name",
                  description:
                    "The name of the Time Series Insights environment associated with the specified resource group",
                  args: { name: "environment-name" },
                },
                {
                  name: ["--event-source-name", "--name", "-n"],
                  description:
                    "The name of the Time Series Insights event source associated with the specified environment",
                  args: { name: "event-source-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--local-timestamp",
                  description:
                    "An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. Expected value: json-string/@json-file",
                  args: { name: "local-timestamp" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--shared-access-key",
                  description:
                    "The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses",
                  args: { name: "shared-access-key" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--timestamp-property-name", "--ts-property-name"],
                  description:
                    "The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used",
                  args: { name: "timestamp-property-name" },
                },
              ],
            },
          ],
        },
        {
          name: "iothub",
          description:
            "Manage event source with timeseriesinsights sub group iot-hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create an event source under the specified environment",
              options: [
                {
                  name: "--consumer-group-name",
                  description:
                    "The name of the iot hub's consumer group that holds the partitions from which events will be read",
                  args: { name: "consumer-group-name" },
                  isRequired: true,
                },
                {
                  name: "--environment-name",
                  description:
                    "The name of the Time Series Insights environment associated with the specified resource group",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--event-source-name", "--name", "-n"],
                  description:
                    "The name of the Time Series Insights event source associated with the specified environment",
                  args: { name: "event-source-name" },
                  isRequired: true,
                },
                {
                  name: ["--event-source-resource-id", "--resource-id"],
                  description:
                    "The resource id of the event source in Azure Resource Manager",
                  args: { name: "event-source-resource-id" },
                  isRequired: true,
                },
                {
                  name: "--iot-hub-name",
                  description: "The name of the iot hub",
                  args: { name: "iot-hub-name" },
                  isRequired: true,
                },
                {
                  name: ["--shared-access-policy-name", "--key-name"],
                  description:
                    "The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub",
                  args: { name: "shared-access-policy-name" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--shared-access-key",
                  description:
                    "The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses",
                  args: { name: "shared-access-key" },
                  isRequired: true,
                },
                {
                  name: "--local-timestamp",
                  description:
                    "An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. Expected value: json-string/@json-file",
                  args: { name: "local-timestamp" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--timestamp-property-name", "--ts-property-name"],
                  description:
                    "The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used",
                  args: { name: "timestamp-property-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an event source under the specified environment",
              options: [
                {
                  name: "--environment-name",
                  description:
                    "The name of the Time Series Insights environment associated with the specified resource group",
                  args: { name: "environment-name" },
                },
                {
                  name: ["--event-source-name", "--name", "-n"],
                  description:
                    "The name of the Time Series Insights event source associated with the specified environment",
                  args: { name: "event-source-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--local-timestamp",
                  description:
                    "An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. Expected value: json-string/@json-file",
                  args: { name: "local-timestamp" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group of environment. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--shared-access-key",
                  description:
                    "The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses",
                  args: { name: "shared-access-key" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--timestamp-property-name", "--ts-property-name"],
                  description:
                    "The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used",
                  args: { name: "timestamp-property-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "reference-data-set",
      description: "Manage reference data set with timeseriesinsights",
      subcommands: [
        {
          name: "create",
          description:
            "Create a reference data set in the specified environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
              isRequired: true,
            },
            {
              name: "--key-properties",
              description:
                "The list of key properties for the reference data set",
              args: { name: "key-properties" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--reference-data-set-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights reference data set associated with the specified environment",
              args: { name: "reference-data-set-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: [
                "--data-string-comparison-behavior",
                "--comparison-behavior",
              ],
              description:
                "The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used",
              args: {
                name: "data-string-comparison-behavior",
                suggestions: ["Ordinal", "OrdinalIgnoreCase"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete the reference data set with the specified name in the specified subscription, resource group, and environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--reference-data-set-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights reference data set associated with the specified environment",
              args: { name: "reference-data-set-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
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
            "List all the available reference data sets associated with the subscription and within the specified resource group and environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the reference data set with the specified name in the specified environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--reference-data-set-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights reference data set associated with the specified environment",
              args: { name: "reference-data-set-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the reference data set with the specified name in the specified subscription, resource group, and environment",
          options: [
            {
              name: "--environment-name",
              description:
                "The name of the Time Series Insights environment associated with the specified resource group",
              args: { name: "environment-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--reference-data-set-name", "--name", "-n"],
              description:
                "The name of the Time Series Insights reference data set associated with the specified environment",
              args: { name: "reference-data-set-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Key-value pairs of additional properties for the reference data set. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
