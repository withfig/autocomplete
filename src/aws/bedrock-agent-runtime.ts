const completionSpec: Fig.Spec = {
  name: "bedrock-agent-runtime",
  description:
    "Contains APIs related to model invocation and querying of knowledge bases",
  subcommands: [
    {
      name: "retrieve",
      description: "Queries a knowledge base and retrieves information from it",
      options: [
        {
          name: "--knowledge-base-id",
          description: "The unique identifier of the knowledge base to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If there are more results than can fit in the response, the response returns a nextToken. Use this token in the nextToken field of another request to retrieve the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--retrieval-configuration",
          description:
            "Contains configurations for the knowledge base query and retrieval process. For more information, see Query configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retrieval-query",
          description: "Contains the query to send the knowledge base",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "integer",
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
      name: "retrieve-and-generate",
      description:
        "Queries a knowledge base and generates responses based on the retrieved results. The response only cites sources that are relevant to the query",
      options: [
        {
          name: "--input",
          description: "Contains the query to be made to the knowledge base",
          args: {
            name: "structure",
          },
        },
        {
          name: "--retrieve-and-generate-configuration",
          description:
            "Contains configurations for the knowledge base query and retrieval process. For more information, see Query configurations",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session-configuration",
          description:
            "Contains details about the session with the knowledge base",
          args: {
            name: "structure",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base",
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
