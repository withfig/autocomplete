const completionSpec: Fig.Spec = {
  name: "abc",
  description: "Demo commandline tool",
  subcommands: [
    {
      name: "login",
      description: "Example subcommand",
      subcommands: [
        {
          name: "--method",
          description: "Selects login method",
        },
        {
          name: "--apikey",
          description: "Logs in using apikey",
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
