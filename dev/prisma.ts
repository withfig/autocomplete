export const completionSpec: Fig.Spec = {
  name: "prisma",
  description:
    "Prisma is a modern DB toolkit to query, migrate and model your database",
  subcommands: [
    {
      name: "init",
      description: "Setup Prisma for your app",
      subcommands: [
        {
          name: ["-h", "--help"],
          description: "Display this help message",
        },
        {
          name: "--datasource-provider",
          description: "Define the datasource provider to use",

          args: {
            suggestions: ["PostgreSQL", "MySQL", "SQLServer", "SQLite"],
            default: "postgres",
          },
        },
        {
          name: "--url",
          description: "Define a custom datasource url",
          args: {
            name: "Full url",
          },
        },
      ],
    },
    {
      name: "introspect",
      description: "Get the datamodel of your database",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display this help message",
        },
        {
          name: "--force",
          description: "Ignore current Prisma schema file",
        },
        {
          name: "--print",
          description: "Print the introspected Prisma schema to stdout",
        },
        {
          name: "--schema",
          description: "OPTION : Schema path",
        },
      ],
    },
    {
      name: "generate",
      description: "Generate artifacts",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display this help message",
        },
        {
          name: ["--watch"],
          description: "Watch the Prisma schema and rerun after a change",
        },
      ],
      args: {
        name: "--schema",
        description: "OPTION : Schema path",
      },
    },
    {
      name: "studio",
      description: "Open Prisma Studio",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display this help message",
        },
        {
          name: ["-p", "--port"],
          description: "Port to start Studio on",
        },
        {
          name: ["-b", "--browser"],
          description: "Browser to open Studio in",
          args: {
            name: "Browser choice",
            suggestions: ["firefox", "chrome", "safari", "none"],
          },
        },
        {
          name: ["-n", "--hostname"],
          description: "Hostname to bind the Express server to",
        },
        {
          name: "--schema",
          description: "Custom path to your Prisma schema",
          args: {
            name: "Schema path",
          },
        },
      ],
      args: {},
    },
    {
      name: "format",
      description: "Format your schema",
      args: {
        name: "--schema",
        description: "OPTION : Schema path",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Display this help message",
        },
        {
          name: "--schema",
          description: "Custom path to your Prisma schema",
        },
      ],
    },
    {
      name: "migrate",
      description: "Migrate your database",
      subcommands: [
        {
          name: "dev",
          description:
            "The migrate dev command updates your database using migrations during development",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--create-only",
              description:
                "Create a new migration but do not apply it. The migration will be empty if there are no changes in Prisma schema",
            },
            {
              name: "--skip-seed",
              description: "Skip triggering seed",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
            {
              name: "--skip-generate",
              description:
                "Skip triggering generators (for example, Prisma Client)",
            },
            {
              name: ["-n", "--name"],
              description:
                "The name of the migration. If no name is provided, the CLI will prompt you.",
            },
          ],
        },
        {
          name: "reset",
          description:
            "The migrate dev command updates your database using migrations during development",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--skip-seed",
              description: "Skip triggering seed",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
            {
              name: "--skip-generate",
              description: "Skip triggering generators (e.g. Prisma Client)",
            },
            {
              name: ["-f", "--force"],
              description: "Skip the confirmation prompt",
            },
          ],
        },
        {
          name: "deploy",
          description:
            "Apply pending migrations to update the database schema in production/staging",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
          ],
        },
        {
          name: "resolve",
          description:
            "Resolve issues with database migrations in deployment databases",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
            {
              name: "--applied",
              description: " Record a specific migration as applied",
            },
            {
              name: "--rolled-back",
              description: "Record a specific migration as rolled back",
            },
          ],
          args: {
            name: "Migration path",
          },
        },
        {
          name: "status",
          description: "Check the status of your database migrations",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
          ],
        },
      ],
      args: {},
    },
    {
      name: "db",
      description: "Manage your database schema and lifecycle (Preview)",
      subcommands: [
        {
          name: "pull",
          description: "",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--schema",
              description: "Custom path to your Prisma schema",
              args: {
                name: "Schema path",
              },
            },
            {
              name: "--force",
              description: "Ignore current Prisma schema file",
            },
            {
              name: "--print",
              description: "Print the introspected Prisma schema to stdout",
            },
          ],
          args: {
            name: "--schema",
            description: "OPTION : Schema path",
          },
        },
        {
          name: "push",
          description:
            "This command pushes the state of your Prisma schema file to the database without using migrations",
          options: [
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
            {
              name: "--skip-generate",
              description: "Skip generation of artifacts such as Prisma Client",
            },
            {
              name: "--force-reset",
              description:
                "Resets the database and then updates the schema - useful if you need to start from scratch due to unexecutable migrations.",
            },
            {
              name: "--accept-data-loss",
              description:
                "Ignore data loss warnings. This option is required if as a result of making the schema changes, data may be lost.",
            },
          ],
          args: {
            name: "--schema",
            description: "OPTION : Schema path",
          },
        },
        {
          name: "seed",
          description: "Feature in Preview",
          options: [
            {
              name: "--preview-feature",
              description: "Enables use of Preview feature commands",
            },
            {
              name: ["-h", "--help"],
              description: "Display this help message",
            },
          ],
        },
      ],
    },

    {
      name: ["version", "-v"],
      description: "BLa bla bla",
      args: {
        name: "--json",
        description: "Outputs version information in JSON format.",
      },
    },
  ],
};
