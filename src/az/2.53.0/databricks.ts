const completion: Fig.Spec = {
  name: "databricks",
  description: "Manage databricks workspaces",
  subcommands: [
    {
      name: "access-connector",
      description: "Commands to manage databricks access connector",
      subcommands: [
        {
          name: "create",
          description: "Create azure databricks accessConnector",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the azure databricks accessConnector",
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
              name: ["--user-assigned-identities", "--identities"],
              description:
                'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned-identities" },
            },
            {
              name: "--identity-type",
              description: "The identity type",
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
          description: "Delete the azure databricks accessConnector",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the azure databricks accessConnector",
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
            "List all the azure databricks accessConnectors within a subscription",
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
          description: "Get an azure databricks accessConnector",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the azure databricks accessConnector",
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
          description: "Update azure databricks accessConnector",
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
              name: ["--user-assigned-identities", "--identities"],
              description:
                'The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: \'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "user-assigned-identities" },
            },
            {
              name: "--identity-type",
              description: "The identity type",
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
              description: "The name of the azure databricks accessConnector",
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
              description: "The name of the azure databricks accessConnector",
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
      name: "workspace",
      description: "Commands to manage databricks workspace",
      subcommands: [
        {
          name: "create",
          description: "Create a new workspace",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
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
              name: "--disk-key-auto-rotation",
              description:
                "Indicate whether the latest key version should be automatically used for Managed Disk Encryption",
              args: {
                name: "disk-key-auto-rotation",
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
              name: "--disk-key-name",
              description: "The name of KeyVault key",
              args: { name: "disk-key-name" },
            },
            {
              name: "--disk-key-vault",
              description: "The URI of KeyVault",
              args: { name: "disk-key-vault" },
            },
            {
              name: "--disk-key-version",
              description: "The version of KeyVault key",
              args: { name: "disk-key-version" },
            },
            {
              name: "--enable-no-public-ip",
              description: "Flag to enable the no public ip feature",
              args: {
                name: "enable-no-public-ip",
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
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. When not specified, the location of the resource group will be used",
              args: { name: "location" },
            },
            {
              name: "--managed-resource-group",
              description:
                "The managed resource group to create. It can be either a name or a resource ID",
              args: { name: "managed-resource-group" },
            },
            {
              name: ["--managed-services-key-name", "--ms-key-name"],
              description: "The name of KeyVault key",
              args: { name: "managed-services-key-name" },
            },
            {
              name: ["--managed-services-key-vault", "--ms-key-vault"],
              description: "The Uri of KeyVault",
              args: { name: "managed-services-key-vault" },
            },
            {
              name: ["--managed-services-key-version", "--ms-key-version"],
              description: "The version of KeyVault key",
              args: { name: "managed-services-key-version" },
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
              name: "--prepare-encryption",
              description:
                "Flag to enable the Managed Identity for managed storage account to prepare for CMK encryption",
              args: {
                name: "prepare-encryption",
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
              name: "--private-subnet",
              description:
                "The name of a Private Subnet within the Virtual Network",
              args: { name: "private-subnet" },
            },
            {
              name: "--public-network-access",
              description:
                "The configuration to set whether network access from public internet to the endpoints are allowed. Allowed values: Disabled, Enabled",
              args: {
                name: "public-network-access",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--public-subnet",
              description:
                "The name of a Public Subnet within the Virtual Network",
              args: { name: "public-subnet" },
            },
            {
              name: "--require-infrastructure-encryption",
              description:
                "Flag to enable the DBFS root file system with secondary layer of encryption with platform managed keys for data at rest",
              args: {
                name: "require-infrastructure-encryption",
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
              name: "--required-nsg-rules",
              description:
                "The type of Nsg rule for internal use only. Allowed values: AllRules, NoAzureDatabricksRules, NoAzureServiceRules",
              args: {
                name: "required-nsg-rules",
                suggestions: [
                  "AllRules",
                  "NoAzureDatabricksRules",
                  "NoAzureServiceRules",
                ],
              },
            },
            {
              name: "--sku",
              description:
                "The SKU tier name. Allowed values: premium, standard, trial",
              args: { name: "sku" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "tags" },
            },
            {
              name: "--vnet",
              description: "Virtual Network name or resource ID",
              args: { name: "vnet" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
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
          description: "Get all the workspaces",
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
          description: "Show the workspace",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
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
          description: "Update the workspace",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--disk-key-auto-rotation",
              description:
                "Indicate whether the latest key version should be automatically used for Managed Disk Encryption",
              args: {
                name: "disk-key-auto-rotation",
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
              name: "--disk-key-name",
              description: "The name of KeyVault key",
              args: { name: "disk-key-name" },
            },
            {
              name: "--disk-key-vault",
              description: "The URI of KeyVault",
              args: { name: "disk-key-vault" },
            },
            {
              name: "--disk-key-version",
              description: "The version of KeyVault key",
              args: { name: "disk-key-version" },
            },
            {
              name: "--enable-no-public-ip",
              description: "Flag to enable the no public ip feature",
              args: {
                name: "enable-no-public-ip",
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
              name: "--key-name",
              description: "The name of KeyVault key",
              args: { name: "key-name" },
            },
            {
              name: "--key-source",
              description:
                "The encryption key source (provider). Allowed values: Default, Microsoft.Keyvault",
              args: {
                name: "key-source",
                suggestions: ["Default", "Microsoft.Keyvault"],
              },
            },
            {
              name: "--key-vault",
              description: "The Uri of KeyVault",
              args: { name: "key-vault" },
            },
            {
              name: "--key-version",
              description:
                "The version of KeyVault key. It is optional when updating CMK",
              args: { name: "key-version" },
            },
            {
              name: ["--managed-services-key-name", "--ms-key-name"],
              description: "The name of KeyVault key",
              args: { name: "managed-services-key-name" },
            },
            {
              name: ["--managed-services-key-vault", "--ms-key-vault"],
              description: "The Uri of KeyVault",
              args: { name: "managed-services-key-vault" },
            },
            {
              name: ["--managed-services-key-version", "--ms-key-version"],
              description: "The version of KeyVault key",
              args: { name: "managed-services-key-version" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the workspace",
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
              name: "--prepare-encryption",
              description:
                "Flag to enable the Managed Identity for managed storage account to prepare for CMK encryption",
              args: {
                name: "prepare-encryption",
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
              name: "--public-network-access",
              description:
                "The network access type for accessing workspace. Set value to disabled to access workspace only via private link",
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
              name: "--required-nsg-rules",
              description:
                "The type of Nsg rule for internal use only. Allowed values: AllRules, NoAzureDatabricksRules, NoAzureServiceRules",
              args: {
                name: "required-nsg-rules",
                suggestions: [
                  "AllRules",
                  "NoAzureDatabricksRules",
                  "NoAzureServiceRules",
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
              name: ["--storage-account-sku-name", "--sa-sku-name"],
              description:
                "Storage account SKU name, ex: Standard_GRS, Standard_LRS. Refer https://aka.ms/storageskus for valid inputs",
              args: { name: "storage-account-sku-name" },
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
                "The SKU tier name. Allowed values: premium, standard, trial",
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
              description: "The name of the workspace",
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
          name: "outbound-endpoint",
          description:
            "Commands to manage endpoints in the specified workspace",
          subcommands: [
            {
              name: "list",
              description:
                "List the list of endpoints that VNET Injected Workspace calls Azure Databricks Control Plane. You must configure outbound access with these endpoints. For more information, see https://docs.microsoft.com/en-us/azure/databricks/administration-guide/cloud-configurations/azure/udr",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "private-endpoint-connection",
          description:
            "Commands to manage databricks workspace private endpoint connections",
          subcommands: [
            {
              name: "create",
              description:
                "Create the status of a private endpoint connection with the specified name",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the private endpoint connection",
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
                  name: "--status",
                  description: "The status of a private endpoint connection",
                  args: {
                    name: "status",
                    suggestions: [
                      "Approved",
                      "Disconnected",
                      "Pending",
                      "Rejected",
                    ],
                  },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--actions-required",
                  description:
                    "Actions required for a private endpoint connection",
                  args: { name: "actions-required" },
                },
                {
                  name: "--description",
                  description:
                    "The description for the current state of a private endpoint connection",
                  args: { name: "description" },
                },
                {
                  name: "--group-ids",
                  description:
                    'GroupIds from the private link service resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "group-ids" },
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
                "Delete private endpoint connection with the specified name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the private endpoint connection",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List private endpoint connections of the workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get a private endpoint connection properties for a workspace",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the private endpoint connection",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the status of a private endpoint connection with the specified name",
              options: [
                {
                  name: "--actions-required",
                  description:
                    "Actions required for a private endpoint connection",
                  args: { name: "actions-required" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description:
                    "The description for the current state of a private endpoint connection",
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
                  name: "--group-ids",
                  description:
                    'GroupIds from the private link service resource. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "group-ids" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the private endpoint connection",
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
                  name: "--status",
                  description: "The status of a private endpoint connection",
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
                  description: "The name of the private endpoint connection",
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "private-link-resource",
          description:
            "Commands to manage databricks workspace private link resources",
          subcommands: [
            {
              name: "list",
              description: "List private link resources for a given workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the specified private link resource for the given group id (sub-resource)",
              options: [
                {
                  name: ["--group-id", "--name", "-n"],
                  description: "The name of the private link resource",
                  args: { name: "group-id" },
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
          ],
        },
        {
          name: "vnet-peering",
          description: "Commands to manage databricks workspace vnet peering",
          subcommands: [
            {
              name: "create",
              description: "Create a vnet peering for a workspace",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet peering",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
                {
                  name: "--allow-forwarded-traffic",
                  description:
                    "Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network",
                  args: {
                    name: "allow-forwarded-traffic",
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
                  name: "--allow-gateway-transit",
                  description:
                    "If gateway links can be used in remote virtual networking to link to this virtual network",
                  args: {
                    name: "allow-gateway-transit",
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
                  name: "--allow-virtual-network-access",
                  description:
                    "Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space",
                  args: {
                    name: "allow-virtual-network-access",
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
                  name: "--remote-vnet",
                  description: "The remote virtual network name or Resource ID",
                  args: { name: "remote-vnet" },
                },
                {
                  name: "--use-remote-gateways",
                  description:
                    "If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway",
                  args: {
                    name: "use-remote-gateways",
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
              description: "Delete the vnet peering",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet peering",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List vnet peerings under a workspace",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Show the vnet peering",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet peering",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
                },
              ],
            },
            {
              name: "update",
              description: "Update the vnet peering",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--allow-forwarded-traffic",
                  description:
                    "Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network",
                  args: {
                    name: "allow-forwarded-traffic",
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
                  name: "--allow-gateway-transit",
                  description:
                    "If gateway links can be used in remote virtual networking to link to this virtual network",
                  args: {
                    name: "allow-gateway-transit",
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
                  name: "--allow-virtual-network-access",
                  description:
                    "Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space",
                  args: {
                    name: "allow-virtual-network-access",
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
                  name: ["--name", "-n"],
                  description: "The name of the vnet peering",
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
                  name: "--use-remote-gateways",
                  description:
                    "If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway",
                  args: {
                    name: "use-remote-gateways",
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
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
                  description: "The name of the vnet peering",
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
                {
                  name: "--workspace-name",
                  description: "The name of the workspace",
                  args: { name: "workspace-name" },
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
