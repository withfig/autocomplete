var completionSpec = {
    name: "pi",
    description: "Amazon RDS Performance Insights Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide provides detailed information about Performance Insights data types, parameters and errors. When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the authoritative source for AWS service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.  DB load is measured as Average Active Sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.   To learn more about Performance Insights and Amazon Aurora DB instances, go to the Amazon Aurora User Guide.   To learn more about Performance Insights and Amazon RDS DB instances, go to the Amazon RDS User Guide.",
    subcommands: [
        {
            name: "describe-dimension-keys",
            description: "For a specific time period, retrieve the top N dimension keys for a metric.  Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.",
            options: [
                {
                    name: "--service-type",
                    description: "The AWS service for which Performance Insights will return metrics. The only valid value for ServiceType is RDS.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--identifier",
                    description: "An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value. For example, specify db-FAIHNTYBKTGAUSUZQYPDS2GW4A",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--start-time",
                    description: "The date and time specifying the beginning of the requested time series data. You must specify a StartTime within the past 7 days. The value specified is inclusive, which means that data points equal to or greater than StartTime are returned. The value for StartTime must be earlier than the value for EndTime.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--end-time",
                    description: "The date and time specifying the end of the requested time series data. The value specified is exclusive, which means that data points less than (but not equal to) EndTime are returned. The value for EndTime must be later than the value for StartTime.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--metric",
                    description: "The name of a Performance Insights metric to be measured. Valid values for Metric are:    db.load.avg - a scaled representation of the number of active sessions for the database engine.    db.sampledload.avg - the raw number of active sessions for the database engine.   If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.load.avg showing the scaled values, db.sampledload.avg showing the raw values, and db.sampledload.avg less than db.load.avg. For most use cases, you can query db.load.avg only.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--period-in-seconds",
                    description: "The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights chooses a value for you, with a goal of returning roughly 100-200 data points in the response.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--group-by",
                    description: "A specification for how to aggregate the data points from a query result. You must specify a valid dimension group. Performance Insights returns all dimensions within this group, unless you provide the names of specific dimensions within this group. You can also request that Performance Insights return a limited number of values for a dimension.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--partition-by",
                    description: "For each dimension specified in GroupBy, specify a secondary dimension to further subdivide the partition keys in the response.",
                    args: {
                        name: "structure",
                    },
                },
                {
                    name: "--filter",
                    description: "One or more filters to apply in the request. Restrictions:   Any number of filters by the same dimension, as specified in the GroupBy or Partition parameters.   A single filter for any other dimension in this dimension group.",
                    args: {
                        name: "map",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.",
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
            name: "get-resource-metrics",
            description: "Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.  Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.",
            options: [
                {
                    name: "--service-type",
                    description: "The AWS service for which Performance Insights returns metrics. The only valid value for ServiceType is RDS.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--identifier",
                    description: "An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use a DB instance as a data source, specify its DbiResourceId value. For example, specify db-FAIHNTYBKTGAUSUZQYPDS2GW4A.",
                    args: {
                        name: "string",
                    },
                },
                {
                    name: "--metric-queries",
                    description: "An array of one or more queries to perform. Each query must specify a Performance Insights metric, and can optionally specify aggregation and filtering criteria.",
                    args: {
                        name: "list",
                    },
                },
                {
                    name: "--start-time",
                    description: "The date and time specifying the beginning of the requested time series data. You can't specify a StartTime that's earlier than 7 days ago. The value specified is inclusive - data points equal to or greater than StartTime will be returned. The value for StartTime must be earlier than the value for EndTime.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--end-time",
                    description: "The date and time specifying the end of the requested time series data. The value specified is exclusive - data points less than (but not equal to) EndTime will be returned. The value for EndTime must be later than the value for StartTime.",
                    args: {
                        name: "timestamp",
                    },
                },
                {
                    name: "--period-in-seconds",
                    description: "The granularity, in seconds, of the data points returned from Performance Insights. A period can be as short as one second, or as long as one day (86400 seconds). Valid values are:    1 (one second)    60 (one minute)    300 (five minutes)    3600 (one hour)    86400 (twenty-four hours)   If you don't specify PeriodInSeconds, then Performance Insights will choose a value for you, with a goal of returning roughly 100-200 data points in the response.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--max-results",
                    description: "The maximum number of items to return in the response. If more items exist than the specified MaxRecords value, a pagination token is included in the response so that the remaining results can be retrieved.",
                    args: {
                        name: "integer",
                    },
                },
                {
                    name: "--next-token",
                    description: "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxRecords.",
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

