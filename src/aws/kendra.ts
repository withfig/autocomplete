const completionSpec: Fig.Spec = {
  name: "kendra",
  description: "Amazon Kendra is a service for indexing large document sets",
  subcommands: [
    {
      name: "batch-delete-document",
      description:
        "Removes one or more documents from an index. The documents must have been added with the BatchPutDocument operation. The documents are deleted asynchronously. You can see the progress of the deletion by using AWS CloudWatch. Any error messages related to the processing of the batch are sent to you CloudWatch log",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the documents to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id-list",
          description:
            "One or more identifiers for documents to delete from the index",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-source-sync-job-metric-target",
          description:
            "Maps a particular data source sync job to a particular data source",
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
      name: "batch-put-document",
      description:
        "Adds one or more documents to an index. The BatchPutDocument operation enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using AWS CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch log",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index to add the documents to. You need to create the index first using the CreateIndex operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role that is allowed to run the BatchPutDocument operation. For more information, see IAM Roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--documents",
          description:
            "One or more documents to add to the index.  Documents have the following file size limits.   5 MB total size for inline documents   50 MB total size for files from an S3 bucket   5 MB extracted text for any file   For more information about file size and transaction per second quotas, see Quotas",
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
      name: "create-data-source",
      description:
        "Creates a data source that you use to with an Amazon Kendra index.  You specify a name, data source connector type and description for your data source. You also specify configuration information such as document metadata (author, source URI, and so on) and user context information.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised",
      options: [
        {
          name: "--name",
          description:
            "A unique name for the data source. A data source name can't be changed without deleting and recreating the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that should be associated with this data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of repository that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The connector configuration information that is required to access the repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "Sets the frequency that Amazon Kendra will check the documents in your repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob operation to update the index. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the data source. For more information, see IAM Roles for Amazon Kendra. You can't specify the RoleArn parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The RoleArn parameter is required for all other data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify the data source. You can use the tags to identify and organize your resources and to control access to resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a data source. Multiple calls to the CreateDataSource operation with the same client token will create only one data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-faq",
      description:
        "Creates an new set of frequently asked question (FAQ) questions and answers",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index that contains the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name that should be associated with the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-path",
          description: "The S3 location of the FAQ input data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of a role with permission to access the S3 bucket that contains the FAQs. For more information, see IAM Roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify the FAQ. You can use the tags to identify and organize your resources and to control access to resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--file-format",
          description:
            "The format of the input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes. The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter. For more information, see Adding questions and answers",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a FAQ. Multiple calls to the CreateFaqRequest operation with the same client token will create only one FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-index",
      description:
        "Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active you can index your documents using the BatchPutDocument operation or using one of the supported data sources",
      options: [
        {
          name: "--name",
          description: "The name for the new index",
          args: {
            name: "string",
          },
        },
        {
          name: "--edition",
          description:
            "The Amazon Kendra edition to use for the index. Choose DEVELOPER_EDITION for indexes intended for development, testing, or proof of concept. Use ENTERPRISE_EDITION for your production databases. Once you set the edition for an index, it can't be changed.  The Edition parameter is optional. If you don't supply a value, the default is ENTERPRISE_EDITION",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access your Amazon CloudWatch logs and metrics. This is also the role used when you use the BatchPutDocument operation to index documents from an Amazon S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption-configuration",
          description:
            "The identifier of the AWS KMS customer managed key (CMK) to use to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex operation with the same client token will create only one index",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify the index. You can use the tags to identify and organize your resources and to control access to resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-token-configurations",
          description: "The user token configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-context-policy",
          description:
            "The user context policy.  ATTRIBUTE_FILTER  All indexed content is searchable and displayable for all users. If there is an access control list, it is ignored. You can filter on user and group attributes.   USER_TOKEN  Enables SSO and token-based user access control. All documents with no access control and all documents accessible to the user will be searchable and displayable",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-thesaurus",
      description:
        "Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format",
      options: [
        {
          name: "--index-id",
          description:
            "The unique identifier of the index for the new thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the new thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the new thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "An AWS Identity and Access Management (IAM) role that gives Amazon Kendra permissions to access thesaurus file specified in SourceS3Path",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify the thesaurus. You can use the tags to identify and organize your resources and to control access to resources",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-s3-path",
          description: "The thesaurus file Amazon S3 source path",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a thesaurus. Multiple calls to the CreateThesaurus operation with the same client token will create only one index",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes an Amazon Kendra data source. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource operation is set to DELETING. For more information, see Deleting Data Sources",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the data source to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The unique identifier of the index associated with the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-faq",
      description: "Removes an FAQ from an index",
      options: [
        {
          name: "--id",
          description: "The identifier of the FAQ to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The index to remove the FAQ from",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-index",
      description:
        "Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex operation is set to DELETING",
      options: [
        {
          name: "--id",
          description: "The identifier of the index to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-thesaurus",
      description: "Deletes an existing Amazon Kendra thesaurus",
      options: [
        {
          name: "--id",
          description: "The identifier of the thesaurus to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index associated with the thesaurus to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-data-source",
      description: "Gets information about a Amazon Kendra data source",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the data source to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-faq",
      description: "Gets information about an FAQ list",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index that contains the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-index",
      description: "Describes an existing Amazon Kendra index",
      options: [
        {
          name: "--id",
          description: "The name of the index to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-thesaurus",
      description: "Describes an existing Amazon Kendra thesaurus",
      options: [
        {
          name: "--id",
          description: "The identifier of the thesaurus to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index associated with the thesaurus to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-data-source-sync-jobs",
      description:
        "Gets statistics about synchronizing Amazon Kendra with a data source",
      options: [
        {
          name: "--id",
          description: "The identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous request to GetDataSourceSyncJobHistory was truncated, include the NextToken to fetch the next set of jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of synchronization jobs to return in the response. If there are fewer results in the list, this response contains only the actual results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time-filter",
          description:
            "When specified, the synchronization jobs returned in the list are limited to jobs between the specified dates",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status-filter",
          description:
            "When specified, only returns synchronization jobs with the Status field equal to the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-data-sources",
      description: "Lists the data sources that you have created",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of data sources (DataSourceSummaryItems)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of data sources to return",
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
      name: "list-faqs",
      description: "Gets a list of FAQ lists associated with an index",
      options: [
        {
          name: "--index-id",
          description: "The index that contains the FAQ lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the result of the previous request to ListFaqs was truncated, include the NextToken to fetch the next set of FAQs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of FAQs to return in the response. If there are fewer results in the list, this response contains only the actual results",
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
      name: "list-indices",
      description: "Lists the Amazon Kendra indexes that you have created",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of indexes (DataSourceSummaryItems)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of data sources to return",
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
      name: "list-tags-for-resource",
      description:
        "Gets a list of tags associated with a specified resource. Indexes, FAQs, and data sources can have tags associated with them",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, or data source to get a list of tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-thesauri",
      description: "Lists the Amazon Kendra thesauri associated with an index",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index associated with the thesaurus to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of thesauri (ThesaurusSummaryItems)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of thesauri to return",
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
      name: "query",
      description:
        "Searches an active index. Use this API to search your documents using query. The Query operation enables to do faceted search and to filter results based on document attributes. It also enables you to provide user context that Amazon Kendra uses to enforce document access control in the search results.  Amazon Kendra searches your index for text content and question and answer (FAQ) content. By default the response contains three types of results.   Relevant passages   Matching FAQs   Relevant documents   You can specify that the query return only one type of result using the QueryResultTypeConfig parameter. Each query returns the 100 most relevant results",
      options: [
        {
          name: "--index-id",
          description:
            "The unique identifier of the index to search. The identifier is returned in the response from the CreateIndex operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description: "The text to search for",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-filter",
          description:
            "Enables filtered searches based on document attributes. You can only provide one attribute filter; however, the AndAllFilters, NotFilter, and OrAllFilters parameters contain a list of other filters. The AttributeFilter parameter enables you to create a set of filtering rules that a document must satisfy to be included in the query results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--facets",
          description:
            "An array of documents attributes. Amazon Kendra returns a count for each attribute key specified. You can use this information to help narrow the search for your user",
          args: {
            name: "list",
          },
        },
        {
          name: "--requested-document-attributes",
          description:
            "An array of document attributes to include in the response. No other document attributes are included in the response. By default all document attributes are included in the response",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-result-type-filter",
          description:
            "Sets the type of query. Only results for the specified query type are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-relevance-override-configurations",
          description:
            "Overrides relevance tuning configurations of fields or attributes set at the index level. If you use this API to override the relevance tuning configured at the index level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning. If there is relevance tuning configured at the index level, but you do not use this API to override any relevance tuning in the index, then Amazon Kendra uses the relevance tuning that is configured at the index level. If there is relevance tuning configured for fields at the index level, but you use this API to override only some of these fields, then for the fields you did not override, the importance is set to 1",
          args: {
            name: "list",
          },
        },
        {
          name: "--page-number",
          description:
            "Query results are returned in pages the size of the PageSize parameter. By default, Amazon Kendra returns the first page of results. Use this parameter to get result pages after the first one",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Sets the number of results that are returned in each page of results. The default page size is 10. The maximum number of results returned is 100. If you ask for more than 100 results, only 100 are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sorting-configuration",
          description:
            "Provides information that determines how the results of the query are sorted. You can set the field that Amazon Kendra should sort the results on, and specify whether the results should be sorted in ascending or descending order. In the case of ties in sorting the results, the results are sorted by relevance. If you don't provide sorting configuration, the results are sorted by the relevance that Amazon Kendra determines for the result",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-context",
          description: "The user context token",
          args: {
            name: "structure",
          },
        },
        {
          name: "--visitor-id",
          description:
            "Provides an identifier for a specific user. The VisitorId should be a unique identifier, such as a GUID. Don't use personally identifiable information, such as the user's email address, as the VisitorId",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-data-source-sync-job",
      description:
        "Starts a synchronization job for a data source. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception",
      options: [
        {
          name: "--id",
          description: "The identifier of the data source to synchronize",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-data-source-sync-job",
      description:
        "Stops a running synchronization job. You can't stop a scheduled synchronization job",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the data source for which to stop the synchronization jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "submit-feedback",
      description:
        "Enables you to provide feedback to Amazon Kendra to improve the performance of the service",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index that was queried",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-id",
          description:
            "The identifier of the specific query for which you are submitting feedback. The query ID is returned in the response to the Query operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--click-feedback-items",
          description:
            "Tells Amazon Kendra that a particular search result link was chosen by the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--relevance-feedback-items",
          description:
            "Provides Amazon Kendra with relevant or not relevant feedback for whether a particular item was relevant to the search",
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
        "Adds the specified tag to the specified index, FAQ, or data source resource. If the tag already exists, the existing value is replaced with the new value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag keys to add to the index, FAQ, or data source. If a tag already exists, the existing value is replaced with the new value",
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
      description: "Removes a tag from an index, FAQ, or a data source",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the index, FAQ, or data source. If a tag key does not exist on the resource, it is ignored",
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
      name: "update-data-source",
      description: "Updates an existing Amazon Kendra data source",
      options: [
        {
          name: "--id",
          description: "The unique identifier of the data source to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the data source to update. The name of the data source can't be updated. To rename a data source you must delete the data source and re-create it",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that contains the data source to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information for a Amazon Kendra data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The new description for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description: "The new update schedule for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the new role to use when the data source is accessing resources on your behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-index",
      description: "Updates an existing Amazon Kendra index",
      options: [
        {
          name: "--id",
          description: "The identifier of the index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the index to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "A new IAM role that gives Amazon Kendra permission to access your Amazon CloudWatch logs",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-metadata-configuration-updates",
          description: "The document metadata to update",
          args: {
            name: "list",
          },
        },
        {
          name: "--capacity-units",
          description:
            "Sets the number of additional storage and query capacity units that should be used by the index. You can change the capacity of the index up to 5 times per day. If you are using extra storage units, you can't reduce the storage capacity below that required to meet the storage needs for your index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-token-configurations",
          description: "The user token configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-context-policy",
          description: "The user token context policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-thesaurus",
      description: "Updates a thesaurus file associated with an index",
      options: [
        {
          name: "--id",
          description: "The identifier of the thesaurus to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated name of the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index associated with the thesaurus to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated description of the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description: "The updated role ARN of the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-s3-path",
          description:
            "Information required to find a specific file in an Amazon S3 bucket",
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
  ],
};

export default completionSpec;
