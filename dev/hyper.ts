const completionSpec: Fig.Spec = {
  name: "hyper",
  description: "Hyper is an Electron-based terminal",
  args: {
    template: "folders",
  },
  subcommands: [
    {
      name: ["install", "i"],
      description: "Install a plugin",
      args: {
        name: "plugin",
      },
    },
    {
      name: ["docs", "d", "h", "home"],
      description: "Open the npm page of a plugin",
      args: {
        name: "plugin",
      },
    },
    {
      name: "help",
      description: "Display help",
    },
    {
      name: ["list", "ls"],
      description: "List installed plugins",
    },
    {
      name: ["list-remote", "lsr", " ls-remote"],
      description: "List plugins available on npm",
    },
    {
      name: ["search", "s"],
      description: "Search for plugins on npm",
    },
    {
      name: ["uninstall", "u", "rm", "remove"],
      description: "Uninstall plugin",
    },
    {
      name: "version",
      description: "show version",
    },
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: `Output usage information`,
    },
    {
      name: ["-v", "--verbose"],
      description: `Verbose mode (disabled by default)`,
    },
  ],
};

export default completionSpec;
