const completion: Fig.Spec = {
  name: "sentinel",
  description: "Manage Microsoft Sentinel",
  subcommands: [
    {
      name: "alert-rule",
      description: "Manage alert rule with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the alert rule",
          options: [
            {
              name: ["--rule-name", "--name", "-n"],
              description: "Name of alert rule",
              args: { name: "rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--fusion",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "fusion" },
            },
            {
              name: "--ml-behavior-analytics",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ml-behavior-analytics" },
            },
            {
              name: "--ms-security-incident",
              description:
                'Microsoft security incident creation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ms-security-incident" },
            },
            {
              name: "--nrt",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "nrt" },
            },
            {
              name: "--scheduled",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "scheduled" },
            },
            {
              name: "--threat-intelligence",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-intelligence" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the alert rule",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--rule-name", "--name", "-n"],
              description: "Name of alert rule",
              args: { name: "rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all alert rules",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the alert rule",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--rule-name", "--name", "-n"],
              description: "Name of alert rule",
              args: { name: "rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the alert rule",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--fusion",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "fusion" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ml-behavior-analytics",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ml-behavior-analytics" },
            },
            {
              name: "--ms-security-incident",
              description:
                'Microsoft security incident creation. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ms-security-incident" },
            },
            {
              name: ["--rule-name", "--name", "-n"],
              description: "Name of alert rule",
              args: { name: "rule-name" },
            },
            {
              name: "--nrt",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "nrt" },
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
              name: "--scheduled",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "scheduled" },
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
              name: "--threat-intelligence",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-intelligence" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "action",
          description: "Manage alert rule action with sentinel",
          subcommands: [
            {
              name: "create",
              description: "Create the action of alert rule",
              options: [
                {
                  name: ["--action-name", "--name", "-n"],
                  description: "Name of action",
                  args: { name: "action-name" },
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
                  name: "--rule-name",
                  description: "Name of alert rule",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
                },
                {
                  name: "--logic-app-resource-id",
                  description:
                    "Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}",
                  args: { name: "logic-app-resource-id" },
                },
                {
                  name: "--trigger-uri",
                  description:
                    "Logic App Callback URL for this specific workflow",
                  args: { name: "trigger-uri" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the action of alert rule",
              options: [
                {
                  name: ["--action-name", "--name", "-n"],
                  description: "Name of action",
                  args: { name: "action-name" },
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
                  name: "--rule-name",
                  description: "Name of alert rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Get all actions of alert rule",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--rule-name",
                  description: "Name of alert rule",
                  args: { name: "rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the action of alert rule",
              options: [
                {
                  name: ["--action-name", "--name", "-n"],
                  description: "Name of action",
                  args: { name: "action-name" },
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
                  name: "--rule-name",
                  description: "Name of alert rule",
                  args: { name: "rule-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the action of alert rule",
              options: [
                {
                  name: ["--action-name", "--name", "-n"],
                  description: "Name of action",
                  args: { name: "action-name" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--logic-app-resource-id",
                  description:
                    "Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}",
                  args: { name: "logic-app-resource-id" },
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
                  name: "--rule-name",
                  description: "Name of alert rule",
                  args: { name: "rule-name" },
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
                  name: "--trigger-uri",
                  description:
                    "Logic App Callback URL for this specific workflow",
                  args: { name: "trigger-uri" },
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "template",
          description: "Manage alert rule template with sentinel",
          subcommands: [
            {
              name: "list",
              description: "Get all alert rule templates",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the alert rule template",
              options: [
                {
                  name: ["--alert-rule-template-id", "--name", "-n"],
                  description: "Alert rule template ID",
                  args: { name: "alert-rule-template-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "analytics-setting",
      description: "Manage security ml analytics setting with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the Security ML Analytics Settings",
          options: [
            {
              name: ["--settings-resource-name", "--name", "-n"],
              description: "Security ML Analytics Settings resource name",
              args: { name: "settings-resource-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--anomaly",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "anomaly" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Security ML Analytics Settings",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-resource-name", "--name", "-n"],
              description: "Security ML Analytics Settings resource name",
              args: { name: "settings-resource-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all Security ML Analytics Settings",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the Security ML Analytics Settings",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-resource-name", "--name", "-n"],
              description: "Security ML Analytics Settings resource name",
              args: { name: "settings-resource-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the Security ML Analytics Settings",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--anomaly",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "anomaly" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-resource-name", "--name", "-n"],
              description: "Security ML Analytics Settings resource name",
              args: { name: "settings-resource-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "automation-rule",
      description: "Manage automation rule with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the automation rule",
          options: [
            {
              name: ["--automation-rule-name", "--name", "-n"],
              description: "Name of automation rule",
              args: { name: "automation-rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--actions",
              description:
                'The actions to execute when the automation rule is triggered. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "actions" },
            },
            {
              name: "--display-name",
              description: "The display name of the automation rule",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--order",
              description: "The order of execution of the automation rule",
              args: { name: "order" },
            },
            {
              name: "--triggering-logic",
              description:
                'Describes automation rule triggering logic. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "triggering-logic" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the automation rule",
          options: [
            {
              name: ["--automation-rule-name", "--name", "-n"],
              description: "Name of automation rule",
              args: { name: "automation-rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all automation rules",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get the automation rule",
          options: [
            {
              name: ["--automation-rule-name", "--name", "-n"],
              description: "Name of automation rule",
              args: { name: "automation-rule-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the automation rule",
          options: [
            {
              name: "--actions",
              description:
                'The actions to execute when the automation rule is triggered. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "actions" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--automation-rule-name", "--name", "-n"],
              description: "Name of automation rule",
              args: { name: "automation-rule-name" },
            },
            {
              name: "--display-name",
              description: "The display name of the automation rule",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--order",
              description: "The order of execution of the automation rule",
              args: { name: "order" },
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
              name: "--triggering-logic",
              description:
                'Describes automation rule triggering logic. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "triggering-logic" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "bookmark",
      description: "Manage bookmark with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the bookmark",
          options: [
            {
              name: ["--bookmark-id", "--name", "-n"],
              description: "ID of bookmark",
              args: { name: "bookmark-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--created",
              description: "The time the bookmark was created",
              args: { name: "created" },
            },
            {
              name: "--created-by",
              description:
                'Describes a user that created the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "created-by" },
            },
            {
              name: "--display-name",
              description: "The display name of the bookmark",
              args: { name: "display-name" },
            },
            {
              name: "--entity-mappings",
              description:
                'Describes the entity mappings of the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "entity-mappings" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--event-time",
              description: "The bookmark event time",
              args: { name: "event-time" },
            },
            {
              name: "--incident-info",
              description:
                'Describes an incident that relates to bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "incident-info" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--notes",
              description: "The notes of the bookmark",
              args: { name: "notes" },
            },
            {
              name: "--query-content",
              description: "The query of the bookmark",
              args: { name: "query-content" },
            },
            {
              name: "--query-end-time",
              description: "The end time for the query",
              args: { name: "query-end-time" },
            },
            {
              name: "--query-result",
              description: "The query result of the bookmark",
              args: { name: "query-result" },
            },
            {
              name: "--query-start-time",
              description: "The start time for the query",
              args: { name: "query-start-time" },
            },
            {
              name: "--tactics",
              description:
                'A list of relevant mitre attacks Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tactics" },
            },
            {
              name: "--techniques",
              description:
                'A list of relevant mitre techniques Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "techniques" },
            },
            {
              name: "--updated",
              description: "The last time the bookmark was updated",
              args: { name: "updated" },
            },
            {
              name: "--updated-by",
              description:
                'Describes a user that updated the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "updated-by" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the bookmark",
          options: [
            {
              name: ["--bookmark-id", "--name", "-n"],
              description: "ID of bookmark",
              args: { name: "bookmark-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "expand",
          description: "Expand an bookmark",
          options: [
            {
              name: ["--bookmark-id", "--name", "-n"],
              description: "ID of bookmark",
              args: { name: "bookmark-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--end-time",
              description:
                "The end date filter, so the only expansion results returned are before this date",
              args: { name: "end-time" },
            },
            {
              name: "--expansion-id",
              description: "The Id of the expansion to perform",
              args: { name: "expansion-id" },
            },
            {
              name: "--start-time",
              description:
                "The start date filter, so the only expansion results returned are after this date",
              args: { name: "start-time" },
            },
          ],
        },
        {
          name: "list",
          description: "Get all bookmarks",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a bookmark",
          options: [
            {
              name: ["--bookmark-id", "--name", "-n"],
              description: "ID of bookmark",
              args: { name: "bookmark-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the bookmark",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--bookmark-id", "--name", "-n"],
              description: "ID of bookmark",
              args: { name: "bookmark-id" },
            },
            {
              name: "--created",
              description: "The time the bookmark was created",
              args: { name: "created" },
            },
            {
              name: "--created-by",
              description:
                'Describes a user that created the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "created-by" },
            },
            {
              name: "--display-name",
              description: "The display name of the bookmark",
              args: { name: "display-name" },
            },
            {
              name: "--entity-mappings",
              description:
                'Describes the entity mappings of the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "entity-mappings" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--event-time",
              description: "The bookmark event time",
              args: { name: "event-time" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--incident-info",
              description:
                'Describes an incident that relates to bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "incident-info" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--notes",
              description: "The notes of the bookmark",
              args: { name: "notes" },
            },
            {
              name: "--query-content",
              description: "The query of the bookmark",
              args: { name: "query-content" },
            },
            {
              name: "--query-end-time",
              description: "The end time for the query",
              args: { name: "query-end-time" },
            },
            {
              name: "--query-result",
              description: "The query result of the bookmark",
              args: { name: "query-result" },
            },
            {
              name: "--query-start-time",
              description: "The start time for the query",
              args: { name: "query-start-time" },
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
              name: "--tactics",
              description:
                'A list of relevant mitre attacks Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tactics" },
            },
            {
              name: "--techniques",
              description:
                'A list of relevant mitre techniques Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "techniques" },
            },
            {
              name: "--updated",
              description: "The last time the bookmark was updated",
              args: { name: "updated" },
            },
            {
              name: "--updated-by",
              description:
                'Describes a user that updated the bookmark Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "updated-by" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "relation",
          description: "Manage bookmark relation with sentinel",
          subcommands: [
            {
              name: "create",
              description: "Create the bookmark relation",
              options: [
                {
                  name: "--bookmark-id",
                  description: "Bookmark ID",
                  args: { name: "bookmark-id" },
                  isRequired: true,
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
                },
                {
                  name: "--related-resource-id",
                  description: "The resource ID of the related resource",
                  args: { name: "related-resource-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the bookmark relation",
              options: [
                {
                  name: "--bookmark-id",
                  description: "Bookmark ID",
                  args: { name: "bookmark-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Get all bookmark relations",
              options: [
                {
                  name: "--bookmark-id",
                  description: "Bookmark ID",
                  args: { name: "bookmark-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Filters the results, based on a Boolean condition. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--orderby",
                  description: "Sorts the results. Optional",
                  args: { name: "orderby" },
                },
                {
                  name: "--skip-token",
                  description:
                    "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
                  args: { name: "skip-token" },
                },
                {
                  name: "--top",
                  description: "Returns only the first n results. Optional",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a bookmark relation",
              options: [
                {
                  name: "--bookmark-id",
                  description: "Bookmark ID",
                  args: { name: "bookmark-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the bookmark relation",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--bookmark-id",
                  description: "Bookmark ID",
                  args: { name: "bookmark-id" },
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
                },
                {
                  name: "--related-resource-id",
                  description: "The resource ID of the related resource",
                  args: { name: "related-resource-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "data-connector",
      description: "Manage data connector with sentinel",
      subcommands: [
        {
          name: "connect",
          description: "Connect a data connector",
          options: [
            {
              name: "--data-connector-id",
              description: "Connector ID",
              args: { name: "data-connector-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--api-key",
              description: "The API key of the audit server",
              args: { name: "api-key" },
            },
            {
              name: "--authorization-code",
              description:
                "The authorization code used in OAuth 2.0 code flow to issue a token",
              args: { name: "authorization-code" },
            },
            {
              name: "--client-id",
              description: "The client id of the OAuth 2.0 application",
              args: { name: "client-id" },
            },
            {
              name: "--client-secret",
              description: "The client secret of the OAuth 2.0 application",
              args: { name: "client-secret" },
            },
            {
              name: "--endpoint",
              description:
                "Used in v2 logs connector. Represents the data collection ingestion endpoint in log analytics",
              args: { name: "endpoint" },
            },
            {
              name: "--kind",
              description: "The authentication kind used to poll the data",
              args: {
                name: "kind",
                suggestions: ["APIKey", "Basic", "OAuth2"],
              },
            },
            {
              name: "--output-stream",
              description:
                "Used in v2 logs connector. The stream we are sending the data to, this is the name of the streamDeclarations defined in the DCR",
              args: { name: "output-stream" },
            },
            {
              name: "--password",
              description: "The user password in the audit log server",
              args: { name: "password" },
            },
            {
              name: "--rule-immutable-id",
              description:
                "Used in v2 logs connector. The data collection rule immutable id, the rule defines the transformation and data destination",
              args: { name: "rule-immutable-id" },
            },
            {
              name: "--user-name",
              description: "The user name in the audit log server",
              args: { name: "user-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create the data connector",
          options: [
            {
              name: ["--data-connector-id", "--name", "-n"],
              description: "Connector ID",
              args: { name: "data-connector-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--api-polling",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "api-polling" },
            },
            {
              name: "--aws-cloud-trail",
              description:
                'Amazon web services cloud trail. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aws-cloud-trail" },
            },
            {
              name: "--aws-s3",
              description:
                'Amazon web services s3. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aws-s3" },
            },
            {
              name: "--azure-active-directory",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-active-directory" },
            },
            {
              name: "--azure-protection",
              description:
                'Azure advanced threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-protection" },
            },
            {
              name: "--azure-security-center",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-security-center" },
            },
            {
              name: "--cloud-app-security",
              description:
                'Microsoft cloud app security. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "cloud-app-security" },
            },
            {
              name: "--defender-protection",
              description:
                'Microsoft defender advanced threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "defender-protection" },
            },
            {
              name: "--dynamics365",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamics365" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--generic-ui",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "generic-ui" },
            },
            {
              name: "--intelligence-taxii",
              description:
                'Threat intelligence taxii. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "intelligence-taxii" },
            },
            {
              name: "--iot",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "iot" },
            },
            {
              name: "--microsoft-intelligence",
              description:
                'Microsoft threat intelligence. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "microsoft-intelligence" },
            },
            {
              name: "--microsoft-protection",
              description:
                'Microsoft threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "microsoft-protection" },
            },
            {
              name: "--office-atp",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-atp" },
            },
            {
              name: "--office-irm",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-irm" },
            },
            {
              name: "--office-power-bi",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-power-bi" },
            },
            {
              name: "--office365",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office365" },
            },
            {
              name: "--office365-project",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office365-project" },
            },
            {
              name: "--threat-intelligence",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-intelligence" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the data connector",
          options: [
            {
              name: ["--data-connector-id", "--name", "-n"],
              description: "Connector ID",
              args: { name: "data-connector-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "disconnect",
          description: "Disconnect a data connector",
          options: [
            {
              name: "--data-connector-id",
              description: "Connector ID",
              args: { name: "data-connector-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "Get all data connectors",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a data connector",
          options: [
            {
              name: ["--data-connector-id", "--name", "-n"],
              description: "Connector ID",
              args: { name: "data-connector-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the data connector",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--api-polling",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "api-polling" },
            },
            {
              name: "--aws-cloud-trail",
              description:
                'Amazon web services cloud trail. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aws-cloud-trail" },
            },
            {
              name: "--aws-s3",
              description:
                'Amazon web services s3. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "aws-s3" },
            },
            {
              name: "--azure-active-directory",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-active-directory" },
            },
            {
              name: "--azure-protection",
              description:
                'Azure advanced threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-protection" },
            },
            {
              name: "--azure-security-center",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "azure-security-center" },
            },
            {
              name: "--cloud-app-security",
              description:
                'Microsoft cloud app security. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "cloud-app-security" },
            },
            {
              name: ["--data-connector-id", "--name", "-n"],
              description: "Connector ID",
              args: { name: "data-connector-id" },
            },
            {
              name: "--defender-protection",
              description:
                'Microsoft defender advanced threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "defender-protection" },
            },
            {
              name: "--dynamics365",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dynamics365" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--generic-ui",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "generic-ui" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--intelligence-taxii",
              description:
                'Threat intelligence taxii. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "intelligence-taxii" },
            },
            {
              name: "--iot",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "iot" },
            },
            {
              name: "--microsoft-intelligence",
              description:
                'Microsoft threat intelligence. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "microsoft-intelligence" },
            },
            {
              name: "--microsoft-protection",
              description:
                'Microsoft threat protection. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "microsoft-protection" },
            },
            {
              name: "--office-atp",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-atp" },
            },
            {
              name: "--office-irm",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-irm" },
            },
            {
              name: "--office-power-bi",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office-power-bi" },
            },
            {
              name: "--office365",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office365" },
            },
            {
              name: "--office365-project",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "office365-project" },
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
              name: "--threat-intelligence",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-intelligence" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "enrichment",
      description: "Manage enrichment with sentinel",
      subcommands: [
        {
          name: "domain-whois",
          description: "Manage domain whois with sentinel",
          subcommands: [
            {
              name: "show",
              description: "Get whois information for a single domain name",
              options: [
                {
                  name: "--domain",
                  description: "Domain name to be enriched",
                  args: { name: "domain" },
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
          ],
        },
        {
          name: "ip-geodata",
          description: "Manage ip geodata with sentinel",
          subcommands: [
            {
              name: "show",
              description: "Get geodata for a single IP address",
              options: [
                {
                  name: "--ip-address",
                  description: "IP address (v4 or v6) to be enriched",
                  args: { name: "ip-address" },
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
          ],
        },
      ],
    },
    {
      name: "entity-query",
      description: "Manage entity query with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the entity query",
          options: [
            {
              name: ["--entity-query-id", "--name", "-n"],
              description: "Entity query ID",
              args: { name: "entity-query-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--activity",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "activity" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the entity query",
          options: [
            {
              name: ["--entity-query-id", "--name", "-n"],
              description: "Entity query ID",
              args: { name: "entity-query-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all entity queries",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--kind",
              description: "The entity query kind we want to fetch",
              args: { name: "kind", suggestions: ["Activity", "Expansion"] },
            },
          ],
        },
        {
          name: "show",
          description: "Get an entity query",
          options: [
            {
              name: ["--entity-query-id", "--name", "-n"],
              description: "Entity query ID",
              args: { name: "entity-query-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the entity query",
          options: [
            {
              name: "--activity",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "activity" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--entity-query-id", "--name", "-n"],
              description: "Entity query ID",
              args: { name: "entity-query-id" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "template",
          description: "Manage entity query template with sentinel",
          subcommands: [
            {
              name: "list",
              description: "Get all entity query templates",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--kind",
                  description:
                    "The entity template query kind we want to fetch",
                  args: { name: "kind", suggestions: ["Activity"] },
                },
              ],
            },
            {
              name: "show",
              description: "Get an entity query",
              options: [
                {
                  name: ["--entity-query-template-id", "--name", "-n"],
                  description: "Entity query template ID",
                  args: { name: "entity-query-template-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "incident",
      description: "Manage incident with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create the incident",
          options: [
            {
              name: ["--incident-id", "--name", "-n"],
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--classification",
              description: "The reason the incident was closed",
              args: {
                name: "classification",
                suggestions: [
                  "BenignPositive",
                  "FalsePositive",
                  "TruePositive",
                  "Undetermined",
                ],
              },
            },
            {
              name: "--classification-comment",
              description: "Describes the reason the incident was closed",
              args: { name: "classification-comment" },
            },
            {
              name: "--classification-reason",
              description:
                "The classification reason the incident was closed with",
              args: {
                name: "classification-reason",
                suggestions: [
                  "InaccurateData",
                  "IncorrectAlertLogic",
                  "SuspiciousActivity",
                  "SuspiciousButExpected",
                ],
              },
            },
            {
              name: "--description",
              description: "The description of the incident",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--first-activity-time-utc",
              description: "The time of the first activity in the incident",
              args: { name: "first-activity-time-utc" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this incident Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--last-activity-time-utc",
              description: "The time of the last activity in the incident",
              args: { name: "last-activity-time-utc" },
            },
            {
              name: "--owner",
              description:
                'Describes a user that the incident is assigned to Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "owner" },
            },
            {
              name: "--provider-incident-id",
              description: "The incident ID assigned by the incident provider",
              args: { name: "provider-incident-id" },
            },
            {
              name: "--provider-name",
              description:
                "The name of the source provider that generated the incident",
              args: { name: "provider-name" },
            },
            {
              name: "--severity",
              description: "The severity of the incident",
              args: {
                name: "severity",
                suggestions: ["High", "Informational", "Low", "Medium"],
              },
            },
            {
              name: "--status",
              description: "The status of the incident",
              args: {
                name: "status",
                suggestions: ["Active", "Closed", "New"],
              },
            },
            {
              name: "--title",
              description: "The title of the incident",
              args: { name: "title" },
            },
          ],
        },
        {
          name: "create-team",
          description:
            "Create a Microsoft team to investigate the incident by sharing information and insights between participants",
          options: [
            {
              name: "--incident-id",
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: "--team-name",
              description: "The name of the team",
              args: { name: "team-name" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--group-ids",
              description:
                'List of group IDs to add their members to the team Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "group-ids" },
            },
            {
              name: "--member-ids",
              description:
                'List of member IDs to add to the team Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "member-ids" },
            },
            {
              name: "--team-description",
              description: "The description of the team",
              args: { name: "team-description" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the incident",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--incident-id", "--name", "-n"],
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all incidents",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "Filters the results, based on a Boolean condition. Optional",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results. Optional",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
              args: { name: "skip-token" },
            },
            {
              name: "--top",
              description: "Returns only the first n results. Optional",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-alert",
          description: "Get all incident alerts",
          options: [
            {
              name: "--incident-id",
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-bookmark",
          description: "Get all incident bookmarks",
          options: [
            {
              name: "--incident-id",
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-entity",
          description: "Get all incident related entities",
          options: [
            {
              name: "--incident-id",
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "run-playbook",
          description: "Trigger playbook on a specific incident",
          options: [
            {
              name: "--incident-identifier",
              description: "Identifier of incident",
              args: { name: "incident-identifier" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--logic-apps-resource-id",
              description: "Resource ID of logic apps",
              args: { name: "logic-apps-resource-id" },
            },
            {
              name: "--tenant-id",
              description: "ID of tenant",
              args: { name: "tenant-id" },
            },
          ],
        },
        {
          name: "show",
          description: "Get an incident",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--incident-id", "--name", "-n"],
              description: "Incident ID",
              args: { name: "incident-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update the incident",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--classification",
              description: "The reason the incident was closed",
              args: {
                name: "classification",
                suggestions: [
                  "BenignPositive",
                  "FalsePositive",
                  "TruePositive",
                  "Undetermined",
                ],
              },
            },
            {
              name: "--classification-comment",
              description: "Describes the reason the incident was closed",
              args: { name: "classification-comment" },
            },
            {
              name: "--classification-reason",
              description:
                "The classification reason the incident was closed with",
              args: {
                name: "classification-reason",
                suggestions: [
                  "InaccurateData",
                  "IncorrectAlertLogic",
                  "SuspiciousActivity",
                  "SuspiciousButExpected",
                ],
              },
            },
            {
              name: "--description",
              description: "The description of the incident",
              args: { name: "description" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--first-activity-time-utc",
              description: "The time of the first activity in the incident",
              args: { name: "first-activity-time-utc" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--incident-id", "--name", "-n"],
              description: "Incident ID",
              args: { name: "incident-id" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this incident Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--last-activity-time-utc",
              description: "The time of the last activity in the incident",
              args: { name: "last-activity-time-utc" },
            },
            {
              name: "--owner",
              description:
                'Describes a user that the incident is assigned to Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "owner" },
            },
            {
              name: "--provider-incident-id",
              description: "The incident ID assigned by the incident provider",
              args: { name: "provider-incident-id" },
            },
            {
              name: "--provider-name",
              description:
                "The name of the source provider that generated the incident",
              args: { name: "provider-name" },
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
              name: "--severity",
              description: "The severity of the incident",
              args: {
                name: "severity",
                suggestions: ["High", "Informational", "Low", "Medium"],
              },
            },
            {
              name: "--status",
              description: "The status of the incident",
              args: {
                name: "status",
                suggestions: ["Active", "Closed", "New"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--title",
              description: "The title of the incident",
              args: { name: "title" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "comment",
          description: "Manage incident comment with sentinel",
          subcommands: [
            {
              name: "create",
              description: "Create the incident comment",
              options: [
                {
                  name: ["--incident-comment-id", "--name", "-n"],
                  description: "Incident comment ID",
                  args: { name: "incident-comment-id" },
                  isRequired: true,
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
                },
                {
                  name: "--message",
                  description: "The comment message",
                  args: { name: "message" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the incident comment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--incident-comment-id", "--name", "-n"],
                  description: "Incident comment ID",
                  args: { name: "incident-comment-id" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Get all incident comments",
              options: [
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Filters the results, based on a Boolean condition. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--orderby",
                  description: "Sorts the results. Optional",
                  args: { name: "orderby" },
                },
                {
                  name: "--skip-token",
                  description:
                    "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
                  args: { name: "skip-token" },
                },
                {
                  name: "--top",
                  description: "Returns only the first n results. Optional",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an incident comment",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--incident-comment-id", "--name", "-n"],
                  description: "Incident comment ID",
                  args: { name: "incident-comment-id" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the incident comment",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--incident-comment-id", "--name", "-n"],
                  description: "Incident comment ID",
                  args: { name: "incident-comment-id" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
                },
                {
                  name: "--message",
                  description: "The comment message",
                  args: { name: "message" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "relation",
          description: "Manage incident relation with sentinel",
          subcommands: [
            {
              name: "create",
              description: "Create the incident relation",
              options: [
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
                  isRequired: true,
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
                },
                {
                  name: "--related-resource-id",
                  description: "The resource ID of the related resource",
                  args: { name: "related-resource-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the incident relation",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "Get all incident relations",
              options: [
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Filters the results, based on a Boolean condition. Optional",
                  args: { name: "filter" },
                },
                {
                  name: "--orderby",
                  description: "Sorts the results. Optional",
                  args: { name: "orderby" },
                },
                {
                  name: "--skip-token",
                  description:
                    "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
                  args: { name: "skip-token" },
                },
                {
                  name: "--top",
                  description: "Returns only the first n results. Optional",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an incident relation",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the incident relation",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--etag",
                  description: "Etag of the azure resource",
                  args: { name: "etag" },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--incident-id",
                  description: "Incident ID",
                  args: { name: "incident-id" },
                },
                {
                  name: ["--relation-name", "--name", "-n"],
                  description: "Relation Name",
                  args: { name: "relation-name" },
                },
                {
                  name: "--related-resource-id",
                  description: "The resource ID of the related resource",
                  args: { name: "related-resource-id" },
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
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "metadata",
      description: "Manage metadata with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create a Metadata",
          options: [
            {
              name: ["--metadata-name", "--name", "-n"],
              description: "The Metadata name",
              args: { name: "metadata-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--author",
              description:
                'The creator of the content item. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "author" },
            },
            {
              name: "--categories",
              description:
                'Categories for the solution content item Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "categories" },
            },
            {
              name: "--content-id",
              description:
                "Static ID for the content. Used to identify dependencies and content from solutions or community. Hard-coded/static for out of the box content and solutions. Dynamic for user-created. This is the resource name",
              args: { name: "content-id" },
            },
            {
              name: "--content-schema-version",
              description:
                "Schema version of the content. Can be used to distinguish between different flow based on the schema version",
              args: { name: "content-schema-version" },
            },
            {
              name: "--custom-version",
              description:
                "The custom version of the content. A optional free text",
              args: { name: "custom-version" },
            },
            {
              name: "--dependencies",
              description:
                'Dependencies for the content item, what other content items it requires to work. Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dependencies" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--first-publish-date",
              description: "First publish date solution content item",
              args: { name: "first-publish-date" },
            },
            {
              name: "--icon",
              description:
                "The icon identifier. this id can later be fetched from the solution template",
              args: { name: "icon" },
            },
            {
              name: "--kind",
              description: "The kind of content the metadata is for",
              args: {
                name: "kind",
                suggestions: [
                  "AnalyticsRule",
                  "AnalyticsRuleTemplate",
                  "AutomationRule",
                  "AzureFunction",
                  "DataConnector",
                  "DataType",
                  "HuntingQuery",
                  "InvestigationQuery",
                  "LogicAppsCustomConnector",
                  "Parser",
                  "Playbook",
                  "PlaybookTemplate",
                  "Solution",
                  "Watchlist",
                  "WatchlistTemplate",
                  "Workbook",
                  "WorkbookTemplate",
                ],
              },
            },
            {
              name: "--last-publish-date",
              description: "Last publish date for the solution content item",
              args: { name: "last-publish-date" },
            },
            {
              name: "--parent-id",
              description:
                "Full parent resource ID of the content item the metadata is for. This is the full resource ID including the scope (subscription and resource group)",
              args: { name: "parent-id" },
            },
            {
              name: "--preview-images",
              description:
                'Preview image file names. These will be taken from the solution artifacts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "preview-images" },
            },
            {
              name: "--preview-images-dark",
              description:
                'Preview image file names. These will be taken from the solution artifacts. used for dark theme support Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "preview-images-dark" },
            },
            {
              name: "--providers",
              description:
                'Providers for the solution content item Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "providers" },
            },
            {
              name: "--source",
              description:
                'Source of the content. This is where/how it was created. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "source" },
            },
            {
              name: "--support",
              description:
                'Support information for the metadata - type, name, contact information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "support" },
            },
            {
              name: "--threat-tactics",
              description:
                'The tactics the resource covers Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-tactics" },
            },
            {
              name: "--threat-techniques",
              description:
                'The techniques the resource covers, these have to be aligned with the tactics being used Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-techniques" },
            },
            {
              name: "--version",
              description:
                "Version of the content. Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices. Can also be any string, but then we cannot guarantee any version checks",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Metadata",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--metadata-name", "--name", "-n"],
              description: "The Metadata name",
              args: { name: "metadata-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List of all metadata",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "Filters the results, based on a Boolean condition. Optional",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results. Optional",
              args: { name: "orderby" },
            },
            {
              name: "--skip",
              description:
                "Used to skip n elements in the OData query (offset). Returns a nextLink to the next page of results if there are any left",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description: "Returns only the first n results. Optional",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a Metadata",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--metadata-name", "--name", "-n"],
              description: "The Metadata name",
              args: { name: "metadata-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a Metadata",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--author",
              description:
                'The creator of the content item. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "author" },
            },
            {
              name: "--categories",
              description:
                'Categories for the solution content item Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "categories" },
            },
            {
              name: "--content-id",
              description:
                "Static ID for the content. Used to identify dependencies and content from solutions or community. Hard-coded/static for out of the box content and solutions. Dynamic for user-created. This is the resource name",
              args: { name: "content-id" },
            },
            {
              name: "--content-schema-version",
              description:
                "Schema version of the content. Can be used to distinguish between different flow based on the schema version",
              args: { name: "content-schema-version" },
            },
            {
              name: "--custom-version",
              description:
                "The custom version of the content. A optional free text",
              args: { name: "custom-version" },
            },
            {
              name: "--dependencies",
              description:
                'Dependencies for the content item, what other content items it requires to work. Can describe more complex dependencies using a recursive/nested structure. For a single dependency an id/kind/version can be supplied or operator/criteria for complex formats. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "dependencies" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--first-publish-date",
              description: "First publish date solution content item",
              args: { name: "first-publish-date" },
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
              name: "--icon",
              description:
                "The icon identifier. this id can later be fetched from the solution template",
              args: { name: "icon" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--kind",
              description: "The kind of content the metadata is for",
              args: {
                name: "kind",
                suggestions: [
                  "AnalyticsRule",
                  "AnalyticsRuleTemplate",
                  "AutomationRule",
                  "AzureFunction",
                  "DataConnector",
                  "DataType",
                  "HuntingQuery",
                  "InvestigationQuery",
                  "LogicAppsCustomConnector",
                  "Parser",
                  "Playbook",
                  "PlaybookTemplate",
                  "Solution",
                  "Watchlist",
                  "WatchlistTemplate",
                  "Workbook",
                  "WorkbookTemplate",
                ],
              },
            },
            {
              name: "--last-publish-date",
              description: "Last publish date for the solution content item",
              args: { name: "last-publish-date" },
            },
            {
              name: ["--metadata-name", "--name", "-n"],
              description: "The Metadata name",
              args: { name: "metadata-name" },
            },
            {
              name: "--parent-id",
              description:
                "Full parent resource ID of the content item the metadata is for. This is the full resource ID including the scope (subscription and resource group)",
              args: { name: "parent-id" },
            },
            {
              name: "--preview-images",
              description:
                'Preview image file names. These will be taken from the solution artifacts Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "preview-images" },
            },
            {
              name: "--preview-images-dark",
              description:
                'Preview image file names. These will be taken from the solution artifacts. used for dark theme support Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "preview-images-dark" },
            },
            {
              name: "--providers",
              description:
                'Providers for the solution content item Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "providers" },
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
              name: "--source",
              description:
                'Source of the content. This is where/how it was created. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "source" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--support",
              description:
                'Support information for the metadata - type, name, contact information Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "support" },
            },
            {
              name: "--threat-tactics",
              description:
                'The tactics the resource covers Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-tactics" },
            },
            {
              name: "--threat-techniques",
              description:
                'The techniques the resource covers, these have to be aligned with the tactics being used Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-techniques" },
            },
            {
              name: "--version",
              description:
                "Version of the content. Default and recommended format is numeric (e.g. 1, 1.0, 1.0.0, 1.0.0.0), following ARM template best practices. Can also be any string, but then we cannot guarantee any version checks",
              args: { name: "version" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "office-consent",
      description: "Manage office consent with sentinel",
      subcommands: [
        {
          name: "delete",
          description: "Delete the office365 consent",
          options: [
            {
              name: ["--consent-id", "--name", "-n"],
              description: "Consent ID",
              args: { name: "consent-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all office365 consents",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get an office365 consent",
          options: [
            {
              name: ["--consent-id", "--name", "-n"],
              description: "Consent ID",
              args: { name: "consent-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "onboarding-state",
      description: "Manage onboarding state with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create Sentinel onboarding state",
          options: [
            {
              name: ["--sentinel-onboarding-state-name", "--name", "-n"],
              description:
                "The Sentinel onboarding state name. Supports - default",
              args: { name: "sentinel-onboarding-state-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--customer-managed-key",
              description: "Flag that indicates the status of the CMK setting",
              args: {
                name: "customer-managed-key",
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
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete Sentinel onboarding state",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sentinel-onboarding-state-name", "--name", "-n"],
              description:
                "The Sentinel onboarding state name. Supports - default",
              args: { name: "sentinel-onboarding-state-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all Sentinel onboarding states",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get Sentinel onboarding state",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sentinel-onboarding-state-name", "--name", "-n"],
              description:
                "The Sentinel onboarding state name. Supports - default",
              args: { name: "sentinel-onboarding-state-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update Sentinel onboarding state",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--customer-managed-key",
              description: "Flag that indicates the status of the CMK setting",
              args: {
                name: "customer-managed-key",
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
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sentinel-onboarding-state-name", "--name", "-n"],
              description:
                "The Sentinel onboarding state name. Supports - default",
              args: { name: "sentinel-onboarding-state-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "setting",
      description: "Manage setting with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create setting",
          options: [
            {
              name: ["--settings-name", "--name", "-n"],
              description:
                "The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba",
              args: { name: "settings-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--entity-analytics",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "entity-analytics" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--ueba",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ueba" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete setting of the product",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-name", "--name", "-n"],
              description:
                "The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba",
              args: { name: "settings-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List of all the settings",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a setting",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-name", "--name", "-n"],
              description:
                "The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba",
              args: { name: "settings-name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update setting",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--entity-analytics",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "entity-analytics" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--settings-name", "--name", "-n"],
              description:
                "The setting name. Supports - Anomalies, EyesOn, EntityAnalytics, Ueba",
              args: { name: "settings-name" },
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
              name: "--ueba",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ueba" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "source-control",
      description: "Manage source control with sentinel",
      subcommands: [
        {
          name: "create",
          description: "Create a source control",
          options: [
            {
              name: ["--source-control-id", "--name", "-n"],
              description: "Source control Id",
              args: { name: "source-control-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--content-types",
              description:
                'Array of source control content types. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "content-types" },
            },
            {
              name: "--description",
              description: "A description of the source control",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the source control",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--id",
              description: "The id (a Guid) of the source control",
              args: { name: "id" },
            },
            {
              name: "--last-deployment-info",
              description:
                'Information regarding the latest deployment for the source control. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "last-deployment-info" },
            },
            {
              name: "--repo-type",
              description: "The repository type of the source control",
              args: { name: "repo-type", suggestions: ["DevOps", "Github"] },
            },
            {
              name: "--repository",
              description:
                'Repository metadata. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "repository" },
            },
            {
              name: "--repository-info",
              description:
                'Information regarding the resources created in user\'s repository. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "repository-info" },
            },
            {
              name: "--version",
              description:
                "The version number associated with the source control",
              args: { name: "version", suggestions: ["V1", "V2"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a source control",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--source-control-id", "--name", "-n"],
              description: "Source control Id",
              args: { name: "source-control-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all source controls, without source control items",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-repository",
          description: "Get a list of repositories metadata",
          options: [
            {
              name: "--repo-type",
              description: "The type of repository",
              args: { name: "repo-type", suggestions: ["DevOps", "Github"] },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a source control by its identifier",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--source-control-id", "--name", "-n"],
              description: "Source control Id",
              args: { name: "source-control-id" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Create a source control",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--content-types",
              description:
                'Array of source control content types. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "content-types" },
            },
            {
              name: "--description",
              description: "A description of the source control",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the source control",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--id",
              description: "The id (a Guid) of the source control",
              args: { name: "id" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--last-deployment-info",
              description:
                'Information regarding the latest deployment for the source control. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "last-deployment-info" },
            },
            {
              name: ["--source-control-id", "--name", "-n"],
              description: "Source control Id",
              args: { name: "source-control-id" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--repo-type",
              description: "The repository type of the source control",
              args: { name: "repo-type", suggestions: ["DevOps", "Github"] },
            },
            {
              name: "--repository",
              description:
                'Repository metadata. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "repository" },
            },
            {
              name: "--repository-info",
              description:
                'Information regarding the resources created in user\'s repository. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "repository-info" },
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
              name: "--version",
              description:
                "The version number associated with the source control",
              args: { name: "version", suggestions: ["V1", "V2"] },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
    {
      name: "threat-indicator",
      description: "Manage threat intelligence indicator with sentinel",
      subcommands: [
        {
          name: "append-tag",
          description: "Append tags to a threat intelligence indicator",
          options: [
            {
              name: "--name",
              description: "Threat intelligence indicator name field",
              args: { name: "name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--intelligence-tags",
              description:
                'List of tags to be appended. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "intelligence-tags" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new threat intelligence indicator",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--confidence",
              description: "Confidence of threat intelligence entity",
              args: { name: "confidence" },
            },
            {
              name: "--created",
              description: "Created by",
              args: { name: "created" },
            },
            {
              name: "--created-by-ref",
              description: "Created by reference of threat intelligence entity",
              args: { name: "created-by-ref" },
            },
            {
              name: "--defanged",
              description: "Is threat intelligence entity defanged",
              args: {
                name: "defanged",
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
              name: "--description",
              description: "Description of a threat intelligence entity",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of a threat intelligence entity",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--external-id",
              description: "External ID of threat intelligence entity",
              args: { name: "external-id" },
            },
            {
              name: "--external-references",
              description:
                'External References Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "external-references" },
            },
            {
              name: "--external-updated-time",
              description: "External last updated time in UTC",
              args: { name: "external-updated-time" },
            },
            {
              name: "--granular-markings",
              description:
                'Granular Markings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "granular-markings" },
            },
            {
              name: "--indicator-types",
              description:
                'Indicator types of threat intelligence entities Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "indicator-types" },
            },
            {
              name: "--kill-chain-phases",
              description:
                'Kill chain phases Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "kill-chain-phases" },
            },
            {
              name: "--labels",
              description:
                'Labels of threat intelligence entity Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--language",
              description: "Language of threat intelligence entity",
              args: { name: "language" },
            },
            {
              name: "--last-updated-time",
              description: "Last updated time in UTC",
              args: { name: "last-updated-time" },
            },
            {
              name: "--modified",
              description: "Modified by",
              args: { name: "modified" },
            },
            {
              name: "--object-marking-refs",
              description:
                'Threat intelligence entity object marking references Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "object-marking-refs" },
            },
            {
              name: "--parsed-pattern",
              description:
                'Parsed patterns Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "parsed-pattern" },
            },
            {
              name: "--pattern",
              description: "Pattern of a threat intelligence entity",
              args: { name: "pattern" },
            },
            {
              name: "--pattern-type",
              description: "Pattern type of a threat intelligence entity",
              args: { name: "pattern-type" },
            },
            {
              name: "--pattern-version",
              description: "Pattern version of a threat intelligence entity",
              args: { name: "pattern-version" },
            },
            {
              name: "--revoked",
              description: "Is threat intelligence entity revoked",
              args: {
                name: "revoked",
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
              name: "--source",
              description: "Source of a threat intelligence entity",
              args: { name: "source" },
            },
            {
              name: "--threat-tags",
              description:
                'List of tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-tags" },
            },
            {
              name: "--threat-types",
              description:
                'Threat types Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-types" },
            },
            {
              name: "--valid-from",
              description: "Valid from",
              args: { name: "valid-from" },
            },
            {
              name: "--valid-until",
              description: "Valid until",
              args: { name: "valid-until" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a threat intelligence indicator",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Threat intelligence indicator name field",
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
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all threat intelligence indicators",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "Filters the results, based on a Boolean condition. Optional",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description: "Sorts the results. Optional",
              args: { name: "orderby" },
            },
            {
              name: "--skip-token",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
              args: { name: "skip-token" },
            },
            {
              name: "--top",
              description: "Returns only the first n results. Optional",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "query",
          description:
            "Query threat intelligence indicators as per filtering criteria",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                'Ids of threat intelligence indicators Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ids" },
            },
            {
              name: "--include-disabled",
              description: "Parameter to include/exclude disabled indicators",
              args: {
                name: "include-disabled",
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
              name: "--keywords",
              description:
                'Keywords for searching threat intelligence indicators Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "keywords" },
            },
            {
              name: "--max-confidence",
              description: "Maximum confidence",
              args: { name: "max-confidence" },
            },
            {
              name: "--max-valid-until",
              description: "End time for ValidUntil filter",
              args: { name: "max-valid-until" },
            },
            {
              name: "--min-confidence",
              description: "Minimum confidence",
              args: { name: "min-confidence" },
            },
            {
              name: "--min-valid-until",
              description: "Start time for ValidUntil filter",
              args: { name: "min-valid-until" },
            },
            {
              name: "--page-size",
              description: "Page size",
              args: { name: "page-size" },
            },
            {
              name: "--pattern-types",
              description:
                'Pattern types Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "pattern-types" },
            },
            {
              name: "--skip-token",
              description: "Skip token",
              args: { name: "skip-token" },
            },
            {
              name: "--sort-by",
              description:
                'Columns to sort by and sorting order Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sort-by" },
            },
            {
              name: "--sources",
              description:
                'Sources of threat intelligence indicators Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sources" },
            },
            {
              name: "--threat-types",
              description:
                'Threat types of threat intelligence indicators Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-types" },
            },
          ],
        },
        {
          name: "replace-tag",
          description: "Replace tags added to a threat intelligence indicator",
          options: [
            {
              name: "--name",
              description: "Threat intelligence indicator name field",
              args: { name: "name" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--confidence",
              description: "Confidence of threat intelligence entity",
              args: { name: "confidence" },
            },
            {
              name: "--created",
              description: "Created by",
              args: { name: "created" },
            },
            {
              name: "--created-by-ref",
              description: "Created by reference of threat intelligence entity",
              args: { name: "created-by-ref" },
            },
            {
              name: "--defanged",
              description: "Is threat intelligence entity defanged",
              args: {
                name: "defanged",
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
              name: "--description",
              description: "Description of a threat intelligence entity",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of a threat intelligence entity",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--external-id",
              description: "External ID of threat intelligence entity",
              args: { name: "external-id" },
            },
            {
              name: "--external-references",
              description:
                'External References Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "external-references" },
            },
            {
              name: "--external-updated-time",
              description: "External last updated time in UTC",
              args: { name: "external-updated-time" },
            },
            {
              name: "--granular-markings",
              description:
                'Granular Markings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "granular-markings" },
            },
            {
              name: "--indicator-types",
              description:
                'Indicator types of threat intelligence entities Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "indicator-types" },
            },
            {
              name: "--intelligence-tags",
              description:
                'List of tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "intelligence-tags" },
            },
            {
              name: "--kill-chain-phases",
              description:
                'Kill chain phases Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "kill-chain-phases" },
            },
            {
              name: "--labels",
              description:
                'Labels of threat intelligence entity Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--language",
              description: "Language of threat intelligence entity",
              args: { name: "language" },
            },
            {
              name: "--last-updated-time",
              description: "Last updated time in UTC",
              args: { name: "last-updated-time" },
            },
            {
              name: "--modified",
              description: "Modified by",
              args: { name: "modified" },
            },
            {
              name: "--object-marking-refs",
              description:
                'Threat intelligence entity object marking references Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "object-marking-refs" },
            },
            {
              name: "--parsed-pattern",
              description:
                'Parsed patterns Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "parsed-pattern" },
            },
            {
              name: "--pattern",
              description: "Pattern of a threat intelligence entity",
              args: { name: "pattern" },
            },
            {
              name: "--pattern-type",
              description: "Pattern type of a threat intelligence entity",
              args: { name: "pattern-type" },
            },
            {
              name: "--pattern-version",
              description: "Pattern version of a threat intelligence entity",
              args: { name: "pattern-version" },
            },
            {
              name: "--revoked",
              description: "Is threat intelligence entity revoked",
              args: {
                name: "revoked",
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
              name: "--source",
              description: "Source of a threat intelligence entity",
              args: { name: "source" },
            },
            {
              name: "--threat-types",
              description:
                'Threat types Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-types" },
            },
            {
              name: "--valid-from",
              description: "Valid from",
              args: { name: "valid-from" },
            },
            {
              name: "--valid-until",
              description: "Valid until",
              args: { name: "valid-until" },
            },
          ],
        },
        {
          name: "show",
          description: "View a threat intelligence indicator by name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Threat intelligence indicator name field",
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
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update a threat Intelligence indicator",
          options: [
            {
              name: "--confidence",
              description: "Confidence of threat intelligence entity",
              args: { name: "confidence" },
            },
            {
              name: "--created",
              description: "Created by",
              args: { name: "created" },
            },
            {
              name: "--created-by-ref",
              description: "Created by reference of threat intelligence entity",
              args: { name: "created-by-ref" },
            },
            {
              name: "--defanged",
              description: "Is threat intelligence entity defanged",
              args: {
                name: "defanged",
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
              name: "--description",
              description: "Description of a threat intelligence entity",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of a threat intelligence entity",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--external-id",
              description: "External ID of threat intelligence entity",
              args: { name: "external-id" },
            },
            {
              name: "--external-references",
              description:
                'External References Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "external-references" },
            },
            {
              name: "--external-updated-time",
              description: "External last updated time in UTC",
              args: { name: "external-updated-time" },
            },
            {
              name: "--granular-markings",
              description:
                'Granular Markings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "granular-markings" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--indicator-types",
              description:
                'Indicator types of threat intelligence entities Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "indicator-types" },
            },
            {
              name: "--kill-chain-phases",
              description:
                'Kill chain phases Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "kill-chain-phases" },
            },
            {
              name: "--labels",
              description:
                'Labels of threat intelligence entity Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--language",
              description: "Language of threat intelligence entity",
              args: { name: "language" },
            },
            {
              name: "--last-updated-time",
              description: "Last updated time in UTC",
              args: { name: "last-updated-time" },
            },
            {
              name: "--modified",
              description: "Modified by",
              args: { name: "modified" },
            },
            {
              name: ["--name", "-n"],
              description: "Threat intelligence indicator name field",
              args: { name: "name" },
            },
            {
              name: "--object-marking-refs",
              description:
                'Threat intelligence entity object marking references Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "object-marking-refs" },
            },
            {
              name: "--parsed-pattern",
              description:
                'Parsed patterns Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "parsed-pattern" },
            },
            {
              name: "--pattern",
              description: "Pattern of a threat intelligence entity",
              args: { name: "pattern" },
            },
            {
              name: "--pattern-type",
              description: "Pattern type of a threat intelligence entity",
              args: { name: "pattern-type" },
            },
            {
              name: "--pattern-version",
              description: "Pattern version of a threat intelligence entity",
              args: { name: "pattern-version" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--revoked",
              description: "Is threat intelligence entity revoked",
              args: {
                name: "revoked",
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
              name: "--source",
              description: "Source of a threat intelligence entity",
              args: { name: "source" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--threat-tags",
              description:
                'List of tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-tags" },
            },
            {
              name: "--threat-types",
              description:
                'Threat types Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "threat-types" },
            },
            {
              name: "--valid-from",
              description: "Valid from",
              args: { name: "valid-from" },
            },
            {
              name: "--valid-until",
              description: "Valid until",
              args: { name: "valid-until" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "metric",
          description:
            "Manage threat intelligence indicator metric with sentinel",
          subcommands: [
            {
              name: "list",
              description:
                "Get threat intelligence indicators metrics (Indicators counts by Type, Threat Type, Source)",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--workspace-name", "-w"],
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "watchlist",
      description: "Manage watchlist with sentinel",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its Items, we should call this endpoint with either rawContent or a valid SAR URI and contentType properties. The rawContent is mainly used for small watchlist (content size below 3.8 MB). The SAS URI enables the creation of large watchlist, where the content size can go up to 500 MB. The status of processing such large file can be polled through the URL returned in Azure-AsyncOperation header",
          options: [
            {
              name: ["--watchlist-alias", "--name", "-n"],
              description: "Watchlist Alias",
              args: { name: "watchlist-alias" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--content-type",
              description:
                "The content type of the raw content. Example : text/csv or text/tsv",
              args: { name: "content-type" },
            },
            {
              name: "--created",
              description: "The time the watchlist was created",
              args: { name: "created" },
            },
            {
              name: "--created-by",
              description:
                'Describes a user that created the watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "created-by" },
            },
            {
              name: "--default-duration",
              description:
                "The default duration of a watchlist (in ISO 8601 duration format)",
              args: { name: "default-duration" },
            },
            {
              name: "--description",
              description: "A description of the watchlist",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the watchlist",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
            },
            {
              name: "--is-deleted",
              description:
                "A flag that indicates if the watchlist is deleted or not",
              args: {
                name: "is-deleted",
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
              name: "--items-search-key",
              description:
                "The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address",
              args: { name: "items-search-key" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: "--provider",
              description: "The provider of the watchlist",
              args: { name: "provider" },
            },
            {
              name: "--raw-content",
              description:
                "The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint",
              args: { name: "raw-content" },
            },
            {
              name: "--skip-num",
              description:
                "The number of lines in a csv/tsv content to skip before the header",
              args: { name: "skip-num" },
            },
            {
              name: "--source",
              description: "The filename of the watchlist, called 'source'",
              args: { name: "source" },
            },
            {
              name: "--source-type",
              description: "The sourceType of the watchlist",
              args: {
                name: "source-type",
                suggestions: ["Local file", "Remote storage"],
              },
            },
            {
              name: "--tenant-id",
              description: "The tenantId where the watchlist belongs to",
              args: { name: "tenant-id" },
            },
            {
              name: "--updated",
              description: "The last time the watchlist was updated",
              args: { name: "updated" },
            },
            {
              name: "--updated-by",
              description:
                'Describes a user that updated the watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "updated-by" },
            },
            {
              name: "--upload-status",
              description:
                "The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted",
              args: { name: "upload-status" },
            },
            {
              name: "--watchlist-id",
              description: "The id (a Guid) of the watchlist",
              args: { name: "watchlist-id" },
            },
            {
              name: "--watchlist-type",
              description: "The type of the watchlist",
              args: { name: "watchlist-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a watchlist",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--watchlist-alias", "--name", "-n"],
              description: "Watchlist Alias",
              args: { name: "watchlist-alias" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Get all watchlists, without watchlist items",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
              isRequired: true,
            },
            {
              name: "--skip-token",
              description:
                "Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls. Optional",
              args: { name: "skip-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a watchlist, without its watchlist items",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--watchlist-alias", "--name", "-n"],
              description: "Watchlist Alias",
              args: { name: "watchlist-alias" },
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
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a Watchlist and its Watchlist Items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its Items, we should call this endpoint with either rawContent or a valid SAR URI and contentType properties. The rawContent is mainly used for small watchlist (content size below 3.8 MB). The SAS URI enables the creation of large watchlist, where the content size can go up to 500 MB. The status of processing such large file can be polled through the URL returned in Azure-AsyncOperation header",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--content-type",
              description:
                "The content type of the raw content. Example : text/csv or text/tsv",
              args: { name: "content-type" },
            },
            {
              name: "--created",
              description: "The time the watchlist was created",
              args: { name: "created" },
            },
            {
              name: "--created-by",
              description:
                'Describes a user that created the watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "created-by" },
            },
            {
              name: "--default-duration",
              description:
                "The default duration of a watchlist (in ISO 8601 duration format)",
              args: { name: "default-duration" },
            },
            {
              name: "--description",
              description: "A description of the watchlist",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "The display name of the watchlist",
              args: { name: "display-name" },
            },
            {
              name: "--etag",
              description: "Etag of the azure resource",
              args: { name: "etag" },
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--is-deleted",
              description:
                "A flag that indicates if the watchlist is deleted or not",
              args: {
                name: "is-deleted",
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
              name: "--items-search-key",
              description:
                "The search key is used to optimize query performance when using watchlists for joins with other data. For example, enable a column with IP addresses to be the designated SearchKey field, then use this field as the key field when joining to other event data by IP address",
              args: { name: "items-search-key" },
            },
            {
              name: "--labels",
              description:
                'List of labels relevant to this watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "labels" },
            },
            {
              name: ["--watchlist-alias", "--name", "-n"],
              description: "Watchlist Alias",
              args: { name: "watchlist-alias" },
            },
            {
              name: "--provider",
              description: "The provider of the watchlist",
              args: { name: "provider" },
            },
            {
              name: "--raw-content",
              description:
                "The raw content that represents to watchlist items to create. In case of csv/tsv content type, it's the content of the file that will parsed by the endpoint",
              args: { name: "raw-content" },
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
              name: "--skip-num",
              description:
                "The number of lines in a csv/tsv content to skip before the header",
              args: { name: "skip-num" },
            },
            {
              name: "--source",
              description: "The filename of the watchlist, called 'source'",
              args: { name: "source" },
            },
            {
              name: "--source-type",
              description: "The sourceType of the watchlist",
              args: {
                name: "source-type",
                suggestions: ["Local file", "Remote storage"],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tenant-id",
              description: "The tenantId where the watchlist belongs to",
              args: { name: "tenant-id" },
            },
            {
              name: "--updated",
              description: "The last time the watchlist was updated",
              args: { name: "updated" },
            },
            {
              name: "--updated-by",
              description:
                'Describes a user that updated the watchlist Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "updated-by" },
            },
            {
              name: "--upload-status",
              description:
                "The status of the Watchlist upload : New, InProgress or Complete. Pls note : When a Watchlist upload status is equal to InProgress, the Watchlist cannot be deleted",
              args: { name: "upload-status" },
            },
            {
              name: "--watchlist-id",
              description: "The id (a Guid) of the watchlist",
              args: { name: "watchlist-id" },
            },
            {
              name: "--watchlist-type",
              description: "The type of the watchlist",
              args: { name: "watchlist-type" },
            },
            {
              name: ["--workspace-name", "-w"],
              description: "The name of the workspace",
              args: { name: "workspace-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
