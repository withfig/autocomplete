import { filepaths } from "@fig/autocomplete-generators";

// Common Options
const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description:
    "Automatic yes to prompts. Assume yes to all prompts and run non-interactively",
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
  generators: filepaths({ matches: /^\.env.*$/ }),
};

const completionSpec: Fig.Spec = {
  name: "dotenv-vault",
  description: "CLI for dotenv-vault",
  options: [
    {
      name: "--help",
      description: "Get documentation for the command",
      isPersistent: true,
    },
  ],
  subcommands: [
    {
      name: "new",
      description: "Create your project",
      options: [yesOption],
      args: dotenvVaultArg,
    },
    {
      name: "login",
      description: "Log in to dotenv-vault",
      options: [yesOption],
      args: dotenvMeArg,
    },
    {
      name: "logout",
      description: "Log out from dotenv-vault",
      options: [yesOption],
    },
    {
      name: "open",
      description: "Opens project page in a browser",
      options: [yesOption],
      args: environmentArg,
    },
    {
      name: "push",
      description: "Push .env securely",
      options: [yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "pull",
      description: "Pull .env securely",
      options: [yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "versions",
      description: "List version history",
      options: [yesOption, dotenvMeOption],
      args: [environmentArg, filenameArg],
    },
    {
      name: "whoami",
      description: "Display the current logged in user",
      options: [dotenvMeOption],
    },
    {
      name: "status",
      description: "Check dotenv-operational status",
      options: [yesOption],
    },
    {
      name: "help",
      description: "Display help for dotenv-vault",
    },
    {
      name: "update",
      description: "Update the dotenv-vault CLI",
      options: [yesOption],
    },
  ],
};

export default completionSpec;
