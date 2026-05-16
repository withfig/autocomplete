const completionSpec: Fig.Spec = {
  name: "pi",
  description:
    "Amazon RDS Performance Insights Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors. When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load. DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.   To learn more about Performance Insights and Amazon Aurora DB instances, go to the   Amazon Aurora User Guide .    To learn more about Performance Insights and Amazon RDS DB instances, go to the   Amazon RDS User Guide .    To learn more about Performance Insights and Amazon DocumentDB clusters, go to the   Amazon DocumentDB Developer Guide",
  subcommands: [
    {
      name: "create-performance-analysis-report",
      description:
        "Creates a new performance analysis report for a specific time period for the DB instance",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights will return metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value. For example, specify db-ADECBTYHKTSAUMUZQYPDS2GW4A",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description: "The start time defined for the analysis report",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "The end time defined for the analysis report",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata assigned to the analysis report consisting of a key-value pair",
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
      name: "delete-performance-analysis-report",
      description: "Deletes a performance analysis report",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights will return metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as ResourceID. When you call DescribeDBInstances, the identifier is returned as DbiResourceId. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-report-id",
          description:
            "The unique identifier of the analysis report for deletion",
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
      name: "describe-dimension-keys",
      description:
        "For a specific time period, retrieve the top N dimension keys for a metric.   Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights will return metrics. Valid values are as follows:    RDS     DOCDB",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value. For example, specify db-FAIHNTYBKTGAUSUZQYPDS2GW4A",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The date and time specifying the beginning of the requested time series data. You must specify a StartTime within the past 7 days. The value specified is inclusive, which means that data points equal to or greater than StartTime are returned.  The value for StartTime must be earlier than the value for EndTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The date and time specifying the end of the requested time series data. The value specified is exclusive, which means that data points less than (but not equal to) EndTime are returned. The value for EndTime must be later than the value for StartTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metric",
          description:
            "The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - A scaled representation of the number of active sessions for the database engine.     db.sampledload.avg - The raw number of active sessions for the database engine.    If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.load.avg showing the scaled values, db.sampledload.avg showing the raw values, and db.sampledload.avg less than db.load.avg. For most use cases, you can query db.load.avg only",
          args: {
            name: "string",
          },
        },
        {
          name: "--period-in-seconds",
          description:
            "The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:     1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights chooses a value for you, with a goal of returning roughly 100-200 data points in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--group-by",
          description:
            "A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return a limited number of values for a dimension",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-metrics",
          description:
            'Additional metrics for the top N dimension keys. If the specified dimension group in the GroupBy parameter is db.sql_tokenized, you can specify per-SQL metrics to get the values for the top N SQL digests. The response syntax is as follows: "AdditionalMetrics" : { "string" : "string" }',
          args: {
            name: "list",
          },
        },
        {
          name: "--partition-by",
          description:
            "For each dimension specified in GroupBy, specify a secondary dimension to further subdivide the partition keys in the response",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filter",
          description:
            "One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy or Partition parameters.   A single filter for any other dimension in this dimension group.    The db.sql.db_id filter isn't available for RDS for SQL Server DB instances",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords",
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
      name: "get-dimension-key-details",
      description:
        "Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, GetDimensionKeyDetails retrieves the full text of the dimension db.sql.statement associated with this ID. This operation is useful because GetResourceMetrics and DescribeDimensionKeys don't support retrieval of large SQL statement text",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns data. The only valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "The ID for a data source from which to gather dimension data. This ID must be immutable and unique within an Amazon Web Services Region. When a DB instance is the data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
          args: {
            name: "string",
          },
        },
        {
          name: "--group",
          description:
            "The name of the dimension group. Performance Insights searches the specified group for the dimension group ID. The following group name values are valid:    db.query (Amazon DocumentDB only)    db.sql (Amazon RDS and Aurora only)",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-identifier",
          description:
            "The ID of the dimension group from which to retrieve dimension details. For dimension group db.sql, the group ID is db.sql.id. The following group ID values are valid:    db.sql.id for dimension group db.sql (Aurora and RDS only)    db.query.id for dimension group db.query (DocumentDB only)",
          args: {
            name: "string",
          },
        },
        {
          name: "--requested-dimensions",
          description:
            "A list of dimensions to retrieve the detail data for within the given dimension group. If you don't specify this parameter, Performance Insights returns all dimension data within the specified dimension group. Specify dimension names for the following dimension groups:    db.sql - Specify either the full dimension name db.sql.statement or the short dimension name statement (Aurora and RDS only).    db.query - Specify either the full dimension name db.query.statement or the short dimension name statement (DocumentDB only)",
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
      name: "get-performance-analysis-report",
      description:
        "Retrieves the report including the report ID, status, time details, and the insights with recommendations. The report status can be RUNNING, SUCCEEDED, or FAILED. The insights include the description and recommendation fields",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights will return metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as ResourceID. When you call DescribeDBInstances, the identifier is returned as DbiResourceId. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-report-id",
          description:
            "A unique identifier of the created analysis report. For example, report-12345678901234567",
          args: {
            name: "string",
          },
        },
        {
          name: "--text-format",
          description:
            "Indicates the text format in the report. The options are PLAIN_TEXT or MARKDOWN. The default value is plain text",
          args: {
            name: "string",
          },
        },
        {
          name: "--accept-language",
          description:
            "The text language in the report. The default language is EN_US (English)",
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
      name: "get-resource-metadata",
      description:
        "Retrieve the metadata for different features. For example, the metadata might indicate that a feature is turned on or off on a specific DB instance",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
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
      name: "get-resource-metrics",
      description:
        "Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide specific dimension groups and dimensions, and provide filtering criteria for each group. You must specify an aggregate function for each metric.  Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows:    RDS     DOCDB",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as ResourceID. When you call DescribeDBInstances, the identifier is returned as DbiResourceId. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-queries",
          description:
            "An array of one or more queries to perform. Each query must specify a Performance Insights metric and specify an aggregate function, and you can provide filtering criteria. You must append the aggregate function to the metric. For example, to find the average for the metric db.load you must use db.load.avg. Valid values for aggregate functions include .avg, .min, .max, and .sum",
          args: {
            name: "list",
          },
        },
        {
          name: "--start-time",
          description:
            "The date and time specifying the beginning of the requested time series query range. You can't specify a StartTime that is earlier than 7 days ago. By default, Performance Insights has 7 days of retention, but you can extend this range up to 2 years. The value specified is inclusive. Thus, the command returns data points equal to or greater than StartTime. The value for StartTime must be earlier than the value for EndTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The date and time specifying the end of the requested time series query range. The value specified is exclusive. Thus, the command returns data points less than (but not equal to) EndTime. The value for EndTime must be later than the value for StartTime",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--period-in-seconds",
          description:
            "The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--period-alignment",
          description:
            "The returned timestamp which is the start or end time of the time periods. The default value is END_TIME",
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
      name: "list-available-resource-dimensions",
      description:
        "Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VWZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--metrics",
          description:
            "The types of metrics for which to retrieve dimensions. Valid values include db.load",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized-actions",
          description:
            "The actions to discover the dimensions you are authorized to access. If you specify multiple actions, then the response will contain the dimensions common for all the actions. When you don't specify this request parameter or provide an empty list, the response contains all the available dimensions for the target database engine whether or not you are authorized to access them",
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
      name: "list-available-resource-metrics",
      description:
        "Retrieve metrics of the specified types that can be queried for a specified DB instance",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique within an Amazon Web Services Region. Performance Insights gathers metrics from this data source. To use an Amazon RDS DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VWZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-types",
          description:
            "The types of metrics to return in the response. Valid values in the array include the following:    os (OS counter metrics) - All engines    db (DB load metrics) - All engines except for Amazon DocumentDB    db.sql.stats (per-SQL metrics) - All engines except for Amazon DocumentDB    db.sql_tokenized.stats (per-SQL digest metrics) - All engines except for Amazon DocumentDB",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return. If the MaxRecords value is less than the number of existing items, the response includes a pagination token",
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
      name: "list-performance-analysis-reports",
      description:
        "Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--identifier",
          description:
            "An immutable identifier for a data source that is unique for an Amazon Web Services Region. Performance Insights gathers metrics from this data source. In the console, the identifier is shown as ResourceID. When you call DescribeDBInstances, the identifier is returned as DbiResourceId. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-ABCDEFGHIJKLMNOPQRSTU1VW2X",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return in the response. If more items exist than the specified MaxResults value, a pagination token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--list-tags",
          description:
            "Specifies whether or not to include the list of tags in the response",
        },
        {
          name: "--no-list-tags",
          description:
            "Specifies whether or not to include the list of tags in the response",
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
        "Retrieves all the metadata tags associated with Amazon RDS Performance Insights resource",
      options: [
        {
          name: "--service-type",
          description:
            "List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "Lists all the tags for the Amazon RDS Performance Insights resource. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an RDS Amazon Resource Name (ARN)",
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
      description:
        "Adds metadata tags to the Amazon RDS Performance Insights resource",
      options: [
        {
          name: "--service-type",
          description:
            "The Amazon Web Services service for which Performance Insights returns metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an RDS Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The metadata assigned to an Amazon RDS resource consisting of a key-value pair",
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
        "Deletes the metadata tags from the Amazon RDS Performance Insights resource",
      options: [
        {
          name: "--service-type",
          description:
            "List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid value is RDS",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon RDS Performance Insights resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see  Constructing an RDS Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The metadata assigned to an Amazon RDS Performance Insights resource consisting of a key-value pair",
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
