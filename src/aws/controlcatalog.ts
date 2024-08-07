const completionSpec: Fig.Spec = {
  name: "controlcatalog",
  description:
    "Welcome to the Amazon Web Services Control Catalog API reference. This guide is for developers who need detailed information about how to programmatically identify and filter the common controls and related metadata that are available to Amazon Web Services customers. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by Amazon Web Services Control Catalog.  Use the following links to get started with the Amazon Web Services Control Catalog API:    Actions: An alphabetical list of all Control Catalog API operations.    Data types: An alphabetical list of all Control Catalog data types.    Common parameters: Parameters that all operations can use.    Common errors: Client and server errors that all operations can return",
  subcommands: [
    {
      name: "get-control",
      description:
        "Returns details about a specific control, most notably a list of Amazon Web Services Regions where this control is supported. Input a value for the ControlArn parameter, in ARN form. GetControl accepts controltower or controlcatalog control ARNs as input. Returns a controlcatalog ARN format. In the API response, controls that have the value GLOBAL in the Scope field do not show the DeployableRegions field, because it does not apply. Controls that have the value REGIONAL in the Scope field return a value for the DeployableRegions field, as shown in the example",
      options: [
        {
          name: "--control-arn",
          description:
            "The Amazon Resource Name (ARN) of the control. It has one of the following formats:  Global format   arn:{PARTITION}:controlcatalog:::control/{CONTROL_CATALOG_OPAQUE_ID}   Or Regional format   arn:{PARTITION}:controltower:{REGION}::control/{CONTROL_TOWER_OPAQUE_ID}  Here is a more general pattern that covers Amazon Web Services Control Tower and Control Catalog ARNs:  ^arn:(aws(?:[-a-z]*)?):(controlcatalog|controltower):[a-zA-Z0-9-]*::control/[0-9a-zA-Z_\\\\-]+$",
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
      name: "list-common-controls",
      description:
        "Returns a paginated list of common controls from the Amazon Web Services Control Catalog. You can apply an optional filter to see common controls that have a specific objective. If you don\u2019t provide a filter, the operation returns all common controls",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results on a page or for an API request call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--common-control-filter",
          description:
            "An optional filter that narrows the results to a specific objective. This filter allows you to specify one objective ARN at a time. Passing multiple ARNs in the CommonControlFilter isn\u2019t currently supported",
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
      name: "list-controls",
      description:
        "Returns a paginated list of all available controls in the Amazon Web Services Control Catalog library. Allows you to discover available controls. The list of controls is given as structures of type controlSummary. The ARN is returned in the global controlcatalog format, as shown in the examples",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results on a page or for an API request call",
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
      name: "list-domains",
      description:
        "Returns a paginated list of domains from the Amazon Web Services Control Catalog",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results on a page or for an API request call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
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
    {
      name: "list-objectives",
      description:
        "Returns a paginated list of objectives from the Amazon Web Services Control Catalog. You can apply an optional filter to see the objectives that belong to a specific domain. If you don\u2019t provide a filter, the operation returns all objectives",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results on a page or for an API request call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token that's used to fetch the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--objective-filter",
          description:
            "An optional filter that narrows the results to a specific domain. This filter allows you to specify one domain ARN at a time. Passing multiple ARNs in the ObjectiveFilter isn\u2019t currently supported",
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
