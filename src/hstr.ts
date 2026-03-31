const completionSpec: Fig.Spec = {
  name: "hstr",
  description: "Shell history suggest box - easily view, navigate and search your command history",
  options: [
    {
      name: ["-h", "--help"],
      description: "Display help",
    },
    {
      name: ["-V", "--version"],
      description: "Display version information",
    },
    {
      name: ["-n", "--non-interactive"],
      description: "Print filtered history without interactive mode",
      args: {
        name: "filter",
        isOptional: true,
      },
    },
    {
      name: ["-k", "--kill-last-command"],
      description: "Delete the last command from history",
    },
    {
      name: ["-f", "--favorites"],
      description: "Display favorites view",
    },
    {
      name: ["-s", "--show-configuration"],
      description: "Show shell configuration",
    },
    {
      name: ["-B", "--show-bash-configuration"],
      description: "Show bash-specific configuration",
    },
    {
      name: ["-Z", "--show-zsh-configuration"],
      description: "Show zsh-specific configuration",
    },
    {
      name: ["-b", "--show-blacklist"],
      description: "Show commands excluded from history indexing",
    },
    {
      name: ["-t", "--is-tiocsti"],
      description: "Detect TIOCSTI support and print result",
    },
    {
      name: ["-i", "--insert-in-terminal"],
      description: "Insert specified command into terminal prompt",
      args: {
        name: "command",
      },
    },
  ],
};

export default completionSpec;
