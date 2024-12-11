const completionSpec: Fig.Spec = {
  name: "bedrock-agent-runtime",
  description:
    "Contains APIs related to model invocation and querying of knowledge bases",
  subcommands: [
    {
      name: "delete-agent-memory",
      description: "Deletes memory from the specified memory identifier",
      options: [
        {
          name: "--agent-alias-id",
          description: "The unique identifier of an alias of an agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent to which the alias belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-id",
          description: "The unique identifier of the memory",
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
      name: "generate-query",
      description:
        "Generates an SQL query from a natural language query. For more information, see Generate a query for structured data in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--query-generation-input",
          description:
            "Specifies information about a natural language query to transform into SQL",
          args: {
            name: "structure",
          },
        },
        {
          name: "--transformation-configuration",
          description:
            "Specifies configurations for transforming the natural language query into SQL",
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
    {
      name: "get-agent-memory",
      description: "Gets the sessions stored in the memory of the agent",
      options: [
        {
          name: "--agent-alias-id",
          description: "The unique identifier of an alias of an agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent to which the alias belongs",
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
          name: "--memory-id",
          description: "The unique identifier of the memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--memory-type",
          description: "The type of memory",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxItems value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
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
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide",
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
      name: "rerank",
      description:
        "Reranks the relevance of sources based on queries. For more information, see Improve the relevance of query responses with a reranker model",
      options: [
        {
          name: "--next-token",
          description:
            "If the total number of results was greater than could fit in a response, a token is returned in the nextToken field. You can enter that token in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--queries",
          description:
            "An array of objects, each of which contains information about a query to submit to the reranker model",
          args: {
            name: "list",
          },
        },
        {
          name: "--reranking-configuration",
          description: "Contains configurations for reranking",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sources",
          description:
            "An array of objects, each of which contains information about the sources to rerank",
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
      name: "retrieve",
      description: "Queries a knowledge base and retrieves information from it",
      options: [
        {
          name: "--guardrail-configuration",
          description: "Guardrail settings",
          args: {
            name: "structure",
          },
        },
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
        "Queries a knowledge base and generates responses based on the retrieved results and using the specified foundation model or inference profile. The response only cites sources that are relevant to the query",
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
            "The unique identifier of the session. When you first make a RetrieveAndGenerate request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the sessionId yourself",
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
