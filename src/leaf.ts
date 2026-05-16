const completionSpec: Fig.Spec = {
  name: "leaf",
  description: "Create and interact with your leaf projects",
  options: [
    {
      name: ["-h", "--help"],
      description:
        "Display help for the given command. When no command is given display help for the list command",
    },
    {
      name: ["-q", "--quiet"],
      description: "Do not output any message",
    },
    {
      name: ["-V", "--version"],
      description: "Display this application version",
    },
    {
      name: "--ansi",
      description: "Force ANSI output",
      exclusiveOn: ["--no-ansi"],
    },
    {
      name: "--no-ansi",
      description: "Disable ANSI output",
      exclusiveOn: ["--ansi"],
    },
    {
      name: ["-n", "--no-interaction"],
      description: "Do not ask any interactive question",
    },
    {
      name: ["-v", "--verbose"],
      description:
        "Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug",
      isRepeatable: 3,
    },
  ],
  subcommands: [
    {
      name: "completion",
      description: "Dump the shell completion script",
    },
    {
      name: "create",
      description: "[init] Create a new Leaf PHP project",
      args: {
        name: "project name",
        description: "Name of the project",
      },
    },
    {
      name: "deploy",
      description: "[publish] Deploy your leaf project",
    },
    {
      name: "help",
      description: "Display help for a command",
    },
    {
      name: "install",
      description: "Add a new package to your leaf app",
      args: {
        name: "package name",
        description: "Name of the package",
      },
    },
    {
      name: "interact",
      description: "Interact with your application",
    },
    {
      name: "list",
      description: "List commands",
    },
    {
      name: "run",
      description: "Run a script in your composer.json",
      args: {
        name: "command name",
        description: "Name of the command",
      },
    },
    {
      name: "serve",
      description: "Run your Leaf app",
      options: [
        {
          name: "--port",
          description: "The port number to run the server on",
          args: {
            name: "port number",
            description: "The port number to run the server on",
          },
        },
        {
          name: "--watch",
          description: "Watch for changes and restart the server",
        },
      ],
    },
    {
      name: "test",
      description: "Test your leaf application through leaf alchemy",
    },
    {
      name: "test:setup",
      description: "Add tests to your application",
    },
    {
      name: "uninstall",
      description: "Uninstall a package",
      args: {
        name: "package name",
        description: "Name of the package",
      },
    },
    {
      name: "update",
      description: "Update leaf cli to the latest version",
    },
  ],
};

export default completionSpec;
