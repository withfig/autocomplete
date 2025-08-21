const completionSpec: Fig.Spec = {
  name: "na",
  description:
    "Agent alias: run agent-specific commands directly (npm/yarn/pnpm/bun/deno)",
  args: [
    {
      name: "subcommand",
      description: "Agent subcommand (e.g. run, add)",
      isOptional: true,
    },
    {
      name: "args",
      description: "Arguments passed through to the agent",
      isVariadic: true,
      isOptional: true,
    },
  ],
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
