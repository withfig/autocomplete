const completionSpec: Fig.Spec = {
  name: "chime",
  description:
    "Most of these APIs are no longer supported and will not be updated. We recommend using the latest versions in the Amazon Chime SDK API reference, in the Amazon Chime SDK. Using the latest versions requires migrating to dedicated namespaces. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.  The Amazon Chime application programming interface (API) is designed so administrators can perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice Connectors. This guide provides detailed information about the Amazon Chime API, including operations, types, inputs and outputs, and error codes. You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to make API calls for Amazon Chime. We recommend using an AWS SDK or the AWS CLI. The page for each API action contains a See Also section that includes links to information about using the action with a language-specific AWS SDK or the AWS CLI.  Using an AWS SDK   You don't need to write code to calculate a signature for request authentication. The SDK clients authenticate your requests by using access keys that you provide. For more information about AWS SDKs, see the AWS Developer Center.   Using the AWS CLI  Use your access keys with the AWS CLI to make API calls. For information about setting up the AWS CLI, see Installing the AWS Command Line Interface in the AWS Command Line Interface User Guide. For a list of available Amazon Chime commands, see the Amazon Chime commands in the AWS CLI Command Reference.   Using REST APIs  If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Chime supports Signature Version 4. For more information, see Signature Version 4 Signing Process in the Amazon Web Services General Reference. When making REST API calls, use the service name chime and REST endpoint https://service.chime.aws.amazon.com.   Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see Identity and Access Management for Amazon Chime in the Amazon Chime Administration Guide",
  subcommands: [
    {
      name: "associate-phone-number-with-user",
      description:
        "Associates a phone number with the specified Amazon Chime user",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-number",
          description: "The phone number, in E.164 format",
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
      name: "associate-phone-numbers-with-voice-connector",
      description:
        "Associates phone numbers with the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, AssociatePhoneNumbersWithVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-numbers",
          description: "List of phone numbers, in E.164 format",
          args: {
            name: "list",
          },
        },
        {
          name: "--force-associate",
          description:
            "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations",
        },
        {
          name: "--no-force-associate",
          description:
            "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations",
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
      name: "associate-phone-numbers-with-voice-connector-group",
      description:
        "Associates phone numbers with the specified Amazon Chime Voice Connector group.   This API is is no longer supported and will not be updated. We recommend using the latest version, AssociatePhoneNumbersWithVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-group-id",
          description: "The Amazon Chime Voice Connector group ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-numbers",
          description: "List of phone numbers, in E.164 format",
          args: {
            name: "list",
          },
        },
        {
          name: "--force-associate",
          description:
            "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations",
        },
        {
          name: "--no-force-associate",
          description:
            "If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations",
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
      name: "associate-signin-delegate-groups-with-account",
      description:
        "Associates the specified sign-in delegate groups with the specified Amazon Chime account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--signin-delegate-groups",
          description: "The sign-in delegate groups",
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
      name: "batch-create-attendee",
      description:
        "Creates up to 100 new attendees for an active Amazon Chime SDK meeting.   This API is is no longer supported and will not be updated. We recommend using the latest version, BatchCreateAttendee, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.  For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--attendees",
          description: "The request containing the attendees to create",
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
      name: "batch-create-channel-membership",
      description:
        "Adds a specified number of users to a channel.   This API is is no longer supported and will not be updated. We recommend using the latest version, BatchCreateChannelMembership, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--channel-arn",
          description: "The ARN of the channel to which you're adding users",
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
          description: "The ARNs of the members you want to add to the channel",
          args: {
            name: "list",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "batch-create-room-membership",
      description:
        "Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--membership-item-list",
          description: "The list of membership items",
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
      name: "batch-delete-phone-number",
      description:
        "Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted.   Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently",
      options: [
        {
          name: "--phone-number-ids",
          description: "List of phone number IDs",
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
      name: "batch-suspend-user",
      description:
        "Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action.  To sign out users without suspending them, use the LogoutUser action",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id-list",
          description: "The request containing the user IDs to suspend",
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
      name: "batch-unsuspend-user",
      description:
        "Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account. Only users on EnterpriseLWA accounts can be unsuspended using this action. For more information about different account types, see  Managing Your Amazon Chime Accounts  in the account types, in the Amazon Chime Administration Guide.  Previously suspended users who are unsuspended using this action are returned to Registered status. Users who are not previously suspended are ignored",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id-list",
          description: "The request containing the user IDs to unsuspend",
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
      name: "batch-update-phone-number",
      description:
        "Updates phone number product types or calling names. You can update one attribute at a time for each UpdatePhoneNumberRequestItem. For example, you can update the product type or the calling name. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type. Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update",
      options: [
        {
          name: "--update-phone-number-request-items",
          description:
            "The request containing the phone number IDs and product types or calling names to update",
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
      name: "batch-update-user",
      description:
        "Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only LicenseType updates are supported for this action",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--update-user-request-items",
          description:
            "The request containing the user IDs and details to update",
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
      name: "create-account",
      description:
        "Creates an Amazon Chime account under the administrator's AWS account. Only Team account types are currently supported for this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon Chime account",
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
      name: "create-app-instance",
      description:
        "Creates an Amazon Chime SDK messaging AppInstance under an AWS account. Only SDK messaging customers use this API. CreateAppInstance supports idempotency behavior as described in the AWS API Standard.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateAppInstance, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "The metadata of the AppInstance. Limited to a 1KB string in UTF-8",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "The ClientRequestToken of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags assigned to the AppInstance",
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
      name: "create-app-instance-admin",
      description:
        "Promotes an AppInstanceUser to an AppInstanceAdmin. The promoted user can perform the following actions.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateAppInstanceAdmin, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.     ChannelModerator actions across all channels in the AppInstance.    DeleteChannelMessage actions.   Only an AppInstanceUser can be promoted to an AppInstanceAdmin role",
      options: [
        {
          name: "--app-instance-admin-arn",
          description:
            "The ARN of the administrator of the current AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "create-app-instance-user",
      description:
        "Creates a user under an Amazon Chime AppInstance. The request consists of a unique appInstanceUserId and Name for that user.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance request",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-user-id",
          description: "The user ID of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The user's name",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "The request's metadata. Limited to a 1KB string in UTF-8",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description:
            "The token assigned to the user requesting an AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "Tags assigned to the AppInstanceUser",
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
      name: "create-attendee",
      description:
        "Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateAttendee, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-user-id",
          description:
            "The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application",
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
      name: "create-bot",
      description: "Creates a bot for an Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The bot display name",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain",
          description: "The domain of the Amazon Chime Enterprise account",
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
      name: "create-channel",
      description:
        "Creates a channel to which you can add users and send messages.  Restriction: You can't change a channel's privacy.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateChannel, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "create-channel-ban",
      description:
        "Permanently bans a member from a channel. Moderators can't add banned members to a channel. To undo a ban, you first have to DeleteChannelBan, and then CreateChannelMembership. Bans are cleaned up when you delete users or channels. If you ban a user who is already part of a channel, that user is automatically kicked from the channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateChannelBan, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the member being banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Adds a user to a channel. The InvitedBy response field is derived from the request header. A channel member can:   List messages   Send messages   Receive messages   Edit their own messages   Leave the channel   Privacy settings impact this action as follows:   Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.   Private Channels: You must be a member to list or send messages.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateChannelMembership, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the member you want to add to the channel",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Creates a new ChannelModerator. A channel moderator can:   Add and remove other members of the channel.   Add and remove other moderators of the channel.   Add and remove user bans for the channel.   Redact messages in the channel.   List messages in the channel.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateChannelModerator, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the moderator",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "create-media-capture-pipeline",
      description:
        "Creates a media capture pipeline.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateMediaCapturePipeline, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--source-type",
          description:
            "Source type from which the media artifacts will be captured. A Chime SDK Meeting is the only supported source",
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
            "The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-sdk-meeting-configuration",
          description:
            "The configuration for a specified media capture pipeline. SourceType must be ChimeSdkMeeting",
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
        "Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime SDK Developer Guide . For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateMeeting, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          name: "--external-meeting-id",
          description: "The external meeting ID",
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
          name: "--media-region",
          description:
            "The Region in which to create the meeting. Default: us-east-1.   Available values: af-south-1 , ap-northeast-1 , ap-northeast-2 , ap-south-1 , ap-southeast-1 , ap-southeast-2 , ca-central-1 , eu-central-1 , eu-north-1 , eu-south-1 , eu-west-1 , eu-west-2 , eu-west-3 , sa-east-1 , us-east-1 , us-east-2 , us-west-1 , us-west-2",
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
          name: "--notifications-configuration",
          description:
            "The configuration for resource targets to receive notifications when meeting and attendee events occur",
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
      name: "create-meeting-dial-out",
      description:
        "Uses the join token and call metadata in a meeting request (From number, To number, and so forth) to initiate an outbound call to a public switched telephone network (PSTN) and join them into a Chime meeting. Also ensures that the From number belongs to the customer. To play welcome audio or implement an interactive voice response (IVR), use the CreateSipMediaApplicationCall action with the corresponding SIP media application ID.   This API is is not available in a dedicated namespace",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--from-phone-number",
          description:
            "Phone number used as the caller ID when the remote party receives a call",
          args: {
            name: "string",
          },
        },
        {
          name: "--to-phone-number",
          description: "Phone number called when inviting someone to a meeting",
          args: {
            name: "string",
          },
        },
        {
          name: "--join-token",
          description:
            "Token used by the Amazon Chime SDK attendee. Call the CreateAttendee action to get a join token",
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
      name: "create-meeting-with-attendees",
      description:
        "Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see Amazon Chime SDK Media Regions in the Amazon Chime SDK Developer Guide . For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide .    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateMeetingWithAttendees, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          name: "--external-meeting-id",
          description: "The external meeting ID",
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
          name: "--media-region",
          description:
            "The Region in which to create the meeting. Default: us-east-1 .   Available values: af-south-1 , ap-northeast-1 , ap-northeast-2 , ap-south-1 , ap-southeast-1 , ap-southeast-2 , ca-central-1 , eu-central-1 , eu-north-1 , eu-south-1 , eu-west-1 , eu-west-2 , eu-west-3 , sa-east-1 , us-east-1 , us-east-2 , us-west-1 , us-west-2",
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
          name: "--notifications-configuration",
          description:
            "The resource target configurations for receiving Amazon Chime SDK meeting and attendee event notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS Region (us-east-1)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--attendees",
          description: "The request containing the attendees to create",
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
      name: "create-phone-number-order",
      description:
        "Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type",
      options: [
        {
          name: "--product-type",
          description: "The phone number product type",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-numbers",
          description: "List of phone numbers, in E.164 format",
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
      name: "create-proxy-session",
      description:
        "Creates a proxy session on the specified Amazon Chime Voice Connector for the specified participant phone numbers.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateProxySession, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--participant-phone-numbers",
          description: "The participant phone numbers",
          args: {
            name: "list",
          },
        },
        {
          name: "--name",
          description: "The name of the proxy session",
          args: {
            name: "string",
          },
        },
        {
          name: "--expiry-minutes",
          description: "The number of minutes allowed for the proxy session",
          args: {
            name: "integer",
          },
        },
        {
          name: "--capabilities",
          description: "The proxy session capabilities",
          args: {
            name: "list",
          },
        },
        {
          name: "--number-selection-behavior",
          description:
            "The preference for proxy phone number reuse, or stickiness, between the same participants across sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--geo-match-level",
          description:
            "The preference for matching the country or area code of the proxy phone number with that of the first participant",
          args: {
            name: "string",
          },
        },
        {
          name: "--geo-match-params",
          description: "The country and area code for the proxy phone number",
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
      name: "create-room",
      description:
        "Creates a chat room for the specified Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The room name",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-request-token",
          description: "The idempotency token for the request",
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
      name: "create-room-membership",
      description:
        "Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The Amazon Chime member ID (user ID or bot ID)",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role of the member",
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
      name: "create-sip-media-application",
      description:
        "Creates a SIP media application.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateSipMediaApplication, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--aws-region",
          description: "The AWS Region assigned to the SIP media application",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The SIP media application name",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoints",
          description:
            "List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported",
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
      name: "create-sip-media-application-call",
      description:
        "Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified sipMediaApplicationId.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateSipMediaApplicationCall, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--from-phone-number",
          description:
            "The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory",
          args: {
            name: "string",
          },
        },
        {
          name: "--to-phone-number",
          description: "The phone number that the service should call",
          args: {
            name: "string",
          },
        },
        {
          name: "--sip-media-application-id",
          description: "The ID of the SIP media application",
          args: {
            name: "string",
          },
        },
        {
          name: "--sip-headers",
          description: "The SIP headers added to an outbound call leg",
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
      name: "create-sip-rule",
      description:
        "Creates a SIP rule which can be used to run a SIP media application as a target for a specific trigger type.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateSipRule, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the SIP rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-type",
          description:
            "The type of trigger assigned to the SIP rule in TriggerValue, currently RequestUriHostname or ToPhoneNumber",
          args: {
            name: "string",
          },
        },
        {
          name: "--trigger-value",
          description:
            "If TriggerType is RequestUriHostname, the value can be the outbound host name of an Amazon Chime Voice Connector. If TriggerType is ToPhoneNumber, the value can be a customer-owned phone number in the E164 format. The SipMediaApplication specified in the SipRule is triggered if the request URI in an incoming SIP request matches the RequestUriHostname, or if the To header in the incoming SIP request matches the ToPhoneNumber value",
          args: {
            name: "string",
          },
        },
        {
          name: "--disabled",
          description:
            "Enables or disables a rule. You must disable rules before you can delete them",
        },
        {
          name: "--no-disabled",
          description:
            "Enables or disables a rule. You must disable rules before you can delete them",
        },
        {
          name: "--target-applications",
          description:
            "List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used",
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
      name: "create-user",
      description: "Creates a user under the specified Amazon Chime account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The user name",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The user's email address",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description: "The user type",
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
      name: "create-voice-connector",
      description:
        "Creates an Amazon Chime Voice Connector under the administrator's AWS account. You can choose to create an Amazon Chime Voice Connector in a specific AWS Region. Enabling CreateVoiceConnectorRequest$RequireEncryption configures your Amazon Chime Voice Connector to use TLS transport for SIP signaling and Secure RTP (SRTP) for media. Inbound calls use TLS transport, and unencrypted outbound calls are blocked.    This API is is no longer supported and will not be updated. We recommend using the latest version, CreateVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon Chime Voice Connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-region",
          description:
            "The AWS Region in which the Amazon Chime Voice Connector is created. Default value: us-east-1",
          args: {
            name: "string",
          },
        },
        {
          name: "--require-encryption",
          description:
            "When enabled, requires encryption for the Amazon Chime Voice Connector",
        },
        {
          name: "--no-require-encryption",
          description:
            "When enabled, requires encryption for the Amazon Chime Voice Connector",
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
      name: "create-voice-connector-group",
      description:
        "Creates an Amazon Chime Voice Connector group under the administrator's AWS account. You can associate Amazon Chime Voice Connectors with the Amazon Chime Voice Connector group by including VoiceConnectorItems in the request. You can include Amazon Chime Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.   This API is is no longer supported and will not be updated. We recommend using the latest version, CreateVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--name",
          description: "The name of the Amazon Chime Voice Connector group",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-connector-items",
          description:
            "The Amazon Chime Voice Connectors to route inbound calls to",
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
      name: "delete-account",
      description:
        "Deletes the specified Amazon Chime account. You must suspend all users before deleting Team account. You can use the BatchSuspendUser action to dodo. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
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
      name: "delete-app-instance",
      description:
        "Deletes an AppInstance and all associated data asynchronously.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteAppInstance, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "delete-app-instance-admin",
      description:
        "Demotes an AppInstanceAdmin to an AppInstanceUser. This action does not delete the user.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteAppInstanceAdmin, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-admin-arn",
          description: "The ARN of the AppInstance's administrator",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "delete-app-instance-streaming-configurations",
      description:
        "Deletes the streaming configurations of an AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteAppInstanceStreamingConfigurations, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "delete-app-instance-user",
      description:
        "Deletes an AppInstanceUser.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user request being deleted",
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
      name: "delete-attendee",
      description:
        "Deletes an attendee from the specified Amazon Chime SDK meeting and deletes their JoinToken. Attendees are automatically deleted when a Amazon Chime SDK meeting is deleted. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteAttendee, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "delete-channel",
      description:
        "Immediately makes a channel and its memberships inaccessible and marks them for deletion. This is an irreversible process.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteChannel, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Removes a user from a channel's ban list.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteChannelBan, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Removes a member from a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteChannelMembership, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The ARN of the member that you're removing from the channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Deletes a channel message. Only admins can perform this action. Deletion makes messages inaccessible immediately. A background process deletes any revisions created by UpdateChannelMessage.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteChannelMessage, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Deletes a channel moderator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteChannelModerator, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the moderator being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "delete-events-configuration",
      description:
        "Deletes the events configuration that allows a bot to receive outgoing events",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
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
      name: "delete-media-capture-pipeline",
      description:
        "Deletes the media capture pipeline.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteMediaCapturePipeline, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--media-pipeline-id",
          description: "The ID of the media capture pipeline being deleted",
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
        "Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from joining the meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteMeeting, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "delete-phone-number",
      description:
        "Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently",
      options: [
        {
          name: "--phone-number-id",
          description: "The phone number ID",
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
      name: "delete-proxy-session",
      description:
        "Deletes the specified proxy session from the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteProxySession, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-session-id",
          description: "The proxy session ID",
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
      name: "delete-room",
      description: "Deletes a chat room in an Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The chat room ID",
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
      name: "delete-room-membership",
      description:
        "Removes a member from a chat room in an Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The member ID (user ID or bot ID)",
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
      name: "delete-sip-media-application",
      description:
        "Deletes a SIP media application.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteSipMediaApplication, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
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
      name: "delete-sip-rule",
      description:
        "Deletes a SIP rule. You must disable a SIP rule before you can delete it.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteSipRule, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-rule-id",
          description: "The SIP rule ID",
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
      name: "delete-voice-connector",
      description:
        "Deletes the specified Amazon Chime Voice Connector. Any phone numbers associated with the Amazon Chime Voice Connector must be disassociated from it before it can be deleted.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-emergency-calling-configuration",
      description:
        "Deletes the emergency calling configuration details from the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorEmergencyCallingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-group",
      description:
        "Deletes the specified Amazon Chime Voice Connector group. Any VoiceConnectorItems and phone numbers associated with the group must be removed before it can be deleted.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-group-id",
          description: "The Amazon Chime Voice Connector group ID",
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
      name: "delete-voice-connector-origination",
      description:
        "Deletes the origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the origination settings.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorOrigination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-proxy",
      description:
        "Deletes the proxy configuration from the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceProxy, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-streaming-configuration",
      description:
        "Deletes the streaming configuration for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorStreamingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-termination",
      description:
        "Deletes the termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to deleting the termination settings.    This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorTermination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "delete-voice-connector-termination-credentials",
      description:
        "Deletes the specified SIP credentials used by your equipment to authenticate during call termination.   This API is is no longer supported and will not be updated. We recommend using the latest version, DeleteVoiceConnectorTerminationCredentials, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--usernames",
          description:
            "The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format",
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
      name: "describe-app-instance",
      description:
        "Returns the full details of an AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeAppInstance, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "describe-app-instance-admin",
      description:
        "Returns the full details of an AppInstanceAdmin.   This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeAppInstanceAdmin, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-admin-arn",
          description: "The ARN of the AppInstanceAdmin",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "describe-app-instance-user",
      description:
        "Returns the full details of an AppInstanceUser.   This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the AppInstanceUser",
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
        "Returns the full details of a channel in an Amazon Chime AppInstance.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannel, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Returns the full details of a channel ban.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannelBan, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the member being banned",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Returns the full details of a user's channel membership.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannelMembership, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the member",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Returns the details of a channel based on the membership of the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannelMembershipForAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the user in a channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Returns the full details of a channel moderated by the specified AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannelModeratedByAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description:
            "The ARN of the AppInstanceUser in the moderated channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Returns the full details of a single ChannelModerator.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, DescribeChannelModerator, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The ARN of the channel moderator",
          args: {
            name: "string",
          },
        },
        {
          name: "--chime-bearer",
          description:
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "disassociate-phone-number-from-user",
      description:
        "Disassociates the primary provisioned phone number from the specified Amazon Chime user",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
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
      name: "disassociate-phone-numbers-from-voice-connector",
      description:
        "Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, DisassociatePhoneNumbersFromVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-numbers",
          description: "List of phone numbers, in E.164 format",
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
      name: "disassociate-phone-numbers-from-voice-connector-group",
      description:
        "Disassociates the specified phone numbers from the specified Amazon Chime Voice Connector group.   This API is is no longer supported and will not be updated. We recommend using the latest version, DisassociatePhoneNumbersFromVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-group-id",
          description: "The Amazon Chime Voice Connector group ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--e164-phone-numbers",
          description: "List of phone numbers, in E.164 format",
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
      name: "disassociate-signin-delegate-groups-from-account",
      description:
        "Disassociates the specified sign-in delegate groups from the specified Amazon Chime account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-names",
          description: "The sign-in delegate group names",
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
      name: "get-account",
      description:
        "Retrieves details for the specified Amazon Chime account, such as account type and supported licenses",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
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
      name: "get-account-settings",
      description:
        "Retrieves account settings for the specified Amazon Chime account ID, such as remote control and dialout settings. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
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
      name: "get-app-instance-retention-settings",
      description:
        "Gets the retention settings for an AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetMessagingRetentionSettings, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
      name: "get-app-instance-streaming-configurations",
      description:
        "Gets the streaming settings for an AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetMessagingStreamingConfigurations, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
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
        "Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.    This API is is no longer supported and will not be updated. We recommend using the latest version, GetAttendee, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "get-bot",
      description:
        "Retrieves details for the specified bot, such as bot email address, bot type, status, and display name",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
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
        "Gets the full details of a channel message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, GetChannelMessage, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "get-events-configuration",
      description:
        "Gets details for an events configuration that allows a bot to receive outgoing events, such as an HTTPS endpoint or Lambda function ARN",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
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
      name: "get-global-settings",
      description:
        "Retrieves global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings",
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
      name: "get-media-capture-pipeline",
      description:
        "Gets an existing media capture pipeline.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetMediaCapturePipeline, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "get-meeting",
      description:
        "This API is is no longer supported and will not be updated. We recommend using the latest version, GetMeeting, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.   Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide",
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
      name: "get-messaging-session-endpoint",
      description:
        "The details of the endpoint for the messaging session.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetMessagingSessionEndpoint, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "get-phone-number",
      description:
        "Retrieves details for the specified phone number ID, such as associations, capabilities, and product type",
      options: [
        {
          name: "--phone-number-id",
          description: "The phone number ID",
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
      name: "get-phone-number-order",
      description:
        "Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status",
      options: [
        {
          name: "--phone-number-order-id",
          description: "The ID for the phone number order",
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
      name: "get-phone-number-settings",
      description:
        "Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name",
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
      name: "get-proxy-session",
      description:
        "Gets the specified proxy session details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetProxySession, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-session-id",
          description: "The proxy session ID",
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
      name: "get-retention-settings",
      description:
        "Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
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
      name: "get-room",
      description:
        "Retrieves room details, such as the room name, for a room in an Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
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
      name: "get-sip-media-application",
      description:
        "Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetSipMediaApplication, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
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
      name: "get-sip-media-application-logging-configuration",
      description:
        "Returns the logging configuration for the specified SIP media application.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetSipMediaApplicationLoggingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
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
      name: "get-sip-rule",
      description:
        "Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetSipRule, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-rule-id",
          description: "The SIP rule ID",
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
      name: "get-user",
      description:
        "Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN.  To retrieve user details with an email address instead of a user ID, use the ListUsers action, and then filter by email address",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
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
      name: "get-user-settings",
      description:
        "Retrieves settings for the specified user ID, such as any associated phone number settings",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
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
      name: "get-voice-connector",
      description:
        "Retrieves details for the specified Amazon Chime Voice Connector, such as timestamps,name, outbound host, and encryption requirements.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-emergency-calling-configuration",
      description:
        "Gets the emergency calling configuration details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorEmergencyCallingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-group",
      description:
        "Retrieves details for the specified Amazon Chime Voice Connector group, such as timestamps,name, and associated VoiceConnectorItems.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-group-id",
          description: "The Amazon Chime Voice Connector group ID",
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
      name: "get-voice-connector-logging-configuration",
      description:
        "Retrieves the logging configuration details for the specified Amazon Chime Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorLoggingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-origination",
      description:
        "Retrieves origination setting details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorOrigination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-proxy",
      description:
        "Gets the proxy configuration details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorProxy, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
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
      name: "get-voice-connector-streaming-configuration",
      description:
        "Retrieves the streaming configuration details for the specified Amazon Chime Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorStreamingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-termination",
      description:
        "Retrieves termination setting details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorTermination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "get-voice-connector-termination-health",
      description:
        "This API is is no longer supported and will not be updated. We recommend using the latest version, GetVoiceConnectorTerminationHealth, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide.  Retrieves information about the last time a SIP OPTIONS ping was received from your SIP infrastructure for the specified Amazon Chime Voice Connector",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "invite-users",
      description:
        "Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-email-list",
          description:
            "The user email addresses to which to send the email invitation",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-type",
          description: "The user type",
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
      name: "list-accounts",
      description:
        "Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result",
      options: [
        {
          name: "--name",
          description:
            "Amazon Chime account name prefix with which to filter results",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-email",
          description: "User email address with which to filter results",
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
            "The maximum number of results to return in a single call. Defaults to 100",
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
      name: "list-app-instance-admins",
      description:
        "Returns a list of the administrators in the AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListAppInstanceAdmins, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of administrators that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned from previous API requests until the number of administrators is reached",
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
      name: "list-app-instance-users",
      description:
        "List all AppInstanceUsers created under a single AppInstance.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListAppInstanceUsers, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of requests that you want returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API calls until all requested users are returned",
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
      name: "list-app-instances",
      description:
        "Lists all Amazon Chime AppInstances created under a single AWS account.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListAppInstances, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of AppInstances that you want to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token passed by previous API requests until you reach the maximum number of AppInstances",
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
      name: "list-attendee-tags",
      description:
        "Lists the tags applied to an Amazon Chime SDK attendee resource.  ListAttendeeTags is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API",
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
      name: "list-attendees",
      description:
        "Lists the attendees for the specified Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListAttendees, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "list-bots",
      description:
        "Lists the bots associated with the administrator's Amazon Chime Enterprise account ID",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. The default is 10",
          args: {
            name: "integer",
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
        "Lists all the users banned from a particular channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelBans, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Lists all channel memberships in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelMemberships, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The membership type of a user, DEFAULT or HIDDEN. Default members are always returned as part of ListChannelMemberships. Hidden members are only returned if the type filter in ListChannelMemberships equals HIDDEN. Otherwise hidden members are not returned",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Lists all channels that a particular AppInstanceUser is a part of. Only an AppInstanceAdmin can call the API with a user ARN that is not their own.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelMembershipsForAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the AppInstanceUsers",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "List all the messages in a channel. Returns a paginated list of ChannelMessages. By default, sorted by creation timestamp in descending order.  Redacted messages appear in the results as empty, since they are only redacted, not deleted. Deleted messages do not appear in the results. This action always returns the latest version of an edited message. Also, the x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelMessages, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Lists all the moderators for a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelModerators, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Lists all Channels created under a single Chime App as a paginated list. You can specify filters to narrow results.  Functionality & restrictions    Use privacy = PUBLIC to retrieve all public channels in the account.   Only an AppInstanceAdmin can set privacy = PRIVATE to list the private channels in an account.    The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannels, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "A list of the channels moderated by an AppInstanceUser.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, ListChannelsModeratedByAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the user in the moderated channel",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
      description:
        "Returns a list of media capture pipelines.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListMediaCapturePipelines, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "list-meeting-tags",
      description:
        "Lists the tags applied to an Amazon Chime SDK meeting resource.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListTagsForResource, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "list-meetings",
      description:
        "Lists up to 100 active Amazon Chime SDK meetings.  ListMeetings is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API.  For more information about the Amazon Chime SDK, see Using the Amazon Chime SDK in the Amazon Chime SDK Developer Guide",
      options: [
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
      name: "list-phone-number-orders",
      description:
        "Lists the phone number orders for the administrator's Amazon Chime account",
      options: [
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
      name: "list-phone-numbers",
      description:
        "Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group",
      options: [
        {
          name: "--status",
          description: "The phone number status",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-type",
          description: "The phone number product type",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-name",
          description: "The filter to use to limit the number of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--filter-value",
          description: "The value to use for the filter",
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
          name: "--next-token",
          description: "The token to use to retrieve the next page of results",
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
      name: "list-proxy-sessions",
      description:
        "Lists the proxy sessions for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListProxySessions, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--status",
          description: "The proxy session status",
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
      name: "list-room-memberships",
      description:
        "Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
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
          name: "--next-token",
          description: "The token to use to retrieve the next page of results",
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
      name: "list-rooms",
      description:
        "Lists the room details for the specified Amazon Chime Enterprise account. Optionally, filter the results by a member ID (user ID or bot ID) to see a list of rooms that the member belongs to",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The member ID (user ID or bot ID)",
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
          name: "--next-token",
          description: "The token to use to retrieve the next page of results",
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
      name: "list-sip-media-applications",
      description:
        "Lists the SIP media applications under the administrator's AWS account.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListSipMediaApplications, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Defaults to 100",
          args: {
            name: "integer",
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
      name: "list-sip-rules",
      description:
        "Lists the SIP rules under the administrator's AWS account.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListSipRules, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Defaults to 100",
          args: {
            name: "integer",
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
      name: "list-supported-phone-number-countries",
      description: "Lists supported phone number countries",
      options: [
        {
          name: "--product-type",
          description: "The phone number product type",
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
        "Lists the tags applied to an Amazon Chime SDK meeting and messaging resources.   This API is is no longer supported and will not be updated. We recommend using the applicable latest version in the Amazon Chime SDK.   For meetings: ListTagsForResource.   For messaging: ListTagsForResource.   Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
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
      name: "list-users",
      description:
        "Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-email",
          description:
            "Optional. The user email address used to filter results. Maximum 1",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description: "The user type",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call. Defaults to 100",
          args: {
            name: "integer",
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
      name: "list-voice-connector-groups",
      description:
        "Lists the Amazon Chime Voice Connector groups for the administrator's AWS account.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListVoiceConnectorGroups, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
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
      name: "list-voice-connector-termination-credentials",
      description:
        "Lists the SIP credentials for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListVoiceConnectorTerminationCredentials, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
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
      name: "list-voice-connectors",
      description:
        "Lists the Amazon Chime Voice Connectors for the administrator's AWS account.   This API is is no longer supported and will not be updated. We recommend using the latest version, ListVoiceConnectors, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
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
      name: "logout-user",
      description:
        "Logs out the specified user from all of the devices they are currently logged into",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
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
      name: "put-app-instance-retention-settings",
      description:
        "Sets the amount of time in days that a given AppInstance retains data.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutAppInstanceRetentionSettings, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-retention-settings",
          description: "The time in days to retain data. Data type: number",
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
      name: "put-app-instance-streaming-configurations",
      description:
        "The data streaming configurations of an AppInstance.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutMessagingStreamingConfigurations, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--app-instance-streaming-configurations",
          description: "The streaming configurations set for an AppInstance",
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
      name: "put-events-configuration",
      description:
        "Creates an events configuration that allows a bot to receive outgoing events sent by Amazon Chime. Choose either an HTTPS endpoint or a Lambda function ARN. For more information, see Bot",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--outbound-events-https-endpoint",
          description:
            "HTTPS endpoint that allows the bot to receive outgoing events",
          args: {
            name: "string",
          },
        },
        {
          name: "--lambda-function-arn",
          description:
            "Lambda function ARN that allows the bot to receive outgoing events",
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
      name: "put-retention-settings",
      description:
        "Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see Logging Amazon Chime API Calls with AWS CloudTrail in the Amazon Chime Administration Guide.  To turn off existing retention settings, remove the number of days from the corresponding RetentionDays field in the RetentionSettings object. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--retention-settings",
          description: "The retention settings",
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
      name: "put-sip-media-application-logging-configuration",
      description:
        "Updates the logging configuration for the specified SIP media application.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutSipMediaApplicationLoggingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--sip-media-application-logging-configuration",
          description: "The actual logging configuration",
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
      name: "put-voice-connector-emergency-calling-configuration",
      description:
        "Puts emergency calling configuration details to the specified Amazon Chime Voice Connector, such as emergency phone numbers and calling countries. Origination and termination settings must be enabled for the Amazon Chime Voice Connector before emergency calling can be configured.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorEmergencyCallingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--emergency-calling-configuration",
          description: "The emergency calling configuration details",
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
      name: "put-voice-connector-logging-configuration",
      description:
        "Adds a logging configuration for the specified Amazon Chime Voice Connector. The logging configuration specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorLoggingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-configuration",
          description: "The logging configuration details to add",
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
      name: "put-voice-connector-origination",
      description:
        "Adds origination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off origination settings.    This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorOrigination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--origination",
          description: "The origination setting details to add",
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
      name: "put-voice-connector-proxy",
      description:
        "Puts the specified proxy configuration to the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorProxy, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-session-expiry-minutes",
          description:
            "The default number of minutes allowed for proxy sessions",
          args: {
            name: "integer",
          },
        },
        {
          name: "--phone-number-pool-countries",
          description:
            "The countries for proxy phone numbers to be selected from",
          args: {
            name: "list",
          },
        },
        {
          name: "--fall-back-phone-number",
          description:
            "The phone number to route calls to after a proxy session expires",
          args: {
            name: "string",
          },
        },
        {
          name: "--disabled",
          description:
            "When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector",
        },
        {
          name: "--no-disabled",
          description:
            "When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector",
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
      name: "put-voice-connector-streaming-configuration",
      description:
        "Adds a streaming configuration for the specified Amazon Chime Voice Connector. The streaming configuration specifies whether media streaming is enabled for sending to Kinesis. It also sets the retention period, in hours, for the Amazon Kinesis data.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorStreamingConfiguration, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--streaming-configuration",
          description: "The streaming configuration details to add",
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
      name: "put-voice-connector-termination",
      description:
        "Adds termination settings for the specified Amazon Chime Voice Connector.  If emergency calling is configured for the Amazon Chime Voice Connector, it must be deleted prior to turning off termination settings.    This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorTermination, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--termination",
          description: "The termination setting details to add",
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
      name: "put-voice-connector-termination-credentials",
      description:
        "Adds termination SIP credentials for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, PutVoiceConnectorTerminationCredentials, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--credentials",
          description: "The termination SIP credentials",
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
        "Redacts message content, but not metadata. The message exists in the back end, but the action returns null content, and the state shows as redacted.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, RedactChannelMessage, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "redact-conversation-message",
      description:
        "Redacts the specified message from the specified Amazon Chime conversation",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--conversation-id",
          description: "The conversation ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The message ID",
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
      name: "redact-room-message",
      description:
        "Redacts the specified message from the specified Amazon Chime channel",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-id",
          description: "The message ID",
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
      name: "regenerate-security-token",
      description: "Regenerates the security token for a bot",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
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
      name: "reset-personal-pin",
      description:
        "Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
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
      name: "restore-phone-number",
      description:
        "Moves a phone number from the Deletion queue back into the phone number Inventory",
      options: [
        {
          name: "--phone-number-id",
          description: "The phone number",
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
      name: "search-available-phone-numbers",
      description:
        "Searches for phone numbers that can be ordered. For US numbers, provide at least one of the following search filters: AreaCode, City, State, or TollFreePrefix. If you provide City, you must also provide State. Numbers outside the US only support the PhoneNumberType filter, which you must use",
      options: [
        {
          name: "--area-code",
          description:
            "The area code used to filter results. Only applies to the US",
          args: {
            name: "string",
          },
        },
        {
          name: "--city",
          description:
            "The city used to filter results. Only applies to the US",
          args: {
            name: "string",
          },
        },
        {
          name: "--country",
          description:
            "The country used to filter results. Defaults to the US Format: ISO 3166-1 alpha-2",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "The state used to filter results. Required only if you provide City. Only applies to the US",
          args: {
            name: "string",
          },
        },
        {
          name: "--toll-free-prefix",
          description:
            "The toll-free prefix that you use to filter results. Only applies to the US",
          args: {
            name: "string",
          },
        },
        {
          name: "--phone-number-type",
          description:
            "The phone number type used to filter results. Required for non-US numbers",
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
          name: "--next-token",
          description: "The token used to retrieve the next page of results",
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
        "Sends a message to a particular channel that the member is a part of.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header. Also, STANDARD messages can contain 4KB of data and the 1KB of metadata. CONTROL messages can contain 30 bytes of data and no metadata.    This API is is no longer supported and will not be updated. We recommend using the latest version, SendChannelMessage, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The content of the message",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of message, STANDARD or CONTROL",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Starts transcription for the specified meetingId. For more information, refer to  Using Amazon Chime SDK live transcription  in the Amazon Chime SDK Developer Guide. If you specify an invalid configuration, a TranscriptFailed event will be sent with the contents of the BadRequestException generated by Amazon Transcribe. For more information on each parameter and which combinations are valid, refer to the StartStreamTranscription API in the Amazon Transcribe Developer Guide.  Amazon Chime SDK live transcription is powered by Amazon Transcribe. Use of Amazon Transcribe is subject to the AWS Service Terms, including the terms specific to the AWS Machine Learning and Artificial Intelligence Services.    This API is is no longer supported and will not be updated. We recommend using the latest version, StartMeetingTranscription, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
        "Stops transcription for the specified meetingId.   This API is is no longer supported and will not be updated. We recommend using the latest version, StopMeetingTranscription, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "tag-attendee",
      description:
        "Applies the specified tags to the specified Amazon Chime attendee.  TagAttendee is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API",
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
      name: "tag-meeting",
      description:
        "Applies the specified tags to the specified Amazon Chime SDK meeting.   This API is is no longer supported and will not be updated. We recommend using the latest version, TagResource, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
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
      name: "tag-resource",
      description:
        "Applies the specified tags to the specified Amazon Chime SDK meeting resource.   This API is is no longer supported and will not be updated. We recommend using the latest version, TagResource, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "untag-attendee",
      description:
        "Untags the specified tags from the specified Amazon Chime SDK attendee.  UntagAttendee is not supported in the Amazon Chime SDK Meetings Namespace. Update your application to remove calls to this API",
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
      name: "untag-meeting",
      description:
        "Untags the specified tags from the specified Amazon Chime SDK meeting.   This API is is no longer supported and will not be updated. We recommend using the latest version, UntagResource, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--meeting-id",
          description: "The Amazon Chime SDK meeting ID",
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
      name: "untag-resource",
      description:
        "Untags the specified tags from the specified Amazon Chime SDK meeting resource. Applies the specified tags to the specified Amazon Chime SDK meeting resource.   This API is is no longer supported and will not be updated. We recommend using the latest version, UntagResource, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
      name: "update-account",
      description:
        "Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name for the specified Amazon Chime account",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-license",
          description:
            "The default license applied when you add users to an Amazon Chime account",
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
      name: "update-account-settings",
      description:
        "Updates the settings for the specified Amazon Chime account. You can update settings for remote control of shared screens, or for the dial-out option. For more information about these settings, see Use the Policies Page in the Amazon Chime Administration Guide",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-settings",
          description: "The Amazon Chime account settings to update",
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
      name: "update-app-instance",
      description:
        "Updates AppInstance metadata.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateAppInstance, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-arn",
          description: "The ARN of the AppInstance",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name that you want to change",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The metadata that you want to change",
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
      name: "update-app-instance-user",
      description:
        "Updates the details of an AppInstanceUser. You can update names and metadata.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateAppInstanceUser, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--app-instance-user-arn",
          description: "The ARN of the AppInstanceUser",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the AppInstanceUser",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description: "The metadata of the AppInstanceUser",
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
      name: "update-bot",
      description:
        "Updates the status of the specified bot, such as starting or stopping the bot from running in your Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--bot-id",
          description: "The bot ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--disabled",
          description:
            "When true, stops the specified bot from running in your account",
        },
        {
          name: "--no-disabled",
          description:
            "When true, stops the specified bot from running in your account",
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
        "Update a channel's attributes.  Restriction: You can't change a channel's privacy.   The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateChannel, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "Updates the content of a message.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateChannelMessage, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
          description: "The content of the message being updated",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
        "The details of the time when a user last read messages in a channel.  The x-amz-chime-bearer request header is mandatory. Use the AppInstanceUserArn of the user that makes the API call as the value in the header.    This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateChannelReadMarker, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
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
            "The AppInstanceUserArn of the user that makes the API call",
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
      name: "update-global-settings",
      description:
        "Updates global settings for the administrator's AWS account, such as Amazon Chime Business Calling and Amazon Chime Voice Connector settings",
      options: [
        {
          name: "--business-calling",
          description: "The Amazon Chime Business Calling settings",
          args: {
            name: "structure",
          },
        },
        {
          name: "--voice-connector",
          description: "The Amazon Chime Voice Connector settings",
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
      name: "update-phone-number",
      description:
        "Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type. Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update",
      options: [
        {
          name: "--phone-number-id",
          description: "The phone number ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--product-type",
          description: "The product type",
          args: {
            name: "string",
          },
        },
        {
          name: "--calling-name",
          description:
            "The outbound calling name associated with the phone number",
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
      name: "update-phone-number-settings",
      description:
        "Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update",
      options: [
        {
          name: "--calling-name",
          description: "The default outbound calling name for the account",
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
      name: "update-proxy-session",
      description:
        "Updates the specified proxy session details, such as voice or SMS capabilities.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateProxySession, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime voice connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--proxy-session-id",
          description: "The proxy session ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description: "The proxy session capabilities",
          args: {
            name: "list",
          },
        },
        {
          name: "--expiry-minutes",
          description: "The number of minutes allowed for the proxy session",
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
      name: "update-room",
      description:
        "Updates room details, such as the room name, for a room in an Amazon Chime Enterprise account",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The room name",
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
      name: "update-room-membership",
      description:
        "Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--room-id",
          description: "The room ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The member ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role of the member",
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
      name: "update-sip-media-application",
      description:
        "Updates the details of the specified SIP media application.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateSipMediaApplication, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The SIP media application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name for the specified SIP media application",
          args: {
            name: "string",
          },
        },
        {
          name: "--endpoints",
          description:
            "The new set of endpoints for the specified SIP media application",
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
      name: "update-sip-media-application-call",
      description:
        "Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateSipMediaApplicationCall, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-media-application-id",
          description: "The ID of the SIP media application handling the call",
          args: {
            name: "string",
          },
        },
        {
          name: "--transaction-id",
          description: "The ID of the call transaction",
          args: {
            name: "string",
          },
        },
        {
          name: "--arguments",
          description:
            "Arguments made available to the Lambda function as part of the CALL_UPDATE_REQUESTED event. Can contain 0-20 key-value pairs",
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
      name: "update-sip-rule",
      description:
        "Updates the details of the specified SIP rule.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateSipRule, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--sip-rule-id",
          description: "The SIP rule ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The new name for the specified SIP rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--disabled",
          description:
            "The new value specified to indicate whether the rule is disabled",
        },
        {
          name: "--no-disabled",
          description:
            "The new value specified to indicate whether the rule is disabled",
        },
        {
          name: "--target-applications",
          description: "The new value of the list of target applications",
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
      name: "update-user",
      description:
        "Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--license-type",
          description:
            "The user license type to update. This must be a supported license type for the Amazon Chime account that the user belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description: "The user type",
          args: {
            name: "string",
          },
        },
        {
          name: "--alexa-for-business-metadata",
          description: "The Alexa for Business metadata",
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
      name: "update-user-settings",
      description:
        "Updates the settings for the specified user, such as phone number settings",
      options: [
        {
          name: "--account-id",
          description: "The Amazon Chime account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-settings",
          description: "The user settings to update",
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
      name: "update-voice-connector",
      description:
        "Updates details for the specified Amazon Chime Voice Connector.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateVoiceConnector, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-id",
          description: "The Amazon Chime Voice Connector ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon Chime Voice Connector",
          args: {
            name: "string",
          },
        },
        {
          name: "--require-encryption",
          description:
            "When enabled, requires encryption for the Amazon Chime Voice Connector",
        },
        {
          name: "--no-require-encryption",
          description:
            "When enabled, requires encryption for the Amazon Chime Voice Connector",
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
      name: "update-voice-connector-group",
      description:
        "Updates details of the specified Amazon Chime Voice Connector group, such as the name and Amazon Chime Voice Connector priority ranking.   This API is is no longer supported and will not be updated. We recommend using the latest version, UpdateVoiceConnectorGroup, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--voice-connector-group-id",
          description: "The Amazon Chime Voice Connector group ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the Amazon Chime Voice Connector group",
          args: {
            name: "string",
          },
        },
        {
          name: "--voice-connector-items",
          description: "The VoiceConnectorItems to associate with the group",
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
      name: "validate-e911-address",
      description:
        "Validates an address to be used for 911 calls made with Amazon Chime Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.   This API is is no longer supported and will not be updated. We recommend using the latest version, ValidateE911Address, in the Amazon Chime SDK. Using the latest version requires migrating to a dedicated namespace. For more information, refer to Migrating from the Amazon Chime namespace in the Amazon Chime SDK Developer Guide",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--street-number",
          description: "The address street number, such as 200 or 2121",
          args: {
            name: "string",
          },
        },
        {
          name: "--street-info",
          description: "The address street information, such as 8th Avenue",
          args: {
            name: "string",
          },
        },
        {
          name: "--city",
          description: "The address city, such as Portland",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description: "The address state, such as ME",
          args: {
            name: "string",
          },
        },
        {
          name: "--country",
          description: "The address country, such as US",
          args: {
            name: "string",
          },
        },
        {
          name: "--postal-code",
          description: "The address postal code, such as 04352",
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
