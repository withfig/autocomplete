const subCommandOptions: Fig.Option[] = [
  { name: "--env", description: "The environment to run the command in" },
  { name: "--config", description: "The path to the config file" },
  {
    name: "--options-path",
    description: "The path to a JSON file with additional options",
  },
  {
    name: "--migrations-path",
    description: "The path to the migrations folder",
  },
  { name: "--seeders-path", description: "The path to the seeders folder" },
  { name: "--models-path", description: "The path to the models folder" },
  {
    name: "--url",
    description: "The database connection string to use",
  },
  {
    name: "--debug",
    description: "When available show various debug information",
  },
];

const subCommands: Fig.Subcommand[] = [
  { name: "db:migrate", description: "Run pending migrations" },
  {
    name: "db:migrate:schema:timestamps:add",
    description: "Update migration table to have timestamps",
  },
  {
    name: "db:migrate:status",
    description: "List the status of all migrations",
  },
  { name: "db:migrate:undo", description: "Reverts a migration" },
  { name: "db:migrate:undo:all", description: "Revert all migrations ran" },
  { name: "db:seed", description: "Run specified seeder" },
  { name: "db:seed:undo", description: "Deletes data from the database" },
  { name: "db:seed:all", description: "Run every seeder" },
  { name: "db:seed:undo:all", description: "Deletes data from the database" },
  {
    name: "db:create",
    description: "Create database specified by configuration",
  },
  {
    name: "db:drop",
    description: "Drop database specified by configuration",
  },
  { name: "init", description: "Initializes project" },
  { name: "init:config", description: "Initializes configuration" },
  { name: "init:migrations", description: "Initializes migrations" },
  { name: "init:models", description: "Initializes models" },
  { name: "init:seeders", description: "Initializes seeders" },
  {
    name: "migration:generate",
    description: "Generates a new migration file",
  },
  { name: "migration:create", description: "Generates a new migration file" },
  {
    name: "model:generate",
    description: "Generates a model and its migration",
  },
  {
    name: "model:create",
    description: "Generates a model and its migration",
  },
  { name: "seed:generate", description: "Generates a new seed file" },
  { name: "seed:create", description: "Generates a new seed file" },
];

const completionSpec: Fig.Spec = {
  name: "sequelize",
  description: "The Sequelize Command Line Interface",
  subcommands: subCommands.map((sc) => ({ ...sc, options: subCommandOptions })),
  options: [
    {
      name: "--help",
      description: "Show help for sequelize",
    },
    {
      name: "--version",
      description: "Show version number",
    },
  ],
};
export default completionSpec;
