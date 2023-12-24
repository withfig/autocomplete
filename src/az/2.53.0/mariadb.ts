const completion: Fig.Spec = {
  name: "mariadb",
  description: "Manage Azure Database for MariaDB servers",
  subcommands: [
    {
      name: "db",
      description: "Manage MariaDB databases on a server",
      subcommands: [
        {
          name: "create",
          description: "Create a MariaDB database",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the database",
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
              name: ["--server-name", "-s"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: "--charset",
              description: "The charset of the database",
              args: { name: "charset" },
            },
            {
              name: "--collation",
              description: "The collation of the database",
              args: { name: "collation" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the database",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--server-name", "-s"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "server-name" },
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
          description: "List the databases for a server",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--server-name", "-s"],
              description: "Name of the Server",
              args: { name: "server-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a database",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the database",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--server-name", "-s"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "server-name" },
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
      name: "server",
      description: "Manage MariaDB servers",
      subcommands: [
        {
          name: "create",
          description: "Create a server",
          options: [
            {
              name: ["--admin-password", "-p"],
              description:
                "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the server. Once set, it cannot be changed",
              args: { name: "admin-user" },
            },
            {
              name: "--assign-identity",
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            {
              name: "--auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Enabled",
              args: { name: "auto-grow", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            {
              name: "--geo-redundant-backup",
              description:
                "Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--infrastructure-encryption", "-i"],
              description:
                "Add an optional second layer of encryption for data using new encryption algorithm. Default value is Disabled",
              args: {
                name: "infrastructure-encryption",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled",
              args: {
                name: "minimal-tls-version",
                suggestions: [
                  "TLS1_0",
                  "TLS1_1",
                  "TLS1_2",
                  "TLSEnforcementDisabled",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: ["--public-network-access", "--public"],
              description:
                "Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, , . Default is Enabled",
              args: { name: "public-network-access" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sku-name",
              description:
                "The name of the sku. Follows the convention {pricing tier}{compute generation}{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16",
              args: { name: "sku-name" },
            },
            {
              name: "--ssl-enforcement",
              description:
                "Enable or disable ssl enforcement for connections to server. Default is Enabled",
              args: {
                name: "ssl-enforcement",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 5120",
              args: { name: "storage-size" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--version",
              description: "Server major version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "georestore",
          description: "Geo-restore a server from backup",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--source-server", "-s"],
              description:
                "The name or ID of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            {
              name: "--geo-redundant-backup",
              description:
                "Enable or disable geo-redundant backups. Default value is Disabled. Not supported in Basic pricing tier",
              args: { name: "geo-redundant-backup" },
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
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
              name: "--sku-name",
              description:
                "The name of the sku. Defaults to sku of the source server. Follows the convention {pricing tier}{compute generation}{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16",
              args: { name: "sku-name" },
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
          description: "List available servers",
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
          name: "list-skus",
          description: "List available sku's in the given region",
          options: [
            {
              name: ["--location", "-l"],
              description: "The name of the location",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
        {
          name: "restart",
          description: "Restart a server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "restore",
          description: "Restore a server from backup",
          options: [
            {
              name: ["--restore-point-in-time", "--pitr-time"],
              description:
                "The point in time in UTC to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+08:00",
              args: { name: "restore-point-in-time" },
              isRequired: true,
            },
            {
              name: ["--source-server", "-s"],
              description:
                "The name or resource ID of the source server to restore from",
              args: { name: "source-server" },
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
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          description: "Get the details of a server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "show-connection-string",
          description:
            "Show the connection strings for a MariaDB server database",
          options: [
            {
              name: ["--admin-password", "-p"],
              description: "The login password of the administrator",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description: "The login username of the administrator",
              args: { name: "admin-user" },
            },
            {
              name: ["--database-name", "-d"],
              description: "The name of a database",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--server-name", "-s"],
              description: "Name of the server",
              args: { name: "server-name" },
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
          description: "Start a stopped server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          name: "stop",
          description: "Stop a running server",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          description: "Update a server",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--admin-password", "-p"],
              description:
                "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
              args: { name: "admin-password" },
            },
            {
              name: "--assign-identity",
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            {
              name: "--auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Enabled",
              args: { name: "auto-grow", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
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
              name: "--minimal-tls-version",
              description:
                "Set the minimal TLS version for connections to server when SSL is enabled. Default is TLSEnforcementDisabled",
              args: {
                name: "minimal-tls-version",
                suggestions: [
                  "TLS1_0",
                  "TLS1_1",
                  "TLS1_2",
                  "TLSEnforcementDisabled",
                ],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: ["--public-network-access", "--public"],
              description:
                "Enable or disable public network access to server. When disabled, only connections made through Private Links can reach this server. Allowed values are : Enabled, Disabled, all, 0.0.0.0, , . Default is Enabled",
              args: { name: "public-network-access" },
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
              name: "--sku-name",
              description:
                "The name of the sku. Follows the convention {pricing tier}{compute generation}{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16",
              args: { name: "sku-name" },
            },
            {
              name: "--ssl-enforcement",
              description:
                "Enable or disable ssl enforcement for connections to server. Default is Enabled",
              args: {
                name: "ssl-enforcement",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server (unit is megabytes). Minimum 5120 and increases in 1024 increments. Default is 5120",
              args: { name: "storage-size" },
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
          description: "Wait for server to satisfy certain conditions",
          options: [
            {
              name: "--custom",
              description:
                "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
              args: { name: "custom" },
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
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
          ],
        },
        {
          name: "configuration",
          description: "Manage configuration values for a server",
          subcommands: [
            {
              name: "list",
              description: "List the configuration values for a server",
              options: [
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Update the configuration of a server",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the configuration",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--value",
                  description:
                    "Value of the configuration. If not provided, configuration value will be set to default",
                  args: { name: "value" },
                },
              ],
            },
            {
              name: "show",
              description: 'Get the configuration for a server."',
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the server configuration",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
          name: "firewall-rule",
          description: "Manage firewall rules for a server",
          subcommands: [
            {
              name: "create",
              description: "Create a new firewall rule for a server",
              options: [
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "start-ip-address" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "List all firewall rules for a server",
              options: [
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Get the details of a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Update a firewall rule",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
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
                  description:
                    "The name of the firewall rule. The firewall rule name cannot be empty. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
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
          name: "private-endpoint-connection",
          description: "Manage MariaDB server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a MariaDB server",
              options: [
                {
                  name: "--description",
                  description: "Comments for approve operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "The resource group name of specified server",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the Server. Required if --id is not specified",
                  args: { name: "server-name" },
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
              name: "delete",
              description:
                "Delete the specified private endpoint connection associated with a MariaDB server",
              options: [
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "The resource group name of specified server",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the Server. Required if --id is not specified",
                  args: { name: "server-name" },
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
              name: "reject",
              description:
                "Reject the specified private endpoint connection associated with a MariaDB server",
              options: [
                {
                  name: "--description",
                  description: "Comments for reject operation",
                  args: { name: "description" },
                },
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "The resource group name of specified server",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the Server. Required if --id is not specified",
                  args: { name: "server-name" },
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
                "Show details of a private endpoint connection associated with a MariaDB server",
              options: [
                {
                  name: "--id",
                  description:
                    "The ID of the private endpoint connection associated with the Server. If specified --server-name/-s and --name/-n, this should be omitted",
                  args: { name: "id" },
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
                    "The name of the private endpoint connection associated with the Server. Required if --id is not specified",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "The resource group name of specified server",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the Server. Required if --id is not specified",
                  args: { name: "server-name" },
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
          name: "private-link-resource",
          description: "Manage MariaDB server private link resources",
          subcommands: [
            {
              name: "list",
              description:
                "List the private link resources supported for a MariaDB server",
              options: [
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
                  name: ["--server-name", "-s"],
                  description: "Name of the Server",
                  args: { name: "server-name" },
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
          name: "replica",
          description: "Manage read replicas",
          subcommands: [
            {
              name: "create",
              description: "Create a read replica for a server",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
                  name: ["--source-server", "-s"],
                  description:
                    "The name or resource ID of the master server to the create replica for",
                  args: { name: "source-server" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. If not provided, the create replica will be in the same location as the master server",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--sku-name",
                  description:
                    "The name of the sku. Follows the convention {pricing tier}{compute generation}{vCores} in shorthand. Examples: B_Gen5_1, GP_Gen5_4, MO_Gen5_16",
                  args: { name: "sku-name" },
                },
              ],
            },
            {
              name: "list",
              description: "List all read replicas for a given server",
              options: [
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
                  name: ["--server-name", "-s"],
                  description: "Name of the master server",
                  args: { name: "server-name" },
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
              description:
                "Stop replication to a read replica and make it a read/write server",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
          ],
        },
        {
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to a MariaDB server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet rule",
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided",
                  args: { name: "subnet" },
                  isRequired: true,
                },
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create vnet rule before virtual network has vnet service endpoint enabled",
                  args: {
                    name: "ignore-missing-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--vnet-name",
                  description: "The virtual network name",
                  args: { name: "vnet-name" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the virtual network rule with the given name",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Gets a list of virtual network rules in a server",
              options: [
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Gets a virtual network rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
              description: "Update a virtual network rule",
              options: [
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Postgres Server. If subnet name is provided, --vnet-name must be provided",
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
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create vnet rule before virtual network has vnet service endpoint enabled",
                  args: {
                    name: "ignore-missing-endpoint",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the vnet rule",
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
                  name: ["--server-name", "-s"],
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
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
                  description: "The virtual network name",
                  args: { name: "vnet-name" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "server-logs",
      description: "Manage server logs",
      subcommands: [
        {
          name: "download",
          description: "Download log files",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Space-separated list of log filenames on the server to download",
              args: { name: "name" },
              isRequired: true,
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
              name: ["--server-name", "-s"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "server-name" },
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
          description: "List log files for a server",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--server-name", "-s"],
              description: "Name of the Server",
              args: { name: "server-name" },
              isRequired: true,
            },
            {
              name: "--file-last-written",
              description:
                "Integer in hours to indicate file last modify time, default value is 72",
              args: { name: "file-last-written" },
            },
            {
              name: "--filename-contains",
              description: "The pattern that file name should match",
              args: { name: "filename-contains" },
            },
            {
              name: "--max-file-size",
              description: "The file size limitation to filter files",
              args: { name: "max-file-size" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
