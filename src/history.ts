const completionSpec: Fig.Spec = {
  name: "history",
  description: "Shows last 15 commands",
  subcommands: [
    {
      name: "0",
      description: "Shows full command history",
    },
    {
      name: "|",
      description: "Divider to run other commands on history",
      subcommands: [
        {
          name: "grep",
          description: "Search history",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--clear", "-c"],
      description: "Clears history",
    },
  ],
  // Only uncomment if history takes an argument
  // args: {}
};
export default completionSpec;
