const completionSpec: Fig.Spec = {
  name: "csdx",
  description: "Content Stack CLI",
  subcommands: [
    {
      name: "login",
      description:
        "The auth:login command lets you log in to Contentstack and save the session",
      options: [
        {
          name: ["-u", "--username"],
          description: "Email address of your Contentstack account",
          args: {
            name: "email address",
          },
          isRequired: true,
        },
        {
          name: ["-p", "--password"],
          description: "Password can be passed in command",
          args: {
            name: "password",
          },
        },
      ],
    },
    {
      name: "auth:tokens:add",
      description:
        "Lets you add an existing management token from your Contentstack account and save it to the session for further use",
      options: [
        {
          name: ["-a", "--alias"],
          description: "Alias (name) you want to assign to the token",
          args: {
            name: "alias",
          },
          isRequired: true,
        },
        {
          name: "--management",
          description: "Alias (name) you want to assign to the token",
        },
        {
          name: "--delivery",
          description: "Flag to set delivery token",
        },
        {
          name: ["-k", "--stack-api-key"],
          description: "API key of the stack where the token exists",
          args: {
            name: "stack-api-key",
          },
          isRequired: true,
        },
        {
          name: "--token",
          description: "Value of the token",
          args: {
            name: "token",
          },
          dependsOn: ["--stack-api-key"],
        },
        {
          name: ["-f", "--force"],
          description: "Force token replace",
        },
      ],
    },
    {
      name: "auth:tokens:remove",
      description:
        "The auth:tokens:remove command lets you delete a management/ delivery token from your local CLI session",
      options: [
        {
          name: ["-a", "--alias"],
          description: "Alias (name) you want to assign to the token",
          args: {
            name: "alias",
          },
          isRequired: true,
        },
        {
          name: ["-i", "--ignore"],
          description: "Ignores if token not present. Command",
        },
      ],
    },
    {
      name: "cm:bootstrap",
      description:
        "The 'Bootstrap' plugin in Contentstack CLI allows users to automate the process of project setup for starter apps",
      options: [
        {
          name: "--app-name",
          description:
            "The name of the starter app you want to use. Example: reactjs-starter, nextjs-starter, gatsby-starter, angular-starter, nuxt-starter",
          args: {
            name: "app-name",
            suggestions: [
              {
                name: "reactjs-starter",
              },
              { name: "nextjs-starter" },
              { name: "gatsby-starter" },
              { name: "angular-starter" },
              { name: "nuxt-starter" },
            ],
          },
        },
        {
          name: "--project-dir",
          description:
            "Directory/path to setup the project. If directory name has a space then provide the path as a string or escap the space using back slash as shown in the below example",
          args: {
            name: "project-dir",
          },
        },
        {
          name: "--app-type",
          description: "Sample or Starter app",
          args: {
            name: "app-type",
            suggestions: [{ name: "Sample" }, { name: "Starter" }],
          },
        },
        {
          name: ["-k", "--stack-api-key"],
          description: "Provide stack API key to seed content",
          args: {
            name: "stack-api-key",
          },
        },
        {
          name: "--org",
          description: "Provide organization UID to create a new stack",
          args: {
            name: "org",
          },
        },
        {
          name: ["-n", "--stack-name"],
          description: "Name of the new stack that will be created",
          args: {
            name: "stack-name",
          },
        },
      ],
    },
    {
      name: "auth:tokens",
      description:
        "The auth:tokens command lists the existing tokens added to the session",
      options: [
        {
          name: ["-x", "--extended"],
          description: "To show extra columns",
        },
        {
          name: "--columns",
          description: "To display specific columns, separated by comma",
          args: {
            name: "columns",
          },
        },
        {
          name: "--csv",
          description: "Output is csv format",
        },
        {
          name: "--filter",
          description:
            "To filter the property by partial string matching, ex: name=foo",
          args: {
            name: "filter",
          },
        },
        {
          name: "--no-header",
          description: "To hide table’s header in output",
        },
        {
          name: "--no-truncate",
          description: "To not truncate output to fit screen",
        },
        {
          name: "--output",
          description: "To display output in a particular format",
          args: {
            name: "format",
            suggestions: [{ name: "csv" }, { name: "json" }, { name: "yaml" }],
          },
        },
        {
          name: "--sort",
          description:
            "To sort the list, prepend '-' to sort in a descending order",
          args: {
            name: "sort",
          },
        },
      ],
    },
    {
      name: "config:get:region",
      description:
        "The config:get:region command will return the name of the region on which you are performing actions in Contentstack, via the CLI",
    },
    {
      name: "config:set:region",
      description:
        "The config:set:region command lets you select a region, from the available Contentstack regions, to perform actions using the CLI",
      args: {
        name: "region",
        description: "The ContentStack AWS region you want to use",
        suggestions: [
          {
            name: "EU",
            displayName: "Europe",
            type: "option",
          },
          {
            name: "AZURE-NA",
            displayName: "Azure North America",
            type: "option",
          },
          {
            name: "NA",
            displayName: "North America",
            type: "option",
            priority: 100,
          },
        ],
      },
    },
    {
      name: "cm:stacks:export",
      description:
        "The cm:stacks:export command lets you export content from one stack to another",
      options: [
        {
          name: ["-c", "--config"],
          description: "[optional] path of the config",
          args: {
            name: "config",
          },
        },
        {
          name: ["-k", "--stack-api-key"],
          description: "API key of the source stack",
          args: {
            name: "stack-api-key",
          },
        },
        {
          name: ["-a", "--alias"],
          description:
            "The management token of the source stack from which you will export content",
          args: {
            name: "alias",
          },
        },
        {
          name: ["-d", "--data-dir"],
          description:
            "The path or the location in your file system to store the exported content. For e.g., ./content",
          args: {
            name: "data-dir",
          },
        },
        {
          name: "--branch",
          description:
            "The name of the branch where you want to export your content. If you don’t mention the branch name, then by default the content will be exported from all the branches of your stack",
          args: {
            name: "branch",
          },
        },
        {
          name: "--module",
          description:
            "[optional] Specific module name. If not specified, the export command will export all the modules to the stack. The available modules are assets, content-types, entries, environments, extensions, global-fields, labels, locales, webhooks, and workflows",
          args: {
            name: "module",
            suggestions: [
              "assets",
              "content-types",
              "entries",
              "environments",
              "extensions",
              "global-fields",
              "labels",
              "locales",
              "webhooks",
              "workflows",
            ],
          },
        },
        {
          name: "--content-types",
          description: "[optional] content type",
          args: {
            name: "content-types",
          },
        },
        {
          name: "--secured-assets",
          description: "[optional] use when assets are secured",
          args: {
            name: "secured-assets",
          },
        },
      ],
    },
    {
      name: "logout",
      description:
        "The auth:logout command lets you log out of Contentstack and clear the session",
    },
    {
      name: "whoami",
      description:
        "The csdx auth:whoami command returns the username (email address) of the user who is currently logged in to the session",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for csdx",
      isPersistent: true,
    },
  ],
};

export default completionSpec;
