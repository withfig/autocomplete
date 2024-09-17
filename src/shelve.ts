const shelveSubcommands: Fig.Subcommand[] = [
  {
    name: ["create", "c", "init"],
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
    name: ["pull", "pl"],
    description: "Pull variables for specified environment to .env file",
    icon: "📥",
    options: [
      {
        name: ["--env", "-e"],
        description: "Specify the environment",
        args: {
          name: "environment",
        },
      },
    ],
  },
  {
    name: ["push", "ps"],
    description: "Push variables for specified environment to Shelve",
    icon: "📤",
    options: [
      {
        name: ["--env", "-e"],
        description: "Specify the environment",
        args: {
          name: "environment",
        },
      },
    ],
  },
  {
    name: ["generate", "g"],
    description: "Generate resources for a project",
    icon: "🔄",
  },
  {
    name: ["config", "cf"],
    description: "Show the current configuration",
    icon: "⚙️",
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
