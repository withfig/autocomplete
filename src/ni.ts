import { npmSearchGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "ni",
  description:
    "Use the right package manager: install deps or add packages with the correct agent",
  args: {
      name: "packages",
      description: "Packages to add (omit to run install)",
      isOptional: true,
      isVariadic: true,
      generators: npmSearchGenerator,
      suggestions: ["vite", "@types/node", "typescript", "eslint", "prettier"],
    },
  options: [
    {
      name: ["-D", "--save-dev"],
      description: "Install as devDependency",
    },
    {
      name: ["-P", "--production"],
      description: "Install only production dependencies",
    },
    {
      name: "--frozen",
      description:
        "Use frozen/immutable install (ci / frozen-lockfile / immutable)",
    },
    {
      name: ["-g", "--global"],
      description: "Install package globally (uses default agent)",
    },
    {
      name: ["-i", "--interactive"],
      description: "Interactive mode to search and select packages to install",
    },
    {
      name: "-C",
      description: "Change directory before running the command",
      args: { name: "path", template: "folders" },
    },
    {
      name: "?",
      description: "Print the resolved command for the current agent",
      priority: 51,
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
      priority: 49,
    },
    {
      name: ["-v", "--version"],
      description: "Show version",
      priority: 49,
    },
  ],
};

export default completionSpec;
