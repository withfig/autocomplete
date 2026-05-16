const completionSpec: Fig.Spec = {
  name: "bedrock-data-automation-runtime",
  description: "Amazon Bedrock Keystone Runtime",
  subcommands: [
    {
      name: "get-data-automation-status",
      description: "API used to get data automation status",
      options: [
        {
          name: "--invocation-arn",
          description: "Invocation arn",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "invoke-data-automation-async",
      description: "Async API: Invoke data automation",
      options: [
        {
          name: "--client-token",
          description: "Idempotency token",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-configuration",
          description: "Input configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--output-configuration",
          description: "Output configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-automation-configuration",
          description: "Data automation configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-configuration",
          description: "Encryption configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notification-configuration",
          description: "Notification configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--blueprints",
          description: "Blueprint list",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
