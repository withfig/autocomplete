var completionSpec = {
    name: "compute-optimizer",
    description: "AWS Compute Optimizer is a service that analyzes the configuration and utilization metrics of your AWS compute resources, such as EC2 instances, Auto Scaling groups, AWS Lambda functions, and Amazon EBS volumes. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, as well as projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the AWS Compute Optimizer User Guide.",
    subcommands: [
        {
            name: "describe-recommendation-export-jobs",
            description: "Describes recommendation export jobs created in the last seven days. Use the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions to request an export of your recommendations. Then use the DescribeRecommendationExportJobs action to view your export jobs.",
            options: [
                {
                    name: "--job-ids",
                    description: "The identification numbers of the export jobs to return. An export job ID is returned when you create an export using the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions. All export jobs created in the last seven days are returned if this parameter is omitted.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter to return a more specific list of export jobs.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of export jobs.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of export jobs to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
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
            name: "export-auto-scaling-group-recommendations",
            description: "Exports optimization recommendations for Auto Scaling groups. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Auto Scaling group export job in progress per AWS Region.",
            options: [
                {
                    name: "--account-ids",
                    description: "The IDs of the AWS accounts for which to export Auto Scaling group recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter to export a more specific set of Auto Scaling group recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--fields-to-export",
                    description: "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--s3-destination-config",
                    description: "An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer user guide.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--file-format",
                    description: "The format of the export file. The only export file format currently supported is Csv.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--include-member-accounts",
                    description: "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.",
                },
                {
                    name: "--no-include-member-accounts",
                    description: "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.",
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
            name: "export-ec2-instance-recommendations",
            description: "Exports optimization recommendations for Amazon EC2 instances. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon EC2 instance export job in progress per AWS Region.",
            options: [
                {
                    name: "--account-ids",
                    description: "The IDs of the AWS accounts for which to export instance recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter to export a more specific set of instance recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--fields-to-export",
                    description: "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--s3-destination-config",
                    description: "An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer user guide.",
                    args: {
                        name: "structure",
                    },
                    isOptional: false,
                },
                {
                    name: "--file-format",
                    description: "The format of the export file. The only export file format currently supported is Csv.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--include-member-accounts",
                    description: "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.",
                },
                {
                    name: "--no-include-member-accounts",
                    description: "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted.",
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
            name: "get-auto-scaling-group-recommendations",
            description: "Returns Auto Scaling group recommendations. AWS Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the Supported resources and requirements in the AWS Compute Optimizer User Guide.",
            options: [
                {
                    name: "--account-ids",
                    description: "The ID of the AWS account for which to return Auto Scaling group recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return Auto Scaling group recommendations. Only one account ID can be specified per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--auto-scaling-group-arns",
                    description: "The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of Auto Scaling group recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of Auto Scaling group recommendations to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter that returns a more specific list of Auto Scaling group recommendations.",
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
            name: "get-ebs-volume-recommendations",
            description: "Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations. AWS Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the Supported resources and requirements in the AWS Compute Optimizer User Guide.",
            options: [
                {
                    name: "--volume-arns",
                    description: "The Amazon Resource Name (ARN) of the volumes for which to return recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of volume recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of volume recommendations to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter that returns a more specific list of volume recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--account-ids",
                    description: "The ID of the AWS account for which to return volume recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return volume recommendations. Only one account ID can be specified per request.",
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
            name: "get-ec2-instance-recommendations",
            description: "Returns Amazon EC2 instance recommendations. AWS Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the Supported resources and requirements in the AWS Compute Optimizer User Guide.",
            options: [
                {
                    name: "--instance-arns",
                    description: "The Amazon Resource Name (ARN) of the instances for which to return recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of instance recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of instance recommendations to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter that returns a more specific list of instance recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--account-ids",
                    description: "The ID of the AWS account for which to return instance recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return instance recommendations. Only one account ID can be specified per request.",
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
            name: "get-ec2-recommendation-projected-metrics",
            description: "Returns the projected utilization metrics of Amazon EC2 instance recommendations.  The Cpu and Memory metrics are the only projected utilization metrics returned when you run this action. Additionally, the Memory metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent.",
            options: [
                {
                    name: "--instance-arn",
                    description: "The Amazon Resource Name (ARN) of the instances for which to return recommendation projected metrics.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--stat",
                    description: "The statistic of the projected metrics.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--period",
                    description: "The granularity, in seconds, of the projected metrics data points.",
                    args: {
                        name: "integer",
                    },
                    isOptional: false,
                },
                {
                    name: "--start-time",
                    description: "The time stamp of the first projected metrics data point to return.",
                    args: {
                        name: "timestamp",
                    },
                    isOptional: false,
                },
                {
                    name: "--end-time",
                    description: "The time stamp of the last projected metrics data point to return.",
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
            name: "get-enrollment-status",
            description: "Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer service. If the account is the management account of an organization, this action also confirms the enrollment status of member accounts within the organization.",
            options: [
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
            name: "get-lambda-function-recommendations",
            description: "Returns AWS Lambda function recommendations. AWS Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the Supported resources and requirements in the AWS Compute Optimizer User Guide.",
            options: [
                {
                    name: "--function-arns",
                    description: "The Amazon Resource Name (ARN) of the functions for which to return recommendations. You can specify a qualified or unqualified ARN. If you specify an unqualified ARN without a function version suffix, Compute Optimizer will return recommendations for the latest ($LATEST) version of the function. If you specify a qualified ARN with a version suffix, Compute Optimizer will return recommendations for the specified function version. For more information about using function versions, see Using versions in the AWS Lambda Developer Guide.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--account-ids",
                    description: "The ID of the AWS account for which to return function recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return function recommendations. Only one account ID can be specified per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--filters",
                    description: "An array of objects that describe a filter that returns a more specific list of function recommendations.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of function recommendations.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of function recommendations to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
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
            name: "get-recommendation-summaries",
            description: "Returns the optimization findings for an account. It returns the number of:   Amazon EC2 instances in an account that are Underprovisioned, Overprovisioned, or Optimized.   Auto Scaling groups in an account that are NotOptimized, or Optimized.   Amazon EBS volumes in an account that are NotOptimized, or Optimized.   Lambda functions in an account that are NotOptimized, or Optimized.",
            options: [
                {
                    name: "--account-ids",
                    description: "The ID of the AWS account for which to return recommendation summaries. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return recommendation summaries. Only one account ID can be specified per request.",
                    args: {
                        name: "list",
                    },
                    isOptional: true,
                },
                {
                    name: "--next-token",
                    description: "The token to advance to the next page of recommendation summaries.",
                    args: {
                        name: "string",
                    },
                    isOptional: true,
                },
                {
                    name: "--max-results",
                    description: "The maximum number of recommendation summaries to return with a single request. To retrieve the remaining results, make another request with the returned NextToken value.",
                    args: {
                        name: "integer",
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
            name: "update-enrollment-status",
            description: "Updates the enrollment (opt in and opt out) status of an account to the AWS Compute Optimizer service. If the account is a management account of an organization, this action can also be used to enroll member accounts within the organization. You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see Controlling access with AWS Identity and Access Management in the Compute Optimizer User Guide. When you opt in, Compute Optimizer automatically creates a Service-Linked Role in your account to access its data. For more information, see Using Service-Linked Roles for AWS Compute Optimizer in the Compute Optimizer User Guide.",
            options: [
                {
                    name: "--status",
                    description: "The new enrollment status of the account. The following status options are available:    Active - Opts in your account to the Compute Optimizer service. Compute Optimizer begins analyzing the configuration and utilization metrics of your AWS resources after you opt in. For more information, see Metrics analyzed by AWS Compute Optimizer in the Compute Optimizer User Guide.    Inactive - Opts out your account from the Compute Optimizer service. Your account's recommendations and related metrics data will be deleted from Compute Optimizer after you opt out.    The Pending and Failed options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account.",
                    args: {
                        name: "string",
                    },
                    isOptional: false,
                },
                {
                    name: "--include-member-accounts",
                    description: "Indicates whether to enroll member accounts of the organization if the account is the management account of an organization.",
                },
                {
                    name: "--no-include-member-accounts",
                    description: "Indicates whether to enroll member accounts of the organization if the account is the management account of an organization.",
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
};

