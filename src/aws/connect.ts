const completionSpec: Fig.Spec = {
  name: "connect",
  description:
    "Amazon Connect actions     Amazon Connect data types    Amazon Connect is a cloud-based contact center solution that you use to set up and manage a customer contact center and provide reliable customer engagement at any scale. Amazon Connect provides metrics and real-time reporting that enable you to optimize contact routing. You can also resolve customer issues more efficiently by getting customers in touch with the appropriate agents. There are limits to the number of Amazon Connect resources that you can create. There are also limits to the number of requests that you can make per second. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide. You can use an endpoint to connect programmatically to an Amazon Web Services service. For a list of Amazon Connect endpoints, see Amazon Connect Endpoints",
  subcommands: [
    {
      name: "activate-evaluation-form",
      description:
        "Activates an evaluation form in the specified Amazon Connect instance. After the evaluation form is activated, it is available to start new evaluations based on the form",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-version",
          description:
            "The version of the evaluation form to activate. If the version property is not provided, the latest version of the evaluation form is activated",
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
      name: "associate-analytics-data-set",
      description:
        "Associates the specified dataset for a Amazon Connect instance with the target account. You can associate only one dataset in a single call",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The identifier of the dataset to associate with the target account",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-account-id",
          description:
            "The identifier of the target account. Use to associate a dataset to a different account than the one containing the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-approved-origin",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates an approved origin to an Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description: "The domain to add to your allow list",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex or Amazon Lex V2 bot",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--lex-bot",
          description: "Configuration information of an Amazon Lex bot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lex-v2-bot",
          description: "The Amazon Lex V2 bot to associate with the instance",
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
      name: "associate-default-vocabulary",
      description:
        "Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call and real-time analysis sessions for the given language",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe?",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-id",
          description:
            "The identifier of the custom vocabulary. If this is empty, the default is set to none",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-flow",
      description: "Associates a connect resource to a flow",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource.   Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER    Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER",
          args: {
            name: "string",
          },
        },
        {
          name: "--flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an S3 bucket, exists when being used for association",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "A valid resource type. To enable streaming for real-time analysis of contacts, use the following types:   For chat contacts, use REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS.   For voice contacts, use REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS.     REAL_TIME_CONTACT_ANALYSIS_SEGMENTS is deprecated, but it is still supported and will apply only to VOICE channel contacts. Use REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS for voice contacts moving forward. If you have previously associated a stream with REAL_TIME_CONTACT_ANALYSIS_SEGMENTS, no action is needed to update the stream to REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-config",
          description: "A valid storage type",
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
      name: "associate-lambda-function",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-arn",
          description:
            "The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-lex-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Amazon Lex V1 bot. This API only supports the association of Amazon Lex V1 bots",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--lex-bot",
          description: "The Amazon Lex bot to associate with the instance",
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
      name: "associate-phone-number-contact-flow",
      description:
        "Associates a flow with a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException",
      options: [
        {
          name: "--phone-number-id",
          description: "A unique identifier for the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a set of quick connects with a queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-ids",
          description: "The quick connects to associate with this queue",
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
      name: "associate-routing-profile-queues",
      description: "Associates a set of queues with a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-configs",
          description: "The queues to associate with this routing profile",
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
      name: "associate-security-key",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Associates a security key to the instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description: "A valid security key in PEM format as a String",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-traffic-distribution-group-user",
      description:
        "Associates an agent with a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created",
      options: [
        {
          name: "--traffic-distribution-group-id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user account. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "associate-user-proficiencies",
      description: ">Associates a set of proficiencies with a user",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN of the instance)",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-proficiencies",
          description: "The proficiencies to associate with the user",
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
      name: "batch-associate-analytics-data-set",
      description:
        "Associates a list of analytics datasets for a given Amazon Connect instance to a target account. You can associate multiple datasets in a single call",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-ids",
          description: "An array of dataset identifiers to associate",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-account-id",
          description:
            "The identifier of the target account. Use to associate a dataset to a different account than the one containing the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-disassociate-analytics-data-set",
      description:
        "Removes a list of analytics datasets associated with a given Amazon Connect instance. You can disassociate multiple datasets in a single call",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-ids",
          description: "An array of associated dataset identifiers to remove",
          args: {
            name: "list",
          },
        },
        {
          name: "--target-account-id",
          description:
            "The identifier of the target account. Use to disassociate a dataset from a different account than the one containing the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-attached-file-metadata",
      description:
        "Allows you to retrieve metadata about multiple attached files on an associated resource. Each attached file provided in the input list must be associated with the input AssociatedResourceArn",
      options: [
        {
          name: "--file-ids",
          description: "The unique identifiers of the attached file resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-id",
          description: "The unique identifier of the Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-resource-arn",
          description:
            "The resource to which the attached file is (being) uploaded to. The supported resources are Cases and Email.  This value must be a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-get-flow-association",
      description: "Retrieve the flow associations for the given resources",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-ids",
          description:
            "A list of resource identifiers to retrieve flow associations.   Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER    Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER",
          args: {
            name: "list",
          },
        },
        {
          name: "--resource-type",
          description: "The type of resource association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "batch-put-contact",
      description:
        "Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API.  Allows you to create a batch of contacts in Amazon Connect. The outbound campaigns capability ingests dial requests via the PutDialRequestBatch API. It then uses BatchPutContact to create contacts corresponding to those dial requests. If agents are available, the dial requests are dialed out, which results in a voice call. The resulting voice call uses the same contactId that was created by BatchPutContact",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-data-request-list",
          description: "List of individual contact requests",
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
      name: "claim-phone-number",
      description:
        "Claims an available phone number to your Amazon Connect instance or traffic distribution group. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance or traffic distribution group was created. For more information about how to use this operation, see Claim a phone number in your country and Claim phone numbers to traffic distribution groups in the Amazon Connect Administrator Guide.   You can call the SearchAvailablePhoneNumbers API for available phone numbers that you can claim. Call the DescribePhoneNumber API to verify the status of a previous ClaimPhoneNumber operation.  If you plan to claim and release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim and release up to 200% of your maximum number of active phone numbers. If you claim and release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 180 days past the oldest number released has expired.  For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket",
      options: [
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number",
          description:
            "The phone number you want to claim. Phone numbers are formatted [+] [country code] [subscriber number including area code]",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-description",
          description: "The description of the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. Pattern: ^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "complete-attached-file-upload",
      description:
        "Allows you to confirm that the attached file has been uploaded using the pre-signed URL provided in the StartAttachedFileUpload API",
      options: [
        {
          name: "--instance-id",
          description: "The unique identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-id",
          description: "The unique identifier of the attached file resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-resource-arn",
          description:
            "The resource to which the attached file is (being) uploaded to. The supported resources are Cases and Email.  This value must be a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-agent-status",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates an agent status for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the status",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the status",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the status",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-order",
          description: "The display order of the status",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-contact",
      description: "Creates a new contact",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: URL | NUMBER | STRING | DATE | EMAIL | ATTACHMENT",
          args: {
            name: "map",
          },
        },
        {
          name: "--channel",
          description: "The channel for the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--initiation-method",
          description: "Indicates how the contact was initiated",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiry-duration-in-minutes",
          description:
            "Number of minutes the contact will be active for before expiring",
          args: {
            name: "integer",
          },
        },
        {
          name: "--user-info",
          description: "User details for the contact",
          args: {
            name: "structure",
          },
        },
        {
          name: "--initiate-as",
          description: "Initial state of the contact when it's created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of a the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-attributes",
          description:
            'A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows. Attribute keys can include only alphanumeric, -, and _. This field can be used to set Segment Contact Expiry as a duration in minutes.  To set contact expiry, a ValueMap must be specified containing the integer number of minutes the contact will be active for before expiring, with SegmentAttributes like {  "connect:ContactExpiry": {"ValueMap" : { "ExpiryDuration": { "ValueInteger": 135}}}}',
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
      name: "create-contact-flow",
      description:
        "Creates a flow for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the flow. For descriptions of the available types, see Choose a flow type in the Amazon Connect Administrator Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language.  Length Constraints: Minimum length of 1. Maximum length of 256000",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates the flow status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. the SAVED status does not initiate validation of the content. SAVED | PUBLISHED",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-contact-flow-module",
      description:
        "Creates a flow module for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-contact-flow-version",
      description:
        "Publishes a new version of the flow provided. Versions are immutable and monotonically increasing. If a version of the same flow content already exists, no new version is created and instead the existing version number is returned. If the FlowContentSha256 provided is different from the FlowContentSha256 of the $LATEST published flow content, then an error is returned. This API only supports creating versions for flows of type Campaign",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow version",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--flow-content-sha256",
          description: "Indicates the checksum value of the flow content",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-modified-time",
          description:
            "The Amazon Web Services Region where this resource was last modified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--last-modified-region",
          description:
            "The Amazon Web Services Region where this resource was last modified",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-email-address",
      description:
        "Create new email address in the specified Amazon Connect instance. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--description",
          description: "The description of the email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address",
          description:
            "The email address with the instance, in [^\\s@]+@[^\\s@]+\\.[^\\s@]+ format",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name of email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-evaluation-form",
      description:
        "Creates an evaluation form in the specified Amazon Connect instance. The form can be used to define questions related to agent performance, and create sections to organize such questions. Question and section identifiers cannot be duplicated within the same evaluation form",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--title",
          description: "A title of the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--items",
          description:
            "Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section",
          args: {
            name: "list",
          },
        },
        {
          name: "--scoring-strategy",
          description: "A scoring strategy of the evaluation form",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates hours of operation",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-zone",
          description: "The time zone of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--config",
          description:
            "Configuration information for the hours of operation: day, start time, and end time",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis. It also does not allow for any configurations on features, such as Contact Lens for Amazon Connect.  For more information, see Create an Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-management-type",
          description:
            "The type of identity management for your Amazon Connect users",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-alias",
          description: "The name for your instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--directory-id",
          description: "The identifier for the directory",
          args: {
            name: "string",
          },
        },
        {
          name: "--inbound-calls-enabled",
          description: "Your contact center handles incoming contacts",
        },
        {
          name: "--no-inbound-calls-enabled",
          description: "Your contact center handles incoming contacts",
        },
        {
          name: "--outbound-calls-enabled",
          description: "Your contact center allows outbound calls",
        },
        {
          name: "--no-outbound-calls-enabled",
          description: "Your contact center allows outbound calls",
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-integration-association",
      description:
        "Creates an Amazon Web Services resource association with an Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-type",
          description: "The type of information to be ingested",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-arn",
          description:
            "The Amazon Resource Name (ARN) of the integration.  When integrating with Amazon Web Services End User Messaging, the Amazon Connect and Amazon Web Services End User Messaging instances must be in the same account",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-application-url",
          description:
            "The URL for the external application. This field is only required for the EVENT integration type",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-application-name",
          description:
            "The name of the external application. This field is only required for the EVENT integration type",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-type",
          description:
            "The type of the data source. This field is only required for the EVENT integration type",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-participant",
      description:
        "Adds a new participant into an on-going chat contact. For more information, see Customize chat flow experiences by integrating custom participants",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect. Only contacts in the CHAT channel are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-details",
          description:
            "Information identifying the participant.  The only Valid value for ParticipantRole is CUSTOM_BOT.   DisplayName is Required",
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
      name: "create-persistent-contact-association",
      description:
        "Enables rehydration of chats for the lifespan of a contact. For more information about chat rehydration, see Enable persistent chat in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description:
            "This is the contactId of the current contact that the CreatePersistentContactAssociation API is being called from",
          args: {
            name: "string",
          },
        },
        {
          name: "--rehydration-type",
          description:
            'The contactId chosen for rehydration depends on the type chosen.    ENTIRE_PAST_SESSION: Rehydrates a chat from the most recently terminated past chat contact of the specified past ended chat session. To use this type, provide the initialContactId of the past ended chat session in the sourceContactId field. In this type, Amazon Connect determines what the most recent chat contact on the past ended chat session and uses it to start a persistent chat.     FROM_SEGMENT: Rehydrates a chat from the specified past chat contact provided in the sourceContactId field.    The actual contactId used for rehydration is provided in the response of this API. To illustrate how to use rehydration type, consider the following example: A customer starts a chat session. Agent a1 accepts the chat and a conversation starts between the customer and Agent a1. This first contact creates a contact ID C1. Agent a1 then transfers the chat to Agent a2. This creates another contact ID C2. At this point Agent a2 ends the chat. The customer is forwarded to the disconnect flow for a post chat survey that creates another contact ID C3. After the chat survey, the chat session ends. Later, the customer returns and wants to resume their past chat session. At this point, the customer can have following use cases:     Use Case 1: The customer wants to continue the past chat session but they want to hide the post chat survey. For this they will use the following configuration:    Configuration    SourceContactId = "C2"   RehydrationType = "FROM_SEGMENT"      Expected behavior    This starts a persistent chat session from the specified past ended contact (C2). Transcripts of past chat sessions C2 and C1 are accessible in the current persistent chat session. Note that chat segment C3 is dropped from the persistent chat session.        Use Case 2: The customer wants to continue the past chat session and see the transcript of the entire past engagement, including the post chat survey. For this they will use the following configuration:    Configuration    SourceContactId = "C1"   RehydrationType = "ENTIRE_PAST_SESSION"      Expected behavior    This starts a persistent chat session from the most recently ended chat contact (C3). Transcripts of past chat sessions C3, C2 and C1 are accessible in the current persistent chat session',
          args: {
            name: "string",
          },
        },
        {
          name: "--source-contact-id",
          description:
            "The contactId from which a persistent chat session must be started",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-predefined-attribute",
      description:
        "Creates a new predefined attribute for the specified Amazon Connect instance. Predefined attributes are attributes in an Amazon Connect instance that can be used to route contacts to an agent or pools of agents within a queue. For more information, see Create predefined attributes for routing contacts to agents",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the predefined attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description: "The values of the predefined attribute",
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
      name: "create-prompt",
      description:
        "Creates a prompt. For more information about prompts, such as supported file types and maximum length, see Create prompts in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-uri",
          description:
            "The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the GetPromptFile API instead of providing S3 URIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-push-notification-registration",
      description:
        "Creates registration for a device token and a chat contact to receive real-time push notifications. For more information about push notifications, see Set up push notifications in Amazon Connect for mobile chat in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--pinpoint-app-arn",
          description:
            "The Amazon Resource Name (ARN) of the Pinpoint application",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-token",
          description:
            "The push notification token issued by the Apple or Google gateways",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-type",
          description: "The device type to use when sending the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-configuration",
          description:
            "The contact configuration for push notification registration",
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
      name: "create-queue",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Creates a new queue for the specified Amazon Connect instance.    If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.   Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API.   If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--outbound-caller-config",
          description:
            "The outbound caller ID name, number, and outbound whisper flow",
          args: {
            name: "structure",
          },
        },
        {
          name: "--outbound-email-config",
          description: "The outbound email address ID for a specified queue",
          args: {
            name: "structure",
          },
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-contacts",
          description:
            "The maximum number of contacts that can be in the queue before it is considered full",
          args: {
            name: "integer",
          },
        },
        {
          name: "--quick-connect-ids",
          description:
            "The quick connects available to agents who are working the queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-quick-connect",
      description:
        "Creates a quick connect for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A unique name of the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-config",
          description: "Configuration settings for the quick connect",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-routing-profile",
      description: "Creates a new routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the routing profile. Must not be more than 127 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "Description of the routing profile. Must not be more than 250 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-outbound-queue-id",
          description: "The default outbound queue for the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-configs",
          description:
            "The inbound queues associated with the routing profile. If no queue is added, the agent can make only outbound calls. The limit of 10 array members applies to the maximum number of RoutingProfileQueueConfig objects that can be passed during a CreateRoutingProfile API request. It is different from the quota of 50 queues per routing profile per instance that is listed in Amazon Connect service quotas",
          args: {
            name: "list",
          },
        },
        {
          name: "--media-concurrencies",
          description:
            "The channels that agents can handle in the Contact Control Panel (CCP) for this routing profile",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--agent-availability-timer",
          description:
            "Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-rule",
      description:
        "Creates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A unique name for the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-event-source",
          description: "The event source to trigger the rule",
          args: {
            name: "structure",
          },
        },
        {
          name: "--function",
          description: "The conditions of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "A list of actions to be run when the rule is triggered",
          args: {
            name: "list",
          },
        },
        {
          name: "--publish-status",
          description: "The publish status of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-security-profile",
      description:
        "Creates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--security-profile-name",
          description: "The name of the security profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the security profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "Permissions assigned to the security profile. For a list of valid permissions, see List of security profile permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--allowed-access-control-tags",
          description:
            "The list of tags that a security profile uses to restrict access to resources in Amazon Connect",
          args: {
            name: "map",
          },
        },
        {
          name: "--tag-restricted-resources",
          description:
            "The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: User | SecurityProfile | Queue | RoutingProfile",
          args: {
            name: "list",
          },
        },
        {
          name: "--applications",
          description:
            "A list of third-party applications that the security profile will give access to",
          args: {
            name: "list",
          },
        },
        {
          name: "--hierarchy-restricted-resources",
          description:
            "The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: User",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-access-control-hierarchy-group-id",
          description:
            "The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-task-template",
      description:
        "Creates a new task template in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow that runs by default when a task is created by referencing this template",
          args: {
            name: "string",
          },
        },
        {
          name: "--self-assign-flow-id",
          description:
            "The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task",
          args: {
            name: "string",
          },
        },
        {
          name: "--constraints",
          description: "Constraints that are applicable to the fields listed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--defaults",
          description:
            "The default values for fields when a task is created by referencing this template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description: "Fields that are part of the template",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-traffic-distribution-group",
      description:
        "Creates a traffic distribution group given an Amazon Connect instance that has been replicated.  The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned.  For more information about creating traffic distribution groups, see Set up traffic distribution groups in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--name",
          description: "The name for the traffic distribution group",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the traffic distribution group",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance that has been replicated. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-use-case",
      description: "Creates a use case for an integration association",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the integration association",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-case-type",
          description:
            "The type of use case to associate to the integration association. Each integration association can have only one of each use case type",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-user",
      description:
        "Creates a user account for the specified Amazon Connect instance.  Certain UserIdentityInfo parameters are required in some situations. For example, Email is required if you are using SAML for identity management. FirstName and LastName are required if you are using Amazon Connect or SAML for identity management.  For information about how to create users using the Amazon Connect admin website, see Add Users in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--username",
          description:
            "The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\\@]+. Username can include @ only if used in an email format. For example:   Correct: testuser   Correct: testuser@example.com   Incorrect: testuser@example",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description:
            "The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-info",
          description: "The information about the identity of the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--phone-config",
          description: "The phone settings for the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--directory-user-id",
          description:
            "The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-profile-ids",
          description: "The identifier of the security profile for the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-user-hierarchy-group",
      description: "Creates a new user hierarchy group",
      options: [
        {
          name: "--name",
          description:
            "The name of the user hierarchy group. Must not be more than 100 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-group-id",
          description:
            "The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-view",
      description:
        "Creates a new view with the possible status of SAVED or PUBLISHED. The views will have a unique name for each connect instance. It performs basic content validation if the status is SAVED or full content validation if the status is set to PUBLISHED. An error is returned if validation fails. It associates either the $SAVED qualifier or both of the $SAVED and $LATEST qualifiers with the provided view content based on the status. The view is idempotent if ClientToken is provided",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique Id for each create view request to avoid duplicate view creation. For example, the view is idempotent ClientToken is provided",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates the view status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "View content containing all content necessary to render a view except for runtime input data. The total uncompressed content has a maximum file size of 400kB",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "The description of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags associated with the view resource (not specific to view version).These tags can be used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "create-view-version",
      description:
        "Publishes a new version of the view identifier. Versions are immutable and monotonically increasing. It returns the highest version if there is no change in content compared to that version. An error is displayed if the supplied ViewContentSha256 is different from the ViewContentSha256 of the $LATEST alias",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description: "The description for the version being published",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-content-sha256",
          description:
            "Indicates the checksum value of the latest published view content",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-vocabulary",
      description:
        "Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. If a create request is received more than once with same client token, subsequent requests return the previous response without creating a vocabulary again",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-name",
          description: "A unique name of the custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe?",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with Phrase, IPA, SoundsLike, and DisplayAs fields. Separate the fields with TAB characters. The size limit is 50KB. For more information, see Create a custom vocabulary using a table",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "deactivate-evaluation-form",
      description:
        "Deactivates an evaluation form in the specified Amazon Connect instance. After a form is deactivated, it is no longer available for users to start new evaluations based on the form",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-version",
          description:
            "A version of the evaluation form. If the version property is not provided, the latest version of the evaluation form is deactivated",
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
      name: "delete-attached-file",
      description:
        "Deletes an attached file along with the underlying S3 Object.  The attached file is permanently deleted if S3 bucket versioning is not enabled",
      options: [
        {
          name: "--instance-id",
          description: "The unique identifier of the Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-id",
          description: "The unique identifier of the attached file resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-resource-arn",
          description:
            "The resource to which the attached file is (being) uploaded to. Cases are the only current supported resource.  This value must be a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-contact-evaluation",
      description:
        "Deletes a contact evaluation in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-id",
          description: "A unique identifier for the contact evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-contact-flow",
      description: "Deletes a flow for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-contact-flow-module",
      description: "Deletes the specified flow module",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-module-id",
          description: "The identifier of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-email-address",
      description:
        "Deletes email address from the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address-id",
          description: "The identifier of the email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-evaluation-form",
      description:
        "Deletes an evaluation form in the specified Amazon Connect instance.    If the version property is provided, only the specified version of the evaluation form is deleted.   If no version is provided, then the full form (all versions) is deleted",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-version",
          description: "The unique identifier for the evaluation form",
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
      name: "delete-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes an hours of operation",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance. For more information, see Delete your Amazon Connect instance in the Amazon Connect Administrator Guide. Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-integration-association",
      description:
        "Deletes an Amazon Web Services resource association from an Amazon Connect instance. The association must not have any use cases associated with it",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the integration association",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-predefined-attribute",
      description:
        "Deletes a predefined attribute from the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the predefined attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-prompt",
      description: "Deletes a prompt",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-id",
          description: "A unique identifier for the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-push-notification-registration",
      description: "Deletes registration for a device token and a chat contact",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--registration-id",
          description: "The identifier for the registration",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact within the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-queue",
      description:
        "Deletes a queue. It isn't possible to delete a queue by using the Amazon Connect admin website",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-quick-connect",
      description:
        "Deletes a quick connect.   After calling DeleteUser, it's important to call DeleteQuickConnect to delete any records related to the deleted users. This will help you:   Avoid dangling resources that impact your service quotas.   Remove deleted users so they don't appear to agents as transfer options.   Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-routing-profile",
      description: "Deletes a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-rule",
      description: "Deletes a rule for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description: "A unique identifier for the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-security-profile",
      description: "Deletes a security profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--security-profile-id",
          description: "The identifier for the security profle",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-task-template",
      description: "Deletes the task template",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-template-id",
          description: "A unique identifier for the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-traffic-distribution-group",
      description:
        "Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created. For more information about deleting traffic distribution groups, see Delete traffic distribution groups in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--traffic-distribution-group-id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-use-case",
      description: "Deletes a use case from an integration association",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the integration association",
          args: {
            name: "string",
          },
        },
        {
          name: "--use-case-id",
          description: "The identifier for the use case",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.  After calling DeleteUser, call DeleteQuickConnect to delete any records related to the deleted users. This will help you:   Avoid dangling resources that impact your service quotas.   Remove deleted users so they don't appear to agents as transfer options.   Avoid the disruption of other Amazon Connect processes, such as instance replication and syncing if you're using Amazon Connect Global Resiliency",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-hierarchy-group",
      description:
        "Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-view",
      description:
        "Deletes the view entirely. It deletes the view and all associated qualifiers (versions and aliases)",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-view-version",
      description:
        "Deletes the particular version specified in ViewVersion identifier",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-version",
          description: "The version number of the view",
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
      name: "delete-vocabulary",
      description: "Deletes the vocabulary that has the given identifier",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-id",
          description: "The identifier of the custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-agent-status",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes an agent status",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-status-id",
          description: "The identifier for the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-authentication-profile",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Describes the target authentication profile",
      options: [
        {
          name: "--authentication-profile-id",
          description: "A unique identifier for the authentication profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-contact",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the specified contact.   Contact information remains available in Amazon Connect for 24 months from the InitiationTimestamp, and then it is deleted. Only contact information that is available in Amazon Connect is returned by this API",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-contact-evaluation",
      description:
        "Describes a contact evaluation in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-id",
          description: "A unique identifier for the contact evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-contact-flow",
      description:
        "Describes the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/{id}:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published. In the response, Status indicates the flow status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content. SAVED does not initiate validation of the content. SAVED | PUBLISHED",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-contact-flow-module",
      description:
        "Describes the specified flow module. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/{id}:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-module-id",
          description: "The identifier of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-email-address",
      description:
        "Describe email address form the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address-id",
          description: "The identifier of the email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-evaluation-form",
      description:
        "Describes an evaluation form in the specified Amazon Connect instance. If the version property is not provided, the latest version of the evaluation form is described",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "A unique identifier for the contact evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-version",
          description: "A version of the evaluation form",
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
      name: "describe-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the hours of operation",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-instance",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status, if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-instance-attribute",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the specified instance attribute",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-type",
          description: "The type of attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Retrieves the current storage configurations for the specified resource type, association ID, and instance ID",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-phone-number",
      description:
        "Gets details and status of a phone number that\u2019s claimed to your Amazon Connect instance or traffic distribution group.  If the number is claimed to a traffic distribution group, and you are calling in the Amazon Web Services Region where the traffic distribution group was created, you can use either a phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you receive a ResourceNotFoundException",
      options: [
        {
          name: "--phone-number-id",
          description: "A unique identifier for the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-predefined-attribute",
      description:
        "Describes a predefined attribute for the specified Amazon Connect instance. Predefined attributes are attributes in an Amazon Connect instance that can be used to route contacts to an agent or pools of agents within a queue. For more information, see Create predefined attributes for routing contacts to agents",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the predefined attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-prompt",
      description: "Describes the prompt",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-id",
          description: "A unique identifier for the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-queue",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Describes the specified queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-quick-connect",
      description: "Describes the quick connect",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-routing-profile",
      description: "Describes the specified routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-rule",
      description: "Describes a rule for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--rule-id",
          description: "A unique identifier for the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-security-profile",
      description:
        "Gets basic information about the security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--security-profile-id",
          description: "The identifier for the security profle",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-traffic-distribution-group",
      description: "Gets details and status of a traffic distribution group",
      options: [
        {
          name: "--traffic-distribution-group-id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user",
      description:
        "Describes the specified user. You can find the instance ID in the Amazon Connect console (it\u2019s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output",
      options: [
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-hierarchy-group",
      description: "Describes the specified hierarchy group",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user-hierarchy-structure",
      description:
        "Describes the hierarchy structure of the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-view",
      description:
        "Retrieves the view for the specified Amazon Connect instance and view identifier. The view identifier can be supplied as a ViewId or ARN.  $SAVED needs to be supplied if a view is unpublished. The view identifier can contain an optional qualifier, for example, <view-id>:$SAVED, which is either an actual version number or an Amazon Connect managed qualifier $SAVED | $LATEST. If it is not supplied, then $LATEST is assumed for customer managed views and an error is returned if there is no published content available. Version 1 is assumed for Amazon Web Services managed views",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The ViewId of the view. This must be an ARN for Amazon Web Services managed views",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-vocabulary",
      description: "Describes the specified vocabulary",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--vocabulary-id",
          description: "The identifier of the custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-analytics-data-set",
      description:
        "Removes the dataset ID associated with a given Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The identifier of the dataset to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-account-id",
          description:
            "The identifier of the target account. Use to associate a dataset to a different account than the one containing the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-approved-origin",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Revokes access to integrated applications from Amazon Connect",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--origin",
          description: "The domain URL of the integrated application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex or Amazon Lex V2 bot",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--lex-bot",
          description: "Configuration information of an Amazon Lex bot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lex-v2-bot",
          description:
            "The Amazon Lex V2 bot to disassociate from the instance",
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
      name: "disassociate-flow",
      description: "Disassociates a connect resource from a flow",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource.   Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER    Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Removes the storage type configurations for the specified resource type and association ID",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-lambda-function",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant flow blocks",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--function-arn",
          description:
            "The Amazon Resource Name (ARN) of the Lambda function being disassociated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-lex-bot",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Revokes authorization from the specified instance to access the specified Amazon Lex bot",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-name",
          description:
            "The name of the Amazon Lex bot. Maximum character limit of 50",
          args: {
            name: "string",
          },
        },
        {
          name: "--lex-region",
          description:
            "The Amazon Web Services Region in which the Amazon Lex bot has been created",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-phone-number-contact-flow",
      description:
        "Removes the flow association from a phone number claimed to your Amazon Connect instance.  If the number is claimed to a traffic distribution group, and you are calling this API using an instance in the Amazon Web Services Region where the traffic distribution group was created, you can use either a full phone number ARN or UUID value for the PhoneNumberId URI request parameter. However, if the number is claimed to a traffic distribution group and you are calling this API using an instance in the alternate Amazon Web Services Region associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException",
      options: [
        {
          name: "--phone-number-id",
          description: "A unique identifier for the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Disassociates a set of quick connects from a queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-ids",
          description: "The quick connects to disassociate from the queue",
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
      name: "disassociate-routing-profile-queues",
      description: "Disassociates a set of queues from a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-references",
          description: "The queues to disassociate from this routing profile",
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
      name: "disassociate-security-key",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Deletes the specified security key",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-traffic-distribution-group-user",
      description:
        "Disassociates an agent from a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created",
      options: [
        {
          name: "--traffic-distribution-group-id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier for the user. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disassociate-user-proficiencies",
      description: "Disassociates a set of proficiencies from a user",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-proficiencies",
          description: "The proficiencies to disassociate from the user",
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
      name: "dismiss-user-contact",
      description:
        "Dismisses contacts from an agent\u2019s CCP and returns the agent to an available state, which allows the agent to receive a new routed contact. Contacts can only be dismissed if they are in a MISSED, ERROR, ENDED, or REJECTED state in the Agent Event Stream",
      options: [
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-attached-file",
      description:
        "Provides a pre-signed URL for download of an approved attached file. This API also returns metadata about the attached file. It will only return a downloadURL if the status of the attached file is APPROVED",
      options: [
        {
          name: "--instance-id",
          description: "The unique identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-id",
          description: "The unique identifier of the attached file resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--url-expiry-in-seconds",
          description:
            "Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300",
          args: {
            name: "integer",
          },
        },
        {
          name: "--associated-resource-arn",
          description:
            "The resource to which the attached file is (being) uploaded to. The supported resources are Cases and Email.  This value must be a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-contact-attributes",
      description: "Retrieves the contact attributes for the specified contact",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description: "The identifier of the initial contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-current-metric-data",
      description:
        "Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filters to apply to returned metrics. You can filter up to the following limits:   Queues: 100   Routing profiles: 100   Channels: 3 (VOICE, CHAT, and TASK channels are supported.)   RoutingStepExpressions: 50   Metric data is retrieved only for the resources associated with the queues or routing profiles, and by any channels included in the filter. (You cannot filter by both queue AND routing profile.) You can include both resource IDs and resource ARNs in the same request. When using the RoutingStepExpression filter, you need to pass exactly one QueueId. The filter is also case sensitive so when using the RoutingStepExpression filter, grouping by ROUTING_STEP_EXPRESSION is required. Currently tagging is only supported on the resources that are passed in the filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--groupings",
          description:
            "The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues.    If you group by CHANNEL, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported.   If you group by ROUTING_PROFILE, you must include either a queue or routing profile filter. In addition, a routing profile filter is required for metrics CONTACTS_SCHEDULED, CONTACTS_IN_QUEUE, and  OLDEST_CONTACT_AGE.   If no Grouping is included in the request, a summary of metrics is returned.   When using the RoutingStepExpression filter, group by ROUTING_STEP_EXPRESSION is required",
          args: {
            name: "list",
          },
        },
        {
          name: "--current-metrics",
          description:
            'The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.  AGENTS_AFTER_CONTACT_WORK  Unit: COUNT Name in real-time metrics report: ACW   AGENTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Available   AGENTS_ERROR  Unit: COUNT Name in real-time metrics report: Error   AGENTS_NON_PRODUCTIVE  Unit: COUNT Name in real-time metrics report: NPT (Non-Productive Time)   AGENTS_ON_CALL  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ON_CONTACT  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ONLINE  Unit: COUNT Name in real-time metrics report: Online   AGENTS_STAFFED  Unit: COUNT Name in real-time metrics report: Staffed   CONTACTS_IN_QUEUE  Unit: COUNT Name in real-time metrics report: In queue   CONTACTS_SCHEDULED  Unit: COUNT Name in real-time metrics report: Scheduled   OLDEST_CONTACT_AGE  Unit: SECONDS When you use groupings, Unit says SECONDS and the Value is returned in SECONDS.  When you do not use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:  { "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 } The actual OLDEST_CONTACT_AGE is 24 seconds. When the filter RoutingStepExpression is used, this metric is still calculated from enqueue time. For example, if a contact that has been queued under <Expression 1> for 10 seconds has expired and <Expression 2> becomes active, then OLDEST_CONTACT_AGE for this queue will be counted starting from 10, not 0. Name in real-time metrics report: Oldest   SLOTS_ACTIVE  Unit: COUNT Name in real-time metrics report: Active   SLOTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Availability',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--sort-criteria",
          description:
            "The way to sort the resulting response based on metrics. You can enter one sort criteria. By default resources are sorted based on AGENTS_ONLINE, DESCENDING. The metric collection is sorted based on the input metrics. Note the following:   Sorting on SLOTS_ACTIVE and SLOTS_AVAILABLE is not supported",
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
      name: "get-current-user-data",
      description:
        "Gets the real-time active user data from the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filters to apply to returned user data. You can filter up to the following limits:   Queues: 100   Routing profiles: 100   Agents: 100   Contact states: 9   User hierarchy groups: 1    The user data is retrieved for only the specified values/resources in the filter. A maximum of one filter can be passed from queues, routing profiles, agents, and user hierarchy groups.  Currently tagging is only supported on the resources that are passed in the filter",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "get-federation-token",
      description:
        "Supports SAML sign-in for Amazon Connect. Retrieves a token for federation. The token is for the Amazon Connect user which corresponds to the IAM credentials that were used to invoke this action.  For more information about how SAML sign-in works in Amazon Connect, see Configure SAML with IAM for Amazon Connect in the Amazon Connect Administrator Guide.   This API doesn't support root users. If you try to invoke GetFederationToken with root credentials, an error message similar to the following one appears:   Provided identity: Principal: .... User: .... cannot be used for federation with Amazon Connect",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-flow-association",
      description: "Retrieves the flow associated for a given resource",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource.   Amazon Web Services End User Messaging SMS phone number ARN when using SMS_PHONE_NUMBER    Amazon Web Services End User Messaging Social phone number ARN when using WHATSAPP_MESSAGING_PHONE_NUMBER",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-metric-data",
      description:
        "Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.  We recommend using the GetMetricDataV2 API. It provides more flexibility, features, and the ability to query longer time ranges than GetMetricData. Use it to retrieve historical agent and contact metrics for the last 3 months, at varying intervals. You can also use it to build custom dashboards to measure historical queue and agent performance. For example, you can track the number of incoming contacts for the last 7 days, with data split by day, to see how contact volume changed per day of the week",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15. The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp. The time range between the start and end time must be less than 24 hours",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--filters",
          description:
            "The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported. RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for more up-to-date features.  To filter by Queues, enter the queue ID/ARN, not the name of the queue",
          args: {
            name: "structure",
          },
        },
        {
          name: "--groupings",
          description:
            "The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues. If no grouping is specified, a summary of metrics for all queues is returned. RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to GetMetricDataV2 for more up-to-date features",
          args: {
            name: "list",
          },
        },
        {
          name: "--historical-metrics",
          description:
            'The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.  This API does not support a contacts incoming metric (there\'s no CONTACTS_INCOMING metric missing from the documented list).    ABANDON_TIME  Unit: SECONDS Statistic: AVG  AFTER_CONTACT_WORK_TIME  Unit: SECONDS Statistic: AVG  API_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_ABANDONED  Unit: COUNT Statistic: SUM  CONTACTS_AGENT_HUNG_UP_FIRST  Unit: COUNT Statistic: SUM  CONTACTS_CONSULTED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_INCOMING  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_OUTBOUND  Unit: COUNT Statistic: SUM  CONTACTS_HOLD_ABANDONS  Unit: COUNT Statistic: SUM  CONTACTS_MISSED  Unit: COUNT Statistic: SUM  CONTACTS_QUEUED  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN_FROM_QUEUE  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: COUNT Statistic: SUM  HANDLE_TIME  Unit: SECONDS Statistic: AVG  HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_AND_HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_TIME  Unit: SECONDS Statistic: AVG  OCCUPANCY  Unit: PERCENT Statistic: AVG  QUEUE_ANSWER_TIME  Unit: SECONDS Statistic: AVG  QUEUED_TIME  Unit: SECONDS Statistic: MAX  SERVICE_LEVEL  You can include up to 20 SERVICE_LEVEL metrics in a request. Unit: PERCENT Statistic: AVG Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you must enter LT (for "Less than")',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "get-metric-data-v2",
      description:
        "Gets metric data from the specified Amazon Connect instance.   GetMetricDataV2 offers more features than GetMetricData, the previous version of this API. It has new metrics, offers filtering at a metric level, and offers the ability to filter and group data by channels, queues, routing profiles, agents, and agent hierarchy levels. It can retrieve historical data for the last 3 months, at varying intervals. It does not support agent queues. For a description of the historical metrics that are supported by GetMetricDataV2 and GetMetricData, see Historical metrics definitions in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. This includes the instanceId an Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be before the end time timestamp. The start and end time depends on the IntervalPeriod selected. By default the time range between start and end time is 35 days. Historical metrics are available for 3 months",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be later than the start time timestamp. It cannot be later than the current timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--interval",
          description:
            "The interval period and timezone to apply to returned metrics.    IntervalPeriod: An aggregated grouping applied to request metrics. Valid IntervalPeriod values are: FIFTEEN_MIN | THIRTY_MIN | HOUR | DAY | WEEK | TOTAL.  For example, if IntervalPeriod is selected THIRTY_MIN, StartTime and EndTime differs by 1 day, then Amazon Connect returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By default Amazon Connect aggregates results based on the TOTAL interval period.  The following list describes restrictions on StartTime and EndTime based on which IntervalPeriod is requested.     FIFTEEN_MIN: The difference between StartTime and EndTime must be less than 3 days.    THIRTY_MIN: The difference between StartTime and EndTime must be less than 3 days.    HOUR: The difference between StartTime and EndTime must be less than 3 days.    DAY: The difference between StartTime and EndTime must be less than 35 days.    WEEK: The difference between StartTime and EndTime must be less than 35 days.    TOTAL: The difference between StartTime and EndTime must be less than 35 days.      TimeZone: The timezone applied to requested metrics",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "The filters to apply to returned metrics. You can filter on the following resources:   Agents   Campaigns   Channels   Feature   Queues   Routing profiles   Routing step expression   User hierarchy groups   At least one filter must be passed from queues, routing profiles, agents, or user hierarchy groups. For metrics for outbound campaigns analytics, you can also use campaigns to satisfy at least one filter requirement. To filter by phone number, see Create a historical metrics report in the Amazon Connect Administrator Guide. Note the following limits:    Filter keys: A maximum of 5 filter keys are supported in a single request. Valid filter keys: AGENT | AGENT_HIERARCHY_LEVEL_ONE | AGENT_HIERARCHY_LEVEL_TWO | AGENT_HIERARCHY_LEVEL_THREE | AGENT_HIERARCHY_LEVEL_FOUR | AGENT_HIERARCHY_LEVEL_FIVE | ANSWERING_MACHINE_DETECTION_STATUS |  BOT_ID | BOT_ALIAS | BOT_VERSION | BOT_LOCALE | BOT_INTENT_NAME | CAMPAIGN | CAMPAIGN_DELIVERY_EVENT_TYPE |CASE_TEMPLATE_ARN | CASE_STATUS | CHANNEL | contact/segmentAttributes/connect:Subtype | DISCONNECT_REASON | FEATURE | FLOW_ACTION_ID | FLOW_TYPE | FLOWS_MODULE_RESOURCE_ID | FLOWS_NEXT_RESOURCE_ID | FLOWS_NEXT_RESOURCE_QUEUE_ID | FLOWS_OUTCOME_TYPE | FLOWS_RESOURCE_ID | INITIATION_METHOD | INVOKING_RESOURCE_PUBLISHED_TIMESTAMP | INVOKING_RESOURCE_TYPE | PARENT_FLOWS_RESOURCE_ID | RESOURCE_PUBLISHED_TIMESTAMP | ROUTING_PROFILE | ROUTING_STEP_EXPRESSION | QUEUE | Q_CONNECT_ENABLED |     Filter values: A maximum of 100 filter values are supported in a single request. VOICE, CHAT, and TASK are valid filterValue for the CHANNEL filter key. They do not count towards limitation of 100 filter values. For example, a GetMetricDataV2 request can filter by 50 queues, 35 agents, and 15 routing profiles for a total of 100 filter values, along with 3 channel filters.   contact_lens_conversational_analytics is a valid filterValue for the FEATURE filter key. It is available only to contacts analyzed by Contact Lens conversational analytics.  connect:Chat, connect:SMS, connect:Telephony, and connect:WebRTC are valid filterValue examples (not exhaustive) for the contact/segmentAttributes/connect:Subtype filter key.  ROUTING_STEP_EXPRESSION is a valid filter key with a filter value up to 3000 length. This filter is case and order sensitive. JSON string fields must be sorted in ascending order and JSON array order should be kept as is.  Q_CONNECT_ENABLED. TRUE and FALSE are the only valid filterValues for the Q_CONNECT_ENABLED filter key.    TRUE includes all contacts that had Amazon Q in Connect enabled as part of the flow.   FALSE includes all contacts that did not have Amazon Q in Connect enabled as part of the flow   This filter is available only for contact record-driven metrics.   Campaign ARNs are valid filterValues for the CAMPAIGN filter key",
          args: {
            name: "list",
          },
        },
        {
          name: "--groupings",
          description:
            "The grouping applied to the metrics that are returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values that are returned apply to the metrics for each queue. They are not aggregated for all queues. If no grouping is specified, a summary of all metrics is returned. Valid grouping keys: AGENT | AGENT_HIERARCHY_LEVEL_ONE | AGENT_HIERARCHY_LEVEL_TWO | AGENT_HIERARCHY_LEVEL_THREE | AGENT_HIERARCHY_LEVEL_FOUR | AGENT_HIERARCHY_LEVEL_FIVE | ANSWERING_MACHINE_DETECTION_STATUS | BOT_ID | BOT_ALIAS | BOT_VERSION | BOT_LOCALE | BOT_INTENT_NAME | CAMPAIGN | CAMPAIGN_DELIVERY_EVENT_TYPE | CASE_TEMPLATE_ARN | CASE_STATUS | CHANNEL | contact/segmentAttributes/connect:Subtype | DISCONNECT_REASON | FLOWS_RESOURCE_ID | FLOWS_MODULE_RESOURCE_ID | FLOW_ACTION_ID | FLOW_TYPE | FLOWS_OUTCOME_TYPE | INITIATION_METHOD | INVOKING_RESOURCE_PUBLISHED_TIMESTAMP | INVOKING_RESOURCE_TYPE | PARENT_FLOWS_RESOURCE_ID | Q_CONNECT_ENABLED | QUEUE | RESOURCE_PUBLISHED_TIMESTAMP | ROUTING_PROFILE | ROUTING_STEP_EXPRESSION",
          args: {
            name: "list",
          },
        },
        {
          name: "--metrics",
          description:
            'The metrics to retrieve. Specify the name, groupings, and filters for each metric. The following historical metrics are available. For a description of each metric, see Historical metrics definitions in the Amazon Connect Administrator Guide.  ABANDONMENT_RATE  Unit: Percent Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Abandonment rate   AGENT_ADHERENT_TIME  This metric is available only in Amazon Web Services Regions where Forecasting, capacity planning, and scheduling is available. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy  UI name: Adherent time   AGENT_ANSWER_RATE  Unit: Percent Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Agent answer rate   AGENT_NON_ADHERENT_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Non-adherent time   AGENT_NON_RESPONSE  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy  UI name: Agent non-response   AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy Data for this metric is available starting from October 1, 2023 0:00:00 GMT. UI name: Agent non-response without customer abandons   AGENT_OCCUPANCY  Unit: Percentage Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy  UI name: Occupancy   AGENT_SCHEDULE_ADHERENCE  This metric is available only in Amazon Web Services Regions where Forecasting, capacity planning, and scheduling is available. Unit: Percent Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Adherence   AGENT_SCHEDULED_TIME  This metric is available only in Amazon Web Services Regions where Forecasting, capacity planning, and scheduling is available. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Scheduled time   AVG_ABANDON_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average queue abandon time   AVG_ACTIVE_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Average active time   AVG_AFTER_CONTACT_WORK_TIME  Unit: Seconds Valid metric filter key: INITIATION_METHOD  Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average after contact work time   Feature is a valid filter but not a valid grouping.   AVG_AGENT_CONNECTING_TIME  Unit: Seconds Valid metric filter key: INITIATION_METHOD. For now, this metric only supports the following as INITIATION_METHOD: INBOUND | OUTBOUND | CALLBACK | API  Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Average agent API connecting time   The Negate key in metric-level filters is not applicable for this metric.   AVG_AGENT_PAUSE_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Average agent pause time   AVG_BOT_CONVERSATION_TIME  Unit: Seconds Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Average bot conversation time   AVG_BOT_CONVERSATION_TURNS  Unit: Count Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Average bot conversation turns   AVG_CASE_RELATED_CONTACTS  Unit: Count Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Average contacts per case   AVG_CASE_RESOLUTION_TIME  Unit: Seconds Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Average case resolution time   AVG_CONTACT_DURATION  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average contact duration   Feature is a valid filter but not a valid grouping.   AVG_CONVERSATION_DURATION  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average conversation duration   AVG_DIALS_PER_MINUTE  This metric is available only for outbound campaigns that use the agent assisted voice and automated voice delivery modes. Unit: Count Valid groupings and filters: Agent, Campaign, Queue, Routing Profile UI name: Average dials per minute   AVG_FLOW_TIME  Unit: Seconds Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp UI name: Average flow time   AVG_GREETING_TIME_AGENT  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent greeting time   AVG_HANDLE_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, RoutingStepExpression UI name: Average handle time   Feature is a valid filter but not a valid grouping.   AVG_HOLD_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average customer hold time   Feature is a valid filter but not a valid grouping.   AVG_HOLD_TIME_ALL_CONTACTS  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average customer hold time all contacts   AVG_HOLDS  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average holds   Feature is a valid filter but not a valid grouping.   AVG_INTERACTION_AND_HOLD_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent interaction and customer hold time   AVG_INTERACTION_TIME  Unit: Seconds Valid metric filter key: INITIATION_METHOD  Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent interaction time   Feature is a valid filter but not a valid grouping.   AVG_INTERRUPTIONS_AGENT  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent interruptions   AVG_INTERRUPTION_TIME_AGENT  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent interruption time   AVG_NON_TALK_TIME  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average non-talk time   AVG_QUEUE_ANSWER_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average queue answer time   Feature is a valid filter but not a valid grouping.   AVG_RESOLUTION_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average resolution time   AVG_TALK_TIME  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average talk time   AVG_TALK_TIME_AGENT  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average agent talk time   AVG_TALK_TIME_CUSTOMER  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Average customer talk time   AVG_WAIT_TIME_AFTER_CUSTOMER_CONNECTION  This metric is available only for outbound campaigns that use the agent assisted voice and automated voice delivery modes. Unit: Seconds Valid groupings and filters: Campaign UI name: Average wait time after customer connection   BOT_CONVERSATIONS_COMPLETED  Unit: Count Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Bot conversations   BOT_INTENTS_COMPLETED  Unit: Count Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Bot intents completed   CAMPAIGN_CONTACTS_ABANDONED_AFTER_X  This metric is available only for outbound campaigns using the agent assisted voice and automated voice delivery modes. Unit: Count Valid groupings and filters: Agent, Campaign Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you must enter GT (for Greater than). UI name: Campaign contacts abandoned after X   CAMPAIGN_CONTACTS_ABANDONED_AFTER_X_RATE  This metric is available only for outbound campaigns using the agent assisted voice and automated voice delivery modes. Unit: Percent Valid groupings and filters: Agent, Campaign Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you must enter GT (for Greater than). UI name: Campaign contacts abandoned after X rate   CAMPAIGN_INTERACTIONS  This metric is available only for outbound campaigns using the email delivery mode.  Unit: Count Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE Valid groupings and filters: Campaign UI name: Campaign interactions   CAMPAIGN_SEND_ATTEMPTS  This metric is available only for outbound campaigns. Unit: Count Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype  UI name: Campaign send attempts   CASES_CREATED  Unit: Count Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Cases created   CONTACTS_CREATED  Unit: Count Valid metric filter key: INITIATION_METHOD  Valid groupings and filters: Queue, Channel, Routing Profile, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts created   Feature is a valid filter but not a valid grouping.   CONTACTS_HANDLED  Unit: Count Valid metric filter key: INITIATION_METHOD, DISCONNECT_REASON  Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect UI name: API contacts handled   Feature is a valid filter but not a valid grouping.   CONTACTS_HANDLED_BY_CONNECTED_TO_AGENT  Unit: Count Valid metric filter key: INITIATION_METHOD  Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts handled (connected to agent timestamp)   CONTACTS_HOLD_ABANDONS  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts hold disconnect   CONTACTS_ON_HOLD_AGENT_DISCONNECT  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contacts hold agent disconnect   CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contacts hold customer disconnect   CONTACTS_PUT_ON_HOLD  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contacts put on hold   CONTACTS_TRANSFERRED_OUT_EXTERNAL  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contacts transferred out external   CONTACTS_TRANSFERRED_OUT_INTERNAL  Unit: Percent Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contacts transferred out internal   CONTACTS_QUEUED  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts queued   CONTACTS_QUEUED_BY_ENQUEUE  Unit: Count Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype UI name: Contacts queued (enqueue timestamp)   CONTACTS_REMOVED_FROM_QUEUE_IN_X  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you can use LT (for "Less than") or LTE (for "Less than equal"). UI name: Contacts removed from queue in X seconds   CONTACTS_RESOLVED_IN_X  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you can use LT (for "Less than") or LTE (for "Less than equal"). UI name: Contacts resolved in X   CONTACTS_TRANSFERRED_OUT  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts transferred out   Feature is a valid filter but not a valid grouping.   CONTACTS_TRANSFERRED_OUT_BY_AGENT  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts transferred out by agent   CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contacts transferred out queue   CURRENT_CASES  Unit: Count Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Current cases   DELIVERY_ATTEMPTS  This metric is available only for outbound campaigns. Unit: Count Valid metric filter key: ANSWERING_MACHINE_DETECTION_STATUS, CAMPAIGN_DELIVERY_EVENT_TYPE, DISCONNECT_REASON  Valid groupings and filters: Agent, Answering Machine Detection Status, Campaign, Campaign Delivery EventType, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Queue, Routing Profile UI name: Delivery attempts   Campaign Delivery EventType filter and grouping are only available for SMS and Email campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and Disconnect Reason are only available for agent assisted voice and automated voice delivery modes.    DELIVERY_ATTEMPT_DISPOSITION_RATE  This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated voice delivery modes are only available with answering machine detection enabled. Unit: Percent Valid metric filter key: ANSWERING_MACHINE_DETECTION_STATUS, CAMPAIGN_DELIVERY_EVENT_TYPE, DISCONNECT_REASON  Valid groupings and filters: Agent, Answering Machine Detection Status, Campaign, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Queue, Routing Profile UI name: Delivery attempt disposition rate   Campaign Delivery Event Type filter and grouping are only available for SMS and Email campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status and Disconnect Reason are only available for agent assisted voice and automated voice delivery modes.    FLOWS_OUTCOME  Unit: Count Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp UI name: Flows outcome   FLOWS_STARTED  Unit: Count Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows resource ID, Initiation method, Resource published timestamp UI name: Flows started   HUMAN_ANSWERED_CALLS  This metric is available only for outbound campaigns. Dispositions for the agent assisted voice and automated voice delivery modes are only available with answering machine detection enabled.  Unit: Count Valid groupings and filters: Agent, Campaign UI name: Human answered   MAX_FLOW_TIME  Unit: Seconds Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp UI name: Maximum flow time   MAX_QUEUED_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Maximum queued time   MIN_FLOW_TIME  Unit: Seconds Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp UI name: Minimum flow time   PERCENT_BOT_CONVERSATIONS_OUTCOME  Unit: Percent Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Percent bot conversations outcome   PERCENT_BOT_INTENTS_OUTCOME  Unit: Percent Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type, Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows resource ID UI name: Percent bot intents outcome   PERCENT_CASES_FIRST_CONTACT_RESOLVED  Unit: Percent Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Cases resolved on first contact   PERCENT_CONTACTS_STEP_EXPIRED  Unit: Percent Valid groupings and filters: Queue, RoutingStepExpression UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.  PERCENT_CONTACTS_STEP_JOINED  Unit: Percent Valid groupings and filters: Queue, RoutingStepExpression UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.  PERCENT_FLOWS_OUTCOME  Unit: Percent Valid metric filter key: FLOWS_OUTCOME_TYPE  Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows resource ID, Initiation method, Resource published timestamp UI name: Flows outcome percentage.  The FLOWS_OUTCOME_TYPE is not a valid grouping.   PERCENT_NON_TALK_TIME  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Percentage Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Non-talk time percent   PERCENT_TALK_TIME  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Percentage Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Talk time percent   PERCENT_TALK_TIME_AGENT  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Percentage Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Agent talk time percent   PERCENT_TALK_TIME_CUSTOMER  This metric is available only for contacts analyzed by Contact Lens conversational analytics. Unit: Percentage Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Customer talk time percent   REOPENED_CASE_ACTIONS  Unit: Count Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Cases reopened   RESOLVED_CASE_ACTIONS  Unit: Count Required filter key: CASE_TEMPLATE_ARN Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS UI name: Cases resolved   SERVICE_LEVEL  You can include up to 20 SERVICE_LEVEL metrics in a request. Unit: Percent Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you can use LT (for "Less than") or LTE (for "Less than equal"). UI name: Service level X   STEP_CONTACTS_QUEUED  Unit: Count Valid groupings and filters: Queue, RoutingStepExpression UI name: This metric is available in Real-time Metrics UI but not on the Historical Metrics UI.  SUM_AFTER_CONTACT_WORK_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: After contact work time   SUM_CONNECTING_TIME_AGENT  Unit: Seconds Valid metric filter key: INITIATION_METHOD. This metric only supports the following filter keys as INITIATION_METHOD: INBOUND | OUTBOUND | CALLBACK | API  Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Agent API connecting time   The Negate key in metric-level filters is not applicable for this metric.   CONTACTS_ABANDONED  Unit: Count Metric filter:    Valid values: API| Incoming | Outbound | Transfer | Callback | Queue_Transfer| Disconnect    Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect UI name: Contact abandoned   SUM_CONTACTS_ABANDONED_IN_X  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you can use LT (for "Less than") or LTE (for "Less than equal"). UI name: Contacts abandoned in X seconds   SUM_CONTACTS_ANSWERED_IN_X  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect Threshold: For ThresholdValue, enter any whole number from 1 to 604800 (inclusive), in seconds. For Comparison, you can use LT (for "Less than") or LTE (for "Less than equal"). UI name: Contacts answered in X seconds   SUM_CONTACT_FLOW_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contact flow time   SUM_CONTACT_TIME_AGENT  Unit: Seconds Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy UI name: Agent on contact time   SUM_CONTACTS_DISCONNECTED   Valid metric filter key: DISCONNECT_REASON  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Contact disconnected   SUM_ERROR_STATUS_TIME_AGENT  Unit: Seconds Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy UI name: Error status time   SUM_HANDLE_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Contact handle time   SUM_HOLD_TIME  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Customer hold time   SUM_IDLE_TIME_AGENT  Unit: Seconds Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy UI name: Agent idle time   SUM_INTERACTION_AND_HOLD_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect UI name: Agent interaction and hold time   SUM_INTERACTION_TIME  Unit: Seconds Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy UI name: Agent interaction time   SUM_NON_PRODUCTIVE_TIME_AGENT  Unit: Seconds Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy UI name: Non-Productive Time   SUM_ONLINE_TIME_AGENT  Unit: Seconds Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy UI name: Online time   SUM_RETRY_CALLBACK_ATTEMPTS  Unit: Count Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype, Q in Connect UI name: Callback attempts',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "get-prompt-file",
      description: "Gets the prompt file",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-id",
          description: "A unique identifier for the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-task-template",
      description:
        "Gets details about a specific task template in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--task-template-id",
          description: "A unique identifier for the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-version",
          description:
            "The system generated version of a task template that is associated with a task, when the task is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-traffic-distribution",
      description:
        "Retrieves the current traffic distribution for a given traffic distribution group",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-phone-number",
      description:
        "Imports a claimed phone number from an external service, such as Amazon Web Services End User Messaging, into an Amazon Connect instance. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance was created.  Call the DescribePhoneNumber API to verify the status of a previous ImportPhoneNumber operation.   If you plan to claim or import numbers and then release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired.   By default you can claim or import and then release up to 200% of your maximum number of active phone numbers. If you claim or import and then release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming or importing any more numbers until 180 days past the oldest number released has expired.  For example, if you already have 99 claimed or imported numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services Support ticket",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-phone-number-arn",
          description:
            "The claimed phone number ARN being imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks like the ARN of the phone number to import from Amazon Web Services End User Messaging",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-description",
          description: "The description of the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-agent-statuses",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Lists agent statuses",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--agent-status-types",
          description: "Available agent status types",
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
      name: "list-analytics-data-associations",
      description:
        "Lists the association status of requested dataset ID for a given Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The identifier of the dataset to get the association status",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-approved-origins",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all approved origins associated with the instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-associated-contacts",
      description:
        "Provides information about contact tree, a list of associated contacts with a unique identifier",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The maximum number of results to return per page. The default MaxResult size is 25. Valid Range: Minimum value of 1. Maximum value of 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-authentication-profiles",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Provides summary information about the authentication profiles in a specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-bots",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. For the specified version of Amazon Lex, returns a paginated list of all the Amazon Lex bots currently associated with the instance. Use this API to returns both Amazon Lex V1 and V2 bots",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--lex-version",
          description: "The version of Amazon Lex or Amazon Lex V2",
          args: {
            name: "string",
          },
        },
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
      name: "list-contact-evaluations",
      description:
        "Lists contact evaluations in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.  This is not expected to be set because the value returned in the previous response is always null",
          args: {
            name: "string",
          },
        },
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
      name: "list-contact-flow-modules",
      description:
        "Provides information about the flow modules for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--contact-flow-module-state",
          description: "The state of the flow module",
          args: {
            name: "string",
          },
        },
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
      name: "list-contact-flow-versions",
      description:
        "Returns all the available versions for the specified Amazon Connect instance and flow identifier",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-contact-flows",
      description:
        "Provides information about the flows for the specified Amazon Connect instance. You can also create and update flows using the Amazon Connect Flow language. For more information about flows, see Flows in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-types",
          description: "The type of flow",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-contact-references",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. For the specified referenceTypes, returns a list of references associated with the contact. References are links to documents that are related to a contact, such as emails, attachments, or URLs",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the initial contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--reference-types",
          description: "The type of reference",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.  This is not expected to be set, because the value returned in the previous response is always null",
          args: {
            name: "string",
          },
        },
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
      name: "list-default-vocabularies",
      description:
        "Lists the default vocabularies for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe?",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-evaluation-form-versions",
      description:
        "Lists versions of an evaluation form in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-evaluation-forms",
      description:
        "Lists evaluation forms in the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-flow-associations",
      description: "List the flow association based on the filters",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-hours-of-operations",
      description:
        "Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-instance-attributes",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-instance-storage-configs",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-instances",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked",
      options: [
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-integration-associations",
      description:
        "Provides summary information about the Amazon Web Services resource associations for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-type",
          description: "The integration type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--integration-arn",
          description: "The Amazon Resource Name (ARN) of the integration",
          args: {
            name: "string",
          },
        },
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
      name: "list-lambda-functions",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-lex-bots",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To return both Amazon Lex V1 and V2 bots, use the ListBots API",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. If no value is specified, the default is 10",
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
      name: "list-phone-numbers",
      description:
        "Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.    We recommend using ListPhoneNumbersV2 to return phone number types. ListPhoneNumbers doesn't support number types UIFN, SHARED, THIRD_PARTY_TF, and THIRD_PARTY_DID. While it returns numbers of those types, it incorrectly lists them as TOLL_FREE or DID.    The phone number Arn value that is returned from each of the items in the PhoneNumberSummaryList cannot be used to tag phone number resources. It will fail with a ResourceNotFoundException. Instead, use the ListPhoneNumbersV2 API. It returns the new phone number ARN that can be used to tag phone number resources",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-types",
          description:
            "The type of phone number.  We recommend using ListPhoneNumbersV2 to return phone number types. While ListPhoneNumbers returns number types UIFN, SHARED, THIRD_PARTY_TF, and THIRD_PARTY_DID, it incorrectly lists them as TOLL_FREE or DID",
          args: {
            name: "list",
          },
        },
        {
          name: "--phone-number-country-codes",
          description: "The ISO country code",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-phone-numbers-v2",
      description:
        "Lists phone numbers claimed to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with traffic distribution group. For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.    When given an instance ARN, ListPhoneNumbersV2 returns only the phone numbers claimed to the instance.   When given a traffic distribution group ARN ListPhoneNumbersV2 returns only the phone numbers claimed to the traffic distribution group",
      options: [
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. If both TargetArn and InstanceId input are not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance. If both TargetArn and InstanceId are not provided, this API lists numbers claimed to all the Amazon Connect instances belonging to your account in the same AWS Region as the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-country-codes",
          description: "The ISO country code",
          args: {
            name: "list",
          },
        },
        {
          name: "--phone-number-types",
          description: "The type of phone number",
          args: {
            name: "list",
          },
        },
        {
          name: "--phone-number-prefix",
          description:
            "The prefix of the phone number. If provided, it must contain + as part of the country code",
          args: {
            name: "string",
          },
        },
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
      name: "list-predefined-attributes",
      description:
        "Lists predefined attributes for the specified Amazon Connect instance. Predefined attributes are attributes in an Amazon Connect instance that can be used to route contacts to an agent or pools of agents within a queue. For more information, see Create predefined attributes for routing contacts to agents",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-prompts",
      description:
        "Provides information about the prompts for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-queue-quick-connects",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Lists the quick connects associated with a queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-queues",
      description:
        "Provides information about the queues for the specified Amazon Connect instance. If you do not specify a QueueTypes parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-types",
          description: "The type of queue",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-quick-connects",
      description:
        "Provides information about the quick connects for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--quick-connect-types",
          description:
            "The type of quick connect. In the Amazon Connect admin website, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE)",
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
      name: "list-realtime-contact-analysis-segments-v2",
      description:
        "Provides a list of analysis segments for a real-time analysis session",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--output-type",
          description: "The Contact Lens output type to be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-types",
          description:
            "Enum with segment types . Each value corresponds to a segment type returned in the segments list of the API. Each segment type has its own structure. Different channels may have different sets of supported segment types",
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
      name: "list-routing-profile-queues",
      description: "Lists the queues associated with a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-routing-profiles",
      description:
        "Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-rules",
      description: "List all rules for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--publish-status",
          description: "The publish status of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--event-source-name",
          description: "The name of the event source",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-security-keys",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all security keys associated with the instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-security-profile-applications",
      description:
        "Returns a list of third-party applications in a specific security profile",
      options: [
        {
          name: "--security-profile-id",
          description: "The identifier for the security profle",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-security-profile-permissions",
      description:
        "Lists the permissions granted to a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--security-profile-id",
          description: "The identifier for the security profle",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-security-profiles",
      description:
        "Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
        "Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing profiles, etc) have an ARN. To locate the ARN for an instance, for example, see Find your Amazon Connect instance ID/ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-task-templates",
      description:
        "Lists task templates for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.  It is not expected that you set this because the value returned in the previous response is always null",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page.  It is not expected that you set this",
          args: {
            name: "integer",
          },
        },
        {
          name: "--status",
          description:
            "Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the task template",
          args: {
            name: "string",
          },
        },
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
      name: "list-traffic-distribution-group-users",
      description: "Lists traffic distribution group users",
      options: [
        {
          name: "--traffic-distribution-group-id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-traffic-distribution-groups",
      description: "Lists traffic distribution groups",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
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
      name: "list-use-cases",
      description: "Lists the use cases for the integration association",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--integration-association-id",
          description: "The identifier for the integration association",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-user-hierarchy-groups",
      description:
        "Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-user-proficiencies",
      description: "Lists proficiencies associated with a user",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
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
      name: "list-users",
      description:
        "Provides summary information about the users for the specified Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-view-versions",
      description:
        "Returns all the available versions for the specified Amazon Connect instance and view identifier. Results will be sorted from highest to lowest",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "list-views",
      description:
        "Returns views in the given instance. Results are sorted primarily by type, and secondarily by name",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return per page. The default MaxResult size is 100",
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
      name: "monitor-contact",
      description:
        "Initiates silent monitoring of a contact. The Contact Control Panel (CCP) of the user specified by userId will be set to silent monitoring mode on the contact",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-monitor-capabilities",
          description:
            "Specify which monitoring actions the user is allowed to take. For example, whether the user is allowed to escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if barge is enabled",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "pause-contact",
      description: "Allows pausing an ongoing task contact",
      options: [
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-user-status",
      description:
        "Changes the current status of a user or agent in Amazon Connect. If the agent is currently handling a contact, this sets the agent's next status. For more information, see Agent status and Set your next status in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--user-id",
          description: "The identifier of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-status-id",
          description: "The identifier of the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "release-phone-number",
      description:
        "Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API only in the Amazon Web Services Region where the number was claimed.  To release phone numbers from a traffic distribution group, use the ReleasePhoneNumber API, not the Amazon Connect admin website. After releasing a phone number, the phone number enters into a cooldown period for up to 180 days. It cannot be searched for or claimed again until the period has ended. If you accidentally release a phone number, contact Amazon Web Services Support.  If you plan to claim and release numbers frequently, contact us for a service quota exception. Otherwise, it is possible you will be blocked from claiming and releasing any more numbers until up to 180 days past the oldest number released has expired. By default you can claim and release up to 200% of your maximum number of active phone numbers. If you claim and release phone numbers using the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you will be blocked from claiming any more numbers until 180 days past the oldest number released has expired.  For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers until you open an Amazon Web Services support ticket",
      options: [
        {
          name: "--phone-number-id",
          description: "A unique identifier for the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "replicate-instance",
      description:
        "Replicates an Amazon Connect instance in the specified Amazon Web Services Region and copies configuration information for Amazon Connect resources across Amazon Web Services Regions.  For more information about replicating an Amazon Connect instance, see Create a replica of your existing Amazon Connect instance in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance. You can provide the InstanceId, or the entire ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The Amazon Web Services Region where to replicate the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-alias",
          description:
            "The alias for the replicated instance. The ReplicaAlias must be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "resume-contact",
      description: "Allows resuming a task contact in a paused state",
      options: [
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "resume-contact-recording",
      description:
        "When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording whatever recording is selected in the flow configuration: call, screen, or both. If only call recording or only screen recording is enabled, then it would resume. Voice and screen recordings are supported",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-recording-type",
          description: "The type of recording being operated on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-agent-statuses",
      description:
        "Searches AgentStatuses in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return agent statuses",
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
      name: "search-available-phone-numbers",
      description:
        "Searches for available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group. If the provided TargetArn is a traffic distribution group, you can call this API in both Amazon Web Services Regions associated with the traffic distribution group",
      options: [
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-country-code",
          description: "The ISO country code",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-type",
          description: "The type of phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-prefix",
          description:
            "The prefix of the phone number. If provided, it must contain + as part of the country code",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "search-contact-flow-modules",
      description:
        "Searches the flow modules in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return flow modules.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will result in invalid results',
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
      name: "search-contact-flows",
      description:
        "Searches the flows in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return flows.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will result in invalid results',
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
      name: "search-contacts",
      description: "Searches contacts in an Amazon Connect instance",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-range",
          description: "Time range that you want to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description: "The search criteria to be used to return contacts",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description: "Specifies a field to sort by and a sort order",
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
      name: "search-email-addresses",
      description:
        "Searches email address in an instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return email addresses",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
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
      name: "search-hours-of-operations",
      description:
        "Searches the hours of operation in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return hours of operations",
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
      name: "search-predefined-attributes",
      description:
        "Searches predefined attributes that meet certain criteria. Predefined attributes are attributes in an Amazon Connect instance that can be used to route contacts to an agent or pools of agents within a queue. For more information, see Create predefined attributes for routing contacts to agents",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return predefined attributes",
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
      name: "search-prompts",
      description:
        "Searches prompts in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description: "The search criteria to be used to return prompts",
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
      name: "search-queues",
      description:
        "Searches queues in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return queues.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results',
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
      name: "search-quick-connects",
      description:
        "Searches quick connects in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return quick connects",
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
      name: "search-resource-tags",
      description:
        "Searches tags used in an Amazon Connect instance using optional search criteria",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-types",
          description:
            "The list of resource types to be used to search tags from. If not provided or if any empty list is provided, this API will search from all supported resource types.  Supported resource types    AGENT   ROUTING_PROFILE   STANDARD_QUEUE   SECURITY_PROFILE   OPERATING_HOURS   PROMPT   CONTACT_FLOW   FLOW_MODULE",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-criteria",
          description: "The search criteria to be used to return tags",
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
      name: "search-routing-profiles",
      description:
        "Searches routing profiles in an Amazon Connect instance, with optional filtering",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return routing profiles.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results',
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
      name: "search-security-profiles",
      description:
        "Searches security profiles in an Amazon Connect instance, with optional filtering. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return security profiles.   The name field support "contains" queries with a minimum of 2 characters and maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results.   The currently supported value for FieldName: name',
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
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
      name: "search-user-hierarchy-groups",
      description:
        'Searches UserHierarchyGroups in an Amazon Connect instance, with optional filtering.  The UserHierarchyGroup with "LevelId": "0" is the foundation for building levels on top of an instance. It is not user-definable, nor is it visible in the UI',
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            "The search criteria to be used to return UserHierarchyGroups",
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
      name: "search-users",
      description:
        "Searches users in an Amazon Connect instance, with optional filtering.    AfterContactWorkTimeLimit is returned in milliseconds",
      options: [
        {
          name: "--instance-id",
          description:
            'The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.  InstanceID is a required field. The "Required: No" below is incorrect',
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--search-filter",
          description: "Filters to be applied to search results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--search-criteria",
          description:
            'The search criteria to be used to return users.  The name and description fields support "contains" queries with a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths outside of this range will throw invalid results',
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
      name: "search-vocabularies",
      description:
        "Searches for vocabularies within a specific Amazon Connect instance using State, NameStartsWith, and LanguageCode",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The current state of the custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--name-starts-with",
          description: "The starting pattern of the name of the vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description:
            "The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe?",
          args: {
            name: "string",
          },
        },
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
      name: "send-chat-integration-event",
      description:
        "Processes chat integration events from Amazon Web Services or external integrations to Amazon Connect. A chat integration event includes:   SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a chat    ChatEvent: details of the chat action to perform such as sending a message, event, or disconnecting from a chat   When a chat integration event is sent with chat identifiers that do not map to an active chat contact, a new chat contact is also created before handling chat action.  Access to this API is currently restricted to Amazon Web Services End User Messaging for supporting SMS integration",
      options: [
        {
          name: "--source-id",
          description:
            "External identifier of chat customer participant, used in part to uniquely identify a chat. For SMS, this is the E164 phone number of the chat customer participant",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-id",
          description:
            "Chat system identifier, used in part to uniquely identify chat. This is associated with the Amazon Connect instance and flow to be used to start chats. For Server Migration Service, this is the phone number destination of inbound Server Migration Service messages represented by an Amazon Web Services End User Messaging phone number ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--subtype",
          description:
            'Classification of a channel. This is used in part to uniquely identify chat.  Valid value: ["connect:sms", connect:"WhatsApp"]',
          args: {
            name: "string",
          },
        },
        {
          name: "--event",
          description: "Chat integration event payload",
          args: {
            name: "structure",
          },
        },
        {
          name: "--new-session-details",
          description:
            "Contact properties to apply when starting a new chat. If the integration event is handled with an existing chat, this is ignored",
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
      name: "send-outbound-email",
      description:
        "Send outbound email for outbound campaigns. For more information about outbound campaigns, see Set up Amazon Connect outbound campaigns.  Only the Amazon Connect outbound campaigns service principal is allowed to assume a role in your account and call this API",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-email-address",
          description: "The email address to be used for sending email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-email-address",
          description: "The email address to send the email to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-recipients",
          description: "The additional recipients address of the email in CC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-message",
          description:
            "The email message body to be sent to the newly created email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--traffic-type",
          description: "Denotes the class of traffic",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-campaign",
          description: "A Campaign object need for Campaign traffic type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-attached-file-upload",
      description:
        "Provides a pre-signed Amazon S3 URL in response for uploading your content.  You may only use this API to upload attachments to an Amazon Connect Case or Amazon Connect Email",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description: "The unique identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-name",
          description:
            "A case-sensitive name of the attached file being uploaded",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-size-in-bytes",
          description: "The size of the attached file in bytes",
          args: {
            name: "long",
          },
        },
        {
          name: "--url-expiry-in-seconds",
          description:
            "Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is 300",
          args: {
            name: "integer",
          },
        },
        {
          name: "--file-use-case-type",
          description:
            "The use case for the file.   Only ATTACHMENTS are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--associated-resource-arn",
          description:
            "The resource to which the attached file is (being) uploaded to. The supported resources are Cases and Email.  This value must be a valid ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--created-by",
          description: "Represents the identity that created the file",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "start-chat-contact",
      description:
        "Initiates a flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients must subscribe to the participant\u2019s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in the following situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   If you use the ChatDurationInMinutes parameter and receive a 400 error, your account may not support the ability to configure custom chat durations. For more information, contact Amazon Web Services Support.  For more information about chat, see the following topics in the Amazon Connect Administrator Guide:     Concepts: Web and mobile messaging capabilities in Amazon Connect     Amazon Connect Chat security best practices",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for initiating the chat. To see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to Routing, Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes.  There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--participant-details",
          description: "Information identifying the participant",
          args: {
            name: "structure",
          },
        },
        {
          name: "--initial-message",
          description:
            "The initial message to be sent to the newly created chat. If you have a Lex bot in your flow, the initial message is not delivered to the Lex bot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-duration-in-minutes",
          description:
            "The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--supported-messaging-content-types",
          description:
            "The supported chat message content types. Supported types are text/plain, text/markdown, application/json, application/vnd.amazonaws.connect.message.interactive, and application/vnd.amazonaws.connect.message.interactive.response.  Content types must always contain text/plain. You can then put any other supported type in the list. For example, all the following lists are valid because they contain text/plain: [text/plain, text/markdown, application/json], [text/markdown, text/plain], [text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response].   The type application/vnd.amazonaws.connect.message.interactive is required to use the Show view flow block",
          args: {
            name: "list",
          },
        },
        {
          name: "--persistent-chat",
          description:
            "Enable persistent chats. For more information about enabling persistent chat, and for example use cases and how to configure for them, see Enable persistent chat",
          args: {
            name: "structure",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The unique identifier for an Amazon Connect contact. This identifier is related to the chat starting.  You cannot provide data for both RelatedContactId and PersistentChat",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-attributes",
          description:
            'A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows. Attribute keys can include only alphanumeric, -, and _. This field can be used to show channel subtype, such as connect:Guide.  The types application/vnd.amazonaws.connect.message.interactive and application/vnd.amazonaws.connect.message.interactive.response must be present in the SupportedMessagingContentTypes field of this API in order to set SegmentAttributes as { "connect:Subtype": {"valueString" : "connect:Guide" }}',
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
      name: "start-contact-evaluation",
      description:
        "Starts an empty evaluation in the specified Amazon Connect instance, using the given evaluation form for the particular contact. The evaluation form version used for the contact evaluation corresponds to the currently activated version. If no version is activated for the evaluation form, the contact evaluation cannot be started.   Evaluations created through the public API do not contain answer values suggested from automation",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-contact-recording",
      description:
        "Starts recording the contact:    If the API is called before the agent joins the call, recording starts when the agent joins the call.   If the API is called after the agent joins the call, recording starts at the time of the API call.   StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-recording-configuration",
          description: "The person being recorded",
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
      name: "start-contact-streaming",
      description:
        "Initiates real-time message streaming for a new chat contact.  For more information about message streaming, see Enable real-time chat message streaming in the Amazon Connect Administrator Guide. For more information about chat, see the following topics in the Amazon Connect Administrator Guide:     Concepts: Web and mobile messaging capabilities in Amazon Connect     Amazon Connect Chat security best practices",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-streaming-configuration",
          description:
            "The streaming configuration, such as the Amazon SNS streaming endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-email-contact",
      description:
        "Creates an inbound email contact and initiates a flow to start the email contact for the customer. Response of this API provides the ContactId of the email contact created",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-email-address",
          description: "The email address of the customer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-email-address",
          description: "The email address associated with the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the email contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Emails can have the following reference types at the time of creation: URL | NUMBER | STRING | DATE. EMAIL | EMAIL_MESSAGE |ATTACHMENT are not a supported reference type during email creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--name",
          description:
            "The name of a email that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-message",
          description:
            "The email message body to be sent to the newly created email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-recipients",
          description: "The addtional recipients address of the email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attachments",
          description:
            "List of S3 presigned URLs of email attachments and their file name",
          args: {
            name: "list",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for initiating the emails. To see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to Routing, Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The contactId that is related to this contact. Linking emails together by using RelatedContactID copies over contact attributes from the related email contact to the new email contact. All updates to user-defined attributes in the new email contact are limited to the individual contact ID. There are no limits to the number of contacts that can be linked by using RelatedContactId",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--segment-attributes",
          description:
            'A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows. Attribute keys can include only alphanumeric, -, and _. This field can be used to show channel subtype, such as connect:Guide.  To set contact expiry, a ValueMap must be specified containing the integer number of minutes the contact will be active for before expiring, with SegmentAttributes like {  "connect:ContactExpiry": {"ValueMap" : { "ExpiryDuration": { "ValueInteger":135}}}}',
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-outbound-chat-contact",
      description:
        "Initiates a new outbound SMS contact to a customer. Response of this API provides the ContactId of the outbound SMS contact created.  SourceEndpoint only supports Endpoints with CONNECT_PHONENUMBER_ARN as Type and DestinationEndpoint only supports Endpoints with TELEPHONE_NUMBER as Type. ContactFlowId initiates the flow to manage the new SMS contact created. This API can be used to initiate outbound SMS contacts for an agent, or it can also deflect an ongoing contact to an outbound SMS contact by using the StartOutboundChatContact Flow Action. For more information about using SMS in Amazon Connect, see the following topics in the Amazon Connect Administrator Guide:    Set up SMS messaging     Request an SMS-enabled phone number through AWS End User Messaging SMS",
      options: [
        {
          name: "--source-endpoint",
          description: "Information about the endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-endpoint",
          description: "Information about the endpoint",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-attributes",
          description:
            "A set of system defined key-value pairs stored on individual contact segments using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows.   Attribute keys can include only alphanumeric, -, and _.   This field can be used to show channel subtype, such as connect:Guide and connect:SMS",
          args: {
            name: "map",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes",
          args: {
            name: "map",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:   arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/123ec456-a007-89c0-1234-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-duration-in-minutes",
          description:
            "The total duration of the newly started chat session. If not specified, the chat session duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum configurable time is 10,080 minutes (7 days)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--participant-details",
          description: "The customer's details",
          args: {
            name: "structure",
          },
        },
        {
          name: "--initial-system-message",
          description: "A chat message",
          args: {
            name: "structure",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The unique identifier for an Amazon Connect contact. This identifier is related to the contact starting",
          args: {
            name: "string",
          },
        },
        {
          name: "--supported-messaging-content-types",
          description:
            "The supported chat message content types. Supported types are:    text/plain     text/markdown     application/json, application/vnd.amazonaws.connect.message.interactive     application/vnd.amazonaws.connect.message.interactive.response    Content types must always contain text/plain. You can then put any other supported type in the list. For example, all the following lists are valid because they contain text/plain:    [text/plain, text/markdown, application/json]     [text/markdown, text/plain]     [text/plain, application/json, application/vnd.amazonaws.connect.message.interactive.response]",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the AWS SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-outbound-email-contact",
      description:
        "Initiates a flow to send an agent reply or outbound email contact (created from the CreateContact API) to a customer",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-email-address",
          description: "The email address associated with the instance",
          args: {
            name: "structure",
          },
        },
        {
          name: "--destination-email-address",
          description: "The email address of the customer",
          args: {
            name: "structure",
          },
        },
        {
          name: "--additional-recipients",
          description: "The addtional recipients address of email in CC",
          args: {
            name: "structure",
          },
        },
        {
          name: "--email-message",
          description:
            "The email message body to be sent to the newly created email",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-outbound-voice-contact",
      description:
        "Places an outbound call to a contact, and then initiates the flow. It performs the actions in the flow that's specified (in ContactFlowId). Agents do not initiate the outbound API, which means that they do not dial the contact. If the flow places an outbound call to a contact, and then puts the contact in queue, the call is then routed to the agent, like any other inbound case. There is a 60-second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.    Campaign calls are not allowed by default. Before you can make a call with TrafficType = CAMPAIGN, you must submit a service quota increase request to the quota Amazon Connect campaigns",
      options: [
        {
          name: "--name",
          description:
            "The name of a voice contact that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the voice contact that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Contacts can have the following reference types at the time of creation: URL | NUMBER | STRING | DATE | EMAIL. ATTACHMENT is not a supported reference type during voice contact creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The contactId that is related to this contact. Linking voice, task, or chat by using RelatedContactID copies over contact attributes from the related contact to the new contact. All updates to user-defined attributes in the new contact are limited to the individual contact ID. There are no limits to the number of contacts that can be linked by using RelatedContactId",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-phone-number",
          description: "The phone number of the customer, in E.164 format",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to Routing, Contact Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-phone-number",
          description:
            "The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description:
            "The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the flow is used. If you do not specify a queue, you must specify a source phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--answer-machine-detection-config",
          description:
            "Configuration of the answering machine detection for this outbound call",
          args: {
            name: "structure",
          },
        },
        {
          name: "--campaign-id",
          description: "The campaign identifier of the outbound communication",
          args: {
            name: "string",
          },
        },
        {
          name: "--traffic-type",
          description:
            "Denotes the class of traffic. Calls with different traffic types are handled differently by Amazon Connect. The default value is GENERAL. Use CAMPAIGN if EnableAnswerMachineDetection is set to true. For all other cases, use GENERAL",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-screen-sharing",
      description:
        "Starts screen sharing for a contact. For more information about screen sharing, see Set up in-app, web, video calling, and screen sharing capabilities in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-task-contact",
      description:
        "Initiates a flow to start a new task contact. For more information about task contacts, see Concepts: Tasks in Amazon Connect in the Amazon Connect Administrator Guide.  When using PreviousContactId and RelatedContactId input parameters, note the following:    PreviousContactId    Any updates to user-defined task contact attributes on any contact linked through the same PreviousContactId will affect every contact in the chain.   There can be a maximum of 12 linked task contacts in a chain. That is, 12 task contacts can be created that share the same PreviousContactId.      RelatedContactId    Copies contact attributes from the related task contact to the new contact.   Any update on attributes in a new task contact does not update attributes on previous contact.   There\u2019s no limit on the number of task contacts that can be created that use the same RelatedContactId.     In addition, when calling StartTaskContact include only one of these parameters: ContactFlowID, QuickConnectID, or TaskTemplateID. Only one parameter is required as long as the task template has a flow configured to run it. If more than one parameter is specified, or only the TaskTemplateID is specified but it does not have a flow configured, the request returns an error because Amazon Connect cannot identify the unique flow to run when the task is created. A ServiceQuotaExceededException occurs when the number of open tasks exceeds the active tasks quota or there are already 12 tasks referencing the same PreviousContactId. For more information about service quotas for task contacts, see Amazon Connect service quotas in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--previous-contact-id",
          description:
            "The identifier of the previous chat, voice, or task contact. Any updates to user-defined attributes to task contacts linked using the same PreviousContactID will affect every contact in the chain. There can be a maximum of 12 linked task contacts in a chain",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to Routing, Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--name",
          description:
            "The name of a task that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: URL | NUMBER | STRING | DATE | EMAIL. ATTACHMENT is not a supported reference type during task creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--description",
          description:
            "A description of the task that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-time",
          description:
            "The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--task-template-id",
          description:
            "A unique identifier for the task template. For more information about task templates, see Create task templates in the Amazon Connect Administrator Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-id",
          description:
            "The identifier for the quick connect. Tasks that are created by using QuickConnectId will use the flow that is defined on agent or queue quick connect. For more information about quick connects, see Create quick connects",
          args: {
            name: "string",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The contactId that is related to this contact. Linking tasks together by using RelatedContactID copies over contact attributes from the related task contact to the new task contact. All updates to user-defined attributes in the new task contact are limited to the individual contact ID, unlike what happens when tasks are linked by using PreviousContactID. There are no limits to the number of contacts that can be linked by using RelatedContactId",
          args: {
            name: "string",
          },
        },
        {
          name: "--segment-attributes",
          description:
            'A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows. Attribute keys can include only alphanumeric, -, and _. This field can be used to set Contact Expiry as a duration in minutes and set a UserId for the User who created a task.  To set contact expiry, a ValueMap must be specified containing the integer number of minutes the contact will be active for before expiring, with SegmentAttributes like {  "connect:ContactExpiry": {"ValueMap" : { "ExpiryDuration": { "ValueInteger": 135}}}}.  To set the created by user, a valid AgentResourceId must be supplied, with SegmentAttributes like { "connect:CreatedByUser" { "ValueString": "arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/agent/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"}}}',
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
      name: "start-web-rtc-contact",
      description:
        "Places an inbound in-app, web, or video call to a contact, and then initiates the flow. It performs the actions in the flow that are specified (in ContactFlowId) and present in the Amazon Connect instance (specified as InstanceId)",
      options: [
        {
          name: "--attributes",
          description:
            "A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, -, and _ characters",
          args: {
            name: "map",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to Routing, Flows. Choose the flow. On the flow page, under the name of the flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-capabilities",
          description:
            "Information about the video sharing capabilities of the participants (customer, agent)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--participant-details",
          description: "The customer's details",
          args: {
            name: "structure",
          },
        },
        {
          name: "--related-contact-id",
          description:
            "The unique identifier for an Amazon Connect contact. This identifier is related to the contact starting",
          args: {
            name: "string",
          },
        },
        {
          name: "--references",
          description:
            "A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have the following reference types at the time of creation: URL | NUMBER | STRING | DATE | EMAIL. ATTACHMENT is not a supported reference type during task creation",
          args: {
            name: "map",
          },
        },
        {
          name: "--description",
          description:
            "A description of the task that is shown to an agent in the Contact Control Panel (CCP)",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-contact",
      description:
        "Ends the specified contact. Use this API to stop queued callbacks. It does not work for voice contacts that use the following initiation methods:   DISCONNECT   TRANSFER   QUEUE_TRANSFER   EXTERNAL_OUTBOUND   MONITOR   Chat and task contacts can be terminated in any state, regardless of initiation method",
      options: [
        {
          name: "--contact-id",
          description: "The ID of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--disconnect-reason",
          description:
            "The reason a contact can be disconnected. Only Amazon Connect outbound campaigns can provide this field",
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
      name: "stop-contact-recording",
      description:
        "Stops recording a call when a contact is being recorded. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-recording-type",
          description: "The type of recording being operated on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-contact-streaming",
      description:
        "Ends message streaming on a specified contact. To restart message streaming on that contact, call the StartContactStreaming API",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact that is associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--streaming-id",
          description: "The identifier of the streaming configuration enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "submit-contact-evaluation",
      description:
        "Submits a contact evaluation in the specified Amazon Connect instance. Answers included in the request are merged with existing answers for the given evaluation. If no answers or notes are passed, the evaluation is submitted with the existing answers and notes. You can delete an answer or note by passing an empty object ({}) to the question identifier.  If a contact evaluation is already in submitted state, this operation will trigger a resubmission",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-id",
          description: "A unique identifier for the contact evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--answers",
          description: "A map of question identifiers to answer value",
          args: {
            name: "map",
          },
        },
        {
          name: "--notes",
          description: "A map of question identifiers to note value",
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
      name: "suspend-contact-recording",
      description:
        "When a contact is being recorded, this API suspends recording whatever is selected in the flow configuration: call, screen, or both. If only call recording or only screen recording is enabled, then it would be suspended. For example, you might suspend the screen recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording the screen. The period of time that the recording is suspended is filled with silence in the final recording. Voice and screen recordings are supported",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-recording-type",
          description: "The type of recording being operated on",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "tag-contact",
      description:
        "Adds the specified tags to the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage",
      options: [
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags to be assigned to the contact resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }.  Authorization is not supported by this tag',
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
      name: "tag-resource",
      description:
        "Adds the specified tags to the specified resource. Some of the supported resource types are agents, routing profiles, queues, quick connects, flows, agent statuses, hours of operation, phone numbers, security profiles, and task templates. For a complete list, see Tagging resources in Amazon Connect. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'The tags used to organize, track, or control access for this resource. For example, { "Tags": {"key1":"value1", "key2":"value2"} }',
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
      name: "transfer-contact",
      description:
        "Transfers contacts from one agent or queue to another agent or queue at any point after a contact is created. You can transfer a contact to another queue by providing the flow which orchestrates the contact to the destination queue. This gives you more control over contact handling and helps you adhere to the service level agreement (SLA) guaranteed to your customers. Note the following requirements:   Transfer is supported for only TASK contacts.   Do not use both QueueId and UserId in the same call.   The following flow types are supported: Inbound flow, Transfer to agent flow, and Transfer to queue flow.   The TransferContact API can be called only on active contacts.   A contact cannot be transferred more than 11 times",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier for the user. This can be the ID or the ARN of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-contact",
      description:
        "Removes the specified tags from the contact resource. For more information about this API is used, see Set up granular billing for a detailed view of your Amazon Connect usage",
      options: [
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys. Existing tags on the contact whose keys are members of this list will be removed",
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
      description: "Removes the specified tags from the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The Amazon Resource Name (ARN) of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
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
      name: "update-agent-status",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates agent status",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-status-id",
          description: "The identifier of the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of the agent status",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-order",
          description: "The display order of the agent status",
          args: {
            name: "integer",
          },
        },
        {
          name: "--reset-order-number",
          description:
            "A number indicating the reset order of the agent status",
        },
        {
          name: "--no-reset-order-number",
          description:
            "A number indicating the reset order of the agent status",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-authentication-profile",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. To request access to this API, contact Amazon Web Services Support. Updates the selected authentication profile",
      options: [
        {
          name: "--authentication-profile-id",
          description: "A unique identifier for the authentication profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the authentication profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the authentication profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-ips",
          description:
            "A list of IP address range strings that are allowed to access the instance. For more information on how to configure IP addresses, seeConfigure session timeouts in the Amazon Connect Administrator Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--blocked-ips",
          description:
            "A list of IP address range strings that are blocked from accessing the instance. For more information on how to configure IP addresses, For more information on how to configure IP addresses, see Configure IP-based access control in the Amazon Connect Administrator Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--periodic-session-duration",
          description:
            "The short lived session duration configuration for users logged in to Amazon Connect, in minutes. This value determines the maximum possible time before an agent is authenticated. For more information, For more information on how to configure IP addresses, see Configure session timeouts in the Amazon Connect Administrator Guide",
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
      name: "update-contact",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Adds or updates user-defined contact information associated with the specified contact. At least one field to be updated must be present in the request.  You can add or update user-defined contact information for both ongoing and completed contacts",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with your contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--references",
          description:
            "Well-formed data on contact, shown to agents on Contact Control Panel (CCP)",
          args: {
            name: "map",
          },
        },
        {
          name: "--segment-attributes",
          description:
            "A set of system defined key-value pairs stored on individual contact segments (unique contact ID) using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows. Attribute keys can include only alphanumeric, -, and _. This field can be used to show channel subtype, such as connect:Guide. Currently Contact Expiry is the only segment attribute which can be updated by using the UpdateContact API",
          args: {
            name: "map",
          },
        },
        {
          name: "--queue-info",
          description:
            "Information about the queue associated with a contact. This parameter can only be updated for external audio contacts. It is used when you integrate third-party systems with Contact Lens for analytics. For more information, see Amazon Connect Contact Lens integration in the  Amazon Connect Administrator Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-info",
          description:
            "Information about the agent associated with a contact. This parameter can only be updated for external audio contacts. It is used when you integrate third-party systems with Contact Lens for analytics. For more information, see Amazon Connect Contact Lens integration in the  Amazon Connect Administrator Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--customer-endpoint",
          description:
            "The endpoint of the customer for which the contact was initiated. For external audio contacts, this is usually the end customer's phone number. This value can only be updated for external audio contacts. For more information, see Amazon Connect Contact Lens integration in the Amazon Connect Administrator Guide",
          args: {
            name: "structure",
          },
        },
        {
          name: "--system-endpoint",
          description:
            "External system endpoint for the contact was initiated. For external audio contacts, this is the phone number of the external system such as the contact center. This value can only be updated for external audio contacts. For more information, see Amazon Connect Contact Lens integration in the Amazon Connect Administrator Guide",
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
      name: "update-contact-attributes",
      description:
        "Creates or updates user-defined contact attributes associated with the specified contact. You can create or update user-defined attributes for both ongoing and completed contacts. For example, while the call is active, you can update the customer's name or the reason the customer called. You can add notes about steps that the agent took during the call that display to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or to identify abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted. For information about contact record retention and the maximum size of the contact record attributes section, see Feature specifications in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--initial-contact-id",
          description:
            "The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--attributes",
          description:
            "The Amazon Connect attributes. These attributes can be accessed in flows just like any other contact attributes. You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters. When the attributes for a contact exceed 32 KB, the contact is routed down the Error branch of the flow. As a mitigation, consider the following options:   Remove unnecessary attributes by setting their values to empty.   If the attributes are only used in one flow and don't need to be referred to outside of that flow (for example, by a Lambda or another flow), then use flow attributes. This way you aren't needlessly persisting the 32 KB of information from one flow to another. For more information, see Flow block: Set contact attributes in the Amazon Connect Administrator Guide",
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
      name: "update-contact-evaluation",
      description:
        "Updates details about a contact evaluation in the specified Amazon Connect instance. A contact evaluation must be in draft state. Answers included in the request are merged with existing answers for the given evaluation. An answer or note can be deleted by passing an empty object ({}) to the question identifier",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-id",
          description: "A unique identifier for the contact evaluation",
          args: {
            name: "string",
          },
        },
        {
          name: "--answers",
          description: "A map of question identifiers to answer value",
          args: {
            name: "map",
          },
        },
        {
          name: "--notes",
          description: "A map of question identifiers to note value",
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
      name: "update-contact-flow-content",
      description:
        "Updates the specified flow. You can also create and update flows using the Amazon Connect Flow language. Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/{id}:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language.  Length Constraints: Minimum length of 1. Maximum length of 256000",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-contact-flow-metadata",
      description: "Updates metadata about specified flow",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-state",
          description: "The state of flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-contact-flow-module-content",
      description:
        "Updates specified flow module for the specified Amazon Connect instance.  Use the $SAVED alias in the request to describe the SAVED content of a Flow. For example, arn:aws:.../contact-flow/{id}:$SAVED. After a flow is published, $SAVED needs to be supplied to view saved content that has not been published",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-module-id",
          description: "The identifier of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The JSON string that represents the content of the flow. For an example, see Example flow in Amazon Connect Flow language",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-contact-flow-module-metadata",
      description: "Updates metadata about specified flow module",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-module-id",
          description: "The identifier of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The state of flow module",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-contact-flow-name",
      description:
        "The name of the flow. You can also create and update flows using the Amazon Connect Flow language",
      options: [
        {
          name: "--instance-id",
          description: "The identifier of the Amazon Connect instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description: "The identifier of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-contact-routing-data",
      description:
        "Updates routing priority and age on the contact (QueuePriority and QueueTimeAdjustmentInSeconds). These properties can be used to change a customer's position in the queue. For example, you can move a contact to the back of the queue by setting a lower routing priority relative to other contacts in queue; or you can move a contact to the front of the queue by increasing the routing age which will make the contact look artificially older and therefore higher up in the first-in-first-out routing order. Note that adjusting the routing age of a contact affects only its position in queue, and not its actual queue wait time as reported through metrics. These properties can also be updated by using the Set routing priority / age flow block.  Either QueuePriority or QueueTimeAdjustmentInSeconds should be provided within the request body, but not both",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-time-adjustment-seconds",
          description:
            "The number of seconds to add or subtract from the contact's routing age. Contacts are routed to agents on a first-come, first-serve basis. This means that changing their amount of time in queue compared to others also changes their position in queue",
          args: {
            name: "integer",
          },
        },
        {
          name: "--queue-priority",
          description:
            "Priority of the contact in the queue. The default priority for new contacts is 5. You can raise the priority of a contact compared to other contacts in the queue by assigning them a higher priority, such as 1 or 2",
          args: {
            name: "long",
          },
        },
        {
          name: "--routing-criteria",
          description:
            "Updates the routing criteria on the contact. These properties can be used to change how a\u2028 contact is routed within the queue",
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
      name: "update-contact-schedule",
      description:
        "Updates the scheduled time of a task contact that is already scheduled",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description: "The identifier of the contact",
          args: {
            name: "string",
          },
        },
        {
          name: "--scheduled-time",
          description:
            "The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future",
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
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-email-address-metadata",
      description:
        "Updates an email address metadata. For more information about email addresses, see Create email addresses in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address-id",
          description: "The identifier of the email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name of email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-evaluation-form",
      description:
        "Updates details about a specific evaluation form version in the specified Amazon Connect instance. Question and section identifiers cannot be duplicated within the same evaluation form. This operation does not support partial updates. Instead it does a full update of evaluation form content",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-id",
          description: "The unique identifier for the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--evaluation-form-version",
          description: "A version of the evaluation form to update",
          args: {
            name: "integer",
          },
        },
        {
          name: "--create-new-version",
          description:
            "A flag indicating whether the operation must create a new version",
        },
        {
          name: "--no-create-new-version",
          description:
            "A flag indicating whether the operation must create a new version",
        },
        {
          name: "--title",
          description: "A title of the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the evaluation form",
          args: {
            name: "string",
          },
        },
        {
          name: "--items",
          description:
            "Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section",
          args: {
            name: "list",
          },
        },
        {
          name: "--scoring-strategy",
          description: "A scoring strategy of the evaluation form",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-zone",
          description: "The time zone of the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--config",
          description: "Configuration information of the hours of operation",
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
      name: "update-instance-attribute",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--attribute-type",
          description:
            "The type of attribute.  Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature, contact Amazon Web Services Support for allowlisting",
          args: {
            name: "string",
          },
        },
        {
          name: "--value",
          description:
            "The value for the attribute. Maximum character limit is 100",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-instance-storage-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--association-id",
          description:
            "The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description: "A valid resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-config",
          description: "The storage configuration for the instance",
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
      name: "update-participant-role-config",
      description:
        "Updates timeouts for when human chat participants are to be considered idle, and when agents are automatically disconnected from a chat due to idleness. You can set four timers:   Customer idle timeout   Customer auto-disconnect timeout   Agent idle timeout   Agent auto-disconnect timeout   For more information about how chat timeouts work, see Set up chat timeouts for human participants",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-id",
          description:
            "The identifier of the contact in this instance of Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-configuration",
          description: "The Amazon Connect channel you want to configure",
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
      name: "update-phone-number",
      description:
        "Updates your claimed phone number from its current Amazon Connect instance or traffic distribution group to another Amazon Connect instance or traffic distribution group in the same Amazon Web Services Region.  After using this API, you must verify that the phone number is attached to the correct flow in the target instance or traffic distribution group. You need to do this because the API switches only the phone number to a new instance or traffic distribution group. It doesn't migrate the flow configuration of the phone number, too. You can call DescribePhoneNumber API to verify the status of a previous UpdatePhoneNumber operation",
      options: [
        {
          name: "--phone-number-id",
          description: "A unique identifier for the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-arn",
          description:
            "The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance that phone numbers are claimed to. You can find the instance ID in the Amazon Resource Name (ARN) of the instance. You must enter InstanceId or TargetArn",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-phone-number-metadata",
      description:
        "Updates a phone number\u2019s metadata.  To verify the status of a previous UpdatePhoneNumberMetadata operation, call the DescribePhoneNumber API",
      options: [
        {
          name: "--phone-number-id",
          description:
            "The Amazon Resource Name (ARN) or resource ID of the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-description",
          description: "The description of the phone number",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-predefined-attribute",
      description:
        "Updates a predefined attribute for the specified Amazon Connect instance. Predefined attributes are attributes in an Amazon Connect instance that can be used to route contacts to an agent or pools of agents within a queue. For more information, see Create predefined attributes for routing contacts to agents",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the predefined attribute",
          args: {
            name: "string",
          },
        },
        {
          name: "--values",
          description: "The values of the predefined attribute",
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
      name: "update-prompt",
      description: "Updates a prompt",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--prompt-id",
          description: "A unique identifier for the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the prompt",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-uri",
          description:
            "The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the GetPromptFile API instead of providing S3 URIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-queue-hours-of-operation",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the hours of operation for the specified queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--hours-of-operation-id",
          description: "The identifier for the hours of operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-queue-max-contacts",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the maximum number of contacts allowed in a queue before it is considered full",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-contacts",
          description:
            "The maximum number of contacts that can be in the queue before it is considered full",
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
      name: "update-queue-name",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the name and description of a queue. At least Name or Description must be provided",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-queue-outbound-caller-config",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue.    If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException.   Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API.   If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--outbound-caller-config",
          description:
            "The outbound caller ID name, number, and outbound whisper flow",
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
      name: "update-queue-outbound-email-config",
      description:
        "Updates the outbound email address Id for a specified queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--outbound-email-config",
          description: "The outbound email address ID for a specified queue",
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
      name: "update-queue-status",
      description:
        "This API is in preview release for Amazon Connect and is subject to change. Updates the status of the queue",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-id",
          description: "The identifier for the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The status of the queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-quick-connect-config",
      description:
        "Updates the configuration settings for the specified quick connect",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-config",
          description:
            "Information about the configuration settings for the quick connect",
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
      name: "update-quick-connect-name",
      description:
        "Updates the name and description of a quick connect. The request accepts the following data in JSON format. At least Name or Description must be provided",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--quick-connect-id",
          description: "The identifier for the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the quick connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-routing-profile-agent-availability-timer",
      description:
        "Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--agent-availability-timer",
          description:
            "Whether agents with this routing profile will have their routing order calculated based on time since their last inbound contact or longest idle time",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-routing-profile-concurrency",
      description:
        "Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-concurrencies",
          description:
            "The channels that agents can handle in the Contact Control Panel (CCP)",
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
      name: "update-routing-profile-default-outbound-queue",
      description: "Updates the default outbound queue of a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-outbound-queue-id",
          description: "The identifier for the default outbound queue",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-routing-profile-name",
      description:
        "Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the routing profile. Must not be more than 127 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The description of the routing profile. Must not be more than 250 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-routing-profile-queues",
      description:
        "Updates the properties associated with a set of queues for a routing profile",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--queue-configs",
          description:
            "The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues",
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
      name: "update-rule",
      description:
        "Updates a rule for the specified Amazon Connect instance. Use the Rules Function language to code conditions for the rule",
      options: [
        {
          name: "--rule-id",
          description: "A unique identifier for the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name of the rule. You can change the name only if TriggerEventSource is one of the following values: OnZendeskTicketCreate | OnZendeskTicketStatusUpdate | OnSalesforceCaseCreate",
          args: {
            name: "string",
          },
        },
        {
          name: "--function",
          description: "The conditions of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "A list of actions to be run when the rule is triggered",
          args: {
            name: "list",
          },
        },
        {
          name: "--publish-status",
          description: "The publish status of the rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-security-profile",
      description:
        "Updates a security profile. For information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide. For a mapping of the API name and user interface name of the security profile permissions, see List of security profile permissions",
      options: [
        {
          name: "--description",
          description: "The description of the security profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "The permissions granted to a security profile. For a list of valid permissions, see List of security profile permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-profile-id",
          description: "The identifier for the security profle",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--allowed-access-control-tags",
          description:
            "The list of tags that a security profile uses to restrict access to resources in Amazon Connect",
          args: {
            name: "map",
          },
        },
        {
          name: "--tag-restricted-resources",
          description:
            "The list of resources that a security profile applies tag restrictions to in Amazon Connect",
          args: {
            name: "list",
          },
        },
        {
          name: "--applications",
          description: "A list of the third-party application's metadata",
          args: {
            name: "list",
          },
        },
        {
          name: "--hierarchy-restricted-resources",
          description:
            "The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: User",
          args: {
            name: "list",
          },
        },
        {
          name: "--allowed-access-control-hierarchy-group-id",
          description:
            "The identifier of the hierarchy group that a security profile uses to restrict access to resources in Amazon Connect",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-task-template",
      description:
        "Updates details about a specific task template in the specified Amazon Connect instance. This operation does not support partial updates. Instead it does a full update of template content",
      options: [
        {
          name: "--task-template-id",
          description: "A unique identifier for the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the task template",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-flow-id",
          description:
            "The identifier of the flow that runs by default when a task is created by referencing this template",
          args: {
            name: "string",
          },
        },
        {
          name: "--self-assign-flow-id",
          description:
            "The ContactFlowId for the flow that will be run if this template is used to create a self-assigned task",
          args: {
            name: "string",
          },
        },
        {
          name: "--constraints",
          description: "Constraints that are applicable to the fields listed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--defaults",
          description:
            "The default values for fields when a task is created by referencing this template",
          args: {
            name: "structure",
          },
        },
        {
          name: "--status",
          description:
            "Marks a template as ACTIVE or INACTIVE for a task to refer to it. Tasks can only be created from ACTIVE templates. If a template is marked as INACTIVE, then a task that refers to this template cannot be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description: "Fields that are part of the template",
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
      name: "update-traffic-distribution",
      description:
        "Updates the traffic distribution for a given traffic distribution group.   The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned.  For more information about updating a traffic distribution group, see Update telephony traffic distribution across Amazon Web Services Regions  in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--id",
          description:
            "The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--telephony-config",
          description:
            "The distribution of traffic between the instance and its replica(s)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sign-in-config",
          description:
            "The distribution that determines which Amazon Web Services Regions should be used to sign in agents in to both the instance and its replica(s)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--agent-config",
          description:
            "The distribution of agents between the instance and its replica(s)",
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
      name: "update-user-hierarchy",
      description:
        "Assigns the specified hierarchy group to the specified user",
      options: [
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-hierarchy-group-name",
      description: "Updates the name of the user hierarchy group",
      options: [
        {
          name: "--name",
          description:
            "The name of the hierarchy group. Must not be more than 100 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--hierarchy-group-id",
          description: "The identifier of the hierarchy group",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-hierarchy-structure",
      description:
        "Updates the user hierarchy structure: add, remove, and rename user hierarchy levels",
      options: [
        {
          name: "--hierarchy-structure",
          description: "The hierarchy levels to update",
          args: {
            name: "structure",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-identity-info",
      description:
        "Updates the identity information for the specified user.  We strongly recommend limiting who has the ability to invoke UpdateUserIdentityInfo. Someone with that ability can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide",
      options: [
        {
          name: "--identity-info",
          description: "The identity information for the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-phone-config",
      description:
        "Updates the phone configuration settings for the specified user",
      options: [
        {
          name: "--phone-config",
          description:
            "Information about phone configuration settings for the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-proficiencies",
      description:
        "Updates the properties associated with the proficiencies of a user",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-proficiencies",
          description:
            "The proficiencies to be updated for the user. Proficiencies must first be associated to the user. You can do this using AssociateUserProficiencies API",
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
      name: "update-user-routing-profile",
      description:
        "Assigns the specified routing profile to the specified user",
      options: [
        {
          name: "--routing-profile-id",
          description: "The identifier of the routing profile for the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user-security-profiles",
      description:
        "Assigns the specified security profiles to the specified user",
      options: [
        {
          name: "--security-profile-ids",
          description: "The identifiers of the security profiles for the user",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-id",
          description: "The identifier of the user account",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-view-content",
      description:
        "Updates the view content of the given view identifier in the specified Amazon Connect instance. It performs content validation if Status is set to SAVED and performs full content validation if Status is PUBLISHED. Note that the $SAVED alias' content will always be updated, but the $LATEST alias' content will only be updated if Status is PUBLISHED",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description:
            "Indicates the view status as either SAVED or PUBLISHED. The PUBLISHED status will initiate validation on the content",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "View content containing all content necessary to render a view except for runtime input data and the runtime input schema, which is auto-generated by this operation. The total uncompressed content has a maximum file size of 400kB",
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
      name: "update-view-metadata",
      description:
        "Updates the view metadata. Note that either Name or Description must be provided",
      options: [
        {
          name: "--instance-id",
          description:
            "The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--view-id",
          description:
            "The identifier of the view. Both ViewArn and ViewId can be used",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the view",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
