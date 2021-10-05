const commonOptions: Fig.Option[] = [
  {
    name: "--env",
    description: "The environment to run the command in",
    args: { name: "environment" },
  },
  {
    name: "--config",
    description: "The path to the config file",
    args: { template: "filepaths" },
  },
  {
    name: "--options-path",
    description: "The path to a JSON file with additional options",
    args: { template: "filepaths" },
  },
  {
    name: "--migrations-path",
    description: "The path to the migrations folder",
    args: { template: "folders" },
  },
  {
    name: "--seeders-path",
    description: "The path to the seeders folder",
    args: { template: "folders" },
  },
  {
    name: "--models-path",
    description: "The path to the models folder",
    args: { template: "folders" },
  },
  {
    name: "--url",
    description: "The database connection string to use",
    args: { name: "connection string" },
  },
  {
    name: "--debug",
    description: "When available show various debug information",
  },
  {
    name: "--help",
    description: "Show help",
  },
  {
    name: "--version",
    description: "Show version number",
  },
];

const databaseOptions: Fig.Option[] = [
  {
    name: "--charset",
    description: "Pass charset option to dialect, MYSQL only",
    args: { name: "charset options" },
  },
  {
    name: "--collate",
    description: "Pass collate option to dialect",
    args: { name: "collate options" },
  },
  {
    name: "--encoding",
    description: "Pass encoding option to dialect, PostgreSQL only",
    args: { name: "encoding options" },
  },
  {
    name: "--ctype",
    description: "Pass ctype option to dialect, PostgreSQL only",
    args: { name: "ctype option" },
  },
  {
    name: "--template",
    description: "Pass template option to dialect, PostgreSQL only",
    args: { name: "template option" },
  },
];

const initOptions: Fig.Option[] = [
  {
    name: "--force",
    description: "Will drop the existing config folder and re-create it",
    isDangerous: true,
  },
];

const migrateOptions: Fig.Option[] = [
  {
    name: "--to",
    description: "Migration name to run migrations until",
    args: { name: "migration name" },
  },
  {
    name: "--from",
    description: "Migration name to start migrations from (excluding)",
    args: { name: "migration name" },
  },
];

const seedOneOptions: Fig.Option[] = [
  {
    name: "--seed",
    description: "List of seed files",
    args: { template: "filepaths", isVariadic: true },
  },
];

const subCommands: Fig.Subcommand[] = [
  {
    name: "db:migrate",
    description: "Run pending migrations",
    options: migrateOptions,
  },
  {
    name: "db:migrate:schema:timestamps:add",
    description: "Update migration table to have timestamps",
    options: migrateOptions,
  },
  {
    name: "db:migrate:status",
    description: "List the status of all migrations",
    options: migrateOptions,
  },
  {
    name: "db:migrate:undo",
    description: "Reverts a migration",
    options: [
      {
        name: "--name",
        description: "Name of the migration to undo",
        args: { name: "migration name" },
      },
    ],
  },
  {
    name: "db:migrate:undo:all",
    description: "Revert all migrations ran",
    options: [
      {
        name: "--to",
        description: "Revert to the provided migration",
        args: { name: "migration name" },
      },
    ],
  },
  {
    name: "db:seed",
    description: "Run specified seeder",
    options: seedOneOptions,
  },
  {
    name: "db:seed:undo",
    description: "Deletes data from the database",
    options: seedOneOptions,
  },
  { name: "db:seed:all", description: "Run every seeder" },
  { name: "db:seed:undo:all", description: "Deletes data from the database" },
  {
    name: "db:create",
    description: "Create database specified by configuration",
    options: databaseOptions,
  },
  {
    name: "db:drop",
    description: "Drop database specified by configuration",
    options: databaseOptions,
  },
  { name: "init", description: "Initializes project", options: initOptions },
  {
    name: "init:config",
    description: "Initializes configuration",
    options: initOptions,
  },
  {
    name: "init:migrations",
    description: "Initializes migrations",
    options: initOptions,
  },
  {
    name: "init:models",
    description: "Initializes models",
    options: initOptions,
  },
  {
    name: "init:seeders",
    description: "Initializes seeders",
    options: initOptions,
  },
  {
    name: ["migration:generate", "migration:create"],
    description: "Generates a new migration file",
    options: [
      {
        name: "--name",
        description: "Defines the name of the migration",
        args: { name: "migration name" },
      },
    ],
  },
  {
    name: ["model:generate", "model:create"],
    description: "Generates a model and its migration",
    options: [
      {
        name: "--name",
        description: "Defines the name of the new model",
        args: { name: "model name" },
      },
      {
        name: "--attributes",
        description: "A list of attributes",
        args: { name: "attributes string" },
      },
      {
        name: "--force",
        description: "Forcefully re-creates model with the same name",
      },
      {
        name: "--underscored",
        description: "Use snake case for the timestamp's attribute names",
      },
    ],
  },
  {
    name: ["seed:generate", "seed:create"],
    description: "Generates a new seed file",
    options: [
      {
        name: "--name",
        description: "Defines the name of the seed",
        args: { name: "seed name" },
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "sequelize",
  description: "The Sequelize Command Line Interface",
  subcommands: subCommands.map((sc) => ({
    ...sc,
    options: [...(sc.options || []), ...commonOptions],
  })),
  options: [
    {
      name: "--help",
      description: "Show help",
    },
    {
      name: "--version",
      description: "Show version number",
    },
  ],
};
export default completionSpec;
