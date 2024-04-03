const completionSpec: Fig.Spec = {
  name: "shelve",
  description: "The Shelve CLI serves as a command-line interface designed for the Shelve platform. This tool enables users to authenticate with Shelve, facilitating the seamless transfer of environment variables for project collaboration within a team directly through the terminal interface",
  subcommands: [{
    name: "my_subcommand",
    description: "Example subcommand",
    subcommands: [{
      name: "my_nested_subcommand",
      description: "Nested subcommand, example usage: 'shelve my_subcommand my_nested_subcommand'"
    }],
  }],
  options: [{
    name: ["--help", "-h"],
    description: "Show help for shelve",
  }],
  // Only uncomment if shelve takes an argument
  // args: {}
};
export default completionSpec;
