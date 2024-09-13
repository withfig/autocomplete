const shelveSubcommands: Fig.Subcommand[] = [
  {
    name: "create",
    description: "Create a new project",
    icon: "🚀",
    options: [
      {
        name: ["--name", "-n"],
        description: "Name of the project",
        args: {
          name: "project-name",
        },
      },
    ],
  },
  {
    name: "pull",
    description: "Retrieve the environment variables from Shelve",
    icon: "📥",
    options: [
      {
        name: ["--env", "-e"],
        description: "Retrieve the environment variables from Shelve",
        args: {
          name: "environment",
        },
      },
    ],
  },
  {
    name: "push",
    description: "Send the environment variables to Shelve",
    icon: "📤",
    options: [
      {
        name: ["--env", "-e"],
        description: "Send the environment variables to Shelve",
        args: {
          name: "environment",
        },
      },
    ],
  },
  {
    name: "generate",
    description: "Generate resources for the project",
    icon: "🔄",
  },
  {
    name: ["--help", "-h"],
    description: "Show help",
  },
];

const completionSpec: Fig.Spec = {
  name: "shelve",
  description:
    "Shelve CLI a command-line interface designed for the Shelve platform. This tool enables users to authenticate with Shelve, facilitating the seamless transfer of environment variables for project collaboration within a team directly through the terminal interface",
  subcommands: shelveSubcommands,
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help",
      isPersistent: true,
    },
  ],
};
export default completionSpec;
