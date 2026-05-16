const completionSpec: Fig.Spec = {
  name: "ce",
  description:
    "You can use the Cost Explorer API to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data. This might include the number of daily write operations for Amazon DynamoDB database tables in your production environment.  Service Endpoint The Cost Explorer API provides the following endpoint:    https://ce.us-east-1.amazonaws.com    For information about the costs that are associated with the Cost Explorer API, see Amazon Web Services Cost Management Pricing",
  subcommands: [
    {
      name: "create-anomaly-monitor",
      description:
        "Creates a new cost anomaly detection monitor with the requested type and monitor specification",
      options: [
        {
          name: "--anomaly-monitor",
          description:
            "The cost anomaly detection monitor object that you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-tags",
          description:
            "An optional list of tags to associate with the specified  AnomalyMonitor . You can use resource tags to control access to your monitor using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:   Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use   The maximum length of a key is 128 characters   The maximum length of a value is 256 characters   Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@-    Keys and values are case sensitive   Keys and values are trimmed for any leading or trailing whitespaces   Don\u2019t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use",
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
      name: "create-anomaly-subscription",
      description:
        "Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications",
      options: [
        {
          name: "--anomaly-subscription",
          description:
            "The cost anomaly subscription object that you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-tags",
          description:
            "An optional list of tags to associate with the specified  AnomalySubscription . You can use resource tags to control access to your subscription using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:   Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use   The maximum length of a key is 128 characters   The maximum length of a value is 256 characters   Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@-    Keys and values are case sensitive   Keys and values are trimmed for any leading or trailing whitespaces   Don\u2019t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use",
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
      name: "create-cost-category-definition",
      description:
        "Creates a new Cost Category with the requested name and rules",
      options: [
        {
          name: "--name",
          description: "The unique name of the Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-start",
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-version",
          description:
            "The rule schema version in this particular Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Cost Category rules used to categorize costs. For more information, see CostCategoryRule",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-value",
          description: "The default value for the cost category",
          args: {
            name: "string",
          },
        },
        {
          name: "--split-charge-rules",
          description:
            "The split charge rules used to allocate your charges between your Cost Category values",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-tags",
          description:
            "An optional list of tags to associate with the specified  CostCategory . You can use resource tags to control access to your cost category using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:   Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use   The maximum length of a key is 128 characters   The maximum length of a value is 256 characters   Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@-    Keys and values are case sensitive   Keys and values are trimmed for any leading or trailing whitespaces   Don\u2019t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use",
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
      name: "delete-anomaly-monitor",
      description: "Deletes a cost anomaly monitor",
      options: [
        {
          name: "--monitor-arn",
          description:
            "The unique identifier of the cost anomaly monitor that you want to delete",
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
      name: "delete-anomaly-subscription",
      description: "Deletes a cost anomaly subscription",
      options: [
        {
          name: "--subscription-arn",
          description:
            "The unique identifier of the cost anomaly subscription that you want to delete",
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
      name: "delete-cost-category-definition",
      description:
        "Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category",
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
      name: "describe-cost-category-definition",
      description:
        "Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account. You have the option to use EffectiveOn to return a Cost Category that's active on a specific date. If there's no EffectiveOn specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-on",
          description: "The date when the Cost Category was effective",
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
      name: "get-anomalies",
      description:
        "Retrieves all of the cost anomalies detected on your account during the time period that's specified by the DateInterval object. Anomalies are available for up to 90 days",
      options: [
        {
          name: "--monitor-arn",
          description:
            "Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--date-interval",
          description:
            "Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object will have an AnomalyEndDate in the specified time range",
          args: {
            name: "structure",
          },
        },
        {
          name: "--feedback",
          description:
            "Filters anomaly results by the feedback field on the anomaly object",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-impact",
          description:
            "Filters anomaly results by the total impact field on the anomaly object. For example, you can filter anomalies GREATER_THAN 200.00 to retrieve anomalies, with an estimated dollar impact greater than 200",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains",
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
      name: "get-anomaly-monitors",
      description:
        "Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)",
      options: [
        {
          name: "--monitor-arn-list",
          description: "A list of cost anomaly monitor ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of entries that a paginated response contains",
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
      name: "get-anomaly-subscriptions",
      description:
        "Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)",
      options: [
        {
          name: "--subscription-arn-list",
          description: "A list of cost anomaly subscription ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--monitor-arn",
          description: "Cost anomaly monitor ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains",
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
      name: "get-approximate-usage-records",
      description:
        "Retrieves estimated usage records for hourly granularity or resource-level data at daily granularity",
      options: [
        {
          name: "--granularity",
          description:
            "How granular you want the data to be. You can enable data at hourly or daily granularity",
          args: {
            name: "string",
          },
        },
        {
          name: "--services",
          description:
            "The service metadata for the service or services you want to query. If not specified, all elements are returned",
          args: {
            name: "list",
          },
        },
        {
          name: "--approximation-dimension",
          description:
            "The service to evaluate for the usage records. You can choose resource-level data at daily granularity, or hourly granularity with or without resource-level data",
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
      name: "get-commitment-purchase-analysis",
      description:
        "Retrieves a commitment purchase analysis result based on the AnalysisId",
      options: [
        {
          name: "--analysis-id",
          description:
            "The analysis ID that's associated with the commitment purchase analysis",
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
      name: "get-cost-and-usage",
      description:
        "Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify BlendedCosts or UsageQuantity. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts. For information about filter limitations, see Quotas and restrictions in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start date and end date for retrieving Amazon Web Services costs. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "Sets the Amazon Web Services cost granularity to MONTHLY or DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, either MONTHLY or DAILY, or HOURLY",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Amazon Web Services costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression.  Valid values for MatchOptions for Dimensions are EQUALS and CASE_SENSITIVE. Valid values for MatchOptions for CostCategories and Tags are EQUALS, ABSENT, and CASE_SENSITIVE. Default values are EQUALS and CASE_SENSITIVE",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            'Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours and GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsage requests',
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group Amazon Web Services costs using up to two different groups, either dimensions, tag keys, cost categories, or any two group by types. Valid values for the DIMENSION type are AZ, INSTANCE_TYPE, LEGAL_ENTITY_NAME, INVOICING_ENTITY, LINKED_ACCOUNT, OPERATION, PLATFORM, PURCHASE_TYPE, SERVICE, TENANCY, RECORD_TYPE, and USAGE_TYPE. When you group by the TAG type and include a valid tag key, you get all tag values, including empty strings",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
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
      name: "get-cost-and-usage-with-resources",
      description:
        "Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in Organizations have access to all member accounts. Hourly granularity is only available for EC2-Instances (Elastic Compute Cloud) resource-level data. All other resource-level data is available at daily granularity.  This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see Controlling Access for Cost Explorer in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "Sets the Amazon Web Services cost granularity to MONTHLY, DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, MONTHLY, DAILY, or HOURLY",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Filters Amazon Web Services costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account\'s usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression.  The GetCostAndUsageWithResources operation requires that you either group by or filter by a ResourceId. It requires the Expression "SERVICE = Amazon Elastic Compute Cloud - Compute" in the filter. Valid values for MatchOptions for Dimensions are EQUALS and CASE_SENSITIVE. Valid values for MatchOptions for CostCategories and Tags are EQUALS, ABSENT, and CASE_SENSITIVE. Default values are EQUALS and CASE_SENSITIVE',
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            'Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hour or GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsageWithResources requests',
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group Amazon Web Services costs using up to two different groups: DIMENSION, TAG, COST_CATEGORY",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
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
      name: "get-cost-categories",
      description:
        "Retrieves an array of Cost Category names and values incurred cost.  If some Cost Category names and values are not associated with any cost, they will not be returned by this API",
      options: [
        {
          name: "--search-string",
          description:
            "The value that you want to search the filter values for. If you don't specify a CostCategoryName, SearchString is used to filter Cost Category names that match the SearchString pattern. If you specify a CostCategoryName, SearchString is used to filter Cost Category values that match the SearchString pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description: "The time period of the request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cost-category-name",
          description: "The unique name of the Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns:   Simple dimension values.   There are three types of simple dimension values: CostCategories, Tags, and Dimensions.   Specify the CostCategories field to define a filter that acts on Cost Categories.   Specify the Tags field to define a filter that acts on Cost Allocation Tags.   Specify the Dimensions field to define a filter that acts on the  DimensionValues .     For each filter type, you can set the dimension name and values for the filters that you plan to use.   For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia).   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }    As shown in the previous example, lists of dimension values are combined with OR when applying the filter.     You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.   For example, you can filter for linked account names that start with "a".   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }        Compound Expression types with logical operations.   You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options.   For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer).   The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }      Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error:  { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }   The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"      For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you sort the data by. The key represents the cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    The supported key values for the SortOrder value are ASCENDING and DESCENDING. When you use the SortBy value, the NextPageToken and SearchString key values aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when the SortBy value is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with the SortBy value, the request returns 1000 results as the default value for this parameter. For GetCostCategories, MaxResults has an upper quota of 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the NextPageToken from the previous call in your next request",
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
      name: "get-cost-forecast",
      description:
        "Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs",
      options: [
        {
          name: "--time-period",
          description:
            "The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric",
          description:
            'Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values for a GetCostForecast call are the following:   AMORTIZED_COST   BLENDED_COST   NET_AMORTIZED_COST   NET_UNBLENDED_COST   UNBLENDED_COST',
          args: {
            name: "string",
          },
        },
        {
          name: "--granularity",
          description:
            "How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetCostForecast operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "The filters that you want to use to filter your forecast. The GetCostForecast API supports filtering by the following dimensions:    AZ     INSTANCE_TYPE     LINKED_ACCOUNT     LINKED_ACCOUNT_NAME     OPERATION     PURCHASE_TYPE     REGION     SERVICE     USAGE_TYPE     USAGE_TYPE_GROUP     RECORD_TYPE     OPERATING_SYSTEM     TENANCY     SCOPE     PLATFORM     SUBSCRIPTION_ID     LEGAL_ENTITY_NAME     DEPLOYMENT_OPTION     DATABASE_ENGINE     INSTANCE_TYPE_FAMILY     BILLING_ENTITY     RESERVATION_ID     SAVINGS_PLAN_ARN",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prediction-interval-level",
          description:
            "Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals",
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
      name: "get-dimension-values",
      description:
        "Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string",
      options: [
        {
          name: "--search-string",
          description:
            "The value that you want to search the filter values for",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "The start date and end date for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimension",
          description:
            "The name of the dimension. Each Dimension is available for a different Context. For more information, see Context. LINK_ACCOUNT_NAME and SERVICE_CODE can only be used in CostCategoryRule",
          args: {
            name: "string",
          },
        },
        {
          name: "--context",
          description:
            "The context for the call to GetDimensionValues. This can be RESERVATIONS or COST_AND_USAGE. The default value is COST_AND_USAGE. If the context is set to RESERVATIONS, the resulting dimension values can be used in the GetReservationUtilization operation. If the context is set to COST_AND_USAGE, the resulting dimension values can be used in the GetCostAndUsage operation. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   BILLING_ENTITY - The Amazon Web Services seller that your account is with. Possible values are the following: - Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services services. - AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting reseller for Amazon Web Services services in India. - Amazon Web Services Marketplace: The entity that supports the sale of solutions that are built on Amazon Web Services by third-party software providers.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   INSTANCE_TYPE_FAMILY - A family of instance types optimized to fit different use cases. Examples are Compute Optimized (for example, C4, C5, C6g, and C7g), Memory Optimization (for example, R4, R5n, R5b, and R6g).   INVOICING_ENTITY - The name of the entity that issues the Amazon Web Services invoice.   LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase that this usage is related to. Examples include On-Demand Instances and Standard Reserved Instances.   RESERVATION_ID - The unique identifier for an Amazon Web Services Reservation Instance.   SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.   SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute).   SERVICE - The Amazon Web Services service such as Amazon DynamoDB.   TENANCY - The tenancy of a resource. Examples are shared or dedicated.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch \u2013 Alarms. The response for this operation includes a unit attribute.   REGION - The Amazon Web Services Region.   RECORD_TYPE - The different types of charges such as Reserved Instance (RI) fees, usage costs, tax refunds, and credits.   RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   REGION - The Amazon Web Services Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.   If you set the context to SAVINGS_PLANS, you can use the following dimensions for searching:   SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)   PAYMENT_OPTION - The payment option for the given Savings Plans (for example, All Upfront)   REGION - The Amazon Web Services Region.   INSTANCE_TYPE_FAMILY - The family of instances (For example, m5)   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.   SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns:   Simple dimension values.   There are three types of simple dimension values: CostCategories, Tags, and Dimensions.   Specify the CostCategories field to define a filter that acts on Cost Categories.   Specify the Tags field to define a filter that acts on Cost Allocation Tags.   Specify the Dimensions field to define a filter that acts on the  DimensionValues .     For each filter type, you can set the dimension name and values for the filters that you plan to use.   For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia).   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }    As shown in the previous example, lists of dimension values are combined with OR when applying the filter.     You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.   For example, you can filter for linked account names that start with "a".   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }        Compound Expression types with logical operations.   You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options.   For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer).   The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }      Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error:  { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }   The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"      For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The key represents cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    The supported values for the SortOrder key are ASCENDING or DESCENDING. When you specify a SortBy paramater, the context must be COST_AND_USAGE. Further, when using SortBy, NextPageToken and SearchString aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter. For GetDimensionValues, MaxResults has an upper limit of 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
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
      name: "get-reservation-coverage",
      description:
        "Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation",
      options: [
        {
          name: "--time-period",
          description:
            "The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group the data by the following attributes:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   INVOICING_ENTITY   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   TENANCY",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the Amazon Web Services cost data for the reservation. Valid values are MONTHLY and DAILY. If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. The GetReservationCoverage operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY    GetReservationCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together. If you don't provide a SERVICE filter, Cost Explorer defaults to EC2. Cost category is also supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            "The measurement that you want your reservation coverage reported in. Valid values are Hour, Unit, and Cost. You can use multiple values in a request",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    OnDemandCost     CoverageHoursPercentage     OnDemandHours     ReservedHours     TotalRunningHours     CoverageNormalizedUnitsPercentage     OnDemandNormalizedUnits     ReservedNormalizedUnits     TotalRunningNormalizedUnits     Time    Supported values for SortOrder are ASCENDING or DESCENDING",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects",
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
      name: "get-reservation-purchase-recommendation",
      description:
        "Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings.  For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for c4.large because that is the smallest size instance in the c4 instance family",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID that's associated with the recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description: "The specific service that you want recommendations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns:   Simple dimension values.   There are three types of simple dimension values: CostCategories, Tags, and Dimensions.   Specify the CostCategories field to define a filter that acts on Cost Categories.   Specify the Tags field to define a filter that acts on Cost Allocation Tags.   Specify the Dimensions field to define a filter that acts on the  DimensionValues .     For each filter type, you can set the dimension name and values for the filters that you plan to use.   For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia).   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }    As shown in the previous example, lists of dimension values are combined with OR when applying the filter.     You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.   For example, you can filter for linked account names that start with "a".   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }        Compound Expression types with logical operations.   You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options.   For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer).   The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }      Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error:  { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }   The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"      For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT',
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-scope",
          description:
            "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only",
          args: {
            name: "string",
          },
        },
        {
          name: "--lookback-period-in-days",
          description:
            "The number of previous days that you want Amazon Web Services to consider when it calculates your recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-in-years",
          description: "The reservation term that you want recommendations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--payment-option",
          description:
            "The reservation purchase option that you want recommendations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-specification",
          description:
            "The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The pagination token that indicates the next set of results that you want to retrieve",
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
      name: "get-reservation-utilization",
      description:
        "Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description: "Groups only by SUBSCRIPTION_ID. Metadata is included",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. If both GroupBy and Granularity aren't set, GetReservationUtilization defaults to DAILY. The GetReservationUtilization operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE  If not specified, the SERVICE filter defaults to Amazon Elastic Compute Cloud - Compute. Supported values for SERVICE are Amazon Elastic Compute Cloud - Compute, Amazon Relational Database Service, Amazon ElastiCache, Amazon Redshift, and Amazon Elasticsearch Service. The value for the SERVICE filter should not exceed "1".    SCOPE   TENANCY    GetReservationUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR\'d together',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The following values are supported for Key:    UtilizationPercentage     UtilizationPercentageInUnits     PurchasedHours     PurchasedUnits     TotalActualHours     TotalActualUnits     UnusedHours     UnusedUnits     OnDemandCostOfRIHoursUsed     NetRISavings     TotalPotentialRISavings     AmortizedUpfrontFee     AmortizedRecurringFee     TotalAmortizedFee     RICostForUnusedHours     RealizedSavings     UnrealizedSavings    The supported values for SortOrder are ASCENDING and DESCENDING",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects",
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
      name: "get-rightsizing-recommendation",
      description:
        "Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see Optimizing Your Cost with Rightsizing Recommendations in the Billing and Cost Management User Guide",
      options: [
        {
          name: "--filter",
          description:
            'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns:   Simple dimension values.   There are three types of simple dimension values: CostCategories, Tags, and Dimensions.   Specify the CostCategories field to define a filter that acts on Cost Categories.   Specify the Tags field to define a filter that acts on Cost Allocation Tags.   Specify the Dimensions field to define a filter that acts on the  DimensionValues .     For each filter type, you can set the dimension name and values for the filters that you plan to use.   For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia).   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }    As shown in the previous example, lists of dimension values are combined with OR when applying the filter.     You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.   For example, you can filter for linked account names that start with "a".   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }        Compound Expression types with logical operations.   You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options.   For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer).   The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }      Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error:  { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }   The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"      For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT',
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration",
          description:
            "You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service",
          description:
            'The specific service that you want recommendations for. The only valid value for GetRightsizingRecommendation is "AmazonEC2"',
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The pagination token that indicates the next set of results that you want to retrieve",
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
      name: "get-savings-plan-purchase-recommendation-details",
      description:
        "Retrieves the details for a Savings Plan recommendation. These details include the hourly data-points that construct the cost, coverage, and utilization charts",
      options: [
        {
          name: "--recommendation-detail-id",
          description:
            "The ID that is associated with the Savings Plan recommendation",
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
      name: "get-savings-plans-coverage",
      description:
        "Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization\u2019s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY    To determine valid values for a dimension, use the GetDimensionValues operation",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group the data using the attributes INSTANCE_FAMILY, REGION, or SERVICE",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the Amazon Web Services cost data for your Savings Plans. Granularity can't be set if GroupBy is set. The GetSavingsPlansCoverage operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY     GetSavingsPlansCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. If there are multiple values for a dimension, they are OR'd together. Cost category is also supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            "The measurement that you want your Savings Plans coverage reported in. The only valid value is SpendCoveredBySavingsPlans",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of items to be returned in a response. The default is 20, with a minimum value of 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The following values are supported for Key:    SpendCoveredBySavingsPlan     OnDemandCost     CoveragePercentage     TotalCost     InstanceFamily     Region     Service    The supported values for SortOrder are ASCENDING and DESCENDING",
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
      name: "get-savings-plans-purchase-recommendation",
      description:
        "Retrieves the Savings Plans recommendations for your account. First use StartSavingsPlansPurchaseRecommendationGeneration to generate a new set of recommendations, and then use GetSavingsPlansPurchaseRecommendation to retrieve them",
      options: [
        {
          name: "--savings-plans-type",
          description: "The Savings Plans recommendation type that's requested",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-in-years",
          description:
            "The savings plan recommendation term that's used to generate these recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--payment-option",
          description:
            "The payment option that's used to generate these recommendations",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-scope",
          description:
            "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--lookback-period-in-days",
          description:
            "The lookback period that's used to generate the recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "You can filter your recommendations by Account ID with the LINKED_ACCOUNT dimension. To filter your recommendations by Account ID, specify Key as LINKED_ACCOUNT and Value as the comma-separated Acount ID(s) that you want to see Savings Plans purchase recommendations for. For GetSavingsPlansPurchaseRecommendation, the Filter doesn't include CostCategories or Tags. It only includes Dimensions. With Dimensions, Key must be LINKED_ACCOUNT and Value can be a single Account ID or multiple comma-separated Account IDs that you want to see Savings Plans Purchase Recommendations for. AND and OR operators are not supported",
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
      name: "get-savings-plans-utilization",
      description:
        "Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.  You can't group by any dimension values for GetSavingsPlansUtilization",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the Amazon Web Services utillization data for your Savings Plans. The GetSavingsPlansUtilization operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     SAVINGS_PLANS_TYPE     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The following values are supported for Key:    UtilizationPercentage     TotalCommitment     UsedCommitment     UnusedCommitment     NetSavings    The supported values for SortOrder are ASCENDING and DESCENDING",
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
      name: "get-savings-plans-utilization-details",
      description:
        "Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to GetSavingsPlanUtilization, but you have the option to make multiple calls to GetSavingsPlanUtilizationDetails by providing individual dates. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.   GetSavingsPlanUtilizationDetails internally groups data by SavingsPlansArn",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilizationDetails uses the same Expression object as the other operations, but only AND is supported among each dimension",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-type",
          description: "The data type",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of items to be returned in a response. The default is 20, with a minimum value of 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The following values are supported for Key:    UtilizationPercentage     TotalCommitment     UsedCommitment     UnusedCommitment     NetSavings     AmortizedRecurringCommitment     AmortizedUpfrontCommitment    The supported values for SortOrder are ASCENDING and DESCENDING",
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
      name: "get-tags",
      description:
        "Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string",
      options: [
        {
          name: "--search-string",
          description: "The value that you want to search for",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-key",
          description: "The key of the tag that you want to return values for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns:   Simple dimension values.   There are three types of simple dimension values: CostCategories, Tags, and Dimensions.   Specify the CostCategories field to define a filter that acts on Cost Categories.   Specify the Tags field to define a filter that acts on Cost Allocation Tags.   Specify the Dimensions field to define a filter that acts on the  DimensionValues .     For each filter type, you can set the dimension name and values for the filters that you plan to use.   For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia).   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } }    As shown in the previous example, lists of dimension values are combined with OR when applying the filter.     You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.   For example, you can filter for linked account names that start with "a".   The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } }        Compound Expression types with logical operations.   You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options.   For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer).   The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }      Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error:  { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }   The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories"      For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value that you want to sort the data by. The key represents cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    The supported values for SortOrder are ASCENDING and DESCENDING. When you use SortBy, NextPageToken and SearchString aren't supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter. For GetTags, MaxResults has an upper quota of 1000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
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
      name: "get-usage-forecast",
      description:
        "Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage",
      options: [
        {
          name: "--time-period",
          description:
            "The start and end dates of the period that you want to retrieve usage forecast for. The start date is included in the period, but the end date isn't included in the period. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. The start date must be equal to or later than the current date to avoid a validation error",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metric",
          description:
            "Which metric Cost Explorer uses to create your forecast. Valid values for a GetUsageForecast call are the following:   USAGE_QUANTITY   NORMALIZED_USAGE_AMOUNT",
          args: {
            name: "string",
          },
        },
        {
          name: "--granularity",
          description:
            "How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetUsageForecast operation supports only DAILY and MONTHLY granularities",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "The filters that you want to use to filter your forecast. The GetUsageForecast API supports filtering by the following dimensions:    AZ     INSTANCE_TYPE     LINKED_ACCOUNT     LINKED_ACCOUNT_NAME     OPERATION     PURCHASE_TYPE     REGION     SERVICE     USAGE_TYPE     USAGE_TYPE_GROUP     RECORD_TYPE     OPERATING_SYSTEM     TENANCY     SCOPE     PLATFORM     SUBSCRIPTION_ID     LEGAL_ENTITY_NAME     DEPLOYMENT_OPTION     DATABASE_ENGINE     INSTANCE_TYPE_FAMILY     BILLING_ENTITY     RESERVATION_ID     SAVINGS_PLAN_ARN",
          args: {
            name: "structure",
          },
        },
        {
          name: "--prediction-interval-level",
          description:
            "Amazon Web Services Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals",
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
      name: "list-commitment-purchase-analyses",
      description: "Lists the commitment purchase analyses for your account",
      options: [
        {
          name: "--analysis-status",
          description: "The status of the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description: "The token to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of analyses that you want returned in a single response object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--analysis-ids",
          description:
            "The analysis IDs associated with the commitment purchase analyses",
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
      name: "list-cost-allocation-tag-backfill-history",
      description:
        "Retrieves a list of your historical cost allocation tag backfill requests",
      options: [
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that are returned for this request",
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
      name: "list-cost-allocation-tags",
      description:
        "Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned",
      options: [
        {
          name: "--status",
          description:
            "The status of cost allocation tag keys that are returned for this request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The list of cost allocation tag keys that are returned for this request",
          args: {
            name: "list",
          },
        },
        {
          name: "--type",
          description:
            "The type of CostAllocationTag object that are returned for this request. The AWSGenerated type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. The UserDefined type tags are tags that you define, create, and apply to resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that are returned for this request. By default, the request returns 100 results",
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
      name: "list-cost-category-definitions",
      description:
        "Returns the name, Amazon Resource Name (ARN), NumberOfRules and effective dates of all Cost Categories defined in the account. You have the option to use EffectiveOn to return a list of Cost Categories that were active on a specific date. If there is no EffectiveOn specified, you\u2019ll see Cost Categories that are effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100",
      options: [
        {
          name: "--effective-on",
          description: "The date when the Cost Category was effective",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains",
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
      name: "list-savings-plans-purchase-recommendation-generation",
      description:
        "Retrieves a list of your historical recommendation generations within the past 30 days",
      options: [
        {
          name: "--generation-status",
          description: "The status of the recommendation generation",
          args: {
            name: "string",
          },
        },
        {
          name: "--recommendation-ids",
          description: "The IDs for each specific recommendation",
          args: {
            name: "list",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description: "The token to retrieve the next set of results",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN)",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see ResourceTag",
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
      name: "provide-anomaly-feedback",
      description: "Modifies the feedback property of a given cost anomaly",
      options: [
        {
          name: "--anomaly-id",
          description: "A cost anomaly ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback",
          description:
            "Describes whether the cost anomaly was a planned activity or you considered it an anomaly",
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
      name: "start-commitment-purchase-analysis",
      description:
        "Specifies the parameters of a planned commitment purchase and starts the generation of the analysis. This enables you to estimate the cost, coverage, and utilization impact of your planned commitment purchases",
      options: [
        {
          name: "--commitment-purchase-analysis-configuration",
          description: "The configuration for the commitment purchase analysis",
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
      name: "start-cost-allocation-tag-backfill",
      description:
        "Request a cost allocation tag backfill. This will backfill the activation status (either active or inactive) for all tag keys from para:BackfillFrom up to the when this request is made. You can request a backfill once every 24 hours",
      options: [
        {
          name: "--backfill-from",
          description:
            "The date you want the backfill to start from. The date can only be a first day of the month (a billing start date). Dates can't precede the previous twelve months, or in the future",
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
      name: "start-savings-plans-purchase-recommendation-generation",
      description:
        "Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.   StartSavingsPlansPurchaseRecommendationGeneration has no request syntax because no input parameters are needed to support this operation",
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
      name: "tag-resource",
      description:
        "An API operation for adding one or more tags (key-value pairs) to a resource. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see ResourceTag",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tags",
          description:
            "A list of tag key-value pairs to be added to the resource. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:   Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use   The maximum length of a key is 128 characters   The maximum length of a value is 256 characters   Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@-    Keys and values are case sensitive   Keys and values are trimmed for any leading or trailing whitespaces   Don\u2019t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use",
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
      name: "untag-resource",
      description:
        "Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see ResourceTag",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-tag-keys",
          description:
            "A list of tag keys associated with tags that need to be removed from the resource. If you specify a tag key that doesn't exist, it's ignored. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use",
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
      name: "update-anomaly-monitor",
      description:
        "Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past",
      options: [
        {
          name: "--monitor-arn",
          description: "Cost anomaly monitor Amazon Resource Names (ARNs)",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitor-name",
          description: "The new name for the cost anomaly monitor",
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
      name: "update-anomaly-subscription",
      description:
        "Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged.  The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to AnomalySubscription",
      options: [
        {
          name: "--subscription-arn",
          description: "A cost anomaly subscription Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--threshold",
          description:
            "(deprecated) The update to the threshold value for receiving notifications.  This field has been deprecated. To update a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression. You can specify either Threshold or ThresholdExpression, but not both",
          args: {
            name: "double",
          },
        },
        {
          name: "--frequency",
          description:
            "The update to the frequency value that subscribers receive notifications",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitor-arn-list",
          description: "A list of cost anomaly monitor ARNs",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscribers",
          description: "The update to the subscriber list",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscription-name",
          description: "The new name of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--threshold-expression",
          description:
            'The update to the Expression object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are ANOMALY_TOTAL_IMPACT_ABSOLUTE and ANOMALY_TOTAL_IMPACT_PERCENTAGE, corresponding to an anomaly\u2019s TotalImpact and TotalImpactPercentage, respectively (see Impact for more details). The supported nested expression types are AND and OR. The match option GREATER_THAN_OR_EQUAL is required. Values must be numbers between 0 and 10,000,000,000 in string format. You can specify either Threshold or ThresholdExpression, but not both. The following are examples of valid ThresholdExpressions:   Absolute threshold: { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }    Percentage threshold: { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }     AND two thresholds together: { "And": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }     OR two thresholds together: { "Or": [ { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_ABSOLUTE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } }, { "Dimensions": { "Key": "ANOMALY_TOTAL_IMPACT_PERCENTAGE", "MatchOptions": [ "GREATER_THAN_OR_EQUAL" ], "Values": [ "100" ] } } ] }',
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
      name: "update-cost-allocation-tags-status",
      description:
        "Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag)",
      options: [
        {
          name: "--cost-allocation-tags-status",
          description:
            "The list of CostAllocationTagStatusEntry objects that are used to update cost allocation tags status for this request",
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
      name: "update-cost-category-definition",
      description:
        "Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month\u2019s expenses and future expenses. This won\u2019t change categorization for the previous months",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-start",
          description:
            "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-version",
          description:
            "The rule schema version in this particular Cost Category",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Expression object used to categorize costs. For more information, see CostCategoryRule",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-value",
          description: "The default value for the cost category",
          args: {
            name: "string",
          },
        },
        {
          name: "--split-charge-rules",
          description:
            "The split charge rules used to allocate your charges between your Cost Category values",
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
  ],
};
export default completionSpec;
