const commonOptions: Fig.Option[] = [
  {
    name: ["-h", "--help"],
    description: "Display this help message",
  },
];
const schemaOptions: Fig.Option[] = [
  {
    name: "--schema",
    description: "Custom path to your Prisma schema",
    args: {
      name: "Schema path",
      template: "filepaths",
      isOptional: true,
    },
  },
];

export const completionSpec: Fig.Spec = {
  name: "prisma",
  description:
    "Prisma is a modern DB toolkit to query, migrate and model your database",
  icon:
    "https://raw.githubusercontent.com/prisma/docs/main/src/images/favicon-16x16.png",
  subcommands: [
    {
      name: "init",
      description: "Setup Prisma for your app",
      subcommands: [
        ...commonOptions,
        {
          name: "--datasource-provider",
          description: "Define the datasource provider to use",
          args: {
            description: "Choose provider",
            suggestions: ["PostgreSQL", "MySQL", "SQLServer", "SQLite"],
            default: "postgres",
          },
        },
        {
          name: "--url",
          description: "Define a custom datasource url",
          args: {
            name: "full url",
            template: "filepaths",
            isOptional: false,
          },
        },
      ],
    },
    {
      name: "introspect",
      description: "Get the datamodel of your database",
      options: [
        ...commonOptions,
        {
          name: "--force",
          description: "Ignore current Prisma schema file",
        },
        {
          name: "--print",
          description: "Print the introspected Prisma schema to stdout",
        },
        ...schemaOptions,
      ],
    },
    {
      name: "generate",
      description: "Generate artifacts",
      options: [
        ...commonOptions,
        ...schemaOptions,
        {
          name: ["--watch"],
          description: "Watch the Prisma schema and rerun after a change",
        },
      ],
    },
    {
      name: "studio",
      description: "Open Prisma Studio",
      options: [
        ...commonOptions,
        ...schemaOptions,
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
      ],
    },
    {
      name: "format",
      description: "Format your schema",
      isDangerous: true,
      options: [...commonOptions, ...schemaOptions],
    },
    {
      name: "migrate",
      description: "Migrate your database",
      subcommands: [
        {
          name: "dev",
          icon: "💻",
          description:
            "The migrate dev command updates your database using migrations during development",
          options: [
            ...commonOptions,
            ...schemaOptions,
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
              name: "--skip-generate",
              description:
                "Skip triggering generators (for example, Prisma Client)",
            },
            {
              name: ["-n", "--name"],
              description:
                "The name of the migration. If no name is provided, the CLI will prompt you.",
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
            "The migrate dev command updates your database using migrations during development",
          options: [
            ...commonOptions,
            ...schemaOptions,
            {
              name: "--skip-seed",
              description: "Skip triggering seed",
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
          icon: "🚀",
          description:
            "Apply pending migrations to update the database schema in production/staging",
          options: [...commonOptions, ...schemaOptions],
        },
        {
          name: "resolve",
          description:
            "Resolve issues with database migrations in deployment databases",
          options: [
            ...commonOptions,
            ...schemaOptions,
            {
              name: "--applied",
              description: " Record a specific migration as applied",
              args: {
                name: "migration file path",
                template: "filepaths",
                isOptional: false,
              },
            },
            {
              name: "--rolled-back",
              description: "Record a specific migration as rolled back",
              args: {
                name: "migration file path",
                template: "filepaths",
                isOptional: false,
              },
            },
          ],
        },
        {
          name: "status",
          description: "Check the status of your database migrations",
          options: [...commonOptions, ...schemaOptions],
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
            ...commonOptions,
            ...schemaOptions,
            {
              name: "--force",
              description: "Ignore current Prisma schema file",
            },
            {
              name: "--print",
              description: "Print the introspected Prisma schema to stdout",
            },
          ],
        },
        {
          name: "push",
          description:
            "This command pushes the state of your Prisma schema file to the database without using migrations",
          options: [
            ...commonOptions,
            ...schemaOptions,
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
        },
        {
          name: "seed",
          isDangerous: true,
          description: "Seed your database",
          options: [...commonOptions, ...schemaOptions],
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
