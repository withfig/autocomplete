const completionSpec: Fig.Spec = {
  name: "railway",
  description: "CLI for managing Railway Apps",
  subcommands: [
    {
      name: "add",
      description: "Add a plugin to your project",
    },
    {
      name: "completion",
      description: "Generate shell-completions",
      args: {
        name: "shell",
        description: "The shell to generate completions for",
        suggestions: ["bash", "zsh", "fish", "powershell"],
      },
    },
    {
      name: "connect",
      description: "Connect to a plugin",
      args: {
        name: "plugin",
        description: "The plugin to connect to",
        isOptional: true,
        suggestions: ["postgresql", "mysql", "redis", "mongodb"],
      },
    },
    {
      name: "delete",
      description: "Delete a project",
      args: {
        name: "project-id",
        description: "The project to delete",
        isOptional: true,
      },
    },
    {
      name: "docs",
      description: "Open Railway Documentation in default browser",
    },
    {
      name: "down",
      description: "Remove the most recent deployment",
      options: [
        {
          name: ["-e", "--environment"],
          description: "Environment to delete from",
          args: {},
        },
      ],
    },
    {
      name: "environment",
      description: "Change your environment",
      args: {
        name: "environment",
        description: "The environment to change to",
        isOptional: true,
        suggestions: ["production", "preview"],
      },
    },
    {
      name: "help",
      description: "Get help about any command",
      args: {
        name: "command",
        description: "The command to get help about",
        isOptional: true,
      },
    },
    {
      name: "init",
      description: "Create a new railway project",
    },
    {
      name: "link",
      description: "Connect to an existing railway project",
      args: {
        name: "project-id",
        description: "The project to link to",
        isOptional: true,
      },
    },
    {
      name: "list",
      description: "List all railway projects",
    },
    {
      name: "login",
      description: "Login to railway",
      options: [
        {
          name: "--browserless",
          description: "Login without opening a browser",
        },
      ],
    },
    {
      name: "logout",
      description: "Logout of railway",
    },
    {
      name: "logs",
      description: "Show logs for the most-recent deployment",
      options: [
        {
          name: ["-n", "--lines"],
          description: "Output a specific number of lines",
          args: {
            name: "Number of lines",
            description: "The number of lines to output",
          },
        },
      ],
    },
    {
      name: "open",
      description: "Open the project",
      subcommands: [
        {
          name: "live",
          description: "Open the live project",
        },
        {
          name: "metrics",
          description: "Open project metrics",
        },
        {
          name: "settings",
          description: "Open project settings",
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a local command using variables from the active environment",
      options: [
        {
          name: ["-e", "--environment"],
          description: "Environment to run in",
          args: {},
        },
        {
          name: ["-s", "--service"],
          description: "Define specific service",
          args: { name: "Service name" },
        },
      ],
    },
    {
      name: "shell",
      description: "Open a subshell with Railway variables available",
      options: [
        {
          name: ["-s", "--service"],
          description: "Deploy app to specific service",
          args: { name: "Service name" },
        },
      ],
    },
    {
      name: "status",
      description: "View the status of railway project",
    },
    {
      name: "unlink",
      description: "Disconnects the current directory from a Railway project",
    },
    {
      name: "up",
      description: "Deploy to railway",
      args: {
        name: "path",
        description: "Path to deploy to",
        isOptional: true,
        template: "folders",
      },
      options: [
        { name: ["-d", "--detach"], description: "Detach from build logs" },
        { name: ["-e", "--environment"], description: "Environment to run in" },
        {
          name: ["-s", "--service"],
          description: "Deploy app to specific service",
          args: { name: "Service name" },
        },
      ],
    },
    {
      name: "variables",
      description: "Work with environment variables",
      subcommands: [
        {
          name: "delete",
          description: "Delete variable",
          args: {
            name: "variable",
            description: "The name of the variable you want to delete",
          },
        },
        {
          name: "get",
          description: "Get variable value",
          args: {
            name: "variable",
            description: "The name of the variable you want to get",
          },
        },
        {
          name: "set",
          description: "Set variable value",
          args: [
            {
              name: "variable",
              description: "The name of the variable you want to set",
            },
            {
              name: "value",
              description: "Value of the variable",
            },
          ],
        },
      ],
      options: [
        { name: ["-e", "--environment"], description: "Environment" },
        {
          name: ["-s", "--service"],
          description: "Deploy app to specific service",
          args: { name: "Service name" },
        },
      ],
    },
    {
      name: "version",
      description: "Get the version of railway's CLI",
    },
    {
      name: "whoami",
      description: "Get the logged in user",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for railway",
    },
    { name: ["--version", "-V"], description: "Show railway version" },
    { name: ["--verbose", "-v"], description: "Enable verbose output" },
  ],
};
export default completionSpec;
