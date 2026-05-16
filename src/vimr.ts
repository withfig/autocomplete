const completionSpec: Fig.Spec = {
  name: "vimr",
  description: "VimR — Neovim GUI for macOS in Swift",
  args: {
    template: ["filepaths", "folders"],
  },
  options: [
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: "--dry-run",
      description: "Just print the 'open' command",
    },
    {
      name: "--cwd",
      description: "Set the working directory",
      args: {
        name: "CWD",
      },
    },
    {
      name: "--line",
      description: "Go to line",
      args: {
        name: "LINE",
      },
    },
    {
      name: "--wait",
      description:
        "This command line tool will exit when the corresponding UI window is closed",
    },
    {
      name: "--nvim",
      description:
        "All arguments except --cur-env, --line, --dry-run and --wait will be passed over to the (new) nvim instance in a new UI window",
    },
    {
      name: "--cur-env",
      description:
        "Use the current environment variables when launching the background neovim process. All files will be opened in a new window",
    },
    {
      name: "-n",
      description: "Open files in tabs in a new window",
    },
    {
      name: "-s",
      description: "Open files in separate windows",
    },
  ],
};

export default completionSpec;
