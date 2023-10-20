const completionSpec: Fig.Spec = {
  name: "pijul",
  description:
    "Welcome to the Pijul book, an introduction to Pijul, a distributed version control system that is at the same time theoretically sound, fast and easy to learn and use.",
  subcommands: [
    {
      // name: "my_subcommand",
      // description: "Example subcommand",
      // subcommands: [{
      //   name: "my_nested_subcommand",
      //   description: "Nested subcommand, example usage: 'pijul my_subcommand my_nested_subcommand'"
      // }],
      name: "add",
      description:
        "Adds a path to the tree. Pijul has an internal tree to represent the files currently tracked. This command adds files and directories to that tree",
      args: {
        name: "<PATHS>...",
        description: "Paths to add to the internal tree",
      },
      options: [
        {
          name: ["-f", "--force"],
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: ["-r", "--recursive"],
        },
      ],
    },
    {
      name: "apply",
      description: "Applies changes to a channel",
      args: {
        name: "<CHANGE>...",
        description:
          "The change that need to be applied. If this value is missing, read the change in text format on the standard input",
      },
      options: [
        {
          name: "--channel <CHANNEL>",
          description: "--deps-only",
        },
        {
          name: "--deps-only",
          description:
            "Only apply the dependencies of the change, not the change itself. Only applicable for a single change",
        },
        {
          name: ["-h", "--help"],
          description: "Print help information",
        },
        {
          name: "--repository <REPO_PATH>",
          description:
            "Set the repository where this command should run. Defaults to the first ancestor of the current directory that contains a .pijul directory",
        },
      ],
    },
  ],
  // Only uncomment if pijul takes an argument
  // args: {}
};
export default completionSpec;
