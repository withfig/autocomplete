const completion: Fig.Spec = {
  name: "cosmosdb",
  description: "Manage Azure Cosmos DB database accounts",
  subcommands: [
    {
      name: "cassandra",
      description: "Manage Cassandra resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "keyspace",
          description: "Manage Azure Cosmos DB Cassandra keyspaces",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Cassandra keyspace under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Keyspace name",
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
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of Cassandra keyspace (RU/s). Default value is 400",
                  args: { name: "throughput" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the Cassandra keyspace under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Keyspace name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Cassandra keyspace exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Keyspace name",
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
                "List the Cassandra keyspaces under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
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
              description:
                "Show the details of a Cassandra keyspace under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Keyspace name",
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
              name: "throughput",
              description:
                "Manage throughput of Cassandra keyspace under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the Cassandra keyspace between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Keyspace name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Cassandra keyspace under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Keyspace name",
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
                  description:
                    "Update the throughput of the Cassandra keyspace under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Keyspace name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description:
                        "The throughput of Cassandra keyspace (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "table",
          description: "Manage Azure Cosmos DB Cassandra tables",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Cassandra table under an Azure Cosmos DB Cassandra keyspace",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                  name: "--schema",
                  description:
                    'Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}"',
                  args: { name: "schema" },
                  isRequired: true,
                },
                {
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of Cassandra table (RU/s). Default value is 400. Omit this parameter if the keyspace has shared throughput unless the table should have dedicated throughput",
                  args: { name: "throughput" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Cassandra table exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                "List the Cassandra tables under an Azure Cosmos DB Cassandra keyspace",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
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
                "Show the details of a Cassandra table under an Azure Cosmos DB Cassandra keyspace",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
              description:
                "Update an Cassandra table under an Azure Cosmos DB Cassandra keyspace",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--keyspace-name", "-k"],
                  description: "Keyspace name",
                  args: { name: "keyspace-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--schema",
                  description:
                    'Schema, you can enter it as a string or as a file, e.g., --schema @schema-file.json or --schema "{"columns": [{"name": "columnA","type": "uuid"}, {"name": "columnB","type": "Ascii"}],"partitionKeys": [{"name": "columnA"}]}"',
                  args: { name: "schema" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
              ],
            },
            {
              name: "throughput",
              description:
                "Manage throughput of Cassandra table under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the Cassandra table between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--keyspace-name", "-k"],
                      description: "Keyspace name",
                      args: { name: "keyspace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Table name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--keyspace-name", "-k"],
                      description: "Keyspace name",
                      args: { name: "keyspace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Table name",
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
                  description:
                    "Update the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--keyspace-name", "-k"],
                      description: "Keyspace name",
                      args: { name: "keyspace-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Table name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput of Cassandra table (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "check-name-exists",
      description: "Checks if an Azure Cosmos DB account name exists",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
          args: { name: "name" },
        },
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
      description: "Creates a new Azure Cosmos DB database account",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
          name: ["--analytical-storage-schema-type", "--as-schema"],
          description: "Schema type for analytical storage",
          args: {
            name: "analytical-storage-schema-type",
            suggestions: ["FullFidelity", "WellDefined"],
          },
        },
        {
          name: "--assign-identity",
          description:
            "Assign system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity",
          args: { name: "assign-identity" },
        },
        {
          name: "--backup-interval",
          description:
            "The frequency(in minutes) with which backups are taken (only for accounts with periodic mode backups)",
          args: { name: "backup-interval" },
        },
        {
          name: "--backup-policy-type",
          description: "The type of backup policy of the account to create",
          args: {
            name: "backup-policy-type",
            suggestions: ["Continuous", "Periodic"],
          },
        },
        {
          name: "--backup-redundancy",
          description: "The redundancy type of the backup Storage account",
          args: {
            name: "backup-redundancy",
            suggestions: ["Geo", "Local", "Zone"],
          },
        },
        {
          name: "--backup-retention",
          description:
            "The time(in hours) for which each backup is retained (only for accounts with periodic mode backups)",
          args: { name: "backup-retention" },
        },
        {
          name: "--capabilities",
          description:
            "Set custom capabilities on the Cosmos DB database account",
          args: { name: "capabilities" },
        },
        {
          name: "--continuous-tier",
          description: "The tier of Continuous backup",
          args: {
            name: "continuous-tier",
            suggestions: ["Continuous30Days", "Continuous7Days"],
          },
        },
        {
          name: "--databases-to-restore",
          description: "Add a database and its collection names to restore",
          args: { name: "databases-to-restore" },
        },
        {
          name: "--default-consistency-level",
          description:
            "Default consistency level of the Cosmos DB database account",
          args: {
            name: "default-consistency-level",
            suggestions: [
              "BoundedStaleness",
              "ConsistentPrefix",
              "Eventual",
              "Session",
              "Strong",
            ],
          },
        },
        {
          name: "--default-identity",
          description:
            "The primary identity to access key vault in CMK related features. e.g. 'FirstPartyIdentity', 'SystemAssignedIdentity' and more. User-assigned identities are specified in format 'UserAssignedIdentity='",
          args: { name: "default-identity" },
        },
        {
          name: "--disable-key-based-metadata-write-access",
          description:
            "Disable write operations on metadata resources (databases, containers, throughput) via account keys",
          args: {
            name: "disable-key-based-metadata-write-access",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-analytical-storage",
          description: "Flag to enable log storage on the account",
          args: {
            name: "enable-analytical-storage",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-automatic-failover",
          description:
            "Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account",
          args: {
            name: "enable-automatic-failover",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-free-tier",
          description: "If enabled the account is free-tier",
          args: { name: "enable-free-tier", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-multiple-write-locations",
          description: "Enable Multiple Write Locations",
          args: {
            name: "enable-multiple-write-locations",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-partition-merge",
          description: "Flag to enable partition merge on the account",
          args: {
            name: "enable-partition-merge",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-virtual-network",
          description:
            "Enables virtual network on the Cosmos DB database account",
          args: {
            name: "enable-virtual-network",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--gremlin-databases-to-restore",
          description: "Add a gremlin database and its graph names to restore",
          args: { name: "gremlin-databases-to-restore" },
        },
        {
          name: "--ip-range-filter",
          description:
            "Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces",
          args: { name: "ip-range-filter" },
        },
        {
          name: ["--is-restore-request", "-r"],
          description: "Restore from an existing/deleted account",
          args: { name: "is-restore-request", suggestions: ["false", "true"] },
        },
        {
          name: "--key-uri",
          description: "The URI of the key vault",
          args: { name: "key-uri" },
        },
        {
          name: "--kind",
          description: "The type of Cosmos DB database account to create",
          args: {
            name: "kind",
            suggestions: ["GlobalDocumentDB", "MongoDB", "Parse"],
          },
        },
        {
          name: "--locations",
          description: "Add a location to the Cosmos DB database account",
          args: { name: "locations" },
        },
        {
          name: "--max-interval",
          description:
            "When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400",
          args: { name: "max-interval" },
        },
        {
          name: "--max-staleness-prefix",
          description:
            "When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 10 - 2,147,483,647",
          args: { name: "max-staleness-prefix" },
        },
        {
          name: "--network-acl-bypass",
          description: "Flag to enable or disable Network Acl Bypass",
          args: {
            name: "network-acl-bypass",
            suggestions: ["AzureServices", "None"],
          },
        },
        {
          name: ["--network-acl-bypass-resource-ids", "-i"],
          description: "List of Resource Ids to allow Network Acl Bypass",
          args: { name: "network-acl-bypass-resource-ids" },
        },
        {
          name: ["--public-network-access", "-p"],
          description:
            "Sets public network access in server to either Enabled, Disabled, or SecuredByPerimeter",
          args: {
            name: "public-network-access",
            suggestions: ["DISABLED", "ENABLED", "SECUREDBYPERIMETER"],
          },
        },
        {
          name: "--restore-source",
          description:
            "The restorable-database-account Id of the source account from which the account has to be restored. Required if --is-restore-request is set to true",
          args: { name: "restore-source" },
        },
        {
          name: "--restore-timestamp",
          description:
            "The timestamp to which the account has to be restored to. Required if --is-restore-request is set to true",
          args: { name: "restore-timestamp" },
        },
        {
          name: "--server-version",
          description: "Valid only for MongoDB accounts",
          args: {
            name: "server-version",
            suggestions: ["3.2", "3.6", "4.0", "4.2"],
          },
        },
        {
          name: "--tables-to-restore",
          description: "Add table names to restore",
          args: { name: "tables-to-restore" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--virtual-network-rules",
          description: "ACL's for virtual network",
          args: { name: "virtual-network-rules" },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes an Azure Cosmos DB database account",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      name: "failover-priority-change",
      description:
        "Changes the failover priority for the Azure Cosmos DB database account",
      options: [
        {
          name: "--failover-policies",
          description:
            "Space-separated failover policies in 'regionName=failoverPriority' format. Number of policies must match the number of regions the account is currently replicated. All regionName values must match those of the regions the account is currently replicated. All failoverPriority values must be unique. There must be one failoverPriority value zero (0) specified. All remaining failoverPriority values can be any positive integer and they don't have to be contiguos, neither written in any specific order. E.g eastus=0 westus=1",
          args: { name: "failover-policies" },
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
          description: "Name of the Cosmos DB database account",
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
      description: "List Azure Cosmos DB database accounts",
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
      name: "list-connection-strings",
      description:
        "List the connection strings for a Azure Cosmos DB database account",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      name: "list-keys",
      description:
        "List the access keys for a Azure Cosmos DB database account",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      name: "list-read-only-keys",
      description:
        "List the read-only access keys for a Azure Cosmos DB database account",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      name: "regenerate-key",
      description:
        "Regenerate an access key for a Azure Cosmos DB database account",
      options: [
        {
          name: "--key-kind",
          description: "The access key to regenerate",
          args: {
            name: "key-kind",
            suggestions: [
              "primary",
              "primaryReadonly",
              "secondary",
              "secondaryReadonly",
            ],
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
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      description:
        "Create a new Azure Cosmos DB database account by restoring from an existing database account",
      options: [
        {
          name: ["--account-name", "-a"],
          description:
            "Name of the source Cosmos DB database account for the restore",
          args: { name: "account-name" },
          isRequired: true,
        },
        {
          name: ["--location", "-l"],
          description:
            "The location of the source account from which restore is triggered. This will also be the write region of the restored account",
          args: { name: "location" },
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
          name: ["--restore-timestamp", "-t"],
          description:
            "The timestamp to which the account has to be restored to",
          args: { name: "restore-timestamp" },
          isRequired: true,
        },
        {
          name: ["--target-database-account-name", "-n"],
          description:
            "Name of the new target Cosmos DB database account after the restore",
          args: { name: "target-database-account-name" },
          isRequired: true,
        },
        {
          name: "--assign-identity",
          description:
            "Assign system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity",
          args: { name: "assign-identity" },
        },
        {
          name: "--databases-to-restore",
          description: "Add a database and its collection names to restore",
          args: { name: "databases-to-restore" },
        },
        {
          name: "--default-identity",
          description:
            "The primary identity to access key vault in CMK related features. e.g. 'FirstPartyIdentity', 'SystemAssignedIdentity' and more",
          args: { name: "default-identity" },
        },
        {
          name: "--gremlin-databases-to-restore",
          description: "Add a gremlin database and its graph names to restore",
          args: { name: "gremlin-databases-to-restore" },
        },
        {
          name: ["--public-network-access", "-p"],
          description:
            "Sets public network access in server to either Enabled or Disabled",
          args: {
            name: "public-network-access",
            suggestions: ["DISABLED", "ENABLED"],
          },
        },
        {
          name: "--tables-to-restore",
          description: "Add table names to restore",
          args: { name: "tables-to-restore" },
        },
      ],
    },
    {
      name: "show",
      description: "Get the details of an Azure Cosmos DB database account",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
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
      description: "Update an Azure Cosmos DB database account",
      options: [
        {
          name: ["--analytical-storage-schema-type", "--as-schema"],
          description: "Schema type for analytical storage",
          args: {
            name: "analytical-storage-schema-type",
            suggestions: ["FullFidelity", "WellDefined"],
          },
        },
        {
          name: "--backup-interval",
          description:
            "The frequency(in minutes) with which backups are taken (only for accounts with periodic mode backups)",
          args: { name: "backup-interval" },
        },
        {
          name: "--backup-policy-type",
          description: "The type of backup policy of the account to create",
          args: {
            name: "backup-policy-type",
            suggestions: ["Continuous", "Periodic"],
          },
        },
        {
          name: "--backup-redundancy",
          description: "The redundancy type of the backup Storage account",
          args: {
            name: "backup-redundancy",
            suggestions: ["Geo", "Local", "Zone"],
          },
        },
        {
          name: "--backup-retention",
          description:
            "The time(in hours) for which each backup is retained (only for accounts with periodic mode backups)",
          args: { name: "backup-retention" },
        },
        {
          name: "--capabilities",
          description:
            "Set custom capabilities on the Cosmos DB database account",
          args: { name: "capabilities" },
        },
        {
          name: "--continuous-tier",
          description: "The tier of Continuous backup",
          args: {
            name: "continuous-tier",
            suggestions: ["Continuous30Days", "Continuous7Days"],
          },
        },
        {
          name: "--default-consistency-level",
          description:
            "Default consistency level of the Cosmos DB database account",
          args: {
            name: "default-consistency-level",
            suggestions: [
              "BoundedStaleness",
              "ConsistentPrefix",
              "Eventual",
              "Session",
              "Strong",
            ],
          },
        },
        {
          name: "--default-identity",
          description:
            "The primary identity to access key vault in CMK related features. e.g. 'FirstPartyIdentity', 'SystemAssignedIdentity' and more. User-assigned identities are specified in format 'UserAssignedIdentity='",
          args: { name: "default-identity" },
        },
        {
          name: "--disable-key-based-metadata-write-access",
          description:
            "Disable write operations on metadata resources (databases, containers, throughput) via account keys",
          args: {
            name: "disable-key-based-metadata-write-access",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-analytical-storage",
          description: "Flag to enable log storage on the account",
          args: {
            name: "enable-analytical-storage",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-automatic-failover",
          description:
            "Enables automatic failover of the write region in the rare event that the region is unavailable due to an outage. Automatic failover will result in a new write region for the account and is chosen based on the failover priorities configured for the account",
          args: {
            name: "enable-automatic-failover",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-multiple-write-locations",
          description: "Enable Multiple Write Locations",
          args: {
            name: "enable-multiple-write-locations",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-partition-merge",
          description: "Flag to enable partition merge on the account",
          args: {
            name: "enable-partition-merge",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-virtual-network",
          description:
            "Enables virtual network on the Cosmos DB database account",
          args: {
            name: "enable-virtual-network",
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
          name: "--ip-range-filter",
          description:
            "Firewall support. Specifies the set of IP addresses or IP address ranges in CIDR form to be included as the allowed list of client IPs for a given database account. IP addresses/ranges must be comma-separated and must not contain any spaces",
          args: { name: "ip-range-filter" },
        },
        {
          name: "--key-uri",
          description: "The URI of the key vault",
          args: { name: "key-uri" },
        },
        {
          name: "--locations",
          description: "Add a location to the Cosmos DB database account",
          args: { name: "locations" },
        },
        {
          name: "--max-interval",
          description:
            "When used with Bounded Staleness consistency, this value represents the time amount of staleness (in seconds) tolerated. Accepted range for this value is 5 - 86400",
          args: { name: "max-interval" },
        },
        {
          name: "--max-staleness-prefix",
          description:
            "When used with Bounded Staleness consistency, this value represents the number of stale requests tolerated. Accepted range for this value is 10 - 2,147,483,647",
          args: { name: "max-staleness-prefix" },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the Cosmos DB database account",
          args: { name: "name" },
        },
        {
          name: "--network-acl-bypass",
          description: "Flag to enable or disable Network Acl Bypass",
          args: {
            name: "network-acl-bypass",
            suggestions: ["AzureServices", "None"],
          },
        },
        {
          name: ["--network-acl-bypass-resource-ids", "-i"],
          description: "List of Resource Ids to allow Network Acl Bypass",
          args: { name: "network-acl-bypass-resource-ids" },
        },
        {
          name: ["--public-network-access", "-p"],
          description:
            "Sets public network access in server to either Enabled, Disabled, or SecuredByPerimeter",
          args: {
            name: "public-network-access",
            suggestions: ["DISABLED", "ENABLED", "SECUREDBYPERIMETER"],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--server-version",
          description: "Valid only for MongoDB accounts",
          args: {
            name: "server-version",
            suggestions: ["3.2", "3.6", "4.0", "4.2"],
          },
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
          name: "--virtual-network-rules",
          description: "ACL's for virtual network",
          args: { name: "virtual-network-rules" },
        },
      ],
    },
    {
      name: "collection",
      description: "Manage Azure Cosmos DB collections",
      subcommands: [
        {
          name: "create",
          description: "Creates an Azure Cosmos DB collection",
          options: [
            {
              name: ["--collection-name", "-c"],
              description: "Collection Name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--cep",
              description:
                'Client Encryption Policy, you can enter it as a string or as a file, e.g., --cep @policy-file.json or --cep "{"includedPaths": [{"path": "/path1","clientEncryptionKeyId": "key1","encryptionAlgorithm": "AEAD_AES_256_CBC_HMAC_SHA256","encryptionType": "Deterministic"}],"policyFormatVersion": 2}"',
              args: { name: "cep" },
            },
            {
              name: "--default-ttl",
              description: "Default TTL. Provide 0 to disable",
              args: { name: "default-ttl" },
            },
            {
              name: "--indexing-policy",
              description:
                'Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json). "indexingMode": "consistent", "automatic": true, "includedPaths": [ { "path": "/*" } ], "excludedPaths": [ { "path": "/\\"_etag\\"/?" } ] }',
              args: { name: "indexing-policy" },
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: "--partition-key-path",
              description: "Partition Key Path, e.g., '/properties/name'",
              args: { name: "partition-key-path" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--throughput",
              description: "Offer Throughput (RU/s)",
              args: { name: "throughput" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an Azure Cosmos DB collection",
          options: [
            {
              name: ["--collection-name", "-c"],
              description: "Collection Name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "exists",
          description:
            "Returns a boolean indicating whether the collection exists",
          options: [
            {
              name: ["--collection-name", "-c"],
              description: "Collection Name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "list",
          description: "Lists all Azure Cosmos DB collections",
          options: [
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows an Azure Cosmos DB collection and its offer",
          options: [
            {
              name: ["--collection-name", "-c"],
              description: "Collection Name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "update",
          description: "Updates an Azure Cosmos DB collection",
          options: [
            {
              name: ["--collection-name", "-c"],
              description: "Collection Name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--default-ttl",
              description: "Default TTL. Provide 0 to disable",
              args: { name: "default-ttl" },
            },
            {
              name: "--indexing-policy",
              description:
                "Indexing Policy, you can enter it as a string or as a file, e.g., --indexing-policy @policy-file.json)",
              args: { name: "indexing-policy" },
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--throughput",
              description: "Offer Throughput (RU/s)",
              args: { name: "throughput" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
      ],
    },
    {
      name: "copy",
      description: "Manage container copy job",
      subcommands: [
        {
          name: "cancel",
          description: "Cancel a container copy job",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Azure Cosmos DB account name where the job is created. Use --dest-account value from create job command",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the container copy job",
              args: { name: "job-name" },
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
          name: "create",
          description: "Creates a container copy job",
          options: [
            {
              name: "--dest-account",
              description:
                "Name of the Azure Cosmos DB destination database account",
              args: { name: "dest-account" },
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
              name: "--src-account",
              description:
                "Name of the Azure Cosmos DB source database account",
              args: { name: "src-account" },
              isRequired: true,
            },
            {
              name: "--dest-cassandra",
              description: "Destination table",
              args: { name: "dest-cassandra" },
            },
            {
              name: "--dest-mongo",
              description: "Destination collection",
              args: { name: "dest-mongo" },
            },
            {
              name: "--dest-nosql",
              description: "Destination container",
              args: { name: "dest-nosql" },
            },
            {
              name: ["--job-name", "-n"],
              description:
                "Name of the Data Transfer Job. A random job name will be generated if not passed",
              args: { name: "job-name" },
            },
            {
              name: "--src-cassandra",
              description: "Source table",
              args: { name: "src-cassandra" },
            },
            {
              name: "--src-mongo",
              description: "Source collection",
              args: { name: "src-mongo" },
            },
            {
              name: "--src-nosql",
              description: "Source container",
              args: { name: "src-nosql" },
            },
          ],
        },
        {
          name: "list",
          description: "Get a container copy job",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Azure Cosmos DB account name where the job is created. Use --dest-account value from create job command",
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
          name: "pause",
          description: "Pause a container copy job",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Azure Cosmos DB account name where the job is created. Use --dest-account value from create job command",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the container copy job",
              args: { name: "job-name" },
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
          name: "resume",
          description: "Resume a container copy job",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Azure Cosmos DB account name where the job is created. Use --dest-account value from create job command",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the container copy job",
              args: { name: "job-name" },
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
          description: "Get a container copy job",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Azure Cosmos DB account name where the job is created. Use --dest-account value from create job command",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the container copy job",
              args: { name: "job-name" },
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
      name: "database",
      description: "Manage Azure Cosmos DB databases",
      subcommands: [
        {
          name: "create",
          description: "Creates an Azure Cosmos DB database",
          options: [
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--throughput",
              description: "Offer Throughput (RU/s)",
              args: { name: "throughput" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an Azure Cosmos DB database",
          options: [
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "exists",
          description:
            "Returns a boolean indicating whether the database exists",
          options: [
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "list",
          description: "Lists all Azure Cosmos DB databases",
          options: [
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
        {
          name: "show",
          description: "Shows an Azure Cosmos DB database",
          options: [
            {
              name: ["--db-name", "-d"],
              description: "Database Name",
              args: { name: "db-name" },
              isRequired: true,
            },
            {
              name: "--key",
              description:
                "Cosmos DB account key. Must be used in conjunction with cosmosdb account name or url-connection",
              args: { name: "key" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Cosmos DB account name. Must be used in conjunction with either name of the resource group or cosmosdb account key",
              args: { name: "name" },
            },
            {
              name: ["--resource-group-name", "-g"],
              description:
                "Name of the resource group. Must be used in conjunction with cosmosdb account name",
              args: { name: "resource-group-name" },
            },
            {
              name: "--url-connection",
              description:
                "Cosmos DB account url connection. Must be used in conjunction with cosmosdb account key",
              args: { name: "url-connection" },
            },
          ],
        },
      ],
    },
    {
      name: "dts",
      description: "Manage data transfer job with cosmosdb",
      subcommands: [
        {
          name: "cancel",
          description: "Cancels a Data Transfer Job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the Data Transfer Job",
              args: { name: "job-name" },
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
          name: "copy",
          description: "Creates a Data Transfer Copy Job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
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
              name: "--dest-cassandra-table",
              description: "Destination cassandra table",
              args: { name: "dest-cassandra-table" },
            },
            {
              name: "--dest-mongo",
              description: "Destination mongo collection",
              args: { name: "dest-mongo" },
            },
            {
              name: "--dest-sql-container",
              description: "Destination sql container",
              args: { name: "dest-sql-container" },
            },
            {
              name: ["--job-name", "-n"],
              description:
                "Name of the Data Transfer Job. A random job name will be generated if not passed",
              args: { name: "job-name" },
            },
            {
              name: "--source-cassandra-table",
              description: "Source cassandra table",
              args: { name: "source-cassandra-table" },
            },
            {
              name: "--source-mongo",
              description: "Source mongo collection",
              args: { name: "source-mongo" },
            },
            {
              name: "--source-sql-container",
              description: "Source sql container",
              args: { name: "source-sql-container" },
            },
            {
              name: "--worker-count",
              description: "Worker count",
              args: { name: "worker-count" },
            },
          ],
        },
        {
          name: "list",
          description: "Get a list of Data Transfer Jobs",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
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
          name: "pause",
          description: "Pause a Data Transfer Job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the Data Transfer Job",
              args: { name: "job-name" },
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
          name: "resume",
          description: "Resumes a Data Transfer Job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the Data Transfer Job",
              args: { name: "job-name" },
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
          description: "Get a Data Transfer Job",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--job-name", "-n"],
              description: "Name of the Data Transfer Job",
              args: { name: "job-name" },
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
      name: "gremlin",
      description: "Manage Gremlin resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "retrieve-latest-backup-time",
          description:
            "Retrieves latest restorable timestamp for the given gremlin graph in given region",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--database-name", "-d"],
              description: "Name of the CosmosDB Gremlin database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--graph-name", "-n"],
              description: "Name of the CosmosDB Gremlin graph name",
              args: { name: "graph-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the account",
              args: { name: "location" },
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
          name: "database",
          description: "Manage Azure Cosmos DB Gremlin databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Gremlin database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput Gremlin database (RU/s). Default value is 400",
                  args: { name: "throughput" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the Gremlin database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Gremlin database exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                "List the Gremlin databases under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
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
              name: "restore",
              description:
                "Restore a deleted gremlin database within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB Gremlin database name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the database needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a Gremlin database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
              name: "throughput",
              description:
                "Manage throughput of Gremlin database under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the Gremlin database between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Gremlin database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                  description:
                    "Update the throughput of the Gremlin database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput of Gremlin database (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "graph",
          description: "Manage Azure Cosmos DB Gremlin graphs",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Gremlin graph under an Azure Cosmos DB Gremlin database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Graph name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--partition-key-path", "-p"],
                  description: "Partition Key Path, e.g., '/address/zipcode'",
                  args: { name: "partition-key-path" },
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
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: ["--conflict-resolution-policy", "-c"],
                  description:
                    'Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}"',
                  args: { name: "conflict-resolution-policy" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\\"_etag\\"/?"}]}". "indexingMode": "consistent", "automatic": true, "includedPaths": [ { "path": "/*" } ], "excludedPaths": [ { "path": "/\\"_etag\\"/?" } ] }',
                  args: { name: "idx" },
                },
                {
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of Gremlin graph (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the graph should have dedicated throughput",
                  args: { name: "throughput" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the Gremlin graph under an Azure Cosmos DB Gremlin database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Graph name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB Gremlin graph exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Graph name",
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
                "List the Gremlin graphs under an Azure Cosmos DB Gremlin database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
              name: "restore",
              description:
                "Restore a deleted gremlin graph within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB Gremlin database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB Gremlin graph name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the graph needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a Gremlin graph under an Azure Cosmos DB Gremlin database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Graph name",
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
              description:
                "Update an Gremlin graph under an Azure Cosmos DB Gremlin database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Graph name",
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
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\\"_etag\\"/?"}]}"',
                  args: { name: "idx" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
              ],
            },
            {
              name: "throughput",
              description:
                "Manage throughput of Gremlin graph under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the Gremlin Graph between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Graph name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Graph name",
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
                  description:
                    "Update the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Graph name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput Gremlin graph (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "restorable-database",
          description:
            "Manage different versions of gremlin databases that are restorable in a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the gremlin databases that were created / modified / deleted in the given restorable account",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "restorable-graph",
          description:
            "Manage different versions of gremlin graphs that are restorable in a database of a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the gremlin graphs that were created / modified / deleted in the given database and restorable account",
              options: [
                {
                  name: ["--database-rid", "-d"],
                  description: "Rid of the gremlin database",
                  args: { name: "database-rid" },
                  isRequired: true,
                },
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--end-time", "-e"],
                  description:
                    "End time of restorable Gremlin graph event feed",
                  args: { name: "end-time" },
                },
                {
                  name: ["--start-time", "-s"],
                  description:
                    "Start time of restorable Gremlin graph event feed",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "restorable-resource",
          description:
            "Manage the databases and its graphs that can be restored in the given account at the given timestamp and region",
          subcommands: [
            {
              name: "list",
              description:
                "List all the databases and its graphs that can be restored in the given account at the given timestamp and region",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Azure Location of the account",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-location", "-r"],
                  description: "The region of the restore",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-timestamp", "-t"],
                  description: "The timestamp of the restore",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage Azure Cosmos DB managed service identities",
      subcommands: [
        {
          name: "assign",
          description:
            "Assign SystemAssigned identity for a Azure Cosmos DB database account",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
            "Remove SystemAssigned identity for a Azure Cosmos DB database account",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
          description:
            "Show the identities for a Azure Cosmos DB database account",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
      name: "keys",
      description: "Manage Azure Cosmos DB keys",
      subcommands: [
        {
          name: "list",
          description:
            "List the access keys or connection strings for a Azure Cosmos DB database account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Cosmosdb account name",
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
              name: "--type",
              description: "The type of account key",
              args: {
                name: "type",
                suggestions: ["connection-strings", "keys", "read-only-keys"],
              },
            },
          ],
        },
        {
          name: "regenerate",
          description:
            "Regenerate an access key for a Azure Cosmos DB database account",
          options: [
            {
              name: "--key-kind",
              description: "The access key to regenerate",
              args: {
                name: "key-kind",
                suggestions: [
                  "primary",
                  "primaryReadonly",
                  "secondary",
                  "secondaryReadonly",
                ],
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
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
      name: "locations",
      description: "Manage Azure Cosmos DB location properties",
      subcommands: [
        {
          name: "list",
          description:
            "Retrieves the list of cosmosdb locations and their properties",
        },
        {
          name: "show",
          description:
            "Show the Azure Cosmos DB location properties in the given location",
          options: [
            {
              name: ["--location", "-l"],
              description: "Name of the location",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "mongocluster",
      description: "Mongo cluster",
      subcommands: [
        {
          name: "create",
          description: "Create a Mongo cluster",
          options: [
            {
              name: ["--administrator-login", "-a"],
              description:
                "The initial administrator user to be configured when a cluster is created",
              args: { name: "administrator-login" },
              isRequired: true,
            },
            {
              name: ["--administrator-login-password", "-p"],
              description:
                "The initial administrator password to be configured when a cluster is created",
              args: { name: "administrator-login-password" },
              isRequired: true,
            },
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Cosmos DB Mongo Cluster",
              args: { name: "cluster-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Azure Location of the Cluster",
              args: { name: "location" },
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
              name: "--server-version",
              description: "The server version of the mongo cluster",
              args: { name: "server-version" },
              isRequired: true,
            },
            {
              name: "--shard-node-count",
              description: "The node count for mongo cluster",
              args: { name: "shard-node-count" },
              isRequired: true,
            },
            {
              name: ["--shard-node-disk-size-gb", "-d"],
              description: "The node disk size for mongo cluster",
              args: { name: "shard-node-disk-size-gb" },
              isRequired: true,
            },
            {
              name: "--shard-node-ha",
              description: "If enabled the cluster has HA",
              args: { name: "shard-node-ha", suggestions: ["false", "true"] },
              isRequired: true,
            },
            {
              name: "--shard-node-tier",
              description: "The node tier for mongo cluster",
              args: { name: "shard-node-tier" },
              isRequired: true,
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
          description: "Delete a Mongo Cluster Resource",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Cosmos DB Mongo Cluster",
              args: { name: "cluster-name" },
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List a Mongo Cluster Resource",
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
          description: "Get a Mongo Cluster Resource",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Cosmos DB Mongo Cluster",
              args: { name: "cluster-name" },
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
          description: "Update a Mongo cluster",
          options: [
            {
              name: ["--cluster-name", "-c"],
              description: "Name of the Cosmos DB Mongo Cluster",
              args: { name: "cluster-name" },
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
              name: ["--administrator-login", "-a"],
              description:
                "The initial administrator user to be configured when a cluster is created",
              args: { name: "administrator-login" },
            },
            {
              name: ["--administrator-login-password", "-p"],
              description:
                "The initial administrator password to be configured when a cluster is created",
              args: { name: "administrator-login-password" },
            },
            {
              name: "--server-version",
              description: "The server version of the mongo cluster",
              args: { name: "server-version" },
            },
            {
              name: ["--shard-node-disk-size-gb", "-d"],
              description: "The node disk size for mongo cluster",
              args: { name: "shard-node-disk-size-gb" },
            },
            {
              name: "--shard-node-ha",
              description: "If enabled the cluster has HA",
              args: { name: "shard-node-ha", suggestions: ["false", "true"] },
            },
            {
              name: "--shard-node-tier",
              description: "The node tier for mongo cluster",
              args: { name: "shard-node-tier" },
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
          name: "firewall",
          description: "Mongo cluster firewall",
          subcommands: [
            {
              name: "rule",
              description: "Mongo cluster firewall rule",
              subcommands: [
                {
                  name: "create",
                  description: "Create a Mongo cluster firewall rule",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description: "Name of the Cosmos DB Mongo Cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: "--end-ip-address",
                      description: "End IP address of the firewall rule",
                      args: { name: "end-ip-address" },
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
                      name: "--rule-name",
                      description: "Name of the firewall rule",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--start-ip-address",
                      description: "Start IP address of the firewall rule",
                      args: { name: "start-ip-address" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete a Mongo cluster firewall rule",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description: "Name of the Cosmos DB Mongo Cluster",
                      args: { name: "cluster-name" },
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
                      name: "--rule-name",
                      description: "Name of the firewall rule",
                      args: { name: "rule-name" },
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
                  description: "Lists firewall rule on a Mongo cluster",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description: "Name of the Cosmos DB Mongo Cluster",
                      args: { name: "cluster-name" },
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
                  description: "Get a Mongo cluster firewall rule",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description: "Name of the Cosmos DB Mongo Cluster",
                      args: { name: "cluster-name" },
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
                      name: "--rule-name",
                      description: "Name of the firewall rule",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description: "Create a Mongo cluster firewall rule",
                  options: [
                    {
                      name: ["--cluster-name", "-c"],
                      description: "Name of the Cosmos DB Mongo Cluster",
                      args: { name: "cluster-name" },
                      isRequired: true,
                    },
                    {
                      name: "--end-ip-address",
                      description: "End IP address of the firewall rule",
                      args: { name: "end-ip-address" },
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
                      name: "--rule-name",
                      description: "Name of the firewall rule",
                      args: { name: "rule-name" },
                      isRequired: true,
                    },
                    {
                      name: "--start-ip-address",
                      description: "Start IP address of the firewall rule",
                      args: { name: "start-ip-address" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "mongodb",
      description: "Manage MongoDB resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "retrieve-latest-backup-time",
          description:
            "Retrieves latest restorable timestamp for the given mongodb collection in given region",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--collection-name", "-c"],
              description: "Name of the CosmosDB MongoDB collection name",
              args: { name: "collection-name" },
              isRequired: true,
            },
            {
              name: ["--database-name", "-d"],
              description: "Name of the CosmosDB MongoDB database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the account",
              args: { name: "location" },
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
          name: "collection",
          description: "Manage Azure Cosmos DB MongoDB collections",
          subcommands: [
            {
              name: "create",
              description:
                "Create an MongoDB collection under an Azure Cosmos DB MongoDB database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]"',
                  args: { name: "idx" },
                },
                {
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--shard",
                  description: "Sharding key path",
                  args: { name: "shard" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of MongoDB collection (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the collection should have dedicated throughput",
                  args: { name: "throughput" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the MongoDB collection under an Azure Cosmos DB MongoDB database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB MongoDB collection exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
                "List the MongoDB collections under an Azure Cosmos DB MongoDB database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
              name: "merge",
              description: "Merges the partitions of a mongodb collection",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the mongoDB database",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the mongoDB collection",
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
              name: "redistribute-partition-throughput",
              description:
                "Redistributes the partition throughput of a mongodb collection",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB collection",
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
                  name: "--evenly-distribute",
                  description:
                    "Switch to distribute throughput equally among all physical partitions",
                },
                {
                  name: "--source-partition-info",
                  description:
                    "Space separated source physical partition ids eg: 1 2",
                  args: { name: "source-partition-info" },
                },
                {
                  name: "--target-partition-info",
                  description:
                    "Information about desired target physical partition throughput eg: '0=1200 1=1200'",
                  args: { name: "target-partition-info" },
                },
              ],
            },
            {
              name: "restore",
              description:
                "Restore a deleted mongodb collection within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the collection needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "retrieve-partition-throughput",
              description:
                "Retrieve the partition throughput of a mongodb collection",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB container",
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
                  name: "--all-partitions",
                  description:
                    "Switch to retrieve throughput for all physical partitions",
                },
                {
                  name: ["--physical-partition-ids", "-p"],
                  description: "Space separated list of physical partition ids",
                  args: { name: "physical-partition-ids" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a MongoDB collection under an Azure Cosmos DB MongoDB database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
              description:
                "Update an MongoDB collection under an Azure Cosmos DB MongoDB database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Collection name",
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
                  name: "--analytical-storage-ttl",
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexes, you can enter it as a string or as a file, e.g., --idx @indexes-file.json or --idx "[{"key": {"keys": ["_ts"]},"options": {"expireAfterSeconds": 1000}}, {"key": {"keys": ["user_id", "user_address"]}, "options": {"unique": "true"}}]"',
                  args: { name: "idx" },
                },
              ],
            },
            {
              name: "throughput",
              description:
                "Manage throughput of MongoDB collection under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the MongoDB collection between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Collection name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Collection name",
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
                  description:
                    "Update the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Collection name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description:
                        "The throughput of MongoDB collection (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "database",
          description: "Manage Azure Cosmos DB MongoDB databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create an MongoDB database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of MongoDB database (RU/s). Default value is 400",
                  args: { name: "throughput" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the MongoDB database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB MongoDB database exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                "List the MongoDB databases under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
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
              name: "merge",
              description: "Merges the partitions of a mongodb database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the mongoDB database",
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
              name: "restore",
              description:
                "Restore a deleted mongodb database within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the database needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a MongoDB database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
              name: "throughput",
              description:
                "Manage throughput of MongoDB database under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the MongoDB database between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the MongoDB database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                  description:
                    "Update the throughput of the MongoDB database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput of MongoDB database (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "restorable-collection",
          description:
            "Manage different versions of mongodb collections that are restorable in a database of a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the mongodb collections that were created / modified / deleted in the given database and restorable account",
              options: [
                {
                  name: ["--database-rid", "-d"],
                  description: "Rid of the database",
                  args: { name: "database-rid" },
                  isRequired: true,
                },
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--end-time", "-e"],
                  description:
                    "End time of restorable MongoDB collections event feed",
                  args: { name: "end-time" },
                },
                {
                  name: ["--start-time", "-s"],
                  description:
                    "Start time of restorable MongoDB collections event feed",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "restorable-database",
          description:
            "Manage different versions of mongodb databases that are restorable in a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the mongodb databases that were created / modified / deleted in the given restorable account",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "restorable-resource",
          description:
            "Manage the databases and its collections that can be restored in the given account at the given timesamp and region",
          subcommands: [
            {
              name: "list",
              description:
                "List all the databases and its collections that can be restored in the given account at the given timesamp and region",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Azure Location of the account",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-location", "-r"],
                  description: "The region of the restore",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-timestamp", "-t"],
                  description: "The timestamp of the restore",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "role",
          description: "Manage Azure Cosmos DB Mongo role resources",
          subcommands: [
            {
              name: "definition",
              description: "Manage Azure Cosmos DB Mongo role definitions",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Mongo DB role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'Role Definition body with Id (Optional for create), Type (Default is CustomRole), DatabaseName, Privileges, Roles. You can enter it as a string or as a file, e.g., --body @mongo-role_definition-body-file.json or --body "{"Id": "be79875a-2cc4-40d5-8958-566017875b39","RoleName": "MyRWRole","Type": "CustomRole""DatabaseName": "MyDb","Privileges": [ {"Resource": {"Db": "MyDB","Collection": "MyCol"},"Actions": ["insert","find"]}],"Roles": [ {"Role": "myInheritedRole","Db": "MyTestDb"}]}"',
                      args: { name: "body" },
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
                    "Delete a CosmosDb MongoDb role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo Role Definition",
                      args: { name: "id" },
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB MongoDb role definition exists",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo Role Definition",
                      args: { name: "id" },
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
                    "List all MongoDb role definitions under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                  description:
                    "Show the properties of a MongoDb role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo Role Definition",
                      args: { name: "id" },
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
                  description:
                    "Update a MongoDb role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'Role Definition body with Id (Optional for create), Type (Default is CustomRole), DatabaseName, Privileges, Roles. You can enter it as a string or as a file, e.g., --body @mongo-role_definition-body-file.json or --body "{"Id": "be79875a-2cc4-40d5-8958-566017875b39","RoleName": "MyRWRole","Type": "CustomRole""DatabaseName": "MyDb","Privileges": [ {"Resource": {"Db": "MyDB","Collection": "MyCol"},"Actions": ["insert","find"]}],"Roles": [ {"Role": "myInheritedRole","Db": "MyTestDb"}]}"',
                      args: { name: "body" },
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
          ],
        },
        {
          name: "user",
          description: "Manage Azure Cosmos DB Mongo user resources",
          subcommands: [
            {
              name: "definition",
              description: "Manage Azure Cosmos DB Mongo user definitions",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a Mongo DB user definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'User Definition body with Id (Optional for create), UserName, Password, DatabaseName, CustomData, Mechanisms, Roles. You can enter it as a string or as a file, e.g., --body @mongo-user_definition-body-file.json or --body "{"Id": "be79875a-2cc4-40d5-8958-566017875b39","UserName": "MyUserName","Password": "MyPass","CustomData": "MyCustomData","Mechanisms": "SCRAM-SHA-256""DatabaseName": "MyDb","Roles": [ {"Role": "myReadRole","Db": "MyDb"}]}"',
                      args: { name: "body" },
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
                    "Delete a CosmosDb MongoDb user definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo User Definition",
                      args: { name: "id" },
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
                      name: ["--yes", "-y"],
                      description: "Do not prompt for confirmation",
                    },
                  ],
                },
                {
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB MongoDb user definition exists",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo User Definition",
                      args: { name: "id" },
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
                    "List all MongoDb user definitions under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                  description:
                    "Show the properties of a MongoDb user definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Mongo User Definition",
                      args: { name: "id" },
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
                  description:
                    "Update a MongoDb user definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'User Definition body with Id (Optional for create), UserName, Password, DatabaseName, CustomData, Mechanisms, Roles. You can enter it as a string or as a file, e.g., --body @mongo-user_definition-body-file.json or --body "{"Id": "be79875a-2cc4-40d5-8958-566017875b39","UserName": "MyUserName","Password": "MyPass","CustomData": "MyCustomData","Mechanisms": "SCRAM-SHA-256""DatabaseName": "MyDb","Roles": [ {"Role": "myReadRole","Db": "MyDb"}]}"',
                      args: { name: "body" },
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
          ],
        },
      ],
    },
    {
      name: "network-rule",
      description: "Manage Azure Cosmos DB network rules",
      subcommands: [
        {
          name: "add",
          description:
            "Adds a virtual network rule to an existing Cosmos DB database account",
          options: [
            {
              name: "--subnet",
              description: "Name or ID of the subnet",
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
              name: [
                "--ignore-missing-vnet-service-endpoint",
                "--ignore-missing-endpoint",
              ],
              description:
                "Create firewall rule before the virtual network has vnet service endpoint enabled",
            },
            {
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
              name: ["--virtual-network", "--vnet-name"],
              description:
                "The name of the VNET, which must be provided in conjunction with the name of the subnet",
              args: { name: "virtual-network" },
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the virtual network accounts associated with a Cosmos DB account",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
            "Remove a virtual network rule from an existing Cosmos DB database account",
          options: [
            {
              name: "--subnet",
              description: "Name or ID of the subnet",
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
              name: ["--name", "-n"],
              description: "Name of the Cosmos DB database account",
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
              name: ["--virtual-network", "--vnet-name"],
              description:
                "The name of the VNET, which must be provided in conjunction with the name of the subnet",
              args: { name: "virtual-network" },
            },
          ],
        },
      ],
    },
    {
      name: "postgres",
      description: "Manage Azure Cosmos DB for PostgreSQL resources",
      subcommands: [
        {
          name: "check-name-availability",
          description:
            "Checks availability of a cluster name. Cluster names should be globally unique; at least 3 characters and at most 40 characters long; they must only contain lowercase letters, numbers, and hyphens; and must not start or end with a hyphen",
          options: [
            {
              name: "--name",
              description: "Cluster name to verify",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--type",
              description: "Resource type used for verification",
              args: {
                name: "type",
                suggestions: ["Microsoft.DBforPostgreSQL/serverGroupsv2"],
              },
              isRequired: true,
            },
          ],
        },
        {
          name: "cluster",
          description: "Manage Azure Cosmos DB for PostgreSQL clusters",
          subcommands: [
            {
              name: "create",
              description: "Create a new cluster with nodes",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                  name: ["--administrator-login-password", "--login-password"],
                  description:
                    "The password of the administrator login. Required for creation. If value is blank it's asked from the tty",
                  args: { name: "administrator-login-password" },
                },
                {
                  name: "--citus-version",
                  description:
                    "The Citus extension version on all cluster servers",
                  args: { name: "citus-version" },
                },
                {
                  name: [
                    "--coordinator-enable-public-ip-access",
                    "--coord-public-ip-access",
                  ],
                  description: "If public access is enabled on coordinator",
                  args: {
                    name: "coordinator-enable-public-ip-access",
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
                    "--coordinator-server-edition",
                    "--coord-server-edition",
                  ],
                  description:
                    "The edition of a coordinator server (default: GeneralPurpose). Required for creation",
                  args: { name: "coordinator-server-edition" },
                },
                {
                  name: [
                    "--coordinator-storage-quota-in-mb",
                    "--coordinator-storage",
                  ],
                  description:
                    "The storage of a server in MB. Required for creation. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "coordinator-storage-quota-in-mb" },
                },
                {
                  name: "--coordinator-v-cores",
                  description:
                    "The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "coordinator-v-cores" },
                },
                {
                  name: "--enable-ha",
                  description:
                    "If high availability (HA) is enabled or not for the cluster",
                  args: {
                    name: "enable-ha",
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
                    "--enable-shards-on-coordinator",
                    "--enable-shards-on-coord",
                  ],
                  description:
                    "If shards on coordinator is enabled or not for the cluster",
                  args: {
                    name: "enable-shards-on-coordinator",
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
                    "The geo-location where the resource lives When not specified, the location of the resource group will be used",
                  args: { name: "location" },
                },
                {
                  name: "--maintenance-window",
                  description:
                    'Maintenance window of a cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "maintenance-window" },
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
                  name: "--node-count",
                  description:
                    "Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1. Required for creation",
                  args: { name: "node-count" },
                },
                {
                  name: [
                    "--node-enable-public-ip-access",
                    "--node-public-ip-access",
                  ],
                  description: "If public access is enabled on worker nodes",
                  args: {
                    name: "node-enable-public-ip-access",
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
                  name: "--node-server-edition",
                  description:
                    "The edition of a node server (default: MemoryOptimized)",
                  args: { name: "node-server-edition" },
                },
                {
                  name: ["--node-storage-quota-in-mb", "--node-storage"],
                  description:
                    "The storage in MB on each worker node. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "node-storage-quota-in-mb" },
                },
                {
                  name: "--node-v-cores",
                  description:
                    "The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "node-v-cores" },
                },
                {
                  name: "--point-in-time-utc",
                  description:
                    "Date and time in UTC (ISO8601 format) for cluster restore",
                  args: { name: "point-in-time-utc" },
                },
                {
                  name: "--postgresql-version",
                  description:
                    "The major PostgreSQL version on all cluster servers",
                  args: { name: "postgresql-version" },
                },
                {
                  name: "--preferred-primary-zone",
                  description:
                    "Preferred primary availability zone (AZ) for all cluster servers",
                  args: { name: "preferred-primary-zone" },
                },
                {
                  name: "--source-location",
                  description:
                    "The Azure region of source cluster for read replica clusters",
                  args: { name: "source-location" },
                },
                {
                  name: "--source-resource-id",
                  description:
                    "The resource id of source cluster for read replica clusters",
                  args: { name: "source-resource-id" },
                },
                {
                  name: "--tags",
                  description:
                    'Resource tags. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "tags" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete a cluster together with nodes in it",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                "List all clusters in a subscription or a resource group",
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
              name: "promote",
              description:
                "Promotes read replica cluster to an independent read-write cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "restart",
              description: "Restarts all nodes in the cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "show",
              description:
                "Get information about a cluster such as compute and storage configuration and cluster lifecycle metadata such as cluster creation date and time",
              options: [
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "start",
              description: "Starts stopped compute on all cluster nodes",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "stop",
              description: "Stops compute on all cluster nodes",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "update",
              description:
                "Update an existing cluster. The request body can contain one or several properties from the cluster definition",
              options: [
                {
                  name: ["--administrator-login-password", "--login-password"],
                  description:
                    "The password of the administrator login. Required for creation. If value is blank it's asked from the tty",
                  args: { name: "administrator-login-password" },
                },
                {
                  name: "--citus-version",
                  description:
                    "The Citus extension version on all cluster servers",
                  args: { name: "citus-version" },
                },
                {
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: [
                    "--coordinator-enable-public-ip-access",
                    "--coord-public-ip-access",
                  ],
                  description: "If public access is enabled on coordinator",
                  args: {
                    name: "coordinator-enable-public-ip-access",
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
                    "--coordinator-server-edition",
                    "--coord-server-edition",
                  ],
                  description:
                    "The edition of a coordinator server (default: GeneralPurpose). Required for creation",
                  args: { name: "coordinator-server-edition" },
                },
                {
                  name: [
                    "--coordinator-storage-quota-in-mb",
                    "--coordinator-storage",
                  ],
                  description:
                    "The storage of a server in MB. Required for creation. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "coordinator-storage-quota-in-mb" },
                },
                {
                  name: "--coordinator-v-cores",
                  description:
                    "The vCores count of a server (max: 96). Required for creation. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "coordinator-v-cores" },
                },
                {
                  name: "--enable-ha",
                  description:
                    "If high availability (HA) is enabled or not for the cluster",
                  args: {
                    name: "enable-ha",
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
                    "--enable-shards-on-coordinator",
                    "--enable-shards-on-coord",
                  ],
                  description:
                    "If shards on coordinator is enabled or not for the cluster",
                  args: {
                    name: "enable-shards-on-coordinator",
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
                  name: "--maintenance-window",
                  description:
                    'Maintenance window of a cluster. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
                  args: { name: "maintenance-window" },
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
                  name: "--node-count",
                  description:
                    "Worker node count of the cluster. When node count is 0, it represents a single node configuration with the ability to create distributed tables on that node. 2 or more worker nodes represent multi-node configuration. Node count value cannot be 1",
                  args: { name: "node-count" },
                },
                {
                  name: "--node-server-edition",
                  description:
                    "The edition of a node server (default: MemoryOptimized)",
                  args: { name: "node-server-edition" },
                },
                {
                  name: ["--node-storage-quota-in-mb", "--node-storage"],
                  description:
                    "The storage in MB on each worker node. See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "node-storage-quota-in-mb" },
                },
                {
                  name: "--node-v-cores",
                  description:
                    "The compute in vCores on each worker node (max: 104). See https://learn.microsoft.com/rest/api/postgresqlhsc/#values for more information",
                  args: { name: "node-v-cores" },
                },
                {
                  name: "--postgresql-version",
                  description:
                    "The major PostgreSQL version on all cluster servers",
                  args: { name: "postgresql-version" },
                },
                {
                  name: "--preferred-primary-zone",
                  description:
                    "Preferred primary availability zone (AZ) for all cluster servers",
                  args: { name: "preferred-primary-zone" },
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
                    'Application-specific metadata in the form of key-value pairs. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
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
                  name: ["--cluster-name", "--name", "-n"],
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              name: "server",
              description:
                "Manage Azure Cosmos DB for PostgreSQL cluster servers",
              subcommands: [
                {
                  name: "list",
                  description: "List nodes of a cluster",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
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
                  description: "Get information about a node in cluster",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: "--ids",
                      description:
                        "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                      args: { name: "ids" },
                    },
                    {
                      name: ["--server-name", "--name", "-n"],
                      description: "The name of the server",
                      args: { name: "server-name" },
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
          name: "configuration",
          description: "Manage Azure Cosmos DB for PostgreSQL configurations",
          subcommands: [
            {
              name: "list",
              description: "List all the configurations of a cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                "Get information of a configuration for coordinator and nodes",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: ["--configuration-name", "--name", "-n"],
                  description: "The name of the cluster configuration",
                  args: { name: "configuration-name" },
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
              name: "coordinator",
              description:
                "Manage Azure Cosmos DB for PostgreSQL coordinator configurations",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get information of a configuration for coordinator",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
                  description:
                    "Updates configuration of coordinator in a cluster",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
                      name: "--value",
                      description: "Value of the configuration",
                      args: { name: "value" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
              name: "node",
              description:
                "Manage Azure Cosmos DB for PostgreSQL node configurations",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Get information of a configuration for worker nodes",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
                  description:
                    "Updates configuration of worker nodes in a cluster",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
                      name: "--value",
                      description: "Value of the configuration",
                      args: { name: "value" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition is met",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
                    },
                    {
                      name: ["--configuration-name", "--name", "-n"],
                      description: "The name of the cluster configuration",
                      args: { name: "configuration-name" },
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
              name: "server",
              description:
                "Manage Azure Cosmos DB for PostgreSQL server configurations",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List all the configurations of a server in cluster",
                  options: [
                    {
                      name: "--cluster-name",
                      description: "The name of the cluster",
                      args: { name: "cluster-name" },
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
                      name: "--server-name",
                      description: "The name of the server",
                      args: { name: "server-name" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "firewall-rule",
          description: "Manage Azure Cosmos DB for PostgreSQL firewall rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new cluster firewall rule or updates an existing cluster firewall rule",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the cluster firewall rule. Must be IPv4 format",
                  args: { name: "end-ip-address" },
                  isRequired: true,
                },
                {
                  name: ["--firewall-rule-name", "--name", "-n"],
                  description: "The name of the cluster firewall rule",
                  args: { name: "firewall-rule-name" },
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
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the cluster firewall rule. Must be IPv4 format",
                  args: { name: "start-ip-address" },
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
              ],
            },
            {
              name: "delete",
              description: "Delete a cluster firewall rule",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: ["--firewall-rule-name", "--name", "-n"],
                  description: "The name of the cluster firewall rule",
                  args: { name: "firewall-rule-name" },
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
              description: "List all the firewall rules on cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              description: "Get information about a cluster firewall rule",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: ["--firewall-rule-name", "--name", "-n"],
                  description: "The name of the cluster firewall rule",
                  args: { name: "firewall-rule-name" },
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
              description: "Update an existing cluster firewall rule",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--end-ip-address",
                  description:
                    "The end IP address of the cluster firewall rule. Must be IPv4 format",
                  args: { name: "end-ip-address" },
                },
                {
                  name: ["--firewall-rule-name", "--name", "-n"],
                  description: "The name of the cluster firewall rule",
                  args: { name: "firewall-rule-name" },
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
                  name: "--start-ip-address",
                  description:
                    "The start IP address of the cluster firewall rule. Must be IPv4 format",
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
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                  name: ["--firewall-rule-name", "--name", "-n"],
                  description: "The name of the cluster firewall rule",
                  args: { name: "firewall-rule-name" },
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
          name: "role",
          description: "Manage Azure Cosmos DB for PostgreSQL roles",
          subcommands: [
            {
              name: "create",
              description: "Create a new role or updates an existing role",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                  isRequired: true,
                },
                {
                  name: ["--role-name", "--name", "-n"],
                  description: "The name of the cluster role",
                  args: { name: "role-name" },
                  isRequired: true,
                },
                {
                  name: "--password",
                  description:
                    "The password of the cluster role. If value is blank it's asked from the tty",
                  args: { name: "password" },
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
              ],
            },
            {
              name: "delete",
              description: "Delete a cluster role",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--role-name", "--name", "-n"],
                  description: "The name of the cluster role",
                  args: { name: "role-name" },
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
              description: "List all the roles in a given cluster",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
              description: "Get information about a cluster role",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--role-name", "--name", "-n"],
                  description: "The name of the cluster role",
                  args: { name: "role-name" },
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
              description: "Update an existing role",
              options: [
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                  name: ["--role-name", "--name", "-n"],
                  description: "The name of the cluster role",
                  args: { name: "role-name" },
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
                  name: "--password",
                  description:
                    "The password of the cluster role. If value is blank it's asked from the tty",
                  args: { name: "password" },
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
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition is met",
              options: [
                {
                  name: "--cluster-name",
                  description: "The name of the cluster",
                  args: { name: "cluster-name" },
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
                  name: ["--role-name", "--name", "-n"],
                  description: "The name of the cluster role",
                  args: { name: "role-name" },
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
      name: "private-endpoint-connection",
      description: "Manage Azure Cosmos DB private endpoint connections",
      subcommands: [
        {
          name: "approve",
          description:
            "Approve the specified private endpoint connection associated with Azure Cosmos DB",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Name of the Cosmos DB database account. Required if --connection-id is not specified",
              args: { name: "account-name" },
            },
            {
              name: "--description",
              description: "Comments for the approve operation",
              args: { name: "description" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted",
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
                "The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group name of specified Cosmos DB account. Required if --connection-id is not specified",
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
          name: "delete",
          description:
            "Delete the specified private endpoint connection associated with Azure Cosmos DB",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Name of the Cosmos DB database account. Required if --connection-id is not specified",
              args: { name: "account-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted",
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
                "The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group name of specified Cosmos DB account. Required if --connection-id is not specified",
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
          name: "reject",
          description:
            "Reject the specified private endpoint connection associated with Azure Cosmos DB",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Name of the Cosmos DB database account. Required if --connection-id is not specified",
              args: { name: "account-name" },
            },
            {
              name: "--description",
              description: "Comments for the reject operation",
              args: { name: "description" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted",
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
                "The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group name of specified Cosmos DB account. Required if --connection-id is not specified",
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
            "Show details of a private endpoint connection associated with Azure Cosmos DB",
          options: [
            {
              name: ["--account-name", "-a"],
              description:
                "Name of the Cosmos DB database account. Required if --connection-id is not specified",
              args: { name: "account-name" },
            },
            {
              name: "--id",
              description:
                "The ID of the private endpoint connection associated with Azure Cosmos DB. If specified --account-name --resource-group/-g and --name/-n, this should be omitted",
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
                "The name of the private endpoint connection associated with Azure Cosmos DB. Required if --connection-id is not specified",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "The resource group name of specified Cosmos DB account. Required if --connection-id is not specified",
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
      name: "private-link-resource",
      description: "Manage Azure Cosmos DB private link resources",
      subcommands: [
        {
          name: "list",
          description:
            "List the private link resources supported for Azure Cosmos DB",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
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
      ],
    },
    {
      name: "restorable-database-account",
      description: "Manage restorable Azure Cosmos DB accounts",
      subcommands: [
        {
          name: "list",
          description: "List all the database accounts that can be restored",
          options: [
            {
              name: ["--account-name", "-n"],
              description: "Name of the Account",
              args: { name: "account-name" },
            },
            {
              name: ["--location", "-l"],
              description: "Location",
              args: { name: "location" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the details of a database account that can be restored",
          options: [
            {
              name: ["--instance-id", "-i"],
              description: "InstanceId of the Account",
              args: { name: "instance-id" },
            },
            {
              name: ["--location", "-l"],
              description: "Location",
              args: { name: "location" },
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Commands to perform operations on Service",
      subcommands: [
        {
          name: "create",
          description: "Create a cosmosdb service resource",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cosmos DB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group-name", "-g"],
              description: "Name of the resource group of the database account",
              args: { name: "resource-group-name" },
              isRequired: true,
            },
            {
              name: ["--count", "-c"],
              description: "Instance Count",
              args: { name: "count" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--size",
              description:
                "Instance Size. Possible values are: Cosmos.D4s, Cosmos.D8s, Cosmos.D16s etc",
              args: { name: "size" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the given cosmosdb service resource",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cosmos DB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group-name", "-g"],
              description: "Name of the resource group of the database account",
              args: { name: "resource-group-name" },
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
          description: "List all cosmosdb service resource under an account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cosmos DB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group-name", "-g"],
              description: "Name of the resource group of the database account",
              args: { name: "resource-group-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Get cosmosdb service resource under an account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cosmos DB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group-name", "-g"],
              description: "Name of the resource group of the database account",
              args: { name: "resource-group-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a cosmosdb service resource",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the Cosmos DB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--count", "-c"],
              description: "Instance Count",
              args: { name: "count" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Service Name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group-name", "-g"],
              description: "Name of the resource group of the database account",
              args: { name: "resource-group-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--size",
              description:
                "Instance Size. Possible values are: Cosmos.D4s, Cosmos.D8s, Cosmos.D16s etc",
              args: { name: "size" },
            },
          ],
        },
      ],
    },
    {
      name: "sql",
      description: "Manage SQL resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "retrieve-latest-backup-time",
          description:
            "Retrieves latest restorable timestamp for the given sql container in given region",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--container-name", "-c"],
              description: "Name of the CosmosDB Sql container name",
              args: { name: "container-name" },
              isRequired: true,
            },
            {
              name: ["--database-name", "-d"],
              description: "Name of the CosmosDB Sql database name",
              args: { name: "database-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the account",
              args: { name: "location" },
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
          name: "container",
          description: "Manage Azure Cosmos DB SQL containers",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL container under an Azure Cosmos DB SQL database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
                  args: { name: "name" },
                  isRequired: true,
                },
                {
                  name: ["--partition-key-path", "-p"],
                  description: "Partition Key Path, e.g., '/address/zipcode'",
                  args: { name: "partition-key-path" },
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
                  name: ["--analytical-storage-ttl", "-t"],
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--cep",
                  description:
                    'Client Encryption Policy, you can enter it as a string or as a file, e.g., --cep @policy-file.json or --cep "{"includedPaths": [{"path": "/path1","clientEncryptionKeyId": "key1","encryptionAlgorithm": "AEAD_AES_256_CBC_HMAC_SHA256","encryptionType": "Deterministic"}],"policyFormatVersion": 2}"',
                  args: { name: "cep" },
                },
                {
                  name: ["--conflict-resolution-policy", "-c"],
                  description:
                    'Conflict Resolution Policy, you can enter it as a string or as a file, e.g., --conflict-resolution-policy @policy-file.json or --conflict-resolution-policy "{"mode": "lastWriterWins", "conflictResolutionPath": "/path"}"',
                  args: { name: "conflict-resolution-policy" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\\"_etag\\"/?"}]}". "indexingMode": "consistent", "automatic": true, "includedPaths": [ { "path": "/*" } ], "excludedPaths": [ { "path": "/\\"_etag\\"/?" } ] }',
                  args: { name: "idx" },
                },
                {
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--partition-key-version",
                  description: "The version of partition key",
                  args: { name: "partition-key-version" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of SQL container (RU/s). Default value is 400. Omit this parameter if the database has shared throughput unless the container should have dedicated throughput",
                  args: { name: "throughput" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
                {
                  name: ["--unique-key-policy", "-u"],
                  description:
                    'Unique Key Policy, you can enter it as a string or as a file, e.g., --unique-key-policy @policy-file.json or --unique-key-policy "{"uniqueKeys": [{"paths": ["/path/to/key1"]}, {"paths": ["/path/to/key2"]}]}"',
                  args: { name: "unique-key-policy" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the SQL container under an Azure Cosmos DB SQL database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB SQL container exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
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
                "List the SQL containers under an Azure Cosmos DB SQL database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
              name: "merge",
              description: "Merges the partitions of a sql container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB collection",
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
              name: "redistribute-partition-throughput",
              description:
                "Redistributes the partition throughput of a sql container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB collection",
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
                  name: "--evenly-distribute",
                  description:
                    "Switch to distribute throughput equally among all physical partitions",
                },
                {
                  name: "--source-partition-info",
                  description:
                    "Space separated source physical partition ids eg: 1 2",
                  args: { name: "source-partition-info" },
                },
                {
                  name: "--target-partition-info",
                  description:
                    "Information about desired target physical partition throughput eg: 0=1200 1=1200",
                  args: { name: "target-partition-info" },
                },
              ],
            },
            {
              name: "restore",
              description:
                "Restore a deleted sql container within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the container needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "retrieve-partition-throughput",
              description:
                "Retrieve  the partition throughput of a sql container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Name of the CosmosDB database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB container",
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
                  name: "--all-partitions",
                  description:
                    "Switch to retrieve throughput for all physical partitions",
                },
                {
                  name: ["--physical-partition-ids", "-p"],
                  description: "Space separated list of physical partition ids",
                  args: { name: "physical-partition-ids" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a SQL container under an Azure Cosmos DB SQL database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
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
              description:
                "Update an SQL container under an Azure Cosmos DB SQL database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Container name",
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
                  name: ["--analytical-storage-ttl", "-t"],
                  description:
                    "Analytical TTL, when analytical storage is enabled",
                  args: { name: "analytical-storage-ttl" },
                },
                {
                  name: "--idx",
                  description:
                    'Indexing Policy, you can enter it as a string or as a file, e.g., --idx @policy-file.json or --idx "{"indexingMode": "consistent", "automatic": true, "includedPaths": [{"path": "/*"}], "excludedPaths": [{ "path": "/headquarters/employees/?"}, { "path": "/\\"_etag\\"/?"}]}"',
                  args: { name: "idx" },
                },
                {
                  name: "--ttl",
                  description:
                    'Default TTL. If the value is missing or set to "-1", items don’t expire. If the value is set to "n", items will expire "n" seconds after last modified time',
                  args: { name: "ttl" },
                },
              ],
            },
            {
              name: "throughput",
              description:
                "Manage throughput of SQL container under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the SQL container between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Container name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the SQL container under an Azure Cosmos DB SQL database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Container name",
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
                  description:
                    "Update the throughput of the SQL container under an Azure Cosmos DB SQL database",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--database-name", "-d"],
                      description: "Database name",
                      args: { name: "database-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Container name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput of SQL container (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "database",
          description: "Manage Azure Cosmos DB SQL databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description:
                    "The throughput of SQL database (RU/s). Default value is 400",
                  args: { name: "throughput" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the SQL database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB SQL database exists",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                "List the SQL databases under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
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
              name: "merge",
              description: "Merge the partitions of a sql database",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Name of the CosmosDB database account",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Name of the CosmosDB database name",
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
              name: "restore",
              description:
                "Restore a deleted sql database within the same account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
                  name: ["--restore-timestamp", "-t"],
                  description:
                    "The timestamp to which the database needs to be restored to",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the details of a SQL database under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Database name",
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
              name: "throughput",
              description:
                "Manage throughput of SQL database under an Azure Cosmos DB account",
              subcommands: [
                {
                  name: "migrate",
                  description:
                    "Migrate the throughput of the SQL database between autoscale and manually provisioned",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: ["--throughput-type", "-t"],
                      description: "The type of throughput to migrate to",
                      args: {
                        name: "throughput-type",
                        suggestions: ["autoscale", "manual"],
                      },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the SQL database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                  description:
                    "Update the throughput of the SQL database under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--name", "-n"],
                      description: "Database name",
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
                      name: "--max-throughput",
                      description:
                        "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                      args: { name: "max-throughput" },
                    },
                    {
                      name: "--throughput",
                      description: "The throughput of SQL database (RU/s)",
                      args: { name: "throughput" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "restorable-container",
          description:
            "Manage different versions of sql containers that are restorable in a database of a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the sql containers that were created / modified / deleted in the given database and restorable account",
              options: [
                {
                  name: ["--database-rid", "-d"],
                  description: "Rid of the database",
                  args: { name: "database-rid" },
                  isRequired: true,
                },
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--end-time", "-e"],
                  description:
                    "End time of restorable Sql container event feed",
                  args: { name: "end-time" },
                },
                {
                  name: ["--start-time", "-s"],
                  description:
                    "Start time of restorable Sql container event feed",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "restorable-database",
          description:
            "Manage different versions of sql databases that are restorable in a Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the sql databases that were created / modified / deleted in the given restorable account",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "restorable-resource",
          description:
            "Manage the databases and its containers that can be restored in the given account at the given timesamp and region",
          subcommands: [
            {
              name: "list",
              description:
                "List all the databases and its containers that can be restored in the given account at the given timesamp and region",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Azure Location of the account",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-location", "-r"],
                  description: "The region of the restore",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-timestamp", "-t"],
                  description: "The timestamp of the restore",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "role",
          description: "Manage Azure Cosmos DB SQL role resources",
          subcommands: [
            {
              name: "assignment",
              description: "Manage Azure Cosmos DB SQL role assignments",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a SQL role assignment under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--principal-id", "-p"],
                      description:
                        "AAD Object ID of the principal to which this Role Assignment is being granted",
                      args: { name: "principal-id" },
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
                      name: ["--scope", "-s"],
                      description:
                        "Data plane resource path at which this Role Assignment is being granted",
                      args: { name: "scope" },
                      isRequired: true,
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
                    },
                    {
                      name: ["--role-definition-id", "-d"],
                      description:
                        "Unique ID of the Role Definition that this Role Assignment refers to",
                      args: { name: "role-definition-id" },
                    },
                    {
                      name: ["--role-definition-name", "-n"],
                      description:
                        "Unique Name of the Role Definition that this Role Assignment refers to. Eg. 'Contoso Reader Role'",
                      args: { name: "role-definition-name" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a SQL role assignment under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
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
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB role assignment exists",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "list",
                  description:
                    "List all SQL role assignments under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                  description:
                    "Show the properties of a SQL role assignment under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "update",
                  description:
                    "Update a SQL role assignment under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
                      isRequired: true,
                    },
                    {
                      name: "--no-wait",
                      description:
                        "Do not wait for the long-running operation to finish",
                    },
                    {
                      name: ["--principal-id", "-p"],
                      description:
                        "AAD Object ID of the principal to which this Role Assignment is being granted",
                      args: { name: "principal-id" },
                    },
                    {
                      name: ["--role-definition-id", "-d"],
                      description:
                        "Unique ID of the Role Definition that this Role Assignment refers to",
                      args: { name: "role-definition-id" },
                    },
                    {
                      name: ["--role-definition-name", "-n"],
                      description:
                        "Unique Name of the Role Definition that this Role Assignment refers to. Eg. 'Contoso Reader Role'",
                      args: { name: "role-definition-name" },
                    },
                    {
                      name: ["--scope", "-s"],
                      description:
                        "Data plane resource path at which this Role Assignment is being granted",
                      args: { name: "scope" },
                    },
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Poll on a SQL role assignment until a specific condition is met",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                      name: ["--role-assignment-id", "-i"],
                      description:
                        "Optional for Create. Unique ID for the Role Assignment. If not provided, a new GUID will be used",
                      args: { name: "role-assignment-id" },
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
              name: "definition",
              description: "Manage Azure Cosmos DB SQL role definitions",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create a SQL role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'Role Definition body with Id (Optional for create), DataActions or Permissions, Type (Default is CustomRole), and AssignableScopes. You can enter it as a string or as a file, e.g., --body @rdbody-file.json or --body "{ "Id": "be79875a-2cc4-40d5-8958-566017875b39", "RoleName": "My Read Write Role", "Type": "CustomRole", "AssignableScopes": [ "/" ], "DataActions": [ "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/create", "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read" ]}"',
                      args: { name: "body" },
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
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete a SQL role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Role Definition",
                      args: { name: "id" },
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
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB role definition exists",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Role Definition",
                      args: { name: "id" },
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
                    "List all SQL role definitions under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
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
                  description:
                    "Show the properties of a SQL role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Role Definition",
                      args: { name: "id" },
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
                  description:
                    "Update a SQL role definition under an Azure Cosmos DB account",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--body", "-b"],
                      description:
                        'Role Definition body with Id (Optional for create), DataActions or Permissions, Type (Default is CustomRole), and AssignableScopes. You can enter it as a string or as a file, e.g., --body @rdbody-file.json or --body "{ "Id": "be79875a-2cc4-40d5-8958-566017875b39", "RoleName": "My Read Write Role", "Type": "CustomRole", "AssignableScopes": [ "/" ], "DataActions": [ "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/create", "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read" ]}"',
                      args: { name: "body" },
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
                  ],
                },
                {
                  name: "wait",
                  description:
                    "Poll on a SQL role definition until a specific condition is met",
                  options: [
                    {
                      name: ["--account-name", "-a"],
                      description: "Cosmosdb account name",
                      args: { name: "account-name" },
                      isRequired: true,
                    },
                    {
                      name: ["--id", "-i"],
                      description: "Unique ID for the Role Definition",
                      args: { name: "id" },
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
          ],
        },
        {
          name: "stored-procedure",
          description: "Manage Azure Cosmos DB SQL stored procedures",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL stored procedure under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--body", "-b"],
                  description:
                    "StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json",
                  args: { name: "body" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "StoredProcedure name",
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
              description:
                "Delete the SQL stored procedure under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "StoredProcedure name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the SQL stored procedures under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
                "Show the details of a SQL stored procedure under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "StoredProcedure name",
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
              description:
                "Creates or Updates an Azure Cosmos DB SQL stored procedure",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--body", "-b"],
                  description:
                    "StoredProcedure body, you can enter it as a string or as a file, e.g., --body @sprocbody-file.json",
                  args: { name: "body" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "StoredProcedure name",
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
          name: "trigger",
          description: "Manage Azure Cosmos DB SQL triggers",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL trigger under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--body", "-b"],
                  description:
                    "Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json",
                  args: { name: "body" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Trigger name",
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
                  name: "--operation",
                  description: "The operation of the trigger",
                  args: {
                    name: "operation",
                    suggestions: [
                      "All",
                      "Create",
                      "Delete",
                      "Replace",
                      "Update",
                    ],
                  },
                },
                {
                  name: ["--type", "-t"],
                  description: "Trigger type",
                  args: { name: "type", suggestions: ["Post", "Pre"] },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete the SQL trigger under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Trigger name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the SQL triggers under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
                "Show the details of a SQL trigger under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Trigger name",
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
              description: "Updates an Azure Cosmos DB SQL trigger",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Trigger name",
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
                  name: ["--body", "-b"],
                  description:
                    "Trigger body, you can enter it as a string or as a file, e.g., --body @triggerbody-file.json",
                  args: { name: "body" },
                },
                {
                  name: "--operation",
                  description: "The operation of the trigger",
                  args: {
                    name: "operation",
                    suggestions: [
                      "All",
                      "Create",
                      "Delete",
                      "Replace",
                      "Update",
                    ],
                  },
                },
                {
                  name: ["--type", "-t"],
                  description: "Trigger type",
                  args: { name: "type", suggestions: ["Post", "Pre"] },
                },
              ],
            },
          ],
        },
        {
          name: "user-defined-function",
          description: "Manage Azure Cosmos DB SQL user defined functions",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL user defined function under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--body", "-b"],
                  description:
                    "UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json",
                  args: { name: "body" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "UserDefinedFunction name",
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
              description:
                "Delete the SQL user defined function under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "UserDefinedFunction name",
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
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "list",
              description:
                "List the SQL user defined functions under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
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
                "Show the details of a SQL user defined function under an Azure Cosmos DB SQL container",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "UserDefinedFunction name",
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
              description:
                "Creates or Updates an Azure Cosmos DB SQL user defined function",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--body", "-b"],
                  description:
                    "UserDefinedFunction body, you can enter it as a string or as a file, e.g., --body @udfbody-file.json",
                  args: { name: "body" },
                  isRequired: true,
                },
                {
                  name: ["--container-name", "-c"],
                  description: "Container name",
                  args: { name: "container-name" },
                  isRequired: true,
                },
                {
                  name: ["--database-name", "-d"],
                  description: "Database name",
                  args: { name: "database-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "UserDefinedFunction name",
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
      ],
    },
    {
      name: "table",
      description: "Manage Table resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "create",
          description: "Create an Table under an Azure Cosmos DB account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Table name",
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
              name: "--max-throughput",
              description:
                "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
              args: { name: "max-throughput" },
            },
            {
              name: "--throughput",
              description:
                "The throughput of Table (RU/s). Default value is 400",
              args: { name: "throughput" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the Table under an Azure Cosmos DB account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Table name",
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
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "exists",
          description: "Checks if an Azure Cosmos DB table exists",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Table name",
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
          description: "List the Tables under an Azure Cosmos DB account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
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
          name: "restore",
          description: "Restore a deleted table within the same account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
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
              name: ["--restore-timestamp", "-t"],
              description:
                "The timestamp to which the Table needs to be restored to",
              args: { name: "restore-timestamp" },
              isRequired: true,
            },
            {
              name: ["--table-name", "-n"],
              description: "Name of the CosmosDB Table name",
              args: { name: "table-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "retrieve-latest-backup-time",
          description:
            "Retrieves latest restorable timestamp for the given table in given region",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Name of the CosmosDB database account",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--location", "-l"],
              description: "Location of the account",
              args: { name: "location" },
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
              name: ["--table-name", "-n"],
              description: "Name of the CosmosDB Table name",
              args: { name: "table-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Show the details of a Table under an Azure Cosmos DB account",
          options: [
            {
              name: ["--account-name", "-a"],
              description: "Cosmosdb account name",
              args: { name: "account-name" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Table name",
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
          name: "restorable-resource",
          description:
            "Manage the tables that can be restored in the given account at the given timestamp and region",
          subcommands: [
            {
              name: "list",
              description:
                "List all the tables that can be restored in the given account at the given timestamp and region",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Azure Location of the account",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-location", "-r"],
                  description: "The region of the restore",
                  args: { name: "restore-location" },
                  isRequired: true,
                },
                {
                  name: ["--restore-timestamp", "-t"],
                  description: "The timestamp of the restore",
                  args: { name: "restore-timestamp" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "restorable-table",
          description:
            "Manage different versions of tables that are restorable in Azure Cosmos DB account",
          subcommands: [
            {
              name: "list",
              description:
                "List all the versions of all the tables that were created / modified / deleted in the given restorable account",
              options: [
                {
                  name: ["--instance-id", "-i"],
                  description: "InstanceId of the Account",
                  args: { name: "instance-id" },
                  isRequired: true,
                },
                {
                  name: ["--location", "-l"],
                  description: "Location",
                  args: { name: "location" },
                  isRequired: true,
                },
                {
                  name: ["--end-time", "-e"],
                  description: "End time of restorable tables event feed",
                  args: { name: "end-time" },
                },
                {
                  name: ["--start-time", "-s"],
                  description: "Start time of restorable tables event feed",
                  args: { name: "start-time" },
                },
              ],
            },
          ],
        },
        {
          name: "throughput",
          description:
            "Manage throughput of Table under an Azure Cosmos DB account",
          subcommands: [
            {
              name: "migrate",
              description:
                "Migrate the throughput of the Table between autoscale and manually provisioned",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                  name: ["--throughput-type", "-t"],
                  description: "The type of throughput to migrate to",
                  args: {
                    name: "throughput-type",
                    suggestions: ["autoscale", "manual"],
                  },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the throughput of the Table under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
              description:
                "Update the throughput of the Table under an Azure Cosmos DB account",
              options: [
                {
                  name: ["--account-name", "-a"],
                  description: "Cosmosdb account name",
                  args: { name: "account-name" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description: "Table name",
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
                  name: "--max-throughput",
                  description:
                    "The maximum throughput resource can scale to (RU/s). Provided when the resource is autoscale enabled. The minimum value can be 4000 (RU/s)",
                  args: { name: "max-throughput" },
                },
                {
                  name: "--throughput",
                  description: "The throughput of Table (RU/s)",
                  args: { name: "throughput" },
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
