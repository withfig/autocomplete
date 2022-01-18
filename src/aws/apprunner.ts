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
        {
          name: "--provider-type",
          description: "The source repository provider",
          args: {
            name: "provider",
            description: "Repository provider",
          },
        },
        {
          name: "--tags",
          description:
            "A list of metadata items that you can associate with your connection resource. A tag is a key-value pair",
          args: {
            name: "key=value",
            description: "A key-value pair",
          },
        },
        {
          name: "--cli-input-json",
          description: "Reads arguments from the JSON string provided",
        },
        {
          name: "--cli-input-yaml",
          description: "Reads arguments from the YAML string provided",
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request",
        },
      ],
    },
  ],
};

export default completionSpec;
