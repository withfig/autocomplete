const completionSpec: Fig.Spec = {
  name: "svokit",
  description: "Runs built svokit project",
  subcommands: [
    {
      name: "setup",
      description: "Creates svokit config (experimental)",
    },
    {
      name: "run",
      description: "Runs build svokit project",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for svokit",
    },
  ],
};
export default completionSpec;
