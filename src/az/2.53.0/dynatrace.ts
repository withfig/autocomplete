const completion: Fig.Spec = {
  name: "dynatrace",
  description: "Manage dynatrace",
  subcommands: [
    {
      name: "monitor",
      description: "Manage dynatrace monitor",
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
              name: "--environment",
              description:
                'Properties of the Dynatrace environment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "environment" },
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
              name: "--monitoring-status",
              description: "Status of the monitor",
              args: {
                name: "monitoring-status",
                suggestions: ["Disabled", "Enabled"],
              },
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
              name: "--plan-data",
              description:
                'Billing plan information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "plan-data" },
            },
            {
              name: "--subscription-status",
              description: "Marketplace subscription status",
              args: {
                name: "subscription-status",
                suggestions: ["Active", "Suspended"],
              },
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
                'User info. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "get-sso-detail",
          description: "Get the SSO configuration details from the partner",
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
              name: "--user-principal",
              description: "User principal id of the user",
              args: { name: "user-principal" },
            },
          ],
        },
        {
          name: "get-vm-host-payload",
          description:
            "Return the payload that need to be passed in the request body for installing Dynatrace agent on a VM",
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
          name: "list",
          description:
            "List all monitor resource by monitor name in a resource group",
          options: [
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
          name: "list-app-service",
          description:
            "Get list of app services with dynatrace PaaS OneAgent enabled",
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
          name: "list-host",
          description:
            "List the compute resources currently being monitored by the dynatrace resource",
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
          name: "list-linkable-environment",
          description:
            "Get all the dynatrace environments that a user can link a azure resource to",
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
              name: "--region",
              description:
                "Azure region in which we want to link the environment",
              args: { name: "region" },
            },
            {
              name: "--tenant-id",
              description:
                "Tenant Id of the user in which they want to link the environment",
              args: { name: "tenant-id" },
            },
            {
              name: "--user-principal",
              description: "User principal id of the user",
              args: { name: "user-principal" },
            },
          ],
        },
        {
          name: "list-monitored-resource",
          description:
            "List the resources currently being monitored by the dynatrace monitor resource",
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
          description: "Show a monitor resource",
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
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
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
        {
          name: "sso-config",
          description: "Manage monitor sso-config",
          subcommands: [
            {
              name: "create",
              description: "Create a dynatrace sso-config resource",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description: "Single Sign On Configuration Name",
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
                  name: "--aad-domains",
                  description:
                    'Array of Aad(azure active directory) domains Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "aad-domains" },
                },
                {
                  name: "--enterprise-app-id",
                  description:
                    "Version of the Dynatrace agent installed on the VM",
                  args: { name: "enterprise-app-id" },
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
                  name: "--single-sign-on-state",
                  description: "State of Single Sign On",
                  args: {
                    name: "single-sign-on-state",
                    suggestions: ["Disable", "Enable", "Existing", "Initial"],
                  },
                },
                {
                  name: "--single-sign-on-url",
                  description:
                    "The login URL specific to this Dynatrace Environment",
                  args: { name: "single-sign-on-url" },
                },
              ],
            },
            {
              name: "list",
              description: "List all dynatrace sso-config by monitor name",
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
              description: "Show a dynatrace sso-config",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description: "Single Sign On Configuration Name",
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description: "Single Sign On Configuration Name",
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
          description: "Manage dynatrace monitor tag-rule",
          subcommands: [
            {
              name: "create",
              description: "Create a tag rule",
              options: [
                {
                  name: "--monitor-name",
                  description: "Monitor resource name",
                  args: { name: "monitor-name" },
                  isRequired: true,
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Monitor rule set name",
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
              description: "Delete a tag rule",
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
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Monitor rule set name",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all tag rule by monitor name",
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
              description: "Show a tag rule",
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
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Monitor rule set name",
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
              description: "Update a tag rule",
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
                  description: "Monitor resource name",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Monitor rule set name",
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
                  description: "Monitor resource name",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--rule-set-name", "--name", "-n"],
                  description: "Monitor rule set name",
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
  ],
};

export default completion;
