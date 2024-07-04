const completionSpec: Fig.Spec = {
  name: "freetier",
  description:
    "You can use the Amazon Web Services Free Tier API to query programmatically your Free Tier usage data. Free Tier tracks your monthly usage data for all free tier offers that are associated with your Amazon Web Services account. You can use the Free Tier API to filter and show only the data that you want. Service endpoint The Free Tier API provides the following endpoint:   https://freetier.us-east-1.api.aws   For more information, see Using the Amazon Web Services Free Tier in the Billing User Guide",
  subcommands: [
    {
      name: "get-free-tier-usage",
      description:
        "Returns a list of all Free Tier usage objects that match your filters",
      options: [
        {
          name: "--filter",
          description:
            "An expression that specifies the conditions that you want each FreeTierUsage object to meet",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. MaxResults means that there can be up to the specified number of values, but there might be fewer results based on your filters",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that indicates the next set of results to retrieve",
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
  ],
};
export default completionSpec;
