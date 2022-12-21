// can be found at https://github.com/mavthedev/svokit.io
/*
  Svokit is a library that combines sveltekit with socket.io.
*/

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
