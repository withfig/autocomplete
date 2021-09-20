const completionSpec: Fig.Spec = {
  name: "ivs",
  description:
    'Introduction  The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. The API is an AWS regional service, currently in these regions: us-west-2, us-east-1, and eu-west-1.   All API request parameters and URLs are case sensitive.    For a summary of notable documentation changes in each release, see  Document History.  Service Endpoints  The following are the Amazon IVS service endpoints (all HTTPS):  Region name: US West (Oregon)   Region: us-west-2    Endpoint: ivs.us-west-2.amazonaws.com    Region name: US East (Virginia)   Region: us-east-1    Endpoint: ivs.us-east-1.amazonaws.com    Region name: EU West (Dublin)   Region: eu-west-1    Endpoint: ivs.eu-west-1.amazonaws.com     Allowed Header Values      Accept:  application/json     Accept-Encoding:  gzip, deflate     Content-Type: application/json    Resources  The following resources contain information about your IVS live stream (see  Getting Started with Amazon IVS):   Channel \u2014 Stores configuration data related to your live stream. You first create a channel and then use the channel\u2019s stream key to start your live stream. See the Channel endpoints for more information.    Stream key \u2014 An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. See the StreamKey endpoints for more information.  Treat the stream key like a secret, since it allows anyone to stream to the channel.     Playback key pair \u2014 Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair endpoints for more information.   Recording configuration \u2014 Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration. See the Recording Configuration endpoints for more information.    Tagging  A tag is a metadata label that you assign to an AWS resource. A tag comprises a key and a value, both set by you. For example, you might set a tag as topic:nature to label a particular video category. See Tagging AWS Resources for more information, including restrictions that apply to tags. Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see  Access Tags).  The Amazon IVS API has these tag-related endpoints: TagResource, UntagResource, and ListTagsForResource. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations.  Authentication versus Authorization  Note the differences between these concepts:    Authentication is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.    Authorization is about granting permissions. You need to be authorized to view Amazon IVS private channels. (Private channels are channels that are enabled for "playback authorization.")    Authentication  All Amazon IVS API requests must be authenticated with a signature. The AWS Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it\u2019s your responsibility to sign the requests. You generate a signature using valid AWS credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from an IAM user account that has the ivs:PutMetadata permission. For more information:   Authentication and generating signatures \u2014 See Authenticating Requests (AWS Signature Version 4) in the AWS General Reference.   Managing Amazon IVS permissions \u2014 See Identity and Access Management on the Security page of the Amazon IVS User Guide.    Channel Endpoints     CreateChannel \u2014 Creates a new channel and an associated stream key to start streaming.    GetChannel \u2014 Gets the channel configuration for the specified channel ARN (Amazon Resource Name).    BatchGetChannel \u2014 Performs GetChannel on multiple ARNs simultaneously.    ListChannels \u2014 Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 Conflict Exception).    UpdateChannel \u2014 Updates a channel\'s configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect.    DeleteChannel \u2014 Deletes the specified channel.    StreamKey Endpoints     CreateStreamKey \u2014 Creates a stream key, used to initiate a stream, for the specified channel ARN.    GetStreamKey \u2014 Gets stream key information for the specified ARN.    BatchGetStreamKey \u2014 Performs GetStreamKey on multiple ARNs simultaneously.    ListStreamKeys \u2014 Gets summary information about stream keys for the specified channel.    DeleteStreamKey \u2014 Deletes the stream key for the specified ARN, so it can no longer be used to stream.    Stream Endpoints     GetStream \u2014 Gets information about the active (live) stream on a specified channel.    ListStreams \u2014 Gets summary information about live streams in your account, in the AWS region where the API request is processed.    StopStream \u2014 Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.    PutMetadata \u2014 Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.)    PlaybackKeyPair Endpoints  For more information, see Setting Up Private Channels in the Amazon IVS User Guide.    ImportPlaybackKeyPair \u2014 Imports the public portion of a new key pair and returns its arn and fingerprint. The privateKey can then be used to generate viewer authorization tokens, to grant viewers access to private channels (channels enabled for playback authorization).    GetPlaybackKeyPair \u2014 Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels.    ListPlaybackKeyPairs \u2014 Gets summary information about playback key pairs.    DeletePlaybackKeyPair \u2014 Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair\u2019s privateKey.    RecordingConfiguration Endpoints     CreateRecordingConfiguration \u2014 Creates a new recording configuration, used to enable recording to Amazon S3.    GetRecordingConfiguration \u2014 Gets the recording-configuration metadata for the specified ARN.    ListRecordingConfigurations \u2014 Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed.    DeleteRecordingConfiguration \u2014 Deletes the recording configuration for the specified ARN.    AWS Tags Endpoints     TagResource \u2014 Adds or updates tags for the AWS resource with the specified ARN.    UntagResource \u2014 Removes tags from the resource with the specified ARN.    ListTagsForResource \u2014 Gets information about AWS tags for the specified ARN',
  subcommands: [
    {
      name: "batch-get-channel",
      description: "Performs GetChannel on multiple ARNs simultaneously",
      options: [
        {
          name: "--arns",
          description: "Array of ARNs, one per channel",
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
      name: "batch-get-stream-key",
      description: "Performs GetStreamKey on multiple ARNs simultaneously",
      options: [
        {
          name: "--arns",
          description: "Array of ARNs, one per channel",
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
      name: "create-channel",
      description:
        "Creates a new channel and an associated stream key to start streaming",
      options: [
        {
          name: "--name",
          description: "Channel name",
          args: {
            name: "string",
          },
        },
        {
          name: "--latency-mode",
          description:
            "Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.) Default: LOW",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Default: STANDARD. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer\u2019s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized",
          description:
            "Whether the channel is private (enabled for playback authorization). Default: false",
        },
        {
          name: "--no-authorized",
          description:
            "Whether the channel is private (enabled for playback authorization). Default: false",
        },
        {
          name: "--recording-configuration-arn",
          description:
            'Recording-configuration ARN. Default: "" (empty string, recording is disabled)',
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Array of 1-50 maps, each of the form string:string (key:value)",
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
      name: "create-recording-configuration",
      description:
        "Creates a new recording configuration, used to enable recording to Amazon S3.  Known issue: In the us-east-1 region, if you use the AWS CLI to create a recording configuration, it returns success even if the S3 bucket is in a different region. In this case, the state of the recording configuration is CREATE_FAILED (instead of ACTIVE). (In other regions, the CLI correctly returns failure if the bucket is in a different region.)  Workaround: Ensure that your S3 bucket is in the same region as the recording configuration. If you create a recording configuration in a different region as your S3 bucket, delete that recording configuration and create a new one with an S3 bucket from the correct region",
      options: [
        {
          name: "--name",
          description:
            "An arbitrary string (a nickname) that helps the customer identify that resource. The value does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-configuration",
          description:
            "A complex type that contains a destination configuration for where recorded video will be stored",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Array of 1-50 maps, each of the form string:string (key:value)",
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
      name: "create-stream-key",
      description:
        "Creates a stream key, used to initiate a stream, for the specified channel ARN. Note that CreateChannel creates a stream key. If you subsequently use CreateStreamKey on the same channel, it will fail because a stream key already exists and there is a limit of 1 stream key per channel. To reset the stream key on a channel, use DeleteStreamKey and then CreateStreamKey",
      options: [
        {
          name: "--channel-arn",
          description: "ARN of the channel for which to create the stream key",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Array of 1-50 maps, each of the form string:string (key:value)",
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
      name: "delete-channel",
      description:
        'Deletes the specified channel and its associated stream keys. If you try to delete a live channel, you will get an error (409 ConflictException). To delete a channel that is live, call StopStream, wait for the Amazon EventBridge "Stream End" event (to verify that the stream\'s state was changed from Live to Offline), then call DeleteChannel. (See  Using EventBridge with Amazon IVS.)',
      options: [
        {
          name: "--arn",
          description: "ARN of the channel to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-playback-key-pair",
      description:
        "Deletes a specified authorization key pair. This invalidates future viewer tokens generated using the key pair\u2019s privateKey. For more information, see Setting Up Private Channels in the Amazon IVS User Guide",
      options: [
        {
          name: "--arn",
          description: "ARN of the key pair to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-recording-configuration",
      description:
        "Deletes the recording configuration for the specified ARN. If you try to delete a recording configuration that is associated with a channel, you will get an error (409 ConflictException). To avoid this, for all channels that reference the recording configuration, first use UpdateChannel to set the recordingConfigurationArn field to an empty string, then use DeleteRecordingConfiguration",
      options: [
        {
          name: "--arn",
          description: "ARN of the recording configuration to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stream-key",
      description:
        "Deletes the stream key for the specified ARN, so it can no longer be used to stream",
      options: [
        {
          name: "--arn",
          description: "ARN of the stream key to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-channel",
      description:
        "Gets the channel configuration for the specified channel ARN. See also BatchGetChannel",
      options: [
        {
          name: "--arn",
          description:
            "ARN of the channel for which the configuration is to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-playback-key-pair",
      description:
        "Gets a specified playback authorization key pair and returns the arn and fingerprint. The privateKey held by the caller can be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide",
      options: [
        {
          name: "--arn",
          description: "ARN of the key pair to be returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-recording-configuration",
      description: "Gets the recording configuration for the specified ARN",
      options: [
        {
          name: "--arn",
          description: "ARN of the recording configuration to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stream",
      description:
        "Gets information about the active (live) stream on a specified channel",
      options: [
        {
          name: "--channel-arn",
          description: "Channel ARN for stream to be accessed",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-stream-key",
      description: "Gets stream-key information for a specified ARN",
      options: [
        {
          name: "--arn",
          description: "ARN for the stream key to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "import-playback-key-pair",
      description:
        "Imports the public portion of a new key pair and returns its arn and fingerprint. The privateKey can then be used to generate viewer authorization tokens, to grant viewers access to private channels. For more information, see Setting Up Private Channels in the Amazon IVS User Guide",
      options: [
        {
          name: "--public-key-material",
          description: "The public portion of a customer-generated key pair",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Any tags provided with the request are added to the playback key pair tags",
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
      name: "list-channels",
      description:
        "Gets summary information about all channels in your account, in the AWS region where the API request is processed. This list can be filtered to match a specified name or recording-configuration ARN. Filters are mutually exclusive and cannot be used together. If you try to use both filters, you will get an error (409 ConflictException)",
      options: [
        {
          name: "--filter-by-name",
          description: "Filters the channel list to match the specified name",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-by-recording-configuration-arn",
          description:
            "Filters the channel list to match the specified recording-configuration ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The first channel to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of channels to return. Default: 50",
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
      name: "list-playback-key-pairs",
      description:
        "Gets summary information about playback key pairs. For more information, see Setting Up Private Channels in the Amazon IVS User Guide",
      options: [
        {
          name: "--next-token",
          description: "Maximum number of key pairs to return",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The first key pair to retrieve. This is used for pagination; see the nextToken response field. Default: 50",
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
      name: "list-recording-configurations",
      description:
        "Gets summary information about all recording configurations in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--next-token",
          description:
            "The first recording configuration to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "Maximum number of recording configurations to return. Default: 50",
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
      name: "list-stream-keys",
      description:
        "Gets summary information about stream keys for the specified channel",
      options: [
        {
          name: "--channel-arn",
          description: "Channel ARN used to filter the list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The first stream key to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of streamKeys to return. Default: 50",
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
      name: "list-streams",
      description:
        "Gets summary information about live streams in your account, in the AWS region where the API request is processed",
      options: [
        {
          name: "--next-token",
          description:
            "The first stream to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of streams to return. Default: 50",
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
      description: "Gets information about AWS tags for the specified ARN",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource to be retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The first tag to retrieve. This is used for pagination; see the nextToken response field",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "Maximum number of tags to return. Default: 50",
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
      name: "put-metadata",
      description:
        "Inserts metadata into the active stream of the specified channel. A maximum of 5 requests per second per channel is allowed, each with a maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching your data into a single PutMetadata call.) Also see Embedding Metadata within a Video Stream in the Amazon IVS User Guide",
      options: [
        {
          name: "--channel-arn",
          description:
            "ARN of the channel into which metadata is inserted. This channel must have an active stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "Metadata to insert into the stream. Maximum: 1 KB per request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-stream",
      description:
        "Disconnects the incoming RTMPS stream for the specified channel. Can be used in conjunction with DeleteStreamKey to prevent further streaming to a channel.  Many streaming client-software libraries automatically reconnect a dropped RTMPS session, so to stop the stream permanently, you may want to first revoke the streamKey attached to the channel",
      options: [
        {
          name: "--channel-arn",
          description:
            "ARN of the channel for which the stream is to be stopped",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
            "ARN of the resource for which tags are to be added or updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Array of tags to be added or updated",
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
          description: "ARN of the resource for which tags are to be removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "Array of tags to be removed",
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
      name: "update-channel",
      description:
        "Updates a channel's configuration. This does not affect an ongoing stream of this channel. You must stop and restart the stream for the changes to take effect",
      options: [
        {
          name: "--arn",
          description: "ARN of the channel to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "Channel name",
          args: {
            name: "string",
          },
        },
        {
          name: "--latency-mode",
          description:
            "Channel latency mode. Use NORMAL to broadcast and deliver live video up to Full HD. Use LOW for near-real-time interaction with viewers. (Note: In the Amazon IVS console, LOW and NORMAL correspond to Ultra-low and Standard, respectively.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately. Valid values:    STANDARD: Multiple qualities are generated from the original input, to automatically give viewers the best experience for their devices and network conditions. Vertical resolution can be up to 1080 and bitrate can be up to 8.5 Mbps.    BASIC: Amazon IVS delivers the original input to viewers. The viewer\u2019s video-quality choice is limited to the original input. Vertical resolution can be up to 480 and bitrate can be up to 1.5 Mbps",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized",
          description:
            "Whether the channel is private (enabled for playback authorization)",
        },
        {
          name: "--no-authorized",
          description:
            "Whether the channel is private (enabled for playback authorization)",
        },
        {
          name: "--recording-configuration-arn",
          description:
            "Recording-configuration ARN. If this is set to an empty string, recording is disabled. A value other than an empty string indicates that recording is enabled",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
