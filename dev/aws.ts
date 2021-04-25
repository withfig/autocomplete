const awsGenerators: Record<string, Fig.Generator> = {
  instances: {
    script:
      "aws ec2 describe-instances --query 'Reservations[].Instances[].InstanceId[]' --output text",
    postProcess: function (out) {
      if (out.startsWith("fatal")) {
        return [];
      }
      return out.split("\t").map((instance) => {
        return { name: instance.trim(), description: "instance" };
      });
    },
  },
};

export const completionSpec: Fig.Spec = {
  name: "aws",
  description: "aws cli commands",
  subcommands: [
    {
      name: "ec2",
      description: "ec2 commands",
      subcommands: [
        {
          name: "start-instances",
          description: "Starts an EC2 instance",
          options: [
            {
              name: "--instance-ids",
              insertValue: "--instance-ids",
              description: "instance ids",
            },
          ],
          args: {
            generators: awsGenerators.instances,
          },
        },
      ],
    },
  ],
};
