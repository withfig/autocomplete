const completion: Fig.Spec = {
  name: "palo-alto",
  description: "Manage palo-alto networks resource",
  subcommands: [
    {
      name: "cloudngfw",
      description: "Manage cloudngfw resource",
      subcommands: [
        {
          name: "firewall",
          description: "Manage cloudngfw firewall resource",
          subcommands: [
            {
              name: "create",
              description: "Create a FirewallResource",
              options: [
                {
                  name: "--dns-settings",
                  description:
                    'DNS settings for Firewall Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "dns-settings" },
                  isRequired: true,
                },
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
                  isRequired: true,
                },
                {
                  name: "--marketplace-details",
                  description:
                    'Marketplace details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "marketplace-details" },
                  isRequired: true,
                },
                {
                  name: "--network-profile",
                  description:
                    'Network settings Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "network-profile" },
                  isRequired: true,
                },
                {
                  name: "--plan-data",
                  description:
                    'Billing plan information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "plan-data" },
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
                  name: "--associated-rulestack",
                  description:
                    'Associated Rulestack Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "associated-rulestack" },
                },
                {
                  name: "--front-end-settings",
                  description:
                    'Frontend settings for Firewall Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "front-end-settings" },
                },
                {
                  name: "--identity",
                  description:
                    'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "identity" },
                },
                {
                  name: "--is-panorama-managed",
                  description:
                    "Panorama Managed: Default is False. Default will be CloudSec managed",
                  args: {
                    name: "is-panorama-managed",
                    suggestions: ["FALSE", "TRUE"],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
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
                  name: "--pan-etag",
                  description: "PanEtag info",
                  args: { name: "pan-etag" },
                },
                {
                  name: "--panorama-config",
                  description:
                    'Panorama Configuration Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "panorama-config" },
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
              description: "Delete a FirewallResource",
              options: [
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
              ],
            },
            {
              name: "list",
              description: "List FirewallResource resources by subscription ID",
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
              name: "save-log-profile",
              description: "Save Log Profile for Firewall",
              options: [
                {
                  name: "--application-insights",
                  description:
                    'Application Insight details Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "application-insights" },
                },
                {
                  name: "--common-destination",
                  description:
                    'Common destination configurations Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "common-destination" },
                },
                {
                  name: ["--decrypt-log-destination", "--decrypt-destination"],
                  description:
                    'Decrypt destination configurations Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "decrypt-log-destination" },
                },
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--log-option",
                  description: "Log option SAME/INDIVIDUAL",
                  args: {
                    name: "log-option",
                    suggestions: ["INDIVIDUAL_DESTINATION", "SAME_DESTINATION"],
                  },
                },
                {
                  name: "--log-type",
                  description: "One of possible log type",
                  args: {
                    name: "log-type",
                    suggestions: [
                      "AUDIT",
                      "DECRYPTION",
                      "DLP",
                      "THREAT",
                      "TRAFFIC",
                      "WILDFIRE",
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
                  name: ["--threat-log-destination", "--threat-destination"],
                  description:
                    'Threat destination configurations Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "threat-log-destination" },
                },
                {
                  name: ["--traffic-log-destination", "--traffic-destination"],
                  description:
                    'Traffic destination configurations Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "traffic-log-destination" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a FirewallResource",
              options: [
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
              name: "show-log-profile",
              description: "Get Log Profile for Firewall",
              options: [
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
              name: "show-support-info",
              description: "Support info for firewall",
              options: [
                {
                  name: "--email",
                  description:
                    "Email address on behalf of which this API called",
                  args: { name: "email" },
                },
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
              description: "Update a FirewallResource",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
                    'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "identity" },
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
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: ["--firewall-name", "--name", "-n"],
                  description: "Firewall resource name",
                  args: { name: "firewall-name" },
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
              name: "status",
              description: "Manage cloudngfw firewall status resource",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List FirewallStatusResource resources by Firewalls",
                  options: [
                    {
                      name: ["--firewall-name", "--name", "-n"],
                      description: "Firewall resource name",
                      args: { name: "firewall-name" },
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
                  name: "default",
                  description:
                    "Manage cloudngfw firewall status default resource",
                  subcommands: [
                    {
                      name: "show",
                      description: "Get a FirewallStatusResource",
                      options: [
                        {
                          name: ["--firewall-name", "--name", "-n"],
                          description: "Firewall resource name",
                          args: { name: "firewall-name" },
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
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "local-rulestack",
          description: "Manage local-rulestack resource",
          subcommands: [
            {
              name: "commit",
              description: "Commit rulestack configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--local-rulestack-name",
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              name: "create",
              description: "Create a LocalRulestackResource",
              options: [
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
                  name: ["--associated-subscriptions", "--associated-subs"],
                  description:
                    'Subscription scope of global rulestack Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "associated-subscriptions" },
                },
                {
                  name: "--default-mode",
                  description: "Mode for default rules creation",
                  args: {
                    name: "default-mode",
                    suggestions: ["FIREWALL", "IPS", "NONE"],
                  },
                },
                {
                  name: "--description",
                  description: "Rulestack description",
                  args: { name: "description" },
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
                  name: "--min-app-id-version",
                  description: "Minimum version",
                  args: { name: "min-app-id-version" },
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
                  name: "--pan-etag",
                  description: "PanEtag info",
                  args: { name: "pan-etag" },
                },
                {
                  name: "--pan-location",
                  description:
                    "Rulestack Location, Required for GlobalRulestacks, Not for LocalRulestacks",
                  args: { name: "pan-location" },
                },
                {
                  name: "--scope",
                  description: "Rulestack Type",
                  args: { name: "scope", suggestions: ["GLOBAL", "LOCAL"] },
                },
                {
                  name: "--security-services",
                  description:
                    'Security Profile Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "security-services" },
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
              description: "Delete a LocalRulestackResource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              description:
                "List LocalRulestackResource resources by subscription ID",
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
              name: "list-advanced-security-object",
              description: "Get the list of advanced security objects",
              options: [
                {
                  name: "--type",
                  description: "LocalRulestack resource type",
                  args: { name: "type", suggestions: ["feeds", "urlCustom"] },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--skip",
                  description: "LocalRulestack resource skip",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "LocalRulestack resource top",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "list-app-id",
              description: "List of AppIds for LocalRulestack ApiVersion",
              options: [
                {
                  name: "--app-id-version",
                  description: "LocalRulestack resource app-id-version",
                  args: { name: "app-id-version" },
                },
                {
                  name: "--app-prefix",
                  description: "LocalRulestack resource app-prefix",
                  args: { name: "app-prefix" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--skip",
                  description: "LocalRulestack resource skip",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "LocalRulestack resource top",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "list-country",
              description: "List of countries for Rulestack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--skip",
                  description: "LocalRulestack resource skip",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "LocalRulestack resource top",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "list-firewall",
              description: "List of Firewalls associated with Rulestack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              name: "list-predefined-url-category",
              description: "List predefined URL categories for rulestack",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--skip",
                  description: "LocalRulestack resource skip",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "LocalRulestack resource top",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "list-security-service",
              description: "List the security services for rulestack",
              options: [
                {
                  name: "--type",
                  description: "LocalRulestack resource type",
                  args: {
                    name: "type",
                    suggestions: [
                      "antiSpyware",
                      "antiVirus",
                      "dnsSubscription",
                      "fileBlocking",
                      "ipsVulnerability",
                      "urlFiltering",
                    ],
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
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--skip",
                  description: "LocalRulestack resource skip",
                  args: { name: "skip" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "LocalRulestack resource top",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "revert",
              description: "Revert rulestack configuration",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              description: "Get a LocalRulestackResource",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              name: "show-change-log",
              description: "Get changelog",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              name: "show-support-info",
              description: "Support info for rulestack",
              options: [
                {
                  name: "--email",
                  description:
                    "Email address on behalf of which this API called",
                  args: { name: "email" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              description: "Update a LocalRulestackResource",
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
                    'The managed service identities assigned to this resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "identity" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
                  name: ["--local-rulestack-name", "--name", "-n"],
                  description: "LocalRulestack resource name",
                  args: { name: "local-rulestack-name" },
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
              name: "certificate",
              description: "Manage local-rulestack certificate resource",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a CertificateObjectLocalRulestackResource",
                  options: [
                    {
                      name: [
                        "--certificate-self-signed",
                        "--certificate-signed",
                      ],
                      description: "Use certificate self signed",
                      args: {
                        name: "certificate-self-signed",
                        suggestions: ["FALSE", "TRUE"],
                      },
                      isRequired: true,
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Certificate name",
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
                      name: "--audit-comment",
                      description: "Comment for this object",
                      args: { name: "audit-comment" },
                    },
                    {
                      name: "--certificate-signer-id",
                      description:
                        "Resource Id of certificate signer, to be populated only when certificateSelfSigned is false",
                      args: { name: "certificate-signer-id" },
                    },
                    {
                      name: "--description",
                      description: "User description for this object",
                      args: { name: "description" },
                    },
                    {
                      name: "--etag",
                      description:
                        "Read only string representing last create or update",
                      args: { name: "etag" },
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
                  description:
                    "Delete a CertificateObjectLocalRulestackResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Certificate name",
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
                  name: "list",
                  description:
                    "List CertificateObjectLocalRulestackResource resources by LocalRulestacks",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
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
                  description: "Get a CertificateObjectLocalRulestackResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Certificate name",
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
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Certificate name",
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
              ],
            },
            {
              name: "fqdnlist",
              description: "Manage local-rulestack fqdnlist resource",
              subcommands: [
                {
                  name: "create",
                  description: "Create a FqdnListLocalRulestackResource",
                  options: [
                    {
                      name: "--fqdn-list",
                      description:
                        'Fqdn list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "fqdn-list" },
                      isRequired: true,
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Fqdn list name",
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
                      name: "--audit-comment",
                      description: "Comment for this object",
                      args: { name: "audit-comment" },
                    },
                    {
                      name: "--description",
                      description: "Fqdn object description",
                      args: { name: "description" },
                    },
                    {
                      name: "--etag",
                      description: "Etag info",
                      args: { name: "etag" },
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
                  description: "Delete a FqdnListLocalRulestackResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Fqdn list name",
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
                  name: "list",
                  description:
                    "List FqdnListLocalRulestackResource resources by LocalRulestacks",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
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
                  description: "Get a FqdnListLocalRulestackResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Fqdn list name",
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
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Fqdn list name",
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
              ],
            },
            {
              name: "local-rule",
              description: "Manage local-rulestack local-rule resource",
              subcommands: [
                {
                  name: "create",
                  description: "Create a LocalRulesResource",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                      isRequired: true,
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                      description: "Rule name",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--action-type",
                      description: "Rule action",
                      args: {
                        name: "action-type",
                        suggestions: [
                          "Allow",
                          "DenyResetBoth",
                          "DenyResetServer",
                          "DenySilent",
                        ],
                      },
                    },
                    {
                      name: "--applications",
                      description:
                        'Array of rule applications Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "applications" },
                    },
                    {
                      name: "--audit-comment",
                      description: "Rule comment",
                      args: { name: "audit-comment" },
                    },
                    {
                      name: "--category",
                      description:
                        'Rule category Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "category" },
                    },
                    {
                      name: "--decryption-rule-type",
                      description: "Enable or disable decryption",
                      args: {
                        name: "decryption-rule-type",
                        suggestions: [
                          "None",
                          "SSLInboundInspection",
                          "SSLOutboundInspection",
                        ],
                      },
                    },
                    {
                      name: "--description",
                      description: "Rule description",
                      args: { name: "description" },
                    },
                    {
                      name: "--destination",
                      description:
                        'Destination address Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "destination" },
                    },
                    {
                      name: "--enable-logging",
                      description: "Enable or disable logging",
                      args: {
                        name: "enable-logging",
                        suggestions: ["DISABLED", "ENABLED"],
                      },
                    },
                    {
                      name: "--etag",
                      description: "Etag info",
                      args: { name: "etag" },
                    },
                    {
                      name: [
                        "--inbound-inspection-certificate",
                        "--inbound-certificate",
                      ],
                      description: "Inbound Inspection Certificate",
                      args: { name: "inbound-inspection-certificate" },
                    },
                    {
                      name: "--negate-destination",
                      description: "Cidr should not be 'any'",
                      args: {
                        name: "negate-destination",
                        suggestions: ["FALSE", "TRUE"],
                      },
                    },
                    {
                      name: "--negate-source",
                      description: "Cidr should not be 'any'",
                      args: {
                        name: "negate-source",
                        suggestions: ["FALSE", "TRUE"],
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
                      name: "--protocol",
                      description:
                        "Any, application-default, TCP:number, UDP:number",
                      args: { name: "protocol" },
                    },
                    {
                      name: "--protocol-port-list",
                      description:
                        'Prot port list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "protocol-port-list" },
                    },
                    {
                      name: "--rule-state",
                      description: "State of this rule",
                      args: {
                        name: "rule-state",
                        suggestions: ["DISABLED", "ENABLED"],
                      },
                    },
                    {
                      name: "--source",
                      description:
                        'Source address Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "source" },
                    },
                    {
                      name: "--tags",
                      description:
                        'Tag for rule Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "tags" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a LocalRulesResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
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
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                    "List LocalRulesResource resources by LocalRulestacks",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
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
                  name: "refresh-counter",
                  description: "Refresh counters",
                  options: [
                    {
                      name: "--firewall-name",
                      description: "Firewall resource name",
                      args: { name: "firewall-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                  name: "reset-counter",
                  description: "Reset counters",
                  options: [
                    {
                      name: "--firewall-name",
                      description: "Firewall resource name",
                      args: { name: "firewall-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                  description: "Get a LocalRulesResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                  name: "show-counter",
                  description: "Get counters",
                  options: [
                    {
                      name: "--firewall-name",
                      description: "Firewall resource name",
                      args: { name: "firewall-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: "--priority",
                      description: "Local Rule priority",
                      args: { name: "priority" },
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
              name: "prefixlist",
              description: "Manage local-rulestack prefixlist resource",
              subcommands: [
                {
                  name: "create",
                  description: "Create a PrefixListResource",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Local Rule priority",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: "--prefix-list",
                      description:
                        'Prefix list Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                      args: { name: "prefix-list" },
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
                      name: "--audit-comment",
                      description: "Comment for this object",
                      args: { name: "audit-comment" },
                    },
                    {
                      name: "--description",
                      description: "Prefix description",
                      args: { name: "description" },
                    },
                    {
                      name: "--etag",
                      description: "Etag info",
                      args: { name: "etag" },
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
                  description: "Delete a PrefixListResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Local Rule priority",
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
                  name: "list",
                  description:
                    "List PrefixListResource resources by LocalRulestacks",
                  options: [
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
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
                  description: "Get a PrefixListResource",
                  options: [
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Local Rule priority",
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
                      name: "--local-rulestack-name",
                      description: "LocalRulestack resource name",
                      args: { name: "local-rulestack-name" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Local Rule priority",
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
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
