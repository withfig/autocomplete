const completionSpec: Fig.Spec = {
  name: "ansible",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'ansible my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for ansible",
    },
  ],
  // Only uncomment if ansible takes an argument
  // args: {}
};
export default completionSpec;
