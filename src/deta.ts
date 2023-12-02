// This spec is following the references
// and descriptions from the Deta CLI Docs
// https://docs.deta.sh/docs/cli/commands

// Deta CLI version: v1.3.0-beta
// https://docs.deta.sh/docs/cli/releases#v130-beta

// Fig generator for runtime options. Manually coded from
// https://docs.deta.sh/docs/cli/commands#deta-new
const runtimes: Fig.Suggestion[] = [
  "node12",
  "node14",
  "python3.7",
  "python3.9",
].map((runtime) => ({
  name: runtime,
  description: "Runtime",
}));

const completionSpec: Fig.Spec = {
  name: "deta",
  description: "Deta CLI for managing Deta Micros",
  subcommands: [
    {
      name: "login",
      description: "Trigger the login process for the Deta CLI",
      options: [
        {
          name: "-h",
          description: "Show help for login",
        },
      ],
    },
    {
      name: "version",
      description: "Print the Deta version",
      subcommands: [
        {
          name: "upgrade",
          description: "Upgrade Deta CLI version",
          options: [
            {
              name: "-h",
              description: "Show help for upgrade",
            },
            {
              name: "-v",
              description: "Upgrade CLI to specific version",
              args: {
                name: "Version number",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "-h",
          description: "Show help for version",
        },
      ],
    },
    {
      name: "projects",
      description: "List Deta projects",
      options: [
        {
          name: "-h",
          description: "Show help for projects",
        },
      ],
    },
    {
      name: "new",
      description: "Create a new Deta Micro",
      args: {
        name: "path",
        description: "Path to new directory for the micro",
        isOptional: true,
      },
      options: [
        {
          name: "-h",
          description: "Show help for new",
        },
        {
          name: "-n",
          description: "Create a micro with Node (node14.x) runtime",
        },
        {
          name: "-p",
          description: "Create a micro with Python (python 3.9) runtime",
        },
        {
          name: "--name",
          description: "Set the name of the new micro",
          args: {
            name: "name",
            description: "Name of the new micro",
          },
        },
        {
          name: "--project",
          description: "Set the project under which the micro is created",
          args: {
            name: "project",
            description: "Name of the existing project",
          },
        },
        {
          name: "--runtime",
          description: "Create a micro with a specified runtime",
          args: {
            name: "runtime",
            description: "The selected runtime",
            suggestions: runtimes,
          },
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy new code to a Deta Micro",
      args: {
        name: "path",
        description: "Path to project directory",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "-h",
          description: "Show help for deploy",
        },
      ],
    },
    {
      name: "details",
      description: "Get detailed information about a specific Deta micro",
      args: {
        name: "path",
        description: "Path to project directory",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "-h",
          description: "Show help for details",
        },
      ],
    },
    {
      name: "watch",
      description:
        "Auto-deploy locally saved changes in real time to your Deta micro",
      args: {
        name: "path",
        description: "Path to project directory",
        template: "folders",
        isOptional: true,
      },
      options: [
        {
          name: "-h",
          description: "Show help for watch",
        },
      ],
    },
    {
      name: "auth",
      description: "Change auth settings for a Deta Micro",
      subcommands: [
        {
          name: "disable",
          description: "Disable HTTP Auth for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for auth disable",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable HTTP Auth for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for auth enable",
            },
          ],
        },
        {
          name: "create-api-key",
          description: "Create an API key for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for auth create-api-key",
            },
            {
              name: "-d",
              description: "Set the api-key description",
              args: {
                name: "description",
                description: "The api-key description",
              },
            },
            {
              name: "-n",
              description: "Set the api-key name",
              isRequired: true,
              args: {
                name: "name",
                description: "The api-key name",
              },
            },
            {
              name: "-o",
              description: "Set the api-key output file",
              args: {
                name: "outfile",
                description: "The api-key output file",
                template: "filepaths",
              },
            },
          ],
        },
        {
          name: "delete-api-key",
          description: "Delete an API key for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for auth delete-api-key",
            },
            {
              name: "-n",
              description: "Set the api-key name",
              isRequired: true,
              args: {
                name: "name",
                description: "The api-key name",
              },
            },
          ],
        },
      ],
      options: [
        {
          name: "-h",
          description: "Show help for auth",
        },
      ],
    },
    {
      name: "pull",
      description:
        "Pull the latest deployed code of a Deta Micro to your local machine",
      options: [
        {
          name: "-h",
          description: "Show help for pull",
        },
        {
          name: "-f",
          description: "Force the overwrite of existing files",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone a Deta Micro",
      args: {
        name: "path",
        description: "Path to new directory for the clone",
        isOptional: true,
      },
      options: [
        {
          name: "-h",
          description: "Show help for clone",
        },
        {
          name: "-n",
          description: "The name of the micro to be cloned",
          isRequired: true,
          args: {
            name: "name",
            description: "Name of the micro",
          },
        },
        {
          name: "-p",
          description: "The name of the project with the micro to be cloned",
          args: {
            name: "project",
            description: "Name of the project",
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update a Deta Micro's name or environment variables",
      options: [
        {
          name: "-h",
          description: "Show help for pull",
        },
        {
          name: "-n",
          description: "The new name of the micro",
          args: {
            name: "name",
            description: "New name for the micro",
          },
        },
        {
          name: "-r",
          description: "The new runtime of the micro",
          args: {
            name: "runtime",
            description: "New runtime for the micro",
            suggestions: runtimes,
          },
        },
        {
          name: "-e",
          description: "The new env file of the micro",
          args: {
            name: "env",
            description: "Path to env file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "visor",
      description: "Change the Visor settings for a Deta Micro",
      subcommands: [
        {
          name: "open",
          description: "Open Micro's visor page in the browser",
          options: [
            {
              name: "-h",
              description: "Show help for visor open",
            },
          ],
        },
        {
          name: "enable",
          description: "Enable Visor for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for visor enable",
            },
          ],
        },
        {
          name: "disable",
          description: "Disable Visor for a Deta Micro",
          options: [
            {
              name: "-h",
              description: "Show help for visor disable",
            },
          ],
        },
      ],
      options: [
        {
          name: "-h",
          description: "Show help for visor",
        },
      ],
    },
    {
      name: "run",
      description: "Run a Deta Micro from the CLI",
      args: {
        name: "action",
        description:
          "The action to be performed on the micro. See docs for full examples and details",
      },
      options: [
        {
          name: "-h",
          description: "Show help for run",
        },
        {
          name: "-l",
          description: "Show the micro logs",
        },
      ],
    },
    {
      name: "cron",
      description: "Change cron settings for a Deta Micro",
      subcommands: [
        {
          name: "set",
          description: "Set Deta Micro to run on a schedule",
          args: {
            name: "expression",
            description: "The cron expression to be set",
          },
          options: [
            {
              name: "-h",
              description: "Show help for cron set",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a schedule from a Deta Micro",
          args: {
            name: "expression",
            description: "The cron expression to be removed",
          },
          options: [
            {
              name: "-h",
              description: "Show help for cron remove",
            },
          ],
        },
      ],
      options: [
        {
          name: "-h",
          description: "Show help for cron",
        },
      ],
    },
  ],
  options: [
    {
      name: "-h",
      description: "Show help for deta",
    },
  ],
};

export default completionSpec;
