const completionSpec: Fig.Spec = {
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
            },
            {
              name: "delete",
              description:
                "Delete the Cassandra keyspace under an Azure Cosmos DB account",
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Cassandra keyspace exists",
            },
            {
              name: "list",
              description:
                "List the Cassandra keyspaces under an Azure Cosmos DB account",
            },
            {
              name: "show",
              description:
                "Show the details of a Cassandra keyspace under an Azure Cosmos DB account",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Cassandra keyspace under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the Cassandra keyspace under an Azure Cosmos DB account",
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
            },
            {
              name: "delete",
              description:
                "Delete the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Cassandra table exists",
            },
            {
              name: "list",
              description:
                "List the Cassandra tables under an Azure Cosmos DB Cassandra keyspace",
            },
            {
              name: "show",
              description:
                "Show the details of a Cassandra table under an Azure Cosmos DB Cassandra keyspace",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the Cassandra table under an Azure Cosmos DB Cassandra keyspace",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Cassandra table under an Azure Cosmos DB Cassandra keyspace",
            },
          ],
        },
      ],
    },
    {
      name: "check-name-exists",
      description: "Checks if an Azure Cosmos DB account name exists",
    },
    {
      name: "collection",
      description: "Manage Azure Cosmos DB collections",
      subcommands: [
        {
          name: "create",
          description: "Creates an Azure Cosmos DB collection",
        },
        {
          name: "delete",
          description: "Deletes an Azure Cosmos DB collection",
        },
        {
          name: "exists",
          description:
            "Returns a boolean indicating whether the collection exists",
        },
        { name: "list", description: "Lists all Azure Cosmos DB collections" },
        {
          name: "show",
          description: "Shows an Azure Cosmos DB collection and its offer",
        },
        {
          name: "update",
          description: "Updates an Azure Cosmos DB collection",
        },
      ],
    },
    {
      name: "create",
      description: "Creates a new Azure Cosmos DB database account",
    },
    {
      name: "database",
      description: "Manage Azure Cosmos DB databases",
      subcommands: [
        { name: "create", description: "Creates an Azure Cosmos DB database" },
        { name: "delete", description: "Deletes an Azure Cosmos DB database" },
        {
          name: "exists",
          description:
            "Returns a boolean indicating whether the database exists",
        },
        { name: "list", description: "Lists all Azure Cosmos DB databases" },
        { name: "show", description: "Shows an Azure Cosmos DB database" },
      ],
    },
    {
      name: "delete",
      description: "Deletes an Azure Cosmos DB database account",
    },
    {
      name: "failover-priority-change",
      description:
        "Changes the failover priority for the Azure Cosmos DB database account",
    },
    {
      name: "graph",
      description: "Commands to perform operations on Graph resources",
      subcommands: [
        { name: "create", description: "Create a cosmosdb graph resource" },
        {
          name: "delete",
          description: "Delete the given cosmosdb graph resource",
        },
        {
          name: "exists",
          description: "Return if the given cosmosdb graph resource exist",
        },
        {
          name: "list",
          description: "List all cosmosdb graph resource under an account",
        },
        {
          name: "show",
          description:
            "Gets the Graph resource under an existing Azure Cosmos DB database account with the provided name",
        },
      ],
    },
    {
      name: "gremlin",
      description: "Manage Gremlin resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "database",
          description: "Manage Azure Cosmos DB Gremlin databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Gremlin database under an Azure Cosmos DB account",
            },
            {
              name: "delete",
              description:
                "Delete the Gremlin database under an Azure Cosmos DB account",
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB Gremlin database exists",
            },
            {
              name: "list",
              description:
                "List the Gremlin databases under an Azure Cosmos DB account",
            },
            {
              name: "show",
              description:
                "Show the details of a Gremlin database under an Azure Cosmos DB account",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Gremlin database under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the Gremlin database under an Azure Cosmos DB account",
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
            },
            {
              name: "delete",
              description:
                "Delete the Gremlin graph under an Azure Cosmos DB Gremlin database",
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB Gremlin graph exists",
            },
            {
              name: "list",
              description:
                "List the Gremlin graphs under an Azure Cosmos DB Gremlin database",
            },
            {
              name: "show",
              description:
                "Show the details of a Gremlin graph under an Azure Cosmos DB Gremlin database",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the Gremlin graph under an Azure Cosmos DB Gremlin database",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an Gremlin graph under an Azure Cosmos DB Gremlin database",
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
        },
        {
          name: "remove",
          description:
            "Remove SystemAssigned identity for a Azure Cosmos DB database account",
        },
        {
          name: "show",
          description:
            "Show the identities for a Azure Cosmos DB database account",
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
        },
        {
          name: "regenerate",
          description:
            "Regenerate an access key for a Azure Cosmos DB database account",
        },
      ],
    },
    { name: "list", description: "List Azure Cosmos DB database accounts" },
    {
      name: "list-connection-strings",
      description:
        "List the connection strings for a Azure Cosmos DB database account",
    },
    {
      name: "list-keys",
      description:
        "List the access keys for a Azure Cosmos DB database account",
    },
    {
      name: "list-read-only-keys",
      description:
        "List the read-only access keys for a Azure Cosmos DB database account",
    },
    {
      name: "mongodb",
      description: "Manage MongoDB resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "collection",
          description: "Manage Azure Cosmos DB MongoDB collections",
          subcommands: [
            {
              name: "create",
              description:
                "Create an MongoDB collection under an Azure Cosmos DB MongoDB database",
            },
            {
              name: "delete",
              description:
                "Delete the MongoDB collection under an Azure Cosmos DB MongoDB database",
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB MongoDB collection exists",
            },
            {
              name: "list",
              description:
                "List the MongoDB collections under an Azure Cosmos DB MongoDB database",
            },
            {
              name: "show",
              description:
                "Show the details of a MongoDB collection under an Azure Cosmos DB MongoDB database",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the MongoDB collection under an Azure Cosmos DB MongoDB database",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an MongoDB collection under an Azure Cosmos DB MongoDB database",
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
            },
            {
              name: "delete",
              description:
                "Delete the MongoDB database under an Azure Cosmos DB account",
            },
            {
              name: "exists",
              description:
                "Checks if an Azure Cosmos DB MongoDB database exists",
            },
            {
              name: "list",
              description:
                "List the MongoDB databases under an Azure Cosmos DB account",
            },
            {
              name: "show",
              description:
                "Show the details of a MongoDB database under an Azure Cosmos DB account",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the MongoDB database under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the MongoDB database under an Azure Cosmos DB account",
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
        },
        {
          name: "list",
          description:
            "Lists the virtual network accounts associated with a Cosmos DB account",
        },
        {
          name: "remove",
          description:
            "Adds a virtual network rule to an existing Cosmos DB database account",
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
        },
        {
          name: "delete",
          description:
            "Delete the specified private endpoint connection associated with Azure Cosmos DB",
        },
        {
          name: "reject",
          description:
            "Reject the specified private endpoint connection associated with Azure Cosmos DB",
        },
        {
          name: "show",
          description:
            "Show details of a private endpoint connection associated with Azure Cosmos DB",
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
        },
      ],
    },
    {
      name: "regenerate-key",
      description:
        "Regenerate an access key for a Azure Cosmos DB database account",
    },
    {
      name: "restorable-database-account",
      description: "Manage restorable Azure Cosmos DB accounts",
      subcommands: [
        {
          name: "list",
          description: "List all the database accounts that can be restored",
        },
        {
          name: "show",
          description:
            "Show the details of a database account that can be restored",
        },
      ],
    },
    {
      name: "restore",
      description:
        "Create a new Azure Cosmos DB database account by restoring from an existing database account",
    },
    {
      name: "service",
      description: "Commands to perform operations on Service",
      subcommands: [
        { name: "create", description: "Create a cosmosdb service resource" },
        {
          name: "delete",
          description: "Delete the given cosmosdb service resource",
        },
        {
          name: "list",
          description: "List all cosmosdb service resource under an account",
        },
        { name: "show", description: "Gets the status of service" },
        { name: "update", description: "Update a cosmosdb service resource" },
      ],
    },
    {
      name: "show",
      description: "Get the details of an Azure Cosmos DB database account",
    },
    {
      name: "sql",
      description: "Manage SQL resources of Azure Cosmos DB account",
      subcommands: [
        {
          name: "container",
          description: "Manage Azure Cosmos DB SQL containers",
          subcommands: [
            {
              name: "create",
              description:
                "Create an SQL container under an Azure Cosmos DB SQL database",
            },
            {
              name: "delete",
              description:
                "Delete the SQL container under an Azure Cosmos DB SQL database",
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB SQL container exists",
            },
            {
              name: "list",
              description:
                "List the SQL containers under an Azure Cosmos DB SQL database",
            },
            {
              name: "show",
              description:
                "Show the details of a SQL container under an Azure Cosmos DB SQL database",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the SQL container under an Azure Cosmos DB SQL database",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the SQL container under an Azure Cosmos DB SQL database",
                },
              ],
            },
            {
              name: "update",
              description:
                "Update an SQL container under an Azure Cosmos DB SQL database",
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
            },
            {
              name: "delete",
              description:
                "Delete the SQL database under an Azure Cosmos DB account",
            },
            {
              name: "exists",
              description: "Checks if an Azure Cosmos DB SQL database exists",
            },
            {
              name: "list",
              description:
                "List the SQL databases under an Azure Cosmos DB account",
            },
            {
              name: "show",
              description:
                "Show the details of a SQL database under an Azure Cosmos DB account",
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
                },
                {
                  name: "show",
                  description:
                    "Get the throughput of the SQL database under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update the throughput of the SQL database under an Azure Cosmos DB account",
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
            },
          ],
        },
        {
          name: "retrieve-latest-backup-time",
          description:
            "Retrieves latest restorable timestamp for the given sql container in given region",
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
                },
                {
                  name: "delete",
                  description:
                    "Delete a SQL role assignment under an Azure Cosmos DB account",
                },
                {
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB role assignment exists",
                },
                {
                  name: "list",
                  description:
                    "List all SQL role assignments under an Azure Cosmos DB account",
                },
                {
                  name: "show",
                  description:
                    "Show the properties of a SQL role assignment under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update a SQL role assignment under an Azure Cosmos DB account",
                },
                {
                  name: "wait",
                  description:
                    "Poll on a SQL role assignment until a specific condition is met",
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
                },
                {
                  name: "delete",
                  description:
                    "Delete a SQL role definition under an Azure Cosmos DB account",
                },
                {
                  name: "exists",
                  description:
                    "Check if an Azure Cosmos DB role definition exists",
                },
                {
                  name: "list",
                  description:
                    "List all SQL role definitions under an Azure Cosmos DB account",
                },
                {
                  name: "show",
                  description:
                    "Show the properties of a SQL role definition under an Azure Cosmos DB account",
                },
                {
                  name: "update",
                  description:
                    "Update a SQL role definition under an Azure Cosmos DB account",
                },
                {
                  name: "wait",
                  description:
                    "Poll on a SQL role definition until a specific condition is met",
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
            },
            {
              name: "delete",
              description:
                "Delete the SQL stored procedure under an Azure Cosmos DB SQL container",
            },
            {
              name: "list",
              description:
                "List the SQL stored procedures under an Azure Cosmos DB SQL container",
            },
            {
              name: "show",
              description:
                "Show the details of a SQL stored procedure under an Azure Cosmos DB SQL container",
            },
            {
              name: "update",
              description:
                "Creates or Updates an Azure Cosmos DB SQL stored procedure",
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
            },
            {
              name: "delete",
              description:
                "Delete the SQL trigger under an Azure Cosmos DB SQL container",
            },
            {
              name: "list",
              description:
                "List the SQL triggers under an Azure Cosmos DB SQL container",
            },
            {
              name: "show",
              description:
                "Show the details of a SQL trigger under an Azure Cosmos DB SQL container",
            },
            {
              name: "update",
              description: "Updates an Azure Cosmos DB SQL trigger",
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
            },
            {
              name: "delete",
              description:
                "Delete the SQL user defined function under an Azure Cosmos DB SQL container",
            },
            {
              name: "list",
              description:
                "List the SQL user defined functions under an Azure Cosmos DB SQL container",
            },
            {
              name: "show",
              description:
                "Show the details of a SQL user defined function under an Azure Cosmos DB SQL container",
            },
            {
              name: "update",
              description:
                "Creates or Updates an Azure Cosmos DB SQL user defined function",
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
        },
        {
          name: "delete",
          description: "Delete the Table under an Azure Cosmos DB account",
        },
        {
          name: "exists",
          description: "Checks if an Azure Cosmos DB table exists",
        },
        {
          name: "list",
          description: "List the Tables under an Azure Cosmos DB account",
        },
        {
          name: "show",
          description:
            "Show the details of a Table under an Azure Cosmos DB account",
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
            },
            {
              name: "show",
              description:
                "Get the throughput of the Table under an Azure Cosmos DB account",
            },
            {
              name: "update",
              description:
                "Update the throughput of the Table under an Azure Cosmos DB account",
            },
          ],
        },
      ],
    },
    {
      name: "update",
      description: "Update an Azure Cosmos DB database account",
    },
  ],
};

export default completionSpec;
