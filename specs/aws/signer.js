var completionSpec = {
    name: "signer",
    description: "AWS Signer is a fully managed code signing service to help you ensure the trust and integrity of your code.  AWS Signer supports the following applications: With code signing for AWS Lambda, you can sign AWS Lambda deployment packages. Integrated support is provided for Amazon S3, Amazon CloudWatch, and AWS CloudTrail. In order to sign code, you create a signing profile and then use Signer to sign Lambda zip files in S3.  With code signing for IoT, you can sign code for any IoT device that is supported by AWS. IoT code signing is available for Amazon FreeRTOS and AWS IoT Device Management, and is integrated with AWS Certificate Manager (ACM). In order to sign code, you import a third-party code signing certificate using ACM, and use that to sign updates in Amazon FreeRTOS and AWS IoT Device Management.  For more information about AWS Signer, see the AWS Signer Developer Guide.",
    subcommands: [
        {
            name: "add-profile-permission",
            description: "Adds cross-account permissions to a signing profile.",
            options: [
                {
                    name: "--profile-name",
                    description: "The human-readable name of the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-version",
                    description: "The version of the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--action",
                    description: "The AWS Signer action permitted as part of cross-account permissions.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--principal",
                    description: "The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--revision-id",
                    description: "A unique identifier for the current profile revision.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--statement-id",
                    description: "A unique identifier for the cross-account permission statement.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "cancel-signing-profile",
            description: "Changes the state of an ACTIVE signing profile to CANCELED. A canceled profile is still viewable with the ListSigningProfiles operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.",
            options: [
                {
                    name: "--profile-name",
                    description: "The name of the signing profile to be canceled.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "describe-signing-job",
            description: "Returns information about a specific code signing job. You specify the job by using the jobId value that is returned by the StartSigningJob operation.",
            options: [
                {
                    name: "--job-id",
                    description: "The ID of the signing job on input.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-signing-platform",
            description: "Returns information on a specific signing platform.",
            options: [
                {
                    name: "--platform-id",
                    description: "The ID of the target signing platform.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "get-signing-profile",
            description: "Returns information on a specific signing profile.",
            options: [
                {
                    name: "--profile-name",
                    description: "The name of the target signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-owner",
                    description: "The AWS account ID of the profile owner.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-profile-permissions",
            description: "Lists the cross-account permissions associated with a signing profile.",
            options: [
                {
                    name: "--profile-name",
                    description: "Name of the signing profile containing the cross-account permissions.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--next-token",
                    description: "String for specifying the next set of paginated results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-signing-jobs",
            description: "Lists all your signing jobs. You can use the maxResults parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, code signing returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that code signing returns in the nextToken parameter until all of your signing jobs have been returned.",
            options: [
                {
                    name: "--status",
                    description: "A status value with which to filter your results.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform-id",
                    description: "The ID of microcontroller platform that you specified for the distribution of your code image.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--requested-by",
                    description: "The IAM principal that requested the signing job.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the nextToken element is set in the response. Use the nextToken value in a subsequent request to retrieve additional items.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--is-revoked",
                    description: "Filters results to return only signing jobs with revoked signatures.",
                },
                {
                    name: "--no-is-revoked",
                    description: "Filters results to return only signing jobs with revoked signatures.",
                },
                {
                    name: "--signature-expires-before",
                    description: "Filters results to return only signing jobs with signatures expiring before a specified timestamp.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--signature-expires-after",
                    description: "Filters results to return only signing jobs with signatures expiring after a specified timestamp.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: true,
                },
                {
                    name: "--job-invoker",
                    description: "Filters results to return only signing jobs initiated by a specified IAM entity.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-signing-platforms",
            description: "Lists all signing platforms available in code signing that match the request parameters. If additional jobs remain to be listed, code signing returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that code signing returns in the nextToken parameter until all of your signing jobs have been returned.",
            options: [
                {
                    name: "--category",
                    description: "The category type of a signing platform.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--partner",
                    description: "Any partner entities connected to a signing platform.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--target",
                    description: "The validation template that is used by the target signing platform.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of results to be returned by this operation.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-signing-profiles",
            description: "Lists all available signing profiles in your AWS account. Returns only profiles with an ACTIVE status unless the includeCanceled request field is set to true. If additional jobs remain to be listed, code signing returns a nextToken value. Use this value in subsequent calls to ListSigningJobs to fetch the remaining values. You can continue calling ListSigningJobs with your maxResults parameter and with new values that code signing returns in the nextToken parameter until all of your signing jobs have been returned.",
            options: [
                {
                    name: "--include-canceled",
                    description: "Designates whether to include profiles with the status of CANCELED.",
                },
                {
                    name: "--no-include-canceled",
                    description: "Designates whether to include profiles with the status of CANCELED.",
                },
                {
                    name: "--max-results",
                    description: "The maximum number of profiles to be returned.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of nextToken from the response that you just received.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform-id",
                    description: "Filters results to return only signing jobs initiated for a specified signing platform.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--statuses",
                    description: "Filters results to return only signing jobs with statuses in the specified list.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--starting-token",
                    description: "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--page-size",
                    description: "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-items",
                    description: "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "list-tags-for-resource",
            description: "Returns a list of the tags associated with a signing profile resource.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) for the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "put-signing-profile",
            description: "Creates a signing profile. A signing profile is a code signing template that can be used to carry out a pre-defined signing job. For more information, see http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html",
            options: [
                {
                    name: "--profile-name",
                    description: "The name of the signing profile to be created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--signing-material",
                    description: "The AWS Certificate Manager certificate that will be used to sign code with the new signing profile.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--signature-validity-period",
                    description: "The default validity period override for any signature generated using this signing profile. If unspecified, the default is 135 months.",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--platform-id",
                    description: "The ID of the signing platform to be created.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--overrides",
                    description: "A subfield of platform. This specifies any different configuration options that you want to apply to the chosen platform (such as a different hash-algorithm or signing-algorithm).",
                    args: {
                        name: "structure",
                    },
                    isOptional: true,
                },
                {
                    name: "--signing-parameters",
                    description: "Map of key-value pairs for signing. These can include any information that you want to use during signing.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--tags",
                    description: "Tags to be associated with the signing profile that is being created.",
                    args: {
                        name: "map",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "remove-profile-permission",
            description: "Removes cross-account permissions from a signing profile.",
            options: [
                {
                    name: "--profile-name",
                    description: "A human-readable name for the signing profile with permissions to be removed.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--revision-id",
                    description: "An identifier for the current revision of the signing profile permissions.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--statement-id",
                    description: "A unique identifier for the cross-account permissions statement.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "revoke-signature",
            description: "Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.",
            options: [
                {
                    name: "--job-id",
                    description: "ID of the signing job to be revoked.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--job-owner",
                    description: "AWS account ID of the job owner.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--reason",
                    description: "The reason for revoking the signing job.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "revoke-signing-profile",
            description: "Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid.",
            options: [
                {
                    name: "--profile-name",
                    description: "The name of the signing profile to be revoked.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-version",
                    description: "The version of the signing profile to be revoked.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--reason",
                    description: "The reason for revoking a signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--effective-time",
                    description: "A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "start-signing-job",
            description: "Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the ListSigningJobs operation for two years after they are performed. Note the following requirements:     You must create an Amazon S3 source bucket. For more information, see Create a Bucket in the Amazon S3 Getting Started Guide.    Your S3 source bucket must be version enabled.   You must create an S3 destination bucket. Code signing uses your S3 destination bucket to write your signed code.   You specify the name of the source and destination buckets when calling the StartSigningJob operation.   You must also specify a request token that identifies your request to code signing.   You can call the DescribeSigningJob and the ListSigningJobs actions after you call StartSigningJob. For a Java example that shows how to use this action, see http://docs.aws.amazon.com/acm/latest/userguide/",
            options: [
                {
                    name: "--source",
                    description: "The S3 bucket that contains the object to sign or a BLOB that contains your raw code.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--destination",
                    description: "The S3 bucket in which to save your signed object. The destination contains the name of your bucket and an optional prefix.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--profile-name",
                    description: "The name of the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--client-request-token",
                    description: "String that identifies the signing request. All calls after the first that use this token return the same response as the first call.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--profile-owner",
                    description: "The AWS account ID of the signing profile owner.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "tag-resource",
            description: "Adds one or more tags to a signing profile. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. To specify the signing profile, use its Amazon Resource Name (ARN). To specify the tag, use a key-value pair.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) for the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tags",
                    description: "One or more tags to be associated with the signing profile.",
                    args: {
                        name: "map",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "untag-resource",
            description: "Removes one or more tags from a signing profile. To remove the tags, specify a list of tag keys.",
            options: [
                {
                    name: "--resource-arn",
                    description: "The Amazon Resource Name (ARN) for the signing profile.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--tag-keys",
                    description: "A list of tag keys to be removed from the signing profile.",
                    args: {
                        name: "list",
                    },
                    isOptional: false,
                },
                {
                    name: "--cli-input-json",
                    description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--generate-cli-skeleton",
                    description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                    args: {
                        name: "string",
                        suggestions: ["input", "output"],
                    },
                    isOptional: true,
                },
            ],
        },
        {
            name: "wait",
            description: "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
            subcommands: [
                {
                    name: "successful-signing-job",
                    description: "Wait until JMESPath query status returns Succeeded when polling with ``describe-signing-job``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 25 failed checks.",
                    options: [
                        {
                            name: "--job-id",
                            description: "The ID of the signing job on input.",
                            args: {
                                name: "string",
                            },
                            isOptional: false,
                        },
                        {
                            name: "--cli-input-json",
                            description: "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
                            args: {
                                name: "string",
                            },
                            isOptional: true,
                        },
                        {
                            name: "--generate-cli-skeleton",
                            description: "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
                            args: {
                                name: "string",
                                suggestions: ["input", "output"],
                            },
                            isOptional: true,
                        },
                    ],
                },
            ],
        },
    ],
};

