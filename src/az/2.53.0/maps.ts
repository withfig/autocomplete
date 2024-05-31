const completion: Fig.Spec = {
  name: "maps",
  description: "Manage Azure Maps",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Maps accounts",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--sku", "-s"],
              description:
                "The name of the SKU, in standard format (such as S0)",
              args: { name: "sku", suggestions: ["G2", "S0", "S1"] },
              isRequired: true,
            },
            {
              name: "--accept-tos",
              description:
                "You must agree to the License and Privacy Statement to create an account",
              args: { name: "accept-tos" },
            },
            {
              name: "--disable-local-auth",
              description:
                "Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--kind",
              description: "Get or Set Kind property",
              args: { name: "kind", suggestions: ["Gen1", "Gen2"] },
            },
            {
              name: "--linked-resources",
              description:
                "Sets the resources to be used for Managed Identities based operations for the Map account resource",
              args: { name: "linked-resources" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--type",
              description: "The identity type",
              args: {
                name: "type",
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
              name: "--user-identities",
              description:
                "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Expected value: json-string/@json-file",
              args: { name: "user-identities" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Maps Account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
            "Show all maps accounts in a subscription or in a resource group",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a maps account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
            "Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku, Tags, Properties",
          options: [
            {
              name: ["--sku", "-s"],
              description:
                "The name of the SKU, in standard format (such as S0)",
              args: { name: "sku", suggestions: ["G2", "S0", "S1"] },
              isRequired: true,
            },
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--disable-local-auth",
              description:
                "Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage",
              args: {
                name: "disable-local-auth",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--kind",
              description: "Get or Set Kind property",
              args: { name: "kind", suggestions: ["Gen1", "Gen2"] },
            },
            {
              name: "--linked-resources",
              description:
                "Sets the resources to be used for Managed Identities based operations for the Map account resource",
              args: { name: "linked-resources" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--type",
              description: "The identity type",
              args: {
                name: "type",
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
              name: "--user-identities",
              description:
                "The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. Expected value: json-string/@json-file",
              args: { name: "user-identities" },
            },
          ],
        },
        {
          name: "keys",
          description: "Manage Azure Maps account keys",
          subcommands: [
            {
              name: "list",
              description:
                "Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "The name of the maps account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "renew",
              description:
                "Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately",
              options: [
                {
                  name: ["--account-name", "--name", "-n"],
                  description: "The name of the maps account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--key",
                  description:
                    "Whether the operation refers to the primary or secondary key",
                  args: { name: "key", suggestions: ["primary", "secondary"] },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Resource group name",
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
      name: "creator",
      description: "Manage creator with maps",
      subcommands: [
        {
          name: "create",
          description:
            "Create a Maps Creator resource. Creator resource will manage Azure resources required to populate a custom set of mapping data. It requires an account to exist before it can be created",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--creator-name",
              description: "The name of the Maps Creator instance",
              args: { name: "creator-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--storage-units",
              description:
                "The storage units to be allocated. Integer values from 1 to 100, inclusive",
              args: { name: "storage-units" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
          name: "delete",
          description: "Delete a Maps Creator resource",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--creator-name",
              description: "The name of the Maps Creator instance",
              args: { name: "creator-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
          description: "Get all Creator instances for an Azure Maps Account",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get a Maps Creator resource",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--creator-name",
              description: "The name of the Maps Creator instance",
              args: { name: "creator-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
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
            "Updates the Maps Creator resource. Only a subset of the parameters may be updated after creation, such as Tags",
          options: [
            {
              name: ["--account-name", "--name", "-n"],
              description: "The name of the maps account",
              args: { name: "account-name" },
            },
            {
              name: "--creator-name",
              description: "The name of the Maps Creator instance",
              args: { name: "creator-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--resource-group", "-g"],
              description: "Resource group name",
              args: { name: "resource-group" },
            },
            {
              name: "--storage-units",
              description:
                "The storage units to be allocated. Integer values from 1 to 100, inclusive",
              args: { name: "storage-units" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
      ],
    },
    {
      name: "map",
      description: "Manage map with maps",
      subcommands: [
        {
          name: "list-operation",
          description:
            "List operations available for the Maps Resource Provider",
        },
      ],
    },
  ],
};

export default completion;
