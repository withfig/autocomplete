const completionSpec: Fig.Spec = {
  name: "ivs-realtime",
  description:
    'Introduction  The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors.  Terminology:   A stage is a virtual space where participants can exchange video in real time.   A participant token is a token that authenticates a participant when they join a stage.   A participant object represents participants (people) in the stage and contains information about them. When a token is created, it includes a participant ID; when a participant uses that token to join a stage, the participant is associated with that participant ID. There is a 1:1 mapping between participant tokens and participants.   Server-side composition: The composition process composites participants of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels). Composition endpoints support this process.   Server-side composition: A composition controls the look of the outputs, including how participants are positioned in the video.    Resources  The following resources contain information about your IVS live stream (see Getting Started with Amazon IVS Real-Time Streaming):    Stage \u2014 A stage is a virtual space where participants can exchange video in real time.    Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Tagging AWS Resources for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see Access Tags). The Amazon IVS real-time API has these tag-related endpoints: TagResource, UntagResource, and ListTagsForResource. The following resource supports tagging: Stage. At most 50 tags can be applied to a resource.  Stages Endpoints     CreateParticipantToken \u2014 Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.    CreateStage \u2014 Creates a new stage (and optionally participant tokens).    DeleteStage \u2014 Shuts down and deletes the specified stage (disconnecting all participants).    DisconnectParticipant \u2014 Disconnects a specified participant and revokes the participant permanently from a specified stage.    GetParticipant \u2014 Gets information about the specified participant token.    GetStage \u2014 Gets information for the specified stage.    GetStageSession \u2014 Gets information for the specified stage session.    ListParticipantEvents \u2014 Lists events for a specified participant that occurred during a specified stage session.    ListParticipants \u2014 Lists all participants in a specified stage session.    ListStages \u2014 Gets summary information about all stages in your account, in the AWS region where the API request is processed.    ListStageSessions \u2014 Gets all sessions for a specified stage.    UpdateStage \u2014 Updates a stage\u2019s configuration.    Composition Endpoints     GetComposition \u2014 Gets information about the specified Composition resource.    ListCompositions \u2014 Gets summary information about all Compositions in your account, in the AWS region where the API request is processed.    StartComposition \u2014 Starts a Composition from a stage based on the configuration provided in the request.    StopComposition \u2014 Stops and deletes a Composition resource. Any broadcast from the Composition resource is stopped.    EncoderConfiguration Endpoints     CreateEncoderConfiguration \u2014 Creates an EncoderConfiguration object.    DeleteEncoderConfiguration \u2014 Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error.    GetEncoderConfiguration \u2014 Gets information about the specified EncoderConfiguration resource.    ListEncoderConfigurations \u2014 Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed.    StorageConfiguration Endpoints     CreateStorageConfiguration \u2014 Creates a new storage configuration, used to enable recording to Amazon S3.    DeleteStorageConfiguration \u2014 Deletes the storage configuration for the specified ARN.    GetStorageConfiguration \u2014 Gets the storage configuration for the specified ARN.    ListStorageConfigurations \u2014 Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed.    Tags Endpoints     ListTagsForResource \u2014 Gets information about AWS tags for the specified ARN.    TagResource \u2014 Adds or updates tags for the AWS resource with the specified ARN.    UntagResource \u2014 Removes tags from the resource with the specified ARN',
  subcommands: [
    {
      name: "create-encoder-configuration",
      description: "Creates an EncoderConfiguration object",
      options: [
        {
          name: "--name",
          description: "Optional name to identify the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there',
          args: {
            name: "map",
          },
        },
        {
          name: "--video",
          description:
            "Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps",
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
      name: "create-participant-token",
      description:
        "Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created. Encryption keys are owned by Amazon IVS and never used directly by your application",
      options: [
        {
          name: "--attributes",
          description:
            "Application-provided attributes to encode into the token and attach to a stage. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information",
          args: {
            name: "map",
          },
        },
        {
          name: "--capabilities",
          description:
            "Set of capabilities that the user is allowed to perform in the stage. Default: PUBLISH, SUBSCRIBE",
          args: {
            name: "list",
          },
        },
        {
          name: "--duration",
          description:
            "Duration (in minutes), after which the token expires. Default: 720 (12 hours)",
          args: {
            name: "integer",
          },
        },
        {
          name: "--stage-arn",
          description: "ARN of the stage to which this token is scoped",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "Name that can be specified to help identify the token. This can be any UTF-8 encoded text. This field is exposed to all stage participants and should not be used for personally identifying, confidential, or sensitive information",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-stage",
      description: "Creates a new stage (and optionally participant tokens)",
      options: [
        {
          name: "--name",
          description:
            "Optional name that can be specified for the stage being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-token-configurations",
          description:
            "Array of participant token configuration objects to attach to the new stage",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            'Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there',
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
      name: "create-storage-configuration",
      description:
        "Creates a new storage configuration, used to enable recording to Amazon S3. When a StorageConfiguration is created, IVS will modify the S3 bucketPolicy of the provided bucket. This will ensure that IVS has sufficient permissions to write content to the provided bucket",
      options: [
        {
          name: "--name",
          description:
            "Storage configuration name. The value does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3",
          description:
            "A complex type that contains a storage configuration for where recorded video will be stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            'Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there',
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
      name: "delete-encoder-configuration",
      description:
        "Deletes an EncoderConfiguration resource. Ensures that no Compositions are using this template; otherwise, returns an error",
      options: [
        {
          name: "--arn",
          description: "ARN of the EncoderConfiguration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stage",
      description:
        "Shuts down and deletes the specified stage (disconnecting all participants)",
      options: [
        {
          name: "--arn",
          description: "ARN of the stage to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-storage-configuration",
      description:
        "Deletes the storage configuration for the specified ARN. If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException). To avoid this, for all Compositions that reference the storage configuration, first use StopComposition and wait for it to complete, then use DeleteStorageConfiguration",
      options: [
        {
          name: "--arn",
          description: "ARN of the storage configuration to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "disconnect-participant",
      description:
        "Disconnects a specified participant and revokes the participant permanently from a specified stage",
      options: [
        {
          name: "--participant-id",
          description:
            "Identifier of the participant to be disconnected. This is assigned by IVS and returned by CreateParticipantToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--reason",
          description:
            "Description of why this participant is being disconnected",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description: "ARN of the stage to which the participant is attached",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-composition",
      description: "Get information about the specified Composition resource",
      options: [
        {
          name: "--arn",
          description: "ARN of the Composition resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-encoder-configuration",
      description:
        "Gets information about the specified EncoderConfiguration resource",
      options: [
        {
          name: "--arn",
          description: "ARN of the EncoderConfiguration resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-participant",
      description: "Gets information about the specified participant token",
      options: [
        {
          name: "--participant-id",
          description:
            "Unique identifier for the participant. This is assigned by IVS and returned by CreateParticipantToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "ID of a session within the stage",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description: "Stage ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stage",
      description: "Gets information for the specified stage",
      options: [
        {
          name: "--arn",
          description:
            "ARN of the stage for which the information is to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stage-session",
      description: "Gets information for the specified stage session",
      options: [
        {
          name: "--session-id",
          description: "ID of a session within the stage",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description:
            "ARN of the stage for which the information is to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-storage-configuration",
      description: "Gets the storage configuration for the specified ARN",
      options: [
        {
          name: "--arn",
          description: "ARN of the storage configuration to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-compositions",
      description:
        "Gets summary information about all Compositions in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--filter-by-encoder-configuration-arn",
          description:
            "Filters the Composition list to match the specified EncoderConfiguration attached to at least one of its output",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-by-stage-arn",
          description:
            "Filters the Composition list to match the specified Stage ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first Composition to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-encoder-configurations",
      description:
        "Gets summary information about all EncoderConfigurations in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first encoder configuration to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-participant-events",
      description:
        "Lists events for a specified participant that occurred during a specified stage session",
      options: [
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first participant event to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-id",
          description:
            "Unique identifier for this participant. This is assigned by IVS and returned by CreateParticipantToken",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "ID of a session within the stage",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description: "Stage ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-participants",
      description: "Lists all participants in a specified stage session",
      options: [
        {
          name: "--filter-by-published",
          description:
            "Filters the response list to only show participants who published during the stage session. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request",
        },
        {
          name: "--no-filter-by-published",
          description:
            "Filters the response list to only show participants who published during the stage session. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request",
        },
        {
          name: "--filter-by-state",
          description:
            "Filters the response list to only show participants in the specified state. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-by-user-id",
          description:
            "Filters the response list to match the specified user ID. Only one of filterByUserId, filterByPublished, or filterByState can be provided per request. A userId is a customer-assigned name to help identify the token; this can be used to link a participant to a user in the customer\u2019s own systems",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first participant to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-id",
          description: "ID of the session within the stage",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description: "Stage ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-stage-sessions",
      description: "Gets all sessions for a specified stage",
      options: [
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first stage session to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--stage-arn",
          description: "Stage ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-stages",
      description:
        "Gets summary information about all stages in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--max-results",
          description: "Maximum number of results to return. Default: 50",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first stage to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-storage-configurations",
      description:
        "Gets summary information about all storage configurations in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--max-results",
          description:
            "Maximum number of storage configurations to return. Default: your service quota or 100, whichever is smaller",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The first storage configuration to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-composition",
      description:
        "Starts a Composition from a stage based on the configuration provided in the request. A Composition is an ephemeral resource that exists after this endpoint returns successfully. Composition stops and the resource is deleted:   When StopComposition is called.   After a 1-minute timeout, when all participants are disconnected from the stage.   After a 1-minute timeout, if there are no participants in the stage when StartComposition is called.   When broadcasting to the IVS channel fails and all retries are exhausted.   When broadcasting is disconnected and all attempts to reconnect are exhausted",
      options: [
        {
          name: "--destinations",
          description: "Array of destination configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description: "Idempotency token",
          args: {
            name: "string",
          },
        },
        {
          name: "--layout",
          description: "Layout object to configure composition parameters",
          args: {
            name: "structure",
          },
        },
        {
          name: "--stage-arn",
          description: "ARN of the stage to be used for compositing",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Tags attached to the resource. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints on tags beyond what is documented there',
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
      name: "stop-composition",
      description:
        "Stops and deletes a Composition resource. Any broadcast from the Composition resource is stopped",
      options: [
        {
          name: "--arn",
          description: "ARN of the Composition",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            'Array of tags to be added or updated. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there',
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
            'Array of tags to be removed. Array of maps, each of the form string:string (key:value). See Tagging AWS Resources for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no constraints beyond what is documented there',
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
      name: "update-stage",
      description: "Updates a stage\u2019s configuration",
      options: [
        {
          name: "--arn",
          description: "ARN of the stage to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Name of the stage to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
