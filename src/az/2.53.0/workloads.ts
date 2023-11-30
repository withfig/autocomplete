const completion: Fig.Spec = {
  name: "workloads",
  description: "Manage workloads",
  subcommands: [
    {
      name: "monitor",
      description: "Manage workloads monitor",
      subcommands: [
        {
          name: "create",
          description:
            "Create a SAP monitor for the specified subscription, resource group, and resource name",
          options: [
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the SAP monitor resource",
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
              name: "--app-location",
              description:
                "The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region",
              args: { name: "app-location" },
            },
            {
              name: "--identity",
              description:
                '[currently not in use] Managed service identity(user assigned identities) Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--log-analytics-workspace-arm-id",
              description:
                "The ARM ID of the Log Analytics Workspace that is used for SAP monitoring",
              args: { name: "log-analytics-workspace-arm-id" },
            },
            {
              name: "--managed-rg-name",
              description: "Managed resource group name",
              args: { name: "managed-rg-name" },
            },
            {
              name: "--monitor-subnet",
              description:
                "The subnet which the SAP monitor will be deployed in",
              args: { name: "monitor-subnet" },
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
              name: "--routing-preference",
              description:
                "Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET",
              args: {
                name: "routing-preference",
                suggestions: ["Default", "RouteAll"],
              },
            },
            {
              name: "--tags",
              description:
                'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--zone-redundancy-preference",
              description:
                "Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy",
              args: { name: "zone-redundancy-preference" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a SAP monitor with the specified subscription, resource group, and SAP monitor name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the SAP monitor resource",
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
          name: "list",
          description:
            "List a list of SAP monitors in the specified resource group",
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
            "Show properties of a SAP monitor for the specified subscription, resource group, and resource name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the SAP monitor resource",
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
          description:
            "Update a SAP monitor for the specified subscription, resource group, and resource name",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
              args: {
                name: "force-string",
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
              name: "--identity",
              description:
                '[currently not in use] Managed service identity(user assigned identities) Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--monitor-name", "--name", "-n"],
              description: "Name of the SAP monitor resource",
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
              description: "Name of the SAP monitor resource",
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
          name: "provider-instance",
          description: "Manage monitor provider instance",
          subcommands: [
            {
              name: "create",
              description:
                "Create a provider instance for the specified subscription, resource group, SAP monitor name, and resource name",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
                  args: { name: "monitor-name" },
                  isRequired: true,
                },
                {
                  name: ["--provider-instance-name", "--name", "-n"],
                  description: "Name of the provider instance",
                  args: { name: "provider-instance-name" },
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
                  name: "--identity",
                  description:
                    '[currently not in use] Managed service identity(user assigned identities) Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "identity" },
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
                  name: "--provider-settings",
                  description:
                    'Defines the provider specific properties. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "provider-settings" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a provider instance for the specified subscription, resource group, SAP monitor name, and resource name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--provider-instance-name", "--name", "-n"],
                  description: "Name of the provider instance",
                  args: { name: "provider-instance-name" },
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
              description:
                "List a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
                "Show properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--provider-instance-name", "--name", "-n"],
                  description: "Name of the provider instance",
                  args: { name: "provider-instance-name" },
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
                  description: "Name of the SAP monitor resource",
                  args: { name: "monitor-name" },
                },
                {
                  name: ["--provider-instance-name", "--name", "-n"],
                  description: "Name of the provider instance",
                  args: { name: "provider-instance-name" },
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
          name: "sap-landscape-monitor",
          description: "Manage monitor sap landscape monitor",
          subcommands: [
            {
              name: "create",
              description:
                "Create a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
                  name: "--grouping",
                  description:
                    'Gets or sets the SID groupings by landscape and Environment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "grouping" },
                },
                {
                  name: "--top-metrics-thresholds",
                  description:
                    'Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "top-metrics-thresholds" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a SAP Landscape Monitor Dashboard with the specified subscription, resource group, and SAP monitor name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name",
              options: [
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
                "Show configuration values for Single Pane Of Glass for SAP monitor for the specified subscription, resource group, and resource name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
              description:
                "Update a SAP Landscape Monitor Dashboard for the specified subscription, resource group, and resource name",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                  args: {
                    name: "force-string",
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
                  name: "--grouping",
                  description:
                    'Gets or sets the SID groupings by landscape and Environment. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "grouping" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monitor-name",
                  description: "Name of the SAP monitor resource",
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
                {
                  name: "--top-metrics-thresholds",
                  description:
                    'Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "top-metrics-thresholds" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "sap-application-server-instance",
      description: "Manage application instance",
      subcommands: [
        {
          name: "list",
          description:
            "List the SAP Application Server Instance resources for a given Virtual Instance for SAP solutions resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the SAP Application Server Instance corresponding to the Virtual Instance for SAP solutions resource",
          options: [
            {
              name: ["--application-instance-name", "--name", "-n"],
              description:
                "The name of SAP Application Server instance resource",
              args: { name: "application-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "start",
          description: "Starts the SAP Application Server Instance",
          options: [
            {
              name: ["--application-instance-name", "--name", "-n"],
              description:
                "The name of SAP Application Server instance resource",
              args: { name: "application-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "stop",
          description: "Stops the SAP Application Server Instance",
          options: [
            {
              name: ["--application-instance-name", "--name", "-n"],
              description:
                "The name of SAP Application Server instance resource",
              args: { name: "application-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
            },
            {
              name: "--soft-stop-timeout-seconds",
              description:
                "This parameter defines how long (in seconds) the soft shutdown waits until the RFC/HTTP clients no longer consider the server for calls with load balancing. Value 0 means that the kernel does not wait, but goes directly into the next shutdown state, i.e. hard stop",
              args: { name: "soft-stop-timeout-seconds" },
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
          description: "Update the SAP Application Server Instance resource",
          options: [
            {
              name: ["--application-instance-name", "--name", "-n"],
              description:
                "The name of SAP Application Server instance resource",
              args: { name: "application-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
                'Gets or sets the Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--application-instance-name", "--name", "-n"],
              description:
                "The name of SAP Application Server instance resource",
              args: { name: "application-instance-name" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
      name: "sap-central-instance",
      description: "Manage central instance",
      subcommands: [
        {
          name: "list",
          description:
            "List the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the SAP Central Services Instance resource",
          options: [
            {
              name: ["--central-instance-name", "--name", "-n"],
              description:
                "Central Services Instance resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "central-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "start",
          description: "Starts the SAP Central Services Instance",
          options: [
            {
              name: ["--central-instance-name", "--name", "-n"],
              description:
                "Central Services Instance resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "central-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "stop",
          description: "Stops the SAP Central Services Instance",
          options: [
            {
              name: ["--central-instance-name", "--name", "-n"],
              description:
                "Central Services Instance resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "central-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
            },
            {
              name: "--soft-stop-timeout-seconds",
              description:
                "This parameter defines how long (in seconds) the soft shutdown waits until the RFC/HTTP clients no longer consider the server for calls with load balancing. Value 0 means that the kernel does not wait, but goes directly into the next shutdown state, i.e. hard stop",
              args: { name: "soft-stop-timeout-seconds" },
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
            "Update the SAP Central Services Instance resource. This can be used to update tags on the resource",
          options: [
            {
              name: ["--central-instance-name", "--name", "-n"],
              description:
                "Central Services Instance resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "central-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
                'Gets or sets the Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--central-instance-name", "--name", "-n"],
              description:
                "Central Services Instance resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "central-instance-name" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
      name: "sap-database-instance",
      description: "Manage database instance",
      subcommands: [
        {
          name: "list",
          description:
            "List the Database resources associated with a Virtual Instance for SAP solutions resource",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the SAP Database Instance resource",
          options: [
            {
              name: ["--database-instance-name", "--name", "-n"],
              description:
                "Database resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "database-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "start",
          description: "Starts the database instance of the SAP system",
          options: [
            {
              name: ["--database-instance-name", "--name", "-n"],
              description:
                "Database resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "database-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "stop",
          description: "Stops the database instance of the SAP system",
          options: [
            {
              name: ["--database-instance-name", "--name", "-n"],
              description:
                "Database resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "database-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
            },
            {
              name: "--soft-stop-timeout-seconds",
              description:
                "This parameter defines how long (in seconds) the soft shutdown waits until the RFC/HTTP clients no longer consider the server for calls with load balancing. Value 0 means that the kernel does not wait, but goes directly into the next shutdown state, i.e. hard stop",
              args: { name: "soft-stop-timeout-seconds" },
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
          description: "Update the Database resource",
          options: [
            {
              name: ["--database-instance-name", "--name", "-n"],
              description:
                "Database resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "database-instance-name" },
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
                'Gets or sets the Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
            {
              name: ["--database-instance-name", "--name", "-n"],
              description:
                "Database resource name string modeled as parameter for auto generation to work correctly",
              args: { name: "database-instance-name" },
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
      name: "sap-disk-configuration",
      description:
        "Show the SAP Disk Configuration Layout prod/non-prod SAP System",
      options: [
        {
          name: "--app-location",
          description:
            "The geo-location where the SAP resources will be created",
          args: { name: "app-location" },
        },
        {
          name: "--database-type",
          description: "The database type. Eg: HANA, DB2, etc",
          args: { name: "database-type", suggestions: ["DB2", "HANA"] },
        },
        {
          name: "--db-vm-sku",
          description: "The VM SKU for database instance",
          args: { name: "db-vm-sku" },
        },
        {
          name: "--deployment-type",
          description: "The deployment type. Eg: SingleServer/ThreeTier",
          args: {
            name: "deployment-type",
            suggestions: ["SingleServer", "ThreeTier"],
          },
        },
        {
          name: "--environment",
          description:
            "Defines the environment type - Production/Non Production",
          args: { name: "environment", suggestions: ["NonProd", "Prod"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--sap-product",
          description: "Defines the SAP Product type",
          args: {
            name: "sap-product",
            suggestions: ["ECC", "Other", "S4HANA"],
          },
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
      name: "sap-sizing-recommendation",
      description:
        "Show SAP sizing recommendations by providing input SAPS for application tier and memory required for database tier",
      options: [
        {
          name: "--app-location",
          description: "The geo-location where the resource is to be created",
          args: { name: "app-location" },
        },
        {
          name: "--database-type",
          description: "The database type",
          args: { name: "database-type", suggestions: ["DB2", "HANA"] },
        },
        {
          name: "--db-memory",
          description: "The database memory configuration",
          args: { name: "db-memory" },
        },
        {
          name: "--db-scale-method",
          description: "The DB scale method",
          args: { name: "db-scale-method", suggestions: ["ScaleUp"] },
        },
        {
          name: "--deployment-type",
          description: "The deployment type. Eg: SingleServer/ThreeTier",
          args: {
            name: "deployment-type",
            suggestions: ["SingleServer", "ThreeTier"],
          },
        },
        {
          name: "--environment",
          description:
            "Defines the environment type - Production/Non Production",
          args: { name: "environment", suggestions: ["NonProd", "Prod"] },
        },
        {
          name: "--high-availability-type",
          description: "The high availability type",
          args: {
            name: "high-availability-type",
            suggestions: ["AvailabilitySet", "AvailabilityZone"],
          },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--sap-product",
          description: "Defines the SAP Product type",
          args: {
            name: "sap-product",
            suggestions: ["ECC", "Other", "S4HANA"],
          },
        },
        {
          name: "--saps",
          description: "The SAP Application Performance Standard measurement",
          args: { name: "saps" },
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
      name: "sap-supported-sku",
      description:
        "Show a list of SAP supported SKUs for ASCS, Application and Database tier",
      options: [
        {
          name: "--app-location",
          description: "The geo-location where the resource is to be created",
          args: { name: "app-location" },
        },
        {
          name: "--database-type",
          description: "The database type. Eg: HANA, DB2, etc",
          args: { name: "database-type", suggestions: ["DB2", "HANA"] },
        },
        {
          name: "--deployment-type",
          description: "The deployment type. Eg: SingleServer/ThreeTier",
          args: {
            name: "deployment-type",
            suggestions: ["SingleServer", "ThreeTier"],
          },
        },
        {
          name: "--environment",
          description:
            "Defines the environment type - Production/Non Production",
          args: { name: "environment", suggestions: ["NonProd", "Prod"] },
        },
        {
          name: "--high-availability-type",
          description: "The high availability type",
          args: {
            name: "high-availability-type",
            suggestions: ["AvailabilitySet", "AvailabilityZone"],
          },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--sap-product",
          description: "Defines the SAP Product type",
          args: {
            name: "sap-product",
            suggestions: ["ECC", "Other", "S4HANA"],
          },
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
      name: "sap-virtual-instance",
      description: "Manage virtual instance",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Virtual Instance for SAP solutions (VIS) resource",
          options: [
            {
              name: ["--sap-virtual-instance-name", "--name", "-n"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
              name: "--central-server-vm",
              description:
                "The virtual machine ID or name of the Central Server",
              args: { name: "central-server-vm" },
            },
            {
              name: "--configuration",
              description:
                "Path to the configuration file. Support json-file and yaml-file",
              args: { name: "configuration" },
            },
            {
              name: "--environment",
              description:
                "Defines the environment type - Production/Non Production",
              args: { name: "environment", suggestions: ["NonProd", "Prod"] },
            },
            {
              name: "--identity",
              description:
                'A pre-created user assigned identity with appropriate roles assigned. To learn more on identity and roles required, visit the ACSS how-to-guide. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: ["--location", "-l"],
              description: "The geo-location where the resource lives",
              args: { name: "location" },
            },
            {
              name: "--managed-rg-name",
              description: "Managed resource group name",
              args: { name: "managed-rg-name" },
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
              name: "--sap-product",
              description: "Defines the SAP Product type",
              args: {
                name: "sap-product",
                suggestions: ["ECC", "Other", "S4HANA"],
              },
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
          name: "delete",
          description:
            "Delete a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sap-virtual-instance-name", "--name", "-n"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          description:
            "List all Virtual Instances for SAP solutions resources in a Resource Group",
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
          description: "Show a Virtual Instance for SAP solutions resource",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sap-virtual-instance-name", "--name", "-n"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "start",
          description:
            "Starts the SAP application, that is the Central Services instance and Application server instances",
          options: [
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
          name: "stop",
          description:
            "Stops the SAP Application, that is the Application server instances and Central Services instance",
          options: [
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
              name: ["--sap-virtual-instance-name", "--vis-name"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
            },
            {
              name: "--soft-stop-timeout-seconds",
              description:
                "This parameter defines how long (in seconds) the soft shutdown waits until the RFC/HTTP clients no longer consider the server for calls with load balancing. Value 0 means that the kernel does not wait, but goes directly into the next shutdown state, i.e. hard stop",
              args: { name: "soft-stop-timeout-seconds" },
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
            "Update a Virtual Instance for SAP solutions (VIS) resource",
          options: [
            {
              name: "--identity",
              description:
                'A pre-created user assigned identity with appropriate roles assigned. To learn more on identity and roles required, visit the ACSS how-to-guide. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sap-virtual-instance-name", "--name", "-n"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
                'Gets or sets the Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--sap-virtual-instance-name", "--name", "-n"],
              description:
                "The name of the Virtual Instances for SAP solutions resource",
              args: { name: "sap-virtual-instance-name" },
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
};

export default completion;
