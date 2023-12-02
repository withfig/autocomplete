const completion: Fig.Spec = {
  name: "postgres",
  description: "Manage Azure Database for PostgreSQL servers",
  subcommands: [
    {
      name: "db",
      description: "Manage PostgreSQL databases on a server",
      subcommands: [
        {
          name: "create",
          description: "Create a PostgreSQL database",
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
      name: "down",
      description: "Delete the PostgreSQL server and its cached information",
      options: [
        {
          name: "--delete-group",
          description: "Delete the resource group",
          args: { name: "delete-group" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "show-connection-string",
      description:
        "Show the connection strings for a PostgreSQL server database",
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
      name: "up",
      description:
        "Set up an Azure Database for PostgreSQL server and configurations",
      options: [
        {
          name: ["--admin-password", "-p"],
          description:
            "The login password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters.Your password cannot contain all or part of the login name. Part of a login name is defined as three or more consecutive alphanumeric characters",
          args: { name: "admin-password" },
        },
        {
          name: ["--admin-user", "-u"],
          description: "The login username of the administrator",
          args: { name: "admin-user" },
        },
        {
          name: "--backup-retention",
          description: "The number of days a backup is retained",
          args: { name: "backup-retention" },
        },
        {
          name: ["--database-name", "-d"],
          description: "The name of a database to initialize",
          args: { name: "database-name" },
        },
        {
          name: "--generate-password",
          description: "Generate a password",
          args: { name: "generate-password" },
        },
        {
          name: "--geo-redundant-backup",
          description: "Enable Geo-redundant or not for server backup",
          args: {
            name: "geo-redundant-backup",
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
          name: ["--server-name", "-s"],
          description: "Name of the server",
          args: { name: "server-name" },
        },
        {
          name: "--sku-name",
          description:
            "The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8",
          args: { name: "sku-name" },
        },
        {
          name: "--ssl-enforcement",
          description: "Enable ssl enforcement or not when connect to server",
          args: {
            name: "ssl-enforcement",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--storage-size",
          description: "The max storage size of the server. Unit is megabytes",
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
        {
          name: "--version",
          description: "Server version",
          args: { name: "version" },
        },
      ],
    },
    {
      name: "flexible-server",
      description: "Manage Azure Database for PostgreSQL Flexible Servers",
      subcommands: [
        {
          name: "connect",
          description: "Connect to a flexible server",
          options: [
            {
              name: ["--admin-user", "-u"],
              description: "The login username of the administrator",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--admin-password", "-p"],
              description: "The login password of the administrator",
              args: { name: "admin-password" },
            },
            {
              name: ["--database-name", "-d"],
              description: "The name of a database",
              args: { name: "database-name" },
            },
            {
              name: "--interactive",
              description:
                "Pass this parameter to connect to database in interactive mode",
              args: { name: "interactive" },
            },
            {
              name: ["--querytext", "-q"],
              description:
                "Argument 'querytext' has been deprecated and will be removed in a future release. Use 'execute' instead. A query to run against the flexible server",
              args: { name: "querytext" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a PostgreSQL flexible server",
          options: [
            {
              name: "--active-directory-auth",
              description:
                "Whether Azure Active Directory authentication is enabled",
              args: {
                name: "active-directory-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--address-prefixes",
              description:
                "The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16",
              args: { name: "address-prefixes" },
            },
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
              name: "--backup-identity",
              description:
                "The name or resource ID of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource ID of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 7 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            {
              name: ["--database-name", "-d"],
              description:
                "The name of the database to be created when provisioning the database server",
              args: { name: "database-name" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--high-availability",
              description:
                "Enable (ZoneRedundant or SameZone) or disable high availability feature",
              args: {
                name: "high-availability",
                suggestions: ["Disabled", "SameZone", "ZoneRedundant"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource ID of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--key",
              description:
                "The resource ID of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--password-auth",
              description: "Whether password authentication is enabled",
              args: {
                name: "password-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: "--public-access",
              description:
                'Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Setting it to "None" sets the server in public access mode but does not create a firewall rule',
              args: { name: "public-access" },
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
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
            },
            {
              name: "--standby-zone",
              description:
                "The availability zone information of the standby server when high availability is enabled",
              args: { name: "standby-zone" },
            },
            {
              name: "--storage-auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Enabled",
              args: {
                name: "storage-auto-grow",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB",
              args: { name: "storage-size" },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of a new or existing subnet. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
              args: { name: "subnet" },
            },
            {
              name: "--subnet-prefixes",
              description:
                "The subnet IP address prefix to use when creating a new subnet in CIDR format. Default value is 10.0.0.0/24",
              args: { name: "subnet-prefixes" },
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
                "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
              args: { name: "tier" },
            },
            {
              name: "--version",
              description: "Server major version",
              args: { name: "version" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a flexible server",
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
          name: "execute",
          description: "Connect to a flexible server",
          options: [
            {
              name: ["--admin-password", "-p"],
              description: "The login password of the administrator",
              args: { name: "admin-password" },
              isRequired: true,
            },
            {
              name: ["--admin-user", "-u"],
              description: "The login username of the administrator",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--database-name", "-d"],
              description: "The name of a database",
              args: { name: "database-name" },
            },
            {
              name: ["--file-path", "-f"],
              description: "The path of the sql file to execute",
              args: { name: "file-path" },
            },
            {
              name: ["--querytext", "-q"],
              description: "A query to run against the flexible server",
              args: { name: "querytext" },
            },
          ],
        },
        {
          name: "geo-restore",
          description: "Geo-restore a flexible server from backup",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--source-server",
              description:
                "The name or resource ID of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            {
              name: "--address-prefixes",
              description:
                "The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16",
              args: { name: "address-prefixes" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource ID of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource ID of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource ID of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description:
                "The resource ID of the primary keyvault key for data encryption",
              args: { name: "key" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of a new or existing subnet. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
              args: { name: "subnet" },
            },
            {
              name: "--subnet-prefixes",
              description:
                "The subnet IP address prefix to use when creating a new subnet in CIDR format. Default value is 10.0.0.0/24",
              args: { name: "subnet-prefixes" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "list",
          description: "List available flexible servers",
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
          description: "Lists available sku's in the given region",
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
        {
          name: "restart",
          description: "Restart a flexible server",
          options: [
            {
              name: "--failover",
              description:
                "Forced or planned failover for server restart operation. Allowed values: Forced, Planned",
              args: { name: "failover" },
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
          description: "Restore a flexible server from backup",
          options: [
            {
              name: "--source-server",
              description:
                "The name or resource ID of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            {
              name: "--address-prefixes",
              description:
                "The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16",
              args: { name: "address-prefixes" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource ID of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource ID of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource ID of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description:
                "The resource ID of the primary keyvault key for data encryption",
              args: { name: "key" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--restore-time",
              description:
                "The point in time in UTC to restore from (ISO8601 format), e.g., 2017-04-26T02:10:00+00:00The default value is set to current time",
              args: { name: "restore-time" },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of a new or existing subnet. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
              args: { name: "subnet" },
            },
            {
              name: "--subnet-prefixes",
              description:
                "The subnet IP address prefix to use when creating a new subnet in CIDR format. Default value is 10.0.0.0/24",
              args: { name: "subnet-prefixes" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "revive-dropped",
          description: "Revive a dropped flexible server from backup",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: "--source-server",
              description:
                "The name or resource ID of the source server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            {
              name: "--address-prefixes",
              description:
                "The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16",
              args: { name: "address-prefixes" },
            },
            {
              name: "--backup-identity",
              description:
                "The name or resource ID of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource ID of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
            },
            {
              name: "--geo-redundant-backup",
              description: "Whether or not geo redundant backup is enabled",
              args: {
                name: "geo-redundant-backup",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource ID of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description:
                "The resource ID of the primary keyvault key for data encryption",
              args: { name: "key" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--subnet",
              description:
                "Name or resource ID of a new or existing subnet. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
              args: { name: "subnet" },
            },
            {
              name: "--subnet-prefixes",
              description:
                "The subnet IP address prefix to use when creating a new subnet in CIDR format. Default value is 10.0.0.0/24",
              args: { name: "subnet-prefixes" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
              args: { name: "vnet" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone", "-z"],
              description:
                "Availability zone into which to provision the resource",
              args: { name: "zone" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of a flexible server",
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
            "Show the connection strings for a PostgreSQL flexible-server database",
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
              name: ["--database-name", "-d"],
              description:
                "The name of the database to be created when provisioning the database server",
              args: { name: "database-name" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--pg-bouncer",
              description: "Show connection strings for PgBouncer",
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
          name: "start",
          description: "Start a flexible server",
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
          description: "Stop a flexible server",
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
          description: "Update a flexible server",
          options: [
            {
              name: "--active-directory-auth",
              description:
                "Whether Azure Active Directory authentication is enabled",
              args: {
                name: "active-directory-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
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
              name: "--backup-identity",
              description:
                "The name or resource ID of the geo backup user identity for data encryption. The identity needs to be in the same region as the backup region",
              args: { name: "backup-identity" },
            },
            {
              name: "--backup-key",
              description:
                "The resource ID of the geo backup keyvault key for data encryption. The key needs to be in the same region as the backup region",
              args: { name: "backup-key" },
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
              name: "--high-availability",
              description:
                "Enable (ZoneRedundant or SameZone) or disable high availability feature",
              args: {
                name: "high-availability",
                suggestions: ["Disabled", "SameZone", "ZoneRedundant"],
              },
            },
            {
              name: "--identity",
              description:
                "The name or resource ID of the user assigned identity for data encryption",
              args: { name: "identity" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key",
              description:
                "The resource ID of the primary keyvault key for data encryption",
              args: { name: "key" },
            },
            {
              name: "--maintenance-window",
              description:
                'Period of time (UTC) designated for maintenance. Examples: "Sun:23:30" to schedule on Sunday, 11:30pm UTC. To set back to default pass in "Disabled"',
              args: { name: "maintenance-window" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
              args: { name: "name" },
            },
            {
              name: "--password-auth",
              description: "Whether password authentication is enabled",
              args: {
                name: "password-auth",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--private-dns-zone",
              description:
                "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
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
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
            },
            {
              name: "--standby-zone",
              description:
                "The availability zone information of the standby server when high availability is enabled",
              args: { name: "standby-zone" },
            },
            {
              name: "--storage-auto-grow",
              description:
                "Enable or disable autogrow of the storage. Default value is Enabled",
              args: {
                name: "storage-auto-grow",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--storage-size",
              description:
                "The storage capacity of the server. Minimum is 32 GiB and max is 16 TiB",
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
            {
              name: "--tier",
              description:
                "Compute tier of the server. Accepted values: Burstable, GeneralPurpose, MemoryOptimized",
              args: { name: "tier" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the major version of a flexible server",
          options: [
            {
              name: ["--version", "-v"],
              description: "Server major version",
              args: { name: "version", suggestions: ["12", "13", "14"] },
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
          name: "wait",
          description:
            "Wait for the flexible server to satisfy certain conditions",
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
            {
              name: "--updated",
              description:
                "Wait until updated with provisioningState at 'Succeeded'",
            },
          ],
        },
        {
          name: "ad-admin",
          description: "Manage server Active Directory administrators",
          subcommands: [
            {
              name: "create",
              description: "Create an Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--type", "-t"],
                  description: "Type of the Azure AD administrator",
                  args: {
                    name: "type",
                    suggestions: [
                      "Group",
                      "ServicePrincipal",
                      "Unknown",
                      "User",
                    ],
                  },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an Active Directory administrator",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description: "List all Active Directory administrators",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Get an Active Directory administrator",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
              ],
            },
            {
              name: "wait",
              description:
                "Wait for an Active Directory administrator to satisfy certain conditions",
              options: [
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
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
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
          name: "backup",
          description: "Manage flexible server backups",
          subcommands: [
            {
              name: "list",
              description: "List all the backups for a given server",
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
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a specific backup for a given server",
              options: [
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the backup",
                  args: { name: "backup-name" },
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
          name: "db",
          description: "Manage PostgreSQL databases on a flexible server",
          subcommands: [
            {
              name: "create",
              description: "Create a PostgreSQL database on a flexible server",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: "--charset",
                  description:
                    "The charset of the database. The default value is UTF8",
                  args: { name: "charset" },
                },
                {
                  name: "--collation",
                  description: "The collation of the database",
                  args: { name: "collation" },
                },
                {
                  name: ["--database-name", "-d"],
                  description:
                    "The name of the database to be created when provisioning the database server",
                  args: { name: "database-name" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a database on a flexible server",
              options: [
                {
                  name: ["--database-name", "-d"],
                  description:
                    "The name of the database to be created when provisioning the database server",
                  args: { name: "database-name" },
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
              description: "List the databases for a flexible server",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
                  name: ["--database-name", "-d"],
                  description:
                    "The name of the database to be created when provisioning the database server",
                  args: { name: "database-name" },
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
          name: "deploy",
          description:
            "Enable and run GitHub Actions workflow for PostgreSQL server",
          subcommands: [
            {
              name: "run",
              description: "Run an existing workflow in your github repository",
              options: [
                {
                  name: "--action-name",
                  description: "The name of the github action",
                  args: { name: "action-name" },
                  isRequired: true,
                },
                {
                  name: "--branch",
                  description:
                    "The name of the branch you want upload github action file. The default will be your current branch",
                  args: { name: "branch" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "setup",
              description:
                "Create GitHub Actions workflow file for PostgreSQL server",
              options: [
                {
                  name: ["--admin-password", "-p"],
                  description:
                    "The password of the administrator. Minimum 8 characters and maximum 128 characters. Password must contain characters from three of the following categories: English uppercase letters, English lowercase letters, numbers, and non-alphanumeric characters",
                  args: { name: "admin-password" },
                  isRequired: true,
                },
                {
                  name: ["--admin-user", "-u"],
                  description:
                    "Administrator username for the server. Once set, it cannot be changed",
                  args: { name: "admin-user" },
                  isRequired: true,
                },
                {
                  name: "--repo",
                  description:
                    "The name of your github username and repository e.g., Azure/azure-cli",
                  args: { name: "repo" },
                  isRequired: true,
                },
                {
                  name: "--sql-file",
                  description:
                    "The path of the sql file. The sql file should be already in the repository",
                  args: { name: "sql-file" },
                  isRequired: true,
                },
                {
                  name: "--action-name",
                  description: "The name of the github action",
                  args: { name: "action-name" },
                },
                {
                  name: "--allow-push",
                  description:
                    "Push the action yml file to the remote repository. The changes will be pushed to origin repository, speicified branch or current branch if not specified",
                },
                {
                  name: "--branch",
                  description:
                    "The name of the branch you want upload github action file. The default will be your current branch",
                  args: { name: "branch" },
                },
                {
                  name: ["--database-name", "-d"],
                  description:
                    "The name of the database to be created when provisioning the database server",
                  args: { name: "database-name" },
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
          name: "firewall-rule",
          description: "Manage firewall rules for a server",
          subcommands: [
            {
              name: "create",
              description: "Create a new firewall rule for a flexible server",
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
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
                },
                {
                  name: ["--rule-name", "-r"],
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "rule-name" },
                },
                {
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "start-ip-address" },
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
                  name: ["--rule-name", "-r"],
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "rule-name" },
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
              description: "List all firewall rules for a flexible server",
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
                  name: ["--rule-name", "-r"],
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "rule-name" },
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
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
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
                  name: ["--rule-name", "-r"],
                  description:
                    "The name of the firewall rule. If name is omitted, default name will be chosen for firewall name. The firewall rule name can only contain 0-9, a-z, A-Z, '-' and '_'. Additionally, the name of the firewall rule must be at least 3 characters and no more than 128 characters in length",
                  args: { name: "rule-name" },
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
          name: "identity",
          description: "Manage server user assigned identities",
          subcommands: [
            {
              name: "assign",
              description: "Add user asigned managed identities to the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description: "Space-separated names or ID's of identities",
                  args: { name: "identity" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all user assigned managed identities from the server",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description:
                "Remove user asigned managed identites from the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description: "Space-separated names or ID's of identities",
                  args: { name: "identity" },
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
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get an user assigned managed identity from the server",
              options: [
                {
                  name: ["--identity", "-n"],
                  description: "Name or ID of identity to show",
                  args: { name: "identity" },
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
              ],
            },
          ],
        },
        {
          name: "migration",
          description:
            "Manage migration workflows for PostgreSQL Flexible Servers",
          subcommands: [
            {
              name: "check-name-availability",
              description: "Checks if the provided migration-name can be used",
              options: [
                {
                  name: "--migration-name",
                  description: "Name of the migration",
                  args: { name: "migration-name" },
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
                  description: "Migration target server name",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource Group Name of the migration target server",
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
              name: "create",
              description:
                "Create a new migration workflow for a flexible server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Migration target server name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--properties", "-b"],
                  description:
                    "Request properties. Use double or no quotes to pass in json filepath as argument",
                  args: { name: "properties" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource Group Name of the migration target server",
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
                  name: "--migration-mode",
                  description: "Either offline or online(with CDC) migration",
                  args: {
                    name: "migration-mode",
                    suggestions: ["offline", "online"],
                  },
                },
                {
                  name: "--migration-name",
                  description: "Name of the migration",
                  args: { name: "migration-name" },
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
              name: "list",
              description: "List the migrations of a flexible server",
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
                    "Resource Group Name of the migration target server",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--filter",
                  description:
                    "Indicate whether all the migrations or just the Active migrations are returned. Valid values are: Active and All",
                  args: { name: "filter", suggestions: ["Active", "All"] },
                },
              ],
            },
            {
              name: "show",
              description: "Get the details of a specific migration",
              options: [
                {
                  name: "--migration-name",
                  description: "Name of the migration",
                  args: { name: "migration-name" },
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
                  description: "Migration target server name",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource Group Name of the migration target server",
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
              description: "Update a specific migration",
              options: [
                {
                  name: "--migration-name",
                  description: "Name of the migration",
                  args: { name: "migration-name" },
                  isRequired: true,
                },
                {
                  name: "--cancel",
                  description:
                    "Cancel the data migration for all the databases",
                  args: { name: "cancel" },
                },
                {
                  name: "--cutover",
                  description:
                    "Cut-over the data migration for all the databases in the migration. After this is complete, subsequent updates to all databases will not be migrated to the target",
                  args: { name: "cutover" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Migration target server name",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Resource Group Name of the migration target server",
                  args: { name: "resource-group" },
                },
                {
                  name: "--setup-replication",
                  description:
                    "Allow the migration workflow to setup logical replication on the source. Note that this command will restart the source server",
                  args: { name: "setup-replication" },
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
          name: "parameter",
          description:
            "Commands for managing server parameter values for flexible server",
          subcommands: [
            {
              name: "list",
              description: "List the parameter values for a flexible server",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "set",
              description: "Update the parameter of a flexible server",
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
                  name: "--source",
                  description: "Source of the configuration",
                  args: { name: "source" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: ["--value", "-v"],
                  description: "Value of the configuration",
                  args: { name: "value" },
                },
              ],
            },
            {
              name: "show",
              description: 'Get the parameter for a flexible server."',
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
          name: "replica",
          description: "Manage read replicas",
          subcommands: [
            {
              name: "create",
              description: "Create a read replica for a server",
              options: [
                {
                  name: "--replica-name",
                  description: "The name of the server to restore to",
                  args: { name: "replica-name" },
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
                  name: "--source-server",
                  description:
                    "The name or resource ID of the source server to restore from",
                  args: { name: "source-server" },
                  isRequired: true,
                },
                {
                  name: "--address-prefixes",
                  description:
                    "The IP address prefix to use when creating a new virtual network in CIDR format. Default value is 10.0.0.0/16",
                  args: { name: "address-prefixes" },
                },
                {
                  name: "--identity",
                  description:
                    "The name or resource ID of the user assigned identity for data encryption",
                  args: { name: "identity" },
                },
                {
                  name: "--key",
                  description:
                    "The resource ID of the primary keyvault key for data encryption",
                  args: { name: "key" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--private-dns-zone",
                  description:
                    "This parameter only applies for a server with private access. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
                  args: { name: "private-dns-zone" },
                },
                {
                  name: "--subnet",
                  description:
                    "Name or resource ID of a new or existing subnet. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
                  args: { name: "subnet" },
                },
                {
                  name: "--subnet-prefixes",
                  description:
                    "The subnet IP address prefix to use when creating a new subnet in CIDR format. Default value is 10.0.0.0/24",
                  args: { name: "subnet-prefixes" },
                },
                {
                  name: "--vnet",
                  description:
                    "Name or ID of a new or existing virtual network. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
                  args: { name: "vnet" },
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
                {
                  name: ["--zone", "-z"],
                  description:
                    "Availability zone into which to provision the resource",
                  args: { name: "zone" },
                },
              ],
            },
            {
              name: "list",
              description: "List all read replicas for a given server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the source server",
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
              name: "stop-replication",
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
      ],
    },
    {
      name: "server",
      description: "Manage PostgreSQL servers",
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
              description:
                "Server major version. https://docs.microsoft.com/en-us/azure/postgresql/single-server/concepts-supported-versions",
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
              description: "The name of the location. Required",
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
            "Show the connection strings for a PostgreSQL server database",
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
          name: "ad-admin",
          description:
            "Manage a postgres server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Active Directory Administrator for PostgreSQL server",
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--object-id", "-i"],
                  description: "The unique ID of the Azure AD administrator",
                  args: { name: "object-id" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete an Active Directory Administrator for PostgreSQL server",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List all Active Directory Administrators for PostgreSQL server",
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
              description:
                "Get Active Directory Administrator information for a PostgreSQL server",
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the PostgreSQL server Active Directory Administrator is met",
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
                  description: "The name of the server configuration. Required",
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
          name: "key",
          description: "Manage PostgreSQL server keys",
          subcommands: [
            {
              name: "create",
              description: "Create server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-s"],
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
              ],
            },
            {
              name: "delete",
              description: "Delete server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-s"],
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
              name: "list",
              description: "Gets a list of  Server keys",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-s"],
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
              name: "show",
              description: "Show server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-s"],
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
          ],
        },
        {
          name: "private-endpoint-connection",
          description: "Manage PostgreSQL server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a PostgreSQL server",
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
                "Delete the specified private endpoint connection associated with a PostgreSQL server",
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
                "Reject the specified private endpoint connection associated with a PostgreSQL server",
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
                "Show details of a private endpoint connection associated with a PostgreSQL server",
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
          description: "Manage PostgreSQL server private link resources",
          subcommands: [
            {
              name: "list",
              description:
                "List the private link resources supported for a PostgreSQL server",
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
                "Create a virtual network rule to allows access to a PostgreSQL server",
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
      name: "server-arc",
      description: "Manage Azure Arc enabled PostgreSQL servers",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure Arc enabled PostgreSQL server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Arc enabled PostgreSQL server",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ad-account-name",
              description:
                "The Active Directory account name for this Azure Arc enabled PostgreSQL server. This account needs to be created prior to the deployment of this instance",
              args: { name: "ad-account-name" },
            },
            {
              name: "--ad-connector-name",
              description:
                "The name of the Active Directory Connector. This parameter indicates an intent to deploy with AD support",
              args: { name: "ad-connector-name" },
            },
            {
              name: "--admin-login-secret",
              description:
                "Name of the Kubernetes secret to generate that hosts or will host user admin login account credential",
              args: { name: "admin-login-secret" },
            },
            {
              name: "--cert-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for client SSL connections",
              args: { name: "cert-private-key-file" },
            },
            {
              name: "--cert-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for client SSL connections",
              args: { name: "cert-public-key-file" },
            },
            {
              name: "--cores-limit",
              description:
                "The maximum number of CPU cores that can be used for Azure Arc enabled PostgreSQL server",
              args: { name: "cores-limit" },
            },
            {
              name: "--cores-request",
              description:
                "The minimum number of CPU cores that must be available per node to schedule the service",
              args: { name: "cores-request" },
            },
            {
              name: "--dev",
              description:
                "If this is specified, then it is considered a dev instance and will not be billed for",
              args: { name: "dev" },
            },
            {
              name: "--dns-name",
              description:
                "The service DNS name exposed to the end-users to connect to this Azure Arc enabled PostgreSQL server (e.g. pginstancename.contoso.com)",
              args: { name: "dns-name" },
            },
            {
              name: "--extensions",
              description:
                "Comma seperated list of extensions to be enabled. Once enabled, extension can be installed via 'CREATE EXTENSION' command",
              args: { name: "extensions" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace where the Azure Arc enabled PostgreSQL server is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--keytab-secret",
              description:
                "The name of the Kubernetes secret that contains the keytab file for this Azure Arc enabled PostgreSQL server",
              args: { name: "keytab-secret" },
            },
            {
              name: "--log-level",
              description:
                "Sets the log_min_messages setting for the PostgreSQL engine. Valid values are: DEBUG5, DEBUG4, DEBUG3, DEBUG2, DEBUG1, INFO, NOTICE, WARNING, ERROR, LOG, FATAL, PANIC",
              args: { name: "log-level" },
            },
            {
              name: "--memory-limit",
              description:
                "The memory limit of the Azure Arc enabled PostgreSQL server as a number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description:
                "The memory request of the Azure Arc enabled PostgreSQL server as a number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "memory-request" },
            },
            {
              name: "--no-external-endpoint",
              description:
                "If specified, no external service will be created. Otherwise, an external service will be created using either the type given with the --service-type argument or the same service type as the data controller",
              args: { name: "no-external-endpoint" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for deployment to be ready before returning",
            },
            {
              name: "--path",
              description:
                "The path to the source json file for the Azure Arc enabled PostgreSQL server. This is optional",
              args: { name: "path" },
            },
            {
              name: "--port",
              description:
                "The port number on which the primary service is exposed to the end-users",
              args: { name: "port" },
            },
            {
              name: "--retention-days",
              description:
                "Backup retention period, specified in days. Allowed values are 0 to 35. Default is 7. Setting the retention period to 0 will turn off automatic backups for Azure Arc enabled PostgreSql",
              args: { name: "retention-days" },
            },
            {
              name: "--service-annotations",
              description:
                "Comma-separated list of annotations to apply to all external services",
              args: { name: "service-annotations" },
            },
            {
              name: "--service-cert-secret",
              description:
                "Name of the Kubernetes secret to generate that hosts the SSL certificate",
              args: { name: "service-cert-secret" },
            },
            {
              name: "--service-labels",
              description:
                "Comma-separated list of labels to apply to all external services",
              args: { name: "service-labels" },
            },
            {
              name: "--service-type",
              description: "The type for the primary service",
              args: { name: "service-type" },
            },
            {
              name: "--storage-class-backups",
              description:
                "The storage class to be used for backup persistent volumes",
              args: { name: "storage-class-backups" },
            },
            {
              name: "--storage-class-data",
              description:
                "The storage class to be used for data persistent volumes",
              args: { name: "storage-class-data" },
            },
            {
              name: "--storage-class-logs",
              description:
                "The storage class to be used for logs persistent volumes",
              args: { name: "storage-class-logs" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
            {
              name: "--volume-size-backups",
              description:
                "The size of the storage volume to be used for backups as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-backups" },
            },
            {
              name: "--volume-size-data",
              description:
                "The size of the storage volume to be used for data as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-data" },
            },
            {
              name: "--volume-size-logs",
              description:
                "The size of the storage volume to be used for logs as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-logs" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Azure Arc enabled PostgreSQL server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Arc enabled PostgreSQL server",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--force", "-f"],
              description:
                "Delete the Azure Arc enabled PostgreSQL server without confirmation",
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace where the Azure Arc enabled PostgreSQL server is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "list",
          description: "List Azure Arc enabled PostgreSQL server",
          options: [
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace where the Azure Arc enabled PostgreSQL servers are deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "restore",
          description:
            "Restore an Azure Arc enabled PostgreSQL server from backup from another server",
          options: [
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace that contains the Azure Arc enabled PostgreSql. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure Arc enabled PostgreSQL server to be created",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--source-server",
              description:
                "The name of the Azure Arc enabled PostgreSQL server to restore from",
              args: { name: "source-server" },
              isRequired: true,
            },
            {
              name: "--dry-run",
              description:
                "If set, validates the source and destination resources and the time, without performing the restore. The earliest and latest possible restore times are returned in the status of the restore task",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for deployment to be ready before returning",
            },
            {
              name: "--storage-class-backups",
              description:
                "The storage class to be used for backup persistent volumes",
              args: { name: "storage-class-backups" },
            },
            {
              name: "--storage-class-data",
              description:
                "The storage class to be used for data persistent volumes",
              args: { name: "storage-class-data" },
            },
            {
              name: "--storage-class-logs",
              description:
                "The storage class to be used for logs persistent volumes",
              args: { name: "storage-class-logs" },
            },
            {
              name: ["--time", "-t"],
              description:
                "The point in time of the source server that will be restored to create the new Azure Arc enabled PostgreSQL server. Must be greater than or equal to the source database's earliest restore date/time value. Time should be in following format: 'YYYY-MM-DDTHH:MM:SSZ'. If no time is provided, the most recent backup will be restored",
              args: { name: "time" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
            {
              name: "--volume-size-backups",
              description:
                "The size of the storage volume to be used for backups as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-backups" },
            },
            {
              name: "--volume-size-data",
              description:
                "The size of the storage volume to be used for data as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-data" },
            },
            {
              name: "--volume-size-logs",
              description:
                "The size of the storage volume to be used for logs as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-logs" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the details of an Azure Arc enabled PostgreSQL server",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure Arc enabled PostgreSQL server",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace where the Azure Arc enabled PostgreSQL server is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--path",
              description:
                "A path where the full specification for the Azure Arc enabled PostgreSQL server should be written. If omitted, the specification will be written to standard output",
              args: { name: "path" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the configuration of an Azure Arc enabled PostgreSQL server",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure Arc enabled PostgreSQL server that is being updated. The name under which your instance is deployed cannot be changed",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--cert-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for client SSL connections",
              args: { name: "cert-private-key-file" },
            },
            {
              name: "--cert-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for client SSL connections",
              args: { name: "cert-public-key-file" },
            },
            {
              name: "--cores-limit",
              description:
                "The maximum number of CPU cores for Azure Arc enabled PostgreSQL server that can be used per node. To remove the cores_limit, specify its value as empty string",
              args: { name: "cores-limit" },
            },
            {
              name: "--cores-request",
              description:
                "The minimum number of CPU cores that must be available per node to schedule the service. To remove the cores_request, specify its value as empty string",
              args: { name: "cores-request" },
            },
            {
              name: "--dev",
              description:
                "If this is specified, then it is considered a dev instance and will not be billed for",
              args: { name: "dev" },
            },
            {
              name: "--extensions",
              description:
                "Comma seperated list of extensions to be enabled. To Add or remove a new extension update the existing list of extensions. Once enabled, extension can be installed via 'CREATE EXTENSION' command",
              args: { name: "extensions" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace where the Azure Arc enabled PostgreSQL server is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--keytab-secret",
              description:
                "The name of the Kubernetes secret that contains the keytab file for this Azure Arc enabled PostgreSQL server",
              args: { name: "keytab-secret" },
            },
            {
              name: "--log-level",
              description:
                "Sets the log_min_messages setting for the PostgreSQL engine. Valid values are: DEBUG5, DEBUG4, DEBUG3, DEBUG2, DEBUG1, INFO, NOTICE, WARNING, ERROR, LOG, FATAL, PANIC",
              args: { name: "log-level" },
            },
            {
              name: "--memory-limit",
              description:
                "The memory limit for Azure Arc enabled PostgreSQL server as a number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes). To remove the memory_limit, specify its value as empty string",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description:
                "The memory request for Azure Arc enabled PostgreSQL server as a number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes). To remove the memory_request, specify its value as empty string",
              args: { name: "memory-request" },
            },
            {
              name: "--no-external-endpoint",
              description:
                "If specified, no external service will be created. Otherwise, an external service will be created using either the type given with the --service-type argument or the same service type as the data controller",
              args: { name: "no-external-endpoint" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for deployment to be ready before returning",
            },
            {
              name: "--path",
              description:
                "The path to the source json file for the Azure Arc enabled PostgreSQL server. This is optional",
              args: { name: "path" },
            },
            {
              name: "--port",
              description:
                "The port number on which the primary service is exposed to the end-users",
              args: { name: "port" },
            },
            {
              name: "--retention-days",
              description:
                "Backup retention period, specified in days. Allowed values are 0 to 35. Default is 7. Setting the retention period to 0 will turn off automatic backups for Azure Arc enabled PostgreSql",
              args: { name: "retention-days" },
            },
            {
              name: "--service-annotations",
              description:
                "Comma-separated list of annotations to apply to all external services",
              args: { name: "service-annotations" },
            },
            {
              name: "--service-cert-secret",
              description:
                "Name of the Kubernetes secret to generate that hosts the SSL certificate",
              args: { name: "service-cert-secret" },
            },
            {
              name: "--service-labels",
              description:
                "Comma-separated list of labels to apply to all external services",
              args: { name: "service-labels" },
            },
            {
              name: "--service-type",
              description: "The type for the primary service",
              args: { name: "service-type" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "endpoint",
          description: "Manage Azure Arc enabled PostgreSQL server endpoints",
          subcommands: [
            {
              name: "list",
              description: "List Azure Arc enabled PostgreSQL server endpoints",
              options: [
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Azure Arc enabled PostgreSQL server",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "The Kubernetes namespace where the Azure Arc enabled PostgreSQL server is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
                  args: { name: "k8s-namespace" },
                },
                {
                  name: "--use-k8s",
                  description:
                    "Use local Kubernetes APIs to perform this action",
                  args: { name: "use-k8s" },
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
