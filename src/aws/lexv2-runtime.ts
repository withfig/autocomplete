const completionSpec: Fig.Spec = {
  name: "lexv2-runtime",
  description: "",
  subcommands: [
    {
      name: "delete-session",
      description:
        "Removes session information for a specified bot, alias, and user ID.  You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again. You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours. If you specify a bot or alias ID that doesn't exist, you receive a BadRequestException.  If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a BadRequestException",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot that contains the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The alias identifier in use for the bot that contains the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description: "The locale where the session is in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The identifier of the session to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        "Returns session information for a specified bot, alias, and user. For example, you can use this operation to retrieve session information for a user that has left a long-running session in use. If the bot, alias, or session identifier doesn't exist, Amazon Lex returns a BadRequestException. If the locale doesn't exist or is not enabled for the alias, you receive a BadRequestException",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot that contains the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The alias identifier in use for the bot that contains the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description: "The locale where the session is in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The identifier of the session to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-session",
      description:
        "Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot that receives the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The alias identifier of the bot that receives the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description: "The locale where the session is in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The identifier of the session that receives the session data",
          args: {
            name: "string",
          },
        },
        {
          name: "--messages",
          description:
            "A list of messages to send to the user. Messages are sent in the order that they are defined in the list",
          args: {
            name: "list",
          },
        },
        {
          name: "--session-state",
          description:
            "Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex should use in the conversation with the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-attributes",
          description:
            "Request-specific information passed between Amazon Lex and the client application. The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:",
          args: {
            name: "map",
          },
        },
        {
          name: "--response-content-type",
          description:
            "The message that Amazon Lex returns in the response can be either text or speech depending on the value of this parameter.    If the value is text/plain; charset=utf-8, Amazon Lex returns text in the response",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "recognize-text",
      description:
        "Sends user input to Amazon Lex. Client applications use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model that it build for the bot. In response, Amazon Lex returns the next message to convey to the user and an optional response card to display",
      options: [
        {
          name: "--bot-id",
          description: "The identifier of the bot that processes the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The alias identifier in use for the bot that processes the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description: "The locale where the session is in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description:
            "The identifier of the user session that is having the conversation",
          args: {
            name: "string",
          },
        },
        {
          name: "--text",
          description:
            "The text that the user entered. Amazon Lex interprets this text",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-state",
          description:
            "The current state of the dialog between the user and the bot",
          args: {
            name: "structure",
          },
        },
        {
          name: "--request-attributes",
          description:
            "Request-specific information passed between the client application and Amazon Lex  The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:",
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
      name: "recognize-utterance",
      description:
        "Sends user input to Amazon Lex. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model built for the bot",
      options: [
        {
          name: "--bot-id",
          description:
            "The identifier of the bot that should receive the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-alias-id",
          description:
            "The alias identifier in use for the bot that should receive the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale-id",
          description: "The locale where the session is in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "The identifier of the session in use",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-state",
          description:
            "Sets the state of the session with the user. You can use this to set the current intent, attributes, context, and dialog action. Use the dialog action to determine the next step that Amazon Lex should use in the conversation with the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-attributes",
          description:
            "Request-specific information passed between the client application and Amazon Lex  The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes for prefix x-amz-lex:",
          args: {
            name: "string",
          },
        },
        {
          name: "--request-content-type",
          description:
            "Indicates the format for audio input or that the content is text. The header must start with one of the following prefixes:   PCM format, audio data must be in little-endian byte order.   audio/l16; rate=16000; channels=1   audio/x-l16; sample-rate=16000; channel-count=1   audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false     Opus format   audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4     Text format   text/plain; charset=utf-8",
          args: {
            name: "string",
          },
        },
        {
          name: "--response-content-type",
          description:
            "The message that Amazon Lex returns in the response can be either text or speech based on the responseContentType value.   If the value is text/plain;charset=utf-8, Amazon Lex returns text in the response.   If the value begins with audio/, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech using the configuration that you specified in the requestContentType parameter. For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the MPEG format.   If the value is audio/pcm, the speech returned is audio/pcm at 16 KHz in 16-bit, little-endian format.   The following are the accepted values:   audio/mpeg   audio/ogg   audio/pcm (16 KHz)   audio/* (defaults to mpeg)   text/plain; charset=utf-8",
          args: {
            name: "string",
          },
        },
        {
          name: "--input-stream",
          description:
            "User input in PCM or Opus audio format or text format as described in the requestContentType parameter",
          args: {
            name: "blob",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};

export default completionSpec;
