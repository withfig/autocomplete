const completionSpec: Fig.Spec = {
  name: "eb",
  description: "AWS Elastic Beanstalk",
  subcommands: [
    {
      name: "init",
      description: "Initialize a new AWS Elastic Beanstalk application",
      args: {
        name: "name",
        description: "The name of the application",
      },
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Forces EB CLI to prompt you to provide a value for every eb init command option",
        },
        {
          name: ["-k", "--keyname"],
          description: "The name of the AWS EC2 key pair",
          args: {
            name: "keyname",
          },
        },
        {
          name: "--modules",
          description: "List of child directories to initialize",
        },
        {
          name: ["-p", "--platform"],
          description: "The platform version to use",
          args: {
            name: "plataform-version",
          },
        },
        {
          name: "--tags",
          description: "List of tags to apply to the application",
          args: {
            name: "key=value",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
