const cliOptions: Record<string, Fig.Option> = {
  help: { name: "--help", description: "Show help for command" },
  version: { name: ["-v", "--version"], description: "Show the version" },
  connection: {
    name: ["-c", "--connection"],
    args: { name: "connection" },
    description: "Name of the connection on which to run a query",
  },
  config: {
    name: ["-f", "--config"],
    description: "Name of the file with connection configuration",
    args: { name: "file", template: "filepaths" },
  },
};

const completionSpec: Fig.Spec = {
  name: "typeorm",
  description: "TypeORM CLI",
  subcommands: [
    {
      name: "schema:sync",
      description: "Synchronizes your entities with database schema",
      options: [
        cliOptions.help,
        {
          ...cliOptions.connection,
          description:
            "Name of the connection on which schema synchronization needs to to run",
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "schema:log",
      description: "Shows sql to be executed by schema:sync command",
      options: [
        cliOptions.help,
        {
          ...cliOptions.connection,
          description:
            "Name of the connection of which schema sync log should be shown",
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "schema:drop",
      description:
        "Drops all tables in the database on your default connection",
      options: [
        cliOptions.help,
        {
          ...cliOptions.connection,
          description: "Name of the connection on which to drop all tables",
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "query",
      description: "Executes given SQL query on a default connection",
      args: { name: "query", description: "The SQL Query to run" },
      options: [
        cliOptions.help,
        cliOptions.connection,
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "entity:create",
      description: "Generates a new entity",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-n", "--name"],
          description: "Name of the entity class",
          args: { name: "entity" },
          isRequired: true,
        },
        {
          name: ["-d", "--dir"],
          description: "Directory where entity should be created",
          args: { name: "directory", template: "folders" },
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "subscriber:create",
      description: "Generates a new subscriber",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-n", "--name"],
          description: "Name of the subscriber class",
          args: { name: "subscriber" },
          isRequired: true,
        },
        {
          name: ["-d", "--dir"],
          description: "Directory where subscriber should be created",
          args: { name: "directory", template: "folders" },
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "migration:create",
      description: "Creates a new migration file",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-n", "--name"],
          description: "Name of the migration class",
          args: { name: "migration" },
          isRequired: true,
        },
        {
          name: ["-d", "--dir"],
          description: "Directory where migration should be created",
          args: { name: "directory", template: "folders" },
        },
        cliOptions.config,
        {
          name: ["-o", "--outputJs"],
          description:
            "Generate a migration file on Javascript instead of Typescript",
        },
        cliOptions.version,
      ],
    },
    {
      name: "migration:generate",
      description:
        "Generates a new migration file with sql needs to be executed to update schema",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-n", "--name"],
          description: "Name of the migration class",
          args: { name: "migration" },
          isRequired: true,
        },
        {
          name: ["-d", "--dir"],
          description: "Directory where migration should be created",
          args: { name: "directory", template: "folders" },
        },
        {
          name: ["-p", "--pretty"],
          description: "Pretty-print generated SQL",
        },
        cliOptions.config,
        {
          name: ["-o", "--outputJs"],
          description:
            "Generate a migration file on Javascript instead of Typescript",
        },
        {
          name: ["--dr", "--dryrun"],
          description:
            "Prints out the contents of the migration instead of writing it to a file",
        },
        {
          name: ["--ch", "--check"],
          description:
            "Verifies that the current database is up to date and that no migrations are needed",
        },
        cliOptions.version,
      ],
    },
    {
      name: "migration:run",
      description: "Runs all pending migrations",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-t", "--transaction"],
          description:
            "Indicates if transaction should be used or not for migration run",
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "migration:show",
      description: "Show all migrations and whether they have been run or not",
      options: [
        cliOptions.help,
        cliOptions.connection,
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "migration:revert",
      description: "Reverts last executed migration",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-t", "--transaction"],
          description:
            "Indicates if transaction should be used or not for migration revert",
        },
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "version",
      description: "Prints TypeORM version this project uses",
      options: [cliOptions.help, cliOptions.version],
    },
    {
      name: "cache:clear",
      description: "Clears all data stored in query runner cache",
      options: [
        cliOptions.help,
        cliOptions.connection,
        cliOptions.config,
        cliOptions.version,
      ],
    },
    {
      name: "init",
      description: "Generates initial TypeORM project structure",
      options: [
        cliOptions.help,
        cliOptions.connection,
        {
          name: ["-n", "--name"],
          description: "Name of the project directory",
          args: { name: "name" },
        },
        {
          name: ["--db", "--database"],
          description: "Database type you'll use in your project",
          args: {
            name: "database",
            suggestions: [
              "mysql",
              "mariadb",
              "postgres",
              "cockroachdb",
              "sqlite",
              "mssql",
              "oracle",
              "cordova",
              "nativescript",
              "react-native",
              "expo",
              "mongodb",
            ],
          },
        },
        {
          name: "--express",
          description: "Indicates if express should be included in the project",
        },
        {
          name: "--docker",
          description:
            "Set to true if docker-compose must be generated as well",
        },
        {
          name: ["--pm", "--manager"],
          description: "Install packages",
          args: { name: "manager", suggestions: ["npm", "yarn"] },
        },
        cliOptions.version,
      ],
    },
  ],
  options: [cliOptions.help, cliOptions.version],
};

export default completionSpec;
