const ICON =
  "https://user-images.githubusercontent.com/1536647/77317442-78625700-6d0b-11ea-9822-0fb21e557e87.png";

const newCommand: Fig.Subcommand = {
  name: "new",
  icon: ICON,
  description: "Create a new Wasp project",
  args: {
    name: "project-name",
    description: "Name of the project",
  },
  options: [
    {
      name: ["--template", "-t"],
      icon: "📄",
      args: {
        name: "template",
        description: "Template to use",
        generators: {
          script: `curl https://raw.githubusercontent.com/wasp-lang/starters/main/templates.json`,
          postProcess: function (out) {
            try {
              const templates = JSON.parse(out);
              return templates.map((template) => ({
                name: template.name,
                description: template.description,
              }));
            } catch (e) {
              console.log(e);
              return [];
            }
          },
        },
        suggestions: [
          {
            name: "basic",
            description: "Simple starter template with a single page",
          },
        ],
      },
    },
  ],
};

const versionCommand: Fig.Subcommand = {
  name: "version",
  description: "Prints current version of CLI",
};

const wasplsCommand: Fig.Subcommand = {
  name: "waspls",
  description: "Run Wasp Language Server. Add --help to get more info",
  options: [
    {
      name: "--log",
      args: {
        name: "log-file",
        description:
          "Write log output to this file, if present. If not present, no logs are written. If set to `[OUTPUT]`, log output is sent to the LSP client",
      },
    },
    {
      name: "--stdio",
      description:
        "Use stdio for communicating with LSP client. This is the only communication method we support for now, so this is the default anyway and this flag has no effect",
    },
    {
      name: "--help",
      description: "Show this help text",
    },
  ],
};

const COMPLETION = "completion";
const waspCompletion: Fig.Subcommand = {
  name: COMPLETION,
  icon: "🤖",
  description: "Prints help on bash completion",
  requiresSubcommand: false,
  subcommands: [
    {
      name: "generate",
      description: "Generates bash completion script",
      insertValue: `${"\b".repeat(
        COMPLETION.length + 1
      )}${COMPLETION}:generate`,
    },
  ],
};

const waspUninstall: Fig.Subcommand = {
  name: "uninstall",
  icon: "🗑️",
  isDangerous: true,
  description: "Removes Wasp from your system",
};

const startCommand: Fig.Subcommand = {
  name: "start",
  description: "Runs Wasp app in development mode, watching for file changes",
  icon: ICON,
  priority: 100,
  requiresSubcommand: false,
  subcommands: [
    {
      name: "db",
      description: "Starts managed development database for you",
    },
  ],
};

const cleanCommand: Fig.Subcommand = {
  name: "clean",
  icon: "🧹",
  description:
    "Deletes all generated code and other cached artifacts. Wasp equivalent of 'have you tried closing and opening it again?'",
};

const buildCommand: Fig.Subcommand = {
  name: "build",
  icon: "🏗️",
  description:
    "Generates full web app code, ready for deployment. Use when deploying or ejecting",
};

const deployCommand: Fig.Subcommand = {
  name: "deploy",
  icon: "🚀",
  description: "Deploys your app to the cloud",
  options: [
    {
      name: ["--help", "-h"],
      description: "Show this help text",
    },
  ],
  subcommands: [
    {
      name: "fly",
      priority: 80,
      description: "Deploys your app to Fly.io",
      subcommands: [
        {
          name: "launch",
          description: "Launches your app on Fly.io",
          args: [
            {
              name: "basename",
              description: "Base app name to use on Fly.io (must be unique)",
            },
            {
              name: "region",
              description: "3 letter deployment region to use on Fly.io",
              filterStrategy: "fuzzy",
              generators: {
                cache: {
                  strategy: "max-age",
                  ttl: 1000 * 60 * 60 * 24 * 7, // 1 week
                },
                script: "flyctl platform regions --json",
                postProcess: function (out) {
                  try {
                    const regions = JSON.parse(out);
                    return regions.map((region) => ({
                      name: `${region["Code"]} - ${region["Name"]}${
                        region["RequiresPaidPlan"] ? "🤑" : ""
                      }`,
                      insertValue: region["Code"],
                      priority: region["RequiresPaidPlan"] ? 0 : 100,
                    }));
                  } catch (e) {
                    console.log(e);
                    return [];
                  }
                },
              },
            },
          ],
        },
        {
          name: "cmd",
          options: [
            {
              name: "--context",
              isRequired: true,
              args: { name: "context", suggestions: ["server", "client"] },
            },
          ],
          loadSpec: "flyctl",
        },
      ],
    },
    {
      name: "help",
      args: {
        name: "command",
      },
    },
  ],
};

const telemetryCommand: Fig.Subcommand = {
  name: "telemetry",
  description: "Prints telemetry status",
};

const depsCommand: Fig.Subcommand = {
  name: "deps",
  icon: "📦",
  description: "Prints the dependencies that Wasp uses in your project",
};

const dockerfileCommand: Fig.Subcommand = {
  name: "dockerfile",
  description: "Prints the contents of the Wasp generated Dockerfile",
};

const infoCommand: Fig.Subcommand = {
  name: "info",
  icon: "❓",
  description: "Prints basic information about current Wasp project",
};

const testCommand: Fig.Subcommand = {
  name: "test",
  icon: "🧪",
  description: "Executes tests in your project",
};

const waspCommands = [
  newCommand,
  versionCommand,
  wasplsCommand,
  waspCompletion,
  waspUninstall,
];
const projectCommands = [
  ...waspCommands,
  startCommand,
  buildCommand,
  cleanCommand,
  deployCommand,
  telemetryCommand,
  depsCommand,
  dockerfileCommand,
  infoCommand,
  testCommand,
];

const completionSpec: Fig.Spec = {
  name: "wasp",
  description:
    "Amazing fullstack framework for building web apps with less boilerplate",
  generateSpec: async (context, executeShellCommand) => {
    const isWaspDir =
      (await executeShellCommand(
        `while [ ! -f "$PWD/main.wasp" ] && [ "$PWD" != "/" ]; do cd ..; done; [ -f "$PWD/main.wasp" ] && echo "true" || echo "false"`
      )) == "true";

    if (!isWaspDir) {
      return {
        name: "wasp",
        subcommands: waspCommands.map((cmd) =>
          cmd.name === "new" ? { ...cmd, priority: 100 } : cmd
        ),
        options: [
          {
            name: ["--help", "-h"],
            description: "Show this help text",
          },
        ],
      };
    }

    return {
      name: "wasp",
      subcommands: projectCommands,
    };
  },
};

export default completionSpec;
