const completionSpec: Fig.Spec = {
  name: "support-app",
  description:
    "Amazon Web Services Support App in Slack You can use the Amazon Web Services Support App in Slack API to manage your support cases in Slack for your Amazon Web Services account. After you configure your Slack workspace and channel with the Amazon Web Services Support App, you can perform the following tasks directly in your Slack channel:   Create, search, update, and resolve your support cases   Request service quota increases for your account   Invite Amazon Web Services Support agents to your channel so that you can chat directly about your support cases   For more information about how to perform these actions in Slack, see the following documentation in the Amazon Web Services Support User Guide:    Amazon Web Services Support App in Slack     Joining a live chat session with Amazon Web Services Support     Requesting service quota increases     Amazon Web Services Support App commands in Slack    You can also use the Amazon Web Services Management Console instead of the Amazon Web Services Support App API to manage your Slack configurations. For more information, see Authorize a Slack workspace to enable the Amazon Web Services Support App.    You must have a Business or Enterprise Support plan to use the Amazon Web Services Support App API.    For more information about the Amazon Web Services Support App endpoints, see the Amazon Web Services Support App in Slack endpoints in the Amazon Web Services General Reference",
  subcommands: [
    {
      name: "create-slack-channel-configuration",
      description:
        "Creates a Slack channel configuration for your Amazon Web Services account.    You can add up to 5 Slack workspaces for your account.   You can add up to 20 Slack channels for your account.    A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that you need to manage support cases for your organization. This can reduce the notifications about case updates that you receive in the Slack channel.  We recommend that you choose a private Slack channel so that only members in that channel have read and write access to your support cases. Anyone in your Slack channel can create, update, or resolve support cases for your account. Users require an invitation to join private channels",
      options: [
        {
          name: "--channel-id",
          description:
            "The channel ID in Slack. This ID identifies a channel within a Slack workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description:
            "The name of the Slack channel that you configure for the Amazon Web Services Support App",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see Managing access to the Amazon Web Services Support App in the Amazon Web Services Support User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--notify-on-add-correspondence-to-case",
          description:
            "Whether you want to get notified when a support case has a new correspondence",
        },
        {
          name: "--no-notify-on-add-correspondence-to-case",
          description:
            "Whether you want to get notified when a support case has a new correspondence",
        },
        {
          name: "--notify-on-case-severity",
          description:
            "The case severity for a support case that you want to receive notifications. If you specify high or all, you must specify true for at least one of the following parameters:    notifyOnAddCorrespondenceToCase     notifyOnCreateOrReopenCase     notifyOnResolveCase    If you specify none, the following parameters must be null or false:    notifyOnAddCorrespondenceToCase     notifyOnCreateOrReopenCase     notifyOnResolveCase     If you don't specify these parameters in your request, they default to false",
          args: {
            name: "string",
          },
        },
        {
          name: "--notify-on-create-or-reopen-case",
          description:
            "Whether you want to get notified when a support case is created or reopened",
        },
        {
          name: "--no-notify-on-create-or-reopen-case",
          description:
            "Whether you want to get notified when a support case is created or reopened",
        },
        {
          name: "--notify-on-resolve-case",
          description:
            "Whether you want to get notified when a support case is resolved",
        },
        {
          name: "--no-notify-on-resolve-case",
          description:
            "Whether you want to get notified when a support case is resolved",
        },
        {
          name: "--team-id",
          description:
            "The team ID in Slack. This ID uniquely identifies a Slack workspace, such as T012ABCDEFG",
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
      name: "delete-account-alias",
      description:
        "Deletes an alias for an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App",
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
      name: "delete-slack-channel-configuration",
      description:
        "Deletes a Slack channel configuration from your Amazon Web Services account. This operation doesn't delete your Slack channel",
      options: [
        {
          name: "--channel-id",
          description:
            "The channel ID in Slack. This ID identifies a channel within a Slack workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--team-id",
          description:
            "The team ID in Slack. This ID uniquely identifies a Slack workspace, such as T012ABCDEFG",
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
      name: "delete-slack-workspace-configuration",
      description:
        "Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't delete your Slack workspace",
      options: [
        {
          name: "--team-id",
          description:
            "The team ID in Slack. This ID uniquely identifies a Slack workspace, such as T012ABCDEFG",
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
      name: "get-account-alias",
      description:
        "Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App",
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
      name: "list-slack-channel-configurations",
      description:
        "Lists the Slack channel configurations for an Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "If the results of a search are large, the API only returns a portion of the results and includes a nextToken pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value",
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
      name: "list-slack-workspace-configurations",
      description:
        "Lists the Slack workspace configurations for an Amazon Web Services account",
      options: [
        {
          name: "--next-token",
          description:
            "If the results of a search are large, the API only returns a portion of the results and includes a nextToken pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value",
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
      name: "put-account-alias",
      description:
        "Creates or updates an individual alias for each Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App",
      options: [
        {
          name: "--account-alias",
          description:
            "An alias or short name for an Amazon Web Services account",
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
      name: "register-slack-workspace-for-organization",
      description:
        "Registers a Slack workspace for your Amazon Web Services account. To call this API, your account must be part of an organization in Organizations. If you're the management account and you want to register Slack workspaces for your organization, you must complete the following tasks:   Sign in to the Amazon Web Services Support Center and authorize the Slack workspaces where you want your organization to have access to. See Authorize a Slack workspace in the Amazon Web Services Support User Guide.   Call the RegisterSlackWorkspaceForOrganization API to authorize each Slack workspace for the organization.   After the management account authorizes the Slack workspace, member accounts can call this API to authorize the same Slack workspace for their individual accounts. Member accounts don't need to authorize the Slack workspace manually through the Amazon Web Services Support Center. To use the Amazon Web Services Support App, each account must then complete the following tasks:   Create an Identity and Access Management (IAM) role with the required permission. For more information, see Managing access to the Amazon Web Services Support App.   Configure a Slack channel to use the Amazon Web Services Support App for support cases for that account. For more information, see Configuring a Slack channel",
      options: [
        {
          name: "--team-id",
          description:
            "The team ID in Slack. This ID uniquely identifies a Slack workspace, such as T012ABCDEFG. Specify the Slack workspace that you want to use for your organization",
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
      name: "update-slack-channel-configuration",
      description:
        "Updates the configuration for a Slack channel, such as case update notifications",
      options: [
        {
          name: "--channel-id",
          description:
            "The channel ID in Slack. This ID identifies a channel within a Slack workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-name",
          description: "The Slack channel name that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--channel-role-arn",
          description:
            "The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see Managing access to the Amazon Web Services Support App in the Amazon Web Services Support User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--notify-on-add-correspondence-to-case",
          description:
            "Whether you want to get notified when a support case has a new correspondence",
        },
        {
          name: "--no-notify-on-add-correspondence-to-case",
          description:
            "Whether you want to get notified when a support case has a new correspondence",
        },
        {
          name: "--notify-on-case-severity",
          description:
            "The case severity for a support case that you want to receive notifications. If you specify high or all, at least one of the following parameters must be true:    notifyOnAddCorrespondenceToCase     notifyOnCreateOrReopenCase     notifyOnResolveCase    If you specify none, any of the following parameters that you specify in your request must be false:    notifyOnAddCorrespondenceToCase     notifyOnCreateOrReopenCase     notifyOnResolveCase     If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default",
          args: {
            name: "string",
          },
        },
        {
          name: "--notify-on-create-or-reopen-case",
          description:
            "Whether you want to get notified when a support case is created or reopened",
        },
        {
          name: "--no-notify-on-create-or-reopen-case",
          description:
            "Whether you want to get notified when a support case is created or reopened",
        },
        {
          name: "--notify-on-resolve-case",
          description:
            "Whether you want to get notified when a support case is resolved",
        },
        {
          name: "--no-notify-on-resolve-case",
          description:
            "Whether you want to get notified when a support case is resolved",
        },
        {
          name: "--team-id",
          description:
            "The team ID in Slack. This ID uniquely identifies a Slack workspace, such as T012ABCDEFG",
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
