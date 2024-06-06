const completionSpec: Fig.Spec = {
  name: "kinesisvideo",
  description: null,
  subcommands: [
    {
      name: "create-signaling-channel",
      description:
        "Creates a signaling channel.   CreateSignalingChannel is an asynchronous operation",
      options: [
        {
          name: "--channel-name",
          description:
            "A name for the signaling channel that you are creating. It must be unique for each Amazon Web Services account and Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-type",
          description:
            "A type of the signaling channel that you are creating. Currently, SINGLE_MASTER is the only supported channel type",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-master-configuration",
          description:
            "A structure containing the configuration for the SINGLE_MASTER channel type",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A set of tags (key-value pairs) that you want to associate with this channel",
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
      name: "create-stream",
      description:
        "Creates a new Kinesis video stream.  When you create a new stream, Kinesis Video Streams assigns it a version number. When you change the stream's metadata, Kinesis Video Streams updates the version.   CreateStream is an asynchronous operation. For information about how the service works, see How it Works.  You must have permissions for the KinesisVideo:CreateStream action",
      options: [
        {
          name: "--device-name",
          description:
            "The name of the device that is writing to the stream.   In the current implementation, Kinesis Video Streams does not use this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-name",
          description:
            "A name for the stream that you are creating. The stream name is an identifier for the stream, and must be unique for each account and region",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-type",
          description:
            'The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see Media Types. If you choose to specify the MediaType, see Naming Requirements for guidelines. Example valid values include "video/h264" and "video/h264,audio/aac". This parameter is optional; the default value is null (or empty in JSON)',
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-id",
          description:
            "The ID of the Key Management Service (KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (Amazon Web Services/kinesisvideo) is used.  For more information, see DescribeKey",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-retention-in-hours",
          description:
            "The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is 0, indicating that the stream does not persist data. When the DataRetentionInHours value is 0, consumers can still consume the fragments that remain in the service host buffer, which has a retention time limit of 5 minutes and a retention memory limit of 200 MB. Fragments are removed from the buffer when either limit is reached",
          args: {
            name: "integer",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional)",
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
      name: "delete-edge-configuration",
      description:
        "An asynchronous API that deletes a stream\u2019s existing edge configuration, as well as the corresponding media from the Edge Agent. When you invoke this API, the sync status is set to DELETING. A deletion process starts, in which active edge jobs are stopped and all media is deleted from the edge device. The time to delete varies, depending on the total amount of stored media. If the deletion process fails, the sync status changes to DELETE_FAILED. You will need to re-try the deletion. When the deletion process has completed successfully, the edge configuration is no longer accessible",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream from which to delete the edge configuration. Specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream. Specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-signaling-channel",
      description:
        "Deletes a specified signaling channel. DeleteSignalingChannel is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted",
      options: [
        {
          name: "--channel-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-version",
          description:
            "The current version of the signaling channel that you want to delete. You can obtain the current version by invoking the DescribeSignalingChannel or ListSignalingChannels API operations",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-stream",
      description:
        "Deletes a Kinesis video stream and the data contained in the stream.  This method marks the stream for deletion, and makes the data in the stream inaccessible immediately.    To ensure that you have the latest version of the stream before deleting it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.  This operation requires permission for the KinesisVideo:DeleteStream action",
      options: [
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-version",
          description:
            "Optional: The version of the stream that you want to delete.  Specify the version as a safeguard to ensure that your are deleting the correct stream. To get the stream version, use the DescribeStream API. If not specified, only the CreationTime is checked before deleting the stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-edge-configuration",
      description:
        "Describes a stream\u2019s edge configuration that was set using the StartEdgeConfigurationUpdate API and the latest status of the edge agent's recorder and uploader jobs. Use this API to get the status of the configuration to determine if the configuration is in sync with the Edge Agent. Use this API to evaluate the health of the Edge Agent",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream whose edge configuration you want to update. Specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream. Specify either the StreamNameor the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-image-generation-configuration",
      description:
        "Gets the ImageGenerationConfiguration for a given Kinesis video stream",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream from which to retrieve the image generation configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the Kinesis video stream from which to retrieve the image generation configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-mapped-resource-configuration",
      description:
        "Returns the most current information about the stream. The streamName or streamARN should be provided in the input",
      options: [
        {
          name: "--stream-name",
          description: "The name of the stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description: "The Amazon Resource Name (ARN) of the stream",
          args: {
            name: "string",
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
            "The token to provide in your next request, to get another batch of results",
          args: {
            name: "string",
          },
        },
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
      name: "describe-media-storage-configuration",
      description:
        "Returns the most current information about the channel. Specify the ChannelName or ChannelARN in the input",
      options: [
        {
          name: "--channel-name",
          description: "The name of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-arn",
          description: "The Amazon Resource Name (ARN) of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-notification-configuration",
      description:
        "Gets the NotificationConfiguration for a given Kinesis video stream",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream from which to retrieve the notification configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to retrieve the notification configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-signaling-channel",
      description:
        "Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe",
      options: [
        {
          name: "--channel-name",
          description:
            "The name of the signaling channel that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-arn",
          description:
            "The ARN of the signaling channel that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-stream",
      description:
        "Returns the most current information about the specified stream. You must specify either the StreamName or the StreamARN",
      options: [
        {
          name: "--stream-name",
          description: "The name of the stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description: "The Amazon Resource Name (ARN) of the stream",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-data-endpoint",
      description:
        "Gets an endpoint for a specified stream for either reading or writing. Use this endpoint in your application to read from the specified stream (using the GetMedia or GetMediaForFragmentList operations) or write to it (using the PutMedia operation).   The returned endpoint does not have the API name appended. The client needs to add the API name to the returned endpoint.  In the request, specify the stream either by StreamName or StreamARN",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream that you want to get the endpoint for. You must specify either this parameter or a StreamARN in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a StreamName in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--api-name",
          description:
            "The name of the API action for which to get an endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-signaling-channel-endpoint",
      description:
        "Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the SingleMasterChannelEndpointConfiguration input parameter, which consists of the Protocols and Role properties.  Protocols is used to determine the communication mechanism. For example, if you specify WSS as the protocol, this API produces a secure websocket endpoint. If you specify HTTPS as the protocol, this API generates an HTTPS endpoint.   Role determines the messaging permissions. A MASTER role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A VIEWER role results in this API generating an endpoint that a client can use to communicate only with a MASTER",
      options: [
        {
          name: "--channel-arn",
          description:
            "The Amazon Resource Name (ARN) of the signalling channel for which you want to get an endpoint",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-master-channel-endpoint-configuration",
          description:
            "A structure containing the endpoint configuration for the SINGLE_MASTER channel type",
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
      name: "list-edge-agent-configurations",
      description:
        "Returns an array of edge configurations associated with the specified Edge Agent. In the request, you must specify the Edge Agent HubDeviceArn",
      options: [
        {
          name: "--hub-device-arn",
          description:
            'The "Internet of Things (IoT) Thing" Arn of the edge agent',
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of edge configurations to return in the response. The default is 5",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If you specify this parameter, when the result of a ListEdgeAgentConfigurations operation is truncated, the call returns the NextToken in the response. To get another batch of edge configurations, provide this token in your next request",
          args: {
            name: "string",
          },
        },
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
      name: "list-signaling-channels",
      description:
        "Returns an array of ChannelInfo objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a ChannelNameCondition",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of channels to return in the response. The default is 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If you specify this parameter, when the result of a ListSignalingChannels operation is truncated, the call returns the NextToken in the response. To get another batch of channels, provide this token in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name-condition",
          description:
            "Optional: Returns only the channels that satisfy a specific condition",
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
      name: "list-streams",
      description:
        "Returns an array of StreamInfo objects. Each object describes a stream. To retrieve only streams that satisfy a specific condition, you can specify a StreamNameCondition",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of streams to return in the response. The default is 10,000",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "If you specify this parameter, when the result of a ListStreams operation is truncated, the call returns the NextToken in the response. To get another batch of streams, provide this token in your next request",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-name-condition",
          description:
            "Optional: Returns only streams that satisfy a specific condition. Currently, you can specify only the prefix of a stream name as a condition",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of tags associated with the specified signaling channel",
      options: [
        {
          name: "--next-token",
          description:
            "If you specify this parameter and the result of a ListTagsForResource call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel for which you want to list tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-stream",
      description:
        "Returns a list of tags associated with the specified stream. In the request, you must specify either the StreamName or the StreamARN",
      options: [
        {
          name: "--next-token",
          description:
            "If you specify this parameter and the result of a ListTagsForStream call is truncated, the response includes a token that you can use in the next request to fetch the next batch of tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream that you want to list tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-name",
          description: "The name of the stream that you want to list tags for",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-edge-configuration-update",
      description:
        "An asynchronous API that updates a stream\u2019s existing edge configuration. The Kinesis Video Stream will sync the stream\u2019s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The SyncStatus will be updated as the edge configuration is acknowledged, and synced with the Edge Agent.  If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to SYNCING. You will have to wait for the sync status to reach a terminal state such as: IN_SYNC, or SYNC_FAILED, before using this API again. If you invoke this API during the syncing process, a ResourceInUseException will be thrown. The connectivity of the stream\u2019s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the SYNC_FAILED state. To move an edge configuration from one device to another, use DeleteEdgeConfiguration to delete the current edge configuration. You can then invoke StartEdgeConfigurationUpdate with an updated Hub Device ARN",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream whose edge configuration you want to update. Specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream. Specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--edge-config",
          description:
            "The edge configuration details required to invoke the update process",
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
      name: "tag-resource",
      description:
        "Adds one or more tags to a signaling channel. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel to which you want to add tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the specified signaling channel. Each tag is a key-value pair",
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
      name: "tag-stream",
      description:
        "Adds one or more tags to a stream. A tag is a key-value pair (the value is optional) that you can define and assign to Amazon Web Services resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. For more information, see Using Cost Allocation Tags in the Billing and Cost Management and Cost Management User Guide.  You must provide either the StreamName or the StreamARN. This operation requires permission for the KinesisVideo:TagStream action. A Kinesis video stream can support up to 50 tags",
      options: [
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to add the tag or tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-name",
          description:
            "The name of the stream that you want to add the tag or tags to",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A list of tags to associate with the specified stream. Each tag is a key-value pair (the value is optional)",
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
      description:
        "Removes one or more tags from a signaling channel. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel from which you want to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key-list",
          description: "A list of the keys of the tags that you want to remove",
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
      name: "untag-stream",
      description:
        "Removes one or more tags from a stream. In the request, specify only a tag key or keys; don't specify the value. If you specify a tag key that does not exist, it's ignored. In the request, you must provide the StreamName or StreamARN",
      options: [
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream that you want to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-name",
          description:
            "The name of the stream that you want to remove tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key-list",
          description: "A list of the keys of the tags that you want to remove",
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
      name: "update-data-retention",
      description:
        "Increases or decreases the stream's data retention period by the value that you specify. To indicate whether you want to increase or decrease the data retention period, specify the Operation parameter in the request body. In the request, you must specify either the StreamName or the StreamARN.  This operation requires permission for the KinesisVideo:UpdateDataRetention action. Changing the data retention period affects the data in the stream as follows:   If the data retention period is increased, existing data is retained for the new retention period. For example, if the data retention period is increased from one hour to seven hours, all existing data is retained for seven hours.   If the data retention period is decreased, existing data is retained for the new retention period. For example, if the data retention period is decreased from seven hours to one hour, all existing data is retained for one hour, and any data older than one hour is deleted immediately",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream whose retention period you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the stream whose retention period you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-version",
          description:
            "The version of the stream whose retention period you want to change. To get the version, call either the DescribeStream or the ListStreams API",
          args: {
            name: "string",
          },
        },
        {
          name: "--operation",
          description:
            "Indicates whether you want to increase or decrease the retention period",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-retention-change-in-hours",
          description:
            "The number of hours to adjust the current retention by. The value you specify is added to or subtracted from the current value, depending on the operation. The minimum value for data retention is 0 and the maximum value is 87600 (ten years)",
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
      name: "update-image-generation-configuration",
      description:
        "Updates the StreamInfo and ImageProcessingConfiguration fields",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream from which to update the image generation configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the image generation configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--image-generation-configuration",
          description:
            "The structure that contains the information required for the KVS images delivery. If the structure is null, the configuration will be deleted from the stream",
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
      name: "update-media-storage-configuration",
      description:
        "Associates a SignalingChannel to a stream to store the media. There are two signaling modes that you can specify :   If StorageStatus is enabled, the data will be stored in the StreamARN provided. In order for WebRTC Ingestion to work, the stream must have data retention enabled.   If StorageStatus is disabled, no data will be stored, and the StreamARN parameter will not be needed.     If StorageStatus is enabled, direct peer-to-peer (master-viewer) connections no longer occur. Peers connect directly to the storage session. You must call the JoinStorageSession API to trigger an SDP offer send and establish a connection between a peer and the storage session",
      options: [
        {
          name: "--channel-arn",
          description: "The Amazon Resource Name (ARN) of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-storage-configuration",
          description:
            "A structure that encapsulates, or contains, the media storage configuration properties",
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
      name: "update-notification-configuration",
      description: "Updates the notification information for a stream",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream from which to update the notification configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the StreamName or the StreamARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-configuration",
          description:
            "The structure containing the information required for notifications. If the structure is null, the configuration will be deleted from the stream",
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
      name: "update-signaling-channel",
      description:
        "Updates the existing signaling channel. This is an asynchronous operation and takes time to complete.  If the MessageTtlSeconds value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous MessageTtlSeconds value",
      options: [
        {
          name: "--channel-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-version",
          description:
            "The current version of the signaling channel that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--single-master-configuration",
          description:
            "The structure containing the configuration for the SINGLE_MASTER type of the signaling channel that you want to update",
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
      name: "update-stream",
      description:
        "Updates stream metadata, such as the device name and media type. You must provide the stream name or the Amazon Resource Name (ARN) of the stream. To make sure that you have the latest version of the stream before updating it, you can specify the stream version. Kinesis Video Streams assigns a version to each stream. When you update a stream, Kinesis Video Streams assigns a new version number. To get the latest stream version, use the DescribeStream API.   UpdateStream is an asynchronous operation, and takes time to complete",
      options: [
        {
          name: "--stream-name",
          description:
            "The name of the stream whose metadata you want to update. The stream name is an identifier for the stream, and must be unique for each account and region",
          args: {
            name: "string",
          },
        },
        {
          name: "--stream-arn",
          description:
            "The ARN of the stream whose metadata you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--current-version",
          description:
            "The version of the stream whose metadata you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-name",
          description:
            "The name of the device that is writing to the stream.    In the current implementation, Kinesis Video Streams does not use this name",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-type",
          description:
            "The stream's media type. Use MediaType to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see Media Types. If you choose to specify the MediaType, see Naming Requirements. To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify video/h264 as the MediaType",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
