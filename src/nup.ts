const completionSpec: Fig.Spec = {
  name: "nup",
  description: "Upgrade dependencies with the correct agent",
  options: [
    {
      name: ["-i", "--interactive"],
      description:
        "Interactive upgrade (Yarn Berry: up -i, Yarn 1: upgrade-interactive, pnpm: update -i)",
    },
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
