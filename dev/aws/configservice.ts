export const completionSpec: Fig.Spec = {
  name: "configservice",
  description:
    "AWS Config AWS Config provides a way to keep track of the configurations of all the AWS resources associated with your AWS account. You can use AWS Config to get the current and historical configurations of each AWS resource and also to get information about the relationship between the resources. An AWS resource can be an Amazon Compute Cloud (Amazon EC2) instance, an Elastic Block Store (EBS) volume, an elastic network Interface (ENI), or a security group. For a complete list of resources currently supported by AWS Config, see Supported AWS Resources. You can access and manage AWS Config through the AWS Management Console, the AWS Command Line Interface (AWS CLI), the AWS Config API, or the AWS SDKs for AWS Config. This reference guide contains documentation for the AWS Config API and the AWS CLI commands that you can use to manage AWS Config. The AWS Config API uses the Signature Version 4 protocol for signing requests. For more information about how to sign a request with this protocol, see Signature Version 4 Signing Process. For detailed information about AWS Config features and their associated actions or commands, as well as how to work with AWS Management Console, see What Is AWS Config in the AWS Config Developer Guide.",
  subcommands: [
    {
      name: "batch-get-aggregate-resource-config",
      description:
        "Returns the current configuration items for resources that are present in your AWS Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceIdentifiers list.     The API does not return results for deleted resources.    The API does not return tags and relationships.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifiers",
          description: "A list of aggregate ResourceIdentifiers objects.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-resource-config",
      description:
        "Returns the current configuration for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list.     The API does not return results for deleted resources.    The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.",
      options: [
        {
          name: "--resource-keys",
          description:
            "A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-aggregation-authorization",
      description:
        "Deletes the authorization granted to the specified configuration aggregator account in a specified region.",
      options: [
        {
          name: "--authorized-account-id",
          description:
            "The 12-digit account ID of the account authorized to aggregate data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized-aws-region",
          description: "The region authorized to collect aggregated data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-config-rule",
      description:
        "Deletes the specified AWS Config rule and all of its evaluation results. AWS Config sets the state of a rule to DELETING until the deletion is complete. You cannot update a rule while it is in this state. If you make a PutConfigRule or DeleteConfigRule request for the rule, you will receive a ResourceInUseException. You can check the state of a rule by using the DescribeConfigRules request.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-configuration-aggregator",
      description:
        "Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-configuration-recorder",
      description:
        "Deletes the configuration recorder. After the configuration recorder is deleted, AWS Config will not record resource configuration changes until you create a new configuration recorder. This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the GetResourceConfigHistory action, but you will not be able to access this information in the AWS Config console until you create a new configuration recorder.",
      options: [
        {
          name: "--configuration-recorder-name",
          description:
            "The name of the configuration recorder to be deleted. You can retrieve the name of your configuration recorder by using the DescribeConfigurationRecorders action.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-conformance-pack",
      description:
        "Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that conformance pack. AWS Config sets the conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state.",
      options: [
        {
          name: "--conformance-pack-name",
          description: "Name of the conformance pack you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-delivery-channel",
      description:
        "Deletes the delivery channel. Before you can delete the delivery channel, you must stop the configuration recorder by using the StopConfigurationRecorder action.",
      options: [
        {
          name: "--delivery-channel-name",
          description: "The name of the delivery channel to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-evaluation-results",
      description:
        "Deletes the evaluation results for the specified AWS Config rule. You can specify one AWS Config rule per request. After you delete the evaluation results, you can call the StartConfigRulesEvaluation API to start evaluating your AWS resources against the rule.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want to delete the evaluation results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-organization-config-rule",
      description:
        "Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization.  Only a master account and a delegated administrator account can delete an organization config rule. When calling this API with a delegated administrator, you must ensure AWS Organizations ListDelegatedAdministrator permissions are added. AWS Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.",
      options: [
        {
          name: "--organization-config-rule-name",
          description:
            "The name of organization config rule that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-organization-conformance-pack",
      description:
        "Deletes the specified organization conformance pack and all of the config rules and remediation actions from all member accounts in that organization.   Only a master account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure AWS Organizations ListDelegatedAdministrator permissions are added. AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state.",
      options: [
        {
          name: "--organization-conformance-pack-name",
          description:
            "The name of organization conformance pack that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-pending-aggregation-request",
      description:
        "Deletes pending authorization requests for a specified aggregator account in a specified region.",
      options: [
        {
          name: "--requester-account-id",
          description:
            "The 12-digit account ID of the account requesting to aggregate data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--requester-aws-region",
          description: "The region requesting to aggregate data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-remediation-configuration",
      description: "Deletes the remediation configuration.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want to delete remediation configuration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "The type of a resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-remediation-exceptions",
      description:
        "Deletes one or more remediation exceptions mentioned in the resource keys.  AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want to delete remediation exception configuration.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-keys",
          description:
            "An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource-config",
      description:
        "Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your AWS Config History.",
      options: [
        {
          name: "--resource-type",
          description: "The type of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Unique identifier of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-retention-configuration",
      description: "Deletes the retention configuration.",
      options: [
        {
          name: "--retention-configuration-name",
          description: "The name of the retention configuration to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stored-query",
      description:
        "Deletes the stored query for a single AWS account and a single AWS Region.",
      options: [
        {
          name: "--query-name",
          description: "The name of the query that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deliver-config-snapshot",
      description:
        "Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, AWS Config sends the following notifications using an Amazon SNS topic that you have specified.   Notification of the start of the delivery.   Notification of the completion of the delivery, if the delivery was successfully completed.   Notification of delivery failure, if the delivery failed.",
      options: [
        {
          name: "--delivery-channel-name",
          description:
            "The name of the delivery channel through which the snapshot is delivered.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-aggregate-compliance-by-config-rules",
      description:
        "Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules.   The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the results by ConfigRuleComplianceFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-aggregate-compliance-by-conformance-packs",
      description:
        "Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant AWS Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.  The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the result by AggregateConformancePackComplianceFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-aggregation-authorizations",
      description:
        "Returns a list of authorizations granted to various aggregator accounts and regions.",
      options: [
        {
          name: "--limit",
          description:
            "The maximum number of AggregationAuthorizations returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-compliance-by-config-rule",
      description:
        "Indicates whether the specified AWS Config rules are compliant. If a rule is noncompliant, this action returns the number of AWS resources that do not comply with the rule. A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply. If AWS Config has no current evaluation results for the rule, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.",
      options: [
        {
          name: "--config-rule-names",
          description:
            "Specify one or more AWS Config rule names to filter the results by rule.",
          args: {
            name: "list",
          },
        },
        {
          name: "--compliance-types",
          description:
            "Filters the results by compliance. The allowed values are COMPLIANT and NON_COMPLIANT.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-compliance-by-resource",
      description:
        "Indicates whether the specified AWS resources are compliant. If a resource is noncompliant, this action returns the number of AWS Config rules that the resource does not comply with. A resource is compliant if it complies with all the AWS Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules. If AWS Config has no current evaluation results for the resource, it returns INSUFFICIENT_DATA. This result might indicate one of the following conditions about the rules that evaluate the resource:   AWS Config has never invoked an evaluation for the rule. To check whether it has, use the DescribeConfigRuleEvaluationStatus action to get the LastSuccessfulInvocationTime and LastFailedInvocationTime.   The rule's AWS Lambda function is failing to send evaluation results to AWS Config. Verify that the role that you assigned to your configuration recorder includes the config:PutEvaluations permission. If the rule is a custom rule, verify that the AWS Lambda execution role includes the config:PutEvaluations permission.   The rule's AWS Lambda function has returned NOT_APPLICABLE for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.",
      options: [
        {
          name: "--resource-type",
          description:
            "The types of AWS resources for which you want compliance information (for example, AWS::EC2::Instance). For this action, you can specify that the resource type is an AWS account by specifying AWS::::Account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the AWS resource for which you want compliance information. You can specify only one resource ID. If you specify a resource ID, you must also specify a type for ResourceType.",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-types",
          description:
            "Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and INSUFFICIENT_DATA.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-config-rule-evaluation-status",
      description:
        "Returns status information for each of your AWS managed Config rules. The status includes information such as the last time AWS Config invoked the rule, the last time AWS Config failed to invoke the rule, and the related error for the last failure.",
      options: [
        {
          name: "--config-rule-names",
          description:
            "The name of the AWS managed Config rules for which you want status information. If you do not specify any names, AWS Config returns status information for all AWS managed Config rules that you use.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The number of rule evaluation results that you want returned. This parameter is required if the rule limit for your account is more than the default of 150 rules. For information about requesting a rule limit increase, see AWS Config Limits in the AWS General Reference Guide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-config-rules",
      description: "Returns details about your AWS Config rules.",
      options: [
        {
          name: "--config-rule-names",
          description:
            "The names of the AWS Config rules for which you want details. If you do not specify any names, AWS Config returns details for all your rules.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-configuration-aggregator-sources-status",
      description:
        "Returns status information for sources within an aggregator. The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-status",
          description:
            "Filters the status type.   Valid value FAILED indicates errors while moving data.   Valid value SUCCEEDED indicates the data was successfully moved.   Valid value OUTDATED indicates the data is not the most recent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-configuration-aggregators",
      description:
        "Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account.",
      options: [
        {
          name: "--configuration-aggregator-names",
          description: "The name of the configuration aggregators.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of configuration aggregators returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-configuration-recorder-status",
      description:
        "Returns the current status of the specified configuration recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account.",
      options: [
        {
          name: "--configuration-recorder-names",
          description:
            "The name(s) of the configuration recorder. If the name is not specified, the action returns the current status of all the configuration recorders associated with the account.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-configuration-recorders",
      description:
        "Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.  Currently, you can specify only one configuration recorder per region in your account.",
      options: [
        {
          name: "--configuration-recorder-names",
          description: "A list of configuration recorder names.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-conformance-pack-compliance",
      description:
        "Returns compliance details for each rule in that conformance pack.  You must provide exact rule names.",
      options: [
        {
          name: "--conformance-pack-name",
          description: "Name of the conformance pack.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "A ConformancePackComplianceFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of AWS Config rules within a conformance pack are returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-conformance-pack-status",
      description:
        "Provides one or more conformance packs deployment status.  If there are no conformance packs then you will see an empty result.",
      options: [
        {
          name: "--conformance-pack-names",
          description: "Comma-separated list of conformance pack names.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of conformance packs status returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-conformance-packs",
      description: "Returns a list of one or more conformance packs.",
      options: [
        {
          name: "--conformance-pack-names",
          description:
            "Comma-separated list of conformance pack names for which you want details. If you do not specify any names, AWS Config returns details for all your conformance packs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of conformance packs returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-delivery-channel-status",
      description:
        "Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account.",
      options: [
        {
          name: "--delivery-channel-names",
          description: "A list of delivery channel names.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-delivery-channels",
      description:
        "Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.  Currently, you can specify only one delivery channel per region in your account.",
      options: [
        {
          name: "--delivery-channel-names",
          description: "A list of delivery channel names.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-organization-config-rule-statuses",
      description:
        "Provides organization config rule deployment status for an organization.  The status is not considered successful until organization config rule is successfully deployed in all the member accounts with an exception of excluded accounts. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.",
      options: [
        {
          name: "--organization-config-rule-names",
          description:
            "The names of organization config rules for which you want status details. If you do not specify any names, AWS Config returns details for all your organization AWS Confg rules.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of OrganizationConfigRuleStatuses returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-organization-config-rules",
      description:
        "Returns a list of organization config rules.   When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization config rule names. It is only applicable, when you request all the organization config rules.",
      options: [
        {
          name: "--organization-config-rule-names",
          description:
            "The names of organization config rules for which you want details. If you do not specify any names, AWS Config returns details for all your organization config rules.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of organization config rules returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-organization-conformance-pack-statuses",
      description:
        "Provides organization conformance pack deployment status for an organization.   The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts. When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.",
      options: [
        {
          name: "--organization-conformance-pack-names",
          description:
            "The names of organization conformance packs for which you want status details. If you do not specify any names, AWS Config returns details for all your organization conformance packs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of OrganizationConformancePackStatuses returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-organization-conformance-packs",
      description:
        "Returns a list of organization conformance packs.   When you specify the limit and the next token, you receive a paginated response.  Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs.",
      options: [
        {
          name: "--organization-conformance-pack-names",
          description:
            "The name that you assign to an organization conformance pack.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of organization config packs returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-pending-aggregation-requests",
      description: "Returns a list of all pending aggregation requests.",
      options: [
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-remediation-configurations",
      description:
        "Returns the details of one or more remediation configurations.",
      options: [
        {
          name: "--config-rule-names",
          description:
            "A list of AWS Config rule names of remediation configurations for which you want details.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-remediation-exceptions",
      description:
        "Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response.   AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared. When you specify the limit and the next token, you receive a paginated response.  Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.",
      options: [
        {
          name: "--config-rule-name",
          description: "The name of the AWS Config rule.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-keys",
          description:
            "An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-remediation-execution-status",
      description:
        "Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.",
      options: [
        {
          name: "--config-rule-name",
          description: "A list of AWS Config rule names.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-keys",
          description:
            "A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-retention-configurations",
      description:
        "Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.  Currently, AWS Config supports only one retention configuration per region in your account.",
      options: [
        {
          name: "--retention-configuration-names",
          description:
            "A list of names of retention configurations for which you want details. If you do not specify a name, AWS Config returns details for all the retention configurations for that account.  Currently, AWS Config supports only one retention configuration per region in your account.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aggregate-compliance-details-by-config-rule",
      description:
        "Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.   The results can return an empty result page. But if you have a nextToken, the results are displayed on the next page.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want compliance information.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-id",
          description: "The 12-digit account ID of the source account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description: "The source region from where the data is aggregated.",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-type",
          description:
            "The resource compliance status.  For the GetAggregateComplianceDetailsByConfigRuleRequest data type, AWS Config supports only the COMPLIANT and NON_COMPLIANT. AWS Config does not support the NOT_APPLICABLE and INSUFFICIENT_DATA values.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aggregate-config-rule-compliance-summary",
      description:
        "Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.  The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the results based on the ConfigRuleComplianceSummaryFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by-key",
          description: "Groups the result based on ACCOUNT_ID or AWS_REGION.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aggregate-conformance-pack-compliance-summary",
      description:
        "Returns the count of compliant and noncompliant conformance packs across all AWS Accounts and AWS Regions in an aggregator. You can filter based on AWS Account ID or AWS Region.  The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the results based on the AggregateConformancePackComplianceSummaryFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by-key",
          description:
            "Groups the result based on AWS Account ID or AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of results returned on each page. The default is maximum. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aggregate-discovered-resource-counts",
      description:
        "Returns the resource counts across accounts and regions that are present in your AWS Config aggregator. You can request the resource counts by providing filters and GroupByKey. For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the results based on the ResourceCountFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by-key",
          description: "The key to group the resource counts.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of GroupedResourceCount objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-aggregate-resource-config",
      description:
        "Returns configuration item that is aggregated for your specific resource in a specific source account and region.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description: "An object that identifies aggregate resource.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-compliance-details-by-config-rule",
      description:
        "Returns the evaluation results for the specified AWS Config rule. The results indicate which AWS resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want compliance information.",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-types",
          description:
            "Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-compliance-details-by-resource",
      description:
        "Returns the evaluation results for the specified AWS resource. The results indicate which AWS Config rules were used to evaluate the resource, when each rule was last used, and whether the resource complies with each rule.",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of the AWS resource for which you want compliance information.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the AWS resource for which you want compliance information.",
          args: {
            name: "string",
          },
        },
        {
          name: "--compliance-types",
          description:
            "Filters the results by compliance. The allowed values are COMPLIANT, NON_COMPLIANT, and NOT_APPLICABLE.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-compliance-summary-by-config-rule",
      description:
        "Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-compliance-summary-by-resource-type",
      description:
        "Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.",
      options: [
        {
          name: "--resource-types",
          description:
            "Specify one or more resource types to get the number of resources that are compliant and the number that are noncompliant for each resource type. For this request, you can specify an AWS resource type such as AWS::EC2::Instance. You can specify that the resource type is an AWS account by specifying AWS::::Account.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-conformance-pack-compliance-details",
      description:
        "Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.",
      options: [
        {
          name: "--conformance-pack-name",
          description: "Name of the conformance pack.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "A ConformancePackEvaluationFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of evaluation results returned on each page. If you do no specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-conformance-pack-compliance-summary",
      description:
        "Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.",
      options: [
        {
          name: "--conformance-pack-names",
          description: "Names of conformance packs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of conformance packs returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-discovered-resource-counts",
      description:
        "Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account.   Example    AWS Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.   You make a call to the GetDiscoveredResourceCounts action and specify that you want all resource types.    AWS Config returns the following:   The resource types (EC2 instances, IAM users, and S3 buckets).   The number of each resource type (25, 20, and 15).   The total number of all resources (60).     The response is paginated. By default, AWS Config lists 100 ResourceCount objects on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  If you make a call to the GetDiscoveredResourceCounts action, you might not immediately receive resource counts in the following situations:   You are a new AWS Config customer.   You just enabled resource recording.   It might take a few minutes for AWS Config to record and count your resources. Wait a few minutes and then retry the GetDiscoveredResourceCounts action.",
      options: [
        {
          name: "--resource-types",
          description:
            'The comma-separated list that specifies the resource types that you want AWS Config to return (for example, "AWS::EC2::Instance", "AWS::IAM::User"). If a value for resourceTypes is not specified, AWS Config returns all resource types that AWS Config is recording in the region for your account.  If the configuration recorder is turned off, AWS Config returns an empty list of ResourceCount objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of ResourceCount objects.',
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of ResourceCount objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-organization-config-rule-detailed-status",
      description:
        "Returns detailed status for each member account within an organization for a given organization config rule.",
      options: [
        {
          name: "--organization-config-rule-name",
          description:
            "The name of organization config rule for which you want status details for member accounts.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "A StatusDetailFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of OrganizationConfigRuleDetailedStatus returned on each page. If you do not specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-organization-conformance-pack-detailed-status",
      description:
        "Returns detailed status for each member account within an organization for a given organization conformance pack.",
      options: [
        {
          name: "--organization-conformance-pack-name",
          description:
            "The name of organization conformance pack for which you want status details for member accounts.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "An OrganizationResourceDetailedStatusFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of OrganizationConformancePackDetailedStatuses returned on each page. If you do not specify a number, AWS Config uses the default. The default is 100.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-resource-config-history",
      description:
        "Returns a list of configuration items for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your ConfigurationItems between a minimum of 30 days and a maximum of 7 years (2557 days), AWS Config returns the ConfigurationItems for the specified retention period.  The response is paginated. By default, AWS Config returns a limit of 10 configuration items per page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.  Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified limit. In such cases, you can make another call, using the nextToken.",
      options: [
        {
          name: "--resource-type",
          description: "The resource type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource (for example., sg-xxxxxx).",
          args: {
            name: "string",
          },
        },
        {
          name: "--later-time",
          description:
            "The time stamp that indicates a later time. If not specified, current time is taken.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--earlier-time",
          description:
            "The time stamp that indicates an earlier time. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--chronological-order",
          description:
            "The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stored-query",
      description: "Returns the details of a specific stored query.",
      options: [
        {
          name: "--query-name",
          description: "The name of the query.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-aggregate-discovered-resources",
      description:
        "Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region. For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type AWS::EC2::Instance then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "The type of resources that you want AWS Config to list in the response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the results based on the ResourceFilters object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-discovered-resources",
      description:
        "Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that AWS Config has discovered, including those that AWS Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.  You can specify either resource IDs or a resource name, but not both, in the same request.  The response is paginated. By default, AWS Config lists 100 resource identifiers on each page. You can customize this number with the limit parameter. The response includes a nextToken string. To get the next page of results, run the request again and specify the string for the nextToken parameter.",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of resources that you want AWS Config to list in the response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "The IDs of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-name",
          description:
            "The custom name of only those resources that you want AWS Config to list in the response. If you do not specify this parameter, AWS Config lists all resources of the specified type that it has discovered.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-deleted-resources",
          description:
            "Specifies whether AWS Config includes deleted resources in the results. By default, deleted resources are not included.",
        },
        {
          name: "--no-include-deleted-resources",
          description:
            "Specifies whether AWS Config includes deleted resources in the results. By default, deleted resources are not included.",
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-stored-queries",
      description:
        "Lists the stored queries for a single AWS account and a single AWS Region. The default is 100.",
      options: [
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned with a single call.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "List the tags for AWS Config resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are ConfigRule, ConfigurationAggregator and AggregatorAuthorization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, AWS Config uses the default.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-aggregation-authorization",
      description:
        "Authorizes the aggregator account and region to collect data from the source account and region.",
      options: [
        {
          name: "--authorized-account-id",
          description:
            "The 12-digit account ID of the account authorized to aggregate data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized-aws-region",
          description: "The region authorized to collect aggregated data.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "An array of tag object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-config-rule",
      description:
        "Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations. You can use this action for custom AWS Config rules and AWS managed Config rules. A custom AWS Config rule is a rule that you develop and maintain. An AWS managed Config rule is a customizable, predefined rule that AWS Config provides. If you are adding a new custom AWS Config rule, you must first create the AWS Lambda function that the rule invokes to evaluate your resources. When you use the PutConfigRule action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. Specify the ARN for the SourceIdentifier key. This key is part of the Source object, which is part of the ConfigRule object.  If you are adding an AWS managed Config rule, specify the rule's identifier for the SourceIdentifier key. To reference AWS managed Config rule identifiers, see About AWS Managed Config Rules. For any new rule that you add, specify the ConfigRuleName in the ConfigRule object. Do not specify the ConfigRuleArn or the ConfigRuleId. These values are generated by AWS Config for new rules. If you are updating a rule that you added previously, you can specify the rule by ConfigRuleName, ConfigRuleId, or ConfigRuleArn in the ConfigRule data type that you use in this request. The maximum number of rules that AWS Config supports is 150. For information about requesting a rule limit increase, see AWS Config Limits in the AWS General Reference Guide. For more information about developing and using AWS Config rules, see Evaluating AWS Resource Configurations with AWS Config in the AWS Config Developer Guide.",
      options: [
        {
          name: "--config-rule",
          description: "The rule that you want to add to your account.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "An array of tag object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-configuration-aggregator",
      description:
        "Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.  accountIds that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call DescribeAggregator to get the previous accounts and then append new ones.  AWS Config should be enabled in source accounts and regions you want to aggregate. If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, AWS Config calls EnableAwsServiceAccess API to enable integration between AWS Config and AWS Organizations. If the caller is a registered delegated administrator, AWS Config calls ListDelegatedAdministrators API to verify whether the caller is a valid delegated administrator. To register a delegated administrator, see Register a Delegated Administrator in the AWS Config developer guide.",
      options: [
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-aggregation-sources",
          description: "A list of AccountAggregationSource object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--organization-aggregation-source",
          description: "An OrganizationAggregationSource object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "An array of tag object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-configuration-recorder",
      description:
        "Creates a new configuration recorder to record the selected resource configurations. You can use this action to change the role roleARN or the recordingGroup of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.  Currently, you can specify only one configuration recorder per region in your account. If ConfigurationRecorder does not have the recordingGroup parameter specified, the default is to record all supported resource types.",
      options: [
        {
          name: "--configuration-recorder",
          description:
            "The configuration recorder object that records each configuration change made to the resources.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recording-group",
          description:
            "Specifies the types of AWS resources for which AWS Config records configuration changes.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-conformance-pack",
      description:
        "Creates or updates a conformance pack. A conformance pack is a collection of AWS Config rules that can be easily deployed in an account and a region and across AWS Organization. This API creates a service linked role AWSServiceRoleForConfigConforms in your account. The service linked role is created only when the role does not exist in your account.   You must specify either the TemplateS3Uri or the TemplateBody parameter, but not both. If you provide both AWS Config uses the TemplateS3Uri parameter and ignores the TemplateBody parameter.",
      options: [
        {
          name: "--conformance-pack-name",
          description: "Name of the conformance pack you want to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-s3-uri",
          description:
            "Location of file containing the template body (s3://bucketname/prefix). The uri must point to the conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same region as the conformance pack.   You must have access to read Amazon S3 bucket.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.  You can only use a YAML template with one resource type, that is, config rule and a remediation action.",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-s3-bucket",
          description:
            "Amazon S3 bucket where AWS Config stores conformance pack templates.  This field is optional.",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-s3-key-prefix",
          description:
            "The prefix for the Amazon S3 bucket.   This field is optional.",
          args: {
            name: "string",
          },
        },
        {
          name: "--conformance-pack-input-parameters",
          description: "A list of ConformancePackInputParameter objects.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-delivery-channel",
      description:
        "Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic. Before you can create a delivery channel, you must create a configuration recorder. You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.  You can have only one delivery channel per region in your account.",
      options: [
        {
          name: "--delivery-channel",
          description:
            "The configuration delivery channel object that delivers the configuration information to an Amazon S3 bucket and to an Amazon SNS topic.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-evaluations",
      description:
        "Used by an AWS Lambda function to deliver evaluation results to AWS Config. This action is required in every AWS Lambda function that is invoked by an AWS Config rule.",
      options: [
        {
          name: "--evaluations",
          description:
            "The assessments that the AWS Lambda function performs. Each evaluation identifies an AWS resource and indicates whether it complies with the AWS Config rule that invokes the AWS Lambda function.",
          args: {
            name: "list",
          },
        },
        {
          name: "--result-token",
          description:
            "An encrypted token that associates an evaluation with an AWS Config rule. Identifies the rule and the event that triggered the evaluation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-mode",
          description:
            "Use this parameter to specify a test run for PutEvaluations. You can verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.  When TestMode is true, PutEvaluations doesn't require a valid value for the ResultToken parameter, but the value cannot be null.",
        },
        {
          name: "--no-test-mode",
          description:
            "Use this parameter to specify a test run for PutEvaluations. You can verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.  When TestMode is true, PutEvaluations doesn't require a valid value for the ResultToken parameter, but the value cannot be null.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-external-evaluation",
      description:
        "Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the AWS Config rule is provided.",
      options: [
        {
          name: "--config-rule-name",
          description: "The name of the AWS Config rule.",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-evaluation",
          description:
            "An ExternalEvaluation object that provides details about compliance.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-organization-config-rule",
      description:
        "Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations.  Only a master account and a delegated administrator can create or update an organization config rule. When calling this API with a delegated administrator, you must ensure AWS Organizations ListDelegatedAdministrator permissions are added.  This API enables organization service access through the EnableAWSServiceAccess action and creates a service linked role AWSServiceRoleForConfigMultiAccountSetup in the master or delegated administrator account of your organization. The service linked role is created only when the role does not exist in the caller account. AWS Config verifies the existence of role with GetRole action. To use this API with delegated administrator, register a delegated administrator by calling AWS Organization register-delegated-administrator for config-multiaccountsetup.amazonaws.com.  You can use this action to create both custom AWS Config rules and AWS managed Config rules. If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account or a delegated administrator that the rule invokes to evaluate your resources. When you use the PutOrganizationConfigRule action to add the rule to AWS Config, you must specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function. If you are adding an AWS managed Config rule, specify the rule's identifier for the RuleIdentifier key. The maximum number of organization config rules that AWS Config supports is 150 and 3 delegated administrator per organization.   Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. Specify either OrganizationCustomRuleMetadata or OrganizationManagedRuleMetadata.",
      options: [
        {
          name: "--organization-config-rule-name",
          description:
            "The name that you assign to an organization config rule.",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-managed-rule-metadata",
          description: "An OrganizationManagedRuleMetadata object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--organization-custom-rule-metadata",
          description: "An OrganizationCustomRuleMetadata object.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--excluded-accounts",
          description:
            "A comma-separated list of accounts that you want to exclude from an organization config rule.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-organization-conformance-pack",
      description:
        "Deploys conformance packs across member accounts in an AWS Organization. Only a master account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure AWS Organizations ListDelegatedAdministrator permissions are added. This API enables organization service access for config-multiaccountsetup.amazonaws.com through the EnableAWSServiceAccess action and creates a service linked role AWSServiceRoleForConfigMultiAccountSetup in the master or delegated administrator account of your organization. The service linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling AWS Organization register-delegate-admin for config-multiaccountsetup.amazonaws.com.  Prerequisite: Ensure you call EnableAllFeatures API to enable all features in an organization. You must specify either the TemplateS3Uri or the TemplateBody parameter, but not both. If you provide both AWS Config uses the TemplateS3Uri parameter and ignores the TemplateBody parameter. AWS Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state. You can create 50 conformance packs with 25 AWS Config rules in each pack and 3 delegated administrator per organization.",
      options: [
        {
          name: "--organization-conformance-pack-name",
          description:
            "Name of the organization conformance pack you want to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-s3-uri",
          description:
            "Location of file containing the template body. The uri must point to the conformance pack template (max size: 300 KB).  You must have access to read Amazon S3 bucket.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-body",
          description:
            "A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-s3-bucket",
          description:
            "Amazon S3 bucket where AWS Config stores conformance pack templates.  This field is optional. If used, it must be prefixed with awsconfigconforms.",
          args: {
            name: "string",
          },
        },
        {
          name: "--delivery-s3-key-prefix",
          description:
            "The prefix for the Amazon S3 bucket.  This field is optional.",
          args: {
            name: "string",
          },
        },
        {
          name: "--conformance-pack-input-parameters",
          description: "A list of ConformancePackInputParameter objects.",
          args: {
            name: "list",
          },
        },
        {
          name: "--excluded-accounts",
          description:
            "A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-remediation-configurations",
      description:
        "Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action. The API creates the RemediationConfiguration object for the AWS Config rule. The AWS Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target.   If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run. This API does not support adding remediation configurations for service-linked AWS Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by AWS Security Hub.",
      options: [
        {
          name: "--remediation-configurations",
          description: "A list of remediation configuration objects.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-remediation-exceptions",
      description:
        "A remediation exception is when a specific resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specific resource with a specific AWS Config rule.   AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The name of the AWS Config rule for which you want to create remediation exception.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-keys",
          description:
            "An exception list of resource exception keys to be processed with the current request. AWS Config adds exception for each resource key. For example, AWS Config adds 3 exceptions for 3 resource keys.",
          args: {
            name: "list",
          },
        },
        {
          name: "--message",
          description: "The message contains an explanation of the exception.",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiration-time",
          description:
            "The exception is automatically deleted after the expiration date.",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-resource-config",
      description:
        "Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in AWS Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing AWS Config APIs.   The custom resource type must be registered with AWS CloudFormation. This API accepts the configuration item registered with AWS CloudFormation. When you call this API, AWS Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource.  Write-only schema properites are not recorded as part of the published configuration item.",
      options: [
        {
          name: "--resource-type",
          description:
            "The type of the resource. The custom resource type must be registered with AWS CloudFormation.   You cannot use the organization names \u201caws\u201d, \u201camzn\u201d, \u201camazon\u201d, \u201calexa\u201d, \u201ccustom\u201d with custom resource types. It is the first part of the ResourceType up to the first ::.",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-version-id",
          description:
            "Version of the schema registered for the ResourceType in AWS CloudFormation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "Unique identifier of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-name",
          description: "Name of the resource.",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration object of the resource in valid JSON format. It must match the schema registered with AWS CloudFormation.  The configuration JSON must not exceed 64 KB.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags associated with the resource.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-retention-configuration",
      description:
        "Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information. The API creates the RetentionConfiguration object and names the object as default. When you have a RetentionConfiguration object named default, calling the API modifies the default object.   Currently, AWS Config supports only one retention configuration per region in your account.",
      options: [
        {
          name: "--retention-period-in-days",
          description:
            "Number of days AWS Config stores your historical information.  Currently, only applicable to the configuration item history.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-stored-query",
      description:
        "Saves a new query or updates an existing saved query. The QueryName must be unique for a single AWS account and a single AWS Region. You can create upto 300 queries in a single AWS account and a single AWS Region.",
      options: [
        {
          name: "--stored-query",
          description:
            "A list of StoredQuery objects. The mandatory fields are QueryName and Expression.  When you are creating a query, you must provide a query name and an expression. When you are updating a query, you must provide a query name but updating the description is optional.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of Tags object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "select-aggregate-resource-config",
      description:
        "Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties. For more information about query components, see the  Query Components  section in the AWS Config Developer Guide.",
      options: [
        {
          name: "--expression",
          description: "The SQL query SELECT command.",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-aggregator-name",
          description: "The name of the configuration aggregator.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of query results returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of query results returned on each page. AWS Config also allows the Limit request parameter.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "select-resource-config",
      description:
        "Accepts a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties. For more information about query components, see the  Query Components  section in the AWS Config Developer Guide.",
      options: [
        {
          name: "--expression",
          description: "The SQL query SELECT command.",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of query results returned on each page.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-config-rules-evaluation",
      description:
        "Runs an on-demand evaluation for the specified AWS Config rules against the last known configuration state of the resources. Use StartConfigRulesEvaluation when you want to test that a rule you updated is working as expected. StartConfigRulesEvaluation does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources.  You can specify up to 25 AWS Config rules per request.  An existing StartConfigRulesEvaluation call for the specified rules must complete before you can call the API again. If you chose to have AWS Config stream to an Amazon SNS topic, you will receive a ConfigRuleEvaluationStarted notification when the evaluation starts.  You don't need to call the StartConfigRulesEvaluation API to run an evaluation for a new rule. When you create a rule, AWS Config evaluates your resources against the rule automatically.   The StartConfigRulesEvaluation API is useful if you want to run on-demand evaluations, such as the following example:   You have a custom rule that evaluates your IAM resources every 24 hours.   You update your Lambda function to add additional conditions to your rule.   Instead of waiting for the next periodic evaluation, you call the StartConfigRulesEvaluation API.   AWS Config invokes your Lambda function and evaluates your IAM resources.   Your custom rule will still run periodic evaluations every 24 hours.",
      options: [
        {
          name: "--config-rule-names",
          description:
            "The list of names of AWS Config rules that you want to run evaluations for.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-configuration-recorder",
      description:
        "Starts recording configurations of the AWS resources you have selected to record in your AWS account. You must have created at least one delivery channel to successfully start the configuration recorder.",
      options: [
        {
          name: "--configuration-recorder-name",
          description:
            "The name of the recorder object that records each configuration change made to the resources.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-remediation-execution",
      description:
        "Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous. You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.",
      options: [
        {
          name: "--config-rule-name",
          description:
            "The list of names of AWS Config rules that you want to run remediation execution for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-keys",
          description:
            "A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-configuration-recorder",
      description:
        "Stops recording configurations of the AWS resources you have selected to record in your AWS account.",
      options: [
        {
          name: "--configuration-recorder-name",
          description:
            "The name of the recorder object that records each configuration change made to the resources.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are ConfigRule, ConfigurationAggregator and AggregatorAuthorization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "An array of tag object.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Deletes specified tags from a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are ConfigRule, ConfigurationAggregator and AggregatorAuthorization.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The keys of the tags to be removed.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "subscribe",
      description:
        "Subcribes user to AWS Config by creating an AWS Config delivery channel and configuration recorder to track AWS resource configurations. The names of the default channel and configuration recorder will be default.",
      options: [
        {
          name: "--s3-bucket",
          description:
            "The S3 bucket that the AWS Config delivery channel will use. If the bucket does not exist, it will be automatically created. The value for this argument should follow the form bucket/prefix. Note that the prefix is optional.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic",
          description:
            "The SNS topic that the AWS Config delivery channel will use. If the SNS topic does not exist, it will be automatically created. Value for this should be a valid SNS topic name or the ARN of an existing SNS topic.",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role",
          description:
            "The IAM role that the AWS Config configuration recorder will use to record current resource configurations. Value for this should be the ARN of the desired IAM role.",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-status",
      description:
        "Reports the status of all of configuration recorders and delivery channels.",
    },
  ],
};
