const completion: Fig.Spec = {
  name: "ams",
  description: "Manage Azure Media Services resources",
  subcommands: [
    {
      name: "account",
      description: "Manage Azure Media Services accounts",
      subcommands: [
        {
          name: "check-name",
          description:
            "Checks whether the Media Service resource name is available",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Azure Media Services account",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "create",
          description: "Create an Azure Media Services account",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the resource",
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
              name: "--storage-account",
              description:
                "The name or resource ID of the primary storage account to attach to the Azure Media Services account. The storage account MUST be in the same Azure subscription as the Media Services account. It is strongly recommended that the storage account be in the same resource group as the Media Services account. Blob only accounts are not allowed as primary",
              args: { name: "storage-account" },
              isRequired: true,
            },
            {
              name: "--default-action",
              description:
                "The behavior for IP access control in Key Delivery. Allowed values: Allow,Deny",
              args: { name: "default-action" },
            },
            {
              name: "--disable-public-network",
              description:
                "Set this flag to disable public network access for resources under the Media Services account. If not set public network access will be enabled",
            },
            {
              name: "--ip-allow-list",
              description:
                "The IP allow list for access control in Key Delivery. If the default action is set to Allow, the IP allow list must be empty",
              args: { name: "ip-allow-list" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--mi-system-assigned",
              description:
                "Set the system managed identity on the media services account",
            },
            {
              name: "--mi-user-assigned",
              description:
                "Set the user managed identities on the media services account",
              args: { name: "mi-user-assigned" },
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
          description: "Delete an Azure Media Services account",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the resource",
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
            "List Azure Media Services accounts for the entire subscription",
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
          description: "Show the details of an Azure Media Services account",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the resource",
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
          description: "Update the details of an Azure Media Services account",
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
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the resource",
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "encryption",
          description: "Manage encryption for an Azure Media Services account",
          subcommands: [
            {
              name: "set",
              description:
                "Set the encryption settings for an Azure Media Services account",
              options: [
                {
                  name: "--key-type",
                  description:
                    "SystemKeyThe encryption key source (provider). Allowed values: , .CustomerKey",
                  args: { name: "key-type" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--current-key-id",
                  description:
                    "The current key used to encrypt the Media Services account, including the key version",
                  args: { name: "current-key-id" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--key-identifier",
                  description:
                    "The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey)",
                  args: { name: "key-identifier" },
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
                  name: "--system-assigned",
                  description:
                    "Set the system managed identity for account encryption",
                  args: {
                    name: "system-assigned",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--user-assigned",
                  description:
                    "Set the user managed identity for account encryption",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of encryption settings for an Azure Media Services account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
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
          name: "identity",
          description:
            "Manage managed identity settings for an Azure Media Services account",
          subcommands: [
            {
              name: "assign",
              description:
                "Assign a managed identity to an Azure Media Services account",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the resource",
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
                  name: "--system-assigned",
                  description:
                    "Set the system managed identity on the media services account",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Set the user managed identities on the media services account",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove a managed identity to an Azure Media Services account",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the resource",
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
                  name: "--system-assigned",
                  description:
                    "Set the system managed identity on the media services account",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Set the user managed identities on the media services account",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of managed identity settings for an Azure Media Services account",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the resource",
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
          ],
        },
        {
          name: "mru",
          description:
            "Manage media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
          subcommands: [
            {
              name: "set",
              description:
                "Set the type and number of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
              options: [
                {
                  name: "--count",
                  description:
                    "The number of the encoding reserved units that you want to be provisioned for this account for concurrent tasks (one unit equals one task)",
                  args: { name: "count" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the resource",
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
                  name: "--type",
                  description:
                    "Speed of reserved processing units. The cost of media encoding depends on the pricing tier you choose. See https://azure.microsoft.com/pricing/details/media-services/ for further details. Allowed values: S1, S2, S3",
                  args: { name: "type" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of media reserved units for an Azure Media Services account. This doesn't work with accounts created with 2020-05-01 version of the Media Services API or later. Accounts created this way no longer need to set media reserved units as the system will automaticaly scale up and down based on load",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the resource",
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
          ],
        },
        {
          name: "sp",
          description:
            "Manage service principal and role based access for an Azure Media Services account",
          subcommands: [
            {
              name: "create",
              description:
                "Create or update a service principal and configure its access to an Azure Media Services account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
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
                  name: ["--name", "-n"],
                  description:
                    "The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated",
                  args: { name: "name" },
                },
                {
                  name: "--new-sp-name",
                  description:
                    "The new app name or app URI to update the RBAC with",
                  args: { name: "new-sp-name" },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "The friendly name of the password. The actual password will be an autogenerated strong password which will be displayed after the command runs",
                  args: { name: "password" },
                },
                {
                  name: "--role",
                  description: "The role of the service principal",
                  args: { name: "role" },
                },
                { name: "--xml", description: "Enables xml output format" },
                {
                  name: "--years",
                  description:
                    "Number of years for which the secret will be valid. Default: 1 year",
                  args: { name: "years" },
                },
              ],
            },
            {
              name: "reset-credentials",
              description:
                "Generate a new client secret for a service principal configured for an Azure Media Services account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated",
                  args: { name: "name" },
                },
                {
                  name: ["--password", "-p"],
                  description:
                    "The friendly name of the password. The actual password will be an autogenerated strong password which will be displayed after the command runs",
                  args: { name: "password" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--role",
                  description: "The role of the service principal",
                  args: { name: "role" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                { name: "--xml", description: "Enables xml output format" },
                {
                  name: "--years",
                  description:
                    "Number of years for which the secret will be valid. Default: 1 year",
                  args: { name: "years" },
                },
              ],
            },
          ],
        },
        {
          name: "storage",
          description: "Manage storage for an Azure Media Services account",
          subcommands: [
            {
              name: "add",
              description:
                "Attach a secondary storage to an Azure Media Services account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name or resource ID of the secondary storage account to detach from the Azure Media Services account",
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
                  name: "--system-assigned",
                  description:
                    "Set the system managed identity on the storage account",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Set the user managed identity on the storage account",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Detach a secondary storage from an Azure Media Services account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name or resource ID of the secondary storage account to detach from the Azure Media Services account",
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
              name: "set-authentication",
              description:
                "Set the authentication of a storage account attached to an Azure Media Services account",
              options: [
                {
                  name: "--storage-auth",
                  description:
                    "The type of authentication for the storage account associated with the media services account",
                  args: {
                    name: "storage-auth",
                    suggestions: ["ManagedIdentity", "System"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
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
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--storage-account-id",
                  description: "The storage account Id",
                  args: { name: "storage-account-id" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--system-assigned",
                  description:
                    "Set the system managed identity on the storage account",
                },
                {
                  name: "--user-assigned",
                  description:
                    "Set the user managed identity on the storage account",
                  args: { name: "user-assigned" },
                },
              ],
            },
            {
              name: "sync-storage-keys",
              description:
                "Synchronize storage account keys for a storage account associated with an Azure Media Services account",
              options: [
                {
                  name: "--storage-account-id",
                  description: "The storage account Id",
                  args: { name: "storage-account-id" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
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
      name: "account-filter",
      description: "Manage account filters for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create an account filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the account filter",
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
              name: "--end-timestamp",
              description:
                "Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "end-timestamp" },
            },
            {
              name: "--first-quality",
              description:
                "The first quality (lowest) bitrate to include in the manifest",
              args: { name: "first-quality" },
            },
            {
              name: "--force-end-timestamp",
              description:
                "Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true",
            },
            {
              name: "--live-backoff-duration",
              description:
                "Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge",
              args: { name: "live-backoff-duration" },
            },
            {
              name: "--presentation-window-duration",
              description:
                "Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds",
              args: { name: "presentation-window-duration" },
            },
            {
              name: "--start-timestamp",
              description:
                "Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "start-timestamp" },
            },
            {
              name: "--timescale",
              description:
                "Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale",
              args: { name: "timescale" },
            },
            {
              name: "--tracks",
              description:
                "The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection",
              args: { name: "tracks" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an account filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the account filter",
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
            "List all the account filters of an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
          description: "Show the details of an account filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the account filter",
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
          description: "Update the details of an account filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--end-timestamp",
              description:
                "Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "end-timestamp" },
            },
            {
              name: "--first-quality",
              description:
                "The first quality (lowest) bitrate to include in the manifest",
              args: { name: "first-quality" },
            },
            {
              name: "--force-end-timestamp",
              description:
                "Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true",
              args: {
                name: "force-end-timestamp",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--live-backoff-duration",
              description:
                "Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge",
              args: { name: "live-backoff-duration" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the account filter",
              args: { name: "name" },
            },
            {
              name: "--presentation-window-duration",
              description:
                "Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds",
              args: { name: "presentation-window-duration" },
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
              name: "--start-timestamp",
              description:
                "Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "start-timestamp" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timescale",
              description:
                "Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale",
              args: { name: "timescale" },
            },
            {
              name: "--tracks",
              description:
                "The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection",
              args: { name: "tracks" },
            },
          ],
        },
      ],
    },
    {
      name: "asset",
      description: "Manage assets for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create an asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
              name: "--alternate-id",
              description: "The alternate id of the asset",
              args: { name: "alternate-id" },
            },
            {
              name: "--container",
              description: "The name of the asset blob container",
              args: { name: "container" },
            },
            {
              name: "--description",
              description: "The asset description",
              args: { name: "description" },
            },
            {
              name: "--storage-account",
              description: "The name of the storage account",
              args: { name: "storage-account" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
          name: "get-encryption-key",
          description:
            "Get the asset storage encryption keys used to decrypt content created by version 2 of the Media Services API",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
          name: "get-sas-urls",
          description:
            "Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--expiry",
              description:
                "Specifies the UTC datetime (Y-m-d'T'H:M:S'Z') at which the SAS becomes invalid. This must be less than 24 hours from the current time",
              args: { name: "expiry" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
              args: { name: "name" },
            },
            {
              name: "--permissions",
              description: "The permissions to set on the SAS URL",
              args: {
                name: "permissions",
                suggestions: ["Read", "ReadWrite", "ReadWriteDelete"],
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
          description: "List all the assets of an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-streaming-locators",
          description:
            "List streaming locators which are associated with this asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
          name: "show",
          description: "Show the details of an asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
          description: "Update the details of an asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--alternate-id",
              description: "The alternate id of the asset",
              args: { name: "alternate-id" },
            },
            {
              name: "--description",
              description: "The asset description",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset",
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
      ],
    },
    {
      name: "asset-filter",
      description: "Manage asset filters for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create an asset filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset filter",
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
              name: "--end-timestamp",
              description:
                "Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "end-timestamp" },
            },
            {
              name: "--first-quality",
              description:
                "The first quality (lowest) bitrate to include in the manifest",
              args: { name: "first-quality" },
            },
            {
              name: "--force-end-timestamp",
              description:
                "Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true",
            },
            {
              name: "--live-backoff-duration",
              description:
                "Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge",
              args: { name: "live-backoff-duration" },
            },
            {
              name: "--presentation-window-duration",
              description:
                "Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds",
              args: { name: "presentation-window-duration" },
            },
            {
              name: "--start-timestamp",
              description:
                "Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "start-timestamp" },
            },
            {
              name: "--timescale",
              description:
                "Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale",
              args: { name: "timescale" },
            },
            {
              name: "--tracks",
              description:
                "The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection",
              args: { name: "tracks" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an asset filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset filter",
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
            "List all the asset filters of an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
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
          description: "Show the details of an asset filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset filter",
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
          description: "Update the details of an asset filter",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
            },
            {
              name: "--end-timestamp",
              description:
                "Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "end-timestamp" },
            },
            {
              name: "--first-quality",
              description:
                "The first quality (lowest) bitrate to include in the manifest",
              args: { name: "first-quality" },
            },
            {
              name: "--force-end-timestamp",
              description:
                "Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true",
              args: {
                name: "force-end-timestamp",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--live-backoff-duration",
              description:
                "Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge",
              args: { name: "live-backoff-duration" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the asset filter",
              args: { name: "name" },
            },
            {
              name: "--presentation-window-duration",
              description:
                "Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds",
              args: { name: "presentation-window-duration" },
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
              name: "--start-timestamp",
              description:
                "Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest",
              args: { name: "start-timestamp" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--timescale",
              description:
                "Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale",
              args: { name: "timescale" },
            },
            {
              name: "--tracks",
              description:
                "The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection",
              args: { name: "tracks" },
            },
          ],
        },
      ],
    },
    {
      name: "asset-track",
      description: "Manage asset tracks for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create a track for an Azure Media Services asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
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
              name: "--track-name",
              description: "The name of the track",
              args: { name: "track-name" },
              isRequired: true,
            },
            {
              name: "--track-type",
              description: "The type of track. Allowed values: Text",
              args: { name: "track-type" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description:
                "The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA",
              args: { name: "display-name" },
            },
            {
              name: "--file-name",
              description:
                "The name of the file. Note: this file should already be uploaded to the storage container",
              args: { name: "file-name" },
            },
            {
              name: "--language-code",
              description: "The RFC5646 language code for the text track",
              args: { name: "language-code" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--player-visibility",
              description:
                'When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible". Possible values include: "Hidden", "Visible"',
              args: { name: "player-visibility" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Track",
          options: [
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: "--track-name",
              description: "The name of the track",
              args: { name: "track-name" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
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
          description: "List Tracks in the Asset",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
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
          description: "Show the details of a track",
          options: [
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: "--track-name",
              description: "The name of the track",
              args: { name: "track-name" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
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
          description: "Update the parameters of a track",
          options: [
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: "--track-name",
              description: "The name of the track",
              args: { name: "track-name" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--display-name",
              description:
                "The display name of the text track on a video player. In HLS, this maps to the NAME attribute of EXT-X-MEDIA",
              args: { name: "display-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--language-code",
              description: "The RFC5646 language code for the text track",
              args: { name: "language-code" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--player-visibility",
              description:
                'When PlayerVisibility is set to "Visible", the text track will be present in the DASH manifest or HLS playlist when requested by a client. When the PlayerVisibility is set to "Hidden", the text will not be available to the client. The default value is "Visible". Possible values include: "Hidden", "Visible"',
              args: { name: "player-visibility" },
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
          name: "update-data",
          description:
            "Update a track if the file in the storage container was recently modified",
          options: [
            {
              name: "--asset-name",
              description: "The asset name",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: "--track-name",
              description: "The name of the track",
              args: { name: "track-name" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
      name: "content-key-policy",
      description:
        "Manage content key policies for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create a new content key policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The content key policy name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--policy-option-name",
              description: "The content key policy option name",
              args: { name: "policy-option-name" },
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
              name: "--alt-rsa-token-keys",
              description: "Space-separated list of alternate rsa token keys",
              args: { name: "alt-rsa-token-keys" },
            },
            {
              name: "--alt-symmetric-token-keys",
              description:
                "Space-separated list of alternate symmetric token keys",
              args: { name: "alt-symmetric-token-keys" },
            },
            {
              name: "--alt-x509-token-keys",
              description:
                "Space-separated list of alternate x509 certificate token keys",
              args: { name: "alt-x509-token-keys" },
            },
            {
              name: "--ask",
              description:
                "The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string",
              args: { name: "ask" },
            },
            {
              name: "--audience",
              description: "The audience for the token",
              args: { name: "audience" },
            },
            {
              name: "--clear-key-configuration",
              description:
                "Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys",
            },
            {
              name: "--description",
              description: "The content key policy description",
              args: { name: "description" },
            },
            {
              name: "--fair-play-pfx",
              description:
                "The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key)",
              args: { name: "fair-play-pfx" },
            },
            {
              name: "--fair-play-pfx-password",
              description:
                "The password encrypting FairPlay certificate in PKCS 12 (pfx) format",
              args: { name: "fair-play-pfx-password" },
            },
            {
              name: "--fp-playback-duration-seconds",
              description: "Playback duration",
              args: { name: "fp-playback-duration-seconds" },
            },
            {
              name: "--fp-storage-duration-seconds",
              description: "Storage duration",
              args: { name: "fp-storage-duration-seconds" },
            },
            {
              name: "--issuer",
              description: "The token issuer",
              args: { name: "issuer" },
            },
            {
              name: "--open-id-connect-discovery-document",
              description: "The OpenID connect discovery document",
              args: { name: "open-id-connect-discovery-document" },
            },
            {
              name: "--open-restriction",
              description:
                "Use open restriction. License or key will be delivered on every request. Not recommended for production environments",
            },
            {
              name: "--play-ready-template",
              description:
                "JSON PlayReady license template. Use @{file} to load from a file",
              args: { name: "play-ready-template" },
            },
            {
              name: "--rental-and-lease-key-type",
              description:
                "The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited",
              args: { name: "rental-and-lease-key-type" },
            },
            {
              name: "--rental-duration",
              description:
                "The rental duration. Must be greater than or equal to 0",
              args: { name: "rental-duration" },
            },
            {
              name: "--token-claims",
              description:
                "Space-separated required token claims in '[key=value]' format",
              args: { name: "token-claims" },
            },
            {
              name: "--token-key",
              description:
                "Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type",
              args: { name: "token-key" },
            },
            {
              name: "--token-key-type",
              description:
                "The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509",
              args: { name: "token-key-type" },
            },
            {
              name: "--token-type",
              description: "The type of token. Allowed values: Jwt, Swt",
              args: { name: "token-type" },
            },
            {
              name: "--widevine-template",
              description:
                "JSON Widevine license template. Use @{file} to load from a file",
              args: { name: "widevine-template" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a content key policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The content key policy name",
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
            "List all the content key policies within an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show an existing content key policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The content key policy name",
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
              name: "--with-secrets",
              description: "Include secret values of the content key policy",
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing content key policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--description",
              description: "The content key policy description",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The content key policy name",
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
          name: "option",
          description: "Manage options for an existing content key policy",
          subcommands: [
            {
              name: "add",
              description: "Add a new option to an existing content key policy",
              options: [
                {
                  name: "--policy-option-name",
                  description: "The content key policy option name",
                  args: { name: "policy-option-name" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--alt-rsa-token-keys",
                  description:
                    "Space-separated list of alternate rsa token keys",
                  args: { name: "alt-rsa-token-keys" },
                },
                {
                  name: "--alt-symmetric-token-keys",
                  description:
                    "Space-separated list of alternate symmetric token keys",
                  args: { name: "alt-symmetric-token-keys" },
                },
                {
                  name: "--alt-x509-token-keys",
                  description:
                    "Space-separated list of alternate x509 certificate token keys",
                  args: { name: "alt-x509-token-keys" },
                },
                {
                  name: "--ask",
                  description:
                    "The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string",
                  args: { name: "ask" },
                },
                {
                  name: "--audience",
                  description: "The audience for the token",
                  args: { name: "audience" },
                },
                {
                  name: "--clear-key-configuration",
                  description:
                    "Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys",
                },
                {
                  name: "--fair-play-pfx",
                  description:
                    "The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key)",
                  args: { name: "fair-play-pfx" },
                },
                {
                  name: "--fair-play-pfx-password",
                  description:
                    "The password encrypting FairPlay certificate in PKCS 12 (pfx) format",
                  args: { name: "fair-play-pfx-password" },
                },
                {
                  name: "--fp-playback-duration-seconds",
                  description: "Playback duration",
                  args: { name: "fp-playback-duration-seconds" },
                },
                {
                  name: "--fp-storage-duration-seconds",
                  description: "Storage duration",
                  args: { name: "fp-storage-duration-seconds" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--issuer",
                  description: "The token issuer",
                  args: { name: "issuer" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The content key policy name",
                  args: { name: "name" },
                },
                {
                  name: "--open-id-connect-discovery-document",
                  description: "The OpenID connect discovery document",
                  args: { name: "open-id-connect-discovery-document" },
                },
                {
                  name: "--open-restriction",
                  description:
                    "Use open restriction. License or key will be delivered on every request. Not recommended for production environments",
                },
                {
                  name: "--play-ready-template",
                  description:
                    "JSON PlayReady license template. Use @{file} to load from a file",
                  args: { name: "play-ready-template" },
                },
                {
                  name: "--rental-and-lease-key-type",
                  description:
                    "The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited",
                  args: { name: "rental-and-lease-key-type" },
                },
                {
                  name: "--rental-duration",
                  description:
                    "The rental duration. Must be greater than or equal to 0",
                  args: { name: "rental-duration" },
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
                  name: "--token-claims",
                  description:
                    "Space-separated required token claims in '[key=value]' format",
                  args: { name: "token-claims" },
                },
                {
                  name: "--token-key",
                  description:
                    "Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type",
                  args: { name: "token-key" },
                },
                {
                  name: "--token-key-type",
                  description:
                    "The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509",
                  args: { name: "token-key-type" },
                },
                {
                  name: "--token-type",
                  description: "The type of token. Allowed values: Jwt, Swt",
                  args: { name: "token-type" },
                },
                {
                  name: "--widevine-template",
                  description:
                    "JSON Widevine license template. Use @{file} to load from a file",
                  args: { name: "widevine-template" },
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove an option from an existing content key policy",
              options: [
                {
                  name: "--policy-option-id",
                  description:
                    'The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource',
                  args: { name: "policy-option-id" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The content key policy name",
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
              description:
                "Update an option from an existing content key policy",
              options: [
                {
                  name: "--policy-option-id",
                  description:
                    'The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource',
                  args: { name: "policy-option-id" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--add-alt-token-key",
                  description:
                    "Creates an alternate token key with either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --add-alt-token-key-type",
                  args: { name: "add-alt-token-key" },
                },
                {
                  name: "--add-alt-token-key-type",
                  description:
                    "The type of the token key to be used for the alternate verification key. Allowed values: Symmetric, RSA, X509",
                  args: { name: "add-alt-token-key-type" },
                },
                {
                  name: "--ask",
                  description:
                    "The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string",
                  args: { name: "ask" },
                },
                {
                  name: "--audience",
                  description: "The audience for the token",
                  args: { name: "audience" },
                },
                {
                  name: "--fair-play-pfx",
                  description:
                    "The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key)",
                  args: { name: "fair-play-pfx" },
                },
                {
                  name: "--fair-play-pfx-password",
                  description:
                    "The password encrypting FairPlay certificate in PKCS 12 (pfx) format",
                  args: { name: "fair-play-pfx-password" },
                },
                {
                  name: "--fp-playback-duration-seconds",
                  description: "Playback duration",
                  args: { name: "fp-playback-duration-seconds" },
                },
                {
                  name: "--fp-storage-duration-seconds",
                  description: "Storage duration",
                  args: { name: "fp-storage-duration-seconds" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--issuer",
                  description: "The token issuer",
                  args: { name: "issuer" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The content key policy name",
                  args: { name: "name" },
                },
                {
                  name: "--open-id-connect-discovery-document",
                  description: "The OpenID connect discovery document",
                  args: { name: "open-id-connect-discovery-document" },
                },
                {
                  name: "--play-ready-template",
                  description:
                    "JSON PlayReady license template. Use @{file} to load from a file",
                  args: { name: "play-ready-template" },
                },
                {
                  name: "--policy-option-name",
                  description: "The content key policy option name",
                  args: { name: "policy-option-name" },
                },
                {
                  name: "--rental-and-lease-key-type",
                  description:
                    "The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited",
                  args: { name: "rental-and-lease-key-type" },
                },
                {
                  name: "--rental-duration",
                  description:
                    "The rental duration. Must be greater than or equal to 0",
                  args: { name: "rental-duration" },
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
                  name: "--token-claims",
                  description:
                    "Space-separated required token claims in '[key=value]' format",
                  args: { name: "token-claims" },
                },
                {
                  name: "--token-key",
                  description:
                    "Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type",
                  args: { name: "token-key" },
                },
                {
                  name: "--token-key-type",
                  description:
                    "The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509",
                  args: { name: "token-key-type" },
                },
                {
                  name: "--token-type",
                  description: "The type of token. Allowed values: Jwt, Swt",
                  args: { name: "token-type" },
                },
                {
                  name: "--widevine-template",
                  description:
                    "JSON Widevine license template. Use @{file} to load from a file",
                  args: { name: "widevine-template" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "job",
      description: "Manage jobs for a transform",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            { name: "--delete", description: "Delete the job being cancelled" },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the job",
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the job",
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the jobs of a transform within an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
              isRequired: true,
            },
            {
              name: "--filter",
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the job",
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
            },
          ],
        },
        {
          name: "start",
          description: "Start a job",
          options: [
            {
              name: "--output-assets",
              description:
                "Space-separated assets in 'assetName=label' format. An asset without label can be sent like this: 'assetName='",
              args: { name: "output-assets" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--base-uri",
              description:
                "Base uri for http job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris",
              args: { name: "base-uri" },
            },
            {
              name: "--correlation-data",
              description:
                "Space-separated correlation data in 'key[=value]' format. This customer provided data will be returned in Job and JobOutput state events",
              args: { name: "correlation-data" },
            },
            {
              name: "--description",
              description: "The job description",
              args: { name: "description" },
            },
            {
              name: "--files",
              description:
                "Space-separated list of files. It can be used to tell the service to only use the files specified from the input asset",
              args: { name: "files" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--input-asset-name",
              description: "The name of the input asset",
              args: { name: "input-asset-name" },
            },
            {
              name: "--label",
              description:
                "A label that is assigned to a Job Input that is used to satisfy a reference used in the Transform. For example, a Transform can be authored to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'",
              args: { name: "label" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the job",
              args: { name: "name" },
            },
            {
              name: "--priority",
              description:
                "The priority with which the job should be processed",
              args: {
                name: "priority",
                suggestions: ["High", "Low", "Normal"],
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
            },
          ],
        },
        {
          name: "update",
          description: "Update an existing job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--description",
              description: "The job description",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the job",
              args: { name: "name" },
            },
            {
              name: "--priority",
              description:
                "The priority with which the job should be processed",
              args: {
                name: "priority",
                suggestions: ["High", "Low", "Normal"],
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
              name: ["--transform-name", "-t"],
              description: "The name of the transform",
              args: { name: "transform-name" },
            },
          ],
        },
      ],
    },
    {
      name: "live-event",
      description: "Manage live events for an Azure Media Service account",
      subcommands: [
        {
          name: "create",
          description: "Create a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments',
              args: { name: "ips" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
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
              name: "--streaming-protocol",
              description:
                "The streaming protocol for the live event. This value is specified at creation time and cannot be updated",
              args: {
                name: "streaming-protocol",
                suggestions: ["FragmentedMP4", "RTMP"],
              },
              isRequired: true,
            },
            {
              name: "--access-token",
              description:
                "A unique identifier for a stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value",
              args: { name: "access-token" },
            },
            {
              name: "--alternative-media-id",
              description:
                "An Alternative Media Identifier associated with the StreamingLocator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field",
              args: { name: "alternative-media-id" },
            },
            {
              name: "--auto-start",
              description:
                "The flag indicates if the resource should be automatically started on creation",
            },
            {
              name: "--client-access-policy",
              description:
                "Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file",
              args: { name: "client-access-policy" },
            },
            {
              name: "--cross-domain-policy",
              description:
                "Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file",
              args: { name: "cross-domain-policy" },
            },
            {
              name: "--description",
              description: "The live event description",
              args: { name: "description" },
            },
            {
              name: "--encoding-type",
              description:
                "The encoding type for live event. This value is specified at creation time and cannot be updated. Allowed values: Premium1080p, None, Standard",
              args: { name: "encoding-type" },
            },
            {
              name: "--hostname-prefix",
              description:
                "When useStaticHostname is set to true, hostname_prefix specifies the first part of the hostname assigned to the live event preview and ingest endpoints. The final hostname would be a combination of this prefix, the media service account name and a short code for the Azure Media Services data center",
              args: { name: "hostname-prefix" },
            },
            {
              name: "--key-frame-interval",
              description:
                "Use an ISO 8601 time value between 0.5 to 20 seconds to specify the output fragment length for the video and audiotracks of an encoding live event. For example, use PT2S to indicate 2 seconds. For the video track it also defines the key frame interval, or the length of a GoP (group of pictures). If this value is not set for anencoding live event, the fragment duration defaults to 2 seconds. The value cannot be set for pass-through live events",
              args: { name: "key-frame-interval" },
            },
            {
              name: "--key-frame-interval-duration",
              description:
                "ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds",
              args: { name: "key-frame-interval-duration" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preset-name",
              description:
                "The encoding preset name. This value is specified at creation time and cannot be updated",
              args: { name: "preset-name" },
            },
            {
              name: "--preview-ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments',
              args: { name: "preview-ips" },
            },
            {
              name: "--preview-locator",
              description:
                "The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created",
              args: { name: "preview-locator" },
            },
            {
              name: "--stream-options",
              description:
                "The options to use for the LiveEvent. This value is specified at creation time and cannot be updated",
              args: {
                name: "stream-options",
                suggestions: ["Default", "LowLatency", "LowLatencyV2"],
              },
            },
            {
              name: "--streaming-policy-name",
              description:
                "The name of streaming policy used for the live event preview. This can be specified at creation time but cannot be updated",
              args: { name: "streaming-policy-name" },
            },
            {
              name: "--stretch-mode",
              description:
                "Specifies how the input video will be resized to fit the desired output resolution(s). Default is None. Allowed values: None, AutoSize, AutoFit",
              args: { name: "stretch-mode" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--transcription-lang",
              description:
                "Live transcription language for the live event. Allowed values: ca-ES, da-DK, de-DE, en-AU, en-CA, en-GB, en-IN, en-NZ, en-US, es-ES, es-MX, fi-FI, fr-CA, fr-FR, it-IT, nl-NL, pt-BR, pt-PT, sv-SE See https://go.microsoft.com/fwlink/?linkid=2133742 for more information about the live transcription feature",
              args: { name: "transcription-lang" },
            },
            {
              name: "--use-static-hostname",
              description:
                "Specifies whether a static hostname would be assigned to the live event preview and ingest endpoints. This value can only be updated if the live event is in Standby state. If hostname_prefix is not specified, the live event name will be used as the hostname prefix",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
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
            "List all the live events of an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
          name: "reset",
          description: "Reset a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
              args: { name: "name" },
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
          description: "Show the details of a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
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
          name: "standby",
          description: "Allocate a live event to be started later",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
              args: { name: "name" },
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
          name: "start",
          description: "Start a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
              args: { name: "name" },
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
          name: "stop",
          description: "Stop a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--remove-outputs-on-stop",
              description: "Remove live outputs on stop",
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
          description: "Update the details of a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--client-access-policy",
              description:
                "Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file",
              args: { name: "client-access-policy" },
            },
            {
              name: "--cross-domain-policy",
              description:
                "Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file",
              args: { name: "cross-domain-policy" },
            },
            {
              name: "--description",
              description: "The live event description",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments',
              args: { name: "ips" },
            },
            {
              name: "--key-frame-interval-duration",
              description:
                "ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds",
              args: { name: "key-frame-interval-duration" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live event",
              args: { name: "name" },
            },
            {
              name: "--preview-ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments',
              args: { name: "preview-ips" },
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the live event is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              name: ["--name", "-n"],
              description: "The name of the live event",
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
      name: "live-output",
      description: "Manage live outputs for an Azure Media Service account",
      subcommands: [
        {
          name: "create",
          description: "Create a live output",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--archive-window-length",
              description:
                "ISO 8601 timespan duration of the archive window length. This is the duration that customer want to retain the recorded content. Minimum window is 5 minutes (PT5M or 00:05:00). Maximum window is 25 hours (PT25H or 25:00:00). For example, to retain the output for 10 minutes, use PT10M or 00:10:00",
              args: { name: "archive-window-length" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description: "The name of the asset",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: "--live-event-name",
              description: "The name of the live event",
              args: { name: "live-event-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live output",
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
              description: "The live output description",
              args: { name: "description" },
            },
            {
              name: "--fragments-per-ts-segment",
              description: "The number of fragments per HLS segment",
              args: { name: "fragments-per-ts-segment" },
            },
            {
              name: "--manifest-name",
              description:
                "The manifest file name. If not provided, the service will generate one automatically",
              args: { name: "manifest-name" },
            },
            {
              name: "--output-snap-time",
              description: "The output snapshot time",
              args: { name: "output-snap-time" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a live output",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--live-event-name",
              description: "The name of the live event",
              args: { name: "live-event-name" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live output",
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
          description: "List all the live outputs in a live event",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--live-event-name",
              description: "The name of the live event",
              args: { name: "live-event-name" },
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
          description: "Show the details of a live output",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--live-event-name",
              description: "The name of the live event",
              args: { name: "live-event-name" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the live output",
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
      ],
    },
    {
      name: "streaming-endpoint",
      description:
        "Manage streaming endpoints for an Azure Media Service account",
      subcommands: [
        {
          name: "create",
          description: "Create a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
              name: "--scale-units",
              description:
                "The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints",
              args: { name: "scale-units" },
              isRequired: true,
            },
            {
              name: "--auto-start",
              description:
                "The flag indicates if the resource should be automatically started on creation",
              args: { name: "auto-start" },
            },
            {
              name: "--availability-set-name",
              description:
                "The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming. This value can only be set at creation time",
              args: { name: "availability-set-name" },
            },
            {
              name: "--cdn-profile",
              description: "The CDN profile name",
              args: { name: "cdn-profile" },
            },
            {
              name: "--cdn-provider",
              description:
                "The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai",
              args: { name: "cdn-provider" },
            },
            {
              name: "--client-access-policy",
              description:
                "The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies",
              args: { name: "client-access-policy" },
            },
            {
              name: "--cross-domain-policy",
              description:
                "The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies",
              args: { name: "cross-domain-policy" },
            },
            {
              name: "--custom-host-names",
              description:
                'Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list',
              args: { name: "custom-host-names" },
            },
            {
              name: "--description",
              description: "The streaming endpoint description",
              args: { name: "description" },
            },
            {
              name: "--ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed',
              args: { name: "ips" },
            },
            {
              name: "--max-cache-age",
              description: "Max cache age",
              args: { name: "max-cache-age" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          description: "Delete a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
          name: "get-skus",
          description: "Get the sku details for a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
            "List all the streaming endpoints within an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
          name: "scale",
          description: "Set the scale of a streaming endpoint",
          options: [
            {
              name: "--scale-units",
              description:
                "The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints",
              args: { name: "scale-units" },
              isRequired: true,
            },
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
          name: "show",
          description: "Show the details of a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
          name: "start",
          description: "Start a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
              args: { name: "name" },
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
          name: "stop",
          description: "Stop a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
              args: { name: "name" },
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
          name: "update",
          description: "Update the details of a streaming endpoint",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--cdn-profile",
              description: "The CDN profile name",
              args: { name: "cdn-profile" },
            },
            {
              name: "--cdn-provider",
              description:
                "The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai",
              args: { name: "cdn-provider" },
            },
            {
              name: "--client-access-policy",
              description:
                "The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies",
              args: { name: "client-access-policy" },
            },
            {
              name: "--cross-domain-policy",
              description:
                "The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies",
              args: { name: "cross-domain-policy" },
            },
            {
              name: "--custom-host-names",
              description:
                'Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list',
              args: { name: "custom-host-names" },
            },
            {
              name: "--description",
              description: "The streaming endpoint description",
              args: { name: "description" },
            },
            {
              name: "--disable-cdn",
              description:
                "Use this flag to disable CDN for the streaming endpoint",
              args: { name: "disable-cdn" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ips",
              description:
                'Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed',
              args: { name: "ips" },
            },
            {
              name: "--max-cache-age",
              description: "Max cache age",
              args: { name: "max-cache-age" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the streaming endpoint is met",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              name: ["--name", "-n"],
              description: "The name of the streaming endpoint",
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
          name: "akamai",
          description:
            "Manage AkamaiAccessControl objects to be used on streaming endpoints",
          subcommands: [
            {
              name: "add",
              description:
                "Add an AkamaiAccessControl to an existing streaming endpoint",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--base64-key",
                  description:
                    "Base64-encoded authentication key that will be used by the CDN. The authentication key provided by Akamai is an ASCII encoded string, and must be converted to bytes and then base64 encoded",
                  args: { name: "base64-key" },
                },
                {
                  name: "--expiration",
                  description:
                    "The ISO 8601 DateTime value that specifies when the Akamai authentication expires",
                  args: { name: "expiration" },
                },
                {
                  name: "--identifier",
                  description:
                    "The identifier for the authentication key. This is the nonce provided by Akamai",
                  args: { name: "identifier" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the streaming endpoint",
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
              name: "remove",
              description:
                "Remove an AkamaiAccessControl from an existing streaming endpoint",
              options: [
                {
                  name: "--identifier",
                  description:
                    "The identifier for the authentication key. This is the nonce provided by Akamai",
                  args: { name: "identifier" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the streaming endpoint",
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
          ],
        },
      ],
    },
    {
      name: "streaming-locator",
      description:
        "Manage streaming locators for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create a streaming locator",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: "--asset-name",
              description:
                "The name of the asset used by the streaming locator",
              args: { name: "asset-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming locator",
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
              name: "--streaming-policy-name",
              description:
                "The name of the streaming policy used by the streaming locator. You can either create one with az ams streaming policy create or use any of the predefined policies: Predefined_DownloadOnly, Predefined_ClearStreamingOnly, Predefined_DownloadAndClearStreaming, Predefined_ClearKey, Predefined_MultiDrmCencStreaming, Predefined_MultiDrmStreaming",
              args: { name: "streaming-policy-name" },
              isRequired: true,
            },
            {
              name: "--alternative-media-id",
              description:
                "An alternative media identifier associated with the streaming locator",
              args: { name: "alternative-media-id" },
            },
            {
              name: "--content-key-policy-name",
              description:
                "The default content key policy name used by the streaming locator",
              args: { name: "content-key-policy-name" },
            },
            {
              name: "--content-keys",
              description:
                "JSON string with the content keys to be used by the streaming locator. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streaminglocators/create#streaminglocatorcontentkey",
              args: { name: "content-keys" },
            },
            {
              name: "--end-time",
              description:
                "The ISO 8601 DateTime end time (Y-m-d'T'H:M:S'Z') of the streaming locator",
              args: { name: "end-time" },
            },
            {
              name: "--filters",
              description:
                "A space-separated list of asset filter names and/or account filter names",
              args: { name: "filters" },
            },
            {
              name: "--start-time",
              description:
                "The ISO 8601 DateTime start time (Y-m-d'T'H:M:S'Z') of the streaming locator",
              args: { name: "start-time" },
            },
            {
              name: "--streaming-locator-id",
              description: "The identifier of the streaming locator",
              args: { name: "streaming-locator-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Streaming Locator",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming locator",
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
          name: "get-paths",
          description: "List paths supported by a streaming locator",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming locator",
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
            "List all the streaming locators within an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "list-content-keys",
          description: "List content keys used by a streaming locator",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming locator",
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
          name: "show",
          description: "Show the details of a streaming locator",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming locator",
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
      ],
    },
    {
      name: "streaming-policy",
      description:
        "Manage streaming policies for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create a streaming policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming policy",
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
              name: "--cbcs-clear-tracks",
              description:
                "The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection",
              args: { name: "cbcs-clear-tracks" },
            },
            {
              name: "--cbcs-default-key-label",
              description:
                "Label to specify Default Content Key for an encryption scheme",
              args: { name: "cbcs-default-key-label" },
            },
            {
              name: "--cbcs-default-key-policy-name",
              description: "Policy used by Default Content Key",
              args: { name: "cbcs-default-key-policy-name" },
            },
            {
              name: "--cbcs-fair-play-allow-persistent-license",
              description: "Allows the license to be persistent or not",
            },
            {
              name: "--cbcs-fair-play-template",
              description:
                "The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys",
              args: { name: "cbcs-fair-play-template" },
            },
            {
              name: "--cbcs-key-to-track-mappings",
              description:
                "The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey",
              args: { name: "cbcs-key-to-track-mappings" },
            },
            {
              name: "--cbcs-protocols",
              description:
                "Space-separated list of enabled protocols for Common Encryption CBCS. Allowed values: Download, Dash, HLS, SmoothStreaming",
              args: { name: "cbcs-protocols" },
            },
            {
              name: "--cenc-clear-tracks",
              description:
                "The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection",
              args: { name: "cenc-clear-tracks" },
            },
            {
              name: "--cenc-default-key-label",
              description:
                "Label to specify Default Content Key for an encryption scheme",
              args: { name: "cenc-default-key-label" },
            },
            {
              name: "--cenc-default-key-policy-name",
              description: "Policy used by Default Content Key",
              args: { name: "cenc-default-key-policy-name" },
            },
            {
              name: "--cenc-disable-play-ready",
              description:
                "If specified, no PlayReady cenc DRM will be configured. If --cenc-disable-play-ready is set, --cenc-disable-widevine cannot also be set",
              args: {
                name: "cenc-disable-play-ready",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--cenc-disable-widevine",
              description:
                "If specified, no Widevine cenc DRM will be configured. If --cenc-disable-widevine is set, --cenc-disable-play-ready cannot also be set",
              args: {
                name: "cenc-disable-widevine",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--cenc-key-to-track-mappings",
              description:
                "The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey",
              args: { name: "cenc-key-to-track-mappings" },
            },
            {
              name: "--cenc-play-ready-attributes",
              description: "Custom attributes for PlayReady",
              args: { name: "cenc-play-ready-attributes" },
            },
            {
              name: "--cenc-play-ready-template",
              description:
                "The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys",
              args: { name: "cenc-play-ready-template" },
            },
            {
              name: "--cenc-protocols",
              description:
                "Space-separated list of enabled protocols for Common Encryption CENC. Allowed values: Download, Dash, HLS, SmoothStreaming",
              args: { name: "cenc-protocols" },
            },
            {
              name: "--cenc-widevine-template",
              description:
                "The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys",
              args: { name: "cenc-widevine-template" },
            },
            {
              name: "--default-content-key-policy-name",
              description:
                "Default Content Key used by current streaming policy",
              args: { name: "default-content-key-policy-name" },
            },
            {
              name: "--envelope-clear-tracks",
              description:
                "The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection",
              args: { name: "envelope-clear-tracks" },
            },
            {
              name: "--envelope-default-key-label",
              description:
                "Label used to specify Content Key when creating a streaming locator",
              args: { name: "envelope-default-key-label" },
            },
            {
              name: "--envelope-default-key-policy-name",
              description: "Policy used by Default Key",
              args: { name: "envelope-default-key-policy-name" },
            },
            {
              name: "--envelope-key-to-track-mappings",
              description:
                "The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey",
              args: { name: "envelope-key-to-track-mappings" },
            },
            {
              name: "--envelope-protocols",
              description:
                "Space-separated list of enabled protocols for Envelope Encryption. Allowed values: Download, Dash, HLS, SmoothStreaming",
              args: { name: "envelope-protocols" },
            },
            {
              name: "--envelope-template",
              description:
                "The KeyAcquistionUrlTemplate is used to point to user specified service to delivery content keys",
              args: { name: "envelope-template" },
            },
            {
              name: "--no-encryption-protocols",
              description:
                "Space-separated list of enabled protocols for NoEncryption. Allowed values: Download, Dash, HLS, SmoothStreaming",
              args: { name: "no-encryption-protocols" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Streaming Policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming policy",
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
            "List all the streaming policies within an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
            {
              name: "--top",
              description:
                "Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a streaming policy",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the streaming policy",
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
      ],
    },
    {
      name: "transform",
      description: "Manage transforms for an Azure Media Services account",
      subcommands: [
        {
          name: "create",
          description: "Create a transform",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the transform",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--preset",
              description:
                "Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, CopyAllBitrateNonInterleaved, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, H265ContentAwareEncoding, H265AdaptiveStreaming, H265SingleBitrate720p, H265SingleBitrate1080p, H265SingleBitrate4K, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset for further details on the settings to use to build a custom preset",
              args: { name: "preset" },
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
              name: "--audio-analysis-mode",
              description:
                "Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. Allowed values: Standard, Basic",
              args: { name: "audio-analysis-mode" },
            },
            {
              name: "--audio-language",
              description:
                'The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN',
              args: { name: "audio-language" },
            },
            {
              name: "--blur-type",
              description: "Allowed values: Box, Low, Med, High, Black",
              args: { name: "blur-type" },
            },
            {
              name: "--description",
              description: "The description of the transform",
              args: { name: "description" },
            },
            {
              name: "--face-detector-mode",
              description:
                "This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction. Allowed values: Analyze, Redact, Combined",
              args: { name: "face-detector-mode" },
            },
            {
              name: "--insights-to-extract",
              description:
                "The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted",
              args: {
                name: "insights-to-extract",
                suggestions: [
                  "AllInsights",
                  "AudioInsightsOnly",
                  "VideoInsightsOnly",
                ],
              },
            },
            {
              name: "--on-error",
              description:
                "A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'",
              args: {
                name: "on-error",
                suggestions: ["ContinueJob", "StopProcessingJob"],
              },
            },
            {
              name: "--relative-priority",
              description:
                "Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal",
              args: {
                name: "relative-priority",
                suggestions: ["High", "Low", "Normal"],
              },
            },
            {
              name: "--resolution",
              description:
                'Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution',
              args: { name: "resolution" },
            },
            {
              name: "--video-analysis-mode",
              description:
                "Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. Allowed values: Standard, Basic",
              args: { name: "video-analysis-mode" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a transform",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the transform",
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
            "List all the transforms of an Azure Media Services account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
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
              description: "Restricts the set of items returned",
              args: { name: "filter" },
            },
            {
              name: "--orderby",
              description:
                "Specifies the key by which the result collection should be ordered",
              args: { name: "orderby" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a transform",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the transform",
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
          description: "Update the details of a transform",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "The name of the Azure Media Services account",
              args: { name: "account-name" },
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--description",
              description: "The description of the transform",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the transform",
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
          name: "output",
          description:
            "Manage transform outputs for an Azure Media Services account",
          subcommands: [
            {
              name: "add",
              description: "Add an output to an existing transform",
              options: [
                {
                  name: "--preset",
                  description:
                    "Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, CopyAllBitrateNonInterleaved, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, H265ContentAwareEncoding, H265AdaptiveStreaming, H265SingleBitrate720p, H265SingleBitrate1080p, H265SingleBitrate4K, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset for further details on the settings to use to build a custom preset",
                  args: { name: "preset" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--audio-analysis-mode",
                  description:
                    "Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. Allowed values: Standard, Basic",
                  args: { name: "audio-analysis-mode" },
                },
                {
                  name: "--audio-language",
                  description:
                    'The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN',
                  args: { name: "audio-language" },
                },
                {
                  name: "--blur-type",
                  description: "Allowed values: Box, Low, Med, High, Black",
                  args: { name: "blur-type" },
                },
                {
                  name: "--face-detector-mode",
                  description:
                    "This mode provides the ability to choose between the following settings: 1) Analyze - For detection only.This mode generates a metadata JSON file marking appearances of faces throughout the video.Where possible, appearances of the same person are assigned the same ID. 2) Combined - Additionally redacts(blurs) detected faces. 3) Redact - This enables a 2-pass process, allowing for selective redaction of a subset of detected faces.It takes in the metadata file from a prior analyze pass, along with the source video, and a user-selected subset of IDs that require redaction. Allowed values: Analyze, Redact, Combined",
                  args: { name: "face-detector-mode" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--insights-to-extract",
                  description:
                    "The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted",
                  args: {
                    name: "insights-to-extract",
                    suggestions: [
                      "AllInsights",
                      "AudioInsightsOnly",
                      "VideoInsightsOnly",
                    ],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the transform",
                  args: { name: "name" },
                },
                {
                  name: "--on-error",
                  description:
                    "A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'",
                  args: {
                    name: "on-error",
                    suggestions: ["ContinueJob", "StopProcessingJob"],
                  },
                },
                {
                  name: "--relative-priority",
                  description:
                    "Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal",
                  args: {
                    name: "relative-priority",
                    suggestions: ["High", "Low", "Normal"],
                  },
                },
                {
                  name: "--resolution",
                  description:
                    'Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see https://azure.microsoft.com/pricing/details/media-services/#analytics for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution',
                  args: { name: "resolution" },
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
                  name: "--video-analysis-mode",
                  description:
                    "Determines the set of audio analysis operations to be performed. If unspecified, the Standard AudioAnalysisMode would be chosen. Allowed values: Standard, Basic",
                  args: { name: "video-analysis-mode" },
                },
              ],
            },
            {
              name: "remove",
              description: "Remove an output from an existing transform",
              options: [
                {
                  name: "--output-index",
                  description: "The element index of the output to remove",
                  args: { name: "output-index" },
                  isRequired: true,
                },
                {
                  name: ["--account-name", "-a"],
                  description: "The name of the Azure Media Services account",
                  args: { name: "account-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the transform",
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
          ],
        },
      ],
    },
  ],
};

export default completion;
