const enviornmentsGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey: "enviornments",
    cacheByDirectory: true,
  },
  script: ["doppler", "environments", "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      return obj.map((o) => ({
        name: o.id,
        desciption: o.name,
        priority: 100,
      }));
    } catch {
      return [];
    }
  },
};
const configGenerators: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey: "configs",
    cacheByDirectory: true,
  },
  script: ["doppler", "configs", "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      return obj.map((o) => ({
        name: o.name,
        desciption: o.environment,
        priority: 100,
      }));
    } catch {
      return [];
    }
  },
};
const secretsGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey: "secrets",
    cacheByDirectory: true,
  },
  script: ["doppler", "secrets", "--only-names", "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      const names = Object.keys(obj);
      return names.map((name) => ({
        name,
        priority: 100,
      }));
    } catch {
      return [];
    }
  },
};
const projectsGenerator: Fig.Generator = {
  cache: {
    strategy: "stale-while-revalidate",
    cacheKey: "projects",
    cacheByDirectory: true,
  },
  script: ["doppler", "projects", "--json"],
  postProcess: (out) => {
    try {
      const obj = JSON.parse(out);
      return obj.map((o) => ({
        name: o.id,
        desciption: o.name,
        priority: 100,
      }));
    } catch {
      return [];
    }
  },
};

const helpCommand: (name?: string) => Fig.Option = (name = "doppler") => ({
  name: ["-h", "--help"],
  description: `Help for ${name}`,
});

const configOption: Fig.Option = {
  name: ["-c", "--config"],
  description: "Config (e.g. dev)",
  args: { name: "string", generators: configGenerators },
};

const fallbackOption: Fig.Option = {
  name: "f",
  description:
    "Path to the fallback file. encrypted secrets are written to this file after each successful fetch. secrets will be read from this file if subsequent connections are unsuccessful",
  args: { name: "string", template: "filepaths" },
};

const fallbackOnlyOption: Fig.Option = {
  name: "--fallback-only",
  description:
    "Read all secrets directly from the fallback file, without contacting Doppler. secrets will not be updated. (implies --fallback-readonly)",
};

const fallbackPassphraseOption: Fig.Option = {
  name: "--fallback-passphrase",
  description:
    "Passphrase to use for encrypting the fallback file. by default the passphrase is computed using your current configuration",
  args: { name: "string" },
};

const fallbackReadonlyOption: Fig.Option = {
  name: "--fallback-readonly",
  description:
    "Disable modifying the fallback file. secrets can still be read from the file",
};

const formatOption: Fig.Option = {
  name: "--format",
  description:
    'Output format. one of json, env, yaml, docker, env-no-quotes (default "json")',
  args: {
    name: "string",
    suggestions: ["json", "env", "yaml", "docker", "env-no-quotes"],
  },
};

const noCacheOption: Fig.Option = {
  name: "--no-cache",
  description:
    "Disable using the fallback file to speed up fetches. the fallback file is only used when the API indicates that it's still current",
};

const noExitOnWriteFailureOption: Fig.Option = {
  name: "--no-exit-on-write-failure",
  description: "Do not exit if unable to write the fallback file",
};

const noFallbackOption: Fig.Option = {
  name: "--no-fallback",
  description: "Disable reading and writing the fallback file",
};

const noUpdateConfigOption: Fig.Option = {
  name: "--no-update-config",
  description: "Do not modify the config file",
};

const noUpdateConfigOptionOption: Fig.Option = {
  name: "--no-update-config-options",
  description:
    "Do not remove configured options from the config file (i.e. project and config)",
};

const passphraseOption: Fig.Option = {
  name: "--passphrase",
  description:
    "Passphrase to use for encrypting the secrets file. the default passphrase is computed using your current configuration",
  args: { name: "string" },
};

const projectOption: Fig.Option = {
  name: ["-p", "--project"],
  description: "Project (e.g. backend)",
  args: { name: "string", generators: projectsGenerator },
};

const rawOption: Fig.Option = {
  name: "--raw",
  description: "Print the raw secret value without processing variables",
  args: { name: "string" },
};

const yesOption: Fig.Option = {
  name: ["--yes", "-y"],
  description: "Proceed without confirmation",
};

const globalOptions: Fig.Option[] = [
  {
    name: "--api-host",
    description:
      'The host address for the Doppler API (default "https://api.doppler.com")',
    args: { name: "string" },
  },
  {
    name: "--configuration",
    description: 'Config file (default "~/.doppler/.doppler.yaml")',
    args: { name: "string", template: "filepaths" },
  },
  {
    name: "--dashboard-host",
    description:
      'The host address for the Doppler Dashboard (default "https://dashboard.doppler.com")',
    args: { name: "string" },
  },
  {
    name: "--debug",
    description: "Output additional information",
    args: { name: "string" },
  },
  {
    name: "--dns-resolver-address",
    description: 'Address to use for DNS resolution (default "1.1.1.1:53")',
    args: { name: "string" },
  },
  {
    name: "--dns-resolver-proto",
    description: 'Protocol to use for DNS resolution (default "udp")',
    args: { name: "string" },
  },
  {
    name: "--dns-resolver-timeout",
    description: "Max dns lookup duration (default 5s)",
    args: { name: "duration" },
  },
  {
    name: "--enable-dns-resolver",
    description: "Bypass the OS's default DNS resolver",
  },
  {
    name: "--json",
    description: "Output json",
  },
  {
    name: "--no-check-version",
    description: "Disable checking for Doppler CLI updates",
  },
  {
    name: "--no-read-env",
    description: "Do not read config from the environment",
  },
  {
    name: "--no-timeout",
    description: "Disable http timeout",
  },
  {
    name: "--no-verify-tls",
    description:
      "Do not verify the validity of TLS certificates on HTTP requests (not recommended)",
    isDangerous: true,
  },
  {
    name: "--print-config",
    description: "Output active configuration",
  },
  {
    name: "--scope",
    description: 'The directory to scope your config to (default ".")',
    args: { name: "string", template: "folders" },
  },
  {
    name: "--silent",
    description: "Disable output of info messages",
  },
  {
    name: "--timeout",
    description: "Max http request duration (default 10s)",
    args: { name: "duration" },
  },
  {
    name: ["--token", "-t"],
    description: "Doppler token",
    args: { name: "string" },
  },
];

const completionSpec: Fig.Spec = {
  name: "doppler",
  description: "The official Doppler CLI",
  subcommands: [
    {
      name: "activity",
      description: "Get workplace activity logs",
      options: [...globalOptions, helpCommand("activity")],
      subcommands: [
        {
          name: "get",
          description: "Get workplace activity log",
          options: [
            ...globalOptions,
            helpCommand("get"),
            {
              name: "--log",
              description: "Activity log id",
              args: { name: "string" },
            },
          ],
          args: { name: "log_id" },
        },
      ],
    },
    {
      name: "changelog",
      description: "View the CLI's changelog",
      options: [
        ...globalOptions,
        helpCommand("changelog"),
        {
          name: ["-n", "--number"],
          description: "Number of versions to show changes for (default 3)",
          args: { name: "int" },
        },
      ],
    },
    {
      name: "completion",
      description: "Print shell completion script",
      options: [...globalOptions, helpCommand("completion")],
      subcommands: [
        {
          name: "install",
          description: "Install completions for the current shell",
          options: [...globalOptions, helpCommand("install")],
          args: { name: "shell" },
        },
      ],
    },
    {
      name: "configs",
      description: "Manage configs",
      options: [...globalOptions, helpCommand("configs"), projectOption],
      subcommands: [
        {
          name: "clone",
          description: "Clone a config",
          options: [
            ...globalOptions,
            configOption,
            helpCommand("clone"),
            projectOption,
            {
              name: "--name",
              description: "New config name",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "create",
          description: "Create a config",
          options: [
            ...globalOptions,
            helpCommand("create"),
            projectOption,
            {
              name: "--name",
              description: "Config name",
              args: { name: "string" },
            },
            {
              name: ["--environment", "-e"],
              description: "Config environment",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a config",
          args: { name: "config", generators: configGenerators },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("delete"),
            projectOption,
            yesOption,
          ],
        },
        {
          name: "get",
          description: "Get info for a config",
          args: { name: "config", generators: configGenerators },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("get"),
            projectOption,
          ],
        },
        {
          name: "lock",
          description: "Lock a config",
          args: { name: "config", generators: configGenerators },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("lock"),
            projectOption,
            yesOption,
          ],
        },
        {
          name: "logs",
          description: "List config audit logs",
          args: { name: "config", generators: configGenerators },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("logs"),
            projectOption,
          ],
        },
        {
          name: "tokens",
          description: "List a config's service tokens",
          subcommands: [
            {
              name: "get",
              description: "Get a config's service token",
              args: { name: "slug" },
              priority: 100,
              options: [
                ...globalOptions,
                {
                  name: "--slug",
                  description: "Service token slug",
                  args: { name: "string" },
                },
                configOption,
                helpCommand("tokens"),
                projectOption,
              ],
            },
            {
              name: "create",
              description: "Create a service token for a config",
              priority: 99,
              options: [
                ...globalOptions,
                {
                  name: "--access",
                  description: "Print only the token without formatting",
                  args: {
                    name: "Access level",
                    suggestions: ["read", "read/write"],
                    default: "read",
                  },
                },
                configOption,
                {
                  name: "--copy",
                  description: "Copy the token to your clipboard",
                },
                {
                  name: "--max-age",
                  args: { name: "duration" },
                  description: "Max age of the token (e.g. '3h', '15m')",
                },
                {
                  name: "--name",
                  description: "Service token name",
                  args: { name: "string" },
                },
                {
                  name: "--plain",
                  description: "Print only the token without formatting",
                },
                helpCommand("tokens"),
                projectOption,
              ],
            },
            {
              name: "revoke",
              description: "Revoke a service token from a config",
              priority: 98,
              isDangerous: true,
              options: [
                ...globalOptions,
                configOption,
                helpCommand("tokens"),
                projectOption,
              ],
            },
          ],
          options: [
            ...globalOptions,
            configOption,
            helpCommand("tokens"),
            projectOption,
          ],
        },
        {
          name: "unlock",
          description: "Unlock a config",
          options: [
            ...globalOptions,
            configOption,
            helpCommand("unlock"),
            projectOption,
            yesOption,
          ],
        },
        {
          name: "update",
          description: "Update a config",
          options: [
            ...globalOptions,
            configOption,
            helpCommand("update"),
            projectOption,
            yesOption,
            {
              name: "--name",
              description: "Config name",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "configure",
      description: "View the config file",
      options: [...globalOptions, helpCommand("configure"), projectOption],
      subcommands: [
        {
          name: "debug",
          description:
            "View current configuration utilizing all config sources",
          options: [...globalOptions, helpCommand("debug")],
        },
        {
          name: "get",
          description:
            "Get the value of one or more options in the config file",
          options: [
            ...globalOptions,
            helpCommand("get"),
            {
              name: "--copy",
              description: "Copy the value(s) to your clipboard",
            },
            {
              name: "--plain",
              description:
                "Print values without formatting. values will be printed in the same order as specified",
            },
          ],
        },
        {
          name: "options",
          description: "List all supported config options",
          options: [...globalOptions, helpCommand("options")],
        },
        {
          name: "reset",
          description: "Reset local CLI configuration to a clean initial state",
          options: [...globalOptions, helpCommand("reset"), yesOption],
        },
        {
          name: "set",
          description:
            "Set the value of one or more options in the config file",
          options: [...globalOptions, helpCommand("set")],
        },
        {
          name: "unset",
          description:
            "Unset the value of one or more options in the config file",
          options: [...globalOptions, helpCommand("environments")],
        },
      ],
    },
    {
      name: "environments",
      description: "Manage environments",
      options: [...globalOptions, helpCommand("environments"), projectOption],
      subcommands: [
        {
          name: "create",
          description: "Create an environment",
          options: [...globalOptions, helpCommand("create"), projectOption],
          args: [{ name: "name" }, { name: "slug" }],
        },
        {
          name: "delete",
          description: "Delete an environment",
          options: [
            ...globalOptions,
            helpCommand("delete"),
            projectOption,
            yesOption,
          ],
          args: { name: "slug", generators: enviornmentsGenerator },
        },
        {
          name: "get",
          description: "Get info for an environment",
          options: [...globalOptions, helpCommand("get"), projectOption],
          args: {
            name: "environment_id",
            generators: enviornmentsGenerator,
          },
        },
        {
          name: "rename",
          description: "Rename an environment",
          args: { name: "slug", generators: enviornmentsGenerator },
          options: [
            ...globalOptions,
            helpCommand("rename"),
            projectOption,
            yesOption,
            {
              name: "--name",
              description: "New name",
              args: { name: "string" },
            },
            {
              name: "--slug",
              description: "New slug",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "feedback",
      description: "Provide feedback about the Doppler CLI",
      options: [...globalOptions, helpCommand("feedback")],
    },
    {
      name: "help",
      description: "Help about any command",
      options: [...globalOptions, helpCommand("help")],
    },
    {
      name: "import",
      description: "Import projects into your Doppler workplace",
      options: [
        ...globalOptions,
        helpCommand("Import projects into your Doppler workplace"),
        {
          name: "--template",
          description:
            "Path to template file (e.g. './path/to/file.yaml') (default \"doppler-template.yaml\")",
          args: { name: "string", template: "filepaths" },
        },
      ],
    },
    {
      name: "login",
      description: "Authenticate to Doppler",
      options: [
        ...globalOptions,
        helpCommand("login"),
        {
          name: "--no-copy",
          description: "Do not copy the auth code to the clipboard",
        },
        {
          name: "--overwrite",
          description: "Overwrite existing token if one exists",
        },
        {
          name: ["--yes", "-y"],
          description: "Open browser without confirmation",
        },
      ],
      subcommands: [
        {
          name: "revoke",
          description: "Revoke your auth token",
          options: [
            ...globalOptions,
            helpCommand("open"),
            noUpdateConfigOption,
            noUpdateConfigOptionOption,
            yesOption,
          ],
        },
        {
          name: "roll",
          description: "Roll your auth token",
          options: [helpCommand("open"), ...globalOptions],
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of the CLI",
      options: [
        ...globalOptions,
        helpCommand("logout"),
        noUpdateConfigOption,
        noUpdateConfigOptionOption,
        yesOption,
      ],
    },
    {
      name: "open",
      description: "Open the Doppler dashboard",
      options: [...globalOptions, helpCommand("open")],
      subcommands: [
        {
          name: "dashboard",
          description: "Open the Doppler dashboard",
          options: [...globalOptions, helpCommand("dashboard")],
        },
        {
          name: "docs",
          description: "Open the Doppler documentation home page",
          options: [...globalOptions, helpCommand("docs")],
        },
        {
          name: "github",
          description: "Open Doppler's GitHub to help contribute",
          options: [...globalOptions, helpCommand("github")],
        },
        {
          name: "status",
          description: "Open the Doppler status page",
          options: [...globalOptions, helpCommand("status")],
        },
      ],
    },
    {
      name: "projects",
      description: "Manage projects",
      options: [...globalOptions, helpCommand("projects")],
      subcommands: [
        {
          name: "create",
          description: "Create a project",
          options: [
            ...globalOptions,
            helpCommand("create"),
            {
              name: "--name",
              description: "Project name",
              args: { name: "string" },
            },
            {
              name: "--description",
              description: "Project description",
              args: { name: "string" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete a project",
          options: [
            ...globalOptions,
            helpCommand("delete"),
            projectOption,
            yesOption,
          ],
          args: { name: "project_id", generators: projectsGenerator },
        },
        {
          name: "get",
          description: "Get info for a project",
          options: [...globalOptions, helpCommand("get"), projectOption],
          args: { name: "project_id", generators: projectsGenerator },
        },
        {
          name: "update",
          description: "Update a project",
          args: { name: "project_id", generators: projectsGenerator },
          options: [
            ...globalOptions,
            helpCommand("projects"),
            projectOption,
            yesOption,
            {
              name: "--name",
              description: "Project name",
              args: { name: "string" },
            },
            {
              name: "--description",
              description: "Project description",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "run",
      description: "Run a command with secrets injected into the environment",
      options: [
        ...globalOptions,
        configOption,
        fallbackOnlyOption,
        fallbackOption,
        fallbackReadonlyOption,
        helpCommand("run"),
        noCacheOption,
        noExitOnWriteFailureOption,
        noFallbackOption,
        passphraseOption,
        projectOption,
        {
          name: "--command",
          description: 'Command to execute (e.g. "echo hi")',
          args: { name: "string", isCommand: true },
        },
        {
          name: "--forward-signals",
          description:
            "Forward signals to the child process (defaults to false when STDOUT is a TTY)",
        },
        {
          name: "--preserve-env",
          description:
            "Ignore any Doppler secrets that are already defined in the environment. this has potential security implications, use at your own risk",
        },
      ],
      args: { name: "command" },
      subcommands: [
        {
          name: "clean",
          description: "Delete old fallback files",
          options: [
            ...globalOptions,
            helpCommand("clean"),
            {
              name: "--all",
              description: "Delete all fallback files",
            },
            {
              name: "--dry-run",
              description:
                "Do not delete anything, print what would have happened",
            },
            {
              name: "--max-age",
              description:
                "Delete fallback files that exceed this age (default 336h0m0s)",
              args: { name: "duration" },
            },
          ],
        },
      ],
    },
    {
      name: "secrets",
      description: "Manage secrets",
      options: [
        ...globalOptions,
        configOption,
        helpCommand("secrets"),
        projectOption,
        rawOption,
        {
          name: "--only-names",
          description: "Only print the secret names; omit all values",
        },
      ],
      subcommands: [
        {
          name: "delete",
          description: "Delete the value of one or more secrets",
          args: { name: "secrets", generators: secretsGenerator },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("delete"),
            projectOption,
            rawOption,
            yesOption,
          ],
        },
        {
          name: "download",
          description: "Download a config's secrets for later use",
          args: { name: "string", template: "filepaths" },
          options: [
            ...globalOptions,
            configOption,
            fallbackOnlyOption,
            fallbackOption,
            fallbackPassphraseOption,
            fallbackReadonlyOption,
            formatOption,
            helpCommand("download"),
            noCacheOption,
            noExitOnWriteFailureOption,
            noFallbackOption,
            passphraseOption,
            projectOption,
            yesOption,
            {
              name: "--no-file",
              description: "Print the response to stdout",
            },
          ],
        },
        {
          name: "get",
          description: "Get the value of one or more secrets",
          args: {
            name: "secrets",
            generators: secretsGenerator,
          },

          options: [
            ...globalOptions,
            configOption,
            helpCommand("get"),
            projectOption,
            rawOption,
            {
              name: "--copy",
              description: "Copy the value(s) to your clipboard",
              args: { name: "string" },
            },
            {
              name: "--no-exit-on-missing-secret",
              description: "Do not exit if unable to find a requested secret",
            },
            {
              name: "--plain",
              description: "Print values without formatting",
            },
          ],
        },
        {
          name: "set",
          description: "Set the value of one or more secrets",
          args: { name: "secrets", generators: secretsGenerator },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("set"),
            projectOption,
            rawOption,
            {
              name: "--no-interactive",
              description:
                "Do not allow entering secret value via interactive mode",
            },
          ],
        },
        {
          name: "substitute",
          description: "Substitute secrets into a template file",
          args: { name: "secrets", generators: secretsGenerator },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("substitute"),
            projectOption,
            {
              name: "--output",
              description:
                "Path to the output file. by default the rendered text will be written to stdout",
              args: { name: "download path", template: "filepaths" },
            },
          ],
        },
        {
          name: "upload",
          description: "Upload a secrets file",
          args: { name: "secrets file", template: "filepaths" },
          options: [
            ...globalOptions,
            configOption,
            helpCommand("substitute"),
            projectOption,
            rawOption,
          ],
        },
      ],
    },
    {
      name: "settings",
      description: "Get workplace settings",
      options: [...globalOptions, helpCommand("settings")],
      subcommands: [
        {
          name: "update",
          description: "Update workplace settings",
          options: [
            ...globalOptions,
            helpCommand("settings"),
            {
              name: "--email",
              description: "Set the workplace's billing email",
              args: { name: "string" },
            },
            {
              name: "--name",
              description: "Set the workplace's name",
              args: { name: "string" },
            },
          ],
        },
      ],
    },
    {
      name: "setup",
      description: "Setup the Doppler CLI for managing secrets",
      options: [
        ...globalOptions,
        configOption,
        helpCommand("setup"),
        projectOption,
        {
          name: "--no-interactive",
          description:
            "Do not prompt for information. if the project or config is not specified, an error will be thrown",
        },
        {
          name: "--no-save-token",
          description:
            "Do not save the token to the config when passed via flag or environment variable",
        },
      ],
    },
    {
      name: "update",
      description: "Update the Doppler CLI",
      options: [
        ...globalOptions,
        helpCommand("update"),
        {
          name: ["--force", "-f"],
          description:
            "Install the latest CLI regardless of whether there's an update available",
        },
      ],
    },
  ],
  options: [
    ...globalOptions,
    helpCommand(),
    {
      name: ["-v", "--version"],
      description: "Get the version of the Doppler CLI",
    },
  ],
};

export default completionSpec;
