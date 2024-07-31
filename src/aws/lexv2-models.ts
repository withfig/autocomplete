const completionSpec: Fig.Spec = {
  name: "lexv2-models",
  description: null,
  subcommands: [
    {
      name: "batch-create-custom-vocabulary-item",
      description:
        "Create a batch of custom vocabulary items for a given bot locale's custom vocabulary",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the version of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see  Supported Languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-vocabulary-item-list",
          description:
            "A list of new custom vocabulary items. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight",
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
      name: "batch-delete-custom-vocabulary-item",
      description:
        "Delete a batch of custom vocabulary items for a given bot locale's custom vocabulary",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the version of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see  Supported Languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-vocabulary-item-list",
          description:
            "A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier",
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
      name: "batch-update-custom-vocabulary-item",
      description:
        "Update a batch of custom vocabulary items for a given bot locale's custom vocabulary",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the version of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see  Supported Languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-vocabulary-item-list",
          description:
            "A list of custom vocabulary items with updated fields. Each entry must contain a phrase and can optionally contain a displayAs and/or a weight",
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
      name: "build-bot-locale",
      description:
        "Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot to build. The identifier is returned in the response from the CreateBot operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot to build. This can only be the draft version of the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-bot",
      description: "Creates an Amazon Lex conversational bot",
      options: [
        {
          name: "--bot-name",
          description:
            "The name of the bot. The bot name must be unique in the account that creates the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the bot. It appears in lists to help you identify a particular bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-privacy",
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.  A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bot-tags",
          description:
            "A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the UpdateBot operation to update tags. To update tags, use the TagResource operation",
          args: {
            name: "map",
          },
        },
        {
          name: "--test-bot-alias-tags",
          description:
            "A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the UpdateAlias operation to update tags. To update tags on the test alias, use the TagResource operation",
          args: {
            name: "map",
          },
        },
        {
          name: "--bot-type",
          description: "The type of a bot to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-members",
          description: "The list of bot members in a network to be created",
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
      name: "create-bot-alias",
      description:
        'Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot',
      options: [
        {
          name: "--bot-alias-name",
          description:
            "The alias to create. The name must be unique for the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the alias. Use this description to help identify the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that this alias points to. You can use the UpdateBotAlias operation to change the bot version associated with the alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-locale-settings",
          description:
            "Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales",
          args: {
            name: "map",
          },
        },
        {
          name: "--conversation-log-settings",
          description:
            "Specifies whether Amazon Lex logs text and audio for a conversation with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio logs store audio input in Amazon S3",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sentiment-analysis-settings",
          description:
            "Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that the alias applies to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the UpdateBotAlias operation to update the tags on a bot alias. To update tags, use the TagResource operation",
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
      name: "create-bot-locale",
      description:
        "Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to create the locale for",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot to create the locale for. This can only be the draft version of the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the bot locale. Use this to help identify the bot locale in lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--nlu-intent-confidence-threshold",
          description:
            "Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For example, suppose a bot is configured with the confidence threshold of 0.80 and the AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the RecognizeText operation would be:   AMAZON.FallbackIntent   IntentA   IntentB   IntentC",
          args: {
            name: "double",
          },
        },
        {
          name: "--voice-settings",
          description:
            "The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--generative-ai-settings",
          description:
            "Contains specifications about the generative AI capabilities from Amazon Bedrock that you can turn on for your bot",
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
      name: "create-bot-replica",
      description:
        "Action to create a replication of the source bot in the secondary region",
      options: [
        {
          name: "--bot-id",
          description:
            "The request for the unique bot ID of the source bot to be replicated in the secondary region",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The request for the secondary region that will be used in the replication of the source bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-bot-version",
      description:
        "Creates an immutable version of the bot. When you create the first version of a bot, Amazon Lex sets the version number to 1. Subsequent bot versions increase in an increment of 1. The version number will always represent the total number of versions created of the bot, not the current number of versions. If a bot version is deleted, that bot version number will not be reused",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to create the version for",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the version. Use the description to help identify the version in lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version-locale-specification",
          description:
            "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version",
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
      name: "create-export",
      description:
        "Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see  Importing and exporting bots",
      options: [
        {
          name: "--resource-specification",
          description:
            "Specifies the type of resource to export, either a bot or a bot locale. You can only specify one type of resource to export",
          args: {
            name: "structure",
          },
        },
        {
          name: "--file-format",
          description:
            "The file format of the bot or bot locale definition files",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-password",
          description:
            "An password to use to encrypt the exported archive. Using a password is optional, but you should encrypt the archive to protect the data in transit between Amazon Lex and your local computer",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-intent",
      description:
        'Creates an intent. To define the interaction between the user and your bot, you define one or more intents. For example, for a pizza ordering bot you would create an OrderPizza intent. When you create an intent, you must provide a name. You can optionally provide the following:   Sample utterances. For example, "I want to order a pizza" and "Can I order a pizza." You can\'t provide utterances for built-in intents.   Information to be gathered. You specify slots for the information that you bot requests from the user. You can specify standard slot types, such as date and time, or custom slot types for your application.   How the intent is fulfilled. You can provide a Lambda function or configure the intent to return the intent information to your client application. If you use a Lambda function, Amazon Lex invokes the function when all of the intent information is available.   A confirmation prompt to send to the user to confirm an intent. For example, "Shall I order your pizza?"   A conclusion statement to send to the user after the intent is fulfilled. For example, "I ordered your pizza."   A follow-up prompt that asks the user for additional activity. For example, "Do you want a drink with your pizza?"',
      options: [
        {
          name: "--intent-name",
          description:
            "The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the intent. Use the description to help identify the intent in lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-intent-signature",
          description:
            "A unique identifier for the built-in intent to base this intent on",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-utterances",
          description:
            'An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza".  In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user',
          args: {
            name: "list",
          },
        },
        {
          name: "--dialog-code-hook",
          description:
            "Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction. For example, suppose that your bot determines that the user's name is John. You Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, glutenIntolerant to true. You might find John's phone number and set the corresponding session attribute",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fulfillment-code-hook",
          description:
            "Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user. For example, in a pizza ordering bot, the Lambda function can look up the closest pizza restaurant to the customer's location and then place an order on the customer's behalf",
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-confirmation-setting",
          description:
            'Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent',
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-closing-setting",
          description:
            "Sets the response that Amazon Lex sends to the user when the intent is closed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-contexts",
          description:
            "A list of contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime.  For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond. An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-contexts",
          description:
            "A lists of contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer.  When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active",
          args: {
            name: "list",
          },
        },
        {
          name: "--kendra-configuration",
          description:
            "Configuration information required to use the AMAZON.KendraSearchIntent intent to connect to an Amazon Kendra index. The AMAZON.KendraSearchIntent intent is called when Amazon Lex can't determine another intent to invoke",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with this intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with this intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-response-setting",
          description:
            "Configuration settings for the response that is sent to the user at the beginning of a conversation, before eliciting slot values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--qn-a-intent-configuration",
          description:
            "Specifies the configuration of the built-in Amazon.QnAIntent. The AMAZON.QnAIntent intent is called when Amazon Lex can't determine another intent to invoke. If you specify this field, you can't specify the kendraConfiguration field",
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
      name: "create-resource-policy",
      description:
        "Creates a new resource policy with the specified policy statements",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see  IAM JSON policy reference .  If the policy isn't valid, Amazon Lex returns a validation exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-resource-policy-statement",
      description:
        "Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the statement is added to the current resource policy. If a policy doesn't exist, a new policy is created. You can't create a resource policy statement that allows cross-account access. You need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-id",
          description:
            "The name of the statement. The ID is the same as the Sid IAM property. The statement name must be unique within the policy. For more information, see IAM JSON policy elements: Sid",
          args: {
            name: "string",
          },
        },
        {
          name: "--effect",
          description:
            "Determines whether the statement allows or denies access to the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal",
          description:
            "An IAM principal, such as an IAM user, IAM role, or Amazon Web Services services that is allowed or denied access to a resource. For more information, see Amazon Web Services JSON policy elements: Principal",
          args: {
            name: "list",
          },
        },
        {
          name: "--action",
          description:
            "The Amazon Lex action that this policy either allows or denies. The action must apply to the resource type of the specified ARN. For more information, see  Actions, resources, and condition keys for Amazon Lex V2",
          args: {
            name: "list",
          },
        },
        {
          name: "--condition",
          description:
            "Specifies a condition when the policy is in effect. If the principal of the policy is a service principal, you must provide two condition blocks, one with a SourceAccount global condition key and one with a SourceArn global condition key. For more information, see IAM JSON policy elements: Condition",
          args: {
            name: "map",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "The identifier of the revision of the policy to edit. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-slot",
      description:
        "Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user",
      options: [
        {
          name: "--slot-name",
          description:
            "The name of the slot. Slot names must be unique within the bot that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the slot. Use this to help identify the slot in lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-id",
          description:
            "The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--value-elicitation-setting",
          description:
            "Specifies prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--obfuscation-setting",
          description:
            "Determines how slot values are used in Amazon CloudWatch logs. If the value of the obfuscationSetting parameter is DefaultObfuscation, slot values are obfuscated in the log output. If the value is None, the actual value is present in the log output. The default is to obfuscate values in the CloudWatch logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--multiple-values-setting",
          description:
            "Indicates whether the slot returns multiple values in one response. Multi-value slots are only available in the en-US locale. If you set this value to true in any other locale, Amazon Lex throws a ValidationException.  If the multipleValuesSetting is not set, the default value is false",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sub-slot-setting",
          description:
            "Specifications for the constituent sub slots and the expression for the composite slot",
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
      name: "create-slot-type",
      description:
        "Creates a custom slot type  To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume",
      options: [
        {
          name: "--slot-type-name",
          description:
            "The name for the slot. A slot type name must be unique within the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the slot type. Use the description to help identify the slot type in lists",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-values",
          description:
            "A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot",
          args: {
            name: "list",
          },
        },
        {
          name: "--value-selection-setting",
          description:
            "Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values:    ORIGINAL_VALUE - Returns the value entered by the user, if the user value is similar to the slot value.    TOP_RESOLUTION - If there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null.   If you don't specify the valueSelectionSetting parameter, the default is ORIGINAL_VALUE",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-slot-type-signature",
          description:
            "The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with this slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the bot version associated with this slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-source-setting",
          description:
            "Sets the type of external information used to create the slot type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--composite-slot-type-setting",
          description: "Specifications for a composite slot type",
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
      name: "create-test-set-discrepancy-report",
      description:
        "Create a report that describes the differences between the bot and the test set",
      options: [
        {
          name: "--test-set-id",
          description: "The test set Id for the test set discrepancy report",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description: "The target bot for the test set discrepancy report",
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
      name: "create-upload-url",
      description:
        "Gets a pre-signed S3 write URL that you use to upload the zip archive when importing a bot or a bot locale",
      options: [
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot",
      description:
        "Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the bot is being used by another resource. Set this parameter to true to skip this check and remove the bot even if it is being used by another resource",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the bot is being used by another resource. Set this parameter to true to skip this check and remove the bot even if it is being used by another resource",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot-alias",
      description: "Deletes the specified bot alias",
      options: [
        {
          name: "--bot-alias-id",
          description: "The unique identifier of the bot alias to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with the alias to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a ResourceInUseException exception if the alias is being used by another resource. Set this parameter to true to skip this check and remove the alias even if it is being used by another resource",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as a bot network, is using the bot alias before it is deleted and throws a ResourceInUseException exception if the alias is being used by another resource. Set this parameter to true to skip this check and remove the alias even if it is being used by another resource",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot-locale",
      description:
        "Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot-replica",
      description:
        "The action to delete the replicated bot in the secondary region",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique ID of the replicated bot to be deleted from the secondary region",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The secondary region of the replicated bot that will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot-version",
      description:
        "Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the version",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the version is being used by another resource. Set this parameter to true to skip this check and remove the version even if it is being used by another resource",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, Amazon Lex checks if any other resource, such as an alias or bot network, is using the bot version before it is deleted and throws a ResourceInUseException exception if the version is being used by another resource. Set this parameter to true to skip this check and remove the version even if it is being used by another resource",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-custom-vocabulary",
      description:
        "Removes a custom vocabulary from the specified locale in the specified bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot to remove the custom vocabulary from",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot to remove the custom vocabulary from",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The locale identifier for the locale that contains the custom vocabulary to remove",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-export",
      description:
        "Removes a previous export and the associated files stored in an S3 bucket",
      options: [
        {
          name: "--export-id",
          description: "The unique identifier of the export to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-import",
      description:
        "Removes a previous import and the associated file stored in an S3 bucket",
      options: [
        {
          name: "--import-id",
          description: "The unique identifier of the import to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-intent",
      description:
        "Removes the specified intent. Deleting an intent also deletes the slots associated with the intent",
      options: [
        {
          name: "--intent-id",
          description: "The unique identifier of the intent to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy attached, Amazon Lex returns an exception",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that has the resource policy attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "The identifier of the revision to edit. If this ID doesn't match the current revision number, Amazon Lex returns an exception If you don't specify a revision ID, Amazon Lex will delete the current policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-resource-policy-statement",
      description:
        "Deletes a policy statement from a resource policy. If you delete the last statement from a policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy, or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to call the API",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--statement-id",
          description:
            "The name of the statement (SID) to delete from the policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "The identifier of the revision of the policy to delete the statement from. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex removes the current contents of the statement",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-slot",
      description: "Deletes the specified slot from an intent",
      options: [
        {
          name: "--slot-id",
          description: "The identifier of the slot to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot associated with the slot to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent associated with the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-slot-type",
      description:
        "Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true",
      options: [
        {
          name: "--slot-type-id",
          description: "The identifier of the slot type to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type even if a slot uses it",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type even if a slot uses it",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-test-set",
      description: "The action to delete the selected test set",
      options: [
        {
          name: "--test-set-id",
          description: "The test set Id of the test set to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-utterances",
      description:
        "Deletes stored utterances. Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the ListAggregatedUtterances operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.. Use the DeleteUtterances operation to manually delete utterances for a specific session. When you use the DeleteUtterances operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the ListAggregatedUtterances operation are deleted after 15 days",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the utterances",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where the utterances were collected. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The unique identifier of the session with the user. The ID is returned in the response from the RecognizeText and RecognizeUtterance operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot",
      description: "Provides metadata information about a bot",
      options: [
        {
          name: "--bot-id",
          description: "The unique identifier of the bot to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-alias",
      description: "Get information about a specific bot alias",
      options: [
        {
          name: "--bot-alias-id",
          description: "The identifier of the bot alias to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the bot alias to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-locale",
      description:
        "Describes the settings that a bot has for a specific locale",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-recommendation",
      description:
        "Provides metadata information about a bot recommendation. This information will enable you to get a description on the request inputs, to download associated transcripts after processing is complete, and to download intents and slot-types generated by the bot recommendation",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with the bot recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot associated with the bot recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the bot recommendation to describe. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-recommendation-id",
          description: "The identifier of the bot recommendation to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-replica",
      description: "Monitors the bot replication status through the UI console",
      options: [
        {
          name: "--bot-id",
          description:
            "The request for the unique bot ID of the replicated bot being monitored",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The request for the region of the replicated bot being monitored",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-resource-generation",
      description:
        "Returns information about a request to generate a bot through natural language description, made through the StartBotResource API. Use the generatedBotLocaleUrl to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot for which to return the generation details",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot for which to return the generation details",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The locale of the bot for which to return the generation details",
          args: {
            name: "string",
          },
        },
        {
          name: "--generation-id",
          description:
            "The unique identifier of the generation request for which to return the generation details",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-version",
      description: "Provides metadata about a version of a bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot containing the version to return metadata for",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to return metadata for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-custom-vocabulary-metadata",
      description: "Provides metadata information about a custom vocabulary",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The bot version of the bot to return metadata for",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The locale to return the custom vocabulary information for. The locale must be en_GB",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-export",
      description: "Gets information about a specific export",
      options: [
        {
          name: "--export-id",
          description: "The unique identifier of the export to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-import",
      description: "Gets information about a specific import",
      options: [
        {
          name: "--import-id",
          description: "The unique identifier of the import to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-intent",
      description: "Returns metadata about an intent",
      options: [
        {
          name: "--intent-id",
          description: "The identifier of the intent to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intent to describe. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-resource-policy",
      description:
        "Gets the resource policy and policy revision for a bot or bot alias",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-slot",
      description: "Gets metadata information about a slot",
      options: [
        {
          name: "--slot-id",
          description: "The unique identifier for the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-slot-type",
      description: "Gets metadata information about a slot type",
      options: [
        {
          name: "--slot-type-id",
          description: "The identifier of the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot type to describe. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-test-execution",
      description: "Gets metadata information about the test execution",
      options: [
        {
          name: "--test-execution-id",
          description: "The execution Id of the test set execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-test-set",
      description: "Gets metadata information about the test set",
      options: [
        {
          name: "--test-set-id",
          description: "The test set Id for the test set request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-test-set-discrepancy-report",
      description:
        "Gets metadata information about the test set discrepancy report",
      options: [
        {
          name: "--test-set-discrepancy-report-id",
          description:
            "The unique identifier of the test set discrepancy report",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-test-set-generation",
      description: "Gets metadata information about the test set generation",
      options: [
        {
          name: "--test-set-generation-id",
          description: "The unique identifier of the test set generation",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "generate-bot-element",
      description: "Generates sample utterances for an intent",
      options: [
        {
          name: "--intent-id",
          description:
            "The intent unique Id for the bot request to generate utterances",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The bot unique Id for the bot request to generate utterances",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The bot version for the bot request to generate utterances",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The unique locale Id for the bot request to generate utterances",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-test-execution-artifacts-url",
      description:
        "The pre-signed Amazon S3 URL to download the test execution result artifacts",
      options: [
        {
          name: "--test-execution-id",
          description: "The unique identifier of the completed test execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-aggregated-utterances",
      description:
        'Provides a list of utterances that users have sent to the bot. Utterances are aggregated by the text of the utterance. For example, all instances where customers used the phrase "I want to order pizza" are aggregated into the same line in the response. You can see both detected utterances and missed utterances. A detected utterance is where the bot properly recognized the utterance and activated the associated intent. A missed utterance was not recognized by the bot and didn\'t activate an intent. Utterances can be aggregated for a bot alias or for a bot version, but not both at the same time. Utterances statistics are not generated under the following conditions:   The childDirected field was set to true when the bot was created.   You are using slot obfuscation with one or more slots.   You opted out of participating in improving Amazon Lex',
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with this request",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where the utterances were collected. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-duration",
          description:
            "The time window for aggregating the utterance information. You can specify a time between one hour and two weeks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of utterances. You can sort by the hit count, the missed count, or the number of distinct sessions the utterance appeared in",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the maxResults parameter, 1,000 results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListAggregatedUtterances operation contains more results that specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-alias-replicas",
      description:
        "The action to list the replicated bots created from the source bot alias",
      options: [
        {
          name: "--bot-id",
          description:
            "The request for the unique bot ID of the replicated bot created from the source bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The request for the secondary region of the replicated bot created from the source bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The request for maximum results to list the replicated bots created from the source bot alias",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The request for the next token for the replicated bot created from the source bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-aliases",
      description: "Gets a list of aliases for the specified bot",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list aliases for",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBotAliases operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-locales",
      description: "Gets a list of locales for the specified bot",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list locales for",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to list locales for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of locales. You can sort by locale name in ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBotLocales operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token as the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-recommendations",
      description:
        "Get a list of bot recommendations that meet the specified criteria",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the bot recommendation list",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the bot recommendation list",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the bot recommendation list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBotRecommendation operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-replicas",
      description: "The action to list the replicated bots",
      options: [
        {
          name: "--bot-id",
          description:
            "The request for the unique bot IDs in the list of replicated bots",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-resource-generations",
      description: "Lists the generation requests made for a bot locale",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot whose generation requests you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot whose generation requests you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The locale of the bot whose generation requests you want to view",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "An object containing information about the attribute and the method by which to sort the results",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the total number of results is greater than the number specified in the maxResults, the response returns a token in the nextToken field. Use this token when making a request to return the next batch of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-version-replicas",
      description:
        "Contains information about all the versions replication statuses applicable for Global Resiliency",
      options: [
        {
          name: "--bot-id",
          description:
            "The request for the unique ID in the list of replicated bots",
          args: {
            name: "string",
          },
        },
        {
          name: "--replica-region",
          description:
            "The request for the region used in the list of replicated bots",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum results given in the list of replicated bots",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "The next token given in the list of replicated bots",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "The requested sort category for the list of replicated bots",
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
      name: "list-bot-versions",
      description:
        "Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list versions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of versions. You can specify that the list be sorted by version name in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to the ListBotVersion operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description: "Gets a list of available bots",
      options: [
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of bots. You can specify that the list be sorted by bot name in ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBots operation contains more results than specified in the maxResults parameter, a token is returned in the response.  Use the returned token in the nextToken parameter of a ListBots request to return the next page of results. For a complete set of results, call the ListBots operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-built-in-intents",
      description:
        "Gets a list of built-in intents provided by Amazon Lex that you can use in your bot.  To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent",
      options: [
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of built-in intents. You can specify that the list be sorted by the built-in intent signature in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBuiltInIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-built-in-slot-types",
      description:
        "Gets a list of built-in slot types that meet the specified criteria",
      options: [
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListBuiltInSlotTypes operation. You can choose to sort by the slot type signature in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBuiltInSlotTypes operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-custom-vocabulary-items",
      description:
        "Paginated list of custom vocabulary items for a given bot locale's custom vocabulary",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the version of the bot associated with this custom vocabulary",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The bot version of the bot to the list custom vocabulary request",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items returned by the list operation",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The nextToken identifier to the list custom vocabulary request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-exports",
      description:
        "Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier that Amazon Lex assigned to the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to list exports for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the field that the list of exports is sorted by. You can sort by the LastUpdatedDateTime field in ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListExports operation contains more results that specified in the maxResults parameter, a token is returned in the response.  Use the returned token in the nextToken parameter of a ListExports request to return the next page of results. For a complete set of results, call the ListExports operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "Specifies the resources that should be exported. If you don't specify a resource type in the filters parameter, both bot locales and custom vocabularies are exported",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-imports",
      description:
        "Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier that Amazon Lex assigned to the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to list imports for",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the field that the list of imports is sorted by. You can sort by the LastUpdatedDateTime field in ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListImports operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListImports request to return the next page of results. For a complete set of results, call the ListImports operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "Specifies the locale that should be present in the list. If you don't specify a resource type in the filters parameter, the list contains both bot locales and custom vocabularies",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-intent-metrics",
      description:
        "Retrieves summary metrics for the intents in your bot. The following fields are required:    metrics \u2013 A list of AnalyticsIntentMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order.    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.   Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.   Note that an order field exists in both binBy and metrics. You can specify only one order in a given request",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve intent metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The timestamp that marks the beginning of the range of time for which you want to see intent metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see intent metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metrics",
          description:
            "A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the order by which to organize the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--bin-by",
          description:
            "A list of objects, each of which contains specifications for organizing the results by time",
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "A list of objects, each of which specifies how to group the results. You can group by the following criteria:    IntentName \u2013 The name of the intent.    IntentEndState \u2013 The final state of the intent. The possible end states are detailed in Key definitions in the user guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListIntentMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntentMetrics request to return the next page of results. For a complete set of results, call the ListIntentMetrics operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-intent-paths",
      description:
        "Retrieves summary statistics for a path of intents that users take over sessions with your bot. The following fields are required:    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.    intentPath \u2013 Define an order of intents for which you want to retrieve metrics. Separate intents in the path with a forward slash. For example, populate the intentPath field with /BookCar/BookHotel to see details about how many times users invoked the BookCar and BookHotel intents in that order.   Use the optional filters field to filter the results",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve intent path metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see intent path metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see intent path metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--intent-path",
          description:
            "The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For example:   /BookCar   /BookCar/BookHotel   /BookHotel/BookCar",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each describes a condition by which you want to filter the results",
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
      name: "list-intent-stage-metrics",
      description:
        "Retrieves summary metrics for the stages within intents in your bot. The following fields are required:    metrics \u2013 A list of AnalyticsIntentStageMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order.    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.   Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.   Note that an order field exists in both binBy and metrics. You can only specify one order in a given request",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve intent stage metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see intent stage metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see intent stage metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metrics",
          description:
            "A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--bin-by",
          description:
            "A list of objects, each of which contains specifications for organizing the results by time",
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "A list of objects, each of which specifies how to group the results. You can group by the following criteria:    IntentStageName \u2013 The name of the intent stage.    SwitchedToIntent \u2013 The intent to which the conversation was switched (if any)",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-intents",
      description: "Get a list of intents that meet the specified criteria",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListIntents operation. You can choose to sort by the intent name or last updated date in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntents request to return the next page of results. For a complete set of results, call the ListIntents operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-recommended-intents",
      description:
        "Gets a list of recommended intents provided by the bot recommendation that you can use in your bot. Intents in the response are ordered by relevance",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with the recommended intents",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the recommended intents",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the recommended intents",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-recommendation-id",
          description:
            "The identifier of the bot recommendation that contains the recommended intents",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListRecommendedIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
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
      name: "list-session-analytics-data",
      description:
        "Retrieves a list of metadata for individual user sessions with your bot. The startDateTime and endDateTime fields are required. These fields define a time range for which you want to retrieve results. Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve session analytics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see session analytics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see session analytics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "An object specifying the measure and method by which to sort the session analytics data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSessionAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the ListSessionAnalyticsData operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-session-metrics",
      description:
        "Retrieves summary metrics for the user sessions with your bot. The following fields are required:    metrics \u2013 A list of AnalyticsSessionMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order.    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.   Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.   Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve session metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see session metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see session metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metrics",
          description:
            "A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--bin-by",
          description:
            "A list of objects, each of which contains specifications for organizing the results by time",
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "A list of objects, each of which specifies how to group the results. You can group by the following criteria:    ConversationEndState \u2013 The final state of the conversation. The possible end states are detailed in Key definitions in the user guide.    LocaleId \u2013 The unique identifier of the bot locale",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-slot-types",
      description:
        "Gets a list of slot types that match the specified criteria",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the slot types",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListSlotTypes operation. You can choose to sort by the slot type name or last updated date in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSlotTypes operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-slots",
      description: "Gets a list of slots that match the specified criteria",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description:
            "The unique identifier of the intent that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListSlots operation. You can choose to sort by the slot name or last updated date in either ascending or descending order",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSlots operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to get a list of tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-test-execution-result-items",
      description: "Gets a list of test execution result items",
      options: [
        {
          name: "--test-execution-id",
          description:
            "The unique identifier of the test execution to list the result items",
          args: {
            name: "string",
          },
        },
        {
          name: "--result-filter-by",
          description:
            "The filter for the list of results from the test set execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of test execution result items to return in each page. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListTestExecutionResultItems operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-test-executions",
      description: "The list of test set executions",
      options: [
        {
          name: "--sort-by",
          description: "The sort order of the test set executions",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of test executions to return in each page. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListTestExecutions operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-test-set-records",
      description: "The list of test set records",
      options: [
        {
          name: "--test-set-id",
          description:
            "The identifier of the test set to list its test set records",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of test set records to return in each page. If there are fewer records than the max page size, only the actual number of records are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListTestSetRecords operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-test-sets",
      description: "The list of the test sets",
      options: [
        {
          name: "--sort-by",
          description: "The sort order for the list of test sets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of test sets to return in each page. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListTestSets operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-utterance-analytics-data",
      description:
        "To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role.  Retrieves a list of metadata for individual user utterances to your bot. The following fields are required:    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.   Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results and the sortBy field to specify the values by which to sort the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve utterance analytics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see utterance analytics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see utterance analytics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--sort-by",
          description:
            "An object specifying the measure and method by which to sort the utterance analytics data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the ListUtteranceAnalyticsData operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-utterance-metrics",
      description:
        "To use this API operation, your IAM role must have permissions to perform the ListAggregatedUtterances operation, which provides access to utterance-related analytics. See Viewing utterance statistics for the IAM policy to apply to the IAM role.  Retrieves summary metrics for the utterances in your bot. The following fields are required:    metrics \u2013 A list of AnalyticsUtteranceMetric objects. In each object, use the name field to specify the metric to calculate, the statistic field to specify whether to calculate the Sum, Average, or Max number, and the order field to specify whether to sort the results in Ascending or Descending order.    startDateTime and endDateTime \u2013 Define a time range for which you want to retrieve results.   Of the optional fields, you can organize the results in the following ways:   Use the filters field to filter the results, the groupBy field to specify categories by which to group the results, and the binBy field to specify time intervals by which to group the results.   Use the maxResults field to limit the number of results to return in a single response and the nextToken field to return the next batch of results if the response does not return the full set of results.   Note that an order field exists in both binBy and metrics. Currently, you can specify it in either field, but not in both",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier for the bot for which you want to retrieve utterance metrics",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-date-time",
          description:
            "The date and time that marks the beginning of the range of time for which you want to see utterance metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-date-time",
          description:
            "The date and time that marks the end of the range of time for which you want to see utterance metrics",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--metrics",
          description:
            "A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--bin-by",
          description:
            "A list of objects, each of which contains specifications for organizing the results by time",
          args: {
            name: "list",
          },
        },
        {
          name: "--group-by",
          description:
            "A list of objects, each of which specifies how to group the results. You can group by the following criteria:    UtteranceText \u2013 The transcription of the utterance.    UtteranceState \u2013 The state of the utterance. The possible states are detailed in Key definitions in the user guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--attributes",
          description:
            "A list containing attributes related to the utterance that you want the response to return. The following attributes are possible:    LastUsedIntent \u2013 The last used intent at the time of the utterance",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description:
            "A list of objects, each of which describes a condition by which you want to filter the results",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListUtteranceMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListUtteranceMetrics request to return the next page of results. For a complete set of results, call the ListUtteranceMetrics operation until the nextToken returned in the response is null",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-associated-transcripts",
      description:
        "Search for associated transcripts that meet the specified criteria",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with the transcripts that you are searching",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot containing the transcripts that you are searching",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the transcripts to search. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-recommendation-id",
          description:
            "The unique identifier of the bot recommendation associated with the transcripts to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-order",
          description:
            "How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "A list of filter objects",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of bot recommendations to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-index",
          description:
            "If the response from the SearchAssociatedTranscriptsRequest operation contains more results than specified in the maxResults parameter, an index is returned in the response. Use that index in the nextIndex parameter to return the next page of results",
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
      name: "start-bot-recommendation",
      description:
        "Use this to provide your transcript data, and to start the bot recommendation process",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot containing the bot recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot containing the bot recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--transcript-source-setting",
          description:
            "The object representing the Amazon S3 bucket containing the transcript, as well as the associated metadata",
          args: {
            name: "structure",
          },
        },
        {
          name: "--encryption-setting",
          description:
            "The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata",
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
      name: "start-bot-resource-generation",
      description:
        "Starts a request for the descriptive bot builder to generate a bot locale configuration based on the prompt you provide it. After you make this call, use the DescribeBotResourceGeneration operation to check on the status of the generation and for the generatedBotLocaleUrl when the generation is complete. Use that value to retrieve the Amazon S3 object containing the bot locale configuration. You can then modify and import this configuration",
      options: [
        {
          name: "--generation-input-prompt",
          description:
            "The prompt to generate intents and slot types for the bot locale. Your description should be both detailed and precise to help generate appropriate and sufficient intents for your bot. Include a list of actions to improve the intent creation process",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot for which to generate intents and slot types",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot for which to generate intents and slot types",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The locale of the bot for which to generate intents and slot types",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-import",
      description:
        "Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket",
      options: [
        {
          name: "--import-id",
          description:
            "The unique identifier for the import. It is included in the response from the CreateUploadUrl operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-specification",
          description:
            "Parameters for creating the bot, bot locale or custom vocabulary",
          args: {
            name: "structure",
          },
        },
        {
          name: "--merge-strategy",
          description:
            "The strategy to use when there is a name conflict between the imported resource and an existing resource. When the merge strategy is FailOnConflict existing resources are not overwritten and the import fails",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-password",
          description:
            "The password used to encrypt the zip archive that contains the resource definition. You should always encrypt the zip archive to protect it during transit between your site and Amazon Lex",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-test-execution",
      description: "The action to start test set execution",
      options: [
        {
          name: "--test-set-id",
          description: "The test set Id for the test set execution",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description: "The target bot for the test set execution",
          args: {
            name: "structure",
          },
        },
        {
          name: "--api-mode",
          description:
            "Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-execution-modality",
          description: "Indicates whether audio or text is used",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-test-set-generation",
      description: "The action to start the generation of test set",
      options: [
        {
          name: "--test-set-name",
          description: "The test set name for the test set generation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "The test set description for the test set generation request",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-location",
          description:
            "The Amazon S3 storage location for the test set generation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--generation-data-source",
          description: "The data source for the test set generation",
          args: {
            name: "structure",
          },
        },
        {
          name: "--role-arn",
          description:
            "The roleARN used for any operation in the test set to access resources in the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-set-tags",
          description:
            "A list of tags to add to the test set. You can only add tags when you import/generate a new test set. You can't use the UpdateTestSet operation to update tags. To update tags, use the TagResource operation",
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
      name: "stop-bot-recommendation",
      description: "Stop an already running Bot Recommendation request",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot containing the bot recommendation to be stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot containing the bot recommendation",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the bot recommendation to stop. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-recommendation-id",
          description:
            "The unique identifier of the bot recommendation to be stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value",
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
      description: "Removes tags from a bot, bot alias, or bot channel",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove the tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored",
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
      name: "update-bot",
      description: "Updates the configuration of an existing bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot to update. This identifier is returned by the CreateBot operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-name",
          description:
            "The new name of the bot. The name must be unique in the account that creates the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-privacy",
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bot-type",
          description: "The type of the bot to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-members",
          description:
            "The list of bot members in the network associated with the update action",
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
      name: "update-bot-alias",
      description: "Updates the configuration of an existing bot alias",
      options: [
        {
          name: "--bot-alias-id",
          description: "The unique identifier of the bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-name",
          description: "The new name to assign to the bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description to assign to the bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The new bot version to assign to the bot alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-locale-settings",
          description:
            "The new Lambda functions to use in each locale for the bot alias",
          args: {
            name: "map",
          },
        },
        {
          name: "--conversation-log-settings",
          description:
            "The new settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sentiment-analysis-settings",
          description:
            "Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot with the updated alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-bot-locale",
      description: "Updates the settings that a bot has for a specific locale",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the locale to be updated. The version can only be the DRAFT version",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the locale",
          args: {
            name: "string",
          },
        },
        {
          name: "--nlu-intent-confidence-threshold",
          description:
            "The new confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance",
          args: {
            name: "double",
          },
        },
        {
          name: "--voice-settings",
          description:
            "The new Amazon Polly voice Amazon Lex should use for voice interaction with the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--generative-ai-settings",
          description:
            "Contains settings for generative AI features powered by Amazon Bedrock for your bot locale. Use this object to turn generative AI features on and off. Pricing may differ if you turn a feature on. For more information, see LINK",
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
      name: "update-bot-recommendation",
      description: "Updates an existing bot recommendation request",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot containing the bot recommendation to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot containing the bot recommendation to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-recommendation-id",
          description:
            "The unique identifier of the bot recommendation to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--encryption-setting",
          description:
            "The object representing the passwords that will be used to encrypt the data related to the bot recommendation results, as well as the KMS key ARN used to encrypt the associated metadata",
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
      name: "update-export",
      description:
        "Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation",
      options: [
        {
          name: "--export-id",
          description:
            "The unique identifier Amazon Lex assigned to the export",
          args: {
            name: "string",
          },
        },
        {
          name: "--file-password",
          description:
            "The new password to use to encrypt the export zip archive",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-intent",
      description: "Updates the settings for an intent",
      options: [
        {
          name: "--intent-id",
          description: "The unique identifier of the intent to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-name",
          description: "The new name for the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-intent-signature",
          description:
            "The signature of the new built-in intent to use as the parent of this intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-utterances",
          description: "New utterances used to invoke the intent",
          args: {
            name: "list",
          },
        },
        {
          name: "--dialog-code-hook",
          description:
            "The new Lambda function to use between each turn of the conversation with the bot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fulfillment-code-hook",
          description:
            "The new Lambda function to call when all of the intents required slots are provided and the intent is ready for fulfillment",
          args: {
            name: "structure",
          },
        },
        {
          name: "--slot-priorities",
          description:
            "A new list of slots and their priorities that are contained by the intent",
          args: {
            name: "list",
          },
        },
        {
          name: "--intent-confirmation-setting",
          description:
            "New prompts that Amazon Lex sends to the user to confirm the completion of an intent",
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-closing-setting",
          description:
            "The new response that Amazon Lex sends the user when the intent is closed",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-contexts",
          description:
            "A new list of contexts that must be active in order for Amazon Lex to consider the intent",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-contexts",
          description:
            "A new list of contexts that Amazon Lex activates when the intent is fulfilled",
          args: {
            name: "list",
          },
        },
        {
          name: "--kendra-configuration",
          description:
            "New configuration settings for connecting to an Amazon Kendra index",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the intent",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the intent. Must be DRAFT",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--initial-response-setting",
          description:
            "Configuration settings for a response sent to the user before Amazon Lex starts eliciting slots",
          args: {
            name: "structure",
          },
        },
        {
          name: "--qn-a-intent-configuration",
          description:
            "Specifies the configuration of the built-in Amazon.QnAIntent. The AMAZON.QnAIntent intent is called when Amazon Lex can't determine another intent to invoke. If you specify this field, you can't specify the kendraConfiguration field",
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
      name: "update-resource-policy",
      description:
        "Replaces the existing resource policy for a bot or bot alias with a new one. If the policy doesn't exist, Amazon Lex returns an exception",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description:
            "A resource policy to add to the resource. The policy is a JSON structure that contains one or more statements that define the policy. The policy must follow the IAM syntax. For more information about the contents of a JSON policy document, see  IAM JSON policy reference .  If the policy isn't valid, Amazon Lex returns a validation exception",
          args: {
            name: "string",
          },
        },
        {
          name: "--expected-revision-id",
          description:
            "The identifier of the revision of the policy to update. If this revision ID doesn't match the current revision ID, Amazon Lex throws an exception. If you don't specify a revision, Amazon Lex overwrites the contents of the policy with the new values",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-slot",
      description: "Updates the settings for a slot",
      options: [
        {
          name: "--slot-id",
          description: "The unique identifier for the slot to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-name",
          description: "The new name for the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-id",
          description:
            "The unique identifier of the new slot type to associate with this slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--value-elicitation-setting",
          description:
            "A new set of prompts that Amazon Lex sends to the user to elicit a response the provides a value for the slot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--obfuscation-setting",
          description:
            "New settings that determine how slot values are formatted in Amazon CloudWatch logs",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the slot. Must always be DRAFT",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot",
          args: {
            name: "string",
          },
        },
        {
          name: "--multiple-values-setting",
          description:
            "Determines whether the slot accepts multiple values in one response. Multiple value slots are only available in the en-US locale. If you set this value to true in any other locale, Amazon Lex throws a ValidationException. If the multipleValuesSetting is not set, the default value is false",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sub-slot-setting",
          description:
            "Specifications for the constituent sub slots and the expression for the composite slot",
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
      name: "update-slot-type",
      description: "Updates the configuration of an existing slot type",
      options: [
        {
          name: "--slot-type-id",
          description: "The unique identifier of the slot type to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-name",
          description: "The new name of the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-values",
          description:
            "A new list of values and their optional synonyms that define the values that the slot type can take",
          args: {
            name: "list",
          },
        },
        {
          name: "--value-selection-setting",
          description:
            "The strategy that Amazon Lex should use when deciding on a value from the list of slot type values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-slot-type-signature",
          description:
            "The new built-in slot type that should be used as the parent of this slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the slot type",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the slot type. Must be DRAFT",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see Supported languages",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-source-setting",
          description:
            "Provides information about the external source of the slot type's definition",
          args: {
            name: "structure",
          },
        },
        {
          name: "--composite-slot-type-setting",
          description: "Specifications for a composite slot type",
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
      name: "update-test-set",
      description: "The action to update the test set",
      options: [
        {
          name: "--test-set-id",
          description:
            "The test set Id for which update test operation to be performed",
          args: {
            name: "string",
          },
        },
        {
          name: "--test-set-name",
          description: "The new test set name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new test set description",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Wait until a particular condition is satisfied. Each subcommand polls an API until the listed requirement is met",
      subcommands: [
        {
          name: "bot-alias-available",
          description:
            "Wait until a bot alias is available It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-alias-id",
              description: "The identifier of the bot alias to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--bot-id",
              description:
                "The identifier of the bot associated with the bot alias to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-available",
          description:
            "Wait until a bot is available It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-id",
              description: "The unique identifier of the bot to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-export-completed",
          description:
            "Wait until a bot has been exported It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--export-id",
              description: "The unique identifier of the export to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-import-completed",
          description:
            "Wait until a bot has been imported It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--import-id",
              description: "The unique identifier of the import to describe",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-locale-built",
          description:
            "Wait until a bot locale is built It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-id",
              description:
                "The identifier of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--bot-version",
              description: "The version of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--locale-id",
              description:
                "The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see Supported languages",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-locale-created",
          description:
            "Wait unit a bot locale is created It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-id",
              description:
                "The identifier of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--bot-version",
              description: "The version of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--locale-id",
              description:
                "The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see Supported languages",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-locale-express-testing-available",
          description:
            "Wait until a bot locale build is ready for express testing It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-id",
              description:
                "The identifier of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--bot-version",
              description: "The version of the bot associated with the locale",
              args: {
                name: "string",
              },
            },
            {
              name: "--locale-id",
              description:
                "The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see Supported languages",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
              description:
                "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
              args: {
                name: "string",
                suggestions: ["input", "output"],
              },
            },
          ],
        },
        {
          name: "bot-version-available",
          description:
            "Wait until a bot version is available It will poll every 10 seconds until a successful state has been reached. This will exit with a return code of 255 after 35 failed checks",
          options: [
            {
              name: "--bot-id",
              description:
                "The identifier of the bot containing the version to return metadata for",
              args: {
                name: "string",
              },
            },
            {
              name: "--bot-version",
              description: "The version of the bot to return metadata for",
              args: {
                name: "string",
              },
            },
            {
              name: "--cli-input-json",
              description:
                "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
              args: {
                name: "string",
              },
            },
            {
              name: "--generate-cli-skeleton",
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
    },
  ],
};
export default completionSpec;
