const completion: Fig.Spec = {
  name: "mysql",
  description: "Manage Azure Database for MySQL servers",
  subcommands: [
    {
      name: "db",
      description: "Manage MySQL databases on a server",
      subcommands: [
        {
          name: "create",
          description: "Create a MySQL database",
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
      description: "Delete the MySQL server and its cached information",
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
      description: "Show the connection strings for a MySQL server database",
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
        "Set up an Azure Database for MySQL server and configurations",
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
      description: "Manage Azure Database for MySQL Flexible Servers",
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
          description: "Create a MySQL flexible server",
          options: [
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
              name: "--auto-scale-iops",
              description:
                "Enable or disable the auto scale iops. Default value is Disabled",
              args: {
                name: "auto-scale-iops",
                suggestions: ["Disabled", "Enabled"],
              },
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
                "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
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
              name: "--iops",
              description:
                "Number of IOPS to be allocated for this server. You will get certain amount of free IOPS based on compute and storage provisioned. The default value for IOPS is free IOPS. To learn more about IOPS based on compute and storage, refer to IOPS in Azure Database for MySQL Flexible Server",
              args: { name: "iops" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
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
                "Name or resource ID of a new or existing subnet. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
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
                "Name or ID of a new or existing virtual network. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
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
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: "--public-access",
              description: "Determines the public access",
              args: {
                name: "public-access",
                suggestions: ["Disabled", "Enabled"],
              },
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
                "Name or resource ID of a new or existing subnet. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
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
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
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
                "Forced failover for server restart operation. Allowed values: Forced",
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
              name: "--backup-retention",
              description:
                "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
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
              name: "--private-dns-zone",
              description:
                "This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
              args: { name: "private-dns-zone" },
            },
            {
              name: "--public-access",
              description: "Determines the public access",
              args: {
                name: "public-access",
                suggestions: ["Disabled", "Enabled"],
              },
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
              name: "--sku-name",
              description:
                "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
              args: { name: "sku-name" },
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
                "Name or resource ID of a new or existing subnet. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
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
              name: "--vnet",
              description:
                "Name or ID of a new or existing virtual network. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
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
            "Show the connection strings for a MySQL flexible-server database",
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
              name: "--auto-scale-iops",
              description:
                "Enable or disable the auto scale iops. Default value is Disabled",
              args: {
                name: "auto-scale-iops",
                suggestions: ["Disabled", "Enabled"],
              },
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
                "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
              args: { name: "backup-retention" },
            },
            {
              name: "--disable-data-encryption",
              description: "Disable data encryption by removing key(s)",
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
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
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--iops",
              description:
                "Number of IOPS to be allocated for this server. You will get certain amount of free IOPS based on compute and storage provisioned. The default value for IOPS is free IOPS. To learn more about IOPS based on compute and storage, refer to IOPS in Azure Database for MySQL Flexible Server",
              args: { name: "iops" },
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
              name: "--public-access",
              description: "Enable or disable the public access on a server",
              args: {
                name: "public-access",
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
              name: "--replication-role",
              description: "The replication role of the server",
              args: { name: "replication-role" },
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
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade the major version of a flexible server",
          options: [
            {
              name: ["--version", "-v"],
              description: "Server major version",
              args: { name: "version", suggestions: ["8"] },
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
          description: "Manage server Active Directory administrator",
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
                  name: "--identity",
                  description:
                    "Name or ID of identity used for AAD Authentication",
                  args: { name: "identity" },
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
              ],
            },
            {
              name: "delete",
              description: "Delete an Active Directory administrator",
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
                "Wait for the Active Directory administrator to satisfy certain conditions",
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
              name: "create",
              description:
                "Create a backup for a given server with specified backup name",
              options: [
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the new backup",
                  args: { name: "backup-name" },
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
          description: "Manage MySQL databases on a flexible server",
          subcommands: [
            {
              name: "create",
              description: "Create a MySQL database on a flexible server",
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
            "Enable and run GitHub Actions workflow for MySQL server",
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
                "Create GitHub Actions workflow file for MySQL server",
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
          name: "export",
          description: "Manage export backup on a server",
          subcommands: [
            {
              name: "create",
              description:
                "Create an export backup for a given server with specified backup name",
              options: [
                {
                  name: ["--backup-name", "-b"],
                  description: "The name of the new export backup",
                  args: { name: "backup-name" },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--sas-uri", "-u"],
                  description: "SAS URI for destination container",
                  args: { name: "sas-uri" },
                  isRequired: true,
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
          name: "gtid",
          description: "Manage GTID on a server",
          subcommands: [
            {
              name: "reset",
              description: "Resets GTID on a server",
              options: [
                {
                  name: "--gtid-set",
                  description:
                    "A GTID set is a set comprising one or more single GTIDs or ranges of GTIDs. A GTID is represented as a pair of coordinates, separated by a colon character (:), as shown: source_id:transaction_id",
                  args: { name: "gtid-set" },
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
          name: "import",
          description: "Manage import workflows for MySQL Flexible Servers",
          subcommands: [
            {
              name: "create",
              description: "Create a new import workflow for flexible server",
              options: [
                {
                  name: "--data-source",
                  description:
                    "Data source for importing to Flexible Server. Based on the data source type provide the data source as mentioned below. e.g., mysql_single: The name or resource ID of the Azure MySQL single server",
                  args: { name: "data-source" },
                  isRequired: true,
                },
                {
                  name: "--data-source-type",
                  description:
                    "Data source type. e.g., mysql_single: Azure Database for MySQL Servers",
                  args: {
                    name: "data-source-type",
                    suggestions: ["mysql_single"],
                  },
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
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
                  name: "--auto-scale-iops",
                  description:
                    "Enable or disable the auto scale iops. Default value is Disabled",
                  args: {
                    name: "auto-scale-iops",
                    suggestions: ["Disabled", "Enabled"],
                  },
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
                    "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
                  args: { name: "backup-retention" },
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
                  name: "--iops",
                  description:
                    "Number of IOPS to be allocated for this server. You will get certain amount of free IOPS based on compute and storage provisioned. The default value for IOPS is free IOPS. To learn more about IOPS based on compute and storage, refer to IOPS in Azure Database for MySQL Flexible Server",
                  args: { name: "iops" },
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
                  name: "--mode",
                  description:
                    "Mode of import. Enum values: [Offline]. Default is Offline",
                  args: { name: "mode", suggestions: ["Offline"] },
                },
                {
                  name: "--private-dns-zone",
                  description:
                    "This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
                  args: { name: "private-dns-zone" },
                },
                {
                  name: "--public-access",
                  description:
                    'Determines the public access. Enter single or range of IP addresses to be included in the allowed list of IPs. IP address ranges must be dash-separated and not contain any spaces. Specifying 0.0.0.0 allows public access from any resources deployed within Azure to access your server. Setting it to "None" sets the server in public access mode but does not create a firewall rule',
                  args: { name: "public-access" },
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
                    "Name or resource ID of a new or existing subnet. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
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
                    "Name or ID of a new or existing virtual network. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
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
                {
                  name: "--keyword",
                  description:
                    "The keyword of the server configuration. Default value is None",
                  args: { name: "keyword" },
                },
                {
                  name: "--page",
                  description:
                    "The page of the server configuration. Default value is None",
                  args: { name: "page" },
                },
                {
                  name: "--page-size",
                  description:
                    "The pageSize of the server configuration. Default value is None",
                  args: { name: "page-size" },
                },
                {
                  name: "--tags",
                  description:
                    "The tags of the server configuration. Default value is None",
                  args: { name: "tags" },
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
              name: "set-batch",
              description: "Batch update parameters of a flexible server",
              options: [
                {
                  name: "--args",
                  description: "List of the configuration key-value pair",
                  args: { name: "args" },
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
                  name: "--backup-retention",
                  description:
                    "The number of days a backup is retained. Range of 1 to 35 days. Default is 7 days",
                  args: { name: "backup-retention" },
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
                  name: "--iops",
                  description:
                    "Number of IOPS to be allocated for this server. You will get certain amount of free IOPS based on compute and storage provisioned. The default value for IOPS is free IOPS. To learn more about IOPS based on compute and storage, refer to IOPS in Azure Database for MySQL Flexible Server",
                  args: { name: "iops" },
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
                    "This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. The name or id of new or existing private dns zone. You can use the private dns zone from same resource group, different resource group, or different subscription. If you want to use a zone from different resource group or subscription, please provide resource Id. CLI creates a new private dns zone within the same resource group as virtual network if not provided by users",
                  args: { name: "private-dns-zone" },
                },
                {
                  name: "--public-access",
                  description: "Determines the public access",
                  args: {
                    name: "public-access",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--sku-name",
                  description:
                    "The name of the compute SKU. Follows the convention Standard_{VM name}. Examples: Standard_B1ms",
                  args: { name: "sku-name" },
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
                    "Name or resource ID of a new or existing subnet. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a subnet from different resource group or subscription, please provide resource ID instead of name. Please note that the subnet will be delegated to flexibleServers. After delegation, this subnet cannot be used for any other type of Azure resources",
                  args: { name: "subnet" },
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
                  name: "--vnet",
                  description:
                    "Name or ID of a new or existing virtual network. This parameter only applies if you are creating cross region replica server with private access. For in-region read replica with private access, source server settings are carried over and this parameter is ignored. If you want to use a vnet from different resource group or subscription, please provide a resource ID. The name must be between 2 to 64 characters. The name must begin with a letter or number, end with a letter, number or underscore, and may contain only letters, numbers, underscores, periods, or hyphens",
                  args: { name: "vnet" },
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
                  description:
                    "Name of the server. The name can contain only lowercase letters, numbers, and the hyphen (-) character. Minimum 3 characters and maximum 63 characters",
                  args: { name: "server-name" },
                  isRequired: true,
                },
                {
                  name: "--file-last-written",
                  description:
                    "Integer in hours to indicate file last modify time",
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
    },
    {
      name: "server",
      description: "Manage MySQL servers",
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
            "Show the connection strings for a MySQL server database",
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
          name: "upgrade",
          description:
            "Upgrade mysql server to a higher version, like 5.6 to 5.7",
          options: [
            {
              name: ["--target-server-version", "-t"],
              description:
                "The server version you want to upgrade your mysql server to, currently only support 5.7",
              args: { name: "target-server-version" },
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
          description: "Manage a MySQL server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Active Directory administrator for MySQL server",
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
                "Delete an Active Directory Administrator for MySQL server",
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
                "List all Active Directory Administrators for MySQL server",
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
                "Get Active Directory Administrator information for a MySQL server",
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
                "Place the CLI in a waiting state until a condition of the MySQL server Active Directory Administrator is met",
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
          description: "Manage MySQL server keys",
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
          description: "Manage MySQL server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a MySQL server",
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
                "Delete the specified private endpoint connection associated with a MySQL server",
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
                "Reject the specified private endpoint connection associated with a MySQL server",
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
                "Show details of a private endpoint connection associated with a MySQL server",
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
          description: "Manage MySQL server private link resources",
          subcommands: [
            {
              name: "list",
              description:
                "List the private link resources supported for a MySQL server",
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
                "Create a virtual network rule to allows access to a MySQL server",
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
