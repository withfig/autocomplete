const completionSpec: Fig.Spec = {
  name: "nmap",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'nmap my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for nmap",
    },
  ],
  // Only uncomment if nmap takes an argument
  // args: {}
};
export default completionSpec;
