const completion: Fig.Spec = {
  name: "logic",
  description: "Manage logic",
  subcommands: [
    {
      name: "integration-account",
      description: "Manage logic integration account",
      subcommands: [
        {
          name: "create",
          description: "Creates or updates an integration account",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration account name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--integration-service-environment",
              description:
                "The integration service environment. See https://github.com/Azure/azure-cli-extensions/blob/main/src/logic/README.md For more information",
              args: { name: "integration-service-environment" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--sku",
              description: "The integration account sku",
              args: { name: "sku" },
            },
            {
              name: "--state",
              description: "The workflow state",
              args: {
                name: "state",
                suggestions: [
                  "Completed",
                  "Deleted",
                  "Disabled",
                  "Enabled",
                  "NotSpecified",
                  "Suspended",
                ],
              },
            },
            {
              name: "--tags",
              description: "The resource tags",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an integration account",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration account name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "import",
          description: "Import an integration account from a JSON file",
          options: [
            {
              name: "--input-path",
              description: "Path to a intergration-account JSON file",
              args: { name: "input-path" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The integration account name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
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
              name: "--sku",
              description: "The integration account sku",
              args: { name: "sku" },
            },
            {
              name: "--tags",
              description: "The resource tags",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of integration accounts by subscription",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description: "The number of items to be included in the result",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets an integration account",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration account name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Updates an integration account",
          options: [
            {
              name: ["--name", "-n"],
              description: "The integration account name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--integration-service-environment",
              description:
                "The integration service environment. See https://github.com/Azure/azure-cli-extensions/blob/main/src/logic/README.md For more information",
              args: { name: "integration-service-environment" },
            },
            {
              name: "--sku",
              description: "The integration account sku",
              args: { name: "sku" },
            },
            {
              name: "--state",
              description: "The workflow state",
              args: {
                name: "state",
                suggestions: [
                  "Completed",
                  "Deleted",
                  "Disabled",
                  "Enabled",
                  "NotSpecified",
                  "Suspended",
                ],
              },
            },
            {
              name: "--tags",
              description: "The resource tags",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "map",
          description: "Manage logic integration account map",
          subcommands: [
            {
              name: "create",
              description:
                "Create an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value",
              options: [
                {
                  name: "--integration-account",
                  description: "The integration account name",
                  args: { name: "integration-account" },
                  isRequired: true,
                },
                {
                  name: ["--map-name", "--name", "-n"],
                  description: "The integration account map name",
                  args: { name: "map-name" },
                  isRequired: true,
                },
                {
                  name: "--map-type",
                  description: "The map type",
                  args: {
                    name: "map-type",
                    suggestions: [
                      "Liquid",
                      "NotSpecified",
                      "Xslt",
                      "Xslt20",
                      "Xslt30",
                    ],
                  },
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
                  name: "--content-type",
                  description: "The content type",
                  args: { name: "content-type" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The resource location",
                  args: { name: "location" },
                },
                {
                  name: "--map-content",
                  description: "The content",
                  args: { name: "map-content" },
                },
                {
                  name: "--tags",
                  description:
                    'The resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an integration account map",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--integration-account",
                  description: "The integration account name",
                  args: { name: "integration-account" },
                },
                {
                  name: ["--map-name", "--name", "-n"],
                  description: "The integration account map name",
                  args: { name: "map-name" },
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
              description: "List a list of integration account maps",
              options: [
                {
                  name: "--integration-account",
                  description: "The integration account name",
                  args: { name: "integration-account" },
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
                  name: "--filter",
                  description:
                    "The filter to apply on the operation. Options for filters include: MapType",
                  args: { name: "filter" },
                },
                {
                  name: "--top",
                  description:
                    "The number of items to be included in the result",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an integration account map",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--integration-account",
                  description: "The integration account name",
                  args: { name: "integration-account" },
                },
                {
                  name: ["--map-name", "--name", "-n"],
                  description: "The integration account map name",
                  args: { name: "map-name" },
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
                "Update an integration account map. If the map is larger than 4 MB, you need to store the map in an Azure blob and use the blob's Shared Access Signature (SAS) URL as the 'contentLink' property value",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--content-type",
                  description: "The content type",
                  args: { name: "content-type" },
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
                  name: "--integration-account",
                  description: "The integration account name",
                  args: { name: "integration-account" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The resource location",
                  args: { name: "location" },
                },
                {
                  name: "--map-content",
                  description: "The content",
                  args: { name: "map-content" },
                },
                {
                  name: ["--map-name", "--name", "-n"],
                  description: "The integration account map name",
                  args: { name: "map-name" },
                },
                {
                  name: "--map-type",
                  description: "The map type",
                  args: {
                    name: "map-type",
                    suggestions: [
                      "Liquid",
                      "NotSpecified",
                      "Xslt",
                      "Xslt20",
                      "Xslt30",
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
                    'The resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workflow",
      description: "Logic workflow",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates a workflow using a JSON file for the defintion",
          options: [
            {
              name: "--definition",
              description:
                "Path to a workflow defintion JSON file (see https://github.com/Azure/azure-cli-extensions/blob/main/src/logic/README.md for more info on this). This JSON format should match what the logic app design tool exports",
              args: { name: "definition" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The workflow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--access-control",
              description:
                "The access control configuration controls access to this workflow. See https://github.com/Azure/azure-cli-extensions/blob/main/src/logic/README.md for more information",
              args: { name: "access-control" },
            },
            {
              name: "--endpoints-configuration",
              description: "The endpoints configuration",
              args: { name: "endpoints-configuration" },
            },
            {
              name: "--integration-account",
              description: "The integration account",
              args: { name: "integration-account" },
            },
            {
              name: "--integration-service-environment",
              description: "The integration service environment",
              args: { name: "integration-service-environment" },
            },
            {
              name: "--state",
              description: "The state",
              args: {
                name: "state",
                suggestions: [
                  "Completed",
                  "Deleted",
                  "Disabled",
                  "Enabled",
                  "NotSpecified",
                  "Suspended",
                ],
              },
            },
            {
              name: "--tags",
              description: "The resource tags",
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a workflow",
          options: [
            {
              name: ["--name", "-n"],
              description: "The workflow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "Gets a list of workflows by subscription",
          options: [
            {
              name: "--filter",
              description:
                "The filter to apply on the operation. Options for filters include: State, Trigger, and ReferencedResourceId",
              args: { name: "filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--top",
              description: "The number of items to be included in the result",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets a workflow",
          options: [
            {
              name: ["--name", "-n"],
              description: "The workflow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Updates a workflow",
          options: [
            {
              name: ["--name", "-n"],
              description: "The workflow name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--definition",
              description:
                "Path to a workflow defintion JSON file (see https://github.com/Azure/azure-cli-extensions/blob/main/src/logic/README.md for more info on this). This JSON format should match what the logic app design tool exports",
              args: { name: "definition" },
            },
            {
              name: "--state",
              description: "The state",
              args: {
                name: "state",
                suggestions: [
                  "Completed",
                  "Deleted",
                  "Disabled",
                  "Enabled",
                  "NotSpecified",
                  "Suspended",
                ],
              },
            },
            {
              name: "--tags",
              description: "The resource tags",
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
