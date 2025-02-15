const completionSpec: Fig.Spec = {
  name: "runn",
  description: "A tool for running operations following a scenario",
  subcommands: [
    {
      name: "help",
      description: "Help for runn",
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Help for runn",
    },
    {
      name: ["--version", "-v"],
      description: "Version for runn",
    },
  ],
};
export default completionSpec;
