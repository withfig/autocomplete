const completionSpec: Fig.Spec = {
  name: "supabase",
  description: "Supabase CLI",
  subcommands: [
    {
      name: "completion",
      description: "Generate the autocompletion script for the specified shell",
      subcommands: [
        {
          name: "bash",
          description: "Generate the autocompletion script for bash",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "fish",
          description: "Generate the autocompletion script for fish",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "powershell",
          description: "Generate the autocompletion script for powershell",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
        {
          name: "zsh",
          description: "Generate the autocompletion script for zsh",
          options: [
            {
              name: "--no-descriptions",
              description: "Disable completion descriptions",
            },
          ],
        },
      ],
    },
    {
      name: "db",
      description: "Manage local Postgres databases",
      subcommands: [
        {
          name: "branch",
          description: "Manage local database branches",
          subcommands: [
            { name: "create", description: "Create a branch" },
            { name: "delete", description: "Delete a branch" },
            { name: "list", description: "List branches" },
            { name: "switch", description: "Switch the active branch" },
          ],
        },
        {
          name: "diff",
          description: "Diffs the local database for schema changes",
          options: [
            {
              name: ["--file", "-f"],
              description: "Saves schema diff to a file",
              args: {
                name: "file",
                template: "filepaths",
                suggestCurrentToken: true,
              },
            },
            {
              name: ["--schema", "-s"],
              description: "List of schema to include",
              isRepeatable: true,
              args: { name: "schema", default: "[public]" },
            },
            {
              name: "--use-migra",
              description: "Use migra to generate schema diff",
            },
          ],
        },
        {
          name: "dump",
          description: "Dumps data or schemas from the remote database",
          options: [
            {
              name: "--data-only",
              description: "Dumps only data records",
            },
            {
              name: "--db-url",
              description:
                "Dumps from the database specified by the connection string (must be percent-encoded)",
              args: { name: "string" },
            },
            {
              name: "--dry-run",
              description: "Prints the pg_dump script that would be executed",
            },
            {
              name: ["--file", "-f"],
              description: "File path to save the dumped contents",
              args: { name: "string", template: "filepaths" },
            },
            {
              name: ["-h", "--help"],
              description: "Help for dump",
            },
            {
              name: "--keep-comments",
              description: "Keeps commented lines from pg_dump output",
            },
            {
              name: "--linked",
              description: "Dumps from the linked project. (default true)",
            },
            {
              name: "--local",
              description: "Dumps from the local database",
            },
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              args: { name: "string" },
            },
            {
              name: "--role-only",
              description: "Dumps only cluster roles",
            },
            {
              name: ["--schema", "-s"],
              description:
                "Comma separated list of schema to include. (default all)",
              args: { name: "string" },
            },
            {
              name: "--use-copy",
              description: "Uses copy statements in place of inserts",
            },
          ],
        },
        {
          name: "lint",
          description: "Checks local database for typing error",
          options: [
            {
              name: "--level",
              description: "Error level to emit",
              args: { name: "level", default: "warning" },
            },
            {
              name: ["--schema", "-s"],
              description: "List of schema to include",
              isRepeatable: true,
              args: { name: "schema", default: "[public]" },
            },
          ],
        },
        { name: "pull", description: "Pull schema from the remote database" },
        {
          name: "push",
          description: "Push new migrations to the remote database",
          options: [
            {
              name: "--dry-run",
              description:
                "Print the migrations that would be applied, but don't actually apply them",
            },
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              args: { name: "password" },
            },
          ],
        },
        {
          name: "remote",
          description: "Manage remote databases",
          subcommands: [
            {
              name: "changes",
              description: "Show changes on the remote database",
            },
            {
              name: "commit",
              description: "Commit remote changes as a new migration",
            },
          ],
          options: [
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              isPersistent: true,
              args: { name: "password" },
            },
          ],
        },
        {
          name: "reset",
          description: "Resets the local database to current migrations",
        },
      ],
    },
    {
      name: "functions",
      description: "Manage Supabase Edge functions",
      subcommands: [
        {
          name: "delete",
          description: "Delete a Function from Supabase",
          options: [
            {
              name: "--project-ref",
              description: "Project ref of the Supabase project",
              args: { name: "project-ref" },
            },
          ],
        },
        {
          name: "deploy",
          description: "Deploy a Function to Supabase",
          options: [
            {
              name: "--no-verify-jwt",
              description: "Disable JWT verification for the Function",
            },
            {
              name: "--project-ref",
              description: "Project ref of the Supabase project",
              args: { name: "project-ref" },
            },
          ],
        },
        { name: "new", description: "Create a new Function locally" },
        {
          name: "serve",
          description: "Serve a Function locally",
          options: [
            {
              name: "--env-file",
              description:
                "Path to an env file to be populated to the Function environment",
              args: {
                name: "env-file",
                template: "filepaths",
              },
            },
            {
              name: "--no-verify-jwt",
              description: "Disable JWT verification for the Function",
            },
          ],
        },
      ],
    },
    {
      name: "gen",
      description: "Run code generation tools",
      subcommands: [
        {
          name: "types",
          description: "Generate types from Postgres schema",
          subcommands: [
            {
              name: "typescript",
              description: "Generate types for TypeScript",
              options: [
                {
                  name: "--db-url",
                  description: "Generate types from a database url",
                  args: { name: "db-url" },
                },
                {
                  name: "--local",
                  description: "Generate types from the local dev database",
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "init", description: "Initialize a local project" },
    {
      name: "link",
      description: "Link to a Supabase project",
      options: [
        {
          name: ["--password", "-p"],
          description: "Password to your remote Postgres database",
          args: { name: "password" },
        },
        {
          name: "--project-ref",
          description: "Project ref of the Supabase project",
          args: { name: "project-ref" },
          isRequired: true,
        },
      ],
    },
    { name: "login", description: "Authenticate using an access token" },
    {
      name: "migration",
      description: "Manage database migration scripts",
      subcommands: [
        {
          name: "list",
          description: "List local and remote migrations",
          options: [
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              args: { name: "password" },
            },
            {
              name: "--local",
              description: "Lists migrations applied to the local database",
            },
            {
              name: "--linked",
              description:
                "Lists migrations applied to the linked project (default true)",
            },
            {
              name: "--db-url",
              description: "Database URL to connect to",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "new",
          description: "Create an empty migration script",
          args: { name: "migration name" },
        },
        {
          name: "repair",
          description: "Repair the migration history table",
          args: { name: "version" },
          options: [
            {
              name: "--status",
              description: "Version status to update",
              priority: 100,
              args: {
                name: "status",
                suggestions: [{ name: "applied" }, { name: "reverted" }],
              },
            },
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              args: { name: "password" },
            },
            {
              name: "--local",
              description:
                "Repairs the migration history of the local database",
            },
            {
              name: "--linked",
              description:
                "Repairs the migration history of the linked project (default true)",
            },
            {
              name: "--db-url",
              description: "Database URL to connect to",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "squash",
          description: "Squash migrations to a single file",

          options: [
            {
              name: ["--password", "-p"],
              description: "Password to your remote Postgres database",
              args: { name: "password" },
            },
            {
              name: "--local",
              description:
                "Squashes the migration history of the local database",
            },
            {
              name: "--version",
              description: "Squash up to the specified version",
              args: { name: "string" },
            },
            {
              name: "--linked",
              description:
                "Squashes the migration history of the linked project (default true)",
            },
            {
              name: "--db-url",
              description: "Database URL to connect to",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "up",
          description: "Apply pending migrations to local database",
        },
      ],
    },
    {
      name: "orgs",
      description: "Manage Supabase organizations",
      subcommands: [{ name: "list", description: "List all organizations" }],
    },
    {
      name: "projects",
      description: "Manage Supabase projects",
      subcommands: [
        {
          name: "create",
          description: "Create a project on Supabase",
          options: [
            {
              name: "--db-password",
              description: "Database password of the project",
              args: { name: "db-password" },
            },
            {
              name: ["--interactive", "-i"],
              description: "Enables interactive mode",
            },
            {
              name: "--org-id",
              description: "Organization ID to create the project in",
              args: { name: "org-id" },
            },
            {
              name: "--plan",
              description: "Select a plan that suits your needs",
              args: { name: "plan", default: "free" },
            },
            {
              name: "--region",
              description:
                "Select a region close to you for the best performance",
              args: { name: "region" },
            },
          ],
        },
        { name: "list", description: "List all Supabase projects" },
      ],
    },
    {
      name: "secrets",
      description: "Manage Supabase secrets",
      subcommands: [
        { name: "list", description: "List all secrets on Supabase" },
        {
          name: "set",
          description: "Set a secret(s) on Supabase",
          options: [
            {
              name: "--env-file",
              description: "Read secrets from a .env file",
              args: {
                name: "env-file",
                template: "filepaths",
              },
            },
          ],
        },
        { name: "unset", description: "Unset a secret(s) on Supabase" },
      ],
    },
    {
      name: "start",
      description: "Start containers for Supabase local development",
    },
    { name: "status", description: "Show status of local Supabase containers" },
    { name: "stop", description: "Stop all local Supabase containers" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "completion",
          description:
            "Generate the autocompletion script for the specified shell",
          subcommands: [
            {
              name: "bash",
              description: "Generate the autocompletion script for bash",
            },
            {
              name: "fish",
              description: "Generate the autocompletion script for fish",
            },
            {
              name: "powershell",
              description: "Generate the autocompletion script for powershell",
            },
            {
              name: "zsh",
              description: "Generate the autocompletion script for zsh",
            },
          ],
        },
        {
          name: "db",
          description: "Manage local Postgres databases",
          subcommands: [
            {
              name: "branch",
              description: "Manage local database branches",
              subcommands: [
                { name: "create", description: "Create a branch" },
                { name: "delete", description: "Delete a branch" },
                { name: "list", description: "List branches" },
                { name: "switch", description: "Switch the active branch" },
              ],
            },
            {
              name: "diff",
              description: "Diffs the local database for schema changes",
            },
            {
              name: "lint",
              description: "Checks local database for typing error",
            },
            {
              name: "push",
              description: "Push new migrations to the remote database",
            },
            {
              name: "remote",
              description: "Manage remote databases",
              subcommands: [
                {
                  name: "changes",
                  description: "Show changes on the remote database",
                },
                {
                  name: "commit",
                  description: "Commit remote changes as a new migration",
                },
              ],
            },
            {
              name: "reset",
              description: "Resets the local database to current migrations",
            },
          ],
        },
        {
          name: "functions",
          description: "Manage Supabase Edge functions",
          subcommands: [
            { name: "delete", description: "Delete a Function from Supabase" },
            { name: "deploy", description: "Deploy a Function to Supabase" },
            { name: "new", description: "Create a new Function locally" },
            { name: "serve", description: "Serve a Function locally" },
          ],
        },
        {
          name: "gen",
          description: "Run code generation tools",
          subcommands: [
            {
              name: "types",
              description: "Generate types from Postgres schema",
              subcommands: [
                {
                  name: "typescript",
                  description: "Generate types for TypeScript",
                },
              ],
            },
          ],
        },
        { name: "init", description: "Initialize a local project" },
        { name: "link", description: "Link to a Supabase project" },
        { name: "login", description: "Authenticate using an access token" },
        {
          name: "migration",
          description: "Manage database migration scripts",
          subcommands: [
            { name: "list", description: "List local and remote migrations" },
            { name: "new", description: "Create an empty migration script" },
          ],
        },
        {
          name: "orgs",
          description: "Manage Supabase organizations",
          subcommands: [
            { name: "list", description: "List all organizations" },
          ],
        },
        {
          name: "projects",
          description: "Manage Supabase projects",
          subcommands: [
            { name: "create", description: "Create a project on Supabase" },
            { name: "list", description: "List all Supabase projects" },
          ],
        },
        {
          name: "secrets",
          description: "Manage Supabase secrets",
          subcommands: [
            { name: "list", description: "List all secrets on Supabase" },
            { name: "set", description: "Set a secret(s) on Supabase" },
            { name: "unset", description: "Unset a secret(s) on Supabase" },
          ],
        },
        {
          name: "start",
          description: "Start containers for Supabase local development",
        },
        {
          name: "status",
          description: "Show status of local Supabase containers",
        },
        { name: "stop", description: "Stop all local Supabase containers" },
      ],
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Output debug logs to stderr",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
