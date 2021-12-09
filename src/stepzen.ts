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
    {
      name: "login",
      description: "Login to StepZen",
    },
    {
      name: "logout",
      description: "Logout of StepZen",
    },
    {
      name: "start",
      description: "Deploy, watch and develop your API",
      options: [
        {
          name: "--dir",
          description: "The working directory for StepZen assets",
        },
        {
          name: "--endpoint",
          description: "The folder/endpoint to deploy to",
        },
        {
          name: "--port",
          description: "The port number to use for the GraphiQL explorer",
        },
      ],
    },
  ],
  // Only uncomment if stepzen takes an argument
  // args: {}
};
export default completionSpec;
