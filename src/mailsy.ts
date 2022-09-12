const completionSpec: Fig.Spec = {
  name: "index",
  description: "⚡️ Quickly generate a disposable email straight from terminal",
  subcommands: [
    {
      name: "g",
      description: "Generate a new email",
    },
    {
      name: "m",
      description: "Fetch messages from the inbox",
    },
    {
      name: "d",
      description: "Delete account",
    },
    {
      name: "me",
      description: "Show details of the account",
    },
  ],
  options: [
    { name: ["-v", "--version"], description: "Output the current version" },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
};

export default completionSpec;
