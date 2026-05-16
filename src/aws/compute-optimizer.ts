const completionSpec: Fig.Spec = {
  name: "compute-optimizer",
  description:
    "Compute Optimizer is a service that analyzes the configuration and utilization metrics of your Amazon Web Services compute resources, such as Amazon EC2 instances, Amazon EC2 Auto Scaling groups, Lambda functions, Amazon EBS volumes, and Amazon ECS services on Fargate. It reports whether your resources are optimal, and generates optimization recommendations to reduce the cost and improve the performance of your workloads. Compute Optimizer also provides recent utilization metric data, in addition to projected utilization metric data for the recommendations, which you can use to evaluate which recommendation provides the best price-performance trade-off. The analysis of your usage patterns can help you decide when to move or resize your running resources, and still meet your performance and capacity requirements. For more information about Compute Optimizer, including the required permissions to use the service, see the Compute Optimizer User Guide",
  subcommands: [
    {
      name: "delete-recommendation-preferences",
      description:
        "Deletes a recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The target resource type of the recommendation preference to delete. The Ec2Instance option encompasses standalone instances and instances that are part of Auto Scaling groups. The AutoScalingGroup option encompasses only instances that are part of an Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "An object that describes the scope of the recommendation preference to delete. You can delete recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recommendation-preference-names",
          description: "The name of the recommendation preference to delete",
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
      name: "describe-recommendation-export-jobs",
      description:
        "Describes recommendation export jobs created in the last seven days. Use the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions to request an export of your recommendations. Then use the DescribeRecommendationExportJobs action to view your export jobs",
      options: [
        {
          name: "--job-ids",
          description:
            "The identification numbers of the export jobs to return. An export job ID is returned when you create an export using the ExportAutoScalingGroupRecommendations or ExportEC2InstanceRecommendations actions. All export jobs created in the last seven days are returned if this parameter is omitted",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of export jobs",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description: "The token to advance to the next page of export jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of export jobs to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
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
      name: "export-auto-scaling-group-recommendations",
      description:
        "Exports optimization recommendations for Auto Scaling groups. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Auto Scaling group export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The IDs of the Amazon Web Services accounts for which to export Auto Scaling group recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of Auto Scaling group recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. The only export file format currently supported is Csv",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--recommendation-preferences",
          description:
            "An object to specify the preferences for the Auto Scaling group recommendations to export",
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
      name: "export-ebs-volume-recommendations",
      description:
        "Exports optimization recommendations for Amazon EBS volumes. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon EBS volume export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The IDs of the Amazon Web Services accounts for which to export Amazon EBS volume recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of Amazon EBS volume recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. The only export file format currently supported is Csv",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
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
      name: "export-ec2-instance-recommendations",
      description:
        "Exports optimization recommendations for Amazon EC2 instances. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The IDs of the Amazon Web Services accounts for which to export instance recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of instance recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "An object to specify the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for the export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permissions policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. The only export file format currently supported is Csv",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--recommendation-preferences",
          description:
            "An object to specify the preferences for the Amazon EC2 instance recommendations to export",
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
      name: "export-ecs-service-recommendations",
      description:
        "Exports optimization recommendations for Amazon ECS services on Fargate.  Recommendations are exported in a CSV file, and its metadata in a JSON file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can only have one Amazon ECS service export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The Amazon Web Services account IDs for the export Amazon ECS service recommendations.  If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to. This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive. If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of Amazon ECS service recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file.  The CSV file is the only export file format currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
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
      name: "export-idle-recommendations",
      description:
        "Export optimization recommendations for your idle resources.  Recommendations are exported in a comma-separated values (CSV) file, and its metadata in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one idle resource export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The Amazon Web Services account IDs for the export idle resource recommendations.  If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to. This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive. If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of idle resource recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. The CSV file is the only export file format currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
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
      name: "export-lambda-function-recommendations",
      description:
        "Exports optimization recommendations for Lambda functions. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Lambda function export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The IDs of the Amazon Web Services accounts for which to export Lambda function recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter cannot be specified together with the include member accounts parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the include member accounts parameter, is omitted. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of Lambda function recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. The only export file format currently supported is Csv",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. Recommendations for member accounts of the organization are not included in the export file if this parameter is omitted. This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive. Recommendations for member accounts are not included in the export if this parameter, or the account IDs parameter, is omitted",
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
      name: "export-license-recommendations",
      description:
        "Export optimization recommendations for your licenses.  Recommendations are exported in a comma-separated values (CSV) file, and its metadata in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one license export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The IDs of the Amazon Web Services accounts for which to export license recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to export recommendations. This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive. If this parameter is omitted, recommendations for member accounts aren't included in the export. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of license recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file. A CSV file is the only export format currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file . This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to include recommendations for resources in all member accounts of the organization if your account is the management account of an organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file . This parameter cannot be specified together with the account IDs parameter. The parameters are mutually exclusive",
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
      name: "export-rds-database-recommendations",
      description:
        "Export optimization recommendations for your Amazon Relational Database Service (Amazon RDS).  Recommendations are exported in a comma-separated values (CSV) file, and its metadata in a JavaScript Object Notation (JSON) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon RDS export job in progress per Amazon Web Services Region",
      options: [
        {
          name: "--account-ids",
          description:
            "The Amazon Web Services account IDs for the export Amazon RDS recommendations.  If your account is the management account or the delegated administrator of an organization, use this parameter to specify the member account you want to export recommendations to. This parameter can't be specified together with the include member accounts parameter. The parameters are mutually exclusive. If this parameter or the include member accounts parameter is omitted, the recommendations for member accounts aren't included in the export. You can specify multiple account IDs per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that exports a more specific set of Amazon RDS recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--fields-to-export",
          description:
            "The recommendations data to include in the export file. For more information about the fields that can be exported, see Exported files in the Compute Optimizer User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--s3-destination-config",
          description:
            "Describes the destination Amazon Simple Storage Service (Amazon S3) bucket name and key prefix for a recommendations export job. You must create the destination Amazon S3 bucket for your recommendations export before you create the export job. Compute Optimizer does not create the S3 bucket for you. After you create the S3 bucket, ensure that it has the required permission policy to allow Compute Optimizer to write the export file to it. If you plan to specify an object prefix when you create the export job, you must include the object prefix in the policy that you add to the S3 bucket. For more information, see Amazon S3 Bucket Policy for Compute Optimizer in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the export file.  The CSV file is the only export file format currently supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "If your account is the management account or the delegated administrator of an organization, this parameter indicates whether to include recommendations for resources in all member accounts of the organization. The member accounts must also be opted in to Compute Optimizer, and trusted access for Compute Optimizer must be enabled in the organization account. For more information, see Compute Optimizer and Amazon Web Services Organizations trusted access in the Compute Optimizer User Guide. If this parameter is omitted, recommendations for member accounts of the organization aren't included in the export file. If this parameter or the account ID parameter is omitted, recommendations for member accounts aren't included in the export",
        },
        {
          name: "--recommendation-preferences",
          description:
            "Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request",
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
      name: "get-auto-scaling-group-recommendations",
      description:
        "Returns Auto Scaling group recommendations. Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return Auto Scaling group recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return Auto Scaling group recommendations. Only one account ID can be specified per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-group-arns",
          description:
            "The Amazon Resource Name (ARN) of the Auto Scaling groups for which to return recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of Auto Scaling group recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Auto Scaling group recommendations to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of Auto Scaling group recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--recommendation-preferences",
          description:
            "An object to specify the preferences for the Auto Scaling group recommendations to return in the response",
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
      name: "get-ebs-volume-recommendations",
      description:
        "Returns Amazon Elastic Block Store (Amazon EBS) volume recommendations. Compute Optimizer generates recommendations for Amazon EBS volumes that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--volume-arns",
          description:
            "The Amazon Resource Name (ARN) of the volumes for which to return recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of volume recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of volume recommendations to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of volume recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return volume recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return volume recommendations. Only one account ID can be specified per request",
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
      name: "get-ec2-instance-recommendations",
      description:
        "Returns Amazon EC2 instance recommendations. Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--instance-arns",
          description:
            "The Amazon Resource Name (ARN) of the instances for which to return recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of instance recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of instance recommendations to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of instance recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return instance recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return instance recommendations. Only one account ID can be specified per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--recommendation-preferences",
          description:
            "An object to specify the preferences for the Amazon EC2 instance recommendations to return in the response",
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
      name: "get-ec2-recommendation-projected-metrics",
      description:
        "Returns the projected utilization metrics of Amazon EC2 instance recommendations.  The Cpu and Memory metrics are the only projected utilization metrics returned when you run this action. Additionally, the Memory metric is returned only for resources that have the unified CloudWatch agent installed on them. For more information, see Enabling Memory Utilization with the CloudWatch Agent",
      options: [
        {
          name: "--instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the instances for which to return recommendation projected metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--stat",
          description: "The statistic of the projected metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--period",
          description:
            "The granularity, in seconds, of the projected metrics data points",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp of the first projected metrics data point to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp of the last projected metrics data point to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--recommendation-preferences",
          description:
            "An object to specify the preferences for the Amazon EC2 recommendation projected metrics to return in the response",
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
      name: "get-ecs-service-recommendation-projected-metrics",
      description:
        "Returns the projected metrics of Amazon ECS service recommendations",
      options: [
        {
          name: "--service-arn",
          description:
            "The ARN that identifies the Amazon ECS service.   The following is the format of the ARN:   arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name",
          args: {
            name: "string",
          },
        },
        {
          name: "--stat",
          description: "The statistic of the projected metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--period",
          description:
            "The granularity, in seconds, of the projected metrics data points",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp of the first projected metrics data point to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp of the last projected metrics data point to return",
          args: {
            name: "timestamp",
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
      name: "get-ecs-service-recommendations",
      description:
        "Returns Amazon ECS service recommendations.   Compute Optimizer generates recommendations for Amazon ECS services on Fargate that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--service-arns",
          description:
            "The ARN that identifies the Amazon ECS service.   The following is the format of the ARN:   arn:aws:ecs:region:aws_account_id:service/cluster-name/service-name",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of Amazon ECS service recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Amazon ECS service recommendations to return with a single request.  To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of Amazon ECS service recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "Return the Amazon ECS service recommendations to the specified Amazon Web Services account IDs.  If your account is the management account or the delegated administrator of an organization, use this parameter to return the Amazon ECS service recommendations to specific member accounts. You can only specify one account ID per request",
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
      name: "get-effective-recommendation-preferences",
      description:
        "Returns the recommendation preferences that are in effect for a given resource, such as enhanced infrastructure metrics. Considers all applicable preferences that you might have set at the resource, account, and organization level. When you create a recommendation preference, you can set its status to Active or Inactive. Use this action to view the recommendation preferences that are in effect, or Active",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to confirm effective recommendation preferences. Only EC2 instance and Auto Scaling group ARNs are currently supported",
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
      name: "get-enrollment-status",
      description:
        "Returns the enrollment (opt in) status of an account to the Compute Optimizer service. If the account is the management account of an organization, this action also confirms the enrollment status of member accounts of the organization. Use the GetEnrollmentStatusesForOrganization action to get detailed information about the enrollment status of member accounts of an organization",
      options: [
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
      name: "get-enrollment-statuses-for-organization",
      description:
        "Returns the Compute Optimizer enrollment (opt-in) status of organization member accounts, if your account is an organization management account. To get the enrollment status of standalone accounts, use the GetEnrollmentStatus action",
      options: [
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of account enrollment statuses",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of account enrollment statuses",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of account enrollment statuses to return with a single request. You can specify up to 100 statuses to return with each request. To retrieve the remaining results, make another request with the returned nextToken value",
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
      name: "get-idle-recommendations",
      description:
        "Returns idle resource recommendations. Compute Optimizer generates recommendations for idle resources that meet a specific set of requirements. For more information, see Resource requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-arns",
          description: "The ARN that identifies the idle resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of idle resource recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of idle resource recommendations to return with a single request.  To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of idle resource recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "Return the idle resource recommendations to the specified Amazon Web Services account IDs. If your account is the management account or the delegated administrator of an organization, use this parameter to return the idle resource recommendations to specific member accounts. You can only specify one account ID per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--order-by",
          description: "The order to sort the idle resource recommendations",
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
      name: "get-lambda-function-recommendations",
      description:
        "Returns Lambda function recommendations. Compute Optimizer generates recommendations for functions that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--function-arns",
          description:
            "The Amazon Resource Name (ARN) of the functions for which to return recommendations. You can specify a qualified or unqualified ARN. If you specify an unqualified ARN without a function version suffix, Compute Optimizer will return recommendations for the latest ($LATEST) version of the function. If you specify a qualified ARN with a version suffix, Compute Optimizer will return recommendations for the specified function version. For more information about using function versions, see Using versions in the Lambda Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return function recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return function recommendations. Only one account ID can be specified per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of function recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of function recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of function recommendations to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
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
      name: "get-license-recommendations",
      description:
        "Returns license recommendations for Amazon EC2 instances that run on a specific license. Compute Optimizer generates recommendations for licenses that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-arns",
          description:
            "The ARN that identifies the Amazon EC2 instance.   The following is the format of the ARN:   arn:aws:ec2:region:aws_account_id:instance/instance-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of license recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of license recommendations to return with a single request.   To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of license recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return license recommendations. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return license recommendations. Only one account ID can be specified per request",
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
      name: "get-rds-database-recommendation-projected-metrics",
      description:
        "Returns the projected metrics of Amazon RDS recommendations",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN that identifies the Amazon RDS.   The following is the format of the ARN:   arn:aws:rds:{region}:{accountId}:db:{resourceName}",
          args: {
            name: "string",
          },
        },
        {
          name: "--stat",
          description: "The statistic of the projected metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--period",
          description:
            "The granularity, in seconds, of the projected metrics data points",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp of the first projected metrics data point to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp of the last projected metrics data point to return",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--recommendation-preferences",
          description:
            "Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request",
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
      name: "get-rds-database-recommendations",
      description:
        "Returns Amazon RDS recommendations.  Compute Optimizer generates recommendations for Amazon RDS that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-arns",
          description:
            "The ARN that identifies the Amazon RDS.   The following is the format of the ARN:   arn:aws:rds:{region}:{accountId}:db:{resourceName}   The following is the format of a DB Cluster ARN:   arn:aws:rds:{region}:{accountId}:cluster:{resourceName}",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of Amazon RDS recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Amazon RDS recommendations to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "An array of objects to specify a filter that returns a more specific list of Amazon RDS recommendations",
          args: {
            name: "list",
          },
        },
        {
          name: "--account-ids",
          description:
            "Return the Amazon RDS recommendations to the specified Amazon Web Services account IDs.  If your account is the management account or the delegated administrator of an organization, use this parameter to return the Amazon RDS recommendations to specific member accounts. You can only specify one account ID per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--recommendation-preferences",
          description:
            "Describes the recommendation preferences to return in the response of a GetAutoScalingGroupRecommendations, GetEC2InstanceRecommendations, GetEC2RecommendationProjectedMetrics, GetRDSDatabaseRecommendations, and GetRDSDatabaseRecommendationProjectedMetrics request",
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
      name: "get-recommendation-preferences",
      description:
        "Returns existing recommendation preferences, such as enhanced infrastructure metrics. Use the scope parameter to specify which preferences to return. You can specify to return preferences for an organization, a specific account ID, or a specific EC2 instance or Auto Scaling group Amazon Resource Name (ARN). For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The target resource type of the recommendation preference for which to return preferences. The Ec2Instance option encompasses standalone instances and instances that are part of Auto Scaling groups. The AutoScalingGroup option encompasses only instances that are part of an Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "An object that describes the scope of the recommendation preference to return. You can return recommendation preferences that are created at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of recommendation preferences",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of recommendation preferences to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
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
      name: "get-recommendation-summaries",
      description:
        "Returns the optimization findings for an account. It returns the number of:   Amazon EC2 instances in an account that are Underprovisioned, Overprovisioned, or Optimized.   Auto Scaling groups in an account that are NotOptimized, or Optimized.   Amazon EBS volumes in an account that are NotOptimized, or Optimized.   Lambda functions in an account that are NotOptimized, or Optimized.   Amazon ECS services in an account that are Underprovisioned, Overprovisioned, or Optimized",
      options: [
        {
          name: "--account-ids",
          description:
            "The ID of the Amazon Web Services account for which to return recommendation summaries. If your account is the management account of an organization, use this parameter to specify the member account for which you want to return recommendation summaries. Only one account ID can be specified per request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to advance to the next page of recommendation summaries",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of recommendation summaries to return with a single request. To retrieve the remaining results, make another request with the returned nextToken value",
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
      name: "put-recommendation-preferences",
      description:
        "Creates a new recommendation preference or updates an existing recommendation preference, such as enhanced infrastructure metrics. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide",
      options: [
        {
          name: "--resource-type",
          description:
            "The target resource type of the recommendation preference to create. The Ec2Instance option encompasses standalone instances and instances that are part of Auto Scaling groups. The AutoScalingGroup option encompasses only instances that are part of an Auto Scaling group",
          args: {
            name: "string",
          },
        },
        {
          name: "--scope",
          description:
            "An object that describes the scope of the recommendation preference to create. You can create recommendation preferences at the organization level (for management accounts of an organization only), account level, and resource level. For more information, see Activating enhanced infrastructure metrics in the Compute Optimizer User Guide.  You cannot create recommendation preferences for Auto Scaling groups at the organization and account levels. You can create recommendation preferences for Auto Scaling groups only at the resource level by specifying a scope name of ResourceArn and a scope value of the Auto Scaling group Amazon Resource Name (ARN). This will configure the preference for all instances that are part of the specified Auto Scaling group. You also cannot create recommendation preferences at the resource level for instances that are part of an Auto Scaling group. You can create recommendation preferences at the resource level only for standalone instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--enhanced-infrastructure-metrics",
          description:
            "The status of the enhanced infrastructure metrics recommendation preference to create or update. Specify the Active status to activate the preference, or specify Inactive to deactivate the preference. For more information, see Enhanced infrastructure metrics in the Compute Optimizer User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--inferred-workload-types",
          description:
            "The status of the inferred workload types recommendation preference to create or update.  The inferred workload type feature is active by default. To deactivate it, create a recommendation preference.  Specify the Inactive status to deactivate the feature, or specify Active to activate it. For more information, see Inferred workload types in the Compute Optimizer User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-metrics-preference",
          description:
            "The provider of the external metrics recommendation preference to create or update. Specify a valid provider in the source field to activate the preference. To delete this preference, see the DeleteRecommendationPreferences action. This preference can only be set for the Ec2Instance resource type. For more information, see External metrics ingestion in the Compute Optimizer User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--look-back-period",
          description:
            "The preference to control the number of days the utilization metrics of the Amazon Web Services resource are analyzed. When this preference isn't specified, we use the default value DAYS_14.  You can only set this preference for the Amazon EC2 instance and Auto Scaling group resource types.     Amazon EC2 instance lookback preferences can be set at the organization, account, and resource levels.   Auto Scaling group lookback preferences can only be set at the resource level",
          args: {
            name: "string",
          },
        },
        {
          name: "--utilization-preferences",
          description:
            "The preference to control the resource\u2019s CPU utilization threshold, CPU utilization headroom, and memory utilization headroom. When this preference isn't specified, we use the following default values.  CPU utilization:    P99_5 for threshold    PERCENT_20 for headroom   Memory utilization:    PERCENT_20 for headroom      You can only set CPU and memory utilization preferences for the Amazon EC2 instance resource type.   The threshold setting isn\u2019t available for memory utilization",
          args: {
            name: "list",
          },
        },
        {
          name: "--preferred-resources",
          description:
            "The preference to control which resource type values are considered when generating rightsizing recommendations. You can specify this preference as a combination of include and exclude lists. You must specify either an includeList or excludeList. If the preference is an empty set of resource type values, an error occurs.   You can only set this preference for the Amazon EC2 instance and Auto Scaling group resource types",
          args: {
            name: "list",
          },
        },
        {
          name: "--savings-estimation-mode",
          description:
            "The status of the savings estimation mode preference to create or update.  Specify the AfterDiscounts status to activate the preference, or specify BeforeDiscounts to deactivate the preference. Only the account manager or delegated administrator of your organization can activate this preference. For more information, see  Savings estimation mode in the Compute Optimizer User Guide",
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
      name: "update-enrollment-status",
      description:
        "Updates the enrollment (opt in and opt out) status of an account to the Compute Optimizer service. If the account is a management account of an organization, this action can also be used to enroll member accounts of the organization. You must have the appropriate permissions to opt in to Compute Optimizer, to view its recommendations, and to opt out. For more information, see Controlling access with Amazon Web Services Identity and Access Management in the Compute Optimizer User Guide. When you opt in, Compute Optimizer automatically creates a service-linked role in your account to access its data. For more information, see Using Service-Linked Roles for Compute Optimizer in the Compute Optimizer User Guide",
      options: [
        {
          name: "--status",
          description:
            "The new enrollment status of the account. The following status options are available:    Active - Opts in your account to the Compute Optimizer service. Compute Optimizer begins analyzing the configuration and utilization metrics of your Amazon Web Services resources after you opt in. For more information, see Metrics analyzed by Compute Optimizer in the Compute Optimizer User Guide.    Inactive - Opts out your account from the Compute Optimizer service. Your account's recommendations and related metrics data will be deleted from Compute Optimizer after you opt out.    The Pending and Failed options cannot be used to update the enrollment status of an account. They are returned in the response of a request to update the enrollment status of an account",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-member-accounts",
          description:
            "Indicates whether to enroll member accounts of the organization if the account is the management account of an organization",
        },
        {
          name: "--no-include-member-accounts",
          description:
            "Indicates whether to enroll member accounts of the organization if the account is the management account of an organization",
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
