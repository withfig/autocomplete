const completionSpec: Fig.Spec = {
  name: "chime-sdk-meetings",
  description:
    "The Amazon Chime SDK meetings APIs in this section allow software developers to create Amazon Chime SDK meetings, set the Amazon Web Services Regions for meetings, create and manage users, and send and receive meeting notifications. For more information about the meeting APIs, see Amazon Chime SDK meetings",
  subcommands: [
    {
      name: "batch-create-attendee",
      description:
        "Creates up to 100 attendees for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description:
            "The Amazon Chime SDK ID of the meeting to which you're adding attendees",
          args: {
            name: "string",
          },
        },
        {
          name: "--attendees",
          description:
            "The attendee information, including attendees' IDs and join tokens",
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
      name: "batch-update-attendee-capabilities-except",
      description:
        "Updates AttendeeCapabilities except the capabilities listed in an ExcludedAttendeeIds table.  You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see .  When using capabilities, be aware of these corner cases:   If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400.   If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400.   You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive.   When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.   When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server",
      options: [
        {
          name: "--meeting-id",
          description:
            "The ID of the meeting associated with the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--excluded-attendee-ids",
          description:
            "The AttendeeIDs that you want to exclude from one or more capabilities",
          args: {
            name: "list",
          },
        },
        {
          name: "--capabilities",
          description:
            "The capabilities (audio, video, or content) that you want to update",
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
      name: "create-attendee",
      description:
        "Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The unique ID of the meeting",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-user-id",
          description:
            "The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application. Pattern: [-_&@+=,(){}\\[\\]\\/\u00ab\u00bb.:|'\"#a-zA-Z0-9\u00c0-\u00ff\\s]*  Values that begin with aws: are reserved. You can't configure a value that uses this prefix",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description:
            "The capabilities (audio, video, or content) that you want to grant an attendee. If you don't specify capabilities, all users have send and receive capabilities on all media channels by default.  You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see .  When using capabilities, be aware of these corner cases:   If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400.   If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400.   You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive.   When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.   When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server",
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
      name: "create-meeting",
      description:
        "Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. Use a different token for different meetings",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-region",
          description:
            "The Region in which to create the meeting.  Available values: af-south-1, ap-northeast-1, ap-northeast-2, ap-south-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-south-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2.  Available values in Amazon Web Services GovCloud (US) Regions: us-gov-east-1, us-gov-west-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--meeting-host-id",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-meeting-id",
          description:
            "The external meeting ID. Pattern: [-_&@+=,(){}\\[\\]\\/\u00ab\u00bb.:|'\"#a-zA-Z0-9\u00c0-\u00ff\\s]*  Values that begin with aws: are reserved. You can't configure a value that uses this prefix. Case insensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--notifications-configuration",
          description:
            "The configuration for resource targets to receive notifications when meeting and attendee events occur",
          args: {
            name: "structure",
          },
        },
        {
          name: "--meeting-features",
          description:
            "Lists the audio and video features enabled for a meeting, such as echo reduction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--primary-meeting-id",
          description:
            "When specified, replicates the media from the primary meeting to the new meeting",
          args: {
            name: "string",
          },
        },
        {
          name: "--tenant-ids",
          description:
            "A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Applies one or more tags to an Amazon Chime SDK meeting. Note the following:   Not all resources have tags. For a list of services with resources that support tagging using this operation, see Services that support the Resource Groups Tagging API. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.   Each resource can have up to 50 tags. For other limits, see Tag Naming and Usage Conventions in the AWS General Reference.   You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.   To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.    Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.   Minimum permissions  In addition to the tag:TagResources permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag a ChimeSDKMeetings instance using the TagResources operation, you must have both of the following permissions:  tag:TagResources   ChimeSDKMeetings:CreateTags   Some services might have specific requirements for tagging some resources. For example, to tag an Amazon S3 bucket, you must also have the s3:GetBucketTagging permission. If the expected minimum permissions don't work, check the documentation for that service's tagging APIs for more information",
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
      name: "create-meeting-with-attendees",
      description:
        "Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime Developer Guide. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--client-request-token",
          description:
            "The unique identifier for the client request. Use a different token for different meetings",
          args: {
            name: "string",
          },
        },
        {
          name: "--media-region",
          description:
            "The Region in which to create the meeting.  Available values: af-south-1, ap-northeast-1, ap-northeast-2, ap-south-1, ap-southeast-1, ap-southeast-2, ca-central-1, eu-central-1, eu-north-1, eu-south-1, eu-west-1, eu-west-2, eu-west-3, sa-east-1, us-east-1, us-east-2, us-west-1, us-west-2.  Available values in Amazon Web Services GovCloud (US) Regions: us-gov-east-1, us-gov-west-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--meeting-host-id",
          description: "Reserved",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-meeting-id",
          description:
            "The external meeting ID. Pattern: [-_&@+=,(){}\\[\\]\\/\u00ab\u00bb.:|'\"#a-zA-Z0-9\u00c0-\u00ff\\s]*  Values that begin with aws: are reserved. You can't configure a value that uses this prefix. Case insensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--meeting-features",
          description:
            "Lists the audio and video features enabled for a meeting, such as echo reduction",
          args: {
            name: "structure",
          },
        },
        {
          name: "--notifications-configuration",
          description:
            "The configuration for resource targets to receive notifications when meeting and attendee events occur",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attendees",
          description:
            "The attendee information, including attendees' IDs and join tokens",
          args: {
            name: "list",
          },
        },
        {
          name: "--primary-meeting-id",
          description:
            "When specified, replicates the media from the primary meeting to the new meeting",
          args: {
            name: "string",
          },
        },
        {
          name: "--tenant-ids",
          description:
            "A consistent and opaque identifier, created and maintained by the builder to represent a segment of their users",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "The tags in the request",
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
      name: "delete-attendee",
      description:
        "Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--attendee-id",
          description: "The Amazon Chime SDK attendee ID",
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
      name: "delete-meeting",
      description:
        "Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
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
      name: "get-attendee",
      description:
        "Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--attendee-id",
          description: "The Amazon Chime SDK attendee ID",
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
      name: "get-meeting",
      description:
        "Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
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
      name: "list-attendees",
      description:
        "Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next page of results",
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
      name: "list-tags-for-resource",
      description:
        "Returns a list of the tags available for the specified resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
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
      name: "start-meeting-transcription",
      description:
        "Starts transcription for the specified meetingId. For more information, refer to  Using Amazon Chime SDK live transcription  in the Amazon Chime SDK Developer Guide. If you specify an invalid configuration, a TranscriptFailed event will be sent with the contents of the BadRequestException generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the StartStreamTranscription API in the Amazon Transcribe Developer Guide.  By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users\u2019 responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve AWS AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations",
      options: [
        {
          name: "--meeting-id",
          description: "The unique ID of the meeting being transcribed",
          args: {
            name: "string",
          },
        },
        {
          name: "--transcription-configuration",
          description:
            "The configuration for the current transcription operation. Must contain EngineTranscribeSettings or EngineTranscribeMedicalSettings",
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
      name: "stop-meeting-transcription",
      description:
        "Stops transcription for the specified meetingId. For more information, refer to  Using Amazon Chime SDK live transcription  in the Amazon Chime SDK Developer Guide.  By default, Amazon Transcribe may use and store audio content processed by the service to develop and improve Amazon Web Services AI/ML services as further described in section 50 of the Amazon Web Services Service Terms. Using Amazon Transcribe may be subject to federal and state laws or regulations regarding the recording or interception of electronic communications. It is your and your end users\u2019 responsibility to comply with all applicable laws regarding the recording, including properly notifying all participants in a recorded session or communication that the session or communication is being recorded, and obtaining all necessary consents. You can opt out from Amazon Web Services using audio content to develop and improve Amazon Web Services AI/ML services by configuring an AI services opt out policy using Amazon Web Services Organizations",
      options: [
        {
          name: "--meeting-id",
          description:
            "The unique ID of the meeting for which you stop transcription",
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
      description: "The resource that supports tags",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Lists the requested tags",
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
      description:
        "Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:   To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.   You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.    Minimum permissions  In addition to the tag:UntagResources permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the UntagResources operation, you must have both of the following permissions:  tag:UntagResource   ChimeSDKMeetings:DeleteTags",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource that you're removing tags from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys being removed from the resources",
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
      name: "update-attendee-capabilities",
      description:
        "The capabilities that you want to update.  You use the capabilities with a set of values that control what the capabilities can do, such as SendReceive data. For more information about those values, see .  When using capabilities, be aware of these corner cases:   If you specify MeetingFeatures:Video:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Video will be rejected with ValidationError 400.   If you specify MeetingFeatures:Content:MaxResolution:None when you create a meeting, all API requests that include SendReceive, Send, or Receive for AttendeeCapabilities:Content will be rejected with ValidationError 400.   You can't set content capabilities to SendReceive or Receive unless you also set video capabilities to SendReceive or Receive. If you don't set the video capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your video capability to receive and you set your content capability to not receive.   When you change an audio capability from None or Receive to Send or SendReceive , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.   When you change a video or content capability from None or Receive to Send or SendReceive , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server",
      options: [
        {
          name: "--meeting-id",
          description:
            "The ID of the meeting associated with the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--attendee-id",
          description:
            "The ID of the attendee associated with the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description: "The capabilities that you want to update",
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
