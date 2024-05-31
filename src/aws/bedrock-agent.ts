const completionSpec: Fig.Spec = {
  name: "bedrock-agent",
  description:
    "Describes the API operations for creating and managing Amazon Bedrock agents",
  subcommands: [
    {
      name: "associate-agent-knowledge-base",
      description:
        "Associates a knowledge base with an agent. If a knowledge base is associated and its indexState is set to Enabled, the agent queries the knowledge base for information to augment its response to the user",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent with which you want to associate the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent with which you want to associate the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of what the agent should use the knowledge base for",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base to associate with the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-state",
          description:
            "Specifies whether to use the knowledge base or not when sending an InvokeAgent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-agent",
      description:
        "Creates an agent that orchestrates interactions between foundation models, data sources, software applications, user conversations, and APIs to carry out tasks to help customers.   Specify the following fields for security purposes.    agentResourceRoleArn \u2013 The Amazon Resource Name (ARN) of the role with permissions to invoke API operations on an agent.   (Optional) customerEncryptionKeyArn \u2013 The Amazon Resource Name (ARN) of a KMS key to encrypt the creation of the agent.   (Optional) idleSessionTTLinSeconds \u2013 Specify the number of seconds for which the agent should maintain session information. After this time expires, the subsequent InvokeAgent request begins a new session.     To override the default prompt behavior for agent orchestration and to use advanced prompts, include a promptOverrideConfiguration object. For more information, see Advanced prompts.   If you agent fails to be created, the response returns a list of failureReasons alongside a list of recommendedActions for you to troubleshoot",
      options: [
        {
          name: "--agent-name",
          description: "A name for the agent that you create",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-resource-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-encryption-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--foundation-model",
          description:
            "The foundation model to be used for orchestration by the agent you create",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-configuration",
          description:
            "The unique Guardrail configuration assigned to the agent when it is created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout",
          args: {
            name: "integer",
          },
        },
        {
          name: "--instruction",
          description:
            "Instructions that tell the agent what it should do and how it should interact with users",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-override-configuration",
          description:
            "Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "Any tags that you want to attach to the agent",
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
      name: "create-agent-action-group",
      description:
        "Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them. To allow your agent to request the user for additional information when trying to complete a task, add an action group with the parentActionGroupSignature field set to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information",
      options: [
        {
          name: "--action-group-executor",
          description:
            "The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action or the custom control method for handling the information elicited from the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action-group-name",
          description: "The name to give the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-group-state",
          description:
            "Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent for which to create the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent for which to create the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-schema",
          description:
            "Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see Action group OpenAPI schemas",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-schema",
          description:
            "Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-action-group-signature",
          description:
            "To allow your agent to request the user for additional information when trying to complete a task, set this field to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-agent-alias",
      description:
        "Creates an alias of an agent that can be used to deploy the agent",
      options: [
        {
          name: "--agent-alias-name",
          description: "The name of the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the alias of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-configuration",
          description:
            "Contains details about the routing configuration of the alias",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Any tags that you want to attach to the alias of the agent",
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
      name: "create-data-source",
      description:
        "Sets up a data source to be added to a knowledge base.  You can't change the chunkingConfiguration after you create the data source",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-deletion-policy",
          description: "The data deletion policy assigned to the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-configuration",
          description:
            "Contains metadata about where the data source is stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "A description of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base to which to add the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption-configuration",
          description:
            "Contains details about the server-side encryption for the data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vector-ingestion-configuration",
          description:
            "Contains details about how to ingest the documents in the data source",
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
      name: "create-knowledge-base",
      description:
        "Creates a knowledge base that contains data sources from which information can be queried and used by LLMs. To create a knowledge base, you must first set up your data sources and configure a supported vector store. For more information, see Set up your data for ingestion.  If you prefer to let Amazon Bedrock create and manage a vector store for you in Amazon OpenSearch Service, use the console. For more information, see Create a knowledge base.    Provide the name and an optional description.   Provide the Amazon Resource Name (ARN) with permissions to create a knowledge base in the roleArn field.   Provide the embedding model to use in the embeddingModelArn field in the knowledgeBaseConfiguration object.   Provide the configuration for your vector store in the storageConfiguration object.   For an Amazon OpenSearch Service database, use the opensearchServerlessConfiguration object. For more information, see Create a vector store in Amazon OpenSearch Service.   For an Amazon Aurora database, use the RdsConfiguration object. For more information, see Create a vector store in Amazon Aurora.   For a Pinecone database, use the pineconeConfiguration object. For more information, see Create a vector store in Pinecone.   For a Redis Enterprise Cloud database, use the redisEnterpriseCloudConfiguration object. For more information, see Create a vector store in Redis Enterprise Cloud",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-configuration",
          description:
            "Contains details about the embeddings model used for the knowledge base",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "A name for the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-configuration",
          description:
            "Contains details about the configuration of the vector database used for the knowledge base",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Specify the key-value pairs for the tags that you want to attach to your knowledge base in this object",
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
      name: "delete-agent",
      description: "Deletes an agent",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-agent-action-group",
      description: "Deletes an action group in an agent",
      options: [
        {
          name: "--action-group-id",
          description: "The unique identifier of the action group to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent that the action group belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent that the action group belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-agent-alias",
      description: "Deletes an alias of an agent",
      options: [
        {
          name: "--agent-alias-id",
          description: "The unique identifier of the alias to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent that the alias belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-agent-version",
      description: "Deletes a version of an agent",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent that the version belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description: "The version of the agent to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Deletes a data source from a knowledge base",
      options: [
        {
          name: "--data-source-id",
          description: "The unique identifier of the data source to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base from which to delete the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-knowledge-base",
      description:
        "Deletes a knowledge base. Before deleting a knowledge base, you should disassociate the knowledge base from any agents that it is associated with by making a DisassociateAgentKnowledgeBase request",
      options: [
        {
          name: "--knowledge-base-id",
          description: "The unique identifier of the knowledge base to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-agent-knowledge-base",
      description: "Disassociates a knowledge base from an agent",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent from which to disassociate the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent from which to disassociate the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base to disassociate",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-agent",
      description: "Gets information about an agent",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-agent-action-group",
      description: "Gets information about an action group for an agent",
      options: [
        {
          name: "--action-group-id",
          description:
            "The unique identifier of the action group for which to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent that the action group belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent that the action group belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-agent-alias",
      description: "Gets information about an alias of an agent",
      options: [
        {
          name: "--agent-alias-id",
          description:
            "The unique identifier of the alias for which to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent to which the alias to get information belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-agent-knowledge-base",
      description:
        "Gets information about a knowledge base associated with an agent",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent with which the knowledge base is associated",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent with which the knowledge base is associated",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base associated with the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-agent-version",
      description: "Gets details about a version of an agent",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description: "The version of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets information about a data source",
      options: [
        {
          name: "--data-source-id",
          description: "The unique identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base that the data source was added to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-ingestion-job",
      description:
        "Gets information about a ingestion job, in which a data source is added to a knowledge base",
      options: [
        {
          name: "--data-source-id",
          description:
            "The unique identifier of the data source in the ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-job-id",
          description: "The unique identifier of the ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base for which the ingestion job applies",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-knowledge-base",
      description: "Gets information about a knoweldge base",
      options: [
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base for which to get information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-agent-action-groups",
      description:
        "Lists the action groups for an agent and information about each one",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description: "The version of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-agent-aliases",
      description:
        "Lists the aliases of an agent and information about each one",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-agent-knowledge-bases",
      description:
        "Lists knowledge bases associated with an agent and information about each one",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent for which to return information about knowledge bases associated with it",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent for which to return information about knowledge bases associated with it",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-agent-versions",
      description:
        "Lists the versions of an agent and information about each version",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-agents",
      description:
        "Lists the agents belonging to an account and information about each agent",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
        "Lists the data sources in a knowledge base and information about each one",
      options: [
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base for which to return a list of information",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-ingestion-jobs",
      description:
        "Lists the ingestion jobs for a data source and information about each of them",
      options: [
        {
          name: "--data-source-id",
          description:
            "The unique identifier of the data source for which to return ingestion jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "Contains a definition of a filter for which to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base for which to return ingestion jobs",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description: "Contains details about how to sort the results",
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
      name: "list-knowledge-bases",
      description:
        "Lists the knowledge bases in an account and information about each of them",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results",
          args: {
            name: "string",
          },
        },
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
      description: "List all the tags for the resource you specify",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource for which to list tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "prepare-agent",
      description:
        "Creates a DRAFT version of the agent that can be used for internal testing",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent for which to create a DRAFT version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-ingestion-job",
      description:
        "Begins an ingestion job, in which a data source is added to a knowledge base",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see Ensuring idempotency",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description: "The unique identifier of the data source to ingest",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the ingestion job",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base to which to add the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Associate tags with a resource. For more information, see Tagging resources in the Amazon Bedrock User Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "An object containing key-value pairs that define the tags to attach to the resource",
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
      name: "untag-resource",
      description: "Remove tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource from which to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of keys of the tags to remove from the resource",
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
      name: "update-agent",
      description: "Updates the configuration of an agent",
      options: [
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-name",
          description: "Specifies a new name for the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-resource-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--customer-encryption-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the KMS key with which to encrypt the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Specifies a new description of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--foundation-model",
          description:
            "Specifies a new foundation model to be used for orchestration by the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-configuration",
          description:
            "The unique Guardrail configuration assigned to the agent when it is updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The number of seconds for which Amazon Bedrock keeps information about a user's conversation with the agent. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout",
          args: {
            name: "integer",
          },
        },
        {
          name: "--instruction",
          description:
            "Specifies new instructions that tell the agent what it should do and how it should interact with users",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-override-configuration",
          description:
            "Contains configurations to override prompts in different parts of an agent sequence. For more information, see Advanced prompts",
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
      name: "update-agent-action-group",
      description: "Updates the configuration for an action group for an agent",
      options: [
        {
          name: "--action-group-executor",
          description:
            "The Amazon Resource Name (ARN) of the Lambda function containing the business logic that is carried out upon invoking the action",
          args: {
            name: "structure",
          },
        },
        {
          name: "--action-group-id",
          description: "The unique identifier of the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-group-name",
          description: "Specifies a new name for the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--action-group-state",
          description:
            "Specifies whether the action group is available for the agent to invoke or not when sending an InvokeAgent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent for which to update the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The unique identifier of the agent version for which to update the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-schema",
          description:
            "Contains either details about the S3 object containing the OpenAPI schema for the action group or the JSON or YAML-formatted payload defining the schema. For more information, see Action group OpenAPI schemas",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "Specifies a new name for the action group",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-schema",
          description:
            "Contains details about the function schema for the action group or the JSON or YAML-formatted payload defining the schema",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-action-group-signature",
          description:
            "To allow your agent to request the user for additional information when trying to complete a task, set this field to AMAZON.UserInput. You must leave the description, apiSchema, and actionGroupExecutor fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an Observation reprompting the user for more information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-agent-alias",
      description: "Updates configurations for an alias of an agent",
      options: [
        {
          name: "--agent-alias-id",
          description: "The unique identifier of the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-alias-name",
          description: "Specifies a new name for the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-id",
          description: "The unique identifier of the agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Specifies a new description for the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-configuration",
          description:
            "Contains details about the routing configuration of the alias",
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
      name: "update-agent-knowledge-base",
      description:
        "Updates the configuration for a knowledge base that has been associated with an agent",
      options: [
        {
          name: "--agent-id",
          description:
            "The unique identifier of the agent associated with the knowledge base that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-version",
          description:
            "The version of the agent associated with the knowledge base that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Specifies a new description for the knowledge base associated with an agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base that has been associated with an agent",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-state",
          description:
            "Specifies whether the agent uses the knowledge base or not when sending an InvokeAgent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Updates configurations for a data source.  You can't change the chunkingConfiguration after you create the data source. Specify the existing chunkingConfiguration",
      options: [
        {
          name: "--data-deletion-policy",
          description: "The data deletion policy of the updated data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-configuration",
          description:
            "Contains details about the storage configuration of the data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--data-source-id",
          description: "The unique identifier of the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Specifies a new description for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-id",
          description:
            "The unique identifier of the knowledge base to which the data source belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Specifies a new name for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--server-side-encryption-configuration",
          description:
            "Contains details about server-side encryption of the data source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vector-ingestion-configuration",
          description:
            "Contains details about how to ingest the documents in the data source",
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
      name: "update-knowledge-base",
      description:
        "Updates the configuration of a knowledge base with the fields that you specify. Because all fields will be overwritten, you must include the same values for fields that you want to keep the same. You can change the following fields:    name     description     roleArn    You can't change the knowledgeBaseConfiguration or storageConfiguration fields, so you must specify the same configurations as when you created the knowledge base. You can send a GetKnowledgeBase request and copy the same configurations",
      options: [
        {
          name: "--description",
          description: "Specifies a new description for the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--knowledge-base-configuration",
          description:
            "Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created",
          args: {
            name: "structure",
          },
        },
        {
          name: "--knowledge-base-id",
          description: "The unique identifier of the knowledge base to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Specifies a new name for the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-configuration",
          description:
            "Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created",
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
