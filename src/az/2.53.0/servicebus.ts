const completion: Fig.Spec = {
  name: "servicebus",
  description: "Servicebus",
  subcommands: [
    {
      name: "georecovery-alias",
      description:
        "Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias",
      subcommands: [
        {
          name: "break-pair",
          description:
            "This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          name: "create",
          description: "Create a new Alias(Disaster Recovery configuration)",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--alternate-name",
              description:
                "Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "alternate-name" },
            },
            {
              name: "--partner-namespace",
              description:
                "ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "partner-namespace" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Alias(Disaster Recovery configuration)",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          name: "exists",
          description: "Check the give namespace name availability",
          options: [
            {
              name: ["--alias", "-a"],
              description:
                "The Name to check the namespace name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          name: "fail-over",
          description:
            "Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--is-safe-failover",
              description:
                "Safe failover is to indicate the service should wait for pending replication to finish before switching to the secondary",
              args: {
                name: "is-safe-failover",
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
              name: "--namespace-name",
              description: "The namespace name",
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
          description: "List all Alias(Disaster Recovery configurations)",
          options: [
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          name: "set",
          description:
            "Sets Service Bus Geo-Disaster Recovery Configuration Alias for the give Namespace",
          options: [
            {
              name: ["--alias", "-a"],
              description:
                "Name of the Geo-Disaster Recovery Configuration Alias",
              args: { name: "alias" },
              isRequired: true,
            },
            {
              name: "--partner-namespace",
              description:
                "Name (if within the same resource group) or ARM Id of Primary/Secondary Service Bus namespace name, which is part of GEO DR pairing",
              args: { name: "partner-namespace" },
              isRequired: true,
            },
            {
              name: "--alternate-name",
              description:
                "Alternate Name (Post failover) for Primary Namespace, when Namespace name and Alias name are same",
              args: { name: "alternate-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "Name of Namespace",
              args: { name: "namespace-name" },
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
          ],
        },
        {
          name: "show",
          description:
            "Get Alias(Disaster Recovery configuration) for primary or secondary namespace",
          options: [
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          description: "Update a new Alias(Disaster Recovery configuration)",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--alias", "-a"],
              description: "The Disaster Recovery configuration name",
              args: { name: "alias" },
            },
            {
              name: "--alternate-name",
              description:
                "Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "alternate-name" },
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
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: "--partner-namespace",
              description:
                "ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing",
              args: { name: "partner-namespace" },
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
          name: "authorization-rule",
          description:
            "Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias",
          subcommands: [
            {
              name: "list",
              description: "List the authorization rules for a namespace",
              options: [
                {
                  name: ["--alias", "-a"],
                  description: "The Disaster Recovery configuration name",
                  args: { name: "alias" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              name: "show",
              description:
                "Get an authorization rule for a namespace by rule name",
              options: [
                {
                  name: ["--alias", "-a"],
                  description: "The Disaster Recovery configuration name",
                  args: { name: "alias" },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              name: "keys",
              description:
                "Manage Azure Authorization Rule keys for Service Bus Namespace",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the primary and secondary connection strings for the namespace",
                  options: [
                    {
                      name: ["--alias", "-a"],
                      description: "The Disaster Recovery configuration name",
                      args: { name: "alias" },
                      isRequired: true,
                    },
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: "migration",
      description: "Manage Azure Service Bus Migration of Standard to Premium",
      subcommands: [
        {
          name: "abort",
          description: "This operation reverts Migration",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
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
          name: "complete",
          description:
            "This operation Completes Migration of entities by pointing the connection strings to Premium namespace and any entities created after the operation will be under Premium Namespace. CompleteMigration operation will fail when entity migration is in-progress",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
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
          name: "delete",
          description: "Delete a MigrationConfiguration",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
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
          description: "List all migrationConfigurations",
          options: [
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
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
          name: "show",
          description: "Get Migration Config",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          name: "start",
          description:
            "Create Migration configuration and starts migration of entities from Standard to Premium namespace",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
              args: { name: "namespace-name" },
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
              name: "--post-migration-name",
              description: "Name to access Standard Namespace after migration",
              args: { name: "post-migration-name" },
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
              name: "--target-namespace",
              description:
                "Existing premium Namespace ARM Id name which has no entities, will be used for migration",
              args: { name: "target-namespace" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update Migration configuration and starts migration of entities from Standard to Premium namespace",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--config-name", "--name", "-n"],
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
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
              name: "--namespace-name",
              description: "The namespace name",
              args: { name: "namespace-name" },
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
              name: "--post-migration-name",
              description: "Name to access Standard Namespace after migration",
              args: { name: "post-migration-name" },
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
              name: "--target-namespace",
              description:
                "Existing premium Namespace ARM Id name which has no entities, will be used for migration",
              args: { name: "target-namespace" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--config-name",
              description:
                'The configuration name. Should always be "$default"',
              args: { name: "config-name", suggestions: ["$default"] },
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
              name: "--namespace-name",
              description: "The namespace name",
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
      name: "namespace",
      description: "Servicebus namespace",
      subcommands: [
        {
          name: "create",
          description: "Create a Service Bus Namespace",
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
              name: "--alternate-name",
              description:
                "Alternate name specified when alias and namespace names are same",
              args: { name: "alternate-name" },
            },
            {
              name: "--capacity",
              description:
                "Number of message units. This property is only applicable to namespaces of Premium SKU",
              args: {
                name: "capacity",
                suggestions: ["1", "16", "2", "4", "8"],
              },
            },
            {
              name: "--disable-local-auth",
              description:
                "A boolean value that indicates whether SAS authentication is enabled/disabled for the Service Bus",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--encryption-config",
              description: "List of KeyVaultProperties objects",
              args: { name: "encryption-config" },
            },
            {
              name: "--infra-encryption",
              description:
                "A boolean value that indicates whether Infrastructure Encryption (Double Encryption)",
              args: {
                name: "infra-encryption",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description: "Enable System Assigned Identity",
              args: {
                name: "mi-system-assigned",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--mi-user-assigned",
              description: "List of User Assigned Identity ids",
              args: { name: "mi-user-assigned" },
            },
            {
              name: ["--minimum-tls-version", "--min-tls"],
              description:
                "The minimum TLS version for the cluster to support, e.g. 1.2",
              args: {
                name: "minimum-tls-version",
                suggestions: ["1.0", "1.1", "1.2"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--premium-messaging-partitions", "--premium-partitions"],
              description:
                "The number of partitions of a Service Bus namespace. This property is only applicable to Premium SKU namespaces. The default value is 1 and possible values are 1, 2 and 4",
              args: { name: "premium-messaging-partitions" },
            },
            {
              name: ["--public-network-access", "--public-network"],
              description:
                "This determines if traffic is allowed over public network. By default it is enabled. If value is SecuredByPerimeter then Inbound and Outbound communication is controlled by the network security perimeter and profile' access rules",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sku",
              description: "Namespace SKU",
              args: {
                name: "sku",
                suggestions: ["Basic", "Premium", "Standard"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--zone-redundant",
              description:
                "Enabling this property creates a ServiceBus Zone Redundant Namespace in regions supported availability zones",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an existing namespace. This operation also removes all associated resources under the namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
              args: { name: "namespace-name" },
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
              description: "The resourceGroup name",
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
          description: "Check the give namespace name availability",
          options: [
            {
              name: "--name",
              description:
                "The Name to check the namespace name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number",
              args: { name: "name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the available namespaces within the subscription by resource group & also irrespective of the resource groups",
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
          description: "Get a description for the specified namespace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resourceGroup name",
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
            "Update a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--alternate-name",
              description: "Alternate name for namespace",
              args: { name: "alternate-name" },
            },
            {
              name: "--capacity",
              description:
                "Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64",
              args: { name: "capacity" },
            },
            {
              name: ["--private-endpoint-connections", "--connections"],
              description:
                'List of private endpoint connections. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "private-endpoint-connections" },
            },
            {
              name: "--disable-local-auth",
              description:
                "This property disables SAS authentication for the Service Bus namespace",
              args: {
                name: "disable-local-auth",
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
              name: "--encryption",
              description:
                'Properties of BYOK Encryption description Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "encryption" },
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
                'Properties of BYOK Identity description Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--minimum-tls-version",
              description:
                "The minimum TLS version for the cluster to support, e.g. '1.2'",
              args: {
                name: "minimum-tls-version",
                suggestions: ["1.0", "1.1", "1.2"],
              },
            },
            {
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
              args: { name: "namespace-name" },
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
              name: ["--premium-messaging-partitions", "--premium-partitions"],
              description:
                "The number of partitions of a Service Bus namespace. This property is only applicable to Premium SKU namespaces. The default value is 1 and possible values are 1, 2 and 4",
              args: { name: "premium-messaging-partitions" },
            },
            {
              name: "--public-network-access",
              description:
                "This determines if traffic is allowed over public network. By default it is enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled", "SecuredByPerimeter"],
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
              description: "The resourceGroup name",
              args: { name: "resource-group" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--sku",
              description: "Name of this SKU",
              args: {
                name: "sku",
                suggestions: ["Basic", "Premium", "Standard"],
              },
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
                'Resource tags Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--tier",
              description: "The billing tier of this particular SKU",
              args: {
                name: "tier",
                suggestions: ["Basic", "Premium", "Standard"],
              },
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
              name: ["--namespace-name", "--name", "-n"],
              description: "The namespace name",
              args: { name: "namespace-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resourceGroup name",
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
          description: "Servicebus namespace authorization-rule",
          subcommands: [
            {
              name: "create",
              description: "Create an authorization rule for a namespace",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "rights" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a namespace authorization rule",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              description: "List the authorization rules for a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              name: "show",
              description:
                "Get an authorization rule for a namespace by rule name",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              description: "Update an authorization rule for a namespace",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
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
                  name: "--namespace-name",
                  description: "The namespace name",
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
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              description: "Servicebus namespace authorization-rule keys",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the primary and secondary connection strings for the namespace",
                  options: [
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                    "Regenerates the primary or secondary connection strings for the namespace",
                  options: [
                    {
                      name: "--key",
                      description: "The access key to regenerate",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
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
                        "Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType",
                      args: { name: "key-value" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
        {
          name: "encryption",
          description: "Manage servicebus namespace encryption properties",
          subcommands: [
            {
              name: "add",
              description: "Add Encryption properties to a namespace",
              options: [
                {
                  name: "--encryption-config",
                  description: "List of KeyVaultProperties objects",
                  args: { name: "encryption-config" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
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
                  name: "--infra-encryption",
                  description:
                    "A boolean value that indicates whether Infrastructure Encryption (Double Encryption)",
                  args: {
                    name: "infra-encryption",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove one or more Encryption properties from a namespace",
              options: [
                {
                  name: "--encryption-config",
                  description: "List of KeyVaultProperties objects",
                  args: { name: "encryption-config" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
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
          ],
        },
        {
          name: "identity",
          description: "Manage servicebus namespace identity",
          subcommands: [
            {
              name: "assign",
              description:
                "Assign System or User or System, User assigned identities to a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
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
                  name: "--system-assigned",
                  description: "System Assigned Identity",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--user-assigned",
                  description: "User Assigned Identity",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Removes System or User or System, User assigned identities from a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "Name of the Namespace",
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
                  name: "--system-assigned",
                  description: "System Assigned Identity",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--user-assigned",
                  description: "User Assigned Identity",
                  args: { name: "user-assigned" },
                },
              ],
            },
          ],
        },
        {
          name: "network-rule-set",
          description: "Servicebus namespace network-rule-set",
          subcommands: [
            {
              name: "create",
              description: "Create NetworkRuleSet for a Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--default-action",
                  description: "Default Action for Network Rule Set",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--enable-trusted-service-access", "-t"],
                  description:
                    "Value that indicates whether Trusted Service Access is Enabled or not",
                  args: {
                    name: "enable-trusted-service-access",
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
                  name: "--ip-rules",
                  description:
                    'List of IpRules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ip-rules" },
                },
                {
                  name: "--public-network-access",
                  description:
                    "This determines if traffic is allowed over public network. By default it is enabled",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--virtual-network-rules",
                  description:
                    'List VirtualNetwork Rules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "virtual-network-rules" },
                },
              ],
            },
            {
              name: "list",
              description: "List list of NetworkRuleSet for a Namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              name: "show",
              description: "Get NetworkRuleSet for a Namespace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              description: "Update NetworkRuleSet for a Namespace",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--default-action",
                  description: "Default Action for Network Rule Set",
                  args: {
                    name: "default-action",
                    suggestions: ["Allow", "Deny"],
                  },
                },
                {
                  name: ["--enable-trusted-service-access", "-t"],
                  description:
                    "Value that indicates whether Trusted Service Access is Enabled or not",
                  args: {
                    name: "enable-trusted-service-access",
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
                  name: "--ip-rules",
                  description:
                    'List of IpRules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ip-rules" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--public-network-access",
                  description:
                    "This determines if traffic is allowed over public network. By default it is enabled",
                  args: {
                    name: "public-network-access",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: "--virtual-network-rules",
                  description:
                    'List VirtualNetwork Rules Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "virtual-network-rules" },
                },
              ],
            },
            {
              name: "ip-rule",
              description:
                "Manage Azure ServiceBus ip-rules in networkruleSet for namespace",
              subcommands: [
                {
                  name: "add",
                  description: "Add a IP-Rule for network rule of namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
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
                      name: "--ip-rule",
                      description: "List VirtualNetwork Rules",
                      args: { name: "ip-rule" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove Ip-Rule from network rule of namespace",
                  options: [
                    {
                      name: ["--namespace-name", "--name", "-n"],
                      description: "Name of the Namespace",
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
                      name: "--ip-rule",
                      description: "List VirtualNetwork Rules",
                      args: { name: "ip-rule" },
                    },
                  ],
                },
              ],
            },
            {
              name: "virtual-network-rule",
              description:
                "Manage Azure ServiceBus subnet-rule in networkruleSet for namespace",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add a Virtual-Network-Rule for network rule of namespace",
                  options: [
                    {
                      name: "--namespace-name",
                      description: "Name of the Namespace",
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
                      name: "--subnet",
                      description: "List VirtualNetwork Rules",
                      args: { name: "subnet" },
                    },
                  ],
                },
                {
                  name: "remove",
                  description: "Remove network rule for a namespace",
                  options: [
                    {
                      name: "--namespace-name",
                      description: "Name of the Namespace",
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
                      name: "--subnet",
                      description: "List VirtualNetwork Rules",
                      args: { name: "subnet" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "private-endpoint-connection",
          description:
            "Manage servicebus namespace private endpoint connection",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for servicebus namespace",
              options: [
                {
                  name: "--description",
                  description: "Comments for approve operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Service Bus Namespace. You can get it using az servicebus namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Service Bus Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Service Bus namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified Service bus namespace",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "create",
              description:
                "Create PrivateEndpointConnections of service namespace",
              options: [
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--description",
                  description: "Description of the connection state",
                  args: { name: "description" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "Provisioning state of the Private Endpoint Connection",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Canceled",
                      "Creating",
                      "Deleting",
                      "Failed",
                      "Succeeded",
                      "Updating",
                    ],
                  },
                },
                {
                  name: "--status",
                  description: "Status of the connection",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a private endpoint connection request for servicebus namespace",
              options: [
                {
                  name: "--description",
                  description: "Comments for delete operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Service Bus Namespace. You can get it using az servicebus namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Service Bus Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Service Bus namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified Service bus namespace",
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
                "List the available PrivateEndpointConnections within a namespace",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
              name: "reject",
              description:
                "Reject a private endpoint connection request for servicebus namespace",
              options: [
                {
                  name: "--description",
                  description: "Comments for reject operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Service Bus Namespace. You can get it using az servicebus namespace show",
                  args: { name: "id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the private endpoint connection associated with the Service Bus Namespace",
                  args: { name: "name" },
                },
                {
                  name: "--namespace-name",
                  description: "The Service Bus namesapce name",
                  args: { name: "namespace-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "The resource group name of specified Service bus namespace",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a description for the specified Private Endpoint Connection",
              options: [
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Service Bus Namespace. You can get it using az servicebus namespace show",
                  args: { name: "id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                "Update PrivateEndpointConnections of service namespace",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "Description of the connection state",
                  args: { name: "description" },
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
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--provisioning-state",
                  description:
                    "Provisioning state of the Private Endpoint Connection",
                  args: {
                    name: "provisioning-state",
                    suggestions: [
                      "Canceled",
                      "Creating",
                      "Deleting",
                      "Failed",
                      "Succeeded",
                      "Updating",
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
                  name: "--status",
                  description: "Status of the connection",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
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
                  name: ["--private-endpoint-connection-name", "--name", "-n"],
                  description: "The PrivateEndpointConnection name",
                  args: { name: "private-endpoint-connection-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
          name: "private-link-resource",
          description: "Manage servicebus namespace private link resources",
          subcommands: [
            {
              name: "show",
              description: "List lists of resources that supports Privatelinks",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
          ],
        },
      ],
    },
    {
      name: "queue",
      description: "Servicebus queue",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Service Bus queue. This operation is idempotent",
          options: [
            {
              name: ["--queue-name", "--name", "-n"],
              description: "The queue name",
              args: { name: "queue-name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--auto-delete-on-idle",
              description:
                "ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes",
              args: { name: "auto-delete-on-idle" },
            },
            {
              name: "--default-message-time-to-live",
              description:
                "ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
              args: { name: "default-message-time-to-live" },
            },
            {
              name: ["--enable-duplicate-detection", "--duplicate-detection"],
              description:
                "A value indicating if this queue requires duplicate detection",
              args: {
                name: "enable-duplicate-detection",
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
              name: ["--duplicate-detection-history-time-window", "-d"],
              description:
                "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
              args: { name: "duplicate-detection-history-time-window" },
            },
            {
              name: "--enable-batched-operations",
              description:
                "Value that indicates whether server-side batched operations are enabled",
              args: {
                name: "enable-batched-operations",
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
              name: [
                "--enable-dead-lettering-on-message-expiration",
                "--message-expiration",
              ],
              description:
                "A value that indicates whether this queue has dead letter support when a message expires",
              args: {
                name: "enable-dead-lettering-on-message-expiration",
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
              name: "--enable-express",
              description:
                "A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage",
              args: {
                name: "enable-express",
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
              name: "--enable-partitioning",
              description:
                "A value that indicates whether the queue is to be partitioned across multiple message brokers",
              args: {
                name: "enable-partitioning",
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
              name: "--enable-session",
              description:
                "A value that indicates whether the queue supports the concept of sessions",
              args: {
                name: "enable-session",
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
              name: "--forward-dead-lettered-messages-to",
              description:
                "Queue/Topic name to forward the Dead Letter message",
              args: { name: "forward-dead-lettered-messages-to" },
            },
            {
              name: "--forward-to",
              description: "Queue/Topic name to forward the messages",
              args: { name: "forward-to" },
            },
            {
              name: "--lock-duration",
              description:
                "ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute",
              args: { name: "lock-duration" },
            },
            {
              name: "--max-delivery-count",
              description:
                "The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10",
              args: { name: "max-delivery-count" },
            },
            {
              name: ["--max-message-size-in-kilobytes", "--max-message-size"],
              description:
                "Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024",
              args: { name: "max-message-size-in-kilobytes" },
            },
            {
              name: ["--max-size-in-megabytes", "--max-size"],
              description:
                "Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024",
              args: { name: "max-size-in-megabytes" },
            },
            {
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Creating",
                  "Deleting",
                  "Disabled",
                  "ReceiveDisabled",
                  "Renaming",
                  "Restoring",
                  "SendDisabled",
                  "Unknown",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a queue from the specified namespace in a resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--queue-name", "--name", "-n"],
              description: "The queue name",
              args: { name: "queue-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          description: "List the queues within a namespace",
          options: [
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--skip",
              description:
                "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description:
                "May be used to limit the number of results to the most recent N usageDetails",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a description for the specified queue",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--queue-name", "--name", "-n"],
              description: "The queue name",
              args: { name: "queue-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
            "Update a Service Bus queue. This operation is idempotent",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--auto-delete-on-idle",
              description:
                "ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes",
              args: { name: "auto-delete-on-idle" },
            },
            {
              name: "--default-message-time-to-live",
              description:
                "ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
              args: { name: "default-message-time-to-live" },
            },
            {
              name: ["--duplicate-detection-history-time-window", "-d"],
              description:
                "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
              args: { name: "duplicate-detection-history-time-window" },
            },
            {
              name: "--enable-batched-operations",
              description:
                "Value that indicates whether server-side batched operations are enabled",
              args: {
                name: "enable-batched-operations",
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
              name: [
                "--enable-dead-lettering-on-message-expiration",
                "--message-expiration",
              ],
              description:
                "A value that indicates whether this queue has dead letter support when a message expires",
              args: {
                name: "enable-dead-lettering-on-message-expiration",
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
              name: "--enable-express",
              description:
                "A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage",
              args: {
                name: "enable-express",
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
              name: "--forward-dead-lettered-messages-to",
              description:
                "Queue/Topic name to forward the Dead Letter message",
              args: { name: "forward-dead-lettered-messages-to" },
            },
            {
              name: "--forward-to",
              description: "Queue/Topic name to forward the messages",
              args: { name: "forward-to" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--lock-duration",
              description:
                "ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute",
              args: { name: "lock-duration" },
            },
            {
              name: "--max-delivery-count",
              description:
                "The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10",
              args: { name: "max-delivery-count" },
            },
            {
              name: ["--max-message-size-in-kilobytes", "--max-message-size"],
              description:
                "Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024",
              args: { name: "max-message-size-in-kilobytes" },
            },
            {
              name: ["--max-size-in-megabytes", "--max-size"],
              description:
                "Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024",
              args: { name: "max-size-in-megabytes" },
            },
            {
              name: ["--queue-name", "--name", "-n"],
              description: "The queue name",
              args: { name: "queue-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Creating",
                  "Deleting",
                  "Disabled",
                  "ReceiveDisabled",
                  "Renaming",
                  "Restoring",
                  "SendDisabled",
                  "Unknown",
                ],
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
          name: "authorization-rule",
          description: "Servicebus queue authorization-rule",
          subcommands: [
            {
              name: "create",
              description: "Create an authorization rule for a queue",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--queue-name",
                  description: "The queue name",
                  args: { name: "queue-name" },
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
              description: "Delete a queue authorization rule",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--queue-name",
                  description: "The queue name",
                  args: { name: "queue-name" },
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
              description: "List all authorization rules for a queue",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                  isRequired: true,
                },
                {
                  name: "--queue-name",
                  description: "The queue name",
                  args: { name: "queue-name" },
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
              description: "Get an authorization rule for a queue by rule name",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--queue-name",
                  description: "The queue name",
                  args: { name: "queue-name" },
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
              description: "Update an authorization rule for a queue",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
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
                  name: "--namespace-name",
                  description: "The namespace name",
                  args: { name: "namespace-name" },
                },
                {
                  name: "--queue-name",
                  description: "The queue name",
                  args: { name: "queue-name" },
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
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              description: "Servicebus queue authorization-rule keys",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Primary and secondary connection strings to the queue",
                  options: [
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
                      args: { name: "namespace-name" },
                      isRequired: true,
                    },
                    {
                      name: "--queue-name",
                      description: "The queue name",
                      args: { name: "queue-name" },
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
                    "Regenerates the primary or secondary connection strings to the queue",
                  options: [
                    {
                      name: "--key",
                      description: "The access key to regenerate",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
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
                        "Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType",
                      args: { name: "key-value" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: "--queue-name",
                      description: "The queue name",
                      args: { name: "queue-name" },
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
      name: "topic",
      description: "Servicebus topic",
      subcommands: [
        {
          name: "create",
          description: "Create a topic in the specified namespace",
          options: [
            {
              name: ["--topic-name", "--name", "-n"],
              description: "The topic name",
              args: { name: "topic-name" },
              isRequired: true,
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--auto-delete-on-idle",
              description:
                "ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes",
              args: { name: "auto-delete-on-idle" },
            },
            {
              name: "--default-message-time-to-live",
              description:
                "ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
              args: { name: "default-message-time-to-live" },
            },
            {
              name: ["--enable-duplicate-detection", "--duplicate-detection"],
              description:
                "A value indicating if this queue requires duplicate detection",
              args: {
                name: "enable-duplicate-detection",
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
              name: ["--duplicate-detection-history-time-window", "-d"],
              description:
                "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
              args: { name: "duplicate-detection-history-time-window" },
            },
            {
              name: "--enable-batched-operations",
              description:
                "Value that indicates whether server-side batched operations are enabled",
              args: {
                name: "enable-batched-operations",
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
              name: "--enable-express",
              description:
                "Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage",
              args: {
                name: "enable-express",
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
              name: "--enable-ordering",
              description:
                "Value that indicates whether the topic supports ordering",
              args: {
                name: "enable-ordering",
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
              name: "--enable-partitioning",
              description:
                "Value that indicates whether the topic to be partitioned across multiple message brokers is enabled",
              args: {
                name: "enable-partitioning",
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
              name: ["--max-message-size-in-kilobytes", "--max-message-size"],
              description:
                "Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024",
              args: { name: "max-message-size-in-kilobytes" },
            },
            {
              name: ["--max-size-in-megabytes", "--max-size"],
              description:
                "Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024",
              args: { name: "max-size-in-megabytes" },
            },
            {
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Creating",
                  "Deleting",
                  "Disabled",
                  "ReceiveDisabled",
                  "Renaming",
                  "Restoring",
                  "SendDisabled",
                  "Unknown",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete a topic from the specified namespace and resource group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--topic-name", "--name", "-n"],
              description: "The topic name",
              args: { name: "topic-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          description: "List all the topics in a namespace",
          options: [
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--skip",
              description:
                "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description:
                "May be used to limit the number of results to the most recent N usageDetails",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Get a description for the specified topic",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--topic-name", "--name", "-n"],
              description: "The topic name",
              args: { name: "topic-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
          description: "Update a topic in the specified namespace",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--auto-delete-on-idle",
              description:
                "ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes",
              args: { name: "auto-delete-on-idle" },
            },
            {
              name: "--default-message-time-to-live",
              description:
                "ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
              args: { name: "default-message-time-to-live" },
            },
            {
              name: ["--enable-duplicate-detection", "--duplicate-detection"],
              description:
                "A value indicating if this queue requires duplicate detection",
              args: {
                name: "enable-duplicate-detection",
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
              name: ["--duplicate-detection-history-time-window", "-d"],
              description:
                "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
              args: { name: "duplicate-detection-history-time-window" },
            },
            {
              name: "--enable-batched-operations",
              description:
                "Value that indicates whether server-side batched operations are enabled",
              args: {
                name: "enable-batched-operations",
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
              name: "--enable-express",
              description:
                "Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage",
              args: {
                name: "enable-express",
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
              name: "--enable-ordering",
              description:
                "Value that indicates whether the topic supports ordering",
              args: {
                name: "enable-ordering",
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
              name: "--enable-partitioning",
              description:
                "Value that indicates whether the topic to be partitioned across multiple message brokers is enabled",
              args: {
                name: "enable-partitioning",
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
              name: ["--max-message-size-in-kilobytes", "--max-message-size"],
              description:
                "Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024",
              args: { name: "max-message-size-in-kilobytes" },
            },
            {
              name: ["--max-size-in-megabytes", "--max-size"],
              description:
                "Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024",
              args: { name: "max-size-in-megabytes" },
            },
            {
              name: ["--topic-name", "--name", "-n"],
              description: "The topic name",
              args: { name: "topic-name" },
            },
            {
              name: "--namespace-name",
              description: "The namespace name",
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
              name: "--status",
              description:
                "Enumerates the possible values for the status of a messaging entity",
              args: {
                name: "status",
                suggestions: [
                  "Active",
                  "Creating",
                  "Deleting",
                  "Disabled",
                  "ReceiveDisabled",
                  "Renaming",
                  "Restoring",
                  "SendDisabled",
                  "Unknown",
                ],
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
          name: "authorization-rule",
          description: "Servicebus topic authorization-rule",
          subcommands: [
            {
              name: "create",
              description:
                "Create an authorization rule for the specified topic",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
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
              description: "Delete a topic authorization rule",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                {
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List authorization rules for a topic",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get the specified authorization rule",
              options: [
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                {
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an authorization rule for the specified topic",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--authorization-rule-name", "--name", "-n"],
                  description: "The authorization rule name",
                  args: { name: "authorization-rule-name" },
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
                  name: "--namespace-name",
                  description: "The namespace name",
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
                    'The rights associated with the rule. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                {
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "keys",
              description: "Servicebus topic authorization-rule keys",
              subcommands: [
                {
                  name: "list",
                  description:
                    "Gets the primary and secondary connection strings for the topic",
                  options: [
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "renew",
                  description:
                    "Regenerates primary or secondary connection strings for the topic",
                  options: [
                    {
                      name: "--key",
                      description: "The access key to regenerate",
                      args: {
                        name: "key",
                        suggestions: ["PrimaryKey", "SecondaryKey"],
                      },
                      isRequired: true,
                    },
                    {
                      name: ["--authorization-rule-name", "--name", "-n"],
                      description: "The authorization rule name",
                      args: { name: "authorization-rule-name" },
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
                        "Optional, if the key value provided, is reset for KeyType value or autogenerate Key value set for keyType",
                      args: { name: "key-value" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                    {
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "subscription",
          description: "Servicebus topic subscription",
          subcommands: [
            {
              name: "create",
              description: "Create a topic subscription",
              options: [
                {
                  name: ["--subscription-name", "--name", "-n"],
                  description: "The subscription name",
                  args: { name: "subscription-name" },
                  isRequired: true,
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--auto-delete-on-idle",
                  description:
                    "ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes",
                  args: { name: "auto-delete-on-idle" },
                },
                {
                  name: "--client-id",
                  description:
                    "Indicates the Client ID of the application that created the client-affine subscription",
                  args: { name: "client-id" },
                },
                {
                  name: ["--dead-letter-on-filter-exceptions", "-f"],
                  description:
                    "Value that indicates whether a subscription has dead letter support on filter evaluation exceptions",
                  args: {
                    name: "dead-letter-on-filter-exceptions",
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
                  name: "--default-message-time-to-live",
                  description:
                    "ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
                  args: { name: "default-message-time-to-live" },
                },
                {
                  name: ["--duplicate-detection-history-time-window", "-d"],
                  description:
                    "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
                  args: { name: "duplicate-detection-history-time-window" },
                },
                {
                  name: "--enable-batched-operations",
                  description:
                    "Value that indicates whether server-side batched operations are enabled",
                  args: {
                    name: "enable-batched-operations",
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
                  name: [
                    "--enable-dead-lettering-on-message-expiration",
                    "--message-expiration",
                  ],
                  description:
                    "A value that indicates whether this queue has dead letter support when a message expires",
                  args: {
                    name: "enable-dead-lettering-on-message-expiration",
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
                  name: "--enable-session",
                  description:
                    "A value that indicates whether the queue supports the concept of sessions",
                  args: {
                    name: "enable-session",
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
                  name: "--forward-dead-lettered-messages-to",
                  description:
                    "Queue/Topic name to forward the Dead Letter message",
                  args: { name: "forward-dead-lettered-messages-to" },
                },
                {
                  name: "--forward-to",
                  description: "Queue/Topic name to forward the messages",
                  args: { name: "forward-to" },
                },
                {
                  name: "--is-client-affine",
                  description:
                    "Value that indicates whether the subscription has an affinity to the client id",
                  args: {
                    name: "is-client-affine",
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
                  name: "--is-durable",
                  description:
                    "For client-affine subscriptions, this value indicates whether the subscription is durable or not",
                  args: {
                    name: "is-durable",
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
                  name: "--is-shared",
                  description:
                    "For client-affine subscriptions, this value indicates whether the subscription is shared or not",
                  args: {
                    name: "is-shared",
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
                  name: "--lock-duration",
                  description:
                    "ISO 8061 lock duration timespan for the subscription. The default value is 1 minute",
                  args: { name: "lock-duration" },
                },
                {
                  name: "--max-delivery-count",
                  description: "Number of maximum deliveries",
                  args: { name: "max-delivery-count" },
                },
                {
                  name: "--status",
                  description:
                    "Enumerates the possible values for the status of a messaging entity",
                  args: {
                    name: "status",
                    suggestions: [
                      "Active",
                      "Creating",
                      "Deleting",
                      "Disabled",
                      "ReceiveDisabled",
                      "Renaming",
                      "Restoring",
                      "SendDisabled",
                      "Unknown",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a subscription from the specified topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--subscription-name", "--name", "-n"],
                  description: "The subscription name",
                  args: { name: "subscription-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                {
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all the subscriptions under a specified topic",
              options: [
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                  isRequired: true,
                },
                {
                  name: "--skip",
                  description:
                    "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
                  args: { name: "skip" },
                },
                {
                  name: "--top",
                  description:
                    "May be used to limit the number of results to the most recent N usageDetails",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a subscription description for the specified topic",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--subscription-name", "--name", "-n"],
                  description: "The subscription name",
                  args: { name: "subscription-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                {
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update a topic subscription",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--auto-delete-on-idle",
                  description:
                    "ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes",
                  args: { name: "auto-delete-on-idle" },
                },
                {
                  name: "--client-id",
                  description:
                    "Indicates the Client ID of the application that created the client-affine subscription",
                  args: { name: "client-id" },
                },
                {
                  name: ["--dead-letter-on-filter-exceptions", "-f"],
                  description:
                    "Value that indicates whether a subscription has dead letter support on filter evaluation exceptions",
                  args: {
                    name: "dead-letter-on-filter-exceptions",
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
                  name: "--default-message-time-to-live",
                  description:
                    "ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself",
                  args: { name: "default-message-time-to-live" },
                },
                {
                  name: ["--duplicate-detection-history-time-window", "-d"],
                  description:
                    "ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes",
                  args: { name: "duplicate-detection-history-time-window" },
                },
                {
                  name: "--enable-batched-operations",
                  description:
                    "Value that indicates whether server-side batched operations are enabled",
                  args: {
                    name: "enable-batched-operations",
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
                  name: [
                    "--enable-dead-lettering-on-message-expiration",
                    "--message-expiration",
                  ],
                  description:
                    "A value that indicates whether this queue has dead letter support when a message expires",
                  args: {
                    name: "enable-dead-lettering-on-message-expiration",
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
                  name: "--enable-session",
                  description:
                    "A value that indicates whether the queue supports the concept of sessions",
                  args: {
                    name: "enable-session",
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
                  name: "--forward-dead-lettered-messages-to",
                  description:
                    "Queue/Topic name to forward the Dead Letter message",
                  args: { name: "forward-dead-lettered-messages-to" },
                },
                {
                  name: "--forward-to",
                  description: "Queue/Topic name to forward the messages",
                  args: { name: "forward-to" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--is-client-affine",
                  description:
                    "Value that indicates whether the subscription has an affinity to the client id",
                  args: {
                    name: "is-client-affine",
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
                  name: "--is-durable",
                  description:
                    "For client-affine subscriptions, this value indicates whether the subscription is durable or not",
                  args: {
                    name: "is-durable",
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
                  name: "--is-shared",
                  description:
                    "For client-affine subscriptions, this value indicates whether the subscription is shared or not",
                  args: {
                    name: "is-shared",
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
                  name: "--lock-duration",
                  description:
                    "ISO 8061 lock duration timespan for the subscription. The default value is 1 minute",
                  args: { name: "lock-duration" },
                },
                {
                  name: "--max-delivery-count",
                  description: "Number of maximum deliveries",
                  args: { name: "max-delivery-count" },
                },
                {
                  name: ["--subscription-name", "--name", "-n"],
                  description: "The subscription name",
                  args: { name: "subscription-name" },
                },
                {
                  name: "--namespace-name",
                  description: "The namespace name",
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
                  name: "--status",
                  description:
                    "Enumerates the possible values for the status of a messaging entity",
                  args: {
                    name: "status",
                    suggestions: [
                      "Active",
                      "Creating",
                      "Deleting",
                      "Disabled",
                      "ReceiveDisabled",
                      "Renaming",
                      "Restoring",
                      "SendDisabled",
                      "Unknown",
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
                  name: "--topic-name",
                  description: "The topic name",
                  args: { name: "topic-name" },
                },
              ],
            },
            {
              name: "rule",
              description: "Servicebus topic subscription rule",
              subcommands: [
                {
                  name: "create",
                  description: "Create the ServiceBus Rule for Subscription",
                  options: [
                    {
                      name: ["--name", "-n"],
                      description: "Name of Rule",
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
                      name: "--subscription-name",
                      description: "Name of Subscription",
                      args: { name: "subscription-name" },
                      isRequired: true,
                    },
                    {
                      name: "--topic-name",
                      description: "Name of Topic",
                      args: { name: "topic-name" },
                      isRequired: true,
                    },
                    {
                      name: "--action-compatibility-level",
                      description:
                        "This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20",
                      args: { name: "action-compatibility-level" },
                    },
                    {
                      name: "--action-sql-expression",
                      description: "Action SQL expression",
                      args: { name: "action-sql-expression" },
                    },
                    {
                      name: "--content-type",
                      description: "Content type of message",
                      args: { name: "content-type" },
                    },
                    {
                      name: [
                        "--correlation-filter-property",
                        "--correlation-filter",
                      ],
                      description: "Dictionary object for custom filters",
                      args: { name: "correlation-filter-property" },
                    },
                    {
                      name: "--correlation-id",
                      description: "Identifier of correlation",
                      args: { name: "correlation-id" },
                    },
                    {
                      name: "--enable-action-preprocessing",
                      description:
                        "A boolean value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-action-preprocessing",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--enable-correlation-preprocessing",
                      description:
                        "A boolean value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-correlation-preprocessing",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--enable-sql-preprocessing",
                      description:
                        "A boolean value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-sql-preprocessing",
                        suggestions: ["false", "true"],
                      },
                    },
                    {
                      name: "--filter-sql-expression",
                      description: "SQL expression. e.g. myproperty=test",
                      args: { name: "filter-sql-expression" },
                    },
                    {
                      name: "--filter-type",
                      description: "Rule Filter types",
                      args: {
                        name: "filter-type",
                        suggestions: ["CorrelationFilter", "SqlFilter"],
                      },
                    },
                    {
                      name: "--label",
                      description: "Application specific label",
                      args: { name: "label" },
                    },
                    {
                      name: "--message-id",
                      description: "Identifier of message",
                      args: { name: "message-id" },
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: "--reply-to",
                      description: "Address of the queue to reply to",
                      args: { name: "reply-to" },
                    },
                    {
                      name: "--reply-to-session-id",
                      description: "Session identifier to reply to",
                      args: { name: "reply-to-session-id" },
                    },
                    {
                      name: "--session-id",
                      description: "Session identifier",
                      args: { name: "session-id" },
                    },
                    {
                      name: "--to",
                      description: "Address to send to",
                      args: { name: "to" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete an existing rule",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--rule-name", "--name", "-n"],
                      description: "The rule name",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                    {
                      name: "--subscription-name",
                      description: "The subscription name",
                      args: { name: "subscription-name" },
                    },
                    {
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all the rules within given topic-subscription",
                  options: [
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                      name: "--subscription-name",
                      description: "The subscription name",
                      args: { name: "subscription-name" },
                      isRequired: true,
                    },
                    {
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
                      isRequired: true,
                    },
                    {
                      name: "--skip",
                      description:
                        "Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls",
                      args: { name: "skip" },
                    },
                    {
                      name: "--top",
                      description:
                        "May be used to limit the number of results to the most recent N usageDetails",
                      args: { name: "top" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Get the description for the specified rule",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--rule-name", "--name", "-n"],
                      description: "The rule name",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
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
                    {
                      name: "--subscription-name",
                      description: "The subscription name",
                      args: { name: "subscription-name" },
                    },
                    {
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Update a new rule and updates an existing rule",
                  options: [
                    {
                      name: "--action-compatibility-level",
                      description:
                        "This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20",
                      args: { name: "action-compatibility-level" },
                    },
                    {
                      name: [
                        "--enable-action-preprocessing",
                        "--action-preprocessing",
                      ],
                      description:
                        "Value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-action-preprocessing",
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
                      name: "--action-sql-expression",
                      description: "SQL expression. e.g. MyProperty='ABC'",
                      args: { name: "action-sql-expression" },
                    },
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: "--compatibility-level",
                      description:
                        "This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20",
                      args: { name: "compatibility-level" },
                    },
                    {
                      name: "--content-type",
                      description: "Content type of the message",
                      args: { name: "content-type" },
                    },
                    {
                      name: "--correlation-id",
                      description: "Identifier of the correlation",
                      args: { name: "correlation-id" },
                    },
                    {
                      name: [
                        "--enable-correlation-preprocessing",
                        "--requires-preprocessing",
                      ],
                      description:
                        "Value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-correlation-preprocessing",
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
                      name: ["--enable-sql-preprocessing", "-f"],
                      description:
                        "Value that indicates whether the rule action requires preprocessing",
                      args: {
                        name: "enable-sql-preprocessing",
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
                      name: ["--filter-sql-expression", "--sql-expression"],
                      description: "The SQL expression. e.g. MyProperty='ABC'",
                      args: { name: "filter-sql-expression" },
                    },
                    {
                      name: "--filter-type",
                      description:
                        "Filter type that is evaluated against a BrokeredMessage",
                      args: {
                        name: "filter-type",
                        suggestions: ["CorrelationFilter", "SqlFilter"],
                      },
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
                      name: "--label",
                      description: "Application specific label",
                      args: { name: "label" },
                    },
                    {
                      name: "--message-id",
                      description: "Identifier of the message",
                      args: { name: "message-id" },
                    },
                    {
                      name: ["--rule-name", "--name", "-n"],
                      description: "The rule name",
                      args: { name: "rule-name" },
                    },
                    {
                      name: "--namespace-name",
                      description: "The namespace name",
                      args: { name: "namespace-name" },
                    },
                    {
                      name: "--properties",
                      description:
                        'Dictionary object for custom filters Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "properties" },
                    },
                    {
                      name: "--remove",
                      description:
                        "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                      args: { name: "remove" },
                    },
                    {
                      name: "--reply-to",
                      description: "Address of the queue to reply to",
                      args: { name: "reply-to" },
                    },
                    {
                      name: "--reply-to-session-id",
                      description: "Session identifier to reply to",
                      args: { name: "reply-to-session-id" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: "--session-id",
                      description: "Session identifier",
                      args: { name: "session-id" },
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
                      name: "--subscription-name",
                      description: "The subscription name",
                      args: { name: "subscription-name" },
                    },
                    {
                      name: "--to",
                      description: "Address to send to",
                      args: { name: "to" },
                    },
                    {
                      name: "--topic-name",
                      description: "The topic name",
                      args: { name: "topic-name" },
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
