const completionSpec: Fig.Spec = {
  name: "mf",
  description: "MetricFlow Semantic Layer",
  subcommands: [
    {
      name: "query",
      description: "Run a query with MetricFlow",
      options: [
        {
          name: ["--order"],
          description: 'Metrics or group bys to order by. For example: --order ds or --order ds,revenue',
        },
        {
          name: ["--limit"],
          description: 'Limit the number of rows out using an int or leave blank for no limit. For example: --limit 100',
        },
        {
          name: ["--where"],
          description: 'SQL-like where statement provided as a string. For example: --where "revenue > 100"',
        },
        {
          name: ["--group-by"],
          description: "Dimensions and/or entities to group by: syntax is --group-by ds or for multiple group bys --group-by ds,org",
        },
        {
          name: ["--metrics"],
          description: "Metrics to query for: syntax is --metrics bookings or for multiple metrics --metrics bookings,messages",
        },
        {
          name: ["--csv"],
          description: "Provide filepath for dataframe output to csv",
        },
        {
          name: ["--explain"],
          description: "In the query output, show the query that was executed against the data warehouse",
        },
        {
          name: ["--show-dataflow-plan"],
          description: "Display dataflow plan in explain output",
        },
        {
          name: ["--display-plans"],
          description: "Display plans (e.g. metric dataflow) in the browser",
        },
        {
          name: ["--decimals"],
          description: "Choose the number of decimal places to round for the numerical values",
        },
        {
          name: ["--show-sql-descriptions"],
          description: "Shows inline descriptions of nodes in displayed SQL",
        },
        {
          name: ["--start-time"],
          description: "Optional iso8601 timestamp to constraint the start time of the data (inclusive)",
        },
        {
          name: ["--end-time"],
          description: "Optional iso8601 timestamp to constraint the end time of the data (inclusive)",
        },
      ],
    },
    {
      name: "list",
      description: "Retrieve metadata values about metrics/dimensions/entities/dimension values.",
      subcommands: [
        {
          name: "metrics",
          description: "List the metrics with their available dimensions.",
          options: [
            {
              name: ["--search"],
              description: "Filter available metrics by this search term",
            },
            {
              name: ["--show-all-dimensions"],
              description: "Show all dimensions associated with a metric.",
            },
          ],
        },
        {
          name: "dimensions",
          description: "List all unique dimensions.",
          options: [
            {
              name: ["--metrics"],
              description: "List dimensions by given metrics (intersection). Ex. --metrics bookings,messages",
            },
          ],
        },
        {
          name: "entities",
          description: "List all unique entities.",
          options: [
            {
              name: ["--metrics"],
              description: "List entities by given metrics (intersection). Ex. --metrics bookings,messages",
            },
          ],
        },
        {
          name: "dimension_values",
          description: "List all dimension values with the corresponding metrics.",
          options: [
            {
              name: ["--dimension"],
              description: "Dimension to query values from",
            },
            {
              name: ["--metrics"],
              description: "Metrics that are associated with the dimension",
            },
            {
              name: ["--start-time"],
              description: "Optional iso8601 timestamp to constraint the start time of the data (inclusive)",
            },
            {
              name: ["--end-time"],
              description: "Optional iso8601 timestamp to constraint the end time of the data (inclusive)",
            },
          ],
        },
      ],
    },
    {
      name: "validate-configs",
      description: "Validate the MetricFlow configuration.",
      options: [
        {
          name: ["--dw-timeout"],
          description: "Optional timeout for data warehouse validation steps. Default None.",
        },
        {
          name: ["--skip-dw"],
          description: "If specified, skips the data warehouse validations",
        },
        {
          name: ["--show-all"],
          description: "If specified, prints warnings and future-errors",
        },
        {
          name: ["--verbose-issues"],
          description: "If specified, prints any extra details issues might have",
        },
        {
          name: ["--semantic-validation-workers"],
          description: "Optional. Uses the number of workers specified to run the semantic validations. Should only be used for exceptionally large configs",
        },
      ],
    },
    {
      name: "health-checks",
      description: "Perform health checks on the MetricFlow system.",
    },  
    {
      name: "tutorial",
      description: "Execute the MetricFlow tutorial.",
      options: [
        {
          name: ["-m", "--msg"],
          description: "Output the final steps dialogue",
        },
        {
          name: ["--clean"],
          description: "Remove sample model files.",
        },
      ],
    },    
  ],
  options: [
    {
      name: ["-h", "--help"],
      description: "Help for mf",
    },
    {
      name: ["--v", "--verbose"],
      description: "Verbose logging for mf",
    },
  ],
};

export default completionSpec;
