const completionSpec: Fig.Spec = {
  name: "kinesis-video-webrtc-storage",
  description: "Webrtc",
  subcommands: [
    {
      name: "join-storage-session",
      description:
        "Before using this API, you must call the GetSignalingChannelEndpoint API to request the WEBRTC endpoint. You then specify the endpoint and region in your JoinStorageSession API request.  Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there\u2019s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided.  Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream. Only video producing devices can join the session and record media.  Both audio and video tracks are currently required for WebRTC ingestion. Current requirements:   Video track: H.264   Audio track: Opus    The resulting ingested video in the Kinesis video stream will have the following parameters: H.264 video and AAC audio. Once a master participant has negotiated a connection through WebRTC, the ingested media session will be stored in the Kinesis video stream. Multiple viewers are then able to play back real-time media through our Playback APIs. You can also use existing Kinesis Video Streams features like HLS or DASH playback, image generation via GetImages, and more with ingested WebRTC media.  S3 image delivery and notifications are not currently supported.   Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence.    Additional information     Idempotent - This API is not idempotent.    Retry behavior - This is counted as a new API call.    Concurrent calls - Concurrent calls are allowed. An offer is sent once per each call",
      options: [
        {
          name: "--channel-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "join-storage-session-as-viewer",
      description:
        "Join the ongoing one way-video and/or multi-way audio WebRTC session as a viewer for an input channel. If there\u2019s no existing session for the channel, create a new streaming session and provide the Amazon Resource Name (ARN) of the signaling channel (channelArn) and client id (clientId).  Currently for SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join a session first and wait for other participants. While participants are having peer to peer conversations through WebRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media.  Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media. If there\u2019s an existing session with the same clientId that's found in the join session request, the new request takes precedence",
      options: [
        {
          name: "--channel-arn",
          description:
            "The Amazon Resource Name (ARN) of the signaling channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description: "The unique identifier for the sender client",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
