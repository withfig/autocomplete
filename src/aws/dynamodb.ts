const completionSpec: Fig.Spec = {
  name: "dynamodb",
  description:
    "Amazon DynamoDB Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB lets you offload the administrative burdens of operating and scaling a distributed database, so that you don't have to worry about hardware provisioning, setup and configuration, replication, software patching, or cluster scaling. With DynamoDB, you can create database tables that can store and retrieve any amount of data, and serve any level of request traffic. You can scale up or scale down your tables' throughput capacity without downtime or performance degradation, and use the Amazon Web Services Management Console to monitor resource utilization and performance metrics. DynamoDB automatically spreads the data and traffic for your tables over a sufficient number of servers to handle your throughput and storage requirements, while maintaining consistent and fast performance. All of your data is stored on solid state disks (SSDs) and automatically replicated across multiple Availability Zones in an Amazon Web Services Region, providing built-in high availability and data durability",
  subcommands: [
    {
      name: "batch-execute-statement",
      description:
        "This operation allows you to perform batch reads or writes on data stored in DynamoDB, using PartiQL. Each read statement in a BatchExecuteStatement must specify an equality condition on all key attributes. This enforces that each SELECT statement in a batch returns at most a single item. For more information, see Running batch operations with PartiQL for DynamoDB .  The entire batch must consist of either read statements or write statements, you cannot mix both in one batch.   A HTTP 200 response does not mean that all statements in the BatchExecuteStatement succeeded. Error details for individual statements can be found under the Error field of the BatchStatementResponse for each statement",
      options: [
        {
          name: "--statements",
          description:
            "The list of PartiQL statements representing the batch to run",
          args: {
            name: "list",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
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
      name: "batch-get-item",
      description:
        'The BatchGetItem operation returns the attributes of one or more items from one or more tables. You identify requested items by primary key. A single operation can retrieve up to 16 MB of data, which can contain as many as 100 items. BatchGetItem returns a partial result if the response size limit is exceeded, the table\'s provisioned throughput is exceeded, more than 1MB per partition is requested, or an internal processing failure occurs. If a partial result is returned, the operation returns a value for UnprocessedKeys. You can use this value to retry the operation starting with the next item to get.  If you request more than 100 items, BatchGetItem returns a ValidationException with the message "Too many items requested for the BatchGetItem call."  For example, if you ask to retrieve 100 items, but each individual item is 300 KB in size, the system returns 52 items (so as not to exceed the 16 MB limit). It also returns an appropriate UnprocessedKeys value so you can get the next page of results. If desired, your application can include its own logic to assemble the pages of results into one dataset. If none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchGetItem returns a ProvisionedThroughputExceededException. If at least one of the items is successfully processed, then BatchGetItem completes successfully, while returning the keys of the unread items in UnprocessedKeys.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  By default, BatchGetItem performs eventually consistent reads on every table in the request. If you want strongly consistent reads instead, you can set ConsistentRead to true for any or all tables. In order to minimize response latency, BatchGetItem may retrieve items in parallel. When designing your application, keep in mind that DynamoDB does not return items in any particular order. To help parse the response by item, include the primary key values for the items in your request in the ProjectionExpression parameter. If a requested item does not exist, it is not returned in the result. Requests for nonexistent items consume the minimum read capacity units according to the type of read. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide',
      options: [
        {
          name: "--request-items",
          description:
            'A map of one or more table names or table ARNs and, for each table, a map that describes one or more items to retrieve from that table. Each table name or ARN can be used only once per BatchGetItem request. Each element in the map of items to retrieve consists of the following:    ConsistentRead - If true, a strongly consistent read is used; if false (the default), an eventually consistent read is used.    ExpressionAttributeNames - One or more substitution tokens for attribute names in the ProjectionExpression parameter. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information about expression attribute names, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    Keys - An array of primary key attribute values that define specific items in the table. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide the partition key value. For a composite key, you must provide both the partition key value and the sort key value.    ProjectionExpression - A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide.    AttributesToGet - This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
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
      name: "batch-write-item",
      description:
        "The BatchWriteItem operation puts or deletes multiple items in one or more tables. A single call to BatchWriteItem can transmit up to 16MB of data over the network, consisting of up to 25 item put or delete operations. While individual items can be up to 400 KB once stored, it's important to note that an item's representation might be greater than 400KB while being sent in DynamoDB's JSON format for the API call. For more details on this distinction, see Naming Rules and Data Types.   BatchWriteItem cannot update items. If you perform a BatchWriteItem operation on an existing item, that item's values will be overwritten by the operation and it will appear like it was updated. To update items, we recommend you use the UpdateItem action.  The individual PutItem and DeleteItem operations specified in BatchWriteItem are atomic; however BatchWriteItem as a whole is not. If any requested operations fail because the table's provisioned throughput is exceeded or an internal processing failure occurs, the failed operations are returned in the UnprocessedItems response parameter. You can investigate and optionally resend the requests. Typically, you would call BatchWriteItem in a loop. Each iteration would check for unprocessed items and submit a new BatchWriteItem request with those unprocessed items until all items have been processed. For tables and indexes with provisioned capacity, if none of the items can be processed due to insufficient provisioned throughput on all of the tables in the request, then BatchWriteItem returns a ProvisionedThroughputExceededException. For all tables and indexes, if none of the items can be processed due to other throttling scenarios (such as exceeding partition level limits), then BatchWriteItem returns a ThrottlingException.  If DynamoDB returns any unprocessed items, you should retry the batch operation on those items. However, we strongly recommend that you use an exponential backoff algorithm. If you retry the batch operation immediately, the underlying read or write requests can still fail due to throttling on the individual tables. If you delay the batch operation using exponential backoff, the individual requests in the batch are much more likely to succeed. For more information, see Batch Operations and Error Handling in the Amazon DynamoDB Developer Guide.  With BatchWriteItem, you can efficiently write or delete large amounts of data, such as from Amazon EMR, or copy data from another database into DynamoDB. In order to improve performance with these large-scale operations, BatchWriteItem does not behave in the same way as individual PutItem and DeleteItem calls would. For example, you cannot specify conditions on individual put and delete requests, and BatchWriteItem does not return deleted items in the response. If you use a programming language that supports concurrency, you can use threads to write items in parallel. Your application must include the necessary logic to manage the threads. With languages that don't support threading, you must update or delete the specified items one at a time. In both situations, BatchWriteItem performs the specified put and delete operations in parallel, giving you the power of the thread pool approach without having to introduce complexity into your application. Parallel processing reduces latency, but each specified put and delete request consumes the same number of write capacity units whether it is processed in parallel or not. Delete operations on nonexistent items consume one write capacity unit. If one or more of the following is true, DynamoDB rejects the entire batch write operation:   One or more tables specified in the BatchWriteItem request does not exist.   Primary key attributes specified on an item in the request do not match those in the corresponding table's primary key schema.   You try to perform multiple operations on the same item in the same BatchWriteItem request. For example, you cannot put and delete the same item in the same BatchWriteItem request.     Your request contains at least two items with identical hash and range keys (which essentially is two put operations).    There are more than 25 requests in the batch.   Any individual item in a batch exceeds 400 KB.   The total request size exceeds 16 MB.   Any individual items with keys exceeding the key length limits. For a partition key, the limit is 2048 bytes and for a sort key, the limit is 1024 bytes",
      options: [
        {
          name: "--request-items",
          description:
            "A map of one or more table names or table ARNs and, for each table, a list of operations to be performed (DeleteRequest or PutRequest). Each element in the map consists of the following:    DeleteRequest - Perform a DeleteItem operation on the specified item. The item to be deleted is identified by a Key subelement:    Key - A map of primary key attribute values that uniquely identify the item. Each entry in this map consists of an attribute name and an attribute value. For each primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.      PutRequest - Perform a PutItem operation on the specified item. The item to be put is identified by an Item subelement:    Item - A map of attributes and their values. Each entry in this map consists of an attribute name and an attribute value. Attribute values must not be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests that contain empty values are rejected with a ValidationException exception. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition",
          args: {
            name: "map",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-item-collection-metrics",
          description:
            "Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned",
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
      name: "create-backup",
      description:
        "Creates a backup for an existing table.  Each time you create an on-demand backup, the entire table data is backed up. There is no limit to the number of on-demand backups that can be taken.   When you create an on-demand backup, a time marker of the request is cataloged, and the backup is created asynchronously, by applying all changes until the time of the request to the last full table snapshot. Backup requests are processed instantaneously and become available for restore within minutes.  You can call CreateBackup at a maximum rate of 50 times per second. All backups in DynamoDB work without consuming any provisioned throughput on the table.  If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed to contain all data committed to the table up to 14:24:00, and data committed after 14:26:00 will not be. The backup might contain data modifications made between 14:24:00 and 14:26:00. On-demand backup does not support causal consistency.   Along with data, the following are also included on the backups:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Streams   Provisioned read and write capacity",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-name",
          description: "Specified name for the backup",
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
      name: "create-global-table",
      description:
        "Creates a global table from an existing table. A global table creates a replication relationship between two or more DynamoDB tables with the same table name in the provided Regions.   This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.  If you want to add a new replica table to a global table, each of the following conditions must be true:   The table must have the same primary key as all of the other replicas.   The table must have the same name as all of the other replicas.   The table must have DynamoDB Streams enabled, with the stream containing both the new and the old images of the item.   None of the replica tables in the global table can contain any data.    If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     If local secondary indexes are specified, then the following conditions must also be met:     The local secondary indexes must have the same name.     The local secondary indexes must have the same hash key and sort key (if present).      Write capacity settings should be set consistently across your replica tables and secondary indexes. DynamoDB strongly recommends enabling auto scaling to manage the write capacity settings for all of your global tables replicas and indexes.   If you prefer to manage write capacity settings manually, you should provision equal replicated write capacity units to your replica tables. You should also provision equal replicated write capacity units to matching secondary indexes across your global table",
      options: [
        {
          name: "--global-table-name",
          description: "The global table name",
          args: {
            name: "string",
          },
        },
        {
          name: "--replication-group",
          description: "The Regions where the global table needs to be created",
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
      name: "create-table",
      description:
        "The CreateTable operation adds a new table to your account. In an Amazon Web Services account, table names must be unique within each Region. That is, you can have two tables with same name if you create the tables in different Regions.  CreateTable is an asynchronous operation. Upon receiving a CreateTable request, DynamoDB immediately returns a response with a TableStatus of CREATING. After the table is created, DynamoDB sets the TableStatus to ACTIVE. You can perform read and write operations only on an ACTIVE table.  You can optionally define secondary indexes on the new table, as part of the CreateTable operation. If you want to create multiple tables with secondary indexes on them, you must create the tables sequentially. Only one table with secondary indexes can be in the CREATING state at any given time. You can use the DescribeTable action to check the table status",
      options: [
        {
          name: "--attribute-definitions",
          description:
            "An array of attributes that describe the key schema for the table and indexes",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table to create. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-schema",
          description:
            'Specifies the attributes that make up the primary key for a table or an index. The attributes in KeySchema must also be defined in the AttributeDefinitions array. For more information, see Data Model in the Amazon DynamoDB Developer Guide. Each KeySchemaElement in the array is composed of:    AttributeName - The name of this key attribute.    KeyType - The role that the key attribute will assume:    HASH - partition key    RANGE - sort key      The partition key of an item is also known as its hash attribute. The term "hash attribute" derives from the DynamoDB usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values. The sort key of an item is also known as its range attribute. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.  For a simple primary key (partition key), you must provide exactly one element with a KeyType of HASH. For a composite primary key (partition key and sort key), you must provide exactly two elements, in this order: The first element must have a KeyType of HASH, and the second element must have a KeyType of RANGE. For more information, see Working with Tables in the Amazon DynamoDB Developer Guide',
          args: {
            name: "list",
          },
        },
        {
          name: "--local-secondary-indexes",
          description:
            "One or more local secondary indexes (the maximum is 5) to be created on the table. Each index is scoped to a given partition key value. There is a 10 GB size limit per partition key value; otherwise, the size of a local secondary index is unconstrained. Each local secondary index in the array includes the following:    IndexName - The name of the local secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the local secondary index. The key schema must begin with the same partition key as the table.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total",
          args: {
            name: "list",
          },
        },
        {
          name: "--global-secondary-indexes",
          description:
            "One or more global secondary indexes (the maximum is 20) to be created on the table. Each global secondary index in the array includes the following:    IndexName - The name of the global secondary index. Must be unique only for this table.     KeySchema - Specifies the key schema for the global secondary index.    Projection - Specifies attributes that are copied (projected) from the table into the index. These are in addition to the primary key attributes and index key attributes, which are automatically projected. Each attribute specification is composed of:    ProjectionType - One of the following:    KEYS_ONLY - Only the index and primary keys are projected into the index.    INCLUDE - Only the specified table attributes are projected into the index. The list of projected attributes is in NonKeyAttributes.    ALL - All of the table attributes are projected into the index.      NonKeyAttributes - A list of one or more non-key attribute names that are projected into the secondary index. The total count of attributes provided in NonKeyAttributes, summed across all of the secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.      ProvisionedThroughput - The provisioned throughput settings for the global secondary index, consisting of read and write capacity units",
          args: {
            name: "list",
          },
        },
        {
          name: "--billing-mode",
          description:
            "Controls how you are charged for read and write throughput and how you manage capacity. This setting can be changed later.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned capacity mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-demand capacity mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-throughput",
          description:
            "Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the UpdateTable operation.  If you set BillingMode as PROVISIONED, you must specify this property. If you set BillingMode as PAY_PER_REQUEST, you cannot specify this property. For current minimum and maximum provisioned throughput values, see Service, Account, and Table Quotas in the Amazon DynamoDB Developer Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stream-specification",
          description:
            "The settings for DynamoDB Streams on the table. These settings consist of:    StreamEnabled - Indicates whether DynamoDB Streams is to be enabled (true) or disabled (false).    StreamViewType - When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values for StreamViewType are:    KEYS_ONLY - Only the key attributes of the modified item are written to the stream.    NEW_IMAGE - The entire item, as it appears after it was modified, is written to the stream.    OLD_IMAGE - The entire item, as it appeared before it was modified, is written to the stream.    NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are written to the stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sse-specification",
          description:
            "Represents the settings used to enable server-side encryption",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs to label the table. For more information, see Tagging for DynamoDB",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-class",
          description:
            "The table class of the new table. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection-enabled",
          description:
            "Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table",
        },
        {
          name: "--no-deletion-protection-enabled",
          description:
            "Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table",
        },
        {
          name: "--warm-throughput",
          description:
            "Represents the warm throughput (in read units per second and write units per second) for creating a table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-policy",
          description:
            "An Amazon Web Services resource-based policy document in JSON format that will be attached to the table. When you attach a resource-based policy while creating a table, the policy application is strongly consistent. The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that apply for resource-based policies, see Resource-based policy considerations.  You need to specify the CreateTable and PutResourcePolicy IAM actions for authorizing a user to create a table with a resource-based policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-demand-throughput",
          description:
            "Sets the maximum number of read and write units for the specified table in on-demand capacity mode. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both",
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
      name: "delete-backup",
      description:
        "Deletes an existing backup of a table. You can call DeleteBackup at a maximum rate of 10 times per second",
      options: [
        {
          name: "--backup-arn",
          description: "The ARN associated with the backup",
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
      name: "delete-item",
      description:
        "Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value. In addition to deleting an item, you can also return the item's attribute values in the same operation, using the ReturnValues parameter. Unless you specify conditions, the DeleteItem is an idempotent operation; running it multiple times on the same item or attribute does not result in an error response. Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table from which to delete the item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "A map of attribute names to AttributeValue objects, representing the primary key of the item to delete. For the primary key, you must provide all of the key attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--conditional-operator",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-values",
          description:
            "Use ReturnValues if you want to get the item attributes as they appeared before they were deleted. For DeleteItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - The content of the old item is returned.   There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.  The ReturnValues parameter is used by several DynamoDB operations; however, DeleteItem does not recognize any values other than NONE or ALL_OLD",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-item-collection-metrics",
          description:
            "Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--condition-expression",
          description:
            "A condition that must be satisfied in order for a conditional DeleteItem to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | <> | < | > | <= | >= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information about condition expressions, see Condition Expressions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--expression-attribute-values",
          description:
            'One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--return-values-on-condition-check-failure",
          description:
            "An optional parameter that returns the item attributes for a DeleteItem operation that failed a condition check. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed",
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
      description:
        "Deletes the resource-based policy attached to the resource, which can be a table or stream.  DeleteResourcePolicy is an idempotent operation; running it multiple times on the same resource doesn't result in an error response, unless you specify an ExpectedRevisionId, which will then return a PolicyNotFoundException.  To make sure that you don't inadvertently lock yourself out of your own resources, the root principal in your Amazon Web Services account can perform DeleteResourcePolicy requests, even if your resource-based policy explicitly denies the root principal's access.     DeleteResourcePolicy is an asynchronous operation. If you issue a GetResourcePolicy request immediately after running the DeleteResourcePolicy request, DynamoDB might still return the deleted policy. This is because the policy for your resource might not have been deleted yet. Wait for a few seconds, and then try the GetResourcePolicy request again",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the DynamoDB resource from which the policy will be removed. The resources you can specify include tables and streams. If you remove the policy of a table, it will also remove the permissions for the table's indexes defined in that policy document. This is because index permissions are defined in the table's policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "A string value that you can use to conditionally delete your policy. When you provide an expected revision ID, if the revision ID of the existing policy on the resource doesn't match or if there's no policy attached to the resource, the request will fail and return a PolicyNotFoundException",
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
        "The DeleteTable operation deletes a table and all of its items. After a DeleteTable request, the specified table is in the DELETING state until DynamoDB completes the deletion. If the table is in the ACTIVE state, you can delete it. If a table is in CREATING or UPDATING states, then DynamoDB returns a ResourceInUseException. If the specified table does not exist, DynamoDB returns a ResourceNotFoundException. If table is already in the DELETING state, no error is returned.   For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version).    DynamoDB might continue to accept data read and write operations, such as GetItem and PutItem, on a table in the DELETING state until the table deletion is complete. For the full list of table states, see TableStatus.  When you delete a table, any indexes on that table are also deleted. If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes into the DISABLED state, and the stream is automatically deleted after 24 hours. Use the DescribeTable action to check the status of the table",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to delete. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "describe-backup",
      description:
        "Describes an existing backup of a table. You can call DescribeBackup at a maximum rate of 10 times per second",
      options: [
        {
          name: "--backup-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the backup",
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
      name: "describe-continuous-backups",
      description:
        "Checks the status of continuous backups and point in time recovery on the specified table. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  After continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days.  You can call DescribeContinuousBackups at a maximum rate of 10 times per second",
      options: [
        {
          name: "--table-name",
          description:
            "Name of the table for which the customer wants to check the continuous backups and point in time recovery settings. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "describe-contributor-insights",
      description:
        "Returns information about contributor insights for a given table or global secondary index",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of the global secondary index to describe, if applicable",
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
      name: "describe-endpoints",
      description:
        "Returns the regional endpoint information. For more information on policy permissions, please see Internetwork traffic privacy",
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
      name: "describe-export",
      description: "Describes an existing table export",
      options: [
        {
          name: "--export-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the export",
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
      name: "describe-global-table",
      description:
        "Returns information about the specified global table.  This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables",
      options: [
        {
          name: "--global-table-name",
          description: "The name of the global table",
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
      name: "describe-global-table-settings",
      description:
        "Describes Region-specific settings for a global table.  This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables",
      options: [
        {
          name: "--global-table-name",
          description: "The name of the global table to describe",
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
      name: "describe-import",
      description: "Represents the properties of the import",
      options: [
        {
          name: "--import-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the table you're importing to",
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
      name: "describe-kinesis-streaming-destination",
      description: "Returns information about the status of Kinesis streaming",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table being described. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "describe-limits",
      description:
        "Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there. When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see Service, Account, and Table Quotas page in the Amazon DynamoDB Developer Guide. Although you can increase these quotas by filing a case at Amazon Web Services Support Center, obtaining the increase is not instantaneous. The DescribeLimits action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota. For example, you could use one of the Amazon Web Services SDKs to do the following:   Call DescribeLimits for a particular Region to obtain your current account quotas on provisioned capacity there.   Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both.   Call ListTables to obtain a list of all your DynamoDB tables.   For each table name listed by ListTables, do the following:   Call DescribeTable with the table name.   Use the data returned by DescribeTable to add the read capacity units and write capacity units provisioned for the table itself to your variables.   If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.     Report the account quotas for that Region returned by DescribeLimits, along with the total current provisioned capacity levels you have calculated.   This will let you see whether you are getting close to your account-level quotas. The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes. For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas.   DescribeLimits should only be called periodically. You can expect throttling errors if you call it more than once in a minute.  The DescribeLimits Request element has no content",
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
      name: "describe-table",
      description:
        "Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.  For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version).    If you issue a DescribeTable request immediately after a CreateTable request, DynamoDB might return a ResourceNotFoundException. This is because DescribeTable uses an eventually consistent query, and the metadata for your table might not be available at that moment. Wait for a few seconds, and then try the DescribeTable request again",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "describe-table-replica-auto-scaling",
      description:
        "Describes auto scaling settings across replicas of the global table at once.  For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version)",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "describe-time-to-live",
      description:
        "Gives a description of the Time to Live (TTL) status on the specified table",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to be described. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
      name: "disable-kinesis-streaming-destination",
      description:
        "Stops replication from the DynamoDB table to the Kinesis data stream. This is done without deleting either of the resources",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the DynamoDB table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description: "The ARN for a Kinesis data stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-kinesis-streaming-configuration",
          description:
            "The source for the Kinesis streaming information that is being enabled",
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
      name: "enable-kinesis-streaming-destination",
      description:
        "Starts table data replication to the specified Kinesis data stream at a timestamp chosen during the enable workflow. If this operation doesn't return results immediately, use DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is ACTIVE",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the DynamoDB table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description: "The ARN for a Kinesis data stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-kinesis-streaming-configuration",
          description:
            "The source for the Kinesis streaming information that is being enabled",
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
      name: "execute-statement",
      description:
        "This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL. For PartiQL reads (SELECT statement), if the total number of processed items exceeds the maximum dataset size limit of 1 MB, the read stops and results are returned to the user as a LastEvaluatedKey value to continue the read in a subsequent operation. If the filter criteria in WHERE clause does not match any data, the read will return an empty result set. A single SELECT statement response can return up to the maximum number of items (if using the Limit parameter) or a maximum of 1 MB of data (and then apply any filtering to the results using WHERE clause). If LastEvaluatedKey is present in the response, you need to paginate the result set. If NextToken is present, you need to paginate the result set and include NextToken",
      options: [
        {
          name: "--statement",
          description:
            "The PartiQL statement representing the operation to run",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description: "The parameters for the PartiQL statement, if any",
          args: {
            name: "list",
          },
        },
        {
          name: "--consistent-read",
          description:
            "The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used",
        },
        {
          name: "--no-consistent-read",
          description:
            "The consistency of a read operation. If set to true, then a strongly consistent read is used; otherwise, an eventually consistent read is used",
        },
        {
          name: "--next-token",
          description:
            "Set this value to get remaining results, if NextToken was returned in the statement response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, along with a key in LastEvaluatedKey to apply in a subsequent operation so you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--return-values-on-condition-check-failure",
          description:
            "An optional parameter that returns the item attributes for an ExecuteStatement operation that failed a condition check. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed",
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
      name: "execute-transaction",
      description:
        "This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.  The entire transaction must consist of either read statements or write statements, you cannot mix both in one transaction. The EXISTS function is an exception and can be used to check the condition of specific attributes of the item in a similar manner to ConditionCheck in the TransactWriteItems API",
      options: [
        {
          name: "--transact-statements",
          description:
            "The list of PartiQL statements representing the transaction to run",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Set this value to get remaining results, if NextToken was returned in the statement response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response. For more information, see TransactGetItems and TransactWriteItems",
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
      name: "export-table-to-point-in-time",
      description:
        "Exports table data to an S3 bucket. The table must have point in time recovery enabled, and you can export data from any time within the point in time recovery window",
      options: [
        {
          name: "--table-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the table to export",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-time",
          description:
            "Time in the past from which to export table data, counted in seconds from the start of the Unix epoch. The table export will be a snapshot of the table's state at this point in time",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--client-token",
          description:
            "Providing a ClientToken makes the call to ExportTableToPointInTimeInput idempotent, meaning that multiple identical calls have the same effect as one single call. A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an ImportConflictException",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket",
          description:
            "The name of the Amazon S3 bucket to export the snapshot to",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-owner",
          description:
            "The ID of the Amazon Web Services account that owns the bucket the export will be stored in.  S3BucketOwner is a required parameter when exporting to a S3 bucket in another account",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description:
            "The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-sse-algorithm",
          description:
            "Type of encryption used on the bucket where export data will be stored. Valid values for S3SseAlgorithm are:    AES256 - server-side encryption with Amazon S3 managed keys    KMS - server-side encryption with KMS managed keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-sse-kms-key-id",
          description:
            "The ID of the KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable)",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-format",
          description:
            "The format for the exported data. Valid values for ExportFormat are DYNAMODB_JSON or ION",
          args: {
            name: "string",
          },
        },
        {
          name: "--export-type",
          description:
            "Choice of whether to execute as a full export or incremental export. Valid values are FULL_EXPORT or INCREMENTAL_EXPORT. The default value is FULL_EXPORT. If INCREMENTAL_EXPORT is provided, the IncrementalExportSpecification must also be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--incremental-export-specification",
          description:
            "Optional object containing the parameters specific to an incremental export",
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
      name: "get-item",
      description:
        "The GetItem operation returns a set of attributes for the item with the given primary key. If there is no matching item, GetItem does not return any data and there will be no Item element in the response.  GetItem provides an eventually consistent read by default. If your application requires a strongly consistent read, set ConsistentRead to true. Although a strongly consistent read might take more time than an eventually consistent read, it always returns the last updated value",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table containing the requested item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "A map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key",
          args: {
            name: "map",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--consistent-read",
          description:
            "Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads",
        },
        {
          name: "--no-consistent-read",
          description:
            "Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads",
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--projection-expression",
          description:
            "A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes are returned. If any of the requested attributes are not found, they do not appear in the result. For more information, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
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
      name: "get-resource-policy",
      description:
        "Returns the resource-based policy document attached to the resource, which can be a table or stream, in JSON format.  GetResourcePolicy follows an  eventually consistent  model. The following list describes the outcomes when you issue the GetResourcePolicy request immediately after issuing another request:   If you issue a GetResourcePolicy request immediately after a PutResourcePolicy request, DynamoDB might return a PolicyNotFoundException.   If you issue a GetResourcePolicyrequest immediately after a DeleteResourcePolicy request, DynamoDB might return the policy that was present before the deletion request.   If you issue a GetResourcePolicy request immediately after a CreateTable request, which includes a resource-based policy, DynamoDB might return a ResourceNotFoundException or a PolicyNotFoundException.   Because GetResourcePolicy uses an eventually consistent query, the metadata for your policy or table might not be available at that moment. Wait for a few seconds, and then retry the GetResourcePolicy request. After a GetResourcePolicy request returns a policy created using the PutResourcePolicy request, the policy will be applied in the authorization of requests to the resource. Because this process is eventually consistent, it will take some time to apply the policy to all requests to a resource. Policies that you attach while creating a table using the CreateTable request will always be applied to all requests for that table",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the DynamoDB resource to which the policy is attached. The resources you can specify include tables and streams",
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
      name: "import-table",
      description: "Imports table data from an S3 bucket",
      options: [
        {
          name: "--client-token",
          description:
            "Providing a ClientToken makes the call to ImportTableInput idempotent, meaning that multiple identical calls have the same effect as one single call. A client token is valid for 8 hours after the first request that uses it is completed. After 8 hours, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 8 hours, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 8-hour idempotency window, DynamoDB returns an IdempotentParameterMismatch exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-source",
          description: "The S3 bucket that provides the source for the import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-format",
          description:
            "The format of the source data. Valid values for ImportFormat are CSV, DYNAMODB_JSON or ION",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-format-options",
          description:
            "Additional properties that specify how the input is formatted,",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-compression-type",
          description:
            "Type of compression to be used on the input coming from the imported table",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-creation-parameters",
          description: "Parameters for the table to import the data into",
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
      name: "list-backups",
      description:
        "List DynamoDB backups that are associated with an Amazon Web Services account and weren't made with Amazon Web Services Backup. To list these backups for a given table, specify TableName. ListBackups returns a paginated list of results with at most 1 MB worth of items in a page. You can also specify a maximum number of entries to be returned in a page. In the request, start time is inclusive, but end time is exclusive. Note that these boundaries are for the time at which the original backup was requested. You can call ListBackups a maximum of five times per second. If you want to retrieve the complete list of backups made with Amazon Web Services Backup, use the Amazon Web Services Backup list API",
      options: [
        {
          name: "--table-name",
          description:
            "Lists the backups from the table specified in TableName. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "Maximum number of backups to return at once",
          args: {
            name: "integer",
          },
        },
        {
          name: "--time-range-lower-bound",
          description:
            "Only backups created after this time are listed. TimeRangeLowerBound is inclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--time-range-upper-bound",
          description:
            "Only backups created before this time are listed. TimeRangeUpperBound is exclusive",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--exclusive-start-backup-arn",
          description:
            "LastEvaluatedBackupArn is the Amazon Resource Name (ARN) of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the ExclusiveStartBackupArn of a new ListBackups operation in order to fetch the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-type",
          description:
            "The backups from the table specified by BackupType are listed. Where BackupType can be:    USER - On-demand backup created by you. (The default setting if no other backup types are specified.)    SYSTEM - On-demand backup automatically created by DynamoDB.    ALL - All types of on-demand backups (USER and SYSTEM)",
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
      name: "list-contributor-insights",
      description:
        "Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A token to for the desired page, if there is one",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to return per page",
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
      name: "list-exports",
      description: "Lists completed exports within the past 90 days",
      options: [
        {
          name: "--table-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the exported table",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional string that, if supplied, must be copied from the output of a previous call to ListExports. When provided in this manner, the API fetches the next page of results",
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
      name: "list-global-tables",
      description:
        "Lists all global tables that have a replica in the specified Region.  This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables",
      options: [
        {
          name: "--exclusive-start-global-table-name",
          description:
            "The first global table name that this operation will evaluate",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of table names to return, if the parameter is not specified DynamoDB defaults to 100. If the number of global tables DynamoDB finds reaches this limit, it stops the operation and returns the table names collected up to that point, with a table name in the LastEvaluatedGlobalTableName to apply in a subsequent operation to the ExclusiveStartGlobalTableName parameter",
          args: {
            name: "integer",
          },
        },
        {
          name: "--region-name",
          description: "Lists the global tables in a specific Region",
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
      name: "list-imports",
      description: "Lists completed imports within the past 90 days",
      options: [
        {
          name: "--table-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the table that was imported to",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The number of ImportSummary objects returned in a single page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional string that, if supplied, must be copied from the output of a previous call to ListImports. When provided in this manner, the API fetches the next page of results",
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
      name: "list-tables",
      description:
        "Returns an array of table names associated with the current account and endpoint. The output from ListTables is paginated, with each page returning a maximum of 100 table names",
      options: [
        {
          name: "--exclusive-start-table-name",
          description:
            "The first table name that this operation will evaluate. Use the value that was returned for LastEvaluatedTableName in a previous operation, so that you can obtain the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "A maximum number of table names to return. If this parameter is not specified, the limit is 100",
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
      name: "list-tags-of-resource",
      description:
        "List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account. For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon DynamoDB resource with tags to be listed. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional string that, if supplied, must be copied from the output of a previous call to ListTagOfResource. When provided in this manner, this API fetches the next page of results",
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
      name: "put-item",
      description:
        "Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the ReturnValues parameter. When you add an item, the primary key attributes are the only required attributes.  Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. Set type attributes cannot be empty.  Invalid Requests with empty values will be rejected with a ValidationException exception.  To prevent a new item from replacing an existing item, use a conditional expression that contains the attribute_not_exists function with the name of the attribute being used as the partition key for the table. Since every record must contain that attribute, the attribute_not_exists function will only succeed if no matching item exists.  For more information about PutItem, see Working with Items in the Amazon DynamoDB Developer Guide",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to contain the item. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--item",
          description:
            "A map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item. You must provide all of the attributes for the primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide both values for both the partition key and the sort key. If you specify any attributes that are part of an index key, then the data types for those attributes must match those of the schema in the table's attribute definition. Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index. For more information about primary keys, see Primary Key in the Amazon DynamoDB Developer Guide. Each element in the Item map is an AttributeValue object",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--return-values",
          description:
            "Use ReturnValues if you want to get the item attributes as they appeared before they were updated with the PutItem request. For PutItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - If PutItem overwrote an attribute name-value pair, then the content of the old item is returned.   The values returned are strongly consistent. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed.  The ReturnValues parameter is used by several DynamoDB operations; however, PutItem does not recognize any values other than NONE or ALL_OLD",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-item-collection-metrics",
          description:
            "Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--conditional-operator",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--condition-expression",
          description:
            "A condition that must be satisfied in order for a conditional PutItem operation to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | <> | < | > | <= | >= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information on condition expressions, see Condition Expressions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--expression-attribute-values",
          description:
            'One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--return-values-on-condition-check-failure",
          description:
            "An optional parameter that returns the item attributes for a PutItem operation that failed a condition check. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed",
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
      description:
        "Attaches a resource-based policy document to the resource, which can be a table or stream. When you attach a resource-based policy using this API, the policy application is  eventually consistent .  PutResourcePolicy is an idempotent operation; running it multiple times on the same resource using the same policy document will return the same revision ID. If you specify an ExpectedRevisionId that doesn't match the current policy's RevisionId, the PolicyNotFoundException will be returned.   PutResourcePolicy is an asynchronous operation. If you issue a GetResourcePolicy request immediately after a PutResourcePolicy request, DynamoDB might return your previous policy, if there was one, or return the PolicyNotFoundException. This is because GetResourcePolicy uses an eventually consistent query, and the metadata for your policy or table might not be available at that moment. Wait for a few seconds, and then try the GetResourcePolicy request again",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the DynamoDB resource to which the policy will be attached. The resources you can specify include tables and streams. You can control index permissions using the base table's policy. To specify the same permission level for your table and its indexes, you can provide both the table and index Amazon Resource Name (ARN)s in the Resource field of a given Statement in your policy document. Alternatively, to specify different permissions for your table, indexes, or both, you can define multiple Statement fields in your policy document",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "An Amazon Web Services resource-based policy document in JSON format.   The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit.   Within a resource-based policy, if the action for a DynamoDB service-linked role (SLR) to replicate data for a global table is denied, adding or deleting a replica will fail with an error.   For a full list of all considerations that apply while attaching a resource-based policy, see Resource-based policy considerations",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "A string value that you can use to conditionally update your policy. You can provide the revision ID of your existing policy to make mutating requests against that policy.  When you provide an expected revision ID, if the revision ID of the existing policy on the resource doesn't match or if there's no policy attached to the resource, your request will be rejected with a PolicyNotFoundException.  To conditionally attach a policy when no policy exists for the resource, specify NO_POLICY for the revision ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--confirm-remove-self-resource-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change the policy of this resource in the future",
        },
        {
          name: "--no-confirm-remove-self-resource-access",
          description:
            "Set this parameter to true to confirm that you want to remove your permissions to change the policy of this resource in the future",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "query",
      description:
        "You must provide the name of the partition key attribute and a single value for that attribute. Query returns all items with that partition key value. Optionally, you can provide a sort key attribute and use a comparison operator to refine the search results. Use the KeyConditionExpression parameter to provide a specific value for the partition key. The Query operation will return all of the items from the table or index with that partition key value. You can optionally narrow the scope of the Query operation by specifying a sort key value and a comparison operator in KeyConditionExpression. To further refine the Query results, you can optionally provide a FilterExpression. A FilterExpression determines which items within the results should be returned to you. All of the other results are discarded.   A Query operation always returns a result set. If no matching items are found, the result set will be empty. Queries that do not return results consume the minimum number of read capacity units for that type of read operation.    DynamoDB calculates the number of read capacity units consumed based on item size, not on the amount of data that is returned to an application. The number of capacity units consumed will be the same whether you request all of the attributes (the default behavior) or just some of them (using a projection expression). The number will also be the same whether or not you use a FilterExpression.    Query results are always sorted by the sort key value. If the data type of the sort key is Number, the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes. By default, the sort order is ascending. To reverse the order, set the ScanIndexForward parameter to false.   A single Query operation will read up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then apply any filtering to the results using FilterExpression. If LastEvaluatedKey is present in the response, you will need to paginate the result set. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.   FilterExpression is applied after a Query finishes, but before the results are returned. A FilterExpression cannot contain partition key or sort key attributes. You need to specify those attributes in the KeyConditionExpression.    A Query operation can return an empty result set and a LastEvaluatedKey if all the items read for the page of results are filtered out.   You can query a table, a local secondary index, or a global secondary index. For a query on a table or on a local secondary index, you can set the ConsistentRead parameter to true and obtain a strongly consistent result. Global secondary indexes support eventually consistent reads only, so do not specify ConsistentRead when querying a global secondary index",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table containing the requested items. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of an index to query. This index can be any local secondary index or global secondary index on the table. Note that if you use the IndexName parameter, you must also provide TableName",
          args: {
            name: "string",
          },
        },
        {
          name: "--select",
          description:
            "The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in ProjectionExpression. This return value is equivalent to specifying ProjectionExpression without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation will read only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor ProjectionExpression are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and ProjectionExpression together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying ProjectionExpression without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Query and Scan in the Amazon DynamoDB Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--consistent-read",
          description:
            "Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with ConsistentRead set to true, you will receive a ValidationException",
        },
        {
          name: "--no-consistent-read",
          description:
            "Determines the read consistency model: If set to true, then the operation uses strongly consistent reads; otherwise, the operation uses eventually consistent reads. Strongly consistent reads are not supported on global secondary indexes. If you query a global secondary index with ConsistentRead set to true, you will receive a ValidationException",
        },
        {
          name: "--key-conditions",
          description:
            "This is a legacy parameter. Use KeyConditionExpression instead. For more information, see KeyConditions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--query-filter",
          description:
            "This is a legacy parameter. Use FilterExpression instead. For more information, see QueryFilter in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--conditional-operator",
          description:
            "This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-index-forward",
          description:
            "Specifies the order for index traversal: If true (default), the traversal is performed in ascending order; if false, the traversal is performed in descending order.  Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned. If ScanIndexForward is true, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If ScanIndexForward is false, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client",
        },
        {
          name: "--no-scan-index-forward",
          description:
            "Specifies the order for index traversal: If true (default), the traversal is performed in ascending order; if false, the traversal is performed in descending order.  Items with the same partition key value are stored in sorted order by sort key. If the sort key data type is Number, the results are stored in numeric order. For type String, the results are stored in order of UTF-8 bytes. For type Binary, DynamoDB treats each byte of the binary data as unsigned. If ScanIndexForward is true, DynamoDB returns the results in the order in which they are stored (by sort key value). This is the default behavior. If ScanIndexForward is false, DynamoDB reads the results in reverse order by sort key value, and then returns the results to the client",
        },
        {
          name: "--exclusive-start-key",
          description:
            "The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number, or Binary. No set data types are allowed",
          args: {
            name: "map",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--projection-expression",
          description:
            "A string that identifies one or more attributes to retrieve from the table. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Accessing Item Attributes in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expression",
          description:
            "A string that contains conditions that DynamoDB applies after the Query operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned. A FilterExpression does not allow key attributes. You cannot define a filter expression based on a partition key or a sort key.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-condition-expression",
          description:
            "The condition that specifies the key values for items to be retrieved by the Query action. The condition must perform an equality test on a single partition key value. The condition can optionally perform one of several comparison tests on a single sort key value. This allows Query to retrieve one item with a given partition key value and sort key value, or several items that have the same partition key value but different sort key values. The partition key equality test is required, and must be specified in the following format:  partitionKeyName = :partitionkeyval  If you also want to provide a condition for the sort key, it must be combined using AND with the condition for the sort key. Following is an example, using the = comparison operator for the sort key:  partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval  Valid comparisons for the sort key condition are as follows:    sortKeyName = :sortkeyval - true if the sort key value is equal to :sortkeyval.    sortKeyName < :sortkeyval - true if the sort key value is less than :sortkeyval.    sortKeyName <= :sortkeyval - true if the sort key value is less than or equal to :sortkeyval.    sortKeyName > :sortkeyval - true if the sort key value is greater than :sortkeyval.    sortKeyName >=  :sortkeyval - true if the sort key value is greater than or equal to :sortkeyval.    sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2 - true if the sort key value is greater than or equal to :sortkeyval1, and less than or equal to :sortkeyval2.    begins_with ( sortKeyName, :sortkeyval ) - true if the sort key value begins with a particular operand. (You cannot use this function with a sort key that is of type Number.) Note that the function name begins_with is case-sensitive.   Use the ExpressionAttributeValues parameter to replace tokens such as :partitionval and :sortval with actual values at runtime. You can optionally use the ExpressionAttributeNames parameter to replace the names of the partition key and sort key with placeholder tokens. This option might be necessary if an attribute name conflicts with a DynamoDB reserved word. For example, the following KeyConditionExpression parameter causes an error because Size is a reserved word:    Size = :myval    To work around this, define a placeholder (such a #S) to represent the attribute name Size. KeyConditionExpression then is as follows:    #S = :myval    For a list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide. For more information on ExpressionAttributeNames and ExpressionAttributeValues, see Using Placeholders for Attribute Names and Values in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--expression-attribute-values",
          description:
            'One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Specifying Conditions in the Amazon DynamoDB Developer Guide',
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
      name: "restore-table-from-backup",
      description:
        "Creates a new table from an existing backup. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account.  You can call RestoreTableFromBackup at a maximum rate of 10 times per second. You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings",
      options: [
        {
          name: "--target-table-name",
          description:
            "The name of the new table to which the backup must be restored",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-arn",
          description:
            "The Amazon Resource Name (ARN) associated with the backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-mode-override",
          description: "The billing mode of the restored table",
          args: {
            name: "string",
          },
        },
        {
          name: "--global-secondary-index-override",
          description:
            "List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore",
          args: {
            name: "list",
          },
        },
        {
          name: "--local-secondary-index-override",
          description:
            "List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioned-throughput-override",
          description: "Provisioned throughput settings for the restored table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--on-demand-throughput-override",
          description:
            "Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sse-specification-override",
          description:
            "The new server-side encryption settings for the restored table",
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
      name: "restore-table-to-point-in-time",
      description:
        "Restores the specified table to the specified point in time within EarliestRestorableDateTime and LatestRestorableDateTime. You can restore your table to any point in time during the last 35 days. Any number of users can execute up to 50 concurrent restores (any type of restore) in a given account.  When you restore using point in time recovery, DynamoDB restores your table data to the state based on the selected date and time (day:hour:minute:second) to a new table.  Along with data, the following are also included on the new restored table using point in time recovery:    Global secondary indexes (GSIs)   Local secondary indexes (LSIs)   Provisioned read and write capacity   Encryption settings   All these settings come from the current settings of the source table at the time of restore.     You must manually set up the following on the restored table:   Auto scaling policies   IAM policies   Amazon CloudWatch metrics and alarms   Tags   Stream settings   Time to Live (TTL) settings   Point in time recovery settings",
      options: [
        {
          name: "--source-table-arn",
          description:
            "The DynamoDB table that will be restored. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-table-name",
          description: "Name of the source table that is being restored",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-table-name",
          description:
            "The name of the new table to which it must be restored to",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-latest-restorable-time",
          description:
            "Restore the table to the latest possible time. LatestRestorableDateTime is typically 5 minutes before the current time",
        },
        {
          name: "--no-use-latest-restorable-time",
          description:
            "Restore the table to the latest possible time. LatestRestorableDateTime is typically 5 minutes before the current time",
        },
        {
          name: "--restore-date-time",
          description: "Time in the past to restore the table to",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--billing-mode-override",
          description: "The billing mode of the restored table",
          args: {
            name: "string",
          },
        },
        {
          name: "--global-secondary-index-override",
          description:
            "List of global secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore",
          args: {
            name: "list",
          },
        },
        {
          name: "--local-secondary-index-override",
          description:
            "List of local secondary indexes for the restored table. The indexes provided should match existing secondary indexes. You can choose to exclude some or all of the indexes at the time of restore",
          args: {
            name: "list",
          },
        },
        {
          name: "--provisioned-throughput-override",
          description: "Provisioned throughput settings for the restored table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--on-demand-throughput-override",
          description:
            "Sets the maximum number of read and write units for the specified on-demand table. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sse-specification-override",
          description:
            "The new server-side encryption settings for the restored table",
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
      name: "scan",
      description:
        "The Scan operation returns one or more items and item attributes by accessing every item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a FilterExpression operation. If the total size of scanned items exceeds the maximum dataset size limit of 1 MB, the scan completes and results are returned to the user. The LastEvaluatedKey value is also returned and the requestor can use the LastEvaluatedKey to continue the scan in a subsequent operation. Each scan response also includes number of items that were scanned (ScannedCount) as part of the request. If using a FilterExpression, a scan result can result in no items meeting the criteria and the Count will result in zero. If you did not use a FilterExpression in the scan request, then Count is the same as ScannedCount.   Count and ScannedCount only return the count of items specific to a single scan request and, unless the table is less than 1MB, do not represent the total number of items in the table.   A single Scan operation first reads up to the maximum number of items set (if using the Limit parameter) or a maximum of 1 MB of data and then applies any filtering to the results if a FilterExpression is provided. If LastEvaluatedKey is present in the response, pagination is required to complete the full table scan. For more information, see Paginating the Results in the Amazon DynamoDB Developer Guide.  Scan operations proceed sequentially; however, for faster performance on a large table or secondary index, applications can request a parallel Scan operation by providing the Segment and TotalSegments parameters. For more information, see Parallel Scan in the Amazon DynamoDB Developer Guide. By default, a Scan uses eventually consistent reads when accessing the items in a table. Therefore, the results from an eventually consistent Scan may not include the latest item changes at the time the scan iterates through each item in the table. If you require a strongly consistent read of each item as the scan iterates through the items in the table, you can set the ConsistentRead parameter to true. Strong consistency only relates to the consistency of the read at the item level.   DynamoDB does not provide snapshot isolation for a scan operation when the ConsistentRead parameter is set to true. Thus, a DynamoDB scan operation does not guarantee that all reads in a scan see a consistent snapshot of the table when the scan operation was requested",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table containing the requested items or if you provide IndexName, the name of the table to which that index belongs. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description:
            "The name of a secondary index to scan. This index can be any local secondary index or global secondary index. Note that if you use the IndexName parameter, you must also provide TableName",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "This is a legacy parameter. Use ProjectionExpression instead. For more information, see AttributesToGet in the Amazon DynamoDB Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of items to evaluate (not necessarily the number of matching items). If DynamoDB processes the number of items up to the limit while processing the results, it stops the operation and returns the matching values up to that point, and a key in LastEvaluatedKey to apply in a subsequent operation, so that you can pick up where you left off. Also, if the processed dataset size exceeds 1 MB before DynamoDB reaches this limit, it stops the operation and returns the matching values up to the limit, and a key in LastEvaluatedKey to apply in a subsequent operation to continue the operation. For more information, see Working with Queries in the Amazon DynamoDB Developer Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--select",
          description:
            "The attributes to be returned in the result. You can retrieve all item attributes, specific item attributes, the count of matching items, or in the case of an index, some or all of the attributes projected into the index.    ALL_ATTRIBUTES - Returns all of the item attributes from the specified table or index. If you query a local secondary index, then for each matching item in the index, DynamoDB fetches the entire item from the parent table. If the index is configured to project all item attributes, then all of the data can be obtained from the local secondary index, and no fetching is required.    ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all attributes that have been projected into the index. If the index is configured to project all attributes, this return value is equivalent to specifying ALL_ATTRIBUTES.    COUNT - Returns the number of matching items, rather than the matching items themselves. Note that this uses the same quantity of read capacity units as getting the items, and is subject to the same item size calculations.    SPECIFIC_ATTRIBUTES - Returns only the attributes listed in ProjectionExpression. This return value is equivalent to specifying ProjectionExpression without specifying any value for Select. If you query or scan a local secondary index and request only attributes that are projected into that index, the operation reads only the index and not the table. If any of the requested attributes are not projected into the local secondary index, DynamoDB fetches each of these attributes from the parent table. This extra fetching incurs additional throughput cost and latency. If you query or scan a global secondary index, you can only request attributes that are projected into the index. Global secondary index queries cannot fetch attributes from the parent table.   If neither Select nor ProjectionExpression are specified, DynamoDB defaults to ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when accessing an index. You cannot use both Select and ProjectionExpression together in a single request, unless the value for Select is SPECIFIC_ATTRIBUTES. (This usage is equivalent to specifying ProjectionExpression without any value for Select.)  If you use the ProjectionExpression parameter, then the value for Select can only be SPECIFIC_ATTRIBUTES. Any other value for Select will return an error",
          args: {
            name: "string",
          },
        },
        {
          name: "--scan-filter",
          description:
            "This is a legacy parameter. Use FilterExpression instead. For more information, see ScanFilter in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--conditional-operator",
          description:
            "This is a legacy parameter. Use FilterExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--exclusive-start-key",
          description:
            "The primary key of the first item that this operation will evaluate. Use the value that was returned for LastEvaluatedKey in the previous operation. The data type for ExclusiveStartKey must be String, Number or Binary. No set data types are allowed. In a parallel scan, a Scan request that includes ExclusiveStartKey must specify the same segment whose previous Scan returned the corresponding value of LastEvaluatedKey",
          args: {
            name: "map",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--total-segments",
          description:
            "For a parallel Scan request, TotalSegments represents the total number of segments into which the Scan operation will be divided. The value of TotalSegments corresponds to the number of application workers that will perform the parallel scan. For example, if you want to use four application threads to scan a table or an index, specify a TotalSegments value of 4. The value for TotalSegments must be greater than or equal to 1, and less than or equal to 1000000. If you specify a TotalSegments value of 1, the Scan operation will be sequential rather than parallel. If you specify TotalSegments, you must also specify Segment",
          args: {
            name: "integer",
          },
        },
        {
          name: "--segment",
          description:
            "For a parallel Scan request, Segment identifies an individual segment to be scanned by an application worker. Segment IDs are zero-based, so the first segment is always 0. For example, if you want to use four application threads to scan a table or an index, then the first thread specifies a Segment value of 0, the second thread specifies 1, and so on. The value of LastEvaluatedKey returned from a parallel Scan request must be used as ExclusiveStartKey with the same segment ID in a subsequent Scan operation. The value for Segment must be greater than or equal to 0, and less than the value provided for TotalSegments. If you provide Segment, you must also provide TotalSegments",
          args: {
            name: "integer",
          },
        },
        {
          name: "--projection-expression",
          description:
            "A string that identifies one or more attributes to retrieve from the specified table or index. These attributes can include scalars, sets, or elements of a JSON document. The attributes in the expression must be separated by commas. If no attribute names are specified, then all attributes will be returned. If any of the requested attributes are not found, they will not appear in the result. For more information, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-expression",
          description:
            "A string that contains conditions that DynamoDB applies after the Scan operation, but before the data is returned to you. Items that do not satisfy the FilterExpression criteria are not returned.  A FilterExpression is applied after the items have already been read; the process of filtering does not consume any additional read capacity units.  For more information, see Filter Expressions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide). To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information on expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--expression-attribute-values",
          description:
            'One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--consistent-read",
          description:
            "A Boolean value that determines the read consistency model during the scan:   If ConsistentRead is false, then the data returned from Scan might not contain the results from other recently completed write operations (PutItem, UpdateItem, or DeleteItem).   If ConsistentRead is true, then all of the write operations that completed before the Scan began are guaranteed to be contained in the Scan response.   The default setting for ConsistentRead is false. The ConsistentRead parameter is not supported on global secondary indexes. If you scan a global secondary index with ConsistentRead set to true, you will receive a ValidationException",
        },
        {
          name: "--no-consistent-read",
          description:
            "A Boolean value that determines the read consistency model during the scan:   If ConsistentRead is false, then the data returned from Scan might not contain the results from other recently completed write operations (PutItem, UpdateItem, or DeleteItem).   If ConsistentRead is true, then all of the write operations that completed before the Scan began are guaranteed to be contained in the Scan response.   The default setting for ConsistentRead is false. The ConsistentRead parameter is not supported on global secondary indexes. If you scan a global secondary index with ConsistentRead set to true, you will receive a ValidationException",
        },
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
      name: "tag-resource",
      description:
        "Associate a set of tags with an Amazon DynamoDB resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking. You can call TagResource up to five times per second, per account.     TagResource is an asynchronous operation. If you issue a ListTagsOfResource request immediately after a TagResource request, DynamoDB might return your previous tag set, if there was one, or an empty tag set. This is because ListTagsOfResource uses an eventually consistent query, and the metadata for your tags or table might not be available at that moment. Wait for a few seconds, and then try the ListTagsOfResource request again.   The application or removal of tags using TagResource and UntagResource APIs is eventually consistent. ListTagsOfResource API will only reflect the changes after a few seconds.   For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "Identifies the Amazon DynamoDB resource to which tags should be added. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to be assigned to the Amazon DynamoDB resource",
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
      name: "transact-get-items",
      description:
        "TransactGetItems is a synchronous operation that atomically retrieves multiple items from one or more tables (but not from indexes) in a single account and Region. A TransactGetItems call can contain up to 100 TransactGetItem objects, each of which contains a Get structure that specifies an item to retrieve from a table in the account and Region. A call to TransactGetItems cannot retrieve items from tables in more than one Amazon Web Services account or Region. The aggregate size of the items in the transaction cannot exceed 4 MB. DynamoDB rejects the entire TransactGetItems request if any of the following is true:   A conflicting operation is in the process of updating an item to be read.   There is insufficient provisioned capacity for the transaction to be completed.   There is a user error, such as an invalid data format.   The aggregate size of the items in the transaction exceeded 4 MB",
      options: [
        {
          name: "--transact-items",
          description:
            "An ordered array of up to 100 TransactGetItem objects, each of which contains a Get structure",
          args: {
            name: "list",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "A value of TOTAL causes consumed capacity information to be returned, and a value of NONE prevents that information from being returned. No other value is valid",
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
      name: "transact-write-items",
      description:
        "TransactWriteItems is a synchronous write operation that groups up to 100 action requests. These actions can target items in different tables, but not in different Amazon Web Services accounts or Regions, and no two actions can target the same item. For example, you cannot both ConditionCheck and Update the same item. The aggregate size of the items in the transaction cannot exceed 4 MB. The actions are completed atomically so that either all of them succeed, or all of them fail. They are defined by the following objects:    Put \u00a0\u2014 \u00a0 Initiates a PutItem operation to write a new item. This structure specifies the primary key of the item to be written, the name of the table to write it in, an optional condition expression that must be satisfied for the write to succeed, a list of the item's attributes, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Update \u00a0\u2014 \u00a0 Initiates an UpdateItem operation to update an existing item. This structure specifies the primary key of the item to be updated, the name of the table where it resides, an optional condition expression that must be satisfied for the update to succeed, an expression that defines one or more attributes to be updated, and a field indicating whether to retrieve the item's attributes if the condition is not met.    Delete \u00a0\u2014 \u00a0 Initiates a DeleteItem operation to delete an existing item. This structure specifies the primary key of the item to be deleted, the name of the table where it resides, an optional condition expression that must be satisfied for the deletion to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.    ConditionCheck \u00a0\u2014 \u00a0 Applies a condition to an item that is not being modified by the transaction. This structure specifies the primary key of the item to be checked, the name of the table where it resides, a condition expression that must be satisfied for the transaction to succeed, and a field indicating whether to retrieve the item's attributes if the condition is not met.   DynamoDB rejects the entire TransactWriteItems request if any of the following is true:   A condition in one of the condition expressions is not met.   An ongoing operation is in the process of updating the same item.   There is insufficient provisioned capacity for the transaction to be completed.   An item size becomes too large (bigger than 400 KB), a local secondary index (LSI) becomes too large, or a similar validation error occurs because of changes made by the transaction.   The aggregate size of the items in the transaction exceeds 4 MB.   There is a user error, such as an invalid data format",
      options: [
        {
          name: "--transact-items",
          description:
            "An ordered array of up to 100 TransactWriteItem objects, each of which contains a ConditionCheck, Put, Update, or Delete object. These can operate on items in different tables, but the tables must reside in the same Amazon Web Services account and Region, and no two of them can operate on the same item",
          args: {
            name: "list",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-item-collection-metrics",
          description:
            "Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections (if any), that were modified during the operation and are returned in the response. If set to NONE (the default), no statistics are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "Providing a ClientRequestToken makes the call to TransactWriteItems idempotent, meaning that multiple identical calls have the same effect as one single call. Although multiple identical calls using the same client request token produce the same result on the server (no side effects), the responses to the calls might not be the same. If the ReturnConsumedCapacity parameter is set, then the initial TransactWriteItems call returns the amount of write capacity units consumed in making the changes. Subsequent TransactWriteItems calls with the same client token return the number of read capacity units consumed in reading the item. A client request token is valid for 10 minutes after the first request that uses it is completed. After 10 minutes, any request with the same client token is treated as a new request. Do not resubmit the same request with the same client token for more than 10 minutes, or the result might not be idempotent. If you submit a request with the same client token but a change in other parameters within the 10-minute idempotency window, DynamoDB returns an IdempotentParameterMismatch exception",
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
      name: "untag-resource",
      description:
        "Removes the association of tags from an Amazon DynamoDB resource. You can call UntagResource up to five times per second, per account.     UntagResource is an asynchronous operation. If you issue a ListTagsOfResource request immediately after an UntagResource request, DynamoDB might return your previous tag set, if there was one, or an empty tag set. This is because ListTagsOfResource uses an eventually consistent query, and the metadata for your tags or table might not be available at that moment. Wait for a few seconds, and then try the ListTagsOfResource request again.   The application or removal of tags using TagResource and UntagResource APIs is eventually consistent. ListTagsOfResource API will only reflect the changes after a few seconds.   For an overview on tagging DynamoDB resources, see Tagging for DynamoDB in the Amazon DynamoDB Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The DynamoDB resource that the tags will be removed from. This value is an Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys. Existing tags of the resource whose keys are members of this list will be removed from the DynamoDB resource",
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
      name: "update-continuous-backups",
      description:
        "UpdateContinuousBackups enables or disables point in time recovery for the specified table. A successful UpdateContinuousBackups call returns the current ContinuousBackupsDescription. Continuous backups are ENABLED on all tables at table creation. If point in time recovery is enabled, PointInTimeRecoveryStatus will be set to ENABLED.  Once continuous backups and point in time recovery are enabled, you can restore to any point in time within EarliestRestorableDateTime and LatestRestorableDateTime.   LatestRestorableDateTime is typically 5 minutes before the current time. You can restore your table to any point in time during the last 35 days",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--point-in-time-recovery-specification",
          description:
            "Represents the settings used to enable point in time recovery",
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
      name: "update-contributor-insights",
      description:
        "Updates the status for contributor insights for a specific table or index. CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of Amazon Web Services Key Management Service (KMS) to encrypt this table\u2019s partition key and sort key data with an Amazon Web Services managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The global secondary index name, if applicable",
          args: {
            name: "string",
          },
        },
        {
          name: "--contributor-insights-action",
          description: "Represents the contributor insights action",
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
      name: "update-global-table",
      description:
        "Adds or removes replicas in the specified global table. The global table must already exist to be able to use this operation. Any replica to be added must be empty, have the same name as the global table, have the same key schema, have DynamoDB Streams enabled, and have the same provisioned and maximum write capacity units.  This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables.    For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version). If you are using global tables Version 2019.11.21 you can use UpdateTable instead.   Although you can use UpdateGlobalTable to add replicas and remove replicas in a single request, for simplicity we recommend that you issue separate requests for adding or removing replicas.    If global secondary indexes are specified, then the following conditions must also be met:     The global secondary indexes must have the same name.     The global secondary indexes must have the same hash key and sort key (if present).     The global secondary indexes must have the same provisioned and maximum write capacity units",
      options: [
        {
          name: "--global-table-name",
          description: "The global table name",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-updates",
          description:
            "A list of Regions that should be added or removed from the global table",
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
      name: "update-global-table-settings",
      description:
        "Updates settings for a global table.  This documentation is for version 2017.11.29 (Legacy) of global tables, which should be avoided for new global tables. Customers should use Global Tables version 2019.11.21 (Current) when possible, because it provides greater flexibility, higher efficiency, and consumes less write capacity than 2017.11.29 (Legacy). To determine which version you're using, see Determining the global table version you are using. To update existing global tables from version 2017.11.29 (Legacy) to version 2019.11.21 (Current), see Upgrading global tables",
      options: [
        {
          name: "--global-table-name",
          description: "The name of the global table",
          args: {
            name: "string",
          },
        },
        {
          name: "--global-table-billing-mode",
          description:
            "The billing mode of the global table. If GlobalTableBillingMode is not specified, the global table defaults to PROVISIONED capacity billing mode.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned capacity mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-demand capacity mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--global-table-provisioned-write-capacity-units",
          description:
            "The maximum number of writes consumed per second before DynamoDB returns a ThrottlingException",
          args: {
            name: "long",
          },
        },
        {
          name: "--global-table-provisioned-write-capacity-auto-scaling-settings-update",
          description:
            "Auto scaling settings for managing provisioned write capacity for the global table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--global-table-global-secondary-index-settings-update",
          description:
            "Represents the settings of a global secondary index for a global table that will be modified",
          args: {
            name: "list",
          },
        },
        {
          name: "--replica-settings-update",
          description:
            "Represents the settings for a global table in a Region that will be modified",
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
      name: "update-item",
      description:
        "Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values). You can also return the item's attribute values in the same UpdateItem operation using the ReturnValues parameter",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table containing the item to update. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "The primary key of the item to be updated. Each element consists of an attribute name and a value for that attribute. For the primary key, you must provide all of the attributes. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key",
          args: {
            name: "map",
          },
        },
        {
          name: "--attribute-updates",
          description:
            "This is a legacy parameter. Use UpdateExpression instead. For more information, see AttributeUpdates in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see Expected in the Amazon DynamoDB Developer Guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--conditional-operator",
          description:
            "This is a legacy parameter. Use ConditionExpression instead. For more information, see ConditionalOperator in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-values",
          description:
            "Use ReturnValues if you want to get the item attributes as they appear before or after they are successfully updated. For UpdateItem, the valid values are:    NONE - If ReturnValues is not specified, or if its value is NONE, then nothing is returned. (This setting is the default for ReturnValues.)    ALL_OLD - Returns all of the attributes of the item, as they appeared before the UpdateItem operation.    UPDATED_OLD - Returns only the updated attributes, as they appeared before the UpdateItem operation.    ALL_NEW - Returns all of the attributes of the item, as they appear after the UpdateItem operation.    UPDATED_NEW - Returns only the updated attributes, as they appear after the UpdateItem operation.   There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed. The values returned are strongly consistent",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-consumed-capacity",
          description:
            "Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:    INDEXES - The response includes the aggregate ConsumedCapacity for the operation, together with ConsumedCapacity for each table and secondary index that was accessed. Note that some operations, such as GetItem and BatchGetItem, do not access any indexes at all. In these cases, specifying INDEXES will only return ConsumedCapacity information for table(s).    TOTAL - The response includes only the aggregate ConsumedCapacity for the operation.    NONE - No ConsumedCapacity details are included in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--return-item-collection-metrics",
          description:
            "Determines whether item collection metrics are returned. If set to SIZE, the response includes statistics about item collections, if any, that were modified during the operation are returned in the response. If set to NONE (the default), no statistics are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-expression",
          description:
            "An expression that defines one or more attributes to be updated, the action to be performed on them, and new values for them. The following action values are available for UpdateExpression.    SET - Adds one or more attributes and values to an item. If any of these attributes already exist, they are replaced by the new values. You can also use SET to add or subtract from an attribute that is of type Number. For example: SET myNum = myNum + :val   SET supports the following functions:    if_not_exists (path, operand) - if the item does not contain an attribute at the specified path, then if_not_exists evaluates to operand; otherwise, it evaluates to path. You can use this function to avoid overwriting an attribute that may already be present in the item.    list_append (operand, operand) - evaluates to a list with a new element added to it. You can append the new element to the start or the end of the list by reversing the order of the operands.   These function names are case-sensitive.    REMOVE - Removes one or more attributes from an item.    ADD - Adds the specified value to the item, if the attribute does not already exist. If the attribute does exist, then the behavior of ADD depends on the data type of the attribute:   If the existing attribute is a number, and if Value is also a number, then Value is mathematically added to the existing attribute. If Value is a negative number, then it is subtracted from the existing attribute.  If you use ADD to increment or decrement a number value for an item that doesn't exist before the update, DynamoDB uses 0 as the initial value. Similarly, if you use ADD for an existing item to increment or decrement an attribute value that doesn't exist before the update, DynamoDB uses 0 as the initial value. For example, suppose that the item you want to update doesn't have an attribute named itemcount, but you decide to ADD the number 3 to this attribute anyway. DynamoDB will create the itemcount attribute, set its initial value to 0, and finally add 3 to it. The result will be a new itemcount attribute in the item, with a value of 3.    If the existing data type is a set and if Value is also a set, then Value is added to the existing set. For example, if the attribute value is the set [1,2], and the ADD action specified [3], then the final attribute value is [1,2,3]. An error occurs if an ADD action is specified for a set attribute and the attribute type specified does not match the existing set type.  Both sets must have the same primitive data type. For example, if the existing data type is a set of strings, the Value must also be a set of strings.    The ADD action only supports Number and set data types. In addition, ADD can only be used on top-level attributes, not nested attributes.     DELETE - Deletes an element from a set. If a set of values is specified, then those values are subtracted from the old set. For example, if the attribute value was the set [a,b,c] and the DELETE action specifies [a,c], then the final attribute value is [b]. Specifying an empty set is an error.  The DELETE action only supports set data types. In addition, DELETE can only be used on top-level attributes, not nested attributes.    You can have many actions in a single expression, such as the following: SET a=:value1, b=:value2 DELETE :value3, :value4, :value5  For more information on update expressions, see Modifying Items and Attributes in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--condition-expression",
          description:
            "A condition that must be satisfied in order for a conditional update to succeed. An expression can contain any of the following:   Functions: attribute_exists | attribute_not_exists | attribute_type | contains | begins_with | size  These function names are case-sensitive.   Comparison operators: = | <> | < | > | <= | >= | BETWEEN | IN      Logical operators: AND | OR | NOT    For more information about condition expressions, see Specifying Conditions in the Amazon DynamoDB Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression-attribute-names",
          description:
            'One or more substitution tokens for attribute names in an expression. The following are some use cases for using ExpressionAttributeNames:   To access an attribute whose name conflicts with a DynamoDB reserved word.   To create a placeholder for repeating occurrences of an attribute name in an expression.   To prevent special characters in an attribute name from being misinterpreted in an expression.   Use the # character in an expression to dereference an attribute name. For example, consider the following attribute name:    Percentile    The name of this attribute conflicts with a reserved word, so it cannot be used directly in an expression. (For the complete list of reserved words, see Reserved Words in the Amazon DynamoDB Developer Guide.) To work around this, you could specify the following for ExpressionAttributeNames:    {"#P":"Percentile"}    You could then use this substitution in an expression, as in this example:    #P = :val     Tokens that begin with the : character are expression attribute values, which are placeholders for the actual value at runtime.  For more information about expression attribute names, see Specifying Item Attributes in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--expression-attribute-values",
          description:
            'One or more values that can be substituted in an expression. Use the : (colon) character in an expression to dereference an attribute value. For example, suppose that you wanted to check whether the value of the ProductStatus attribute was one of the following:   Available | Backordered | Discontinued  You would first need to specify ExpressionAttributeValues as follows:  { ":avail":{"S":"Available"}, ":back":{"S":"Backordered"}, ":disc":{"S":"Discontinued"} }  You could then use these values in an expression, such as this:  ProductStatus IN (:avail, :back, :disc)  For more information on expression attribute values, see Condition Expressions in the Amazon DynamoDB Developer Guide',
          args: {
            name: "map",
          },
        },
        {
          name: "--return-values-on-condition-check-failure",
          description:
            "An optional parameter that returns the item attributes for an UpdateItem operation that failed a condition check. There is no additional cost associated with requesting a return value aside from the small network and processing overhead of receiving a larger response. No read capacity units are consumed",
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
      name: "update-kinesis-streaming-destination",
      description: "The command to update the Kinesis stream destination",
      options: [
        {
          name: "--table-name",
          description:
            "The table name for the Kinesis streaming destination input. You can also provide the ARN of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) for the Kinesis stream input",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-kinesis-streaming-configuration",
          description: "The command to update the Kinesis stream configuration",
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
        "Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.  For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version).   You can only perform one of the following operations at once:   Modify the provisioned throughput settings of the table.   Remove a global secondary index from the table.   Create a new global secondary index on the table. After the index begins backfilling, you can use UpdateTable to perform other operations.    UpdateTable is an asynchronous operation; while it's executing, the table status changes from ACTIVE to UPDATING. While it's UPDATING, you can't issue another UpdateTable request. When the table returns to the ACTIVE state, the UpdateTable operation is complete",
      options: [
        {
          name: "--attribute-definitions",
          description:
            "An array of attributes that describe the key schema for the table and indexes. If you are adding a new global secondary index to the table, AttributeDefinitions must include the key element(s) of the new index",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table to be updated. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--billing-mode",
          description:
            "Controls how you are charged for read and write throughput and how you manage capacity. When switching from pay-per-request to provisioned capacity, initial provisioned capacity values must be set. The initial provisioned capacity values are estimated based on the consumed read and write capacity of your table and global secondary indexes over the past 30 minutes.    PROVISIONED - We recommend using PROVISIONED for predictable workloads. PROVISIONED sets the billing mode to Provisioned capacity mode.    PAY_PER_REQUEST - We recommend using PAY_PER_REQUEST for unpredictable workloads. PAY_PER_REQUEST sets the billing mode to On-demand capacity mode",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-throughput",
          description:
            "The new provisioned throughput settings for the specified table or index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--global-secondary-index-updates",
          description:
            "An array of one or more global secondary indexes for the table. For each index in the array, you can request one action:    Create - add a new global secondary index to the table.    Update - modify the provisioned throughput settings of an existing global secondary index.    Delete - remove a global secondary index from the table.   You can create or delete only one global secondary index per UpdateTable operation. For more information, see Managing Global Secondary Indexes in the Amazon DynamoDB Developer Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--stream-specification",
          description:
            "Represents the DynamoDB Streams configuration for the table.  You receive a ValidationException if you try to enable a stream on a table that already has a stream, or if you try to disable a stream on a table that doesn't have a stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sse-specification",
          description:
            "The new server-side encryption settings for the specified table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-updates",
          description:
            "A list of replica update actions (create, delete, or update) for the table.  For global tables, this property only applies to global tables using Version 2019.11.21 (Current version)",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-class",
          description:
            "The table class of the table to be updated. Valid values are STANDARD and STANDARD_INFREQUENT_ACCESS",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection-enabled",
          description:
            "Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table",
        },
        {
          name: "--no-deletion-protection-enabled",
          description:
            "Indicates whether deletion protection is to be enabled (true) or disabled (false) on the table",
        },
        {
          name: "--multi-region-consistency",
          description:
            "Specifies the consistency mode for a new global table. This parameter is only valid when you create a global table by specifying one or more Create actions in the ReplicaUpdates action list. You can specify one of the following consistency modes:    EVENTUAL: Configures a new global table for multi-Region eventual consistency. This is the default consistency mode for global tables.    STRONG: Configures a new global table for multi-Region strong consistency (preview).  Multi-Region strong consistency (MRSC) is a new DynamoDB global tables capability currently available in preview mode. For more information, see Global tables multi-Region strong consistency.    If you don't specify this parameter, the global table consistency mode defaults to EVENTUAL",
          args: {
            name: "string",
          },
        },
        {
          name: "--on-demand-throughput",
          description:
            "Updates the maximum number of read and write units for the specified table in on-demand capacity mode. If you use this parameter, you must specify MaxReadRequestUnits, MaxWriteRequestUnits, or both",
          args: {
            name: "structure",
          },
        },
        {
          name: "--warm-throughput",
          description:
            "Represents the warm throughput (in read units per second and write units per second) for updating a table",
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
      name: "update-table-replica-auto-scaling",
      description:
        "Updates auto scaling settings on your global tables at once.  For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version)",
      options: [
        {
          name: "--global-secondary-index-updates",
          description:
            "Represents the auto scaling settings of the global secondary indexes of the replica to be updated",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the global table to be updated. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--provisioned-write-capacity-auto-scaling-update",
          description:
            "Represents the auto scaling settings to be modified for a global table or global secondary index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--replica-updates",
          description:
            "Represents the auto scaling settings of replicas of the table that will be modified",
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
      name: "update-time-to-live",
      description:
        "The UpdateTimeToLive method enables or disables Time to Live (TTL) for the specified table. A successful UpdateTimeToLive call returns the current TimeToLiveSpecification. It can take up to one hour for the change to fully process. Any additional UpdateTimeToLive calls for the same table during this one hour duration result in a ValidationException.  TTL compares the current time in epoch time format to the time stored in the TTL attribute of an item. If the epoch time value stored in the attribute is less than the current time, the item is marked as expired and subsequently deleted.   The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1, 1970 UTC.   DynamoDB deletes expired items on a best-effort basis to ensure availability of throughput for other data operations.   DynamoDB typically deletes expired items within two days of expiration. The exact duration within which an item gets deleted after expiration is specific to the nature of the workload. Items that have expired and not been deleted will still show up in reads, queries, and scans.  As items are deleted, they are removed from any local secondary index and global secondary index immediately in the same eventually consistent way as a standard delete operation. For more information, see Time To Live in the Amazon DynamoDB Developer Guide",
      options: [
        {
          name: "--table-name",
          description:
            "The name of the table to be configured. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-to-live-specification",
          description:
            "Represents the settings used to enable or disable Time to Live for the specified table",
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
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "table-exists",
          description:
            "Wait until JMESPath query Table.TableStatus returns ACTIVE when polling with ``describe-table``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 25 failed checks",
          options: [
            {
              name: "--table-name",
              description:
                "The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
          name: "table-not-exists",
          description:
            "Wait until ResourceNotFoundException is thrown when polling with ``describe-table``. It will poll every 20 seconds until a successful state has been reached. This will exit with a return code of 255 after 25 failed checks",
          options: [
            {
              name: "--table-name",
              description:
                "The name of the table to describe. You can also provide the Amazon Resource Name (ARN) of the table in this parameter",
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
    },
  ],
};
export default completionSpec;
