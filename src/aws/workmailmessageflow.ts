const completionSpec: Fig.Spec = {
  name: "workmailmessageflow",
  description:
    "The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization",
  subcommands: [
    {
      name: "get-raw-message-content",
      description:
        "Retrieves the raw content of an in-transit email message, in MIME format",
      options: [
        {
          name: "--message-id",
          description: "The identifier of the email message to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "put-raw-message-content",
      description:
        "Updates the raw content of an in-transit email message, in MIME format. This example describes how to update in-transit email message. For more information and examples for using this API, see  Updating message content with AWS Lambda.  Updates to an in-transit message only appear when you call PutRawMessageContent from an AWS Lambda function configured with a synchronous  Run Lambda rule. If you call PutRawMessageContent on a delivered or sent message, the message remains unchanged, even though GetRawMessageContent returns an updated message",
      options: [
        {
          name: "--message-id",
          description: "The identifier of the email message being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "Describes the raw message content of the updated email message",
          args: {
            name: "structure",
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
