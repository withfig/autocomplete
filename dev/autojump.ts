const completionSpec: Fig.Spec = {
  name: "autojump",
  description: "A faster way to navigate your filesystem",
  options: [
    {
      name: ["-h", "--help"],
      description: "Show the help message and exit",
    },
    {
      name: ["-a", "--add"],
      description: "Add path",
      args: { name: "directory", template: ["folders"] },
    },
    {
      name: ["-i", "--increase"],
      description: "Increase current directory weight",
      args: { name: "weight", isOptional: true },
    },
    {
      name: ["-d", "--decrease"],
      description: "Decrease current directory weight",
      args: { name: "weight", isOptional: true },
    },
    {
      name: "--complete",
      description: "Used for tab completion",
    },
    {
      name: "--purge",
      description: "Remove non-existent paths from database",
    },
    {
      name: ["-s", "--stat"],
      description: "Show database entries and their key weights",
    },
    {
      name: ["-v", "--version"],
      description: "Show version information",
    },
  ],
};

export default completionSpec;
