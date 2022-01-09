const vaporCommands = [
  "clean",
  "heroku",
  "new",
  "run",
  "supervisor",
  "xcode",
  "build",
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
      name: "new",
      description: "Generates a new app",
      args: {
        name: "name",
        description: "Name of project and folder",
      },
      options: [
        {
          name: ["--template", "-T"],
          description: "The URL of a Git repository to use as a template",
        },
        {
          name: "--branch",
          description: "Template repository branch to use",
        },
        {
          name: ["--output", "-o"],
          description: "The directory to place the new project in",
        },
        {
          name: "--no-commit",
          description: "Skips adding a first commit to the newly created repo",
        },
      ],
    },
    {
      name: "clean",
      description: "Cleans temporary files",
      options: [
        {
          name: ["--update", "-u"],
          description: "Delete Package.resolved file if it exists",
        },
        {
          name: ["--global", "-g"],
          description: "Clean Xcode's global DerivedData cache",
        },
        {
          name: ["--swiftpm", "-s"],
          description: "Delete .swiftpm folder",
        },
      ],
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
};
export default completionSpec;
