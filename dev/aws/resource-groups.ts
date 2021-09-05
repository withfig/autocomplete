const completionSpec: Fig.Spec = {
  name: "resource-groups",
  description:
    "AWS Resource Groups AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service databases, and Amazon S3 buckets into groups using criteria that you define as tags. A resource group is a collection of resources that match the resource types specified in a query, and share one or more tags or portions of tags. You can create a group of resources based on their roles in your cloud infrastructure, lifecycle stages, regions, application layers, or virtually any criteria. Resource Groups enable you to automate management tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in AWS Systems Manager that shows AWS Config compliance and other monitoring data about member resources. To create a resource group, build a resource query, and specify tags that identify the criteria that members of the group have in common. Tags are key-value pairs. For more information about Resource Groups, see the AWS Resource Groups User Guide. AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of operations.   Create, Read, Update, and Delete (CRUD) operations on resource groups and resource query entities   Applying, editing, and removing tags from resource groups   Resolving resource group member ARNs so they can be returned as search results   Getting data about resources that are members of a group   Searching AWS resources based on a resource query",
  subcommands: [
    {
      name: "create-group",
      description:
        "Creates a resource group with the specified name and description. You can optionally include a resource query, or a service configuration. For more information about constructing a resource query, see Create a tag-based group in Resource Groups. For more information about service configurations, see Service configurations for resource groups.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:CreateGroup",
      options: [
        {
          name: "--name",
          description:
            "The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with AWS or aws; these are reserved. A resource group name must be unique within each AWS Region in your AWS account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-query",
          description:
            "The resource query that determines which AWS resources are members of this group. For more information about resource queries, see Create a tag-based group in Resource Groups.   A resource group can contain either a ResourceQuery or a Configuration, but not both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the group. A tag is key-value pair string",
          args: {
            name: "map",
          },
        },
        {
          name: "--configuration",
          description:
            "A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. A configuration is an array of GroupConfigurationItem elements. For details about the syntax of service configurations, see Service configurations for resource groups.  A resource group can contain either a Configuration or a ResourceQuery, but not both",
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
      name: "delete-group",
      description:
        "Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:DeleteGroup",
      options: [
        {
          name: "--group-name",
          description:
            "Deprecated - don't use this parameter. Use Group instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group to delete",
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
      name: "get-group",
      description:
        "Returns information about a specified resource group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:GetGroup",
      options: [
        {
          name: "--group-name",
          description:
            "Deprecated - don't use this parameter. Use Group instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group to retrieve",
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
      name: "get-group-configuration",
      description:
        "Returns the service configuration associated with the specified resource group. For details about the service configuration syntax, see Service configurations for resource groups.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:GetGroupConfiguration",
      options: [
        {
          name: "--group",
          description: "The name or the ARN of the resource group",
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
      name: "get-group-query",
      description:
        "Retrieves the resource query associated with the specified resource group. For more information about resource queries, see Create a tag-based group in Resource Groups.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:GetGroupQuery",
      options: [
        {
          name: "--group-name",
          description: "Don't use this parameter. Use Group instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group to query",
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
      name: "get-tags",
      description:
        "Returns a list of tags that are associated with a resource group, specified by an ARN.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:GetTags",
      options: [
        {
          name: "--arn",
          description:
            "The ARN of the resource group whose tags you want to retrieve",
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
      name: "group-resources",
      description:
        "Adds the specified resources to the specified group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:GroupResources",
      options: [
        {
          name: "--group",
          description:
            "The name or the ARN of the resource group to add resources to",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "The list of ARNs for resources to be added to the group",
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
      name: "list-group-resources",
      description:
        "Returns a list of ARNs of the resources that are members of a specified resource group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:ListGroupResources",
      options: [
        {
          name: "--group-name",
          description:
            "Deprecated - don't use this parameter. Use the Group request field instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation. Filters the results to include only those of the specified resource types.    resource-type - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.    When you specify a resource-type filter for ListGroupResources, AWS Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your resource-type filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a ListGroupResources request returns a BadRequestException error with a message similar to the following:  The resource types specified as filters in the request are not valid.  The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies AWS::AllSupported, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or AWS CloudFormation stack-based queries)",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from",
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
      name: "list-groups",
      description:
        "Returns a list of existing resource groups in your account.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:ListGroups",
      options: [
        {
          name: "--filters",
          description:
            "Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.    resource-type - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format AWS::ServiceCode::ResourceType . For example, AWS::EC2::Instance, or AWS::S3::Bucket.    configuration-type - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:    AWS:EC2::CapacityReservationPool     AWS:EC2::HostManagement",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from",
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
      name: "put-group-configuration",
      description:
        "Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use GetGroupConfiguration to check the status of the update.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:PutGroupConfiguration",
      options: [
        {
          name: "--group",
          description:
            "The name or ARN of the resource group with the configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The new configuration to associate with the specified group. A configuration associates the resource group with an AWS service and specifies how the service can interact with the resources in the group. A configuration is an array of GroupConfigurationItem elements. For information about the syntax of a service configuration, see Service configurations for resource groups.  A resource group can contain either a Configuration or a ResourceQuery, but not both",
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
      name: "search-resources",
      description:
        "Returns a list of AWS resource identifiers that matches the specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:SearchResources",
      options: [
        {
          name: "--resource-query",
          description:
            "The search query, using the same formats that are supported for resource group definition. For more information, see CreateGroup",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the NextToken response element is present and has a value (is not null). Include that value as the NextToken request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The parameter for receiving additional results if you receive a NextToken response in a previous request. A NextToken response indicates that more output is available. Set this parameter to the value provided by a previous call's NextToken response to indicate where the output should continue from",
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
      name: "tag",
      description:
        "Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.  Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.   Minimum permissions  To run this command, you must have the following permissions:    resource-groups:Tag",
      options: [
        {
          name: "--arn",
          description: "The ARN of the resource group to which to add tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs",
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
      name: "ungroup-resources",
      description:
        "Removes the specified resources from the specified group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:UngroupResources",
      options: [
        {
          name: "--group",
          description:
            "The name or the ARN of the resource group from which to remove the resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description: "The ARNs of the resources to be removed from the group",
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
      name: "untag",
      description:
        "Deletes tags from a specified resource group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:Untag",
      options: [
        {
          name: "--arn",
          description:
            "The ARN of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--keys",
          description: "The keys of the tags to be removed",
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
      name: "update-group",
      description:
        "Updates the description for an existing group. You cannot update the name of a resource group.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:UpdateGroup",
      options: [
        {
          name: "--group-name",
          description: "Don't use this parameter. Use Group instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces",
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
      name: "update-group-query",
      description:
        "Updates the resource query of a group. For more information about resource queries, see Create a tag-based group in Resource Groups.  Minimum permissions  To run this command, you must have the following permissions:    resource-groups:UpdateGroupQuery",
      options: [
        {
          name: "--group-name",
          description: "Don't use this parameter. Use Group instead",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description: "The name or the ARN of the resource group to query",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-query",
          description:
            "The resource query to determine which AWS resources are members of this resource group.  A resource group can contain either a Configuration or a ResourceQuery, but not both",
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
  ],
};

export default completionSpec;
