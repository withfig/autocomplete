const completionSpec: Fig.Spec = {
  name: "chime-sdk-messaging",
  description:
    "The Amazon Chime SDK messaging APIs in this section allow software developers to send and receive messages in custom messaging applications. These APIs depend on the frameworks provided by the Amazon Chime SDK identity APIs. For more information about the messaging APIs, see Amazon Chime SDK messaging",
  subcommands: [
    {
      name: "associate-channel-flow",
      description:
        "Associates a channel flow with a channel. Once associated, all messages to that channel go through channel flow processors. To stop processing, use the DisassociateChannelFlow API.  Only administrators or channel moderators can associate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description: "The AppInstanceUserArn of the user making the API call",
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
      name: "batch-create-channel-membership",
      description: "Adds a specified number of users and bots to a channel",
      options: [
        {
          name: "--channel-arn",
          description:
            "The ARN of the channel to which you're adding users or bots",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned. This is only supported by moderators",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arns",
          description:
            "The ARNs of the members you want to add to the channel. Only AppInstanceUsers and AppInstanceBots can be added as a channel member",
          args: {
            name: "list",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.   Only required when creating membership in a SubChannel for a moderator in an elastic channel",
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
      name: "channel-flow-callback",
      description:
        "Calls back Amazon Chime SDK messaging with a processing response message. This should be invoked from the processor Lambda. This is a developer API. You can return one of the following processing responses:   Update message content or metadata   Deny a message   Make no changes to the message",
      options: [
        {
          name: "--callback-id",
          description:
            "The identifier passed to the processor by the service when invoked. Use the identifier to call back the service",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-resource",
          description:
            "When a processor determines that a message needs to be DENIED, pass this parameter with a value of true",
        },
        {
          name: "--no-delete-resource",
          description:
            "When a processor determines that a message needs to be DENIED, pass this parameter with a value of true",
        },
        {
          name: "--channel-message",
          description: "Stores information about the processed message",
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
      name: "create-channel",
      description:
        "Creates a channel to which you can add users and send messages.  Restriction: You can't change a channel's privacy.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the channel request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description:
            "The channel mode: UNRESTRICTED or RESTRICTED. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels",
          args: {
            name: "string",
          },
        },
        {
          name: "--privacy",
          description:
            "The channel's privacy level: PUBLIC or PRIVATE. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "The metadata of the creation request. Limited to 1KB and UTF-8",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "The client token for the request. An Idempotency token",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags for the creation request",
          args: {
            name: "list",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-id",
          description: "The ID of the channel in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arns",
          description: "The ARNs of the channel members in the request",
          args: {
            name: "list",
          },
        },
        {
          name: "--moderator-arns",
          description: "The ARNs of the channel moderators in the request",
          args: {
            name: "list",
          },
        },
        {
          name: "--elastic-channel-configuration",
          description:
            "The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million users, excluding moderators",
          args: {
            name: "structure",
          },
        },
        {
          name: "--expiration-settings",
          description:
            "Settings that control the interval after which the channel is automatically deleted",
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
      name: "create-channel-ban",
      description:
        "Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to DeleteChannelBan, and then CreateChannelMembership. Bans are cleaned up when you delete users or channels. If you ban a user who is already part of a channel, that user is automatically kicked from the channel.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the ban request",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description: "The AppInstanceUserArn of the member being banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "create-channel-flow",
      description:
        "Creates a channel flow, a container for processors. Processors are AWS Lambda functions that perform actions on chat messages, such as stripping out profanity. You can associate channel flows with channels, and the processors in the channel flow then take action on all messages sent to that channel. This is a developer API. Channel flows process the following items:   New and updated messages   Persistent and non-persistent messages   The Standard message type    Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to Message types in the Amazon Chime developer guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the channel flow request",
          args: {
            name: "string",
          },
        },
        {
          name: "--processors",
          description: "Information about the processor Lambda functions",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name of the channel flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags for the creation request",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-request-token",
          description: "The client token for the request. An Idempotency token",
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
      name: "create-channel-membership",
      description:
        "Adds a member to a channel. The InvitedBy field in ChannelMembership is derived from the request header. A channel member can:   List messages   Send messages   Receive messages   Edit their own messages   Leave the channel   Privacy settings impact this action as follows:   Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.   Private Channels: You must be a member to list or send messages.    The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel to which you're adding users",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description:
            "The AppInstanceUserArn of the member you want to add to the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned. This is only supported by moderators",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when creating membership in a SubChannel for a moderator in an elastic channel",
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
      name: "create-channel-moderator",
      description:
        "Creates a new ChannelModerator. A channel moderator can:   Add and remove other members of the channel.   Add and remove other moderators of the channel.   Add and remove user bans for the channel.   Redact messages in the channel.   List messages in the channel.    The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBotof the user that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-moderator-arn",
          description: "The AppInstanceUserArn of the moderator",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "delete-channel",
      description:
        "Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUserArn or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "delete-channel-ban",
      description:
        "Removes a member from a channel's ban list.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description:
            "The ARN of the channel from which the AppInstanceUser was banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description:
            "The ARN of the AppInstanceUser that you want to reinstate",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "delete-channel-flow",
      description:
        "Deletes a channel flow, an irreversible process. This is a developer API.   This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the ListChannelsAssociatedWithChannelFlow API. Use the DisassociateChannelFlow API to disassociate a channel flow from all channels",
      options: [
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
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
      name: "delete-channel-membership",
      description:
        "Removes a member from a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description:
            "The ARN of the channel from which you want to remove the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description:
            "The AppInstanceUserArn of the member that you're removing from the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only for use by moderators",
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
      name: "delete-channel-message",
      description:
        "Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The ID of the message being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when deleting messages in a SubChannel that the user belongs to",
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
      name: "delete-channel-moderator",
      description:
        "Deletes a channel moderator.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-moderator-arn",
          description: "The AppInstanceUserArn of the moderator being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "delete-messaging-streaming-configurations",
      description:
        "Deletes the streaming configurations for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the streaming configurations being deleted",
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
      name: "describe-channel",
      description:
        "Returns the full details of a channel in an Amazon Chime AppInstance.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "describe-channel-ban",
      description:
        "Returns the full details of a channel ban.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel from which the user is banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description: "The AppInstanceUserArn of the member being banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "describe-channel-flow",
      description:
        "Returns the full details of a channel flow in an Amazon Chime AppInstance. This is a developer API",
      options: [
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
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
      name: "describe-channel-membership",
      description:
        "Returns the full details of a user's channel membership.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description: "The AppInstanceUserArn of the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request. The response contains an ElasticChannelConfiguration object.  Only required to get a user\u2019s SubChannel membership details",
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
      name: "describe-channel-membership-for-app-instance-user",
      description:
        "Returns the details of a channel based on the membership of the specified AppInstanceUser or AppInstanceBot.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel to which the user belongs",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user or bot in a channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "describe-channel-moderated-by-app-instance-user",
      description:
        "Returns the full details of a channel moderated by the specified AppInstanceUser or AppInstanceBot.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the moderated channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user or bot in the moderated channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "describe-channel-moderator",
      description:
        "Returns the full details of a single ChannelModerator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-moderator-arn",
          description: "The AppInstanceUserArn of the channel moderator",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "disassociate-channel-flow",
      description:
        "Disassociates a channel flow from all its channels. Once disassociated, all messages to that channel stop going through the channel flow processor.  Only administrators or channel moderators can disassociate a channel flow. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description: "The AppInstanceUserArn of the user making the API call",
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
      name: "get-channel-membership-preferences",
      description:
        "Gets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the channel from which they are banned.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description:
            "The AppInstanceUserArn of the member retrieving the preferences",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "get-channel-message",
      description:
        "Gets the full details of a channel message.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The ID of the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when getting messages in a SubChannel that the user belongs to",
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
      name: "get-channel-message-status",
      description:
        "Gets message status for a specified messageId. Use this API to determine the intermediate status of messages going through channel flow processing. The API provides an alternative to retrieving message status if the event was not received because a client wasn't connected to a websocket.  Messages can have any one of these statuses.  SENT  Message processed successfully  PENDING  Ongoing processing  FAILED  Processing failed  DENIED  Message denied by the processor      This API does not return statuses for denied messages, because we don't store them once the processor denies them.    Only the message sender can invoke this API.   The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The ID of the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description: "The AppInstanceUserArn of the user making the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when getting message status in a SubChannel that the user belongs to",
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
      name: "get-messaging-session-endpoint",
      description: "The details of the endpoint for the messaging session",
      options: [
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
      name: "get-messaging-streaming-configurations",
      description:
        "Retrieves the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the streaming configurations",
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
      name: "list-channel-bans",
      description:
        "Lists all the users and bots banned from a particular channel.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of bans that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested bans are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "list-channel-flows",
      description:
        "Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the app instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of channel flows that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested channel flows are returned",
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
      name: "list-channel-memberships",
      description:
        "Lists all channel memberships in a channel.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header.  If you want to list the channels to which a specific app instance user belongs, see the ListChannelMembershipsForAppInstanceUser API",
      options: [
        {
          name: "--channel-arn",
          description:
            "The maximum number of channel memberships that you want returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The membership type of a user, DEFAULT or HIDDEN. Default members are returned as part of ListChannelMemberships if no type is specified. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of channel memberships that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested channel memberships are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when listing a user's memberships in a particular sub-channel of an elastic channel",
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
      name: "list-channel-memberships-for-app-instance-user",
      description:
        "Lists all channels that an AppInstanceUser or AppInstanceBot is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own.   The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user or bot",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of users that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned from previous API requests until the number of channel memberships is reached",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "list-channel-messages",
      description:
        "List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order.  Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort-order",
          description:
            "The order in which you want messages sorted. Default is Descending, based on time created",
          args: {
            name: "string",
          },
        },
        {
          name: "--not-before",
          description:
            "The initial or starting time stamp for your requested messages",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--not-after",
          description:
            "The final or ending time stamp for your requested messages",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of messages that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested messages are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when listing the messages in a SubChannel that the user belongs to",
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
      name: "list-channel-moderators",
      description:
        "Lists all the moderators for a channel.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of moderators that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested moderators are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "list-channels",
      description:
        "Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.  Functionality & restrictions    Use privacy = PUBLIC to retrieve all public channels in the account.   Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account.    The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--privacy",
          description:
            "The privacy setting. PUBLIC retrieves all the public channels. PRIVATE retrieves private channels. Only an AppInstanceAdmin can retrieve private channels",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of channels that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested channels are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "list-channels-associated-with-channel-flow",
      description:
        "Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API",
      options: [
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of channels that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested channels are returned",
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
      name: "list-channels-moderated-by-app-instance-user",
      description:
        "A list of the channels moderated by an AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user or bot in the moderated channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of channels in the request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned from previous API requests until the number of channels moderated by the user is reached",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "list-sub-channels",
      description:
        "Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of elastic channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description: "The AppInstanceUserArn of the user making the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of sub-channels that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested sub-channels are returned",
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
      description:
        "Lists the tags applied to an Amazon Chime SDK messaging resource",
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
      name: "put-channel-expiration-settings",
      description:
        "Sets the number of days before the channel is automatically deleted.    A background process deletes expired channels within 6 hours of expiration. Actual deletion times may vary.   Expired channels that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.   The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiration-settings",
          description:
            "Settings that control the interval after which a channel is deleted",
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
      name: "put-channel-membership-preferences",
      description:
        "Sets the membership preferences of an AppInstanceUser or AppInstanceBot for the specified channel. The user or bot must be a member of the channel. Only the user or bot who owns the membership can set preferences. Users or bots in the AppInstanceAdmin and channel moderator roles can't set preferences for other users. Banned users or bots can't set membership preferences for the channel from which they are banned.  The x-amz-chime-bearer request header is mandatory. Use the ARN of an AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-arn",
          description: "The ARN of the member setting the preferences",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--preferences",
          description:
            "The channel membership preferences of an AppInstanceUser",
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
      name: "put-messaging-streaming-configurations",
      description:
        "Sets the data streaming configuration for an AppInstance. For more information, see Streaming messaging data in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the streaming configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--streaming-configurations",
          description: "The streaming configurations",
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
      name: "redact-channel-message",
      description:
        "Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description:
            "The ARN of the channel containing the messages that you want to redact",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The ID of the message being redacted",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description: "The ID of the SubChannel in the request",
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
      name: "search-channels",
      description:
        "Allows the ChimeBearer to search channels by channel members. Users or bots can search across the channels that they belong to. Users in the AppInstanceAdmin role can search across all channels. The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--chime-bearer",
          description: "The AppInstanceUserArn of the user making the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            "A list of the Field objects in the channel being searched",
          args: {
            name: "list",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of channels that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned from previous API requests until the number of channels is reached",
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
      name: "send-channel-message",
      description:
        "Sends a message to a particular channel that the member is a part of.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header. Also, STANDARD messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.  CONTROL messages are limited to 30 bytes and do not contain metadata",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The content of the channel message",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of message, STANDARD or CONTROL.  STANDARD messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.  CONTROL messages are limited to 30 bytes and do not contain metadata",
          args: {
            name: "string",
          },
        },
        {
          name: "--persistence",
          description:
            "Boolean that controls whether the message is persisted on the back end. Required",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The optional metadata for each message",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "The Idempotency token for each client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--push-notification",
          description: "The push notification configuration of the message",
          args: {
            name: "structure",
          },
        },
        {
          name: "--message-attributes",
          description:
            "The attributes for the message, used for message filtering along with a FilterRule defined in the PushNotificationPreferences",
          args: {
            name: "map",
          },
        },
        {
          name: "--sub-channel-id",
          description: "The ID of the SubChannel in the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description: "The content type of the channel message",
          args: {
            name: "string",
          },
        },
        {
          name: "--target",
          description:
            "The target of a message. Must be a member of the channel, such as another user, a bot, or the sender. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can\u2019t see",
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
      name: "tag-resource",
      description:
        "Applies the specified tags to the specified Amazon Chime SDK messaging resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
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
      name: "untag-resource",
      description:
        "Removes the specified tags from the specified Amazon Chime SDK messaging resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
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
        "Update a channel's attributes.  Restriction: You can't change a channel's privacy.   The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--mode",
          description: "The mode of the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The metadata for the update request",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
      name: "update-channel-flow",
      description: "Updates channel flow attributes. This is a developer API",
      options: [
        {
          name: "--channel-flow-arn",
          description: "The ARN of the channel flow",
          args: {
            name: "string",
          },
        },
        {
          name: "--processors",
          description: "Information about the processor Lambda functions",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name of the channel flow",
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
      name: "update-channel-message",
      description:
        "Updates the content of a message.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The ID string of the message being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description: "The content of the channel message",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The metadata of the message being updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sub-channel-id",
          description:
            "The ID of the SubChannel in the request.  Only required when updating messages in a SubChannel that the user belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-type",
          description: "The content type of the channel message",
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
      name: "update-channel-read-marker",
      description:
        "The details of the time when a user last read messages in a channel.  The x-amz-chime-bearer request header is mandatory. Use the ARN of the AppInstanceUser or AppInstanceBot that makes the API call as the value in the header",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The ARN of the AppInstanceUser or AppInstanceBot that makes the API call",
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
