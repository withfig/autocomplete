const completionSpec: Fig.Spec = {
  name: "postgres",
  description: "Manage Azure Database for PostgreSQL servers",
  subcommands: [
    {
      name: "arc-server",
      description:
        "Manage Azure Arc enabled PostgreSQL Hyperscale server groups",
      subcommands: [
        {
          name: "create",
          description:
            "Create an Azure Arc enabled PostgreSQL Hyperscale server group",
        },
        {
          name: "delete",
          description:
            "Delete an Azure Arc enabled PostgreSQL Hyperscale server group",
        },
        {
          name: "edit",
          description:
            "Edit the configuration of an Azure Arc enabled PostgreSQL Hyperscale server group",
        },
        {
          name: "endpoint",
          description:
            "Manage Azure Arc enabled PostgreSQL Hyperscale server group endpoints",
          subcommands: [
            {
              name: "list",
              description:
                "List Azure Arc enabled PostgreSQL Hyperscale server group endpoints",
            },
          ],
        },
        {
          name: "list",
          description:
            "List Azure Arc enabled PostgreSQL Hyperscale server groups",
        },
        {
          name: "show",
          description:
            "Show the details of an Azure Arc enabled PostgreSQL Hyperscale server group",
        },
      ],
    },
    {
      name: "db",
      description: "Manage PostgreSQL databases on a server",
      subcommands: [
        { name: "create", description: "Create a PostgreSQL database" },
        { name: "delete", description: "Delete a database" },
        { name: "list", description: "List the databases for a server" },
        { name: "show", description: "Show the details of a database" },
      ],
    },
    {
      name: "down",
      description: "Delete the PostgreSQL server and its cached information",
    },
    {
      name: "flexible-server",
      description: "Manage Azure Database for PostgreSQL Flexible Servers",
      subcommands: [
        { name: "connect", description: "Connect to a flexible server" },
        { name: "create", description: "Create a flexible server" },
        {
          name: "db",
          description: "Manage PostgreSQL databases on a flexible server",
          subcommands: [
            {
              name: "create",
              description: "Create a PostgreSQL database on a flexible server",
            },
            {
              name: "delete",
              description: "Delete a database on a flexible server",
            },
            {
              name: "list",
              description: "List the databases for a flexible server",
            },
            { name: "show", description: "Show the details of a database" },
          ],
        },
        { name: "delete", description: "Delete a flexible server" },
        {
          name: "deploy",
          description:
            "Enable and run github action workflow for PostgreSQL server",
          subcommands: [
            {
              name: "run",
              description: "Run an existing workflow in your github repository",
            },
            {
              name: "setup",
              description:
                "Create github action workflow file for PostgreSQL server",
            },
          ],
        },
        { name: "execute", description: "Connect to a flexible server" },
        {
          name: "firewall-rule",
          description: "Manage firewall rules for a server",
          subcommands: [
            {
              name: "create",
              description: "Create a new firewall rule for a flexible server",
            },
            { name: "delete", description: "Delete a firewall rule" },
            {
              name: "list",
              description: "List all firewall rules for a flexible server",
            },
            { name: "show", description: "Get the details of a firewall rule" },
            { name: "update", description: "Update a firewall rule" },
          ],
        },
        { name: "list", description: "List available flexible servers" },
        {
          name: "list-skus",
          description: "Lists available sku's in the given region",
        },
        {
          name: "migration",
          description:
            "Manage migration workflows for PostgreSQL Flexible Servers",
          subcommands: [
            {
              name: "check-name-availability",
              description: "Checks if the provided migration-name can be used",
            },
            {
              name: "create",
              description:
                "Create a new migration workflow for a flexible server",
            },
            { name: "delete", description: "Delete a specific migration" },
            {
              name: "list",
              description: "List the migrations of a flexible server",
            },
            {
              name: "show",
              description: "Get the details of a specific migration",
            },
            { name: "update", description: "Update a specific migration" },
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
            },
            {
              name: "set",
              description: "Update the parameter of a flexible server",
            },
            {
              name: "show",
              description: 'Get the parameter for a flexible server."',
            },
          ],
        },
        { name: "restart", description: "Restart a flexible server" },
        {
          name: "restore",
          description: "Restore a flexible server from backup",
        },
        { name: "show", description: "Get the details of a flexible server" },
        {
          name: "show-connection-string",
          description:
            "Show the connection strings for a PostgreSQL flexible-server database",
        },
        { name: "start", description: "Start a flexible server" },
        { name: "stop", description: "Stop a flexible server" },
        { name: "update", description: "Update a flexible server" },
        {
          name: "wait",
          description:
            "Wait for the flexible server to satisfy certain conditions",
        },
      ],
    },
    {
      name: "server",
      description: "Manage PostgreSQL servers",
      subcommands: [
        {
          name: "ad-admin",
          description:
            "Manage a postgres server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Active Directory Administrator for PostgreSQL server",
            },
            {
              name: "delete",
              description:
                "Delete an Active Directory Administrator for PostgreSQL server",
            },
            {
              name: "list",
              description:
                "List all Active Directory Administrators for PostgreSQL server",
            },
            {
              name: "show",
              description:
                "Get Active Directory Administrator information for a PostgreSQL server",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the PostgreSQL server Active Directory Administrator is met",
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
            },
            {
              name: "set",
              description: "Update the configuration of a server",
            },
            {
              name: "show",
              description: 'Get the configuration for a server."',
            },
          ],
        },
        { name: "create", description: "Create a server" },
        { name: "delete", description: "Delete a server" },
        {
          name: "firewall-rule",
          description: "Manage firewall rules for a server",
          subcommands: [
            {
              name: "create",
              description: "Create a new firewall rule for a server",
            },
            { name: "delete", description: "Delete a firewall rule" },
            {
              name: "list",
              description: "List all firewall rules for a server",
            },
            { name: "show", description: "Get the details of a firewall rule" },
            { name: "update", description: "Update a firewall rule" },
          ],
        },
        { name: "georestore", description: "Geo-restore a server from backup" },
        {
          name: "key",
          description: "Manage PostgreSQL server keys",
          subcommands: [
            { name: "create", description: "Create server key" },
            { name: "delete", description: "Delete server key" },
            { name: "list", description: "Gets a list of Server keys" },
            { name: "show", description: "Show server key" },
          ],
        },
        { name: "list", description: "List available servers" },
        {
          name: "list-skus",
          description: "List available sku's in the given region",
        },
        {
          name: "private-endpoint-connection",
          description: "Manage PostgreSQL server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a PostgreSQL server",
            },
            {
              name: "delete",
              description:
                "Delete the specified private endpoint connection associated with a PostgreSQL server",
            },
            {
              name: "reject",
              description:
                "Reject the specified private endpoint connection associated with a PostgreSQL server",
            },
            {
              name: "show",
              description:
                "Show details of a private endpoint connection associated with a PostgreSQL server",
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
            },
            {
              name: "list",
              description: "List all read replicas for a given server",
            },
            {
              name: "stop",
              description:
                "Stop replication to a read replica and make it a read/write server",
            },
          ],
        },
        { name: "restart", description: "Restart a server" },
        { name: "restore", description: "Restore a server from backup" },
        { name: "show", description: "Get the details of a server" },
        {
          name: "show-connection-string",
          description:
            "Show the connection strings for a PostgreSQL server database",
        },
        { name: "update", description: "Update a server" },
        {
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to a PostgreSQL server",
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
          description: "Wait for server to satisfy certain conditions",
        },
      ],
    },
    {
      name: "server-logs",
      description: "Manage server logs",
      subcommands: [
        { name: "download", description: "Download log files" },
        { name: "list", description: "List log files for a server" },
      ],
    },
    {
      name: "show-connection-string",
      description:
        "Show the connection strings for a PostgreSQL server database",
    },
    {
      name: "up",
      description:
        "Set up an Azure Database for PostgreSQL server and configurations",
    },
  ],
};

export default completionSpec;
