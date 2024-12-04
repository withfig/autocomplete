const completionSpec: Fig.Spec = {
  name: "athena",
  description:
    "Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically\u2014executing queries in parallel\u2014so results are fast, even with large datasets and complex queries. For more information, see What is Amazon Athena in the Amazon Athena User Guide. If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see Accessing Amazon Athena with JDBC",
  subcommands: [
    {
      name: "batch-get-named-query",
      description:
        "Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use ListNamedQueriesInput to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under UnprocessedNamedQueryId. Named queries differ from executed queries. Use BatchGetQueryExecutionInput to get details about each unique query execution, and ListQueryExecutionsInput to get a list of query execution IDs",
      options: [
        {
          name: "--named-query-ids",
          description: "An array of query IDs",
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
      name: "batch-get-prepared-statement",
      description:
        "Returns the details of a single prepared statement or a list of up to 256 prepared statements for the array of prepared statement names that you provide. Requires you to have access to the workgroup to which the prepared statements belong. If a prepared statement cannot be retrieved for the name specified, the statement is listed in UnprocessedPreparedStatementNames",
      options: [
        {
          name: "--prepared-statement-names",
          description: "A list of prepared statement names to return",
          args: {
            name: "list",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup to which the prepared statements belong",
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
      name: "batch-get-query-execution",
      description:
        "Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use ListQueryExecutionsInput$WorkGroup. Query executions differ from named (saved) queries. Use BatchGetNamedQueryInput to get details about named queries",
      options: [
        {
          name: "--query-execution-ids",
          description: "An array of query execution IDs",
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
      name: "cancel-capacity-reservation",
      description:
        "Cancels the capacity reservation with the specified name. Cancelled reservations remain in your account and will be deleted 45 days after cancellation. During the 45 days, you cannot re-purpose or reuse a reservation that has been cancelled, but you can refer to its tags and view it for historical reference",
      options: [
        {
          name: "--name",
          description: "The name of the capacity reservation to cancel",
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
      name: "create-capacity-reservation",
      description:
        "Creates a capacity reservation with the specified name and number of requested data processing units",
      options: [
        {
          name: "--target-dpus",
          description: "The number of requested data processing units",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the capacity reservation to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags for the capacity reservation",
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
      name: "create-data-catalog",
      description:
        "Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account. This API operation creates the following resources.   CFN Stack Name with a maximum length of 128 characters and prefix athenafederatedcatalog-CATALOG_NAME_SANITIZED with length 23 characters.   Lambda Function Name with a maximum length of 64 characters and prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters.   Glue Connection Name with a maximum length of 255 characters and a prefix athenafederatedcatalog_CATALOG_NAME_SANITIZED with length 23 characters",
      options: [
        {
          name: "--name",
          description:
            "The name of the data catalog to create. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena. For FEDERATED type the catalog name has following considerations and limits:   The catalog name allows special characters such as _ , @ , \\ , - . These characters are replaced with a hyphen (-) when creating the CFN Stack Name and with an underscore (_) when creating the Lambda Function and Glue Connection Name.   The catalog name has a theoretical limit of 128 characters. However, since we use it to create other resources that allow less characters and we prepend a prefix to it, the actual catalog name limit for FEDERATED catalog is 64 - 23 = 41 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of data catalog to create: LAMBDA for a federated catalog, GLUE for an Glue Data Catalog, and HIVE for an external Apache Hive metastore. FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the data catalog to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            'Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type.    For the HIVE data catalog type, use the following syntax. The metadata-function parameter is required. The sdk-version parameter is optional and defaults to the currently supported version.  metadata-function=lambda_arn, sdk-version=version_number     For the LAMBDA data catalog type, use one of the following sets of required parameters, but not both.   If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.  metadata-function=lambda_arn, record-function=lambda_arn      If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.  function=lambda_arn       The GLUE type takes a catalog ID parameter and is required. The  catalog_id  is the account ID of the Amazon Web Services account to which the Glue Data Catalog belongs.  catalog-id=catalog_id     The GLUE data catalog type also applies to the default AwsDataCatalog that already exists in your account, of which you can have only one and cannot modify.     The FEDERATED data catalog type uses one of the following parameters, but not both. Use connection-arn for an existing Glue connection. Use connection-type and connection-properties to specify the configuration setting for a new connection.    connection-arn:<glue_connection_arn_to_reuse>      lambda-role-arn (optional): The execution role to use for the Lambda function. If not provided, one is created.    connection-type:MYSQL|REDSHIFT|...., connection-properties:"<json_string>"  For  <json_string> , use escaped JSON text, as in the following example.  "{\\"spill_bucket\\":\\"my_spill\\",\\"spill_prefix\\":\\"athena-spill\\",\\"host\\":\\"abc12345.snowflakecomputing.com\\",\\"port\\":\\"1234\\",\\"warehouse\\":\\"DEV_WH\\",\\"database\\":\\"TEST\\",\\"schema\\":\\"PUBLIC\\",\\"SecretArn\\":\\"arn:aws:secretsmanager:ap-south-1:111122223333:secret:snowflake-XHb67j\\"}"',
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            'A list of comma separated tags to add to the data catalog that is created. All the resources that are created by the CreateDataCatalog API operation with FEDERATED type will have the tag federated_athena_datacatalog="true". This includes the CFN Stack, Glue Connection, Athena DataCatalog, and all the resources created as part of the CFN Stack (Lambda Function, IAM policies/roles)',
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
      name: "create-named-query",
      description:
        "Creates a named query in the specified workgroup. Requires that you have access to the workgroup",
      options: [
        {
          name: "--name",
          description: "The query name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The query description",
          args: {
            name: "string",
          },
        },
        {
          name: "--database",
          description: "The database to which the query belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description: "The contents of the query with all query statements",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another CreateNamedQuery request is received, the same response is returned and another query is not created. If a parameter has changed, for example, the QueryString, an error is returned.  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup in which the named query is being created",
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
      name: "create-notebook",
      description:
        "Creates an empty ipynb file in the specified Apache Spark enabled workgroup. Throws an error if a file in the workgroup with the same name already exists",
      options: [
        {
          name: "--work-group",
          description:
            "The name of the Spark enabled workgroup in which the notebook will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the ipynb file to be created in the Spark workgroup, without the .ipynb extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
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
      name: "create-prepared-statement",
      description:
        "Creates a prepared statement for use with SQL queries in Athena",
      options: [
        {
          name: "--statement-name",
          description: "The name of the prepared statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup to which the prepared statement belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-statement",
          description: "The query string for the prepared statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the prepared statement",
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
      name: "create-presigned-notebook-url",
      description:
        "Gets an authentication token and the URL at which the notebook can be accessed. During programmatic access, CreatePresignedNotebookUrl must be called every 10 minutes to refresh the authentication token. For information about granting programmatic access, see Grant programmatic access",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "create-work-group",
      description:
        "Creates a workgroup with the specified name. A workgroup can be an Apache Spark enabled workgroup or an Athena SQL workgroup",
      options: [
        {
          name: "--name",
          description: "The workgroup name",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Contains configuration information for creating an Athena SQL workgroup or Spark enabled Athena workgroup. Athena SQL workgroup configuration includes the location in Amazon S3 where query and calculation results are stored, the encryption configuration, if any, used for encrypting query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the limit for the amount of bytes scanned (cutoff) per query, if it is specified, and whether workgroup's settings (specified with EnforceWorkGroupConfiguration) in the WorkGroupConfiguration override client-side settings. See WorkGroupConfiguration$EnforceWorkGroupConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The workgroup description",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of comma separated tags to add to the workgroup that is created",
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
      name: "delete-capacity-reservation",
      description:
        "Deletes a cancelled capacity reservation. A reservation must be cancelled before it can be deleted. A deleted reservation is immediately removed from your account and can no longer be referenced, including by its ARN. A deleted reservation cannot be called by GetCapacityReservation, and deleted reservations do not appear in the output of ListCapacityReservations",
      options: [
        {
          name: "--name",
          description: "The name of the capacity reservation to delete",
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
      name: "delete-data-catalog",
      description: "Deletes a data catalog",
      options: [
        {
          name: "--name",
          description: "The name of the data catalog to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-catalog-only",
          description:
            "Deletes the Athena Data Catalog. You can only use this with the FEDERATED catalogs. You usually perform this before registering the connector with Glue Data Catalog. After deletion, you will have to manage the Glue Connection and Lambda function",
        },
        {
          name: "--no-delete-catalog-only",
          description:
            "Deletes the Athena Data Catalog. You can only use this with the FEDERATED catalogs. You usually perform this before registering the connector with Glue Data Catalog. After deletion, you will have to manage the Glue Connection and Lambda function",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-named-query",
      description:
        "Deletes the named query if you have access to the workgroup in which the query was saved",
      options: [
        {
          name: "--named-query-id",
          description: "The unique ID of the query to delete",
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
      name: "delete-notebook",
      description: "Deletes the specified notebook",
      options: [
        {
          name: "--notebook-id",
          description: "The ID of the notebook to delete",
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
      name: "delete-prepared-statement",
      description:
        "Deletes the prepared statement with the specified name from the specified workgroup",
      options: [
        {
          name: "--statement-name",
          description: "The name of the prepared statement to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The workgroup to which the statement to be deleted belongs",
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
      name: "delete-work-group",
      description:
        "Deletes the workgroup with the specified name. The primary workgroup cannot be deleted",
      options: [
        {
          name: "--work-group",
          description: "The unique name of the workgroup to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--recursive-delete-option",
          description:
            "The option to delete the workgroup and its contents even if the workgroup contains any named queries, query executions, or notebooks",
        },
        {
          name: "--no-recursive-delete-option",
          description:
            "The option to delete the workgroup and its contents even if the workgroup contains any named queries, query executions, or notebooks",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "export-notebook",
      description: "Exports the specified notebook and its metadata",
      options: [
        {
          name: "--notebook-id",
          description: "The ID of the notebook to export",
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
      name: "get-calculation-execution",
      description: "Describes a previously submitted calculation execution",
      options: [
        {
          name: "--calculation-execution-id",
          description: "The calculation execution UUID",
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
      name: "get-calculation-execution-code",
      description:
        "Retrieves the unencrypted code that was executed for the calculation",
      options: [
        {
          name: "--calculation-execution-id",
          description: "The calculation execution UUID",
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
      name: "get-calculation-execution-status",
      description: "Gets the status of a current calculation",
      options: [
        {
          name: "--calculation-execution-id",
          description: "The calculation execution UUID",
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
      name: "get-capacity-assignment-configuration",
      description:
        "Gets the capacity assignment configuration for a capacity reservation, if one exists",
      options: [
        {
          name: "--capacity-reservation-name",
          description:
            "The name of the capacity reservation to retrieve the capacity assignment configuration for",
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
      name: "get-capacity-reservation",
      description:
        "Returns information about the capacity reservation with the specified name",
      options: [
        {
          name: "--name",
          description: "The name of the capacity reservation",
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
      name: "get-data-catalog",
      description: "Returns the specified data catalog",
      options: [
        {
          name: "--name",
          description: "The name of the data catalog to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup. Required if making an IAM Identity Center request",
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
      name: "get-database",
      description:
        "Returns a database object for the specified database and data catalog",
      options: [
        {
          name: "--catalog-name",
          description:
            "The name of the data catalog that contains the database to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description: "The name of the database to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog",
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
      name: "get-named-query",
      description:
        "Returns information about a single query. Requires that you have access to the workgroup in which the query was saved",
      options: [
        {
          name: "--named-query-id",
          description:
            "The unique ID of the query. Use ListNamedQueries to get query IDs",
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
      name: "get-notebook-metadata",
      description: "Retrieves notebook metadata for the specified notebook ID",
      options: [
        {
          name: "--notebook-id",
          description:
            "The ID of the notebook whose metadata is to be retrieved",
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
      name: "get-prepared-statement",
      description:
        "Retrieves the prepared statement with the specified name from the specified workgroup",
      options: [
        {
          name: "--statement-name",
          description: "The name of the prepared statement to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The workgroup to which the statement to be retrieved belongs",
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
      name: "get-query-execution",
      description:
        "Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID",
      options: [
        {
          name: "--query-execution-id",
          description: "The unique ID of the query execution",
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
      name: "get-query-results",
      description:
        "Streams the results of a single query execution specified by QueryExecutionId from the Athena query results location in Amazon S3. For more information, see Working with query results, recent queries, and output files in the Amazon Athena User Guide. This request does not execute the query but returns results. Use StartQueryExecution to run a query. To stream query results successfully, the IAM principal with permission to call GetQueryResults also must have permissions to the Amazon S3 GetObject action for the Athena query results location.  IAM principals with permission to the Amazon S3 GetObject action for the query results location are able to retrieve query results from Amazon S3 even if permission to the GetQueryResults action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied",
      options: [
        {
          name: "--query-execution-id",
          description: "The unique ID of the query execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results (rows) to return in this request",
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
      name: "get-query-runtime-statistics",
      description:
        "Returns query execution runtime statistics related to a single execution of a query if you have access to the workgroup in which the query ran. Statistics from the Timeline section of the response object are available as soon as QueryExecutionStatus$State is in a SUCCEEDED or FAILED state. The remaining non-timeline statistics in the response (like stage-level input and output row count and data size) are updated asynchronously and may not be available immediately after a query completes. The non-timeline statistics are also not included when a query has row-level filters defined in Lake Formation",
      options: [
        {
          name: "--query-execution-id",
          description: "The unique ID of the query execution",
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
      name: "get-session",
      description:
        "Gets the full details of a previously created session, including the session status and configuration",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "get-session-status",
      description: "Gets the current status of a session",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
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
      name: "get-table-metadata",
      description:
        "Returns table metadata for the specified catalog, database, and table",
      options: [
        {
          name: "--catalog-name",
          description:
            "The name of the data catalog that contains the database and table metadata to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database that contains the table metadata to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table for which metadata is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog",
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
      name: "get-work-group",
      description:
        "Returns information about the workgroup with the specified name",
      options: [
        {
          name: "--work-group",
          description: "The name of the workgroup",
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
      name: "import-notebook",
      description:
        "Imports a single ipynb file to a Spark enabled workgroup. To import the notebook, the request must specify a value for either Payload or NoteBookS3LocationUri. If neither is specified or both are specified, an InvalidRequestException occurs. The maximum file size that can be imported is 10 megabytes. If an ipynb file with the same name already exists in the workgroup, throws an error",
      options: [
        {
          name: "--work-group",
          description:
            "The name of the Spark enabled workgroup to import the notebook to",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the notebook to import",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description:
            "The notebook content to be imported. The payload must be in ipynb format",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The notebook content type. Currently, the only valid type is IPYNB",
          args: {
            name: "string",
          },
        },
        {
          name: "--notebook-s3-location-uri",
          description:
            "A URI that specifies the Amazon S3 location of a notebook file in ipynb format",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to import the notebook is idempotent (executes only once).  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
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
      name: "list-application-dpu-sizes",
      description:
        "Returns the supported DPU sizes for the supported application runtimes (for example, Athena notebook version 1)",
      options: [
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated",
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
      name: "list-calculation-executions",
      description:
        "Lists the calculations that have been submitted to a session in descending order. Newer calculations are listed first; older calculations are listed later",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-filter",
          description:
            "A filter for a specific calculation execution state. A description of each state follows.  CREATING - The calculation is in the process of being created.  CREATED - The calculation has been created and is ready to run.  QUEUED - The calculation has been queued for processing.  RUNNING - The calculation is running.  CANCELING - A request to cancel the calculation has been received and the system is working to stop it.  CANCELED - The calculation is no longer running as the result of a cancel request.  COMPLETED - The calculation has completed without error.  FAILED - The calculation failed and is no longer running",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of calculation executions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
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
      name: "list-capacity-reservations",
      description: "Lists the capacity reservations for the current account",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to return",
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
      name: "list-data-catalogs",
      description:
        'Lists the data catalogs in the current Amazon Web Services account.  In the Athena console, data catalogs are listed as "data sources" on the Data sources page under the Data source name column',
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Specifies the maximum number of data catalogs to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup. Required if making an IAM Identity Center request",
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
      name: "list-databases",
      description: "Lists the databases in the specified data catalog",
      options: [
        {
          name: "--catalog-name",
          description:
            "The name of the data catalog that contains the databases to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog",
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
      name: "list-engine-versions",
      description:
        "Returns a list of engine versions that are available to choose from, including the Auto option",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of engine versions to return in this request",
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
      name: "list-executors",
      description:
        "Lists, in descending order, the executors that joined a session. Newer executors are listed first; older executors are listed later. The result can be optionally filtered by state",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--executor-state-filter",
          description:
            "A filter for a specific executor state. A description of each state follows.  CREATING - The executor is being started, including acquiring resources.  CREATED - The executor has been started.  REGISTERED - The executor has been registered.  TERMINATING - The executor is in the process of shutting down.  TERMINATED - The executor is no longer running.  FAILED - Due to a failure, the executor is no longer running",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of executors to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
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
      name: "list-named-queries",
      description:
        "Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of queries to return in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup from which the named queries are being returned. If a workgroup is not specified, the saved queries for the primary workgroup are returned",
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
      name: "list-notebook-metadata",
      description:
        "Displays the notebook files for the specified workgroup in paginated format",
      options: [
        {
          name: "--filters",
          description: "Search filter string",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the Spark enabled workgroup to retrieve notebook metadata for",
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
      name: "list-notebook-sessions",
      description:
        "Lists, in descending order, the sessions that have been created in a notebook that are in an active state like CREATING, CREATED, IDLE or BUSY. Newer sessions are listed first; older sessions are listed later",
      options: [
        {
          name: "--notebook-id",
          description: "The ID of the notebook to list sessions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of notebook sessions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
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
      name: "list-prepared-statements",
      description: "Lists the prepared statements in the specified workgroup",
      options: [
        {
          name: "--work-group",
          description: "The workgroup to list the prepared statements for",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in this request",
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
      name: "list-query-executions",
      description:
        "Provides a list of available query execution IDs for the queries in the specified workgroup. Athena keeps a query history for 45 days. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of query executions to return in this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup from which queries are being returned. If a workgroup is not specified, a list of available query execution IDs for the queries in the primary workgroup is returned",
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
      name: "list-sessions",
      description:
        "Lists the sessions in a workgroup that are in an active state like CREATING, CREATED, IDLE, or BUSY. Newer sessions are listed first; older sessions are listed later",
      options: [
        {
          name: "--work-group",
          description: "The workgroup to which the session belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--state-filter",
          description:
            "A filter for a specific session state. A description of each state follows.  CREATING - The session is being started, including acquiring resources.  CREATED - The session has been started.  IDLE - The session is able to accept a calculation.  BUSY - The session is processing another task and is unable to accept a calculation.  TERMINATING - The session is in the process of shutting down.  TERMINATED - The session and its resources are no longer running.  DEGRADED - The session has no healthy coordinators.  FAILED - Due to a failure, the session and its resources are no longer running",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of sessions to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
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
      name: "list-table-metadata",
      description:
        "Lists the metadata for the tables in the specified data catalog database",
      options: [
        {
          name: "--catalog-name",
          description:
            "The name of the data catalog for which table metadata should be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database for which table metadata should be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "A regex filter that pattern-matches table names. If no expression is supplied, metadata for all tables are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Specifies the maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup for which the metadata is being fetched. Required if requesting an IAM Identity Center enabled Glue Data Catalog",
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
      description: "Lists the tags associated with an Athena resource",
      options: [
        {
          name: "--resource-arn",
          description: "Lists the tags for the resource with the specified ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no additional results for this request, where the request lists the tags for the resource with the specified ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request that lists the tags for the resource",
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
      name: "list-work-groups",
      description: "Lists available workgroups for the account",
      options: [
        {
          name: "--next-token",
          description:
            "A token generated by the Athena service that specifies where to continue pagination if a previous request was truncated. To obtain the next set of pages, pass in the NextToken from the response object of the previous page call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of workgroups to return in this request",
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
      name: "put-capacity-assignment-configuration",
      description:
        "Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration",
      options: [
        {
          name: "--capacity-reservation-name",
          description:
            "The name of the capacity reservation to put a capacity assignment configuration for",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-assignments",
          description:
            "The list of assignments for the capacity assignment configuration",
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
      name: "start-calculation-execution",
      description:
        "Submits calculations for execution within a session. You can supply the code to run as an inline code block within the request.  The request syntax requires the StartCalculationExecutionRequest$CodeBlock parameter or the CalculationConfiguration$CodeBlock parameter, but not both. Because CalculationConfiguration$CodeBlock is deprecated, use the StartCalculationExecutionRequest$CodeBlock parameter instead",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the calculation",
          args: {
            name: "string",
          },
        },
        {
          name: "--calculation-configuration",
          description: "Contains configuration information for the calculation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--code-block",
          description:
            "A string that contains the code of the calculation. Use this parameter instead of CalculationConfiguration$CodeBlock, which is deprecated",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the calculation is idempotent (executes only once). If another StartCalculationExecutionRequest is received, the same response is returned and another calculation is not created. If a parameter has changed, an error is returned.  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
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
      name: "start-query-execution",
      description:
        "Runs the SQL query statements contained in the Query. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires GetDataCatalog permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see Examples and Code Samples in the Amazon Athena User Guide",
      options: [
        {
          name: "--query-string",
          description: "The SQL query statements to be executed",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the query is idempotent (executes only once). If another StartQueryExecution request is received, the same response is returned and another query is not created. An error is returned if a parameter, such as QueryString, has changed. A call to StartQueryExecution that uses a previous client request token returns the same QueryExecutionId even if the requester doesn't have permission on the tables specified in QueryString.  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-execution-context",
          description: "The database within which the query executes",
          args: {
            name: "structure",
          },
        },
        {
          name: "--result-configuration",
          description:
            "Specifies information about where and how to save the results of the query execution. If the query runs in a workgroup, then workgroup's settings may override query settings. This affects the query results location. The workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See WorkGroupConfiguration$EnforceWorkGroupConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--work-group",
          description:
            "The name of the workgroup in which the query is being started",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-parameters",
          description:
            "A list of values for the parameters in a query. The values are applied sequentially to the parameters in the query in the order in which the parameters occur",
          args: {
            name: "list",
          },
        },
        {
          name: "--result-reuse-configuration",
          description:
            "Specifies the query result reuse behavior for the query",
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
      name: "start-session",
      description:
        "Creates a session for running calculations within a workgroup. The session is ready when it reaches an IDLE state",
      options: [
        {
          name: "--description",
          description: "The session description",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description: "The workgroup to which the session belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--engine-configuration",
          description:
            "Contains engine data processing unit (DPU) configuration settings and parameter mappings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notebook-version",
          description:
            "The notebook version. This value is supplied automatically for notebook sessions in the Athena console and is not required for programmatic session access. The only valid notebook version is Athena notebook version 1. If you specify a value for NotebookVersion, you must also specify a value for NotebookId. See EngineConfiguration$AdditionalConfigs",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-idle-timeout-in-minutes",
          description: "The idle timeout in minutes for the session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the session is idempotent (executes only once). If another StartSessionRequest is received, the same response is returned and another session is not created. If a parameter has changed, an error is returned.  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for users. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
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
      name: "stop-calculation-execution",
      description:
        "Requests the cancellation of a calculation. A StopCalculationExecution call on a calculation that is already in a terminal state (for example, STOPPED, FAILED, or COMPLETED) succeeds but has no effect.  Cancelling a calculation is done on a best effort basis. If a calculation cannot be cancelled, you can be charged for its completion. If you are concerned about being charged for a calculation that cannot be cancelled, consider terminating the session in which the calculation is running",
      options: [
        {
          name: "--calculation-execution-id",
          description: "The calculation execution UUID",
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
      name: "stop-query-execution",
      description:
        "Stops a query execution. Requires you to have access to the workgroup in which the query ran",
      options: [
        {
          name: "--query-execution-id",
          description: "The unique ID of the query execution to stop",
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
        "Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups, data catalogs, or capacity reservations by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see Tagging Best Practices. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas",
      options: [
        {
          name: "--resource-arn",
          description:
            "Specifies the ARN of the Athena resource to which tags are to be added",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A collection of one or more tags, separated by commas, to be added to an Athena resource",
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
      name: "terminate-session",
      description:
        "Terminates an active session. A TerminateSession call on a session that is already inactive (for example, in a FAILED, TERMINATED or TERMINATING state) succeeds but has no effect. Calculations running in the session when TerminateSession is called are forcefully stopped, but may display as FAILED instead of STOPPED",
      options: [
        {
          name: "--session-id",
          description: "The session ID",
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
      description: "Removes one or more tags from an Athena resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "Specifies the ARN of the resource from which tags are to be removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A comma-separated list of one or more tag keys whose tags are to be removed from the specified resource",
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
      name: "update-capacity-reservation",
      description:
        "Updates the number of requested data processing units for the capacity reservation with the specified name",
      options: [
        {
          name: "--target-dpus",
          description: "The new number of requested data processing units",
          args: {
            name: "integer",
          },
        },
        {
          name: "--name",
          description: "The name of the capacity reservation",
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
      name: "update-data-catalog",
      description: "Updates the data catalog that has the specified name",
      options: [
        {
          name: "--name",
          description:
            "The name of the data catalog to update. The catalog name must be unique for the Amazon Web Services account and can use a maximum of 127 alphanumeric, underscore, at sign, or hyphen characters. The remainder of the length constraint of 256 is reserved for use by Athena",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Specifies the type of data catalog to update. Specify LAMBDA for a federated catalog, HIVE for an external hive metastore, or GLUE for an Glue Data Catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "New or modified text that describes the data catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "Specifies the Lambda function or functions to use for updating the data catalog. This is a mapping whose values depend on the catalog type.    For the HIVE data catalog type, use the following syntax. The metadata-function parameter is required. The sdk-version parameter is optional and defaults to the currently supported version.  metadata-function=lambda_arn, sdk-version=version_number     For the LAMBDA data catalog type, use one of the following sets of required parameters, but not both.   If you have one Lambda function that processes metadata and another for reading the actual data, use the following syntax. Both parameters are required.  metadata-function=lambda_arn, record-function=lambda_arn      If you have a composite Lambda function that processes both metadata and data, use the following syntax to specify your Lambda function.  function=lambda_arn",
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
      name: "update-named-query",
      description:
        "Updates a NamedQuery object. The database or workgroup cannot be updated",
      options: [
        {
          name: "--named-query-id",
          description: "The unique identifier (UUID) of the query",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the query",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The query description",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-string",
          description: "The contents of the query with all query statements",
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
      name: "update-notebook",
      description: "Updates the contents of a Spark notebook",
      options: [
        {
          name: "--notebook-id",
          description: "The ID of the notebook to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--payload",
          description: "The updated content for the notebook",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The notebook content type. Currently, the only valid type is IPYNB",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The active notebook session ID. Required if the notebook has an active session",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
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
      name: "update-notebook-metadata",
      description: "Updates the metadata for a notebook",
      options: [
        {
          name: "--notebook-id",
          description: "The ID of the notebook to update the metadata for",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "A unique case-sensitive string used to ensure the request to create the notebook is idempotent (executes only once).  This token is listed as not required because Amazon Web Services SDKs (for example the Amazon Web Services SDK for Java) auto-generate the token for you. If you are not using the Amazon Web Services SDK or the Amazon Web Services CLI, you must provide this token or the action will fail",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name to update the notebook to",
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
      name: "update-prepared-statement",
      description: "Updates a prepared statement",
      options: [
        {
          name: "--statement-name",
          description: "The name of the prepared statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--work-group",
          description: "The workgroup for the prepared statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-statement",
          description: "The query string for the prepared statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the prepared statement",
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
      name: "update-work-group",
      description:
        "Updates the workgroup with the specified name. The workgroup's name cannot be changed. Only ConfigurationUpdates can be specified",
      options: [
        {
          name: "--work-group",
          description: "The specified workgroup that will be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The workgroup description",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-updates",
          description:
            "Contains configuration updates for an Athena SQL workgroup",
          args: {
            name: "structure",
          },
        },
        {
          name: "--state",
          description:
            "The workgroup state that will be updated for the given workgroup",
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
