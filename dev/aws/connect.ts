export const completionSpec: Fig.Spec = {
  name: "connect",
  description:
    "Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can also resolve customer issues more efficiently by getting customers in touch with the appropriate agents. There are limits to the number of Amazon Connect resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. You can connect programmatically to an AWS service by using an endpoint. For a list of Amazon Connect endpoints, see Amazon Connect Endpoints.  Working with contact flows? Check out the Amazon Connect Flow language.",
  subcommands: [
    {
      name: "associate-approved-origin",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates an approved origin to an Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--origin",
          description: "The domain to add to your allow list.",
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
      name: "associate-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-type",
          description: "A valid resource type.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--storage-config",
          description: "A valid storage type.",
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
      name: "associate-lambda-function",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-arn",
          description:
            "The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.",
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
      name: "associate-lex-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--lex-bot",
          description: "The Amazon Lex box to associate with the instance.",
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
      name: "associate-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a set of quick connects with a queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-ids",
          description: "The quick connects to associate with this queue.",
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
      name: "associate-routing-profile-queues",
      description: "Associates a set of queues with a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-configs",
          description: "The queues to associate with this routing profile.",
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
      name: "associate-security-key",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a security key to the instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--key",
          description: "A valid security key in PEM format.",
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
      name: "create-contact-flow",
      description:
        "Creates a contact flow for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--type",
          description:
            "The type of the contact flow. For descriptions of the available types, see Choose a Contact Flow Type in the Amazon Connect Administrator Guide.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "The description of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--content",
          description: "The content of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags.",
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
      name: "create-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect.",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--identity-management-type",
          description:
            "The type of identity management for your Amazon Connect users.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-alias",
          description: "The name for your instance.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--directory-id",
          description: "The identifier for the directory.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--inbound-calls-enabled",
          description: "Your contact center handles incoming contacts.",
        },
        {
          name: "--no-inbound-calls-enabled",
          description: "Your contact center handles incoming contacts.",
        },
        {
          name: "--outbound-calls-enabled",
          description: "Your contact center allows outbound calls.",
        },
        {
          name: "--no-outbound-calls-enabled",
          description: "Your contact center allows outbound calls.",
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
      name: "create-integration-association",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Create an AppIntegration association with an Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-type",
          description: "The type of information to be ingested.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-arn",
          description: "The Amazon Resource Name (ARN) of the integration.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--source-application-url",
          description: "The URL for the external application.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--source-application-name",
          description: "The name of the external application.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--source-type",
          description: "The type of the data source.",
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
      name: "create-queue",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates a new queue for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "The description of the queue.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--outbound-caller-config",
          description:
            "The outbound caller ID name, number, and outbound whisper flow.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-contacts",
          description:
            "The maximum number of contacts that can be in the queue before it is considered full.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--quick-connect-ids",
          description:
            "The quick connects available to agents who are working the queue.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--tags",
          description: "One or more tags.",
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
      name: "create-quick-connect",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates a quick connect for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the quick connect.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description: "The description of the quick connect.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--quick-connect-config",
          description: "Configuration settings for the quick connect.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags.",
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
      name: "create-routing-profile",
      description: "Creates a new routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description:
            "The name of the routing profile. Must not be more than 127 characters.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--description",
          description:
            "Description of the routing profile. Must not be more than 250 characters.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--default-outbound-queue-id",
          description: "The default outbound queue for the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-configs",
          description:
            "The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--media-concurrencies",
          description:
            "The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags.",
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
      name: "create-use-case",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates a use case for an AppIntegration association.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the AppIntegration association.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--use-case-type",
          description:
            "The type of use case to associate to the AppIntegration association. Each AppIntegration association can have only one of each use case type.",
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
      name: "create-user",
      description:
        "Creates a user account for the specified Amazon Connect instance. For information about how to create user accounts using the Amazon Connect console, see Add Users in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--username",
          description:
            "The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\\@]+.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--password",
          description:
            "The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--identity-info",
          description: "The information about the identity of the user.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--phone-config",
          description: "The phone settings for the user.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--directory-user-id",
          description:
            "The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--security-profile-ids",
          description: "The identifier of the security profile for the user.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile for the user.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group for the user.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description: "One or more tags.",
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
      name: "create-user-hierarchy-group",
      description: "Creates a new user hierarchy group.",
      options: [
        {
          name: "--name",
          description:
            "The name of the user hierarchy group. Must not be more than 100 characters.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--parent-group-id",
          description:
            "The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "delete-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "delete-integration-association",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes an AppIntegration association from an Amazon Connect instance. The association must not have any use cases associated with it.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the AppIntegration association.",
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
      name: "delete-quick-connect",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes a quick connect.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect.",
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
      name: "delete-use-case",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes a use case from an AppIntegration association.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the AppIntegration association.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--use-case-id",
          description: "The identifier for the use case.",
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
      name: "delete-user",
      description:
        "Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--user-id",
          description: "The identifier of the user.",
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
      name: "delete-user-hierarchy-group",
      description:
        "Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "describe-contact-flow",
      description:
        "Describes the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the contact flow.",
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
      name: "describe-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the hours of operation.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation.",
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
      name: "describe-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "describe-instance-attribute",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attribute-type",
          description: "The type of attribute.",
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
      name: "describe-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-type",
          description: "A valid resource type.",
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
      name: "describe-queue",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the specified queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
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
      name: "describe-quick-connect",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the quick connect.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect.",
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
      name: "describe-routing-profile",
      description: "Describes the specified routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
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
      name: "describe-user",
      description:
        "Describes the specified user account. You can find the instance ID in the console (it\u2019s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.",
      options: [
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "describe-user-hierarchy-group",
      description: "Describes the specified hierarchy group.",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "describe-user-hierarchy-structure",
      description:
        "Describes the hierarchy structure of the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "disassociate-approved-origin",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Revokes access to integrated applications from Amazon Connect.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--origin",
          description: "The domain URL of the integrated application.",
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
      name: "disassociate-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-type",
          description: "A valid resource type.",
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
      name: "disassociate-lambda-function",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant contact flow blocks.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance..",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--function-arn",
          description:
            "The Amazon Resource Name (ARN) of the Lambda function being disassociated.",
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
      name: "disassociate-lex-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--bot-name",
          description:
            "The name of the Amazon Lex bot. Maximum character limit of 50.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--lex-region",
          description:
            "The Region in which the Amazon Lex bot has been created.",
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
      name: "disassociate-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Disassociates a set of quick connects from a queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-ids",
          description: "The quick connects to disassociate from the queue.",
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
      name: "disassociate-routing-profile-queues",
      description: "Disassociates a set of queues from a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-references",
          description: "The queues to disassociate from this routing profile.",
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
      name: "disassociate-security-key",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes the specified security key.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.",
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
      name: "get-contact-attributes",
      description:
        "Retrieves the contact attributes for the specified contact.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--initial-contact-id",
          description: "The identifier of the initial contact.",
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
      name: "get-current-metric-data",
      description:
        "Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--filters",
          description:
            "The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--groupings",
          description:
            "The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues. If you group by CHANNEL, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported. If no Grouping is included in the request, a summary of metrics is returned.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--current-metrics",
          description:
            'The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.  AGENTS_AFTER_CONTACT_WORK  Unit: COUNT Name in real-time metrics report: ACW   AGENTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Available   AGENTS_ERROR  Unit: COUNT Name in real-time metrics report: Error   AGENTS_NON_PRODUCTIVE  Unit: COUNT Name in real-time metrics report: NPT (Non-Productive Time)   AGENTS_ON_CALL  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ON_CONTACT  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ONLINE  Unit: COUNT Name in real-time metrics report: Online   AGENTS_STAFFED  Unit: COUNT Name in real-time metrics report: Staffed   CONTACTS_IN_QUEUE  Unit: COUNT Name in real-time metrics report: In queue   CONTACTS_SCHEDULED  Unit: COUNT Name in real-time metrics report: Scheduled   OLDEST_CONTACT_AGE  Unit: SECONDS When you use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:  { "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 } The actual OLDEST_CONTACT_AGE is 24 seconds. Name in real-time metrics report: Oldest   SLOTS_ACTIVE  Unit: COUNT Name in real-time metrics report: Active   SLOTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Availability',
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "get-federation-token",
      description: "Retrieves a token for federation.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "get-metric-data",
      description:
        "Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--start-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15. The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.",
          args: {
            name: "timestamp",
          },
          isOptional: false,
        },
        {
          name: "--end-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp. The time range between the start and end time must be less than 24 hours.",
          args: {
            name: "timestamp",
          },
          isOptional: false,
        },
        {
          name: "--filters",
          description:
            "The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--groupings",
          description:
            "The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues. The only supported grouping is QUEUE. If no grouping is specified, a summary of metrics for all queues is returned.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--historical-metrics",
          description:
            'The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.  ABANDON_TIME  Unit: SECONDS Statistic: AVG  AFTER_CONTACT_WORK_TIME  Unit: SECONDS Statistic: AVG  API_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_ABANDONED  Unit: COUNT Statistic: SUM  CONTACTS_AGENT_HUNG_UP_FIRST  Unit: COUNT Statistic: SUM  CONTACTS_CONSULTED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_INCOMING  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_OUTBOUND  Unit: COUNT Statistic: SUM  CONTACTS_HOLD_ABANDONS  Unit: COUNT Statistic: SUM  CONTACTS_MISSED  Unit: COUNT Statistic: SUM  CONTACTS_QUEUED  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN_FROM_QUEUE  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: COUNT Statistic: SUM  HANDLE_TIME  Unit: SECONDS Statistic: AVG  HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_AND_HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_TIME  Unit: SECONDS Statistic: AVG  OCCUPANCY  Unit: PERCENT Statistic: AVG  QUEUE_ANSWER_TIME  Unit: SECONDS Statistic: AVG  QUEUED_TIME  Unit: SECONDS Statistic: MAX  SERVICE_LEVEL  Unit: PERCENT Statistic: AVG Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600',
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-approved-origins",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all approved origins associated with the instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-contact-flows",
      description:
        "Provides information about the contact flows for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language. For more information about contact flows, see Contact Flows in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-types",
          description: "The type of contact flow.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-hours-of-operations",
      description:
        "Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-instance-attributes",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-instance-storage-configs",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-type",
          description: "A valid resource type.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-instances",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-integration-associations",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Provides summary information about the AppIntegration associations for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-lambda-functions",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant contact flow blocks.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-lex-bots",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex bots currently associated with the instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-phone-numbers",
      description:
        "Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--phone-number-types",
          description: "The type of phone number.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--phone-number-country-codes",
          description: "The ISO country code.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-prompts",
      description:
        "Provides information about the prompts for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Lists the quick connects associated with a queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-queues",
      description:
        "Provides information about the queues for the specified Amazon Connect instance. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-types",
          description: "The type of queue.",
          args: {
            name: "list",
          },
          isOptional: true,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Provides information about the quick connects for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
          args: {
            name: "integer",
          },
          isOptional: true,
        },
        {
          name: "--quick-connect-types",
          description:
            "The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).",
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
      name: "list-routing-profile-queues",
      description: "Lists the queues associated with a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-routing-profiles",
      description:
        "Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-security-keys",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all security keys associated with the instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-security-profiles",
      description:
        "Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-tags-for-resource",
      description:
        "Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
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
      name: "list-use-cases",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Lists the use cases.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the integration association.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-user-hierarchy-groups",
      description:
        "Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "list-users",
      description:
        "Provides summary information about the users for the specified Amazon Connect instance.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page.",
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
      name: "resume-contact-recording",
      description:
        "When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call. Only voice recordings are supported at this time.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.",
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
      name: "start-chat-contact",
      description:
        "Initiates a contact flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant\u2019s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in two situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception from the API Gateway.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   For more information about chat, see Chat in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the contact flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in contact flows just like any other contact attributes.  There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--participant-details",
          description: "Information identifying the participant.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--initial-message",
          description:
            "The initial message to be sent to the newly created chat.",
          args: {
            name: "structure",
          },
          isOptional: true,
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
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
      name: "start-contact-recording",
      description:
        "Starts recording the contact when the agent joins the call. StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--voice-recording-configuration",
          description: "The person being recorded.",
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
      name: "start-outbound-voice-contact",
      description:
        "Places an outbound call to a contact, and then initiates the contact flow. It performs the actions in the contact flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the contact flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--destination-phone-number",
          description: "The phone number of the customer, in E.164 format.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--source-phone-number",
          description:
            "The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--queue-id",
          description:
            "The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.",
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
      name: "start-task-contact",
      description: "Initiates a contact flow to start a new task.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--previous-contact-id",
          description:
            "The identifier of the previous chat, voice, or task contact.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--name",
          description:
            "The name of a task that is shown to an agent in the Contact Control Panel (CCP).",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP).",
          args: {
            name: "map",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "A description of the task that is shown to an agent in the Contact Control Panel (CCP).",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.",
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
      name: "stop-contact",
      description: "Ends the specified contact.",
      options: [
        {
          name: "--contact-id",
          description: "The ID of the contact.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "stop-contact-recording",
      description:
        "Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.",
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
      name: "suspend-contact-recording",
      description:
        "When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.  The period of time that the recording is suspended is filled with silence in the final recording.  Only voice recordings are supported at this time.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.",
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
        "Adds the specified tags to the specified resource. The supported resource types are users, routing profiles, queues, quick connects, and contact flows. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tags",
          description:
            'One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.',
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
      description: "Removes the specified tags from the specified resource.",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--tag-keys",
          description: "The tag keys.",
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
      name: "update-contact-attributes",
      description:
        "Creates or updates the contact attributes associated with the specified contact. You can add or update attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted.  Important: You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, which was September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.",
      options: [
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attributes",
          description:
            "The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other contact attributes. You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.",
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
      name: "update-contact-flow-content",
      description:
        "Updates the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--content",
          description:
            "The JSON string that represents contact flow\u2019s content. For an example, see Example contact flow in Amazon Connect Flow language in the Amazon Connect Administrator Guide.",
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
      name: "update-contact-flow-name",
      description:
        "The name of the contact flow. You can also create and update contact flows using the Amazon Connect Flow language.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the contact flow.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "The description of the contact flow.",
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
      name: "update-instance-attribute",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--attribute-type",
          description: "The type of attribute.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--value",
          description:
            "The value for the attribute. Maximum character limit is 100.",
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
      name: "update-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--resource-type",
          description: "A valid resource type.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--storage-config",
          description: "The storage configuration for the instance.",
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
      name: "update-queue-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation for the specified queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation.",
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
      name: "update-queue-max-contacts",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the maximum number of contacts allowed in a queue before it is considered full.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--max-contacts",
          description:
            "The maximum number of contacts that can be in the queue before it is considered full.",
          args: {
            name: "integer",
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
      name: "update-queue-name",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the name and description of a queue. At least Name or Description must be provided.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the queue.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "The description of the queue.",
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
      name: "update-queue-outbound-caller-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--outbound-caller-config",
          description:
            "The outbound caller ID name, number, and outbound whisper flow.",
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
      name: "update-queue-status",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the status of the queue.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--status",
          description: "The status of the queue.",
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
      name: "update-quick-connect-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the configuration settings for the specified quick connect.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-config",
          description:
            "Information about the configuration settings for the quick connect.",
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
      name: "update-quick-connect-name",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description: "The name of the quick connect.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description: "The description of the quick connect.",
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
      name: "update-routing-profile-concurrency",
      description:
        "Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--media-concurrencies",
          description:
            "The channels that agents can handle in the Contact Control Panel (CCP).",
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
      name: "update-routing-profile-default-outbound-queue",
      description: "Updates the default outbound queue of a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--default-outbound-queue-id",
          description: "The identifier for the default outbound queue.",
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
      name: "update-routing-profile-name",
      description:
        "Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--name",
          description:
            "The name of the routing profile. Must not be more than 127 characters.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--description",
          description:
            "The description of the routing profile. Must not be more than 250 characters.",
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
      name: "update-routing-profile-queues",
      description:
        "Updates the properties associated with a set of queues for a routing profile.",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--queue-configs",
          description:
            "The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.",
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
      name: "update-user-hierarchy",
      description:
        "Assigns the specified hierarchy group to the specified user.",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group.",
          args: {
            name: "string",
          },
          isOptional: true,
        },
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-hierarchy-group-name",
      description: "Updates the name of the user hierarchy group.",
      options: [
        {
          name: "--name",
          description:
            "The name of the hierarchy group. Must not be more than 100 characters.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-hierarchy-structure",
      description:
        "Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.",
      options: [
        {
          name: "--hierarchy-structure",
          description: "The hierarchy levels to update.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-identity-info",
      description:
        "Updates the identity information for the specified user.  We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide.",
      options: [
        {
          name: "--identity-info",
          description: "The identity information for the user.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-phone-config",
      description:
        "Updates the phone configuration settings for the specified user.",
      options: [
        {
          name: "--phone-config",
          description:
            "Information about phone configuration settings for the user.",
          args: {
            name: "structure",
          },
          isOptional: false,
        },
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-routing-profile",
      description:
        "Assigns the specified routing profile to the specified user.",
      options: [
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile for the user.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
      name: "update-user-security-profiles",
      description:
        "Assigns the specified security profiles to the specified user.",
      options: [
        {
          name: "--security-profile-ids",
          description: "The identifiers of the security profiles for the user.",
          args: {
            name: "list",
          },
          isOptional: false,
        },
        {
          name: "--user-id",
          description: "The identifier of the user account.",
          args: {
            name: "string",
          },
          isOptional: false,
        },
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance.",
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
  ],
};
