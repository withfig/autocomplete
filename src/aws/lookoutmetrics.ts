const completionSpec: Fig.Spec = {
  name: "lookoutmetrics",
  description:
    "This is the Amazon Lookout for Metrics API Reference. For an introduction to the service with tutorials for getting started, visit Amazon Lookout for Metrics Developer Guide",
  subcommands: [
    {
      name: "activate-anomaly-detector",
      description: "Activates an anomaly detector",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the anomaly detector",
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
      name: "back-test-anomaly-detector",
      description:
        "Runs a backtest for anomaly detection for the specified resource",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
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
      name: "create-alert",
      description: "Creates an alert for an anomaly detector",
      options: [
        {
          name: "--alert-name",
          description: "The name of the alert",
          args: {
            name: "string",
          },
        },
        {
          name: "--alert-sensitivity-threshold",
          description:
            "An integer from 0 to 100 specifying the alert sensitivity threshold",
          args: {
            name: "integer",
          },
        },
        {
          name: "--alert-description",
          description: "A description of the alert",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the detector to which the alert is attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description: "Action that will be triggered when there is an alert",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the alert",
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
      name: "create-anomaly-detector",
      description: "Creates an anomaly detector",
      options: [
        {
          name: "--anomaly-detector-name",
          description: "The name of the detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-description",
          description: "A description of the detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-config",
          description:
            "Contains information about the configuration of the anomaly detector",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kms-key-arn",
          description: "The ARN of the KMS key to use to encrypt your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the anomaly detector",
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
      name: "create-metric-set",
      description: "Creates a dataset",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector that will use the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-set-name",
          description: "The name of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-set-description",
          description: "A description of the dataset you are creating",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-list",
          description: "A list of metrics that the dataset will contain",
          args: {
            name: "list",
          },
        },
        {
          name: "--offset",
          description:
            "After an interval ends, the amount of time that the detector waits before importing data",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timestamp-column",
          description:
            "Contains information about the column used for tracking time in your source data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimension-list",
          description: "A list of the fields you want to treat as dimensions",
          args: {
            name: "list",
          },
        },
        {
          name: "--metric-set-frequency",
          description:
            "The frequency with which the source data will be analyzed for anomalies",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-source",
          description:
            "Contains information about how the source data should be interpreted",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timezone",
          description: "The time zone in which your source data was recorded",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the dataset",
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
      name: "delete-alert",
      description: "Deletes an alert",
      options: [
        {
          name: "--alert-arn",
          description: "The ARN of the alert to delete",
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
      name: "delete-anomaly-detector",
      description:
        "Deletes a detector. Deleting an anomaly detector will delete all of its corresponding resources including any configured datasets and alerts",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the detector to delete",
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
      name: "describe-alert",
      description: "Describes an alert",
      options: [
        {
          name: "--alert-arn",
          description: "The ARN of the alert to describe",
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
      name: "describe-anomaly-detection-executions",
      description:
        "Returns information about the status of the specified anomaly detection jobs",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--timestamp",
          description: "The timestamp of the anomaly detection job",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of items to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "describe-anomaly-detector",
      description: "Describes a detector",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the detector to describe",
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
      name: "describe-metric-set",
      description: "Describes a dataset",
      options: [
        {
          name: "--metric-set-arn",
          description: "The ARN of the dataset",
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
      name: "get-anomaly-group",
      description: "Returns details about a group of anomalous metrics",
      options: [
        {
          name: "--anomaly-group-id",
          description: "The ID of the anomaly group",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
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
      name: "get-feedback",
      description: "Get feedback for an anomaly group",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-group-time-series-feedback",
          description: "The anomalous metric and group ID",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "get-sample-data",
      description:
        "Returns a selection of sample records from an Amazon S3 datasource",
      options: [
        {
          name: "--s3-source-config",
          description: "A datasource bucket in Amazon S3",
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
      name: "list-alerts",
      description: "Lists the alerts attached to a detector",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the alert's detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous request is truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results that will be displayed by the request",
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
      name: "list-anomaly-detectors",
      description: "Lists the detectors in the current AWS Region",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours",
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
      name: "list-anomaly-group-summaries",
      description: "Returns a list of anomaly groups",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--sensitivity-threshold",
          description: "The minimum severity score for inclusion in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "list-anomaly-group-time-series",
      description:
        "Gets a list of anomalous metrics for a measure in an anomaly group",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-group-id",
          description: "The ID of the anomaly group",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-name",
          description: "The name of the measure field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specify the pagination token that's returned by a previous request to retrieve the next page of results",
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
      name: "list-metric-sets",
      description: "Lists the datasets in the current AWS Region",
      options: [
        {
          name: "--anomaly-detector-arn",
          description:
            "The ARN of the anomaly detector containing the metrics sets to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours",
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
      description: "Gets a list of tags for a detector, dataset, or alert",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
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
      name: "put-feedback",
      description: "Add feedback for an anomalous metric",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The Amazon Resource Name (ARN) of the anomaly detector",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-group-time-series-feedback",
          description: "Feedback for an anomalous metric",
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
      name: "tag-resource",
      description: "Adds tags to a detector, dataset, or alert",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags to apply to the resource. Tag keys and values can contain letters, numbers, spaces, and the following symbols: _.:/=+@-",
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
      name: "untag-resource",
      description: "Removes tags from a detector, dataset, or alert",
      options: [
        {
          name: "--resource-arn",
          description: "The resource's Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Keys to remove from the resource's tags",
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
      name: "update-anomaly-detector",
      description:
        "Updates a detector. After activation, you can only change a detector's ingestion delay and description",
      options: [
        {
          name: "--anomaly-detector-arn",
          description: "The ARN of the detector to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of an AWS KMS encryption key",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-description",
          description: "The updated detector description",
          args: {
            name: "string",
          },
        },
        {
          name: "--anomaly-detector-config",
          description:
            "Contains information about the configuration to which the detector will be updated",
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
      name: "update-metric-set",
      description: "Updates a dataset",
      options: [
        {
          name: "--metric-set-arn",
          description: "The ARN of the dataset to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-set-description",
          description: "The dataset's description",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-list",
          description: "The metric list",
          args: {
            name: "list",
          },
        },
        {
          name: "--offset",
          description:
            "After an interval ends, the amount of time that the detector waits before importing data",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timestamp-column",
          description: "The timestamp column",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dimension-list",
          description: "The dimension list",
          args: {
            name: "list",
          },
        },
        {
          name: "--metric-set-frequency",
          description: "The dataset's interval",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-source",
          description:
            "Contains information about source data used to generate a metric",
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
