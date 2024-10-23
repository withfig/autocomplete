const completionSpec: Fig.Spec = {
  name: "dms",
  description:
    "Database Migration Service Database Migration Service (DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL. For more information about DMS, see What Is Database Migration Service? in the Database Migration Service User Guide",
  subcommands: [
    {
      name: "add-tags-to-resource",
      description:
        "Adds metadata tags to an DMS resource, including replication instance, endpoint, subnet group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see  Tag  data type description",
      options: [
        {
          name: "--resource-arn",
          description:
            "Identifies the DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DMS, you can tag a replication instance, an endpoint, or a replication task",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the resource",
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
      name: "apply-pending-maintenance-action",
      description:
        "Applies a pending maintenance action to a resource (for example, to a replication instance)",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action applies to",
          args: {
            name: "string",
          },
        },
        {
          name: "--apply-action",
          description:
            "The pending maintenance action to apply to this resource. Valid values: os-upgrade, system-update, db-upgrade",
          args: {
            name: "string",
          },
        },
        {
          name: "--opt-in-type",
          description:
            "A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type immediate. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests",
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
      name: "batch-start-recommendations",
      description:
        "Starts the analysis of up to 20 source databases to recommend target engines for each source database. This is a batch version of StartRecommendations. The result of analysis of each source database is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200",
      options: [
        {
          name: "--data",
          description:
            "Provides information about source databases to analyze. After this analysis, Fleet Advisor recommends target engines for each source database",
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
      name: "cancel-replication-task-assessment-run",
      description:
        "Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running",
      options: [
        {
          name: "--replication-task-assessment-run-arn",
          description:
            "Amazon Resource Name (ARN) of the premigration assessment run to be canceled",
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
      name: "create-data-migration",
      description: "Creates a data migration using the provided settings",
      options: [
        {
          name: "--data-migration-name",
          description:
            "A user-friendly name for the data migration. Data migration names have the following constraints:   Must begin with a letter, and can only contain ASCII letters, digits, and hyphens.    Can't end with a hyphen or contain two consecutive hyphens.   Length must be from 1 to 255 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-project-identifier",
          description: "An identifier for the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-migration-type",
          description:
            "Specifies if the data migration is full-load only, change data capture (CDC) only, or full-load and CDC",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the service access role that you want to use to create the data migration",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-cloudwatch-logs",
          description:
            "Specifies whether to enable CloudWatch logs for the data migration",
        },
        {
          name: "--no-enable-cloudwatch-logs",
          description:
            "Specifies whether to enable CloudWatch logs for the data migration",
        },
        {
          name: "--source-data-settings",
          description: "Specifies information about the source data provider",
          args: {
            name: "list",
          },
        },
        {
          name: "--number-of-jobs",
          description:
            "The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the data migration",
          args: {
            name: "list",
          },
        },
        {
          name: "--selection-rules",
          description:
            "An optional JSON string specifying what tables, views, and schemas to include or exclude from the migration",
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
      name: "create-data-provider",
      description:
        "Creates a data provider using the provided settings. A data provider stores a data store type and location information about your database",
      options: [
        {
          name: "--data-provider-name",
          description: "A user-friendly name for the data provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description of the data provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            'The type of database engine for the data provider. Valid values include "aurora", "aurora-postgresql", "mysql", "oracle", "postgres", "sqlserver", redshift, mariadb, mongodb, and docdb. A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition',
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description: "The settings in JSON format for a data provider",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the data provider",
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
      name: "create-endpoint",
      description:
        "Creates an endpoint using the provided settings.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the CreateEndpoint API call. Specifying DatabaseName when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task",
      options: [
        {
          name: "--endpoint-identifier",
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint. Valid values are source and target",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-name",
          description:
            'The type of engine for the endpoint. Valid values, depending on the EndpointType value, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "opensearch", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "docdb", "sqlserver", "neptune", "babelfish", redshift-serverless, aurora-serverless, aurora-postgresql-serverless, gcp-mysql, azure-sql-managed-instance, redis, dms-transfer',
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name to be used to log in to the endpoint database",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The password to be used to log in to the endpoint database",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-name",
          description:
            "The name of the server where the endpoint database resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "The port used by the endpoint database",
          args: {
            name: "integer",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName. To migrate to a specific database, use this setting and targetDbType",
          args: {
            name: "string",
          },
        },
        {
          name: "--extra-connection-attributes",
          description:
            "Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see Working with DMS Endpoints in the Database Migration Service User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "An KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the endpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--certificate-arn",
          description: "The Amazon Resource Name (ARN) for the certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssl-mode",
          description:
            "The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. The role must allow the iam:PassRole action",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-table-definition",
          description: "The external table definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--dynamo-db-settings",
          description:
            "Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-settings",
          description:
            "Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dms-transfer-settings",
          description:
            'The settings in JSON format for the DMS transfer type of source endpoint.  Possible settings include the following:    ServiceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action.    BucketName - The name of the S3 bucket to use.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", }',
          args: {
            name: "structure",
          },
        },
        {
          name: "--mongo-db-settings",
          description:
            "Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see Endpoint configuration settings when using MongoDB as a source for Database Migration Service in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kinesis-settings",
          description:
            "Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using object mapping to migrate data to a Kinesis data stream in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kafka-settings",
          description:
            "Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using object mapping to migrate data to a Kafka topic in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elasticsearch-settings",
          description:
            "Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using OpenSearch as a Target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--neptune-settings",
          description:
            "Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redshift-settings",
          description:
            "Provides information that defines an Amazon Redshift endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--postgre-sql-settings",
          description:
            "Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for DMS and  Extra connection attributes when using PostgreSQL as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--my-sql-settings",
          description:
            "Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for DMS and Extra connection attributes when using a MySQL-compatible database as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--oracle-settings",
          description:
            "Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for DMS and  Extra connection attributes when using Oracle as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sybase-settings",
          description:
            "Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for DMS and Extra connection attributes when using SAP ASE as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--microsoft-sql-server-settings",
          description:
            "Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for DMS and  Extra connection attributes when using SQL Server as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ibm-db2-settings",
          description:
            "Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--doc-db-settings",
          description:
            "Provides information that defines a DocumentDB endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redis-settings",
          description: "Settings in JSON format for the target Redis endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--gcp-my-sql-settings",
          description:
            "Settings in JSON format for the source GCP MySQL endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timestream-settings",
          description:
            "Settings in JSON format for the target Amazon Timestream endpoint",
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
      name: "create-event-subscription",
      description:
        "Creates an DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all DMS sources belonging to your customer account. For more information about DMS events, see Working with Events and Notifications in the Database Migration Service User Guide",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the DMS event notification subscription. This name must be less than 255 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a source type that you want to subscribe to. For more information, see Working with Events and Notifications in the Database Migration Service User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-ids",
          description:
            "A list of identifiers for which DMS provides notification events. If you don't specify a value, notifications are provided for all sources. If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it",
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the event subscription",
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
      name: "create-fleet-advisor-collector",
      description:
        "Creates a Fleet Advisor collector using the specified parameters",
      options: [
        {
          name: "--collector-name",
          description:
            "The name of your Fleet Advisor collector (for example, sample-collector)",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A summary description of your Fleet Advisor collector",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-access-role-arn",
          description:
            "The IAM role that grants permissions to access the specified Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description:
            "The Amazon S3 bucket that the Fleet Advisor collector uses to store inventory metadata",
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
      name: "create-instance-profile",
      description:
        "Creates the instance profile using the specified parameters",
      options: [
        {
          name: "--availability-zone",
          description:
            "The Availability Zone where the instance profile will be created. The default value is a random, system-chosen Availability Zone in the Amazon Web Services Region where your data provider is created, for examplem us-east-1d",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true",
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the instance profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--network-type",
          description:
            "Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-profile-name",
          description: "A user-friendly name for the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description of the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-group-identifier",
          description: "A subnet group to associate with the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-groups",
          description:
            "Specifies the VPC security group names to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile",
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
      name: "create-migration-project",
      description:
        "Creates the migration project using the specified parameters. You can run this action only after you create an instance profile and data providers using CreateInstanceProfile and CreateDataProvider",
      options: [
        {
          name: "--migration-project-name",
          description: "A user-friendly name for the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-data-provider-descriptors",
          description:
            "Information about the source data provider, including the name, ARN, and Secrets Manager parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-data-provider-descriptors",
          description:
            "Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-identifier",
          description:
            "The identifier of the associated instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--transformation-rules",
          description:
            "The settings in JSON format for migration rules. Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description of the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the migration project",
          args: {
            name: "list",
          },
        },
        {
          name: "--schema-conversion-application-attributes",
          description:
            "The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN",
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
      name: "create-replication-config",
      description:
        "Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication",
      options: [
        {
          name: "--replication-config-identifier",
          description:
            "A unique identifier that you want to use to create a ReplicationConfigArn that is returned as part of the output from this action. You can then pass this output ReplicationConfigArn as the value of the ReplicationConfigArn option for other actions to identify both DMS Serverless replications and replication configurations that you want those actions to operate on. For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to identify the specific replication and replication configuration to operate on",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the source endpoint for this DMS Serverless replication configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-config",
          description:
            "Configuration parameters for provisioning an DMS Serverless replication",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replication-type",
          description:
            'The type of DMS Serverless replication to provision using this replication configuration. Possible values:    "full-load"     "cdc"     "full-load-and-cdc"',
          args: {
            name: "string",
          },
        },
        {
          name: "--table-mappings",
          description:
            "JSON table mappings for DMS Serverless replications that are provisioned using this replication configuration. For more information, see  Specifying table selection and transformations rules using JSON",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-settings",
          description:
            "Optional JSON settings for DMS Serverless replications that are provisioned using this replication configuration. For example, see  Change processing tuning settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--supplemental-settings",
          description:
            "Optional JSON settings for specifying supplemental data. For more information, see  Specifying supplemental data for task settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see  Fine-grained access control using resource names and tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more optional tags associated with resources used by the DMS Serverless replication. For more information, see  Tagging resources in Database Migration Service",
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
      name: "create-replication-instance",
      description:
        "Creates the replication instance using the specified parameters. DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the CLI and DMS API. For information on the required permissions, see IAM Permissions Needed to Use DMS.  If you don't specify a version when creating a replication instance, DMS will create the instance using the default engine version. For information about the default engine version, see Release Notes",
      options: [
        {
          name: "--replication-instance-identifier",
          description:
            "The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to be initially allocated for the replication instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--replication-instance-class",
          description:
            'The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Choosing the right DMS replication instance; and, Selecting the best size for a replication instance',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region, for example: us-east-1d",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-subnet-group-identifier",
          description:
            "A subnet group to associate with the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  Default: A 30-minute window selected at random from an 8-hour block of time per Amazon Web Services Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true",
        },
        {
          name: "--engine-version",
          description:
            "The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available",
          args: {
            name: "string",
          },
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to true. Default: true",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to true. Default: true",
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the replication instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "An KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true",
        },
        {
          name: "--dns-name-servers",
          description:
            'A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"',
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported",
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
      name: "create-replication-subnet-group",
      description:
        "Creates a replication subnet group given a list of the subnet IDs in a VPC. The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a ReplicationSubnetGroupDoesNotCoverEnoughAZs exception. If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description:
            'The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, underscores, or hyphens. Must not be "default". Example: mySubnetgroup',
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-subnet-group-description",
          description: "The description for the subnet group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description:
            "Two or more subnet IDs to be assigned to the subnet group",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the subnet group",
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
      name: "create-replication-task",
      description: "Creates a replication task using the specified parameters",
      options: [
        {
          name: "--replication-task-identifier",
          description:
            "An identifier for the replication task. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-endpoint-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies the source endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-endpoint-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies the target endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of a replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-type",
          description:
            "The migration type. Valid values: full-load | cdc | full-load-and-cdc",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-mappings",
          description:
            "The table mappings for the task, in JSON format. For more information, see Using Table Mapping to Specify Task Settings in the Database Migration Service User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-task-settings",
          description:
            "Overall settings for the task, in JSON format. For more information, see Specifying Task Settings for Database Migration Service Tasks in the Database Migration Service User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS',
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time:2018-02-09T12:12:12\u201c",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the replication task",
          args: {
            name: "list",
          },
        },
        {
          name: "--task-data",
          description:
            "Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, DMS generates a default identifier value for the end of EndpointArn",
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
      name: "delete-certificate",
      description: "Deletes the specified certificate",
      options: [
        {
          name: "--certificate-arn",
          description: "The Amazon Resource Name (ARN) of the certificate",
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
      name: "delete-connection",
      description:
        "Deletes the connection between a replication instance and an endpoint",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
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
      name: "delete-data-migration",
      description: "Deletes the specified data migration",
      options: [
        {
          name: "--data-migration-identifier",
          description:
            "The identifier (name or ARN) of the data migration to delete",
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
      name: "delete-data-provider",
      description:
        "Deletes the specified data provider.  All migration projects associated with the data provider must be deleted or modified before you can delete the data provider",
      options: [
        {
          name: "--data-provider-identifier",
          description: "The identifier of the data provider to delete",
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
      name: "delete-endpoint",
      description:
        "Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
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
      name: "delete-event-subscription",
      description: "Deletes an DMS event subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the DMS event notification subscription to be deleted",
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
      name: "delete-fleet-advisor-collector",
      description: "Deletes the specified Fleet Advisor collector",
      options: [
        {
          name: "--collector-referenced-id",
          description:
            "The reference ID of the Fleet Advisor collector to delete",
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
      name: "delete-fleet-advisor-databases",
      description: "Deletes the specified Fleet Advisor collector databases",
      options: [
        {
          name: "--database-ids",
          description:
            "The IDs of the Fleet Advisor collector databases to delete",
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
      name: "delete-instance-profile",
      description:
        "Deletes the specified instance profile.  All migration projects associated with the instance profile must be deleted or modified before you can delete the instance profile",
      options: [
        {
          name: "--instance-profile-identifier",
          description: "The identifier of the instance profile to delete",
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
      name: "delete-migration-project",
      description:
        "Deletes the specified migration project.  The migration project must be closed before you can delete it",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The name or Amazon Resource Name (ARN) of the migration project to delete",
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
      name: "delete-replication-config",
      description:
        "Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state",
      options: [
        {
          name: "--replication-config-arn",
          description: "The replication config to delete",
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
      name: "delete-replication-instance",
      description:
        "Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance to be deleted",
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
      name: "delete-replication-subnet-group",
      description: "Deletes a subnet group",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description: "The subnet group name of the replication instance",
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
      name: "delete-replication-task",
      description: "Deletes the specified replication task",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task to be deleted",
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
      name: "delete-replication-task-assessment-run",
      description:
        "Deletes the record of a single premigration assessment run. This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket",
      options: [
        {
          name: "--replication-task-assessment-run-arn",
          description:
            "Amazon Resource Name (ARN) of the premigration assessment run to be deleted",
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
      name: "describe-account-attributes",
      description:
        "Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters",
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
      name: "describe-applicable-individual-assessments",
      description:
        "Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters. If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run. To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task. If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "Amazon Resource Name (ARN) of a migration task on which you want to base the default list of individual assessments",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-instance-arn",
          description:
            "ARN of a replication instance on which you want to base the default list of individual assessments",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-engine-name",
          description:
            "Name of a database engine that the specified replication instance supports as a source",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-engine-name",
          description:
            "Name of a database engine that the specified replication instance supports as a target",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-type",
          description:
            "Name of the migration type that each provided individual assessment must support",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "Maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-certificates",
      description: "Provides a description of the certificate",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the certificates described in the form of key-value pairs. Valid values are certificate-arn and certificate-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-connections",
      description:
        "Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint",
      options: [
        {
          name: "--filters",
          description:
            "The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-conversion-configuration",
      description:
        "Returns configuration parameters for a schema conversion project",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The name or Amazon Resource Name (ARN) for the schema conversion project to describe",
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
      name: "describe-data-migrations",
      description: "Returns information about data migrations",
      options: [
        {
          name: "--filters",
          description: "Filters applied to the data migrations",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
        },
        {
          name: "--no-without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
        },
        {
          name: "--without-statistics",
          description:
            "An option to set to avoid returning information about statistics. Use this to reduce overhead when statistics information is too large. To use this option, choose true; otherwise, choose false (the default)",
        },
        {
          name: "--no-without-statistics",
          description:
            "An option to set to avoid returning information about statistics. Use this to reduce overhead when statistics information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
      name: "describe-data-providers",
      description:
        "Returns a paginated list of data providers for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the data providers described in the form of key-value pairs. Valid filter names: data-provider-identifier",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
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
      name: "describe-endpoint-settings",
      description:
        "Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine",
      options: [
        {
          name: "--engine-name",
          description:
            "The database engine used for your source or target endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-endpoint-types",
      description: "Returns information about the type of endpoints available",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the endpoint types. Valid filter names: engine-name | endpoint-type",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-endpoints",
      description:
        "Returns information about the endpoints for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the endpoints. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-engine-versions",
      description:
        "Returns information about the replication instance versions used in the project",
      options: [
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-event-categories",
      description:
        "Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the Database Migration Service User Guide",
      options: [
        {
          name: "--source-type",
          description:
            "The type of DMS resource that generates events.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Filters applied to the event categories",
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
      name: "describe-event-subscriptions",
      description:
        "Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription",
      options: [
        {
          name: "--subscription-name",
          description: "The name of the DMS event subscription to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to event subscriptions. Valid filter names: event-subscription-arn | event-subscription-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-events",
      description:
        "Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see Working with Events and Notifications in the Database Migration Service User Guide",
      options: [
        {
          name: "--source-identifier",
          description: "The identifier of an event source",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of DMS resource that generates events. Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description: "The start time for the events to be listed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "The end time for the events to be listed",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--duration",
          description: "The duration of the events to be listed",
          args: {
            name: "integer",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for the source type that you've chosen",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to events. The only valid filter is replication-instance-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-extension-pack-associations",
      description:
        "Returns a paginated list of extension pack associations for the specified migration project. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The name or Amazon Resource Name (ARN) for the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the extension pack associations described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
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
      name: "describe-fleet-advisor-collectors",
      description:
        "Returns a list of the Fleet Advisor collectors in your account",
      options: [
        {
          name: "--filters",
          description:
            'If you specify any of the following filters, the output includes information for only those collectors that meet the filter criteria:    collector-referenced-id \u2013 The ID of the collector agent, for example d4610ac5-e323-4ad9-bc50-eaf7249dfe9d.    collector-name \u2013 The name of the collector agent.   An example is: describe-fleet-advisor-collectors --filter Name="collector-referenced-id",Values="d4610ac5-e323-4ad9-bc50-eaf7249dfe9d"',
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "Sets the maximum number of records returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-fleet-advisor-databases",
      description: "Returns a list of Fleet Advisor databases in your account",
      options: [
        {
          name: "--filters",
          description:
            'If you specify any of the following filters, the output includes information for only those databases that meet the filter criteria:     database-id \u2013 The ID of the database.    database-name \u2013 The name of the database.    database-engine \u2013 The name of the database engine.    server-ip-address \u2013 The IP address of the database server.    database-ip-address \u2013 The IP address of the database.    collector-name \u2013 The name of the associated Fleet Advisor collector.   An example is: describe-fleet-advisor-databases --filter Name="database-id",Values="45"',
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "Sets the maximum number of records returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-fleet-advisor-lsa-analysis",
      description:
        "Provides descriptions of large-scale assessment (LSA) analyses produced by your Fleet Advisor collectors",
      options: [
        {
          name: "--max-records",
          description:
            "Sets the maximum number of records returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-fleet-advisor-schema-object-summary",
      description:
        "Provides descriptions of the schemas discovered by your Fleet Advisor collectors",
      options: [
        {
          name: "--filters",
          description:
            'If you specify any of the following filters, the output includes information for only those schema objects that meet the filter criteria:    schema-id \u2013 The ID of the schema, for example d4610ac5-e323-4ad9-bc50-eaf7249dfe9d.   Example: describe-fleet-advisor-schema-object-summary --filter Name="schema-id",Values="50"',
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "Sets the maximum number of records returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-fleet-advisor-schemas",
      description:
        "Returns a list of schemas detected by Fleet Advisor Collectors in your account",
      options: [
        {
          name: "--filters",
          description:
            "If you specify any of the following filters, the output includes information for only those schemas that meet the filter criteria:    complexity \u2013 The schema's complexity, for example Simple.    database-id \u2013 The ID of the schema's database.    database-ip-address \u2013 The IP address of the schema's database.    database-name \u2013 The name of the schema's database.    database-engine \u2013 The name of the schema database's engine.    original-schema-name \u2013 The name of the schema's database's main schema.    schema-id \u2013 The ID of the schema, for example 15.    schema-name \u2013 The name of the schema.    server-ip-address \u2013 The IP address of the schema database's server.   An example is: describe-fleet-advisor-schemas --filter Name=\"schema-id\",Values=\"50\"",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "Sets the maximum number of records returned in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-instance-profiles",
      description:
        "Returns a paginated list of instance profiles for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the instance profiles described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
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
      name: "describe-metadata-model-assessments",
      description:
        "Returns a paginated list of metadata model assessments for your account in the current region",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The name or Amazon Resource Name (ARN) of the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the metadata model assessments described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
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
      name: "describe-metadata-model-conversions",
      description:
        "Returns a paginated list of metadata model conversions for a migration project",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the metadata model conversions described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
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
      name: "describe-metadata-model-exports-as-script",
      description: "Returns a paginated list of metadata model exports",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the metadata model exports described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
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
      name: "describe-metadata-model-exports-to-target",
      description: "Returns a paginated list of metadata model exports",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the metadata model exports described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
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
      name: "describe-metadata-model-imports",
      description: "Returns a paginated list of metadata model imports",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to the metadata model imports described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description: "A paginated list of metadata model imports",
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
      name: "describe-migration-projects",
      description:
        "Returns a paginated list of migration projects for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the migration projects described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, DMS includes a pagination token in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If Marker is returned by a previous response, there are more results available. The value of Marker is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token and keeping all other arguments unchanged",
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
      name: "describe-orderable-replication-instances",
      description:
        "Returns information about the replication instance types that can be created in the specified region",
      options: [
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-pending-maintenance-actions",
      description: "For internal use only",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
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
      name: "describe-recommendation-limitations",
      description:
        "Returns a paginated list of limitations for recommendations of target Amazon Web Services engines",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the limitations described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-recommendations",
      description:
        "Returns a paginated list of target engine recommendations for your source databases",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the target engine recommendations described in the form of key-value pairs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, Fleet Advisor includes a pagination token in the response so that you can retrieve the remaining results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "Specifies the unique pagination token that makes it possible to display the next page of results. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords. If NextToken is returned by a previous response, there are more results available. The value of NextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged",
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
      name: "describe-refresh-schemas-status",
      description: "Returns the status of the RefreshSchemas operation",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
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
      name: "describe-replication-configs",
      description:
        "Returns one or more existing DMS Serverless replication configurations as a list of structures",
      options: [
        {
          name: "--filters",
          description: "Filters applied to the replication configs",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-instance-task-logs",
      description:
        "Returns information about the task logs for the specified task",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-instances",
      description:
        "Returns information about replication instances for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-subnet-groups",
      description: "Returns information about the replication subnet groups",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication subnet groups. Valid filter names: replication-subnet-group-id",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-table-statistics",
      description:
        "Returns table and schema statistics for one or more provisioned replications that use a given DMS Serverless replication configuration",
      options: [
        {
          name: "--replication-config-arn",
          description: "The replication config to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Filters applied to the replication table statistics",
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
      name: "describe-replication-task-assessment-results",
      description:
        "Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results. For more information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the MaxRecords and Marker parameters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-task-assessment-runs",
      description:
        "Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.  This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the premigration assessment runs described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, replication-instance-arn, status",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-task-individual-assessments",
      description:
        "Returns a paginated list of individual assessments based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the individual assessments described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, status",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-replication-tasks",
      description:
        "Returns information about replication tasks for your account in the current region",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
        },
        {
          name: "--no-without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
      name: "describe-replications",
      description:
        "Provides details on replication progress by returning status information for one or more provisioned DMS Serverless replications",
      options: [
        {
          name: "--filters",
          description: "Filters applied to the replications",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-schemas",
      description:
        "Returns information about the schema for the specified endpoint",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      name: "describe-table-statistics",
      description:
        'Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table',
      options: [
        {
          name: "--replication-task-arn",
          description: "The Amazon Resource Name (ARN) of the replication task",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Filters applied to table statistics. Valid filter names: schema-name | table-name | table-state A combination of filters creates an AND condition where each record matches all specified filters",
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
      name: "export-metadata-model-assessment",
      description:
        "Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save your assessment report as a comma-separated value (CSV) or a PDF file",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to assess",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description:
            "The name of the assessment file to create in your Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-report-types",
          description: "The file format of the assessment file",
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
      name: "import-certificate",
      description: "Uploads the specified certificate",
      options: [
        {
          name: "--certificate-identifier",
          description:
            "A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-pem",
          description:
            "The contents of a .pem file, which contains an X.509 certificate",
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-wallet",
          description:
            'The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a .sso file using the fileb:// prefix. You can\'t provide the certificate inline. Example: filebase64("${path.root}/rds-ca-2019-root.sso")',
          args: {
            name: "blob",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with the certificate",
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
      name: "list-tags-for-resource",
      description:
        "Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to list tags for. This returns a list of keys (names of tags) created for the resource and their associated tag values",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn-list",
          description:
            "List of ARNs that identify multiple DMS resources that you want to list tags for. This returns a list of keys (tag names) and their associated tag values. It also returns each tag's associated ResourceArn value, which is the ARN of the resource for which each listed tag is created",
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
      name: "modify-conversion-configuration",
      description:
        "Modifies the specified schema conversion configuration using the provided parameters",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--conversion-configuration",
          description: "The new conversion configuration",
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
      name: "modify-data-migration",
      description: "Modifies an existing DMS data migration",
      options: [
        {
          name: "--data-migration-identifier",
          description:
            "The identifier (name or ARN) of the data migration to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-migration-name",
          description: "The new name for the data migration",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-cloudwatch-logs",
          description:
            "Whether to enable Cloudwatch logs for the data migration",
        },
        {
          name: "--no-enable-cloudwatch-logs",
          description:
            "Whether to enable Cloudwatch logs for the data migration",
        },
        {
          name: "--service-access-role-arn",
          description: "The new service access role ARN for the data migration",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-migration-type",
          description: "The new migration type for the data migration",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-data-settings",
          description:
            "The new information about the source data provider for the data migration",
          args: {
            name: "list",
          },
        },
        {
          name: "--number-of-jobs",
          description:
            "The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target",
          args: {
            name: "integer",
          },
        },
        {
          name: "--selection-rules",
          description:
            "A JSON-formatted string that defines what objects to include and exclude from the migration",
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
      name: "modify-data-provider",
      description:
        "Modifies the specified data provider using the provided settings.  You must remove the data provider from all migration projects before you can modify it",
      options: [
        {
          name: "--data-provider-identifier",
          description:
            "The identifier of the data provider. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-provider-name",
          description: "The name of the data provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description of the data provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine",
          description:
            'The type of database engine for the data provider. Valid values include "aurora", "aurora-postgresql", "mysql", "oracle", "postgres", "sqlserver", redshift, mariadb, mongodb, and docdb. A value of "aurora" represents Amazon Aurora MySQL-Compatible Edition',
          args: {
            name: "string",
          },
        },
        {
          name: "--exact-settings",
          description:
            "If this attribute is Y, the current call to ModifyDataProvider replaces all existing data provider settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyDataProvider does two things:    It replaces any data provider settings that already exist with new values, for settings with the same names.   It creates new data provider settings that you specify in the call, for settings with different names",
        },
        {
          name: "--no-exact-settings",
          description:
            "If this attribute is Y, the current call to ModifyDataProvider replaces all existing data provider settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyDataProvider does two things:    It replaces any data provider settings that already exist with new values, for settings with the same names.   It creates new data provider settings that you specify in the call, for settings with different names",
        },
        {
          name: "--settings",
          description: "The settings in JSON format for a data provider",
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
      name: "modify-endpoint",
      description:
        "Modifies the specified endpoint.  For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on the ModifyEndpoint API call. Specifying DatabaseName when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-identifier",
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint. Valid values are source and target",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-name",
          description:
            'The database engine name. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "db2-zos", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", "neptune", and "babelfish"',
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description:
            "The user name to be used to login to the endpoint database",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The password to be used to login to the endpoint database",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-name",
          description:
            "The name of the server where the endpoint database resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--port",
          description: "The port used by the endpoint database",
          args: {
            name: "integer",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName",
          args: {
            name: "string",
          },
        },
        {
          name: "--extra-connection-attributes",
          description:
            'Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument',
          args: {
            name: "string",
          },
        },
        {
          name: "--certificate-arn",
          description:
            "The Amazon Resource Name (ARN) of the certificate used for SSL connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--ssl-mode",
          description:
            "The SSL mode used to connect to the endpoint. The default value is none",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the IAM role you want to use to modify the endpoint. The role must allow the iam:PassRole action",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-table-definition",
          description: "The external table definition",
          args: {
            name: "string",
          },
        },
        {
          name: "--dynamo-db-settings",
          description:
            "Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-settings",
          description:
            "Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dms-transfer-settings",
          description:
            'The settings in JSON format for the DMS transfer type of source endpoint.  Attributes include the following:   serviceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the iam:PassRole action.   BucketName - The name of the S3 bucket to use.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string ,BucketName=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string"}',
          args: {
            name: "structure",
          },
        },
        {
          name: "--mongo-db-settings",
          description:
            "Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in Endpoint configuration settings when using MongoDB as a source for Database Migration Service in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kinesis-settings",
          description:
            "Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using object mapping to migrate data to a Kinesis data stream in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--kafka-settings",
          description:
            "Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using object mapping to migrate data to a Kafka topic in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elasticsearch-settings",
          description:
            "Settings in JSON format for the target OpenSearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using OpenSearch as a Target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--neptune-settings",
          description:
            "Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redshift-settings",
          description:
            "Provides information that defines an Amazon Redshift endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--postgre-sql-settings",
          description:
            "Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for DMS and  Extra connection attributes when using PostgreSQL as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--my-sql-settings",
          description:
            "Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for DMS and Extra connection attributes when using a MySQL-compatible database as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--oracle-settings",
          description:
            "Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for DMS and  Extra connection attributes when using Oracle as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sybase-settings",
          description:
            "Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for DMS and Extra connection attributes when using SAP ASE as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--microsoft-sql-server-settings",
          description:
            "Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for DMS and  Extra connection attributes when using SQL Server as a target for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ibm-db2-settings",
          description:
            "Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for DMS in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--doc-db-settings",
          description:
            "Settings in JSON format for the source DocumentDB endpoint. For more information about the available settings, see the configuration properties section in  Using DocumentDB as a Target for Database Migration Service  in the Database Migration Service User Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--redis-settings",
          description: "Settings in JSON format for the Redis target endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--exact-settings",
          description:
            'If this attribute is Y, the current call to ModifyEndpoint replaces all existing endpoint settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyEndpoint does two things:    It replaces any endpoint settings that already exist with new values, for settings with the same names.   It creates new endpoint settings that you specify in the call, for settings with different names.    For example, if you call create-endpoint ... --endpoint-settings \'{"a":1}\' ..., the endpoint has the following endpoint settings: \'{"a":1}\'. If you then call modify-endpoint ... --endpoint-settings \'{"b":2}\' ... for the same endpoint, the endpoint has the following settings: \'{"a":1,"b":2}\'.  However, suppose that you follow this with a call to modify-endpoint ... --endpoint-settings \'{"b":2}\' --exact-settings ... for that same endpoint again. Then the endpoint has the following settings: \'{"b":2}\'. All existing settings are replaced with the exact settings that you specify',
        },
        {
          name: "--no-exact-settings",
          description:
            'If this attribute is Y, the current call to ModifyEndpoint replaces all existing endpoint settings with the exact settings that you specify in this call. If this attribute is N, the current call to ModifyEndpoint does two things:    It replaces any endpoint settings that already exist with new values, for settings with the same names.   It creates new endpoint settings that you specify in the call, for settings with different names.    For example, if you call create-endpoint ... --endpoint-settings \'{"a":1}\' ..., the endpoint has the following endpoint settings: \'{"a":1}\'. If you then call modify-endpoint ... --endpoint-settings \'{"b":2}\' ... for the same endpoint, the endpoint has the following settings: \'{"a":1,"b":2}\'.  However, suppose that you follow this with a call to modify-endpoint ... --endpoint-settings \'{"b":2}\' --exact-settings ... for that same endpoint again. Then the endpoint has the following settings: \'{"b":2}\'. All existing settings are replaced with the exact settings that you specify',
        },
        {
          name: "--gcp-my-sql-settings",
          description:
            "Settings in JSON format for the source GCP MySQL endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timestream-settings",
          description:
            "Settings in JSON format for the target Amazon Timestream endpoint",
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
      name: "modify-event-subscription",
      description: "Modifies an existing DMS event notification subscription",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the DMS event notification subscription to be modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of DMS resource that generates the events you want to subscribe to.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a source type that you want to subscribe to. Use the DescribeEventCategories action to see a list of event categories",
          args: {
            name: "list",
          },
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription",
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
      name: "modify-instance-profile",
      description:
        "Modifies the specified instance profile using the provided parameters.  All migration projects associated with the instance profile must be deleted or modified before you can modify the instance profile",
      options: [
        {
          name: "--instance-profile-identifier",
          description:
            "The identifier of the instance profile. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--availability-zone",
          description: "The Availability Zone where the instance profile runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the connection parameters for the instance profile. If you don't specify a value for the KmsKeyArn parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--publicly-accessible",
          description:
            "Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Specifies the accessibility options for the instance profile. A value of true represents an instance profile with a public IP address. A value of false represents an instance profile with a private IP address. The default value is true",
        },
        {
          name: "--network-type",
          description:
            "Specifies the network type for the instance profile. A value of IPV4 represents an instance profile with IPv4 network type and only supports IPv4 addressing. A value of IPV6 represents an instance profile with IPv6 network type and only supports IPv6 addressing. A value of DUAL represents an instance profile with dual network type that supports IPv4 and IPv6 addressing",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-profile-name",
          description: "A user-friendly name for the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description for the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-group-identifier",
          description: "A subnet group to associate with the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-groups",
          description:
            "Specifies the VPC security groups to be used with the instance profile. The VPC security group must work with the VPC containing the instance profile",
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
      name: "modify-migration-project",
      description:
        "Modifies the specified migration project using the provided parameters.  The migration project must be closed before you can modify it",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The identifier of the migration project. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-project-name",
          description: "A user-friendly name for the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-data-provider-descriptors",
          description:
            "Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-data-provider-descriptors",
          description:
            "Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-profile-identifier",
          description:
            "The name or Amazon Resource Name (ARN) for the instance profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--transformation-rules",
          description:
            "The settings in JSON format for migration rules. Migration rules make it possible for you to change the object names according to the rules that you specify. For example, you can change an object name to lowercase or uppercase, add or remove a prefix or suffix, or rename objects",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A user-friendly description of the migration project",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-conversion-application-attributes",
          description:
            "The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN",
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
      name: "modify-replication-config",
      description:
        "Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it. Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION",
      options: [
        {
          name: "--replication-config-arn",
          description: "The Amazon Resource Name of the replication to modify",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-config-identifier",
          description: "The new replication config to apply to the replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-type",
          description: "The type of replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-mappings",
          description: "Table mappings specified in the replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-settings",
          description: "The settings for the replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--supplemental-settings",
          description: "Additional settings for the replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--compute-config",
          description:
            "Configuration parameters for provisioning an DMS Serverless replication",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the source endpoint for this DMS serverless replication configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration",
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
      name: "modify-replication-instance",
      description:
        "Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to be allocated for the replication instance",
          args: {
            name: "integer",
          },
        },
        {
          name: "--apply-immediately",
          description:
            "Indicates whether the changes should be applied immediately or during the next maintenance window",
        },
        {
          name: "--no-apply-immediately",
          description:
            "Indicates whether the changes should be applied immediately or during the next maintenance window",
        },
        {
          name: "--replication-instance-class",
          description:
            'The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right DMS replication instance for your migration',
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance",
          args: {
            name: "list",
          },
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes",
          args: {
            name: "string",
          },
        },
        {
          name: "--multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true",
        },
        {
          name: "--engine-version",
          description:
            "The engine version number of the replication instance. When modifying a major engine version of an instance, also set AllowMajorVersionUpgrade to true",
          args: {
            name: "string",
          },
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    DMS has enabled automatic patching for the given engine version",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    DMS has enabled automatic patching for the given engine version",
        },
        {
          name: "--replication-instance-identifier",
          description:
            "The replication instance identifier. This parameter is stored as a lowercase string",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-type",
          description:
            "The type of IP address protocol used by a replication instance, such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported",
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
      name: "modify-replication-subnet-group",
      description:
        "Modifies the settings for the specified replication subnet group",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description: "The name of the replication instance subnet group",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-subnet-group-description",
          description:
            "A description for the replication instance subnet group",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "A list of subnet IDs",
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
      name: "modify-replication-task",
      description:
        "Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about DMS tasks, see Working with Migration Tasks in the Database Migration Service User Guide",
      options: [
        {
          name: "--replication-task-arn",
          description: "The Amazon Resource Name (ARN) of the replication task",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-task-identifier",
          description:
            "The replication task identifier. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--migration-type",
          description:
            "The migration type. Valid values: full-load | cdc | full-load-and-cdc",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-mappings",
          description:
            "When using the CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with file://. For example, --table-mappings file://mappingfile.json. When working with the DMS API, provide the JSON as the parameter value",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-task-settings",
          description:
            "JSON file that contains settings for the task, such as task metadata settings",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS',
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time:2018-02-09T12:12:12\u201c",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-data",
          description:
            "Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the Database Migration Service User Guide",
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
      name: "move-replication-task",
      description:
        "Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the task that you want to move",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-replication-instance-arn",
          description:
            "The ARN of the replication instance where you want to move the task to",
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
      name: "reboot-replication-instance",
      description:
        "Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--force-failover",
          description:
            "If this parameter is true, the reboot is conducted through a Multi-AZ failover. If the instance isn't configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)",
        },
        {
          name: "--no-force-failover",
          description:
            "If this parameter is true, the reboot is conducted through a Multi-AZ failover. If the instance isn't configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)",
        },
        {
          name: "--force-planned-failover",
          description:
            "If this parameter is true, the reboot is conducted through a planned Multi-AZ failover where resources are released and cleaned up prior to conducting the failover. If the instance isn''t configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)",
        },
        {
          name: "--no-force-planned-failover",
          description:
            "If this parameter is true, the reboot is conducted through a planned Multi-AZ failover where resources are released and cleaned up prior to conducting the failover. If the instance isn''t configured for Multi-AZ, then you can't specify true. ( --force-planned-failover and --force-failover can't both be set to true.)",
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
      name: "refresh-schemas",
      description:
        "Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
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
      name: "reload-replication-tables",
      description:
        "Reloads the target database table with the source data for a given DMS Serverless replication configuration. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception",
      options: [
        {
          name: "--replication-config-arn",
          description:
            "The Amazon Resource Name of the replication config for which to reload tables",
          args: {
            name: "string",
          },
        },
        {
          name: "--tables-to-reload",
          description: "The list of tables to reload",
          args: {
            name: "list",
          },
        },
        {
          name: "--reload-option",
          description:
            "Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the replication",
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
      name: "reload-tables",
      description:
        "Reloads the target database table with the source data.  You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception",
      options: [
        {
          name: "--replication-task-arn",
          description: "The Amazon Resource Name (ARN) of the replication task",
          args: {
            name: "string",
          },
        },
        {
          name: "--tables-to-reload",
          description: "The name and schema of the table to be reloaded",
          args: {
            name: "list",
          },
        },
        {
          name: "--reload-option",
          description:
            "Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the task.  Valid values: data-reload, validate-only Default value is data-reload",
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
      name: "remove-tags-from-resource",
      description:
        "Removes metadata tags from an DMS resource, including replication instance, endpoint, subnet group, and migration task. For more information, see  Tag  data type description",
      options: [
        {
          name: "--resource-arn",
          description:
            "An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag key (name) of the tag to be removed",
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
      name: "run-fleet-advisor-lsa-analysis",
      description:
        "Runs large-scale assessment (LSA) analysis on every Fleet Advisor collector in your account",
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
      name: "start-data-migration",
      description: "Starts the specified data migration",
      options: [
        {
          name: "--data-migration-identifier",
          description:
            "The identifier (name or ARN) of the data migration to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-type",
          description:
            "Specifies the start type for the data migration. Valid values include start-replication, reload-target, and resume-processing",
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
      name: "start-extension-pack-association",
      description:
        "Applies the extension pack to your target database. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
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
      name: "start-metadata-model-assessment",
      description:
        "Creates a database migration assessment report by assessing the migration complexity for your source database. A database migration assessment report summarizes all of the schema conversion tasks. It also details the action items for database objects that can't be converted to the database engine of your target database instance",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to assess",
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
      name: "start-metadata-model-conversion",
      description:
        "Converts your source database objects to a format compatible with the target database",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to convert",
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
      name: "start-metadata-model-export-as-script",
      description:
        "Saves your converted code to a file as a SQL script, and stores this file on your Amazon S3 bucket",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description:
            "Whether to export the metadata model from the source or the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description:
            "The name of the model file to create in the Amazon S3 bucket",
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
      name: "start-metadata-model-export-to-target",
      description: "Applies converted database objects to your target database",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--overwrite-extension-pack",
          description:
            "Whether to overwrite the migration project extension pack. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database",
        },
        {
          name: "--no-overwrite-extension-pack",
          description:
            "Whether to overwrite the migration project extension pack. An extension pack is an add-on module that emulates functions present in a source database that are required when converting objects to the target database",
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
      name: "start-metadata-model-import",
      description:
        "Loads the metadata for all the dependent database objects of the parent object. This operation uses your project's Amazon S3 bucket as a metadata cache to improve performance",
      options: [
        {
          name: "--migration-project-identifier",
          description:
            "The migration project name or Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-rules",
          description: "A value that specifies the database objects to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description:
            "Whether to load metadata to the source or target database",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh",
          description:
            "If true, DMS loads metadata for the specified objects from the source database",
        },
        {
          name: "--no-refresh",
          description:
            "If true, DMS loads metadata for the specified objects from the source database",
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
      name: "start-recommendations",
      description:
        "Starts the analysis of your source database to provide recommendations of target engines. You can create recommendations for multiple source databases using BatchStartRecommendations",
      options: [
        {
          name: "--database-id",
          description:
            "The identifier of the source database to analyze and provide recommendations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--settings",
          description:
            "The settings in JSON format that Fleet Advisor uses to determine target engine recommendations. These parameters include target instance sizing and availability and durability settings. For target instance sizing, Fleet Advisor supports the following two options: total capacity and resource utilization. For availability and durability, Fleet Advisor supports the following two options: production (Multi-AZ deployments) and Dev/Test (Single-AZ deployments)",
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
      name: "start-replication",
      description:
        "For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication",
      options: [
        {
          name: "--replication-config-arn",
          description:
            "The Amazon Resource Name of the replication for which to start replication",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-replication-type",
          description: "The replication type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cdc-start-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error. The value can be in date, checkpoint, or LSN/SCN format",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time",
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
      name: "start-replication-task",
      description:
        "Starts the replication task. For more information about DMS tasks, see Working with Migration Tasks  in the Database Migration Service User Guide",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task to be started",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-replication-task-type",
          description:
            "The type of replication task to start. When the migration type is full-load or full-load-and-cdc, the only valid value for the first run of the task is start-replication. This option will start the migration. You can also use ReloadTables to reload specific tables that failed during migration instead of restarting the task. The resume-processing option isn't applicable for a full-load task, because you can't resume partially loaded tables during the full load phase. For a full-load-and-cdc task, DMS migrates table data, and then applies data changes that occur on the source. To load all the tables again, and start capturing source changes, use reload-target. Otherwise use resume-processing, to replicate the changes from the last stop position",
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for DMS',
          args: {
            name: "string",
          },
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time:2018-02-09T12:12:12\u201c",
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
      name: "start-replication-task-assessment",
      description:
        "Starts the replication task assessment for unsupported data types in the source database.  You can only use this operation for a task if the following conditions are true:   The task must be in the stopped state.   The task must have successful connections to the source and target.   If either of these conditions are not met, an InvalidResourceStateFault error will result.  For information about DMS task assessments, see Creating a task assessment report in the Database Migration Service User Guide",
      options: [
        {
          name: "--replication-task-arn",
          description: "The Amazon Resource Name (ARN) of the replication task",
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
      name: "start-replication-task-assessment-run",
      description:
        "Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "Amazon Resource Name (ARN) of the migration task associated with the premigration assessment run that you want to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-access-role-arn",
          description:
            "ARN of the service role needed to start the assessment run. The role must allow the iam:PassRole action",
          args: {
            name: "string",
          },
        },
        {
          name: "--result-location-bucket",
          description:
            "Amazon S3 bucket where you want DMS to store the results of this assessment run",
          args: {
            name: "string",
          },
        },
        {
          name: "--result-location-folder",
          description:
            "Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment run",
          args: {
            name: "string",
          },
        },
        {
          name: "--result-encryption-mode",
          description:
            'Encryption mode that you can specify to encrypt the results of this assessment run. If you don\'t specify this request parameter, DMS stores the assessment run results without encryption. You can specify one of the options following:    "SSE_S3" \u2013 The server-side encryption provided as a default by Amazon S3.    "SSE_KMS" \u2013 Key Management Service (KMS) encryption. This encryption can use either a custom KMS encryption key that you specify or the default KMS encryption key that DMS provides',
          args: {
            name: "string",
          },
        },
        {
          name: "--result-kms-key-arn",
          description:
            'ARN of a custom KMS encryption key that you specify when you set ResultEncryptionMode to "SSE_KMS"',
          args: {
            name: "string",
          },
        },
        {
          name: "--assessment-run-name",
          description: "Unique name to identify the assessment run",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-only",
          description:
            "Space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for IncludeOnly if you also set a value for Exclude in the API operation.  To identify the names of the default individual assessments that DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--exclude",
          description:
            "Space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for Exclude if you also set a value for IncludeOnly in the API operation. To identify the names of the default individual assessments that DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the premigration assessment run that you want to start",
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
      name: "stop-data-migration",
      description: "Stops the specified data migration",
      options: [
        {
          name: "--data-migration-identifier",
          description:
            "The identifier (name or ARN) of the data migration to stop",
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
      name: "stop-replication",
      description:
        "For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications",
      options: [
        {
          name: "--replication-config-arn",
          description: "The Amazon Resource Name of the replication to stop",
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
      name: "stop-replication-task",
      description: "Stops the replication task",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name(ARN) of the replication task to be stopped",
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
      name: "test-connection",
      description:
        "Tests the connection between the replication instance and the endpoint",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint",
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
      name: "update-subscriptions-to-event-bridge",
      description:
        "Migrates 10 active and enabled Amazon SNS subscriptions at a time and converts them to corresponding Amazon EventBridge rules. By default, this operation migrates subscriptions only when all your replication instance versions are 3.4.5 or higher. If any replication instances are from versions earlier than 3.4.5, the operation raises an error and tells you to upgrade these instances to version 3.4.5 or higher. To enable migration regardless of version, set the Force option to true. However, if you don't upgrade instances earlier than version 3.4.5, some types of events might not be available when you use Amazon EventBridge. To call this operation, make sure that you have certain permissions added to your user account. For more information, see Migrating event subscriptions to Amazon EventBridge in the Amazon Web Services Database Migration Service User Guide",
      options: [
        {
          name: "--force-move",
          description:
            "When set to true, this operation migrates DMS subscriptions for Amazon SNS notifications no matter what your replication instance version is. If not set or set to false, this operation runs only when all your replication instances are from DMS version 3.4.5 or higher",
        },
        {
          name: "--no-force-move",
          description:
            "When set to true, this operation migrates DMS subscriptions for Amazon SNS notifications no matter what your replication instance version is. If not set or set to false, this operation runs only when all your replication instances are from DMS version 3.4.5 or higher",
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
          name: "endpoint-deleted",
          description:
            "Wait until testing endpoint is deleted. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to the endpoints. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
          name: "replication-instance-available",
          description:
            "Wait until DMS replication instance is available. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
          name: "replication-instance-deleted",
          description:
            "Wait until DMS replication instance is deleted. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
          name: "replication-task-deleted",
          description:
            "Wait until DMS replication task is deleted. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
          name: "replication-task-ready",
          description:
            "Wait until DMS replication task is ready. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
          name: "replication-task-running",
          description:
            "Wait until DMS replication task is running. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
          name: "replication-task-stopped",
          description:
            "Wait until DMS replication task is stopped. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
              args: {
                name: "string",
              },
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default)",
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
          name: "test-connection-succeeds",
          description:
            "Wait until testing connection succeeds. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks",
          options: [
            {
              name: "--filters",
              description:
                "The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100",
              args: {
                name: "integer",
              },
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords",
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
      ],
    },
  ],
};
export default completionSpec;
