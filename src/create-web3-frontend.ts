const completionSpec: Fig.Spec = {
  name: "create-web3-frontend",
  description:
    "Quickly create a Next.js project with wagmi and TailwindCSS ready to go",
  options: [
    {
      name: ["--ts", "--typescript"],
      description: "Initialize as a TypeScript project",
    },
    {
      name: "--use-npm",
      description: "Explicitly tell the CLI to bootstrap the app using npm",
    },
    {
      name: "--use-pnpm",
      description: "Explicitly tell the CLI to bootstrap the app using pnpm",
    },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
  args: { name: "project-directory", template: "folders" },
};
export default completionSpec;
