const completion: Fig.Spec = {
  name: "alerts-management",
  description: "Manage Azure Alerts Management Service Resource",
  subcommands: [
    {
      name: "prometheus-rule-group",
      description: "Manage Prometheus Rule Group",
      subcommands: [
        {
          name: "create",
          description: "Create a Prometheus rule group definition",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the rule group",
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
              name: "--rules",
              description:
                'Defines the rules in the Prometheus rule group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "rules" },
              isRequired: true,
            },
            {
              name: "--scopes",
              description:
                'Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "scopes" },
              isRequired: true,
            },
            {
              name: "--cluster-name",
              description: "Apply rule to data from a specific cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--description",
              description: "Rule group description",
              args: { name: "description" },
            },
            {
              name: "--enabled",
              description: "Enable/disable rule group",
              args: {
                name: "enabled",
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
              name: "--interval",
              description:
                "The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes",
              args: { name: "interval" },
            },
            {
              name: ["--location", "-l"],
              description:
                "The geo-location where the resource lives When not specified, the location of the resource group will be used",
              args: { name: "location" },
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
          description: "Delete a Prometheus rule group definition",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the rule group",
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
          name: "list",
          description:
            "List Prometheus all rule group definitions in a subscription",
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
          description: "Get a Prometheus rule group definition",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the rule group",
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
          description: "Update a Prometheus rule group definition",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cluster-name",
              description: "Apply rule to data from a specific cluster",
              args: { name: "cluster-name" },
            },
            {
              name: "--description",
              description: "Rule group description",
              args: { name: "description" },
            },
            {
              name: "--enabled",
              description: "Enable/disable rule group",
              args: {
                name: "enabled",
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
              name: "--interval",
              description:
                "The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes",
              args: { name: "interval" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the rule group",
              args: { name: "name" },
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
              name: "--rules",
              description:
                'Defines the rules in the Prometheus rule group. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "rules" },
            },
            {
              name: "--scopes",
              description:
                'Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "scopes" },
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
      ],
    },
  ],
};

export default completion;
