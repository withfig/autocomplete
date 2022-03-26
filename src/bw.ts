const standardOptions = [
  {
    name: ["--help", "-h"],
    description: "Show help for Bitwarden",
  },
  {
    name: ["--version", "-v"],
    description: "Show version of Bitwarden",
  },
];

const help = {
  name: ["--help", "-h"],
  description: "Show help for this command",
};

const url_arg = (type: string) => {
  return {
    name: "url",
    description: "On-premises hosted " + type + " URL",
  };
};

const login = {
  name: "login",
  description: "Log into your vault",
};

const unlock = {
  name: "unlock",
  description: "Unlock the vault and return a new session key",
  args: {
    name: "password",
    description:
      "[Danger: Not hidden by terminal] Pass your master password to unlock directly",
  },
  options: [
    {
      name: "--raw",
      description: "Pass `--raw` option to only return the session key",
    },
    {
      name: "--check",
      description: "Check lock status",
    },
    {
      name: "--passwordenv",
      description: "Environment variable storing your password",
      args: {
        name: "enviroment variable",
        description: "",
      },
    },
    {
      name: "--passwordfile",
      description: "Path to a file containing your password as its first line",
      args: {
        name: "path to file",
        description: "",
      },
    },
    help,
  ],
};

const configServer = {
  name: "config",
  description: "Config the bitwarden server",
  subcommands: [
    {
      name: "server",
      description: "Returns the current server url or set the base url",
      args: url_arg("base"),
      options: [
        {
          name: "--web-vault",
          description:
            "Provides a custom web vault URL that differs from the base URL",
          args: url_arg("web vault"),
        },
        {
          name: "--api",
          description:
            "Provides a custom API URL that differs from the base URL",
          args: url_arg("api"),
        },
        {
          name: "--identity",
          description:
            "Provides a custom identity URL that differs from the base URL",
          args: url_arg("identity"),
        },
        {
          name: "--icons",
          description:
            "Provides a custom icons service URL that differs from the base URL",
          args: url_arg("icons service"),
        },
        {
          name: "--notifications",
          description:
            "Provides a custom notifications URL that differs from the base URL",
          args: url_arg("icons"),
        },
        {
          name: "--events",
          description:
            "Provides a custom events URL that differs from the base URL",
          args: url_arg("events"),
        },
        {
          name: "--key-connector",
          description: "Provides the URL for your Key Connector server",
          args: url_arg("key-connector"),
        },
        help,
      ],
    },
  ],
};

const completionSpec: Fig.Spec = {
  name: "bw",
  description: "Bitwarden password manager",
  subcommands: [login, unlock, configServer],
  options: [].concat(standardOptions),
  // Only uncomment if bw takes an argument
  // args: {}
};
export default completionSpec;
