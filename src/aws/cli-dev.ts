const completionSpec: Fig.Spec = {
  name: "cli-dev",
  description:
    'Internal commands for AWS CLI development.\nThese commands are not intended for normal end usage. These commands are used to help develop and debug the AWS CLI.\nDo not rely on these commands, backwards compatibility is not guaranteed.  Any of these commands under "aws cli-dev" may be removed in future versions.\n',
  subcommands: [
    {
      name: "wizard-dev",
      description:
        "Internal command from developing, testing and debugging wizards.\nThis command is not intended for normal end usage. Do not rely on this command, backwards compatibility is not guaranteed.  This command may be removed in future versions.\n",
      options: [
        {
          name: "--run-wizard",
          description: "Run a wizard given a wizard file",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
