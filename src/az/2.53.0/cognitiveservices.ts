const completion: Fig.Spec = {
  name: "cognitiveservices",
  description:
    "Manage Azure Cognitive Services accounts.\n\n\t\tThis article lists the Azure CLI commands for Azure Cognitive Services account and subscription management only. Refer to the documentation at https://docs.microsoft.com/azure/cognitive-services/ for individual services to learn how to use the APIs and supported SDKs",
  subcommands: [
    {
      name: "account",
      description:
        "Manage Azure Cognitive Services accounts.\n\n\t\tThis article lists the Azure CLI commands for Azure Cognitive Services account and subscription management only. Refer to the documentation at https://docs.microsoft.com/azure/cognitive-services/ for individual services to learn how to use the APIs and supported SDKs",
      subcommands: [
        {
          name: "create",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: "--kind",
              description:
                "The API name of cognitive services account. value from: az cognitiveservices account list-kinds",
              args: { name: "kind" },
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
              description: "Cognitive service account name",
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
              name: ["--sku-name", "--sku"],
              description:
                "Name of the Sku of Cognitive Services account/deployment. value from: az cognitiveservices account list-skus",
              args: { name: "sku-name" },
              isRequired: true,
            },
            {
              name: "--api-properties",
              description:
                "Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account",
              args: { name: "api-properties" },
            },
            {
              name: "--assign-identity",
              description:
                "Generate and assign an Azure Active Directory Identity for this account",
            },
            {
              name: "--custom-domain",
              description:
                "User domain assigned to the account. Name is the CNAME source",
              args: { name: "custom-domain" },
            },
            {
              name: "--encryption",
              description:
                "The encryption properties for this resource, in JSON format",
              args: { name: "encryption" },
            },
            {
              name: "--storage",
              description:
                "The storage accounts for this resource, in JSON array format",
              args: { name: "storage" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--yes",
              description: "Do not prompt for terms confirmation",
            },
          ],
        },
        {
          name: "delete",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "list",
          description: "Manage Azure Cognitive Services accounts",
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
          name: "list-deleted",
          description: "List soft-deleted Azure Cognitive Services accounts",
        },
        {
          name: "list-kinds",
          description:
            "List all valid kinds for Azure Cognitive Services account",
        },
        {
          name: "list-models",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "list-skus",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: "--kind",
              description:
                "The API name of cognitive services account. value from: az cognitiveservices account list-kinds",
              args: { name: "kind" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
              args: { name: "name" },
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
          name: "list-usage",
          description: "List usages for Azure Cognitive Services account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "purge",
          description: "Purge a soft-deleted Azure Cognitive Services account",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "recover",
          description:
            "Recover a soft-deleted Azure Cognitive Services account",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "show",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "show-deleted",
          description: "Show a soft-deleted Azure Cognitive Services account",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
          ],
        },
        {
          name: "update",
          description: "Manage Azure Cognitive Services accounts",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cognitive service account name",
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
              name: "--api-properties",
              description:
                "Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account",
              args: { name: "api-properties" },
            },
            {
              name: "--custom-domain",
              description:
                "User domain assigned to the account. Name is the CNAME source",
              args: { name: "custom-domain" },
            },
            {
              name: "--encryption",
              description:
                "The encryption properties for this resource, in JSON format",
              args: { name: "encryption" },
            },
            {
              name: ["--sku-name", "--sku"],
              description:
                "Name of the Sku of Cognitive Services account/deployment. value from: az cognitiveservices account list-skus",
              args: { name: "sku-name" },
            },
            {
              name: "--storage",
              description:
                "The storage accounts for this resource, in JSON array format",
              args: { name: "storage" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "commitment-plan",
          description:
            "Manage commitment plans for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a commitment plan for Azure Cognitive Services account",
              options: [
                {
                  name: "--auto-renew",
                  description:
                    "A boolean indicating whether to apply auto renew",
                  args: { name: "auto-renew", suggestions: ["false", "true"] },
                  isRequired: true,
                },
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: "--hosting-model",
                  description: "Cognitive Services account hosting model",
                  args: {
                    name: "hosting-model",
                    suggestions: [
                      "ConnectedContainer",
                      "DisconnectedContainer",
                      "ProvisionedWeb",
                      "Web",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--plan-type",
                  description:
                    "Cognitive Services account commitment plan type",
                  args: { name: "plan-type" },
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
                  name: "--current-count",
                  description:
                    "Cognitive Services account commitment plan current commitment period count",
                  args: { name: "current-count" },
                },
                {
                  name: "--current-tier",
                  description:
                    "Cognitive Services account commitment plan current commitment period tier",
                  args: { name: "current-tier" },
                },
                {
                  name: "--next-count",
                  description:
                    "Cognitive Services account commitment plan next commitment period count",
                  args: { name: "next-count" },
                },
                {
                  name: "--next-tier",
                  description:
                    "Cognitive Services account commitment plan next commitment period tier",
                  args: { name: "next-tier" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a commitment plan from Azure Cognitive Services account",
              options: [
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "list",
              description:
                "Show all commitment plans from Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "show",
              description:
                "Show a commitment plan from Azure Cognitive Services account",
              options: [
                {
                  name: "--commitment-plan-name",
                  description:
                    "Cognitive Services account commitment plan name",
                  args: { name: "commitment-plan-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
          ],
        },
        {
          name: "deployment",
          description:
            "Manage deployments for Azure Cognitive Services accounts",
          subcommands: [
            {
              name: "create",
              description:
                "Create a deployment for Azure Cognitive Services account",
              options: [
                {
                  name: "--model-format",
                  description:
                    "Cognitive Services account deployment model format",
                  args: { name: "model-format" },
                  isRequired: true,
                },
                {
                  name: "--model-name",
                  description:
                    "Cognitive Services account deployment model name",
                  args: { name: "model-name" },
                  isRequired: true,
                },
                {
                  name: "--model-version",
                  description:
                    "Cognitive Services account deployment model version",
                  args: { name: "model-version" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: ["--sku-capacity", "--capacity"],
                  description:
                    "Capacity value of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-capacity" },
                },
                {
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
                {
                  name: "--model-source",
                  description:
                    "Cognitive Services account deployment model source",
                  args: { name: "model-source" },
                },
                {
                  name: ["--scale-settings-capacity", "--scale-capacity"],
                  description:
                    "Cognitive Services account deployment scale settings capacity",
                  args: { name: "scale-settings-capacity" },
                },
                {
                  name: ["--scale-settings-scale-type", "--scale-type"],
                  description:
                    "Cognitive Services account deployment scale settings scale type",
                  args: {
                    name: "scale-settings-scale-type",
                    suggestions: ["Manual", "Standard"],
                  },
                },
                {
                  name: ["--sku-name", "--sku"],
                  description:
                    "Name of the Sku of Cognitive Services account/deployment",
                  args: { name: "sku-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a deployment from Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Show all deployments for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "show",
              description:
                "Show a deployment for Azure Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--deployment-name",
                  description: "Cognitive Services account deployment name",
                  args: { name: "deployment-name" },
                },
              ],
            },
          ],
        },
        {
          name: "identity",
          description: "Manage identity of Cognitive Services accounts",
          subcommands: [
            {
              name: "assign",
              description: "Assign an identity of a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "remove",
              description:
                "Remove the identity from a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "show",
              description: "Show the identity of a Cognitive Services account",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
          ],
        },
        {
          name: "keys",
          description:
            "Manage Azure Cognitive Services accounts.\n\n\t\tThis article lists the Azure CLI commands for Azure Cognitive Services account and subscription management only. Refer to the documentation at https://docs.microsoft.com/azure/cognitive-services/ for individual services to learn how to use the APIs and supported SDKs",
          subcommands: [
            {
              name: "list",
              description: "Manage Azure Cognitive Services accounts",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "regenerate",
              description: "Manage Azure Cognitive Services accounts",
              options: [
                {
                  name: "--key-name",
                  description: "Key name to generate",
                  args: { name: "key-name", suggestions: ["Key1", "Key2"] },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
          ],
        },
        {
          name: "network-rule",
          description: "Manage network rules",
          subcommands: [
            {
              name: "add",
              description: "Add a network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--ip-address",
                  description: "IPv4 address or CIDR range",
                  args: { name: "ip-address" },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
                  args: { name: "subnet" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of a virtual network",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List network rules",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
              ],
            },
            {
              name: "remove",
              description: "Remove a network rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Cognitive service account name",
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
                  name: "--ip-address",
                  description: "IPv4 address or CIDR range",
                  args: { name: "ip-address" },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of subnet. If name is supplied, --vnet-name must be supplied",
                  args: { name: "subnet" },
                },
                {
                  name: "--vnet-name",
                  description: "Name of a virtual network",
                  args: { name: "vnet-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "commitment-tier",
      description: "Manage commitment tiers for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all commitment tiers for Azure Cognitive Services",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "list",
      description: "Manage Azure Cognitive Services accounts",
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
      name: "model",
      description: "Manage model for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all models for Azure Cognitive Services",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "usage",
      description: "Manage usage for Azure Cognitive Services",
      subcommands: [
        {
          name: "list",
          description: "Show all usages for Azure Cognitive Services",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). Default value is None",
              args: { name: "filter" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
