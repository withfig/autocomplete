const completionSpec: Fig.Spec = {
  name: "turso",
  description: "Turso CLI for managing Turso databases",
  options: [
    {
      name: ["-c", "--config-path"],
      description: "Path to the directory with config file",
      args: {
        name: "string",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Help for turso",
    },
    {
      name: ["-v", "--version"],
      description: "Version for turso",
    },
  ],
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with Turso",
      subcommands: [
        {
          name: "api-tokens",
          description: "Manage your API tokens",
          subcommands: [
            {
              name: "list",
              description: "List API tokens",
            },
            {
              name: "mint",
              description: "Mint an API token",
            },
            {
              name: "revoke",
              description: "Revoke an API token",
            },
          ],
        },
        {
          name: "login",
          description: "Login to the platform",
        },
        {
          name: "logout",
          description: "Log out currently logged in user",
        },
        {
          name: "signup",
          description: "Create a new Turso account",
        },
        {
          name: "token",
          description:
            "Shows the token used to authenticate you to Turso platform API",
        },
        {
          name: "whoami",
          description: "Show the currently logged in user",
        },
      ],
    },
    {
      name: "config",
      description: "Manage your CLI configuration",
      subcommands: [
        {
          name: "cache",
          description: "Manage your CLI cache",
          subcommands: [
            {
              name: "clear",
              description: "Clear the CLI local cache",
            },
          ],
        },
        {
          name: "path",
          description: "Get the path to the CLI configuration file",
        },
        {
          name: "set",
          description: "Set a configuration value",
          subcommands: [
            {
              name: "autoupdate",
              description: "Configure autoupdate behavior",
              args: {
                name: "on|off",
              },
            },
            {
              name: "token",
              description: "Configure the token used by turso",
              args: {
                name: "token",
              },
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage databases",
      subcommands: [
        {
          name: "config",
          description: "Manage db config",
          subcommands: [
            {
              name: "attach",
              description: "Manage attach config of a database",
            },
            {
              name: "delete-protection",
              description: "Manage delete-protection config of a database",
            },
          ],
        },
        {
          name: "create",
          description: "Create a database",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy a database",
          args: {
            name: "name",
          },
        },
        {
          name: "export",
          description: "Export a database snapshot from Turso to SQLite file",
          args: {
            name: "name",
          },
        },
        {
          name: "import",
          description: "Import a SQLite database file to Turso",
          args: {
            name: "file",
            description: "Path to SQLite database file",
            template: "filepaths",
          },
        },
        {
          name: "inspect",
          description: "Inspect database",
          args: {
            name: "name",
          },
        },
        {
          name: "list",
          description: "List databases",
        },
        {
          name: "locations",
          description: "List available database locations",
        },
        {
          name: "replicate",
          description: "Replicate a database",
          args: {
            name: "name",
          },
        },
        {
          name: "shell",
          description: "Start a SQL shell",
        },
        {
          name: "show",
          description: "Show information from a database",
          args: {
            name: "name",
          },
        },
        {
          name: "tokens",
          description: "Manage db tokens",
        },
        {
          name: "unarchive",
          description: "Unarchive a database",
        },
        {
          name: "update",
          description: "Updates the database to the latest turso version",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "dev",
      description: "Starts a local development server for Turso",
    },
    {
      name: "group",
      description: "Manage your database groups",
      subcommands: [
        {
          name: "config",
          description: "Manage group config",
          args: {
            name: "name",
          },
        },
        {
          name: "create",
          description: "Create a database group",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy a database group",
          args: {
            name: "name",
          },
        },
        {
          name: "list",
          description: "List databases groups",
        },
        {
          name: "locations",
          description: "Manage your database group locations",
        },
        {
          name: "show",
          description: "Show information about a group",
        },
        {
          name: "tokens",
          description: "Manage group tokens",
        },
        {
          name: "transfer",
          description: "Transfers the group to the specified organization",
          args: {
            name: "organization",
          },
        },
        {
          name: "unarchive",
          description: "Unarchive a database group",
          args: {
            name: "name",
          },
        },
        {
          name: "update",
          description: "Updates the group",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "org",
      description: "Manage your organizations",
      subcommands: [
        {
          name: "audit-logs",
          description: "Manage organization audit logs",
          subcommands: [
            {
              name: "list",
              description: "List organization audit logs",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new organization",
          args: {
            name: "name",
          },
        },
        {
          name: "db-transfer",
          description: "Transfers a database to another organization",
          args: {
            name: "name",
          },
        },
        {
          name: "destroy",
          description: "Destroy an organization",
          args: {
            name: "name",
          },
        },
        {
          name: "invites",
          description: "Manage your organization invites",
          subcommands: [
            {
              name: "create",
              description: "Invite an email to join the current organization",
            },
            {
              name: "list",
              description: "List invites in the current organization",
            },
            {
              name: "remove",
              description:
                "Remove a pending invite to an email to join the current organization",
            },
          ],
        },
        {
          name: "invoice",
          description: "Manage Invoices",
          subcommands: [
            {
              name: "configure",
              description: "Configure billing information added to invoices",
            },
            {
              name: "info",
              description: "Show billing information added to invoices",
            },
            {
              name: "list",
              description: "List invoices",
            },
          ],
        },
        {
          name: "list",
          description: "List your organizations",
        },
        {
          name: "members",
          description: "Manage your organization members",
          subcommands: [
            {
              name: "add",
              description: "Add a member to current organization",
              args: {
                name: "username",
              },
            },
            {
              name: "create",
              description: "Invite an email to join the current organization",
              args: {
                name: "email",
              },
            },
            {
              name: "list",
              description: "List members of current organization",
            },
            {
              name: "rm",
              description: "Remove a member from the current organization",
              args: {
                name: "username",
              },
            },
          ],
        },
        {
          name: "switch",
          description:
            "Switch to an organization as the context for your commands",
          args: {
            name: "organization",
          },
        },
      ],
    },
    {
      name: "plan",
      description: "Manage your organization plan",
      subcommands: [
        {
          name: "show",
          description: "Show your current organization plan",
        },
      ],
    },
    {
      name: "quickstart",
      description: "New to Turso? Start here!",
    },
    {
      name: "relax",
      description: "Sometimes you feel like you're working too hard... relax!",
    },
    {
      name: "update",
      description: "Update the CLI to the latest version",
    },
  ],
};
export default completionSpec;
