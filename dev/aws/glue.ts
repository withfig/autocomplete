export const completionSpec: Fig.Spec = {
  name: "glue",
  description: "AWS Glue Defines the public endpoint for the AWS Glue service.",
  subcommands: [
    {
      name: "batch-create-partition",
      description: "Creates one or more partitions in a batch operation.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog in which the partition is to be created. Currently, this should be the AWS account ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be created.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be created.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-input-list",
          description:
            "A list of PartitionInput structures that define the partitions to be created.",
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
      name: "batch-delete-connection",
      description:
        "Deletes a list of connection definitions from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connections reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--connection-name-list",
          description: "A list of names of the connections to delete.",
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
      name: "batch-delete-partition",
      description: "Deletes one or more partitions in a batch operation.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be deleted resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table that contains the partitions to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partitions-to-delete",
          description:
            "A list of PartitionInput structures that define the partitions to be deleted.",
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
      name: "batch-delete-table",
      description:
        'Deletes multiple tables at once.  After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling BatchDeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the tables to delete reside. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tables-to-delete",
          description: "A list of the table to delete.",
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
      name: "batch-delete-table-version",
      description: "Deletes a specified batch of versions of a table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--version-ids",
          description:
            "A list of the IDs of versions to be deleted. A VersionId is a string representation of an integer. Each version is incremented by 1.",
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
      name: "batch-get-crawlers",
      description:
        "Returns a list of resource metadata for a given list of crawler names. After calling the ListCrawlers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.",
      options: [
        {
          name: "--crawler-names",
          description:
            "A list of crawler names, which might be the names returned from the ListCrawlers operation.",
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
      name: "batch-get-dev-endpoints",
      description:
        "Returns a list of resource metadata for a given list of development endpoint names. After calling the ListDevEndpoints operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.",
      options: [
        {
          name: "--dev-endpoint-names",
          description:
            "The list of DevEndpoint names, which might be the names returned from the ListDevEndpoint operation.",
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
      name: "batch-get-jobs",
      description:
        "Returns a list of resource metadata for a given list of job names. After calling the ListJobs operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.",
      options: [
        {
          name: "--job-names",
          description:
            "A list of job names, which might be the names returned from the ListJobs operation.",
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
      name: "batch-get-partition",
      description: "Retrieves partitions in a batch request.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partitions-to-get",
          description:
            "A list of partition values identifying the partitions to retrieve.",
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
      name: "batch-get-triggers",
      description:
        "Returns a list of resource metadata for a given list of trigger names. After calling the ListTriggers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.",
      options: [
        {
          name: "--trigger-names",
          description:
            "A list of trigger names, which may be the names returned from the ListTriggers operation.",
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
      name: "batch-get-workflows",
      description:
        "Returns a list of resource metadata for a given list of workflow names. After calling the ListWorkflows operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.",
      options: [
        {
          name: "--names",
          description:
            "A list of workflow names, which may be the names returned from the ListWorkflows operation.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata.",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata.",
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
      name: "batch-stop-job-run",
      description: "Stops one or more job runs for a specified job definition.",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job definition for which to stop job runs.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--job-run-ids",
          description:
            "A list of the JobRunIds that should be stopped for that job definition.",
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
      name: "batch-update-partition",
      description: "Updates one or more partitions in a batch operation.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog in which the partition is to be updated. Currently, this should be the AWS account ID.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be updated.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be updated.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--entries",
          description:
            "A list of up to 100 BatchUpdatePartitionRequestEntry objects to update.",
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
      name: "cancel-ml-task-run",
      description:
        "Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling CancelMLTaskRun with a task run's parent transform's TransformID and the task run's TaskRunId.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--task-run-id",
          description: "A unique identifier for the task run.",
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
      name: "check-schema-version-validity",
      description:
        "Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using DataFormat as the format. Since it does not take a schema set name, no compatibility checks are performed.",
      options: [
        {
          name: "--data-format",
          description:
            "The data format of the schema definition. Currently only AVRO is supported.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--schema-definition",
          description: "The definition of the schema that has to be validated.",
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
      name: "create-classifier",
      description:
        "Creates a classifier in the user's account. This can be a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field of the request is present.",
      options: [
        {
          name: "--grok-classifier",
          description:
            "A GrokClassifier object specifying the classifier to create.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--xml-classifier",
          description:
            "An XMLClassifier object specifying the classifier to create.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--json-classifier",
          description:
            "A JsonClassifier object specifying the classifier to create.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--csv-classifier",
          description:
            "A CsvClassifier object specifying the classifier to create.",
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
      name: "create-connection",
      description: "Creates a connection definition in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the connection. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--connection-input",
          description:
            "A ConnectionInput object defining the connection to create.",
          args: {
            name: "structure",
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
      name: "create-crawler",
      description:
        "Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the s3Targets field, the jdbcTargets field, or the DynamoDBTargets field.",
      options: [
        {
          name: "--name",
          description: "Name of the new crawler.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--role",
          description:
            "The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to access customer resources.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--database-name",
          description:
            "The AWS Glue database where results are written, such as: arn:aws:daylight:us-east-1::database/sometable/*.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "A description of the new crawler.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--targets",
          description: "A list of collection of targets to crawl.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--classifiers",
          description:
            "A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--table-prefix",
          description:
            "The table prefix used for catalog tables that are created.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--schema-change-policy",
          description:
            "The policy for the crawler's update and deletion behavior.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--recrawl-policy",
          description:
            "A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--lineage-configuration",
          description:
            "Specifies data lineage configuration settings for the crawler.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--configuration",
          description:
            "Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Configuring a Crawler.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--crawler-security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used by this crawler.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "The tags to use with this crawler request. You may use tags to limit access to the crawler. For more information about tags in AWS Glue, see AWS Tags in AWS Glue in the developer guide.",
          args: {
            name: "map",
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
      name: "create-database",
      description: "Creates a new database in a Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the database. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-input",
          description: "The metadata for the database.",
          args: {
            name: "structure",
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
      name: "create-dev-endpoint",
      description: "Creates a new development endpoint.",
      options: [
        {
          name: "--endpoint-name",
          description: "The name to be assigned to the new DevEndpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--role-arn",
          description: "The IAM role for the DevEndpoint.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--security-group-ids",
          description:
            "Security group IDs for the security groups to be used by the new DevEndpoint.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--subnet-id",
          description: "The subnet ID for the new DevEndpoint to use.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--public-key",
          description:
            "The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--public-keys",
          description:
            "A list of public keys to be used by the development endpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.  If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the UpdateDevEndpoint API with the public key content in the deletePublicKeys attribute, and the list of new keys in the addPublicKeys attribute.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--number-of-nodes",
          description:
            "The number of AWS Glue Data Processing Units (DPUs) to allocate to this DevEndpoint.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.   Known issue: when a development endpoint is created with the G.2X WorkerType configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--glue-version",
          description:
            "Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints.  For more information about the available AWS Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Development endpoints that are created without specifying a Glue version default to Glue 0.9. You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated to the development endpoint. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--extra-python-libs-s3-path",
          description:
            "The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma.  You can only use pure Python libraries with a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--extra-jars-s3-path",
          description:
            "The path to one or more Java .jar files in an S3 bucket that should be loaded in your DevEndpoint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this DevEndpoint.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in AWS Glue, see AWS Tags in AWS Glue in the developer guide.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--arguments",
          description: "A map of arguments used to configure the DevEndpoint.",
          args: {
            name: "map",
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
      name: "create-job",
      description: "Creates a new job definition.",
      options: [
        {
          name: "--name",
          description:
            "The name you assign to this job definition. It must be unique in your account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "Description of the job being defined.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--log-uri",
          description: "This field is reserved for future use.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role associated with this job.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--execution-property",
          description:
            "An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--command",
          description: "The JobCommand that executes this job.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--default-arguments",
          description:
            "The default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--non-overridable-arguments",
          description:
            "Non-overridable arguments for this job, specified as name-value pairs.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--connections",
          description: "The connections used for this job.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry this job if it fails.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--allocated-capacity",
          description:
            "This parameter is deprecated. Use MaxCapacity instead. The number of AWS Glue data processing units (DPUs) to allocate to this Job. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--timeout",
          description:
            "The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-capacity",
          description:
            'The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page. Do not set Max Capacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job or an Apache Spark ETL job:   When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.   When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.',
          args: {
            name: "double",
          },
          isOptional: true,
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this job.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "The tags to use with this job. You may use tags to limit access to the job. For more information about tags in AWS Glue, see AWS Tags in AWS Glue in the developer guide.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--notification-property",
          description:
            "Specifies configuration properties of a job notification.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--glue-version",
          description:
            "Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark.  For more information about the available AWS Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 0.9.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when a job runs. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.",
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
      name: "create-ml-transform",
      description:
        "Creates an AWS Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it. Call this operation as the first step in the process of using a machine learning transform (such as the FindMatches transform) for deduplicating data. You can provide an optional Description, in addition to the parameters that you want to use for your algorithm. You must also specify certain parameters for the tasks that AWS Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include Role, and optionally, AllocatedCapacity, Timeout, and MaxRetries. For more information, see Jobs.",
      options: [
        {
          name: "--name",
          description:
            "The unique name that you give the transform when you create it.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description:
            "A description of the machine learning transform that is being defined. The default is an empty string.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--input-record-tables",
          description:
            "A list of AWS Glue table definitions used by the transform.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--parameters",
          description:
            "The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform.    This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See Attach a Policy to IAM Users That Access AWS Glue.   This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--glue-version",
          description:
            "This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see AWS Glue Versions in the developer guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-capacity",
          description:
            "The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.   MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType.   If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set.   If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set.   If WorkerType is set, then NumberOfWorkers is required (and vice versa).    MaxCapacity and NumberOfWorkers must both be at least 1.   When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only. When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only.",
          args: {
            name: "double",
          },
          isOptional: true,
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.   For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.    MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType.   If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set.   If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set.   If WorkerType is set, then NumberOfWorkers is required (and vice versa).    MaxCapacity and NumberOfWorkers must both be at least 1.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when this task runs. If WorkerType is set, then NumberOfWorkers is required (and vice versa).",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--timeout",
          description:
            "The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry a task for this transform after a task run fails.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in AWS Glue, see AWS Tags in AWS Glue in the developer guide.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--transform-encryption",
          description:
            "The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.",
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
      name: "create-partition",
      description: "Creates a new partition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The AWS account ID of the catalog in which the partition is to be created.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be created.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be created.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-input",
          description:
            "A PartitionInput structure defining the partition to be created.",
          args: {
            name: "structure",
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
      name: "create-partition-index",
      description: "Creates a specified partition index in an existing table.",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database in which you want to create a partition index.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table in which you want to create a partition index.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-index",
          description:
            "Specifies a PartitionIndex structure to create a partition index in an existing table.",
          args: {
            name: "structure",
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
      name: "create-registry",
      description:
        "Creates a new registry which may be used to hold a collection of schemas.",
      options: [
        {
          name: "--registry-name",
          description:
            "Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description:
            "A description of the registry. If description is not provided, there will not be any default value for this.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "AWS tags that contain a key value pair and may be searched by console, command line, or API.",
          args: {
            name: "map",
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
      name: "create-schema",
      description:
        'Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version. When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the RegisterSchemaVersion API is used. When this API is called without a RegistryId, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.',
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: arn:aws:glue:us-east-2:&lt;customer id&gt;:registry/default-registry:random-5-letter-id.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-name",
          description:
            "Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--data-format",
          description:
            "The data format of the schema definition. Currently only AVRO is supported.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--compatibility",
          description:
            "The compatibility mode of the schema. The possible values are:    NONE: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.    DISABLED: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.    BACKWARD: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.    BACKWARD_ALL: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions.     FORWARD: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.    FORWARD_ALL: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.    FULL: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.    FULL_ALL: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "An optional description of the schema. If description is not provided, there will not be any automatic default value for this.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description:
            "AWS tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the AWS tags-on-create pattern.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--schema-definition",
          description:
            "The schema definition using the DataFormat setting for SchemaName.",
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
      name: "create-script",
      description: "Transforms a directed acyclic graph (DAG) into code.",
      options: [
        {
          name: "--dag-nodes",
          description: "A list of the nodes in the DAG.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--dag-edges",
          description: "A list of the edges in the DAG.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--language",
          description:
            "The programming language of the resulting code from the DAG.",
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
      name: "create-security-configuration",
      description:
        "Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see Encrypting Data Written by Crawlers, Jobs, and Development Endpoints.",
      options: [
        {
          name: "--name",
          description: "The name for the new security configuration.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration for the new security configuration.",
          args: {
            name: "structure",
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
      name: "create-table",
      description: "Creates a new table definition in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the Table. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-input",
          description:
            "The TableInput object that defines the metadata table to create in the catalog.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--partition-indexes",
          description:
            "A list of partition indexes, PartitionIndex structures, to create in the table.",
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
      name: "create-trigger",
      description: "Creates a new trigger.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--workflow-name",
          description: "The name of the workflow associated with the trigger.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--type",
          description: "The type of the new trigger.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *). This field is required when the trigger type is SCHEDULED.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--predicate",
          description:
            "A predicate to specify when the new trigger should fire. This field is required when the trigger type is CONDITIONAL.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--actions",
          description: "The actions initiated by this trigger when it fires.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the new trigger.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--start-on-creation",
          description:
            "Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.",
        },
        {
          name: "--no-start-on-creation",
          description:
            "Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.",
        },
        {
          name: "--tags",
          description:
            "The tags to use with this trigger. You may use tags to limit access to the trigger. For more information about tags in AWS Glue, see AWS Tags in AWS Glue in the developer guide.",
          args: {
            name: "map",
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
      name: "create-user-defined-function",
      description: "Creates a new function definition in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the function. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which to create the function.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-input",
          description:
            "A FunctionInput object that defines the function to create in the Data Catalog.",
          args: {
            name: "structure",
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
      name: "create-workflow",
      description: "Creates a new workflow.",
      options: [
        {
          name: "--name",
          description:
            "The name to be assigned to the workflow. It should be unique within your account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "A description of the workflow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-run-properties",
          description:
            "A collection of properties to be used as part of each execution of the workflow.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "The tags to be used with this workflow.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--max-concurrent-runs",
          description:
            "You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.",
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
      name: "delete-classifier",
      description: "Removes a classifier from the Data Catalog.",
      options: [
        {
          name: "--name",
          description: "Name of the classifier to remove.",
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
      name: "delete-column-statistics-for-partition",
      description:
        "Delete the partition column statistics of a column. The Identity and Access Management (IAM) permission required for this operation is DeletePartition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--column-name",
          description: "Name of the column.",
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
      name: "delete-column-statistics-for-table",
      description:
        "Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is DeleteTable.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--column-name",
          description: "The name of the column.",
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
      description: "Deletes a connection from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--connection-name",
          description: "The name of the connection to delete.",
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
      name: "delete-crawler",
      description:
        "Removes a specified crawler from the AWS Glue Data Catalog, unless the crawler state is RUNNING.",
      options: [
        {
          name: "--name",
          description: "The name of the crawler to remove.",
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
      name: "delete-database",
      description:
        'Removes a specified database from a Data Catalog.  After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteDatabase, use DeleteTableVersion or BatchDeleteTableVersion, DeletePartition or BatchDeletePartition, DeleteUserDefinedFunction, and DeleteTable or BatchDeleteTable, to delete any resources that belong to the database.',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description:
            "The name of the database to delete. For Hive compatibility, this must be all lowercase.",
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
      name: "delete-dev-endpoint",
      description: "Deletes a specified development endpoint.",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the DevEndpoint.",
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
      name: "delete-job",
      description:
        "Deletes a specified job definition. If the job definition is not found, no exception is thrown.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to delete.",
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
      name: "delete-ml-transform",
      description:
        "Deletes an AWS Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. If you no longer need a transform, you can delete it by calling DeleteMLTransforms. However, any AWS Glue jobs that still reference the deleted transform will no longer succeed.",
      options: [
        {
          name: "--transform-id",
          description: "The unique identifier of the transform to delete.",
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
      name: "delete-partition",
      description: "Deletes a specified partition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be deleted resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table that contains the partition to be deleted.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-values",
          description: "The values that define the partition.",
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
      name: "delete-partition-index",
      description:
        "Deletes a specified partition index from an existing table.",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database from which you want to delete a partition index.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table from which you want to delete a partition index.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--index-name",
          description: "The name of the partition index to be deleted.",
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
      name: "delete-registry",
      description:
        "Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the GetRegistry API after the asynchronous call. Deleting a registry will disable all online operations for the registry such as the UpdateRegistry, CreateSchema, UpdateSchema, and RegisterSchemaVersion APIs.",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
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
      name: "delete-resource-policy",
      description: "Deletes a specified policy.",
      options: [
        {
          name: "--policy-hash-condition",
          description: "The hash value returned when this policy was set.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the AWS Glue resource for the resource policy to be deleted.",
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
      name: "delete-schema",
      description:
        "Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call GetSchema API after the asynchronous call. Deleting a registry will disable all online operations for the schema, such as the GetSchemaByDefinition, and RegisterSchemaVersion APIs.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
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
      name: "delete-schema-versions",
      description:
        "Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the GetSchemaVersions API after this call will list the status of the deleted versions. When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the DeleteSchemaCheckpoint API before using this API. You cannot use the DeleteSchemaVersions API to delete the first schema version in the schema set. The first schema version can only be deleted by the DeleteSchema API. This operation will also delete the attached SchemaVersionMetadata under the schema versions. Hard deletes will be enforced on the database. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--versions",
          description:
            "A version range may be supplied which may be of the format:   a single version number, 5   a range, 5-8 : deletes versions 5, 6, 7, 8",
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
      name: "delete-security-configuration",
      description: "Deletes a specified security configuration.",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration to delete.",
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
      name: "delete-table",
      description:
        'Removes a table definition from the Data Catalog.  After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. AWS Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table.',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description:
            "The name of the table to be deleted. For Hive compatibility, this name is entirely lowercase.",
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
      name: "delete-table-version",
      description: "Deletes a specified version of a table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--version-id",
          description:
            "The ID of the table version to be deleted. A VersionID is a string representation of an integer. Each version is incremented by 1.",
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
      name: "delete-trigger",
      description:
        "Deletes a specified trigger. If the trigger is not found, no exception is thrown.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to delete.",
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
      name: "delete-user-defined-function",
      description:
        "Deletes an existing function definition from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be deleted is located. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function is located.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-name",
          description: "The name of the function definition to be deleted.",
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
      name: "delete-workflow",
      description: "Deletes a workflow.",
      options: [
        {
          name: "--name",
          description: "Name of the workflow to be deleted.",
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
      name: "get-catalog-import-status",
      description: "Retrieves the status of a migration operation.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog to migrate. Currently, this should be the AWS account ID.",
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
      name: "get-classifier",
      description: "Retrieve a classifier by name.",
      options: [
        {
          name: "--name",
          description: "Name of the classifier to retrieve.",
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
      name: "get-classifiers",
      description: "Lists all classifier objects in the Data Catalog.",
      options: [
        {
          name: "--max-results",
          description: "The size of the list to return (optional).",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "An optional continuation token.",
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
      name: "get-column-statistics-for-partition",
      description:
        "Retrieves partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetPartition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--column-names",
          description: "A list of the column names.",
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
      name: "get-column-statistics-for-table",
      description:
        "Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetTable.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--column-names",
          description: "A list of the column names.",
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
      name: "get-connection",
      description: "Retrieves a connection definition from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description: "The name of the connection definition to retrieve.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the AWS Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the AWS KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.",
        },
        {
          name: "--no-hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the AWS Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the AWS KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.",
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
      name: "get-connections",
      description:
        "Retrieves a list of connection definitions from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connections reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filter",
          description: "A filter that controls which connections are returned.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the AWS Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the AWS KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.",
        },
        {
          name: "--no-hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the AWS Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the AWS KMS key to decrypt the password, but it does have permission to access the rest of the connection properties.",
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of connections to return in one response.",
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
      name: "get-crawler",
      description: "Retrieves metadata for a specified crawler.",
      options: [
        {
          name: "--name",
          description: "The name of the crawler to retrieve metadata for.",
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
      name: "get-crawler-metrics",
      description: "Retrieves metrics about specified crawlers.",
      options: [
        {
          name: "--crawler-name-list",
          description:
            "A list of the names of crawlers about which to retrieve metrics.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "get-crawlers",
      description:
        "Retrieves metadata for all crawlers defined in the customer account.",
      options: [
        {
          name: "--max-results",
          description: "The number of crawlers to return on each call.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
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
      name: "get-data-catalog-encryption-settings",
      description:
        "Retrieves the security configuration for a specified catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog to retrieve the security configuration for. If none is provided, the AWS account ID is used by default.",
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
      name: "get-database",
      description: "Retrieves the definition of a specified database.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description:
            "The name of the database to retrieve. For Hive compatibility, this should be all lowercase.",
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
      name: "get-databases",
      description: "Retrieves all databases defined in a given Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog from which to retrieve Databases. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of databases to return in one response.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--resource-share-type",
          description:
            "Allows you to specify that you want to list the databases shared with your account. The allowable values are FOREIGN or ALL.    If set to FOREIGN, will list the databases shared with your account.    If set to ALL, will list the databases shared with your account, as well as the databases in yor local account.",
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
      name: "get-dataflow-graph",
      description:
        "Transforms a Python script into a directed acyclic graph (DAG).",
      options: [
        {
          name: "--python-script",
          description: "The Python script to transform.",
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
      name: "get-dev-endpoint",
      description:
        "Retrieves information about a specified development endpoint.  When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.",
      options: [
        {
          name: "--endpoint-name",
          description: "Name of the DevEndpoint to retrieve information for.",
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
      name: "get-dev-endpoints",
      description:
        "Retrieves all the development endpoints in this AWS account.  When you create a development endpoint in a virtual private cloud (VPC), AWS Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, AWS Glue returns only a public IP address.",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of information to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "get-job",
      description: "Retrieves an existing job definition.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to retrieve.",
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
      name: "get-job-bookmark",
      description: "Returns information on a job bookmark entry.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job in question.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description:
            "The unique run identifier associated with this job run.",
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
      name: "get-job-run",
      description: "Retrieves the metadata for a given job run.",
      options: [
        {
          name: "--job-name",
          description: "Name of the job definition being run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description: "The ID of the job run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--predecessors-included",
          description: "True if a list of predecessor runs should be returned.",
        },
        {
          name: "--no-predecessors-included",
          description: "True if a list of predecessor runs should be returned.",
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
      name: "get-job-runs",
      description: "Retrieves metadata for all runs of a given job definition.",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job definition for which to retrieve all job runs.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of the response.",
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
      name: "get-jobs",
      description: "Retrieves all current job definitions.",
      options: [
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of the response.",
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
      name: "get-ml-task-run",
      description:
        "Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling GetMLTaskRun with the TaskRunID and its parent transform's TransformID.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--task-run-id",
          description: "The unique identifier of the task run.",
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
      name: "get-ml-task-runs",
      description:
        "Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling GetMLTaskRuns with their parent transform's TransformID and other optional parameters as documented in this section. This operation returns a list of historic runs and must be paginated.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "A token for pagination of the results. The default is empty.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--filter",
          description:
            "The filter criteria, in the TaskRunFilterCriteria structure, for the task run.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--sort",
          description:
            "The sorting criteria, in the TaskRunSortCriteria structure, for the task run.",
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
      name: "get-ml-transform",
      description:
        "Gets an AWS Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue. You can retrieve their metadata by calling GetMLTransform.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the transform, generated at the time that the transform was created.",
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
      name: "get-ml-transforms",
      description:
        "Gets a sortable, filterable list of existing AWS Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by AWS Glue, and you can retrieve their metadata by calling GetMLTransforms.",
      options: [
        {
          name: "--next-token",
          description: "A paginated token to offset the results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--filter",
          description: "The filter transformation criteria.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--sort",
          description: "The sorting criteria.",
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
      name: "get-mapping",
      description: "Creates mappings.",
      options: [
        {
          name: "--source",
          description: "Specifies the source table.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--sinks",
          description: "A list of target tables.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--location",
          description: "Parameters for the mapping.",
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
      name: "get-partition",
      description: "Retrieves information about a specified partition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition in question resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partition resides.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partition's table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-values",
          description: "The values that define the partition.",
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
      name: "get-partition-indexes",
      description: "Retrieves the partition indexes associated with a table.",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database from which you want to retrieve partition indexes.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table for which you want to retrieve the partition indexes.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call.",
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
      name: "get-partitions",
      description: "Retrieves information about the partitions in a table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--expression",
          description:
            "An expression that filters the partitions to be returned. The expression uses SQL syntax similar to the SQL WHERE filter clause. The SQL statement parser JSQLParser parses the expression.   Operators: The following are the operators that you can use in the Expression API call:  =  Checks whether the values of the two operands are equal; if yes, then the condition becomes true. Example: Assume 'variable a' holds 10 and 'variable b' holds 20.  (a = b) is not true.  &lt; &gt;  Checks whether the values of two operands are equal; if the values are not equal, then the condition becomes true. Example: (a &lt; &gt; b) is true.  &gt;  Checks whether the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true. Example: (a &gt; b) is not true.  &lt;  Checks whether the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true. Example: (a &lt; b) is true.  &gt;=  Checks whether the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a &gt;= b) is not true.  &lt;=  Checks whether the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a &lt;= b) is true.  AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL  Logical operators.    Supported Partition Key Types: The following are the supported partition keys.    string     date     timestamp     int     bigint     long     tinyint     smallint     decimal    If an invalid type is encountered, an exception is thrown.  The following list shows the valid operators on each type. When you define a crawler, the partitionKey type is created as a STRING, to be compatible with the catalog partitions.   Sample API Call:",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve these partitions.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--segment",
          description:
            "The segment of the table's partitions to scan in this request.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of partitions to return in a single response.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--exclude-column-schema",
        },
        {
          name: "--no-exclude-column-schema",
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
      name: "get-plan",
      description: "Gets code to perform a specified mapping.",
      options: [
        {
          name: "--mapping",
          description:
            "The list of mappings from a source table to target tables.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--source",
          description: "The source table.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--sinks",
          description: "The target tables.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--location",
          description: "The parameters for the mapping.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--language",
          description:
            "The programming language of the code to perform the mapping.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--additional-plan-options-map",
          description:
            'A map to hold additional optional key-value parameters. Currently, these key-value pairs are supported:    inferSchema\u00a0 \u2014 \u00a0Specifies whether to set inferSchema to true or false for the default script generated by an AWS Glue job. For example, to set inferSchema to true, pass the following key value pair:  --additional-plan-options-map \'{"inferSchema":"true"}\'',
          args: {
            name: "map",
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
      name: "get-registry",
      description: "Describes the specified registry in detail.",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
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
      name: "get-resource-policies",
      description:
        "Retrieves the resource policies set on individual resources by AWS Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy. If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the AWS KMS key, the operation can't return the Data Catalog resource policy.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
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
      name: "get-resource-policy",
      description: "Retrieves a specified resource policy.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the AWS Glue resource for which to retrieve the resource policy. If not supplied, the Data Catalog resource policy is returned. Use GetResourcePolicies to view all existing resource policies. For more information see Specifying AWS Glue Resource ARNs.",
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
      name: "get-schema",
      description: "Describes the specified schema in detail.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.",
          args: {
            name: "structure",
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
      name: "get-schema-by-definition",
      description:
        "Retrieves a schema by the SchemaDefinition. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the SchemaName or ARN (or the default registry, if none is supplied), that schema\u2019s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in Deleted statuses will not be included in the results.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--schema-definition",
          description:
            "The definition of the schema for which schema details are required.",
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
      name: "get-schema-version",
      description:
        "Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-id",
          description:
            "The SchemaVersionId of the schema version. This field is required for fetching by schema ID. Either this or the SchemaId wrapper has to be provided.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema.",
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
      name: "get-schema-versions-diff",
      description:
        "Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry. This API allows you to compare two schema versions between two schema definitions under the same schema.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--first-schema-version-number",
          description: "The first of the two schema versions to be compared.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--second-schema-version-number",
          description: "The second of the two schema versions to be compared.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--schema-diff-type",
          description:
            "Refers to SYNTAX_DIFF, which is the currently supported diff type.",
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
      name: "get-security-configuration",
      description: "Retrieves a specified security configuration.",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration to retrieve.",
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
      name: "get-security-configurations",
      description: "Retrieves a list of all security configurations.",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "get-table",
      description:
        "Retrieves the Table definition in a Data Catalog for a specified table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description:
            "The name of the table for which to retrieve the definition. For Hive compatibility, this name is entirely lowercase.",
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
      name: "get-table-version",
      description: "Retrieves a specified version of a table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--version-id",
          description:
            "The ID value of the table version to be retrieved. A VersionID is a string representation of an integer. Each version is incremented by 1.",
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
      name: "get-table-versions",
      description:
        "Retrieves a list of strings that identify available versions of a specified table.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is not the first call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of table versions to return in one response.",
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
      name: "get-tables",
      description:
        "Retrieves the definitions of some or all of the tables in a given Database.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog whose tables to list. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--expression",
          description:
            "A regular expression pattern. If present, only those tables whose names match the pattern are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in a single response.",
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
      name: "get-tags",
      description: "Retrieves a list of tags associated with a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to retrieve tags.",
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
      name: "get-trigger",
      description: "Retrieves the definition of a trigger.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to retrieve.",
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
      name: "get-triggers",
      description: "Gets all the triggers associated with a job.",
      options: [
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dependent-job-name",
          description:
            "The name of the job to retrieve triggers for. The trigger that can start this job is returned, and if there is no such trigger, all triggers are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of the response.",
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
      name: "get-user-defined-function",
      description:
        "Retrieves a specified function definition from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be retrieved is located. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function is located.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-name",
          description: "The name of the function.",
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
      name: "get-user-defined-functions",
      description:
        "Retrieves multiple function definitions from the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the functions to be retrieved are located. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the functions are located. If none is provided, functions from all the databases across the catalog will be returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--pattern",
          description:
            "An optional function-name pattern string that filters the function definitions returned.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of functions to return in one response.",
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
      name: "get-workflow",
      description: "Retrieves resource metadata for a workflow.",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to retrieve.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata.",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata.",
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
      name: "get-workflow-run",
      description: "Retrieves the metadata for a given workflow run.",
      options: [
        {
          name: "--name",
          description: "Name of the workflow being run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not.",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not.",
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
      name: "get-workflow-run-properties",
      description:
        "Retrieves the workflow run properties which were set during the run.",
      options: [
        {
          name: "--name",
          description: "Name of the workflow which was run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description:
            "The ID of the workflow run whose run properties should be returned.",
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
      name: "get-workflow-runs",
      description: "Retrieves metadata for all runs of a given workflow.",
      options: [
        {
          name: "--name",
          description:
            "Name of the workflow whose metadata of runs should be returned.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not.",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not.",
        },
        {
          name: "--next-token",
          description: "The maximum size of the response.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of workflow runs to be included in the response.",
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
      name: "import-catalog-to-glue",
      description: "Imports an existing Amazon Athena Data Catalog to AWS Glue",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog to import. Currently, this should be the AWS account ID.",
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
      name: "list-crawlers",
      description:
        "Retrieves the names of all crawler resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources.",
          args: {
            name: "map",
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
      name: "list-dev-endpoints",
      description:
        "Retrieves the names of all DevEndpoint resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources.",
          args: {
            name: "map",
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
      name: "list-jobs",
      description:
        "Retrieves the names of all job resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources.",
          args: {
            name: "map",
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
      name: "list-ml-transforms",
      description:
        "Retrieves a sortable, filterable list of existing AWS Glue machine learning transforms in this AWS account, or the resources with the specified tag. This operation takes the optional Tags field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--filter",
          description:
            "A TransformFilterCriteria used to filter the machine learning transforms.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--sort",
          description:
            "A TransformSortCriteria used to sort the machine learning transforms.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources.",
          args: {
            name: "map",
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
      name: "list-registries",
      description:
        "Returns a list of registries that you have created, with minimal registry information. Registries in the Deleting status will not be included in the results. Empty results will be returned if there are no registries available.",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "list-schema-versions",
      description:
        "Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "list-schemas",
      description:
        "Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available. When the RegistryId is not provided, all the schemas across registries will be part of the API response.",
      options: [
        {
          name: "--registry-id",
          description:
            "A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "list-triggers",
      description:
        "Retrieves the names of all trigger resources in this AWS account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--dependent-job-name",
          description:
            "The name of the job for which to retrieve triggers. The trigger that can start this job is returned. If there is no such trigger, all triggers are returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources.",
          args: {
            name: "map",
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
      name: "list-workflows",
      description: "Lists names of workflows created in the account.",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return.",
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
      name: "put-data-catalog-encryption-settings",
      description:
        "Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog to set the security configuration for. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--data-catalog-encryption-settings",
          description: "The security configuration to set.",
          args: {
            name: "structure",
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
      name: "put-resource-policy",
      description: "Sets the Data Catalog resource policy for access control.",
      options: [
        {
          name: "--policy-in-json",
          description: "Contains the policy document to set, in JSON format.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-arn",
          description: "Do not use. For internal use only.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--policy-hash-condition",
          description:
            "The hash value returned when the previous policy was set using PutResourcePolicy. Its purpose is to prevent concurrent modifications of a policy. Do not use this parameter if no previous policy has been set.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--policy-exists-condition",
          description:
            "A value of MUST_EXIST is used to update a policy. A value of NOT_EXIST is used to create a new policy. If a value of NONE or a null value is used, the call does not depend on the existence of a policy.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--enable-hybrid",
          description:
            "If 'TRUE', indicates that you are using both methods to grant cross-account access to Data Catalog resources:   By directly updating the resource policy with PutResourePolicy    By using the Grant permissions command on the AWS Management Console.   Must be set to 'TRUE' if you have already used the Management Console to grant cross-account access, otherwise the call fails. Default is 'FALSE'.",
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
      name: "put-schema-version-metadata",
      description:
        "Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.",
      options: [
        {
          name: "--schema-id",
          description: "The unique ID for the schema.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--metadata-key-value",
          description: "The metadata key's corresponding value.",
          args: {
            name: "structure",
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
      name: "put-workflow-run-properties",
      description:
        "Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.",
      options: [
        {
          name: "--name",
          description: "Name of the workflow which was run.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description:
            "The ID of the workflow run for which the run properties should be updated.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-properties",
          description: "The properties to put for the specified run.",
          args: {
            name: "map",
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
      name: "query-schema-version-metadata",
      description: "Queries for the schema version metadata information.",
      options: [
        {
          name: "--schema-id",
          description:
            "A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--metadata-list",
          description:
            "Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call.",
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
      name: "register-schema-version",
      description:
        "Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry. If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the GetSchemaVersion API with the SchemaVersionId to check compatibility modes. If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--schema-definition",
          description:
            "The schema definition using the DataFormat setting for the SchemaName.",
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
      name: "remove-schema-version-metadata",
      description:
        "Removes a key value pair from the schema version metadata for the specified schema version ID.",
      options: [
        {
          name: "--schema-id",
          description:
            "A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--metadata-key-value",
          description: "The value of the metadata key.",
          args: {
            name: "structure",
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
      name: "reset-job-bookmark",
      description: "Resets a bookmark entry.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job in question.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description:
            "The unique run identifier associated with this job run.",
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
      name: "resume-workflow-run",
      description:
        "Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to resume.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run to resume.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--node-ids",
          description:
            "A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.",
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
      name: "search-tables",
      description:
        "Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions.  You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search.",
      options: [
        {
          name: "--catalog-id",
          description: "A unique identifier, consisting of  account_id .",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--filters",
          description:
            "A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate. The Comparator member of the PropertyPredicate struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when Key=Name, a fuzzy match algorithm is used. The Key field (for example, the value of the Name field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the Value member of PropertyPredicate. For example, if Key=Name and Value=link, tables named customer-link and xx-link-yy are returned, but xxlinkyy is not returned.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--search-text",
          description:
            "A string used for a text search. Specifying a value in quotes filters based on an exact match to the value.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--sort-criteria",
          description:
            "A list of criteria for sorting the results by a field name, in an ascending or descending order.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in a single response.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--resource-share-type",
          description:
            "Allows you to specify that you want to search the tables shared with your account. The allowable values are FOREIGN or ALL.    If set to FOREIGN, will search the tables shared with your account.    If set to ALL, will search the tables shared with your account, as well as the tables in yor local account.",
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
      name: "start-crawler",
      description:
        "Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a CrawlerRunningException.",
      options: [
        {
          name: "--name",
          description: "Name of the crawler to start.",
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
      name: "start-crawler-schedule",
      description:
        "Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED.",
      options: [
        {
          name: "--crawler-name",
          description: "Name of the crawler to schedule.",
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
      name: "start-export-labels-task-run",
      description:
        "Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use StartExportLabelsTaskRun when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the TransformId whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a TaskRunId. You can check on the status of your task run by calling the GetMLTaskRun API.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--output-s3-path",
          description: "The Amazon S3 path where you export the labels.",
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
      name: "start-import-labels-task-run",
      description:
        "Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the StartMLLabelingSetGenerationTaskRun call and that ultimately results in improving the quality of your machine learning transform.  After the StartMLLabelingSetGenerationTaskRun finishes, AWS Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the FindMatches transform, these questions are of the form, \u201cWhat is the correct way to group these rows together into groups composed entirely of matching records?\u201d After the labeling process is finished, users upload their answers/labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation. By default, StartMLLabelingSetGenerationTaskRun continually learns from and combines all labels that you upload unless you set Replace to true. If you set Replace to true, StartImportLabelsTaskRun deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality. You can check on the status of your task run by calling the GetMLTaskRun operation.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--input-s3-path",
          description:
            "The Amazon Simple Storage Service (Amazon S3) path from where you import the labels.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--replace-all-labels",
          description: "Indicates whether to overwrite your existing labels.",
        },
        {
          name: "--no-replace-all-labels",
          description: "Indicates whether to overwrite your existing labels.",
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
      name: "start-job-run",
      description: "Starts a job run using a job definition.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to use.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--job-run-id",
          description: "The ID of a previous JobRun to retry.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--arguments",
          description:
            "The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the Calling AWS Glue APIs in Python topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the Special Parameters Used by AWS Glue topic in the developer guide.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--allocated-capacity",
          description:
            "This field is deprecated. Use MaxCapacity instead. The number of AWS Glue data processing units (DPUs) to allocate to this JobRun. From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--timeout",
          description:
            "The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-capacity",
          description:
            'The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page. Do not set Max Capacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, or an Apache Spark ETL job:   When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.   When you specify an Apache Spark ETL job (JobCommand.Name="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.',
          args: {
            name: "double",
          },
          isOptional: true,
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this job run.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--notification-property",
          description:
            "Specifies configuration properties of a job run notification.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.   For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when a job runs. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X.",
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
      name: "start-ml-evaluation-task-run",
      description:
        "Starts a task to estimate the quality of the transform.  When you provide label sets as examples of truth, AWS Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality. Returns a unique identifier for the run. You can call GetMLTaskRun to get more information about the stats of the EvaluationTaskRun.",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
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
      name: "start-ml-labeling-set-generation-task-run",
      description:
        'Starts the active learning workflow for your machine learning transform to improve the transform\'s quality by generating label sets and adding labels. When the StartMLLabelingSetGenerationTaskRun finishes, AWS Glue will have generated a "labeling set" or a set of questions for humans to answer. In the case of the FindMatches transform, these questions are of the form, \u201cWhat is the correct way to group these rows together into groups composed entirely of matching records?\u201d  After the labeling process is finished, you can upload your labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.',
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--output-s3-path",
          description:
            "The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling set.",
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
      name: "start-trigger",
      description:
        "Starts an existing trigger. See Triggering Jobs for information about how different types of trigger are started.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to start.",
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
      name: "start-workflow-run",
      description: "Starts a new run of the specified workflow.",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to start.",
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
      name: "stop-crawler",
      description: "If the specified crawler is running, stops the crawl.",
      options: [
        {
          name: "--name",
          description: "Name of the crawler to stop.",
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
      name: "stop-crawler-schedule",
      description:
        "Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running.",
      options: [
        {
          name: "--crawler-name",
          description: "Name of the crawler whose schedule state to set.",
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
      name: "stop-trigger",
      description: "Stops a specified trigger.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to stop.",
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
      name: "stop-workflow-run",
      description: "Stops the execution of the specified workflow run.",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to stop.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run to stop.",
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
      name: "tag-resource",
      description:
        "Adds tags to a resource. A tag is a label you can assign to an AWS resource. In AWS Glue, you can tag only certain resources. For information about what resources you can tag, see AWS Tags in AWS Glue.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the AWS Glue resource to which to add the tags. For more information about AWS Glue resource ARNs, see the AWS Glue ARN string pattern.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags-to-add",
          description: "Tags to add to this resource.",
          args: {
            name: "map",
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
      name: "untag-resource",
      description: "Removes tags from a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to remove the tags.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags-to-remove",
          description: "Tags to remove from this resource.",
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
      name: "update-classifier",
      description:
        "Modifies an existing classifier (a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field is present).",
      options: [
        {
          name: "--grok-classifier",
          description: "A GrokClassifier object with updated fields.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--xml-classifier",
          description: "An XMLClassifier object with updated fields.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--json-classifier",
          description: "A JsonClassifier object with updated fields.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--csv-classifier",
          description: "A CsvClassifier object with updated fields.",
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
      name: "update-column-statistics-for-partition",
      description:
        "Creates or updates partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdatePartition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--column-statistics-list",
          description: "A list of the column statistics.",
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
      name: "update-column-statistics-for-table",
      description:
        "Creates or updates table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdateTable.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--column-statistics-list",
          description: "A list of the column statistics.",
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
      name: "update-connection",
      description: "Updates a connection definition in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description: "The name of the connection definition to update.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--connection-input",
          description:
            "A ConnectionInput object that redefines the connection in question.",
          args: {
            name: "structure",
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
      name: "update-crawler",
      description:
        "Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it.",
      options: [
        {
          name: "--name",
          description: "Name of the new crawler.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--role",
          description:
            "The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler to access customer resources.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The AWS Glue database where results are stored, such as: arn:aws:daylight:us-east-1::database/sometable/*.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "A description of the new crawler.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--targets",
          description: "A list of targets to crawl.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--classifiers",
          description:
            "A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--table-prefix",
          description:
            "The table prefix used for catalog tables that are created.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--schema-change-policy",
          description:
            "The policy for the crawler's update and deletion behavior.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--recrawl-policy",
          description:
            "A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--lineage-configuration",
          description:
            "Specifies data lineage configuration settings for the crawler.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--configuration",
          description:
            "Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Configuring a Crawler.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--crawler-security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used by this crawler.",
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
      name: "update-crawler-schedule",
      description: "Updates the schedule of a crawler using a cron expression.",
      options: [
        {
          name: "--crawler-name",
          description: "The name of the crawler whose schedule to update.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--schedule",
          description:
            "The updated cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *).",
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
      name: "update-database",
      description: "Updates an existing database definition in a Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the metadata database resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description:
            "The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--database-input",
          description:
            "A DatabaseInput object specifying the new definition of the metadata database in the catalog.",
          args: {
            name: "structure",
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
      name: "update-dev-endpoint",
      description: "Updates a specified development endpoint.",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the DevEndpoint to be updated.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--public-key",
          description: "The public key for the DevEndpoint to use.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--add-public-keys",
          description: "The list of public keys for the DevEndpoint to use.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--delete-public-keys",
          description:
            "The list of public keys to be deleted from the DevEndpoint.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--custom-libraries",
          description:
            "Custom Python or Java libraries to be loaded in the DevEndpoint.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--update-etl-libraries",
          description:
            "True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False if otherwise.",
        },
        {
          name: "--no-update-etl-libraries",
          description:
            "True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False if otherwise.",
        },
        {
          name: "--delete-arguments",
          description:
            "The list of argument keys to be deleted from the map of arguments used to configure the DevEndpoint.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--add-arguments",
          description:
            'The map of arguments to add the map of arguments used to configure the DevEndpoint. Valid arguments are:    "--enable-glue-datacatalog": ""     "GLUE_PYTHON_VERSION": "3"     "GLUE_PYTHON_VERSION": "2"    You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2.',
          args: {
            name: "map",
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
      name: "update-job",
      description: "Updates an existing job definition.",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to update.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--job-update",
          description:
            "Specifies the values with which to update the job definition.",
          args: {
            name: "structure",
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
      name: "update-ml-transform",
      description:
        "Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results. After calling this operation, you can call the StartMLEvaluationTaskRun operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).",
      options: [
        {
          name: "--transform-id",
          description:
            "A unique identifier that was generated when the transform was created.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description:
            "The unique name that you gave the transform when you created it.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "A description of the transform. The default is an empty string.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--parameters",
          description:
            "The configuration parameters that are specific to the transform type (algorithm) used. Conditionally dependent on the transform type.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role with the required permissions.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--glue-version",
          description:
            "This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see AWS Glue Versions in the developer guide.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-capacity",
          description:
            "The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the AWS Glue pricing page.  When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only.",
          args: {
            name: "double",
          },
          isOptional: true,
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.   For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when this task runs.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--timeout",
          description:
            "The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry a task for this transform after a task run fails.",
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
      name: "update-partition",
      description: "Updates a partition.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be updated resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-name",
          description:
            "The name of the table in which the partition to be updated is located.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--partition-value-list",
          description:
            "List of partition key values that define the partition to update.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--partition-input",
          description:
            "The new partition object to update the partition to. The Values property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.",
          args: {
            name: "structure",
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
      name: "update-registry",
      description:
        "Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry.",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description:
            "A description of the registry. If description is not provided, this field will not be updated.",
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
      name: "update-schema",
      description:
        "Updates the description, compatibility setting, or version checkpoint for a schema set. For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for Compatibility is provided, the VersionNumber (a checkpoint) is also required. The API will validate the checkpoint version number for consistency. If the value for the VersionNumber (checkpoint) is provided, Compatibility is optional and this can be used to set/reset a checkpoint for the schema. This update will happen only if the schema is in the AVAILABLE state.",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--schema-version-number",
          description:
            "Version number required for check pointing. One of VersionNumber or Compatibility has to be provided.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--compatibility",
          description: "The new compatibility setting for the schema.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "The new description for the schema.",
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
      name: "update-table",
      description: "Updates a metadata table in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--table-input",
          description:
            "An updated TableInput object to define the metadata table in the catalog.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--skip-archive",
          description:
            "By default, UpdateTable always creates an archived version of the table before updating it. However, if skipArchive is set to true, UpdateTable does not create the archived version.",
        },
        {
          name: "--no-skip-archive",
          description:
            "By default, UpdateTable always creates an archived version of the table before updating it. However, if skipArchive is set to true, UpdateTable does not create the archived version.",
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
      name: "update-trigger",
      description: "Updates a trigger definition.",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to update.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--trigger-update",
          description: "The new values with which to update the trigger.",
          args: {
            name: "structure",
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
      name: "update-user-defined-function",
      description:
        "Updates an existing function definition in the Data Catalog.",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be updated is located. If none is provided, the AWS account ID is used by default.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function to be updated is located.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-name",
          description: "The name of the function.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-input",
          description:
            "A FunctionInput object that redefines the function in the Data Catalog.",
          args: {
            name: "structure",
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
      name: "update-workflow",
      description: "Updates an existing workflow.",
      options: [
        {
          name: "--name",
          description: "Name of the workflow to be updated.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "The description of the workflow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--default-run-properties",
          description:
            "A collection of properties to be used as part of each execution of the workflow.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--max-concurrent-runs",
          description:
            "You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.",
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
  ],
};
