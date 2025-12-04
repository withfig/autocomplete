const completionSpec: Fig.Spec = {
  name: "timestream-query",
  description: "Amazon Timestream Query",
  subcommands: [
    {
      name: "cancel-query",
      description:
        "Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a CancellationMessage, indicating that the query has already been canceled. See code sample for details",
      options: [
        {
          name: "--query-id",
          description:
            "The ID of the query that needs to be cancelled. QueryID is returned as part of the query result",
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
      name: "create-scheduled-query",
      description:
        "Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the ScheduledQueryExecutionRoleArn parameter to run the query. You can use the NotificationConfiguration parameter to configure notification for your scheduled query operations",
      options: [
        {
          name: "--name",
          description: "Name of the scheduled query",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description:
            "The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-configuration",
          description: "The schedule configuration for the query",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notification-configuration",
          description:
            "Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-configuration",
          description: "Configuration used for writing the result of a query",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "Using a ClientToken makes the call to CreateScheduledQuery idempotent, in other words, making the same request repeatedly will produce the same result. Making multiple identical CreateScheduledQuery requests has the same effect as making a single request.     If CreateScheduledQuery is called without a ClientToken, the Query SDK generates a ClientToken on your behalf.    After 8 hours, any request with the same ClientToken is treated as a new request",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-query-execution-role-arn",
          description:
            "The ARN for the IAM role that Timestream will assume when running the scheduled query",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of key-value pairs to label the scheduled query",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/  If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest",
          args: {
            name: "string",
          },
        },
        {
          name: "--error-report-configuration",
          description:
            "Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results",
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
      name: "delete-scheduled-query",
      description:
        "Deletes a given scheduled query. This is an irreversible operation",
      options: [
        {
          name: "--scheduled-query-arn",
          description: "The ARN of the scheduled query",
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
      name: "describe-account-settings",
      description:
        "Describes the settings for your account that include the query pricing model and the configured maximum TCUs the service can use for your query workload. You're charged only for the duration of compute units used for your workloads",
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
      name: "describe-endpoints",
      description:
        "DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query. Because the Timestream SDKs are designed to transparently work with the service\u2019s architecture, including the management and mapping of the service endpoints, it is not recommended that you use this API unless:   You are using VPC endpoints (Amazon Web Services PrivateLink) with Timestream     Your application uses a programming language that does not yet have SDK support   You require better control over the client-side implementation   For detailed information on how and when to use and implement DescribeEndpoints, see The Endpoint Discovery Pattern",
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
      name: "describe-scheduled-query",
      description: "Provides detailed information about a scheduled query",
      options: [
        {
          name: "--scheduled-query-arn",
          description: "The ARN of the scheduled query",
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
      name: "execute-scheduled-query",
      description:
        "You can use this API to run a scheduled query manually.  If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed as part of an Amazon SNS notification. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream",
      options: [
        {
          name: "--scheduled-query-arn",
          description: "ARN of the scheduled query",
          args: {
            name: "string",
          },
        },
        {
          name: "--invocation-time",
          description:
            "The timestamp in UTC. Query will be run as if it was invoked at this timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description: "Not used",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-insights",
          description:
            "Encapsulates settings for enabling QueryInsights. Enabling QueryInsights returns insights and metrics as a part of the Amazon SNS notification for the query that you executed. You can use QueryInsights to tune your query performance and cost",
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
      name: "list-scheduled-queries",
      description:
        "Gets a list of all scheduled queries in the caller's Amazon account and Region. ListScheduledQueries is eventually consistent",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as the argument to the subsequent call to ListScheduledQueriesRequest",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token to resume pagination",
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
      name: "list-tags-for-resource",
      description: "List all tags on a Timestream query resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Timestream resource with tags to be listed. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of tags to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token to resume pagination",
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
      name: "prepare-query",
      description:
        "A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with ValidateOnly set to true",
      options: [
        {
          name: "--query-string",
          description:
            "The Timestream query string that you want to use as a prepared statement. Parameter names can be specified in the query string @ character followed by an identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--validate-only",
          description:
            "By setting this value to true, Timestream will only validate that the query string is a valid Timestream query, and not store the prepared query for later use",
        },
        {
          name: "--no-validate-only",
          description:
            "By setting this value to true, Timestream will only validate that the query string is a valid Timestream query, and not store the prepared query for later use",
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
      name: "query",
      description:
        "Query is a synchronous operation that enables you to run a query against your Amazon Timestream data. If you enabled QueryInsights, this API also returns insights and metrics related to the query that you executed. QueryInsights helps with performance tuning of your query. For more information about QueryInsights, see Using query insights to optimize queries in Amazon Timestream.  The maximum number of Query API requests you're allowed to make with QueryInsights enabled is 1 query per second (QPS). If you exceed this query rate, it might result in throttling.   Query will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the code sample for details.  Your query request will fail in the following cases:    If you submit a Query request with the same client token outside of the 5-minute idempotency window.     If you submit a Query request with the same client token, but change other parameters, within the 5-minute idempotency window.     If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message:   Query aborted as max page response size has been exceeded by the output result row     If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an Invalid pagination token error",
      options: [
        {
          name: "--query-string",
          description: "The query to be run by Timestream",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Unique, case-sensitive string of up to 64 ASCII characters specified when a Query request is made. Providing a ClientToken makes the call to Query idempotent. This means that running the same query repeatedly will produce the same result. In other words, making multiple identical Query requests has the same effect as making a single request. When using ClientToken in a query, note the following:     If the Query API is instantiated without a ClientToken, the Query SDK generates a ClientToken on your behalf.   If the Query invocation only contains the ClientToken but does not include a NextToken, that invocation of Query is assumed to be a new query run.   If the invocation contains NextToken, that particular invocation is assumed to be a subsequent invocation of a prior call to the Query API, and a result set is returned.    After 4 hours, any request with the same ClientToken is treated as a new request",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token used to return a set of results. When the Query API is invoked using NextToken, that particular invocation is assumed to be a subsequent invocation of a prior call to Query, and a result set is returned. However, if the Query invocation only contains the ClientToken, that invocation of Query is assumed to be a new query run.  Note the following when using NextToken in a query:   A pagination token can be used for up to five Query invocations, OR for a duration of up to 1 hour \u2013 whichever comes first.   Using the same NextToken will return the same set of records. To keep paginating through the result set, you must to use the most recent nextToken.   Suppose a Query invocation returns two NextToken values, TokenA and TokenB. If TokenB is used in a subsequent Query invocation, then TokenA is invalidated and cannot be reused.   To request a previous result set from a query after pagination has begun, you must re-invoke the Query API.   The latest NextToken should be used to paginate until null is returned, at which point a new NextToken should be used.    If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an Invalid pagination token error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-rows",
          description:
            "The total number of rows to be returned in the Query output. The initial run of Query with a MaxRows value specified will return the result set of the query in two cases:    The size of the result is less than 1MB.   The number of rows in the result set is less than the value of maxRows.   Otherwise, the initial invocation of Query only returns a NextToken, which can then be used in subsequent calls to fetch the result set. To resume pagination, provide the NextToken value in the subsequent command. If the row size is large (e.g. a row has many columns), Timestream may return fewer rows to keep the response size from exceeding the 1 MB limit. If MaxRows is not provided, Timestream will send the necessary number of rows to meet the 1 MB limit",
          args: {
            name: "integer",
          },
        },
        {
          name: "--query-insights",
          description:
            "Encapsulates settings for enabling QueryInsights. Enabling QueryInsights returns insights and metrics in addition to query results for the query that you executed. You can use QueryInsights to tune your query performance",
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
      name: "tag-resource",
      description:
        "Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking",
      options: [
        {
          name: "--resource-arn",
          description:
            "Identifies the Timestream resource to which tags should be added. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be assigned to the Timestream resource",
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
        "Removes the association of tags from a Timestream query resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Timestream resource that the tags will be removed from. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tags keys. Existing tags of the resource whose keys are members of this list will be removed from the Timestream resource",
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
      name: "update-account-settings",
      description:
        "Transitions your account to use TCUs for query pricing and modifies the maximum query compute units that you've configured. If you reduce the value of MaxQueryTCU to a desired configuration, the new value can take up to 24 hours to be effective.  After you've transitioned your account to use TCUs for query pricing, you can't transition to using bytes scanned for query pricing",
      options: [
        {
          name: "--max-query-tcu",
          description:
            "The maximum number of compute units the service will use at any point in time to serve your queries. To run queries, you must set a minimum capacity of 4 TCU. You can set the maximum number of TCU in multiples of 4, for example, 4, 8, 16, 32, and so on. The maximum value supported for MaxQueryTCU is 1000. To request an increase to this soft limit, contact Amazon Web Services Support. For information about the default quota for maxQueryTCU, see Default quotas. This configuration is applicable only for on-demand usage of Timestream Compute Units (TCUs). The maximum value supported for MaxQueryTCU is 1000. To request an increase to this soft limit, contact Amazon Web Services Support. For information about the default quota for maxQueryTCU, see Default quotas",
          args: {
            name: "integer",
          },
        },
        {
          name: "--query-pricing-model",
          description:
            "The pricing model for queries in an account.  The QueryPricingModel parameter is used by several Timestream operations; however, the UpdateAccountSettings API operation doesn't recognize any values other than COMPUTE_UNITS",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-compute",
          description:
            "Modifies the query compute settings configured in your account, including the query pricing model and provisioned Timestream Compute Units (TCUs) in your account.  This API is idempotent, meaning that making the same request multiple times will have the same effect as making the request once",
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
      name: "update-scheduled-query",
      description: "Update a scheduled query",
      options: [
        {
          name: "--scheduled-query-arn",
          description: "ARN of the scheuled query",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "State of the scheduled query",
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
