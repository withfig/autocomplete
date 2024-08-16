const completionSpec: Fig.Spec = {
  name: "cloudfront-keyvaluestore",
  description:
    "Amazon CloudFront KeyValueStore Service to View and Update Data in a KVS Resource",
  subcommands: [
    {
      name: "delete-key",
      description: "Deletes the key value pair specified by the key",
      options: [
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The key to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore",
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
      name: "describe-key-value-store",
      description: "Returns metadata information about Key Value Store",
      options: [
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
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
      name: "get-key",
      description: "Returns a key value pair",
      options: [
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "The key to get",
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
      name: "list-keys",
      description: "Returns a list of key value pairs",
      options: [
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50",
          args: {
            name: "integer",
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
      name: "put-key",
      description:
        "Creates a new key value pair or replaces the value of an existing key",
      options: [
        {
          name: "--key",
          description: "The key to put",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description: "The value to put",
          args: {
            name: "string",
          },
        },
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The current version (ETag) of the Key Value Store that you are putting keys into, which you can get using DescribeKeyValueStore",
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
      name: "update-keys",
      description:
        "Puts or Deletes multiple key value pairs in a single, all-or-nothing operation",
      options: [
        {
          name: "--kvs-arn",
          description: "The Amazon Resource Name (ARN) of the Key Value Store",
          args: {
            name: "string",
          },
        },
        {
          name: "--if-match",
          description:
            "The current version (ETag) of the Key Value Store that you are updating keys of, which you can get using DescribeKeyValueStore",
          args: {
            name: "string",
          },
        },
        {
          name: "--puts",
          description: "List of key value pairs to put",
          args: {
            name: "list",
          },
        },
        {
          name: "--deletes",
          description: "List of keys to delete",
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
