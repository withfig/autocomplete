const completionSpec: Fig.Spec = {
  name: "outposts",
  description:
    "Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs",
  subcommands: [
    {
      name: "cancel-capacity-task",
      description: "Cancels the capacity task",
      options: [
        {
          name: "--capacity-task-id",
          description: "ID of the capacity task that you want to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--outpost-identifier",
          description:
            "ID or ARN of the Outpost associated with the capacity task that you want to cancel",
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
      name: "cancel-order",
      description: "Cancels the specified order for an Outpost",
      options: [
        {
          name: "--order-id",
          description: "The ID of the order",
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
      name: "create-order",
      description: "Creates an order for an Outpost",
      options: [
        {
          name: "--outpost-identifier",
          description:
            "The ID or the Amazon Resource Name (ARN) of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--line-items",
          description: "The line items that make up the order",
          args: {
            name: "list",
          },
        },
        {
          name: "--payment-option",
          description: "The payment option",
          args: {
            name: "string",
          },
        },
        {
          name: "--payment-term",
          description: "The payment terms",
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
      name: "create-outpost",
      description:
        "Creates an Outpost. You can specify either an Availability one or an AZ ID",
      options: [
        {
          name: "--name",
          description: "The name of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description: "The Availability Zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone-id",
          description: "The ID of the Availability Zone",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to apply to the Outpost",
          args: {
            name: "map",
          },
        },
        {
          name: "--supported-hardware-type",
          description: "The type of hardware for this Outpost",
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
      name: "create-site",
      description: "Creates a site for an Outpost",
      options: [
        {
          name: "--name",
          description: "The name of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--notes",
          description:
            "Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to apply to a site",
          args: {
            name: "map",
          },
        },
        {
          name: "--operating-address",
          description:
            "The location to install and power on the hardware. This address might be different from the shipping address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--shipping-address",
          description:
            "The location to ship the hardware. This address might be different from the operating address",
          args: {
            name: "structure",
          },
        },
        {
          name: "--rack-physical-properties",
          description:
            "Information about the physical and logistical details for the rack at this site. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide",
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
      name: "delete-outpost",
      description: "Deletes the specified Outpost",
      options: [
        {
          name: "--outpost-id",
          description: "The ID or ARN of the Outpost",
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
      name: "delete-site",
      description: "Deletes the specified site",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
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
      name: "get-capacity-task",
      description: "Gets details of the specified capacity task",
      options: [
        {
          name: "--capacity-task-id",
          description: "ID of the capacity task",
          args: {
            name: "string",
          },
        },
        {
          name: "--outpost-identifier",
          description:
            "ID or ARN of the Outpost associated with the specified capacity task",
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
      name: "get-catalog-item",
      description: "Gets information about the specified catalog item",
      options: [
        {
          name: "--catalog-item-id",
          description: "The ID of the catalog item",
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
      name: "get-connection",
      description:
        "Amazon Web Services uses this action to install Outpost servers.   Gets information about the specified connection.   Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see  Amazon Web Services managed policies for Amazon Web Services Outposts and  Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the Amazon Web Services Outposts User Guide",
      options: [
        {
          name: "--connection-id",
          description: "The ID of the connection",
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
      name: "get-order",
      description: "Gets information about the specified order",
      options: [
        {
          name: "--order-id",
          description: "The ID of the order",
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
      name: "get-outpost",
      description: "Gets information about the specified Outpost",
      options: [
        {
          name: "--outpost-id",
          description: "The ID or ARN of the Outpost",
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
      name: "get-outpost-instance-types",
      description: "Gets the instance types for the specified Outpost",
      options: [
        {
          name: "--outpost-id",
          description: "The ID or ARN of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
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
      name: "get-outpost-supported-instance-types",
      description:
        "Gets the instance types that an Outpost can support in InstanceTypeCapacity. This will generally include instance types that are not currently configured and therefore cannot be launched with the current Outpost capacity configuration",
      options: [
        {
          name: "--outpost-identifier",
          description: "The ID or ARN of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--order-id",
          description: "The ID for the Amazon Web Services Outposts order",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
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
      name: "get-site",
      description: "Gets information about the specified Outpost site",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
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
      name: "get-site-address",
      description: "Gets the site address of the specified site",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--address-type",
          description: "The type of the address you request",
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
      name: "list-asset-instances",
      description:
        "A list of Amazon EC2 instances, belonging to all accounts, running on the specified Outpost. Does not include Amazon EBS or Amazon S3 instances",
      options: [
        {
          name: "--outpost-identifier",
          description: "The ID of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id-filter",
          description: "Filters the results by asset ID",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-type-filter",
          description: "Filters the results by instance ID",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-id-filter",
          description: "Filters the results by account ID",
          args: {
            name: "list",
          },
        },
        {
          name: "--aws-service-filter",
          description: "Filters the results by Amazon Web Services service",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
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
      name: "list-assets",
      description:
        "Lists the hardware assets for the specified Outpost. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter",
      options: [
        {
          name: "--outpost-identifier",
          description:
            "The ID or the Amazon Resource Name (ARN) of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--host-id-filter",
          description: "Filters the results by the host ID of a Dedicated Host",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--status-filter",
          description: "Filters the results by state",
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
      name: "list-blocking-instances-for-capacity-task",
      description:
        "A list of Amazon EC2 instances running on the Outpost and belonging to the account that initiated the capacity task. Use this list to specify the instances you cannot stop to free up capacity to run the capacity task",
      options: [
        {
          name: "--outpost-identifier",
          description:
            "The ID or ARN of the Outpost associated with the specified capacity task",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-task-id",
          description: "The ID of the capacity task",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
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
      name: "list-capacity-tasks",
      description:
        "Lists the capacity tasks for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter",
      options: [
        {
          name: "--outpost-identifier-filter",
          description: "Filters the results by an Outpost ID or an Outpost ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-task-status-filter",
          description:
            "A list of statuses. For example, REQUESTED or WAITING_FOR_EVACUATION",
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
      name: "list-catalog-items",
      description:
        "Lists the items in the catalog. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter",
      options: [
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--item-class-filter",
          description: "Filters the results by item class",
          args: {
            name: "list",
          },
        },
        {
          name: "--supported-storage-filter",
          description: "Filters the results by storage option",
          args: {
            name: "list",
          },
        },
        {
          name: "--ec2-family-filter",
          description: "Filters the results by EC2 family (for example, M5)",
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
      name: "list-orders",
      description:
        "Lists the Outpost orders for your Amazon Web Services account",
      options: [
        {
          name: "--outpost-identifier-filter",
          description:
            "The ID or the Amazon Resource Name (ARN) of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
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
      name: "list-outposts",
      description:
        "Lists the Outposts for your Amazon Web Services account. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter",
      options: [
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--life-cycle-status-filter",
          description: "Filters the results by the lifecycle status",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone-filter",
          description:
            "Filters the results by Availability Zone (for example, us-east-1a)",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone-id-filter",
          description: "Filters the results by AZ ID (for example, use1-az1)",
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
      name: "list-sites",
      description:
        "Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results. Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter",
      options: [
        {
          name: "--next-token",
          description: "The pagination token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum page size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--operating-address-country-code-filter",
          description: "Filters the results by country code",
          args: {
            name: "list",
          },
        },
        {
          name: "--operating-address-state-or-region-filter",
          description: "Filters the results by state or region",
          args: {
            name: "list",
          },
        },
        {
          name: "--operating-address-city-filter",
          description: "Filters the results by city",
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
      name: "list-tags-for-resource",
      description: "Lists the tags for the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
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
      name: "start-capacity-task",
      description:
        "Starts the specified capacity task. You can have one active capacity task per order or Outpost",
      options: [
        {
          name: "--outpost-identifier",
          description:
            "The ID or ARN of the Outposts associated with the specified capacity task",
          args: {
            name: "string",
          },
        },
        {
          name: "--order-id",
          description:
            "The ID of the Amazon Web Services Outposts order associated with the specified capacity task",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-pools",
          description: "The instance pools specified in the capacity task",
          args: {
            name: "list",
          },
        },
        {
          name: "--instances-to-exclude",
          description:
            "List of user-specified running instances that must not be stopped in order to free up the capacity needed to run the capacity task",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dry-run",
          description:
            "You can request a dry run to determine if the instance type and instance size changes is above or below available instance capacity. Requesting a dry run does not make any changes to your plan",
        },
        {
          name: "--no-dry-run",
          description:
            "You can request a dry run to determine if the instance type and instance size changes is above or below available instance capacity. Requesting a dry run does not make any changes to your plan",
        },
        {
          name: "--task-action-on-blocking-instances",
          description:
            "Specify one of the following options in case an instance is blocking the capacity task from running.    WAIT_FOR_EVACUATION - Checks every 10 minutes over 48 hours to determine if instances have stopped and capacity is available to complete the task.    FAIL_TASK - The capacity task fails",
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
      name: "start-connection",
      description:
        "Amazon Web Services uses this action to install Outpost servers.   Starts the connection required for Outpost server installation.   Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see  Amazon Web Services managed policies for Amazon Web Services Outposts and  Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail in the Amazon Web Services Outposts User Guide",
      options: [
        {
          name: "--device-serial-number",
          description: "The serial number of the dongle",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-id",
          description: "The ID of the Outpost server",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-public-key",
          description: "The public key of the client",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-interface-device-index",
          description:
            "The device index of the network interface on the Outpost server",
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
      name: "tag-resource",
      description: "Adds tags to the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to add to the resource",
          args: {
            name: "map",
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
      name: "untag-resource",
      description: "Removes tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
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
    {
      name: "update-outpost",
      description: "Updates an Outpost",
      options: [
        {
          name: "--outpost-id",
          description: "The ID or ARN of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Outpost",
          args: {
            name: "string",
          },
        },
        {
          name: "--supported-hardware-type",
          description: "The type of hardware for this Outpost",
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
      name: "update-site",
      description: "Updates the specified site",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--notes",
          description: "Notes about a site",
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
      name: "update-site-address",
      description:
        "Updates the address of the specified site. You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order. You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--address-type",
          description: "The type of the address",
          args: {
            name: "string",
          },
        },
        {
          name: "--address",
          description: "The address for the site",
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
      name: "update-site-rack-physical-properties",
      description:
        "Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see Network readiness checklist in the Amazon Web Services Outposts User Guide.  To update a rack at a site with an order of IN_PROGRESS, you must wait for the order to complete or cancel the order",
      options: [
        {
          name: "--site-id",
          description: "The ID or the Amazon Resource Name (ARN) of the site",
          args: {
            name: "string",
          },
        },
        {
          name: "--power-draw-kva",
          description:
            "The power draw, in kVA, available at the hardware placement position for the rack",
          args: {
            name: "string",
          },
        },
        {
          name: "--power-phase",
          description:
            "The power option that you can provide for hardware.    Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz   Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz",
          args: {
            name: "string",
          },
        },
        {
          name: "--power-connector",
          description:
            "The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between PowerPhase and PowerConnector.    Single-phase AC feed    L6-30P \u2013 (common in US); 30A; single phase    IEC309 (blue) \u2013 P+N+E, 6hr; 32 A; single phase     Three-phase AC feed    AH530P7W (red) \u2013 3P+N+E, 7hr; 30A; three phase    AH532P6W (red) \u2013 3P+N+E, 6hr; 32A; three phase",
          args: {
            name: "string",
          },
        },
        {
          name: "--power-feed-drop",
          description:
            "Indicates whether the power feed comes above or below the rack",
          args: {
            name: "string",
          },
        },
        {
          name: "--uplink-gbps",
          description:
            "The uplink speed the rack should support for the connection to the Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--uplink-count",
          description:
            "Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between UplinkGbps and UplinkCount.    1Gbps - Uplinks available: 1, 2, 4, 6, 8   10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16   40 and 100 Gbps- Uplinks available: 1, 2, 4",
          args: {
            name: "string",
          },
        },
        {
          name: "--fiber-optic-cable-type",
          description:
            "The type of fiber that you will use to attach the Outpost to your network",
          args: {
            name: "string",
          },
        },
        {
          name: "--optical-standard",
          description:
            "The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see Network in the Amazon Web Services Outposts User Guide.     OPTIC_10GBASE_SR: 10GBASE-SR    OPTIC_10GBASE_IR: 10GBASE-IR    OPTIC_10GBASE_LR: 10GBASE-LR    OPTIC_40GBASE_SR: 40GBASE-SR    OPTIC_40GBASE_ESR: 40GBASE-ESR    OPTIC_40GBASE_IR4_LR4L: 40GBASE-IR (LR4L)    OPTIC_40GBASE_LR4: 40GBASE-LR4    OPTIC_100GBASE_SR4: 100GBASE-SR4    OPTIC_100GBASE_CWDM4: 100GBASE-CWDM4    OPTIC_100GBASE_LR4: 100GBASE-LR4    OPTIC_100G_PSM4_MSA: 100G PSM4 MSA    OPTIC_1000BASE_LX: 1000Base-LX    OPTIC_1000BASE_SX : 1000Base-SX",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-supported-weight-lbs",
          description:
            "The maximum rack weight that this site can support. NO_LIMIT is over 2000lbs",
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
