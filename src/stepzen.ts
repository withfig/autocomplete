const completionSpec: Fig.Spec = {
  name: "StepZen",
  description:
    "The StepZen CLI is the primary way to build, deploy and test your schemas on StepZen",
  subcommands: [
    {
      name: "help",
      description: "Display help for StepZen",
      args: {
        name: "command",
        description: "Command name for which to display help",
      },
    },
  ],
  // Only uncomment if stepzen takes an argument
  // args: {}
};
export default completionSpec;
