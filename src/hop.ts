const completionSpec: Fig.Spec = {
  name: "hop",
  description: "Interact with Hop in your terminal",
  subcommands: [
    {
      name: "auth",
      description: "Authenticate with Hop",
      subcommands: [
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
        {
          name: "login",
          description: "Login to Hop",
        },
        {
          name: "logout",
          description: "Logout the current user",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy a new container",
      args: {
        name: "dir",
        isOptional: true,
        description: "Directory to deploy, defaults to current directory",
      },
      options: [
        {
          name: ["--type", "-t"],
          description: "Type of the container, defaults to `ephemeral`",
        },
        {
          name: ["--containers", "-i"],
          description:
            "Number of containers to use, defaults to 1 if `scaling` is manual",
        },
        {
          name: ["--cpu", "-c"],
          description: "The number of CPUs to use, defaults to 1",
        },
        {
          name: ["--env", "-e"],
          description: "Environment variables to set, in the form of KEY=VALUE",
        },
        {
          name: ["--name", "-n"],
          description: "Name of the deployment, defaults to the directory name",
        },
        {
          name: ["--project", "-p"],
          description: "Namespace or ID of the project to use",
        },
        {
          name: ["--ram", "-m"],
          description: "Amount of RAM to use, defaults to 512MB",
        },
        {
          name: ["--scaling", "-s"],
          description: "Scaling strategy, defaults to `manual`",
        },
      ],
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      subcommands: [
        {
          name: "auth",
          description: "Get help on auth",
        },
        {
          name: "deploy",
          description: "Get help on deploy",
        },
        {
          name: "ignite",
          description: "Get help on ignite",
        },
        {
          name: "projects",
          description: "Get help on projects",
        },
        {
          name: "secrets",
          description: "Get help on project secrets",
        },
        {
          name: "whoami",
          description: "Get help on whoami",
        },
      ],
    },
    {
      name: "ignite",
      description: "Interact with Ignite containers",

      subcommands: [
        {
          name: "ls",
          description: "List all deployments",
          options: [
            {
              name: ["--project", "-p"],
              description: "Namespace or ID of the project to use",
            },
          ],
        },
        {
          name: "rm",
          description: "Delete a deployment",
          options: [
            {
              name: ["--project", "-p"],
              description: "Namespace or ID of the project to use",
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      description: "Interact with projects",
      subcommands: [
        {
          name: "info",
          description: "Get information about a project",
        },
        {
          name: "ls",
          description: "List all projects that you're authorized to",
        },
        {
          name: "new",
          description: "Create a new project",
        },
        {
          name: "rm",
          description: "Delete a project",
        },
        {
          name: "switch",
          description: "Switch to a different project",
        },
      ],
    },
    {
      name: "whoami",
      description: "Get information about the current user",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Prints help information",
    },
    {
      name: ["--version", "-v"],
      description: "Prints version information",
    },
    {
      name: ["--project", "-p"],
      description: "Namespace or ID of the project to use",
    },
  ],
  // Only uncomment if hop takes an argument
  // args: {}
};
export default completionSpec;
