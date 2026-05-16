const completionSpec: Fig.Spec = {
  name: "qbusiness",
  description:
    "This is the Amazon Q Business API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the  Amazon Q Business User Guide . For an overview of the Amazon Q Business APIs, see Overview of Amazon Q Business API operations. For information about the IAM access control permissions you need to use this API, see IAM roles for Amazon Q Business in the Amazon Q Business User Guide. The following resources provide additional information about using the Amazon Q Business API:     Setting up for Amazon Q Business       Amazon Q Business CLI Reference       Amazon Web Services General Reference",
  subcommands: [
    {
      name: "associate-permission",
      description:
        "Adds or updates a permission policy for a Q Business application, allowing cross-account access for an ISV. This operation creates a new policy statement for the specified Q Business application. The policy statement defines the IAM actions that the ISV is allowed to perform on the Q Business application's resources",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-id",
          description: "A unique identifier for the policy statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description:
            "The list of Q Business actions that the ISV is allowed to perform",
          args: {
            name: "list",
          },
        },
        {
          name: "--principal",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for the ISV that is being granted permission",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Asynchronously deletes one or more documents added using the BatchPutDocument API from an Amazon Q Business index. You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the Amazon Q Business index that contains the documents to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--documents",
          description: "Documents deleted from the Amazon Q Business index",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-source-sync-id",
          description:
            "The identifier of the data source sync during which the documents were deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Adds one or more documents to an Amazon Q Business index. You use this API to:   ingest your structured and unstructured documents and documents stored in an Amazon S3 bucket into an Amazon Q Business index.   add custom attributes to documents in an Amazon Q Business index.   attach an access control list to the documents added to an Amazon Q Business index.   You can see the progress of the deletion, and any error messages related to the process, by using CloudWatch",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the Amazon Q Business index to add the documents to",
          args: {
            name: "string",
          },
        },
        {
          name: "--documents",
          description: "One or more documents to add to the index",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access your S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-sync-id",
          description:
            "The identifier of the data source sync during which the documents were added",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "chat-sync",
      description:
        "Starts or continues a non-streaming Amazon Q Business conversation",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application linked to the Amazon Q Business conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user attached to the chat input",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-groups",
          description:
            "The group names that a user associated with the chat input belongs to",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-message",
          description: "A end user message in a conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachments",
          description:
            "A list of files uploaded directly during chat. You can upload a maximum of 5 files of upto 10 MB each",
          args: {
            name: "list",
          },
        },
        {
          name: "--action-execution",
          description:
            "A request from an end user to perform an Amazon Q Business plugin action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auth-challenge-response",
          description:
            "An authentication verification event response by a third party authentication server to Amazon Q Business",
          args: {
            name: "structure",
          },
        },
        {
          name: "--conversation-id",
          description: "The identifier of the Amazon Q Business conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-message-id",
          description:
            "The identifier of the previous system message in a conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-filter",
          description:
            "Enables filtering of Amazon Q Business web experience responses based on document attributes or metadata fields",
          args: {
            name: "structure",
          },
        },
        {
          name: "--chat-mode",
          description:
            'The chatMode parameter determines the chat modes available to Amazon Q Business users:    RETRIEVAL_MODE - If you choose this mode, Amazon Q generates responses solely from the data sources connected and indexed by the application. If an answer is not found in the data sources or there are no data sources available, Amazon Q will respond with a "No Answer Found" message, unless LLM knowledge has been enabled. In that case, Amazon Q will generate a response from the LLM knowledge    CREATOR_MODE - By selecting this mode, you can choose to generate responses only from the LLM knowledge. You can also attach files and have Amazon Q generate a response based on the data in those files. If the attached files do not contain an answer for the query, Amazon Q will automatically fall back to generating a response from the LLM knowledge.    PLUGIN_MODE - By selecting this mode, users can choose to use plugins in chat to get their responses.    If none of the modes are selected, Amazon Q will only respond using the information from the attached files.  For more information, see Admin controls and guardrails, Plugins, and Response sources',
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-mode-configuration",
          description:
            "The chat mode configuration for an Amazon Q Business application",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description: "A token that you provide to identify a chat request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-application",
      description:
        "Creates an Amazon Q Business application.  There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users.  An Amazon Q Apps service linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see  Using service-linked roles for Q Apps. When you create an application, Amazon Q Business may securely transmit data for processing from your selected Amazon Web Services region, but within your geography. For more information, see Cross region inference in Amazon Q Business",
      options: [
        {
          name: "--display-name",
          description: "A name for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics. If this property is not specified, Amazon Q Business will create a service linked role (SLR) and use it as the application's role",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "The authentication type being used by a Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-identity-provider-arn",
          description:
            "The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for\u2014or connecting to\u2014your Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-ids-for-oidc",
          description: "The OIDC client ID for a Amazon Q Business application",
          args: {
            name: "list",
          },
        },
        {
          name: "--description",
          description: "A description for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-configuration",
          description:
            "The identifier of the KMS key that is used to encrypt your data. Amazon Q Business doesn't support asymmetric keys",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize your Amazon Q Business application. You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create your Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachments-configuration",
          description:
            "An option to allow end users to upload files directly during chat",
          args: {
            name: "structure",
          },
        },
        {
          name: "--q-apps-configuration",
          description:
            "An option to allow end users to create and use Amazon Q Apps in the web experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--personalization-configuration",
          description:
            "Configuration information about chat response personalization. For more information, see Personalizing chat responses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--quick-sight-configuration",
          description:
            "The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight for authentication. This configuration is required if your application uses QuickSight as the identity provider. For more information, see Creating an Amazon QuickSight integrated application",
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
      name: "create-data-accessor",
      description:
        "Creates a new data accessor for an ISV to access data from a Q Business application. The data accessor is an entity that represents the ISV's access to the Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an AWS IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Q Business application",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "The Amazon Resource Name (ARN) of the IAM role for the ISV that will be accessing the data",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-configurations",
          description:
            "A list of action configurations specifying the allowed actions and any associated filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier you provide to ensure idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A friendly name for the data accessor",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to associate with the data accessor",
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
        "Creates a data source connector for an Amazon Q Business application.  CreateDataSource is a synchronous operation. The operation returns 200 if the data source was successfully created. Otherwise, an exception is raised",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application the data source will be attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index that you want to use with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A name for the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Configuration information to connect your data source repository to Amazon Q Business. Use this parameter to provide a JSON schema with configuration information specific to your data source connector. Each data source has a JSON schema provided by Amazon Q Business that you must use. For example, the Amazon S3 and Web Crawler connectors require the following JSON schemas:    Amazon S3 JSON schema     Web Crawler JSON schema    You can find configuration templates for your specific data source using the following steps:   Navigate to the Supported connectors page in the Amazon Q Business User Guide, and select the data source of your choice.   Then, from your specific data source connector page, select Using the API. You will find the JSON schema for your data source, including parameter descriptions, in this section",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "Configuration information for an Amazon VPC (Virtual Private Cloud) to connect to your data source. For more information, see Using Amazon VPC with Amazon Q Business connectors",
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
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the data source connector. You can also use tags to help control access to the data source connector. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--sync-schedule",
          description:
            "Sets the frequency for Amazon Q Business to check the documents in your data source repository and update your index. If you don't set a schedule, Amazon Q Business won't periodically update the index. Specify a cron- format schedule string or an empty string to indicate that the index is updated on demand. You can't specify the Schedule parameter when the Type parameter is set to CUSTOM. If you do, you receive a ValidationException exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token you provide to identify a request to create a data source connector. Multiple calls to the CreateDataSource API with the same client token will create only one data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-enrichment-configuration",
          description:
            "Provides the configuration information for altering document metadata and content during the document ingestion process. For more information, see Custom document enrichment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--media-extraction-configuration",
          description:
            "The configuration for extracting information from media in documents during ingestion",
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
      name: "create-index",
      description:
        "Creates an Amazon Q Business index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the  BatchPutDocument  API or the  CreateDataSource  API",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application using the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A name for the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The index type that's suitable for your needs. For more information on what's included in each type of index, see Amazon Q Business tiers",
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
          name: "--capacity-configuration",
          description:
            "The capacity units you want to provision for your index. You can add and remove capacity to fit your usage needs",
          args: {
            name: "structure",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-plugin",
      description: "Creates an Amazon Q Business plugin",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application that will contain the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A the name for your plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of plugin you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--auth-configuration",
          description:
            "Authentication configuration information for an Amazon Q Business plugin",
          args: {
            name: "structure",
          },
        },
        {
          name: "--server-url",
          description: "The source URL used for plugin configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-plugin-configuration",
          description: "Contains configuration for a custom plugin",
          args: {
            name: "structure",
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
            "A token that you provide to identify the request to create your Amazon Q Business plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-retriever",
      description: "Adds a retriever to your Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of your Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of retriever you are using",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The name of your retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Provides information on how the retriever used for your Amazon Q Business application is configured",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of an IAM role used by Amazon Q Business to access the basic authentication credentials stored in a Secrets Manager secret",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create your Amazon Q Business application retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize the retriever. You can also use tags to help control access to the retriever. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
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
      name: "create-user",
      description:
        "Creates a universally unique identifier (UUID) mapped to a list of local user ids within an application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application for which the user mapping will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user emails attached to a user mapping",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-aliases",
          description: "The list of user aliases in the mapping",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to create your Amazon Q Business user mapping",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-web-experience",
      description: "Creates an Amazon Q Business web experience",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description: "The title for your Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--subtitle",
          description:
            "A subtitle to personalize your Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--welcome-message",
          description:
            "The customized welcome message for end users of an Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-prompts-control-mode",
          description:
            "Determines whether sample prompts are enabled in the web experience for an end user",
          args: {
            name: "string",
          },
        },
        {
          name: "--origins",
          description:
            "Sets the website domain origins that are allowed to embed the Amazon Q Business web experience.  The <i>domain origin</i> refers to the base URL for accessing a website including the protocol (<code>http/https</code>), the domain name, and the port number (if specified). </p> <note> <p>You must only submit a <i>base URL</i> and not a full path. For example, <code>https://docs.aws.amazon.com</code>.</p> </note>",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the service role attached to your web experience.  You must provide this value if you're using IAM Identity Center to manage end user access to your application. If you're using legacy identity management to manage user access, you don't need to provide this value",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of key-value pairs that identify or categorize your Amazon Q Business web experience. You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A token you provide to identify a request to create an Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-configuration",
          description:
            "Information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--browser-extension-configuration",
          description:
            "The browser extension configuration for an Amazon Q Business web experience.   For Amazon Q Business application using external OIDC-compliant identity providers (IdPs). The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application. For more information, see Configure external OIDC identity provider for your browser extensions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--customization-configuration",
          description:
            "Sets the custom logo, favicon, font, and color used in the Amazon Q web experience",
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
      name: "delete-application",
      description: "Deletes an Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-chat-controls-configuration",
      description:
        "Deletes chat controls configured for an existing Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application the chat controls have been configured for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-conversation",
      description: "Deletes an Amazon Q Business web experience conversation",
      options: [
        {
          name: "--conversation-id",
          description:
            "The identifier of the Amazon Q Business web experience conversation being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application associated with the conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user who is deleting the conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-accessor",
      description:
        "Deletes a specified data accessor. This operation permanently removes the data accessor and its associated AWS IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-accessor-id",
          description: "The unique identifier of the data accessor to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Deletes an Amazon Q Business data source connector. While the data source is being deleted, the Status field returned by a call to the DescribeDataSource API is set to DELETING",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application used with the data source connector",
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
          name: "--data-source-id",
          description:
            "The identifier of the data source connector that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-group",
      description:
        'Deletes a group so that all users and sub groups that belong to the group can no longer access documents only available to that group. For example, after deleting the group "Summer Interns", all interns who belonged to that group no longer see intern-only documents in their chat results.  If you want to delete, update, or replace users or sub groups of a group, you need to use the PutGroup operation. For example, if a user in the group "Engineering" leaves the engineering team and another user takes their place, you provide an updated list of users or sub groups that belong to the "Engineering" group when calling PutGroup',
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application in which the group mapping belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index you want to delete the group from",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            'The identifier of the data source linked to the group A group can be tied to multiple data sources. You can delete a group from accessing documents in a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. You want to delete "Research" and "Engineering" groups from Salesforce, so that these groups cannot access customer-related documents stored in Salesforce. Only "Sales and Marketing" should access documents in the Salesforce data source',
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes an Amazon Q Business index",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application the Amazon Q Business index is linked to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-plugin",
      description: "Deletes an Amazon Q Business plugin",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier the application attached to the Amazon Q Business plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugin-id",
          description: "The identifier of the plugin being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-retriever",
      description:
        "Deletes the retriever used by an Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application using the retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--retriever-id",
          description: "The identifier of the retriever being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user",
      description: "Deletes a user by email id",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application from which the user is being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user email being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-web-experience",
      description: "Deletes an Amazon Q Business web experience",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application linked to the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-experience-id",
          description:
            "The identifier of the Amazon Q Business web experience being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-permission",
      description:
        "Removes a permission policy from a Q Business application, revoking the cross-account access that was previously granted to an ISV. This operation deletes the specified policy statement from the application's permission policy",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-id",
          description: "The statement ID of the permission to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-application",
      description:
        "Gets information about an existing Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-chat-controls-configuration",
      description:
        "Gets information about an chat controls configured for an existing Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application for which the chat controls are configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of configured chat controls to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business chat controls configured",
          args: {
            name: "string",
          },
        },
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
      name: "get-data-accessor",
      description:
        "Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Q Business application and AWS IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-accessor-id",
          description: "The unique identifier of the data accessor to retrieve",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-source",
      description:
        "Gets information about an existing Amazon Q Business data source connector",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identfier of the index used with the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-group",
      description: "Describes a group by group name",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application id the group is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the index the group is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The identifier of the data source the group is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-index",
      description: "Gets information about an existing Amazon Q Business index",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application connected to the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the Amazon Q Business index you want information on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-media",
      description:
        "Returns the image bytes corresponding to a media object. If you have implemented your own application with the Chat and ChatSync APIs, and have enabled content extraction from visual data in Amazon Q Business, you use the GetMedia API operation to download the images so you can show them in your UI with responses. For more information, see Extracting semantic meaning from images and visuals",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business which contains the media object",
          args: {
            name: "string",
          },
        },
        {
          name: "--conversation-id",
          description: "The identifier of the Amazon Q Business conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The identifier of the Amazon Q Business message",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-id",
          description:
            "The identifier of the media object. You can find this in the sourceAttributions returned by the Chat, ChatSync, and ListMessages API responses",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-plugin",
      description:
        "Gets information about an existing Amazon Q Business plugin",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application which contains the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugin-id",
          description: "The identifier of the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-policy",
      description:
        "Retrieves the current permission policy for a Q Business application. The policy is returned as a JSON-formatted string and defines the IAM actions that are allowed or denied for the application's resources",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-retriever",
      description:
        "Gets information about an existing retriever used by an Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application using the retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--retriever-id",
          description: "The identifier of the retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-user",
      description:
        "Describes the universally unique identifier (UUID) associated with a local user in a data source",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application connected to the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user email address attached to the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-web-experience",
      description:
        "Gets information about an existing Amazon Q Business web experience",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application linked to the web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-experience-id",
          description: "The identifier of the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-applications",
      description:
        "Lists Amazon Q Business applications.  Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business",
      options: [
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business applications",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Amazon Q Business applications to return",
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
      name: "list-attachments",
      description:
        "Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--conversation-id",
          description:
            "The unique identifier of the Amazon Q Business web experience conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The unique identifier of the user involved in the Amazon Q Business web experience conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of attachments returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of attachments",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of attachements to return",
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
      name: "list-conversations",
      description: "Lists one or more Amazon Q Business conversations",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user involved in the Amazon Q Business web experience conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Amazon Q Business conversations to return",
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
      name: "list-data-accessors",
      description:
        "Lists the data accessors for a Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-data-source-sync-jobs",
      description:
        "Get information about an Amazon Q Business data source connector synchronization",
      options: [
        {
          name: "--data-source-id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application connected to the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the Amazon Q Business data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incpmplete because there is more data to retriever, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of synchronization jobs to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--start-time",
          description: "The start time of the data source connector sync",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description: "The end time of the data source connector sync",
          args: {
            name: "timestamp",
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
      name: "list-data-sources",
      description:
        "Lists the Amazon Q Business data source connectors that you have created",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application linked to the data source connectors",
          args: {
            name: "string",
          },
        },
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
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business data source connectors",
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
      name: "list-documents",
      description: "A list of documents attached to an index",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application id the documents are attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index the documents are attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-ids",
          description:
            "The identifier of the data sources the documents are attached to",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of documents to return",
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
      name: "list-groups",
      description: "Provides a list of groups that are mapped to users",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application for getting a list of groups mapped to users",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index for getting a list of groups mapped to users",
          args: {
            name: "string",
          },
        },
        {
          name: "--updated-earlier-than",
          description:
            "The timestamp identifier used for the latest PUT or DELETE action for mapping users to their groups",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The identifier of the data source for getting a list of groups mapped to users",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the previous response was incomplete (because there is more data to retrieve), Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of returned groups that are mapped to users",
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
      name: "list-indices",
      description: "Lists the Amazon Q Business indices you have created",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application connected to the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business indices",
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
      name: "list-messages",
      description:
        "Gets a list of messages associated with an Amazon Q Business web experience",
      options: [
        {
          name: "--conversation-id",
          description:
            "The identifier of the Amazon Q Business web experience conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description: "The identifier for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user involved in the Amazon Q Business web experience conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of messages returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of messages to return",
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
      name: "list-plugin-actions",
      description:
        "Lists configured Amazon Q Business actions for a specific plugin in an Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application the plugin is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugin-id",
          description: "The identifier of the Amazon Q Business plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of plugin actions returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugin actions",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of plugin actions to return",
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
      name: "list-plugin-type-actions",
      description:
        "Lists configured Amazon Q Business actions for any plugin type\u2014both built-in and custom",
      options: [
        {
          name: "--plugin-type",
          description: "The type of the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of plugins returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of plugins to return",
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
      name: "list-plugin-type-metadata",
      description: "Lists metadata for all Amazon Q Business plugin types",
      options: [
        {
          name: "--next-token",
          description:
            "If the metadata returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of plugin metadata items to return",
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
      name: "list-plugins",
      description: "Lists configured Amazon Q Business plugins",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application the plugin is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of plugins",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of documents to return",
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
      name: "list-retrievers",
      description:
        "Lists the retriever used by an Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application using the retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the number of retrievers returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of retrievers",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of retrievers returned",
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
      name: "list-tags-for-resource",
      description:
        "Gets a list of tags associated with a specified resource. Amazon Q Business applications and data sources can have tags associated with them",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to get a list of tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-web-experiences",
      description: "Lists one or more Amazon Q Business Web Experiences",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application linked to the listed web experiences",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the maxResults response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of Amazon Q Business Web Experiences to return",
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
      name: "put-feedback",
      description:
        "Enables your end user to provide feedback on their Amazon Q Business generated chat responses",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application associated with the feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user giving the feedback",
          args: {
            name: "string",
          },
        },
        {
          name: "--conversation-id",
          description:
            "The identifier of the conversation the feedback is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description:
            "The identifier of the chat message that the feedback was given for",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-copied-at",
          description: "The timestamp for when the feedback was recorded",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--message-usefulness",
          description:
            "The feedback usefulness value given by the user to the chat message",
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
      name: "put-group",
      description:
        'Create, or updates, a mapping of users\u2014who have access to a document\u2014to groups. You can also map sub groups to groups. For example, the group "Company Intellectual Property Teams" includes sub groups "Research" and "Engineering". These sub groups include their own list of users or people who work in these teams. Only users who work in research and engineering, and therefore belong in the intellectual property group, can see top-secret company documents in their Amazon Q Business chat results',
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application in which the user and group mapping belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index in which you want to map users to their groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            'The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing"',
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            'The identifier of the data source for which you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company\'s documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce',
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-members",
          description:
            "A list of users or sub groups that belong to a group. This is for generating Amazon Q Business chat results only from document a user has access to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains your list of users that belong to a group.The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains your list of users that belong to a group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-relevant-content",
      description:
        "Searches for relevant content in a Q Business application based on a query. This operation takes a search query text, the Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance",
      options: [
        {
          name: "--application-id",
          description:
            "The unique identifier of the Q Business application to search",
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
          name: "--content-source",
          description: "The source of content to search in",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attribute-filter",
          description:
            "Enables filtering of responses based on document attributes or metadata fields",
          args: {
            name: "structure",
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
          name: "--next-token",
          description:
            "The token for the next set of results. (You received this token from a previous call.)",
          args: {
            name: "string",
          },
        },
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
      name: "start-data-source-sync-job",
      description:
        "Starts a data source connector synchronization job. If a synchronization job is already in progress, Amazon Q Business returns a ConflictException",
      options: [
        {
          name: "--data-source-id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The identifier of Amazon Q Business application the data source is connected to",
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
        "Stops an Amazon Q Business data source connector synchronization job already in progress",
      options: [
        {
          name: "--data-source-id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application that the data source is connected to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index used with the Amazon Q Business data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Adds the specified tag to the specified Amazon Q Business application or data source resource. If the tag already exists, the existing value is replaced with the new value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag keys to add to the Amazon Q Business application or data source. If a tag already exists, the existing value is replaced with the new value",
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
        "Removes a tag from an Amazon Q Business application or a data source",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to remove the tag from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the Amazon Q Business application or data source. If a tag key does not exist on the resource, it is ignored",
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
      name: "update-application",
      description:
        "Updates an existing Amazon Q Business application.  Amazon Q Business applications may securely transmit data for processing across Amazon Web Services Regions within your geography. For more information, see Cross region inference in Amazon Q Business.   An Amazon Q Apps service-linked role will be created if it's absent in the Amazon Web Services account when QAppsConfiguration is enabled in the request. For more information, see Using service-linked roles for Q Apps",
      options: [
        {
          name: "--application-id",
          description: "The identifier of the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-instance-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for\u2014or connecting to\u2014your Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A name for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "An Amazon Web Services Identity and Access Management (IAM) role that gives Amazon Q Business permission to access Amazon CloudWatch logs and metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--attachments-configuration",
          description:
            "An option to allow end users to upload files directly during chat",
          args: {
            name: "structure",
          },
        },
        {
          name: "--q-apps-configuration",
          description:
            "An option to allow end users to create and use Amazon Q Apps in the web experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--personalization-configuration",
          description:
            "Configuration information about chat response personalization. For more information, see Personalizing chat responses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auto-subscription-configuration",
          description:
            "An option to enable updating the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user management",
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
      name: "update-chat-controls-configuration",
      description:
        "Updates an set of chat controls configured for an existing Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application for which the chat controls are configured",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A token that you provide to identify the request to update a Amazon Q Business application chat configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-scope",
          description:
            "The response scope configured for your application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat",
          args: {
            name: "string",
          },
        },
        {
          name: "--blocked-phrases-configuration-update",
          description:
            "The phrases blocked from chat by your chat control configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--topic-configurations-to-create-or-update",
          description:
            "The configured topic specific chat controls you want to update",
          args: {
            name: "list",
          },
        },
        {
          name: "--topic-configurations-to-delete",
          description:
            "The configured topic specific chat controls you want to delete",
          args: {
            name: "list",
          },
        },
        {
          name: "--creator-mode-configuration",
          description: "The configuration details for CREATOR_MODE",
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
      name: "update-data-accessor",
      description:
        "Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor",
      options: [
        {
          name: "--application-id",
          description: "The unique identifier of the Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-accessor-id",
          description: "The unique identifier of the data accessor to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-configurations",
          description:
            "The updated list of action configurations specifying the allowed actions and any associated filters",
          args: {
            name: "list",
          },
        },
        {
          name: "--display-name",
          description: "The updated friendly name for the data accessor",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Updates an existing Amazon Q Business data source connector",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application the data source is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description:
            "The identifier of the index attached to the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description: "The identifier of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "A name of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Provides the configuration information for an Amazon Q Business data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "Provides configuration information needed to connect to an Amazon VPC (Virtual Private Cloud)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the data source connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--sync-schedule",
          description: "The chosen update frequency for your data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the data source and required resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-enrichment-configuration",
          description:
            "Provides the configuration information for altering document metadata and content during the document ingestion process. For more information, see Custom document enrichment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--media-extraction-configuration",
          description:
            "The configuration for extracting information from media in documents for your data source",
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
      name: "update-index",
      description: "Updates an Amazon Q Business index",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application connected to the index",
          args: {
            name: "string",
          },
        },
        {
          name: "--index-id",
          description: "The identifier of the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The name of the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the Amazon Q Business index",
          args: {
            name: "string",
          },
        },
        {
          name: "--capacity-configuration",
          description:
            "The storage capacity units you want to provision for your Amazon Q Business index. You can add and remove capacity to fit your usage needs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--document-attribute-configurations",
          description:
            "Configuration information for document metadata or fields. Document metadata are fields or attributes associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes",
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
      name: "update-plugin",
      description: "Updates an Amazon Q Business plugin",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application the plugin is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--plugin-id",
          description: "The identifier of the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The name of the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The status of the plugin",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-url",
          description: "The source URL used for plugin configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-plugin-configuration",
          description: "The configuration for a custom plugin",
          args: {
            name: "structure",
          },
        },
        {
          name: "--auth-configuration",
          description: "The authentication configuration the plugin is using",
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
      name: "update-retriever",
      description:
        "Updates the retriever used for your Amazon Q Business application",
      options: [
        {
          name: "--application-id",
          description: "The identifier of your Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--retriever-id",
          description: "The identifier of your retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "Provides information on how the retriever used for your Amazon Q Business application is configured",
          args: {
            name: "structure",
          },
        },
        {
          name: "--display-name",
          description: "The name of your retriever",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role with permission to access the retriever and required resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user",
      description: "Updates a information associated with a user id",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the application the user is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The email id attached to the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-aliases-to-update",
          description:
            "The user aliases attached to the user id that are to be updated",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-aliases-to-delete",
          description:
            "The user aliases attached to the user id that are to be deleted",
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
      name: "update-web-experience",
      description: "Updates an Amazon Q Business web experience",
      options: [
        {
          name: "--application-id",
          description:
            "The identifier of the Amazon Q Business application attached to the web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--web-experience-id",
          description: "The identifier of the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the role with permission to access the Amazon Q Business web experience and required resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-configuration",
          description:
            "The authentication configuration of the Amazon Q Business web experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--title",
          description: "The title of the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--subtitle",
          description: "The subtitle of the Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--welcome-message",
          description:
            "A customized welcome message for an end user in an Amazon Q Business web experience",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-prompts-control-mode",
          description:
            "Determines whether sample prompts are enabled in the web experience for an end user",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-configuration",
          description:
            "Information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience",
          args: {
            name: "structure",
          },
        },
        {
          name: "--origins",
          description:
            "Updates the website domain origins that are allowed to embed the Amazon Q Business web experience.  The <i>domain origin</i> refers to the <i>base URL</i> for accessing a website including the protocol (<code>http/https</code>), the domain name, and the port number (if specified).</p> <note> <ul> <li> <p>Any values except <code>null</code> submitted as part of this update will replace all previous values.</p> </li> <li> <p>You must only submit a <i>base URL</i> and not a full path. For example, <code>https://docs.aws.amazon.com</code>.</p> </li> </ul> </note>",
          args: {
            name: "list",
          },
        },
        {
          name: "--browser-extension-configuration",
          description:
            "The browser extension configuration for an Amazon Q Business web experience.   For Amazon Q Business application using external OIDC-compliant identity providers (IdPs). The IdP administrator must add the browser extension sign-in redirect URLs to the IdP application. For more information, see Configure external OIDC identity provider for your browser extensions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--customization-configuration",
          description:
            "Updates the custom logo, favicon, font, and color used in the Amazon Q web experience",
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
