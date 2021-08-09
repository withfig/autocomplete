const completionSpec: Fig.Spec = {
  name: "autojump",
  description: "a faster way to navigate your filesystem",
  options: [
    {
      name: ["-h", "--help"],
      description: "show the help message and exit",
    },
    {
      name: ["-a", "--add"],
      description: "add path",
      args: [{ name: "directory", template: ["folders"] }],
    },
    {
      name: ["-i", "--increase"],
      description: "increase current directory weight",
      args: [{ name: "weight", isOptional: true }],
    },
    {
      name: ["-d", "--decrease"],
      description: "decrease current directory weight",
      args: [{ name: "weight", isOptional: true }],
    },
    {
      name: "--complete",
      description: "used for tab completion",
    },
    {
      name: "--purge",
      description: "remove non-existent paths from database",
    },
    {
      name: ["-s", "--stat"],
      description: "show database entries and their key weights",
    },
    {
      name: ["-v", "--version"],
      description: "show version information",
    },
  ],
};

export default completionSpec;
