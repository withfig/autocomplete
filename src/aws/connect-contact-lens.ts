const completionSpec: Fig.Spec = {
  name: "connect-contact-lens",
  description:
    "Contact Lens actions     Contact Lens data types    Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts. Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent conversations. For more information, see Analyze conversations using speech analytics in the Amazon Connect Administrator Guide",
  subcommands: [
    {
      name: "list-realtime-contact-analysis-segments",
      description:
        "Provides a list of analysis segments for a real-time analysis session",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
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
  ],
};
export default completionSpec;
