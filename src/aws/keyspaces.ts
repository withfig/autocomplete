const completionSpec: Fig.Spec = {
  name: "keyspaces",
  description:
    "Amazon Keyspaces (for Apache Cassandra) is a scalable, highly available, and managed Apache Cassandra-compatible database service. Amazon Keyspaces makes it easy to migrate, run, and scale Cassandra workloads in the Amazon Web Services Cloud. With just a few clicks on the Amazon Web Services Management Console or a few lines of code, you can create keyspaces and tables in Amazon Keyspaces, without deploying any infrastructure or installing software.  In addition to supporting Cassandra Query Language (CQL) requests via open-source Cassandra drivers, Amazon Keyspaces supports data definition language (DDL) operations to manage keyspaces and tables using the Amazon Web Services SDK and CLI, as well as infrastructure as code (IaC) services and tools such as CloudFormation and Terraform. This API reference describes the supported DDL operations in detail. For the list of all supported CQL APIs, see Supported Cassandra APIs, operations, and data types in Amazon Keyspaces in the Amazon Keyspaces Developer Guide. To learn how Amazon Keyspaces API actions are recorded with CloudTrail, see Amazon Keyspaces information in CloudTrail in the Amazon Keyspaces Developer Guide. For more information about Amazon Web Services APIs, for example how to implement retry logic or how to sign Amazon Web Services API requests, see Amazon Web Services APIs in the General Reference",
  subcommands: [
    {
      name: "create-keyspace",
      description:
        "The CreateKeyspace operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names must be unique within each Region.  CreateKeyspace is an asynchronous operation. You can monitor the creation status of the new keyspace by using the GetKeyspace operation. For more information, see Create a keyspace in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pair tags to be attached to the keyspace. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--replication-specification",
          description:
            "The replication specification of the keyspace includes:    replicationStrategy - the required value is SINGLE_REGION or MULTI_REGION.    regionList - if the replicationStrategy is MULTI_REGION, the regionList requires the current Region and at least one additional Amazon Web Services Region where the keyspace is going to be replicated in. The maximum number of supported replication Regions including the current Region is six",
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
      name: "create-table",
      description:
        "The CreateTable operation adds a new table to the specified keyspace. Within a keyspace, table names must be unique.  CreateTable is an asynchronous operation. When the request is received, the status of the table is set to CREATING. You can monitor the creation status of the new table by using the GetTable operation, which returns the current status of the table. You can start using a table when the status is ACTIVE. For more information, see Create a table in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description:
            "The name of the keyspace that the table is going to be created in",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-definition",
          description:
            "The schemaDefinition consists of the following parameters. For each column to be created:    name - The name of the column.    type - An Amazon Keyspaces data type. For more information, see Data types in the Amazon Keyspaces Developer Guide.   The primary key of the table consists of the following columns:    partitionKeys - The partition key can be a single column, or it can be a compound value composed of two or more columns. The partition key portion of the primary key is required and determines how Amazon Keyspaces stores your data.    name - The name of each partition key column.    clusteringKeys - The optional clustering column portion of your primary key determines how the data is clustered and sorted within each partition.    name - The name of the clustering column.     orderBy - Sets the ascendant (ASC) or descendant (DESC) order modifier. To define a column as static use staticColumns - Static columns store values that are shared by all rows in the same partition:    name - The name of the column.    type - An Amazon Keyspaces data type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--comment",
          description:
            "This parameter allows to enter a description of the table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--capacity-specification",
          description:
            "Specifies the read/write throughput capacity mode for the table. The options are:    throughputMode:PAY_PER_REQUEST and     throughputMode:PROVISIONED - Provisioned capacity mode requires readCapacityUnits and writeCapacityUnits as input.   The default is throughput_mode:PAY_PER_REQUEST. For more information, see Read/write capacity modes in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-specification",
          description:
            "Specifies how the encryption key for encryption at rest is managed for the table. You can choose one of the following KMS key (KMS key):    type:AWS_OWNED_KMS_KEY - This key is owned by Amazon Keyspaces.     type:CUSTOMER_MANAGED_KMS_KEY - This key is stored in your account and is created, owned, and managed by you. This option requires the kms_key_identifier of the KMS key in Amazon Resource Name (ARN) format as input.   The default is type:AWS_OWNED_KMS_KEY. For more information, see Encryption at rest in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--point-in-time-recovery",
          description:
            "Specifies if pointInTimeRecovery is enabled or disabled for the table. The options are:    status=ENABLED     status=DISABLED    If it's not specified, the default is status=DISABLED. For more information, see Point-in-time recovery in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ttl",
          description:
            "Enables Time to Live custom settings for the table. The options are:    status:enabled     status:disabled    The default is status:disabled. After ttl is enabled, you can't disable it for the table. For more information, see Expiring data by using Amazon Keyspaces Time to Live (TTL) in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-time-to-live",
          description:
            "The default Time to Live setting in seconds for the table. For more information, see Setting the default TTL value for a table in the Amazon Keyspaces Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pair tags to be attached to the resource.  For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-side-timestamps",
          description:
            'Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:    status: "enabled"    Once client-side timestamps are enabled for a table, this setting cannot be disabled',
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-scaling-specification",
          description:
            "The optional auto scaling settings for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity automatically on your behalf. Auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide. By default, auto scaling is disabled for a table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-specifications",
          description:
            "The optional Amazon Web Services Region specific settings of a multi-Region table. These settings overwrite the general settings of the table for the specified Region.  For a multi-Region table in provisioned capacity mode, you can configure the table's read capacity differently for each Region's replica. The write capacity, however, remains synchronized between all replicas to ensure that there's enough capacity to replicate writes across all Regions. To define the read capacity for a table replica in a specific Region, you can do so by configuring the following parameters.    region: The Region where these settings are applied. (Required)    readCapacityUnits: The provisioned read capacity units. (Optional)    readCapacityAutoScaling: The read capacity auto scaling settings for the table. (Optional)",
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
      name: "create-type",
      description:
        "The CreateType operation creates a new user-defined type in the specified keyspace.  To configure the required permissions, see Permissions to create a UDT in the Amazon Keyspaces Developer Guide. For more information, see User-defined types (UDTs) in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The name of the user-defined type.  UDT names must contain 48 characters or less, must begin with an alphabetic character, and can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically into lower case characters.  Alternatively, you can declare a UDT name in double quotes. When declaring a UDT name inside double quotes, Amazon Keyspaces preserves upper casing and allows special characters. You can also use double quotes as part of the name when you create the UDT, but you must escape each double quote character with an additional double quote character",
          args: {
            name: "string",
          },
        },
        {
          name: "--field-definitions",
          description:
            "The field definitions, consisting of names and types, that define this type",
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
      name: "delete-keyspace",
      description:
        "The DeleteKeyspace operation deletes a keyspace and all of its tables",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace to be deleted",
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
      name: "delete-table",
      description:
        "The DeleteTable operation deletes a table and all of its data. After a DeleteTable request is received, the specified table is in the DELETING state until Amazon Keyspaces completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is either in the CREATING or UPDATING states, then Amazon Keyspaces returns a ResourceInUseException. If the specified table does not exist, Amazon Keyspaces returns a ResourceNotFoundException. If the table is already in the DELETING state, no error is returned",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace of the to be deleted table",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to be deleted",
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
      name: "delete-type",
      description:
        "The DeleteType operation deletes a user-defined type (UDT). You can only delete a type that is not used in a table or another UDT.  To configure the required permissions, see Permissions to delete a UDT in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace of the to be deleted type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description: "The name of the type to be deleted",
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
      name: "get-keyspace",
      description:
        "Returns the name of the specified keyspace, the Amazon Resource Name (ARN), the replication strategy, the Amazon Web Services Regions of a multi-Region keyspace, and the status of newly added Regions after an UpdateKeyspace operation",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace",
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
      name: "get-table",
      description:
        "Returns information about the table, including the table's name and current status, the keyspace name, configuration settings, and metadata. To read table metadata using GetTable, the IAM principal needs Select action permissions for the table and the system keyspace",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace that the table is stored in",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table",
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
      name: "get-table-auto-scaling-settings",
      description:
        "Returns auto scaling related settings of the specified table in JSON format. If the table is a multi-Region table, the Amazon Web Services Region specific auto scaling settings of the table are included. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide.   GetTableAutoScalingSettings can't be used as an action in an IAM policy.  To define permissions for GetTableAutoScalingSettings, you must allow the following two actions in the IAM policy statement's Action element:    application-autoscaling:DescribeScalableTargets     application-autoscaling:DescribeScalingPolicies",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table",
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
      name: "get-type",
      description:
        "The GetType operation returns information about the type, for example the field definitions, the timestamp when the type was last modified, the level of nesting, the status, and details about if the type is used in other types and tables.  To read keyspace metadata using GetType, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace that contains this type",
          args: {
            name: "string",
          },
        },
        {
          name: "--type-name",
          description:
            "The formatted name of the type. For example, if the name of the type was created without double quotes, Amazon Keyspaces saved the name in lower-case characters. If the name was created in double quotes, you must use double quotes to specify the type name",
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
      name: "list-keyspaces",
      description: "The ListKeyspaces operation returns a list of keyspaces",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of keyspaces to return in the output. If the total number of keyspaces available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
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
      name: "list-tables",
      description:
        "The ListTables operation returns a list of tables for a specified keyspace. To read keyspace metadata using ListTables, the IAM principal needs Select action permissions for the system keyspace",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of tables to return in the output. If the total number of tables available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--keyspace-name",
          description: "The name of the keyspace",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of all tags associated with the specified Amazon Keyspaces resource. To read keyspace metadata using ListTagsForResource, the IAM principal needs Select action permissions for the specified resource and the system keyspace",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Keyspaces resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of tags to return in the output. If the total number of tags available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
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
      name: "list-types",
      description:
        "The ListTypes operation returns a list of types for a specified keyspace.  To read keyspace metadata using ListTypes, the IAM principal needs Select action permissions for the system keyspace. To configure the required permissions, see Permissions to view a UDT in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--next-token",
          description:
            "The pagination token. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The total number of types to return in the output. If the total number of types available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as an argument of a subsequent API invocation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--keyspace-name",
          description:
            "The name of the keyspace that contains the listed types",
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
      name: "restore-table",
      description:
        "Restores the table to the specified point in time within the earliest_restorable_timestamp and the current time. For more information about restore points, see  Time window for PITR continuous backups in the Amazon Keyspaces Developer Guide. Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account. When you restore using point in time recovery, Amazon Keyspaces restores your source table's schema and data to the state based on the selected timestamp (day:hour:minute:second) to a new table. The Time to Live (TTL) settings are also restored to the state based on the selected timestamp. In addition to the table's schema, data, and TTL settings, RestoreTable restores the capacity mode, auto scaling settings, encryption settings, and point-in-time recovery settings from the source table. Unlike the table's schema data and TTL settings, which are restored based on the selected timestamp, these settings are always restored based on the table's settings as of the current time or when the table was deleted. You can also overwrite these settings during restore:   Read/write capacity mode   Provisioned throughput capacity units   Auto scaling settings   Point-in-time (PITR) settings   Tags   For more information, see PITR restore settings in the Amazon Keyspaces Developer Guide. Note that the following settings are not restored, and you must configure them manually for the new table:   Identity and Access Management (IAM) policies   Amazon CloudWatch metrics and alarms",
      options: [
        {
          name: "--source-keyspace-name",
          description: "The keyspace name of the source table",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-table-name",
          description: "The name of the source table",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-keyspace-name",
          description: "The name of the target keyspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-table-name",
          description: "The name of the target table",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-timestamp",
          description: "The restore timestamp in ISO 8601 format",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--capacity-specification-override",
          description:
            "Specifies the read/write throughput capacity mode for the target table. The options are:    throughputMode:PAY_PER_REQUEST     throughputMode:PROVISIONED - Provisioned capacity mode requires readCapacityUnits and writeCapacityUnits as input.   The default is throughput_mode:PAY_PER_REQUEST. For more information, see Read/write capacity modes in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-specification-override",
          description:
            "Specifies the encryption settings for the target table. You can choose one of the following KMS key (KMS key):    type:AWS_OWNED_KMS_KEY - This key is owned by Amazon Keyspaces.     type:CUSTOMER_MANAGED_KMS_KEY - This key is stored in your account and is created, owned, and managed by you. This option requires the kms_key_identifier of the KMS key in Amazon Resource Name (ARN) format as input.    The default is type:AWS_OWNED_KMS_KEY. For more information, see Encryption at rest in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--point-in-time-recovery-override",
          description:
            "Specifies the pointInTimeRecovery settings for the target table. The options are:    status=ENABLED     status=DISABLED    If it's not specified, the default is status=DISABLED. For more information, see Point-in-time recovery in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags-override",
          description:
            "A list of key-value pair tags to be attached to the restored table.  For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--auto-scaling-specification",
          description:
            "The optional auto scaling settings for the restored table in provisioned capacity mode. Specifies if the service can manage throughput capacity of a provisioned table automatically on your behalf. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-specifications",
          description:
            "The optional Region specific settings of a multi-Regional table",
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
      name: "tag-resource",
      description:
        "Associates a set of tags with a Amazon Keyspaces resource. You can then activate these user-defined tags so that they appear on the Cost Management Console for cost allocation tracking. For more information, see Adding tags and labels to Amazon Keyspaces resources in the Amazon Keyspaces Developer Guide. For IAM policy examples that show how to control access to Amazon Keyspaces resources based on tags, see Amazon Keyspaces resource access based on tags in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Keyspaces resource to which to add tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be assigned to the Amazon Keyspaces resource",
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
        "Removes the association of tags from a Amazon Keyspaces resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Keyspaces resource that the tags will be removed from. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of existing tags to be removed from the Amazon Keyspaces resource",
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
      name: "update-keyspace",
      description:
        "Adds a new Amazon Web Services Region to the keyspace. You can add a new Region to a keyspace that is either a single or a multi-Region keyspace. Amazon Keyspaces is going to replicate all tables in the keyspace to the new Region. To successfully replicate all tables to the new Region, they must use client-side timestamps for conflict resolution. To enable client-side timestamps, specify clientSideTimestamps.status = enabled when invoking the API. For more information about client-side timestamps, see Client-side timestamps in Amazon Keyspaces in the Amazon Keyspaces Developer Guide. To add a Region to a keyspace using the UpdateKeyspace API, the IAM principal needs permissions for the following IAM actions:    cassandra:Alter     cassandra:AlterMultiRegionResource     cassandra:Create     cassandra:CreateMultiRegionResource     cassandra:Select     cassandra:SelectMultiRegionResource     cassandra:Modify     cassandra:ModifyMultiRegionResource    If the keyspace contains a table that is configured in provisioned mode with auto scaling enabled, the following additional IAM actions need to be allowed.    application-autoscaling:RegisterScalableTarget     application-autoscaling:DeregisterScalableTarget     application-autoscaling:DescribeScalableTargets     application-autoscaling:PutScalingPolicy     application-autoscaling:DescribeScalingPolicies    To use the UpdateKeyspace API, the IAM principal also needs permissions to create a service-linked role with the following elements:    iam:CreateServiceLinkedRole - The action the principal can perform.    arn:aws:iam::*:role/aws-service-role/replication.cassandra.amazonaws.com/AWSServiceRoleForKeyspacesReplication - The resource that the action can be performed on.     iam:AWSServiceName: replication.cassandra.amazonaws.com - The only Amazon Web Services service that this role can be attached to is Amazon Keyspaces.   For more information, see Configure the IAM permissions required to add an Amazon Web Services Region to a keyspace in the Amazon Keyspaces Developer Guide",
      options: [
        {
          name: "--keyspace-name",
          description: "The name of the keyspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-specification",
          description:
            "The replication specification of the keyspace includes:    regionList - up to six Amazon Web Services Regions where the keyspace is replicated in.    replicationStrategy - the required value is SINGLE_REGION or MULTI_REGION",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-side-timestamps",
          description:
            "The client-side timestamp setting of the table. For more information, see How it works: Amazon Keyspaces client-side timestamps in the Amazon Keyspaces Developer Guide",
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
      name: "update-table",
      description:
        "Adds new columns to the table or updates one of the table's settings, for example capacity mode, auto scaling, encryption, point-in-time recovery, or ttl settings. Note that you can only update one specific table setting per update operation",
      options: [
        {
          name: "--keyspace-name",
          description:
            "The name of the keyspace the specified table is stored in",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-columns",
          description:
            "For each column to be added to the specified table:    name - The name of the column.    type - An Amazon Keyspaces data type. For more information, see Data types in the Amazon Keyspaces Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--capacity-specification",
          description:
            "Modifies the read/write throughput capacity mode for the table. The options are:    throughputMode:PAY_PER_REQUEST and     throughputMode:PROVISIONED - Provisioned capacity mode requires readCapacityUnits and writeCapacityUnits as input.   The default is throughput_mode:PAY_PER_REQUEST. For more information, see Read/write capacity modes in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-specification",
          description:
            "Modifies the encryption settings of the table. You can choose one of the following KMS key (KMS key):    type:AWS_OWNED_KMS_KEY - This key is owned by Amazon Keyspaces.     type:CUSTOMER_MANAGED_KMS_KEY - This key is stored in your account and is created, owned, and managed by you. This option requires the kms_key_identifier of the KMS key in Amazon Resource Name (ARN) format as input.    The default is AWS_OWNED_KMS_KEY. For more information, see Encryption at rest in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--point-in-time-recovery",
          description:
            "Modifies the pointInTimeRecovery settings of the table. The options are:    status=ENABLED     status=DISABLED    If it's not specified, the default is status=DISABLED. For more information, see Point-in-time recovery in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ttl",
          description:
            "Modifies Time to Live custom settings for the table. The options are:    status:enabled     status:disabled    The default is status:disabled. After ttl is enabled, you can't disable it for the table. For more information, see Expiring data by using Amazon Keyspaces Time to Live (TTL) in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-time-to-live",
          description:
            "The default Time to Live setting in seconds for the table. For more information, see Setting the default TTL value for a table in the Amazon Keyspaces Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-side-timestamps",
          description:
            'Enables client-side timestamps for the table. By default, the setting is disabled. You can enable client-side timestamps with the following option:    status: "enabled"    Once client-side timestamps are enabled for a table, this setting cannot be disabled',
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-scaling-specification",
          description:
            "The optional auto scaling settings to update for a table in provisioned capacity mode. Specifies if the service can manage throughput capacity of a provisioned table automatically on your behalf. Amazon Keyspaces auto scaling helps you provision throughput capacity for variable workloads efficiently by increasing and decreasing your table's read and write capacity automatically in response to application traffic. If auto scaling is already enabled for the table, you can use UpdateTable to update the minimum and maximum values or the auto scaling policy settings independently. For more information, see Managing throughput capacity automatically with Amazon Keyspaces auto scaling in the Amazon Keyspaces Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-specifications",
          description: "The Region specific settings of a multi-Regional table",
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
