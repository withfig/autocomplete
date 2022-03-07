import npm from "./npm";

const completionSpec: Fig.Spec = {
  name: "meteor",
  description: "",
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
