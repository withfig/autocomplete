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
    },
  ],
};

export default completionSpec;
