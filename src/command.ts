const completionSpec: Fig.Spec = {
  name: "command",
  description: "Run an external command",
  // There are other options but they're not common between fish/zsh/bash.
  // generateSpec doesn't have a `context` object to get the process.
  options: [
    {
      name: "-v",
      description: "Print the location of the command",
    },
  ],
  args: {
    isCommand: true,
  },
};

export default completionSpec;
