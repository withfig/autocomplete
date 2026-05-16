const completion: Fig.Spec = {
  name: "logz",
  description: "Manage Microsoft Logz",
  subcommands: [
    {
      name: "monitor",
      description: "Manage monitor with logz",
      subcommands: [
        {
          name: "create",
          description:
            "Create a monitor resource. This create operation can take Get to complete",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--monitoring-status",
              description:
                "Flag specifying if the resource monitoring is enabled or disabled",
              args: {
                name: "monitoring-status",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "list-payload",
          description:
            "List the payload that needs to be passed in the request body for installing Logz.io agent on a VM",
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
          name: "list-resource",
          description:
            "List the resources currently being monitored by the Logz monitor resource",
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
          name: "list-role",
          description:
            "List the user's roles configured on Logz.io side for the account corresponding to the monitor resource",
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
              name: "--email-address",
              description:
                "Email of the user used by Logz for contacting them if needed",
              args: { name: "email-address" },
            },
          ],
        },
        {
          name: "list-vm",
          description:
            "List the compute resources currently being monitored by the Logz main account resource",
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
                "Flag specifying if the resource monitoring is enabled or disabled",
              args: {
                name: "monitoring-status",
                suggestions: ["Disabled", "Enabled"],
              },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "update-vm",
          description:
            "Update the collection when Logz.io agent has been installed on a VM for a given monitor",
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
              name: "--state",
              description:
                "Specifies the state of the operation - install/ delete",
              args: { name: "state", suggestions: ["Delete", "Install"] },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vm-resource-ids",
              description: "Request of a list vm host update operation",
              args: { name: "vm-resource-ids" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the logz monitor is met",
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
      name: "rule",
      description: "Manage tag rule with logz",
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
              description: "Rule set name of monitor",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            {
              name: "--filtering-tags",
              description:
                "List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "filtering-tags" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-activity-logs",
              description:
                "Flag specifying if activity logs from Azure resources should be sent for the Monitor resource",
              args: {
                name: "send-activity-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if subscription logs should be sent for the Monitor resource",
              args: {
                name: "send-subscription-logs",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a tag rule set for a given monitor resource",
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
              description: "Rule set name of monitor",
              args: { name: "rule-set-name" },
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
              description: "Rule set name of monitor",
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
                "List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
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
              description: "Rule set name of monitor",
              args: { name: "rule-set-name" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-activity-logs",
              description:
                "Flag specifying if activity logs from Azure resources should be sent for the Monitor resource",
              args: {
                name: "send-activity-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if subscription logs should be sent for the Monitor resource",
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
      name: "sso",
      description: "Manage single sign on with logz",
      subcommands: [
        {
          name: "create",
          description: "Create single-sign-on for this resource",
          options: [
            {
              name: "--configuration-name",
              description: "Single sign-on configuration name",
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
            "Get the Logz single sign-on resource for the given Monitor",
          options: [
            {
              name: "--configuration-name",
              description: "Single sign-on configuration name",
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
          description: "Create single-sign-on for this resource",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--configuration-name",
              description: "Single sign-on configuration name",
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
            "Place the CLI in a waiting state until a condition of the logz sso is met",
          options: [
            {
              name: "--configuration-name",
              description: "Single sign-on configuration name",
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
      name: "sub-account",
      description: "Manage sub account with logz",
      subcommands: [
        {
          name: "create",
          description: "Create sub account under a given monitor resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--monitoring-status",
              description:
                "Flag specifying if the resource monitoring is enabled or disabled",
              args: {
                name: "monitoring-status",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a sub account resource",
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
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          name: "list",
          description: "List the sub account under a given monitor resource",
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
          name: "list-payload",
          description:
            "List the payload that needs to be passed as a request for installing Logz.io agent on a VM",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          name: "list-resource",
          description:
            "List the resources currently being monitored by the Logz sub account resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          name: "list-vm",
          description:
            "List the compute resources currently being monitored by the Logz sub account resource",
          options: [
            {
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
              isRequired: true,
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          description: "Get a sub account under a given monitor resource",
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
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: "--monitoring-status",
              description:
                "Flag specifying if the resource monitoring is enabled or disabled",
              args: {
                name: "monitoring-status",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "update-vm",
          description:
            "Update the collection when Logz.io agent has been installed on a VM for a given monitor",
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
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--state",
              description:
                "Specifies the state of the operation - install/ delete",
              args: { name: "state", suggestions: ["Delete", "Install"] },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vm-resource-ids",
              description: "Request of a list vm host update operation",
              args: { name: "vm-resource-ids" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the logz sub-account is met",
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
              name: "--monitor-name",
              description: "Monitor resource name",
              args: { name: "monitor-name" },
            },
            {
              name: ["--sub-account-name", "--name", "-n"],
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
      name: "sub-rule",
      description: "Manage sub account tag rule with logz",
      subcommands: [
        {
          name: "create",
          description: "Create a tag rule set for a given sub account resource",
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
              description: "Rule set name of sub account",
              args: { name: "rule-set-name" },
              isRequired: true,
            },
            {
              name: "--sub-account-name",
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
              isRequired: true,
            },
            {
              name: "--filtering-tags",
              description:
                "List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
              args: { name: "filtering-tags" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-activity-logs",
              description:
                "Flag specifying if activity logs from Azure resources should be sent for the Monitor resource",
              args: {
                name: "send-activity-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if subscription logs should be sent for the Monitor resource",
              args: {
                name: "send-subscription-logs",
                suggestions: ["false", "true"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a tag rule set for a given monitor resource",
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
              description: "Rule set name of monitor",
              args: { name: "rule-set-name" },
            },
            {
              name: "--sub-account-name",
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          description: "List the tag rules for a given sub account resource",
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
              name: "--sub-account-name",
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
              description: "Rule set name of monitor",
              args: { name: "rule-set-name" },
            },
            {
              name: "--sub-account-name",
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
          description: "Update a tag rule set for a given sub account resource",
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
                "List of filtering tags to be used for capturing logs. This only takes effect if SendActivityLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags",
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
              description: "Rule set name of sub account",
              args: { name: "rule-set-name" },
            },
            {
              name: "--send-aad-logs",
              description:
                "Flag specifying if AAD logs should be sent for the Monitor resource",
              args: { name: "send-aad-logs", suggestions: ["false", "true"] },
            },
            {
              name: "--send-activity-logs",
              description:
                "Flag specifying if activity logs from Azure resources should be sent for the Monitor resource",
              args: {
                name: "send-activity-logs",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--send-subscription-logs",
              description:
                "Flag specifying if subscription logs should be sent for the Monitor resource",
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
              name: "--sub-account-name",
              description: "Sub Account resource name",
              args: { name: "sub-account-name" },
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
  ],
};

export default completion;
