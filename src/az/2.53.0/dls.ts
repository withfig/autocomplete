const completion: Fig.Spec = {
  name: "dls",
  description: "Manage Data Lake Store accounts and filesystems",
  subcommands: [
    {
      name: "account",
      description: "Manage Data Lake Store accounts",
      subcommands: [
        {
          name: "create",
          description: "Creates a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
              isRequired: true,
            },
            {
              name: "--default-group",
              description:
                "Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account",
              args: { name: "default-group" },
            },
            {
              name: "--disable-encryption",
              description:
                "Indicates that the account will not have any form of encryption applied to it",
            },
            {
              name: "--encryption-type",
              description:
                "Indicates what type of encryption to provision the account with. By default, encryption is ServiceManaged. If no encryption is desired, it must be explicitly set with the --disable-encryption flag",
              args: {
                name: "encryption-type",
                suggestions: ["ServiceManaged", "UserManaged"],
              },
            },
            {
              name: "--key-name",
              description: "Key name for the user-assigned encryption type",
              args: { name: "key-name" },
            },
            {
              name: "--key-vault-id",
              description: "Key vault for the user-assigned encryption type",
              args: { name: "key-vault-id" },
            },
            {
              name: "--key-version",
              description: "Key version for the user-assigned encryption type",
              args: { name: "key-version" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--tier",
              description:
                "The desired commitment tier for this account to use",
              args: {
                name: "tier",
                suggestions: [
                  "Commitment_100TB",
                  "Commitment_10TB",
                  "Commitment_1PB",
                  "Commitment_1TB",
                  "Commitment_500TB",
                  "Commitment_5PB",
                  "Consumption",
                ],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
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
                "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
          name: "enable-key-vault",
          description:
            "Enable the use of Azure Key Vault for encryption of a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
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
                "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
          description: "Lists available Data Lake Store accounts",
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
          description: "Get the details of a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
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
                "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
          description: "Updates a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--allow-azure-ips",
              description:
                "Allow/block Azure originating IPs through the firewall",
              args: {
                name: "allow-azure-ips",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--default-group",
              description:
                "Name of the default group to give permissions to for freshly created files and folders in the Data Lake Store account",
              args: { name: "default-group" },
            },
            {
              name: "--firewall-state",
              description: "Enable/disable existing firewall rules",
              args: {
                name: "firewall-state",
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
              name: "--key-version",
              description: "Key version for the user-assigned encryption type",
              args: { name: "key-version" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
              name: "--tier",
              description:
                "The desired commitment tier for this account to use",
              args: {
                name: "tier",
                suggestions: [
                  "Commitment_100TB",
                  "Commitment_10TB",
                  "Commitment_1PB",
                  "Commitment_1TB",
                  "Commitment_500TB",
                  "Commitment_5PB",
                  "Consumption",
                ],
              },
            },
            {
              name: "--trusted-id-provider-state",
              description: "Enable/disable the existing trusted ID providers",
              args: {
                name: "trusted-id-provider-state",
                suggestions: ["Disabled", "Enabled"],
              },
            },
          ],
        },
        {
          name: "firewall",
          description: "Manage Data Lake Store account firewall rules",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a firewall rule in a Data Lake Store account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end of the valid ip range for the firewall rule",
                  args: { name: "end-ip-address" },
                  isRequired: true,
                },
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start of the valid ip range for the firewall rule",
                  args: { name: "start-ip-address" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes a firewall rule in a Data Lake Store account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to delete",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
              description: "Lists firewall rules in a Data Lake Store account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
                "Get the details of a firewall rule in a Data Lake Store account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to retrieve",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
                "Updates a firewall rule in a Data Lake Store account",
              options: [
                {
                  name: "--firewall-rule-name",
                  description: "The name of the firewall rule to update",
                  args: { name: "firewall-rule-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol",
                  args: { name: "end-ip-address" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
                  args: { name: "resource-group" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol",
                  args: { name: "start-ip-address" },
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
          name: "network-rule",
          description: "Manage Data Lake Store account virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a virtual network rule in a Data Lake Store account",
              options: [
                {
                  name: "--account-name",
                  description: "Name of the Data Lake Store account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "The virtual network rule name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "The subnet name or id for the virtual network rule",
                  args: { name: "subnet" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: "--vnet-name",
                  description: "The name of the virtual network rule",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes a virtual network rule in a Data Lake Store account",
              options: [
                {
                  name: "--account-name",
                  description: "Name of the Data Lake Store account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The virtual network rule name",
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
                "Lists virtual network rules in a Data Lake Store account",
              options: [
                {
                  name: "--account-name",
                  description: "Name of the Data Lake Store account",
                  args: { name: "account-name" },
                  isRequired: true,
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
              description:
                "Get the details of a virtual network rule in a Data Lake Store account",
              options: [
                {
                  name: "--account-name",
                  description: "Name of the Data Lake Store account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The virtual network rule name",
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
                "Updates a virtual network rule in a Data Lake Store account",
              options: [
                {
                  name: "--account-name",
                  description: "Name of the Data Lake Store account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to DLS. If subnet name is provided, --name must be provided",
                  args: { name: "subnet" },
                  isRequired: true,
                },
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
                  description: "The virtual network rule name",
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
                  name: "--vnet-name",
                  description: "The virtual network rule name",
                  args: { name: "vnet-name" },
                },
              ],
            },
          ],
        },
        {
          name: "trusted-provider",
          description:
            "Manage Data Lake Store account trusted identity providers",
          subcommands: [
            {
              name: "create",
              description:
                "Creates or updates the specified trusted identity provider",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                  isRequired: true,
                },
                {
                  name: "--id-provider",
                  description: "The URL of this trusted identity provider",
                  args: { name: "id-provider" },
                  isRequired: true,
                },
                {
                  name: "--trusted-id-provider-name",
                  description:
                    "The name of the trusted identity provider. This is used for differentiation of providers in the account",
                  args: { name: "trusted-id-provider-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
                  args: { name: "resource-group" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the specified trusted identity provider from the specified Data Lake Store account",
              options: [
                {
                  name: "--trusted-id-provider-name",
                  description:
                    "The name of the trusted identity provider to delete",
                  args: { name: "trusted-id-provider-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
                "Lists the Data Lake Store trusted identity providers within the specified Data Lake Store account",
              options: [
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
                "Gets the specified Data Lake Store trusted identity provider",
              options: [
                {
                  name: "--trusted-id-provider-name",
                  description:
                    "The name of the trusted identity provider to retrieve",
                  args: { name: "trusted-id-provider-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
              description: "Updates the specified trusted identity provider",
              options: [
                {
                  name: "--trusted-id-provider-name",
                  description:
                    "The name of the trusted identity provider. This is used for differentiation of providers in the account",
                  args: { name: "trusted-id-provider-name" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--id-provider",
                  description: "The URL of this trusted identity provider",
                  args: { name: "id-provider" },
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
                    "If not specified, will attempt to discover the resource group for the specified Data Lake Store account",
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
      name: "fs",
      description: "Manage a Data Lake Store filesystem",
      subcommands: [
        {
          name: "append",
          description: "Append content to a file in a Data Lake Store account",
          options: [
            {
              name: "--content",
              description: "Content to be appended to the file",
              args: { name: "content" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          description: "Creates a file or folder in a Data Lake Store account",
          options: [
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: "--content",
              description: "Content for the file to contain upon creation",
              args: { name: "content" },
            },
            {
              name: "--folder",
              description:
                "Indicates that this new item is a folder and not a file",
            },
            {
              name: "--force",
              description:
                "Indicates that, if the file or folder exists, it should be overwritten",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a file or folder in a Data Lake Store account",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--recurse",
              description:
                "Indicates this should be a recursive delete of the folder",
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
          name: "download",
          description:
            "Download a file or folder from a Data Lake Store account to the local machine",
          options: [
            {
              name: "--destination-path",
              description:
                "The local path where the file or folder will be downloaded to",
              args: { name: "destination-path" },
              isRequired: true,
            },
            {
              name: "--source-path",
              description:
                "The full path in the Data Lake Store filesystem to download the file or folder from",
              args: { name: "source-path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--block-size",
              description: "Size of a block, in bytes",
              args: { name: "block-size" },
            },
            {
              name: "--buffer-size",
              description: "Size of the transfer buffer, in bytes",
              args: { name: "buffer-size" },
            },
            {
              name: "--chunk-size",
              description: "Size of a chunk, in bytes",
              args: { name: "chunk-size" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--overwrite",
              description:
                "Indicates that, if the destination file or folder exists, it should be overwritten",
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--thread-count",
              description:
                "Parallelism of the download. Default: The number of cores in the local machine",
              args: { name: "thread-count" },
            },
          ],
        },
        {
          name: "join",
          description: "Join files in a Data Lake Store account into one file",
          options: [
            {
              name: "--destination-path",
              description:
                "The destination path in the Data Lake Store account",
              args: { name: "destination-path" },
              isRequired: true,
            },
            {
              name: "--source-paths",
              description:
                "The space-separated list of files in the Data Lake Store account to join",
              args: { name: "source-paths" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--force",
              description:
                "Indicates that, if the destination file already exists, it should be overwritten",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
            "List the files and folders in a Data Lake Store account",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "move",
          description: "Move a file or folder in a Data Lake Store account",
          options: [
            {
              name: "--destination-path",
              description:
                "The destination path in the Data Lake Store account",
              args: { name: "destination-path" },
              isRequired: true,
            },
            {
              name: "--source-path",
              description: "The file or folder to move",
              args: { name: "source-path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--force",
              description:
                "Indicates that, if the destination file or folder already exists, it should be overwritten and replaced with the file or folder being moved",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "preview",
          description:
            "Preview the content of a file in a Data Lake Store account",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--force",
              description:
                "Indicates that, if the preview is larger than 1MB, still retrieve it. This can potentially be very slow, depending on how large the file is",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--length",
              description: "The amount of data to preview in bytes",
              args: { name: "length" },
            },
            {
              name: "--offset",
              description: "The position in bytes to start the preview from",
              args: { name: "offset" },
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
          name: "remove-expiry",
          description: "Remove the expiration time for a file",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "set-expiry",
          description: "Set the expiration time for a file",
          options: [
            {
              name: "--expiration-time",
              description:
                "The absolute value of the expiration time expressed as milliseconds since the epoch",
              args: { name: "expiration-time" },
              isRequired: true,
            },
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
            "Get file or folder information in a Data Lake Store account",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "test",
          description:
            "Test for the existence of a file or folder in a Data Lake Store account",
          options: [
            {
              name: "--path",
              description:
                "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
              args: { name: "path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
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
          name: "upload",
          description: "Upload a file or folder to a Data Lake Store account",
          options: [
            {
              name: "--destination-path",
              description:
                "The full path in the Data Lake Store filesystem to upload the file or folder to",
              args: { name: "destination-path" },
              isRequired: true,
            },
            {
              name: "--source-path",
              description: "The path to the file or folder to upload",
              args: { name: "source-path" },
              isRequired: true,
            },
            {
              name: ["--account", "-n"],
              description: "Name of the Data Lake Store account",
              args: { name: "account" },
            },
            {
              name: "--block-size",
              description: "Size of a block, in bytes",
              args: { name: "block-size" },
            },
            {
              name: "--buffer-size",
              description: "Size of the transfer buffer, in bytes",
              args: { name: "buffer-size" },
            },
            {
              name: "--chunk-size",
              description: "Size of a chunk, in bytes",
              args: { name: "chunk-size" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--overwrite",
              description:
                "Indicates that, if the destination file or folder exists, it should be overwritten",
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--thread-count",
              description:
                "Parallelism of the upload. Default: The number of cores in the local machine",
              args: { name: "thread-count" },
            },
          ],
        },
        {
          name: "access",
          description:
            "Manage Data Lake Store filesystem access and permissions",
          subcommands: [
            {
              name: "remove-all",
              description:
                "Remove the access control list for a file or folder",
              options: [
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--default-acl",
                  description:
                    "A switch that, if specified, indicates that the remove ACL operation should remove the default ACL of the folder. Otherwise the regular ACL is removed",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
              name: "remove-entry",
              description:
                "Remove entries for the access control list of a file or folder",
              options: [
                {
                  name: "--acl-spec",
                  description:
                    "The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'",
                  args: { name: "acl-spec" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
              name: "set",
              description:
                "Replace the existing access control list for a file or folder",
              options: [
                {
                  name: "--acl-spec",
                  description:
                    "The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'",
                  args: { name: "acl-spec" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
              name: "set-entry",
              description:
                "Update the access control list for a file or folder",
              options: [
                {
                  name: "--acl-spec",
                  description:
                    "The ACL specification to set on the path in the format '[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,[default:]user|group|other:[entity id or UPN]:r|-w|-x|-,...'",
                  args: { name: "acl-spec" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
              name: "set-owner",
              description:
                "Set the owner information for a file or folder in a Data Lake Store account",
              options: [
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--group",
                  description:
                    "The group Azure Active Directory object ID or user principal name to set as the owning group",
                  args: { name: "group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--owner",
                  description:
                    "The user Azure Active Directory object ID or user principal name to set as the owner",
                  args: { name: "owner" },
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
              name: "set-permission",
              description:
                "Set the permissions for a file or folder in a Data Lake Store account",
              options: [
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--permission",
                  description:
                    "The octal representation of the permissions for user, group and mask",
                  args: { name: "permission" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
              description: "Display the access control list (ACL)",
              options: [
                {
                  name: "--path",
                  description:
                    "The path in the specified Data Lake Store account where the action should take place. In the format '/folder/file.txt', where the first '/' after the DNS indicates the root of the file system",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: ["--account", "-n"],
                  description: "Name of the Data Lake Store account",
                  args: { name: "account" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
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
