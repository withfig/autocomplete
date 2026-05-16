const completion: Fig.Spec = {
  name: "relay",
  description:
    "Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules",
  subcommands: [
    {
      name: "hyco",
      description:
        "Manage Azure Relay Service Hybrid Connection and Authorization Rule",
      subcommands: [
        {
          name: "create",
          description: "Create the Relay Service Hybrid Connection",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Hybrid Connection",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
              name: ["--requires-client-authorization", "-c"],
              description: "Indicates whether client authorization is required",
              args: {
                name: "requires-client-authorization",
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
              name: "--user-metadata",
              description: "Endpoint metadata",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the Relay Service Hybrid Connection",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Hybrid Connection",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
          description: "List the Hybrid Connection by Relay Service Namespace",
          options: [
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows the Relay Service Hybrid Connection Details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Hybrid Connection",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
          description: "Updates the Relay Service Hybrid Connection",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Hybrid Connection",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: ["--requires-client-authorization", "-r"],
              description: "Indicates whether client authorization is required",
              args: {
                name: "requires-client-authorization",
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
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Disabled",
                  "ReceiveDisabled",
                  "SendDisabled",
                ],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--user-metadata",
              description: "Endpoint metadata",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service Hybrid Connection Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for given Relay Service Hybrid Connection",
              options: [
                {
                  name: "--hybrid-connection-name",
                  description: "Name of Hybrid Connection",
                  args: { name: "hybrid-connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Hybrid Connection Authorization Rule",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                  name: "--rights",
                  description:
                    'Space-separated list of Authorization rule rights. Allowed values: Listen, Manage, Send. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the given Relay Service Hybrid Connection",
              options: [
                {
                  name: "--hybrid-connection-name",
                  description: "Name of Hybrid Connection",
                  args: { name: "hybrid-connection-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Hybrid Connection Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                "Shows list of Authorization Rule by Relay Service Hybrid Connection",
              options: [
                {
                  name: "--hybrid-connection-name",
                  description: "Name of Hybrid Connection",
                  args: { name: "hybrid-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Shows the details of Authorization Rule for given Relay Service Hybrid Connection",
              options: [
                {
                  name: "--hybrid-connection-name",
                  description: "Name of Hybrid Connection",
                  args: { name: "hybrid-connection-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Hybrid Connection Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                "Update Authorization Rule for given Relay Service Hybrid Connection",
              options: [
                {
                  name: "--rights",
                  description:
                    'Space-separated list of Authorization rule rights. Allowed values: Listen, Manage, Send. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                  isRequired: true,
                },
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
                  name: "--hybrid-connection-name",
                  description: "Name of Hybrid Connection",
                  args: { name: "hybrid-connection-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Hybrid Connection Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
              ],
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Relay Service Hybrid Connection",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection",
                  options: [
                    {
                      name: "--hybrid-connection-name",
                      description: "Name of Hybrid Connection",
                      args: { name: "hybrid-connection-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of Hybrid Connection Authorization Rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
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
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Relay Service Hybrid Connection",
                  options: [
                    {
                      name: "--key",
                      description:
                        "Specifies Primary or Secondary key needs to be reset",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--hybrid-connection-name",
                      description: "Name of Hybrid Connection",
                      args: { name: "hybrid-connection-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--key-value",
                      description:
                        "Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type",
                      args: { name: "key-value" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of Hybrid Connection Authorization Rule",
                      args: { name: "name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "namespace",
      description: "Manage Azure Relay Service Namespace",
      subcommands: [
        {
          name: "create",
          description: "Create a Relay Service Namespace",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of Namespace",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the Relay Service Namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Namespace",
              args: { name: "name" },
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
          name: "exists",
          description:
            "Check for the availability of the given name for the Namespace",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List the Relay Service Namespaces",
          options: [
            {
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
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
          description: "Shows the Relay Service Namespace details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Namespace",
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
          name: "update",
          description: "Updates a Relay Service Namespace",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of Namespace",
              args: { name: "name" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--name", "-n"],
              description: "Name of Namespace",
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
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service Namespace Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Relay Service Namespace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of Namespace Authorization Rule",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                  name: "--rights",
                  description:
                    'Space-separated list of Authorization rule rights. Allowed values: Listen, Manage, Send. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the Authorization Rule of the Relay Service Namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Namespace Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                "Shows the list of Authorization Rule by Relay Service Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Shows the details of Relay Service Namespace Authorization Rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Namespace Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                "Updates Authorization Rule for the given Relay Service Namespace",
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of Namespace Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
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
                  name: "--rights",
                  description:
                    'Space-separated list of Authorization rule rights. Allowed values: Listen, Manage, Send. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
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
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule connection strings for Namespace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for Relay Service Namespace",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Namespace Authorization Rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
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
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for the Relay Service Namespace",
                  options: [
                    {
                      name: "--key",
                      description:
                        "Specifies Primary or Secondary key needs to be reset",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--key-value",
                      description:
                        "Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type",
                      args: { name: "key-value" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of Namespace Authorization Rule",
                      args: { name: "name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "wcfrelay",
      description:
        "Manage Azure Relay Service WCF Relay and Authorization Rule",
      subcommands: [
        {
          name: "create",
          description: "Create the Relay Service WCF Relay",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of WCF Relay",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
              name: "--relay-type",
              description: "Relay type. Allowed values: Http, NetTcp",
              args: { name: "relay-type", suggestions: ["Http", "NetTcp"] },
            },
            {
              name: ["--requires-client-authorization", "-c"],
              description: "Indicates whether client authorization is required",
              args: {
                name: "requires-client-authorization",
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
              name: ["--requires-transport-security", "-t"],
              description: "Indicates whether transport security is required",
              args: {
                name: "requires-transport-security",
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
              name: "--user-metadata",
              description: "Endpoint metadata",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the Relay Service WCF Relay",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of WCF Relay",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
          description: "List the WCF Relay by Relay Service Namespace",
          options: [
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
              name: "--max-items",
              description:
                "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
              args: { name: "max-items" },
            },
            {
              name: "--next-token",
              description:
                "Token to specify where to start paginating. This is the token value from a previously truncated response",
              args: { name: "next-token" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows the Relay Service WCF Relay Details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of WCF Relay",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
          description: "Updates existing Relay Service WCF Relay",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of WCF Relay",
              args: { name: "name" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
            },
            {
              name: "--relay-type",
              description: "Relay type",
              args: { name: "relay-type", suggestions: ["Http", "NetTcp"] },
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
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Disabled",
                  "ReceiveDisabled",
                  "SendDisabled",
                ],
              },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--user-metadata",
              description: "Endpoint metadata",
              args: { name: "user-metadata" },
            },
          ],
        },
        {
          name: "authorization-rule",
          description:
            "Manage Azure Relay Service WCF Relay Authorization Rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create Authorization Rule for the given Relay Service WCF Relay",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of WCF Relay Authorization Rule",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--relay-name",
                  description: "Name of WCF Relay",
                  args: { name: "relay-name" },
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
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the Authorization Rule of Relay Service WCF Relay",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of WCF Relay Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--relay-name",
                  description: "Name of WCF Relay",
                  args: { name: "relay-name" },
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
                "List of Authorization Rule by Relay Service WCF Relay",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--relay-name",
                  description: "Name of WCF Relay",
                  args: { name: "relay-name" },
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
                  name: "--max-items",
                  description:
                    "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
                  args: { name: "max-items" },
                },
                {
                  name: "--next-token",
                  description:
                    "Token to specify where to start paginating. This is the token value from a previously truncated response",
                  args: { name: "next-token" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show properties of Authorization Rule for the given Relay Service WCF Relay",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of WCF Relay Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--relay-name",
                  description: "Name of WCF Relay",
                  args: { name: "relay-name" },
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
                "Update Authorization Rule for the given Relay Service WCF Relay",
              options: [
                {
                  name: "--rights",
                  description:
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                  isRequired: true,
                },
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of WCF Relay Authorization Rule",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "Name of Namespace",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--relay-name",
                  description: "Name of WCF Relay",
                  args: { name: "relay-name" },
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
              ],
            },
            {
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Relay Service WCF Relay",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of WCF Relay Authorization Rule",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--relay-name",
                      description: "Name of WCF Relay",
                      args: { name: "relay-name" },
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
                  name: "renew",
                  description:
                    "Regenerate keys of Authorization Rule for Relay Service WCF Relay",
                  options: [
                    {
                      name: "--key",
                      description:
                        "Specifies Primary or Secondary key needs to be reset",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--key-value",
                      description:
                        "Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type",
                      args: { name: "key-value" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of WCF Relay Authorization Rule",
                      args: { name: "name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "Name of Namespace",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: "--relay-name",
                      description: "Name of WCF Relay",
                      args: { name: "relay-name" },
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
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
