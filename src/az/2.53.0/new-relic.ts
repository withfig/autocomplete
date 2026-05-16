const completion: Fig.Spec = {
  name: "new-relic",
  description: "Manage Azure NewRelic resources",
  subcommands: [
    {
      name: "account",
      description: "Manage NewRelic Account resource",
      subcommands: [
        {
          name: "list",
          description: "List all the existing accounts",
          options: [
            {
              name: "--location",
              description: "Location for NewRelic",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "monitor",
      description: "Manage NewRelic Monitor resource",
      subcommands: [
        {
          name: "create",
          description: "Create a NewRelicMonitorResource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
              name: ["--account-creation-source", "--account-source"],
              description: "Source of account creation",
              args: {
                name: "account-creation-source",
                suggestions: ["LIFTR", "NEWRELIC"],
              },
            },
            {
              name: "--identity",
              description:
                'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--new-relic-account",
              description:
                'MarketplaceSubscriptionStatus of the resource Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "new-relic-account" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
              },
            },
            {
              name: "--org-creation-source",
              description: "Source of org creation",
              args: {
                name: "org-creation-source",
                suggestions: ["LIFTR", "NEWRELIC"],
              },
            },
            {
              name: "--plan-data",
              description:
                'Plan details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "plan-data" },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--user-info",
              description:
                'User Info Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-info" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a NewRelicMonitorResource",
          options: [
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
              args: { name: "monitor-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: {
                name: "no-wait",
                suggestions: [
                  "0",
                  "1",
                  "f",
                  "false",
                  "n",
                  "no",
                  "t",
                  "true",
                  "y",
                  "yes",
                ],
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
          ],
        },
        {
          name: "get-metric-rule",
          description: "Get metric rules",
          options: [
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
          name: "get-metric-statu",
          description: "Get metric status",
          options: [
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--azure-resource-ids",
              description:
                'Azure resource IDs Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-resource-ids" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
          description: "List NewRelicMonitorResource resources",
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
          name: "list-app-service",
          description:
            "List the app service resources currently being monitored by the NewRelic resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--azure-resource-ids",
              description:
                'Azure resource IDs Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-resource-ids" },
            },
          ],
        },
        {
          name: "list-host",
          description:
            "List the compute vm resources currently being monitored by the NewRelic resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--vm-ids",
              description:
                'VM resource IDs Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "vm-ids" },
            },
          ],
        },
        {
          name: "monitored-resource",
          description:
            "List the resources currently being monitored by the NewRelic monitor resource",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
          description: "Get a NewRelicMonitorResource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the Monitors resource",
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
          name: "switch-billing",
          description: "Switches the billing for NewRelic monitor resource",
          options: [
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
            {
              name: "--azure-resource-id",
              description: "Azure resource Id",
              args: { name: "azure-resource-id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--monitor-name",
              description: "Name of the Monitors resource",
              args: { name: "monitor-name" },
            },
            {
              name: "--organization-id",
              description: "Organization id",
              args: { name: "organization-id" },
            },
            {
              name: "--plan-data",
              description:
                'Plan details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "plan-data" },
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
          name: "vm-host-payload",
          description:
            "Returns the payload that needs to be passed in the request body for installing NewRelic agent on a VM",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--monitor-name",
              description: "Name of the Monitors resource",
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
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
              description: "Name of the Monitors resource",
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
        {
          name: "tag-rule",
          description: "Manage tag rule of a NewRelic Monitor resource",
          subcommands: [
            {
              name: "create",
              description: "Create a TagRule",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the Monitors resource",
                  args: { name: "monitor-name" },
                  isRequired: true,
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Name of the TagRule",
                  args: { name: "rule-set-name" },
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
                  name: "--log-rules",
                  description:
                    'Set of rules for sending logs for the Monitor resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "log-rules" },
                },
                {
                  name: "--metric-rules",
                  description:
                    'Set of rules for sending metrics for the Monitor resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "metric-rules" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a TagRule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the Monitors resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Name of the TagRule",
                  args: { name: "rule-set-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                  args: {
                    name: "no-wait",
                    suggestions: [
                      "0",
                      "1",
                      "f",
                      "false",
                      "n",
                      "no",
                      "t",
                      "true",
                      "y",
                      "yes",
                    ],
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
              ],
            },
            {
              name: "list",
              description: "List TagRule resources by NewRelicMonitorResource",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the Monitors resource",
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
              description: "Get a TagRule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the Monitors resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Name of the TagRule",
                  args: { name: "rule-set-name" },
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
              description: "Update a TagRule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--log-rules",
                  description:
                    'Set of rules for sending logs for the Monitor resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "log-rules" },
                },
                {
                  name: "--metric-rules",
                  description:
                    'Set of rules for sending metrics for the Monitor resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "metric-rules" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the Monitors resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Name of the TagRule",
                  args: { name: "rule-set-name" },
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
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
                  description: "Name of the Monitors resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Name of the TagRule",
                  args: { name: "rule-set-name" },
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
      ],
    },
    {
      name: "organization",
      description: "Manage NewRelic Organization resource",
      subcommands: [
        {
          name: "list",
          description: "List all the existing organizations",
          options: [
            {
              name: "--location",
              description: "Location for NewRelic",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--user-email",
              description: "User Email",
              args: { name: "user-email" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "plan",
      description: "Manage NewRelic Plan resource",
      subcommands: [
        {
          name: "list",
          description: "List plans data",
          options: [
            {
              name: "--account-id",
              description: "Account Id",
              args: { name: "account-id" },
            },
            {
              name: "--organization-id",
              description: "Organization Id",
              args: { name: "organization-id" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
