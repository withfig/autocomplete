const completionSpec: Fig.Spec = {
  name: "kinesis-video-webrtc-storage",
  description: null,
  subcommands: [
    {
      name: "join-storage-session",
      description:
        "Join the ongoing one way-video and/or multi-way audio WebRTC session as a video producing device for an input channel. If there\u2019s no existing session for the channel, a new streaming session needs to be created, and the Amazon Resource Name (ARN) of the signaling channel must be provided.  Currently for the SINGLE_MASTER type, a video producing device is able to ingest both audio and video media into a stream, while viewers can only ingest audio. Both a video producing device and viewers can join the session first, and wait for other participants. While participants are having peer to peer conversations through webRTC, the ingested media session will be stored into the Kinesis Video Stream. Multiple viewers are able to playback real-time media. Customers can also use existing Kinesis Video Streams features like HLS or DASH playback, Image generation, and more with ingested WebRTC media.  Assume that only one video producing device client can be associated with a session for the channel. If more than one client joins the session of a specific channel as a video producing device, the most recent client request takes precedence",
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
  ],
};

export default completionSpec;
