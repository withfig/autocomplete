type SearchResult = {
  level: string;
  count: number;
  apps: App[];
  time: string;
};

type App = {
  id: number;
  bundleID: string;
  name: string;
  version: string;
  price: number;
};

const bundleIdentifierGenerator: Fig.Generator = {
  script: (context) => {
    const identifier = context[context.length - 1];
    if (!identifier) return undefined;

    return [
      "ipatool",
      "search",
      identifier,
      "--limit",
      "10",
      "--format",
      "json",
    ];
  },
  postProcess: (output) => {
    if (!output) return [];

    try {
      const { apps } = JSON.parse(output) as SearchResult;
      return apps.map((app) => ({
        name: app.bundleID,
        description: `${app.name} - ${app.version}`,
      }));
    } catch (error) {
      return [];
    }
  },
};

const bundleIdentifierOption: Fig.Option = {
  name: ["-b", "--bundle-identifier"],
  description: "Bundle identifier of the app",
  isRequired: true,
  args: {
    name: "identifier",
    generators: bundleIdentifierGenerator,
    filterStrategy: "fuzzy",
    debounce: true,
  },
};

const completionSpec: Fig.Spec = {
  name: "ipatool",
  displayName: "IPATool",
  description:
    "IPATool is a command line tool that allows you to search for iOS apps on the App Store and download a copy of the app package, known as an ipa file",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with the App Store",
      subcommands: [
        {
          name: "info",
          description: "Show current account info",
        },
        {
          name: "login",
          description: "Login to the App Store",
          options: [
            {
              name: "--auth-code",
              description: "2FA code for the Apple ID",
              args: {
                name: "2FA code",
              },
            },
            {
              name: ["-e", "--email"],
              description: "Apple ID email address",
              isRequired: true,
            },
            {
              name: ["-p", "--password"],
              description: "Apple ID password",
              isRequired: true,
            },
          ],
        },
        {
          name: "revoke",
          description: "Revoke your App Store credentials",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate shell completion script",
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
      name: "download",
      description: "Download (encrypted) iOS app packages from the App Store",
      options: [
        bundleIdentifierOption,
        {
          name: ["-o", "--output"],
          description: "The destination path of the downloaded app package",
          args: {
            name: "output path",
            template: "folders",
          },
        },
        {
          name: "--purchase",
          description: "Obtain a license for the app if needed",
        },
      ],
    },
    {
      name: "help",
      description: "Display help for command",
      args: { name: "command", isOptional: true, template: "help" },
    },
    {
      name: "purchase",
      description: "Obtain a license for the app from the App Store",
      options: [bundleIdentifierOption],
    },
    {
      name: "search",
      description: "Search for iOS apps available on the App Store",
      args: {
        name: "query",
      },
      options: [
        {
          name: ["-l", "--limit"],
          description: "Limit the number of results",
          args: {
            name: "limit",
            default: "5",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help for ipatool",
      isPersistent: true,
    },
    {
      name: "--non-interactive",
      description: "Run in non-interactive session",
      isPersistent: true,
    },
    {
      name: "--verbose",
      description: "Enables verbose logs",
      isPersistent: true,
    },
    {
      name: "--format",
      description: "Output format",
      isPersistent: true,
      args: {
        name: "format",
        suggestions: ["text", "json"],
        default: "text",
      },
    },
    {
      name: ["-v", "--version"],
      description: "Show version for ipatool",
    },
  ],
};
export default completionSpec;
