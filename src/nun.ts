import { npmSearchGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nun",
  description: "Uninstall dependencies with the correct agent",
  args: {
      name: "packages",
      description: "Packages to remove (omit to enter interactive mode)",
      isOptional: true,
      isVariadic: true,
      generators: npmSearchGenerator,
    },
  options: [
    {
      name: "-m",
      description: "Interactive multiple selection to remove",
    },
    {
      name: ["-g", "--global"],
      description: "Uninstall globally",
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
