const completionSpec: Fig.Spec = {
  name: "sql",
  description: "Manage Azure SQL Databases and Data Warehouses",
  subcommands: [
    {
      name: "db",
      description: "Manage databases",
      subcommands: [
        {
          name: "audit-policy",
          description: "Manage a database's auditing policy",
          subcommands: [
            { name: "show", description: "Show database audit policy" },
            {
              name: "update",
              description: "Update a database's auditing policy",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the database's audit policy is met",
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
            },
            {
              name: "list",
              description:
                "Get the sensitivity classifications of a given database",
            },
            {
              name: "recommendation",
              description: "Manage sensitivity classification recommendations",
              subcommands: [
                {
                  name: "disable",
                  description:
                    "Disable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                },
                {
                  name: "enable",
                  description:
                    "Enable sensitivity recommendations for a given column (recommendations are enabled by default on all columns)",
                },
                {
                  name: "list",
                  description:
                    "List the recommended sensitivity classifications of a given database",
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the sensitivity classification of a given column",
            },
            {
              name: "update",
              description: "Update a columns's sensitivity classification",
            },
          ],
        },
        { name: "copy", description: "Create a copy of a database" },
        { name: "create", description: "Create a database" },
        { name: "delete", description: "Delete a database" },
        { name: "export", description: "Export a database to a bacpac" },
        {
          name: "import",
          description: "Imports a bacpac into an existing database",
        },
        {
          name: "ledger-digest-uploads",
          description: "Manage ledger digest upload settings",
          subcommands: [
            {
              name: "disable",
              description: "Disable uploading ledger digests",
            },
            {
              name: "enable",
              description:
                "Enable uploading ledger digests to an Azure Storage account or to Azure Confidential Ledger. If uploading ledger digests is already enabled, the cmdlet resets the digest storage endpoint to a new value",
            },
            {
              name: "show",
              description: "Show the current ledger digest settings",
            },
          ],
        },
        {
          name: "list",
          description: "List databases a server or elastic pool",
        },
        {
          name: "list-deleted",
          description: "Gets a list of restorable dropped databases",
        },
        {
          name: "list-editions",
          description:
            "Show database editions available for the currently active subscription",
        },
        { name: "list-usages", description: "Gets database usages" },
        {
          name: "ltr-backup",
          description: "Manage SQL database long term retention backups",
          subcommands: [
            {
              name: "delete",
              description: "Delete a long term retention backup",
            },
            {
              name: "list",
              description:
                "List the long term retention backups for a location, server or database",
            },
            {
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
            },
            {
              name: "show",
              description: "Get a long term retention backup for a database",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the database is met",
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
            },
            {
              name: "show",
              description: "Show the long term retention policy for a database",
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
            },
            {
              name: "list",
              description:
                "Gets a list of operations performed on the database",
            },
          ],
        },
        { name: "rename", description: "Rename a database" },
        {
          name: "replica",
          description: "Manage replication between databases",
          subcommands: [
            {
              name: "create",
              description:
                "Create a database as a readable secondary replica of an existing database",
            },
            {
              name: "delete-link",
              description:
                "Permanently stop data replication between two database replicas",
            },
            {
              name: "list-links",
              description:
                "List the replicas of a database and their replication status",
            },
            {
              name: "set-primary",
              description:
                "Set the primary replica database by failing over from the current primary replica database",
            },
          ],
        },
        {
          name: "restore",
          description: "Create a new database by restoring from a backup",
        },
        { name: "show", description: "Get the details for a database" },
        {
          name: "show-connection-string",
          description: "Generates a connection string to a database",
        },
        {
          name: "str-policy",
          description: "Manage SQL database short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention settings for a live database",
            },
            {
              name: "show",
              description:
                "Show the short term retention policy for a live database",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until the policy is set",
            },
          ],
        },
        {
          name: "tde",
          description: "Manage a database's transparent data encryption",
          subcommands: [
            {
              name: "list-activity",
              description: "Lists Transparent Data Encryption",
            },
            {
              name: "set",
              description:
                "Sets a database's transparent data encryption configuration",
            },
            {
              name: "show",
              description: "Shows a Transparent Data Encryption",
            },
          ],
        },
        {
          name: "threat-policy",
          description: "Manage a database's threat detection policies",
          subcommands: [
            { name: "show", description: "Gets a threat detection policy" },
            {
              name: "update",
              description: "Update a database's threat detection policy",
            },
          ],
        },
        { name: "update", description: "Update a database" },
      ],
    },
    {
      name: "down",
      description: "Delete the SQL server and its cached information",
    },
    {
      name: "dw",
      description: "Manage data warehouses",
      subcommands: [
        { name: "create", description: "Create a data warehouse" },
        { name: "delete", description: "Delete a data warehouse" },
        { name: "list", description: "List data warehouses for a server" },
        { name: "pause", description: "Pauses a datawarehouse" },
        { name: "resume", description: "Resumes a datawarehouse" },
        { name: "show", description: "Get the details for a data warehouse" },
        { name: "update", description: "Update a data warehouse" },
      ],
    },
    {
      name: "elastic-pool",
      description: "Manage elastic pools",
      subcommands: [
        { name: "create", description: "Create an elastic pool" },
        { name: "delete", description: "Deletes an elastic pool" },
        { name: "list", description: "Gets all elastic pools in a server" },
        {
          name: "list-dbs",
          description: "Gets a list of databases in an elastic pool",
        },
        {
          name: "list-editions",
          description:
            "List elastic pool editions available for the active subscription",
        },
        {
          name: "op",
          description: "Manage operations on an elastic pool",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the elastic pool",
            },
            {
              name: "list",
              description:
                "Gets a list of operations performed on the elastic pool",
            },
          ],
        },
        { name: "show", description: "Gets an elastic pool" },
        { name: "update", description: "Update an elastic pool" },
      ],
    },
    {
      name: "failover-group",
      description: "Manage SQL Failover Groups",
      subcommands: [
        { name: "create", description: "Creates a failover group" },
        { name: "delete", description: "Deletes a failover group" },
        { name: "list", description: "Lists the failover groups in a server" },
        {
          name: "set-primary",
          description:
            "Set the primary of the failover group by failing over all databases from the current primary server",
        },
        { name: "show", description: "Gets a failover group" },
        { name: "update", description: "Updates the failover group" },
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
        },
        { name: "delete", description: "Deletes a failover group" },
        {
          name: "set-primary",
          description:
            "Set the primary of the instance failover group by failing over all databases from the current primary managed instance",
        },
        { name: "show", description: "Gets a failover group" },
        { name: "update", description: "Updates the instance failover group" },
      ],
    },
    {
      name: "instance-pool",
      description: "Manage instance pools",
      subcommands: [
        { name: "create", description: "Create an instance pool" },
        { name: "delete", description: "Delete an instance pool" },
        { name: "list", description: "List available instance pools" },
        { name: "show", description: "Get the details for an instance pool" },
        { name: "update", description: "Update an instance pool" },
        {
          name: "wait",
          description: "Wait for an instance pool to reach a desired state",
        },
      ],
    },
    {
      name: "list-usages",
      description: "Gets all subscription usage metrics in a given location",
    },
    {
      name: "mi",
      description: "Manage SQL managed instances",
      subcommands: [
        {
          name: "ad-admin",
          description:
            "Manage a managed instance's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Creates a new managed instance Active Directory administrator",
            },
            {
              name: "delete",
              description:
                "Deletes an existing managed instance Active Directory Administrator",
            },
            {
              name: "list",
              description:
                "Returns a list of managed instance Active Directory Administrators",
            },
            {
              name: "update",
              description:
                "Updates an existing managed instance Active Directory administrator",
            },
          ],
        },
        {
          name: "ad-only-auth",
          description:
            "Manage a Managed Instance's Azure Active Directly only settings",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directly only Authentication for this Managed Instance",
            },
            {
              name: "enable",
              description:
                "Enable Azure Active Directly only Authentication for this Managed Instance",
            },
            {
              name: "get",
              description:
                "Get a specific Azure Active Directly only Authentication property",
            },
          ],
        },
        { name: "create", description: "Create a managed instance" },
        { name: "delete", description: "Delete a managed instance" },
        { name: "failover", description: "Failover a managed instance" },
        {
          name: "key",
          description: "Manage a SQL Instance's keys",
          subcommands: [
            { name: "create", description: "Creates a SQL Instance key" },
            { name: "delete", description: "Deletes a SQL Instance key" },
            {
              name: "list",
              description: "Gets a list of managed instance keys",
            },
            { name: "show", description: "Shows a SQL Instance key" },
          ],
        },
        { name: "list", description: "List available managed instances" },
        {
          name: "op",
          description: "Manage operations on a managed instance",
          subcommands: [
            {
              name: "cancel",
              description:
                "Cancels the asynchronous operation on the managed instance",
            },
            {
              name: "list",
              description:
                "Gets a list of operations performed on the managed instance",
            },
            {
              name: "show",
              description: "Gets a management operation on a managed instance",
            },
          ],
        },
        { name: "show", description: "Get the details for a managed instance" },
        {
          name: "tde-key",
          description: "Manage a SQL Instance's encryption protector",
          subcommands: [
            {
              name: "set",
              description: "Sets the SQL Instance's encryption protector",
            },
            {
              name: "show",
              description: "Shows a server encryption protector",
            },
          ],
        },
        { name: "update", description: "Update a managed instance" },
      ],
    },
    {
      name: "mi-arc",
      description: "Manage Azure Arc-enabled SQL managed instances",
      subcommands: [
        {
          name: "config",
          description: "Configuration commands",
          subcommands: [
            {
              name: "add",
              description: "Add a value for a json path in a config file",
            },
            {
              name: "init",
              description:
                "Initialize the CRD and specification files for a SQL managed instance",
            },
            {
              name: "patch",
              description: "Patch a config file based on a json patch file",
            },
            {
              name: "remove",
              description: "Remove a value for a json path in a config file",
            },
            {
              name: "replace",
              description: "Replace a value for a json path in a config file",
            },
          ],
        },
        { name: "create", description: "Create a SQL managed instance" },
        {
          name: "dag",
          description: "Create or Delete a Distributed Availability Group",
          subcommands: [
            {
              name: "create",
              description:
                "Create a distributed availability group custom resource",
            },
            {
              name: "delete",
              description:
                "Delete a distributed availability group custom resource on a sqlmi instance",
            },
            {
              name: "get",
              description:
                "Get a distributed availability group custom resource",
            },
          ],
        },
        { name: "delete", description: "Delete a SQL managed instance" },
        {
          name: "edit",
          description: "Edit the configuration of a SQL managed instance",
        },
        {
          name: "endpoint",
          description: "View and manage SQL endpoints",
          subcommands: [
            { name: "list", description: "List the SQL endpoints" },
          ],
        },
        {
          name: "get-mirroring-cert",
          description:
            "Retrieve certificate of availability group mirroring endpoint from sql mi and store in a file",
        },
        { name: "list", description: "List SQL managed instances" },
        {
          name: "show",
          description: "Show the details of a SQL managed instance",
        },
      ],
    },
    {
      name: "midb",
      description: "Manage SQL managed instance databases",
      subcommands: [
        { name: "create", description: "Create a managed database" },
        { name: "delete", description: "Delete a managed database" },
        {
          name: "list",
          description: "List managed databases on a managed instance",
        },
        {
          name: "list-deleted",
          description: "List restorable deleted managed databases",
        },
        {
          name: "log-replay",
          description:
            "SQL Managed Instance database Log Replay service commands",
          subcommands: [
            {
              name: "complete",
              description: "Complete Log Replay service on specified database",
            },
            { name: "show", description: "Get status of Log Replay service" },
            {
              name: "start",
              description: "Start Log Replay service on specified database",
            },
            { name: "stop", description: "Stop Log Replay service" },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
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
            },
            {
              name: "list",
              description:
                "List the long term retention backups for a location, instance or database",
            },
            {
              name: "restore",
              description:
                "Restore a long term retention backup to a new database",
            },
            {
              name: "show",
              description:
                "Get a long term retention backup for a managed database",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the managed database is met",
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
            },
            {
              name: "show",
              description:
                "Show the long term retention policy for a managed database",
            },
          ],
        },
        { name: "restore", description: "Restore a managed database" },
        {
          name: "short-term-retention-policy",
          description:
            "Manage SQL Managed Instance database backup short term retention policy",
          subcommands: [
            {
              name: "set",
              description:
                "Update short term retention for automated backups on a single database",
            },
            {
              name: "show",
              description:
                "Show short term retention for automated backups on a single database",
            },
          ],
        },
        { name: "show", description: "Get the details for a managed database" },
      ],
    },
    {
      name: "server",
      description: "Manage SQL servers",
      subcommands: [
        {
          name: "ad-admin",
          description: "Manage a server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description: "Create a new server Active Directory administrator",
            },
            {
              name: "delete",
              description:
                "Deletes the Azure Active Directory administrator with the given name",
            },
            {
              name: "list",
              description:
                "Gets a list of Azure Active Directory administrators in a server",
            },
            {
              name: "update",
              description:
                "Update an existing server Active Directory administrator",
            },
          ],
        },
        {
          name: "ad-only-auth",
          description:
            "Manage Azure Active Directly only Authentication settings for this Server",
          subcommands: [
            {
              name: "disable",
              description:
                "Disable Azure Active Directly only Authentication for this Server",
            },
            {
              name: "enable",
              description:
                "Enable Azure Active Directly only Authentication for this Server",
            },
            {
              name: "get",
              description:
                "Get a specific Azure Active Directly only Authentication property",
            },
          ],
        },
        {
          name: "audit-policy",
          description: "Manage a server's auditing policy",
          subcommands: [
            { name: "show", description: "Show server audit policy" },
            {
              name: "update",
              description: "Update a server's auditing policy",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the server's audit policy is met",
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
            },
            {
              name: "update",
              description: "Updates a server's secure connection policy",
            },
          ],
        },
        { name: "create", description: "Create a server" },
        { name: "delete", description: "Deletes a server" },
        {
          name: "dns-alias",
          description: "Manage a server's DNS aliases",
          subcommands: [
            { name: "create", description: "Creates a server DNS alias" },
            {
              name: "delete",
              description: "Deletes the server DNS alias with the given name",
            },
            {
              name: "list",
              description: "Gets a list of server DNS aliases for a server",
            },
            {
              name: "set",
              description: "Sets a server to which DNS alias should point",
            },
            { name: "show", description: "Gets a server DNS alias" },
          ],
        },
        {
          name: "firewall-rule",
          description: "Manage a server's firewall rules",
          subcommands: [
            { name: "create", description: "Create a firewall rule" },
            { name: "delete", description: "Deletes a firewall rule" },
            { name: "list", description: "List a server's firewall rules" },
            {
              name: "show",
              description: "Shows the details for a firewall rule",
            },
            { name: "update", description: "Update a firewall rule" },
          ],
        },
        {
          name: "key",
          description: "Manage a server's keys",
          subcommands: [
            { name: "create", description: "Creates a server key" },
            { name: "delete", description: "Deletes a server key" },
            { name: "list", description: "Gets a list of server keys" },
            { name: "show", description: "Shows a server key" },
          ],
        },
        { name: "list", description: "List available servers" },
        { name: "list-usages", description: "Returns server usages" },
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
                },
                {
                  name: "update",
                  description:
                    "Update a server's Microsoft support operations auditing policy",
                },
                {
                  name: "wait",
                  description:
                    "Place the CLI in a waiting state until a condition of the server's Microsoft support operations audit policy is met",
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
            },
            {
              name: "delete",
              description: "Delete the outbound firewall rule",
            },
            {
              name: "list",
              description: "List a server's outbound firewall rules",
            },
            {
              name: "show",
              description: "Show the details for an outbound firewall rule",
            },
          ],
        },
        { name: "show", description: "Gets a server" },
        {
          name: "tde-key",
          description: "Manage a server's encryption protector",
          subcommands: [
            {
              name: "set",
              description: "Sets the server's encryption protector",
            },
            { name: "show", description: "Gets a server encryption protector" },
          ],
        },
        { name: "update", description: "Update a server" },
        {
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to an Azure SQL server",
            },
            {
              name: "delete",
              description:
                "Deletes the virtual network rule with the given name",
            },
            {
              name: "list",
              description: "Gets a list of virtual network rules in a server",
            },
            { name: "show", description: "Gets a virtual network rule" },
            { name: "update", description: "Update a virtual network rule" },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the SQL server is met",
        },
      ],
    },
    { name: "show-usage", description: "Gets a subscription usage metric" },
    {
      name: "stg",
      description: "Manage Server Trust Groups",
      subcommands: [
        { name: "create", description: "Create a Server Trust Group" },
        { name: "delete", description: "Delete a Server Trust Group" },
        { name: "list", description: "Retrieve a list of Server Trust Groups" },
        { name: "show", description: "Retrieve a Server Trust Group" },
      ],
    },
    {
      name: "up",
      description: "Set up an Azure Database for SQL server and configurations",
    },
    {
      name: "virtual-cluster",
      description: "Manage SQL virtual clusters",
      subcommands: [
        { name: "delete", description: "Delete a virtual cluster" },
        { name: "list", description: "List available virtual clusters" },
        { name: "show", description: "Get the details for a virtual cluster" },
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
        },
        { name: "create", description: "Creates a SQL virtual machine" },
        { name: "delete", description: "Deletes a SQL virtual machine" },
        {
          name: "group",
          description: "Manage SQL virtual machine groups",
          subcommands: [
            {
              name: "ag-listener",
              description: "Manage SQL availability group listeners",
              subcommands: [
                {
                  name: "create",
                  description: "Creates an availability group listener",
                },
                {
                  name: "delete",
                  description: "Deletes an availability group listener",
                },
                {
                  name: "list",
                  description:
                    "Lists all availability group listeners in a SQL virtual machine group",
                },
                {
                  name: "show",
                  description: "Gets an availability group listener",
                },
                {
                  name: "update",
                  description: "Updates an availability group listener",
                },
              ],
            },
            {
              name: "create",
              description: "Creates a SQL virtual machine group",
            },
            {
              name: "delete",
              description: "Deletes a SQL virtual machine group",
            },
            {
              name: "list",
              description:
                "Lists all SQL virtual machine groups in a resource group or subscription",
            },
            { name: "show", description: "Gets a SQL virtual machine group" },
            {
              name: "update",
              description:
                "Updates a SQL virtual machine group if there are not SQL virtual machines attached to the group",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists all SQL virtual machines in a resource group or subscription",
        },
        {
          name: "remove-from-group",
          description:
            "Remove SQL virtual machine from its current SQL virtual machine group",
        },
        { name: "show", description: "Gets a SQL virtual machine" },
        {
          name: "update",
          description: "Updates the properties of a SQL virtual machine",
        },
      ],
    },
  ],
};

export default completionSpec;
