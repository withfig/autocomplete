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
        "Adds a path to the tree. Pijul has an internal tree to represent the files currently tracked. This command adds files and directories to that tree.",
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
  ],
  // Only uncomment if pijul takes an argument
  // args: {}
};
export default completionSpec;
