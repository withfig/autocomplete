const completionSpec: Fig.Spec = {
  name: "lookoutequipment",
  description:
    "Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance",
  subcommands: [
    {
      name: "create-dataset",
      description:
        "Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. For example, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data",
      options: [
        {
          name: "--dataset-name",
          description: "The name of the dataset being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-schema",
          description:
            "A JSON description of the data that is in each time series dataset, including names, column names, and data types",
          args: {
            name: "structure",
          },
        },
        {
          name: "--server-side-kms-key-id",
          description:
            "Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Any tags associated with the ingested data described in the dataset",
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
      name: "create-inference-scheduler",
      description:
        "Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an S3 bucket location for the output data",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the previously trained machine learning model being used to create the inference scheduler",
          args: {
            name: "string",
          },
        },
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-delay-offset-in-minutes",
          description:
            "The interval (in minutes) of planned delay at the start of each inference segment. For example, if inference is set to run every ten minutes, the delay is set to five minutes and the time is 09:08. The inference scheduler will wake up at the configured interval (which, without a delay configured, would be 09:10) plus the additional five minute delay time (so 09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the same frequency, so that you don't have to stop and restart the scheduler when uploading new data. For more information, see Understanding the inference process",
          args: {
            name: "long",
          },
        },
        {
          name: "--data-upload-frequency",
          description:
            "How often data is uploaded to the source Amazon S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment runs inference on your data. For more information, see Understanding the inference process",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-input-configuration",
          description:
            "Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-output-configuration",
          description:
            "Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-kms-key-id",
          description:
            "Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Any tags associated with the inference scheduler",
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
      name: "create-label",
      description: "Creates a label for an event",
      options: [
        {
          name: "--label-group-name",
          description:
            "The name of a group of labels.  Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description: "The start time of the labeled event",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "The end time of the labeled event",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--rating",
          description:
            "Indicates whether a labeled event represents an anomaly",
          args: {
            name: "string",
          },
        },
        {
          name: "--fault-code",
          description:
            "Provides additional information about the label. The fault code must be defined in the FaultCodes attribute of the label group. Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--notes",
          description:
            "Metadata providing additional information about the label.  Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--equipment",
          description:
            "Indicates that a label pertains to a particular piece of equipment.  Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request to create a label. If you do not set the client request token, Lookout for Equipment generates one",
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
      name: "create-label-group",
      description: "Creates a group of labels",
      options: [
        {
          name: "--label-group-name",
          description:
            "Names a group of labels. Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--fault-codes",
          description:
            "The acceptable fault codes (indicating the type of anomaly associated with the label) that can be used with this label group. Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request to create a label group. If you do not set the client request token, Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Tags that provide metadata about the label group you are creating.  Data in this field will be retained for service usage. Follow best practices for the security of your data",
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
      name: "create-model",
      description:
        "Creates a machine learning model for data inference.  A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred. Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy",
      options: [
        {
          name: "--model-name",
          description: "The name for the machine learning model to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description:
            "The name of the dataset for the machine learning model being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-schema",
          description:
            "The data schema for the machine learning model being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--labels-input-configuration",
          description:
            "The input configuration for the labels being used for the machine learning model that's being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-data-start-time",
          description:
            "Indicates the time reference in the dataset that should be used to begin the subset of training data for the machine learning model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--training-data-end-time",
          description:
            "Indicates the time reference in the dataset that should be used to end the subset of training data for the machine learning model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--evaluation-data-start-time",
          description:
            "Indicates the time reference in the dataset that should be used to begin the subset of evaluation data for the machine learning model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--evaluation-data-end-time",
          description:
            "Indicates the time reference in the dataset that should be used to end the subset of evaluation data for the machine learning model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the machine learning model",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-pre-processing-configuration",
          description:
            'The configuration is the TargetSamplingRate, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the TargetSamplingRate is 1 minute. When providing a value for the TargetSamplingRate, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore PT1S, the value for a 15 minute rate is PT15M, and the value for a 1 hour rate is PT1H',
          args: {
            name: "structure",
          },
        },
        {
          name: "--server-side-kms-key-id",
          description:
            "Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Any tags associated with the machine learning model being created",
          args: {
            name: "list",
          },
        },
        {
          name: "--off-condition",
          description:
            "Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-diagnostics-output-configuration",
          description:
            "The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics. You must also specify the RoleArn request parameter",
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
      name: "create-retraining-scheduler",
      description: "Creates a retraining scheduler on the specified model",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model to add the retraining scheduler to",
          args: {
            name: "string",
          },
        },
        {
          name: "--retraining-start-date",
          description:
            "The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--retraining-frequency",
          description:
            "This parameter uses the ISO 8601 standard to set the frequency at which you want retraining to occur in terms of Years, Months, and/or Days (note: other parameters like Time are not currently supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For example, the following values are valid:   P3M15D \u2013 Every 3 months and 15 days   P2M \u2013 Every 2 months   P150D \u2013 Every 150 days",
          args: {
            name: "string",
          },
        },
        {
          name: "--lookback-window",
          description:
            "The number of past days of data that will be used for retraining",
          args: {
            name: "string",
          },
        },
        {
          name: "--promote-mode",
          description:
            "Indicates how the service will use new models. In MANAGED mode, new models will automatically be used for inference if they have better performance than the current model. In MANUAL mode, the new models will not be used until they are manually activated",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
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
      name: "delete-dataset",
      description:
        "Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future",
      options: [
        {
          name: "--dataset-name",
          description: "The name of the dataset to be deleted",
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
      name: "delete-inference-scheduler",
      description:
        "Deletes an inference scheduler that has been set up. Prior inference results will not be deleted",
      options: [
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler to be deleted",
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
      name: "delete-label",
      description: "Deletes a label",
      options: [
        {
          name: "--label-group-name",
          description:
            "The name of the label group that contains the label that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data",
          args: {
            name: "string",
          },
        },
        {
          name: "--label-id",
          description: "The ID of the label that you want to delete",
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
      name: "delete-label-group",
      description: "Deletes a group of labels",
      options: [
        {
          name: "--label-group-name",
          description:
            "The name of the label group that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data",
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
      name: "delete-model",
      description:
        "Deletes a machine learning model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up",
      options: [
        {
          name: "--model-name",
          description: "The name of the machine learning model to be deleted",
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
      name: "delete-resource-policy",
      description: "Deletes the resource policy attached to the resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which the resource policy should be deleted",
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
      name: "delete-retraining-scheduler",
      description:
        "Deletes a retraining scheduler from a model. The retraining scheduler must be in the STOPPED status",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model whose retraining scheduler you want to delete",
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
      name: "describe-data-ingestion-job",
      description:
        "Provides information on a specific data ingestion job such as creation time, dataset ARN, and status",
      options: [
        {
          name: "--job-id",
          description: "The job ID of the data ingestion job",
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
      name: "describe-dataset",
      description:
        "Provides a JSON description of the data in each time series dataset, including names, column names, and data types",
      options: [
        {
          name: "--dataset-name",
          description: "The name of the dataset to be described",
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
      name: "describe-inference-scheduler",
      description:
        "Specifies information about the inference scheduler being used, including name, model, status, and associated metadata",
      options: [
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler being described",
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
      name: "describe-label",
      description: "Returns the name of the label",
      options: [
        {
          name: "--label-group-name",
          description: "Returns the name of the group containing the label",
          args: {
            name: "string",
          },
        },
        {
          name: "--label-id",
          description: "Returns the ID of the label",
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
      name: "describe-label-group",
      description: "Returns information about the label group",
      options: [
        {
          name: "--label-group-name",
          description: "Returns the name of the label group",
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
      name: "describe-model",
      description:
        "Provides a JSON containing the overall information about a specific machine learning model, including model name and ARN, dataset, training and evaluation information, status, and so on",
      options: [
        {
          name: "--model-name",
          description: "The name of the machine learning model to be described",
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
      name: "describe-model-version",
      description:
        "Retrieves information about a specific machine learning model version",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the machine learning model that this version belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description: "The version of the machine learning model",
          args: {
            name: "long",
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
      name: "describe-resource-policy",
      description:
        "Provides the details of a resource policy attached to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that is associated with the resource policy",
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
      name: "describe-retraining-scheduler",
      description:
        "Provides a description of the retraining scheduler, including information such as the model name and retraining parameters",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model that the retraining scheduler is attached to",
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
      name: "import-dataset",
      description: "Imports a dataset",
      options: [
        {
          name: "--source-dataset-arn",
          description:
            "The Amazon Resource Name (ARN) of the dataset to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description:
            "The name of the machine learning dataset to be created. If the dataset already exists, Amazon Lookout for Equipment overwrites the existing dataset. If you don't specify this field, it is filled with the name of the source dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-kms-key-id",
          description:
            "Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Any tags associated with the dataset to be created",
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
      name: "import-model-version",
      description: "Imports a model that has been trained successfully",
      options: [
        {
          name: "--source-model-version-arn",
          description:
            "The Amazon Resource Name (ARN) of the model version to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "The name for the machine learning model to be created. If the model already exists, Amazon Lookout for Equipment creates a new version. If you do not specify this field, it is filled with the name of the source model",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description:
            "The name of the dataset for the machine learning model being imported",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels-input-configuration",
          description:
            "Contains the configuration information for the S3 location being used to hold label data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the machine learning model",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-kms-key-id",
          description:
            "Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags associated with the machine learning model to be created",
          args: {
            name: "list",
          },
        },
        {
          name: "--inference-data-import-strategy",
          description:
            "Indicates how to import the accumulated inference data when a model version is imported. The possible values are as follows:   NO_IMPORT \u2013 Don't import the data.   ADD_WHEN_EMPTY \u2013 Only import the data from the source model if there is no existing data in the target model.   OVERWRITE \u2013 Import the data from the source model and overwrite the existing data in the target model",
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
      name: "list-data-ingestion-jobs",
      description:
        "Provides a list of all data ingestion jobs, including dataset name and ARN, S3 location of the input data, status, and so on",
      options: [
        {
          name: "--dataset-name",
          description:
            "The name of the dataset being used for the data ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of data ingestion jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of data ingestion jobs to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description: "Indicates the status of the data ingestion job",
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
      name: "list-datasets",
      description:
        "Lists all datasets currently available in your account, filtering on the dataset name",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of datasets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of datasets to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--dataset-name-begins-with",
          description: "The beginning of the name of the datasets to be listed",
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
      name: "list-inference-events",
      description:
        "Lists all inference events that have been found for the specified inference scheduler",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of inference events",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of inference events to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--inference-scheduler-name",
          description:
            "The name of the inference scheduler for the inference events listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval-start-time",
          description:
            "Lookout for Equipment will return all the inference events with an end time equal to or greater than the start time given",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--interval-end-time",
          description:
            "Returns all the inference events with an end start time equal to or greater than less than the end time given",
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
      name: "list-inference-executions",
      description:
        "Lists all inference executions that have been performed by the specified inference scheduler",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of inference executions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of inference executions to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--inference-scheduler-name",
          description:
            "The name of the inference scheduler for the inference execution listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-start-time-after",
          description:
            "The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the inference execution",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--data-end-time-before",
          description:
            "The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the inference execution",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--status",
          description: "The status of the inference execution",
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
      name: "list-inference-schedulers",
      description:
        "Retrieves a list of all inference schedulers currently available for your account",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of inference schedulers",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of inference schedulers to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--inference-scheduler-name-begins-with",
          description:
            "The beginning of the name of the inference schedulers to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "The name of the machine learning model used by the inference scheduler to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Specifies the current status of the inference schedulers",
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
      name: "list-label-groups",
      description: "Returns a list of the label groups",
      options: [
        {
          name: "--label-group-name-begins-with",
          description:
            "The beginning of the name of the label groups to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of label groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of label groups to list",
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
      name: "list-labels",
      description: "Provides a list of labels",
      options: [
        {
          name: "--label-group-name",
          description: "Returns the name of the label group",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval-start-time",
          description:
            "Returns all the labels with a end time equal to or later than the start time given",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--interval-end-time",
          description:
            "Returns all labels with a start time earlier than the end time given",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--fault-code",
          description: "Returns labels with a particular fault code",
          args: {
            name: "string",
          },
        },
        {
          name: "--equipment",
          description:
            "Lists the labels that pertain to a particular piece of equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of label groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of labels to list",
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
      name: "list-model-versions",
      description:
        "Generates a list of all model versions for a given model, including the model version, model version ARN, and status. To list a subset of versions, use the MaxModelVersion and MinModelVersion fields",
      options: [
        {
          name: "--model-name",
          description:
            "Then name of the machine learning model for which the model versions are to be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results exceeds the limit that the response can display, the response returns an opaque pagination token indicating where to continue the listing of machine learning model versions. Use this token in the NextToken field in the request to list the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of machine learning model versions to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description:
            "Filter the results based on the current status of the model version",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "Filter the results based on the way the model version was generated",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-at-end-time",
          description:
            "Filter results to return all the model versions created before this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--created-at-start-time",
          description:
            "Filter results to return all the model versions created after this time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-model-version",
          description:
            "Specifies the highest version of the model to return in the list",
          args: {
            name: "long",
          },
        },
        {
          name: "--min-model-version",
          description:
            "Specifies the lowest version of the model to return in the list",
          args: {
            name: "long",
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
      name: "list-models",
      description:
        "Generates a list of all models in the account, including model name and ARN, dataset, and status",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of machine learning models",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of machine learning models to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description: "The status of the machine learning model",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name-begins-with",
          description:
            "The beginning of the name of the machine learning models being listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name-begins-with",
          description:
            "The beginning of the name of the dataset of the machine learning models to be listed",
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
      name: "list-retraining-schedulers",
      description:
        "Lists all retraining schedulers in your account, filtering by model name prefix and status",
      options: [
        {
          name: "--model-name-begins-with",
          description:
            "Specify this field to only list retraining schedulers whose machine learning models begin with the value you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Specify this field to only list retraining schedulers whose status matches the value you specify",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of results exceeds the maximum, a pagination token is returned. Use the token in the request to show the next page of retraining schedulers",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of retraining schedulers to list",
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
      name: "list-sensor-statistics",
      description:
        "Lists statistics about the data collected for each of the sensors that have been successfully ingested in the particular dataset. Can also be used to retreive Sensor Statistics for a previous ingestion job",
      options: [
        {
          name: "--dataset-name",
          description:
            "The name of the dataset associated with the list of Sensor Statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-job-id",
          description:
            "The ingestion job id associated with the list of Sensor Statistics. To get sensor statistics for a particular ingestion job id, both dataset name and ingestion job id must be submitted as inputs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of sensors for which to retrieve statistics",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of sensor statistics",
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
        "Lists all the tags for a specified resource, including key and value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is the focus of the ListTagsForResource operation",
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
      name: "put-resource-policy",
      description: "Creates a resource control policy for a given resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which the policy is being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-policy",
          description: "The JSON-formatted resource policy to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-revision-id",
          description:
            "A unique identifier for a revision of the resource policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
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
      name: "start-data-ingestion-job",
      description:
        "Starts a data ingestion job. Amazon Lookout for Equipment returns the job status",
      options: [
        {
          name: "--dataset-name",
          description:
            "The name of the dataset being used by the data ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-input-configuration",
          description:
            "Specifies information for the input data for the data ingestion job, including dataset S3 location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source for the data ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one",
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
      name: "start-inference-scheduler",
      description: "Starts an inference scheduler",
      options: [
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler to be started",
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
      name: "start-retraining-scheduler",
      description: "Starts a retraining scheduler",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model whose retraining scheduler you want to start",
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
      name: "stop-inference-scheduler",
      description: "Stops an inference scheduler",
      options: [
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler to be stopped",
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
      name: "stop-retraining-scheduler",
      description: "Stops a retraining scheduler",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model whose retraining scheduler you want to stop",
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
        "Associates a given tag to a resource in your account. A tag is a key-value pair which can be added to an Amazon Lookout for Equipment resource as metadata. Tags can be used for organizing your resources as well as helping you to search and filter by tag. Multiple tags can be added to a resource, either when you create it, or later. Up to 50 tags can be associated with each resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the specific resource to which the tag should be associated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tag or tags to be associated with a specific resource. Both the tag key and value are specified",
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
        "Removes a specific tag from a given resource. The tag is specified by its key",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to which the tag is currently associated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "Specifies the key of the tag to be removed from a specified resource",
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
      name: "update-active-model-version",
      description:
        "Sets the active model version for a given machine learning model",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the machine learning model for which the active model version is being set",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-version",
          description:
            "The version of the machine learning model for which the active model version is being set",
          args: {
            name: "long",
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
      name: "update-inference-scheduler",
      description: "Updates an inference scheduler",
      options: [
        {
          name: "--inference-scheduler-name",
          description: "The name of the inference scheduler to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-delay-offset-in-minutes",
          description:
            "A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data",
          args: {
            name: "long",
          },
        },
        {
          name: "--data-upload-frequency",
          description:
            "How often data is uploaded to the source S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-input-configuration",
          description:
            "Specifies information for the input data for the inference scheduler, including delimiter, format, and dataset location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-output-configuration",
          description:
            "Specifies information for the output results from the inference scheduler, including the output S3 location",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler",
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
      name: "update-label-group",
      description: "Updates the label group",
      options: [
        {
          name: "--label-group-name",
          description: "The name of the label group to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--fault-codes",
          description:
            "Updates the code indicating the type of anomaly associated with the label.  Data in this field will be retained for service usage. Follow best practices for the security of your data",
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
      name: "update-model",
      description: "Updates a model in the account",
      options: [
        {
          name: "--model-name",
          description: "The name of the model to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels-input-configuration",
          description:
            "Contains the configuration information for the S3 location being used to hold label data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description: "The ARN of the model to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-diagnostics-output-configuration",
          description:
            "The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics for the model. You must also specify the RoleArn request parameter",
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
      name: "update-retraining-scheduler",
      description: "Updates a retraining scheduler",
      options: [
        {
          name: "--model-name",
          description:
            "The name of the model whose retraining scheduler you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--retraining-start-date",
          description:
            "The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--retraining-frequency",
          description:
            "This parameter uses the ISO 8601 standard to set the frequency at which you want retraining to occur in terms of Years, Months, and/or Days (note: other parameters like Time are not currently supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For example, the following values are valid:   P3M15D \u2013 Every 3 months and 15 days   P2M \u2013 Every 2 months   P150D \u2013 Every 150 days",
          args: {
            name: "string",
          },
        },
        {
          name: "--lookback-window",
          description:
            "The number of past days of data that will be used for retraining",
          args: {
            name: "string",
          },
        },
        {
          name: "--promote-mode",
          description:
            "Indicates how the service will use new models. In MANAGED mode, new models will automatically be used for inference if they have better performance than the current model. In MANUAL mode, the new models will not be used until they are manually activated",
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
