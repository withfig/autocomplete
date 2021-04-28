export const completionSpec: Fig.Spec = {
  name: "dms",
  description:
    "AWS Database Migration Service AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL. For more information about AWS DMS, see What Is AWS Database Migration Service? in the AWS Database Migration User Guide.",
  subcommands: [
    {
      name: "add-tags-to-resource",
      description:
        "Adds metadata tags to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see  Tag  data type description.",
      options: [
        {
          name: "--resource-arn",
          description:
            "Identifies the AWS DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For AWS DMS, you can tag a replication instance, an endpoint, or a replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the resource.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "apply-pending-maintenance-action",
      description:
        "Applies a pending maintenance action to a resource (for example, to a replication instance).",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the AWS DMS resource that the pending maintenance action applies to.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--apply-action",
          description:
            "The pending maintenance action to apply to this resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--opt-in-type",
          description:
            "A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an opt-in request of type immediate. Valid values:    immediate - Apply the maintenance action immediately.    next-maintenance - Apply the maintenance action during the next maintenance window for the resource.    undo-opt-in - Cancel any existing next-maintenance opt-in requests.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "cancel-replication-task-assessment-run",
      description:
        "Cancels a single premigration assessment run. This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.",
      options: [
        {
          name: "--replication-task-assessment-run-arn",
          description:
            "Amazon Resource Name (ARN) of the premigration assessment run to be canceled.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-endpoint",
      description: "Creates an endpoint using the provided settings.",
      options: [
        {
          name: "--endpoint-identifier",
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint. Valid values are source and target.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--engine-name",
          description:
            'The type of engine for the endpoint. Valid values, depending on the EndpointType value, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "docdb", "sqlserver", and "neptune".',
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--username",
          description:
            "The user name to be used to log in to the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--password",
          description:
            "The password to be used to log in to the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--server-name",
          description:
            "The name of the server where the endpoint database resides.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--port",
          description: "The port used by the endpoint database.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description: "The name of the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--extra-connection-attributes",
          description:
            "Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see Working with AWS DMS Endpoints in the AWS Database Migration Service User Guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--kms-key-id",
          description:
            "An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the endpoint.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--certificate-arn",
          description: "The Amazon Resource Name (ARN) for the certificate.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssl-mode",
          description:
            "The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--service-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--external-table-definition",
          description: "The external table definition.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dynamo-db-settings",
          description:
            "Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--s3-settings",
          description:
            "Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--dms-transfer-settings",
          description:
            'The settings in JSON format for the DMS transfer type of source endpoint.  Possible settings include the following:    ServiceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.    BucketName - The name of the S3 bucket to use.    CompressionType - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to NONE (the default). To keep the files uncompressed, don\'t use this value.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string,BucketName=string,CompressionType=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" }',
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--mongo-db-settings",
          description:
            "Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see Using MongoDB as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--kinesis-settings",
          description:
            "Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using Amazon Kinesis Data Streams as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--kafka-settings",
          description:
            "Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using Apache Kafka as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--elasticsearch-settings",
          description:
            "Settings in JSON format for the target Elasticsearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--neptune-settings",
          description:
            "Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying Endpoint Settings for Amazon Neptune as a Target in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--redshift-settings",
          description:
            "Provides information that defines an Amazon Redshift endpoint.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--postgre-sql-settings",
          description:
            "Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for AWS DMS and  Extra connection attributes when using PostgreSQL as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--my-sql-settings",
          description:
            "Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for AWS DMS and Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--oracle-settings",
          description:
            "Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for AWS DMS and  Extra connection attributes when using Oracle as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--sybase-settings",
          description:
            "Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for AWS DMS and Extra connection attributes when using SAP ASE as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--microsoft-sql-server-settings",
          description:
            "Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for AWS DMS and  Extra connection attributes when using SQL Server as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--ibm-db2-settings",
          description:
            "Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, AWS DMS generates a default identifier value for the end of EndpointArn.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--doc-db-settings",
          description:
            "Provides information that defines a DocumentDB endpoint.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-event-subscription",
      description:
        "Creates an AWS DMS event notification subscription.  You can specify the type of source (SourceType) you want to be notified of, provide a list of AWS DMS source IDs (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. If you specify both the SourceType and SourceIds, such as SourceType = replication-instance and SourceIdentifier = my-replinstance, you will be notified of all the replication instance events for the specified source. If you specify a SourceType but don't specify a SourceIdentifier, you receive notice of the events for that source type for all your AWS DMS sources. If you don't specify either SourceType nor SourceIdentifier, you will be notified of events generated from all AWS DMS sources belonging to your customer account. For more information about AWS DMS events, see Working with Events and Notifications in the AWS Database Migration Service User Guide.",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the AWS DMS event notification subscription. This name must be less than 255 characters.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--source-type",
          description:
            "The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a source type that you want to subscribe to. For more information, see Working with Events and Notifications in the AWS Database Migration Service User Guide.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--source-ids",
          description:
            "A list of identifiers for which AWS DMS provides notification events. If you don't specify a value, notifications are provided for all sources. If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it.",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription, or set to false to create the subscription but not activate it.",
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the event subscription.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-replication-instance",
      description:
        "Creates the replication instance using the specified parameters. AWS DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see Creating the IAM Roles to Use With the AWS CLI and AWS DMS API. For information on the required permissions, see IAM Permissions Needed to Use AWS DMS.",
      options: [
        {
          name: "--replication-instance-identifier",
          description:
            "The replication instance identifier. This parameter is stored as a lowercase string. Constraints:   Must contain 1-63 alphanumeric characters or hyphens.   First character must be a letter.   Can't end with a hyphen or contain two consecutive hyphens.   Example: myrepinstance",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to be initially allocated for the replication instance.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--replication-instance-class",
          description:
            'The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration.',
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--availability-zone",
          description:
            "The Availability Zone where the replication instance will be created. The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example: us-east-1d",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--replication-subnet-group-identifier",
          description:
            "A subnet group to associate with the replication instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).  Format: ddd:hh24:mi-ddd:hh24:mi  Default: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week. Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun Constraints: Minimum 30-minute window.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.",
        },
        {
          name: "--engine-version",
          description:
            "The engine version number of the replication instance. If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.",
          args: {
            name: "string",
          },
          isOptional: true,
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
            "One or more tags to be assigned to the replication instance.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--kms-key-id",
          description:
            "An AWS KMS key identifier that is used to encrypt the data on the replication instance. If you don't specify a value for the KmsKeyId parameter, then AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--publicly-accessible",
          description:
            "Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true.",
        },
        {
          name: "--no-publicly-accessible",
          description:
            "Specifies the accessibility options for the replication instance. A value of true represents an instance with a public IP address. A value of false represents an instance with a private IP address. The default value is true.",
        },
        {
          name: "--dns-name-servers",
          description:
            'A list of custom DNS name servers supported for the replication instance to access your on-premise source or target database. This list overrides the default name servers supported by the replication instance. You can specify a comma-separated list of internet addresses for up to four on-premise DNS name servers. For example: "1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, AWS DMS generates a default identifier value for the end of EndpointArn.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-replication-subnet-group",
      description:
        "Creates a replication subnet group given a list of the subnet IDs in a VPC.",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description:
            'The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens. Must not be "default". Example: mySubnetgroup',
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-subnet-group-description",
          description: "The description for the subnet group.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--subnet-ids",
          description:
            "One or more subnet IDs to be assigned to the subnet group.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags to be assigned to the subnet group.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "create-replication-task",
      description: "Creates a replication task using the specified parameters.",
      options: [
        {
          name: "--replication-task-identifier",
          description:
            "An identifier for the replication task. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--source-endpoint-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--target-endpoint-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of a replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--migration-type",
          description:
            "The migration type. Valid values: full-load | cdc | full-load-and-cdc",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-mappings",
          description:
            "The table mappings for the task, in JSON format. For more information, see Using Table Mapping to Specify Task Settings in the AWS Database Migration Service User Guide.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-task-settings",
          description:
            "Overall settings for the task, in JSON format. For more information, see Specifying Task Settings for AWS Database Migration Service Tasks in the AWS Database Migration User Guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
          isOptional: true,
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time: 2018-02-09T12:12:12 \u201c",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "One or more tags to be assigned to the replication task.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--task-data",
          description:
            "Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the AWS Database Migration Service User Guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--resource-identifier",
          description:
            "A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as Example-App-ARN1. For example, this value might result in the EndpointArn value arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1. If you don't specify a ResourceIdentifier value, AWS DMS generates a default identifier value for the end of EndpointArn.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-certificate",
      description: "Deletes the specified certificate.",
      options: [
        {
          name: "--certificate-arn",
          description:
            "The Amazon Resource Name (ARN) of the deleted certificate.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-connection",
      description:
        "Deletes the connection between a replication instance and an endpoint.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-endpoint",
      description:
        "Deletes the specified endpoint.  All tasks associated with the endpoint must be deleted before you can delete the endpoint.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-event-subscription",
      description: "Deletes an AWS DMS event subscription.",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the DMS event notification subscription to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-replication-instance",
      description:
        "Deletes the specified replication instance.  You must delete any migration tasks that are associated with the replication instance before you can delete it.",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-replication-subnet-group",
      description: "Deletes a subnet group.",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description: "The subnet group name of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-replication-task",
      description: "Deletes the specified replication task.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "delete-replication-task-assessment-run",
      description:
        "Deletes the record of a single premigration assessment run. This operation removes all metadata that AWS DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.",
      options: [
        {
          name: "--replication-task-assessment-run-arn",
          description:
            "Amazon Resource Name (ARN) of the premigration assessment run to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-account-attributes",
      description:
        "Lists all of the AWS DMS attributes for a customer account. These attributes include AWS DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region. This command does not take any parameters.",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-applicable-individual-assessments",
      description:
        "Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters. If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run. To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task. If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "Amazon Resource Name (ARN) of a migration task on which you want to base the default list of individual assessments.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--replication-instance-arn",
          description:
            "ARN of a replication instance on which you want to base the default list of individual assessments.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--source-engine-name",
          description:
            "Name of a database engine that the specified replication instance supports as a source.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--target-engine-name",
          description:
            "Name of a database engine that the specified replication instance supports as a target.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--migration-type",
          description:
            "Name of the migration type that each provided individual assessment must support.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "Maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "Optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-certificates",
      description: "Provides a description of the certificate.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the certificates described in the form of key-value pairs.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 10",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-connections",
      description:
        "Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.",
      options: [
        {
          name: "--filters",
          description:
            "The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-endpoint-settings",
      description:
        "Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.",
      options: [
        {
          name: "--engine-name",
          description:
            "The databse engine used for your source or target endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-endpoint-types",
      description: "Returns information about the type of endpoints available.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the endpoint types. Valid filter names: engine-name | endpoint-type",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-endpoints",
      description:
        "Returns information about the endpoints for your account in the current region.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the endpoints. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-event-categories",
      description:
        "Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in Working with Events and Notifications in the AWS Database Migration Service User Guide.",
      options: [
        {
          name: "--source-type",
          description:
            "The type of AWS DMS resource that generates events.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          description: "Filters applied to the event categories.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-event-subscriptions",
      description:
        "Lists all the event subscriptions for a customer account. The description of a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status.  If you specify SubscriptionName, this action lists the description for that subscription.",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the AWS DMS event subscription to be described.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          description: "Filters applied to event subscriptions.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-events",
      description:
        "Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on AWS DMS events, see Working with Events and Notifications in the AWS Database Migration User Guide.",
      options: [
        {
          name: "--source-identifier",
          description: "The identifier of an event source.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--source-type",
          description:
            "The type of AWS DMS resource that generates events. Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--start-time",
          description: "The start time for the events to be listed.",
          args: {
            name: "timestamp",
          },
          isOptional: true,
        },
        {
          name: "--end-time",
          description: "The end time for the events to be listed.",
          args: {
            name: "timestamp",
          },
          isOptional: true,
        },
        {
          name: "--duration",
          description: "The duration of the events to be listed.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for the source type that you've chosen.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          description: "Filters applied to events.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-orderable-replication-instances",
      description:
        "Returns information about the replication instance types that can be created in the specified region.",
      options: [
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
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
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-refresh-schemas-status",
      description: "Returns the status of the RefreshSchemas operation.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-instance-task-logs",
      description:
        "Returns information about the task logs for the specified task.",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-instances",
      description:
        "Returns information about replication instances for your account in the current region.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-subnet-groups",
      description: "Returns information about the replication subnet groups.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication subnet groups. Valid filter names: replication-subnet-group-id",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-task-assessment-results",
      description:
        "Returns the task assessment results from Amazon S3. This action always returns the latest results.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input parameter is specified, the API returns only one result and ignore the values of the MaxRecords and Marker parameters.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-task-assessment-runs",
      description:
        "Returns a paginated list of premigration assessment runs based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.  This operation doesn't return information about individual assessments. For this information, see the DescribeReplicationTaskIndividualAssessments operation.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the premigration assessment runs described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, replication-instance-arn, status",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-task-individual-assessments",
      description:
        "Returns a paginated list of individual assessments based on filter settings. These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to the individual assessments described in the form of key-value pairs. Valid filter names: replication-task-assessment-run-arn, replication-task-arn, status",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-replication-tasks",
      description:
        "Returns information about replication tasks for your account in the current region.",
      options: [
        {
          name: "--filters",
          description:
            "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
        },
        {
          name: "--no-without-settings",
          description:
            "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-schemas",
      description:
        "Returns information about the schema for the specified endpoint.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "describe-table-statistics",
      description:
        'Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted. Note that the "last updated" column the DMS console only indicates the time that AWS DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.',
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-records",
          description:
            "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 500.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--marker",
          description:
            "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          description:
            "Filters applied to table statistics. Valid filter names: schema-name | table-name | table-state A combination of filters creates an AND condition where each record matches all specified filters.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "import-certificate",
      description: "Uploads the specified certificate.",
      options: [
        {
          name: "--certificate-identifier",
          description:
            "A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--certificate-pem",
          description:
            "The contents of a .pem file, which contains an X.509 certificate.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--certificate-wallet",
          description:
            "The location of an imported Oracle Wallet certificate for use with SSL.",
          args: {
            name: "blob",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "The tags associated with the certificate.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description:
        "Lists all metadata tags attached to an AWS DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see  Tag  data type description.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "modify-endpoint",
      description: "Modifies the specified endpoint.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--endpoint-identifier",
          description:
            "The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--endpoint-type",
          description:
            "The type of endpoint. Valid values are source and target.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--engine-name",
          description:
            'The type of engine for the endpoint. Valid values, depending on the EndpointType, include "mysql", "oracle", "postgres", "mariadb", "aurora", "aurora-postgresql", "redshift", "s3", "db2", "azuredb", "sybase", "dynamodb", "mongodb", "kinesis", "kafka", "elasticsearch", "documentdb", "sqlserver", and "neptune".',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--username",
          description:
            "The user name to be used to login to the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--password",
          description:
            "The password to be used to login to the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--server-name",
          description:
            "The name of the server where the endpoint database resides.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--port",
          description: "The port used by the endpoint database.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description: "The name of the endpoint database.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--extra-connection-attributes",
          description:
            'Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--certificate-arn",
          description:
            "The Amazon Resource Name (ARN) of the certificate used for SSL connection.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--ssl-mode",
          description:
            "The SSL mode used to connect to the endpoint. The default value is none.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--service-access-role-arn",
          description:
            "The Amazon Resource Name (ARN) for the service access role you want to use to modify the endpoint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--external-table-definition",
          description: "The external table definition.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dynamo-db-settings",
          description:
            "Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other available settings, see Using Object Mapping to Migrate Data to DynamoDB in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--s3-settings",
          description:
            "Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see Extra Connection Attributes When Using Amazon S3 as a Target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--dms-transfer-settings",
          description:
            'The settings in JSON format for the DMS transfer type of source endpoint.  Attributes include the following:   serviceAccessRoleArn - The AWS Identity and Access Management (IAM) role that has permission to access the Amazon S3 bucket.   BucketName - The name of the S3 bucket to use.   compressionType - An optional parameter to use GZIP to compress the target files. Either set this parameter to NONE (the default) or don\'t use it to leave the files uncompressed.   Shorthand syntax for these settings is as follows: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string  JSON syntax for these settings is as follows: { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" }',
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--mongo-db-settings",
          description:
            "Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in  Using MongoDB as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--kinesis-settings",
          description:
            "Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For more information about the available settings, see Using Amazon Kinesis Data Streams as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--kafka-settings",
          description:
            "Settings in JSON format for the target Apache Kafka endpoint. For more information about the available settings, see Using Apache Kafka as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--elasticsearch-settings",
          description:
            "Settings in JSON format for the target Elasticsearch endpoint. For more information about the available settings, see Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--neptune-settings",
          description:
            "Settings in JSON format for the target Amazon Neptune endpoint. For more information about the available settings, see Specifying Endpoint Settings for Amazon Neptune as a Target in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--redshift-settings",
          description:
            "Provides information that defines an Amazon Redshift endpoint.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--postgre-sql-settings",
          description:
            "Settings in JSON format for the source and target PostgreSQL endpoint. For information about other available settings, see Extra connection attributes when using PostgreSQL as a source for AWS DMS and  Extra connection attributes when using PostgreSQL as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--my-sql-settings",
          description:
            "Settings in JSON format for the source and target MySQL endpoint. For information about other available settings, see Extra connection attributes when using MySQL as a source for AWS DMS and Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--oracle-settings",
          description:
            "Settings in JSON format for the source and target Oracle endpoint. For information about other available settings, see Extra connection attributes when using Oracle as a source for AWS DMS and  Extra connection attributes when using Oracle as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--sybase-settings",
          description:
            "Settings in JSON format for the source and target SAP ASE endpoint. For information about other available settings, see Extra connection attributes when using SAP ASE as a source for AWS DMS and Extra connection attributes when using SAP ASE as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--microsoft-sql-server-settings",
          description:
            "Settings in JSON format for the source and target Microsoft SQL Server endpoint. For information about other available settings, see Extra connection attributes when using SQL Server as a source for AWS DMS and  Extra connection attributes when using SQL Server as a target for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--ibm-db2-settings",
          description:
            "Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other available settings, see Extra connection attributes when using Db2 LUW as a source for AWS DMS in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--doc-db-settings",
          description:
            "Settings in JSON format for the source DocumentDB endpoint. For more information about the available settings, see the configuration properties section in  Using DocumentDB as a Target for AWS Database Migration Service in the AWS Database Migration Service User Guide.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "modify-event-subscription",
      description:
        "Modifies an existing AWS DMS event notification subscription.",
      options: [
        {
          name: "--subscription-name",
          description:
            "The name of the AWS DMS event notification subscription to be modified.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--source-type",
          description:
            "The type of AWS DMS resource that generates the events you want to subscribe to.  Valid values: replication-instance | replication-task",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--event-categories",
          description:
            "A list of event categories for a source type that you want to subscribe to. Use the DescribeEventCategories action to see a list of event categories.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--enabled",
          description:
            "A Boolean value; set to true to activate the subscription.",
        },
        {
          name: "--no-enabled",
          description:
            "A Boolean value; set to true to activate the subscription.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "modify-replication-instance",
      description:
        "Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window.",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--allocated-storage",
          description:
            "The amount of storage (in gigabytes) to be allocated for the replication instance.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--apply-immediately",
          description:
            "Indicates whether the changes should be applied immediately or during the next maintenance window.",
        },
        {
          name: "--no-apply-immediately",
          description:
            "Indicates whether the changes should be applied immediately or during the next maintenance window.",
        },
        {
          name: "--replication-instance-class",
          description:
            'The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example to specify the instance class dms.c4.large, set this parameter to "dms.c4.large". For more information on the settings and capacities for the available replication instance classes, see  Selecting the right AWS DMS replication instance for your migration.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--vpc-security-group-ids",
          description:
            "Specifies the VPC security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--preferred-maintenance-window",
          description:
            "The weekly time range (in UTC) during which system maintenance can occur, which might result in an outage. Changing this parameter does not result in an outage, except in the following situation, and the change is asynchronously applied as soon as possible. If moving this window to the current time, there must be at least 30 minutes between the current time and end of the window to ensure pending changes are applied. Default: Uses existing setting Format: ddd:hh24:mi-ddd:hh24:mi Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun Constraints: Must be at least 30 minutes",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.",
        },
        {
          name: "--no-multi-az",
          description:
            "Specifies whether the replication instance is a Multi-AZ deployment. You can't set the AvailabilityZone parameter if the Multi-AZ parameter is set to true.",
        },
        {
          name: "--engine-version",
          description:
            "The engine version number of the replication instance. When modifying a major engine version of an instance, also set AllowMajorVersionUpgrade to true.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version.",
        },
        {
          name: "--no-allow-major-version-upgrade",
          description:
            "Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the replication instance's current version.",
        },
        {
          name: "--auto-minor-version-upgrade",
          description:
            "A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    AWS DMS has enabled automatic patching for the given engine version.",
        },
        {
          name: "--no-auto-minor-version-upgrade",
          description:
            "A value that indicates that minor version upgrades are applied automatically to the replication instance during the maintenance window. Changing this parameter doesn't result in an outage, except in the case described following. The change is asynchronously applied as soon as possible.  An outage does result if these factors apply:    This parameter is set to true during the maintenance window.   A newer minor version is available.    AWS DMS has enabled automatic patching for the given engine version.",
        },
        {
          name: "--replication-instance-identifier",
          description:
            "The replication instance identifier. This parameter is stored as a lowercase string.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "modify-replication-subnet-group",
      description:
        "Modifies the settings for the specified replication subnet group.",
      options: [
        {
          name: "--replication-subnet-group-identifier",
          description: "The name of the replication instance subnet group.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-subnet-group-description",
          description:
            "A description for the replication instance subnet group.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--subnet-ids",
          description: "A list of subnet IDs.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "modify-replication-task",
      description:
        "Modifies the specified replication task. You can't modify the task endpoints. The task must be stopped before you can modify it.  For more information about AWS DMS tasks, see Working with Migration Tasks in the AWS Database Migration Service User Guide.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-task-identifier",
          description:
            "The replication task identifier. Constraints:   Must contain 1-255 alphanumeric characters or hyphens.   First character must be a letter.   Cannot end with a hyphen or contain two consecutive hyphens.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--migration-type",
          description:
            "The migration type. Valid values: full-load | cdc | full-load-and-cdc",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--table-mappings",
          description:
            "When using the AWS CLI or boto3, provide the path of the JSON file that contains the table mappings. Precede the path with file://. For example, --table-mappings file://mappingfile.json. When working with the DMS API, provide the JSON as the parameter value.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--replication-task-settings",
          description:
            "JSON file that contains settings for the task, such as task metadata settings.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
          isOptional: true,
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time: 2018-02-09T12:12:12 \u201c",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--task-data",
          description:
            "Supplemental information that the task requires to migrate the data for certain source and target endpoints. For more information, see Specifying Supplemental Data for Task Settings in the AWS Database Migration Service User Guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "move-replication-task",
      description:
        "Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later AWS DMS version as the current replication instance.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the task that you want to move.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--target-replication-instance-arn",
          description:
            "The ARN of the replication instance where you want to move the task to.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "reboot-replication-instance",
      description:
        "Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--force-failover",
          description:
            "If this parameter is true, the reboot is conducted through a Multi-AZ failover. (If the instance isn't configured for Multi-AZ, then you can't specify true.)",
        },
        {
          name: "--no-force-failover",
          description:
            "If this parameter is true, the reboot is conducted through a Multi-AZ failover. (If the instance isn't configured for Multi-AZ, then you can't specify true.)",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "refresh-schemas",
      description:
        "Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.",
      options: [
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "reload-tables",
      description: "Reloads the target database table with the source data.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tables-to-reload",
          description: "The name and schema of the table to be reloaded.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--reload-option",
          description:
            "Options for reload. Specify data-reload to reload the data and re-validate it if validation is enabled. Specify validate-only to re-validate the table. This option applies only when validation is enabled for the task.  Valid values: data-reload, validate-only Default value is data-reload.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "remove-tags-from-resource",
      description:
        "Removes metadata tags from an AWS DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see  Tag  data type description.",
      options: [
        {
          name: "--resource-arn",
          description:
            "An AWS DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description: "The tag key (name) of the tag to be removed.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "start-replication-task",
      description:
        "Starts the replication task. For more information about AWS DMS tasks, see Working with Migration Tasks  in the AWS Database Migration Service User Guide.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task to be started.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--start-replication-task-type",
          description: "A type of replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cdc-start-time",
          description:
            "Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error. Timestamp Example: --cdc-start-time \u201c2018-03-08T12:12:12\u201d",
          args: {
            name: "timestamp",
          },
          isOptional: true,
        },
        {
          name: "--cdc-start-position",
          description:
            'Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.  The value can be in date, checkpoint, or LSN/SCN format. Date Example: --cdc-start-position \u201c2018-03-08T12:12:12\u201d Checkpoint Example: --cdc-start-position "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93" LSN Example: --cdc-start-position \u201cmysql-bin-changelog.000024:373\u201d  When you use this task setting with a source PostgreSQL database, a logical replication slot should already be created and associated with the source endpoint. You can verify this by setting the slotName extra connection attribute to the name of this logical replication slot. For more information, see Extra Connection Attributes When Using PostgreSQL as a Source for AWS DMS.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cdc-stop-position",
          description:
            "Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time. Server time example: --cdc-stop-position \u201cserver_time:2018-02-09T12:12:12\u201d Commit time example: --cdc-stop-position \u201ccommit_time: 2018-02-09T12:12:12 \u201c",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "start-replication-task-assessment",
      description:
        "Starts the replication task assessment for unsupported data types in the source database.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication task.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "start-replication-task-assessment-run",
      description:
        "Starts a new premigration assessment run for one or more individual assessments of a migration task. The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "Amazon Resource Name (ARN) of the migration task associated with the premigration assessment run that you want to start.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--service-access-role-arn",
          description:
            "ARN of a service role needed to start the assessment run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--result-location-bucket",
          description:
            "Amazon S3 bucket where you want AWS DMS to store the results of this assessment run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--result-location-folder",
          description:
            "Folder within an Amazon S3 bucket where you want AWS DMS to store the results of this assessment run.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--result-encryption-mode",
          description:
            'Encryption mode that you can specify to encrypt the results of this assessment run. If you don\'t specify this request parameter, AWS DMS stores the assessment run results without encryption. You can specify one of the options following:    "SSE_S3" \u2013 The server-side encryption provided as a default by Amazon S3.    "SSE_KMS" \u2013 AWS Key Management Service (AWS KMS) encryption. This encryption can use either a custom KMS encryption key that you specify or the default KMS encryption key that DMS provides.',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--result-kms-key-arn",
          description:
            'ARN of a custom KMS encryption key that you specify when you set ResultEncryptionMode to "SSE_KMS".',
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--assessment-run-name",
          description: "Unique name to identify the assessment run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--include-only",
          description:
            "Space-separated list of names for specific individual assessments that you want to include. These names come from the default list of individual assessments that AWS DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for IncludeOnly if you also set a value for Exclude in the API operation.  To identify the names of the default individual assessments that AWS DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--exclude",
          description:
            "Space-separated list of names for specific individual assessments that you want to exclude. These names come from the default list of individual assessments that AWS DMS supports for the associated migration task. This task is specified by ReplicationTaskArn.  You can't set a value for Exclude if you also set a value for IncludeOnly in the API operation. To identify the names of the default individual assessments that AWS DMS supports for the associated migration task, run the DescribeApplicableIndividualAssessments operation using its own ReplicationTaskArn request parameter.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "stop-replication-task",
      description: "Stops the replication task.",
      options: [
        {
          name: "--replication-task-arn",
          description:
            "The Amazon Resource Name(ARN) of the replication task to be stopped.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "test-connection",
      description:
        "Tests the connection between the replication instance and the endpoint.",
      options: [
        {
          name: "--replication-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the replication instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--endpoint-arn",
          description:
            "The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
          isOptional: true,
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met.",
      subcommands: [
        {
          name: "endpoint-deleted",
          description:
            "Wait until testing endpoint is deleted. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to the endpoints. Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-instance-available",
          description:
            "Wait until DMS replication instance is available. It will poll every 60 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-instance-deleted",
          description:
            "Wait until DMS replication instance is deleted. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication instances. Valid filter names: replication-instance-arn | replication-instance-id | replication-instance-class | engine-version",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-task-deleted",
          description:
            "Wait until DMS replication task is deleted. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-task-ready",
          description:
            "Wait until DMS replication task is ready. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-task-running",
          description:
            "Wait until DMS replication task is running. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "replication-task-stopped",
          description:
            "Wait until DMS replication task is stopped. It will poll every 15 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "Filters applied to replication tasks. Valid filter names: replication-task-arn | replication-task-id | migration-type | endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--no-without-settings",
              description:
                "An option to set to avoid returning information about settings. Use this to reduce overhead when setting information is too large. To use this option, choose true; otherwise, choose false (the default).",
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
        {
          name: "test-connection-succeeds",
          description:
            "Wait until testing connection succeeds. It will poll every 5 seconds until a successful state has been reached. This will exit with a return code of 255 after 60 failed checks.",
          options: [
            {
              name: "--filters",
              description:
                "The filters applied to the connection. Valid filter names: endpoint-arn | replication-instance-arn",
              args: {
                name: "list",
              },
              isOptional: true,
            },
            {
              name: "--max-records",
              description:
                "The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved.  Default: 100 Constraints: Minimum 20, maximum 100.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--marker",
              description:
                "An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--starting-token",
              description:
                "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "string",
              },
              isOptional: true,
            },
            {
              name: "--page-size",
              description:
                "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--max-items",
              description:
                "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
              args: {
                name: "integer",
              },
              isOptional: true,
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
              isOptional: true,
            },
          ],
        },
      ],
    },
  ],
};
