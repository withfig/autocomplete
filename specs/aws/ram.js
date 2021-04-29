var completionSpec = {
    name: "ram",
    description: "Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you create a resource share, associate the resource with the resource share, and specify the principals that can access the resources associated with the resource share. The following principals are supported: AWS accounts, organizational units (OU) from AWS Organizations, and organizations from AWS Organizations. For more information, see the AWS Resource Access Manager User Guide.",
    subcommands: [
        {
            name: "accept-resource-share-invitation",
            description: "Accepts an invitation to a resource share from another AWS account.",
            options: [
                {
                    name: "--resource-share-invitation-arn",
                    description: "The Amazon Resource Name (ARN) of the invitation.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "associate-resource-share",
            description: "Associates the specified resource share with the specified principals and resources.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARN) of the resources.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--principals",
                    description: "The principals to associate with the resource share. The possible values are IDs of AWS accounts, and the ARNs of organizational units (OU) or organizations from AWS Organizations.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "associate-resource-share-permission",
            description: "Associates a permission with a resource share.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--permission-arn",
                    description: "The ARN of the AWS RAM permission to associate with the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--replace",
                    description: "Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use true to replace the current permissions. Use false to add the permission to the current permission.",
                },
                {
                    name: "--no-replace",
                    description: "Indicates whether the permission should replace the permissions that are currently associated with the resource share. Use true to replace the current permissions. Use false to add the permission to the current permission.",
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "create-resource-share",
            description: "Creates a resource share.",
            options: [
                {
                    name: "--name",
                    description: "The name of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARN) of the resources to associate with the resource share.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--principals",
                    description: "The principals to associate with the resource share. The possible values are IDs of AWS accounts, the ARN of an OU or organization from AWS Organizations.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--tags",
                    description: "One or more tags.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--allow-external-principals",
                    description: "Indicates whether principals outside your AWS organization can be associated with a resource share.",
                },
                {
                    name: "--no-allow-external-principals",
                    description: "Indicates whether principals outside your AWS organization can be associated with a resource share.",
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--permission-arns",
                    description: "The ARNs of the permissions to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "delete-resource-share",
            description: "Deletes the specified resource share.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "disassociate-resource-share",
            description: "Disassociates the specified principals or resources from the specified resource share.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARNs) of the resources.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--principals",
                    description: "The principals.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "disassociate-resource-share-permission",
            description: "Disassociates an AWS RAM permission from a resource share.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--permission-arn",
                    description: "The ARN of the permission to disassociate from the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "enable-sharing-with-aws-organization",
            description: "Enables resource sharing within your AWS Organization. The caller must be the master account for the AWS Organization.",
            options: [
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-permission",
            description: "Gets the contents of an AWS RAM permission in JSON format.",
            options: [
                {
                    name: "--permission-arn",
                    description: "The ARN of the permission.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--permission-version",
                    description: "The identifier for the version of the permission.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-resource-policies",
            description: "Gets the policies for the specified resources that you own and have shared.",
            options: [
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARN) of the resources.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--principal",
                    description: "The principal.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-resource-share-associations",
            description: "Gets the resources or principals for the resource shares that you own.",
            options: [
                {
                    name: "--association-type",
                    description: "The association type. Specify PRINCIPAL to list the principals that are associated with the specified resource share. Specify RESOURCE to list the resources that are associated with the specified resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-share-arns",
                    description: "The Amazon Resource Names (ARN) of the resource shares.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource. You cannot specify this parameter if the association type is PRINCIPAL.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--principal",
                    description: "The principal. You cannot specify this parameter if the association type is RESOURCE.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--association-status",
                    description: "The association status.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-resource-share-invitations",
            description: "Gets the invitations for resource sharing that you've received.",
            options: [
                {
                    name: "--resource-share-invitation-arns",
                    description: "The Amazon Resource Names (ARN) of the invitations.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--resource-share-arns",
                    description: "The Amazon Resource Names (ARN) of the resource shares.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "get-resource-shares",
            description: "Gets the resource shares that you own or the resource shares that are shared with you.",
            options: [
                {
                    name: "--resource-share-arns",
                    description: "The Amazon Resource Names (ARN) of the resource shares.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--resource-share-status",
                    description: "The status of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-owner",
                    description: "The type of owner.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The name of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tag-filters",
                    description: "One or more tag filters.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-pending-invitation-resources",
            description: "Lists the resources in a resource share that is shared with you but that the invitation is still pending for.",
            options: [
                {
                    name: "--resource-share-invitation-arn",
                    description: "The Amazon Resource Name (ARN) of the invitation.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-permissions",
            description: "Lists the AWS RAM permissions.",
            options: [
                {
                    name: "--resource-type",
                    description: "Specifies the resource type for which to list permissions. For example, to list only permissions that apply to EC2 subnets, specify ec2:Subnet.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-principals",
            description: "Lists the principals that you have shared resources with or that have shared resources with you.",
            options: [
                {
                    name: "--resource-owner",
                    description: "The type of owner.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) of the resource.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--principals",
                    description: "The principals.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--resource-type",
                    description: "The resource type. Valid values: acm-pca:CertificateAuthority | appmesh:Mesh | codebuild:Project | codebuild:ReportGroup | ec2:CapacityReservation | ec2:DedicatedHost | ec2:LocalGatewayRouteTable | ec2:PrefixList | ec2:Subnet | ec2:TrafficMirrorTarget | ec2:TransitGateway | imagebuilder:Component | imagebuilder:Image | imagebuilder:ImageRecipe | imagebuilder:ContainerRecipe | glue:Catalog | glue:Database | glue:Table | license-manager:LicenseConfiguration I network-firewall:FirewallPolicy | network-firewall:StatefulRuleGroup | network-firewall:StatelessRuleGroup | outposts:Outpost | resource-groups:Group | rds:Cluster | route53resolver:FirewallRuleGroup |route53resolver:ResolverQueryLogConfig | route53resolver:ResolverRule",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-share-arns",
                    description: "The Amazon Resource Names (ARN) of the resource shares.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-resource-share-permissions",
            description: "Lists the AWS RAM permissions that are associated with a resource share.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-resource-types",
            description: "Lists the shareable resource types supported by AWS RAM.",
            options: [
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "list-resources",
            description: "Lists the resources that you added to a resource shares or the resources that are shared with you.",
            options: [
                {
                    name: "--resource-owner",
                    description: "The type of owner.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--principal",
                    description: "The principal.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-type",
                    description: "The resource type. Valid values: acm-pca:CertificateAuthority | appmesh:Mesh | codebuild:Project | codebuild:ReportGroup | ec2:CapacityReservation | ec2:DedicatedHost | ec2:LocalGatewayRouteTable | ec2:PrefixList | ec2:Subnet | ec2:TrafficMirrorTarget | ec2:TransitGateway | imagebuilder:Component | imagebuilder:Image | imagebuilder:ImageRecipe | imagebuilder:ContainerRecipe | glue:Catalog | glue:Database | glue:Table | license-manager:LicenseConfiguration I network-firewall:FirewallPolicy | network-firewall:StatefulRuleGroup | network-firewall:StatelessRuleGroup | outposts:Outpost | resource-groups:Group | rds:Cluster | route53resolver:FirewallRuleGroup |route53resolver:ResolverQueryLogConfig | route53resolver:ResolverRule",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--resource-arns",
                    description: "The Amazon Resource Names (ARN) of the resources.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--resource-share-arns",
                    description: "The Amazon Resource Names (ARN) of the resource shares.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--next-token",
                    description: "The token for the next page of results.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "promote-resource-share-created-from-policy",
            description: "Resource shares that were created by attaching a policy to a resource are visible only to the resource share owner, and the resource share cannot be modified in AWS RAM. Use this API action to promote the resource share. When you promote the resource share, it becomes:   Visible to all principals that it is shared with.   Modifiable in AWS RAM.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The ARN of the resource share to promote.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "reject-resource-share-invitation",
            description: "Rejects an invitation to a resource share from another AWS account.",
            options: [
                {
                    name: "--resource-share-invitation-arn",
                    description: "The Amazon Resource Name (ARN) of the invitation.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Adds the specified tags to the specified resource share that you own.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tags",
                    description: "One or more tags.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes the specified tags from the specified resource share that you own.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--tag-keys",
                    description: "The tag keys of the tags to remove.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
        {
            name: "update-resource-share",
            description: "Updates the specified resource share that you own.",
            options: [
                {
                    name: "--resource-share-arn",
                    description: "The Amazon Resource Name (ARN) of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--name",
                    description: "The name of the resource share.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--allow-external-principals",
                    description: "Indicates whether principals outside your AWS organization can be associated with a resource share.",
                },
                {
                    name: "--no-allow-external-principals",
                    description: "Indicates whether principals outside your AWS organization can be associated with a resource share.",
                },
                {
                    name: "--client-token",
                    description: "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                },
            ],
        },
    ],
};

