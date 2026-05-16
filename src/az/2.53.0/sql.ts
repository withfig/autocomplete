const completion: Fig.Spec = {
  name: "sql",
  description: "Manage Azure SQL Databases and Data Warehouses",
  subcommands: [
    {
      name: "db",
      description: "Manage databases",
      subcommands: [
        {
          name: "copy",
          description: "Create a copy of a database",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the database that will be created as the copy destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: { name: "assign-identity", suggestions: ["false", "true"] },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: "--dest-resource-group",
              description:
                "Name of the resource group to create the copy in. If unspecified, defaults to the origin resource group",
              args: { name: "dest-resource-group" },
            },
            {
              name: "--dest-server",
              description:
                "Name of the server to create the copy in. If unspecified, defaults to the origin server",
              args: { name: "dest-server" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
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
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "create",
          description: "Create a database",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: { name: "assign-identity", suggestions: ["false", "true"] },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: "--catalog-collation",
              description: "Collation of the metadata catalog",
              args: {
                name: "catalog-collation",
                suggestions: [
                  "DATABASE_DEFAULT",
                  "SQL_Latin1_General_CP1_CI_AS",
                ],
              },
            },
            {
              name: "--collation",
              description: "The collation of the database",
              args: { name: "collation" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys" },
            },
            {
              name: "--ledger-on",
              description:
                "Create a ledger database, in which the integrity of all data is protected by the ledger feature. All tables in the ledger database must be ledger tables. Note: the value of this property cannot be changed after the database has been created",
              args: { name: "ledger-on", suggestions: ["Disabled", "Enabled"] },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: "--sample-name",
              description:
                "The name of the sample schema to apply when creating thisdatabase",
              args: { name: "sample-name", suggestions: ["AdventureWorksLT"] },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a database",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "export",
          description: "Export a database to a bacpac",
          options: [
            {
              name: ["--admin-password", "-p"],
              description: "Required. Administrator login password",
              args: { name: "admin-password" },
              isRequired: true,
            },
            {
              name: ["--admin-user", "-u"],
              description: "Required. Administrator login name",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: "--storage-key",
              description: "Required. Storage key",
              args: { name: "storage-key" },
              isRequired: true,
            },
            {
              name: "--storage-key-type",
              description: "Required. Storage key type",
              args: {
                name: "storage-key-type",
                suggestions: ["SharedAccessKey", "StorageAccessKey"],
              },
              isRequired: true,
            },
            {
              name: "--storage-uri",
              description: "Required. Storage Uri",
              args: { name: "storage-uri" },
              isRequired: true,
            },
            {
              name: ["--auth-type", "-a"],
              description: "Authentication type",
              args: { name: "auth-type", suggestions: ["ADPassword", "SQL"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "import",
          description: "Imports a bacpac into an existing database",
          options: [
            {
              name: ["--admin-password", "-p"],
              description: "Required. Administrator login password",
              args: { name: "admin-password" },
              isRequired: true,
            },
            {
              name: ["--admin-user", "-u"],
              description: "Required. Administrator login name",
              args: { name: "admin-user" },
              isRequired: true,
            },
            {
              name: "--storage-key",
              description: "Required. Storage key",
              args: { name: "storage-key" },
              isRequired: true,
            },
            {
              name: "--storage-key-type",
              description: "Required. Storage key type",
              args: {
                name: "storage-key-type",
                suggestions: ["SharedAccessKey", "StorageAccessKey"],
              },
              isRequired: true,
            },
            {
              name: "--storage-uri",
              description: "Required. Storage Uri",
              args: { name: "storage-uri" },
              isRequired: true,
            },
            {
              name: ["--auth-type", "-a"],
              description: "Authentication type",
              args: { name: "auth-type", suggestions: ["ADPassword", "SQL"] },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "List databases on a server or elastic pool",
          options: [
            {
              name: "--elastic-pool",
              description:
                "If specified, lists only the databases in this elastic pool",
              args: { name: "elastic-pool" },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "list-deleted",
          description: "Gets a list of restorable dropped databases",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "list-editions",
          description:
            "Show database editions available for the currently active subscription",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--available", "-a"],
              description:
                "If specified, show only results that are available in the specified region",
            },
            {
              name: "--dtu",
              description:
                "Number of DTUs to search for. If unspecified, all DTU sizes are shown",
              args: { name: "dtu" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "Edition to search for. If unspecified, all editions are shown",
              args: { name: "edition" },
            },
            {
              name: "--service-objective",
              description:
                "Service objective to search for. If unspecified, all service objectives are shown",
              args: { name: "service-objective" },
            },
            {
              name: ["--show-details", "-d"],
              description: "List of additional details to include in output",
              args: { name: "show-details", suggestions: ["max-size"] },
            },
            {
              name: "--vcores",
              description:
                "Number of vcores to search for. If unspecified, all vcore sizes are shown",
              args: { name: "vcores" },
            },
          ],
        },
        {
          name: "list-usages",
          description: "Gets database usages",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "rename",
          description: "Rename a database",
          options: [
            {
              name: "--new-name",
              description: "The new name that the database will be renamed to",
              args: { name: "new-name" },
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
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Create a new database by restoring from a backup",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the database that will be created as the restore destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
              args: { name: "assign-identity", suggestions: ["false", "true"] },
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: "--deleted-time",
              description:
                'If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database in the same server. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "deleted-time" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to create the database in",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
              args: { name: "service-level-objective" },
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
              name: ["--time", "-t"],
              description:
                'The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database\'s earliestRestoreDate value. Either --time or --deleted-time (or both) must be specified. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "time" },
            },
            {
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details for a database",
          options: [
            {
              name: "--expand-keys",
              description: "Expand the AKV keys for the database",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--keys-filter",
              description: "Expand the AKV keys for the database",
              args: { name: "keys-filter" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Generates a connection string to a database",
          options: [
            {
              name: ["--client", "-c"],
              description: "Type of client connection provider",
              args: {
                name: "client",
                suggestions: [
                  "ado.net",
                  "jdbc",
                  "odbc",
                  "php",
                  "php_pdo",
                  "sqlcmd",
                ],
              },
              isRequired: true,
            },
            {
              name: ["--auth-type", "-a"],
              description: "Type of authentication",
              args: {
                name: "auth-type",
                suggestions: ["ADIntegrated", "ADPassword", "SqlPassword"],
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
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "show-deleted",
          description: "Get the details for a deleted database",
          options: [
            {
              name: ["--restorable-dropped-database-id", "-r"],
              description: "Restorable dropped database id",
              args: { name: "restorable-dropped-database-id" },
              isRequired: true,
            },
            {
              name: "--expand-keys",
              description: "Expand the AKV keys for the database",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--keys-filter",
              description: "Expand the AKV keys for the database",
              args: { name: "keys-filter" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update a database",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--assign-identity", "-i"],
              description: "Assign identity for database",
            },
            {
              name: "--auto-pause-delay",
              description:
                "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
              args: { name: "auto-pause-delay" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: "--compute-model",
              description: "The compute model of the database",
              args: {
                name: "compute-model",
                suggestions: ["Provisioned", "Serverless"],
              },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
              args: { name: "edition" },
            },
            {
              name: "--elastic-pool",
              description:
                "The name or resource id of the elastic pool to move the database into",
              args: { name: "elastic-pool" },
            },
            {
              name: "--encryption-protector",
              description:
                "Specifies the Azure key vault key to be used as database encryption protector key",
              args: { name: "encryption-protector" },
            },
            {
              name: ["--encryption-protector-auto-rotation", "--epauto"],
              description:
                "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
              args: {
                name: "encryption-protector-auto-rotation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--federated-client-id",
              description:
                "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: "--filter",
              description:
                "An OData filter expression that filters elements in the collection. Default value is None",
              args: { name: "filter" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--keys",
              description: "The list of AKV keys for the SQL Database",
              args: { name: "keys" },
            },
            {
              name: "--keys-to-remove",
              description:
                "The list of AKV keys to remove from the SQL Database",
              args: { name: "keys-to-remove" },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: "--max-size",
              description:
                "The new maximum size of the database expressed in bytes",
              args: { name: "max-size" },
            },
            {
              name: "--min-capacity",
              description:
                "Minimal capacity that database will always have allocated, if not paused",
              args: { name: "min-capacity" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Azure SQL Database",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description: "Specifies type of enclave for this resource",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--read-scale",
              description:
                "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
              args: {
                name: "read-scale",
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
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--service-objective",
              description:
                "The name of the new service objective. If this is a standalone db service objective and the db is currently in an elastic pool, then the db is removed from the pool",
              args: { name: "service-objective" },
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
              name: ["--user-assigned-identity-id", "--umi"],
              description:
                "The list of user assigned identity for the SQL Database",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "advanced-threat-protection-setting",
          description: "Manage a database's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Update a database's advanced threat protection setting",
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
                  description: "Name of the Azure SQL Database",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "audit-policy",
          description: "Manage a database's auditing policy",
          subcommands: [
            {
              name: "show",
              description: "Show database audit policy",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a database's auditing policy",
              options: [
                {
                  name: "--actions",
                  description:
                    "List of actions and action groups to audit.These are space seperated values.Example: --actions FAILED_DATABASE_AUTHENTICATION_GROUP BATCH_COMPLETED_GROUP",
                  args: { name: "actions" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--blob-storage-target-state", "--bsts"],
                  description:
                    "Indicate whether blob storage is a destination for audit records",
                  args: {
                    name: "blob-storage-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--event-hub", "--eh"],
                  description:
                    "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                  args: { name: "event-hub" },
                },
                {
                  name: ["--event-hub-authorization-rule-id", "--ehari"],
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-authorization-rule-id" },
                },
                {
                  name: ["--event-hub-target-state", "--ehts"],
                  description:
                    "Indicate whether event hub is a destination for audit records",
                  args: {
                    name: "event-hub-target-state",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: ["--log-analytics-target-state", "--lats"],
                  description:
                    "Indicate whether log analytics is a destination for audit records",
                  args: {
                    name: "log-analytics-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--log-analytics-workspace-resource-id", "--lawri"],
                  description:
                    "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                  args: { name: "log-analytics-workspace-resource-id" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
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
                  name: "--retention-days",
                  description: "The number of days to retain audit logs",
                  args: { name: "retention-days" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--state",
                  description: "Auditing policy state",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
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
                "Place the CLI in a waiting state until a condition of the database's audit policy is met",
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "classification",
          description: "Manage sensitivity classifications",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete the sensitivity classification of a given column",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Get the sensitivity classifications of a given database",
              options: [
                {
                  name: "--count",
                  description: "Default value is None",
                  args: { name: "count" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData filter expression that filters elements in the collection. Default value is None",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--skip-token",
                  description: "Default value is None",
                  args: { name: "skip-token" },
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
                "Get the sensitivity classification of a given column",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a columns's sensitivity classification",
              options: [
                {
                  name: "--column",
                  description: "The name of the column",
                  args: { name: "column" },
                  isRequired: true,
                },
                {
                  name: "--schema",
                  description: "The name of the schema",
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--table",
                  description: "The name of the table",
                  args: { name: "table" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--information-type",
                  description: "The information type",
                  args: { name: "information-type" },
                },
                {
                  name: "--label",
                  description: "The label name",
                  args: { name: "label" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "recommendation",
              description: "Manage sensitivity classification recommendations",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                  options: [
                    {
                      name: "--column",
                      description: "The name of the column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of the schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of the table",
                      args: { name: "table" },
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
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                  name: "enable",
                  description:
                    "Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                  options: [
                    {
                      name: "--column",
                      description: "The name of the column",
                      args: { name: "column" },
                      isRequired: true,
                    },
                    {
                      name: "--schema",
                      description: "The name of the schema",
                      args: { name: "schema" },
                      isRequired: true,
                    },
                    {
                      name: "--table",
                      description: "The name of the table",
                      args: { name: "table" },
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
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                    "List the recommended sensitivity classifications of a given database",
                  options: [
                    {
                      name: "--filter",
                      description:
                        "An OData filter expression that filters elements in the collection. Default value is None",
                      args: { name: "filter" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: "--include-disabled-recommendations",
                      description:
                        "Specifies whether to include disabled recommendations or not. Default value is None",
                      args: { name: "include-disabled-recommendations" },
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "name" },
                    },
                    {
                      name: ["--resource-group", "-g"],
                      description:
                        "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                      args: { name: "resource-group" },
                    },
                    {
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
          name: "geo-backup",
          description: "Manage SQL database geo redundant backups",
          subcommands: [
            {
              name: "list",
              description: "Gets a list of recoverable databases",
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
                    "Retrieves all requested geo-redundant backups under this resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Retrieves all requested geo-redundant backups under this server",
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
              name: "restore",
              description: "Restore a geo-redundant backup to a new database",
              options: [
                {
                  name: "--dest-database",
                  description:
                    "Name of the database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-server",
                  description: "Name of the server to restore database to",
                  args: { name: "dest-server" },
                  isRequired: true,
                },
                {
                  name: "--geo-backup-id",
                  description:
                    "The resource id of the geo-redundant backup to be restored. Use 'az sql db geo-backup list' or 'az sql db geo-backup show' for backup id",
                  args: { name: "geo-backup-id" },
                  isRequired: true,
                },
                {
                  name: "--resource-group",
                  description:
                    "Name of the target resource group of the server to restore database to",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: ["--edition", "--tier", "-e"],
                  description:
                    "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
                  args: { name: "edition" },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys" },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id" },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets a recoverable database, which is a resource representing a database's geo backup",
              options: [
                {
                  name: ["--database-name", "--database", "-d"],
                  description:
                    "Retrieves a requested geo-redundant backup under this database",
                  args: { name: "database-name" },
                },
                {
                  name: "--expand-keys",
                  description: "Expand the AKV keys for the database",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--keys-filter",
                  description: "Expand the AKV keys for the database",
                  args: { name: "keys-filter" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Retrieves a requested geo-redundant backup under this resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Retrieves a requested geo-redundant backup under this server",
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
          name: "ledger-digest-uploads",
          description: "Manage ledger digest upload settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable uploading ledger digests",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "enable",
              description:
                "Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value",
              options: [
                {
                  name: "--endpoint",
                  description:
                    "The endpoint of a digest storage, which can be either an Azure Blob storage or a ledger in Azure Confidential Ledger",
                  args: { name: "endpoint" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Show the current ledger digest settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ltr-backup",
          description: "Manage SQL database long term retention backups",
          subcommands: [
            {
              name: "delete",
              description: "Delete a long term retention backup",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
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
              description:
                "List the long term retention backups for a location, server or database",
              options: [
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                },
                {
                  name: ["--database-state", "--state"],
                  description:
                    "'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'",
                  args: { name: "database-state" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "If true, will only return the latest backup for each database",
                  args: { name: "only-latest-per-database" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
                },
              ],
            },
            {
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
              options: [
                {
                  name: "--backup-id",
                  description:
                    "The resource id of the long term retention backup to be restored. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup id",
                  args: { name: "backup-id" },
                  isRequired: true,
                },
                {
                  name: "--dest-database",
                  description:
                    "Name of the database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-resource-group",
                  description:
                    "Name of the resource group of the server to restore database to",
                  args: { name: "dest-resource-group" },
                  isRequired: true,
                },
                {
                  name: "--dest-server",
                  description: "Name of the server to restore database to",
                  args: { name: "dest-server" },
                  isRequired: true,
                },
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: ["--edition", "--tier", "-e"],
                  description:
                    "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical, Hyperscale",
                  args: { name: "edition" },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys" },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id" },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "show",
              description: "Get a long term retention backup for a database",
              options: [
                {
                  name: ["--database", "-d"],
                  description:
                    "Name of the Azure SQL Database. If specified (along with server name), retrieves all requested backups under this database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backups",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql db ltr-backup show' or 'az sql db ltr-backup list' for backup name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. If specified, retrieves all requested backups under this server",
                  args: { name: "server" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the database is met",
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
                  name: "--expand",
                  description:
                    "The child resources to include in the response. Default value is None",
                  args: { name: "expand" },
                },
                {
                  name: "--filter",
                  description:
                    "An OData filter expression that filters elements in the collection. Default value is None",
                  args: { name: "filter" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ltr-policy",
          description: "Manage SQL database long term retention policy",
          subcommands: [
            {
              name: "set",
              description: "Update long term retention settings for a database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--monthly-retention",
                  description:
                    "Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "monthly-retention" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--week-of-year",
                  description:
                    "The Week of Year, 1 to 52, in which to take the yearly LTR backup",
                  args: { name: "week-of-year" },
                },
                {
                  name: "--weekly-retention",
                  description:
                    "Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "weekly-retention" },
                },
                {
                  name: "--yearly-retention",
                  description:
                    "Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "yearly-retention" },
                },
              ],
            },
            {
              name: "show",
              description: "Show the long term retention policy for a database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "op",
          description: "Manage operations on a database",
          subcommands: [
            {
              name: "cancel",
              description: "Cancels the asynchronous operation on the database",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Gets a list of operations performed on the database",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          description: "Manage replication between databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create a database as a readable secondary replica of an existing database",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--partner-server",
                  description:
                    "Name of the server to create the new replica in",
                  args: { name: "partner-server" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                {
                  name: ["--assign-identity", "-i"],
                  description: "Assign identity for database",
                  args: {
                    name: "assign-identity",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: "--auto-pause-delay",
                  description:
                    "Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled",
                  args: { name: "auto-pause-delay" },
                },
                {
                  name: "--availability-zone",
                  description: "Availability zone",
                  args: { name: "availability-zone" },
                },
                {
                  name: ["--backup-storage-redundancy", "--bsr"],
                  description:
                    "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
                  args: { name: "backup-storage-redundancy" },
                },
                {
                  name: ["--capacity", "-c"],
                  description:
                    "The capacity component of the sku in integer number of DTUs or vcores",
                  args: { name: "capacity" },
                },
                {
                  name: "--compute-model",
                  description: "The compute model of the database",
                  args: {
                    name: "compute-model",
                    suggestions: ["Provisioned", "Serverless"],
                  },
                },
                {
                  name: "--elastic-pool",
                  description:
                    "The name or resource id of the elastic pool to create the database in",
                  args: { name: "elastic-pool" },
                },
                {
                  name: "--encryption-protector",
                  description:
                    "Specifies the Azure key vault key to be used as database encryption protector key",
                  args: { name: "encryption-protector" },
                },
                {
                  name: ["--encryption-protector-auto-rotation", "--epauto"],
                  description:
                    "Specifies the database encryption protector key auto rotation flag. Can be either true, false or null",
                  args: {
                    name: "encryption-protector-auto-rotation",
                    suggestions: ["false", "true"],
                  },
                },
                {
                  name: ["--family", "-f"],
                  description:
                    "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
                  args: { name: "family" },
                },
                {
                  name: "--federated-client-id",
                  description:
                    "The federated client id for the SQL Database. It is used for cross tenant CMK scenario",
                  args: { name: "federated-client-id" },
                },
                {
                  name: ["--read-replicas", "--ha-replicas"],
                  description:
                    "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
                  args: { name: "read-replicas" },
                },
                {
                  name: "--keys",
                  description: "The list of AKV keys for the SQL Database",
                  args: { name: "keys" },
                },
                {
                  name: "--license-type",
                  description:
                    "The license type to apply for this database.LicenseIncluded if you need a license, or BasePriceif you have a license and are eligible for the Azure HybridBenefit",
                  args: {
                    name: "license-type",
                    suggestions: ["BasePrice", "LicenseIncluded"],
                  },
                },
                {
                  name: "--min-capacity",
                  description:
                    "Minimal capacity that database will always have allocated, if not paused",
                  args: { name: "min-capacity" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--partner-database",
                  description:
                    "Name of the new replica. If unspecified, defaults to the source database name",
                  args: { name: "partner-database" },
                },
                {
                  name: "--partner-resource-group",
                  description:
                    "Name of the resource group to create the new replica in. If unspecified, defaults to the origin resource group",
                  args: { name: "partner-resource-group" },
                },
                {
                  name: "--preferred-enclave-type",
                  description: "Specifies type of enclave for this resource",
                  args: {
                    name: "preferred-enclave-type",
                    suggestions: ["Default", "VBS"],
                  },
                },
                {
                  name: "--read-scale",
                  description:
                    "If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica. This property is only settable for Premium and Business Critical databases",
                  args: {
                    name: "read-scale",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: "--secondary-type",
                  description:
                    "Type of secondary to create. Allowed values include: Geo, Named",
                  args: { name: "secondary-type" },
                },
                {
                  name: ["--service-level-objective", "--service-objective"],
                  description:
                    "The service objective for the new database. For example: Basic, S0, P1, GP_Gen4_1, GP_Gen5_S_8, BC_Gen5_2, HS_Gen5_32",
                  args: { name: "service-level-objective" },
                },
                {
                  name: "--tags",
                  description:
                    'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
                  args: { name: "tags" },
                },
                {
                  name: ["--user-assigned-identity-id", "--umi"],
                  description:
                    "The list of user assigned identity for the SQL Database",
                  args: { name: "user-assigned-identity-id" },
                },
                {
                  name: ["--zone-redundant", "-z"],
                  description:
                    "Specifies whether to enable zone redundancy. Default is true if no value is specified",
                  args: {
                    name: "zone-redundant",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "delete-link",
              description:
                "Permanently stop data replication between two database replicas",
              options: [
                {
                  name: "--partner-server",
                  description:
                    "Name of the server that the other replica is in",
                  args: { name: "partner-server" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: "--partner-resource-group",
                  description:
                    "Name of the resource group that the other replica is in. If unspecified, defaults to the first database's resource group",
                  args: { name: "partner-resource-group" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "list-links",
              description:
                "List the replicas of a database and their replication status",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "set-primary",
              description:
                "Set the primary replica database by failing over from the current primary replica database",
              options: [
                {
                  name: "--allow-data-loss",
                  description:
                    "If specified, the failover operation will allow data loss",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the database to fail over",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group containing the secondary replica that will become the new primary",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the server containing the secondary replica that will become the new primary. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "str-policy",
          description: "Manage SQL database short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention settings for a live database",
              options: [
                {
                  name: "--retention-days",
                  description:
                    "New backup short term retention policy retention in days.Valid retention days for live database of (DTU) Basic can be 1-7 days; Rest models can be 1-35 days",
                  args: { name: "retention-days" },
                  isRequired: true,
                },
                {
                  name: "--diffbackup-hours",
                  description:
                    "New backup short term retention policy differential backup interval in hours.Valid differential backup interval for live database can be 12 or 24 hours",
                  args: { name: "diffbackup-hours" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Show the short term retention policy for a live database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Place the CLI in a waiting state until the policy is set",
              options: [
                {
                  name: "--policy-name",
                  description:
                    'The policy name. Should always be "default". "default" Required',
                  args: { name: "policy-name" },
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
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "tde",
          description: "Manage a database's transparent data encryption",
          subcommands: [
            {
              name: "set",
              description:
                "Sets a database's transparent data encryption configuration",
              options: [
                {
                  name: "--status",
                  description: "Status of the transparent data encryption",
                  args: {
                    name: "status",
                    suggestions: ["Disabled", "Enabled"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows a Transparent Data Encryption",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "database" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              name: "key",
              description: "Manage a database's encryption protector",
              subcommands: [
                {
                  name: "revalidate",
                  description:
                    "Revalidates a database's encryption protector key",
                  options: [
                    {
                      name: ["--database", "-d"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "database" },
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
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
                  name: "revert",
                  description:
                    "Reverts a database's encryption protector key to server level",
                  options: [
                    {
                      name: ["--database", "-d"],
                      description: "Name of the Azure SQL Database",
                      args: { name: "database" },
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
                      name: ["--server", "-s"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                      args: { name: "server" },
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
          name: "threat-policy",
          description: "Manage a database's threat detection policies",
          subcommands: [
            {
              name: "show",
              description: "Gets a threat detection policy",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the Azure SQL Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update a database's threat detection policy",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--disabled-alerts",
                  description: "List of disabled alerts",
                  args: { name: "disabled-alerts" },
                },
                {
                  name: "--email-account-admins",
                  description:
                    "Whether the alert is sent to the account administrators",
                  args: { name: "email-account-admins" },
                },
                {
                  name: "--email-addresses",
                  description:
                    "List of email addresses that alerts are sent to",
                  args: { name: "email-addresses" },
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
                  description: "Name of the Azure SQL Database",
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
                  name: "--retention-days",
                  description:
                    "The number of days to retain threat detection logs",
                  args: { name: "retention-days" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--state",
                  description: "Threat detection policy state",
                  args: {
                    name: "state",
                    suggestions: ["Disabled", "Enabled", "New"],
                  },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
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
      name: "down",
      description: "Delete the SQL server and its cached information",
      options: [
        {
          name: "--delete-group",
          description: "Delete the resource group",
          args: { name: "delete-group" },
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
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list-usages",
      description: "Gets all subscription usage metrics in a given location",
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
      name: "show-usage",
      description: "Gets a subscription usage metric",
      options: [
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
          isRequired: true,
        },
        {
          name: ["--usage", "-u"],
          description: "Name of usage metric to return. Required",
          args: { name: "usage" },
          isRequired: true,
        },
      ],
    },
    {
      name: "up",
      description: "Set up an Azure Database for SQL server and configurations",
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
      name: "dw",
      description: "Manage data warehouses",
      subcommands: [
        {
          name: "create",
          description: "Create a data warehouse",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: "--availability-zone",
              description: "Availability zone",
              args: { name: "availability-zone" },
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: "--collation",
              description: "The collation of the data warehouse",
              args: { name: "collation" },
            },
            {
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--service-level-objective", "--service-objective"],
              description:
                "The service objective for the new database. For example: DW100, DW1000c",
              args: { name: "service-level-objective" },
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
          description: "Delete a data warehouse",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "List data warehouses for a server",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "pause",
          description: "Pauses a datawarehouse",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "resume",
          description: "Resumes a datawarehouse",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Get the details for a data warehouse",
          options: [
            {
              name: "--filter",
              description:
                "An OData filter expression that filters elements in the collection. Default value is None",
              args: { name: "filter" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update a data warehouse",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--filter",
              description:
                "An OData filter expression that filters elements in the collection. Default value is None",
              args: { name: "filter" },
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
              name: "--max-size",
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the data warehouse",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--service-objective",
              description:
                "The service objective of the data warehouse. For example: DW100, DW1000c",
              args: { name: "service-objective" },
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
      name: "elastic-pool",
      description: "Manage elastic pools",
      subcommands: [
        {
          name: "create",
          description: "Create an elastic pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: ["--capacity", "--dtu", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: ["--db-max-capacity", "--db-dtu-max", "--db-max-dtu"],
              description:
                "The maximum capacity (in DTUs or vcores) any one database can consume",
              args: { name: "db-max-capacity" },
            },
            {
              name: ["--db-min-capacity", "--db-dtu-min", "--db-min-dtu"],
              description:
                "The minumum capacity (in DTUs or vcores) each database is guaranteed",
              args: { name: "db-min-capacity" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--license-type",
              description: "The license type to apply for this elastic pool",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: ["--max-size", "--storage"],
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description:
                "The preferred enclave type for the Azure SQL Elastic Pool. Allowed values include: Default, VBS",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
              },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an elastic pool",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Gets all elastic pools in a server",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--skip",
              description:
                "The number of elements in the collection to skip. Default value is None",
              args: { name: "skip" },
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
          name: "list-dbs",
          description: "Gets a list of databases in an elastic pool",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "list-editions",
          description:
            "List elastic pool editions available for the active subscription",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--available", "-a"],
              description:
                "If specified, show only results that are available in the specified region",
            },
            {
              name: "--dtu",
              description:
                "Number of DTUs to search for. If unspecified, all DTU sizes are shown",
              args: { name: "dtu" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "Edition to search for. If unspecified, all editions are shown",
              args: { name: "edition" },
            },
            {
              name: ["--show-details", "-d"],
              description: "List of additional details to include in output",
              args: {
                name: "show-details",
                suggestions: [
                  "db-max-dtu",
                  "db-max-size",
                  "db-min-dtu",
                  "max-size",
                ],
              },
            },
            {
              name: "--vcores",
              description:
                "Number of vcores to search for. If unspecified, all vcore sizes are shown",
              args: { name: "vcores" },
            },
          ],
        },
        {
          name: "show",
          description: "Gets an elastic pool",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Update an elastic pool",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: ["--capacity", "--dtu", "-c"],
              description:
                "The capacity component of the sku in integer number of DTUs or vcores",
              args: { name: "capacity" },
            },
            {
              name: ["--db-max-capacity", "--db-dtu-max", "--db-max-dtu"],
              description:
                "The maximum capacity (in DTUs or vcores) any one database can consume",
              args: { name: "db-max-capacity" },
            },
            {
              name: ["--db-min-capacity", "--db-dtu-min", "--db-min-dtu"],
              description:
                "The minumum capacity (in DTUs or vcores) each database is guaranteed",
              args: { name: "db-min-capacity" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: Basic, Standard, Premium, GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku (for vcore skus only). Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--read-replicas", "--ha-replicas"],
              description:
                "The number of high availability replicas to provision for the database. Only settable for Hyperscale edition",
              args: { name: "read-replicas" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Specified maintenance configuration id or name for this resource",
              args: { name: "maint-config-id" },
            },
            {
              name: ["--max-size", "--storage"],
              description:
                "The max storage size. If no unit is specified, defaults to bytes (B)",
              args: { name: "max-size" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the elastic pool",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--preferred-enclave-type",
              description:
                "Type of enclave to be configured for the elastic pool",
              args: {
                name: "preferred-enclave-type",
                suggestions: ["Default", "VBS"],
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "op",
          description: "Manage operations on an elastic pool",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the elastic pool",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--elastic-pool",
                  description: "Name of the Azure SQL Elastic Pool",
                  args: { name: "elastic-pool" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Gets a list of operations performed on the elastic pool",
              options: [
                {
                  name: "--elastic-pool",
                  description: "Name of the Azure SQL Elastic Pool",
                  args: { name: "elastic-pool" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
      name: "failover-group",
      description: "Manage SQL Failover Groups",
      subcommands: [
        {
          name: "create",
          description: "Creates a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--partner-server",
              description: "The name of the partner server of a Failover Group",
              args: { name: "partner-server" },
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
              isRequired: true,
            },
            {
              name: "--add-db",
              description: "List of databases to add to Failover Group",
              args: { name: "add-db" },
            },
            {
              name: "--failover-policy",
              description: "The failover policy of the Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--partner-resource-group",
              description:
                "The name of the resource group of the partner server",
              args: { name: "partner-resource-group" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Lists the failover groups in a server",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          name: "set-primary",
          description:
            "Set the primary of the failover group by failing over all databases from the current primary server",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--allow-data-loss",
              description:
                "Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: ["--try-planned-before-forced-failover", "--tpbff"],
              description:
                "Performs a planned failover as the first step, and if it fails for any reason, then initiates a forced failover with potential data loss. This will allow the failover to proceed even if a primary database is unavailable",
            },
          ],
        },
        {
          name: "show",
          description: "Gets a failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Updates the failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--add-db",
              description: "List of databases to add to Failover Group",
              args: { name: "add-db" },
            },
            {
              name: "--failover-policy",
              description: "The failover policy of the Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
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
              name: "--remove-db",
              description: "List of databases to remove from Failover Group",
              args: { name: "remove-db" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
      name: "instance-failover-group",
      description: "Manage SQL Instance Failover Groups",
      subcommands: [
        {
          name: "create",
          description:
            "Creates an instance failover group between two connected managed instances",
          options: [
            {
              name: ["--source-mi", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "source-mi" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Instance Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--partner-mi",
              description:
                "The name of the partner managed instance of a Instance Failover Group",
              args: { name: "partner-mi" },
              isRequired: true,
            },
            {
              name: "--partner-resource-group",
              description:
                "The name of the resource group of the partner managed instance",
              args: { name: "partner-resource-group" },
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
              name: "--failover-policy",
              description: "The failover policy of the Instance Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--secondary-type",
              description:
                "Intended usage of the secondary instance in the Failover Group. Standby indicates that the secondary instance will be used as a passive replica for disaster recovery only",
              args: { name: "secondary-type" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a failover group",
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
              description: "The name of the Instance Failover Group",
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
          name: "set-primary",
          description:
            "Set the primary of the instance failover group by failing over all databases from the current primary managed instance",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location of the secondary instance in the Instance Failover Group. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Instance Failover Group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group of the secondary instance in the Instance Failover Group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--allow-data-loss",
              description:
                "Complete the failover even if doing so may result in data loss. This will allow the failover to proceed even if a primary database is unavailable",
            },
          ],
        },
        {
          name: "show",
          description: "Gets a failover group",
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
              description: "The name of the Instance Failover Group",
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
          description: "Updates the instance failover group",
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
              description: "The name of the Instance Failover Group",
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
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--failover-policy",
              description: "The failover policy of the Instance Failover Group",
              args: {
                name: "failover-policy",
                suggestions: ["Automatic", "Manual"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--grace-period",
              description:
                "Interval in hours before automatic failover is initiated if an outage occurs on the primary server. This indicates that Azure SQL Database will not initiate automatic failover before the grace period expires. Please note that failover operation with --allow-data-loss option might cause data loss due to the nature of asynchronous synchronization",
              args: { name: "grace-period" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--secondary-type",
              description:
                "Intended usage of the secondary instance in the Failover Group. Standby indicates that the secondary instance will be used as a passive replica for disaster recovery only",
              args: { name: "secondary-type" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
          ],
        },
      ],
    },
    {
      name: "instance-failover-group-arc",
      description: "Manage Arc-enabled SQL managed instance Failover Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a failover group resource",
          options: [
            {
              name: "--mi",
              description: "The name of the primary SQL managed instance",
              args: { name: "mi" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the failover group resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--partner-mi",
              description:
                "The name of the partner SQL managed instance or remote SQL instance. When using ARM-targeted arguments, this refers to the Disaster Recovery (DR) instance name",
              args: { name: "partner-mi" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the failover group is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--partner-mirroring-cert-file", "-f"],
              description:
                "The filename of mirroring endpoint public certificate for the partner SQL managed instance or availability group on remote SQL instance. Only PEM format is supported",
              args: { name: "partner-mirroring-cert-file" },
            },
            {
              name: ["--partner-mirroring-url", "-u"],
              description:
                "The mirroring endpoint URL of the partner SQL managed instance",
              args: { name: "partner-mirroring-url" },
            },
            {
              name: "--partner-resource-group",
              description:
                "The Azure resource group of the DR partner Arc-enabled SQL managed instance",
              args: { name: "partner-resource-group" },
            },
            {
              name: ["--partner-sync-mode", "-m"],
              description:
                "The partner synchronization mode of the Arc-enabled SQL managed instance",
              args: {
                name: "partner-sync-mode",
                suggestions: ["async", "sync"],
              },
            },
            {
              name: "--primary-mirroring-url",
              description:
                "The mirroring endpoint URL of the primary SQL managed instance",
              args: { name: "primary-mirroring-url" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the primary Arc-enabled SQL managed instance",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                "The requested role of the failover group. The role can be changed",
              args: { name: "role", suggestions: ["primary", "secondary"] },
            },
            {
              name: "--shared-name",
              description:
                "The shared name of the failover group for this SQL managed instance. Both the primary SQL managed instance and its partner must use the same shared name",
              args: { name: "shared-name" },
            },
            {
              name: "--use-k8s",
              description:
                "Create the Arc-enabled SQL managed instance failover group using local Kubernetes APIs",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an Arc-enabled SQL Managed Instance failover group",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the failover group resource to delete",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the failover group is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--mi",
              description:
                "The name of the primary Arc-enabled SQL managed instance",
              args: { name: "mi" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the primary Arc-enabled SQL managed instance",
              args: { name: "resource-group" },
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
          description: "List all failover groups",
          options: [
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the failover groups are deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--mi",
              description: "The name of the Arc-enabled SQL managed instance",
              args: { name: "mi" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the Arc-enabled SQL managed instance",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a failover group resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the failover group resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the failover group is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--mi",
              description:
                "The name of the primary Arc-enabled SQL managed instance",
              args: { name: "mi" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the primary Arc-enabled SQL managed instance",
              args: { name: "resource-group" },
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
          description: "Update a failover group resource",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the failover group resource",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the failover group exists. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--mi",
              description:
                "The name of the Arc-enabled SQL managed instance to update",
              args: { name: "mi" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--partner-sync-mode", "-m"],
              description:
                "The partner synchronization mode of the SQL managed instance",
              args: {
                name: "partner-sync-mode",
                suggestions: ["async", "sync"],
              },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group of the primary Arc-enabled SQL managed instance",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description: "The requested role of the failover group",
              args: {
                name: "role",
                suggestions: [
                  "force-primary-allow-data-loss",
                  "force-secondary",
                  "secondary",
                ],
              },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
      ],
    },
    {
      name: "instance-pool",
      description: "Manage instance pools",
      subcommands: [
        {
          name: "create",
          description: "Create an instance pool",
          options: [
            {
              name: ["--capacity", "-c"],
              description: "Capacity of the instance pool in vcores",
              args: { name: "capacity" },
              isRequired: true,
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed value: GeneralPurpose",
              args: { name: "edition" },
              isRequired: true,
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed value: Gen5",
              args: { name: "family" },
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
              description: "Instance Pool Name",
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
              name: "--subnet",
              description:
                "Name or ID of the subnet that allows access to an Instance Pool. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: "--license-type",
              description: "The license type to apply for this instance pool",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
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
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
          description: "List available instance pools",
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
          description: "Get the details for an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
          description: "Update an instance pool",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
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
          description: "Wait for an instance pool to reach a desired state",
          options: [
            {
              name: ["--name", "-n"],
              description: "Instance Pool Name",
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
      name: "mi",
      description: "Manage SQL managed instances",
      subcommands: [
        {
          name: "create",
          description: "Create a managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
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
              name: "--subnet",
              description:
                "Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
              isRequired: true,
            },
            {
              name: ["--admin-password", "-p"],
              description:
                "The administrator login password (required formanaged instance creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the managed instance. Canonly be specified when the managed instance is beingcreated (and is required for creation)",
              args: { name: "admin-user" },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault",
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity of the managed instance in integer number of vcores",
              args: { name: "capacity" },
            },
            {
              name: "--collation",
              description: "The collation of the managed instance",
              args: { name: "collation" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: "--enable-ad-only-auth",
              description:
                "Enable Azure Active Directory Only Authentication for this server",
            },
            {
              name: "--external-admin-name",
              description:
                "Display name of the Azure AD administrator user, group or application",
              args: { name: "external-admin-name" },
            },
            {
              name: "--external-admin-principal-type",
              description: "User, Group or Application",
              args: { name: "external-admin-principal-type" },
            },
            {
              name: "--external-admin-sid",
              description:
                "The unique ID of the Azure AD administrator. Object Id for User or Group, Client Id for Applications",
              args: { name: "external-admin-sid" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssignedUserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this managed instance",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Assign maintenance configuration to this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the managed instance for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "None"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: "--proxy-override",
              description:
                "The connection type used for connecting to the instance",
              args: {
                name: "proxy-override",
                suggestions: ["Default", "Proxy", "Redirect"],
              },
            },
            {
              name: "--public-data-endpoint-enabled",
              description:
                "Whether or not the public data endpoint is enabled for the instance",
              args: {
                name: "public-data-endpoint-enabled",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--service-principal-type",
              description:
                "Service Principal type to be used for this Managed Instance. Possible values are SystemAssigned and None",
              args: {
                name: "service-principal-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--storage",
              description:
                "The storage size of the managed instance. Storage size must be specified in increments of 32 GB",
              args: { name: "storage" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--timezone-id",
              description:
                "The time zone id for the instance to set. A list of time zone ids is exposed through the sys.time_zone_info (Transact-SQL) view",
              args: { name: "timezone-id" },
            },
            {
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "failover",
          description: "Failover a managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--replica-type",
              description:
                'The type of replica to be failed over. Known values are: "Primary" and "ReadableSecondary". Default value is None',
              args: { name: "replica-type" },
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
          description: "List available managed instances",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
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
          description: "Get the details for a managed instance",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
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
          description: "Start the managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "The name of the managed instance",
              args: { name: "managed-instance" },
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
              description: "Name of the resource group",
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
          description: "Stop the managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "The name of the managed instance",
              args: { name: "managed-instance" },
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
              description: "Name of the resource group",
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
          description: "Update a managed instance",
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
                "The administrator login password (required formanaged instance creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this managed instance for use with key management services like Azure KeyVault. If identity is already assigned - do nothing",
            },
            {
              name: ["--backup-storage-redundancy", "--bsr"],
              description:
                "Backup storage redundancy used to store backups. Allowed values include: Local, Zone, Geo, GeoZone",
              args: { name: "backup-storage-redundancy" },
            },
            {
              name: ["--capacity", "-c"],
              description:
                "The capacity of the managed instance in integer number of vcores",
              args: { name: "capacity" },
            },
            {
              name: ["--edition", "--tier", "-e"],
              description:
                "The edition component of the sku. Allowed values include: GeneralPurpose, BusinessCritical",
              args: { name: "edition" },
            },
            {
              name: ["--family", "-f"],
              description:
                "The compute generation component of the sku. Allowed values include: Gen4, Gen5",
              args: { name: "family" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssignedUserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--license-type",
              description:
                "The license type to apply for this managed instance",
              args: {
                name: "license-type",
                suggestions: ["BasePrice", "LicenseIncluded"],
              },
            },
            {
              name: ["--maint-config-id", "-m"],
              description:
                "Change maintenance configuration for this managed instance",
              args: { name: "maint-config-id" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the managed instance for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2", "None"],
              },
            },
            {
              name: ["--name", "-n"],
              description: "The managed instance name",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: "--proxy-override",
              description:
                "The connection type used for connecting to the instance",
              args: {
                name: "proxy-override",
                suggestions: ["Default", "Proxy", "Redirect"],
              },
            },
            {
              name: "--public-data-endpoint-enabled",
              description:
                "Whether or not the public data endpoint is enabled for the instance",
              args: {
                name: "public-data-endpoint-enabled",
                suggestions: ["false", "true"],
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
              name: "--service-principal-type",
              description:
                "Service Principal type to be used for this Managed Instance. Possible values are SystemAssigned and None",
              args: {
                name: "service-principal-type",
                suggestions: ["None", "SystemAssigned"],
              },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--storage",
              description:
                "The storage size of the managed instance. Storage size must be specified in increments of 32 GB",
              args: { name: "storage" },
            },
            {
              name: "--subnet",
              description:
                "Name or ID of the subnet that allows access to an Azure Sql Managed Instance. If subnet name is provided, --vnet-name must be provided",
              args: { name: "subnet" },
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
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id" },
            },
            {
              name: "--vnet-name",
              description: "The virtual network name",
              args: { name: "vnet-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
            {
              name: ["--zone-redundant", "-z"],
              description:
                "Specifies whether to enable zone redundancy. Default is true if no value is specified",
              args: { name: "zone-redundant", suggestions: ["false", "true"] },
            },
          ],
        },
        {
          name: "ad-admin",
          description:
            "Manage a managed instance's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a new managed instance Active Directory administrator",
              options: [
                {
                  name: ["--display-name", "-u"],
                  description:
                    "Display name of the Azure AD administrator user or group",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              ],
            },
            {
              name: "delete",
              description:
                "Deletes an existing managed instance Active Directory Administrator",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Returns a list of managed instance Active Directory Administrators",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Updates an existing managed instance Active Directory administrator",
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
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "ad-only-auth",
          description:
            "Manage a Managed Instance's Azure Active Directory only settings",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directory only Authentication for this Managed Instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The managed instance name",
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
              name: "enable",
              description:
                "Enable Azure Active Directory only Authentication for this Managed Instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The managed instance name",
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
              name: "get",
              description:
                "Get a specific Azure Active Directory only Authentication property",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The managed instance name",
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
          name: "advanced-threat-protection-setting",
          description:
            "Manage a SQL Managed Instance's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The managed instance name",
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
                "Update a SQL Managed Instance's advanced threat protection setting",
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
                  description: "The managed instance name",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "dtc",
          description:
            "Commands related to managed instance DTC management.\n\n\t\tThe managed instance DTC object can be fetched and updated using these commands",
          subcommands: [
            {
              name: "show",
              description: "Get managed instance DTC settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Update managed instance DTC settings",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--allow-inbound-enabled",
                  description: "Allow Inbound traffic to managed instance DTC",
                  args: {
                    name: "allow-inbound-enabled",
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
                  name: "--allow-outbound-enabled",
                  description: "Allow Outbound traffic of managed instance DTC",
                  args: {
                    name: "allow-outbound-enabled",
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
                  name: "--authentication",
                  description: "Authentication type of managed instance DTC",
                  args: { name: "authentication" },
                },
                {
                  name: "--dtc-enabled",
                  description: "Active status of managed instance DTC",
                  args: {
                    name: "dtc-enabled",
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
                  name: [
                    "--external-dns-suffix-search-list",
                    "--external-dns-suffixes",
                  ],
                  description:
                    'External dns suffix search list of managed instance DTC. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "external-dns-suffix-search-list" },
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
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: [
                    "--sna-lu6point2-transactions-enabled",
                    "--sna-lu-transactions",
                  ],
                  description:
                    "Allow SNA LU 6.2 Transactions to managed instance DTC",
                  args: {
                    name: "sna-lu6point2-transactions-enabled",
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
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: [
                    "--xa-transactions-default-timeout",
                    "--xa-default-timeout",
                  ],
                  description:
                    "Default timeout for XA Transactions (in seconds)",
                  args: { name: "xa-transactions-default-timeout" },
                },
                {
                  name: [
                    "--xa-transactions-maximum-timeout",
                    "--xa-max-timeout",
                  ],
                  description:
                    "Maximum timeout for XA Transactions (in seconds)",
                  args: { name: "xa-transactions-maximum-timeout" },
                },
                {
                  name: ["--xa-transactions-enabled", "--xa-transactions"],
                  description: "Allow XA Transactions to managed instance DTC",
                  args: {
                    name: "xa-transactions-enabled",
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
                  name: ["--managed-instance-name", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
          name: "endpoint-cert",
          description: "Endpoint certificates management commands",
          subcommands: [
            {
              name: "list",
              description:
                "List certificates used on endpoints on the target instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a certificate used on the endpoint with the given id",
              options: [
                {
                  name: ["--endpoint-type", "--name", "-n"],
                  description:
                    "Type of the endpoint whose certificate the customer is looking for",
                  args: { name: "endpoint-type" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
          name: "key",
          description: "Manage a SQL Instance's keys",
          subcommands: [
            {
              name: "create",
              description: "Creates a SQL Instance key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Deletes a SQL Instance key",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Gets a list of managed instance keys",
              options: [
                {
                  name: "--filter",
                  description:
                    "An OData filter expression that filters elements in the collection. Default value is None",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Shows a SQL Instance key",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "link",
          description: "Instance link management commands",
          subcommands: [
            {
              name: "create",
              description: "Creates a new instance link",
              options: [
                {
                  name: [
                    "--distributed-availability-group-name",
                    "--link",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the instance link",
                  args: { name: "distributed-availability-group-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of Azure SQL Managed Instance",
                  args: { name: "managed-instance-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
                {
                  name: ["--primary-availability-group-name", "--primary-ag"],
                  description: "Name of the primary availability group",
                  args: { name: "primary-availability-group-name" },
                },
                {
                  name: [
                    "--secondary-availability-group-name",
                    "--secondary-ag",
                  ],
                  description: "Name of the secondary availability group",
                  args: { name: "secondary-availability-group-name" },
                },
                {
                  name: "--source-endpoint",
                  description: "IP adress of the source endpoint",
                  args: { name: "source-endpoint" },
                },
                {
                  name: ["--target-database", "--target-db"],
                  description: "Name of the target database",
                  args: { name: "target-database" },
                },
              ],
            },
            {
              name: "delete",
              description: "Removes an instance link",
              options: [
                {
                  name: [
                    "--distributed-availability-group-name",
                    "--link",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the instance link",
                  args: { name: "distributed-availability-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of Azure SQL Managed Instance",
                  args: { name: "managed-instance-name" },
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
                  description: "Name of the resource group",
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
                "Returns information about link feature for Azure SQL Managed Instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of Azure SQL Managed Instance",
                  args: { name: "managed-instance-name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Returns information about link feature for Azure SQL Managed Instance",
              options: [
                {
                  name: [
                    "--distributed-availability-group-name",
                    "--link",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the instance link",
                  args: { name: "distributed-availability-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of Azure SQL Managed Instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Updates the properties of an instance link",
              options: [
                {
                  name: [
                    "--distributed-availability-group-name",
                    "--link",
                    "--name",
                    "-n",
                  ],
                  description: "Name of the instance link",
                  args: { name: "distributed-availability-group-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of Azure SQL Managed Instance",
                  args: { name: "managed-instance-name" },
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
                  name: "--replication-mode",
                  description:
                    "Replication mode value. Possible values include 'Sync' and 'Async'",
                  args: {
                    name: "replication-mode",
                    suggestions: ["Async", "Sync"],
                  },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
          name: "op",
          description: "Manage operations on a managed instance",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the managed instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to cancel",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
                "Gets a list of operations performed on the managed instance",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Gets a management operation on a managed instance",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The unique name of the operation to show",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "partner-cert",
          description: "Server trust certificate management commands",
          subcommands: [
            {
              name: "create",
              description:
                "Upload a server trust certificate from box to Sql Managed Instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to upload",
                  args: { name: "certificate-name" },
                  isRequired: true,
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                {
                  name: "--public-blob",
                  description: "The certificate public blob",
                  args: { name: "public-blob" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a server trust certificate that was uploaded from box to Sql Managed Instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to delete",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a list of server trust certificates that were uploaded from box to the given Sql Managed Instance",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
                "Get a server trust certificate that was uploaded from box to Sql Managed Instance",
              options: [
                {
                  name: ["--certificate-name", "--name", "-n"],
                  description: "Name of of the certificate to get",
                  args: { name: "certificate-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
          name: "server-configuration-option",
          description: "Server configuration option management commands",
          subcommands: [
            {
              name: "list",
              description:
                "List a list of managed instance server configuration options",
              options: [
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
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
              name: "set",
              description: "Set managed instance server configuration option",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server-configuration-option-value", "--value"],
                  description: "Value of the server configuration option",
                  args: { name: "server-configuration-option-value" },
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
              description: "Get managed instance server configuration option",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
                  name: [
                    "--managed-instance-name",
                    "--managed-instance",
                    "--instance-name",
                    "--mi",
                  ],
                  description: "Name of the managed instance",
                  args: { name: "managed-instance-name" },
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
                },
                {
                  name: ["--server-configuration-option-name", "--name", "-n"],
                  description: "Name of the server configuration option",
                  args: {
                    name: "server-configuration-option-name",
                    suggestions: ["allowPolybaseExport"],
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
          name: "start-stop-schedule",
          description: "Manage the managed instance's start stop schedule",
          subcommands: [
            {
              name: "create",
              description: "Create the managed instance's Start/Stop schedule",
              options: [
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "The description of the schedule",
                  args: { name: "description" },
                },
                {
                  name: "--schedule-list",
                  description:
                    'Schedule list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "schedule-list" },
                },
                {
                  name: "--timezone-id",
                  description: "The time zone of the schedule",
                  args: { name: "timezone-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the managed instance's Start/Stop schedule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "List the managed instance's Start/Stop schedules",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Get the managed instance's Start/Stop schedule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
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
              description: "Update the managed instance's Start/Stop schedule",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "The description of the schedule",
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
                  name: ["--managed-instance", "--mi"],
                  description: "The name of the managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the resource group",
                  args: { name: "resource-group" },
                },
                {
                  name: "--schedule-list",
                  description:
                    'Schedule list. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "schedule-list" },
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
                  name: "--timezone-id",
                  description: "The time zone of the schedule",
                  args: { name: "timezone-id" },
                },
              ],
            },
          ],
        },
        {
          name: "tde-key",
          description: "Manage a SQL Instance's encryption protector",
          subcommands: [
            {
              name: "set",
              description: "Sets the SQL Instance's encryption protector",
              options: [
                {
                  name: ["--server-key-type", "-t"],
                  description: "The type of the server key",
                  args: {
                    name: "server-key-type",
                    suggestions: ["AzureKeyVault", "ServiceManaged"],
                  },
                  isRequired: true,
                },
                {
                  name: "--auto-rotation-enabled",
                  description:
                    "The key auto rotation opt in status. Can be either true or false",
                  args: {
                    name: "auto-rotation-enabled",
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
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
              description: "Shows a server encryption protector",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
      name: "mi-arc",
      description: "Manage Azure Arc-enabled SQL managed instances",
      subcommands: [
        {
          name: "create",
          description: "Create a SQL managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the SQL managed instance",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ad-account-name",
              description:
                "The Active Directory account name for this Arc-enabled SQL Managed Instance. This account needs to be created prior to the deployment of this instance",
              args: { name: "ad-account-name" },
            },
            {
              name: "--ad-connector-name",
              description:
                "The name of the Active Directory Connector. This parameter indicates an intent to deploy with AD support",
              args: { name: "ad-connector-name" },
            },
            {
              name: "--ad-encryption-types",
              description:
                "A comma-separated list of supported Active Directory encryption types. Must be a subset of the following values: RC4, AES128, AES256",
              args: { name: "ad-encryption-types" },
            },
            {
              name: "--admin-login-secret",
              description:
                "Name of the Kubernetes secret to generate that hosts or will host user admin login account credential",
              args: { name: "admin-login-secret" },
            },
            {
              name: "--agent-enabled",
              description:
                "Enable SQL Server agent for the instance. Default is disabled. Allowed values are 'true' or 'false'",
              args: { name: "agent-enabled" },
            },
            {
              name: "--annotations",
              description:
                "Comma-separated list of annotations of the SQL managed instance",
              args: { name: "annotations" },
            },
            {
              name: "--cert-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for SQL Server",
              args: { name: "cert-private-key-file" },
            },
            {
              name: "--cert-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for SQL Server",
              args: { name: "cert-public-key-file" },
            },
            {
              name: "--collation",
              description: "The SQL Server collation for the instance",
              args: { name: "collation" },
            },
            {
              name: ["--cores-limit", "-c"],
              description:
                "The cores limit of the managed instance as an integer",
              args: { name: "cores-limit" },
            },
            {
              name: "--cores-request",
              description:
                "The request for cores of the managed instance as an integer",
              args: { name: "cores-request" },
            },
            {
              name: "--custom-location",
              description: "The custom location for this instance",
              args: { name: "custom-location" },
            },
            {
              name: "--dev",
              description:
                "If this is specified, then it is considered a dev instance and will not be billed for",
              args: { name: "dev" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--keytab-secret",
              description:
                "The name of the Kubernetes secret that contains the keytab file for this Arc-enabled SQL Managed Instance",
              args: { name: "keytab-secret" },
            },
            {
              name: "--labels",
              description:
                "Comma-separated list of labels of the SQL managed instance",
              args: { name: "labels" },
            },
            {
              name: "--language",
              description:
                "The SQL Server locale to any supported language identifier (LCID) for the instance",
              args: { name: "language" },
            },
            {
              name: ["--license-type", "-l"],
              description:
                "The license type to apply for this managed instance Allowed values are: BasePrice, LicenseIncluded, DisasterRecovery.Default is LicenseIncluded. The license type can be changed",
              args: { name: "license-type" },
            },
            {
              name: ["--memory-limit", "-m"],
              description:
                "The limit of the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description:
                "The request for the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-request" },
            },
            {
              name: "--no-external-endpoint",
              description:
                "If specified, no external service will be created. Otherwise, an external service will be created using the same service type as the data controller",
              args: { name: "no-external-endpoint" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--orchestrator-replicas",
              description:
                "The number of high availability orchestrator replicas. Value must be between 1 and 3",
              args: { name: "orchestrator-replicas" },
            },
            {
              name: "--path",
              description:
                "The path to the azext_arcdata file for the SQL managed instance json file",
              args: { name: "path" },
            },
            {
              name: "--primary-dns-name",
              description:
                "The primary service DNS name exposed to the end-users to connect to this Arc-enabled SQL Managed Instance (e.g. sqlinstancename.contoso.com)",
              args: { name: "primary-dns-name" },
            },
            {
              name: "--primary-port-number",
              description:
                "The port number on which the primary service is exposed to the end-users (e.g. 31433)",
              args: { name: "primary-port-number" },
            },
            {
              name: "--readable-secondaries",
              description:
                "Number of replicas to be made readable. Applies only to Business Critical tier. Value must be between 0 and the number of replicas minus 1",
              args: { name: "readable-secondaries" },
            },
            {
              name: "--replicas",
              description:
                "This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes. Default is 1 replica for General Purpose, 3 replicas for Business Critical",
              args: { name: "replicas", suggestions: ["1", "2", "3"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group to which the Arc-enabled SQL Managed Instance should be added",
              args: { name: "resource-group" },
            },
            {
              name: "--retention-days",
              description:
                "Backup retention period, specified in days. Allowed values are 0 to 35. Default is 7. Setting the retention period to 0 will turn off automatic backups for all the databases on the SQL managed instance and any prior backups will be deleted",
              args: { name: "retention-days" },
            },
            {
              name: "--secondary-dns-name",
              description:
                "The secondary service DNS name exposed to the end-users to connect to this Arc-enabled SQL Managed Instance (e.g. sqlinstancename2.contoso.com)",
              args: { name: "secondary-dns-name" },
            },
            {
              name: "--secondary-port-number",
              description:
                "The port number on which the secondary service is exposed to the end-users (e.g. 31434)",
              args: { name: "secondary-port-number" },
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
                "Name of the Kubernetes secret to generate that hosts or will host SQL service certificate",
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
              args: {
                name: "service-type",
                suggestions: ["LoadBalancer", "NodePort"],
              },
            },
            {
              name: "--storage-annotations",
              description:
                "Comma-separated list of annotations to apply to all PVCs",
              args: { name: "storage-annotations" },
            },
            {
              name: "--storage-class-backups",
              description:
                "A ReadWriteMany (RWX) capable storage class to be used for backups (/var/opt/mssql/backups). If no value is specified, the default storage class will be used",
              args: { name: "storage-class-backups" },
            },
            {
              name: ["--storage-class-data", "-d"],
              description:
                "The storage class to be used for data files (.mdf, .ndf). If no value is specified, then no storage class will be specified, which will result in Kubernetes using the default storage class",
              args: { name: "storage-class-data" },
            },
            {
              name: "--storage-class-datalogs",
              description:
                "The storage class to be used for database logs (.ldf). If no value is specified, then no storage class will be specified, which will result in Kubernetes using the default storage class",
              args: { name: "storage-class-datalogs" },
            },
            {
              name: "--storage-class-logs",
              description:
                "The storage class to be used for logs (/var/log). If no value is specified, then no storage class will be specified, which will result in Kubernetes using the default storage class",
              args: { name: "storage-class-logs" },
            },
            {
              name: "--storage-class-orchestrator-logs",
              description:
                "The storage class to be used for orchestrator logs (/var/log). If no value is specified, then no storage class will be specified, which will result in Kubernetes using the default storage class",
              args: { name: "storage-class-orchestrator-logs" },
            },
            {
              name: "--storage-labels",
              description:
                "Comma-separated list of labels to apply to all PVCs",
              args: { name: "storage-labels" },
            },
            {
              name: "--sync-secondary-to-commit",
              description:
                "Number of secondary replicas that must be synchronized to commit. Setting this value to -1 will set the number of required synchronized secondaries to '(# of replicas - 1) / 2', rounded down",
              args: {
                name: "sync-secondary-to-commit",
                suggestions: ["-1", "0", "1", "2"],
              },
            },
            {
              name: "--tde-mode",
              description:
                "The Transparent Data Encryption (TDE) mode for this Arc-enabled SQL Managed Instance. Allowed values: ServiceManaged, CustomerManaged, or Disabled. Default is Disabled",
              args: { name: "tde-mode" },
            },
            {
              name: "--tde-protector-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for TDE",
              args: { name: "tde-protector-private-key-file" },
            },
            {
              name: "--tde-protector-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for TDE",
              args: { name: "tde-protector-public-key-file" },
            },
            {
              name: "--tde-protector-secret",
              description:
                "The name of the Kubernetes secret that contains the TDE protector certificate and private key for this Arc-enabled SQL Managed Instance. Can only be specified for CustomerManaged TDE mode",
              args: { name: "tde-protector-secret" },
            },
            {
              name: ["--tier", "-t"],
              description:
                "The pricing tier for the instance. Allowed values: BusinessCritical (bc for short) or GeneralPurpose (gp for short). Default is GeneralPurpose",
              args: { name: "tier" },
            },
            {
              name: "--time-zone",
              description: "The SQL Server time zone for the instance",
              args: { name: "time-zone" },
            },
            {
              name: "--trace-flags",
              description:
                "Comma separated list of traceflags. No flags by default",
              args: { name: "trace-flags" },
            },
            {
              name: "--use-k8s",
              description:
                "Create SQL managed instance using local Kubernetes APIs",
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
              name: "--volume-size-datalogs",
              description:
                "The size of the storage volume to be used for data logs as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-datalogs" },
            },
            {
              name: "--volume-size-logs",
              description:
                "The size of the storage volume to be used for logs as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-logs" },
            },
            {
              name: "--volume-size-orchestrator-logs",
              description:
                "The size of the storage volume to be used for orchestrator logs as a positive number followed by Ki (kilobytes), Mi (megabytes), or Gi (gigabytes)",
              args: { name: "volume-size-orchestrator-logs" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a SQL managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the SQL managed instance to be deleted",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the Arc-enabled SQL Managed Instance exists",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "edit",
          description: "Deprecated, use update over edit",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the SQL managed instance that is being edited. The name under which your instance is deployed cannot be changed",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--agent-enabled",
              description:
                "Enable SQL Server agent for the instance. Default is disabled",
              args: { name: "agent-enabled" },
            },
            {
              name: "--annotations",
              description:
                "Comma-separated list of annotations of the SQL managed instance",
              args: { name: "annotations" },
            },
            {
              name: ["--cores-limit", "-c"],
              description:
                "The cores limit of the managed instance as an integer",
              args: { name: "cores-limit" },
            },
            {
              name: "--cores-request",
              description:
                "The request for cores of the managed instance as an integer",
              args: { name: "cores-request" },
            },
            {
              name: "--custom-location",
              description: "The custom location for this instance",
              args: { name: "custom-location" },
            },
            {
              name: "--dev",
              description:
                "If this is specified, then it is considered a dev instance and will not be billed for",
              args: { name: "dev" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--labels",
              description:
                "Comma-separated list of labels of the SQL managed instance",
              args: { name: "labels" },
            },
            {
              name: "--license-type",
              description:
                "The license type to update for this managed instance Allowed values are: BasePrice, LicenseIncluded, DisasterRecovery. Default is LicenseIncluded",
              args: { name: "license-type" },
            },
            {
              name: "--location",
              description:
                "The Azure location in which the sqlmi metadata will be stored (e.g. eastus)",
              args: { name: "location" },
            },
            {
              name: ["--memory-limit", "-m"],
              description:
                "The limit of the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description:
                "The request for the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-request" },
            },
            {
              name: "--no-wait",
              description:
                "If given, the command will not wait for the instance to be in a ready state before returning",
            },
            {
              name: "--path",
              description:
                "The path to the azext_arcdata file for the SQL managed instance json file",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the Arc-enabled SQL Managed Instance exists",
              args: { name: "resource-group" },
            },
            {
              name: "--retention-days",
              description:
                "Backup retention period, specified in days. Allowed values are 0 to 35. Default is 7. Setting the retention period to 0 will turn off automatic backups for all the databases on the SQL managed instance and any prior backups will be deleted",
              args: { name: "retention-days" },
            },
            {
              name: "--service-annotations",
              description:
                "Comma-separated list of annotations to apply to all external services",
              args: { name: "service-annotations" },
            },
            {
              name: "--service-labels",
              description:
                "Comma-separated list of labels to apply to all external services",
              args: { name: "service-labels" },
            },
            {
              name: "--tag-name",
              description: "The tag name of the SQL managed instance",
              args: { name: "tag-name" },
            },
            {
              name: "--tag-value",
              description: "The tag value of the SQL managed instance",
              args: { name: "tag-value" },
            },
            {
              name: ["--tier", "-t"],
              description:
                "The pricing tier for the instance. Allowed values: BusinessCritical (bc for short) or GeneralPurpose (gp for short). Default is GeneralPurpose",
              args: { name: "tier" },
            },
            {
              name: "--time-zone",
              description: "The SQL Server time zone for the instance",
              args: { name: "time-zone" },
            },
            {
              name: "--trace-flags",
              description:
                "Comma separated list of traceflags. No flags by default",
              args: { name: "trace-flags" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "get-mirroring-cert",
          description:
            "Retrieve certificate of availability group mirroring endpoint from sql mi and store in a file",
          options: [
            {
              name: "--cert-file",
              description:
                "The local filename to store the retrieved certificate in PEM format",
              args: { name: "cert-file" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the SQL managed instance",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
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
          description: "List SQL managed instances",
          options: [
            {
              name: "--custom-location",
              description:
                "The custom location in which the Arc-enabled SQL Managed Instances are deployed. If not specified, all instances in the resource group will be listed",
              args: { name: "custom-location" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace containing the Arc-enabled SQL Managed Instances. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group containing the Arc-enabled SQL Managed Instances",
              args: { name: "resource-group" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "reprovision-replica",
          description: "Reprovision a replica in a SQL managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the SQL managed instance replica to be reprovisioned",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance replica is deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--use-k8s",
              description:
                "Reprovision SQL managed instance replica using local Kubernetes APIs",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "show",
          description: "Show the details of a SQL managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description: "The name of the SQL managed instance to be shown",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--path", "-p"],
              description:
                "A path where the full specification for the SQL managed instance should be written. If omitted, the specification will be written to standard output",
              args: { name: "path" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the Arc-enabled SQL Managed Instance exists",
              args: { name: "resource-group" },
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
          description: "Update the configuration of a SQL managed instance",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "The name of the SQL managed instance that is being edited. The name under which your instance is deployed cannot be changed",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--ad-encryption-types",
              description:
                "A comma-separated list of supported Active Directory encryption types. Must be a subset of the following values: RC4, AES128, AES256",
              args: { name: "ad-encryption-types" },
            },
            {
              name: "--agent-enabled",
              description:
                "Enable SQL Server agent for the instance. Default is disabled",
              args: { name: "agent-enabled" },
            },
            {
              name: "--annotations",
              description:
                "Comma-separated list of annotations of the SQL managed instance",
              args: { name: "annotations" },
            },
            {
              name: "--cert-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for SQL Server",
              args: { name: "cert-private-key-file" },
            },
            {
              name: "--cert-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for SQL Server",
              args: { name: "cert-public-key-file" },
            },
            {
              name: ["--cores-limit", "-c"],
              description:
                "The cores limit of the managed instance as an integer",
              args: { name: "cores-limit" },
            },
            {
              name: "--cores-request",
              description:
                "The request for cores of the managed instance as an integer",
              args: { name: "cores-request" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--keytab-secret",
              description:
                "The name of the Kubernetes secret that contains the keytab file for this Arc-enabled SQL Managed Instance",
              args: { name: "keytab-secret" },
            },
            {
              name: "--labels",
              description:
                "Comma-separated list of labels of the SQL managed instance",
              args: { name: "labels" },
            },
            {
              name: ["--license-type", "-l"],
              description:
                "The license type to apply for this managed instance Allowed values are: BasePrice, LicenseIncluded, DisasterRecovery.Default is LicenseIncluded. The license type can be changed",
              args: { name: "license-type" },
            },
            {
              name: ["--memory-limit", "-m"],
              description:
                "The limit of the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-limit" },
            },
            {
              name: "--memory-request",
              description:
                "The request for the capacity of the managed instance as an integer number followed by Gi (gigabytes). Example: 4Gi",
              args: { name: "memory-request" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--orchestrator-replicas",
              description:
                "The number of high availability orchestrator replicas. Value must be between 1 and 3",
              args: { name: "orchestrator-replicas" },
            },
            {
              name: "--path",
              description:
                "The path to the azext_arcdata file for the SQL managed instance json file",
              args: { name: "path" },
            },
            {
              name: "--preferred-primary-replica",
              description: "The preferred primary replica to be updated",
              args: { name: "preferred-primary-replica" },
            },
            {
              name: "--readable-secondaries",
              description:
                "Number of replicas to be made readable. Applies only to Business Critical tier. Value must be between 0 and the number of replicas minus 1",
              args: { name: "readable-secondaries" },
            },
            {
              name: "--replicas",
              description:
                "This option specifies the number of SQL Managed Instance replicas that will be deployed in your Kubernetes cluster for high availability purposes",
              args: { name: "replicas", suggestions: ["1", "2", "3"] },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The Azure resource group in which the Arc-enabled SQL Managed Instance exists",
              args: { name: "resource-group" },
            },
            {
              name: "--retention-days",
              description:
                "Backup retention period, specified in days. Allowed values are 0 to 35. Default is 7. Setting the retention period to 0 will turn off automatic backups for all the databases on the SQL managed instance and any prior backups will be deleted",
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
                "Name of the Kubernetes secret to generate that hosts or will host SQL service certificate",
              args: { name: "service-cert-secret" },
            },
            {
              name: "--service-labels",
              description:
                "Comma-separated list of labels to apply to all external services",
              args: { name: "service-labels" },
            },
            {
              name: "--sync-secondary-to-commit",
              description:
                "Number of secondary replicas that must be synchronized to commit. Setting this value to -1 will set the number of required synchronized secondaries to '(# of replicas - 1) / 2', rounded down",
              args: {
                name: "sync-secondary-to-commit",
                suggestions: ["-1", "0", "1", "2"],
              },
            },
            {
              name: "--tde-mode",
              description:
                "The Transparent Data Encryption (TDE) mode for this Arc-enabled SQL Managed Instance. Allowed values: ServiceManaged, CustomerManaged, or Disabled. Default is Disabled",
              args: { name: "tde-mode" },
            },
            {
              name: "--tde-protector-private-key-file",
              description:
                "Path to the file containing a PEM formatted certificate private key to be used for TDE",
              args: { name: "tde-protector-private-key-file" },
            },
            {
              name: "--tde-protector-public-key-file",
              description:
                "Path to the file containing a PEM formatted certificate public key to be used for TDE",
              args: { name: "tde-protector-public-key-file" },
            },
            {
              name: "--tde-protector-secret",
              description:
                "The name of the Kubernetes secret that contains the TDE protector certificate and private key for this Arc-enabled SQL Managed Instance. Can only be specified for CustomerManaged TDE mode",
              args: { name: "tde-protector-secret" },
            },
            {
              name: ["--tier", "-t"],
              description:
                "The pricing tier for the instance. Allowed values: BusinessCritical (bc for short) or GeneralPurpose (gp for short). Default is GeneralPurpose",
              args: { name: "tier" },
            },
            {
              name: "--time-zone",
              description: "The SQL Server time zone for the instance",
              args: { name: "time-zone" },
            },
            {
              name: "--trace-flags",
              description:
                "Comma separated list of traceflags. No flags by default",
              args: { name: "trace-flags" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade SQL managed instance",
          options: [
            {
              name: ["--desired-version", "-v"],
              description:
                "The latest valid version to upgrade to. Optional, if no version is specified, the data controller version will be used. Specify 'auto' to automatically upgrade to the latest valid version. Learn more about automatic upgrades at: https://aka.ms/arc-sqlmi-auto-upgrade",
              args: { name: "desired-version" },
            },
            {
              name: ["--dry-run", "-d"],
              description:
                "Indicates which instance would be upgraded but does not actually upgrade the instances",
              args: { name: "dry-run" },
            },
            {
              name: ["--field-filter", "-f"],
              description:
                "Filter to select instances to upgrade based on resource properties",
              args: { name: "field-filter" },
            },
            {
              name: "--force",
              description:
                "Overrides all policies that may be applied to the instance, and attempts the upgrade",
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "Namespace where the SQL managed instance is to be deployed. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: ["--label-filter", "-l"],
              description:
                "Filter to select instance to upgrade based on labels",
              args: { name: "label-filter" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the SQL managed instance",
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
                "The Azure resource group in which the target Arc-enabled SQL Managed Instance exists",
              args: { name: "resource-group" },
            },
            {
              name: "--target",
              description:
                "Option '--target' has been deprecated and will be removed in a future release. Use '--desired-version' instead. The latest valid version to upgrade to. Optional, if no version is specified, the data controller version will be used. Specify 'auto' to automatically upgrade to the latest valid version. Learn more about automatic upgrades at: https://aka.ms/arc-sqlmi-auto-upgrade",
              args: { name: "target" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
        {
          name: "config",
          description: "Configuration commands",
          subcommands: [
            {
              name: "add",
              description: "Add a value for a json path in a config file",
              options: [
                {
                  name: ["--json-values", "-j"],
                  description:
                    'A key value pair list of json paths to values: key1.subkey1=value1,key2.subkey2=value2. You may provide inline json values such as: key=\'{"kind":"cluster","name":"test-cluster"}\' or provide a file path, such as key=./values.json. The add command does NOT support conditionals. If the inline value you are providing is a key value pair itself with = and , please escape those characters. For example: key1=\\"key2\\=val2\\,key3\\=val3\\". Please see http://jsonpatch.com/ for examples of how your path should look. If you would like to access an array, you must do so by indicating the index, such as key.0=value',
                  args: { name: "json-values" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Path to the custom resource specification, i.e. custom/spec.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "init",
              description:
                "Initialize the CRD and specification files for a SQL managed instance",
              options: [
                {
                  name: ["--path", "-p"],
                  description:
                    "A path where the CRD and specification for the SQL managed instance should be written",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "patch",
              description: "Patch a config file based on a json patch file",
              options: [
                {
                  name: "--patch-file",
                  description:
                    'Path to a patch json file that is based off the jsonpatch library: http://jsonpatch.com/. You must start your patch json file with a key called patch, whose value is an array of patch operations you intend to make. For the path of a patch operation, you may use dot notation, such as key1.key2 for most operations. If you would like to do a replace operation, and you are replacing a value in an array that requires a conditional, please use the jsonpath notation by beginning your path with a $. This will allow you to do a conditional such as $.key1.key2[?(@.key3=="someValue"].key4.See the examples below. For additional help with conditionals, see: https://jsonpath.com/',
                  args: { name: "patch-file" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Path to the custom resource specification, i.e. custom/spec.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "remove",
              description: "Remove a value for a json path in a config file",
              options: [
                {
                  name: ["--json-path", "-j"],
                  description:
                    "A list of json paths based on the jsonpatch library that indicates which values you would like removed, such as: key1.subkey1,key2.subkey2. The remove command does NOT support conditionals. Please see http://jsonpatch.com/ for examples of how your path should look. If you would like to access an array, you must do so by indicating the index, such as key.0=value",
                  args: { name: "json-path" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Path to the custom resource specification, i.e. custom/spec.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "replace",
              description: "Replace a value for a json path in a config file",
              options: [
                {
                  name: ["--json-values", "-j"],
                  description:
                    'A key value pair list of json paths to values: key1.subkey1=value1,key2.subkey2=value2. You may provide inline json values such as: key={"kind":"cluster","name":"test-cluster"} or provide a file path, such as key=./values.json. The replace command supports conditionals through the jsonpath library. To use this, start your path with a $. This will allow you to do a conditional such as -j $.key1.key2[?(@.key3=="someValue"].key4=value. If the inline value you are providing is a key value pair itself with = and , please escape those characters. For example, key1=\\"key2\\=val2\\,key3\\=val3\\". You may see examples below. For additional help, see: https://jsonpath.com/',
                  args: { name: "json-values" },
                  isRequired: true,
                },
                {
                  name: ["--path", "-p"],
                  description:
                    "Path to the custom resource specification, i.e. custom/spec.json",
                  args: { name: "path" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "endpoint",
          description: "View and manage SQL endpoints",
          subcommands: [
            {
              name: "list",
              description: "List the SQL endpoints",
              options: [
                {
                  name: ["--k8s-namespace", "-k"],
                  description:
                    "Namespace where the SQL managed instances exist. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
                  args: { name: "k8s-namespace" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the SQL instance to be shown. If omitted, all endpoints for all instances will be shown",
                  args: { name: "name" },
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
      name: "midb",
      description: "Manage SQL Managed Instance databases",
      subcommands: [
        {
          name: "create",
          description: "Create a managed database",
          options: [
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
              name: "--collation",
              description:
                "The collation of the Azure SQL Managed Database collation to use, e.g.: SQL_Latin1_General_CP1_CI_AS or Latin1_General_100_CS_AS_SC",
              args: { name: "collation" },
            },
            {
              name: "--ledger-on",
              description:
                "Create a ledger database, in which the integrity of all data is protected by the ledger feature. All tables in the ledger database must be ledger tables. Note: the value of this property cannot be changed after the database has been created",
              args: { name: "ledger-on", suggestions: ["Disabled", "Enabled"] },
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
          description: "Delete a managed database",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List managed databases on a managed instance",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
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
          name: "list-deleted",
          description: "List restorable deleted managed databases",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
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
          name: "recover",
          description:
            "Recover a managed database using geo-pair instance backup",
          options: [
            {
              name: ["--recoverable-database-id", "-r"],
              description:
                "The id of recoverable database from geo-replicated instance",
              args: { name: "recoverable-database-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
          name: "restore",
          description: "Restore a managed database",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the managed database that will be created as the restore destination",
              args: { name: "dest-name" },
              isRequired: true,
            },
            {
              name: ["--time", "-t"],
              description:
                'The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database\'s earliestRestoreDate value. Time should be in following format: "YYYY-MM-DDTHH:MM:SS"',
              args: { name: "time" },
              isRequired: true,
            },
            {
              name: "--deleted-time",
              description:
                "If specified, restore from a deleted database instead of from an existing database. Must match the deleted time of a deleted database on the source Managed Instance",
              args: { name: "deleted-time" },
            },
            {
              name: "--dest-mi",
              description:
                "Name of the managed instance to restore managed database to. This can be same managed instance, or another managed instance on same subscription. When not specified it defaults to source managed instance",
              args: { name: "dest-mi" },
            },
            {
              name: "--dest-resource-group",
              description:
                "Name of the resource group of the managed instance to restore managed database to. When not specified it defaults to source resource group",
              args: { name: "dest-resource-group" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
              name: ["--source-sub", "-s"],
              description:
                "Subscription id of the source database, the one restored from. This parameter should be used when doing cross subscription restore",
              args: { name: "source-sub" },
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
          name: "show",
          description: "Get the details for a managed database",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
          description: "Update a managed database",
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
              name: ["--managed-instance", "--mi"],
              description: "Name of the Azure SQL Managed Instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Azure SQL Managed Database",
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
          name: "advanced-threat-protection-setting",
          description:
            "Manage a SQL Managed Instance database's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                "Update a SQL Managed Instance database's advanced threat protection setting",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "copy",
          description:
            "Start, complete, cancel and list managed database copy operations",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "complete",
              description: "Complete managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "list",
              description: "List managed database copy operations",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the target managed instance to show copy operations for",
                  args: { name: "dest-mi" },
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the target resource group to show copy operations for",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "Flag that only shows latest copy operation per managed database",
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the source managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the source resource group",
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
              description: "Start managed database copy operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to copy the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to copy the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          ],
        },
        {
          name: "ledger-digest-uploads",
          description: "Manage ledger digest upload settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable uploading ledger digests",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "enable",
              description:
                "Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value",
              options: [
                {
                  name: "--endpoint",
                  description:
                    "The endpoint of a digest storage, which can be either an Azure Blob storage or a ledger in Azure Confidential Ledger",
                  args: { name: "endpoint" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Show the current ledger digest settings",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "log-replay",
          description:
            "SQL Managed Instance database Log Replay service commands",
          subcommands: [
            {
              name: "complete",
              description: "Complete Log Replay service on specified database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--last-backup-name", "--last-bn"],
                  description: "The name of the last backup to restore",
                  args: { name: "last-backup-name" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Get status of Log Replay service",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description: "Start Log Replay service on specified database",
              options: [
                {
                  name: ["--storage-sas", "--ss"],
                  description:
                    "The authorization Sas token to access storage container where backups are",
                  args: { name: "storage-sas" },
                  isRequired: true,
                },
                {
                  name: ["--storage-uri", "--su"],
                  description:
                    "The URI of the storage container where backups are",
                  args: { name: "storage-uri" },
                  isRequired: true,
                },
                {
                  name: ["--auto-complete", "-a"],
                  description:
                    "The flag that in usage with last_backup_name automatically completes log replay servise",
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--last-backup-name", "--last-bn"],
                  description: "The name of the last backup to restore",
                  args: { name: "last-backup-name" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                  name: ["--storage-identity", "--si"],
                  description: "The storage container identity to use",
                  args: {
                    name: "storage-identity",
                    suggestions: ["ManagedIdentity", "SharedAccessSignature"],
                  },
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
              description: "Stop Log Replay service",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
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
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "ltr-backup",
          description:
            "Manage SQL Managed Instance database long term retention backups",
          subcommands: [
            {
              name: "delete",
              description: "Delete a long term retention backup",
              options: [
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required",
                  args: { name: "backup-id" },
                },
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name",
                  args: { name: "name" },
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
                "List the long term retention backups for a location, instance or database",
              options: [
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--database", "-d"],
                  description:
                    "The name of the Azure SQL Managed Database. If specified (along with instance name), retrieves all requested backups under this database",
                  args: { name: "database" },
                },
                {
                  name: ["--database-state", "--state"],
                  description:
                    "'All', 'Live', or 'Deleted'. Will fetch backups only from databases of specified state. If no state provied, defaults to 'All'",
                  args: { name: "database-state" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "If true, will only return the latest backup for each database",
                  args: { name: "only-latest-per-database" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description:
                    "Name of the Azure SQL Managed Instance. If specified, retrieves all requested backups under this managed instance",
                  args: { name: "managed-instance" },
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
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
              options: [
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the long term retention backup to be restored. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id",
                  args: { name: "backup-id" },
                  isRequired: true,
                },
                {
                  name: "--dest-database",
                  description:
                    "Name of the managed database that will be created as the restore destination",
                  args: { name: "dest-database" },
                  isRequired: true,
                },
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to restore managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: "--dest-resource-group",
                  description:
                    "Name of the resource group of the managed instance to restore managed database to",
                  args: { name: "dest-resource-group" },
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
              name: "show",
              description:
                "Get a long term retention backup for a managed database",
              options: [
                {
                  name: ["--backup-id", "--id"],
                  description:
                    "The resource id of the backups. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup id. If provided, other arguments are not required",
                  args: { name: "backup-id" },
                },
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                },
                {
                  name: ["--location", "-l"],
                  description: "The location of the desired backup(s)",
                  args: { name: "location" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the LTR backup. Use 'az sql midb ltr-backup show' or 'az sql midb ltr-backup list' for backup name",
                  args: { name: "name" },
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
              options: [
                {
                  name: ["--database", "-d"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "database" },
                  isRequired: true,
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
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
          name: "ltr-policy",
          description:
            "Manage SQL Managed Instance database long term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update long term retention settings for a managed database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: "--monthly-retention",
                  description:
                    "Retention for the monthly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "monthly-retention" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
                  name: "--week-of-year",
                  description:
                    "The Week of Year, 1 to 52, in which to take the yearly LTR backup",
                  args: { name: "week-of-year" },
                },
                {
                  name: "--weekly-retention",
                  description:
                    "Retention for the weekly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "weekly-retention" },
                },
                {
                  name: "--yearly-retention",
                  description:
                    "Retention for the yearly backup. If just a number is passed instead of an ISO 8601 string, days will be assumed as the units.There is a minimum of 7 days and a maximum of 10 years",
                  args: { name: "yearly-retention" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the long term retention policy for a managed database",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          name: "move",
          description:
            "Start, complete, cancel and list managed database move operations",
          subcommands: [
            {
              name: "cancel",
              description: "Cancel managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "complete",
              description: "Complete managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              name: "list",
              description: "List managed database move operations",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the target managed instance to show move operations for",
                  args: { name: "dest-mi" },
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the target resource group to show move operations for",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--only-latest-per-database", "--latest"],
                  description:
                    "Flag that only shows latest move operation per managed database",
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the source managed instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description: "Name of the source resource group",
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
              description: "Start managed database move operation",
              options: [
                {
                  name: "--dest-mi",
                  description:
                    "Name of the managed instance to move the managed database to",
                  args: { name: "dest-mi" },
                  isRequired: true,
                },
                {
                  name: ["--dest-resource-group", "--dest-rg"],
                  description:
                    "Name of the resource group to move the managed database to. If unspecified, defaults to the origin resource group",
                  args: { name: "dest-resource-group" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
          ],
        },
        {
          name: "short-term-retention-policy",
          description:
            "Manage SQL Managed Instance database backup short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention for automated backups on a single database",
              options: [
                {
                  name: "--retention-days",
                  description:
                    "New backup short term retention policy in days.Valid policy for live database is 7-35 days, valid policy for dropped databases is 0-35 days",
                  args: { name: "retention-days" },
                  isRequired: true,
                },
                {
                  name: "--deleted-time",
                  description:
                    "If specified, updates retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance",
                  args: { name: "deleted-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
              description:
                "Show short term retention for automated backups on a single database",
              options: [
                {
                  name: "--deleted-time",
                  description:
                    "If specified, shows retention days for a deleted database, instead of an existing database.Must match the deleted time of a deleted database on the source Managed Instance",
                  args: { name: "deleted-time" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--managed-instance", "--mi"],
                  description: "Name of the Azure SQL Managed Instance",
                  args: { name: "managed-instance" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the Azure SQL Managed Database",
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
      name: "midb-arc",
      description:
        "Manage databases for Azure Arc-enabled SQL managed instances",
      subcommands: [
        {
          name: "restore",
          description:
            "Restore a database to an Azure Arc enabled SQL managed instance",
          options: [
            {
              name: "--dest-name",
              description:
                "Name of the database that will be created as the restore destination",
              args: { name: "dest-name" },
            },
            {
              name: "--dry-run",
              description:
                "Validates if the restore operation can be successful or not by returning earliest and latest restore time window",
              args: { name: "dry-run" },
            },
            {
              name: ["--k8s-namespace", "-k"],
              description:
                "The Kubernetes namespace that contains the Azure Arc enabled SQL managed instance. If no namespace is specified, then the namespace defined in the kubeconfig will be used",
              args: { name: "k8s-namespace" },
            },
            {
              name: "--managed-instance",
              description:
                "Name of the source Azure Arc enabled SQL managed instance",
              args: { name: "managed-instance" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the source database from where the backups should be retrieved",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
              args: { name: "no-wait" },
            },
            {
              name: ["--time", "-t"],
              description:
                "The point in time of the source database that will be restored to create the new database. Must be greater than or equal to the source database's earliest restore date/time value. Time should be in following format: 'YYYY-MM-DDTHH:MM:SSZ'. If no time is provided, the most recent backup will be restored",
              args: { name: "time" },
            },
            {
              name: "--use-k8s",
              description: "Use local Kubernetes APIs to perform this action",
              args: { name: "use-k8s" },
            },
          ],
        },
      ],
    },
    {
      name: "recoverable-midb",
      description: "Recoverable managed databases command group",
      subcommands: [
        {
          name: "list",
          description:
            "Get all recoverable managed databases for given instance name",
          options: [
            {
              name: ["--instance-name", "--mi"],
              description: "The name of the managed instance. Required",
              args: { name: "instance-name" },
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
          description: "Get recoverable managed database",
          options: [
            {
              name: ["--database-name", "-n"],
              description:
                "The id of recoverable database from geo-replicated instance",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--instance-name", "--mi"],
              description: "The name of the managed instance. Required",
              args: { name: "instance-name" },
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
      name: "server",
      description: "Manage SQL servers",
      subcommands: [
        {
          name: "create",
          description: "Create a server",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: ["--admin-password", "-p"],
              description:
                "The administrator login password (required forserver creation)",
              args: { name: "admin-password" },
            },
            {
              name: ["--admin-user", "-u"],
              description:
                "Administrator username for the server. Oncecreated it cannot be changed",
              args: { name: "admin-user" },
            },
            {
              name: ["--assign-identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            {
              name: "--enable-ad-only-auth",
              description:
                "Enable Azure Active Directory Only Authentication for this server",
            },
            {
              name: ["--enable-public-network", "-e"],
              description:
                "Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server",
              args: {
                name: "enable-public-network",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--external-admin-name",
              description:
                "Display name of the Azure AD administrator user, group or application",
              args: { name: "external-admin-name" },
            },
            {
              name: "--external-admin-principal-type",
              description: "User, Group or Application",
              args: { name: "external-admin-principal-type" },
            },
            {
              name: "--external-admin-sid",
              description:
                "The unique ID of the Azure AD administrator. Object Id for User or Group, Client Id for Applications",
              args: { name: "external-admin-sid" },
            },
            {
              name: ["--federated-client-id", "--fid"],
              description:
                "The federated client id used in cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssigned,UserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
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
                "The minimal TLS version enforced by the sql server for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2"],
              },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
            },
            {
              name: ["--restrict-outbound-network-access", "-r"],
              description:
                "Set whether outbound network access to server is restricted or not. When true,the outbound connections from the server will be restricted",
              args: {
                name: "restrict-outbound-network-access",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a server",
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
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          description: "List available servers",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
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
          name: "list-usages",
          description: "Returns server usages",
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
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "refresh-external-governance-status",
          description: "Refreshes external governance status",
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
              name: ["--server", "-s"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "server" },
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
          description: "Gets a server",
          options: [
            {
              name: "--expand-ad-admin",
              description:
                "Expand the Active Directory Administrator for the server",
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
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              description: "The administrator login password",
              args: { name: "admin-password" },
            },
            {
              name: ["--assign_identity", "-i"],
              description:
                "Generate and assign an Azure Active Directory Identity for this server for use with key management services like Azure KeyVault",
            },
            {
              name: ["--enable-public-network", "-e"],
              description:
                "Set whether public network access to server is allowed or not. When false,only connections made through Private Links can reach this server",
              args: {
                name: "enable-public-network",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--federated-client-id", "--fid"],
              description:
                "The federated client id used in cross tenant CMK scenario",
              args: { name: "federated-client-id" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: ["--identity-type", "-t"],
              description:
                "Type of Identity to be used. Possible values are SystemAsssigned,UserAssigned, SystemAssigned,UserAssigned and None",
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
              name: ["--key-id", "-k"],
              description: "The key vault URI for encryption",
              args: { name: "key-id" },
            },
            {
              name: "--minimal-tls-version",
              description:
                "The minimal TLS version enforced by the sql server for inbound connections",
              args: {
                name: "minimal-tls-version",
                suggestions: ["1.0", "1.1", "1.2"],
              },
            },
            {
              name: ["--name", "-n"],
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--primary-user-assigned-identity-id", "--pid"],
              description: "The ID of the primary user managed identity",
              args: { name: "primary-user-assigned-identity-id" },
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
              name: ["--restrict-outbound-network-access", "-r"],
              description:
                "Set whether outbound network access to server is restricted or not. When true,the outbound connections from the server will be restricted",
              args: {
                name: "restrict-outbound-network-access",
                suggestions: ["false", "true"],
              },
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
              name: ["--user-assigned-identity-id", "-a"],
              description:
                "Generate and assign an User Managed Identity(UMI) for this server",
              args: { name: "user-assigned-identity-id" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the SQL server is met",
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
              name: "--expand",
              description:
                "The child resources to include in the response. Default value is None",
              args: { name: "expand" },
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
              description:
                "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          description: "Manage a server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description: "Create a new server Active Directory administrator",
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Sets a server's AD admin",
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              description:
                "Gets a list of Azure Active Directory administrators in a server",
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              description:
                "Update an existing server Active Directory administrator",
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
                  name: ["--server-name", "--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              ],
            },
          ],
        },
        {
          name: "ad-only-auth",
          description:
            "Manage Azure Active Directory only Authentication settings for this Server",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directory only Authentication for this Server",
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
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: "enable",
              description:
                "Enable Azure Active Directory only Authentication for this Server",
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
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              name: "get",
              description:
                "Get a specific Azure Active Directory only Authentication property",
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
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "advanced-threat-protection-setting",
          description: "Manage a server's advanced threat protection setting",
          subcommands: [
            {
              name: "show",
              description: "Gets an advanced threat protection setting",
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
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                "Update a server's advanced threat protection setting",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                  name: "--state",
                  description:
                    "State of the advanced threat protection setting",
                  args: { name: "state" },
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
          name: "audit-policy",
          description: "Manage a server's auditing policy",
          subcommands: [
            {
              name: "show",
              description: "Show server audit policy",
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
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
              description: "Update a server's auditing policy",
              options: [
                {
                  name: "--actions",
                  description:
                    "List of actions and action groups to audit.These are space seperated values.Example: --actions FAILED_DATABASE_AUTHENTICATION_GROUP BATCH_COMPLETED_GROUP",
                  args: { name: "actions" },
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: ["--blob-storage-target-state", "--bsts"],
                  description:
                    "Indicate whether blob storage is a destination for audit records",
                  args: {
                    name: "blob-storage-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--event-hub", "--eh"],
                  description:
                    "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                  args: { name: "event-hub" },
                },
                {
                  name: ["--event-hub-authorization-rule-id", "--ehari"],
                  description:
                    "The resource Id for the event hub authorization rule",
                  args: { name: "event-hub-authorization-rule-id" },
                },
                {
                  name: ["--event-hub-target-state", "--ehts"],
                  description:
                    "Indicate whether event hub is a destination for audit records",
                  args: {
                    name: "event-hub-target-state",
                    suggestions: ["Disabled", "Enabled"],
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
                  name: ["--log-analytics-target-state", "--lats"],
                  description:
                    "Indicate whether log analytics is a destination for audit records",
                  args: {
                    name: "log-analytics-target-state",
                    suggestions: ["Disabled", "Enabled"],
                  },
                },
                {
                  name: ["--log-analytics-workspace-resource-id", "--lawri"],
                  description:
                    "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                  args: { name: "log-analytics-workspace-resource-id" },
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                  name: "--retention-days",
                  description: "The number of days to retain audit logs",
                  args: { name: "retention-days" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--state",
                  description: "Auditing policy state",
                  args: { name: "state", suggestions: ["Disabled", "Enabled"] },
                },
                {
                  name: "--storage-account",
                  description: "Name of the storage account",
                  args: { name: "storage-account" },
                },
                {
                  name: "--storage-endpoint",
                  description: "The storage account endpoint",
                  args: { name: "storage-endpoint" },
                },
                {
                  name: "--storage-key",
                  description: "Access key for the storage account",
                  args: { name: "storage-key" },
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
                "Place the CLI in a waiting state until a condition of the server's audit policy is met",
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
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          name: "conn-policy",
          description: "Manage a server's connection policy",
          subcommands: [
            {
              name: "show",
              description: "Gets a server's secure connection policy",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Updates a server's secure connection policy",
              options: [
                {
                  name: ["--connection-type", "-t"],
                  description:
                    "The required parameters for updating a secure connection policy. The value is default",
                  args: {
                    name: "connection-type",
                    suggestions: ["Default", "Proxy", "Redirect"],
                  },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "dns-alias",
          description: "Manage a server's DNS aliases",
          subcommands: [
            {
              name: "create",
              description: "Creates a server DNS alias",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes the server DNS alias with the given name",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a list of server DNS aliases for a server",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Sets a server to which DNS alias should point",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--original-server",
                  description:
                    "The name of the server to which alias is currently pointing",
                  args: { name: "original-server" },
                  isRequired: true,
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: "--original-resource-group",
                  description: "Name of the original resource group",
                  args: { name: "original-resource-group" },
                },
                {
                  name: "--original-subscription-id",
                  description: "ID of the original subscription",
                  args: { name: "original-subscription-id" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a server DNS alias",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the DNS alias",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          description: "Manage a server's firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create a firewall rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
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
              description: "Deletes a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's firewall rules",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows the details for a firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' to represent all Azure-internal IP addresses",
                  args: { name: "end-ip-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ipv6-firewall-rule",
          description: "Manage a server's ipv6 firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create an ipv6 firewall rule",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                {
                  name: "--end-ipv6-address",
                  description:
                    "The end IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "end-ipv6-address" },
                },
                {
                  name: "--start-ipv6-address",
                  description:
                    "The start IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "start-ipv6-address" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes an IPv6 firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's ipv6 firewall rules",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows the details for an ipv6 firewall rule",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Update an ipv6 firewall rule",
              options: [
                {
                  name: "--end-ipv6-address",
                  description:
                    "The end IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "end-ipv6-address" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "The name of the IPv6 firewall rule",
                  args: { name: "name" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                },
                {
                  name: "--start-ipv6-address",
                  description:
                    "The start IPv6 address of the firewall rule. Must be IPv6 format",
                  args: { name: "start-ipv6-address" },
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
          description: "Manage a server's keys",
          subcommands: [
            {
              name: "create",
              description: "Creates a server key",
              options: [
                {
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes a server key",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a list of server keys",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Shows a server key",
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
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "ms-support",
          description: "Manage a server's Microsoft support operations",
          subcommands: [
            {
              name: "audit-policy",
              description:
                "Manage a server's Microsoft support operations auditing policy",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show server Microsoft support operations audit policy",
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
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                    "Update a server's Microsoft support operations auditing policy",
                  options: [
                    {
                      name: "--add",
                      description:
                        "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                      args: { name: "add" },
                    },
                    {
                      name: ["--blob-storage-target-state", "--bsts"],
                      description:
                        "Indicate whether blob storage is a destination for audit records",
                      args: {
                        name: "blob-storage-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: ["--event-hub", "--eh"],
                      description:
                        "The name of the event hub. If none is specified when providing event_hub_authorization_rule_id, the default event hub will be selected",
                      args: { name: "event-hub" },
                    },
                    {
                      name: ["--event-hub-authorization-rule-id", "--ehari"],
                      description:
                        "The resource Id for the event hub authorization rule",
                      args: { name: "event-hub-authorization-rule-id" },
                    },
                    {
                      name: ["--event-hub-target-state", "--ehts"],
                      description:
                        "Indicate whether event hub is a destination for audit records",
                      args: {
                        name: "event-hub-target-state",
                        suggestions: ["Disabled", "Enabled"],
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
                      name: ["--log-analytics-target-state", "--lats"],
                      description:
                        "Indicate whether log analytics is a destination for audit records",
                      args: {
                        name: "log-analytics-target-state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: [
                        "--log-analytics-workspace-resource-id",
                        "--lawri",
                      ],
                      description:
                        "The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Audit Logs",
                      args: { name: "log-analytics-workspace-resource-id" },
                    },
                    {
                      name: ["--name", "-n"],
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
                      name: "--state",
                      description: "Auditing policy state",
                      args: {
                        name: "state",
                        suggestions: ["Disabled", "Enabled"],
                      },
                    },
                    {
                      name: "--storage-account",
                      description: "Name of the storage account",
                      args: { name: "storage-account" },
                    },
                    {
                      name: "--storage-endpoint",
                      description: "The storage account endpoint",
                      args: { name: "storage-endpoint" },
                    },
                    {
                      name: "--storage-key",
                      description: "Access key for the storage account",
                      args: { name: "storage-key" },
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
                    "Place the CLI in a waiting state until a condition of the server's Microsoft support operations audit policy is met",
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
                      description:
                        "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
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
          ],
        },
        {
          name: "outbound-firewall-rule",
          description: "Manage a server's outbound firewall rules",
          subcommands: [
            {
              name: "create",
              description: "Create a new outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "List a server's outbound firewall rules",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Show the details for an outbound firewall rule",
              options: [
                {
                  name: ["--outbound-rule-fqdn", "-n"],
                  description:
                    "The allowed FQDN for the outbound firewall rule",
                  args: { name: "outbound-rule-fqdn" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "tde-key",
          description: "Manage a server's encryption protector",
          subcommands: [
            {
              name: "revalidate",
              description: "Revalidate a server encryption protector",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                "Sets the server's encryption protector. Ensure to create the key first https://docs.microsoft.com/en-us/cli/azure/sql/server/key?view=azure-cli-latest#az-sql-server-key-create",
              options: [
                {
                  name: ["--server-key-type", "-t"],
                  description: "The type of the server key",
                  args: {
                    name: "server-key-type",
                    suggestions: ["AzureKeyVault", "ServiceManaged"],
                  },
                  isRequired: true,
                },
                {
                  name: "--auto-rotation-enabled",
                  description:
                    "The key auto rotation opt in status. Can be either true or false",
                  args: {
                    name: "auto-rotation-enabled",
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
                  name: ["--kid", "-k"],
                  description:
                    'The Azure Key Vault key identifier of the server key. An example key identifier is "https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901"',
                  args: { name: "kid" },
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
              description: "Gets a server encryption protector",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to an Azure SQL Server",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided",
                  args: { name: "subnet" },
                  isRequired: true,
                },
                {
                  name: ["--ignore-missing-endpoint", "-i"],
                  description:
                    "Create firewall rule before the virtual network has vnet service endpoint enabled",
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
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
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
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
                  name: ["--name", "-n"],
                  description: "The name of the virtual network rule",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: "--subnet",
                  description:
                    "Name or ID of the subnet that allows access to an Azure Sql Server. If subnet name is provided, --vnet-name must be provided",
                  args: { name: "subnet" },
                  isRequired: true,
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
                    "Create firewall rule before the virtual network has vnet service endpoint enabled",
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                },
                {
                  name: ["--server", "-s"],
                  description:
                    "Name of the Azure SQL Server. You can configure the default using az configure --defaults sql-server=<name>",
                  args: { name: "server" },
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
      name: "server-arc",
      description: "Manage Azure Arc-enabled SQL servers",
      subcommands: [
        {
          name: "backups-policy",
          description: "Manage Backups Policy",
          subcommands: [
            {
              name: "set",
              description: "Set your Backups Policy",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Arc enabled SQL Server",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group where the Arc enabled SQL Server is projected to",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: "--default-policy",
                  description:
                    "Set the default policy of weekly retention period, weekly full, daily differential, and 5 min transaction log backups",
                },
                {
                  name: "--diff-backup-hours",
                  description:
                    "Interval, in hours, at which differential backups should be performed. Valid values – 12 or 24",
                  args: { name: "diff-backup-hours" },
                },
                {
                  name: "--full-backup-days",
                  description:
                    "Interval, in days, at which a new full backup should be performed. Valid values – 0-7",
                  args: { name: "full-backup-days" },
                },
                {
                  name: "--retention-days",
                  description:
                    "Number of days to keep the backups for. Valid values 0-35",
                  args: { name: "retention-days" },
                },
                {
                  name: "--tlog-backup-mins",
                  description:
                    "Interval, in minutes, at which transactional backups should be performed. Valid values – 0 to 60",
                  args: { name: "tlog-backup-mins" },
                },
              ],
            },
            {
              name: "show",
              description: "See your current Backups Policy",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "Name of the Arc enabled SQL Server",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the resource group where the Arc enabled SQL Server is projected to",
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
      name: "stg",
      description: "Manage Server Trust Groups",
      subcommands: [
        {
          name: "create",
          description: "Create a Server Trust Group",
          options: [
            {
              name: ["--group-member", "-m"],
              description:
                "Managed Instance that is to be a member of the group. Specify resource group, subscription id and the name of the instance",
              args: { name: "group-member" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "The location name of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
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
              name: "--trust-scope",
              description: "The trust scope of the Server Trust Group",
              args: { name: "trust-scope" },
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
          description: "Delete a Server Trust Group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
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
          description: "Retrieve a list of Server Trust Groups",
          options: [
            {
              name: ["--resource-group", "-g"],
              description: "The resource group name",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--instance-name",
              description: "Managed Instance name",
              args: { name: "instance-name" },
            },
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "show",
          description: "Retrieve a Server Trust Group",
          options: [
            {
              name: ["--location", "-l"],
              description: "The location of the Server Trust Group",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the Server Trust Group",
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
      ],
    },
    {
      name: "virtual-cluster",
      description: "Manage SQL virtual clusters",
      subcommands: [
        {
          name: "delete",
          description: "Delete a virtual cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The virtual cluster name",
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
          name: "list",
          description: "List available virtual clusters",
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
          description: "Get the details for a virtual cluster",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "The virtual cluster name",
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
      name: "vm",
      description: "Manage SQL virtual machines",
      subcommands: [
        {
          name: "add-to-group",
          description:
            "Adds SQL virtual machine to a SQL virtual machine group",
          options: [
            {
              name: ["--sqlvm-group", "-r"],
              description:
                "Name or resource ID of the SQL virtual machine group. If only name provided, SQL virtual machine group should be in the same resource group of the SQL virtual machine",
              args: { name: "sqlvm-group" },
              isRequired: true,
            },
            {
              name: ["--bootstrap-acc-pwd", "-b"],
              description:
                "Password for the cluster bootstrap account if provided in the SQL virtual machine group",
              args: { name: "bootstrap-acc-pwd" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: ["--operator-acc-pwd", "-p"],
              description:
                "Password for the cluster operator account provided in the SQL virtual machine group",
              args: { name: "operator-acc-pwd" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: ["--service-acc-pwd", "-s"],
              description:
                "Password for the SQL service account provided in the SQL virtual machine group",
              args: { name: "service-acc-pwd" },
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
          description: "Creates a SQL virtual machine",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the SQL virtual machine. The name of the new SQL virtual machine must be equal to the underlying virtual machine created from SQL marketplace image",
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
              name: "--backup-pwd",
              description: "Password for encryption on backup",
              args: { name: "backup-pwd" },
            },
            {
              name: "--backup-schedule-type",
              description: "Backup schedule type",
              args: {
                name: "backup-schedule-type",
                suggestions: ["Automated", "Manual"],
              },
            },
            {
              name: "--backup-system-dbs",
              description: "Include system databases on backup",
            },
            {
              name: "--connectivity-type",
              description: "SQL Server connectivity option",
              args: {
                name: "connectivity-type",
                suggestions: ["LOCAL", "PRIVATE", "PUBLIC"],
              },
            },
            {
              name: "--credential-name",
              description: "Credential name",
              args: { name: "credential-name" },
            },
            {
              name: "--day-of-week",
              description: "Day of week to apply the patch on",
              args: {
                name: "day-of-week",
                suggestions: [
                  "Everyday",
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: "--enable-auto-backup",
              description:
                "Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-backup",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-auto-patching",
              description:
                "Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-patching",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-encryption",
              description:
                "Enable encryption for backup on SQL virtual machine",
            },
            {
              name: "--enable-key-vault-credential",
              description:
                "Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true",
              args: {
                name: "enable-key-vault-credential",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-r-services",
              description: "Enable or disable R services (SQL 2016 onwards)",
              args: {
                name: "enable-r-services",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--full-backup-duration",
              description:
                "Duration of the time window of a given day during which full backups can take place. 1-23 hours",
              args: { name: "full-backup-duration" },
            },
            {
              name: "--full-backup-frequency",
              description:
                "Frequency of full backups. In both cases, full backups begin during the next scheduled time window",
              args: {
                name: "full-backup-frequency",
                suggestions: ["Daily", "Weekly"],
              },
            },
            {
              name: "--full-backup-start-hour",
              description:
                "Start time of a given day during which full backups can take place. 0-23 hours",
              args: { name: "full-backup-start-hour" },
            },
            {
              name: "--image-offer",
              description:
                "SQL image offer. Examples include SQL2008R2-WS2008, SQL2008-WS2008",
              args: { name: "image-offer" },
            },
            {
              name: "--image-sku",
              description: "SQL image sku",
              args: {
                name: "image-sku",
                suggestions: [
                  "Developer",
                  "Enterprise",
                  "Express",
                  "Standard",
                  "Web",
                ],
              },
            },
            {
              name: "--key-vault",
              description: "Azure Key Vault url",
              args: { name: "key-vault" },
            },
            {
              name: "--least-privilege-mode",
              description:
                "SQL IaaS Agent Least Privilege Mode. Updates from sysadmin to specific permissions used per feature",
              args: {
                name: "least-privilege-mode",
                suggestions: ["Enabled", "NotSet"],
              },
            },
            {
              name: ["--license-type", "-i"],
              description: "SQL Server license type",
              args: {
                name: "license-type",
                suggestions: ["AHUB", "DR", "PAYG"],
              },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. If not provided, virtual machine should be in the same region of resource group.You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--log-backup-frequency",
              description: "Frequency of log backups. 5-60 minutes",
              args: { name: "log-backup-frequency" },
            },
            {
              name: "--maintenance-window-duration",
              description: "Duration of patching. 30-180 minutes",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: "--maintenance-window-start-hour",
              description:
                "Hour of the day when patching is initiated. Local VM time 0-23 hours",
              args: { name: "maintenance-window-start-hour" },
            },
            {
              name: "--port",
              description: "SQL Server port",
              args: { name: "port" },
            },
            {
              name: "--retention-period",
              description: "Retention period of backup. 1-30 days",
              args: { name: "retention-period" },
            },
            {
              name: "--sa-key",
              description: "Storage account key where backup will be taken to",
              args: { name: "sa-key" },
            },
            {
              name: "--sp-name",
              description: "Service principal name to access key vault",
              args: { name: "sp-name" },
            },
            {
              name: "--sp-secret",
              description: "Service principal name secret to access key vault",
              args: { name: "sp-secret" },
            },
            {
              name: "--sql-auth-update-pwd",
              description: "SQL Server sysadmin login password",
              args: { name: "sql-auth-update-pwd" },
            },
            {
              name: "--sql-auth-update-username",
              description: "SQL Server sysadmin login to create",
              args: { name: "sql-auth-update-username" },
            },
            {
              name: "--sql-mgmt-type",
              description:
                "Argument 'sql_management_mode' has been deprecated and will be removed in a future release. SQL Server management type. If NoAgent selected, please provide --image-sku and --offer-type",
              args: {
                name: "sql-mgmt-type",
                suggestions: ["Full", "LightWeight", "NoAgent"],
              },
            },
            {
              name: "--sql-workload-type",
              description: "SQL Server workload type",
              args: {
                name: "sql-workload-type",
                suggestions: ["DW", "GENERAL", "OLTP"],
              },
            },
            {
              name: "--storage-account",
              description: "Storage account url where backup will be taken to",
              args: { name: "storage-account" },
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
          description: "Deletes a SQL virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
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
          name: "enable-azure-ad-auth",
          description:
            "Enable Azure AD authentication of a SQL virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--msi-client-id",
              description: "Virutal Machine Managed Identity Client ID",
              args: { name: "msi-client-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--skip-client-validation",
              description:
                "Skip client side Azure AD authentication validation, the server side validation will still happen",
              args: { name: "skip-client-validation" },
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
            "Lists all SQL virtual machines in a resource group or subscription",
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
          name: "remove-from-group",
          description:
            "Remove SQL virtual machine from its current SQL virtual machine group",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
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
          description: "Gets a SQL virtual machine",
          options: [
            {
              name: "--expand",
              description:
                "Get the SQLIaaSExtension configuration settings. To view all settings, use *. To select only a few, the settings must be space-separated",
              args: {
                name: "expand",
                suggestions: [
                  "*",
                  "AssessmentSettings",
                  "AutoBackupSettings",
                  "AutoPatchingSettings",
                  "KeyVaultCredentialSettings",
                  "ServerConfigurationsManagementSettings",
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
              description: "Name of the SQL virtual machine",
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
          name: "start-assessment",
          description:
            "Starts SQL best practice assessment on SQL virtual machine",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
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
          description: "Updates the properties of a SQL virtual machine",
          options: [
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--agent-rg",
              description:
                "Resource group containing the AMA resources DCE and DCR",
              args: { name: "agent-rg" },
            },
            {
              name: ["--assessment-day-of-week", "--am-day"],
              description: "Day of the week to run assessment",
              args: {
                name: "assessment-day-of-week",
                suggestions: [
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: ["--assessment-monthly-occurrence", "--am-month-occ"],
              description:
                "Occurrence of the DayOfWeek day within a month to schedule assessment. Supports values 1,2,3,4 and -1. Use -1 for last DayOfWeek day of the month (for example - last Tuesday of the month)",
              args: {
                name: "assessment-monthly-occurrence",
                suggestions: ["-1", "1", "2", "3", "4"],
              },
            },
            {
              name: ["--enable-assessment-schedule", "--am-schedule"],
              description:
                "Enable or disable assessment Schedule. If any assessment schedule settings provided, parameter automatically sets to true",
              args: {
                name: "enable-assessment-schedule",
                suggestions: ["false", "true"],
              },
            },
            {
              name: ["--assessment-start-time-local", "--am-time"],
              description:
                "Time of the day in HH:mm format. Examples include 17:30, 05:13",
              args: { name: "assessment-start-time-local" },
            },
            {
              name: ["--assessment-weekly-interval", "--am-week-int"],
              description:
                "Number of weeks to schedule between 2 assessment runs. Supports value from 1-6",
              args: {
                name: "assessment-weekly-interval",
                suggestions: ["1", "2", "3", "4", "5", "6"],
              },
            },
            {
              name: "--backup-pwd",
              description: "Password for encryption on backup",
              args: { name: "backup-pwd" },
            },
            {
              name: "--backup-schedule-type",
              description: "Backup schedule type",
              args: {
                name: "backup-schedule-type",
                suggestions: ["Automated", "Manual"],
              },
            },
            {
              name: "--backup-system-dbs",
              description: "Include system databases on backup",
            },
            {
              name: "--connectivity-type",
              description: "SQL Server connectivity option",
              args: {
                name: "connectivity-type",
                suggestions: ["LOCAL", "PRIVATE", "PUBLIC"],
              },
            },
            {
              name: "--credential-name",
              description: "Credential name",
              args: { name: "credential-name" },
            },
            {
              name: "--day-of-week",
              description: "Day of week to apply the patch on",
              args: {
                name: "day-of-week",
                suggestions: [
                  "Everyday",
                  "Friday",
                  "Monday",
                  "Saturday",
                  "Sunday",
                  "Thursday",
                  "Tuesday",
                  "Wednesday",
                ],
              },
            },
            {
              name: "--enable-assessment",
              description:
                "Enable or disable assessment feature. If any assessment settings provided, parameter automatically sets to true",
              args: {
                name: "enable-assessment",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-auto-backup",
              description:
                "Enable or disable autobackup on SQL virtual machine. If any backup settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-backup",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-auto-patching",
              description:
                "Enable or disable autopatching on SQL virtual machine. If any autopatching settings provided, parameter automatically sets to true",
              args: {
                name: "enable-auto-patching",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-encryption",
              description:
                "Enable encryption for backup on SQL virtual machine",
            },
            {
              name: "--enable-key-vault-credential",
              description:
                "Enable or disable key vault credential setting. If any key vault settings provided, parameter automatically sets to true",
              args: {
                name: "enable-key-vault-credential",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-r-services",
              description: "Enable or disable R services (SQL 2016 onwards)",
              args: {
                name: "enable-r-services",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--full-backup-duration",
              description:
                "Duration of the time window of a given day during which full backups can take place. 1-23 hours",
              args: { name: "full-backup-duration" },
            },
            {
              name: "--full-backup-frequency",
              description:
                "Frequency of full backups. In both cases, full backups begin during the next scheduled time window",
              args: {
                name: "full-backup-frequency",
                suggestions: ["Daily", "Weekly"],
              },
            },
            {
              name: "--full-backup-start-hour",
              description:
                "Start time of a given day during which full backups can take place. 0-23 hours",
              args: { name: "full-backup-start-hour" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--image-sku",
              description: "SQL image sku",
              args: {
                name: "image-sku",
                suggestions: [
                  "Developer",
                  "Enterprise",
                  "Express",
                  "Standard",
                  "Web",
                ],
              },
            },
            {
              name: "--key-vault",
              description: "Azure Key Vault url",
              args: { name: "key-vault" },
            },
            {
              name: "--least-privilege-mode",
              description:
                "SQL IaaS Agent Least Privilege Mode. Updates from sysadmin to specific permissions used per feature",
              args: {
                name: "least-privilege-mode",
                suggestions: ["Enabled", "NotSet"],
              },
            },
            {
              name: ["--license-type", "-i"],
              description: "SQL Server license type",
              args: {
                name: "license-type",
                suggestions: ["AHUB", "DR", "PAYG"],
              },
            },
            {
              name: "--log-backup-frequency",
              description: "Frequency of log backups. 5-60 minutes",
              args: { name: "log-backup-frequency" },
            },
            {
              name: "--maintenance-window-duration",
              description: "Duration of patching. 30-180 minutes",
              args: { name: "maintenance-window-duration" },
            },
            {
              name: "--maintenance-window-start-hour",
              description:
                "Hour of the day when patching is initiated. Local VM time 0-23 hours",
              args: { name: "maintenance-window-start-hour" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
              args: { name: "name" },
            },
            {
              name: "--port",
              description: "SQL Server port",
              args: { name: "port" },
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
              name: "--retention-period",
              description: "Retention period of backup. 1-30 days",
              args: { name: "retention-period" },
            },
            {
              name: "--sa-key",
              description: "Storage account key where backup will be taken to",
              args: { name: "sa-key" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--sp-name",
              description: "Service principal name to access key vault",
              args: { name: "sp-name" },
            },
            {
              name: "--sp-secret",
              description: "Service principal name secret to access key vault",
              args: { name: "sp-secret" },
            },
            {
              name: "--sql-mgmt-type",
              description:
                "Argument 'sql_management_mode' has been deprecated and will be removed in a future release. SQL Server management type. Updates from LightWeight to Full",
              args: {
                name: "sql-mgmt-type",
                suggestions: ["Full", "LightWeight", "NoAgent"],
              },
            },
            {
              name: "--sql-workload-type",
              description: "SQL Server workload type",
              args: {
                name: "sql-workload-type",
                suggestions: ["DW", "GENERAL", "OLTP"],
              },
            },
            {
              name: "--storage-account",
              description: "Storage account url where backup will be taken to",
              args: { name: "storage-account" },
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
              name: "--workspace-name",
              description:
                "Name of the Log Analytics workspace to associate with VM",
              args: { name: "workspace-name" },
            },
            {
              name: "--workspace-rg",
              description:
                "Resource group containing the Log Analytics workspace",
              args: { name: "workspace-rg" },
            },
            {
              name: "--workspace-sub",
              description:
                "Subscription containing the Log Analytics workspace",
              args: { name: "workspace-sub" },
            },
            {
              name: ["--yes", "-y"],
              description:
                "Argument 'prompt' has been deprecated and will be removed in a future release. Do not prompt for confirmation. Requires --sql-mgmt-type",
            },
          ],
        },
        {
          name: "validate-azure-ad-auth",
          description:
            "Validate Azure AD authentication of a SQL virtual machine at the client side without enabling it",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--msi-client-id",
              description: "Virutal Machine Managed Identity Client ID",
              args: { name: "msi-client-id" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the SQL virtual machine",
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
          name: "group",
          description: "Manage SQL virtual machine groups",
          subcommands: [
            {
              name: "create",
              description: "Creates a SQL virtual machine group",
              options: [
                {
                  name: ["--domain-fqdn", "-f"],
                  description: "Fully qualified name of the domain",
                  args: { name: "domain-fqdn" },
                  isRequired: true,
                },
                {
                  name: ["--image-offer", "-i"],
                  description:
                    "SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016",
                  args: { name: "image-offer" },
                  isRequired: true,
                },
                {
                  name: ["--image-sku", "-s"],
                  description: "SQL image sku",
                  args: {
                    name: "image-sku",
                    suggestions: ["Developer", "Enterprise"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--operator-acc", "-p"],
                  description:
                    "Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster",
                  args: { name: "operator-acc" },
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
                  name: ["--service-acc", "-e"],
                  description:
                    "Account name under which SQL service will run on all participating SQL virtual machines in the cluster",
                  args: { name: "service-acc" },
                  isRequired: true,
                },
                {
                  name: ["--storage-account", "-u"],
                  description:
                    "Storage account url of the witness storage account",
                  args: { name: "storage-account" },
                  isRequired: true,
                },
                {
                  name: "--bootstrap-acc",
                  description:
                    "Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain)",
                  args: { name: "bootstrap-acc" },
                },
                {
                  name: "--cluster-subnet-type",
                  description: "Cluster subnet type",
                  args: {
                    name: "cluster-subnet-type",
                    suggestions: ["MultiSubnet", "SingleSubnet"],
                  },
                },
                {
                  name: "--fsw-path",
                  description: "Optional path for fileshare witness",
                  args: { name: "fsw-path" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. If not provided, group will be created in the same reosurce group location.You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: "--ou-path",
                  description:
                    "Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com",
                  args: { name: "ou-path" },
                },
                {
                  name: ["--sa-key", "-k"],
                  description: "Primary key of the witness storage account",
                  args: { name: "sa-key" },
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
              description: "Deletes a SQL virtual machine group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
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
              description:
                "Lists all SQL virtual machine groups in a resource group or subscription",
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
              description: "Gets a SQL virtual machine group",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
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
                "Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--bootstrap-acc",
                  description:
                    "Account name used for creating cluster (at minimum needs permissions to 'Create Computer Objects' in domain)",
                  args: { name: "bootstrap-acc" },
                },
                {
                  name: "--cluster-subnet-type",
                  description: "Cluster subnet type",
                  args: {
                    name: "cluster-subnet-type",
                    suggestions: ["MultiSubnet", "SingleSubnet"],
                  },
                },
                {
                  name: ["--domain-fqdn", "-f"],
                  description: "Fully qualified name of the domain",
                  args: { name: "domain-fqdn" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--fsw-path",
                  description: "Optional path for fileshare witness",
                  args: { name: "fsw-path" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the SQL virtual machine group",
                  args: { name: "name" },
                },
                {
                  name: ["--operator-acc", "-p"],
                  description:
                    "Account name used for operating cluster i.e. will be part of administrators group on all the participating virtual machines in the cluster",
                  args: { name: "operator-acc" },
                },
                {
                  name: "--ou-path",
                  description:
                    "Organizational Unit path in which the nodes and cluster will be present. Example: OU=WSCluster,DC=testdomain,DC=com",
                  args: { name: "ou-path" },
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
                  name: ["--sa-key", "-k"],
                  description: "Primary key of the witness storage account",
                  args: { name: "sa-key" },
                },
                {
                  name: ["--service-acc", "-e"],
                  description:
                    "Account name under which SQL service will run on all participating SQL virtual machines in the cluster",
                  args: { name: "service-acc" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: ["--storage-account", "-u"],
                  description:
                    "Storage account url of the witness storage account",
                  args: { name: "storage-account" },
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
              name: "ag-listener",
              description: "Manage SQL availability group listeners",
              subcommands: [
                {
                  name: "create",
                  description: "Creates an availability group listener",
                  options: [
                    {
                      name: ["--ag-name", "-a"],
                      description:
                        "Name of the availability group. Please refer to https://docs.microsoft.com/sql/database-engine/availability-groups/windows/use-the-availability-group-wizard-sql-server-management-studio?view=sql-server-2017 to create and availability group",
                      args: { name: "ag-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--ip-address", "-i"],
                      description:
                        "Private IP address bound to the availability group listener",
                      args: { name: "ip-address" },
                      isRequired: true,
                    },
                    {
                      name: ["--load-balancer", "-b"],
                      description: "Name or resource ID of the load balancer",
                      args: { name: "load-balancer" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Name of the availability group listener",
                      args: { name: "name" },
                      isRequired: true,
                    },
                    {
                      name: ["--probe-port", "-e"],
                      description: "Probe port",
                      args: { name: "probe-port" },
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
                      name: ["--sqlvms", "-q"],
                      description:
                        "Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group",
                      args: { name: "sqlvms" },
                      isRequired: true,
                    },
                    {
                      name: ["--subnet", "-u"],
                      description:
                        "The name or resource id of the subnet to include in the private IP",
                      args: { name: "subnet" },
                      isRequired: true,
                    },
                    {
                      name: ["--port", "-p"],
                      description: "Listener port",
                      args: { name: "port" },
                    },
                    {
                      name: ["--public-ip", "-c"],
                      description: "Name or resource ID of the public IP",
                      args: { name: "public-ip" },
                    },
                    {
                      name: "--vnet-name",
                      description:
                        "Name of the virtual network. Provide only if name of the subnet has been provided",
                      args: { name: "vnet-name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Deletes an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                      description: "Name of the availability group listener",
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
                  description:
                    "Lists all availability group listeners in a SQL virtual machine group",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                  description: "Gets an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
                      isRequired: true,
                    },
                    {
                      name: "--expand",
                      description:
                        "Get the SQLIaaSExtension configuration settings. To view all settings, use *. To select only a few, the settings must be space-separated",
                      args: {
                        name: "expand",
                        suggestions: [
                          "*",
                          "AssessmentSettings",
                          "AutoBackupSettings",
                          "AutoPatchingSettings",
                          "KeyVaultCredentialSettings",
                          "ServerConfigurationsManagementSettings",
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
                      description: "Name of the availability group listener",
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
                  description: "Updates an availability group listener",
                  options: [
                    {
                      name: ["--group-name", "-r"],
                      description: "Name of the SQL virtual machine group",
                      args: { name: "group-name" },
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
                      description: "Name of the availability group listener",
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
                      name: ["--sqlvms", "-q"],
                      description:
                        "Space-separated list of SQL virtual machine instance name or resource IDs that are enrolled into the availability group",
                      args: { name: "sqlvms" },
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
    },
  ],
};

export default completion;
