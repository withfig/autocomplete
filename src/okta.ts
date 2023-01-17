const completionSpec: Fig.Spec = {
  name: "okta",
  description: "The Okta CLI is the easiest way to get started with Okta!",
  subcommands: [
    {
      name: "register",
      description: "Sign up for a new Okta account",
      options: [
        {
          name: "--company",
          description:
            "Company/organization used when registering a new Okta account",
        },
        {
          name: "--email",
          description: "Email used when registering a new Okta account",
        },
        {
          name: "--first-name",
          description: "First name used when registering a new Okta account",
        },
        {
          name: "--last-name",
          description: "Last name used when registering a new Okta account",
        },
      ],
    },
    {
      name: "login",
      description: "Authorizes the Okta CLI tool",
    },
    {
      name: "apps",
      description: "Manage Okta apps",
      subcommands: [
        {
          name: "config",
          description: "Show an Okta app's configuration",
          options: [
            {
              name: "--app",
              description: "The App ID",
            },
          ],
        },
        {
          name: "create",
          description: "Create a new Okta app",
          options: [
            {
              name: "--app-name",
              description:
                "Application name to be created, defaults to current directory name",
            },
            {
              name: "--authorization-server-id",
              description: "Okta Authorization Server Id",
            },
            {
              name: "--config-file",
              description: "Application config file",
            },
            {
              name: "--redirect-uri",
              description: "OIDC Redirect URI",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an Okta app",
          args: {
            name: "appIds",
            description: "List of application IDs to be deleted",
          },
          options: [
            {
              name: ["-f", "--force"],
              description:
                "Deactivate and delete applications without confirmation",
            },
          ],
        },
      ],
    },
    {
      name: "start",
      description: "Creates an Okta Sample Application",
      args: {
        name: "name",
        description: "The name of the sample app to create",
        isOptional: true,
      },
    },
    {
      name: "help",
      description: "Displays help information about the specified command",
      options: [
        {
          name: "register",
          description: "Sign up for a new Okta account",
        },
        {
          name: "login",
          description: "Authorizes the Okta CLI tool",
        },
        {
          name: "apps",
          description: "Manage Okta apps",
        },
        {
          name: "start",
          description: "Creates an Okta Sample Application",
        },
        {
          name: "help",
          description: "Displays help information about the specified command",
        },
        {
          name: "generate-completion",
          description: "Generate bash/zsh completion script for Okta",
        },
      ],
    },
    {
      name: "generate-completion",
      hidden: true,
      description: "Generate bash/zsh completion script for Okta",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for Okta CLI",
    },
    {
      name: ["--version", "-V"],
      description: "Print version information",
    },
    {
      name: "--verbose",
      description: "Verbose logging",
    },
    {
      name: "--batch",
      description: "Batch mode, will not prompt for user input",
    },
  ],
  // Only uncomment if okta takes an argument
  // args: {}
};
export default completionSpec;
