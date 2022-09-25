// Common Options
const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description:
    "Automatic yes to prompts. Assume yes to all prompts and run non-interactively",
};

const helpOption: Fig.Option = {
  name: "--help",
  description: "Get documentation for the command",
};

const dotenvMeOption: Fig.Option = {
  name: ["-m", "--dotenvMe"],
  description:
    "Pass .env.me (DOTENV_ME) credential directly (rather than reading from .env.me file)",
  args: {
    name: "DOTENV_ME",
    description: "Pass .env.me (DOTENV_ME) credential directly",
  },
};

// Common Arguments
const dotenvVaultArg = {
  name: "DOTENV_VAULT",
  description: "Set .env.vault identifier. Defaults to generated value",
  isOptional: true,
};

const dotenvMeArg = {
  name: "DOTENV_ME",
  description: "Set .env.me credential. Defaults to generated value",
  isOptional: true,
};

const environmentArg = {
  name: "ENVIRONMENT",
  description: "Set environment to open to. Defaults to development",
  isOptional: true,
};

const filenameArg = {
  name: "FILENAME",
  description:
    "Set input filename. Defaults to .env for development and .env.{environment} for other environments",
  isOptional: true,
};

const completionSpec: Fig.Spec = {
  name: "dotenv-vault",
  description: "CLI for dotenv-vault",
  subcommands: [
    {
      name: "new",
      description: "Create your project",
      options: [helpOption, yesOption],
      args: dotenvVaultArg,
    },
    {
      name: "login",
      description: "Log in to dotenv-vault",
      options: [helpOption, yesOption],
      args: dotenvMeArg,
    },
    {
      name: "logout",
      description: "Log out from dotenv-vault",
      options: [helpOption, yesOption],
    },
    {
      name: "open",
      description: "Opens project page in a browser",
      options: [helpOption, yesOption],
      args: environmentArg,
    },
    {
      name: "push",
      description: "Push .env securely",
      options: [helpOption, yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "pull",
      description: "Pull .env securely",
      options: [helpOption, yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "versions",
      description: "List version history",
      options: [helpOption, yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "whoami",
      description: "Display the current logged in user",
      options: [helpOption, dotenvMeOption],
    },
    {
      name: "status",
      description: "Check dotenv-operational status",
      options: [helpOption, yesOption],
    },
    {
      name: "help",
      description: "Display help for dotenv-vault",
    },
    {
      name: "update",
      description: "Update the dotenv-vault CLI",
      options: [helpOption, yesOption],
    },
  ],
};

export default completionSpec;
