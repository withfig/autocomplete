const completionSpec: Fig.Spec = {
  name: "yank",
  description: "Yank terminal output to clipboard",
  options: [
    {
      name: "-i",
      description: "Ignore case differences between pattern and the input",
    },
    { name: "-l", description: "Use the default delimiters except for space" },
    { name: "-x", description: "Use alternate screen" },
    { name: "-v", description: "Print the version" },
    {
      name: "-d",
      description:
        "All input characters not present in delim will be recognized as fields",
      args: {
        name: "delim",
        description: "Custom delimiters",
      },
    },
    {
      name: "-g",
      description: "Use pattern to recognize fields",
      args: {
        name: "pattern",
        description: "Pattern to recognize fields",
      },
    },
    {
      name: "--",
      description: "Use a command as the yank command",
      args: {
        name: "command",
        description: "Command to use as the yank command",
        isVariadic: true,
      },
    },
  ],
};
export default completionSpec;
