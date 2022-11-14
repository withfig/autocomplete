const completionSpec: Fig.Spec = {
  name: "abc",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'abc my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for abc",
    },
  ],
  // Only uncomment if abc takes an argument
  // args: {}
};
export default completionSpec;
