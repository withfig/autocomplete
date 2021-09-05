const completionSpec: Fig.Spec = {
  name: "cdk",
  description: "AWS CDK CLI",
  subcommands: [
    {
      name: "init",
      description: "Create a new, empty CDK project from a template",
    },
    {
      name: "metadata",
      description: "Returns all metadata associated with this stack",
    },
    { name: "doctor", description: "Check your set-up for potential problems" },
    {
      name: "diff",
      description: "Compares the specified stack with the deployed stack",
    },
    { name: "destroy", description: "Destroy the specified stack(s)" },
    {
      name: "deploy",
      description: "Deploy the specified stack(s) into your AWS account",
    },
    {
      name: "bootstrap",
      description: "Deploys the CDK toolkit stack into an AWS environment",
    },
    {
      name: "synth",
      description:
        "Synthesizes and prints the CloudFormation template for this stack",
    },
    { name: "ls", description: "List all stacks in the app" },
  ],
  options: [
    {
      name: "--version",
      description: "The current version",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
  ],
};

export default completionSpec;
