const completionSpec: Fig.Spec = {
  name: "mariadb",
  description: "Manage Azure Database for MariaDB servers",
  subcommands: [
    {
      name: "db",
      description: "Manage MariaDB databases on a server",
      subcommands: [
        { name: "create", description: "Create a MariaDB database" },
        { name: "delete", description: "Delete a database" },
        { name: "list", description: "List the databases for a server" },
        { name: "show", description: "Show the details of a database" },
      ],
    },
    {
      name: "server",
      description: "Manage MariaDB servers",
      subcommands: [
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
        { name: "list", description: "List available servers" },
        {
          name: "list-skus",
          description: "List available sku's in the given region",
        },
        {
          name: "private-endpoint-connection",
          description: "Manage MariaDB server private endpoint connections",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve the specified private endpoint connection associated with a MariaDB server",
            },
            {
              name: "delete",
              description:
                "Delete the specified private endpoint connection associated with a MariaDB server",
            },
            {
              name: "reject",
              description:
                "Reject the specified private endpoint connection associated with a MariaDB server",
            },
            {
              name: "show",
              description:
                "Show details of a private endpoint connection associated with a MariaDB server",
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
            "Show the connection strings for a MariaDB server database",
        },
        { name: "start", description: "Start a stopped server" },
        { name: "stop", description: "Stop a running server" },
        { name: "update", description: "Update a server" },
        {
          name: "vnet-rule",
          description: "Manage a server's virtual network rules",
          subcommands: [
            {
              name: "create",
              description:
                "Create a virtual network rule to allows access to a MariaDB server",
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
  ],
};

export default completionSpec;
