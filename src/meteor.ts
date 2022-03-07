import npm from "./npm";

const completionSpec: Fig.Spec = {
  name: "meteor",
  description: "`meteor` command-line tool",
  subcommands: [npm],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for meteor",
    },
  ],
  // Only uncomment if meteor takes an argument
  // args: {}
};
export default completionSpec;
