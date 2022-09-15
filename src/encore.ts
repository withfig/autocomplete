const completionSpec: Fig.Spec = {
  name: "encore",
  description: "Encore is the fastest way of developing backend applications",
  subcommands: [
    {
      name: "app",
      description: "Commands to create and link Encore apps",
      subcommands: [
        { name: "clone", description: "Clone an Encore app to your computer" },
        {
          name: "create",
          description: "Create a new Encore app",
          options: [
            {
              name: "--example",
              description: "URL to example code to use",
              args: { name: "example" },
            },
          ],
        },
        {
          name: "link",
          description: "Link an Encore app with the server",
          options: [
            {
              name: ["--force", "-f"],
              description: "Force link even if the app is already linked",
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Commands to authenticate with Encore",
      subcommands: [
        {
          name: "login",
          description: "Log in to Encore",
          options: [
            {
              name: ["--auth-key", "-k"],
              description: "Auth Key to use for login",
              args: { name: "auth-key" },
            },
          ],
        },
        {
          name: "logout",
          description: "Logs out the currently logged in user",
        },
        { name: "signup", description: "Create a new Encore account" },
        { name: "whoami", description: "Show the current logged in user" },
      ],
    },
    {
      name: "check",
      description:
        "Checks your application for compile-time errors using Encore's compiler",
      options: [
        {
          name: "--codegen-debug",
          description:
            "Dump generated code (for debugging Encore's code generation)",
        },
      ],
    },
    {
      name: "daemon",
      description: "Starts the encore daemon",
      subcommands: [
        { name: "env", description: "Prints Encore environment information" },
      ],
      options: [
        {
          name: ["--foreground", "-f"],
          description: "Start the daemon in the foreground",
        },
      ],
    },
    {
      name: "db",
      description: "Database management commands",
      subcommands: [
        {
          name: "conn-uri",
          description: "Outputs the database connection string",
          options: [
            {
              name: ["--env", "-e"],
              description: 'Environment name to connect to (such as "prod")',
              args: { name: "env", default: "local" },
            },
          ],
        },
        {
          name: "proxy",
          description: "Sets up a proxy tunnel to the database",
          options: [
            {
              name: ["--env", "-e"],
              description: 'Environment name to connect to (such as "prod")',
              args: { name: "env", default: "local" },
            },
            {
              name: ["--port", "-p"],
              description: "Port to listen on (defaults to a random port)",
              args: { name: "port", default: "0" },
            },
          ],
        },
        {
          name: "reset",
          description:
            "Resets the databases for the given services. Use --all to reset all databases",
          options: [
            {
              name: "--all",
              description: "Reset all services in the application",
            },
          ],
        },
        {
          name: "shell",
          description: "Connects to the database via psql shell",
          options: [
            {
              name: ["--env", "-e"],
              description: 'Environment name to connect to (such as "prod")',
              args: { name: "env", default: "local" },
            },
          ],
        },
      ],
    },
    {
      name: "eject",
      description:
        "Eject provides ways to eject your application to migrate away from using Encore",
      subcommands: [
        {
          name: "docker",
          description:
            "Docker builds a portable docker image of your Encore application",
          options: [
            {
              name: "--base",
              description: "Base image to build from",
              args: { name: "base", default: "scratch" },
            },
            {
              name: ["--push", "-p"],
              description: "Push image to remote repository",
            },
          ],
        },
      ],
    },
    {
      name: "gen",
      description: "Code generation commands",
      subcommands: [
        {
          name: "client",
          description: "Generates an API client for your app",
          options: [
            {
              name: ["--env", "-e"],
              description:
                "The environment to fetch the API for (defaults to the primary environment)",
              args: { name: "env" },
            },
            {
              name: ["--lang", "-l"],
              description:
                'The language to generate code for ("typescript" and "go" are supported)',
              args: { name: "lang" },
            },
            {
              name: ["--output", "-o"],
              description: "The filename to write the generated client code to",
              args: {
                name: "output",
                template: ["filepaths"],
                suggestCurrentToken: true,
              },
            },
          ],
        },
        { name: "wrappers", description: "Generates user-facing wrapper code" },
      ],
    },
    {
      name: "logs",
      description: "Streams logs from your application",
      options: [
        {
          name: ["--env", "-e"],
          description:
            "Environment name to stream logs from (defaults to the production environment)",
          args: { name: "env" },
        },
        {
          name: "--json",
          description: "Whether to print logs in raw JSON format",
        },
      ],
    },
    {
      name: "run",
      description: "Runs your application",
      options: [
        {
          name: "--debug",
          description: "Compile for debugging (disables some optimizations)",
        },
        {
          name: "--listen",
          description: 'Address to listen on (for example "0.0.0.0:4000")',
          args: { name: "listen", default: "localhost" },
        },
        {
          name: ["--port", "-p"],
          description: "Port to listen on",
          args: { name: "port", default: "4000" },
        },
        {
          name: "--tunnel",
          description:
            "Create a tunnel to your machine for others to test against",
        },
        {
          name: ["--watch", "-w"],
          description: "Watch for changes and live-reload",
        },
      ],
    },
    {
      name: "secret",
      description: "Secret management commands",
      subcommands: [
        {
          name: "set",
          description: "Sets a secret value",
          options: [
            {
              name: ["--dev", "-d"],
              description: "To set the secret for development use",
            },
            {
              name: ["--prod", "-p"],
              description: "To set the secret for production use",
            },
          ],
        },
      ],
    },
    { name: "test", description: "Tests your application" },
    {
      name: "version",
      description: "Reports the current version of the encore application",
      subcommands: [
        {
          name: "update",
          description:
            "Checks for an update of encore and, if one is available, runs the appropriate command to update it",
        },
      ],
    },
    {
      name: "vpn",
      description: "VPN management commands",
      subcommands: [
        {
          name: "start",
          description: "Sets up a secure connection to private environments",
        },
        {
          name: "status",
          description: "Determines the status of the VPN connection",
        },
        { name: "stop", description: "Stops the VPN connection" },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "app",
          description: "Commands to create and link Encore apps",
          subcommands: [
            {
              name: "clone",
              description: "Clone an Encore app to your computer",
            },
            { name: "create", description: "Create a new Encore app" },
            { name: "link", description: "Link an Encore app with the server" },
          ],
        },
        {
          name: "auth",
          description: "Commands to authenticate with Encore",
          subcommands: [
            { name: "login", description: "Log in to Encore" },
            {
              name: "logout",
              description: "Logs out the currently logged in user",
            },
            { name: "signup", description: "Create a new Encore account" },
            { name: "whoami", description: "Show the current logged in user" },
          ],
        },
        {
          name: "check",
          description:
            "Checks your application for compile-time errors using Encore's compiler",
        },
        {
          name: "daemon",
          description: "Starts the encore daemon",
          subcommands: [
            {
              name: "env",
              description: "Prints Encore environment information",
            },
          ],
        },
        {
          name: "db",
          description: "Database management commands",
          subcommands: [
            {
              name: "conn-uri",
              description: "Outputs the database connection string",
            },
            {
              name: "proxy",
              description: "Sets up a proxy tunnel to the database",
            },
            {
              name: "reset",
              description:
                "Resets the databases for the given services. Use --all to reset all databases",
            },
            {
              name: "shell",
              description: "Connects to the database via psql shell",
            },
          ],
        },
        {
          name: "eject",
          description:
            "Eject provides ways to eject your application to migrate away from using Encore",
          subcommands: [
            {
              name: "docker",
              description:
                "Docker builds a portable docker image of your Encore application",
            },
          ],
        },
        {
          name: "gen",
          description: "Code generation commands",
          subcommands: [
            {
              name: "client",
              description: "Generates an API client for your app",
            },
            {
              name: "wrappers",
              description: "Generates user-facing wrapper code",
            },
          ],
        },
        { name: "logs", description: "Streams logs from your application" },
        { name: "run", description: "Runs your application" },
        {
          name: "secret",
          description: "Secret management commands",
          subcommands: [{ name: "set", description: "Sets a secret value" }],
        },
        { name: "test", description: "Tests your application" },
        {
          name: "version",
          description: "Reports the current version of the encore application",
          subcommands: [
            {
              name: "update",
              description:
                "Checks for an update of encore and, if one is available, runs the appropriate command to update it",
            },
          ],
        },
        {
          name: "vpn",
          description: "VPN management commands",
          subcommands: [
            {
              name: "start",
              description:
                "Sets up a secure connection to private environments",
            },
            {
              name: "status",
              description: "Determines the status of the VPN connection",
            },
            { name: "stop", description: "Stops the VPN connection" },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--verbose", "-v"],
      description: "Verbose output",
      isPersistent: true,
      args: { name: "verbose", default: "0" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
