const completionSpec: Fig.Spec = {
  name: "ce",
  description:
    "The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for Amazon DynamoDB database tables in your production environment.  Service Endpoint The Cost Explorer API provides the following endpoint:    https://ce.us-east-1.amazonaws.com    For information about costs associated with the Cost Explorer API, see AWS Cost Management Pricing.",
  subcommands: [
    {
      name: "create-anomaly-monitor",
      description:
        "Creates a new cost anomaly detection monitor with the requested type and monitor specification.",
      options: [
        {
          name: "--anomaly-monitor",
          description:
            "The cost anomaly detection monitor object that you want to create.",
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
      name: "create-anomaly-subscription",
      description:
        "Adds a subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set a dollar threshold and a time frequency for receiving notifications.",
      options: [
        {
          name: "--anomaly-subscription",
          description:
            "The cost anomaly subscription object that you want to create.",
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
      name: "create-cost-category-definition",
      description:
        "Creates a new Cost Category with the requested name and rules.",
      options: [
        {
          name: "--name",
          description: "The unique name of the Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-version",
          description:
            "The rule schema version in this particular Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Cost Category rules used to categorize costs. For more information, see CostCategoryRule.",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-value",
          description: "The default value for the cost category.",
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
      name: "delete-anomaly-monitor",
      description: "Deletes a cost anomaly monitor.",
      options: [
        {
          name: "--monitor-arn",
          description:
            "The unique identifier of the cost anomaly monitor that you want to delete.",
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
      name: "delete-anomaly-subscription",
      description: "Deletes a cost anomaly subscription.",
      options: [
        {
          name: "--subscription-arn",
          description:
            "The unique identifier of the cost anomaly subscription that you want to delete.",
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
      name: "delete-cost-category-definition",
      description:
        "Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category.",
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
      name: "describe-cost-category-definition",
      description:
        "Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account. You have the option to use EffectiveOn to return a Cost Category that is active on a specific date. If there is no EffectiveOn specified, you\u2019ll see a Cost Category that is effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response.",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--effective-on",
          description: "The date when the Cost Category was effective.",
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
      name: "get-anomalies",
      description:
        "Retrieves all of the cost anomalies detected on your account, during the time period specified by the DateInterval object.",
      options: [
        {
          name: "--monitor-arn",
          description:
            "Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon Resource Name (ARN).",
          args: {
            name: "string",
          },
        },
        {
          name: "--date-interval",
          description:
            "Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object will have an AnomalyEndDate in the specified time range.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--feedback",
          description:
            "Filters anomaly results by the feedback field on the anomaly object.",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-impact",
          description:
            "Filters anomaly results by the total impact field on the anomaly object. For example, you can filter anomalies GREATER_THAN 200.00 to retrieve anomalies, with an estimated dollar impact greater than 200.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains.",
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
      name: "get-anomaly-monitors",
      description:
        "Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).",
      options: [
        {
          name: "--monitor-arn-list",
          description: "A list of cost anomaly monitor ARNs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains.",
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
      name: "get-anomaly-subscriptions",
      description:
        "Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs).",
      options: [
        {
          name: "--subscription-arn-list",
          description: "A list of cost anomaly subscription ARNs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--monitor-arn",
          description: "Cost anomaly monitor ARNs.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains.",
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
      name: "get-cost-and-usage",
      description:
        "Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in AWS Organizations have access to all member accounts. For information about filter limitations, see Quotas and restrictions in the Billing and Cost Management User Guide.",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start and end dates for retrieving AWS costs. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "Sets the AWS cost granularity to MONTHLY or DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, either MONTHLY or DAILY, or HOURLY.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters AWS costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account's usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            'Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsage requests.',
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group AWS costs using up to two different groups, either dimensions, tag keys, cost categories, or any two group by types. When you group by tag key, you get all tag values, including empty strings. Valid values are AZ, INSTANCE_TYPE, LEGAL_ENTITY_NAME, LINKED_ACCOUNT, OPERATION, PLATFORM, PURCHASE_TYPE, SERVICE, TAGS, TENANCY, RECORD_TYPE, and USAGE_TYPE.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
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
      name: "get-cost-and-usage-with-resources",
      description:
        "Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as BlendedCosts or UsageQuantity, that you want the request to return. You can also filter and group your data by various dimensions, such as SERVICE or AZ, in a specific time range. For a complete list of valid dimensions, see the GetDimensionValues operation. Management account in an organization in AWS Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud \u2013 Compute service only.  This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see Controlling Access for Cost Explorer in the AWS Billing and Cost Management User Guide.",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "Sets the AWS cost granularity to MONTHLY, DAILY, or HOURLY. If Granularity isn't set, the response object doesn't include the Granularity, MONTHLY, DAILY, or HOURLY.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Filters Amazon Web Services costs by different dimensions. For example, you can specify SERVICE and LINKED_ACCOUNT and get the costs that are associated with that account\'s usage of that service. You can nest Expression objects to define any combination of dimension filters. For more information, see Expression.  The GetCostAndUsageWithResources operation requires that you either group by or filter by a ResourceId. It requires the Expression "SERVICE = Amazon Elastic Compute Cloud - Compute" in the filter.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            'Which metrics are returned in the query. For more information about blended and unblended rates, see Why does the "blended" annotation appear on some line items in my bill?.  Valid values are AmortizedCost, BlendedCost, NetAmortizedCost, NetUnblendedCost, NormalizedUsageAmount, UnblendedCost, and UsageQuantity.   If you return the UsageQuantity metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate usageQuantity across all of Amazon EC2, the results aren\'t meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours vs. GB). To get more meaningful UsageQuantity metrics, filter by UsageType or UsageTypeGroups.    Metrics is required for GetCostAndUsageWithResources requests.',
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group Amazon Web Services costs using up to two different groups: DIMENSION, TAG, COST_CATEGORY.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
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
      name: "get-cost-categories",
      description:
        "Retrieves an array of Cost Category names and values incurred cost.  If some Cost Category names and values are not associated with any cost, they will not be returned by this API.",
      options: [
        {
          name: "--search-string",
          description:
            "The value that you want to search the filter values for. If you do not specify a CostCategoryName, SearchString will be used to filter Cost Category names that match the SearchString pattern. If you do specifiy a CostCategoryName, SearchString will be used to filter Cost Category values that match the SearchString pattern.",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description: "The time period of the request.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cost-category-name",
          description: "The unique name of the Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter by cost or by usage. There are two patterns:    Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The Expression example looks like:  { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", \u201cus-west-1\u201d ] } }  The list of dimension values are OR\'d together to retrieve cost or usage data. You can create Expression and DimensionValues objects using either with* methods or set* methods in multiple lines.    Compound dimension values with logical operations - You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. This allows you to filter on more advanced options. For example, you can filter on ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The Expression for that looks like this:  { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }    Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error.    { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }      For the GetRightsizingRecommendation action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR are not supported. Dimensions are limited to LINKED_ACCOUNT.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The key represents cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    Supported values for SortOrder are ASCENDING or DESCENDING. When using SortBy, NextPageToken and SearchString are not supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when SortBy is provided in the request. The maximum number of objects that to be returned for this request. If MaxResults is not specified with SortBy, the request will return 1000 results as the default value for this parameter. For GetCostCategories, MaxResults has an upper limit of 1000.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "If the number of objects that are still available for retrieval exceeds the limit, AWS returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the NextPageToken from the prior call in your next request.",
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
      name: "get-cost-forecast",
      description:
        "Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs.",
      options: [
        {
          name: "--time-period",
          description:
            "The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error.",
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
            "How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetCostForecast operation supports only DAILY and MONTHLY granularities.",
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
            "Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.",
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
      name: "get-dimension-values",
      description:
        "Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string.",
      options: [
        {
          name: "--search-string",
          description:
            "The value that you want to search the filter values for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimension",
          description:
            "The name of the dimension. Each Dimension is available for a different Context. For more information, see Context.",
          args: {
            name: "string",
          },
        },
        {
          name: "--context",
          description:
            "The context for the call to GetDimensionValues. This can be RESERVATIONS or COST_AND_USAGE. The default value is COST_AND_USAGE. If the context is set to RESERVATIONS, the resulting dimension values can be used in the GetReservationUtilization operation. If the context is set to COST_AND_USAGE, the resulting dimension values can be used in the GetCostAndUsage operation. If you set the context to COST_AND_USAGE, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.   OPERATION - The action performed. Examples include RunInstance and CreateBucket.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.   SERVICE - The AWS service such as Amazon DynamoDB.   USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the GetDimensionValues operation includes a unit attribute. Examples include GB and Hrs.   USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch \u2013 Alarms. The response for this operation includes a unit attribute.   REGION - The AWS Region.   RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.   RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.   If you set the context to RESERVATIONS, you can use the following dimensions for searching:   AZ - The Availability Zone. An example is us-east-1a.   CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.   DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are SingleAZ and MultiAZ.   INSTANCE_TYPE - The type of Amazon EC2 instance. An example is m4.xlarge.   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.   REGION - The AWS Region.   SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.   TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).   TENANCY - The tenancy of a resource. Examples are shared or dedicated.   If you set the context to SAVINGS_PLANS, you can use the following dimensions for searching:   SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)   PAYMENT_OPTION - Payment option for the given Savings Plans (for example, All Upfront)   REGION - The AWS Region.   INSTANCE_TYPE_FAMILY - The family of instances (For example, m5)   LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.   SAVINGS_PLAN_ARN - The unique identifier for your Savings Plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter by cost or by usage. There are two patterns:    Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The Expression example looks like:  { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", \u201cus-west-1\u201d ] } }  The list of dimension values are OR\'d together to retrieve cost or usage data. You can create Expression and DimensionValues objects using either with* methods or set* methods in multiple lines.    Compound dimension values with logical operations - You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. This allows you to filter on more advanced options. For example, you can filter on ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The Expression for that looks like this:  { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }    Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error.    { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }      For the GetRightsizingRecommendation action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR are not supported. Dimensions are limited to LINKED_ACCOUNT.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The key represents cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    Supported values for SortOrder are ASCENDING or DESCENDING. When you specify a SortBy paramater, the context must be COST_AND_USAGE. Further, when using SortBy, NextPageToken and SearchString are not supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when SortBy is provided in the request. The maximum number of objects that to be returned for this request. If MaxResults is not specified with SortBy, the request will return 1000 results as the default value for this parameter. For GetDimensionValues, MaxResults has an upper limit of 1000.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
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
      name: "get-reservation-coverage",
      description:
        "Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY   To determine valid values for a dimension, use the GetDimensionValues operation.",
      options: [
        {
          name: "--time-period",
          description:
            "The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group the data by the following attributes:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   TENANCY",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the AWS cost data for the reservation. Valid values are MONTHLY and DAILY. If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. The GetReservationCoverage operation supports only DAILY and MONTHLY granularities.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DATABASE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   TAG   TENANCY    GetReservationCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together. If you don't provide a SERVICE filter, Cost Explorer defaults to EC2. Cost category is also supported.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            "The measurement that you want your reservation coverage reported in. Valid values are Hour, Unit, and Cost. You can use multiple values in a request.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    OnDemandCost     CoverageHoursPercentage     OnDemandHours     ReservedHours     TotalRunningHours     CoverageNormalizedUnitsPercentage     OnDemandNormalizedUnits     ReservedNormalizedUnits     TotalRunningNormalizedUnits     Time    Supported values for SortOrder are ASCENDING or DESCENDING.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you returned for this request. If more objects are available, in the response, AWS provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.",
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
      name: "get-reservation-purchase-recommendation",
      description:
        "Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing. AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings.  For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units so that you can purchase any instance size that you want. For this example, your RI recommendation would be for c4.large because that is the smallest size instance in the c4 instance family.",
      options: [
        {
          name: "--account-id",
          description:
            "The account ID that is associated with the recommendation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description:
            "The specific service that you want recommendations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter by cost or by usage. There are two patterns:    Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The Expression example looks like:  { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", \u201cus-west-1\u201d ] } }  The list of dimension values are OR\'d together to retrieve cost or usage data. You can create Expression and DimensionValues objects using either with* methods or set* methods in multiple lines.    Compound dimension values with logical operations - You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. This allows you to filter on more advanced options. For example, you can filter on ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The Expression for that looks like this:  { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }    Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error.    { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }      For the GetRightsizingRecommendation action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR are not supported. Dimensions are limited to LINKED_ACCOUNT.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--account-scope",
          description:
            "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only.",
          args: {
            name: "string",
          },
        },
        {
          name: "--lookback-period-in-days",
          description:
            "The number of previous days that you want AWS to consider when it calculates your recommendations.",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-in-years",
          description:
            "The reservation term that you want recommendations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--payment-option",
          description:
            "The reservation purchase option that you want recommendations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-specification",
          description:
            "The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The pagination token that indicates the next set of results that you want to retrieve.",
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
      name: "get-reservation-utilization",
      description:
        "Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use GetDimensionValues to determine the possible dimension values. Currently, you can group only by SUBSCRIPTION_ID.",
      options: [
        {
          name: "--time-period",
          description:
            "Sets the start and end dates for retrieving RI utilization. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description: "Groups only by SUBSCRIPTION_ID. Metadata is included.",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "If GroupBy is set, Granularity can't be set. If Granularity isn't set, the response object doesn't include Granularity, either MONTHLY or DAILY. If both GroupBy and Granularity aren't set, GetReservationUtilization defaults to DAILY. The GetReservationUtilization operation supports only DAILY and MONTHLY granularities.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters utilization data by dimensions. You can filter by the following dimensions:   AZ   CACHE_ENGINE   DEPLOYMENT_OPTION   INSTANCE_TYPE   LINKED_ACCOUNT   OPERATING_SYSTEM   PLATFORM   REGION   SERVICE   SCOPE   TENANCY    GetReservationUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    UtilizationPercentage     UtilizationPercentageInUnits     PurchasedHours     PurchasedUnits     TotalActualHours     TotalActualUnits     UnusedHours     UnusedUnits     OnDemandCostOfRIHoursUsed     NetRISavings     TotalPotentialRISavings     AmortizedUpfrontFee     AmortizedRecurringFee     TotalAmortizedFee     RICostForUnusedHours     RealizedSavings     UnrealizedSavings    Supported values for SortOrder are ASCENDING or DESCENDING.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of objects that you returned for this request. If more objects are available, in the response, AWS provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.",
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
      name: "get-rightsizing-recommendation",
      description:
        "Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For details on calculation and function, see Optimizing Your Cost with Rightsizing Recommendations in the AWS Billing and Cost Management User Guide.",
      options: [
        {
          name: "--filter",
          description:
            'Use Expression to filter by cost or by usage. There are two patterns:    Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The Expression example looks like:  { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", \u201cus-west-1\u201d ] } }  The list of dimension values are OR\'d together to retrieve cost or usage data. You can create Expression and DimensionValues objects using either with* methods or set* methods in multiple lines.    Compound dimension values with logical operations - You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. This allows you to filter on more advanced options. For example, you can filter on ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The Expression for that looks like this:  { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }    Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error.    { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }      For the GetRightsizingRecommendation action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR are not supported. Dimensions are limited to LINKED_ACCOUNT.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration",
          description:
            "Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--service",
          description:
            'The specific service that you want recommendations for. The only valid value for GetRightsizingRecommendation is "AmazonEC2".',
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The pagination token that indicates the next set of results that you want to retrieve.",
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
      name: "get-savings-plans-coverage",
      description:
        "Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization\u2019s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY    To determine valid values for a dimension, use the GetDimensionValues operation.",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--group-by",
          description:
            "You can group the data using the attributes INSTANCE_FAMILY, REGION, or SERVICE.",
          args: {
            name: "list",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the Amazon Web Services cost data for your Savings Plans. Granularity can't be set if GroupBy is set. The GetSavingsPlansCoverage operation supports only DAILY and MONTHLY granularities.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:    LINKED_ACCOUNT     REGION     SERVICE     INSTANCE_FAMILY     GetSavingsPlansCoverage uses the same Expression object as the other operations, but only AND is supported among each dimension. If there are multiple values for a dimension, they are OR'd together. Cost category is also supported.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--metrics",
          description:
            "The measurement that you want your Savings Plans coverage reported in. The only valid value is SpendCoveredBySavingsPlans.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of items to be returned in a response. The default is 20, with a minimum value of 1.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    SpendCoveredBySavingsPlan     OnDemandCost     CoveragePercentage     TotalCost     InstanceFamily     Region     Service    Supported values for SortOrder are ASCENDING or DESCENDING.",
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
      name: "get-savings-plans-purchase-recommendation",
      description:
        "Retrieves your request parameters, Savings Plan Recommendations Summary and Details.",
      options: [
        {
          name: "--savings-plans-type",
          description: "The Savings Plans recommendation type requested.",
          args: {
            name: "string",
          },
        },
        {
          name: "--term-in-years",
          description:
            "The savings plan recommendation term used to generate these recommendations.",
          args: {
            name: "string",
          },
        },
        {
          name: "--payment-option",
          description:
            "The payment option used to generate these recommendations.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-scope",
          description:
            "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to PAYER. If the value is LINKED, recommendations are calculated for individual member accounts only.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of recommendations that you want returned in a single response object.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--lookback-period-in-days",
          description:
            "The lookback period used to generate the recommendation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "You can filter your recommendations by Account ID with the LINKED_ACCOUNT dimension. To filter your recommendations by Account ID, specify Key as LINKED_ACCOUNT and Value as the comma-separated Acount ID(s) for which you want to see Savings Plans purchase recommendations. For GetSavingsPlansPurchaseRecommendation, the Filter does not include CostCategories or Tags. It only includes Dimensions. With Dimensions, Key must be LINKED_ACCOUNT and Value can be a single Account ID or multiple comma-separated Account IDs for which you want to see Savings Plans Purchase Recommendations. AND and OR operators are not supported.",
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
      name: "get-savings-plans-utilization",
      description:
        "Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.  You cannot group by any dimension values for GetSavingsPlansUtilization.",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--granularity",
          description:
            "The granularity of the Amazon Web Services utillization data for your Savings Plans. The GetSavingsPlansUtilization operation supports only DAILY and MONTHLY granularities.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     SAVINGS_PLANS_TYPE     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilization uses the same Expression object as the other operations, but only AND is supported among each dimension.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    UtilizationPercentage     TotalCommitment     UsedCommitment     UnusedCommitment     NetSavings    Supported values for SortOrder are ASCENDING or DESCENDING.",
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
      name: "get-savings-plans-utilization-details",
      description:
        "Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to GetSavingsPlanUtilization, but you have the option to make multiple calls to GetSavingsPlanUtilizationDetails by providing individual dates. You can use GetDimensionValues in SAVINGS_PLANS to determine the possible dimension values.   GetSavingsPlanUtilizationDetails internally groups data by SavingsPlansArn.",
      options: [
        {
          name: "--time-period",
          description:
            "The time period that you want the usage and costs for. The Start date must be within 13 months. The End date must be after the Start date, and before the current date. Future dates can't be used as an End date.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description:
            "Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:    LINKED_ACCOUNT     SAVINGS_PLAN_ARN     REGION     PAYMENT_OPTION     INSTANCE_TYPE_FAMILY     GetSavingsPlansUtilizationDetails uses the same Expression object as the other operations, but only AND is supported among each dimension.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-type",
          description: "The data type.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of items to be returned in a response. The default is 20, with a minimum value of 1.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The following values are supported for Key:    UtilizationPercentage     TotalCommitment     UsedCommitment     UnusedCommitment     NetSavings     AmortizedRecurringCommitment     AmortizedUpfrontCommitment    Supported values for SortOrder are ASCENDING or DESCENDING.",
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
      name: "get-tags",
      description:
        "Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string.",
      options: [
        {
          name: "--search-string",
          description: "The value that you want to search for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-period",
          description:
            "The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tag-key",
          description: "The key of the tag that you want to return values for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description:
            'Use Expression to filter by cost or by usage. There are two patterns:    Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The Expression example looks like:  { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", \u201cus-west-1\u201d ] } }  The list of dimension values are OR\'d together to retrieve cost or usage data. You can create Expression and DimensionValues objects using either with* methods or set* methods in multiple lines.    Compound dimension values with logical operations - You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. This allows you to filter on more advanced options. For example, you can filter on ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The Expression for that looks like this:  { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] }    Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error.    { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } }      For the GetRightsizingRecommendation action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR are not supported. Dimensions are limited to LINKED_ACCOUNT.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "The value by which you want to sort the data. The key represents cost and usage metrics. The following values are supported:    BlendedCost     UnblendedCost     AmortizedCost     NetAmortizedCost     NetUnblendedCost     UsageQuantity     NormalizedUsageAmount    Supported values for SortOrder are ASCENDING or DESCENDING. When using SortBy, NextPageToken and SearchString are not supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "This field is only used when SortBy is provided in the request. The maximum number of objects that to be returned for this request. If MaxResults is not specified with SortBy, the request will return 1000 results as the default value for this parameter. For GetTags, MaxResults has an upper limit of 1000.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-page-token",
          description:
            "The token to retrieve the next set of results. AWS provides the token when the response from a previous call has more results than the maximum page size.",
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
      name: "get-usage-forecast",
      description:
        "Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage.",
      options: [
        {
          name: "--time-period",
          description:
            "The start and end dates of the period that you want to retrieve usage forecast for. The start date is inclusive, but the end date is exclusive. For example, if start is 2017-01-01 and end is 2017-05-01, then the cost and usage data is retrieved from 2017-01-01 up to and including 2017-04-30 but not including 2017-05-01. The start date must be equal to or later than the current date to avoid a validation error.",
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
            "How granular you want the forecast to be. You can get 3 months of DAILY forecasts or 12 months of MONTHLY forecasts. The GetUsageForecast operation supports only DAILY and MONTHLY granularities.",
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
            "Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.",
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
      name: "list-cost-category-definitions",
      description:
        "Returns the name, ARN, NumberOfRules and effective dates of all Cost Categories defined in the account. You have the option to use EffectiveOn to return a list of Cost Categories that were active on a specific date. If there is no EffectiveOn specified, you\u2019ll see Cost Categories that are effective on the current date. If Cost Category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100.",
      options: [
        {
          name: "--effective-on",
          description: "The date when the Cost Category was effective.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of entries a paginated response contains.",
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
      name: "provide-anomaly-feedback",
      description: "Modifies the feedback property of a given cost anomaly.",
      options: [
        {
          name: "--anomaly-id",
          description: "A cost anomaly ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--feedback",
          description:
            "Describes whether the cost anomaly was a planned activity or you considered it an anomaly.",
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
      name: "update-anomaly-monitor",
      description:
        "Updates an existing cost anomaly monitor. The changes made are applied going forward, and does not change anomalies detected in the past.",
      options: [
        {
          name: "--monitor-arn",
          description: "Cost anomaly monitor Amazon Resource Names (ARNs).",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitor-name",
          description: "The new name for the cost anomaly monitor.",
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
      name: "update-anomaly-subscription",
      description: "Updates an existing cost anomaly monitor subscription.",
      options: [
        {
          name: "--subscription-arn",
          description:
            "A cost anomaly subscription Amazon Resource Name (ARN).",
          args: {
            name: "string",
          },
        },
        {
          name: "--threshold",
          description:
            "The update to the threshold value for receiving notifications.",
          args: {
            name: "double",
          },
        },
        {
          name: "--frequency",
          description:
            "The update to the frequency value at which subscribers will receive notifications.",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitor-arn-list",
          description: "A list of cost anomaly monitor ARNs.",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscribers",
          description: "The update to the subscriber list.",
          args: {
            name: "list",
          },
        },
        {
          name: "--subscription-name",
          description: "The subscription's new name.",
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
      name: "update-cost-category-definition",
      description:
        "Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month\u2019s expenses and future expenses. This won\u2019t change categorization for the previous months.",
      options: [
        {
          name: "--cost-category-arn",
          description: "The unique identifier for your Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-version",
          description:
            "The rule schema version in this particular Cost Category.",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description:
            "The Expression object used to categorize costs. For more information, see CostCategoryRule .",
          args: {
            name: "list",
          },
        },
        {
          name: "--default-value",
          description: "The default value for the cost category.",
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
  ],
};

export default completionSpec;
