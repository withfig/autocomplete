const spec: Fig.Spec = {
  name: "create-redwood-app",
  icon: "https://avatars.githubusercontent.com/u/45050444?s=48&v=4",
  args: {
    name: "projectName",
    description: "Name of your Redwood project",
  },
  options: [
    { name: ["--help", "-h"], description: "Show help" },
    {
      name: ["--typescript", "--ts"],
      description: "Generate a TypeScript project",
    },
    {
      name: "--overwrite",
      description: "Create even if target directory isn't empty",
    },
    {
      name: "--telemetry",
      description: "Enables sending telemetry events for this create",
    },
    {
      name: ["--git-init", "--git"],
      description: "Initialize a git repository",
    },
    {
      name: ["--commit-message", "-m"],
      description: "Commit message for the initial commit",
    },
    { name: ["--yes", "-y"], description: "Skip prompts and use defaults" },
    { name: "--version", description: "Show version number" },
    {
      name: "--yarn-install",
      description: "Install node modules. Skip via --no-yarn-install",
    },
  ],
};

export default spec;
