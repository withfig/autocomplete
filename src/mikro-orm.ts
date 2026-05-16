const completionSpec: Fig.Spec = {
  name: "mikro-orm",
  description:
    "TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns. Supports MongoDB, MySQL, MariaDB, PostgreSQL and SQLite databases",
  subcommands: [
    {
      name: "cache:clear",
      description: "Clear metadata cache",
    },
    {
      name: "cache:generate",
      description: "Generate metadata cache for production",
    },
    {
      name: "generate-entities",
      description: "Generate entities based on current database schema",
      options: [
        {
          name: ["-s", "--save"],
          description: "Saves entities to directory defined by --path",
        },
        {
          name: ["-d", "--dump"],
          description: "Dumps all entities to console",
        },
        {
          name: ["-p", "--path"],
          description: "Sets path to directory where to save entities",
          args: { name: "path", template: "folders" },
        },
        {
          name: "--schema",
          description: "Generates entities only for given schema",
          args: { name: "schema" },
        },
      ],
    },
    {
      name: "database:create",
      description: "Create your database if it does not exist",
    },
    {
      name: "database:import",
      description: "Imports the SQL file to the database",
      args: { name: "file", template: "filepaths" },
    },
    {
      name: "seeder:run",
      description: "Seed the database using the seeder class",
    },
    {
      name: "seeder:create",
      description: "Create a new seeder class",
      options: [{ name: "--class", description: "Seeder class to run" }],
    },
    {
      name: "schema:create",
      description: "Create database schema based on current metadata",
      options: [
        { name: ["-r", "--run"], description: "Runs queries" },
        { name: ["-d", "--dump"], description: "Dumps all queries to console" },
        { name: "--fk-checks", description: "Do not skip foreign key checks" },
        {
          name: "--schema",
          description: "Set the current schema for wildcard schema entities",
          args: { name: "schema" },
        },
        {
          name: "--seed",
          description:
            "Allows to seed the database on create or drop and recreate",
          args: { name: "seed" },
        },
      ],
    },
    {
      name: "schema:drop",
      description: "Drop database schema based on current metadata",
      options: [
        { name: ["-r", "--run"], description: "Runs queries" },
        { name: ["-d", "--dump"], description: "Dumps all queries to console" },
        { name: "--fk-checks", description: "Do not skip foreign key checks" },
        {
          name: "--schema",
          description: "Set the current schema for wildcard schema entities",
          args: { name: "schema" },
        },
        {
          name: "--drop-migrations-table",
          description: "Drop also migrations table",
        },
        { name: "--drop-db", description: "Drop the whole database" },
      ],
    },
    {
      name: "schema:update",
      description: "Update database schema based on current metadata",
      options: [
        { name: ["-r", "--run"], description: "Runs queries" },
        { name: ["-d", "--dump"], description: "Dumps all queries to console" },
        { name: "--fk-checks", description: "Do not skip foreign key checks" },
        {
          name: "--schema",
          description: "Set the current schema for wildcard schema entities",
          args: { name: "schema" },
        },
        {
          name: "--safe",
          description: "Allows to disable table and column dropping",
        },
        {
          name: "--drop-tables",
          description: "Allows to disable table dropping",
        },
      ],
    },
    {
      name: "schema:fresh",
      description:
        "Drop and recreate database schema based on current metadata",
      options: [
        { name: ["-r", "--run"], description: "Runs queries" },
        {
          name: "--schema",
          description: "Set the current schema for wildcard schema entities",
          args: { name: "schema" },
        },
        {
          name: "--seed",
          description:
            "Allows to seed the database on create or drop and recreate",
          args: { name: "seed" },
        },
      ],
    },
    {
      name: "migration:create",
      description: "Create new migration with current schema diff",
      options: [
        { name: ["-b", "--blank"], description: "Create blank migration" },
        { name: ["-i", "--initial"], description: "Create initial migration" },
        { name: ["-d", "--dump"], description: "Dumps all queries to console" },
        {
          name: ["-p", "--path"],
          description: "Sets path to directory where to save entities",
          args: { name: "path", template: "folders" },
        },
      ],
    },
    {
      name: "migration:up",
      description: "Migrate up to the latest version",
      options: [
        { name: ["-t", "--to"], description: "Migrate up to specific version" },
        {
          name: ["-f", "--from"],
          description: "Start migration from specific version",
        },
        {
          name: ["-o", "--only"],
          description: "Migrate only specified versions",
        },
      ],
    },
    {
      name: "migration:down",
      description: "Migrate one step down",
      options: [
        {
          name: ["-t", "--to"],
          description: "Migrate down to specific version",
        },
        {
          name: ["-f", "--from"],
          description: "Start migration from specific version",
        },
        {
          name: ["-o", "--only"],
          description: "Migrate only specified versions",
        },
      ],
    },
    {
      name: "migration:list",
      description: "List all executed migrations",
    },
    {
      name: "migration:pending",
      description: "List all pending migrations",
    },
    {
      name: "migration:fresh",
      description: "Clear the database and rerun all migrations",
      options: [
        {
          name: "--seed",
          description:
            "Allows to seed the database on create or drop and recreate",
          args: { name: "seed" },
        },
      ],
    },
    {
      name: "debug",
      description: "Debug CLI configuration",
    },
  ],
  options: [
    {
      name: ["-v", "--version"],
      description: "Show version number",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
  ],
};

export default completionSpec;
