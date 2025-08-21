const completionSpec: Fig.Spec = {
  name: "nci",
  description:
    "Clean install with frozen/immutable lockfile behavior for the detected agent",
  options: [
    {
      name: "-C",
      description: "Change directory before running the command",
      args: { name: "path", template: "folders" },
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-v", "--version"],
      description: "Show version",
    },
  ],
};

export default completionSpec;
