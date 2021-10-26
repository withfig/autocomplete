const completionSpec: Fig.Spec = {
  name: "mysql",
  description: "Manage Azure Database for MySQL servers",
  subcommands: [
    {
      name: "db",
      description: "Manage MySQL databases on a server",
      subcommands: [
        { name: "create", description: "Create a MySQL database" },
        { name: "delete", description: "Delete a database" },
        { name: "list", description: "List the databases for a server" },
        { name: "show", description: "Show the details of a database" },
      ],
    },
    {
      name: "down",
      description: "Delete the MySQL server and its cached information",
    },
    {
      name: "flexible-server",
      description: "Manage Azure Database for MySQL Flexible Servers",
      subcommands: [
        { name: "connect", description: "Connect to a flexible server" },
        { name: "create", description: "Create a flexible server" },
        {
          name: "db",
          description: "Manage MySQL databases on a flexible server",
          subcommands: [
            {
              name: "create",
              description: "Create a MySQL database on a flexible server",
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
          description: "Enable and run github action workflow for MySQL server",
          subcommands: [
            {
              name: "run",
              description: "Run an existing workflow in your github repository",
            },
            {
              name: "setup",
              description:
                "Create github action workflow file for MySQL server",
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
              name: "stop-replication",
              description:
                "Stop replication to a read replica and make it a read/write server",
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
            "Show the connection strings for a MySQL flexible-server database",
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
      description: "Manage MySQL servers",
      subcommands: [
        {
          name: "ad-admin",
          description: "Manage a MySQL server's Active Directory administrator",
          subcommands: [
            {
              name: "create",
              description:
                "Create an Active Directory administrator for MySQL server",
            },
            {
              name: "delete",
              description:
                "Delete an Active Directory Administrator for MySQL server",
            },
            {
              name: "list",
              description:
                "List all Active Directory Administrators for MySQL server",
            },
            {
              name: "show",
              description:
                "Get Active Directory Administrator information for a MySQL server",
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of the MySQL server Active Directory Administrator is met",
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
          description: "Manage MySQL server keys",
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
          description: "Manage MySQL server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a MySQL server",
            },
            {
              name: "delete",
              description:
                "Delete the specified private endpoint connection associated with a MySQL server",
            },
            {
              name: "reject",
              description:
                "Reject the specified private endpoint connection associated with a MySQL server",
            },
            {
              name: "show",
              description:
                "Show details of a private endpoint connection associated with a MySQL server",
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
            "Show the connection strings for a MySQL server database",
        },
        { name: "start", description: "Start a stopped server" },
        { name: "stop", description: "Stop a running server" },
        { name: "update", description: "Update a server" },
        {
          name: "upgrade",
          description:
            "Upgrade mysql server to a higher version, like 5.6 to 5.7",
        },
        {
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to a MySQL server",
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
      description: "Show the connection strings for a MySQL server database",
    },
    {
      name: "up",
      description:
        "Set up an Azure Database for MySQL server and configurations",
    },
  ],
};

export default completionSpec;
