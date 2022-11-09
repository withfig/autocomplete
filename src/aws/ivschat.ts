const completionSpec: Fig.Spec = {
  name: "ivschat",
  description:
    'Introduction  The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat resources. You also need to integrate with the  Amazon IVS Chat Messaging API, to enable users to interact with chat rooms in real time. The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat HTTPS service endpoints, see the Amazon IVS Chat information on the Amazon IVS page in the AWS General Reference.   Notes on terminology:    You create service applications using the Amazon IVS Chat API. We refer to these as applications.   You create front-end client applications (browser and Android/iOS apps) using the Amazon IVS Chat Messaging API. We refer to these as clients.     Resources  The following resource is part of Amazon IVS Chat:    Room \u2014 The central Amazon IVS Chat resource through which clients connect to and exchange chat messages. See the Room endpoints for more information.    Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Tagging AWS Resources for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific constraints beyond what is documented there. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see Access Tags). The Amazon IVS Chat API has these tag-related endpoints: TagResource, UntagResource, and ListTagsForResource. The following resource supports tagging: Room. At most 50 tags can be applied to a resource.  API Access Security  Your Amazon IVS Chat applications (service applications and clients) must be authenticated and authorized to access Amazon IVS Chat resources. Note the differences between these concepts:    Authentication is about verifying identity. Requests to the Amazon IVS Chat API must be signed to verify your identity.    Authorization is about granting permissions. Your IAM roles need to have permissions for Amazon IVS Chat API requests.   Users (viewers) connect to a room using secure access tokens that you create using the CreateChatToken endpoint through the AWS SDK. You call CreateChatToken for every user\u2019s chat session, passing identity and authorization information about the user.  Signing API Requests  HTTP API requests must be signed with an AWS SigV4 signature using your AWS security credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API directly, it\u2019s your responsibility to sign the requests. You generate a signature using valid AWS credentials for an IAM role that has permission to perform the requested action. For example, DeleteMessage requests must be made using an IAM role that has the ivschat:DeleteMessage permission. For more information:   Authentication and generating signatures \u2014 See Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon Web Services General Reference.   Managing Amazon IVS permissions \u2014 See Identity and Access Management on the Security page of the Amazon IVS User Guide.    Amazon Resource Names (ARNs)  ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see Amazon Resource Names in the AWS General Reference.  Messaging Endpoints     DeleteMessage \u2014 Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client\u2019s chat history. This event\u2019s EventName is aws:DELETE_MESSAGE. This replicates the  DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API.    DisconnectUser \u2014 Disconnects all connections using a specified user ID from a room. This replicates the  DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API.    SendEvent \u2014 Sends an event to a room. Use this within your application\u2019s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered.    Chat Token Endpoint     CreateChatToken \u2014 Creates an encrypted token that is used to establish an individual WebSocket connection to a room. The token is valid for one minute, and a connection (session) established with the token is valid for the specified duration.    Room Endpoints     CreateRoom \u2014 Creates a room that allows clients to connect and pass messages.    DeleteRoom \u2014 Deletes the specified room.    GetRoom \u2014 Gets the specified room.    ListRooms \u2014 Gets summary information about all your rooms in the AWS region where the API request is processed.     UpdateRoom \u2014 Updates a room\u2019s configuration.    Tags Endpoints     ListTagsForResource \u2014 Gets information about AWS tags for the specified ARN.    TagResource \u2014 Adds or updates tags for the AWS resource with the specified ARN.    UntagResource \u2014 Removes tags from the resource with the specified ARN.   All the above are HTTP operations. There is a separate messaging API for managing Chat resources; see the  Amazon IVS Chat Messaging API Reference',
  subcommands: [
    {
      name: "create-chat-token",
      description:
        "Creates an encrypted token that is used to establish an individual WebSocket connection to a room. The token is valid for one minute, and a connection (session) established with the token is valid for the specified duration. Encryption keys are owned by Amazon IVS Chat and never used directly by your application",
      options: [
        {
          name: "--attributes",
          description:
            "Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total",
          args: {
            name: "map",
          },
        },
        {
          name: "--capabilities",
          description:
            "Set of capabilities that the user is allowed to perform in the room. Default: None (the capability to view messages is implicitly included in all requests)",
          args: {
            name: "list",
          },
        },
        {
          name: "--room-identifier",
          description:
            "Identifier of the room that the client is trying to access. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-duration-in-minutes",
          description:
            "Session duration (in minutes), after which the session expires. Default: 60 (1 hour)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--user-id",
          description:
            "Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "create-room",
      description:
        "Creates a room that allows clients to connect and pass messages",
      options: [
        {
          name: "--maximum-message-length",
          description:
            "Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-message-rate-per-second",
          description:
            "Maximum number of messages per second that can be sent to the room (by all clients). Default: 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--message-review-handler",
          description:
            "Configuration information for optional review of messages",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "Room name. The value does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags to attach to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there',
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-message",
      description:
        "Sends an event to a specific room which directs clients to delete a specific message; that is, unrender it from view and delete it from the client\u2019s chat history. This event\u2019s EventName is aws:DELETE_MESSAGE. This replicates the  DeleteMessage WebSocket operation in the Amazon IVS Chat Messaging API",
      options: [
        {
          name: "--id",
          description:
            "ID of the message to be deleted. This is the Id field in the received message (see  Message (Subscribe) in the Chat Messaging API)",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description: "Reason for deleting the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-identifier",
          description:
            "Identifier of the room where the message should be deleted. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "delete-room",
      description: "Deletes the specified room",
      options: [
        {
          name: "--identifier",
          description:
            "Identifier of the room to be deleted. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "disconnect-user",
      description:
        "Disconnects all connections using a specified user ID from a room. This replicates the  DisconnectUser WebSocket operation in the Amazon IVS Chat Messaging API",
      options: [
        {
          name: "--reason",
          description: "Reason for disconnecting the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-identifier",
          description:
            "Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "ID of the user (connection) to disconnect from the room",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "get-room",
      description: "Gets the specified room",
      options: [
        {
          name: "--identifier",
          description:
            "Identifier of the room for which the configuration is to be retrieved. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-rooms",
      description:
        "Gets summary information about all your rooms in the AWS region where the API request is processed. Results are sorted in descending order of updateTime",
      options: [
        {
          name: "--max-results",
          description: "Maximum number of rooms to return. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--message-review-handler-uri",
          description:
            "Filters the list to match the specified message review handler URI",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Filters the list to match the specified room name",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The first room to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "Gets information about AWS tags for the specified ARN",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be retrieved. The ARN must be URL-encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "send-event",
      description:
        "Sends an event to a room. Use this within your application\u2019s business logic to send events to clients of a room; e.g., to notify clients to change the way the chat UI is rendered",
      options: [
        {
          name: "--attributes",
          description:
            "Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total",
          args: {
            name: "map",
          },
        },
        {
          name: "--event-name",
          description:
            "Application-defined name of the event to send to clients",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-identifier",
          description:
            "Identifier of the room to which the event will be sent. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "tag-resource",
      description:
        "Adds or updates tags for the AWS resource with the specified ARN",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be tagged. The ARN must be URL-encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Array of tags to be added or updated. See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there',
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes tags from the resource with the specified ARN",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource to be untagged. The ARN must be URL-encoded",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            'Array of tags to be removed. See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there',
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
    {
      name: "update-room",
      description: "Updates a room\u2019s configuration",
      options: [
        {
          name: "--identifier",
          description:
            "Identifier of the room to be updated. Currently this must be an ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--maximum-message-length",
          description:
            "The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--maximum-message-rate-per-second",
          description:
            "Maximum number of messages per second that can be sent to the room (by all clients). Default: 10",
          args: {
            name: "integer",
          },
        },
        {
          name: "--message-review-handler",
          description:
            "Configuration information for optional review of messages. Specify an empty uri string to disassociate a message review handler from the specified room",
          args: {
            name: "structure",
          },
        },
        {
          name: "--name",
          description: "Room name. The value does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Reads arguments from the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, those values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally. This may not be specified along with ``--cli-input-yaml``",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-yaml",
          description:
            "Reads arguments from the YAML string provided. The YAML string follows the format provided by ``--generate-cli-skeleton yaml-input``. If other arguments are provided on the command line, those values will override the YAML-provided values. This may not be specified along with ``--cli-input-json``",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. Similarly, if provided ``yaml-input`` it will print a sample input YAML that can be used with ``--cli-input-yaml``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command. The generated JSON skeleton is not stable between versions of the AWS CLI and there are no backwards compatibility guarantees in the JSON skeleton generated",
          args: {
            name: "string",
            suggestions: ["input", "output", "yaml-input"],
          },
        },
      ],
    },
  ],
};
export default completionSpec;
