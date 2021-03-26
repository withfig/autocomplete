var completionSpec = {
  name: "github",
  description: "Open a git repository in GitHub Desktop",
  args: {
    name: "path",
    isOptional: true,
    generators: { template: "folders" },
  },
  options: [
    {
      name: "--help",
      description: "Show the help page for a command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: ["clone", "open", "help"],
      },
    },
  ],
  subcommands: [
    {
      name: "clone",
      description: "Clone a repository",
      insertValue: "clone ",
      args: {
        name: "url|slug",
        suggestions: [
          { name: "https://github.com/", icon: "fig://icon?type=git" },
          { name: "https://gitlab.com/", icon: "fig://icon?type=git" },
          { name: "https://bitbucket.com/", icon: "fig://icon?type=git" },
        ],
      },
      options: [
        {
          name: ["--branch", "-b"],
          description: "The branch to checkout after cloning",
          args: { name: "branch" },
        },
      ],
    },
    {
      name: "open",
      insertValue: "open ",
      description: "Open a git repository in GitHub Desktop",
      args: {
        name: "path",
        isOptional: true,
        generators: { template: "folders" },
      },
    },
    {
      name: "help",
      description: "Show the help page for a command",
      args: {
        name: "command",
        isOptional: true,
        suggestions: ["clone", "open", "help"],
      },
    },
  ],
};
