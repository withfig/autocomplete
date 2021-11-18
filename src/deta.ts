
// This spec is following the references
// and descriptions from the Deta CLI Docs
// https://docs.deta.sh/docs/cli/commands
const completionSpec: Fig.Spec = {
  name: "deta",
  description: "Deta is a CLI for managing Deta Micros",
  subcommands: [
    {
      name: "login",
      description: "Trigger the login process for the Deta CLI",
      options: [
        {
          name: ["-h"],
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
              name: ["-h"],
              description: "Show help for upgrade",
            },
            {
              name: ["-v"],
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
          name: ["-h"],
          description: "Show help for version",
        },
      ],
    },
    {
      name: "projects",
      description: "List Deta projects",
      options: [
        {
          name: ["-h"],
          description: "Show help for projects",
        },
      ],
    },    
    {
      name: "new",
      description: " Create a new Deta Micro",
      args: {
        name: "path",
        description: "Path to project directory",
        isOptional: true,
      },
      options: [
        {
          name: ["-h"],
          description: "Show help for new",
        },
        {
          name: ["-n"],
          description: "Create a micro with Node (node14.x) runtime",
        },
        {
          name: ["-p"],
          description: "Create a micro with Python (python 3.9) runtime",
        },
        {
          name: ["--name"],
          description: "Set the name of the new micro",
          args: {
            name: "name",
            description: "Name of the new micro",
          },
        },
        {
          name: ["--project"],
          description: "Set the project under which the micro is created",
          args: {
            name: "project",
            description: "Name of the existing project",
          },
        },
        {
          name: ["--runtime"],
          description: "Create a micro with a specified runtime",
          args: {
            name: "runtime",
            description: "The selected runtime: python3.7, python3.9, node12, node14",
          },
        },
      ],
    },
  ],
  options: [
    {
      name: ["-h"],
      description: "Show help for deta",
    },
  ],
  // Only uncomment if deta takes an argument
  // args: {}
};

export default completionSpec;
