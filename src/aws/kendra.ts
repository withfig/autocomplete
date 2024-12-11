const completionSpec: Fig.Spec = {
  name: "kendra",
  description: "Amazon Kendra is a service for indexing large document sets",
  subcommands: [
    {
      name: "associate-entities-to-experience",
      description:
        "Grants users or groups in your IAM Identity Center identity source access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-list",
          description:
            "Lists users or groups in your IAM Identity Center identity source",
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
      name: "associate-personas-to-entities",
      description:
        "Defines the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--personas",
          description:
            "The personas that define the specific permissions of users or groups in your IAM Identity Center identity source. The available personas or access roles are Owner and Viewer. For more information on these personas, see Providing access to your search page",
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
      name: "batch-delete-document",
      description:
        "Removes one or more documents from an index. The documents must have been added with the BatchPutDocument API. The documents are deleted asynchronously. You can see the progress of the deletion by using Amazon Web Services CloudWatch. Any error messages related to the processing of the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of deleting your documents. Deleting documents from an index using BatchDeleteDocument could take up to an hour or more, depending on the number of documents you want to delete",
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
      name: "batch-delete-featured-results-set",
      description:
        "Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index used for featuring results",
          args: {
            name: "string",
          },
        },
        {
          name: "--featured-results-set-ids",
          description:
            "The identifiers of the featured results sets that you want to delete",
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
      name: "batch-get-document-status",
      description:
        "Returns the indexing status for one or more documents submitted with the  BatchPutDocument API. When you use the BatchPutDocument API, documents are indexed asynchronously. You can use the BatchGetDocumentStatus API to get the current status of a list of documents so that you can determine if they have been successfully indexed. You can also use the BatchGetDocumentStatus API to check the status of the  BatchDeleteDocument API. When a document is deleted from the index, Amazon Kendra returns NOT_FOUND as the status",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index to add documents to. The index ID is returned by the CreateIndex  API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-info-list",
          description:
            "A list of DocumentInfo objects that identify the documents for which to get the status. You identify the documents by their document ID and optional attributes",
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
      name: "batch-put-document",
      description:
        "Adds one or more documents to an index. The BatchPutDocument API enables you to ingest inline documents or a set of documents stored in an Amazon S3 bucket. Use this API to ingest your text and unstructured text into an index, add custom attributes to the documents, and to attach an access control list to the documents added to the index. The documents are indexed asynchronously. You can see the progress of the batch using Amazon Web Services CloudWatch. Any error messages related to processing the batch are sent to your Amazon Web Services CloudWatch log. You can also use the BatchGetDocumentStatus API to monitor the progress of indexing your documents. For an example of ingesting inline documents using Python and Java SDKs, see Adding files directly to an index",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index to add the documents to. You need to create the index first using the CreateIndex API",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket. For more information, see IAM access roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--documents",
          description:
            "One or more documents to add to the index. Documents have the following file size limits.   50 MB total size for any file   5 MB extracted text for any file   For more information, see Quotas",
          args: {
            name: "list",
          },
        },
        {
          name: "--custom-document-enrichment-configuration",
          description:
            "Configuration information for altering your document metadata and content during the document ingestion process when you use the BatchPutDocument API. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process",
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
      name: "clear-query-suggestions",
      description:
        "Clears existing query suggestions from an index. This deletes existing suggestions only, not the queries in the query log. After you clear suggestions, Amazon Kendra learns new suggestions based on new queries added to the query log from the time you cleared suggestions. If you do not see any new suggestions, then please allow Amazon Kendra to collect enough queries to learn new suggestions.  ClearQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to clear query suggestions from",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-access-control-configuration",
      description:
        "Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change. To apply your access control configuration to certain documents, you call the BatchPutDocument API with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you update the .metadata.json with the AccessControlConfigurationId and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API.  You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index to create an access control configuration for your documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-control-list",
          description:
            "Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents",
          args: {
            name: "list",
          },
        },
        {
          name: "--hierarchical-access-control-list",
          description:
            "The list of principal lists that define the hierarchy for which documents users should have access to",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create an access control configuration. Multiple calls to the CreateAccessControlConfiguration API with the same client token will create only one access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a data source connector that you want to use with an Amazon Kendra index. You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK",
      options: [
        {
          name: "--name",
          description: "A name for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to use with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of data source repository. For example, SHAREPOINT",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information to connect to your data source repository. You can't specify the Configuration parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The Configuration parameter is required for all other data sources",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "Configuration information for an Amazon Virtual Private Cloud to connect to your data source. For more information, see Configuring a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "Sets the frequency for Amazon Kendra to check the documents in your data source repository and update the index. If you don't set a schedule Amazon Kendra will not periodically update the index. You can call the StartDataSourceSyncJob API to update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. For more information, see IAM access roles for Amazon Kendra.. You can't specify the RoleArn parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception. The RoleArn parameter is required for all other data sources",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The code for a language. This allows you to support a language for all documents when creating the data source connector. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-document-enrichment-configuration",
          description:
            "Configuration information for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process",
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
      name: "create-experience",
      description:
        "Creates an Amazon Kendra experience such as a search application. For more information on creating a search application experience, including using the Python and Java SDKs, see Building a search experience with no code",
      options: [
        {
          name: "--name",
          description: "A name for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access Query API, GetQuerySuggestions API, and other required APIs. The role also must include permission to access IAM Identity Center that stores your user and group information. For more information, see IAM access roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information for your Amazon Kendra experience. This includes ContentSourceConfiguration, which specifies the data source IDs and/or FAQ IDs, and UserIdentityConfiguration, which specifies the user or group information to grant access to your Amazon Kendra experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create your Amazon Kendra experience. Multiple calls to the CreateExperience API with the same client token creates only one Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a set of frequently ask questions (FAQs) using a specified FAQ file stored in an Amazon S3 bucket. Adding FAQs to an index is an asynchronous operation. For an example of adding an FAQ to an index using Python and Java SDKs, see Using your FAQ file",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-path",
          description: "The path to the FAQ file in S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the FAQ file. For more information, see IAM access roles for Amazon Kendra",
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
            "The format of the FAQ input file. You can choose between a basic CSV format, a CSV format that includes customs attributes in a header, and a JSON format that includes custom attributes. The default format is CSV. The format must match the format of the file stored in the S3 bucket identified in the S3Path parameter. For more information, see Adding questions and answers",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a FAQ. Multiple calls to the CreateFaqRequest API with the same client token will create only one FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The code for a language. This allows you to support a language for the FAQ document. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-featured-results-set",
      description:
        "Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results. You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting Support",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index that you want to use for featuring results",
          args: {
            name: "string",
          },
        },
        {
          name: "--featured-results-set-name",
          description: "A name for the set of featured results",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the set of featured results",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a set of featured results. Multiple calls to the CreateFeaturedResultsSet API with the same client token will create only one featured results set",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "The current status of the set of featured results. When the value is ACTIVE, featured results are ready for use. You can still configure your settings before setting the status to ACTIVE. You can set the status to ACTIVE or INACTIVE using the UpdateFeaturedResultsSet API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is ACTIVE or INACTIVE",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-texts",
          description:
            "A list of queries for featuring results. For more information on the list of queries, see FeaturedResultsSet",
          args: {
            name: "list",
          },
        },
        {
          name: "--featured-documents",
          description:
            "A list of document IDs for the documents you want to feature at the top of the search results page. For more information on the list of documents, see FeaturedResultsSet",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the featured results set. You can also use tags to help control access to the featured results set. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols:_ . : / = + - @",
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
      name: "create-index",
      description:
        "Creates an Amazon Kendra index. Index creation is an asynchronous API. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the BatchPutDocument API or using one of the supported data sources. For an example of creating an index and data source using the Python SDK, see Getting started with Python SDK. For an example of creating an index and data source using the Java SDK, see Getting started with Java SDK",
      options: [
        {
          name: "--name",
          description: "A name for the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--edition",
          description:
            "The Amazon Kendra edition to use for the index. Choose DEVELOPER_EDITION for indexes intended for development, testing, or proof of concept. Use ENTERPRISE_EDITION for production. Use GEN_AI_ENTERPRISE_EDITION for creating generative AI applications. Once you set the edition for an index, it can't be changed.  The Edition parameter is optional. If you don't supply a value, the default is ENTERPRISE_EDITION. For more information on quota limits for Gen AI Enterprise Edition, Enterprise Edition, and Developer Edition indices, see Quotas",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access your Amazon CloudWatch logs and metrics. For more information, see IAM access roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption-configuration",
          description:
            "The identifier of the KMS customer managed key (CMK) that's used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric CMKs",
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
            "A token that you provide to identify the request to create an index. Multiple calls to the CreateIndex API with the same client token will create only one index",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the index. You can also use tags to help control access to the index. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-token-configurations",
          description:
            "The user token configuration.  If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use UserTokenConfigurations to configure user context policy, Amazon Kendra returns a ValidationException error",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-context-policy",
          description:
            "The user context policy.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error.   ATTRIBUTE_FILTER  All indexed content is searchable and displayable for all users. If you want to filter search results on user context, you can use the attribute filters of _user_id and _group_ids or you can provide user and group information in UserContext.   USER_TOKEN  Enables token-based user access control to filter search results on user context. All documents with no access control and all documents accessible to the user will be searchable and displayable",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-group-resolution-configuration",
          description:
            "Gets users and groups from IAM Identity Center identity source. To configure this, see UserGroupResolutionConfiguration. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, UserGroupResolutionConfiguration isn't supported",
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
      name: "create-query-suggestions-block-list",
      description:
        "Creates a block list to exlcude certain queries from suggestions. Any query that contains words or phrases specified in the block list is blocked or filtered out from being shown as a suggestion. You need to provide the file location of your block list text file in your S3 bucket. In your text file, enter each block word or phrase on a separate line. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  CreateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region. For an example of creating a block list for query suggestions using the Python SDK, see Query suggestions block list",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to create a query suggestions block list for",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A name for the block list. For example, the name 'offensive-words', which includes all offensive words that could appear in user queries and need to be blocked from suggestions",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            'A description for the block list. For example, the description "List of all offensive words that can appear in user queries and need to be blocked from suggestions."',
          args: {
            name: "string",
          },
        },
        {
          name: "--source-s3-path",
          description:
            "The S3 path to your block list text file in your S3 bucket. Each block word or phrase should be on a separate line in a text file. For information on the current quota limits for block lists, see Quotas for Amazon Kendra",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a query suggestions block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the block list text file. For more information, see IAM access roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the block list. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
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
      name: "create-thesaurus",
      description:
        "Creates a thesaurus for an index. The thesaurus contains a list of synonyms in Solr format. For an example of adding a thesaurus file to an index, see Adding custom synonyms to an index",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket that contains the thesaurus file. For more information, see IAM access roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the thesaurus. You can also use tags to help control access to the thesaurus. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-s3-path",
          description: "The path to the thesaurus file in S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create a thesaurus. Multiple calls to the CreateThesaurus API with the same client token will create only one thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-access-control-configuration",
      description:
        "Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for an access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The identifier of the access control configuration you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes an Amazon Kendra data source connector. An exception is not thrown if the data source is already being deleted. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING. For more information, see Deleting Data Sources. Deleting an entire data source or re-syncing your index after deleting specific documents from a data source could take up to an hour or more, depending on the number of documents you want to delete",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the data source connector you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-experience",
      description:
        "Deletes your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description:
            "The identifier of your Amazon Kendra experience you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Removes a FAQ from an index",
      options: [
        {
          name: "--id",
          description: "The identifier of the FAQ you want to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index for the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes an Amazon Kendra index. An exception is not thrown if the index is already being deleted. While the index is being deleted, the Status field returned by a call to the DescribeIndex API is set to DELETING",
      options: [
        {
          name: "--id",
          description: "The identifier of the index you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-principal-mapping",
      description:
        'Deletes a group so that all users that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their search results. If you want to delete or replace users or sub groups of a group, you need to use the PutPrincipalMapping operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutPrincipalMapping. You can update your internal list of users or sub groups and input this list when calling PutPrincipalMapping.  DeletePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region',
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to delete a group from",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            'The identifier of the data source you want to delete a group from. A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source',
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description: "The identifier of the group you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--ordering-id",
          description:
            "The timestamp identifier you specify to ensure Amazon Kendra does not override the latest DELETE action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action. The ordering ID can be the Unix time of the last update you made to a group members list. You would then provide this list when calling PutPrincipalMapping. This ensures your DELETE action for that updated group with the latest members list doesn't get overwritten by earlier DELETE actions for the same group which are yet to be processed. The default ordering ID is the current Unix time in milliseconds that the action was received by Amazon Kendra",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-query-suggestions-block-list",
      description:
        "Deletes a block list used for query suggestions for an index. A deleted block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to add back the queries that were previously blocked.  DeleteQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identifier of the block list you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes an Amazon Kendra thesaurus",
      options: [
        {
          name: "--id",
          description: "The identifier of the thesaurus you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-access-control-configuration",
      description:
        "Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for an access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The identifier of the access control configuration you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Gets information about an Amazon Kendra data source connector",
      options: [
        {
          name: "--id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-experience",
      description:
        "Gets information about your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description:
            "The identifier of your Amazon Kendra experience you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets information about a FAQ",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the FAQ you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index for the FAQ",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-featured-results-set",
      description:
        "Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index used for featuring results",
          args: {
            name: "string",
          },
        },
        {
          name: "--featured-results-set-id",
          description:
            "The identifier of the set of featured results that you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets information about an Amazon Kendra index",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the index you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-principal-mapping",
      description:
        "Describes the processing of PUT and DELETE actions for mapping users to their groups. This includes information on the status of actions currently processing or yet to be processed, when actions were last updated, when actions were received by Amazon Kendra, the latest action that should process and apply after other actions, and useful error messages if an action could not be processed.  DescribePrincipalMapping is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index required to check the processing of PUT and DELETE actions for mapping users to their groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The identifier of the data source to check the processing of PUT and DELETE actions for mapping users to their groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier of the group required to check the processing of PUT and DELETE actions for mapping users to their groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-query-suggestions-block-list",
      description:
        "Gets information about a block list used for query suggestions for an index. This is used to check the current settings that are applied to a block list.  DescribeQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The identifier of the block list you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-query-suggestions-config",
      description:
        "Gets information on the settings of query suggestions for an index. This is used to check the current settings applied to query suggestions.  DescribeQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index with query suggestions that you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets information about an Amazon Kendra thesaurus",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the thesaurus you want to get information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-entities-from-experience",
      description:
        "Prevents users or groups in your IAM Identity Center identity source from accessing your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-list",
          description:
            "Lists users or groups in your IAM Identity Center identity source",
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
      name: "disassociate-personas-from-entities",
      description:
        "Removes the specific permissions of users or groups in your IAM Identity Center identity source with access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-ids",
          description:
            "The identifiers of users or groups in your IAM Identity Center identity source. For example, user IDs could be user emails",
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
      name: "get-query-suggestions",
      description:
        "Fetches the queries that are suggested to your users.  GetQuerySuggestions is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to get query suggestions from",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description:
            "The text of a user's query to generate query suggestions. A query is suggested if the query prefix matches what a user starts to type as their query. Amazon Kendra does not show any suggestions if a user types fewer than two characters or more than 60 characters. A query must also have at least one search result and contain at least one word of more than four characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-suggestions-count",
          description:
            "The maximum number of query suggestions you want to show to your users",
          args: {
            name: "integer",
          },
        },
        {
          name: "--suggestion-types",
          description:
            "The suggestions type to base query suggestions on. The suggestion types are query history or document fields/attributes. You can set one type or the other. If you set query history as your suggestions type, Amazon Kendra suggests queries relevant to your users based on popular queries in the query history. If you set document fields/attributes as your suggestions type, Amazon Kendra suggests queries relevant to your users based on the contents of document fields",
          args: {
            name: "list",
          },
        },
        {
          name: "--attribute-suggestions-config",
          description:
            "Configuration information for the document fields/attributes that you want to base query suggestions on",
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
      name: "get-snapshots",
      description:
        "Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index to get search metrics data",
          args: {
            name: "string",
          },
        },
        {
          name: "--interval",
          description:
            "The time interval or time window to get search metrics data. The time interval uses the time zone of your index. You can view data in the following time windows:    THIS_WEEK: The current week, starting on the Sunday and ending on the day before the current date.    ONE_WEEK_AGO: The previous week, starting on the Sunday and ending on the following Saturday.    TWO_WEEKS_AGO: The week before the previous week, starting on the Sunday and ending on the following Saturday.    THIS_MONTH: The current month, starting on the first day of the month and ending on the day before the current date.    ONE_MONTH_AGO: The previous month, starting on the first day of the month and ending on the last day of the month.    TWO_MONTHS_AGO: The month before the previous month, starting on the first day of the month and ending on last day of the month",
          args: {
            name: "string",
          },
        },
        {
          name: "--metric-type",
          description:
            "The metric you want to retrieve. You can specify only one metric per call. For more information about the metrics you can view, see Gaining insights with search analytics",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of search metrics data",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of returned data for the metric",
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
      name: "list-access-control-configurations",
      description:
        "Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for the access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there's more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of access control configurations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of access control configurations to return",
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
      name: "list-data-source-sync-jobs",
      description:
        "Gets statistics about synchronizing a data source connector",
      options: [
        {
          name: "--id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of jobs",
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
            "Only returns synchronization jobs with the Status field equal to the specified status",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Lists the data source connectors that you have created",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index used with one or more data source connectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of data source connectors",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of data source connectors to return",
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
      name: "list-entity-personas",
      description:
        "Lists specific permissions of users and groups with access to your Amazon Kendra experience",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of returned users or groups",
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
      name: "list-experience-entities",
      description:
        "Lists users or groups in your IAM Identity Center identity source that are granted access to your Amazon Kendra experience. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description: "The identifier of your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of users or groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-experiences",
      description:
        "Lists one or more Amazon Kendra experiences. You can create an Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Kendra experiences",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of returned Amazon Kendra experiences",
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
      description: "Gets a list of FAQs associated with an index",
      options: [
        {
          name: "--index-id",
          description: "The index for the FAQs",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of FAQs",
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
      name: "list-featured-results-sets",
      description:
        "Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index used for featuring results",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response is truncated, Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of featured results sets",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of featured results sets to return",
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
      name: "list-groups-older-than-ordering-id",
      description:
        "Provides a list of groups that are mapped to users before a given ordering or timestamp identifier.  ListGroupsOlderThanOrderingId is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for getting a list of groups mapped to users before a given ordering or timestamp identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The identifier of the data source for getting a list of groups mapped to users before a given ordering timestamp identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--ordering-id",
          description:
            "The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups",
          args: {
            name: "long",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users before a given ordering or timestamp identifier",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of returned groups that are mapped to users before a given ordering or timestamp identifier",
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
      description: "Lists the Amazon Kendra indexes that you created",
      options: [
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of indexes",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of indices to return",
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
      name: "list-query-suggestions-block-lists",
      description:
        "Lists the block lists used for query suggestions for an index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra.  ListQuerySuggestionsBlockLists is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for a list of all block lists that exist for that index. For information on the current quota limits for block lists, see Quotas for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Kendra returns a pagination token in the response. You can use this pagination token to retrieve the next set of block lists (BlockListSummaryItems)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of block lists to return",
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
        "Gets a list of tags associated with a resource. Indexes, FAQs, data sources, and other resources can have tags associated with them",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, data source, or other resource to get a list of tags for. For example, the ARN of an index is constructed as follows: arn:aws:kendra:your-region:your-account-id:index/index-id For information on how to construct an ARN for all types of Amazon Kendra resources, see Resource types",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Lists the thesauri for an index",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index with one or more thesauri",
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
      name: "put-principal-mapping",
      description:
        'Maps users to their groups so that you only need to provide the user ID when you issue the query. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their search results. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. For more information, see Filtering on user context. If more than five PUT actions for a group are currently processing, a validation exception is thrown',
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to map users to their groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            'The identifier of the data source you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce',
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier of the group you want to map its users to",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-members",
          description:
            'The list that contains your users that belong the same group. This can include sub groups that belong to a group. For example, the group "Company A" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing". If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000',
          args: {
            name: "structure",
          },
        },
        {
          name: "--ordering-id",
          description:
            "The timestamp identifier you specify to ensure Amazon Kendra doesn't override the latest PUT action with previous actions. The highest number ID, which is the ordering ID, is the latest action you want to process and apply on top of other actions with lower number IDs. This prevents previous actions with lower number IDs from possibly overriding the latest action. The ordering ID can be the Unix time of the last update you made to a group members list. You would then provide this list when calling PutPrincipalMapping. This ensures your PUT action for that updated group with the latest members list doesn't get overwritten by earlier PUT actions for the same group which are yet to be processed. The default ordering ID is the current Unix time in milliseconds that the action was received by Amazon Kendra",
          args: {
            name: "long",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains your list of users that belong to a group. For more information, see IAM roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Searches an index given an input query.  If you are working with large language models (LLMs) or implementing retrieval augmented generation (RAG) systems, you can use Amazon Kendra's Retrieve API, which can return longer semantically relevant passages. We recommend using the Retrieve API instead of filing a service limit increase to increase the Query API document excerpt length.  You can configure boosting or relevance tuning at the query level to override boosting at the index level, filter based on document fields/attributes and faceted search, and filter based on the user or their group access to documents. You can also include certain fields in the response that might provide useful additional information. A query response contains three types of results.   Relevant suggested answers. The answers can be either a text excerpt or table excerpt. The answer can be highlighted in the excerpt.   Matching FAQs or questions-answer from your FAQ file.   Relevant documents. This result type includes an excerpt of the document with the document title. The searched terms can be highlighted in the excerpt.   You can specify that the query return only one type of result using the QueryResultTypeFilter parameter. Each query returns the 100 most relevant results. If you filter result type to only question-answers, a maximum of four results are returned. If you filter result type to only answers, a maximum of three results are returned.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description:
            "The input query text for the search. Amazon Kendra truncates queries at 30 token words, which excludes punctuation and stop words. Truncation still applies if you use Boolean or more advanced, complex queries. For example, Timeoff AND October AND Category:HR is counted as 3 tokens: timeoff, october, hr. For more information, see Searching with advanced query syntax in the Amazon Kendra Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-filter",
          description:
            "Filters search results by document fields/attributes. You can only provide one attribute filter; however, the AndAllFilters, NotFilter, and OrAllFilters parameters contain a list of other filters. The AttributeFilter parameter means you can create a set of filtering rules that a document must satisfy to be included in the query results.  For Amazon Kendra Gen AI Enterprise Edition indices use AttributeFilter to enable document filtering for end users using _email_id or include public documents (_email_id=null)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--facets",
          description:
            "An array of documents fields/attributes for faceted search. Amazon Kendra returns a count for each field key specified. This helps your users narrow their search",
          args: {
            name: "list",
          },
        },
        {
          name: "--requested-document-attributes",
          description:
            "An array of document fields/attributes to include in the response. You can limit the response to include certain document fields. By default, all document attributes are included in the response",
          args: {
            name: "list",
          },
        },
        {
          name: "--query-result-type-filter",
          description:
            "Sets the type of query result or response. Only results for the specified type are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-relevance-override-configurations",
          description:
            "Overrides relevance tuning configurations of fields/attributes set at the index level. If you use this API to override the relevance tuning configured at the index level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning. If there is relevance tuning configured for fields at the index level, and you use this API to override only some of these fields, then for the fields you did not override, the importance is set to 1",
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
          name: "--sorting-configurations",
          description:
            "Provides configuration information to determine how the results of a query are sorted. You can set upto 3 fields that Amazon Kendra should sort the results on, and specify whether the results should be sorted in ascending or descending order. The sort field quota can be increased. If you don't provide a sorting configuration, the results are sorted by the relevance that Amazon Kendra determines for the result. In the case of ties in sorting the results, the results are sorted by relevance",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-context",
          description: "The user context token or user and group information",
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
          name: "--spell-correction-configuration",
          description: "Enables suggested spell corrections for queries",
          args: {
            name: "structure",
          },
        },
        {
          name: "--collapse-configuration",
          description:
            "Provides configuration to determine how to group results by document attribute value, and how to display them (collapsed or expanded) under a designated primary document for each group",
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
      name: "retrieve",
      description:
        "Retrieves relevant passages or text excerpts given an input query. This API is similar to the Query API. However, by default, the Query API only returns excerpt passages of up to 100 token words. With the Retrieve API, you can retrieve longer passages of up to 200 token words and up to 100 semantically relevant passages. This doesn't include question-answer or FAQ type responses from your index. The passages are text excerpts that can be semantically extracted from multiple documents and multiple parts of the same document. If in extreme cases your documents produce zero passages using the Retrieve API, you can alternatively use the Query API and its types of responses. You can also do the following:   Override boosting at the index level   Filter based on document fields or attributes   Filter based on the user or their group access to documents   View the confidence score bucket for a retrieved passage result. The confidence bucket provides a relative ranking that indicates how confident Amazon Kendra is that the response is relevant to the query.  Confidence score buckets are currently available only for English.    You can also include certain fields in the response that might provide useful additional information. The Retrieve API shares the number of query capacity units that you set for your index. For more information on what's included in a single capacity unit and the default base capacity for an index, see Adjusting capacity.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index to retrieve relevant passages for the search",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description:
            "The input query text to retrieve relevant passages for the search. Amazon Kendra truncates queries at 30 token words, which excludes punctuation and stop words. Truncation still applies if you use Boolean or more advanced, complex queries. For example, Timeoff AND October AND Category:HR is counted as 3 tokens: timeoff, october, hr. For more information, see Searching with advanced query syntax in the Amazon Kendra Developer Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-filter",
          description:
            "Filters search results by document fields/attributes. You can only provide one attribute filter; however, the AndAllFilters, NotFilter, and OrAllFilters parameters contain a list of other filters. The AttributeFilter parameter means you can create a set of filtering rules that a document must satisfy to be included in the query results.  For Amazon Kendra Gen AI Enterprise Edition indices use AttributeFilter to enable document filtering for end users using _email_id or include public documents (_email_id=null)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--requested-document-attributes",
          description:
            "A list of document fields/attributes to include in the response. You can limit the response to include certain document fields. By default, all document fields are included in the response",
          args: {
            name: "list",
          },
        },
        {
          name: "--document-relevance-override-configurations",
          description:
            "Overrides relevance tuning configurations of fields/attributes set at the index level. If you use this API to override the relevance tuning configured at the index level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning. If there is relevance tuning configured for fields at the index level, and you use this API to override only some of these fields, then for the fields you did not override, the importance is set to 1",
          args: {
            name: "list",
          },
        },
        {
          name: "--page-number",
          description:
            "Retrieved relevant passages are returned in pages the size of the PageSize parameter. By default, Amazon Kendra returns the first page of results. Use this parameter to get result pages after the first one",
          args: {
            name: "integer",
          },
        },
        {
          name: "--page-size",
          description:
            "Sets the number of retrieved relevant passages that are returned in each page of results. The default page size is 10. The maximum number of results returned is 100. If you ask for more than 100 results, only 100 are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--user-context",
          description: "The user context token or user and group information",
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
      name: "start-data-source-sync-job",
      description:
        "Starts a synchronization job for a data source connector. If a synchronization job is already in progress, Amazon Kendra returns a ResourceInUseException exception. Re-syncing your data source with your index after modifying, adding, or deleting documents from your data source respository could take up to an hour or more, depending on the number of documents to sync",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the data source connector to synchronize",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Stops a synchronization job that is currently running. You can't stop a scheduled synchronization job",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the data source connector for which to stop the synchronization jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Enables you to provide feedback to Amazon Kendra to improve the performance of your index.  SubmitFeedback is currently not supported in the Amazon Web Services GovCloud (US-West) region",
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
            "The identifier of the specific query for which you are submitting feedback. The query ID is returned in the response to the Query API",
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
        "Adds the specified tag to the specified index, FAQ, data source, or other resource. If the tag already exists, the existing value is replaced with the new value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, data source, or other resource to add a tag. For example, the ARN of an index is constructed as follows: arn:aws:kendra:your-region:your-account-id:index/index-id For information on how to construct an ARN for all types of Amazon Kendra resources, see Resource types",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag keys to add to the index, FAQ, data source, or other resource. If a tag already exists, the existing value is replaced with the new value",
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
        "Removes a tag from an index, FAQ, data source, or other resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the index, FAQ, data source, or other resource to remove a tag. For example, the ARN of an index is constructed as follows: arn:aws:kendra:your-region:your-account-id:index/index-id For information on how to construct an ARN for all types of Amazon Kendra resources, see Resource types",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the index, FAQ, data source, or other resource. If a tag key doesn't exist for the resource, it is ignored",
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
      name: "update-access-control-configuration",
      description:
        "Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change. You call the BatchPutDocument API to apply the updated access control configuration, with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you synchronize your data source to apply the AccessControlConfigurationId in the .metadata.json file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API.  You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index for an access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description:
            "The identifier of the access control configuration you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for the access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the access control configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--access-control-list",
          description:
            "Information you want to update on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents",
          args: {
            name: "list",
          },
        },
        {
          name: "--hierarchical-access-control-list",
          description:
            "The updated list of principal lists that define the hierarchy for which documents users should have access to",
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
      description: "Updates an Amazon Kendra data source connector",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the data source connector you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information you want to update for the data source connector",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "Configuration information for an Amazon Virtual Private Cloud to connect to your data source. For more information, see Configuring a VPC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A new description for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description:
            "The sync schedule you want to update for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources. For more information, see IAM roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The code for a language you want to update for the data source connector. This allows you to support a language for all documents when updating the data source. English is supported by default. For more information on supported languages, including their codes, see Adding documents in languages other than English",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-document-enrichment-configuration",
          description:
            "Configuration information you want to update for altering document metadata and content during the document ingestion process. For more information on how to create, modify and delete document metadata, or make other content alterations when you ingest documents into Amazon Kendra, see Customizing document metadata during the ingestion process",
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
      name: "update-experience",
      description:
        "Updates your Amazon Kendra experience such as a search application. For more information on creating a search application experience, see Building a search experience with no code",
      options: [
        {
          name: "--id",
          description:
            "The identifier of your Amazon Kendra experience you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the Query API, QuerySuggestions API, SubmitFeedback API, and IAM Identity Center that stores your users and groups information. For more information, see IAM roles for Amazon Kendra",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information you want to update for your Amazon Kendra experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A new description for your Amazon Kendra experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-featured-results-set",
      description:
        "Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index used for featuring results",
          args: {
            name: "string",
          },
        },
        {
          name: "--featured-results-set-id",
          description:
            "The identifier of the set of featured results that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--featured-results-set-name",
          description: "A new name for the set of featured results",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the set of featured results",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "You can set the status to ACTIVE or INACTIVE. When the value is ACTIVE, featured results are ready for use. You can still configure your settings before setting the status to ACTIVE. The queries you specify for featured results must be unique per featured results set for each index, whether the status is ACTIVE or INACTIVE",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-texts",
          description:
            "A list of queries for featuring results. For more information on the list of queries, see FeaturedResultsSet",
          args: {
            name: "list",
          },
        },
        {
          name: "--featured-documents",
          description:
            "A list of document IDs for the documents you want to feature at the top of the search results page. For more information on the list of featured documents, see FeaturedResultsSet",
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
      name: "update-index",
      description: "Updates an Amazon Kendra index",
      options: [
        {
          name: "--id",
          description: "The identifier of the index you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "An Identity and Access Management (IAM) role that gives Amazon Kendra permission to access Amazon CloudWatch logs and metrics",
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
          description:
            "The document metadata configuration you want to update for the index. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document",
          args: {
            name: "list",
          },
        },
        {
          name: "--capacity-units",
          description:
            "Sets the number of additional document storage and query capacity units that should be used by the index. You can change the capacity of the index up to 5 times per day, or make 5 API calls. If you are using extra storage units, you can't reduce the storage capacity below what is required to meet the storage needs for your index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-token-configurations",
          description:
            "The user token configuration.  If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use UserTokenConfigurations to configure user context policy, Amazon Kendra returns a ValidationException error",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-context-policy",
          description:
            "The user context policy.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, you can only use ATTRIBUTE_FILTER to filter search results by user context. If you're using an Amazon Kendra Gen AI Enterprise Edition index and you try to use USER_TOKEN to configure user context policy, Amazon Kendra returns a ValidationException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-group-resolution-configuration",
          description:
            "Gets users and groups from IAM Identity Center identity source. To configure this, see UserGroupResolutionConfiguration. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.  If you're using an Amazon Kendra Gen AI Enterprise Edition index, UserGroupResolutionConfiguration isn't supported",
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
      name: "update-query-suggestions-block-list",
      description:
        "Updates a block list used for query suggestions for an index. Updates to a block list might not take effect right away. Amazon Kendra needs to refresh the entire suggestions list to apply any updates to the block list. Other changes not related to the block list apply immediately. If a block list is updating, then you need to wait for the first update to finish before submitting another update. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update.  UpdateQuerySuggestionsBlockList is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description: "The identifier of the index for the block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The identifier of the block list you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for the block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the block list",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-s3-path",
          description:
            "The S3 path where your block list text file sits in S3. If you update your block list and provide the same path to the block list text file in S3, then Amazon Kendra reloads the file to refresh the block list. Amazon Kendra does not automatically refresh your block list. You need to call the UpdateQuerySuggestionsBlockList API to refresh you block list. If you update your block list, then Amazon Kendra asynchronously refreshes all query suggestions with the latest content in the S3 file. This means changes might not take effect immediately",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The IAM (Identity and Access Management) role used to access the block list text file in S3",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-query-suggestions-config",
      description:
        "Updates the settings of query suggestions for an index. Amazon Kendra supports partial updates, so you only need to provide the fields you want to update. If an update is currently processing, you need to wait for the update to finish before making another update. Updates to query suggestions settings might not take effect right away. The time for your updated settings to take effect depends on the updates made and the number of search queries in your index. You can still enable/disable query suggestions at any time.  UpdateQuerySuggestionsConfig is currently not supported in the Amazon Web Services GovCloud (US-West) region",
      options: [
        {
          name: "--index-id",
          description:
            "The identifier of the index with query suggestions you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "Set the mode to ENABLED or LEARN_ONLY. By default, Amazon Kendra enables query suggestions. LEARN_ONLY mode allows you to turn off query suggestions. You can to update this at any time. In LEARN_ONLY mode, Amazon Kendra continues to learn from new queries to keep suggestions up to date for when you are ready to switch to ENABLED mode again",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-log-look-back-window-in-days",
          description:
            "How recent your queries are in your query log time window. The time window is the number of days from current day to past days. By default, Amazon Kendra sets this to 180",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-queries-without-user-information",
          description:
            "TRUE to include queries without user information (i.e. all queries, irrespective of the user), otherwise FALSE to only include queries with user information. If you pass user information to Amazon Kendra along with the queries, you can set this flag to FALSE and instruct Amazon Kendra to only consider queries with user information. If you set to FALSE, Amazon Kendra only considers queries searched at least MinimumQueryCount times across MinimumNumberOfQueryingUsers unique users for suggestions. If you set to TRUE, Amazon Kendra ignores all user information and learns from all queries",
        },
        {
          name: "--no-include-queries-without-user-information",
          description:
            "TRUE to include queries without user information (i.e. all queries, irrespective of the user), otherwise FALSE to only include queries with user information. If you pass user information to Amazon Kendra along with the queries, you can set this flag to FALSE and instruct Amazon Kendra to only consider queries with user information. If you set to FALSE, Amazon Kendra only considers queries searched at least MinimumQueryCount times across MinimumNumberOfQueryingUsers unique users for suggestions. If you set to TRUE, Amazon Kendra ignores all user information and learns from all queries",
        },
        {
          name: "--minimum-number-of-querying-users",
          description:
            "The minimum number of unique users who must search a query in order for the query to be eligible to suggest to your users. Increasing this number might decrease the number of suggestions. However, this ensures a query is searched by many users and is truly popular to suggest to users. How you tune this setting depends on your specific needs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--minimum-query-count",
          description:
            "The the minimum number of times a query must be searched in order to be eligible to suggest to your users. Decreasing this number increases the number of suggestions. However, this affects the quality of suggestions as it sets a low bar for a query to be considered popular to suggest to users. How you tune this setting depends on your specific needs",
          args: {
            name: "integer",
          },
        },
        {
          name: "--attribute-suggestions-config",
          description:
            "Configuration information for the document fields/attributes that you want to base query suggestions on",
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
      name: "update-thesaurus",
      description: "Updates a thesaurus for an index",
      options: [
        {
          name: "--id",
          description: "The identifier of the thesaurus you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A new name for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A new description for the thesaurus",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "An IAM role that gives Amazon Kendra permissions to access thesaurus file specified in SourceS3Path",
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
