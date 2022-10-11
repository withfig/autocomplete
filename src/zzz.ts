const completionSpec: Fig.Spec = {
  name: "zzz",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'zzz my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for zzz",
    },
  ],
  // Only uncomment if zzz takes an argument
  // args: {}
};
export default completionSpec;
