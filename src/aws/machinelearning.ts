const completionSpec: Fig.Spec = {
  name: "machinelearning",
  description:
    "Definition of the public APIs exposed by Amazon Machine Learning",
  subcommands: [
    {
      name: "add-tags",
      description:
        "Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, AddTags updates the tag's value",
      options: [
        {
          name: "--tags",
          description:
            "The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the ML object to tag. For example, exampleModelId",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "The type of the ML object to tag",
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
      name: "create-batch-prediction",
      description:
        "Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a DataSource. This operation creates a new BatchPrediction, and uses an MLModel and the data files referenced by the DataSource as information sources.   CreateBatchPrediction is an asynchronous operation. In response to CreateBatchPrediction, Amazon Machine Learning (Amazon ML) immediately returns and sets the BatchPrediction status to PENDING. After the BatchPrediction completes, Amazon ML sets the status to COMPLETED.  You can poll for status updates by using the GetBatchPrediction operation and checking the Status parameter of the result. After the COMPLETED status appears, the results are available in the location specified by the OutputUri parameter",
      options: [
        {
          name: "--batch-prediction-id",
          description:
            "A user-supplied ID that uniquely identifies the BatchPrediction",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-prediction-name",
          description:
            "A user-supplied name or description of the BatchPrediction. BatchPredictionName can only use the UTF-8 character set",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-id",
          description:
            "The ID of the MLModel that will generate predictions for the group of observations",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-prediction-data-source-id",
          description:
            "The ID of the DataSource that points to the group of observations to predict",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-uri",
          description:
            "The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the s3 key portion of the outputURI field: ':', '//', '/./', '/../'. Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the Amazon Machine Learning Developer Guide",
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
      name: "create-data-source-from-rds",
      description:
        "Creates a DataSource object from an  Amazon Relational Database Service (Amazon RDS). A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.  CreateDataSourceFromRDS is an asynchronous operation. In response to CreateDataSourceFromRDS, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used only to perform >CreateMLModel>, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML cannot accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response",
      options: [
        {
          name: "--data-source-id",
          description:
            "A user-supplied ID that uniquely identifies the DataSource. Typically, an Amazon Resource Number (ARN) becomes the ID for a DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-name",
          description: "A user-supplied name or description of the DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--rds-data",
          description:
            'The data specification of an Amazon RDS DataSource:   DatabaseInformation -    DatabaseName - The name of the Amazon RDS database.    InstanceIdentifier  - A unique identifier for the Amazon RDS database instance.     DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database.   ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see Role templates for data pipelines.   ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see Role templates for data pipelines.   SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [SubnetId, SecurityGroupIds] pair for a VPC-based RDS DB instance.   SelectSqlQuery - A query that is used to retrieve the observation data for the Datasource.   S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using SelectSqlQuery is stored in this location.   DataSchemaUri - The Amazon S3 location of the DataSchema.   DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.    DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource.   Sample -  "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"',
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The role that Amazon ML assumes on behalf of the user to create and activate a data pipeline in the user's account and copy data using the SelectSqlQuery query from Amazon RDS to Amazon S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
        },
        {
          name: "--no-compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
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
      name: "create-data-source-from-redshift",
      description:
        "Creates a DataSource from a database hosted on an Amazon Redshift cluster. A DataSource references data that can be used to perform either CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.  CreateDataSourceFromRedshift is an asynchronous operation. In response to CreateDataSourceFromRedshift, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource is created and ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in COMPLETED or PENDING states can be used to perform only CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a SelectSqlQuery query. Amazon ML executes an Unload command in Amazon Redshift to transfer the result set of the SelectSqlQuery query to S3StagingLocation. After the DataSource has been created, it's ready for use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also requires a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions. You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call GetDataSource for an existing datasource and copy the values to a CreateDataSource call. Change the settings that you want to change and make sure that all required fields have the appropriate values",
      options: [
        {
          name: "--data-source-id",
          description:
            "A user-supplied ID that uniquely identifies the DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-name",
          description: "A user-supplied name or description of the DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-spec",
          description:
            'The data specification of an Amazon Redshift DataSource:   DatabaseInformation -    DatabaseName - The name of the Amazon Redshift database.     ClusterIdentifier - The unique ID for the Amazon Redshift cluster.     DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.   SelectSqlQuery - The query that is used to retrieve the observation data for the Datasource.   S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the SelectSqlQuery query is stored in this location.   DataSchemaUri - The Amazon S3 location of the DataSchema.   DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.    DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the DataSource.  Sample -  "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"',
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following:   A security group to allow Amazon ML to execute the SelectSqlQuery query on an Amazon Redshift cluster   An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the S3StagingLocation",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
        },
        {
          name: "--no-compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
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
      name: "create-data-source-from-s3",
      description:
        "Creates a DataSource object. A DataSource references data that can be used to perform CreateMLModel, CreateEvaluation, or CreateBatchPrediction operations.  CreateDataSourceFromS3 is an asynchronous operation. In response to CreateDataSourceFromS3, Amazon Machine Learning (Amazon ML) immediately returns and sets the DataSource status to PENDING. After the DataSource has been created and is ready for use, Amazon ML sets the Status parameter to COMPLETED. DataSource in the COMPLETED or PENDING state can be used to perform only CreateMLModel, CreateEvaluation or CreateBatchPrediction operations.   If Amazon ML can't accept the input source, it sets the Status parameter to FAILED and includes an error message in the Message attribute of the GetDataSource operation response.  The observation data used in a DataSource should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the DataSource.  After the DataSource has been created, it's ready to use in evaluations and batch predictions. If you plan to use the DataSource to train an MLModel, the DataSource also needs a recipe. A recipe describes how each input variable will be used in training an MLModel. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions",
      options: [
        {
          name: "--data-source-id",
          description:
            "A user-supplied identifier that uniquely identifies the DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-name",
          description: "A user-supplied name or description of the DataSource",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-spec",
          description:
            'The data specification of a DataSource:   DataLocationS3 - The Amazon S3 location of the observation data.   DataSchemaLocationS3 - The Amazon S3 location of the DataSchema.   DataSchema - A JSON string representing the schema. This is not required if DataSchemaUri is specified.    DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the Datasource.   Sample -  "{\\"splitting\\":{\\"percentBegin\\":10,\\"percentEnd\\":60}}"',
          args: {
            name: "structure",
          },
        },
        {
          name: "--compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
        },
        {
          name: "--no-compute-statistics",
          description:
            "The compute statistics for a DataSource. The statistics are generated from the observation data referenced by a DataSource. Amazon ML uses the statistics internally during MLModel training. This parameter must be set to true if the DataSource needs to be used for MLModel training",
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
      name: "create-evaluation",
      description:
        "Creates a new Evaluation of an MLModel. An MLModel is evaluated on a set of observations associated to a DataSource. Like a DataSource for an MLModel, the DataSource for an Evaluation contains values for the Target Variable. The Evaluation compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the MLModel functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding MLModelType: BINARY, REGRESSION or MULTICLASS.   CreateEvaluation is an asynchronous operation. In response to CreateEvaluation, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to PENDING. After the Evaluation is created and ready for use, Amazon ML sets the status to COMPLETED.  You can use the GetEvaluation operation to check progress of the evaluation during the creation operation",
      options: [
        {
          name: "--evaluation-id",
          description:
            "A user-supplied ID that uniquely identifies the Evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-name",
          description: "A user-supplied name or description of the Evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-id",
          description:
            "The ID of the MLModel to evaluate. The schema used in creating the MLModel must match the schema of the DataSource used in the Evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-data-source-id",
          description:
            "The ID of the DataSource for the evaluation. The schema of the DataSource must match the schema used to create the MLModel",
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
      name: "create-ml-model",
      description:
        "Creates a new MLModel using the DataSource and the recipe as information sources.  An MLModel is nearly immutable. Users can update only the MLModelName and the ScoreThreshold in an MLModel without creating a new MLModel.   CreateMLModel is an asynchronous operation. In response to CreateMLModel, Amazon Machine Learning (Amazon ML) immediately returns and sets the MLModel status to PENDING. After the MLModel has been created and ready is for use, Amazon ML sets the status to COMPLETED.  You can use the GetMLModel operation to check the progress of the MLModel during the creation operation.  CreateMLModel requires a DataSource with computed statistics, which can be created by setting ComputeStatistics to true in CreateDataSourceFromRDS, CreateDataSourceFromS3, or CreateDataSourceFromRedshift operations",
      options: [
        {
          name: "--ml-model-id",
          description:
            "A user-supplied ID that uniquely identifies the MLModel",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-name",
          description: "A user-supplied name or description of the MLModel",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-type",
          description:
            "The category of supervised learning that this MLModel will address. Choose from the following types:   Choose REGRESSION if the MLModel will be used to predict a numeric value.   Choose BINARY if the MLModel result has two possible values.   Choose MULTICLASS if the MLModel result has a limited number of values.    For more information, see the Amazon Machine Learning Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "A list of the training parameters in the MLModel. The list is implemented as a map of key-value pairs. The following is the current set of training parameters:    sgd.maxMLModelSizeInBytes - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.  The value is an integer that ranges from 100000 to 2147483648. The default value is 33554432.    sgd.maxPasses - The number of times that the training process traverses the observations to build the MLModel. The value is an integer that ranges from 1 to 10000. The default value is 10.    sgd.shuffleType - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are auto and none. The default value is none. We strongly recommend that you shuffle your data.    sgd.l1RegularizationAmount - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L1 normalization. This parameter can't be used when L2 is specified. Use this parameter sparingly.    sgd.l2RegularizationAmount - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as 1.0E-08. The value is a double that ranges from 0 to MAX_DOUBLE. The default is to not use L2 normalization. This parameter can't be used when L1 is specified. Use this parameter sparingly",
          args: {
            name: "map",
          },
        },
        {
          name: "--training-data-source-id",
          description: "The DataSource that points to the training data",
          args: {
            name: "string",
          },
        },
        {
          name: "--recipe",
          description:
            "The data recipe for creating the MLModel. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default",
          args: {
            name: "string",
          },
        },
        {
          name: "--recipe-uri",
          description:
            "The Amazon Simple Storage Service (Amazon S3) location and file name that contains the MLModel recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default",
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
      name: "create-realtime-endpoint",
      description:
        "Creates a real-time endpoint for the MLModel. The endpoint contains the URI of the MLModel; that is, the location to send real-time prediction requests for the specified MLModel",
      options: [
        {
          name: "--ml-model-id",
          description: "The ID assigned to the MLModel during creation",
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
      name: "delete-batch-prediction",
      description:
        "Assigns the DELETED status to a BatchPrediction, rendering it unusable. After using the DeleteBatchPrediction operation, you can use the GetBatchPrediction operation to verify that the status of the BatchPrediction changed to DELETED.  Caution: The result of the DeleteBatchPrediction operation is irreversible",
      options: [
        {
          name: "--batch-prediction-id",
          description:
            "A user-supplied ID that uniquely identifies the BatchPrediction",
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
      name: "delete-data-source",
      description:
        "Assigns the DELETED status to a DataSource, rendering it unusable. After using the DeleteDataSource operation, you can use the GetDataSource operation to verify that the status of the DataSource changed to DELETED.  Caution: The results of the DeleteDataSource operation are irreversible",
      options: [
        {
          name: "--data-source-id",
          description:
            "A user-supplied ID that uniquely identifies the DataSource",
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
      name: "delete-evaluation",
      description:
        "Assigns the DELETED status to an Evaluation, rendering it unusable. After invoking the DeleteEvaluation operation, you can use the GetEvaluation operation to verify that the status of the Evaluation changed to DELETED.  Caution: The results of the DeleteEvaluation operation are irreversible",
      options: [
        {
          name: "--evaluation-id",
          description:
            "A user-supplied ID that uniquely identifies the Evaluation to delete",
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
      name: "delete-ml-model",
      description:
        "Assigns the DELETED status to an MLModel, rendering it unusable. After using the DeleteMLModel operation, you can use the GetMLModel operation to verify that the status of the MLModel changed to DELETED.  Caution: The result of the DeleteMLModel operation is irreversible",
      options: [
        {
          name: "--ml-model-id",
          description:
            "A user-supplied ID that uniquely identifies the MLModel",
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
      name: "delete-realtime-endpoint",
      description: "Deletes a real time endpoint of an MLModel",
      options: [
        {
          name: "--ml-model-id",
          description: "The ID assigned to the MLModel during creation",
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
      name: "delete-tags",
      description:
        "Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags. If you specify a tag that doesn't exist, Amazon ML ignores it",
      options: [
        {
          name: "--tag-keys",
          description: "One or more tags to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-id",
          description:
            "The ID of the tagged ML object. For example, exampleModelId",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "The type of the tagged ML object",
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
      name: "describe-batch-predictions",
      description:
        "Returns a list of BatchPrediction operations that match the search criteria in the request",
      options: [
        {
          name: "--filter-variable",
          description:
            "Use one of the following variables to filter a list of BatchPrediction:    CreatedAt - Sets the search criteria to the BatchPrediction creation date.    Status - Sets the search criteria to the BatchPrediction status.    Name - Sets the search criteria to the contents of the BatchPrediction   Name.    IAMUser - Sets the search criteria to the user account that invoked the BatchPrediction creation.    MLModelId - Sets the search criteria to the MLModel used in the BatchPrediction.    DataSourceId - Sets the search criteria to the DataSource used in the BatchPrediction.    DataURI - Sets the search criteria to the data file(s) used in the BatchPrediction. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory",
          args: {
            name: "string",
          },
        },
        {
          name: "--eq",
          description:
            "The equal to operator. The BatchPrediction results will have FilterVariable values that exactly match the value specified with EQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--gt",
          description:
            "The greater than operator. The BatchPrediction results will have FilterVariable values that are greater than the value specified with GT",
          args: {
            name: "string",
          },
        },
        {
          name: "--lt",
          description:
            "The less than operator. The BatchPrediction results will have FilterVariable values that are less than the value specified with LT",
          args: {
            name: "string",
          },
        },
        {
          name: "--ge",
          description:
            "The greater than or equal to operator. The BatchPrediction results will have FilterVariable values that are greater than or equal to the value specified with GE",
          args: {
            name: "string",
          },
        },
        {
          name: "--le",
          description:
            "The less than or equal to operator. The BatchPrediction results will have FilterVariable values that are less than or equal to the value specified with LE",
          args: {
            name: "string",
          },
        },
        {
          name: "--ne",
          description:
            "The not equal to operator. The BatchPrediction results will have FilterVariable values not equal to the value specified with NE",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "A string that is found at the beginning of a variable, such as Name or Id. For example, a Batch Prediction operation could have the Name 2014-09-09-HolidayGiftMailer. To search for this BatchPrediction, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "A two-value parameter that determines the sequence of the resulting list of MLModels.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "An ID of the page in the paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100",
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
      name: "describe-data-sources",
      description:
        "Returns a list of DataSource that match the search criteria in the request",
      options: [
        {
          name: "--filter-variable",
          description:
            "Use one of the following variables to filter a list of DataSource:    CreatedAt - Sets the search criteria to DataSource creation dates.    Status - Sets the search criteria to DataSource statuses.    Name - Sets the search criteria to the contents of DataSource Name.    DataUri - Sets the search criteria to the URI of data files used to create the DataSource. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.    IAMUser - Sets the search criteria to the user account that invoked the DataSource creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--eq",
          description:
            "The equal to operator. The DataSource results will have FilterVariable values that exactly match the value specified with EQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--gt",
          description:
            "The greater than operator. The DataSource results will have FilterVariable values that are greater than the value specified with GT",
          args: {
            name: "string",
          },
        },
        {
          name: "--lt",
          description:
            "The less than operator. The DataSource results will have FilterVariable values that are less than the value specified with LT",
          args: {
            name: "string",
          },
        },
        {
          name: "--ge",
          description:
            "The greater than or equal to operator. The DataSource results will have FilterVariable values that are greater than or equal to the value specified with GE",
          args: {
            name: "string",
          },
        },
        {
          name: "--le",
          description:
            "The less than or equal to operator. The DataSource results will have FilterVariable values that are less than or equal to the value specified with LE",
          args: {
            name: "string",
          },
        },
        {
          name: "--ne",
          description:
            "The not equal to operator. The DataSource results will have FilterVariable values not equal to the value specified with NE",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "A string that is found at the beginning of a variable, such as Name or Id. For example, a DataSource could have the Name 2014-09-09-HolidayGiftMailer. To search for this DataSource, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "A two-value parameter that determines the sequence of the resulting list of DataSource.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The ID of the page in the paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of DataSource to include in the result",
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
      name: "describe-evaluations",
      description:
        "Returns a list of DescribeEvaluations that match the search criteria in the request",
      options: [
        {
          name: "--filter-variable",
          description:
            "Use one of the following variable to filter a list of Evaluation objects:    CreatedAt - Sets the search criteria to the Evaluation creation date.    Status - Sets the search criteria to the Evaluation status.    Name - Sets the search criteria to the contents of Evaluation   Name.    IAMUser - Sets the search criteria to the user account that invoked an Evaluation.    MLModelId - Sets the search criteria to the MLModel that was evaluated.    DataSourceId - Sets the search criteria to the DataSource used in Evaluation.    DataUri - Sets the search criteria to the data file(s) used in Evaluation. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory",
          args: {
            name: "string",
          },
        },
        {
          name: "--eq",
          description:
            "The equal to operator. The Evaluation results will have FilterVariable values that exactly match the value specified with EQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--gt",
          description:
            "The greater than operator. The Evaluation results will have FilterVariable values that are greater than the value specified with GT",
          args: {
            name: "string",
          },
        },
        {
          name: "--lt",
          description:
            "The less than operator. The Evaluation results will have FilterVariable values that are less than the value specified with LT",
          args: {
            name: "string",
          },
        },
        {
          name: "--ge",
          description:
            "The greater than or equal to operator. The Evaluation results will have FilterVariable values that are greater than or equal to the value specified with GE",
          args: {
            name: "string",
          },
        },
        {
          name: "--le",
          description:
            "The less than or equal to operator. The Evaluation results will have FilterVariable values that are less than or equal to the value specified with LE",
          args: {
            name: "string",
          },
        },
        {
          name: "--ne",
          description:
            "The not equal to operator. The Evaluation results will have FilterVariable values not equal to the value specified with NE",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "A string that is found at the beginning of a variable, such as Name or Id. For example, an Evaluation could have the Name 2014-09-09-HolidayGiftMailer. To search for this Evaluation, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "A two-value parameter that determines the sequence of the resulting list of Evaluation.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The ID of the page in the paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of Evaluation to include in the result",
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
      name: "describe-ml-models",
      description:
        "Returns a list of MLModel that match the search criteria in the request",
      options: [
        {
          name: "--filter-variable",
          description:
            "Use one of the following variables to filter a list of MLModel:    CreatedAt - Sets the search criteria to MLModel creation date.    Status - Sets the search criteria to MLModel status.    Name - Sets the search criteria to the contents of MLModel   Name.    IAMUser - Sets the search criteria to the user account that invoked the MLModel creation.    TrainingDataSourceId - Sets the search criteria to the DataSource used to train one or more MLModel.    RealtimeEndpointStatus - Sets the search criteria to the MLModel real-time endpoint status.    MLModelType - Sets the search criteria to MLModel type: binary, regression, or multi-class.    Algorithm - Sets the search criteria to the algorithm that the MLModel uses.    TrainingDataURI - Sets the search criteria to the data file(s) used in training a MLModel. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory",
          args: {
            name: "string",
          },
        },
        {
          name: "--eq",
          description:
            "The equal to operator. The MLModel results will have FilterVariable values that exactly match the value specified with EQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--gt",
          description:
            "The greater than operator. The MLModel results will have FilterVariable values that are greater than the value specified with GT",
          args: {
            name: "string",
          },
        },
        {
          name: "--lt",
          description:
            "The less than operator. The MLModel results will have FilterVariable values that are less than the value specified with LT",
          args: {
            name: "string",
          },
        },
        {
          name: "--ge",
          description:
            "The greater than or equal to operator. The MLModel results will have FilterVariable values that are greater than or equal to the value specified with GE",
          args: {
            name: "string",
          },
        },
        {
          name: "--le",
          description:
            "The less than or equal to operator. The MLModel results will have FilterVariable values that are less than or equal to the value specified with LE",
          args: {
            name: "string",
          },
        },
        {
          name: "--ne",
          description:
            "The not equal to operator. The MLModel results will have FilterVariable values not equal to the value specified with NE",
          args: {
            name: "string",
          },
        },
        {
          name: "--prefix",
          description:
            "A string that is found at the beginning of a variable, such as Name or Id. For example, an MLModel could have the Name 2014-09-09-HolidayGiftMailer. To search for this MLModel, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "A two-value parameter that determines the sequence of the resulting list of MLModel.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The ID of the page in the paginated results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100",
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
      name: "describe-tags",
      description:
        "Describes one or more of the tags for your Amazon ML object",
      options: [
        {
          name: "--resource-id",
          description: "The ID of the ML object. For example, exampleModelId",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "The type of the ML object",
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
      name: "get-batch-prediction",
      description:
        "Returns a BatchPrediction that includes detailed metadata, status, and data file information for a Batch Prediction request",
      options: [
        {
          name: "--batch-prediction-id",
          description: "An ID assigned to the BatchPrediction at creation",
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
      name: "get-data-source",
      description:
        "Returns a DataSource that includes metadata and data file information, as well as the current status of the DataSource.  GetDataSource provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format",
      options: [
        {
          name: "--data-source-id",
          description: "The ID assigned to the DataSource at creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--verbose",
          description:
            "Specifies whether the GetDataSource operation should return DataSourceSchema. If true, DataSourceSchema is returned. If false, DataSourceSchema is not returned",
        },
        {
          name: "--no-verbose",
          description:
            "Specifies whether the GetDataSource operation should return DataSourceSchema. If true, DataSourceSchema is returned. If false, DataSourceSchema is not returned",
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
      name: "get-evaluation",
      description:
        "Returns an Evaluation that includes metadata as well as the current status of the Evaluation",
      options: [
        {
          name: "--evaluation-id",
          description:
            "The ID of the Evaluation to retrieve. The evaluation of each MLModel is recorded and cataloged. The ID provides the means to access the information",
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
      name: "get-ml-model",
      description:
        "Returns an MLModel that includes detailed metadata, data source information, and the current status of the MLModel.  GetMLModel provides results in normal or verbose format",
      options: [
        {
          name: "--ml-model-id",
          description: "The ID assigned to the MLModel at creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--verbose",
          description:
            "Specifies whether the GetMLModel operation should return Recipe. If true, Recipe is returned. If false, Recipe is not returned",
        },
        {
          name: "--no-verbose",
          description:
            "Specifies whether the GetMLModel operation should return Recipe. If true, Recipe is returned. If false, Recipe is not returned",
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
      name: "predict",
      description:
        "Generates a prediction for the observation using the specified ML Model.  Note: Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested",
      options: [
        {
          name: "--ml-model-id",
          description: "A unique identifier of the MLModel",
          args: {
            name: "string",
          },
        },
        {
          name: "--record",
          description:
            "A map of variable name-value pairs that represent an observation",
          args: {
            name: "map",
          },
        },
        {
          name: "--predict-endpoint",
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
      name: "update-batch-prediction",
      description:
        "Updates the BatchPredictionName of a BatchPrediction. You can use the GetBatchPrediction operation to view the contents of the updated data element",
      options: [
        {
          name: "--batch-prediction-id",
          description: "The ID assigned to the BatchPrediction during creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--batch-prediction-name",
          description:
            "A new user-supplied name or description of the BatchPrediction",
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
      name: "update-data-source",
      description:
        "Updates the DataSourceName of a DataSource. You can use the GetDataSource operation to view the contents of the updated data element",
      options: [
        {
          name: "--data-source-id",
          description: "The ID assigned to the DataSource during creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-name",
          description:
            "A new user-supplied name or description of the DataSource that will replace the current description",
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
      name: "update-evaluation",
      description:
        "Updates the EvaluationName of an Evaluation. You can use the GetEvaluation operation to view the contents of the updated data element",
      options: [
        {
          name: "--evaluation-id",
          description: "The ID assigned to the Evaluation during creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-name",
          description:
            "A new user-supplied name or description of the Evaluation that will replace the current content",
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
      name: "update-ml-model",
      description:
        "Updates the MLModelName and the ScoreThreshold of an MLModel. You can use the GetMLModel operation to view the contents of the updated data element",
      options: [
        {
          name: "--ml-model-id",
          description: "The ID assigned to the MLModel during creation",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-name",
          description: "A user-supplied name or description of the MLModel",
          args: {
            name: "string",
          },
        },
        {
          name: "--score-threshold",
          description:
            "The ScoreThreshold used in binary classification MLModel that marks the boundary between a positive prediction and a negative prediction. Output values greater than or equal to the ScoreThreshold receive a positive result from the MLModel, such as true. Output values less than the ScoreThreshold receive a negative response from the MLModel, such as false",
          args: {
            name: "float",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "batch-prediction-available",
          description:
            "Wait until JMESPath query Results[].Status returns COMPLETED for all elements when polling with ``describe-batch-predictions``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filter-variable",
              description:
                "Use one of the following variables to filter a list of BatchPrediction:    CreatedAt - Sets the search criteria to the BatchPrediction creation date.    Status - Sets the search criteria to the BatchPrediction status.    Name - Sets the search criteria to the contents of the BatchPrediction   Name.    IAMUser - Sets the search criteria to the user account that invoked the BatchPrediction creation.    MLModelId - Sets the search criteria to the MLModel used in the BatchPrediction.    DataSourceId - Sets the search criteria to the DataSource used in the BatchPrediction.    DataURI - Sets the search criteria to the data file(s) used in the BatchPrediction. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory",
              args: {
                name: "string",
              },
            },
            {
              name: "--eq",
              description:
                "The equal to operator. The BatchPrediction results will have FilterVariable values that exactly match the value specified with EQ",
              args: {
                name: "string",
              },
            },
            {
              name: "--gt",
              description:
                "The greater than operator. The BatchPrediction results will have FilterVariable values that are greater than the value specified with GT",
              args: {
                name: "string",
              },
            },
            {
              name: "--lt",
              description:
                "The less than operator. The BatchPrediction results will have FilterVariable values that are less than the value specified with LT",
              args: {
                name: "string",
              },
            },
            {
              name: "--ge",
              description:
                "The greater than or equal to operator. The BatchPrediction results will have FilterVariable values that are greater than or equal to the value specified with GE",
              args: {
                name: "string",
              },
            },
            {
              name: "--le",
              description:
                "The less than or equal to operator. The BatchPrediction results will have FilterVariable values that are less than or equal to the value specified with LE",
              args: {
                name: "string",
              },
            },
            {
              name: "--ne",
              description:
                "The not equal to operator. The BatchPrediction results will have FilterVariable values not equal to the value specified with NE",
              args: {
                name: "string",
              },
            },
            {
              name: "--prefix",
              description:
                "A string that is found at the beginning of a variable, such as Name or Id. For example, a Batch Prediction operation could have the Name 2014-09-09-HolidayGiftMailer. To search for this BatchPrediction, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
              args: {
                name: "string",
              },
            },
            {
              name: "--sort-order",
              description:
                "A two-value parameter that determines the sequence of the resulting list of MLModels.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
              args: {
                name: "string",
              },
            },
            {
              name: "--next-token",
              description: "An ID of the page in the paginated results",
              args: {
                name: "string",
              },
            },
            {
              name: "--limit",
              description:
                "The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100",
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
          name: "data-source-available",
          description:
            "Wait until JMESPath query Results[].Status returns COMPLETED for all elements when polling with ``describe-data-sources``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filter-variable",
              description:
                "Use one of the following variables to filter a list of DataSource:    CreatedAt - Sets the search criteria to DataSource creation dates.    Status - Sets the search criteria to DataSource statuses.    Name - Sets the search criteria to the contents of DataSource Name.    DataUri - Sets the search criteria to the URI of data files used to create the DataSource. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.    IAMUser - Sets the search criteria to the user account that invoked the DataSource creation",
              args: {
                name: "string",
              },
            },
            {
              name: "--eq",
              description:
                "The equal to operator. The DataSource results will have FilterVariable values that exactly match the value specified with EQ",
              args: {
                name: "string",
              },
            },
            {
              name: "--gt",
              description:
                "The greater than operator. The DataSource results will have FilterVariable values that are greater than the value specified with GT",
              args: {
                name: "string",
              },
            },
            {
              name: "--lt",
              description:
                "The less than operator. The DataSource results will have FilterVariable values that are less than the value specified with LT",
              args: {
                name: "string",
              },
            },
            {
              name: "--ge",
              description:
                "The greater than or equal to operator. The DataSource results will have FilterVariable values that are greater than or equal to the value specified with GE",
              args: {
                name: "string",
              },
            },
            {
              name: "--le",
              description:
                "The less than or equal to operator. The DataSource results will have FilterVariable values that are less than or equal to the value specified with LE",
              args: {
                name: "string",
              },
            },
            {
              name: "--ne",
              description:
                "The not equal to operator. The DataSource results will have FilterVariable values not equal to the value specified with NE",
              args: {
                name: "string",
              },
            },
            {
              name: "--prefix",
              description:
                "A string that is found at the beginning of a variable, such as Name or Id. For example, a DataSource could have the Name 2014-09-09-HolidayGiftMailer. To search for this DataSource, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
              args: {
                name: "string",
              },
            },
            {
              name: "--sort-order",
              description:
                "A two-value parameter that determines the sequence of the resulting list of DataSource.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
              args: {
                name: "string",
              },
            },
            {
              name: "--next-token",
              description: "The ID of the page in the paginated results",
              args: {
                name: "string",
              },
            },
            {
              name: "--limit",
              description:
                "The maximum number of DataSource to include in the result",
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
          name: "evaluation-available",
          description:
            "Wait until JMESPath query Results[].Status returns COMPLETED for all elements when polling with ``describe-evaluations``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filter-variable",
              description:
                "Use one of the following variable to filter a list of Evaluation objects:    CreatedAt - Sets the search criteria to the Evaluation creation date.    Status - Sets the search criteria to the Evaluation status.    Name - Sets the search criteria to the contents of Evaluation   Name.    IAMUser - Sets the search criteria to the user account that invoked an Evaluation.    MLModelId - Sets the search criteria to the MLModel that was evaluated.    DataSourceId - Sets the search criteria to the DataSource used in Evaluation.    DataUri - Sets the search criteria to the data file(s) used in Evaluation. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory",
              args: {
                name: "string",
              },
            },
            {
              name: "--eq",
              description:
                "The equal to operator. The Evaluation results will have FilterVariable values that exactly match the value specified with EQ",
              args: {
                name: "string",
              },
            },
            {
              name: "--gt",
              description:
                "The greater than operator. The Evaluation results will have FilterVariable values that are greater than the value specified with GT",
              args: {
                name: "string",
              },
            },
            {
              name: "--lt",
              description:
                "The less than operator. The Evaluation results will have FilterVariable values that are less than the value specified with LT",
              args: {
                name: "string",
              },
            },
            {
              name: "--ge",
              description:
                "The greater than or equal to operator. The Evaluation results will have FilterVariable values that are greater than or equal to the value specified with GE",
              args: {
                name: "string",
              },
            },
            {
              name: "--le",
              description:
                "The less than or equal to operator. The Evaluation results will have FilterVariable values that are less than or equal to the value specified with LE",
              args: {
                name: "string",
              },
            },
            {
              name: "--ne",
              description:
                "The not equal to operator. The Evaluation results will have FilterVariable values not equal to the value specified with NE",
              args: {
                name: "string",
              },
            },
            {
              name: "--prefix",
              description:
                "A string that is found at the beginning of a variable, such as Name or Id. For example, an Evaluation could have the Name 2014-09-09-HolidayGiftMailer. To search for this Evaluation, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
              args: {
                name: "string",
              },
            },
            {
              name: "--sort-order",
              description:
                "A two-value parameter that determines the sequence of the resulting list of Evaluation.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
              args: {
                name: "string",
              },
            },
            {
              name: "--next-token",
              description: "The ID of the page in the paginated results",
              args: {
                name: "string",
              },
            },
            {
              name: "--limit",
              description:
                "The maximum number of Evaluation to include in the result",
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
          name: "ml-model-available",
          description:
            "Wait until JMESPath query Results[].Status returns COMPLETED for all elements when polling with ``describe-ml-models``. It will poll every 30 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filter-variable",
              description:
                "Use one of the following variables to filter a list of MLModel:    CreatedAt - Sets the search criteria to MLModel creation date.    Status - Sets the search criteria to MLModel status.    Name - Sets the search criteria to the contents of MLModel   Name.    IAMUser - Sets the search criteria to the user account that invoked the MLModel creation.    TrainingDataSourceId - Sets the search criteria to the DataSource used to train one or more MLModel.    RealtimeEndpointStatus - Sets the search criteria to the MLModel real-time endpoint status.    MLModelType - Sets the search criteria to MLModel type: binary, regression, or multi-class.    Algorithm - Sets the search criteria to the algorithm that the MLModel uses.    TrainingDataURI - Sets the search criteria to the data file(s) used in training a MLModel. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory",
              args: {
                name: "string",
              },
            },
            {
              name: "--eq",
              description:
                "The equal to operator. The MLModel results will have FilterVariable values that exactly match the value specified with EQ",
              args: {
                name: "string",
              },
            },
            {
              name: "--gt",
              description:
                "The greater than operator. The MLModel results will have FilterVariable values that are greater than the value specified with GT",
              args: {
                name: "string",
              },
            },
            {
              name: "--lt",
              description:
                "The less than operator. The MLModel results will have FilterVariable values that are less than the value specified with LT",
              args: {
                name: "string",
              },
            },
            {
              name: "--ge",
              description:
                "The greater than or equal to operator. The MLModel results will have FilterVariable values that are greater than or equal to the value specified with GE",
              args: {
                name: "string",
              },
            },
            {
              name: "--le",
              description:
                "The less than or equal to operator. The MLModel results will have FilterVariable values that are less than or equal to the value specified with LE",
              args: {
                name: "string",
              },
            },
            {
              name: "--ne",
              description:
                "The not equal to operator. The MLModel results will have FilterVariable values not equal to the value specified with NE",
              args: {
                name: "string",
              },
            },
            {
              name: "--prefix",
              description:
                "A string that is found at the beginning of a variable, such as Name or Id. For example, an MLModel could have the Name 2014-09-09-HolidayGiftMailer. To search for this MLModel, select Name for the FilterVariable and any of the following strings for the Prefix:    2014-09   2014-09-09   2014-09-09-Holiday",
              args: {
                name: "string",
              },
            },
            {
              name: "--sort-order",
              description:
                "A two-value parameter that determines the sequence of the resulting list of MLModel.    asc - Arranges the list in ascending order (A-Z, 0-9).    dsc - Arranges the list in descending order (Z-A, 9-0).   Results are sorted by FilterVariable",
              args: {
                name: "string",
              },
            },
            {
              name: "--next-token",
              description: "The ID of the page in the paginated results",
              args: {
                name: "string",
              },
            },
            {
              name: "--limit",
              description:
                "The number of pages of information to include in the result. The range of acceptable values is 1 through 100. The default value is 100",
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
      ],
    },
  ],
};
export default completionSpec;
