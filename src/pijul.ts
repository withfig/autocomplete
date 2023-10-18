const completionSpec: Fig.Spec = {
  name: "pijul",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'pijul my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for pijul",
    },
  ],
  // Only uncomment if pijul takes an argument
  // args: {}
};
export default completionSpec;
