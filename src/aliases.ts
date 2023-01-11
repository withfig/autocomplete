const helpAndVersionOptions: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Prints help information",
    isPersistent: true,
  },
  {
    name: ["--version", "-V"],
    description: "Prints version information",
    isPersistent: true,
  },
];

const completionSpec: Fig.Spec = {
  name: "aliases",
  description: "Bash aliases on steroids, dynamic alias functions for bash",
  subcommands: [
    {
      name: "add",
      description: "Add an alias via the cli",
      args: [
        {
          name: "name",
          description: "The name of the alias",
        },
        {
          name: "command",
          description: "The command you want to run",
        },
      ],
    },
    {
      name: "clone",
      description: "Clone external aliases",
      options: [
        {
          name: ["-E", "--enable"],
          description:
            "Whether to enable the user if they are not currently enabled",
        },
      ],
      args: [
        {
          name: "username",
          description: "The username of the aliases you want to clone",
        },
        {
          name: "repo_url",
          description:
            "The git repo url of the aliases (defaults to github/<username>/dot-aliases)",
        },
      ],
    },
    {
      name: "directories",
      description: "List all directories initialized with aliases",
    },
    {
      name: "exec",
      description: "Execute an alias for a given directory",
      args: [
        {
          name: "directory",
          description: "Directory where the alias is defined",
          template: "folders",
        },
        {
          name: "name",
          isVariadic: true,
          description: "Name of alias",
        },
      ],
    },
    {
      name: "help",
      description: "Prints help information",
    },
    {
      name: "init",
      description: "Initialize a directory for aliases",
      options: [
        {
          name: ["-g", "--global"],
          description: "Returns the global initialization for the app",
        },
        {
          name: ["-u", "--user"],
          description: "Initialize aliases for a specific user",
          args: {
            name: "user",
          },
        },
      ],
    },
    {
      name: "list",
      description: "List the aliases available",
      options: [
        {
          name: ["-g", "--global"],
          description: "List only global aliases",
        },
        {
          name: ["-l", "--local"],
          description: "List only local aliases",
        },
        {
          name: ["-d", "--directory"],
          description: "List aliases for a specific directory",
          args: {
            name: "directory",
            template: "folders",
          },
        },
        {
          name: "name",
          description: "List aliases for with a specific name",
          args: {
            name: "name",
          },
        },
      ],
    },
    {
      name: "pull",
      description: "Pull a cloned user's aliases",
      args: {
        name: "username",
        description:
          "The username of the aliases you want to pull, leave blank to pull all user aliases",
      },
    },
    {
      name: "rehash",
      description: "Update the aliases",
    },
    {
      name: "remove",
      description: "Remove an alias via the cli",
      args: {
        name: "name",
        description: "The name of the alias",
      },
    },
    {
      name: "users",
      description: "List the users",
      subcommands: [
        {
          name: "disable",
          description: "Disable a user's aliases",
          args: {
            name: "username",
          },
        },
        {
          name: "enable",
          description: "Enable a user's aliases",
          args: {
            name: "username",
          },
        },
        {
          name: "help",
          description:
            "Prints this message or the help of the given subcommand(s)",
        },
        {
          name: "move",
          description: "Move a user up or down the prioritization list",
          args: [
            {
              name: "username",
            },
            {
              name: "prioritization",
            },
          ],
        },
        {
          name: "use",
          description: "Assign a user to the top of the priority list",
          args: {
            name: "username",
          },
        },
      ],
    },
  ],
  options: helpAndVersionOptions,
};
export default completionSpec;
