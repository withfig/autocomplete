const completionSpec: Fig.Spec = {
  name: "chatbot",
  description: "AWS Chatbot API",
  subcommands: [
    {
      name: "create-chime-webhook-configuration",
      description: "Creates Chime Webhook Configuration",
      options: [
        {
          name: "--webhook-description",
          description:
            "Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--webhook-url",
          description: "URL for the Chime webhook",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-name",
          description: "The name of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the configuration",
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
      name: "create-microsoft-teams-channel-configuration",
      description: "Creates MS Teams Channel Configuration",
      options: [
        {
          name: "--channel-id",
          description: "The ID of the Microsoft Teams channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description: "The name of the Microsoft Teams channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--team-id",
          description:
            "The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--team-name",
          description: "The name of the Microsoft Teams Team",
          args: {
            name: "string",
          },
        },
        {
          name: "--tenant-id",
          description: "The ID of the Microsoft Teams tenant",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-name",
          description: "The name of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-policy-arns",
          description:
            "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--no-user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the configuration",
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
      name: "create-slack-channel-configuration",
      description: "Creates Slack Channel Configuration",
      options: [
        {
          name: "--slack-team-id",
          description:
            "The ID of the Slack workspace authorized with AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-channel-id",
          description:
            "The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-channel-name",
          description: "The name of the Slack Channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-name",
          description: "The name of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-policy-arns",
          description:
            "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--no-user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the configuration",
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
      name: "delete-chime-webhook-configuration",
      description: "Deletes a Chime Webhook Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description: "The ARN of the ChimeWebhookConfiguration to delete",
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
      name: "delete-microsoft-teams-channel-configuration",
      description: "Deletes MS Teams Channel Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the MicrosoftTeamsChannelConfiguration to delete",
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
      name: "delete-microsoft-teams-configured-team",
      description:
        "Deletes the Microsoft Teams team authorization allowing for channels to be configured in that Microsoft Teams team. Note that the Microsoft Teams team must have no channels configured to remove it",
      options: [
        {
          name: "--team-id",
          description:
            "The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide",
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
      name: "delete-microsoft-teams-user-identity",
      description: "Deletes a Teams user identity",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "Id from Microsoft Teams for user",
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
      name: "delete-slack-channel-configuration",
      description: "Deletes Slack Channel Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description: "The ARN of the SlackChannelConfiguration to delete",
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
      name: "delete-slack-user-identity",
      description: "Deletes a Slack user identity",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the SlackChannelConfiguration associated with the user identity to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-team-id",
          description:
            "The ID of the Slack workspace authorized with AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-user-id",
          description: "The ID of the user in Slack",
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
      name: "delete-slack-workspace-authorization",
      description:
        "Deletes the Slack workspace authorization that allows channels to be configured in that workspace. This requires all configured channels in the workspace to be deleted",
      options: [
        {
          name: "--slack-team-id",
          description:
            "The ID of the Slack workspace authorized with AWS Chatbot",
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
      name: "describe-chime-webhook-configurations",
      description:
        "Lists Chime Webhook Configurations optionally filtered by ChatConfigurationArn",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-configuration-arn",
          description:
            "An optional ARN of a ChimeWebhookConfiguration to describe",
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
      name: "describe-slack-channel-configurations",
      description:
        "Lists Slack Channel Configurations optionally filtered by ChatConfigurationArn",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--chat-configuration-arn",
          description:
            "An optional ARN of a SlackChannelConfiguration to describe",
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
      name: "describe-slack-user-identities",
      description: "Lists all Slack user identities with a mapped role",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the SlackChannelConfiguration associated with the user identities to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
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
      name: "describe-slack-workspaces",
      description: "Lists all authorized Slack Workspaces for AWS Account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
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
      name: "get-account-preferences",
      description: "Get Chatbot account level preferences",
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
      name: "get-microsoft-teams-channel-configuration",
      description: "Get a single MS Teams Channel Configurations",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the MicrosoftTeamsChannelConfiguration to retrieve",
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
      name: "list-microsoft-teams-channel-configurations",
      description:
        "Lists MS Teams Channel Configurations optionally filtered by TeamId",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--team-id",
          description:
            "The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide",
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
      name: "list-microsoft-teams-configured-teams",
      description: "Lists all authorized MS teams for AWS Account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
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
      name: "list-microsoft-teams-user-identities",
      description:
        "Lists all Microsoft Teams user identities with a mapped role",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identities to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved",
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
      description: "Retrieves the list of tags applied to a configuration",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the configuration",
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
      description: "Applies the supplied tags to a configuration",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "A list of tags to apply to the configuration",
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
      description: "Removes the supplied tags from a configuration",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "A list of tag keys to remove from the configuration",
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
      name: "update-account-preferences",
      description: "Update Chatbot account level preferences",
      options: [
        {
          name: "--user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--no-user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--training-data-collection-enabled",
          description:
            "Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot\u2019s AI technologies",
        },
        {
          name: "--no-training-data-collection-enabled",
          description:
            "Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot\u2019s AI technologies",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-chime-webhook-configuration",
      description: "Updates a Chime Webhook Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description: "The ARN of the ChimeWebhookConfiguration to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--webhook-description",
          description:
            "Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html",
          args: {
            name: "string",
          },
        },
        {
          name: "--webhook-url",
          description: "URL for the Chime webhook",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
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
      name: "update-microsoft-teams-channel-configuration",
      description: "Updates MS Teams Channel Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description:
            "The ARN of the MicrosoftTeamsChannelConfiguration to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-id",
          description: "The ID of the Microsoft Teams channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description: "The name of the Microsoft Teams channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-policy-arns",
          description:
            "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--no-user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-slack-channel-configuration",
      description: "Updates Slack Channel Configuration",
      options: [
        {
          name: "--chat-configuration-arn",
          description: "The ARN of the SlackChannelConfiguration to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-channel-id",
          description:
            "The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ",
          args: {
            name: "string",
          },
        },
        {
          name: "--slack-channel-name",
          description: "The name of the Slack Channel",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arns",
          description:
            "The ARNs of the SNS topics that deliver notifications to AWS Chatbot",
          args: {
            name: "list",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot",
          args: {
            name: "string",
          },
        },
        {
          name: "--logging-level",
          description: "Logging levels include ERROR, INFO, or NONE",
          args: {
            name: "string",
          },
        },
        {
          name: "--guardrail-policy-arns",
          description:
            "The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--no-user-authorization-required",
          description:
            "Enables use of a user role requirement in your chat configuration",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
