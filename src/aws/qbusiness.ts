const completionSpec: Fig.Spec = {
  name: "qbusiness",
  description:
    "This is the Amazon Q Business API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the  Amazon Q Business User Guide . For an overview of the Amazon Q Business APIs, see Overview of Amazon Q Business API operations. For information about the IAM access control permissions you need to use this API, see IAM roles for Amazon Q Business in the Amazon Q Business User Guide. You can use the following AWS SDKs to access Amazon Q Business APIs:    AWS SDK for C++     AWS SDK for Go     AWS SDK for Java     AWS SDK for JavaScript     AWS SDK for .NET     AWS SDK for Python (Boto3)     AWS SDK for Ruby    The following resources provide additional information about using the Amazon Q Business API:     Setting up for Amazon Q Business       Amazon Q Business CLI Reference       Amazon Web Services General Reference",
  subcommands: [
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
            "The groups that a user associated with the chat input belongs to",
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
            "The identifier of the previous end user text input message in a conversation",
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
            "The chat modes available to an Amazon Q Business end user.    RETRIEVAL_MODE - The default chat mode for an Amazon Q Business application. When this mode is enabled, Amazon Q Business generates responses only from data sources connected to an Amazon Q Business application.    CREATOR_MODE - By selecting this mode, users can choose to generate responses only from the LLM knowledge, without consulting connected data sources, for a chat request.    PLUGIN_MODE - By selecting this mode, users can choose to use plugins in chat.   For more information, see Admin controls and guardrails, Plugins, and Conversation settings",
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
        "Creates an Amazon Q Business application.  There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see Amazon Q Business tiers. You must use the Amazon Q Business console to assign subscription tiers to users",
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
            "The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            "Configuration information to connect to your data source repository. For configuration templates for your specific data source, see Supported connectors",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
          name: "--type",
          description:
            "The index type that's suitable for your needs. For more information on what's included in each type of index or index tier, see Amazon Q Business tiers",
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
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the service role attached to your web experience",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Lists Amazon Q Business applications",
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
            "If the number of retrievers returned exceeds maxResults, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages",
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
            'The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing". If you have more than 1000 users and/or sub groups for a single group, you need to provide the path to the S3 file that lists your users and sub groups for a group. Your sub groups can contain more than 1000 users, but the list of sub groups that belong to a group (and/or users) must be no more than 1000',
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Updates an existing Amazon Q Business application",
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
