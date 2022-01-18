const completionSpec: Fig.Spec = {
  name: "apprunner",
  description: "AWS apprunner commands",
  subcommands: [
    {
      name: "create-connection",
      description: "Create an app runner connection resource",
      options: [
        {
          name: "--connection-name",
          description: "Name for the new connection",
          args: {
            name: "name",
            description: "Name of the connection to be created",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
