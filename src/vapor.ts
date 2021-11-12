const vaporCommands: Fig.Suggestion[] = [
  "clean",
  "heroku",
  "new",
  "run",
  "supervisor",
  "xcode",
];

const completionSpec: Fig.Spec = {
  name: "vapor",
  description: "Vapor Toolbox (Server-side Swift web framework)",
  subcommands: [
    {
      name: "build",
      description: "Builds an app in the console",
    },
    {
      name: "clean",
      description: "Cleans temporary files",
    },
    {
      name: "heroku",
      description: "Commands for working with Heroku",
      subcommands: [
        {
          name: "init",
          description: "Configures app for deployment to Heroku",
        },
        {
          name: "push",
          description: "Deploys app to Heroku",
        },
      ],
    },
    {
      name: "run",
      description:
        "Runs an app from the console. Equivalent to `swift run --enable-test-discovery Run`",
    },
    {
      name: "supervisor",
      description: "Commands for working with Supervisord",
      subcommands: [
        {
          name: "init",
          description: "Creates a Supervisor entry for the current project",
        },
        {
          name: "restart",
          description: "Restarts current project in Supervisor",
        },
        {
          name: "update",
          description: "Updates Supervisor entry for current project",
        },
      ],
    },
    {
      name: "xcode",
      description: "Opens an app in Xcode",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for vapor",
      args: {
        name: "command",
        description: "Display usage information about the specified command",
        suggestions: vaporCommands,
      },
    },
  ],
  // Only uncomment if vapor takes an argument
  // args: {}
};
export default completionSpec;
