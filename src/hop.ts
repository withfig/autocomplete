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
          args: {
            name: "container type",
            suggestions: ["ephemeral", "persistent"],
          },
        },
        {
          name: ["--containers", "-i"],
          description:
            "Number of containers to use, defaults to 1 if `scaling` is manual",
          args: {
            name: "container amount",
            suggestions: ["1", "2", "4", "8", "10"],
          },
        },
        {
          name: ["--cpu", "-c"],
          description: "The number of CPUs to use, defaults to 1",
          args: {
            name: "cpu amount",
            suggestions: ["1", "2", "4", "8"],
          },
        },
        {
          name: ["--env", "-e"],
          description: "Environment variables to set, in the form of KEY=VALUE",
          args: {
            name: "environment variable",
            suggestions: ["port="],
          },
        },
        {
          name: ["--name", "-n"],
          description: "Name of the deployment, defaults to the directory name",
          args: {
            name: "deployment name",
          },
        },
        {
          name: ["--project", "-p"],
          description: "Namespace or ID of the project to use",
          args: {
            name: "project",
            isOptional: true,
          },
        },
        {
          name: ["--ram", "-m"],
          description: "Amount of RAM to use, defaults to 512MB",
          args: {
            name: "ram amount",
            suggestions: ["128MB", "256MB", "512MB", "1G", "2G", "4G"],
          },
        },
        {
          name: ["--scaling", "-s"],
          description: "Scaling strategy, defaults to `manual`",
          args: {
            name: "scaling strategy",
            suggestions: ["manual", "autoscale"],
          },
        },
      ],
    },
    {
      name: "help",
      description: "Prints this message or the help of the given subcommand(s)",
      args: {
        name: "command",
        template: "help",
      },
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
      name: "link",
      description: "Link an existing deployment to a hopfile",
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
