const completionSpec: Fig.Spec = {
  name: "chime-sdk-media-pipelines",
  description:
    "The Amazon Chime SDK media pipeline APIs in this section allow software developers to create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipelines, see Amazon Chime SDK media pipelines",
  subcommands: [
    {
      name: "create-media-capture-pipeline",
      description: "Creates a media pipeline",
      options: [
        {
          name: "--source-type",
          description:
            "Source type from which the media artifacts are captured. A Chime SDK Meeting is the only supported source",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-arn",
          description:
            "ARN of the source from which the media artifacts are captured",
          args: {
            name: "string",
          },
        },
        {
          name: "--sink-type",
          description:
            "Destination type to which the media artifacts are saved. You must use an S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--sink-arn",
          description: "The ARN of the sink type",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media pipeline request",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-sdk-meeting-configuration",
          description:
            "The configuration for a specified media pipeline. SourceType must be ChimeSdkMeeting",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sse-aws-key-management-params",
          description:
            "An object that contains server side encryption parameters to be used by media capture pipeline. The parameters can also be used by media concatenation pipeline taking media capture pipeline as a media source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--sink-iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the sink role to be used with AwsKmsKeyId in SseAwsKeyManagementParams. Can only interact with S3Bucket sink type. The role must belong to the caller\u2019s account and be able to act on behalf of the caller during the API call. All minimum policy permissions requirements for the caller to perform sink-related actions are the same for SinkIamRoleArn. Additionally, the role must have permission to kms:GenerateDataKey using KMS key supplied as AwsKmsKeyId in SseAwsKeyManagementParams. If media concatenation will be required later, the role must also have permission to kms:Decrypt for the same KMS key",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tag key-value pairs",
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
      name: "create-media-concatenation-pipeline",
      description: "Creates a media concatenation pipeline",
      options: [
        {
          name: "--sources",
          description:
            "An object that specifies the sources for the media concatenation pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--sinks",
          description:
            "An object that specifies the data sinks for the media concatenation pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. The token makes the API request idempotent. Use a unique token for each media concatenation pipeline request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags associated with the media concatenation pipeline",
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
      name: "create-media-insights-pipeline",
      description: "Creates a media insights pipeline",
      options: [
        {
          name: "--media-insights-pipeline-configuration-arn",
          description: "The ARN of the pipeline's configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--kinesis-video-stream-source-runtime-configuration",
          description:
            "The runtime configuration for the Kinesis video stream source of the media insights pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--media-insights-runtime-metadata",
          description:
            "The runtime metadata for the media insights pipeline. Consists of a key-value map of strings",
          args: {
            name: "map",
          },
        },
        {
          name: "--kinesis-video-stream-recording-source-runtime-configuration",
          description:
            "The runtime configuration for the Kinesis video recording stream source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--s3-recording-sink-runtime-configuration",
          description:
            "The runtime configuration for the S3 recording sink. If specified, the settings in this structure override any settings in S3RecordingSinkConfiguration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the media insights pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the media insights pipeline request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-media-insights-pipeline-configuration",
      description:
        "A structure that contains the static configurations for a media insights pipeline",
      options: [
        {
          name: "--media-insights-pipeline-configuration-name",
          description: "The name of the media insights pipeline configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-access-role-arn",
          description:
            "The ARN of the role used by the service to access Amazon Web Services resources, including Transcribe and Transcribe Call Analytics, on the caller\u2019s behalf",
          args: {
            name: "string",
          },
        },
        {
          name: "--real-time-alert-configuration",
          description:
            "The configuration settings for the real-time alerts in a media insights pipeline configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elements",
          description:
            "The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "The tags assigned to the media insights pipeline configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the media insights pipeline configuration request",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-media-live-connector-pipeline",
      description:
        "Creates a media live connector pipeline in an Amazon Chime SDK meeting",
      options: [
        {
          name: "--sources",
          description: "The media live connector pipeline's data sources",
          args: {
            name: "list",
          },
        },
        {
          name: "--sinks",
          description: "The media live connector pipeline's data sinks",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description: "The token assigned to the client making the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags associated with the media live connector pipeline",
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
      name: "create-media-pipeline-kinesis-video-stream-pool",
      description:
        "Creates an Amazon Kinesis Video Stream pool for use with media stream pipelines.  If a meeting uses an opt-in Region as its MediaRegion, the KVS stream must be in that same Region. For example, if a meeting uses the af-south-1 Region, the KVS stream must also be in af-south-1. However, if the meeting uses a Region that AWS turns on by default, the KVS stream can be in any available Region, including an opt-in Region. For example, if the meeting uses ca-central-1, the KVS stream can be in eu-west-2, us-east-1, af-south-1, or any other Region that the Amazon Chime SDK supports. To learn which AWS Region a meeting uses, call the GetMeeting API and use the MediaRegion parameter from the response. For more information about opt-in Regions, refer to Available Regions in the Amazon Chime SDK Developer Guide, and Specify which AWS Regions your account can use, in the AWS Account Management Reference Guide",
      options: [
        {
          name: "--stream-configuration",
          description: "The configuration settings for the stream",
          args: {
            name: "structure",
          },
        },
        {
          name: "--pool-name",
          description: "The name of the pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "The token assigned to the client making the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the stream pool",
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
      name: "create-media-stream-pipeline",
      description: "Creates a streaming media pipeline",
      options: [
        {
          name: "--sources",
          description: "The data sources for the media pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--sinks",
          description: "The data sink for the media pipeline",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description: "The token assigned to the client making the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags assigned to the media pipeline",
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
      name: "delete-media-capture-pipeline",
      description: "Deletes the media pipeline",
      options: [
        {
          name: "--media-pipeline-id",
          description: "The ID of the media pipeline being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-media-insights-pipeline-configuration",
      description: "Deletes the specified configuration settings",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-media-pipeline",
      description: "Deletes the media pipeline",
      options: [
        {
          name: "--media-pipeline-id",
          description: "The ID of the media pipeline to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-media-pipeline-kinesis-video-stream-pool",
      description: "Deletes an Amazon Kinesis Video Stream pool",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-media-capture-pipeline",
      description: "Gets an existing media pipeline",
      options: [
        {
          name: "--media-pipeline-id",
          description: "The ID of the pipeline that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-media-insights-pipeline-configuration",
      description:
        "Gets the configuration settings for a media insights pipeline",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the requested resource. Valid values include the name and ARN of the media insights pipeline configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-media-pipeline",
      description: "Gets an existing media pipeline",
      options: [
        {
          name: "--media-pipeline-id",
          description: "The ID of the pipeline that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-media-pipeline-kinesis-video-stream-pool",
      description: "Gets an Kinesis video stream pool",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-speaker-search-task",
      description: "Retrieves the details of the specified speaker search task",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--speaker-search-task-id",
          description: "The ID of the speaker search task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-voice-tone-analysis-task",
      description: "Retrieves the details of a voice tone analysis task",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-tone-analysis-task-id",
          description: "The ID of the voice tone analysis task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-media-capture-pipelines",
      description: "Returns a list of media pipelines",
      options: [
        {
          name: "--next-token",
          description: "The token used to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Valid Range: 1 - 99",
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
      name: "list-media-insights-pipeline-configurations",
      description: "Lists the available media insights pipeline configurations",
      options: [
        {
          name: "--next-token",
          description: "The token used to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-media-pipeline-kinesis-video-stream-pools",
      description: "Lists the video stream pools in the media pipeline",
      options: [
        {
          name: "--next-token",
          description: "The token used to return the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-media-pipelines",
      description: "Returns a list of media pipelines",
      options: [
        {
          name: "--next-token",
          description: "The token used to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Valid Range: 1 - 99",
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
      name: "list-tags-for-resource",
      description: "Lists the tags available for a media pipeline",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's region, resource ID, and pipeline ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-speaker-search-task",
      description:
        "Starts a speaker search task.  Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-profile-domain-arn",
          description:
            "The ARN of the voice profile domain that will store the voice profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--kinesis-video-stream-source-task-configuration",
          description:
            "The task configuration for the Kinesis video stream source of the media insights pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. Use a different token for different speaker search tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-voice-tone-analysis-task",
      description:
        "Starts a voice tone analysis task. For more information about voice tone analysis, see Using Amazon Chime SDK voice analytics in the Amazon Chime SDK Developer Guide.  Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--language-code",
          description: "The language code",
          args: {
            name: "string",
          },
        },
        {
          name: "--kinesis-video-stream-source-task-configuration",
          description:
            "The task configuration for the Kinesis video stream source of the media insights pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. Use a different token for different voice tone analysis tasks",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-speaker-search-task",
      description: "Stops a speaker search task",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--speaker-search-task-id",
          description: "The speaker search task ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "stop-voice-tone-analysis-task",
      description: "Stops a voice tone analysis task",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-tone-analysis-task-id",
          description: "The ID of the voice tone analysis task",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "The ARN of the media pipeline that you want to tag. Consists of the pipeline's endpoint region, resource ID, and pipeline ID",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the media pipeline associated with any tags. The ARN consists of the pipeline's endpoint region, resource ID, and pipeline ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags associated with the specified media pipeline",
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
      description: "Removes any tags from a media pipeline",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the pipeline that you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The key/value pairs in the tag that you want to remove",
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
      name: "update-media-insights-pipeline-configuration",
      description:
        "Updates the media insights pipeline's configuration settings",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier for the resource to be updated. Valid values include the name and ARN of the media insights pipeline configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-access-role-arn",
          description:
            "The ARN of the role used by the service to access Amazon Web Services resources",
          args: {
            name: "string",
          },
        },
        {
          name: "--real-time-alert-configuration",
          description:
            "The configuration settings for real-time alerts for the media insights pipeline",
          args: {
            name: "structure",
          },
        },
        {
          name: "--elements",
          description:
            "The elements in the request, such as a processor for Amazon Transcribe or a sink for a Kinesis Data Stream",
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
      name: "update-media-insights-pipeline-status",
      description: "Updates the status of a media insights pipeline",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the resource to be updated. Valid values include the ID and ARN of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-status",
          description: "The requested status of the media insights pipeline",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-media-pipeline-kinesis-video-stream-pool",
      description:
        "Updates an Amazon Kinesis Video Stream pool in a media pipeline",
      options: [
        {
          name: "--identifier",
          description:
            "The unique identifier of the requested resource. Valid values include the name and ARN of the media pipeline Kinesis Video Stream pool",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-configuration",
          description: "The configuration settings for the video stream",
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
