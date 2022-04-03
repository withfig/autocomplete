const completionSpec: Fig.Spec = {
  name: "omz",
  description: "Oh My Zsh",
  subcommands: [
    {
      name: "help",
      description: "Print the help message",
    },
    {
      name: "changelog",
      description: "Print the changelog",
    },
    {
      name: "plugin",
      description: "Manage plugins",
      subcommands: [
        {
          name: "disable",
          description: "Disable plugin(s)",
          args: {
            name: "plugin",
          },
        },
        {
          name: "enable",
          description: "Enable plugin(s)",
          args: {
            name: "plugin",
          },
        },
        {
          name: "info",
          description: "Get information of a plugin",
          args: {
            name: "plugin",
          },
        },
        {
          name: "list",
          description: "List all available Oh My Zsh plugins",
        },
        {
          name: "load",
          description: "Load plugin(s)",
          args: {
            name: "plugin",
          },
        },
      ],
    },
    {
      name: "pr",
      description: "Manage Oh My Zsh Pull Requests",
      subcommands: [
        {
          name: "clean",
          description: "Delete all PR branches (ohmyzsh/pull-*)",
        },
        {
          name: "test",
          description: "Fetch PR #NUMBER and rebase against master",
          args: {
            name: "PR_number_or_URL",
          },
        },
      ],
    },
    {
      name: "reload",
      description: "Reload the current zsh session",
    },
    {
      name: "theme",
      description: "Manage themes",
      subcommands: [
        {
          name: "list",
          description: "List all available Oh My Zsh themes",
        },
        {
          name: "set",
          description: "Set a theme in your .zshrc file",
          args: {
            name: "theme",
          },
        },
        {
          name: "use",
          description: "Load a theme",
          args: {
            name: "theme",
          },
        },
      ],
    },
    {
      name: "update",
      description: "Update Oh My Zsh",
    },
    {
      name: "version",
      description: "Show the version",
    },
  ],
};

export default completionSpec;
