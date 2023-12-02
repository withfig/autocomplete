const completion: Fig.Spec = {
  name: "devcenter",
  description: "Manage resources with devcenter",
  subcommands: [
    {
      name: "admin",
      description: "Manage devcenter admin resources",
      subcommands: [
        {
          name: "attached-network",
          description: "Manage attached networks",
          subcommands: [
            {
              name: "create",
              description: "Create an attached network connection",
              options: [
                {
                  name: ["--attached-network-connection-name", "--name", "-n"],
                  description: "The name of the attached network connection",
                  args: { name: "attached-network-connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                  isRequired: true,
                },
                {
                  name: "--network-connection-id",
                  description:
                    "The resource ID of the network connection you want to attach",
                  args: { name: "network-connection-id" },
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
              description: "Delete an attached network connection",
              options: [
                {
                  name: ["--attached-network-connection-name", "--name", "-n"],
                  description: "The name of the attached network connection",
                  args: { name: "attached-network-connection-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the attached network connections configured for a dev center or project",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an attached network connection configured for a dev center or project",
              options: [
                {
                  name: ["--attached-network-connection-name", "--name", "-n"],
                  description: "The name of the attached network connection",
                  args: { name: "attached-network-connection-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: ["--attached-network-connection-name", "--name", "-n"],
                  description: "The name of the attached network connection",
                  args: { name: "attached-network-connection-name" },
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
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
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
          name: "catalog",
          description: "Manage catalogs",
          subcommands: [
            {
              name: "create",
              description: "Create a catalog",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                  name: "--ado-git",
                  description:
                    'Properties for an Azure DevOps catalog type. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ado-git" },
                },
                {
                  name: "--git-hub",
                  description:
                    'Properties for a GitHub catalog type. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "git-hub" },
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
              description: "Delete a catalog resource",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List catalogs for a dev center",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
              description: "Get a catalog",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
              name: "sync",
              description: "Syncs templates for a template source",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
              name: "update",
              description: "Update a catalog",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--ado-git",
                  description:
                    'Properties for an Azure DevOps catalog type. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "ado-git" },
                },
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                  name: "--git-hub",
                  description:
                    'Properties for a GitHub catalog type. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "git-hub" },
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
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
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
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
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
          name: "check-name-availability",
          description: "Manage check name availability",
          subcommands: [
            {
              name: "execute",
              description: "Check the availability of name for resource",
              options: [
                {
                  name: "--name",
                  description:
                    "The name of the resource for which availability needs to be checked",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--type",
                  description: "The resource type",
                  args: { name: "type" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "devbox-definition",
          description: "Manage dev box definitions",
          subcommands: [
            {
              name: "create",
              description: "Create a dev box definition",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                  isRequired: true,
                },
                {
                  name: ["--devbox-definition-name", "--name", "-n"],
                  description: "The name of the dev box definition",
                  args: { name: "devbox-definition-name" },
                  isRequired: true,
                },
                {
                  name: "--image-reference",
                  description:
                    'Image reference information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "image-reference" },
                  isRequired: true,
                },
                {
                  name: "--os-storage-type",
                  description:
                    "The storage type used for the operating system disk of dev boxes created using this definition",
                  args: { name: "os-storage-type" },
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
                  name: "--sku",
                  description:
                    'The SKU for dev boxes created using this definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "sku" },
                  isRequired: true,
                },
                {
                  name: "--hibernate-support",
                  description:
                    "Indicates whether dev boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate",
                  args: {
                    name: "hibernate-support",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a dev box definition",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--devbox-definition-name", "--name", "-n"],
                  description: "The name of the dev box definition",
                  args: { name: "devbox-definition-name" },
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List dev box definitions configured for a dev center or project",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a dev box definition configured for a dev center or a project",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--devbox-definition-name", "--name", "-n"],
                  description: "The name of the dev box definition",
                  args: { name: "devbox-definition-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Update a dev box definition",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--devbox-definition-name", "--name", "-n"],
                  description: "The name of the dev box definition",
                  args: { name: "devbox-definition-name" },
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
                  name: "--hibernate-support",
                  description:
                    "Indicates whether dev boxes created with this definition are capable of hibernation. Not all images are capable of supporting hibernation. To find out more see https://aka.ms/devbox/hibernate",
                  args: {
                    name: "hibernate-support",
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
                  name: "--image-reference",
                  description:
                    'Image reference information. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "image-reference" },
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
                  name: "--os-storage-type",
                  description:
                    "The storage type used for the operating system disk of dev boxes created using this definition",
                  args: { name: "os-storage-type" },
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
                  name: "--sku",
                  description:
                    'The SKU for dev boxes created using this definition. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "sku" },
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
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--devbox-definition-name", "--name", "-n"],
                  description: "The name of the dev box definition",
                  args: { name: "devbox-definition-name" },
                },
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
          name: "devcenter",
          description: "Manage dev centers",
          subcommands: [
            {
              name: "create",
              description: "Create a dev center",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the dev center",
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
                  name: "--identity-type",
                  description:
                    "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-u"],
                  description:
                    'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-assigned-identities" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a dev center",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the dev center",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all dev centers in a resource group",
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
              description: "Get a dev center",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the dev center",
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
              description: "Update a dev center",
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
                  name: "--identity-type",
                  description:
                    "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
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
                  description: "The name of the dev center",
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-u"],
                  description:
                    'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-assigned-identities" },
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
                  name: ["--name", "-n"],
                  description: "The name of the dev center",
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
          name: "environment-type",
          description: "Manage environment types",
          subcommands: [
            {
              name: "create",
              description: "Create an environment type",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                  isRequired: true,
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an environment type",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List environment types for the devcenter",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
              description: "Get an environment type",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
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
              description: "Update an environment type",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
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
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
          ],
        },
        {
          name: "gallery",
          description: "Manage galleries",
          subcommands: [
            {
              name: "create",
              description: "Create a gallery",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                  isRequired: true,
                },
                {
                  name: ["--gallery-name", "--name", "-n"],
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
                  isRequired: true,
                },
                {
                  name: "--gallery-resource-id",
                  description:
                    "The resource ID of the backing Azure Compute Gallery",
                  args: { name: "gallery-resource-id" },
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
              description: "Delete a gallery",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--gallery-name", "--name", "-n"],
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List galleries for a dev center",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
              description: "Get a gallery",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: ["--gallery-name", "--name", "-n"],
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
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
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: ["--gallery-name", "--name", "-n"],
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
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
          ],
        },
        {
          name: "image",
          description: "Manage images",
          subcommands: [
            {
              name: "list",
              description: "List images for a dev center or gallery",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
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
                  name: "--gallery-name",
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
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
              description: "Get a gallery image",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--gallery-name",
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--image-name", "--name", "-n"],
                  description: "The name of the image",
                  args: { name: "image-name" },
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
        {
          name: "image-version",
          description: "Manage image versions",
          subcommands: [
            {
              name: "list",
              description: "List versions for an image",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                  isRequired: true,
                },
                {
                  name: "--gallery-name",
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
                  isRequired: true,
                },
                {
                  name: "--image-name",
                  description: "The name of the image",
                  args: { name: "image-name" },
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
              description: "Get an image version",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--gallery-name",
                  description: "The name of the gallery",
                  args: { name: "gallery-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--image-name",
                  description: "The name of the image",
                  args: { name: "image-name" },
                },
                {
                  name: ["--version-name", "--name", "-n"],
                  description: "The version of the image",
                  args: { name: "version-name" },
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
        {
          name: "network-connection",
          description: "Manage network connections",
          subcommands: [
            {
              name: "create",
              description: "Create a network connection",
              options: [
                {
                  name: "--domain-join-type",
                  description: "AAD Join type",
                  args: {
                    name: "domain-join-type",
                    suggestions: ["AzureADJoin", "HybridAzureADJoin"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
                  name: "--subnet-id",
                  description: "The subnet to attach dev boxes to",
                  args: { name: "subnet-id" },
                  isRequired: true,
                },
                {
                  name: "--domain-name",
                  description: "Active Directory domain name",
                  args: { name: "domain-name" },
                },
                {
                  name: "--domain-password",
                  description:
                    "The password for the account used to join domain. If value is blank it's asked from the tty",
                  args: { name: "domain-password" },
                },
                {
                  name: "--domain-username",
                  description:
                    "The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com",
                  args: { name: "domain-username" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: ["--networking-resource-group-name", "-r"],
                  description:
                    "The name for resource group where NICs will be placed",
                  args: { name: "networking-resource-group-name" },
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
                  name: "--organization-unit",
                  description: "Active Directory domain Organization Unit (OU)",
                  args: { name: "organization-unit" },
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
              description: "Delete a network connection",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              description: "List network connections",
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
              name: "list-health-check",
              description: "List health check status details",
              options: [
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              name: "list-outbound-network-dependencies-endpoint",
              description:
                "List the endpoints that agents may call as part of Dev Box service administration. These FQDNs should be allowed for outbound access in order for the Dev Box service to function",
              options: [
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              name: "run-health-check",
              description:
                "Triggers a new health check run. The execution and health check result can be tracked via the network Connection health check details",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              name: "show",
              description: "Get a network connection",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              name: "show-health-check",
              description: "Get health check status details",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
              description: "Update a network connection",
              options: [
                {
                  name: "--domain-name",
                  description: "Active Directory domain name",
                  args: { name: "domain-name" },
                },
                {
                  name: "--domain-password",
                  description:
                    "The password for the account used to join domain. If value is blank it's asked from the tty",
                  args: { name: "domain-password" },
                },
                {
                  name: "--domain-username",
                  description:
                    "The username of an Active Directory account (user or service account) that has permissions to create computer objects in Active Directory. Required format: admin@contoso.com",
                  args: { name: "domain-username" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
                  name: "--organization-unit",
                  description: "Active Directory domain Organization Unit (OU)",
                  args: { name: "organization-unit" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--subnet-id",
                  description: "The subnet to attach dev boxes to",
                  args: { name: "subnet-id" },
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
                  name: ["--network-connection-name", "--name", "-n"],
                  description:
                    "Name of the network connection that can be applied to a pool",
                  args: { name: "network-connection-name" },
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
          name: "pool",
          description: "Manage pools",
          subcommands: [
            {
              name: "create",
              description: "Create a pool",
              options: [
                {
                  name: ["--devbox-definition-name", "-d"],
                  description:
                    "Name of a dev box definition in parent project of this pool",
                  args: { name: "devbox-definition-name" },
                  isRequired: true,
                },
                {
                  name: "--local-administrator",
                  description:
                    "Indicates whether owners of dev boxes in this pool are added as local administrators on the dev box",
                  args: {
                    name: "local-administrator",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--network-connection-name", "-c"],
                  description:
                    "Name of a network connection in parent project of this pool",
                  args: { name: "network-connection-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
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
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "List pools for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              name: "run-health-check",
              description: "Triggers a refresh of the pool status",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
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
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Get a pool",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Update a pool",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--devbox-definition-name", "-d"],
                  description:
                    "Name of a dev box definition in parent project of this pool",
                  args: { name: "devbox-definition-name" },
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
                  name: "--local-administrator",
                  description:
                    "Indicates whether owners of dev boxes in this pool are added as local administrators on the dev box",
                  args: {
                    name: "local-administrator",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--network-connection-name", "-c"],
                  description:
                    "Name of a network connection in parent project of this pool",
                  args: { name: "network-connection-name" },
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
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: ["--pool-name", "--name", "-n"],
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
          name: "project",
          description: "Manage projects",
          subcommands: [
            {
              name: "create",
              description: "Create a project",
              options: [
                {
                  name: "--dev-center-id",
                  description: "Resource ID of an associated dev center",
                  args: { name: "dev-center-id" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the project",
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
                  name: "--description",
                  description: "Description of the project",
                  args: { name: "description" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--max-dev-boxes-per-user",
                  description:
                    "When specified, limits the maximum number of dev boxes a single user can create across all pools in the project. This will have no effect on existing dev boxes when reduced",
                  args: { name: "max-dev-boxes-per-user" },
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a project",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the project",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List projects",
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
              description: "Get a project",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the project",
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
              description: "Update a project",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "Description of the project",
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
                  name: "--max-dev-boxes-per-user",
                  description:
                    "When specified, limits the maximum number of dev boxes a single user can create across all pools in the project. This will have no effect on existing dev boxes when reduced",
                  args: { name: "max-dev-boxes-per-user" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the project",
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
                  name: ["--name", "-n"],
                  description: "The name of the project",
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
          name: "project-allowed-environment-type",
          description: "Manage project allowed environment types",
          subcommands: [
            {
              name: "list",
              description: "List allowed environment types for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Get an allowed environment type",
              options: [
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
        {
          name: "project-environment-type",
          description: "Manage project environment types",
          subcommands: [
            {
              name: "create",
              description: "Create a project environment type",
              options: [
                {
                  name: "--deployment-target-id",
                  description:
                    "ID of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription",
                  args: { name: "deployment-target-id" },
                  isRequired: true,
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: "--status",
                  description:
                    "Defines whether this environment type can be used in this project",
                  args: {
                    name: "status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                {
                  name: "--identity-type",
                  description:
                    "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
                    ],
                  },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "The geo-location where the resource lives. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--roles",
                  description:
                    'A map of roles to assign to the environment creator. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "roles" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-u"],
                  description:
                    'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-assigned-identities" },
                },
                {
                  name: "--user-role-assignments",
                  description:
                    'Role assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-role-assignments" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a project environment type",
              options: [
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "List environment types for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Get a project environment type",
              options: [
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Update a project environment type",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--deployment-target-id",
                  description:
                    "ID of a subscription that the environment type will be mapped to. The environment's resources will be deployed into this subscription",
                  args: { name: "deployment-target-id" },
                },
                {
                  name: ["--environment-type-name", "--name", "-n"],
                  description: "The name of the environment type",
                  args: { name: "environment-type-name" },
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
                  name: "--identity-type",
                  description:
                    "Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed)",
                  args: {
                    name: "identity-type",
                    suggestions: [
                      "None",
                      "SystemAssigned",
                      "SystemAssigned",
                      "UserAssigned",
                      "UserAssigned",
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
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: "--roles",
                  description:
                    'A map of roles to assign to the environment creator. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "roles" },
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
                    "Defines whether this environment type can be used in this project",
                  args: {
                    name: "status",
                    suggestions: ["Disabled", "Enabled"],
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
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identities", "-u"],
                  description:
                    'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-assigned-identities" },
                },
                {
                  name: "--user-role-assignments",
                  description:
                    'Role assignments created on environment backing resources. This is a mapping from a user object ID to an object of role definition IDs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "user-role-assignments" },
                },
              ],
            },
          ],
        },
        {
          name: "schedule",
          description: "Manage schedules",
          subcommands: [
            {
              name: "create",
              description: "Create a schedule",
              options: [
                {
                  name: "--pool-name",
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: "--time",
                  description:
                    "The target time to trigger the action. The format is HH:MM",
                  args: { name: "time" },
                  isRequired: true,
                },
                {
                  name: "--time-zone",
                  description:
                    "The IANA timezone id at which the schedule should execute",
                  args: { name: "time-zone" },
                  isRequired: true,
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
                  name: "--state",
                  description:
                    "Indicates whether or not this scheduled task is enabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a schedule",
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
                  name: "--pool-name",
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              name: "show",
              description: "Get a schedule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--pool-name",
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
              description: "Update a schedule",
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
                  name: "--pool-name",
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
                  name: "--state",
                  description:
                    "Indicates whether or not this scheduled task is enabled",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--time",
                  description:
                    "The target time to trigger the action. The format is HH:MM",
                  args: { name: "time" },
                },
                {
                  name: "--time-zone",
                  description:
                    "The IANA timezone id at which the schedule should execute",
                  args: { name: "time-zone" },
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
                  name: "--pool-name",
                  description: "Name of the pool",
                  args: { name: "pool-name" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
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
          name: "sku",
          description: "Manage skus",
          subcommands: [
            {
              name: "list",
              description:
                "List the Microsoft.DevCenter SKUs available in a subscription",
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
              ],
            },
          ],
        },
        {
          name: "usage",
          description: "Manage usages",
          subcommands: [
            {
              name: "list",
              description:
                "List the current usages and limits in this location for the provided subscription",
              options: [
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
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
          ],
        },
      ],
    },
    {
      name: "dev",
      description: "Manage devcenter developer resources",
      subcommands: [
        {
          name: "catalog",
          description: "Manage catalogs",
          subcommands: [
            {
              name: "list",
              description: "List all of the catalogs available for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "show",
              description: "Get the specified catalog within the project",
              options: [
                {
                  name: ["--catalog-name", "--name", "-n"],
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "dev-box",
          description: "Manage dev boxes",
          subcommands: [
            {
              name: "create",
              description: "Create a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--pool-name", "--pool"],
                  description:
                    "The name of the dev box pool this machine belongs to",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "delay-action",
              description: "Delay an action",
              options: [
                {
                  name: "--action-name",
                  description:
                    "The name of an action that will take place on a dev box",
                  args: { name: "action-name" },
                  isRequired: true,
                },
                {
                  name: "--delay-time",
                  description:
                    "The delayed timespan from the scheduled action time. Format HH:MM",
                  args: { name: "delay-time" },
                  isRequired: true,
                },
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "delay-all-actions",
              description: "Delay all actions",
              options: [
                {
                  name: "--delay-time",
                  description:
                    "The delayed timespan from the earliest scheduled time of all actions. Format HH:MM",
                  args: { name: "delay-time" },
                  isRequired: true,
                },
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
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
                "List dev boxes for a user, list dev boxes in the dev center for a project and user, or list dev boxes that the caller has access to in the dev center",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "list-action",
              description: "List actions on a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "list-operation",
              description:
                "Lists operations on the dev box which have occurred within the past 90 days",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "repair",
              description:
                "Attempts automated repair steps to resolve common problems on a Dev Box. The dev box may restart during this operation",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "restart",
              description: "Restart a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "show-action",
              description: "Get an action",
              options: [
                {
                  name: "--action-name",
                  description:
                    "The name of an action that will take place on a dev box",
                  args: { name: "action-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "show-operation",
              description: "Get an operation on a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: "--operation-id",
                  description: "The id of the operation on a dev box",
                  args: { name: "operation-id" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "show-remote-connection",
              description: "Get remote connection info",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "skip-action",
              description: "Skip an action",
              options: [
                {
                  name: "--action-name",
                  description:
                    "The name of an action that will take place on a dev box",
                  args: { name: "action-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "start",
              description: "Start a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "stop",
              description: "Stop a dev box",
              options: [
                {
                  name: ["--dev-box-name", "--name", "-n"],
                  description: "The name of a dev box",
                  args: { name: "dev-box-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--hibernate",
                  description: "Optional parameter to hibernate the dev box",
                  args: { name: "hibernate", suggestions: ["false", "true"] },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
          ],
        },
        {
          name: "environment",
          description: "Manage environments",
          subcommands: [
            {
              name: "create",
              description: "Create an environment",
              options: [
                {
                  name: "--catalog-name",
                  description: "Name of the catalog",
                  args: { name: "catalog-name" },
                  isRequired: true,
                },
                {
                  name: ["--environment-definition-name", "-e"],
                  description: "Name of the environment definition",
                  args: { name: "environment-definition-name" },
                  isRequired: true,
                },
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "The name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: "--environment-type",
                  description: "Environment type",
                  args: { name: "environment-type" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--parameters",
                  description:
                    "Parameters object for the environment. Expected value: json-string/json-file/@json-file",
                  args: { name: "parameters" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an environment and all its associated resources",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "The name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "deploy",
              description: "Update an environment",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "The name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--parameters",
                  description:
                    "Parameters object for the environment. Expected value: json-string/json-file/@json-file",
                  args: { name: "parameters" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the environments for a project or list the environments for a user within a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an environment",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "The name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
            {
              name: "update",
              description: "Update an environment",
              options: [
                {
                  name: ["--environment-name", "--name", "-n"],
                  description: "The name of the environment",
                  args: { name: "environment-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--parameters",
                  description:
                    "Parameters object for the environment. Expected value: json-string/json-file/@json-file",
                  args: { name: "parameters" },
                },
                {
                  name: "--user-id",
                  description:
                    "The AAD object id of the user. If value is 'me', the identity is taken from the authentication context",
                  args: { name: "user-id" },
                },
              ],
            },
          ],
        },
        {
          name: "environment-definition",
          description: "Manage environment definitions",
          subcommands: [
            {
              name: "list",
              description:
                "List all environment definitions available within a catalog or list all environment definitions available for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: "--catalog-name",
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "show",
              description: "Get an environment definition from a catalog",
              options: [
                {
                  name: "--catalog-name",
                  description: "The name of the catalog",
                  args: { name: "catalog-name" },
                  isRequired: true,
                },
                {
                  name: ["--definition-name", "--name", "-n"],
                  description: "The name of the environment definition",
                  args: { name: "definition-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "environment-type",
          description: "Manage environment types",
          subcommands: [
            {
              name: "list",
              description:
                "List all environment types configured for a project",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "pool",
          description: "Manage pools",
          subcommands: [
            {
              name: "list",
              description: "List available pools",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a pool",
              options: [
                {
                  name: ["--pool-name", "--name", "-n"],
                  description: "The name of a pool of dev boxes",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "project",
          description: "Manage projects",
          subcommands: [
            {
              name: "list",
              description: "List all projects",
              options: [
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a project",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "The dev center project upon which to execute operations",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
              ],
            },
          ],
        },
        {
          name: "schedule",
          description: "Manage schedules",
          subcommands: [
            {
              name: "list",
              description: "List schedules",
              options: [
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
                },
                {
                  name: ["--pool-name", "--pool"],
                  description: "The name of a pool of dev boxes",
                  args: { name: "pool-name" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a schedule",
              options: [
                {
                  name: ["--pool-name", "--pool"],
                  description: "The name of a pool of dev boxes",
                  args: { name: "pool-name" },
                  isRequired: true,
                },
                {
                  name: ["--project-name", "--project"],
                  description:
                    "The name of the project. Use az configure -d project=<project_name> to configure a default",
                  args: { name: "project-name" },
                  isRequired: true,
                },
                {
                  name: ["--dev-center-name", "--dev-center", "-d"],
                  description:
                    "The name of the dev center. Use az configure -d dev-center=<dev_center_name> to configure a default",
                  args: { name: "dev-center-name" },
                },
                {
                  name: "--endpoint",
                  description:
                    "The API endpoint for the developer resources. Use az configure -d endpoint=<endpoint_uri> to configure a default",
                  args: { name: "endpoint" },
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
