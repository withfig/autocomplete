const completionSpec: Fig.Spec = {
  name: "apprunner",
  description: "AWS apprunner commands",
  subcommands: [
    {
      name: "create-connection",
      description: "Create an app runner connection resource",
    },
  ],
};

export default completionSpec;
