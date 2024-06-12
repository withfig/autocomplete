const completionSpec: Fig.Spec = {
  name: "neptunedata",
  description:
    "Neptune Data API The Amazon Neptune data API provides SDK support for more than 40 of Neptune's data operations, including data loading, query execution, data inquiry, and machine learning. It supports the Gremlin and openCypher query languages, and is available in all SDK languages. It automatically signs API requests and greatly simplifies integrating Neptune into your applications",
  subcommands: [
    {
      name: "cancel-gremlin-query",
      description:
        "Cancels a Gremlin query. See Gremlin query cancellation for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelQuery IAM action in that cluster",
      options: [
        {
          name: "--query-id",
          description:
            "The unique identifier that identifies the query to be canceled",
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
      name: "cancel-loader-job",
      description:
        "Cancels a specified load job. This is an HTTP DELETE request. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelLoaderJob IAM action in that cluster",
      options: [
        {
          name: "--load-id",
          description: "The ID of the load job to be deleted",
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
      name: "cancel-ml-data-processing-job",
      description:
        "Cancels a Neptune ML data processing job. See The dataprocessing command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelMLDataProcessingJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the data-processing job",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean",
          description:
            "If set to TRUE, this flag specifies that all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
        },
        {
          name: "--no-clean",
          description:
            "If set to TRUE, this flag specifies that all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
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
      name: "cancel-ml-model-training-job",
      description:
        "Cancels a Neptune ML model training job. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelMLModelTrainingJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of the model-training job to be canceled",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean",
          description:
            "If set to TRUE, this flag specifies that all Amazon S3 artifacts should be deleted when the job is stopped. The default is FALSE",
        },
        {
          name: "--no-clean",
          description:
            "If set to TRUE, this flag specifies that all Amazon S3 artifacts should be deleted when the job is stopped. The default is FALSE",
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
      name: "cancel-ml-model-transform-job",
      description:
        "Cancels a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelMLModelTransformJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "The unique ID of the model transform job to be canceled",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean",
          description:
            "If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
        },
        {
          name: "--no-clean",
          description:
            "If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
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
      name: "cancel-open-cypher-query",
      description:
        "Cancels a specified openCypher query. See Neptune openCypher status endpoint for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelQuery IAM action in that cluster",
      options: [
        {
          name: "--query-id",
          description: "The unique ID of the openCypher query to cancel",
          args: {
            name: "string",
          },
        },
        {
          name: "--silent",
          description:
            "If set to TRUE, causes the cancelation of the openCypher query to happen silently",
        },
        {
          name: "--no-silent",
          description:
            "If set to TRUE, causes the cancelation of the openCypher query to happen silently",
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
      name: "create-ml-endpoint",
      description:
        "Creates a new Neptune ML inference endpoint that lets you query one specific model that the model-training process constructed. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CreateMLEndpoint IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "A unique identifier for the new inference endpoint. The default is an autogenerated timestamped name",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-training-job-id",
          description:
            "The job Id of the completed model-training job that has created the model that the inference endpoint will point to. You must supply either the mlModelTrainingJobId or the mlModelTransformJobId",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-transform-job-id",
          description:
            "The job Id of the completed model-transform job. You must supply either the mlModelTrainingJobId or the mlModelTransformJobId",
          args: {
            name: "string",
          },
        },
        {
          name: "--update",
          description:
            "If set to true, update indicates that this is an update request. The default is false. You must supply either the mlModelTrainingJobId or the mlModelTransformJobId",
        },
        {
          name: "--no-update",
          description:
            "If set to true, update indicates that this is an update request. The default is false. You must supply either the mlModelTrainingJobId or the mlModelTransformJobId",
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role providing Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will be thrown",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-name",
          description:
            "Model type for training. By default the Neptune ML model is automatically based on the modelType used in data processing, but you can specify a different model type here. The default is rgcn for heterogeneous graphs and kge for knowledge graphs. The only valid value for heterogeneous graphs is rgcn. Valid values for knowledge graphs are: kge, transe, distmult, and rotate",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-type",
          description:
            "The type of Neptune ML instance to use for online servicing. The default is ml.m5.xlarge. Choosing the ML instance for an inference endpoint depends on the task type, the graph size, and your budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-count",
          description:
            "The minimum number of Amazon EC2 instances to deploy to an endpoint for prediction. The default is 1",
          args: {
            name: "integer",
          },
        },
        {
          name: "--volume-encryption-kms-key",
          description:
            "The Amazon Key Management Service (Amazon KMS) key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instances that run the training job. The default is None",
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
      name: "delete-ml-endpoint",
      description:
        "Cancels the creation of a Neptune ML inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteMLEndpoint IAM action in that cluster",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the inference endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role providing Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will be thrown",
          args: {
            name: "string",
          },
        },
        {
          name: "--clean",
          description:
            "If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
        },
        {
          name: "--no-clean",
          description:
            "If this flag is set to TRUE, all Neptune ML S3 artifacts should be deleted when the job is stopped. The default is FALSE",
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
      name: "delete-propertygraph-statistics",
      description:
        "Deletes statistics for Gremlin and openCypher (property graph) data. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteStatistics IAM action in that cluster",
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
      name: "delete-sparql-statistics",
      description:
        "Deletes SPARQL statistics When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:DeleteStatistics IAM action in that cluster",
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
      name: "execute-fast-reset",
      description:
        "The fast reset REST API lets you reset a Neptune graph quicky and easily, removing all of its data. Neptune fast reset is a two-step process. First you call ExecuteFastReset with action set to initiateDatabaseReset. This returns a UUID token which you then include when calling ExecuteFastReset again with action set to performDatabaseReset. See Empty an Amazon Neptune DB cluster using the fast reset API. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ResetDatabase IAM action in that cluster",
      options: [
        {
          name: "--action",
          description:
            "The fast reset action. One of the following values:     initiateDatabaseReset  \u00a0 \u2013 \u00a0 This action generates a unique token needed to actually perform the fast reset.     performDatabaseReset  \u00a0 \u2013 \u00a0 This action uses the token generated by the initiateDatabaseReset action to actually perform the fast reset",
          args: {
            name: "string",
          },
        },
        {
          name: "--token",
          description: "The fast-reset token to initiate the reset",
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
      name: "execute-gremlin-explain-query",
      description:
        "Executes a Gremlin Explain query. Amazon Neptune has added a Gremlin feature named explain that provides is a self-service tool for understanding the execution approach being taken by the Neptune engine for the query. You invoke it by adding an explain parameter to an HTTP call that submits a Gremlin query. The explain feature provides information about the logical structure of query execution plans. You can use this information to identify potential evaluation and execution bottlenecks and to tune your query, as explained in Tuning Gremlin queries. You can also use query hints to improve query execution plans. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:    neptune-db:ReadDataViaQuery     neptune-db:WriteDataViaQuery     neptune-db:DeleteDataViaQuery    Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--gremlin-query",
          description: "The Gremlin explain query string",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "execute-gremlin-profile-query",
      description:
        "Executes a Gremlin Profile query, which runs a specified traversal, collects various metrics about the run, and produces a profile report as output. See Gremlin profile API in Neptune for details. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ReadDataViaQuery IAM action in that cluster. Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--gremlin-query",
          description: "The Gremlin query string to profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--results",
          description:
            "If this flag is set to TRUE, the query results are gathered and displayed as part of the profile report. If FALSE, only the result count is displayed",
        },
        {
          name: "--no-results",
          description:
            "If this flag is set to TRUE, the query results are gathered and displayed as part of the profile report. If FALSE, only the result count is displayed",
        },
        {
          name: "--chop",
          description:
            "If non-zero, causes the results string to be truncated at that number of characters. If set to zero, the string contains all the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--serializer",
          description:
            "If non-null, the gathered results are returned in a serialized response message in the format specified by this parameter. See Gremlin profile API in Neptune for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-ops",
          description:
            "If this flag is set to TRUE, the results include a detailed report of all index operations that took place during query execution and serialization",
        },
        {
          name: "--no-index-ops",
          description:
            "If this flag is set to TRUE, the results include a detailed report of all index operations that took place during query execution and serialization",
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "execute-gremlin-query",
      description:
        "This commands executes a Gremlin query. Amazon Neptune is compatible with Apache TinkerPop3 and Gremlin, so you can use the Gremlin traversal language to query the graph, as described under The Graph in the Apache TinkerPop3 documentation. More details can also be found in Accessing a Neptune graph with Gremlin. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that enables one of the following IAM actions in that cluster, depending on the query:    neptune-db:ReadDataViaQuery     neptune-db:WriteDataViaQuery     neptune-db:DeleteDataViaQuery    Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--gremlin-query",
          description:
            "Using this API, you can run Gremlin queries in string format much as you can using the HTTP endpoint. The interface is compatible with whatever Gremlin version your DB cluster is using (see the Tinkerpop client section to determine which Gremlin releases your engine version supports)",
          args: {
            name: "string",
          },
        },
        {
          name: "--serializer",
          description:
            "If non-null, the query results are returned in a serialized response message in the format specified by this parameter. See the GraphSON section in the TinkerPop documentation for a list of the formats that are currently supported",
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
      name: "execute-open-cypher-explain-query",
      description:
        "Executes an openCypher explain request. See The openCypher explain feature for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ReadDataViaQuery IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--open-cypher-query",
          description: "The openCypher query string",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The openCypher query parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--explain-mode",
          description:
            "The openCypher explain mode. Can be one of: static, dynamic, or details",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "execute-open-cypher-query",
      description:
        "Executes an openCypher query. See Accessing the Neptune Graph with openCypher for more information. Neptune supports building graph applications using openCypher, which is currently one of the most popular query languages among developers working with graph databases. Developers, business analysts, and data scientists like openCypher's declarative, SQL-inspired syntax because it provides a familiar structure in which to querying property graphs. The openCypher language was originally developed by Neo4j, then open-sourced in 2015 and contributed to the openCypher project under an Apache 2 open-source license. Note that when invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:    neptune-db:ReadDataViaQuery     neptune-db:WriteDataViaQuery     neptune-db:DeleteDataViaQuery    Note also that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--open-cypher-query",
          description: "The openCypher query string to be executed",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The openCypher query parameters for query execution. See Examples of openCypher parameterized queries for more information",
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
      name: "get-engine-status",
      description:
        "Retrieves the status of the graph database on the host. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetEngineStatus IAM action in that cluster",
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
      name: "get-gremlin-query-status",
      description:
        "Gets the status of a specified Gremlin query. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--query-id",
          description:
            "The unique identifier that identifies the Gremlin query",
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
      name: "get-loader-job-status",
      description:
        "Gets status information about a specified load job. Neptune keeps track of the most recent 1,024 bulk load jobs, and stores the last 10,000 error details per job. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetLoaderJobStatus IAM action in that cluster",
      options: [
        {
          name: "--load-id",
          description: "The load ID of the load job to get the status of",
          args: {
            name: "string",
          },
        },
        {
          name: "--details",
          description:
            "Flag indicating whether or not to include details beyond the overall status (TRUE or FALSE; the default is FALSE)",
        },
        {
          name: "--no-details",
          description:
            "Flag indicating whether or not to include details beyond the overall status (TRUE or FALSE; the default is FALSE)",
        },
        {
          name: "--errors",
          description:
            "Flag indicating whether or not to include a list of errors encountered (TRUE or FALSE; the default is FALSE). The list of errors is paged. The page and errorsPerPage parameters allow you to page through all the errors",
        },
        {
          name: "--no-errors",
          description:
            "Flag indicating whether or not to include a list of errors encountered (TRUE or FALSE; the default is FALSE). The list of errors is paged. The page and errorsPerPage parameters allow you to page through all the errors",
        },
        {
          name: "--page",
          description:
            "The error page number (a positive integer; the default is 1). Only valid when the errors parameter is set to TRUE",
          args: {
            name: "integer",
          },
        },
        {
          name: "--errors-per-page",
          description:
            "The number of errors returned in each page (a positive integer; the default is 10). Only valid when the errors parameter set to TRUE",
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
      name: "get-ml-data-processing-job",
      description:
        "Retrieves information about a specified data processing job. See The dataprocessing command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:neptune-db:GetMLDataProcessingJobStatus IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of the data-processing job to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "get-ml-endpoint",
      description:
        "Retrieves details about an inference endpoint. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLEndpointStatus IAM action in that cluster",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the inference endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "get-ml-model-training-job",
      description:
        "Retrieves information about a Neptune ML model training job. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTrainingJobStatus IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of the model-training job to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "get-ml-model-transform-job",
      description:
        "Gets information about a specified model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetMLModelTransformJobStatus IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "The unique identifier of the model-transform job to be reetrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "get-open-cypher-query-status",
      description:
        "Retrieves the status of a specified openCypher query. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--query-id",
          description:
            "The unique ID of the openCypher query for which to retrieve the query status",
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
      name: "get-propertygraph-statistics",
      description:
        "Gets property graph statistics (Gremlin and openCypher). When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStatisticsStatus IAM action in that cluster",
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
      name: "get-propertygraph-stream",
      description:
        "Gets a stream for a property graph. With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens. GetPropertygraphStream lets you collect these change-log entries for a property graph. The Neptune streams feature needs to be enabled on your Neptune DBcluster. To enable streams, set the neptune_streams DB cluster parameter to 1. See Capturing graph changes in real time using Neptune streams. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStreamRecords IAM action in that cluster. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that enables one of the following IAM actions, depending on the query: Note that you can restrict property-graph queries using the following IAM context keys:    neptune-db:QueryLanguage:Gremlin     neptune-db:QueryLanguage:OpenCypher    See Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--limit",
          description:
            "Specifies the maximum number of records to return. There is also a size limit of 10 MB on the response that can't be modified and that takes precedence over the number of records specified in the limit parameter. The response does include a threshold-breaching record if the 10 MB limit was reached. The range for limit is 1 to 100,000, with a default of 10",
          args: {
            name: "long",
          },
        },
        {
          name: "--iterator-type",
          description:
            "Can be one of:    AT_SEQUENCE_NUMBER \u00a0 \u2013 \u00a0 Indicates that reading should start from the event sequence number specified jointly by the commitNum and opNum parameters.    AFTER_SEQUENCE_NUMBER \u00a0 \u2013 \u00a0 Indicates that reading should start right after the event sequence number specified jointly by the commitNum and opNum parameters.    TRIM_HORIZON \u00a0 \u2013 \u00a0 Indicates that reading should start at the last untrimmed record in the system, which is the oldest unexpired (not yet deleted) record in the change-log stream.    LATEST \u00a0 \u2013 \u00a0 Indicates that reading should start at the most recent record in the system, which is the latest unexpired (not yet deleted) record in the change-log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-num",
          description:
            "The commit number of the starting record to read from the change-log stream. This parameter is required when iteratorType isAT_SEQUENCE_NUMBER or AFTER_SEQUENCE_NUMBER, and ignored when iteratorType is TRIM_HORIZON or LATEST",
          args: {
            name: "long",
          },
        },
        {
          name: "--op-num",
          description:
            "The operation sequence number within the specified commit to start reading from in the change-log stream data. The default is 1",
          args: {
            name: "long",
          },
        },
        {
          name: "--encoding",
          description:
            "If set to TRUE, Neptune compresses the response using gzip encoding",
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
      name: "get-propertygraph-summary",
      description:
        "Gets a graph summary for a property graph. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetGraphSummary IAM action in that cluster",
      options: [
        {
          name: "--mode",
          description:
            "Mode can take one of two values: BASIC (the default), and DETAILED",
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
      name: "get-rdf-graph-summary",
      description:
        "Gets a graph summary for an RDF graph. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetGraphSummary IAM action in that cluster",
      options: [
        {
          name: "--mode",
          description:
            "Mode can take one of two values: BASIC (the default), and DETAILED",
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
      name: "get-sparql-statistics",
      description: "Gets RDF statistics (SPARQL)",
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
      name: "get-sparql-stream",
      description:
        "Gets a stream for an RDF graph. With the Neptune Streams feature, you can generate a complete sequence of change-log entries that record every change made to your graph data as it happens. GetSparqlStream lets you collect these change-log entries for an RDF graph. The Neptune streams feature needs to be enabled on your Neptune DBcluster. To enable streams, set the neptune_streams DB cluster parameter to 1. See Capturing graph changes in real time using Neptune streams. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetStreamRecords IAM action in that cluster. Note that the neptune-db:QueryLanguage:Sparql IAM condition key can be used in the policy document to restrict the use of SPARQL queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--limit",
          description:
            "Specifies the maximum number of records to return. There is also a size limit of 10 MB on the response that can't be modified and that takes precedence over the number of records specified in the limit parameter. The response does include a threshold-breaching record if the 10 MB limit was reached. The range for limit is 1 to 100,000, with a default of 10",
          args: {
            name: "long",
          },
        },
        {
          name: "--iterator-type",
          description:
            "Can be one of:    AT_SEQUENCE_NUMBER \u00a0 \u2013 \u00a0 Indicates that reading should start from the event sequence number specified jointly by the commitNum and opNum parameters.    AFTER_SEQUENCE_NUMBER \u00a0 \u2013 \u00a0 Indicates that reading should start right after the event sequence number specified jointly by the commitNum and opNum parameters.    TRIM_HORIZON \u00a0 \u2013 \u00a0 Indicates that reading should start at the last untrimmed record in the system, which is the oldest unexpired (not yet deleted) record in the change-log stream.    LATEST \u00a0 \u2013 \u00a0 Indicates that reading should start at the most recent record in the system, which is the latest unexpired (not yet deleted) record in the change-log stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-num",
          description:
            "The commit number of the starting record to read from the change-log stream. This parameter is required when iteratorType isAT_SEQUENCE_NUMBER or AFTER_SEQUENCE_NUMBER, and ignored when iteratorType is TRIM_HORIZON or LATEST",
          args: {
            name: "long",
          },
        },
        {
          name: "--op-num",
          description:
            "The operation sequence number within the specified commit to start reading from in the change-log stream data. The default is 1",
          args: {
            name: "long",
          },
        },
        {
          name: "--encoding",
          description:
            "If set to TRUE, Neptune compresses the response using gzip encoding",
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
      name: "list-gremlin-queries",
      description:
        "Lists active Gremlin queries. See Gremlin query status API for details about the output. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:Gremlin IAM condition key can be used in the policy document to restrict the use of Gremlin queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--include-waiting",
          description:
            "If set to TRUE, the list returned includes waiting queries. The default is FALSE;",
        },
        {
          name: "--no-include-waiting",
          description:
            "If set to TRUE, the list returned includes waiting queries. The default is FALSE;",
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
      name: "list-loader-jobs",
      description:
        "Retrieves a list of the loadIds for all active loader jobs. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListLoaderJobs IAM action in that cluster",
      options: [
        {
          name: "--limit",
          description:
            "The number of load IDs to list. Must be a positive integer greater than zero and not more than 100 (which is the default)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-queued-loads",
          description:
            "An optional parameter that can be used to exclude the load IDs of queued load requests when requesting a list of load IDs by setting the parameter to FALSE. The default value is TRUE",
        },
        {
          name: "--no-include-queued-loads",
          description:
            "An optional parameter that can be used to exclude the load IDs of queued load requests when requesting a list of load IDs by setting the parameter to FALSE. The default value is TRUE",
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
      name: "list-ml-data-processing-jobs",
      description:
        "Returns a list of Neptune ML data processing jobs. See Listing active data-processing jobs using the Neptune ML dataprocessing command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLDataProcessingJobs IAM action in that cluster",
      options: [
        {
          name: "--max-items",
          description:
            "The maximum number of items to return (from 1 to 1024; the default is 10)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "list-ml-endpoints",
      description:
        "Lists existing inference endpoints. See Managing inference endpoints using the endpoints command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLEndpoints IAM action in that cluster",
      options: [
        {
          name: "--max-items",
          description:
            "The maximum number of items to return (from 1 to 1024; the default is 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "list-ml-model-training-jobs",
      description:
        "Lists Neptune ML model-training jobs. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:neptune-db:ListMLModelTrainingJobs IAM action in that cluster",
      options: [
        {
          name: "--max-items",
          description:
            "The maximum number of items to return (from 1 to 1024; the default is 10)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "list-ml-model-transform-jobs",
      description:
        "Returns a list of model transform job IDs. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListMLModelTransformJobs IAM action in that cluster",
      options: [
        {
          name: "--max-items",
          description:
            "The maximum number of items to return (from 1 to 1024; the default is 10)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
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
      name: "list-open-cypher-queries",
      description:
        "Lists active openCypher queries. See Neptune openCypher status endpoint for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:GetQueryStatus IAM action in that cluster. Note that the neptune-db:QueryLanguage:OpenCypher IAM condition key can be used in the policy document to restrict the use of openCypher queries (see Condition keys available in Neptune IAM data-access policy statements)",
      options: [
        {
          name: "--include-waiting",
          description:
            "When set to TRUE and other parameters are not present, causes status information to be returned for waiting queries as well as for running queries",
        },
        {
          name: "--no-include-waiting",
          description:
            "When set to TRUE and other parameters are not present, causes status information to be returned for waiting queries as well as for running queries",
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
      name: "manage-propertygraph-statistics",
      description:
        "Manages the generation and use of property graph statistics. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ManageStatistics IAM action in that cluster",
      options: [
        {
          name: "--mode",
          description:
            "The statistics generation mode. One of: DISABLE_AUTOCOMPUTE, ENABLE_AUTOCOMPUTE, or REFRESH, the last of which manually triggers DFE statistics generation",
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
      name: "manage-sparql-statistics",
      description:
        "Manages the generation and use of RDF graph statistics. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ManageStatistics IAM action in that cluster",
      options: [
        {
          name: "--mode",
          description:
            "The statistics generation mode. One of: DISABLE_AUTOCOMPUTE, ENABLE_AUTOCOMPUTE, or REFRESH, the last of which manually triggers DFE statistics generation",
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
      name: "start-loader-job",
      description:
        "Starts a Neptune bulk loader job to load data from an Amazon S3 bucket into a Neptune DB instance. See Using the Amazon Neptune Bulk Loader to Ingest Data. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartLoaderJob IAM action in that cluster",
      options: [
        {
          name: "--source",
          description:
            "The source parameter accepts an S3 URI that identifies a single file, multiple files, a folder, or multiple folders. Neptune loads every data file in any folder that is specified. The URI can be in any of the following formats.    s3://(bucket_name)/(object-key-name)     https://s3.amazonaws.com/(bucket_name)/(object-key-name)     https://s3.us-east-1.amazonaws.com/(bucket_name)/(object-key-name)    The object-key-name element of the URI is equivalent to the prefix parameter in an S3 ListObjects API call. It identifies all the objects in the specified S3 bucket whose names begin with that prefix. That can be a single file or folder, or multiple files and/or folders. The specified folder or folders can contain multiple vertex files and multiple edge files",
          args: {
            name: "string",
          },
        },
        {
          name: "--format",
          description:
            "The format of the data. For more information about data formats for the Neptune Loader command, see Load Data Formats.  Allowed values      csv  for the Gremlin CSV data format.     opencypher  for the openCypher CSV data format.     ntriples  for the N-Triples RDF data format.     nquads  for the N-Quads RDF data format.     rdfxml  for the RDF\\XML RDF data format.     turtle  for the Turtle RDF data format",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-region",
          description:
            "The Amazon region of the S3 bucket. This must match the Amazon Region of the DB cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) for an IAM role to be assumed by the Neptune DB instance for access to the S3 bucket. The IAM role ARN provided here should be attached to the DB cluster (see Adding the IAM Role to an Amazon Neptune Cluster",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The load job mode.  Allowed values: RESUME, NEW, AUTO.  Default value: AUTO.       RESUME \u00a0 \u2013 \u00a0 In RESUME mode, the loader looks for a previous load from this source, and if it finds one, resumes that load job. If no previous load job is found, the loader stops. The loader avoids reloading files that were successfully loaded in a previous job. It only tries to process failed files. If you dropped previously loaded data from your Neptune cluster, that data is not reloaded in this mode. If a previous load job loaded all files from the same source successfully, nothing is reloaded, and the loader returns success.    NEW \u00a0 \u2013 \u00a0 In NEW mode, the creates a new load request regardless of any previous loads. You can use this mode to reload all the data from a source after dropping previously loaded data from your Neptune cluster, or to load new data available at the same source.    AUTO \u00a0 \u2013 \u00a0 In AUTO mode, the loader looks for a previous load job from the same source, and if it finds one, resumes that job, just as in RESUME mode. If the loader doesn't find a previous load job from the same source, it loads all data from the source, just as in NEW mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--fail-on-error",
          description:
            'FailOnError  \u00a0 \u2013 \u00a0 A flag to toggle a complete stop on an error.  Allowed values: "TRUE", "FALSE".  Default value: "TRUE". When this parameter is set to "FALSE", the loader tries to load all the data in the location specified, skipping any entries with errors. When this parameter is set to "TRUE", the loader stops as soon as it encounters an error. Data loaded up to that point persists',
        },
        {
          name: "--no-fail-on-error",
          description:
            'FailOnError  \u00a0 \u2013 \u00a0 A flag to toggle a complete stop on an error.  Allowed values: "TRUE", "FALSE".  Default value: "TRUE". When this parameter is set to "FALSE", the loader tries to load all the data in the location specified, skipping any entries with errors. When this parameter is set to "TRUE", the loader stops as soon as it encounters an error. Data loaded up to that point persists',
        },
        {
          name: "--parallelism",
          description:
            "The optional parallelism parameter can be set to reduce the number of threads used by the bulk load process.  Allowed values:    LOW \u2013 \u00a0 The number of threads used is the number of available vCPUs divided by 8.    MEDIUM \u2013 \u00a0 The number of threads used is the number of available vCPUs divided by 2.    HIGH \u2013 \u00a0 The number of threads used is the same as the number of available vCPUs.    OVERSUBSCRIBE \u2013 \u00a0 The number of threads used is the number of available vCPUs multiplied by 2. If this value is used, the bulk loader takes up all available resources. This does not mean, however, that the OVERSUBSCRIBE setting results in 100% CPU utilization. Because the load operation is I/O bound, the highest CPU utilization to expect is in the 60% to 70% range.    Default value: HIGH  The parallelism setting can sometimes result in a deadlock between threads when loading openCypher data. When this happens, Neptune returns the LOAD_DATA_DEADLOCK error. You can generally fix the issue by setting parallelism to a lower setting and retrying the load command",
          args: {
            name: "string",
          },
        },
        {
          name: "--parser-configuration",
          description:
            'ParserConfiguration  \u00a0 \u2013 \u00a0 An optional object with additional parser configuration values. Each of the child parameters is also optional:        namedGraphUri  \u00a0 \u2013 \u00a0 The default graph for all RDF formats when no graph is specified (for non-quads formats and NQUAD entries with no graph). The default is https://aws.amazon.com/neptune/vocab/v01/DefaultNamedGraph.     baseUri  \u00a0 \u2013 \u00a0 The base URI for RDF/XML and Turtle formats. The default is https://aws.amazon.com/neptune/default.     allowEmptyStrings  \u00a0 \u2013 \u00a0 Gremlin users need to be able to pass empty string values("") as node and edge properties when loading CSV data. If allowEmptyStrings is set to false (the default), such empty strings are treated as nulls and are not loaded. If allowEmptyStrings is set to true, the loader treats empty strings as valid property values and loads them accordingly',
          args: {
            name: "map",
          },
        },
        {
          name: "--update-single-cardinality-properties",
          description:
            'UpdateSingleCardinalityProperties is an optional parameter that controls how the bulk loader treats a new value for single-cardinality vertex or edge properties. This is not supported for loading openCypher data.  Allowed values: "TRUE", "FALSE".  Default value: "FALSE". By default, or when updateSingleCardinalityProperties is explicitly set to "FALSE", the loader treats a new value as an error, because it violates single cardinality. When updateSingleCardinalityProperties is set to "TRUE", on the other hand, the bulk loader replaces the existing value with the new one. If multiple edge or single-cardinality vertex property values are provided in the source file(s) being loaded, the final value at the end of the bulk load could be any one of those new values. The loader only guarantees that the existing value has been replaced by one of the new ones',
        },
        {
          name: "--no-update-single-cardinality-properties",
          description:
            'UpdateSingleCardinalityProperties is an optional parameter that controls how the bulk loader treats a new value for single-cardinality vertex or edge properties. This is not supported for loading openCypher data.  Allowed values: "TRUE", "FALSE".  Default value: "FALSE". By default, or when updateSingleCardinalityProperties is explicitly set to "FALSE", the loader treats a new value as an error, because it violates single cardinality. When updateSingleCardinalityProperties is set to "TRUE", on the other hand, the bulk loader replaces the existing value with the new one. If multiple edge or single-cardinality vertex property values are provided in the source file(s) being loaded, the final value at the end of the bulk load could be any one of those new values. The loader only guarantees that the existing value has been replaced by one of the new ones',
        },
        {
          name: "--queue-request",
          description:
            'This is an optional flag parameter that indicates whether the load request can be queued up or not.  You don\'t have to wait for one load job to complete before issuing the next one, because Neptune can queue up as many as 64 jobs at a time, provided that their queueRequest parameters are all set to "TRUE". The queue order of the jobs will be first-in-first-out (FIFO). If the queueRequest parameter is omitted or set to "FALSE", the load request will fail if another load job is already running.  Allowed values: "TRUE", "FALSE".  Default value: "FALSE"',
        },
        {
          name: "--no-queue-request",
          description:
            'This is an optional flag parameter that indicates whether the load request can be queued up or not.  You don\'t have to wait for one load job to complete before issuing the next one, because Neptune can queue up as many as 64 jobs at a time, provided that their queueRequest parameters are all set to "TRUE". The queue order of the jobs will be first-in-first-out (FIFO). If the queueRequest parameter is omitted or set to "FALSE", the load request will fail if another load job is already running.  Allowed values: "TRUE", "FALSE".  Default value: "FALSE"',
        },
        {
          name: "--dependencies",
          description:
            'This is an optional parameter that can make a queued load request contingent on the successful completion of one or more previous jobs in the queue. Neptune can queue up as many as 64 load requests at a time, if their queueRequest parameters are set to "TRUE". The dependencies parameter lets you make execution of such a queued request dependent on the successful completion of one or more specified previous requests in the queue. For example, if load Job-A and Job-B are independent of each other, but load Job-C needs Job-A and Job-B to be finished before it begins, proceed as follows:   Submit load-job-A and load-job-B one after another in any order, and save their load-ids.   Submit load-job-C with the load-ids of the two jobs in its dependencies field:   Because of the dependencies parameter, the bulk loader will not start Job-C until Job-A and Job-B have completed successfully. If either one of them fails, Job-C will not be executed, and its status will be set to LOAD_FAILED_BECAUSE_DEPENDENCY_NOT_SATISFIED. You can set up multiple levels of dependency in this way, so that the failure of one job will cause all requests that are directly or indirectly dependent on it to be cancelled',
          args: {
            name: "list",
          },
        },
        {
          name: "--user-provided-edge-ids",
          description:
            "This parameter is required only when loading openCypher data that contains relationship IDs. It must be included and set to True when openCypher relationship IDs are explicitly provided in the load data (recommended). When userProvidedEdgeIds is absent or set to True, an :ID column must be present in every relationship file in the load. When userProvidedEdgeIds is present and set to False, relationship files in the load must not contain an :ID column. Instead, the Neptune loader automatically generates an ID for each relationship. It's useful to provide relationship IDs explicitly so that the loader can resume loading after error in the CSV data have been fixed, without having to reload any relationships that have already been loaded. If relationship IDs have not been explicitly assigned, the loader cannot resume a failed load if any relationship file has had to be corrected, and must instead reload all the relationships",
        },
        {
          name: "--no-user-provided-edge-ids",
          description:
            "This parameter is required only when loading openCypher data that contains relationship IDs. It must be included and set to True when openCypher relationship IDs are explicitly provided in the load data (recommended). When userProvidedEdgeIds is absent or set to True, an :ID column must be present in every relationship file in the load. When userProvidedEdgeIds is present and set to False, relationship files in the load must not contain an :ID column. Instead, the Neptune loader automatically generates an ID for each relationship. It's useful to provide relationship IDs explicitly so that the loader can resume loading after error in the CSV data have been fixed, without having to reload any relationships that have already been loaded. If relationship IDs have not been explicitly assigned, the loader cannot resume a failed load if any relationship file has had to be corrected, and must instead reload all the relationships",
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
      name: "start-ml-data-processing-job",
      description:
        "Creates a new Neptune ML data processing job for processing the graph data exported from Neptune for training. See The dataprocessing command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartMLModelDataProcessingJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "A unique identifier for the new job. The default is an autogenerated UUID",
          args: {
            name: "string",
          },
        },
        {
          name: "--previous-data-processing-job-id",
          description:
            "The job ID of a completed data processing job run on an earlier version of the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-data-s3-location",
          description:
            "The URI of the Amazon S3 location where you want SageMaker to download the data needed to run the data processing job",
          args: {
            name: "string",
          },
        },
        {
          name: "--processed-data-s3-location",
          description:
            "The URI of the Amazon S3 location where you want SageMaker to save the results of a data processing job",
          args: {
            name: "string",
          },
        },
        {
          name: "--sagemaker-iam-role-arn",
          description:
            "The ARN of an IAM role for SageMaker execution. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume to perform tasks on your behalf. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--processing-instance-type",
          description:
            "The type of ML instance used during data processing. Its memory should be large enough to hold the processed dataset. The default is the smallest ml.r5 type whose memory is ten times larger than the size of the exported graph data on disk",
          args: {
            name: "string",
          },
        },
        {
          name: "--processing-instance-volume-size-in-gb",
          description:
            "The disk volume size of the processing instance. Both input data and processed data are stored on disk, so the volume size must be large enough to hold both data sets. The default is 0. If not specified or 0, Neptune ML chooses the volume size automatically based on the data size",
          args: {
            name: "integer",
          },
        },
        {
          name: "--processing-time-out-in-seconds",
          description:
            "Timeout in seconds for the data processing job. The default is 86,400 (1 day)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--model-type",
          description:
            "One of the two model types that Neptune ML currently supports: heterogeneous graph models (heterogeneous), and knowledge graph (kge). The default is none. If not specified, Neptune ML chooses the model type automatically based on the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--config-file-name",
          description:
            "A data specification file that describes how to load the exported graph data for training. The file is automatically generated by the Neptune export toolkit. The default is training-data-configuration.json",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnets",
          description:
            "The IDs of the subnets in the Neptune VPC. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The VPC security group IDs. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--volume-encryption-kms-key",
          description:
            "The Amazon Key Management Service (Amazon KMS) key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instances that run the training job. The default is None",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-output-encryption-kms-key",
          description:
            "The Amazon Key Management Service (Amazon KMS) key that SageMaker uses to encrypt the output of the processing job. The default is none",
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
      name: "start-ml-model-training-job",
      description:
        "Creates a new Neptune ML model training job. See Model training using the modeltraining command. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartMLModelTrainingJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "A unique identifier for the new job. The default is An autogenerated UUID",
          args: {
            name: "string",
          },
        },
        {
          name: "--previous-model-training-job-id",
          description:
            "The job ID of a completed model-training job that you want to update incrementally based on updated data",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-processing-job-id",
          description:
            "The job ID of the completed data-processing job that has created the data that the training will work with",
          args: {
            name: "string",
          },
        },
        {
          name: "--train-model-s3-location",
          description:
            "The location in Amazon S3 where the model artifacts are to be stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--sagemaker-iam-role-arn",
          description:
            "The ARN of an IAM role for SageMaker execution.This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-processing-instance-type",
          description:
            "The type of ML instance used in preparing and managing training of ML models. This is a CPU instance chosen based on memory requirements for processing the training data and model",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-instance-type",
          description:
            "The type of ML instance used for model training. All Neptune ML models support CPU, GPU, and multiGPU training. The default is ml.p3.2xlarge. Choosing the right instance type for training depends on the task type, graph size, and your budget",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-instance-volume-size-in-gb",
          description:
            "The disk volume size of the training instance. Both input data and the output model are stored on disk, so the volume size must be large enough to hold both data sets. The default is 0. If not specified or 0, Neptune ML selects a disk volume size based on the recommendation generated in the data processing step",
          args: {
            name: "integer",
          },
        },
        {
          name: "--training-time-out-in-seconds",
          description:
            "Timeout in seconds for the training job. The default is 86,400 (1 day)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-hpo-number-of-training-jobs",
          description:
            "Maximum total number of training jobs to start for the hyperparameter tuning job. The default is 2. Neptune ML automatically tunes the hyperparameters of the machine learning model. To obtain a model that performs well, use at least 10 jobs (in other words, set maxHPONumberOfTrainingJobs to 10). In general, the more tuning runs, the better the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-hpo-parallel-training-jobs",
          description:
            "Maximum number of parallel training jobs to start for the hyperparameter tuning job. The default is 2. The number of parallel jobs you can run is limited by the available resources on your training instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnets",
          description:
            "The IDs of the subnets in the Neptune VPC. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The VPC security group IDs. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--volume-encryption-kms-key",
          description:
            "The Amazon Key Management Service (KMS) key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instances that run the training job. The default is None",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-output-encryption-kms-key",
          description:
            "The Amazon Key Management Service (KMS) key that SageMaker uses to encrypt the output of the processing job. The default is none",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-managed-spot-training",
          description:
            "Optimizes the cost of training machine-learning models by using Amazon Elastic Compute Cloud spot instances. The default is False",
        },
        {
          name: "--no-enable-managed-spot-training",
          description:
            "Optimizes the cost of training machine-learning models by using Amazon Elastic Compute Cloud spot instances. The default is False",
        },
        {
          name: "--custom-model-training-parameters",
          description:
            "The configuration for custom model training. This is a JSON object",
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
      name: "start-ml-model-transform-job",
      description:
        "Creates a new model transform job. See Use a trained model to generate new model artifacts. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartMLModelTransformJob IAM action in that cluster",
      options: [
        {
          name: "--id",
          description:
            "A unique identifier for the new job. The default is an autogenerated UUID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-processing-job-id",
          description:
            "The job ID of a completed data-processing job. You must include either dataProcessingJobId and a mlModelTrainingJobId, or a trainingJobName",
          args: {
            name: "string",
          },
        },
        {
          name: "--ml-model-training-job-id",
          description:
            "The job ID of a completed model-training job. You must include either dataProcessingJobId and a mlModelTrainingJobId, or a trainingJobName",
          args: {
            name: "string",
          },
        },
        {
          name: "--training-job-name",
          description:
            "The name of a completed SageMaker training job. You must include either dataProcessingJobId and a mlModelTrainingJobId, or a trainingJobName",
          args: {
            name: "string",
          },
        },
        {
          name: "--model-transform-output-s3-location",
          description:
            "The location in Amazon S3 where the model artifacts are to be stored",
          args: {
            name: "string",
          },
        },
        {
          name: "--sagemaker-iam-role-arn",
          description:
            "The ARN of an IAM role for SageMaker execution. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--neptune-iam-role-arn",
          description:
            "The ARN of an IAM role that provides Neptune access to SageMaker and Amazon S3 resources. This must be listed in your DB cluster parameter group or an error will occur",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-model-transform-parameters",
          description:
            "Configuration information for a model transform using a custom model. The customModelTransformParameters object contains the following fields, which must have values compatible with the saved model parameters from the training job:",
          args: {
            name: "structure",
          },
        },
        {
          name: "--base-processing-instance-type",
          description:
            "The type of ML instance used in preparing and managing training of ML models. This is an ML compute instance chosen based on memory requirements for processing the training data and model",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-processing-instance-volume-size-in-gb",
          description:
            "The disk volume size of the training instance in gigabytes. The default is 0. Both input data and the output model are stored on disk, so the volume size must be large enough to hold both data sets. If not specified or 0, Neptune ML selects a disk volume size based on the recommendation generated in the data processing step",
          args: {
            name: "integer",
          },
        },
        {
          name: "--subnets",
          description:
            "The IDs of the subnets in the Neptune VPC. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "The VPC security group IDs. The default is None",
          args: {
            name: "list",
          },
        },
        {
          name: "--volume-encryption-kms-key",
          description:
            "The Amazon Key Management Service (KMS) key that SageMaker uses to encrypt data on the storage volume attached to the ML compute instances that run the training job. The default is None",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-output-encryption-kms-key",
          description:
            "The Amazon Key Management Service (KMS) key that SageMaker uses to encrypt the output of the processing job. The default is none",
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
