import * as Fig from "../../schemas";

const completionSpec: Fig.Spec = {
  name: "lookoutequipment",
  description:
    "Amazon Lookout for Equipment is a machine learning service that uses advanced analytics to identify anomalies in machines from sensor data for use in predictive maintenance",
  subcommands: [
    {
      name: "create-dataset",
      description:
        "Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. In other words, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data",
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
            "Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt dataset data by Amazon Lookout for Equipment",
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
            "The name of the previously trained ML model being used to create the inference scheduler",
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
            "Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment",
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
      name: "create-model",
      description:
        "Creates an ML model for data inference.  A machine-learning (ML) model is a mathematical model that finds patterns in your data. In Amazon Lookout for Equipment, the model learns the patterns of normal behavior and detects abnormal behavior that could be potential equipment failure (or maintenance events). The models are made by analyzing normal data and abnormalities in machine behavior that have already occurred. Your model is trained using a portion of the data from your dataset and uses that data to learn patterns of normal behavior and abnormal patterns that lead to equipment failure. Another portion of the data is used to evaluate the model's accuracy",
      options: [
        {
          name: "--model-name",
          description: "The name for the ML model to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description: "The name of the dataset for the ML model being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-schema",
          description: "The data schema for the ML model being created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--labels-input-configuration",
          description:
            "The input configuration for the labels being used for the ML model that's being created",
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
            "Indicates the time reference in the dataset that should be used to begin the subset of training data for the ML model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--training-data-end-time",
          description:
            "Indicates the time reference in the dataset that should be used to end the subset of training data for the ML model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--evaluation-data-start-time",
          description:
            "Indicates the time reference in the dataset that should be used to begin the subset of evaluation data for the ML model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--evaluation-data-end-time",
          description:
            "Indicates the time reference in the dataset that should be used to end the subset of evaluation data for the ML model",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the ML model",
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
            "Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt model data by Amazon Lookout for Equipment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Any tags associated with the ML model being created",
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
        "Deletes an inference scheduler that has been set up. Already processed output results are not affected",
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
      name: "delete-model",
      description:
        "Deletes an ML model currently available for Amazon Lookout for Equipment. This will prevent it from being used with an inference scheduler, even one that is already set up",
      options: [
        {
          name: "--model-name",
          description: "The name of the ML model to be deleted",
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
        "Provides information on a specific data ingestion job such as creation time, dataset ARN, status, and so on",
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
        "Provides information on a specified dataset such as the schema location, status, and so on",
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
      name: "describe-model",
      description:
        "Provides overall information about a specific ML model, including model name and ARN, dataset, training and evaluation information, status, and so on",
      options: [
        {
          name: "--model-name",
          description: "The name of the ML model to be described",
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
            "The name of the ML model used by the inference scheduler to be listed",
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
      name: "list-models",
      description:
        "Generates a list of all models in the account, including model name and ARN, dataset, and status",
      options: [
        {
          name: "--next-token",
          description:
            "An opaque pagination token indicating where to continue the listing of ML models",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of ML models to list",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description: "The status of the ML model",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name-begins-with",
          description:
            "The beginning of the name of the ML models being listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name-begins-with",
          description:
            "The beginning of the name of the dataset of the ML models to be listed",
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
            "&gt; A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data",
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
  ],
};

export default completionSpec;
