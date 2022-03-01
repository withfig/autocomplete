const completionSpec: Fig.Spec = {
  name: "micro",
  subcommands: [
    {
      name: "-plugin",
      description: "Manage plugins",
      options: [
        {
          name: "remove",
          description: "Remove plugin(s)",
          args: {
            name: "plugin",
            isVariadic: true,
          },
        },
        {
          name: "update",
          description:
            "Update plugin(s) (if no argument is given, updates all plugins)",
          args: {
            name: "plugin",
            isVariadic: true,
          },
        },
        {
          name: "search",
          description: "Search for a plugin",
          args: {
            name: "plugin",
            isVariadic: false,
          },
        },
        {
          name: "list",
          description: "List installed plugins",
        },
        {
          name: "available",
          description: "List available plugins",
        },
      ],
    },
  ],
  options: [
    {
      name: "-clean",
      description: "Cleans the configuration directory",
    },
    {
      name: "-config-dir",
      description: "Specify a custom location for the configuration directory",
      args: {
        name: "dir",
        isVariadic: false,
      },
    },
    {
      name: "-options",
      description: "Show all option help",
    },
    {
      name: "-debug",
      description: "Enable debug mode",
    },
    {
      name: "-version",
      description: "Show the version number and information",
    },
  ],
  args: {
    template: ["filepaths"],
    isVariadic: false,
  },
};
export default completionSpec;
