const completion: Fig.Spec = {
  name: "dns-resolver",
  description: "Manage Dns Resolver",
  subcommands: [
    {
      name: "create",
      description: "Create a DNS resolver",
      options: [
        {
          name: ["--dns-resolver-name", "--name", "-n"],
          description: "The name of the DNS resolver",
          args: { name: "dns-resolver-name" },
          isRequired: true,
        },
        {
          name: "--id",
          description: "Resource ID",
          args: { name: "id" },
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
          name: "--if-match",
          description:
            "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
          args: { name: "if-match" },
        },
        {
          name: "--if-none-match",
          description:
            "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
          args: { name: "if-none-match" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
            'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "delete",
      description:
        "Deletes a DNS resolver. WARNING: This operation cannot be undone",
      options: [
        {
          name: ["--dns-resolver-name", "--name", "-n"],
          description: "The name of the DNS resolver",
          args: { name: "dns-resolver-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--if-match",
          description:
            "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
          args: { name: "if-match" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
        "Lists DNS resolver resource IDs linked to a virtual network. And Lists DNS resolvers within a resource group. And Lists DNS resolvers in all resource groups of a subscription",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--top",
          description:
            "The maximum number of results to return. If not specified, returns up to 100 results",
          args: { name: "top" },
        },
        {
          name: "--virtual-network-name",
          description: "The name of the virtual network",
          args: { name: "virtual-network-name" },
        },
      ],
    },
    {
      name: "list-by-virtual-network",
      description:
        "Lists DNS resolver resource IDs linked to a virtual network",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--virtual-network-name",
          description: "The name of the virtual network",
          args: { name: "virtual-network-name" },
          isRequired: true,
        },
        {
          name: "--top",
          description:
            "The maximum number of results to return. If not specified, returns up to 100 results",
          args: { name: "top" },
        },
      ],
    },
    {
      name: "show",
      description: "Gets properties of a DNS resolver",
      options: [
        {
          name: ["--dns-resolver-name", "--name", "-n"],
          description: "The name of the DNS resolver",
          args: { name: "dns-resolver-name" },
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
      description: "Updates a DNS resolver",
      options: [
        {
          name: ["--dns-resolver-name", "--name", "-n"],
          description: "The name of the DNS resolver",
          args: { name: "dns-resolver-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--if-match",
          description:
            "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
          args: { name: "if-match" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
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
          name: ["--dns-resolver-name", "--name", "-n"],
          description: "The name of the DNS resolver",
          args: { name: "dns-resolver-name" },
        },
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
      name: "forwarding-rule",
      description: "Manage forwarding rule with dns resolver",
      subcommands: [
        {
          name: "create",
          description: "Create a forwarding rule in a DNS forwarding ruleset",
          options: [
            {
              name: "--domain-name",
              description: "The domain name for the forwarding rule",
              args: { name: "domain-name" },
              isRequired: true,
            },
            {
              name: ["--forwarding-rule-name", "--name", "-n"],
              description: "The name of the forwarding rule",
              args: { name: "forwarding-rule-name" },
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
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
              isRequired: true,
            },
            {
              name: "--target-dns-servers",
              description:
                'DNS servers to forward the DNS query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "target-dns-servers" },
              isRequired: true,
            },
            {
              name: "--forwarding-rule-state",
              description: "The state of forwarding rule",
              args: {
                name: "forwarding-rule-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: "--metadata",
              description:
                'Metadata attached to the forwarding rule. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metadata" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a forwarding rule in a DNS forwarding ruleset. WARNING: This operation cannot be undone",
          options: [
            {
              name: ["--forwarding-rule-name", "--name", "-n"],
              description: "The name of the forwarding rule",
              args: { name: "forwarding-rule-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
          description: "Lists forwarding rules in a DNS forwarding ruleset",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
              isRequired: true,
            },
            {
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets properties of a forwarding rule in a DNS forwarding ruleset",
          options: [
            {
              name: ["--forwarding-rule-name", "--name", "-n"],
              description: "The name of the forwarding rule",
              args: { name: "forwarding-rule-name" },
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
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
          description: "Update a forwarding rule in a DNS forwarding ruleset",
          options: [
            {
              name: ["--forwarding-rule-name", "--name", "-n"],
              description: "The name of the forwarding rule",
              args: { name: "forwarding-rule-name" },
            },
            {
              name: "--forwarding-rule-state",
              description: "The state of forwarding rule",
              args: {
                name: "forwarding-rule-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--metadata",
              description:
                'Metadata attached to the forwarding rule. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metadata" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-dns-servers",
              description:
                'DNS servers to forward the DNS query to. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "target-dns-servers" },
            },
          ],
        },
      ],
    },
    {
      name: "forwarding-ruleset",
      description: "Manage forwarding ruleset with dns resolver",
      subcommands: [
        {
          name: "create",
          description: "Create a DNS forwarding ruleset",
          options: [
            {
              name: ["--dns-forwarding-ruleset-name", "--name", "-n"],
              description: "The name of the DNS forwarding ruleset",
              args: { name: "dns-forwarding-ruleset-name" },
              isRequired: true,
            },
            {
              name: "--outbound-endpoints",
              description:
                'The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "outbound-endpoints" },
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
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
              args: { name: "if-none-match" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted",
          options: [
            {
              name: ["--dns-forwarding-ruleset-name", "--name", "-n"],
              description: "The name of the DNS forwarding ruleset",
              args: { name: "dns-forwarding-ruleset-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
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
            "Lists DNS forwarding ruleset resource IDs attached to a virtual network. And Lists DNS forwarding rulesets within a resource group. And Lists DNS forwarding rulesets in all resource groups of a subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
            {
              name: "--virtual-network-name",
              description: "The name of the virtual network",
              args: { name: "virtual-network-name" },
            },
          ],
        },
        {
          name: "list-by-virtual-network",
          description:
            "Lists DNS forwarding ruleset resource IDs attached to a virtual network",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--virtual-network-name",
              description: "The name of the virtual network",
              args: { name: "virtual-network-name" },
              isRequired: true,
            },
            {
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a DNS forwarding ruleset properties",
          options: [
            {
              name: ["--dns-forwarding-ruleset-name", "--name", "-n"],
              description: "The name of the DNS forwarding ruleset",
              args: { name: "dns-forwarding-ruleset-name" },
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
          description: "Update a DNS forwarding ruleset",
          options: [
            {
              name: ["--dns-forwarding-ruleset-name", "--name", "-n"],
              description: "The name of the DNS forwarding ruleset",
              args: { name: "dns-forwarding-ruleset-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: ["--dns-forwarding-ruleset-name", "--name", "-n"],
              description: "The name of the DNS forwarding ruleset",
              args: { name: "dns-forwarding-ruleset-name" },
            },
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
      name: "inbound-endpoint",
      description: "Manage inbound endpoint with dns resolver",
      subcommands: [
        {
          name: "create",
          description: "Create an inbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
              isRequired: true,
            },
            {
              name: ["--inbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the inbound endpoint for the DNS resolver",
              args: { name: "inbound-endpoint-name" },
              isRequired: true,
            },
            {
              name: "--ip-configurations",
              description:
                'IP configurations for the inbound endpoint. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "ip-configurations" },
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
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
              args: { name: "if-none-match" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an inbound endpoint for a DNS resolver. WARNING: This operation cannot be undone",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--inbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the inbound endpoint for the DNS resolver",
              args: { name: "inbound-endpoint-name" },
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
          description: "Lists inbound endpoints for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
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
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets properties of an inbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--inbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the inbound endpoint for the DNS resolver",
              args: { name: "inbound-endpoint-name" },
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
          description: "Updates an inbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--inbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the inbound endpoint for the DNS resolver",
              args: { name: "inbound-endpoint-name" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            { name: "--exists", description: "Wait until the resource exists" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--inbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the inbound endpoint for the DNS resolver",
              args: { name: "inbound-endpoint-name" },
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
      ],
    },
    {
      name: "outbound-endpoint",
      description: "Manage outbound endpoint with dns resolver",
      subcommands: [
        {
          name: "create",
          description: "Create an outbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
              isRequired: true,
            },
            {
              name: "--id",
              description: "Resource ID",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["--outbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the outbound endpoint for the DNS resolver",
              args: { name: "outbound-endpoint-name" },
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
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
              args: { name: "if-none-match" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes an outbound endpoint for a DNS resolver. WARNING: This operation cannot be undone",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--outbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the outbound endpoint for the DNS resolver",
              args: { name: "outbound-endpoint-name" },
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
          description: "Lists outbound endpoints for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
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
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets properties of an outbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--outbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the outbound endpoint for the DNS resolver",
              args: { name: "outbound-endpoint-name" },
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
          description: "Updates an outbound endpoint for a DNS resolver",
          options: [
            {
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--outbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the outbound endpoint for the DNS resolver",
              args: { name: "outbound-endpoint-name" },
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
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
              name: "--dns-resolver-name",
              description: "The name of the DNS resolver",
              args: { name: "dns-resolver-name" },
            },
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
              name: ["--outbound-endpoint-name", "--name", "-n"],
              description:
                "The name of the outbound endpoint for the DNS resolver",
              args: { name: "outbound-endpoint-name" },
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
      name: "vnet-link",
      description: "Manage vnet link with dns resolver",
      subcommands: [
        {
          name: "create",
          description:
            "Create a virtual network link to a DNS forwarding ruleset",
          options: [
            {
              name: "--id",
              description: "Resource ID",
              args: { name: "id" },
              isRequired: true,
            },
            {
              name: ["--virtual-network-link-name", "--name", "-n"],
              description: "The name of the virtual network link",
              args: { name: "virtual-network-link-name" },
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
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
              isRequired: true,
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--if-none-match",
              description:
                "Set to '*' to allow a new resource to be created, but to prevent updating an existing resource. Other values will be ignored",
              args: { name: "if-none-match" },
            },
            {
              name: "--metadata",
              description:
                'Metadata attached to the forwarding rule. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metadata" },
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
            "Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be undone",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: ["--virtual-network-link-name", "--name", "-n"],
              description: "The name of the virtual network link",
              args: { name: "virtual-network-link-name" },
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
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
            "Lists virtual network links to a DNS forwarding ruleset",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
              isRequired: true,
            },
            {
              name: "--top",
              description:
                "The maximum number of results to return. If not specified, returns up to 100 results",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets properties of a virtual network link to a DNS forwarding ruleset",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtual-network-link-name", "--name", "-n"],
              description: "The name of the virtual network link",
              args: { name: "virtual-network-link-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
            "Updates a virtual network link to a DNS forwarding ruleset",
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
              name: "--if-match",
              description:
                "ETag of the resource. Omit this value to always overwrite the current resource. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes",
              args: { name: "if-match" },
            },
            {
              name: "--metadata",
              description:
                'Metadata attached to the forwarding rule. Expect value: KEY1=VALUE1 KEY2=VALUE2 ... Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "metadata" },
            },
            {
              name: ["--virtual-network-link-name", "--name", "-n"],
              description: "The name of the virtual network link",
              args: { name: "virtual-network-link-name" },
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
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
              name: ["--virtual-network-link-name", "--name", "-n"],
              description: "The name of the virtual network link",
              args: { name: "virtual-network-link-name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--ruleset-name",
              description: "The name of the DNS forwarding ruleset",
              args: { name: "ruleset-name" },
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
