import { npmScriptsGenerator } from "./npm";

const completionSpec: Fig.Spec = {
  name: "nr",
  description: "Run package.json scripts with the correct agent",
  args: [
    {
      name: "script",
      description: "The script name from package.json",
      isOptional: true,
      generators: npmScriptsGenerator,
      debounce: true,
    },
    {
      name: "scriptArgs",
      description: "Arguments passed to the script",
      isOptional: true,
      isVariadic: true,
    },
  ],
  options: [
    {
      name: "-",
      description: "Rerun the last command",
      priority: 60,
    },
    {
      name: "--completion-bash",
      description: "Print bash completion script",
      priority: 49,
    },
    {
      name: "--completion-zsh",
      description: "Print zsh completion script",
      priority: 49,
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
