const completionSpec: Fig.Spec = {
  name: "glue",
  description: "Glue Defines the public endpoint for the Glue service",
  subcommands: [
    {
      name: "batch-create-partition",
      description: "Creates one or more partitions in a batch operation",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog in which the partition is to be created. Currently, this should be the Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-input-list",
          description:
            "A list of PartitionInput structures that define the partitions to be created",
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
      name: "batch-delete-connection",
      description:
        "Deletes a list of connection definitions from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-name-list",
          description: "A list of names of the connections to delete",
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
      name: "batch-delete-partition",
      description: "Deletes one or more partitions in a batch operation",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be deleted resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table that contains the partitions to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--partitions-to-delete",
          description:
            "A list of PartitionInput structures that define the partitions to be deleted",
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
      name: "batch-delete-table",
      description:
        'Deletes multiple tables at once.  After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling BatchDeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the tables to delete reside. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--tables-to-delete",
          description: "A list of the table to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--transaction-id",
          description:
            "The transaction ID at which to delete the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-delete-table-version",
      description: "Deletes a specified batch of versions of a table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-ids",
          description:
            "A list of the IDs of versions to be deleted. A VersionId is a string representation of an integer. Each version is incremented by 1",
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
      name: "batch-get-blueprints",
      description: "Retrieves information about a list of blueprints",
      options: [
        {
          name: "--names",
          description: "A list of blueprint names",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-blueprint",
          description:
            "Specifies whether or not to include the blueprint in the response",
        },
        {
          name: "--no-include-blueprint",
          description:
            "Specifies whether or not to include the blueprint in the response",
        },
        {
          name: "--include-parameter-spec",
          description:
            "Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response",
        },
        {
          name: "--no-include-parameter-spec",
          description:
            "Specifies whether or not to include the parameters, as a JSON string, for the blueprint in the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-crawlers",
      description:
        "Returns a list of resource metadata for a given list of crawler names. After calling the ListCrawlers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags",
      options: [
        {
          name: "--crawler-names",
          description:
            "A list of crawler names, which might be the names returned from the ListCrawlers operation",
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
      name: "batch-get-custom-entity-types",
      description:
        "Retrieves the details for the custom patterns specified by a list of names",
      options: [
        {
          name: "--names",
          description:
            "A list of names of the custom patterns that you want to retrieve",
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
      name: "batch-get-data-quality-result",
      description:
        "Retrieves a list of data quality results for the specified result IDs",
      options: [
        {
          name: "--result-ids",
          description:
            "A list of unique result IDs for the data quality results",
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
      name: "batch-get-dev-endpoints",
      description:
        "Returns a list of resource metadata for a given list of development endpoint names. After calling the ListDevEndpoints operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags",
      options: [
        {
          name: "--dev-endpoint-names",
          description:
            "The list of DevEndpoint names, which might be the names returned from the ListDevEndpoint operation",
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
      name: "batch-get-jobs",
      description:
        "Returns a list of resource metadata for a given list of job names. After calling the ListJobs operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags",
      options: [
        {
          name: "--job-names",
          description:
            "A list of job names, which might be the names returned from the ListJobs operation",
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
      name: "batch-get-partition",
      description: "Retrieves partitions in a batch request",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partitions-to-get",
          description:
            "A list of partition values identifying the partitions to retrieve",
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
      name: "batch-get-table-optimizer",
      description:
        "Returns the configuration for the specified table optimizers",
      options: [
        {
          name: "--entries",
          description:
            "A list of BatchGetTableOptimizerEntry objects specifying the table optimizers to retrieve",
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
      name: "batch-get-triggers",
      description:
        "Returns a list of resource metadata for a given list of trigger names. After calling the ListTriggers operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags",
      options: [
        {
          name: "--trigger-names",
          description:
            "A list of trigger names, which may be the names returned from the ListTriggers operation",
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
      name: "batch-get-workflows",
      description:
        "Returns a list of resource metadata for a given list of workflow names. After calling the ListWorkflows operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags",
      options: [
        {
          name: "--names",
          description:
            "A list of workflow names, which may be the names returned from the ListWorkflows operation",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-put-data-quality-statistic-annotation",
      description:
        "Annotate datapoints over time for a specific data quality statistic",
      options: [
        {
          name: "--inclusion-annotations",
          description: "A list of DatapointInclusionAnnotation's",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description: "Client Token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-stop-job-run",
      description: "Stops one or more job runs for a specified job definition",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job definition for which to stop job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-ids",
          description:
            "A list of the JobRunIds that should be stopped for that job definition",
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
      name: "batch-update-partition",
      description: "Updates one or more partitions in a batch operation",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog in which the partition is to be updated. Currently, this should be the Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--entries",
          description:
            "A list of up to 100 BatchUpdatePartitionRequestEntry objects to update",
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
      name: "cancel-data-quality-rule-recommendation-run",
      description:
        "Cancels the specified recommendation run that was being used to generate rules",
      options: [
        {
          name: "--run-id",
          description: "The unique run identifier associated with this run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "cancel-data-quality-ruleset-evaluation-run",
      description:
        "Cancels a run where a ruleset is being evaluated against a data source",
      options: [
        {
          name: "--run-id",
          description: "The unique run identifier associated with this run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "cancel-ml-task-run",
      description:
        "Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling CancelMLTaskRun with a task run's parent transform's TransformID and the task run's TaskRunId",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-run-id",
          description: "A unique identifier for the task run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "cancel-statement",
      description: "Cancels the statement",
      options: [
        {
          name: "--session-id",
          description: "The Session ID of the statement to be cancelled",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the statement to be cancelled",
          args: {
            name: "integer",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request to cancel the statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "check-schema-version-validity",
      description:
        "Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using DataFormat as the format. Since it does not take a schema set name, no compatibility checks are performed",
      options: [
        {
          name: "--data-format",
          description:
            "The data format of the schema definition. Currently AVRO, JSON and PROTOBUF are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-definition",
          description: "The definition of the schema that has to be validated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-blueprint",
      description: "Registers a blueprint with Glue",
      options: [
        {
          name: "--name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-location",
          description:
            "Specifies a path in Amazon S3 where the blueprint is published",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to be applied to this blueprint",
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
      name: "create-catalog",
      description: "Creates a new catalog in the Glue Data Catalog",
      options: [
        {
          name: "--name",
          description: "The name of the catalog to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-input",
          description:
            "A CatalogInput object that defines the metadata for the catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map array of key-value pairs, not more than 50 pairs. Each key is a UTF-8 string, not less than 1 or more than 128 bytes long. Each value is a UTF-8 string, not more than 256 bytes long. The tags you assign to the catalog",
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
      name: "create-classifier",
      description:
        "Creates a classifier in the user's account. This can be a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field of the request is present",
      options: [
        {
          name: "--grok-classifier",
          description:
            "A GrokClassifier object specifying the classifier to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--xml-classifier",
          description:
            "An XMLClassifier object specifying the classifier to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--json-classifier",
          description:
            "A JsonClassifier object specifying the classifier to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--csv-classifier",
          description:
            "A CsvClassifier object specifying the classifier to create",
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
      name: "create-column-statistics-task-settings",
      description: "Creates settings for a column statistics task",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to generate column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role used for running the column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "A schedule for running the column statistics, specified in CRON syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-name-list",
          description: "A list of column names for which to run statistics",
          args: {
            name: "list",
          },
        },
        {
          name: "--sample-size",
          description: "The percentage of data to sample",
          args: {
            name: "double",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "Name of the security configuration that is used to encrypt CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A map of tags",
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
      name: "create-connection",
      description:
        "Creates a connection definition in the Data Catalog. Connections used for creating federated resources require the IAM glue:PassConnection permission",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the connection. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-input",
          description:
            "A ConnectionInput object defining the connection to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags you assign to the connection",
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
      name: "create-crawler",
      description:
        "Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the s3Targets field, the jdbcTargets field, or the DynamoDBTargets field",
      options: [
        {
          name: "--name",
          description: "Name of the new crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to access customer resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The Glue database where results are written, such as: arn:aws:daylight:us-east-1::database/sometable/*",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the new crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--targets",
          description: "A list of collection of targets to crawl",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *)",
          args: {
            name: "string",
          },
        },
        {
          name: "--classifiers",
          description:
            "A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-prefix",
          description:
            "The table prefix used for catalog tables that are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-change-policy",
          description:
            "The policy for the crawler's update and deletion behavior",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recrawl-policy",
          description:
            "A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lineage-configuration",
          description:
            "Specifies data lineage configuration settings for the crawler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lake-formation-configuration",
          description:
            "Specifies Lake Formation configuration settings for the crawler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration",
          description:
            "Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Setting crawler configuration options",
          args: {
            name: "string",
          },
        },
        {
          name: "--crawler-security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used by this crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to use with this crawler request. You may use tags to limit access to the crawler. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide",
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
      name: "create-custom-entity-type",
      description:
        "Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data. Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked",
      options: [
        {
          name: "--name",
          description:
            "A name for the custom pattern that allows it to be retrieved or deleted later. This name must be unique per Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--regex-string",
          description:
            "A regular expression string that is used for detecting sensitive data in a custom pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--context-words",
          description:
            "A list of context words. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data. If no context words are passed only a regular expression is checked",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "A list of tags applied to the custom entity type",
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
      name: "create-data-quality-ruleset",
      description:
        "Creates a data quality ruleset with DQDL rules applied to a specified Glue table. You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide",
      options: [
        {
          name: "--name",
          description: "A unique name for the data quality ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the data quality ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--ruleset",
          description:
            "A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags applied to the data quality ruleset",
          args: {
            name: "map",
          },
        },
        {
          name: "--target-table",
          description:
            "A target table associated with the data quality ruleset",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-quality-security-configuration",
          description:
            "The name of the security configuration created with the data quality encryption option",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-database",
      description: "Creates a new database in a Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the database. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-input",
          description: "The metadata for the database",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags you assign to the database",
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
      name: "create-dev-endpoint",
      description: "Creates a new development endpoint",
      options: [
        {
          name: "--endpoint-name",
          description: "The name to be assigned to the new DevEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The IAM role for the DevEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-group-ids",
          description:
            "Security group IDs for the security groups to be used by the new DevEndpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--subnet-id",
          description: "The subnet ID for the new DevEndpoint to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-key",
          description:
            "The public key to be used by this DevEndpoint for authentication. This attribute is provided for backward compatibility because the recommended attribute to use is public keys",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-keys",
          description:
            "A list of public keys to be used by the development endpoints for authentication. The use of this attribute is preferred over a single public key because the public keys allow you to have a different private key per client.  If you previously created an endpoint with a public key, you must remove that key to be able to set a list of public keys. Call the UpdateDevEndpoint API with the public key content in the deletePublicKeys attribute, and the list of new keys in the addPublicKeys attribute",
          args: {
            name: "list",
          },
        },
        {
          name: "--number-of-nodes",
          description:
            "The number of Glue Data Processing Units (DPUs) to allocate to this DevEndpoint",
          args: {
            name: "integer",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.   Known issue: when a development endpoint is created with the G.2X WorkerType configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk",
          args: {
            name: "string",
          },
        },
        {
          name: "--glue-version",
          description:
            "Glue version determines the versions of Apache Spark and Python that Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints.  For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Development endpoints that are created without specifying a Glue version default to Glue 0.9. You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated to the development endpoint. The maximum number of workers you can define are 299 for G.1X, and 149 for G.2X",
          args: {
            name: "integer",
          },
        },
        {
          name: "--extra-python-libs-s3-path",
          description:
            "The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in your DevEndpoint. Multiple values must be complete paths separated by a comma.  You can only use pure Python libraries with a DevEndpoint. Libraries that rely on C extensions, such as the pandas Python data analysis library, are not yet supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--extra-jars-s3-path",
          description:
            "The path to one or more Java .jar files in an S3 bucket that should be loaded in your DevEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this DevEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--arguments",
          description: "A map of arguments used to configure the DevEndpoint",
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
      name: "create-integration",
      description:
        "Creates a Zero-ETL integration in the caller's account between two resources with Amazon Resource Names (ARNs): the SourceArn and TargetArn",
      options: [
        {
          name: "--integration-name",
          description: "A unique name for an integration in Glue",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arn",
          description: "The ARN of the source resource for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-arn",
          description: "The ARN of the target resource for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-filter",
          description:
            "Selects source tables for the integration using Maxwell filter syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description: "The ARN of a KMS key used for encrypting the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-encryption-context",
          description:
            "An optional set of non-secret key\u2013value pairs that contains additional contextual information for encryption. This can only be provided if KMSKeyId is provided",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata assigned to the resource consisting of a list of key-value pairs",
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
      name: "create-integration-resource-property",
      description:
        "This API can be used for setting up the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. To set both source and target properties the same API needs to be invoked with the Glue connection ARN as ResourceArn with SourceProcessingProperties and the Glue database ARN as ResourceArn with TargetProcessingProperties respectively",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-processing-properties",
          description:
            "The resource properties associated with the integration source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-processing-properties",
          description:
            "The resource properties associated with the integration target",
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
      name: "create-integration-table-properties",
      description:
        "This API is used to provide optional override properties for the the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to be replicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-table-config",
          description: "A structure for the source table configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-table-config",
          description: "A structure for the target table configuration",
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
      name: "create-job",
      description: "Creates a new job definition",
      options: [
        {
          name: "--name",
          description:
            "The name you assign to this job definition. It must be unique in your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-mode",
          description:
            "A mode that describes how a job was created. Valid values are:    SCRIPT - The job was created using the Glue Studio script editor.    VISUAL - The job was created using the Glue Studio visual editor.    NOTEBOOK - The job was created using an interactive sessions notebook.   When the JobMode field is missing or null, SCRIPT is assigned as the default value",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-queuing-enabled",
          description:
            "Specifies whether job run queuing is enabled for the job runs for this job. A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing. If this field does not match the value set in the job run, then the value from the job run field will be used",
        },
        {
          name: "--no-job-run-queuing-enabled",
          description:
            "Specifies whether job run queuing is enabled for the job runs for this job. A value of true means job run queuing is enabled for the job runs. If false or not populated, the job runs will not be considered for queueing. If this field does not match the value set in the job run, then the value from the job run field will be used",
        },
        {
          name: "--description",
          description: "Description of the job being defined",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-uri",
          description: "This field is reserved for future use",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role associated with this job",
          args: {
            name: "string",
          },
        },
        {
          name: "--execution-property",
          description:
            "An ExecutionProperty specifying the maximum number of concurrent runs allowed for this job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--command",
          description: "The JobCommand that runs this job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--default-arguments",
          description:
            "The default arguments for every run of this job, specified as name-value pairs. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job.  For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--non-overridable-arguments",
          description:
            "Arguments for this job that are not overridden when providing job arguments in a job run, specified as name-value pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--connections",
          description: "The connections used for this job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry this job if it fails",
          args: {
            name: "integer",
          },
        },
        {
          name: "--allocated-capacity",
          description:
            "This parameter is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) to allocate to this Job. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours) for batch jobs. Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-capacity",
          description:
            'For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the  Glue pricing page. For Glue version 2.0+ jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job:   When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.   When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation',
          args: {
            name: "double",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this job",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to use with this job. You may use tags to limit access to the job. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--notification-property",
          description:
            "Specifies configuration properties of a job notification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--glue-version",
          description:
            "In Spark jobs, GlueVersion determines the versions of Apache Spark and Python that Glue available in a job. The Python version indicates the version supported for jobs of type Spark.  Ray jobs should set GlueVersion to 4.0 or greater. However, the versions of Ray, Python and additional libraries available in your Ray job are determined by the Runtime parameter of the Job command. For more information about the available Glue versions and corresponding Spark and Python versions, see Glue version in the developer guide. Jobs that are created without specifying a Glue version default to Glue 0.9",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when a job runs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).   For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type.   For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.   For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler",
          args: {
            name: "string",
          },
        },
        {
          name: "--code-gen-configuration-nodes",
          description:
            "The representation of a directed acyclic graph on which both the Glue Studio visual component and Glue Studio code generation is based",
          args: {
            name: "map",
          },
        },
        {
          name: "--execution-class",
          description:
            "Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.  Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-control-details",
          description:
            "The details for a source control configuration for a job, allowing synchronization of job artifacts to or from a remote repository",
          args: {
            name: "structure",
          },
        },
        {
          name: "--maintenance-window",
          description:
            "This field specifies a day of the week and hour for a maintenance window for streaming jobs. Glue periodically performs maintenance activities. During these maintenance windows, Glue will need to restart your streaming jobs. Glue will restart the job within 3 hours of the specified maintenance window. For instance, if you set up the maintenance window for Monday at 10:00AM GMT, your jobs will be restarted between 10:00AM GMT to 1:00PM GMT",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-ml-transform",
      description:
        "Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it. Call this operation as the first step in the process of using a machine learning transform (such as the FindMatches transform) for deduplicating data. You can provide an optional Description, in addition to the parameters that you want to use for your algorithm. You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include Role, and optionally, AllocatedCapacity, Timeout, and MaxRetries. For more information, see Jobs",
      options: [
        {
          name: "--name",
          description:
            "The unique name that you give the transform when you create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the machine learning transform that is being defined. The default is an empty string",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-record-tables",
          description: "A list of Glue table definitions used by the transform",
          args: {
            name: "list",
          },
        },
        {
          name: "--parameters",
          description:
            "The algorithmic parameters that are specific to the transform type used. Conditionally dependent on the transform type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform.    This role needs Glue service role permissions to allow access to resources in Glue. See Attach a Policy to IAM Users That Access Glue.   This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--glue-version",
          description:
            "This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see Glue Versions in the developer guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-capacity",
          description:
            "The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.   MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType.   If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set.   If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set.   If WorkerType is set, then NumberOfWorkers is required (and vice versa).    MaxCapacity and NumberOfWorkers must both be at least 1.   When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only. When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only",
          args: {
            name: "double",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.   For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.    MaxCapacity is a mutually exclusive option with NumberOfWorkers and WorkerType.   If either NumberOfWorkers or WorkerType is set, then MaxCapacity cannot be set.   If MaxCapacity is set then neither NumberOfWorkers or WorkerType can be set.   If WorkerType is set, then NumberOfWorkers is required (and vice versa).    MaxCapacity and NumberOfWorkers must both be at least 1",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when this task runs. If WorkerType is set, then NumberOfWorkers is required (and vice versa)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry a task for this transform after a task run fails",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--transform-encryption",
          description:
            "The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS",
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
      name: "create-partition",
      description: "Creates a new partition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The Amazon Web Services account ID of the catalog in which the partition is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the metadata database in which the partition is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the metadata table in which the partition is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-input",
          description:
            "A PartitionInput structure defining the partition to be created",
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
      name: "create-partition-index",
      description: "Creates a specified partition index in an existing table",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database in which you want to create a partition index",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table in which you want to create a partition index",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-index",
          description:
            "Specifies a PartitionIndex structure to create a partition index in an existing table",
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
      name: "create-registry",
      description:
        "Creates a new registry which may be used to hold a collection of schemas",
      options: [
        {
          name: "--registry-name",
          description:
            "Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the registry. If description is not provided, there will not be any default value for this",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API",
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
      name: "create-schema",
      description:
        'Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version. When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the RegisterSchemaVersion API is used. When this API is called without a RegistryId, this will create an entry for a "default-registry" in the registry database tables, if it is not already present',
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-name",
          description:
            "Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-format",
          description:
            "The data format of the schema definition. Currently AVRO, JSON and PROTOBUF are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--compatibility",
          description:
            "The compatibility mode of the schema. The possible values are:    NONE: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.    DISABLED: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.    BACKWARD: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.    BACKWARD_ALL: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions.     FORWARD: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.    FORWARD_ALL: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.    FULL: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.    FULL_ALL: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "An optional description of the schema. If description is not provided, there will not be any automatic default value for this",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern",
          args: {
            name: "map",
          },
        },
        {
          name: "--schema-definition",
          description:
            "The schema definition using the DataFormat setting for SchemaName",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-script",
      description: "Transforms a directed acyclic graph (DAG) into code",
      options: [
        {
          name: "--dag-nodes",
          description: "A list of the nodes in the DAG",
          args: {
            name: "list",
          },
        },
        {
          name: "--dag-edges",
          description: "A list of the edges in the DAG",
          args: {
            name: "list",
          },
        },
        {
          name: "--language",
          description:
            "The programming language of the resulting code from the DAG",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-security-configuration",
      description:
        "Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see Encrypting Data Written by Crawlers, Jobs, and Development Endpoints",
      options: [
        {
          name: "--name",
          description: "The name for the new security configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The encryption configuration for the new security configuration",
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
      name: "create-session",
      description: "Creates a new session",
      options: [
        {
          name: "--id",
          description: "The ID of the session request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The IAM Role ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--command",
          description: "The SessionCommand that runs the job",
          args: {
            name: "structure",
          },
        },
        {
          name: "--timeout",
          description:
            "The number of minutes before session times out. Default for Spark ETL jobs is 48 hours (2880 minutes), the maximum session lifetime for this job type. Consult the documentation for other job types",
          args: {
            name: "integer",
          },
        },
        {
          name: "--idle-timeout",
          description:
            "The number of minutes when idle before session times out. Default for Spark ETL jobs is value of Timeout. Consult the documentation for other job types",
          args: {
            name: "integer",
          },
        },
        {
          name: "--default-arguments",
          description: "A map array of key-value pairs. Max is 75 pairs",
          args: {
            name: "map",
          },
        },
        {
          name: "--connections",
          description: "The number of connections to use for the session",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-capacity",
          description:
            "The number of Glue data processing units (DPUs) that can be allocated when the job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory",
          args: {
            name: "double",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined WorkerType to use for the session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, or G.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).   For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type.   For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--glue-version",
          description:
            "The Glue version determines the versions of Apache Spark and Python that Glue supports. The GlueVersion must be greater than 2.0",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The map of key value pairs (tags) belonging to the session",
          args: {
            name: "map",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Creates a new table definition in the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the Table. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The catalog database in which to create the new table. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-input",
          description:
            "The TableInput object that defines the metadata table to create in the catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--partition-indexes",
          description:
            "A list of partition indexes, PartitionIndex structures, to create in the table",
          args: {
            name: "list",
          },
        },
        {
          name: "--transaction-id",
          description: "The ID of the transaction",
          args: {
            name: "string",
          },
        },
        {
          name: "--open-table-format-input",
          description:
            "Specifies an OpenTableFormatInput structure when creating an open format table",
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
      name: "create-table-optimizer",
      description: "Creates a new table optimizer for a specific function",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides",
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
          name: "--type",
          description: "The type of table optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-optimizer-configuration",
          description:
            "A TableOptimizerConfiguration object representing the configuration of a table optimizer",
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
      name: "create-trigger",
      description: "Creates a new trigger",
      options: [
        {
          name: "--name",
          description: "The name of the trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--workflow-name",
          description: "The name of the workflow associated with the trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the new trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *). This field is required when the trigger type is SCHEDULED",
          args: {
            name: "string",
          },
        },
        {
          name: "--predicate",
          description:
            "A predicate to specify when the new trigger should fire. This field is required when the trigger type is CONDITIONAL",
          args: {
            name: "structure",
          },
        },
        {
          name: "--actions",
          description: "The actions initiated by this trigger when it fires",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A description of the new trigger",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-on-creation",
          description:
            "Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers",
        },
        {
          name: "--no-start-on-creation",
          description:
            "Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers",
        },
        {
          name: "--tags",
          description:
            "The tags to use with this trigger. You may use tags to limit access to the trigger. For more information about tags in Glue, see Amazon Web Services Tags in Glue in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--event-batching-condition",
          description:
            "Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires",
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
      name: "create-usage-profile",
      description: "Creates an Glue usage profile",
      options: [
        {
          name: "--name",
          description: "The name of the usage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the usage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "A ProfileConfiguration object specifying the job and session values for the profile",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of tags applied to the usage profile",
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
      name: "create-user-defined-function",
      description: "Creates a new function definition in the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which to create the function",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-input",
          description:
            "A FunctionInput object that defines the function to create in the Data Catalog",
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
      name: "create-workflow",
      description: "Creates a new workflow",
      options: [
        {
          name: "--name",
          description:
            "The name to be assigned to the workflow. It should be unique within your account",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-run-properties",
          description:
            "A collection of properties to be used as part of each execution of the workflow",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description: "The tags to be used with this workflow",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-concurrent-runs",
          description:
            "You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs",
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
      name: "delete-blueprint",
      description: "Deletes an existing blueprint",
      options: [
        {
          name: "--name",
          description: "The name of the blueprint to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-catalog",
      description:
        'Removes the specified catalog from the Glue Data Catalog. After completing this operation, you no longer have access to the databases, tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted catalog. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources before calling the DeleteCatalog operation, use DeleteTableVersion (or BatchDeleteTableVersion), DeletePartition (or BatchDeletePartition), DeleteTable (or BatchDeleteTable), DeleteUserDefinedFunction and DeleteDatabase to delete any resources that belong to the catalog',
      options: [
        {
          name: "--catalog-id",
          description: "The ID of the catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-classifier",
      description: "Removes a classifier from the Data Catalog",
      options: [
        {
          name: "--name",
          description: "Name of the classifier to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-column-statistics-for-partition",
      description:
        "Delete the partition column statistics of a column. The Identity and Access Management (IAM) permission required for this operation is DeletePartition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition",
          args: {
            name: "list",
          },
        },
        {
          name: "--column-name",
          description: "Name of the column",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-column-statistics-for-table",
      description:
        "Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is DeleteTable",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-name",
          description: "The name of the column",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-column-statistics-task-settings",
      description: "Deletes settings for a column statistics task",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to delete column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes a connection from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-name",
          description: "The name of the connection to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-crawler",
      description:
        "Removes a specified crawler from the Glue Data Catalog, unless the crawler state is RUNNING",
      options: [
        {
          name: "--name",
          description: "The name of the crawler to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-custom-entity-type",
      description: "Deletes a custom pattern by specifying its name",
      options: [
        {
          name: "--name",
          description: "The name of the custom pattern that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-quality-ruleset",
      description: "Deletes a data quality ruleset",
      options: [
        {
          name: "--name",
          description: "A name for the data quality ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-database",
      description:
        'Removes a specified database from a Data Catalog.  After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteDatabase, use DeleteTableVersion or BatchDeleteTableVersion, DeletePartition or BatchDeletePartition, DeleteUserDefinedFunction, and DeleteTable or BatchDeleteTable, to delete any resources that belong to the database',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the database to delete. For Hive compatibility, this must be all lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-dev-endpoint",
      description: "Deletes a specified development endpoint",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the DevEndpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-integration",
      description: "Deletes the specified Zero-ETL integration",
      options: [
        {
          name: "--integration-identifier",
          description: "The Amazon Resource Name (ARN) for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-integration-table-properties",
      description:
        "Deletes the table properties that have been created for the tables that need to be replicated",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to be replicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-job",
      description:
        "Deletes a specified job definition. If the job definition is not found, no exception is thrown",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-ml-transform",
      description:
        "Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling DeleteMLTransforms. However, any Glue jobs that still reference the deleted transform will no longer succeed",
      options: [
        {
          name: "--transform-id",
          description: "The unique identifier of the transform to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-partition",
      description: "Deletes a specified partition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be deleted resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table that contains the partition to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "The values that define the partition",
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
      name: "delete-partition-index",
      description: "Deletes a specified partition index from an existing table",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database from which you want to delete a partition index",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table from which you want to delete a partition index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-name",
          description: "The name of the partition index to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-registry",
      description:
        "Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the GetRegistry API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the UpdateRegistry, CreateSchema, UpdateSchema, and RegisterSchemaVersion APIs",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN)",
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
      name: "delete-resource-policy",
      description: "Deletes a specified policy",
      options: [
        {
          name: "--policy-hash-condition",
          description: "The hash value returned when this policy was set",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The ARN of the Glue resource for the resource policy to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-schema",
      description:
        "Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call GetSchema API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the GetSchemaByDefinition, and RegisterSchemaVersion APIs",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN)",
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
      name: "delete-schema-versions",
      description:
        "Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the GetSchemaVersions API after this call will list the status of the deleted versions. When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the DeleteSchemaCheckpoint API before using this API. You cannot use the DeleteSchemaVersions API to delete the first schema version in the schema set. The first schema version can only be deleted by the DeleteSchema API. This operation will also delete the attached SchemaVersionMetadata under the schema versions. Hard deletes will be enforced on the database. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--versions",
          description:
            "A version range may be supplied which may be of the format:   a single version number, 5   a range, 5-8 : deletes versions 5, 6, 7, 8",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-security-configuration",
      description: "Deletes a specified security configuration",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-session",
      description: "Deletes the session",
      options: [
        {
          name: "--id",
          description: "The ID of the session to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-origin",
          description: "The name of the origin of the delete session request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        'Removes a table definition from the Data Catalog.  After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service. To ensure the immediate deletion of all related resources, before calling DeleteTable, use DeleteTableVersion or BatchDeleteTableVersion, and DeletePartition or BatchDeletePartition, to delete any resources that belong to the table',
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the table to be deleted. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description:
            "The transaction ID at which to delete the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-table-optimizer",
      description:
        "Deletes an optimizer and all associated metadata for a table. The optimization will no longer be performed on the table",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides",
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
          name: "--type",
          description: "The type of table optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-table-version",
      description: "Deletes a specified version of a table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of the table version to be deleted. A VersionID is a string representation of an integer. Each version is incremented by 1",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-trigger",
      description:
        "Deletes a specified trigger. If the trigger is not found, no exception is thrown",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-usage-profile",
      description: "Deletes the Glue specified usage profile",
      options: [
        {
          name: "--name",
          description: "The name of the usage profile to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-defined-function",
      description:
        "Deletes an existing function definition from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be deleted is located. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function is located",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-name",
          description: "The name of the function definition to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-workflow",
      description: "Deletes a workflow",
      options: [
        {
          name: "--name",
          description: "Name of the workflow to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-connection-type",
      description:
        "The DescribeConnectionType API provides full details of the supported options for a given connection type in Glue",
      options: [
        {
          name: "--connection-type",
          description: "The name of the connection type to be described",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-entity",
      description:
        "Provides details regarding the entity used with the connection type, with a description of the data model for each field in the selected entity.  The response includes all the fields which make up the entity",
      options: [
        {
          name: "--connection-name",
          description:
            "The name of the connection that contains the connection type credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-name",
          description:
            "The name of the entity that you want to describe from the connection type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-store-api-version",
          description: "The version of the API used for the data store",
          args: {
            name: "string",
          },
        },
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
      name: "describe-inbound-integrations",
      description:
        "Returns a list of inbound integrations for the specified integration",
      options: [
        {
          name: "--integration-arn",
          description: "The Amazon Resource Name (ARN) of the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "A token to specify where to start paginating. This is the marker from a previously truncated response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description: "The total number of items to return in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Name (ARN) of the target resource in the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-integrations",
      description: "The API is used to retrieve a list of integrations",
      options: [
        {
          name: "--integration-identifier",
          description: "The Amazon Resource Name (ARN) for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "A value that indicates the starting point for the next set of response records in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-records",
          description: "The total number of items to return in the output",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            'A list of key and values, to filter down the results. Supported keys are "Status", "IntegrationName", and "SourceArn". IntegrationName is limited to only one value',
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
      name: "get-blueprint",
      description: "Retrieves the details of a blueprint",
      options: [
        {
          name: "--name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-blueprint",
          description:
            "Specifies whether or not to include the blueprint in the response",
        },
        {
          name: "--no-include-blueprint",
          description:
            "Specifies whether or not to include the blueprint in the response",
        },
        {
          name: "--include-parameter-spec",
          description:
            "Specifies whether or not to include the parameter specification",
        },
        {
          name: "--no-include-parameter-spec",
          description:
            "Specifies whether or not to include the parameter specification",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-blueprint-run",
      description: "Retrieves the details of a blueprint run",
      options: [
        {
          name: "--blueprint-name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The run ID for the blueprint run you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-blueprint-runs",
      description:
        "Retrieves the details of blueprint runs for a specified blueprint",
      options: [
        {
          name: "--blueprint-name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
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
      name: "get-catalog",
      description:
        "The name of the Catalog to retrieve. This should be all lowercase",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-catalog-import-status",
      description: "Retrieves the status of a migration operation",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-catalogs",
      description:
        "Retrieves all catalogs defined in a catalog in the Glue Data Catalog. For a Redshift-federated catalog use case, this operation returns the list of catalogs mapped to Redshift databases in the Redshift namespace catalog",
      options: [
        {
          name: "--parent-catalog-id",
          description:
            "The ID of the parent catalog in which the catalog resides. If none is provided, the Amazon Web Services Account Number is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of catalogs to return in one response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--recursive",
          description:
            "When specified as true, iterates through the account and returns all catalog resources (including top-level resources and child resources)",
        },
        {
          name: "--no-recursive",
          description:
            "When specified as true, iterates through the account and returns all catalog resources (including top-level resources and child resources)",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-classifier",
      description: "Retrieve a classifier by name",
      options: [
        {
          name: "--name",
          description: "Name of the classifier to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-classifiers",
      description: "Lists all classifier objects in the Data Catalog",
      options: [
        {
          name: "--max-results",
          description: "The size of the list to return (optional)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "An optional continuation token",
          args: {
            name: "string",
          },
        },
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
      name: "get-column-statistics-for-partition",
      description:
        "Retrieves partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetPartition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition",
          args: {
            name: "list",
          },
        },
        {
          name: "--column-names",
          description: "A list of the column names",
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
      name: "get-column-statistics-for-table",
      description:
        "Retrieves table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is GetTable",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-names",
          description: "A list of the column names",
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
      name: "get-column-statistics-task-run",
      description:
        "Get the associated metadata/information for a task run, given a task run ID",
      options: [
        {
          name: "--column-statistics-task-run-id",
          description:
            "The identifier for the particular column statistics task run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-column-statistics-task-runs",
      description:
        "Retrieves information about all runs associated with the specified table",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
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
          name: "--max-results",
          description: "The maximum size of the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-column-statistics-task-settings",
      description: "Gets settings for a column statistics task",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to retrieve column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-connection",
      description: "Retrieves a connection definition from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the connection definition to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties",
        },
        {
          name: "--no-hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties",
        },
        {
          name: "--apply-override-for-compute-environment",
          description:
            "For connections that may be used in multiple services, specifies returning properties for the specified compute environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-connections",
      description:
        "Retrieves a list of connection definitions from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter",
          description: "A filter that controls which connections are returned",
          args: {
            name: "structure",
          },
        },
        {
          name: "--hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties",
        },
        {
          name: "--no-hide-password",
          description:
            "Allows you to retrieve the connection metadata without returning the password. For instance, the Glue console uses this flag to retrieve the connection, and does not display the password. Set this parameter when the caller might not have permission to use the KMS key to decrypt the password, but it does have permission to access the rest of the connection properties",
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of connections to return in one response",
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
      name: "get-crawler",
      description: "Retrieves metadata for a specified crawler",
      options: [
        {
          name: "--name",
          description: "The name of the crawler to retrieve metadata for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-crawler-metrics",
      description: "Retrieves metrics about specified crawlers",
      options: [
        {
          name: "--crawler-name-list",
          description:
            "A list of the names of crawlers about which to retrieve metrics",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "get-crawlers",
      description:
        "Retrieves metadata for all crawlers defined in the customer account",
      options: [
        {
          name: "--max-results",
          description: "The number of crawlers to return on each call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
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
      name: "get-custom-entity-type",
      description:
        "Retrieves the details of a custom pattern by specifying its name",
      options: [
        {
          name: "--name",
          description:
            "The name of the custom pattern that you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-catalog-encryption-settings",
      description:
        "Retrieves the security configuration for a specified catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog to retrieve the security configuration for. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-model",
      description:
        "Retrieve the training status of the model along with more information (CompletedOn, StartedOn, FailureReason)",
      options: [
        {
          name: "--statistic-id",
          description: "The Statistic ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The Profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-model-result",
      description: "Retrieve a statistic's predictions for a given Profile ID",
      options: [
        {
          name: "--statistic-id",
          description: "The Statistic ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The Profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-result",
      description: "Retrieves the result of a data quality rule evaluation",
      options: [
        {
          name: "--result-id",
          description: "A unique result ID for the data quality result",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-rule-recommendation-run",
      description:
        "Gets the specified recommendation run that was used to generate rules",
      options: [
        {
          name: "--run-id",
          description: "The unique run identifier associated with this run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-ruleset",
      description: "Returns an existing ruleset by identifier or name",
      options: [
        {
          name: "--name",
          description: "The name of the ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-quality-ruleset-evaluation-run",
      description:
        "Retrieves a specific run where a ruleset is evaluated against a data source",
      options: [
        {
          name: "--run-id",
          description: "The unique run identifier associated with this run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Retrieves the definition of a specified database",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the database to retrieve. For Hive compatibility, this should be all lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-databases",
      description: "Retrieves all databases defined in a given Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog from which to retrieve Databases. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of databases to return in one response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-share-type",
          description:
            "Allows you to specify that you want to list the databases shared with your account. The allowable values are FEDERATED, FOREIGN or ALL.    If set to FEDERATED, will list the federated databases (referencing an external entity) shared with your account.   If set to FOREIGN, will list the databases shared with your account.    If set to ALL, will list the databases shared with your account, as well as the databases in yor local account",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes-to-get",
          description:
            "Specifies the database fields returned by the GetDatabases call. This parameter doesn\u2019t accept an empty list. The request must include the NAME",
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
      name: "get-dataflow-graph",
      description:
        "Transforms a Python script into a directed acyclic graph (DAG)",
      options: [
        {
          name: "--python-script",
          description: "The Python script to transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-dev-endpoint",
      description:
        "Retrieves information about a specified development endpoint.  When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address",
      options: [
        {
          name: "--endpoint-name",
          description: "Name of the DevEndpoint to retrieve information for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-dev-endpoints",
      description:
        "Retrieves all the development endpoints in this Amazon Web Services account.  When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of information to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "get-entity-records",
      description:
        "This API is used to query preview data from a given connection type or from a native Amazon S3 based Glue Data Catalog. Returns records as an array of JSON blobs. Each record is formatted using Jackson JsonNode based on the field type defined by the DescribeEntity API. Spark connectors generate schemas according to the same data type mapping as in the DescribeEntity API. Spark connectors convert data to the appropriate data types matching the schema when returning rows",
      options: [
        {
          name: "--connection-name",
          description:
            "The name of the connection that contains the connection type credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-name",
          description:
            "Name of the entity that we want to query the preview data from the given connection type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-store-api-version",
          description: "The API version of the SaaS connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-options",
          description: "Connector options that are required to query the data",
          args: {
            name: "map",
          },
        },
        {
          name: "--filter-predicate",
          description:
            "A filter predicate that you can apply in the query request",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "Limits the number of records fetched with the request",
          args: {
            name: "long",
          },
        },
        {
          name: "--order-by",
          description: "A parameter that orders the response preview data",
          args: {
            name: "string",
          },
        },
        {
          name: "--selected-fields",
          description:
            "List of fields that we want to fetch as part of preview data",
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
      name: "get-integration-resource-property",
      description:
        "This API is used for fetching the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target)",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-integration-table-properties",
      description:
        "This API is used to retrieve optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partition for source and target tables",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to be replicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-job",
      description: "Retrieves an existing job definition",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-job-bookmark",
      description:
        "Returns information on a job bookmark entry. For more information about enabling and using job bookmarks, see:    Tracking processed data using job bookmarks     Job parameters used by Glue     Job structure",
      options: [
        {
          name: "--job-name",
          description: "The name of the job in question",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The unique run identifier associated with this job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-job-run",
      description:
        "Retrieves the metadata for a given job run. Job run history is accessible for 90 days for your workflow and job run",
      options: [
        {
          name: "--job-name",
          description: "Name of the job definition being run",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The ID of the job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--predecessors-included",
          description: "True if a list of predecessor runs should be returned",
        },
        {
          name: "--no-predecessors-included",
          description: "True if a list of predecessor runs should be returned",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-job-runs",
      description: "Retrieves metadata for all runs of a given job definition",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the job definition for which to retrieve all job runs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of the response",
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
      name: "get-jobs",
      description: "Retrieves all current job definitions",
      options: [
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of the response",
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
      name: "get-ml-task-run",
      description:
        "Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling GetMLTaskRun with the TaskRunID and its parent transform's TransformID",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-run-id",
          description: "The unique identifier of the task run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-ml-task-runs",
      description:
        "Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling GetMLTaskRuns with their parent transform's TransformID and other optional parameters as documented in this section. This operation returns a list of historic runs and must be paginated",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A token for pagination of the results. The default is empty",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "The filter criteria, in the TaskRunFilterCriteria structure, for the task run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort",
          description:
            "The sorting criteria, in the TaskRunSortCriteria structure, for the task run",
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
      name: "get-ml-transform",
      description:
        "Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling GetMLTransform",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the transform, generated at the time that the transform was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-ml-transforms",
      description:
        "Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling GetMLTransforms",
      options: [
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description: "The filter transformation criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort",
          description: "The sorting criteria",
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
      name: "get-mapping",
      description: "Creates mappings",
      options: [
        {
          name: "--source",
          description: "Specifies the source table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sinks",
          description: "A list of target tables",
          args: {
            name: "list",
          },
        },
        {
          name: "--location",
          description: "Parameters for the mapping",
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
      name: "get-partition",
      description: "Retrieves information about a specified partition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition in question resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partition resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partition's table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "The values that define the partition",
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
      name: "get-partition-indexes",
      description: "Retrieves the partition indexes associated with a table",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "Specifies the name of a database from which you want to retrieve partition indexes",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "Specifies the name of a table for which you want to retrieve the partition indexes",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "get-partitions",
      description: "Retrieves information about the partitions in a table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "An expression that filters the partitions to be returned. The expression uses SQL syntax similar to the SQL WHERE filter clause. The SQL statement parser JSQLParser parses the expression.   Operators: The following are the operators that you can use in the Expression API call:  =  Checks whether the values of the two operands are equal; if yes, then the condition becomes true. Example: Assume 'variable a' holds 10 and 'variable b' holds 20.  (a = b) is not true.  < >  Checks whether the values of two operands are equal; if the values are not equal, then the condition becomes true. Example: (a < > b) is true.  >  Checks whether the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true. Example: (a > b) is not true.  <  Checks whether the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true. Example: (a < b) is true.  >=  Checks whether the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a >= b) is not true.  <=  Checks whether the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a <= b) is true.  AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL  Logical operators.    Supported Partition Key Types: The following are the supported partition keys.    string     date     timestamp     int     bigint     long     tinyint     smallint     decimal    If an type is encountered that is not valid, an exception is thrown.  The following list shows the valid operators on each type. When you define a crawler, the partitionKey type is created as a STRING, to be compatible with the catalog partitions.   Sample API Call:",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve these partitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment",
          description:
            "The segment of the table's partitions to scan in this request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of partitions to return in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--exclude-column-schema",
          description:
            "When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data",
        },
        {
          name: "--no-exclude-column-schema",
          description:
            "When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data",
        },
        {
          name: "--transaction-id",
          description:
            "The transaction ID at which to read the partition contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-as-of-time",
          description:
            "The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with TransactionId",
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
      name: "get-plan",
      description: "Gets code to perform a specified mapping",
      options: [
        {
          name: "--mapping",
          description:
            "The list of mappings from a source table to target tables",
          args: {
            name: "list",
          },
        },
        {
          name: "--source",
          description: "The source table",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sinks",
          description: "The target tables",
          args: {
            name: "list",
          },
        },
        {
          name: "--location",
          description: "The parameters for the mapping",
          args: {
            name: "structure",
          },
        },
        {
          name: "--language",
          description:
            "The programming language of the code to perform the mapping",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-plan-options-map",
          description:
            'A map to hold additional optional key-value parameters. Currently, these key-value pairs are supported:    inferSchema\u00a0 \u2014 \u00a0Specifies whether to set inferSchema to true or false for the default script generated by an Glue job. For example, to set inferSchema to true, pass the following key value pair:  --additional-plan-options-map \'{"inferSchema":"true"}\'',
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
      name: "get-registry",
      description: "Describes the specified registry in detail",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN)",
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
      name: "get-resource-policies",
      description:
        "Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy. If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
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
      name: "get-resource-policy",
      description: "Retrieves a specified resource policy",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the Glue resource for which to retrieve the resource policy. If not supplied, the Data Catalog resource policy is returned. Use GetResourcePolicies to view all existing resource policies. For more information see Specifying Glue Resource ARNs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-schema",
      description: "Describes the specified schema in detail",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided",
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
      name: "get-schema-by-definition",
      description:
        "Retrieves a schema by the SchemaDefinition. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the SchemaName or ARN (or the default registry, if none is supplied), that schema\u2019s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in Deleted statuses will not be included in the results",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-definition",
          description:
            "The definition of the schema for which schema details are required",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-schema-version",
      description:
        "Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-id",
          description:
            "The SchemaVersionId of the schema version. This field is required for fetching by schema ID. Either this or the SchemaId wrapper has to be provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema",
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
      name: "get-schema-versions-diff",
      description:
        "Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry. This API allows you to compare two schema versions between two schema definitions under the same schema",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--first-schema-version-number",
          description: "The first of the two schema versions to be compared",
          args: {
            name: "structure",
          },
        },
        {
          name: "--second-schema-version-number",
          description: "The second of the two schema versions to be compared",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-diff-type",
          description:
            "Refers to SYNTAX_DIFF, which is the currently supported diff type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-security-configuration",
      description: "Retrieves a specified security configuration",
      options: [
        {
          name: "--name",
          description: "The name of the security configuration to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-security-configurations",
      description: "Retrieves a list of all security configurations",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "get-session",
      description: "Retrieves the session",
      options: [
        {
          name: "--id",
          description: "The ID of the session",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-statement",
      description: "Retrieves the statement",
      options: [
        {
          name: "--session-id",
          description: "The Session ID of the statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The Id of the statement",
          args: {
            name: "integer",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Retrieves the Table definition in a Data Catalog for a specified table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the table for which to retrieve the definition. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "The transaction ID at which to read the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-as-of-time",
          description:
            "The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with TransactionId",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--no-include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-table-optimizer",
      description:
        "Returns the configuration of all optimizers associated with a specified table",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides",
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
          name: "--type",
          description: "The type of table optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-table-version",
      description: "Retrieves a specified version of a table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID value of the table version to be retrieved. A VersionID is a string representation of an integer. Each version is incremented by 1",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-table-versions",
      description:
        "Retrieves a list of strings that identify available versions of a specified table",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is not the first call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of table versions to return in one response",
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
      name: "get-tables",
      description:
        "Retrieves the definitions of some or all of the tables in a given Database",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The database in the catalog whose tables to list. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "A regular expression pattern. If present, only those tables whose names match the pattern are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--transaction-id",
          description: "The transaction ID at which to read the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-as-of-time",
          description:
            "The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with TransactionId",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--no-include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--attributes-to-get",
          description:
            "Specifies the table fields returned by the GetTables call. This parameter doesn\u2019t accept an empty list. The request must include NAME. The following are the valid combinations of values:    NAME - Names of all tables in the database.    NAME, TABLE_TYPE - Names of all tables and the table types",
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
      name: "get-tags",
      description: "Retrieves a list of tags associated with a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to retrieve tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-trigger",
      description: "Retrieves the definition of a trigger",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-triggers",
      description: "Gets all the triggers associated with a job",
      options: [
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--dependent-job-name",
          description:
            "The name of the job to retrieve triggers for. The trigger that can start this job is returned, and if there is no such trigger, all triggers are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of the response",
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
      name: "get-unfiltered-partition-metadata",
      description:
        "Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartition",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the partition resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "(Required) Specifies the name of a database that contains the partition",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "(Required) Specifies the name of a table that contains the partition",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "(Required) A list of partition key values",
          args: {
            name: "list",
          },
        },
        {
          name: "--audit-context",
          description:
            "A structure containing Lake Formation audit context information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--supported-permission-types",
          description: "(Required) A list of supported permission types",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-session-context",
          description:
            "A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-region",
          description:
            "Specified only if the base tables belong to a different Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-unfiltered-partitions-metadata",
      description:
        "Retrieves partition metadata from the Data Catalog that contains unfiltered metadata. For IAM authorization, the public IAM action associated with this API is glue:GetPartitions",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is provided, the AWS account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table that contains the partition",
          args: {
            name: "string",
          },
        },
        {
          name: "--expression",
          description:
            "An expression that filters the partitions to be returned. The expression uses SQL syntax similar to the SQL WHERE filter clause. The SQL statement parser JSQLParser parses the expression.   Operators: The following are the operators that you can use in the Expression API call:  =  Checks whether the values of the two operands are equal; if yes, then the condition becomes true. Example: Assume 'variable a' holds 10 and 'variable b' holds 20.  (a = b) is not true.  < >  Checks whether the values of two operands are equal; if the values are not equal, then the condition becomes true. Example: (a < > b) is true.  >  Checks whether the value of the left operand is greater than the value of the right operand; if yes, then the condition becomes true. Example: (a > b) is not true.  <  Checks whether the value of the left operand is less than the value of the right operand; if yes, then the condition becomes true. Example: (a < b) is true.  >=  Checks whether the value of the left operand is greater than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a >= b) is not true.  <=  Checks whether the value of the left operand is less than or equal to the value of the right operand; if yes, then the condition becomes true. Example: (a <= b) is true.  AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL  Logical operators.    Supported Partition Key Types: The following are the supported partition keys.    string     date     timestamp     int     bigint     long     tinyint     smallint     decimal    If an type is encountered that is not valid, an exception is thrown",
          args: {
            name: "string",
          },
        },
        {
          name: "--audit-context",
          description:
            "A structure containing Lake Formation audit context information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--supported-permission-types",
          description: "A list of supported permission types",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is not the first call to retrieve these partitions",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment",
          description:
            "The segment of the table's partitions to scan in this request",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of partitions to return in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--query-session-context",
          description:
            "A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-region",
          description:
            "Specified only if the base tables belong to a different Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-unfiltered-table-metadata",
      description:
        "Allows a third-party analytical engine to retrieve unfiltered table metadata from the Data Catalog. For IAM authorization, the public IAM action associated with this API is glue:GetTable",
      options: [
        {
          name: "--catalog-id",
          description: "The catalog ID where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "(Required) Specifies the name of a database that contains the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "(Required) Specifies the name of a table for which you are requesting metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--audit-context",
          description:
            "A structure containing Lake Formation audit context information",
          args: {
            name: "structure",
          },
        },
        {
          name: "--supported-permission-types",
          description:
            "Indicates the level of filtering a third-party analytical engine is capable of enforcing when calling the GetUnfilteredTableMetadata API operation. Accepted values are:    COLUMN_PERMISSION - Column permissions ensure that users can access only specific columns in the table. If there are particular columns contain sensitive data, data lake administrators can define column filters that exclude access to specific columns.    CELL_FILTER_PERMISSION - Cell-level filtering combines column filtering (include or exclude columns) and row filter expressions to restrict access to individual elements in the table.    NESTED_PERMISSION - Nested permissions combines cell-level filtering and nested column filtering to restrict access to columns and/or nested columns in specific rows based on row filter expressions.    NESTED_CELL_PERMISSION - Nested cell permissions combines nested permission with nested cell-level filtering. This allows different subsets of nested columns to be restricted based on an array of row filter expressions.    Note: Each of these permission types follows a hierarchical order where each subsequent permission type includes all permission of the previous type. Important: If you provide a supported permission type that doesn't match the user's level of permissions on the table, then Lake Formation raises an exception. For example, if the third-party engine calling the GetUnfilteredTableMetadata operation can enforce only column-level filtering, and the user has nested cell filtering applied on the table, Lake Formation throws an exception, and will not return unfiltered table metadata and data access credentials",
          args: {
            name: "list",
          },
        },
        {
          name: "--parent-resource-arn",
          description: "The resource ARN of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--root-resource-arn",
          description:
            "The resource ARN of the root view in a chain of nested views",
          args: {
            name: "string",
          },
        },
        {
          name: "--supported-dialect",
          description:
            "A structure specifying the dialect and dialect version used by the query engine",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-session-context",
          description:
            "A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context",
          args: {
            name: "structure",
          },
        },
        {
          name: "--resource-region",
          description:
            "Specified only if the base tables belong to a different Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-usage-profile",
      description:
        "Retrieves information about the specified Glue usage profile",
      options: [
        {
          name: "--name",
          description: "The name of the usage profile to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user-defined-function",
      description:
        "Retrieves a specified function definition from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be retrieved is located. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function is located",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-name",
          description: "The name of the function",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user-defined-functions",
      description:
        "Retrieves multiple function definitions from the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the functions to be retrieved are located. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the functions are located. If none is provided, functions from all the databases across the catalog will be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--pattern",
          description:
            "An optional function-name pattern string that filters the function definitions returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of functions to return in one response",
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
      name: "get-workflow",
      description: "Retrieves resource metadata for a workflow",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include a graph when returning the workflow resource metadata",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow-run",
      description:
        "Retrieves the metadata for a given workflow run. Job run history is accessible for 90 days for your workflow and job run",
      options: [
        {
          name: "--name",
          description: "Name of the workflow being run",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow-run-properties",
      description:
        "Retrieves the workflow run properties which were set during the run",
      options: [
        {
          name: "--name",
          description: "Name of the workflow which was run",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description:
            "The ID of the workflow run whose run properties should be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-workflow-runs",
      description: "Retrieves metadata for all runs of a given workflow",
      options: [
        {
          name: "--name",
          description:
            "Name of the workflow whose metadata of runs should be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not",
        },
        {
          name: "--no-include-graph",
          description:
            "Specifies whether to include the workflow graph in response or not",
        },
        {
          name: "--next-token",
          description: "The maximum size of the response",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of workflow runs to be included in the response",
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
      name: "import-catalog-to-glue",
      description: "Imports an existing Amazon Athena Data Catalog to Glue",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-blueprints",
      description: "Lists all the blueprint names in an account",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "Filters the list by an Amazon Web Services resource tag",
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
      name: "list-column-statistics-task-runs",
      description: "List all task runs for a particular account",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-connection-types",
      description:
        "The ListConnectionTypes API provides a discovery mechanism to learn available connection types in Glue. The response contains a list of connection types with high-level details of what is supported for each connection type. The connection types listed are the set of supported options for the ConnectionType value in the CreateConnection API",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "list-crawlers",
      description:
        "Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved",
      options: [
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources",
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
      name: "list-crawls",
      description:
        "Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned. You may use this API to:   Retrive all the crawls of a specified crawler.   Retrieve all the crawls of a specified crawler within a limited count.   Retrieve all the crawls of a specified crawler in a specific time range.   Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value",
      options: [
        {
          name: "--crawler-name",
          description:
            "The name of the crawler whose runs you want to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return. The default is 20, and maximum is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Filters the crawls by the criteria you specify in a list of CrawlsFilter objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-custom-entity-types",
      description: "Lists all the custom patterns that have been created",
      options: [
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "A list of key-value pair tags",
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
      name: "list-data-quality-results",
      description:
        "Returns all data quality execution results for your account",
      options: [
        {
          name: "--filter",
          description: "The filter criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "list-data-quality-rule-recommendation-runs",
      description: "Lists the recommendation runs meeting the filter criteria",
      options: [
        {
          name: "--filter",
          description: "The filter criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "list-data-quality-ruleset-evaluation-runs",
      description:
        "Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source",
      options: [
        {
          name: "--filter",
          description: "The filter criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "list-data-quality-rulesets",
      description:
        "Returns a paginated list of rulesets for the specified list of Glue tables",
      options: [
        {
          name: "--next-token",
          description: "A paginated token to offset the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description: "The filter criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "A list of key-value pair tags",
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
      name: "list-data-quality-statistic-annotations",
      description: "Retrieve annotations for a data quality statistic",
      options: [
        {
          name: "--statistic-id",
          description: "The Statistic ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The Profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--timestamp-filter",
          description: "A timestamp filter",
          args: {
            name: "structure",
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
          name: "--next-token",
          description: "A pagination token to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-data-quality-statistics",
      description: "Retrieves a list of data quality statistics",
      options: [
        {
          name: "--statistic-id",
          description: "The Statistic ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--profile-id",
          description: "The Profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--timestamp-filter",
          description: "A timestamp filter",
          args: {
            name: "structure",
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
          name: "--next-token",
          description: "A pagination token to request the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-dev-endpoints",
      description:
        "Retrieves the names of all DevEndpoint resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources",
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
      name: "list-entities",
      description:
        "Returns the available entities supported by the connection type",
      options: [
        {
          name: "--connection-name",
          description:
            "A name for the connection that has required credentials to query any connection type",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The catalog ID of the catalog that contains the connection. This can be null, By default, the Amazon Web Services Account ID is the catalog ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-entity-name",
          description:
            "Name of the parent entity for which you want to list the children. This parameter takes a fully-qualified path of the entity in order to list the child entities",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-store-api-version",
          description: "The API version of the SaaS connector",
          args: {
            name: "string",
          },
        },
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
      name: "list-jobs",
      description:
        "Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources",
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
      name: "list-ml-transforms",
      description:
        "Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional Tags field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filter",
          description:
            "A TransformFilterCriteria used to filter the machine learning transforms",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort",
          description:
            "A TransformSortCriteria used to sort the machine learning transforms",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources",
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
      name: "list-registries",
      description:
        "Returns a list of registries that you have created, with minimal registry information. Registries in the Deleting status will not be included in the results. Empty results will be returned if there are no registries available",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "list-schema-versions",
      description:
        "Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "list-schemas",
      description:
        "Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available. When the RegistryId is not provided, all the schemas across registries will be part of the API response",
      options: [
        {
          name: "--registry-id",
          description:
            "A wrapper structure that may contain the registry name and Amazon Resource Name (ARN)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      description: "Retrieve a list of sessions",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more result",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "Tags belonging to the session",
          args: {
            name: "map",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-statements",
      description: "Lists statements for the session",
      options: [
        {
          name: "--session-id",
          description: "The Session ID of the statements",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request to list statements",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-table-optimizer-runs",
      description:
        "Lists the history of previous optimizer runs for a specific table",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides",
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
          name: "--type",
          description: "The type of table optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of optimizer runs to return on each call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
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
      name: "list-triggers",
      description:
        "Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names. This operation takes the optional Tags field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--dependent-job-name",
          description:
            "The name of the job for which to retrieve triggers. The trigger that can start this job is returned. If there is no such trigger, all triggers are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description: "Specifies to return only these tagged resources",
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
      name: "list-usage-profiles",
      description: "List all the Glue usage profiles",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of usage profiles to return in a single response",
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
      name: "list-workflows",
      description: "Lists names of workflows created in the account",
      options: [
        {
          name: "--next-token",
          description:
            "A continuation token, if this is a continuation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum size of a list to return",
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
      name: "modify-integration",
      description: "Modifies a Zero-ETL integration in the caller's account",
      options: [
        {
          name: "--integration-identifier",
          description: "The Amazon Resource Name (ARN) for the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the integration",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-filter",
          description:
            "Selects source tables for the integration using Maxwell filter syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-name",
          description: "A unique name for an integration in Glue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-data-catalog-encryption-settings",
      description:
        "Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog to set the security configuration for. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-catalog-encryption-settings",
          description: "The security configuration to set",
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
      name: "put-data-quality-profile-annotation",
      description: "Annotate all datapoints for a Profile",
      options: [
        {
          name: "--profile-id",
          description:
            "The ID of the data quality monitoring profile to annotate",
          args: {
            name: "string",
          },
        },
        {
          name: "--inclusion-annotation",
          description: "The inclusion annotation value to apply to the profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Sets the Data Catalog resource policy for access control",
      options: [
        {
          name: "--policy-in-json",
          description: "Contains the policy document to set, in JSON format",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description: "Do not use. For internal use only",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-hash-condition",
          description:
            "The hash value returned when the previous policy was set using PutResourcePolicy. Its purpose is to prevent concurrent modifications of a policy. Do not use this parameter if no previous policy has been set",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-exists-condition",
          description:
            "A value of MUST_EXIST is used to update a policy. A value of NOT_EXIST is used to create a new policy. If a value of NONE or a null value is used, the call does not depend on the existence of a policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-hybrid",
          description:
            "If 'TRUE', indicates that you are using both methods to grant cross-account access to Data Catalog resources:   By directly updating the resource policy with PutResourePolicy    By using the Grant permissions command on the Amazon Web Services Management Console.   Must be set to 'TRUE' if you have already used the Management Console to grant cross-account access, otherwise the call fails. Default is 'FALSE'",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-schema-version-metadata",
      description:
        "Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls",
      options: [
        {
          name: "--schema-id",
          description: "The unique ID for the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-key-value",
          description: "The metadata key's corresponding value",
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
      name: "put-workflow-run-properties",
      description:
        "Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties",
      options: [
        {
          name: "--name",
          description: "Name of the workflow which was run",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description:
            "The ID of the workflow run for which the run properties should be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-properties",
          description: "The properties to put for the specified run",
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
      name: "query-schema-version-metadata",
      description: "Queries for the schema version metadata information",
      options: [
        {
          name: "--schema-id",
          description:
            "A wrapper structure that may contain the schema name and Amazon Resource Name (ARN)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-list",
          description:
            "Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A continuation token, if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "register-schema-version",
      description:
        "Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry. If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the GetSchemaVersion API with the SchemaVersionId to check compatibility modes. If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided.   SchemaId$SchemaName: The name of the schema. Either SchemaArn or SchemaName and RegistryName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-definition",
          description:
            "The schema definition using the DataFormat setting for the SchemaName",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-schema-version-metadata",
      description:
        "Removes a key value pair from the schema version metadata for the specified schema version ID",
      options: [
        {
          name: "--schema-id",
          description:
            "A wrapper structure that may contain the schema name and Amazon Resource Name (ARN)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-number",
          description: "The version number of the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-id",
          description: "The unique version ID of the schema version",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata-key-value",
          description: "The value of the metadata key",
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
      name: "reset-job-bookmark",
      description:
        "Resets a bookmark entry. For more information about enabling and using job bookmarks, see:    Tracking processed data using job bookmarks     Job parameters used by Glue     Job structure",
      options: [
        {
          name: "--job-name",
          description: "The name of the job in question",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The unique run identifier associated with this job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "resume-workflow-run",
      description:
        "Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to resume",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run to resume",
          args: {
            name: "string",
          },
        },
        {
          name: "--node-ids",
          description:
            "A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run",
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
      name: "run-statement",
      description: "Executes the statement",
      options: [
        {
          name: "--session-id",
          description: "The Session Id of the statement to be run",
          args: {
            name: "string",
          },
        },
        {
          name: "--code",
          description: "The statement code to be run",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-tables",
      description:
        "Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions.  You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search",
      options: [
        {
          name: "--catalog-id",
          description: "A unique identifier, consisting of  account_id",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A continuation token, included if this is a continuation call",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate. The Comparator member of the PropertyPredicate struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when Key=Name, a fuzzy match algorithm is used. The Key field (for example, the value of the Name field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the Value member of PropertyPredicate. For example, if Key=Name and Value=link, tables named customer-link and xx-link-yy are returned, but xxlinkyy is not returned",
          args: {
            name: "list",
          },
        },
        {
          name: "--search-text",
          description:
            "A string used for a text search. Specifying a value in quotes filters based on an exact match to the value",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "A list of criteria for sorting the results by a field name, in an ascending or descending order",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of tables to return in a single response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-share-type",
          description:
            "Allows you to specify that you want to search the tables shared with your account. The allowable values are FOREIGN or ALL.    If set to FOREIGN, will search the tables shared with your account.    If set to ALL, will search the tables shared with your account, as well as the tables in yor local account",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--no-include-status-details",
          description:
            "Specifies whether to include status details related to a request to create or update an Glue Data Catalog view",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-blueprint-run",
      description: "Starts a new run of the specified blueprint",
      options: [
        {
          name: "--blueprint-name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "Specifies the parameters as a BlueprintParameters object",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "Specifies the IAM role used to create the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-column-statistics-task-run",
      description:
        "Starts a column statistics task run, for a specified table and columns",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to generate statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-name-list",
          description:
            "A list of the column names to generate statistics. If none is supplied, all column names for the table will be used by default",
          args: {
            name: "list",
          },
        },
        {
          name: "--role",
          description:
            "The IAM role that the service assumes to generate statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-size",
          description:
            "The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats",
          args: {
            name: "double",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-column-statistics-task-run-schedule",
      description: "Starts a column statistics task run schedule",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to start a column statistic task run schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-crawler",
      description:
        "Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a CrawlerRunningException",
      options: [
        {
          name: "--name",
          description: "Name of the crawler to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-crawler-schedule",
      description:
        "Changes the schedule state of the specified crawler to SCHEDULED, unless the crawler is already running or the schedule state is already SCHEDULED",
      options: [
        {
          name: "--crawler-name",
          description: "Name of the crawler to schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-data-quality-rule-recommendation-run",
      description:
        "Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking. Recommendation runs are automatically deleted after 90 days",
      options: [
        {
          name: "--data-source",
          description: "The data source (Glue table) associated with this run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description: "An IAM role supplied to encrypt the results of the run",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of G.1X workers to be used in the run. The default is 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--created-ruleset-name",
          description: "A name for the ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-quality-security-configuration",
          description:
            "The name of the security configuration created with the data quality encryption option",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-data-quality-ruleset-evaluation-run",
      description:
        "Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the GetDataQualityResult API",
      options: [
        {
          name: "--data-source",
          description: "The data source (Glue table) associated with this run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description: "An IAM role supplied to encrypt the results of the run",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of G.1X workers to be used in the run. The default is 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--client-token",
          description:
            "Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-run-options",
          description:
            "Additional run options you can specify for an evaluation run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ruleset-names",
          description: "A list of ruleset names",
          args: {
            name: "list",
          },
        },
        {
          name: "--additional-data-sources",
          description:
            "A map of reference strings to additional data sources you can specify for an evaluation run",
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
      name: "start-export-labels-task-run",
      description:
        "Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use StartExportLabelsTaskRun when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the TransformId whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a TaskRunId. You can check on the status of your task run by calling the GetMLTaskRun API",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-s3-path",
          description: "The Amazon S3 path where you export the labels",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-import-labels-task-run",
      description:
        "Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the StartMLLabelingSetGenerationTaskRun call and that ultimately results in improving the quality of your machine learning transform.  After the StartMLLabelingSetGenerationTaskRun finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the FindMatches transform, these questions are of the form, \u201cWhat is the correct way to group these rows together into groups composed entirely of matching records?\u201d After the labeling process is finished, users upload their answers/labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation. By default, StartMLLabelingSetGenerationTaskRun continually learns from and combines all labels that you upload unless you set Replace to true. If you set Replace to true, StartImportLabelsTaskRun deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality. You can check on the status of your task run by calling the GetMLTaskRun operation",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-s3-path",
          description:
            "The Amazon Simple Storage Service (Amazon S3) path from where you import the labels",
          args: {
            name: "string",
          },
        },
        {
          name: "--replace-all-labels",
          description: "Indicates whether to overwrite your existing labels",
        },
        {
          name: "--no-replace-all-labels",
          description: "Indicates whether to overwrite your existing labels",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-job-run",
      description: "Starts a job run using a job definition",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-run-queuing-enabled",
          description:
            "Specifies whether job run queuing is enabled for the job run. A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing",
        },
        {
          name: "--no-job-run-queuing-enabled",
          description:
            "Specifies whether job run queuing is enabled for the job run. A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing",
        },
        {
          name: "--job-run-id",
          description: "The ID of a previous JobRun to retry",
          args: {
            name: "string",
          },
        },
        {
          name: "--arguments",
          description:
            "The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself. You can specify arguments here that your own job-execution script consumes, as well as arguments that Glue itself consumes. Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets from a Glue Connection, Secrets Manager or other secret management mechanism if you intend to keep them within the Job.  For information about how to specify and consume your own Job arguments, see the Calling Glue APIs in Python topic in the developer guide. For information about the arguments you can provide to this field when configuring Spark jobs, see the Special Parameters Used by Glue topic in the developer guide. For information about the arguments you can provide to this field when configuring Ray jobs, see Using job parameters in Ray jobs in the developer guide",
          args: {
            name: "map",
          },
        },
        {
          name: "--allocated-capacity",
          description:
            "This field is deprecated. Use MaxCapacity instead. The number of Glue data processing units (DPUs) to allocate to this JobRun. You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. This value overrides the timeout value set in the parent job.  Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-capacity",
          description:
            'For Glue version 1.0 or earlier jobs, using the standard worker type, the number of Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the  Glue pricing page. For Glue version 2.0+ jobs, you cannot specify a Maximum capacity. Instead, you should specify a Worker type and the Number of workers. Do not set MaxCapacity if using WorkerType and NumberOfWorkers. The value that can be allocated for MaxCapacity depends on whether you are running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL job:   When you specify a Python shell job (JobCommand.Name="pythonshell"), you can allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.   When you specify an Apache Spark ETL job (JobCommand.Name="glueetl") or Apache Spark streaming ETL job (JobCommand.Name="gluestreaming"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation',
          args: {
            name: "double",
          },
        },
        {
          name: "--security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used with this job run",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-property",
          description:
            "Specifies configuration properties of a job run notification",
          args: {
            name: "structure",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when a job runs. Accepts a value of G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.   For the G.1X worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.2X worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.   For the G.4X worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).   For the G.8X worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the G.4X worker type.   For the G.025X worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.   For the Z.2X worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when a job runs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--execution-class",
          description:
            "Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources. The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.  Only jobs with Glue version 3.0 and above and command type glueetl will be allowed to set ExecutionClass to FLEX. The flexible execution class is available for Spark jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-ml-evaluation-task-run",
      description:
        "Starts a task to estimate the quality of the transform.  When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality. Returns a unique identifier for the run. You can call GetMLTaskRun to get more information about the stats of the EvaluationTaskRun",
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-ml-labeling-set-generation-task-run",
      description:
        'Starts the active learning workflow for your machine learning transform to improve the transform\'s quality by generating label sets and adding labels. When the StartMLLabelingSetGenerationTaskRun finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer. In the case of the FindMatches transform, these questions are of the form, \u201cWhat is the correct way to group these rows together into groups composed entirely of matching records?\u201d  After the labeling process is finished, you can upload your labels with a call to StartImportLabelsTaskRun. After StartImportLabelsTaskRun finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation',
      options: [
        {
          name: "--transform-id",
          description:
            "The unique identifier of the machine learning transform",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-s3-path",
          description:
            "The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling set",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-trigger",
      description:
        "Starts an existing trigger. See Triggering Jobs for information about how different types of trigger are started",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-workflow-run",
      description: "Starts a new run of the specified workflow",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to start",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-properties",
          description: "The workflow run properties for the new workflow run",
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
      name: "stop-column-statistics-task-run",
      description: "Stops a task run for the specified table",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
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
      name: "stop-column-statistics-task-run-schedule",
      description: "Stops a column statistics task run schedule",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to stop a column statistic task run schedule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-crawler",
      description: "If the specified crawler is running, stops the crawl",
      options: [
        {
          name: "--name",
          description: "Name of the crawler to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-crawler-schedule",
      description:
        "Sets the schedule state of the specified crawler to NOT_SCHEDULED, but does not stop the crawler if it is already running",
      options: [
        {
          name: "--crawler-name",
          description: "Name of the crawler whose schedule state to set",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-session",
      description: "Stops the session",
      options: [
        {
          name: "--id",
          description: "The ID of the session to be stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-origin",
          description: "The origin of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-trigger",
      description: "Stops a specified trigger",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-workflow-run",
      description: "Stops the execution of the specified workflow run",
      options: [
        {
          name: "--name",
          description: "The name of the workflow to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--run-id",
          description: "The ID of the workflow run to stop",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see Amazon Web Services Tags in Glue",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the Glue resource to which to add the tags. For more information about Glue resource ARNs, see the Glue ARN string pattern",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags-to-add",
          description: "Tags to add to this resource",
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
      name: "test-connection",
      description:
        "Tests a connection to a service to validate the service credentials that you provide. You can either provide an existing connection name or a TestConnectionInput for testing a non-existing connection input. Providing both at the same time will cause an error. If the action is successful, the service sends back an HTTP 200 response",
      options: [
        {
          name: "--connection-name",
          description:
            "Optional. The name of the connection to test. If only name is provided, the operation will get the connection and use that for testing",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-id",
          description: "The catalog ID where the connection resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-connection-input",
          description:
            "A structure that is used to specify testing a connection to a service",
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
      name: "untag-resource",
      description: "Removes tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to remove the tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags-to-remove",
          description: "Tags to remove from this resource",
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
      name: "update-blueprint",
      description: "Updates a registered blueprint",
      options: [
        {
          name: "--name",
          description: "The name of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the blueprint",
          args: {
            name: "string",
          },
        },
        {
          name: "--blueprint-location",
          description:
            "Specifies a path in Amazon S3 where the blueprint is published",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-catalog",
      description:
        "Updates an existing catalog's properties in the Glue Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description: "The ID of the catalog",
          args: {
            name: "string",
          },
        },
        {
          name: "--catalog-input",
          description:
            "A CatalogInput object specifying the new properties of an existing catalog",
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
      name: "update-classifier",
      description:
        "Modifies an existing classifier (a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field is present)",
      options: [
        {
          name: "--grok-classifier",
          description: "A GrokClassifier object with updated fields",
          args: {
            name: "structure",
          },
        },
        {
          name: "--xml-classifier",
          description: "An XMLClassifier object with updated fields",
          args: {
            name: "structure",
          },
        },
        {
          name: "--json-classifier",
          description: "A JsonClassifier object with updated fields",
          args: {
            name: "structure",
          },
        },
        {
          name: "--csv-classifier",
          description: "A CsvClassifier object with updated fields",
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
      name: "update-column-statistics-for-partition",
      description:
        "Creates or updates partition statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdatePartition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-values",
          description: "A list of partition values identifying the partition",
          args: {
            name: "list",
          },
        },
        {
          name: "--column-statistics-list",
          description: "A list of the column statistics",
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
      name: "update-column-statistics-for-table",
      description:
        "Creates or updates table statistics of columns. The Identity and Access Management (IAM) permission required for this operation is UpdateTable",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partitions in question reside. If none is supplied, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the partitions reside",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the partitions' table",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-statistics-list",
          description: "A list of the column statistics",
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
      name: "update-column-statistics-task-settings",
      description: "Updates settings for a column statistics task",
      options: [
        {
          name: "--database-name",
          description: "The name of the database where the table resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table for which to generate column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role used for running the column statistics",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "A schedule for running the column statistics, specified in CRON syntax",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-name-list",
          description: "A list of column names for which to run statistics",
          args: {
            name: "list",
          },
        },
        {
          name: "--sample-size",
          description: "The percentage of data to sample",
          args: {
            name: "double",
          },
        },
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the database resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-configuration",
          description:
            "Name of the security configuration that is used to encrypt CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-connection",
      description: "Updates a connection definition in the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the connection definition to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--connection-input",
          description:
            "A ConnectionInput object that redefines the connection in question",
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
      name: "update-crawler",
      description:
        "Updates a crawler. If a crawler is running, you must stop it using StopCrawler before updating it",
      options: [
        {
          name: "--name",
          description: "Name of the new crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler to access customer resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The Glue database where results are stored, such as: arn:aws:daylight:us-east-1::database/sometable/*",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the new crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--targets",
          description: "A list of targets to crawl",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schedule",
          description:
            "A cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *)",
          args: {
            name: "string",
          },
        },
        {
          name: "--classifiers",
          description:
            "A list of custom classifiers that the user has registered. By default, all built-in classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification",
          args: {
            name: "list",
          },
        },
        {
          name: "--table-prefix",
          description:
            "The table prefix used for catalog tables that are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--schema-change-policy",
          description:
            "The policy for the crawler's update and deletion behavior",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recrawl-policy",
          description:
            "A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lineage-configuration",
          description:
            "Specifies data lineage configuration settings for the crawler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lake-formation-configuration",
          description:
            "Specifies Lake Formation configuration settings for the crawler",
          args: {
            name: "structure",
          },
        },
        {
          name: "--configuration",
          description:
            "Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see Setting crawler configuration options",
          args: {
            name: "string",
          },
        },
        {
          name: "--crawler-security-configuration",
          description:
            "The name of the SecurityConfiguration structure to be used by this crawler",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-crawler-schedule",
      description: "Updates the schedule of a crawler using a cron expression",
      options: [
        {
          name: "--crawler-name",
          description: "The name of the crawler whose schedule to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "The updated cron expression used to specify the schedule (see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, you would specify: cron(15 12 * * ? *)",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-quality-ruleset",
      description: "Updates the specified data quality ruleset",
      options: [
        {
          name: "--name",
          description: "The name of the data quality ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the ruleset",
          args: {
            name: "string",
          },
        },
        {
          name: "--ruleset",
          description:
            "A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-database",
      description: "Updates an existing database definition in a Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog in which the metadata database resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the database to update in the catalog. For Hive compatibility, this is folded to lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-input",
          description:
            "A DatabaseInput object specifying the new definition of the metadata database in the catalog",
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
      name: "update-dev-endpoint",
      description: "Updates a specified development endpoint",
      options: [
        {
          name: "--endpoint-name",
          description: "The name of the DevEndpoint to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-key",
          description: "The public key for the DevEndpoint to use",
          args: {
            name: "string",
          },
        },
        {
          name: "--add-public-keys",
          description: "The list of public keys for the DevEndpoint to use",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-public-keys",
          description:
            "The list of public keys to be deleted from the DevEndpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-libraries",
          description:
            "Custom Python or Java libraries to be loaded in the DevEndpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--update-etl-libraries",
          description:
            "True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False if otherwise",
        },
        {
          name: "--no-update-etl-libraries",
          description:
            "True if the list of custom libraries to be loaded in the development endpoint needs to be updated, or False if otherwise",
        },
        {
          name: "--delete-arguments",
          description:
            "The list of argument keys to be deleted from the map of arguments used to configure the DevEndpoint",
          args: {
            name: "list",
          },
        },
        {
          name: "--add-arguments",
          description:
            'The map of arguments to add the map of arguments used to configure the DevEndpoint. Valid arguments are:    "--enable-glue-datacatalog": ""    You can specify a version of Python support for development endpoints by using the Arguments parameter in the CreateDevEndpoint or UpdateDevEndpoint APIs. If no arguments are provided, the version defaults to Python 2',
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
      name: "update-integration-resource-property",
      description:
        "This API can be used for updating the ResourceProperty of the Glue connection (for the source) or Glue database ARN (for the target). These properties can include the role to access the connection or database. Since the same resource can be used across multiple integrations, updating resource properties will impact all the integrations using it",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-processing-properties",
          description:
            "The resource properties associated with the integration source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-processing-properties",
          description:
            "The resource properties associated with the integration target",
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
      name: "update-integration-table-properties",
      description:
        "This API is used to provide optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively. The override will be reflected across all the integrations using same ResourceArn and source table",
      options: [
        {
          name: "--resource-arn",
          description:
            "The connection ARN of the source, or the database ARN of the target",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description: "The name of the table to be replicated",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-table-config",
          description: "A structure for the source table configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--target-table-config",
          description: "A structure for the target table configuration",
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
      name: "update-job",
      description:
        "Updates an existing job definition. The previous job definition is completely overwritten by this information",
      options: [
        {
          name: "--job-name",
          description: "The name of the job definition to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-update",
          description:
            "Specifies the values with which to update the job definition. Unspecified configuration is removed or reset to default values",
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
      name: "update-job-from-source-control",
      description:
        "Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts. This API supports optional parameters which take in the repository information",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the Glue job to be synchronized to or from the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description:
            "The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the remote repository that contains the job artifacts. For BitBucket providers, RepositoryName should include WorkspaceName. Use the format <WorkspaceName>/<RepositoryName>",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-owner",
          description:
            "The owner of the remote repository that contains the job artifacts",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description: "An optional branch in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder",
          description: "An optional folder in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-id",
          description: "A commit ID for a commit in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-strategy",
          description:
            "The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-token",
          description: "The value of the authorization token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-ml-transform",
      description:
        "Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results. After calling this operation, you can call the StartMLEvaluationTaskRun operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective)",
      options: [
        {
          name: "--transform-id",
          description:
            "A unique identifier that was generated when the transform was created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The unique name that you gave the transform when you created it",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the transform. The default is an empty string",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The configuration parameters that are specific to the transform type (algorithm) used. Conditionally dependent on the transform type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role",
          description:
            "The name or Amazon Resource Name (ARN) of the IAM role with the required permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--glue-version",
          description:
            "This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9. For more information, see Glue Versions in the developer guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-capacity",
          description:
            "The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the Glue pricing page.  When the WorkerType field is set to a value other than Standard, the MaxCapacity field is set automatically and becomes read-only",
          args: {
            name: "double",
          },
        },
        {
          name: "--worker-type",
          description:
            "The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.   For the Standard worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.   For the G.1X worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.   For the G.2X worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker",
          args: {
            name: "string",
          },
        },
        {
          name: "--number-of-workers",
          description:
            "The number of workers of a defined workerType that are allocated when this task runs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--timeout",
          description:
            "The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-retries",
          description:
            "The maximum number of times to retry a task for this transform after a task run fails",
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
      name: "update-partition",
      description: "Updates a partition",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the partition to be updated resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table in question resides",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-name",
          description:
            "The name of the table in which the partition to be updated is located",
          args: {
            name: "string",
          },
        },
        {
          name: "--partition-value-list",
          description:
            "List of partition key values that define the partition to update",
          args: {
            name: "list",
          },
        },
        {
          name: "--partition-input",
          description:
            "The new partition object to update the partition to. The Values property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition",
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
      name: "update-registry",
      description:
        "Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry",
      options: [
        {
          name: "--registry-id",
          description:
            "This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description:
            "A description of the registry. If description is not provided, this field will not be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-schema",
      description:
        "Updates the description, compatibility setting, or version checkpoint for a schema set. For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for Compatibility is provided, the VersionNumber (a checkpoint) is also required. The API will validate the checkpoint version number for consistency. If the value for the VersionNumber (checkpoint) is provided, Compatibility is optional and this can be used to set/reset a checkpoint for the schema. This update will happen only if the schema is in the AVAILABLE state",
      options: [
        {
          name: "--schema-id",
          description:
            "This is a wrapper structure to contain schema identity fields. The structure contains:   SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.   SchemaId$SchemaName: The name of the schema. One of SchemaArn or SchemaName has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--schema-version-number",
          description:
            "Version number required for check pointing. One of VersionNumber or Compatibility has to be provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--compatibility",
          description: "The new compatibility setting for the schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the schema",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-source-control-from-job",
      description:
        "Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job. This API supports optional parameters which take in the repository information",
      options: [
        {
          name: "--job-name",
          description:
            "The name of the Glue job to be synchronized to or from the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--provider",
          description:
            "The provider for the remote repository. Possible values: GITHUB, AWS_CODE_COMMIT, GITLAB, BITBUCKET",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-name",
          description:
            "The name of the remote repository that contains the job artifacts. For BitBucket providers, RepositoryName should include WorkspaceName. Use the format <WorkspaceName>/<RepositoryName>",
          args: {
            name: "string",
          },
        },
        {
          name: "--repository-owner",
          description:
            "The owner of the remote repository that contains the job artifacts",
          args: {
            name: "string",
          },
        },
        {
          name: "--branch-name",
          description: "An optional branch in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder",
          description: "An optional folder in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--commit-id",
          description: "A commit ID for a commit in the remote repository",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-strategy",
          description:
            "The type of authentication, which can be an authentication token stored in Amazon Web Services Secrets Manager, or a personal access token",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-token",
          description: "The value of the authorization token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Updates a metadata table in the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database in which the table resides. For Hive compatibility, this name is entirely lowercase",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-input",
          description:
            "An updated TableInput object to define the metadata table in the catalog",
          args: {
            name: "structure",
          },
        },
        {
          name: "--skip-archive",
          description:
            "By default, UpdateTable always creates an archived version of the table before updating it. However, if skipArchive is set to true, UpdateTable does not create the archived version",
        },
        {
          name: "--no-skip-archive",
          description:
            "By default, UpdateTable always creates an archived version of the table before updating it. However, if skipArchive is set to true, UpdateTable does not create the archived version",
        },
        {
          name: "--transaction-id",
          description:
            "The transaction ID at which to update the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The version ID at which to update the table contents",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-update-action",
          description: "The operation to be performed when updating the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--force",
          description:
            "A flag that can be set to true to ignore matching storage descriptor and subobject matching requirements",
        },
        {
          name: "--no-force",
          description:
            "A flag that can be set to true to ignore matching storage descriptor and subobject matching requirements",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-table-optimizer",
      description: "Updates the configuration for an existing table optimizer",
      options: [
        {
          name: "--catalog-id",
          description: "The Catalog ID of the table",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the database in the catalog in which the table resides",
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
          name: "--type",
          description: "The type of table optimizer",
          args: {
            name: "string",
          },
        },
        {
          name: "--table-optimizer-configuration",
          description:
            "A TableOptimizerConfiguration object representing the configuration of a table optimizer",
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
      name: "update-trigger",
      description: "Updates a trigger definition",
      options: [
        {
          name: "--name",
          description: "The name of the trigger to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-update",
          description: "The new values with which to update the trigger",
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
      name: "update-usage-profile",
      description: "Update an Glue usage profile",
      options: [
        {
          name: "--name",
          description: "The name of the usage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the usage profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "A ProfileConfiguration object specifying the job and session values for the profile",
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
      name: "update-user-defined-function",
      description:
        "Updates an existing function definition in the Data Catalog",
      options: [
        {
          name: "--catalog-id",
          description:
            "The ID of the Data Catalog where the function to be updated is located. If none is provided, the Amazon Web Services account ID is used by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--database-name",
          description:
            "The name of the catalog database where the function to be updated is located",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-name",
          description: "The name of the function",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-input",
          description:
            "A FunctionInput object that redefines the function in the Data Catalog",
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
      name: "update-workflow",
      description: "Updates an existing workflow",
      options: [
        {
          name: "--name",
          description: "Name of the workflow to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the workflow",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-run-properties",
          description:
            "A collection of properties to be used as part of each execution of the workflow",
          args: {
            name: "map",
          },
        },
        {
          name: "--max-concurrent-runs",
          description:
            "You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs",
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
  ],
};
export default completionSpec;
