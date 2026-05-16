const completionSpec: Fig.Spec = {
  name: "grafana",
  description:
    "Amazon Managed Grafana is a fully managed and secure data visualization service that you can use to instantly query, correlate, and visualize operational metrics, logs, and traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and scale Grafana, a widely deployed data visualization tool that is popular for its extensible data support. With Amazon Managed Grafana, you create logically isolated Grafana servers called workspaces. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces without having to build, package, or deploy any hardware to run Grafana servers",
  subcommands: [
    {
      name: "associate-license",
      description:
        "Assigns a Grafana Enterprise license to a workspace. To upgrade, you must use ENTERPRISE for the licenseType, and pass in a valid Grafana Labs token for the grafanaToken. Upgrading to Grafana Enterprise incurs additional fees. For more information, see Upgrade a workspace to Grafana Enterprise",
      options: [
        {
          name: "--grafana-token",
          description:
            "A token from Grafana Labs that ties your Amazon Web Services account with a Grafana Labs account. For more information, see Link your account with Grafana Labs",
          args: {
            name: "string",
          },
        },
        {
          name: "--license-type",
          description:
            "The type of license to associate with the workspace.  Amazon Managed Grafana workspaces no longer support Grafana Enterprise free trials",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to associate the license with",
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
      name: "create-workspace",
      description:
        "Creates a workspace. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server. Don't use CreateWorkspace to modify an existing workspace. Instead, use UpdateWorkspace",
      options: [
        {
          name: "--account-access-type",
          description:
            "Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify ORGANIZATION, you must specify which organizational units the workspace can access in the workspaceOrganizationalUnits parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-providers",
          description:
            "Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. For more information, see User authentication in Amazon Managed Grafana",
          args: {
            name: "list",
          },
        },
        {
          name: "--client-token",
          description:
            "A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration string for the workspace that you create. For more information about the format and configuration options available, see Working in your Grafana workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--grafana-version",
          description:
            "Specifies the version of Grafana to support in the new workspace. If not specified, defaults to the latest version (for example, 10.4). To get a list of supported versions, use the ListVersions operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-access-control",
          description:
            "Configuration for network access to your workspace. When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required. If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required",
          args: {
            name: "structure",
          },
        },
        {
          name: "--organization-role-name",
          description:
            "The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts in an organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-type",
          description:
            "When creating a workspace through the Amazon Web Services API, CLI or Amazon Web Services CloudFormation, you must manage IAM roles and provision the permissions that the workspace needs to use Amazon Web Services data sources and notification channels. You must also specify a workspaceRoleArn for a role that you will manage for the workspace to use when accessing those datasources and notification channels. The ability for Amazon Managed Grafana to create and update IAM roles on behalf of the user is supported only in the Amazon Managed Grafana console, where this value may be set to SERVICE_MANAGED.  Use only the CUSTOMER_MANAGED permission type when creating a workspace with the API, CLI or Amazon Web Services CloudFormation.   For more information, see Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels",
          args: {
            name: "string",
          },
        },
        {
          name: "--stack-set-name",
          description:
            "The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The list of tags associated with the workspace",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.  Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workspace-data-sources",
          description:
            "This parameter is for internal use only, and should not be used",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-description",
          description:
            "A description for the workspace. This is used only to help you identify this workspace. Pattern: ^[\\\\p{L}\\\\p{Z}\\\\p{N}\\\\p{P}]{0,2048}$",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-name",
          description:
            "The name for the workspace. It does not have to be unique",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-notification-destinations",
          description:
            "Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-organizational-units",
          description:
            "Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-role-arn",
          description:
            "Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data sources and notification channels. You are responsible for managing the permissions for this role as new data sources or notification channels are added",
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
      name: "create-workspace-api-key",
      description:
        "Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html for available APIs and example requests.  In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release",
      options: [
        {
          name: "--key-name",
          description:
            "Specifies the name of the key. Keynames must be unique to the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-role",
          description:
            "Specifies the permission level of the key.  Valid values: ADMIN|EDITOR|VIEWER",
          args: {
            name: "string",
          },
        },
        {
          name: "--seconds-to-live",
          description:
            "Specifies the time in seconds until the key expires. Keys can be valid for up to 30 days",
          args: {
            name: "integer",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to create an API key",
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
      name: "create-workspace-service-account",
      description:
        "Creates a service account for the workspace. A service account can be used to call Grafana HTTP APIs, and run automated workloads. After creating the service account with the correct GrafanaRole for your use case, use CreateWorkspaceServiceAccountToken to create a token that can be used to authenticate and authorize Grafana HTTP API calls. You can only create service accounts for workspaces that are compatible with Grafana version 9 and above.  For more information about service accounts, see Service accounts in the Amazon Managed Grafana User Guide. For more information about the Grafana HTTP APIs, see Using Grafana HTTP APIs in the Amazon Managed Grafana User Guide",
      options: [
        {
          name: "--grafana-role",
          description:
            "The permission level to use for this service account.  For more information about the roles and the permissions each has, see User roles in the Amazon Managed Grafana User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A name for the service account. The name must be unique within the workspace, as it determines the ID associated with the service account",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace within which to create the service account",
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
      name: "create-workspace-service-account-token",
      description:
        "Creates a token that can be used to authenticate and authorize Grafana HTTP API operations for the given workspace service account. The service account acts as a user for the API operations, and defines the permissions that are used by the API.  When you create the service account token, you will receive a key that is used when calling Grafana APIs. Do not lose this key, as it will not be retrievable again. If you do lose the key, you can delete the token and recreate it to receive a new key. This will disable the initial key.  Service accounts are only available for workspaces that are compatible with Grafana version 9 and above",
      options: [
        {
          name: "--name",
          description: "A name for the token to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--seconds-to-live",
          description:
            "Sets how long the token will be valid, in seconds. You can set the time up to 30 days in the future",
          args: {
            name: "integer",
          },
        },
        {
          name: "--service-account-id",
          description:
            "The ID of the service account for which to create a token",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace the service account resides within",
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
      name: "delete-workspace",
      description: "Deletes an Amazon Managed Grafana workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace to delete",
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
      name: "delete-workspace-api-key",
      description:
        "Deletes a Grafana API key for the workspace.  In workspaces compatible with Grafana version 9 or above, use workspace service accounts instead of API keys. API keys will be removed in a future release",
      options: [
        {
          name: "--key-name",
          description: "The name of the API key to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to delete",
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
      name: "delete-workspace-service-account",
      description:
        "Deletes a workspace service account from the workspace. This will delete any tokens created for the service account, as well. If the tokens are currently in use, the will fail to authenticate / authorize after they are deleted. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above",
      options: [
        {
          name: "--service-account-id",
          description: "The ID of the service account to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace where the service account resides",
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
      name: "delete-workspace-service-account-token",
      description:
        "Deletes a token for the workspace service account. This will disable the key associated with the token. If any automation is currently using the key, it will no longer be authenticated or authorized to perform actions with the Grafana HTTP APIs. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above",
      options: [
        {
          name: "--service-account-id",
          description:
            "The ID of the service account from which to delete the token",
          args: {
            name: "string",
          },
        },
        {
          name: "--token-id",
          description: "The ID of the token to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace from which to delete the token",
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
      name: "describe-workspace",
      description:
        "Displays information about one Amazon Managed Grafana workspace",
      options: [
        {
          name: "--workspace-id",
          description: "The ID of the workspace to display information about",
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
      name: "describe-workspace-authentication",
      description:
        "Displays information about the authentication methods used in one Amazon Managed Grafana workspace",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to return authentication information about",
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
      name: "describe-workspace-configuration",
      description:
        "Gets the current configuration string for the given workspace",
      options: [
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to get configuration information for",
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
      name: "disassociate-license",
      description: "Removes the Grafana Enterprise license from a workspace",
      options: [
        {
          name: "--license-type",
          description: "The type of license to remove from the workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to remove the Grafana Enterprise license from",
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
      name: "list-permissions",
      description:
        "Lists the users and groups who have the Grafana Admin and Editor roles in this workspace. If you use this operation without specifying userId or groupId, the operation returns the roles of all users and groups. If you specify a userId or a groupId, only the roles for that user or group are returned. If you do this, you can specify only one userId or one groupId",
      options: [
        {
          name: "--group-id",
          description:
            "(Optional) Limits the results to only the group that matches this ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You received this token from a previous ListPermissions operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "(Optional) Limits the results to only the user that matches this ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-type",
          description:
            "(Optional) If you specify SSO_USER, then only the permissions of IAM Identity Center users are returned. If you specify SSO_GROUP, only the permissions of IAM Identity Center groups are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to list permissions for. This parameter is required",
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
      name: "list-tags-for-resource",
      description:
        "The ListTagsForResource operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the resourceArn. Currently, the only resource that can be tagged is a workspace",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource the list of tags are associated with",
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
      name: "list-versions",
      description:
        "Lists available versions of Grafana. These are available when calling CreateWorkspace. Optionally, include a workspace to list the versions to which it can be upgraded",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of results to include in the response",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use when requesting the next set of results. You receive this token from a previous ListVersions operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to list the available upgrade versions. If not included, lists all versions of Grafana that are supported for CreateWorkspace",
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
      name: "list-workspace-service-account-tokens",
      description:
        "Returns a list of tokens for a workspace service account.  This does not return the key for each token. You cannot access keys after they are created. To create a new key, delete the token and recreate it.  Service accounts are only available for workspaces that are compatible with Grafana version 9 and above",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of tokens to include in the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of service accounts to return. (You receive this token from a previous ListWorkspaceServiceAccountTokens operation.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--service-account-id",
          description:
            "The ID of the service account for which to return tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace for which to return tokens",
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
      name: "list-workspace-service-accounts",
      description:
        "Returns a list of service accounts for a workspace. Service accounts are only available for workspaces that are compatible with Grafana version 9 and above",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of service accounts to include in the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of service accounts to return. (You receive this token from a previous ListWorkspaceServiceAccounts operation.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The workspace for which to list service accounts",
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
      name: "list-workspaces",
      description:
        "Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use DescribeWorkspace",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of workspaces to include in the results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of workspaces to return. (You receive this token from a previous ListWorkspaces operation.)",
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
      name: "tag-resource",
      description:
        "The TagResource operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces.  If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource the tag is associated with",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The list of tag keys and values to associate with the resource. You can associate tag keys only, tags (key and values) only or a combination of tag keys and tags",
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
        "The UntagResource operation removes the association of the tag with the Amazon Managed Grafana resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The ARN of the resource the tag association is removed from",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The key values of the tag to be removed from the resource",
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
      name: "update-permissions",
      description:
        "Updates which users in a workspace have the Grafana Admin or Editor roles",
      options: [
        {
          name: "--update-instruction-batch",
          description:
            "An array of structures that contain the permission updates to make",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to update",
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
      name: "update-workspace",
      description:
        "Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed. To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use UpdateWorkspaceAuthentication. To modify which users in the workspace have the Admin and Editor Grafana roles, use UpdatePermissions",
      options: [
        {
          name: "--account-access-type",
          description:
            "Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify ORGANIZATION, you must specify which organizational units the workspace can access in the workspaceOrganizationalUnits parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--network-access-control",
          description:
            "The configuration settings for network access to your workspace. When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization will still be required. If this is not configured, or is removed, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required",
          args: {
            name: "structure",
          },
        },
        {
          name: "--organization-role-name",
          description:
            "The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the permissionType set to CUSTOMER_MANAGED",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-type",
          description:
            "Use this parameter if you want to change a workspace from SERVICE_MANAGED to CUSTOMER_MANAGED. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose CUSTOMER_MANAGED. If you specify this as CUSTOMER_MANAGED, you must also specify a workspaceRoleArn that the workspace will use for accessing Amazon Web Services resources. For more information on the role and permissions needed, see Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels   Do not use this to convert a CUSTOMER_MANAGED workspace to SERVICE_MANAGED. Do not include this parameter if you want to leave the workspace as SERVICE_MANAGED. You can convert a CUSTOMER_MANAGED workspace to SERVICE_MANAGED using the Amazon Managed Grafana console. For more information, see Managing permissions for data sources and notification channels",
          args: {
            name: "string",
          },
        },
        {
          name: "--remove-network-access-configuration",
          description:
            "Whether to remove the network access configuration from the workspace. Setting this to true and providing a networkAccessControl to set will return an error. If you remove this configuration by setting this to true, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required",
        },
        {
          name: "--no-remove-network-access-configuration",
          description:
            "Whether to remove the network access configuration from the workspace. Setting this to true and providing a networkAccessControl to set will return an error. If you remove this configuration by setting this to true, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required",
        },
        {
          name: "--remove-vpc-configuration",
          description:
            "Whether to remove the VPC configuration from the workspace. Setting this to true and providing a vpcConfiguration to set will return an error",
        },
        {
          name: "--no-remove-vpc-configuration",
          description:
            "Whether to remove the VPC configuration from the workspace. Setting this to true and providing a vpcConfiguration to set will return an error",
        },
        {
          name: "--stack-set-name",
          description:
            "The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-configuration",
          description:
            "The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workspace-data-sources",
          description:
            "This parameter is for internal use only, and should not be used",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-description",
          description:
            "A description for the workspace. This is used only to help you identify this workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-name",
          description: "A new name for the workspace to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-notification-destinations",
          description:
            "Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-organizational-units",
          description:
            "Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--workspace-role-arn",
          description:
            "Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has permissionType CUSTOMER_MANAGED, then this role is required",
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
      name: "update-workspace-authentication",
      description:
        "Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.  Changes to the authentication method for a workspace may take a few minutes to take effect",
      options: [
        {
          name: "--authentication-providers",
          description:
            "Specifies whether this workspace uses SAML 2.0, IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. For more information, see User authentication in Amazon Managed Grafana",
          args: {
            name: "list",
          },
        },
        {
          name: "--saml-configuration",
          description:
            "If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace",
          args: {
            name: "structure",
          },
        },
        {
          name: "--workspace-id",
          description:
            "The ID of the workspace to update the authentication for",
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
      name: "update-workspace-configuration",
      description: "Updates the configuration string for the given workspace",
      options: [
        {
          name: "--configuration",
          description:
            "The new configuration string for the workspace. For more information about the format and configuration options available, see Working in your Grafana workspace",
          args: {
            name: "string",
          },
        },
        {
          name: "--grafana-version",
          description:
            "Specifies the version of Grafana to support in the workspace. If not specified, keeps the current version of the workspace. Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from 9.4 to 8.4). To know what versions are available to upgrade to for a specific workspace, see the ListVersions operation",
          args: {
            name: "string",
          },
        },
        {
          name: "--workspace-id",
          description: "The ID of the workspace to update",
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
