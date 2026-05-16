const completionSpec: Fig.Spec = {
  name: "security-ir",
  description:
    "This guide provides documents the action and response elements for customer use of the service",
  subcommands: [
    {
      name: "batch-get-member-account-details",
      description: "Grants permission to view an existing membership",
      options: [
        {
          name: "--membership-id",
          description:
            "Required element used in combination with BatchGetMemberAccountDetails to identify the membership ID to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-ids",
          description:
            "Optional element to query the membership relationship status to a provided list of account IDs",
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
      name: "cancel-membership",
      description: "Grants permissions to cancel an existing membership",
      options: [
        {
          name: "--membership-id",
          description:
            "Required element used in combination with CancelMembershipRequest to identify the membership ID to cancel",
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
      name: "close-case",
      description: "Grants permission to close an existing case",
      options: [
        {
          name: "--case-id",
          description:
            "Required element used in combination with CloseCase to identify the case ID to close",
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
      name: "create-case",
      description: "Grants permission to create a new case",
      options: [
        {
          name: "--client-token",
          description: "Required element used in combination with CreateCase",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolver-type",
          description:
            "Required element used in combination with CreateCase to identify the resolver type. Available resolvers include self-supported | aws-supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description:
            "Required element used in combination with CreateCase to provide a title for the new case",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Required element used in combination with CreateCase to provide a description for the new case",
          args: {
            name: "string",
          },
        },
        {
          name: "--engagement-type",
          description:
            "Required element used in combination with CreateCase to provide an engagement type for the new cases. Available engagement types include Security Incident | Investigation",
          args: {
            name: "string",
          },
        },
        {
          name: "--reported-incident-start-date",
          description:
            "Required element used in combination with CreateCase to provide an initial start date for the unauthorized activity",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--impacted-accounts",
          description:
            "Required element used in combination with CreateCase to provide a list of impacted accounts",
          args: {
            name: "list",
          },
        },
        {
          name: "--watchers",
          description:
            "Required element used in combination with CreateCase to provide a list of entities to receive notifications for case updates",
          args: {
            name: "list",
          },
        },
        {
          name: "--threat-actor-ip-addresses",
          description:
            "An optional element used in combination with CreateCase to provide a list of suspicious internet protocol addresses associated with unauthorized activity",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-services",
          description:
            "An optional element used in combination with CreateCase to provide a list of services impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-aws-regions",
          description:
            "An optional element used in combination with CreateCase to provide a list of impacted regions",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "An optional element used in combination with CreateCase to add customer specified tags to a case",
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
      name: "create-case-comment",
      description: "Grants permission to add a comment to an existing case",
      options: [
        {
          name: "--case-id",
          description:
            "Required element used in combination with CreateCaseComment to specify a case ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "An optional element used in combination with CreateCaseComment",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "Required element used in combination with CreateCaseComment to add content for the new comment",
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
      name: "create-membership",
      description: "Grants permissions to create a new membership",
      options: [
        {
          name: "--client-token",
          description:
            "An optional element used in combination with CreateMembership",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-name",
          description:
            "Required element use in combination with CreateMembership to create a name for the membership",
          args: {
            name: "string",
          },
        },
        {
          name: "--incident-response-team",
          description:
            "Required element use in combination with CreateMembership to add customer incident response team members and trusted partners to the membership",
          args: {
            name: "list",
          },
        },
        {
          name: "--opt-in-features",
          description:
            "Optional element to enable the monitoring and investigation opt-in features for the service",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Optional element for customer configured tags",
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
      name: "get-case",
      description: "Grant permission to view a designated case",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for GetCase to identify the requested case ID",
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
      name: "get-case-attachment-download-url",
      description:
        "Grants permission to obtain an Amazon S3 presigned URL to download an attachment",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for GetCaseAttachmentDownloadUrl to identify the case ID for downloading an attachment from",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachment-id",
          description:
            "Required element for GetCaseAttachmentDownloadUrl to identify the attachment ID for downloading an attachment",
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
      name: "get-case-attachment-upload-url",
      description: "Grants permission to upload an attachment to a case",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for GetCaseAttachmentUploadUrl to identify the case ID for uploading an attachment to",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description:
            "Required element for GetCaseAttachmentUploadUrl to identify the file name of the attachment to upload",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-length",
          description:
            "Required element for GetCaseAttachmentUploadUrl to identify the size od the file attachment",
          args: {
            name: "long",
          },
        },
        {
          name: "--client-token",
          description: "Optional element for customer provided token",
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
      name: "get-membership",
      description:
        "Grants permission to get details of a designated service membership",
      options: [
        {
          name: "--membership-id",
          description:
            "Required element for GetMembership to identify the membership ID to query",
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
      name: "list-case-edits",
      description:
        "Grants permissions to view the aidt log for edits made to a designated case",
      options: [
        {
          name: "--next-token",
          description: "Optional element for a customer provided token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Optional element to identify how many results to obtain. There is a maximum value of 25",
          args: {
            name: "integer",
          },
        },
        {
          name: "--case-id",
          description:
            "Required element used with ListCaseEdits to identify the case to query",
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
      name: "list-cases",
      description:
        "Grants permission to list all cases the requester has access to",
      options: [
        {
          name: "--next-token",
          description: "Optional element",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Optional element for ListCases to limit the number of responses",
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
      name: "list-comments",
      description:
        "Grants permissions to list and view comments for a designated case",
      options: [
        {
          name: "--next-token",
          description: "Optional element",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Optional element for ListComments to limit the number of responses",
          args: {
            name: "integer",
          },
        },
        {
          name: "--case-id",
          description:
            "Required element for ListComments to designate the case to query",
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
      name: "list-memberships",
      description:
        "Grants permission to query the memberships a principal has access to",
      options: [
        {
          name: "--next-token",
          description: "Optional element",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Request element for ListMemberships to limit the number of responses",
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
      name: "list-tags-for-resource",
      description:
        "Grants permission to view currently configured tags on a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Required element for ListTagsForResource to provide the ARN to identify a specific resource",
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
      name: "tag-resource",
      description: "Grants permission to add a tag(s) to a designated resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Required element for TagResource to identify the ARN for the resource to add a tag to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Required element for ListTagsForResource to provide the content for a tag",
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
      description:
        "Grants permission to remove a tag(s) from a designate resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Required element for UnTagResource to identify the ARN for the resource to remove a tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "Required element for UnTagResource to identify tag to remove",
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
      name: "update-case",
      description: "Grants permission to update an existing case",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for UpdateCase to identify the case ID for updates",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description:
            "Optional element for UpdateCase to provide content for the title field",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Optional element for UpdateCase to provide content for the description field",
          args: {
            name: "string",
          },
        },
        {
          name: "--reported-incident-start-date",
          description:
            "Optional element for UpdateCase to provide content for the customer reported incident start date field",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--actual-incident-start-date",
          description:
            "Optional element for UpdateCase to provide content for the incident start date field",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--engagement-type",
          description:
            "Optional element for UpdateCase to provide content for the engagement type field. Available engagement types include Security Incident | Investigation",
          args: {
            name: "string",
          },
        },
        {
          name: "--watchers-to-add",
          description:
            "Optional element for UpdateCase to provide content to add additional watchers to a case",
          args: {
            name: "list",
          },
        },
        {
          name: "--watchers-to-delete",
          description:
            "Optional element for UpdateCase to provide content to remove existing watchers from a case",
          args: {
            name: "list",
          },
        },
        {
          name: "--threat-actor-ip-addresses-to-add",
          description:
            "Optional element for UpdateCase to provide content to add additional suspicious IP addresses related to a case",
          args: {
            name: "list",
          },
        },
        {
          name: "--threat-actor-ip-addresses-to-delete",
          description:
            "Optional element for UpdateCase to provide content to remove suspicious IP addresses from a case",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-services-to-add",
          description:
            "Optional element for UpdateCase to provide content to add services impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-services-to-delete",
          description:
            "Optional element for UpdateCase to provide content to remove services impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-aws-regions-to-add",
          description:
            "Optional element for UpdateCase to provide content to add regions impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-aws-regions-to-delete",
          description:
            "Optional element for UpdateCase to provide content to remove regions impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-accounts-to-add",
          description:
            "Optional element for UpdateCase to provide content to add accounts impacted",
          args: {
            name: "list",
          },
        },
        {
          name: "--impacted-accounts-to-delete",
          description:
            "Optional element for UpdateCase to provide content to add accounts impacted",
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
      name: "update-case-comment",
      description: "Grants permission to update an existing case comment",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for UpdateCaseComment to identify the case ID containing the comment to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment-id",
          description:
            "Required element for UpdateCaseComment to identify the case ID to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--body",
          description:
            "Required element for UpdateCaseComment to identify the content for the comment to be updated",
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
      name: "update-case-status",
      description:
        "Grants permission to update the status for a designated cases. Options include Submitted | Detection and Analysis | Eradication, Containment and Recovery | Post-Incident Activities | Closed",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for UpdateCaseStatus to identify the case to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--case-status",
          description:
            "Required element for UpdateCaseStatus to identify the status for a case. Options include Submitted | Detection and Analysis | Containment, Eradication and Recovery | Post-incident Activities",
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
      name: "update-membership",
      description:
        "Grants access to UpdateMembership to change membership configuration",
      options: [
        {
          name: "--membership-id",
          description:
            "Required element for UpdateMembership to identify the membership to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-name",
          description:
            "Optional element for UpdateMembership to update the membership name",
          args: {
            name: "string",
          },
        },
        {
          name: "--incident-response-team",
          description:
            "Optional element for UpdateMembership to update the membership name",
          args: {
            name: "list",
          },
        },
        {
          name: "--opt-in-features",
          description:
            "Optional element for UpdateMembership to enable or disable opt-in features for the service",
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
      name: "update-resolver-type",
      description:
        "Grants permission to update the resolver type for a case.  This is a one-way action and cannot be reversed.  Options include self-supported > AWS-supported",
      options: [
        {
          name: "--case-id",
          description:
            "Required element for UpdateResolverType to identify the case to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolver-type",
          description:
            "Required element for UpdateResolverType to identify the new resolver",
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
