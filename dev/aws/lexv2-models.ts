export const completionSpec: Fig.Spec = {
  name: "lexv2-models",
  description: "",
  subcommands: [
    {
      name: "build-bot-locale",
      description:
        "Builds a bot, its intents, and its slot types into a specific locale. A bot can be built into multiple locales. At runtime the locale is used to choose a specific build of the bot.",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot to build. The identifier is returned in the response from the operation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot to build. This can only be the draft version of the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-bot",
      description: "Creates an Amazon Lex conversational bot.",
      options: [
        {
          name: "--bot-name",
          description:
            "The name of the bot. The bot name must be unique in the account that creates the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the bot. It appears in lists to help you identify a particular bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-privacy",
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.  A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--bot-tags",
          description:
            "A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the UpdateBot operation to update tags. To update tags, use the TagResource operation.",
          args: {
            name: "map",
          },
        },
        {
          name: "--test-bot-alias-tags",
          description:
            "A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the UpdateAlias operation to update tags. To update tags on the test alias, use the TagResource operation.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        'Creates an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot. For example, you can create an alias called "PROD" that your applications use to call the Amazon Lex bot.',
      options: [
        {
          name: "--bot-alias-name",
          description:
            "The alias to create. The name must be unique for the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the alias. Use this description to help identify the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that this alias points to. You can use the operation to change the bot version associated with the alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-locale-settings",
          description:
            "Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.",
          args: {
            name: "map",
          },
        },
        {
          name: "--conversation-log-settings",
          description:
            "Specifies whether Amazon Lex logs text and audio for a conversation with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio logs store audio input in Amazon S3.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sentiment-analysis-settings",
          description:
            "Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that the alias applies to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the UpdateBotAlias operation to update the tags on a bot alias. To update tags, use the TagResource operation.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a locale in the bot. The locale contains the intents and slot types that the bot uses in conversations with users in the specified language and locale. You must add a locale to a bot before you can add intents and slot types to the bot.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to create the locale for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot to create the locale for. This can only be the draft version of the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the bot locale. Use this to help identify the bot locale in lists.",
          args: {
            name: "string",
          },
        },
        {
          name: "--nlu-intent-confidence-threshold",
          description:
            "Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For example, suppose a bot is configured with the confidence threshold of 0.80 and the AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the PostText operation would be:   AMAZON.FallbackIntent   IntentA   IntentB   IntentC",
          args: {
            name: "double",
          },
        },
        {
          name: "--voice-settings",
          description:
            "The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a new version of the bot based on the DRAFT version. If the DRAFT version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version. When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to create the version for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the version. Use the description to help identify the version in lists.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version-locale-specification",
          description:
            "Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            "The name of the intent. Intent names must be unique in the locale that contains the intent and cannot match the name of any built-in intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the intent. Use the description to help identify the intent in lists.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-intent-signature",
          description:
            "A unique identifier for the built-in intent to base this intent on.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-utterances",
          description:
            'An array of strings that a user might say to signal the intent. For example, "I want a pizza", or "I want a {PizzaSize} pizza".  In an utterance, slot names are enclosed in curly braces ("{", "}") to indicate where they should be displayed in the utterance shown to the user..',
          args: {
            name: "list",
          },
        },
        {
          name: "--dialog-code-hook",
          description:
            "Specifies that Amazon Lex invokes the alias Lambda function for each user input. You can invoke this Lambda function to personalize user interaction. For example, suppose that your bot determines that the user's name is John. You Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, glutenIntolerant to true. You might find John's phone number and set the corresponding session attribute.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fulfillment-code-hook",
          description:
            "Specifies that Amazon Lex invokes the alias Lambda function when the intent is ready for fulfillment. You can invoke this function to complete the bot's transaction with the user. For example, in a pizza ordering bot, the Lambda function can look up the closest pizza restaurant to the customer's location and then place an order on the customer's behalf.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-confirmation-setting",
          description:
            'Provides prompts that Amazon Lex sends to the user to confirm the completion of an intent. If the user answers "no," the settings contain a statement that is sent to the user to end the intent.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-closing-setting",
          description:
            "Sets the response that Amazon Lex sends to the user when the intent is closed.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-contexts",
          description:
            "A list of contexts that must be active for this intent to be considered by Amazon Lex. When an intent has an input context list, Amazon Lex only considers using the intent in an interaction with the user when the specified contexts are included in the active context list for the session. If the contexts are not active, then Amazon Lex will not use the intent. A context can be automatically activated using the outputContexts property or it can be set at runtime.  For example, if there are two intents with different input contexts that respond to the same utterances, only the intent with the active context will respond. An intent may have up to 5 input contexts. If an intent has multiple input contexts, all of the contexts must be active to consider the intent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-contexts",
          description:
            "A lists of contexts that the intent activates when it is fulfilled. You can use an output context to indicate the intents that Amazon Lex should consider for the next turn of the conversation with a customer.  When you use the outputContextsList property, all of the contexts specified in the list are activated when the intent is fulfilled. You can set up to 10 output contexts. You can also set the number of conversation turns that the context should be active, or the length of time that the context should be active.",
          args: {
            name: "list",
          },
        },
        {
          name: "--kendra-configuration",
          description:
            "Configuration information required to use the AMAZON.KendraSearchIntent intent to connect to an Amazon Kendra index. The AMAZON.KendraSearchIntent intent is called when Amazon Lex can't determine another intent to invoke.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with this intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the version of the bot associated with this intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this intent is used. All of the bots, slot types, and slots used by the intent must have the same locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a slot in an intent. A slot is a variable needed to fulfill an intent. For example, an OrderPizza intent might need slots for size, crust, and number of pizzas. For each slot, you define one or more utterances that Amazon Lex uses to elicit a response from the user.",
      options: [
        {
          name: "--slot-name",
          description:
            "The name of the slot. Slot names must be unique within the bot that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the slot. Use this to help identify the slot in lists.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-id",
          description:
            "The unique identifier for the slot type associated with this slot. The slot type determines the values that can be entered into the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--value-elicitation-setting",
          description:
            "Specifies prompts that Amazon Lex sends to the user to elicit a response that provides the value for the slot.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--obfuscation-setting",
          description:
            "Determines how slot values are used in Amazon CloudWatch logs. If the value of the obfuscationSetting parameter is DefaultObfuscation, slot values are obfuscated in the log output. If the value is None, the actual value is present in the log output. The default is to obfuscate values in the CloudWatch logs.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot will be used in. The string must match one of the supported locales. All of the bots, intents, slot types used by the slot must have the same locale. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a custom slot type  To create a custom slot type, specify a name for the slot type and a set of enumeration values, the values that a slot of this type can assume.",
      options: [
        {
          name: "--slot-type-name",
          description:
            "The name for the slot. A slot type name must be unique within the account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description:
            "A description of the slot type. Use the description to help identify the slot type in lists.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-values",
          description:
            "A list of SlotTypeValue objects that defines the values that the slot type can take. Each value can have a list of synonyms, additional values that help train the machine learning model about the values that it resolves for a slot.",
          args: {
            name: "list",
          },
        },
        {
          name: "--value-selection-setting",
          description:
            "Determines the strategy that Amazon Lex uses to select a value from the list of possible values. The field can be set to one of the following values:    OriginalValue - Returns the value entered by the user, if the user value is similar to the slot value.    TopResolution - If there is a resolution list for the slot, return the first value in the resolution list. If there is no resolution list, return null.   If you don't specify the valueSelectionSetting parameter, the default is OriginalValue.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-slot-type-signature",
          description:
            "The built-in slot type used as a parent of this slot type. When you define a parent slot type, the new slot type has the configuration of the parent slot type. Only AMAZON.AlphaNumeric is supported.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with this slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the bot version associated with this slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot type will be used in. The string must match one of the supported locales. All of the bots, intents, and slots used by the slot type must have the same locale. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes all versions of a bot, including the Draft version. To delete a specific version, use the DeleteBotVersion operation. When you delete a bot, all of the resources contained in the bot are also deleted. Deleting a bot removes all locales, intents, slot, and slot types defined for the bot. If a bot has an alias, the DeleteBot operation returns a ResourceInUseException exception. If you want to delete the bot and the alias, set the skipResourceInUseCheck parameter to true.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "When true, Amazon Lex doesn't check to see if another resource, such as an alias, is using the bot before it is deleted.",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "When true, Amazon Lex doesn't check to see if another resource, such as an alias, is using the bot before it is deleted.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-bot-alias",
      description: "Deletes the specified bot alias.",
      options: [
        {
          name: "--bot-alias-id",
          description: "The unique identifier of the bot alias to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot associated with the alias to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "When this parameter is true, Amazon Lex doesn't check to see if any other resource is using the alias before it is deleted.",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "When this parameter is true, Amazon Lex doesn't check to see if any other resource is using the alias before it is deleted.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Removes a locale from a bot. When you delete a locale, all intents, slots, and slot types defined for the locale are also deleted.",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that will be deleted. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes a specific version of a bot. To delete all version of a bot, use the DeleteBot operation.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the version.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, the DeleteBotVersion operations throws a ResourceInUseException exception if you try to delete a bot version that has an alias pointing at it. Set the skipResourceInUseCheck parameter to true to skip this check and remove the version even if an alias points to it.",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, the DeleteBotVersion operations throws a ResourceInUseException exception if you try to delete a bot version that has an alias pointing at it. Set the skipResourceInUseCheck parameter to true to skip this check and remove the version even if an alias points to it.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Removes the specified intent. Deleting an intent also deletes the slots associated with the intent.",
      options: [
        {
          name: "--intent-id",
          description: "The unique identifier of the intent to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-slot",
      description: "Deletes the specified slot from an intent.",
      options: [
        {
          name: "--slot-id",
          description: "The identifier of the slot to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot associated with the slot to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent associated with the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes a slot type from a bot locale. If a slot is using the slot type, Amazon Lex throws a ResourceInUseException exception. To avoid the exception, set the skipResourceInUseCheck parameter to true.",
      options: [
        {
          name: "--slot-type-id",
          description: "The identifier of the slot type to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that the slot type will be deleted from. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--skip-resource-in-use-check",
          description:
            "By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type even if a slot uses it.",
        },
        {
          name: "--no-skip-resource-in-use-check",
          description:
            "By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip this check and remove the slot type even if a slot uses it.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot",
      description: "Provides metadata information about a bot.",
      options: [
        {
          name: "--bot-id",
          description: "The unique identifier of the bot to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-alias",
      description: "Get information about a specific bot alias.",
      options: [
        {
          name: "--bot-alias-id",
          description: "The identifier of the bot alias to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the bot alias to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Describes the settings that a bot has for a specific locale.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The identifier of the version of the bot associated with the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The unique identifier of the locale to describe. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-bot-version",
      description: "Provides metadata about a version of a bot.",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot containing the version to return metadata for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to return metadata for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-intent",
      description: "Returns metadata about an intent.",
      options: [
        {
          name: "--intent-id",
          description: "The identifier of the intent to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intent to describe. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-slot",
      description: "Gets metadata information about a slot.",
      options: [
        {
          name: "--slot-id",
          description: "The unique identifier for the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot associated with the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-slot-type",
      description: "Gets metadata information about a slot type.",
      options: [
        {
          name: "--slot-type-id",
          description: "The identifier of the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description:
            "The identifier of the bot associated with the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot associated with the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot type to describe. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-aliases",
      description: "Gets a list of aliases for the specified bot.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list aliases for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBotAliases operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bot-locales",
      description: "Gets a list of locales for the specified bot.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list locales for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot to list locales for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of locales. You can sort by locale name in ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBotLocales operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token as the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Gets information about all of the versions of a bot. The ListBotVersions operation returns a summary of each version of a bot. For example, if a bot has three numbered versions, the ListBotVersions operation returns for summaries, one for each numbered version and one for the DRAFT version. The ListBotVersions operation always returns at least one version, the DRAFT version.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot to list versions for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of versions. You can specify that the list be sorted by version name in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response to the ListBotVersion operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-bots",
      description: "Gets a list of available bots.",
      options: [
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of bots. You can specify that the list be sorted by bot name in ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBots operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Gets a list of built-in intents provided by Amazon Lex that you can use in your bot.  To use a built-in intent as a the base for your own intent, include the built-in intent signature in the parentIntentSignature parameter when you call the CreateIntent operation. For more information, see CreateIntent.",
      options: [
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Specifies sorting parameters for the list of built-in intents. You can specify that the list be sorted by the built-in intent signature in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of built-in intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBuiltInIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Gets a list of built-in slot types that meet the specified criteria.",
      options: [
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListBuiltInSlotTypes operation. You can choose to sort by the slot type signature in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListBuiltInSlotTypes operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-intents",
      description: "Get a list of intents that meet the specified criteria.",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListIntents operation. You can choose to sort by the intent name or last updated date in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListIntents operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Gets a list of slot types that match the specified criteria.",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the slot types.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListSlotTypes operation. You can choose to sort by the slot type name or last updated date in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSlotTypes operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-slots",
      description: "Gets a list of slots that match the specified criteria.",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The version of the bot that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description:
            "The unique identifier of the intent that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-by",
          description:
            "Determines the sort order for the response from the ListSlots operation. You can choose to sort by the slot name or last updated date in either ascending or descending order.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--filters",
          description:
            "Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If the response from the ListSlots operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Gets a list of tags associated with a resource. Only bots, bot aliases, and bot channels can have tags associated with them.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to get a list of tags for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes tags from a bot, bot alias, or bot channel.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource to remove the tags from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-bot",
      description: "Updates the configuration of an existing bot.",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot to update. This identifier is returned by the CreateBot operation.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-name",
          description:
            "The new name of the bot. The name must be unique in the account that creates the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-privacy",
          description:
            "Provides information on additional privacy protections Amazon Lex should use with the bot's data.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idle-session-ttl-in-seconds",
          description:
            "The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-bot-alias",
      description: "Updates the configuration of an existing bot alias.",
      options: [
        {
          name: "--bot-alias-id",
          description: "The unique identifier of the bot alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-name",
          description: "The new name to assign to the bot alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description to assign to the bot alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description: "The new bot version to assign to the bot alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-locale-settings",
          description:
            "The new Lambda functions to use in each locale for the bot alias.",
          args: {
            name: "map",
          },
        },
        {
          name: "--conversation-log-settings",
          description:
            "The new settings for storing conversation logs in Amazon CloudWatch Logs and Amazon S3 buckets.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sentiment-analysis-settings",
          description:
            "Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot with the updated alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-bot-locale",
      description: "Updates the settings that a bot has for a specific locale.",
      options: [
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the locale to be updated. The version can only be the DRAFT version.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the locale.",
          args: {
            name: "string",
          },
        },
        {
          name: "--nlu-intent-confidence-threshold",
          description:
            "The new confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.",
          args: {
            name: "double",
          },
        },
        {
          name: "--voice-settings",
          description:
            "The new Amazon Polly voice Amazon Lex should use for voice interaction with the user.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-intent",
      description: "Updates the settings for an intent.",
      options: [
        {
          name: "--intent-id",
          description: "The unique identifier of the intent to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-name",
          description: "The new name for the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-intent-signature",
          description:
            "The signature of the new built-in intent to use as the parent of this intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--sample-utterances",
          description: "New utterances used to invoke the intent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--dialog-code-hook",
          description:
            "The new Lambda function to use between each turn of the conversation with the bot.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--fulfillment-code-hook",
          description:
            "The new Lambda function to call when all of the intents required slots are provided and the intent is ready for fulfillment.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--slot-priorities",
          description:
            "A new list of slots and their priorities that are contained by the intent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--intent-confirmation-setting",
          description:
            "New prompts that Amazon Lex sends to the user to confirm the completion of an intent.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--intent-closing-setting",
          description:
            "The new response that Amazon Lex sends the user when the intent is closed.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--input-contexts",
          description:
            "A new list of contexts that must be active in order for Amazon Lex to consider the intent.",
          args: {
            name: "list",
          },
        },
        {
          name: "--output-contexts",
          description:
            "A new list of contexts that Amazon Lex activates when the intent is fulfilled.",
          args: {
            name: "list",
          },
        },
        {
          name: "--kendra-configuration",
          description:
            "New configuration settings for connecting to an Amazon Kendra index.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the intent.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the intent. Must be DRAFT.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale where this intent is used. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-slot",
      description: "Updates the settings for a slot.",
      options: [
        {
          name: "--slot-id",
          description: "The unique identifier for the slot to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-name",
          description: "The new name for the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description for the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-id",
          description:
            "The unique identifier of the new slot type to associate with this slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--value-elicitation-setting",
          description:
            "A new set of prompts that Amazon Lex sends to the user to elicit a response the provides a value for the slot.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--obfuscation-setting",
          description:
            "New settings that determine how slot values are formatted in Amazon CloudWatch logs.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--bot-id",
          description:
            "The unique identifier of the bot that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the slot. Must always be DRAFT.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that contains the slot. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--intent-id",
          description: "The identifier of the intent that contains the slot.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-slot-type",
      description: "Updates the configuration of an existing slot type.",
      options: [
        {
          name: "--slot-type-id",
          description: "The unique identifier of the slot type to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-name",
          description: "The new name of the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The new description of the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--slot-type-values",
          description:
            "A new list of values and their optional synonyms that define the values that the slot type can take.",
          args: {
            name: "list",
          },
        },
        {
          name: "--value-selection-setting",
          description:
            "The strategy that Amazon Lex should use when deciding on a value from the list of slot type values.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parent-slot-type-signature",
          description:
            "The new built-in slot type that should be used as the parent of this slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The identifier of the bot that contains the slot type.",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-version",
          description:
            "The version of the bot that contains the slot type. Must be DRAFT.",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description:
            "The identifier of the language and locale that contains the slot type. The string must match one of the supported locales. For more information, see https://docs.aws.amazon.com/lex/latest/dg/supported-locales.html.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
