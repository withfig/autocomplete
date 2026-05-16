const envNameGenerator: Fig.Generator = {
  script: ["amplify", "env", "list", "--json"],
  postProcess: function (out) {
    const envContent = JSON.parse(out);
    return envContent["envs"].map((env: string) => {
      return { name: env, description: "Environment" };
    });
  },
};

const amplifyCategories: Fig.Subcommand[] = [
  {
    name: "notifications",
  },
  {
    name: "analytics",
  },
  {
    name: "api",
  },
  {
    name: "auth",
  },
  {
    name: "function",
  },
  {
    name: "hosting",
  },
  {
    name: "interactions",
  },
  {
    name: "predictions",
  },
  {
    name: "storage",
  },
  {
    name: "xr",
  },
];

const categoryCommands: Fig.Subcommand[] = [
  {
    name: "add",
    description:
      "Adds a resource for an Amplify category in your local backend",
  },
  {
    name: "update",
    description:
      "Update resource for an Amplify category in your local backend",
  },
  {
    name: "remove",
    description:
      "Removes a resource for an Amplify category in your local backend",
  },
  {
    name: "console",
    description: "Opens the web console for the category",
  },
  {
    name: "push",
    description:
      "Provisions cloud resources with the latest local developments",
    options: [
      {
        name: "-y",
        description: "Answer all question as 'Yes'",
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "amplify",
  description:
    "A set of tools and services to help front-end web and mobile developers build scalable full stack applications",
  subcommands: [
    {
      name: "init",
      description:
        "Initializes a new project, sets up deployment resources in the cloud, and makes your project ready for Amplify",
    },
    {
      name: "configure",
      description:
        "Configures the attributes of your project for amplify-cli, such as switching front-end framework and adding/removing cloud-provider plugins",
    },
    {
      name: "push",
      description:
        "Provisions cloud resources with the latest local developments",
      options: [
        {
          name: "-y",
          description: "Answer all question as 'Yes'",
        },
      ],
      subcommands: [...amplifyCategories],
    },
    {
      name: "pull",
      description:
        "Fetch upstream backend environment definition changes from the cloud and updates the local environment to match that definition",
    },
    {
      name: "publish",
      description:
        "Executes amplify push, and then builds and publishes client-side application for hosting",
    },
    {
      name: "serve",
      description:
        "Executes amplify push, and then executes the project's start command to test run the client-side application locally",
    },
    {
      name: "status",
      description:
        "Shows the state of local resources not yet pushed to the cloud (Create/Update/Delete)",
      subcommands: [
        ...amplifyCategories,
        {
          name: "-v",
          description:
            "Shows the detailed verbose diff between local and deployed resources, including cloudformation-diff",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Deletes all of the resources tied to the project from the cloud",
    },
    {
      name: "add",
      description:
        "Adds a resource for an Amplify category in your local backend",
      subcommands: amplifyCategories,
    },
    {
      name: "update",
      description:
        "Update resource for an Amplify category in your local backend",
      subcommands: amplifyCategories,
    },
    {
      name: "remove",
      description:
        "Removes a resource for an Amplify category in your local backend",
      subcommands: amplifyCategories,
    },
    {
      name: "upgrade",
      description: "Download and install the latest version of the Amplify CLI",
    },
    {
      name: "uninstall",
      description:
        "Remove all global Amplify configuration files and uninstall the Amplify CLI. This will not delete any Amplify projects",
    },
    {
      name: "notifications",
      subcommands: categoryCommands,
    },
    {
      name: "analytics",
      subcommands: categoryCommands,
    },
    {
      name: "api",
      subcommands: [
        {
          name: "gql-compile",
          description:
            "Compiles your GraphQL schema and generates a corresponding cloudformation template",
        },
        {
          name: "migrate",
          description:
            "Migrates GraphQL schemas to the latest GraphQL transformer version",
        },
        {
          name: "override",
          description:
            "Generates overrides file to apply custom modifications to CloudFormation",
        },
        {
          name: "rebuild",
          description:
            "Removes and recreates all DynamoDB tables backing a GraphQL API. Useful for resetting test data during the development phase of an app",
        },
        ...categoryCommands,
      ],
    },
    {
      name: "auth",
      subcommands: categoryCommands,
    },
    {
      name: "function",
      subcommands: [
        {
          name: "build",
          description:
            "Builds all the functions in the project (does an npm install on the functions src directory)",
        },
        ...categoryCommands,
      ],
    },
    {
      name: "hosting",
      subcommands: categoryCommands,
    },
    {
      name: "interactions",
      subcommands: categoryCommands,
    },
    {
      name: "predictions",
      subcommands: categoryCommands,
    },
    {
      name: "storage",
      subcommands: categoryCommands,
    },
    {
      name: "xr",
      subcommands: categoryCommands,
    },
    {
      name: "mock",
      description: "Run mock server for testing categories locally",
    },
    {
      name: "codegen",
      description:
        "Generates GraphQL statements(queries, mutations and eventHandlers) and type annotations",
    },
    {
      name: "console",
      description: "Opens the web console for the selected cloud resource",
    },
    {
      name: "logout",
      description:
        "If using temporary cloud provider credentials, this logs out of the account",
    },
    {
      name: "env",
      description: "Display all commands available for new Amplify project",
      subcommands: [
        {
          name: "add",
          description: "Adds a new environment",
        },
        {
          name: "pull",
          description: "Pulls the current env from the cloud",
          options: [
            {
              name: "--restore",
              description: "Overwrite your local changes",
            },
          ],
        },
        {
          name: "checkout",
          description: "Switches to selected environment",
          args: {
            name: "env-name",
            description: "Env name",
            generators: envNameGenerator,
          },
          options: [
            {
              name: "--restore",
              description: "Overwrite your local changes",
            },
          ],
        },
        {
          name: "list",
          description: "Displays a list of all the environments",
          options: [
            {
              name: "--details",
              description: "See more details",
            },
            {
              name: "--json",
              description: "Format the output",
            },
          ],
        },
        {
          name: "get",
          description: "Displays the environment details",
          options: [
            {
              name: "--name",
              description: "Mandatory flag",
              isRequired: true,
              args: {
                name: "env-name",
                description: "Env name",
                generators: envNameGenerator,
              },
            },
          ],
        },
        {
          name: "import",
          description: "Imports an environment",
          options: [
            {
              name: "--name",
              description: "Mandatory flag",
              isRequired: true,
              args: {
                name: "env-name",
                description: "Env name",
                generators: envNameGenerator,
              },
            },
            {
              name: "--config",
              description: "Specify provider configs",
              isRequired: true,
              args: {},
            },
            {
              name: "--awsInfo",
              description: "Specify AWS configs",
              args: {},
            },
          ],
        },
        {
          name: "remove",
          description: "Removes an environment",
          args: {
            name: "env-name",
            description: "Env name",
            generators: envNameGenerator,
          },
        },
      ],
    },
  ],
};
export default completionSpec;
