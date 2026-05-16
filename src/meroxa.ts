const completionSpec: Fig.Spec = {
  name: "meroxa",
  description: "The Meroxa CLI",
  subcommands: [
    {
      name: ["accounts", "account"],
      description: "Manage Meroxa Accounts",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List Meroxa Accounts",
          options: [
            {
              name: "--no-headers",
              description: "Display output without headers",
            },
          ],
        },
        { name: "set", description: "Set active account" },
      ],
    },
    { name: "api", description: "Invoke Meroxa API" },
    {
      name: ["app", "apps"],
      description: "Manage Turbine Data Applications",
      subcommands: [
        {
          name: "deploy",
          description: "Deploy a Turbine Data Application",
          options: [
            {
              name: "--docker-hub-access-token",
              description:
                "DockerHub access token to use to build and deploy the app",
              hidden: true,
              args: { name: "docker-hub-access-token" },
            },
            {
              name: "--docker-hub-username",
              description:
                "DockerHub username to use to build and deploy the app",
              hidden: true,
              args: { name: "docker-hub-username" },
            },
            {
              name: "--env",
              description:
                "Environment (name or UUID) where application will be deployed to",
              args: { name: "env" },
            },
            {
              name: "--path",
              description:
                "Path to the app directory (default is local directory)",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--skip-collection-validation",
              description:
                "Skips unique destination collection and looping validations",
            },
            {
              name: "--spec",
              description:
                "Deployment specification version to use to build and deploy the app",
              hidden: true,
              args: { name: "spec" },
            },
            {
              name: "--verbose",
              description: "Prints more logging messages",
              hidden: true,
            },
          ],
        },
        {
          name: "describe",
          description: "Describe a Turbine Data Application",
          options: [
            {
              name: "--path",
              description:
                "Path to the app directory (default is local directory)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "init",
          description: "Initialize a Turbine Data Application",
          options: [
            {
              name: ["--lang", "-l"],
              description: "Language to use (js|go|py) (required)",
              args: { name: "lang", suggestions: ["js", "go", "py"] },
              isRequired: true,
            },
            {
              name: "--mod-vendor",
              description:
                "Whether to download modules to vendor or globally while initializing a Go application",
            },
            {
              name: "--path",
              description:
                "Path where application will be initialized (current directory as default)",
              args: { name: "path", template: "folders" },
            },
            {
              name: "--skip-mod-init",
              description:
                "Whether to run 'go mod init' while initializing a Go application",
            },
          ],
        },
        {
          name: ["ls", "list"],
          description: "List Turbine Data Applications",
          options: [
            {
              name: "--no-headers",
              description: "Display output without headers",
            },
          ],
        },
        {
          name: ["log", "logs"],
          description:
            "View relevant logs to the state of the given Turbine Data Application",
          options: [
            {
              name: "--path",
              description:
                "Path to the app directory (default is local directory)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "open",
          description:
            "Open the link to a Turbine Data Application in the Dashboard",
          options: [
            {
              name: "--path",
              description:
                "Path to the app directory (default is local directory)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: ["rm", "delete", "remove"],
          description: "Remove a Turbine Data Application",
          options: [
            { name: ["--force", "-f"], description: "Skip confirmation" },
            {
              name: "--path",
              description:
                "Path to the app directory (default is local directory)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "run",
          description: "Execute a Turbine Data Application locally",
          options: [
            {
              name: "--path",
              description: "Path of application to run",
              args: { name: "path", template: "folders" },
            },
          ],
        },
        {
          name: "upgrade",
          description: "Upgrade a Turbine Data Application",
          options: [
            {
              name: "--path",
              description:
                "Path where application exists (current directory as default)",
              args: { name: "path", template: "folders" },
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      description: "Authentication commands for Meroxa",
      subcommands: [
        {
          name: "login",
          description: "Login or Sign up to the Meroxa Platform",
        },
        {
          name: "logout",
          description: "Clears local login credentials of the Meroxa Platform",
        },
        { name: "whoami", description: "Display the current logged in user" },
      ],
    },
    { name: "billing", description: "Open your billing page in a web browser" },
    {
      name: ["build", "builds"],
      description: "Inspect Process Builds on Meroxa",
      subcommands: [
        { name: "describe", description: "Describe a Meroxa Process Build" },
        {
          name: ["log", "logs"],
          description: "List a Meroxa Process Build's Logs",
        },
      ],
    },
    { name: "completion", description: "Generate completion script" },
    {
      name: ["cfg", "config"],
      description: "Manage your Meroxa CLI configuration",
      subcommands: [
        {
          name: "describe",
          description: "Show Meroxa CLI configuration details",
        },
        {
          name: "set",
          description:
            "Update your Meroxa CLI configuration file with a specific key=value",
        },
      ],
    },
    {
      name: ["env", "environment", "environments"],
      description: "Manage environments on Meroxa",
      subcommands: [
        {
          name: "create",
          description: "Create an environment",
          options: [
            {
              name: ["--config", "-c"],
              description:
                "Environment configuration based on type and provider (e.g.: --config aws_access_key_id=my_access_key --config aws_secret_access_key=my_access_secret)",
              isRepeatable: true,
              args: { name: "config" },
            },
            {
              name: "--provider",
              description: "Environment cloud provider to use",
              args: { name: "provider" },
            },
            {
              name: "--region",
              description: "Environment region",
              args: { name: "region" },
            },
            {
              name: "--type",
              description: "Environment type, when not specified",
              args: { name: "type" },
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompt" },
          ],
        },
        { name: "describe", description: "Describe environment" },
        {
          name: ["ls", "list"],
          description: "List environments",
          options: [
            {
              name: "--no-headers",
              description: "Display output without headers",
            },
          ],
        },
        {
          name: ["rm", "delete", "remove"],
          description: "Remove environment",
          options: [
            { name: ["--force", "-f"], description: "Skip confirmation" },
            { name: "--yolo", description: "Skip confirmation", hidden: true },
          ],
        },
        { name: "repair", description: "Repair environment" },
        {
          name: "update",
          description: "Update an environment",
          options: [
            {
              name: ["--config", "-c"],
              description:
                "Updated environment configuration based on type and provider (e.g.: --config aws_access_key_id=my_access_key --config aws_secret_access_key=my_access_secret)",
              isRepeatable: true,
              args: { name: "config" },
            },
            {
              name: "--name",
              description: "Updated environment name, when specified",
              args: { name: "name" },
            },
            { name: ["--yes", "-y"], description: "Skip confirmation prompt" },
          ],
        },
      ],
    },
    { name: "login", description: "Login or Sign up to the Meroxa Platform" },
    {
      name: "logout",
      description: "Clears local login credentials of the Meroxa Platform",
    },
    {
      name: "open",
      description: "Open in a web browser",
      subcommands: [
        {
          name: "billing",
          description: "Open your billing page in a web browser",
        },
      ],
    },
    {
      name: ["resource", "resources"],
      description: "Manage resources on Meroxa",
      subcommands: [
        {
          name: ["add", "create"],
          description: "Add a resource to your Meroxa resource catalog",
          options: [
            {
              name: "--ca-cert",
              description: "Trusted certificates for verifying resource",
              args: { name: "ca-cert" },
            },
            {
              name: "--client-cert",
              description:
                "Client certificate for authenticating to the resource",
              args: { name: "client-cert" },
            },
            {
              name: "--client-key",
              description:
                "Client private key for authenticating to the resource",
              args: { name: "client-key" },
            },
            {
              name: "--env",
              description:
                "Environment (name or UUID) where resource will be created",
              args: { name: "env" },
            },
            {
              name: ["--metadata", "-m"],
              description: "Resource metadata",
              args: { name: "metadata" },
            },
            {
              name: "--password",
              description: "Password",
              args: { name: "password" },
            },
            {
              name: "--private-key-file",
              description: "Path to private key file",
              args: { name: "private-key-file" },
            },
            {
              name: "--ssh-private-key",
              description: "SSH tunneling private key",
              args: { name: "ssh-private-key" },
            },
            {
              name: "--ssh-url",
              description: "SSH tunneling address",
              args: { name: "ssh-url" },
            },
            { name: "--ssl", description: "Use SSL" },
            {
              name: "--token",
              description: "API Token",
              args: { name: "token" },
            },
            {
              name: "--type",
              description: "Resource type (required)",
              args: { name: "type" },
              isRequired: true,
            },
            {
              name: ["--url", "-u"],
              description: "Resource url",
              args: { name: "url" },
            },
            {
              name: "--username",
              description: "Username",
              args: { name: "username" },
            },
          ],
        },
        { name: "describe", description: "Describe resource" },
        {
          name: ["ls", "list"],
          description: "List resources and resource types",
          options: [
            {
              name: "--no-headers",
              description: "Display output without headers",
            },
            { name: "--type", description: "Alias to --types", hidden: true },
            { name: "--types", description: "List resource types" },
          ],
        },
        {
          name: ["rm", "delete", "remove"],
          description: "Remove resource",
          options: [
            { name: ["--force", "-f"], description: "Skip confirmation" },
            { name: "--yolo", description: "Skip confirmation", hidden: true },
          ],
        },
        {
          name: "rotate-tunnel-key",
          description: "Rotate the tunnel key for a resource",
          options: [
            { name: ["--force", "-f"], description: "Skip confirmation" },
            { name: "--yolo", description: "Skip confirmation", hidden: true },
          ],
        },
        {
          name: "update",
          description: "Update a resource",
          options: [
            {
              name: "--ca-cert",
              description: "Trusted certificates for verifying resource",
              args: { name: "ca-cert" },
            },
            {
              name: "--client-cert",
              description:
                "Client certificate for authenticating to the resource",
              args: { name: "client-cert" },
            },
            {
              name: "--client-key",
              description:
                "Client private key for authenticating to the resource",
              args: { name: "client-key" },
            },
            {
              name: ["--metadata", "-m"],
              description: "New resource metadata",
              args: { name: "metadata" },
            },
            {
              name: "--name",
              description: "New resource name",
              args: { name: "name" },
            },
            {
              name: "--password",
              description: "Password",
              args: { name: "password" },
            },
            {
              name: "--ssh-url",
              description: "SSH tunneling address",
              args: { name: "ssh-url" },
            },
            { name: "--ssl", description: "Use SSL" },
            {
              name: ["--url", "-u"],
              description: "New resource url",
              args: { name: "url" },
            },
            {
              name: "--username",
              description: "Username",
              args: { name: "username" },
            },
          ],
        },
        { name: "validate", description: "Validate a resource" },
      ],
    },
    {
      name: ["transform", "transforms"],
      description: "Manage transforms on Meroxa",
      subcommands: [
        {
          name: ["ls", "list"],
          description: "List transforms",
          options: [
            {
              name: "--no-headers",
              description: "Display output without headers",
            },
          ],
        },
      ],
    },
    { name: "version", description: "Display the Meroxa CLI version" },
    { name: "whoami", description: "Display the current logged in user" },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: ["accounts", "account"],
          description: "Manage Meroxa Accounts",
          subcommands: [
            { name: ["ls", "list"], description: "List Meroxa Accounts" },
            { name: "set", description: "Set active account" },
          ],
        },
        { name: "api", description: "Invoke Meroxa API" },
        {
          name: ["app", "apps"],
          description: "Manage Turbine Data Applications",
          subcommands: [
            {
              name: "deploy",
              description: "Deploy a Turbine Data Application",
            },
            {
              name: "describe",
              description: "Describe a Turbine Data Application",
            },
            {
              name: "init",
              description: "Initialize a Turbine Data Application",
            },
            {
              name: ["ls", "list"],
              description: "List Turbine Data Applications",
            },
            {
              name: ["log", "logs"],
              description:
                "View relevant logs to the state of the given Turbine Data Application",
            },
            {
              name: "open",
              description:
                "Open the link to a Turbine Data Application in the Dashboard",
            },
            {
              name: ["rm", "delete", "remove"],
              description: "Remove a Turbine Data Application",
            },
            {
              name: "run",
              description: "Execute a Turbine Data Application locally",
            },
            {
              name: "upgrade",
              description: "Upgrade a Turbine Data Application",
            },
          ],
        },
        {
          name: "auth",
          description: "Authentication commands for Meroxa",
          subcommands: [
            {
              name: "login",
              description: "Login or Sign up to the Meroxa Platform",
            },
            {
              name: "logout",
              description:
                "Clears local login credentials of the Meroxa Platform",
            },
            {
              name: "whoami",
              description: "Display the current logged in user",
            },
          ],
        },
        {
          name: "billing",
          description: "Open your billing page in a web browser",
        },
        {
          name: ["build", "builds"],
          description: "Inspect Process Builds on Meroxa",
          subcommands: [
            {
              name: "describe",
              description: "Describe a Meroxa Process Build",
            },
            {
              name: ["log", "logs"],
              description: "List a Meroxa Process Build's Logs",
            },
          ],
        },
        { name: "completion", description: "Generate completion script" },
        {
          name: ["cfg", "config"],
          description: "Manage your Meroxa CLI configuration",
          subcommands: [
            {
              name: "describe",
              description: "Show Meroxa CLI configuration details",
            },
            {
              name: "set",
              description:
                "Update your Meroxa CLI configuration file with a specific key=value",
            },
          ],
        },
        {
          name: ["env", "environment", "environments"],
          description: "Manage environments on Meroxa",
          subcommands: [
            { name: "create", description: "Create an environment" },
            { name: "describe", description: "Describe environment" },
            { name: ["ls", "list"], description: "List environments" },
            {
              name: ["rm", "delete", "remove"],
              description: "Remove environment",
            },
            { name: "repair", description: "Repair environment" },
            { name: "update", description: "Update an environment" },
          ],
        },
        {
          name: "login",
          description: "Login or Sign up to the Meroxa Platform",
        },
        {
          name: "logout",
          description: "Clears local login credentials of the Meroxa Platform",
        },
        {
          name: "open",
          description: "Open in a web browser",
          subcommands: [
            {
              name: "billing",
              description: "Open your billing page in a web browser",
            },
          ],
        },
        {
          name: ["resource", "resources"],
          description: "Manage resources on Meroxa",
          subcommands: [
            {
              name: ["add", "create"],
              description: "Add a resource to your Meroxa resource catalog",
            },
            { name: "describe", description: "Describe resource" },
            {
              name: ["ls", "list"],
              description: "List resources and resource types",
            },
            {
              name: ["rm", "delete", "remove"],
              description: "Remove resource",
            },
            {
              name: "rotate-tunnel-key",
              description: "Rotate the tunnel key for a resource",
            },
            { name: "update", description: "Update a resource" },
            { name: "validate", description: "Validate a resource" },
          ],
        },
        {
          name: ["transform", "transforms"],
          description: "Manage transforms on Meroxa",
          subcommands: [
            { name: ["ls", "list"], description: "List transforms" },
          ],
        },
        { name: "version", description: "Display the Meroxa CLI version" },
        { name: "whoami", description: "Display the current logged in user" },
      ],
    },
  ],
  options: [
    {
      name: "--api-url",
      description: "API url",
      isPersistent: true,
      hidden: true,
      args: { name: "api-url" },
    },
    {
      name: "--cli-config-file",
      description: "Meroxa configuration file",
      isPersistent: true,
      args: { name: "cli-config-file", template: "filepaths" },
    },
    {
      name: "--debug",
      description: "Display any debugging information",
      isPersistent: true,
    },
    { name: "--json", description: "Output json", isPersistent: true },
    {
      name: "--timeout",
      description: "Set the duration of the client timeout in seconds",
      isPersistent: true,
      args: { name: "timeout", default: "10s" },
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
