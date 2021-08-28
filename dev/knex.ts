import * as Fig from "../schemas";

const completionSpec: Fig.Spec = {
  name: "knex",
  description: "SQL query builder for JavaScript",
  subcommands: [
    {
      name: "init",
      description: "Create a fresh knexfile",
      args: {},
    },
    {
      name: "migrate:make",
      description: "Create a named migration file",
      args: { name: "migration name" },
    },
    {
      name: "migrate:latest",
      description: "Run all migrations that have not yet been run",
      args: {},
    },
    {
      name: "migrate:up",
      description:
        "Run the next or the specified migration that has not yet been run",
      args: {},
    },
    {
      name: "migrate:rollback",
      description: "Rollback the last batch of migrations performed",
      args: {},
    },
    {
      name: "migrate:down",
      description:
        "Undo the last or the specified migration that was already run",
      args: {},
    },
    {
      name: "migrate:currentVersion",
      description: "View the current version for the  migration",
      args: {},
    },
    {
      name: "migrate:list|migrate:status",
      description: "List all migrations files with status",
      args: {},
    },
    {
      name: "migrate:unlock",
      description: "Forcibly unlocks the migrations lock table",
      args: {},
    },
    {
      name: "seed:make",
      description: "Create a named seed file",
      args: {
        name: "seed name",
      },
    },
    {
      name: "seed:run",
      description: "Run seed files",
      args: {},
    },
    {
      name: "help",
      description: "Display help for command",
      args: {},
    },
  ],
  options: [
    {
      name: "--version",
      description: "Output the version number",
      args: {},
    },
    {
      name: "--debug",
      description: "Run with debugging",
      args: {},
    },
    {
      name: "--knexfile",
      description: "Specify the knexfile path",
      args: {},
    },
    {
      name: "--knexpath",
      description: "Specify the path to knex instance",
      args: {},
    },
    {
      name: "--cwd",
      description: "Specify the working directory",
      args: {},
    },
    {
      name: "--client",
      description: "Set DB client without a knexfile",
      args: {},
    },
    {
      name: "--connection",
      description: "Set DB connection without a knexfile",
      args: {},
    },
    {
      name: "--migrations-directory",
      description: "Set migrations directory without a knexfile",
      args: {},
    },
    {
      name: "--migrations-table-name",
      description: "Set migrations table name without a knexfile",
      args: {},
    },
    {
      name: "--env",
      description: "Environment, default: process.env.NODE_ENV || development",
      args: {
        name: "environment",
      },
    },
    {
      name: "--esm",
      description: "Enable ESM interop",
      args: {},
    },
    {
      name: "--specific",
      description: "Specify one seed file to execute",
      args: {},
    },
    {
      name: "--timestamp-filename-prefix",
      description: "Enable a timestamp prefix on name of generated seed files",
      args: {},
    },
    {
      name: "--help",
      description: "Display help for command",
      args: {},
    },
  ],
};

export default completionSpec;
