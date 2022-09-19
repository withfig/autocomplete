const completionSpec: Fig.Spec = {
  name: "pocketbase",
  description: "PocketBase CLI",
  subcommands: [
    {
      name: "help",
      description: "Help about any command",
      args: { name: "subcommand", template: "help", isOptional: true },
    },
    {
      name: "migrate",
      description: "Executes DB migration scripts",
      subcommands: [
        {
          name: "collections",
          description:
            "(Experimental) Creates new migration file with the most recent local collections configuration",
          args: {
            name: "folder",
            description: "Migrations folder",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Creates new migration template file",
          args: [
            {
              name: "name",
              description: "Migration file name",
            },
            {
              name: "folder",
              description: "Migrations folder",
              template: "folders",
              isOptional: true,
            },
          ],
        },
        {
          name: "down",
          description: "Reverts the last [number] applied migrations",
          args: {
            name: "number",
            description: "Number of applied migrations to revert",
            isOptional: true,
          },
        },
        {
          name: "up",
          description: "Runs all available migrations",
        },
      ],
    },
    {
      name: "serve",
      description: "Starts the web server (default to 127.0.0.1:8090)",
      options: [
        {
          name: "--http",
          description: 'API HTTP server address (default "127.0.0.1:8090")',
          args: {
            name: "string",
            description: "API HTTP server address",
          },
        },
        {
          name: "--https",
          description:
            "API HTTPS server address (auto TLS via Let's Encrypt). The incoming --http address traffic also will be redirected to this address",
          args: {
            name: "string",
            description:
              "API HTTPS server address (auto TLS via Let's Encrypt)",
          },
        },
        {
          name: "--origins",
          description: "CORS allowed domain origins list (default [*])",
          args: {
            name: "strings",
            description: "CORS allowed domain origins list",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: "--debug",
      description: "Enable debug mode, aka showing more detailed logs",
    },
    {
      name: "--dir",
      description: 'PocketBase data directory (default "pb_data")',
      args: {
        name: "dir",
        description: "PocketBase data directory",
        template: "folders",
      },
    },
    {
      name: "--encryptionEnv",
      description:
        "Environment variable whose value of 32 chars will be used as encryption key for the app settings (default none)",
      args: {
        name: "env",
        description: "Encryption environment variable name",
      },
    },
    {
      name: ["-h", "--help"],
      description: "Show help for pocketbase",
    },
    {
      name: ["-v", "--version"],
      description: "Show version for pocketbase",
    },
  ],
};
export default completionSpec;
