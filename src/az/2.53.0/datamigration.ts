const completion: Fig.Spec = {
  name: "datamigration",
  description: "Manage Data Migration",
  subcommands: [
    {
      name: "get-assessment",
      description: "Start assessment on SQL Server instance(s)",
      options: [
        {
          name: "--config-file-path",
          description: "Path of the ConfigFile",
          args: { name: "config-file-path" },
        },
        {
          name: "--connection-string",
          description: "SQL Server Connection Strings",
          args: { name: "connection-string" },
        },
        {
          name: "--output-folder",
          description: "Output folder to store assessment report",
          args: { name: "output-folder" },
        },
        {
          name: "--overwrite",
          description:
            "Enable this parameter to overwrite the existing assessment report",
        },
      ],
    },
    {
      name: "get-sku-recommendation",
      description: "Give SKU recommendations for Azure SQL offerings",
      options: [
        {
          name: "--config-file-path",
          description: "Path of the ConfigFile",
          args: { name: "config-file-path" },
        },
        {
          name: "--database-allow-list",
          description:
            "Space separated list of names of databases to be allowed for SKU recommendation consideration while excluding all others. Only set one of the following or neither: databaseAllowList, databaseDenyList. Default: null",
          args: { name: "database-allow-list" },
        },
        {
          name: "--database-deny-list",
          description:
            "Space separated list of names of databases to not be considered for SKU recommendation. Only set one of the following or neither: databaseAllowList, databaseDenyList. Default: null",
          args: { name: "database-deny-list" },
        },
        {
          name: "--display-result",
          description:
            "Whether or not to print the SKU recommendation results to the console. Enable this parameter to display result",
        },
        {
          name: "--elastic-strategy",
          description:
            "Whether or not to use the elastic strategy for SKU recommendations based on resource usage profiling. Enable this parameter to use elastic strategy",
        },
        {
          name: "--end-time",
          description:
            "UTC end time of performance data points to consider during aggregation, in YYYY-MM-DD HH:MM format. Only used for baseline (non-elastic) strategy. Default: all data points collected will be considered",
          args: { name: "end-time" },
        },
        {
          name: "--output-folder",
          description:
            "Output folder where performance data of the SQL Server is stored. The value here must be the same as the one used in PerfDataCollection",
          args: { name: "output-folder" },
        },
        {
          name: "--overwrite",
          description:
            "Whether or not to overwrite any existing SKU recommendation reports. Enable this paramater to overwrite",
        },
        {
          name: "--scaling-factor",
          description:
            "Scaling (comfort) factor used during SKU recommendation. For example, if it is determined that there is a 4 vCore CPU requirement with a scaling factor of 150%, then the true CPU requirement will be 6 vCores",
          args: { name: "scaling-factor" },
        },
        {
          name: "--start-time",
          description:
            "UTC start time of performance data points to consider during aggregation, in YYYY-MM-DD HH:MM format. Only used for baseline (non-elastic) strategy. Default: all data points collected will be considered",
          args: { name: "start-time" },
        },
        {
          name: "--target-percentile",
          description:
            "Percentile of data points to be used during aggregation of the performance data. Only used for baseline (non-elastic) strategy",
          args: { name: "target-percentile" },
        },
        {
          name: "--target-platform",
          description:
            "Target platform for SKU recommendation: either AzureSqlDatabase, AzureSqlManagedInstance, AzureSqlVirtualMachine, or Any. If Any is selected, then SKU recommendations for all three target platforms will be evaluated, and the best fit will be returned",
          args: { name: "target-platform" },
        },
        {
          name: "--target-sql-instance",
          description:
            "Name of the SQL instance for which SKU should be recommendeded. Default: outputFolder will be scanned for files created by the PerfDataCollection action, and recommendations will be provided for every instance found",
          args: { name: "target-sql-instance" },
        },
      ],
    },
    {
      name: "login-migration",
      description:
        "Migrate logins from the source Sql Servers to the target Azure Sql Servers",
      options: [
        {
          name: "--aad-domain-name",
          description:
            "Required if Windows logins are included in the list of logins to be migrated",
          args: { name: "aad-domain-name" },
        },
        {
          name: "--config-file-path",
          description: "Path of the ConfigFile",
          args: { name: "config-file-path" },
        },
        {
          name: "--csv-file-path",
          description:
            "Location of CSV file of logins. Use only one parameter between this and listOfLogin",
          args: { name: "csv-file-path" },
        },
        {
          name: "--list-of-login",
          description:
            "List of logins in string format. If large number of logins need to be migrated, use CSV file option",
          args: { name: "list-of-login" },
        },
        {
          name: "--output-folder",
          description:
            "Default: %LocalAppData%/Microsoft/SqlLoginMigrations) Folder where logs will be written",
          args: { name: "output-folder" },
        },
        {
          name: "--src-sql-connection-str",
          description:
            "Connection string(s) for the source SQL instance(s), using the formal connection string format",
          args: { name: "src-sql-connection-str" },
        },
        {
          name: "--tgt-sql-connection-str",
          description:
            "Connection string(s) for the target SQL instance(s), using the formal connection string format",
          args: { name: "tgt-sql-connection-str" },
        },
      ],
    },
    {
      name: "performance-data-collection",
      description: "Collect performance data for given SQL Server instance(s)",
      options: [
        {
          name: "--config-file-path",
          description: "Path of the ConfigFile",
          args: { name: "config-file-path" },
        },
        {
          name: "--connection-string",
          description: "SQL Server Connection Strings",
          args: { name: "connection-string" },
        },
        {
          name: "--number-of-iteration",
          description:
            "Number of iterations of performance data collection to perform before persisting to file. For example, with default values, performance data will be persisted every 30 seconds * 20 iterations = 10 minutes. Minimum: 2",
          args: { name: "number-of-iteration" },
        },
        {
          name: "--output-folder",
          description: "Output folder to store performance data",
          args: { name: "output-folder" },
        },
        {
          name: "--perf-query-interval",
          description:
            "Interval at which to query performance data, in seconds",
          args: { name: "perf-query-interval" },
        },
        {
          name: "--static-query-interval",
          description:
            "Interval at which to query and persist static configuration data, in seconds",
          args: { name: "static-query-interval" },
        },
        {
          name: "--time",
          description:
            "Time after which the command execution automatically stops, in seconds. If this parameter is not specified manual intervention will be required to stop the command execution",
          args: { name: "time" },
        },
      ],
    },
    {
      name: "register-integration-runtime",
      description: "Register Database Migration Service on Integration Runtime",
      options: [
        {
          name: "--auth-key",
          description: "AuthKey of SQL Migration Service",
          args: { name: "auth-key" },
          isRequired: true,
        },
        {
          name: "--installed-ir-path",
          description:
            'Version folder path in the Integration Runtime installed location. This can be provided when IR is installed but the command is failing to read it. Format: "\\Microsoft Integration Runtime<Version>"',
          args: { name: "installed-ir-path" },
        },
        {
          name: "--ir-path",
          description: "Path of Integration Runtime MSI",
          args: { name: "ir-path" },
        },
      ],
    },
    {
      name: "sql-server-schema",
      description:
        "Migrate schema from the source Sql Servers to the target Azure Sql Servers",
      options: [
        {
          name: "--action",
          description:
            "Select one schema migration action. MigrateSchema is to migrate the database objects to Azure SQL Database target. GenerateScript is to generate an editable TSQL schema script that can be used to run on the target to deploy the objects. DeploySchema is to run the TSQL script generated from -GenerateScript action on the target to deploy the objects",
          args: {
            name: "action",
            suggestions: ["DeploySchema", "GenerateScript", "MigrateSchema"],
          },
        },
        {
          name: "--config-file-path",
          description:
            "Path of the ConfigFile. Accepted parameter names in configfile.json is Action, sourceConnectionString, targetConnectionString, inputScriptFilePath and outputFolder",
          args: { name: "config-file-path" },
        },
        {
          name: "--input-script-file-path",
          description:
            "Location of an editable TSQL schema script. Use this parameter only with DeploySchema Action",
          args: { name: "input-script-file-path" },
        },
        {
          name: "--output-folder",
          description:
            "Default: %LocalAppData%/Microsoft/SqlSchemaMigration) Folder where logs will be written and the generated TSQL schema script by GenerateScript Action",
          args: { name: "output-folder" },
        },
        {
          name: "--src-sql-connection-str",
          description:
            "Connection string for the source SQL instance, using the formal connection string format",
          args: { name: "src-sql-connection-str" },
        },
        {
          name: "--tgt-sql-connection-str",
          description:
            "Connection string for the target SQL instance, using the formal connection string format",
          args: { name: "tgt-sql-connection-str" },
        },
      ],
    },
    {
      name: "tde-migration",
      description:
        "Migrate TDE certificate from source SQL Server to the target Azure SQL Server",
      options: [
        {
          name: ["--database-name", "--dbname"],
          description: "Source database name",
          args: { name: "database-name" },
        },
        {
          name: ["--network-share-domain", "--networkdomain"],
          description: "Network share domain",
          args: { name: "network-share-domain" },
        },
        {
          name: ["--network-share-password", "--networkpw"],
          description: "Network share password",
          args: { name: "network-share-password" },
        },
        {
          name: ["--network-share-path", "--networkpath"],
          description: "Network share path",
          args: { name: "network-share-path" },
        },
        {
          name: ["--network-share-user-name", "--networkuser"],
          description: "Network share user name",
          args: { name: "network-share-user-name" },
        },
        {
          name: ["--source-sql-connection-string", "--srcsqlcs"],
          description:
            "Connection string for the source SQL instance, using the formal connection string format",
          args: { name: "source-sql-connection-string" },
        },
        {
          name: ["--target-managed-instance-name", "--tgtname"],
          description: "Name of the Azure SQL Server",
          args: { name: "target-managed-instance-name" },
        },
        {
          name: ["--target-resource-group-name", "--tgtrg"],
          description: "Resource group name of the target Azure SQL server",
          args: { name: "target-resource-group-name" },
        },
        {
          name: ["--target-subscription-id", "--tgtsubscription"],
          description: "Subscription Id of the target Azure SQL server",
          args: { name: "target-subscription-id" },
        },
      ],
    },
    {
      name: "sql-db",
      description: "Manage database migrations to SQL DB",
      subcommands: [
        {
          name: "cancel",
          description: "Stop in-progress database migration to SQL DB",
          options: [
            {
              name: "--migration-operation-id",
              description: "ID tracking migration operation",
              args: { name: "migration-operation-id" },
              isRequired: true,
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
              name: "--sqldb-instance-name",
              description: "Name of the target SQL Database Server",
              args: { name: "sqldb-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new database migration to a given SQL DB",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--sqldb-instance-name",
              description: "Name of the target SQL Database Server",
              args: { name: "sqldb-instance-name" },
              isRequired: true,
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
              isRequired: true,
            },
            {
              name: "--migration-service",
              description: "Resource Id of the Migration Service",
              args: { name: "migration-service" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--scope",
              description:
                "Resource Id of the target resource (SQL VM, SQL Managed Instance or SQL DB)",
              args: { name: "scope" },
            },
            {
              name: "--source-database-name",
              description: "Name of the source database",
              args: { name: "source-database-name" },
            },
            {
              name: "--source-sql-connection",
              description: "Source SQL Server connection details",
              args: { name: "source-sql-connection" },
            },
            {
              name: "--table-list",
              description: "List of tables to copy",
              args: { name: "table-list" },
            },
            {
              name: "--target-db-collation",
              description:
                "Database collation to be used for the target database",
              args: { name: "target-db-collation" },
            },
            {
              name: "--target-sql-connection",
              description: "Target SQL DB connection details",
              args: { name: "target-sql-connection" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Delete an in-progress or completed database migration to SQL DB",
          options: [
            {
              name: "--force",
              description:
                "Optional force delete boolean. If this is provided as true, migration will be deleted even if active",
              args: { name: "force", suggestions: ["false", "true"] },
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
              name: "--sqldb-instance-name",
              description: "Name of the target SQL Database Server",
              args: { name: "sqldb-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
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
            "Retrieve the specified database migration for a given SQL DB",
          options: [
            {
              name: "--expand",
              description:
                "Complete migration details be included in the response",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sqldb-instance-name",
              description: "Name of the target SQL Database Server",
              args: { name: "sqldb-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datamigration sql-db is met",
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
                "Complete migration details be included in the response",
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
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sqldb-instance-name",
              description: "Name of the target SQL Database Server",
              args: { name: "sqldb-instance-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
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
      name: "sql-managed-instance",
      description: "Manage database migrations to SQL Managed Instance",
      subcommands: [
        {
          name: "cancel",
          description:
            "Stop in-progress database migration to SQL Managed Instance",
          options: [
            {
              name: "--migration-operation-id",
              description: "ID tracking migration operation",
              args: { name: "migration-operation-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--managed-instance-name",
              description: "Name of the target SQL Managed Instance",
              args: { name: "managed-instance-name" },
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
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new database migration to a given SQL Managed Instance",
          options: [
            {
              name: "--managed-instance-name",
              description: "Name of the target SQL Managed Instance",
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
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
              isRequired: true,
            },
            {
              name: "--migration-service",
              description: "Resource Id of the Migration Service",
              args: { name: "migration-service" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--offline-configuration",
              description: "Offline configuration",
              args: { name: "offline-configuration" },
            },
            {
              name: "--scope",
              description:
                "Resource Id of the target resource (SQL VM, SQL Managed Instance or SQL DB)",
              args: { name: "scope" },
            },
            {
              name: "--source-database-name",
              description: "Name of the source database",
              args: { name: "source-database-name" },
            },
            {
              name: "--source-location",
              description:
                "Source location of backups. Expected value: json-string/json-file/@json-file",
              args: { name: "source-location" },
            },
            {
              name: "--source-sql-connection",
              description: "Source SQL Server connection details",
              args: { name: "source-sql-connection" },
            },
            {
              name: "--target-db-collation",
              description:
                "Database collation to be used for the target database",
              args: { name: "target-db-collation" },
            },
            {
              name: "--target-location",
              description: "Target location for copying backups",
              args: { name: "target-location" },
            },
          ],
        },
        {
          name: "cutover",
          description:
            "Initiate cutover for in-progress online database migration to SQL Managed Instance",
          options: [
            {
              name: "--migration-operation-id",
              description: "ID tracking migration operation",
              args: { name: "migration-operation-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--managed-instance-name",
              description: "Name of the target SQL Managed Instance",
              args: { name: "managed-instance-name" },
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
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Retrieve the specified database migration for a given SQL Managed Instance",
          options: [
            {
              name: "--expand",
              description:
                "Complete migration details be included in the response",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--managed-instance-name",
              description: "Name of the target SQL Managed Instance",
              args: { name: "managed-instance-name" },
            },
            {
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
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
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datamigration sql-managed-instance is met",
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
                "Complete migration details be included in the response",
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
              name: "--managed-instance-name",
              description: "Name of the target SQL Managed Instance",
              args: { name: "managed-instance-name" },
            },
            {
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
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
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
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
      name: "sql-service",
      description: "Manage Database Migration Service",
      subcommands: [
        {
          name: "create",
          description: "Create Database Migration Service",
          options: [
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
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
          description: "Delete Database Migration Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          name: "delete-node",
          description: "Delete the integration runtime node",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--ir-name",
              description: "The name of integration runtime",
              args: { name: "ir-name" },
            },
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
            },
            {
              name: "--node-name",
              description: "The name of node to delete",
              args: { name: "node-name" },
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
            "Retrieve all Database Migration Services in the resource group. And Retrieve all Database Migration Services in the subscription",
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
          name: "list-auth-key",
          description:
            "Retrieve the List of Authentication Keys for Self Hosted Integration Runtime",
          options: [
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          name: "list-integration-runtime-metric",
          description:
            "Retrieve the registered Integration Runtine nodes and their monitoring data for a given Database Migration Service",
          options: [
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          name: "list-migration",
          description:
            "Retrieve the List of database migrations attached to the service",
          options: [
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          name: "regenerate-auth-key",
          description:
            "Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime",
          options: [
            {
              name: "--auth-key1",
              description: "The first authentication key",
              args: { name: "auth-key1" },
            },
            {
              name: "--auth-key2",
              description: "The second authentication key",
              args: { name: "auth-key2" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-name",
              description: "The name of authentication key to generate",
              args: { name: "key-name" },
            },
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          description: "Retrieve the Database Migration Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
          description: "Update Database Migration Service",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
            "Place the CLI in a waiting state until a condition of the datamigration sql-service is met",
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
              name: ["--sql-migration-service-name", "--name", "-n"],
              description: "Name of the SQL Migration Service",
              args: { name: "sql-migration-service-name" },
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
      name: "sql-vm",
      description: "Manage database migrations to SQL VM",
      subcommands: [
        {
          name: "cancel",
          description: "Stop in-progress database migration to SQL VM",
          options: [
            {
              name: "--migration-operation-id",
              description: "ID tracking migration operation",
              args: { name: "migration-operation-id" },
              isRequired: true,
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
              name: "--sql-vm-name",
              description: "Name of the target SQL Virtual Machine",
              args: { name: "sql-vm-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a new database migration to a given SQL VM",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--sql-vm-name",
              description: "Name of the target SQL Virtual Machine",
              args: { name: "sql-vm-name" },
              isRequired: true,
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
              isRequired: true,
            },
            {
              name: "--migration-service",
              description: "Resource Id of the Migration Service",
              args: { name: "migration-service" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--offline-configuration",
              description: "Offline configuration",
              args: { name: "offline-configuration" },
            },
            {
              name: "--scope",
              description:
                "Resource Id of the target resource (SQL VM, SQL Managed Instance or SQL DB)",
              args: { name: "scope" },
            },
            {
              name: "--source-database-name",
              description: "Name of the source database",
              args: { name: "source-database-name" },
            },
            {
              name: "--source-location",
              description:
                "Source location of backups. Expected value: json-string/json-file/@json-file",
              args: { name: "source-location" },
            },
            {
              name: "--source-sql-connection",
              description: "Source SQL Server connection details",
              args: { name: "source-sql-connection" },
            },
            {
              name: "--target-db-collation",
              description:
                "Database collation to be used for the target database",
              args: { name: "target-db-collation" },
            },
            {
              name: "--target-location",
              description: "Target location for copying backups",
              args: { name: "target-location" },
            },
          ],
        },
        {
          name: "cutover",
          description:
            "Initiate cutover for in-progress online database migration to SQL VM",
          options: [
            {
              name: "--migration-operation-id",
              description: "ID tracking migration operation",
              args: { name: "migration-operation-id" },
              isRequired: true,
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
              name: "--sql-vm-name",
              description: "Name of the target SQL Virtual Machine",
              args: { name: "sql-vm-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Retrieve the specified database migration for a given SQL VM",
          options: [
            {
              name: "--expand",
              description:
                "Complete migration details be included in the response",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sql-vm-name",
              description: "Name of the target SQL Virtual Machine",
              args: { name: "sql-vm-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the datamigration sql-vm is met",
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
                "Complete migration details be included in the response",
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
              name: "--migration-operation-id",
              description:
                "Optional migration operation ID. If this is provided, then details of migration operation for that ID are retrieved. If not provided (default), then details related to most recent or current operation are retrieved",
              args: { name: "migration-operation-id" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--sql-vm-name",
              description: "Name of the target SQL Virtual Machine",
              args: { name: "sql-vm-name" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--target-db-name",
              description: "The name of the target database",
              args: { name: "target-db-name" },
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
};

export default completion;
