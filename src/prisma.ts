const commonOptions: Fig.Option = {
  name: ["-h", "--help"],
  description: "Display this help message",
};
const schemaOptions: Fig.Option = {
  name: "--schema",
  description: "Custom path to your Prisma schema",
  args: {
    name: "Schema path",
    template: "filepaths",
  },
};
const skipOptions: Fig.Option[] = [
  {
    name: "--skip-seed",
    description: "Skip triggering seed",
  },
  {
    name: "--skip-generate",
    description: "Skip triggering generators (e.g. Prisma Client)",
  },
];

const completionSpec: Fig.Spec = {
  name: "prisma",
  description:
    "Prisma is a modern DB toolkit to query, migrate and model your database",
  icon: "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  subcommands: [
    {
      name: "init",
      description: "Setup Prisma for your app",
      options: [
        commonOptions,
        {
          name: "--datasource-provider",
          description: "Define the datasource provider to use",
          args: {
            description: "Choose provider",
            suggestions: [
              "PostgreSQL",
              "MySQL",
              "SQLite",
              "SQLServer",
              "MongoDB",
              "CockroachDB",
            ],
            default: "PostgreSQL",
          },
        },
        {
          name: "--url",
          description: "Define a custom datasource url",
          args: {
            name: "full url",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "generate",
      description: "Generate artifacts (e.g. Prisma Client)",
      options: [
        commonOptions,
        schemaOptions,
        {
          name: "--data-proxy",
          description: "Enable the Data Proxy in the Prisma Client",
        },
        {
          name: "--no-hints",
          description:
            "Hides the hint messages but still outputs errors and warnings",
        },
        {
          name: "--no-engine",
          description: "Generate a client for use with Accelerate only",
        },
        {
          name: "--watch",
          description: "Watch the Prisma schema and rerun after a change",
        },
        {
          name: "--allow-no-models",
          description: "Allow generating a client without models",
        },
      ],
    },
    {
      name: "studio",
      description: "Open Prisma Studio",
      options: [
        commonOptions,
        schemaOptions,
        {
          name: ["-p", "--port"],
          description: "Port to start Studio on",
          args: {
            name: "port",
          },
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
          args: {
            name: "port",
          },
        },
      ],
    },
    {
      name: "format",
      description: "Format your schema",
      options: [commonOptions, schemaOptions],
    },
    {
      name: "migrate",
      description: "Migrate your database",
      subcommands: [
        {
          name: "dev",
          icon: "💻",
          description:
            "The migrate dev command updates your database using migrations files during development",
          options: [
            commonOptions,
            schemaOptions,
            ...skipOptions,
            {
              name: "--create-only",
              description:
                "Create a new migration but do not apply it. The migration will be empty if there are no changes in Prisma schema",
            },
            {
              name: ["-n", "--name"],
              description:
                "The name of the migration. If no name is provided, the CLI will prompt you",
              args: {
                name: "filename",
                isOptional: true,
              },
            },
          ],
        },
        {
          name: "reset",
          icon: "🔃",
          description:
            "Reset your database and apply all migrations, all data will be lost",
          options: [
            commonOptions,
            schemaOptions,
            ...skipOptions,
            {
              name: ["-f", "--force"],
              description: "Skip the confirmation prompt",
              isDangerous: true,
            },
          ],
        },
        {
          name: "deploy",
          icon: "🚀",
          description:
            "Apply pending migrations to update the database schema in production/staging",
          options: [commonOptions, schemaOptions],
        },
        {
          name: "resolve",
          description:
            "Resolve issues with database migrations in deployment databases",
          options: [
            commonOptions,
            schemaOptions,
            {
              name: "--applied",
              description: "Record a specific migration as applied",
              args: {
                name: "migration file path",
                template: "filepaths",
              },
            },
            {
              name: "--rolled-back",
              description: "Record a specific migration as rolled back",
              args: {
                name: "migration file path",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "status",
          description: "Check the status of your database migrations",
          options: [commonOptions, schemaOptions],
        },
        {
          name: "diff",
          description:
            "Compares the database schema from two arbitrary sources, and outputs the differences either as a human-readable summary (by default) or an executable script",
          options: [
            commonOptions,
            {
              name: "--from-url",
              description: "A datasource url",
              args: {
                name: "full url",
                template: "filepaths",
              },
            },
            {
              name: "--to-url",
              description: "A datasource url",
              args: {
                name: "full url",
                template: "filepaths",
              },
            },
            {
              name: "--from-empty",
              description: "Flag to assume from is an empty datamodel",
            },
            {
              name: "--to-empty",
              description: "Flag to assume to is an empty datamodel",
            },
            {
              name: "--from-schema-datamodel",
              description:
                "Path to a Prisma schema file, uses the 'datamodel' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--to-schema-datamodel",
              description:
                "Path to a Prisma schema file, uses the 'datamodel' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--from-schema-datasource",
              description:
                "Path to a Prisma schema file, uses the 'datasource url' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--to-schema-datasource",
              description:
                "Path to a Prisma schema file, uses the 'datasource url' for the diff",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--from-migrations",
              description: "Path to the Prisma Migrate migrations directory",
              args: {
                name: "folder",
                template: "folders",
              },
            },
            {
              name: "--to-migrations",
              description: "Path to the Prisma Migrate migrations directory",
              args: {
                name: "folder",
                template: "folders",
              },
            },
            {
              name: "--shadow-database-url",
              description:
                "URL for the shadow database. Only required if using --from-migrations or --to-migrations",
              args: {
                name: "full url",
                template: "filepaths",
              },
            },
            {
              name: "--script",
              description:
                "Render a SQL script to stdout instead of the default human readable summary (not supported on MongoDB)",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--exit-code",
              description:
                "Change the exit code behavior to signal if the diff is empty or not (Empty: 0, Error: 1, Not empty: 2). Default behavior is Success: 0, Error: 1.`",
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage your database schema and lifecycle (Preview)",
      subcommands: [
        {
          name: "pull",
          options: [
            commonOptions,
            schemaOptions,
            {
              name: "--force",
              description: "Ignore current Prisma schema file",
              isDangerous: true,
            },
            {
              name: "--print",
              description: "Print the introspected Prisma schema to stdout",
            },
            {
              name: "--url",
              description: "The datasource url",
              args: {
                name: "full url",
                template: "filepaths",
              },
            },
            {
              name: "--composite-type-depth",
              description:
                "Specify the depth for introspecting composite types (e.g. Embedded Documents in MongoDB). Number, default is -1 for infinite depth, 0 = off",
              args: {
                name: "number",
              },
            },
          ],
        },
        {
          name: "push",
          description:
            "This command pushes the state of your Prisma schema file to the database without using migrations files",
          options: [
            commonOptions,
            schemaOptions,
            {
              name: "--skip-generate",
              description: "Skip generation of artifacts such as Prisma Client",
            },
            {
              name: "--force-reset",
              description:
                "Resets the database and then updates the schema - useful if you need to start from scratch due to unexecutable migrations",
              isDangerous: true,
            },
            {
              name: "--accept-data-loss",
              description:
                "Ignore data loss warnings. This option is required if as a result of making the schema changes, data may be lost",
              isDangerous: true,
            },
          ],
        },
        {
          name: "seed",
          isDangerous: true,
          description: "Seed your database",
          options: [commonOptions, schemaOptions],
        },
        {
          name: "execute",
          isDangerous: true,
          description: "Execute native commands to your database",
          options: [
            commonOptions,
            schemaOptions,
            {
              name: "--url",
              description: "The datasource url",
              args: {
                name: "full url",
                template: "filepaths",
              },
            },
            {
              name: "--file",
              description:
                "Path to a file. The content will be sent as the script to be executed",
              args: {
                name: "filepath",
                template: "filepaths",
              },
            },
            {
              name: "--stdin",
              description:
                "Use the terminal standard input as the script to be executed",
            },
          ],
        },
      ],
    },
    {
      name: ["version", "-v"],
      description: "Print current version of Prisma components",
      subcommands: [
        {
          name: "--json",
          description: "Output JSON",
        },
      ],
    },
  ],
};

export default completionSpec;
