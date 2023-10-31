const completion: Fig.Spec = {
  name: "datadog",
  description: "Manage datadog",
  subcommands: [
    {
      name: "monitor",
      description: "Manage monitor with datadog",
      subcommands: [
        {
          name: "create",
          description: "Create a monitor resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
              name: "--datadog-organization-properties",
              description: "Datadog organization properties",
              args: { name: "datadog-organization-properties" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--sku-name",
              description: "Name of the SKU",
              args: { name: "sku-name" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--type",
              description: "Identity type",
              args: {
                name: "type",
                suggestions: ["SystemAssigned", "UserAssigned"],
              },
            },
            {
              name: "--user-info",
              description: "User info",
              args: { name: "user-info" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a monitor resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "get-default-key",
          description: "Get the default api key",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "list",
          description:
            "List all monitors under the specified resource group. And List all monitors under the specified subscription",
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
          name: "list-api-key",
          description: "List the api keys for a given monitor resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "list-host",
          description: "List the hosts for a given monitor resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "list-linked-resource",
          description:
            "List all Azure resources associated to the same Datadog organization as the target resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "list-monitored-resource",
          description:
            "List the resources currently being monitored by the Datadog monitor resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "refresh-set-password-link",
          description: "Refresh the set password link and return a latest one",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          name: "set-default-key",
          description: "Set the default api key",
          options: [
            {
              name: "--created",
              description: "The time of creation of the API key",
              args: { name: "created" },
            },
            {
              name: "--created-by",
              description: "The user that created the API key",
              args: { name: "created-by" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description: "The value of the API key",
              args: { name: "key" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: "--name",
              description: "The name of the API key",
              args: { name: "name" },
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
          name: "show",
          description: "Get the properties of a specific monitor resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          description: "Update a monitor resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: "--monitoring-status",
              description:
                'Flag specifying if the resource monitoring is enabled or disabled. Allowed values: "Enabled", "Disabled"',
              args: { name: "monitoring-status" },
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
              name: "--sku-name",
              description: "Name of the SKU",
              args: { name: "sku-name" },
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
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datadog monitor is met",
          options: [
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
    {
      name: "sso-config",
      description: "Manage sso config with datadog",
      subcommands: [
        {
          name: "create",
          description: "Configures single-sign-on for this resource",
          options: [
            {
              name: "--configuration-name",
              description: "Configuration name",
              args: { name: "configuration-name" },
              isRequired: true,
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the single sign-on configurations for a given monitor resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
            "Gets the datadog single sign-on resource for the given Monitor",
          options: [
            {
              name: "--configuration-name",
              description: "Configuration name",
              args: { name: "configuration-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          description: "Configures single-sign-on for this resource",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--configuration-name",
              description: "Configuration name",
              args: { name: "configuration-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datadog sso-config is met",
          options: [
            {
              name: "--configuration-name",
              description: "Configuration name",
              args: { name: "configuration-name" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
    {
      name: "tag-rule",
      description: "Manage tag rule with datadog",
      subcommands: [
        {
          name: "create",
          description: "Create a tag rule set for a given monitor resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
              name: "--rule-set-name",
              description: "Rule set name",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            {
              name: "--filtering-tags",
              description:
                "List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "filtering-tags" },
            },
            {
              name: "--log-rules-filtering-tags",
              description:
                "List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "log-rules-filtering-tags" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-resource-logs",
              description:
                "Flag specifying if Azure resource logs should be sent for the Monitor resource",
              args: {
                name: "send-resource-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if Azure subscription logs should be sent for the Monitor resource",
              args: {
                name: "send-subscription-logs",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List the tag rules for a given monitor resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
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
          description: "Get a tag rule set for a given monitor resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-set-name",
              description: "Rule set name",
              args: { name: "rule-set-name" },
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
          description: "Update a tag rule set for a given monitor resource",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--filtering-tags",
              description:
                "List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "filtering-tags" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--log-rules-filtering-tags",
              description:
                "List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "log-rules-filtering-tags" },
            },
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--rule-set-name",
              description: "Rule set name",
              args: { name: "rule-set-name" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-resource-logs",
              description:
                "Flag specifying if Azure resource logs should be sent for the Monitor resource",
              args: {
                name: "send-resource-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if Azure subscription logs should be sent for the Monitor resource",
              args: {
                name: "send-subscription-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
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
      name: "terms",
      description: "Manage marketplace agreements with datadog",
      subcommands: [
        {
          name: "create",
          description:
            "Create Datadog marketplace agreement in the subscription",
          options: [
            {
              name: "--properties",
              description: "Represents the properties of the resource",
              args: { name: "properties" },
            },
          ],
        },
        {
          name: "list",
          description: "List datadog marketplace agreements",
        },
        {
          name: "update",
          description:
            "Update Datadog marketplace agreement in the subscription",
          options: [
            {
              name: "--properties",
              description: "Represents the properties of the resource",
              args: { name: "properties" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
