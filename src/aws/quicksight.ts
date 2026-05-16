const completionSpec: Fig.Spec = {
  name: "quicksight",
  description:
    "Amazon QuickSight API Reference Amazon QuickSight is a fully managed, serverless business intelligence service for the Amazon Web Services Cloud that makes it easy to extend data and insights to every user in your organization. This API reference contains documentation for a programming interface that you can use to manage Amazon QuickSight",
  subcommands: [
    {
      name: "batch-create-topic-reviewed-answer",
      description: "Creates new reviewed answers for a Q Topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that you want to create a reviewed answer in",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID for the topic reviewed answer that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--answers",
          description: "The definition of the Answers to be created",
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
      name: "batch-delete-topic-reviewed-answer",
      description: "Deletes reviewed answers for Q Topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that you want to delete a reviewed answers in",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID for the topic reviewed answer that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--answer-ids",
          description: "The Answer IDs of the Answers to be deleted",
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
      name: "cancel-ingestion",
      description: "Cancels an ongoing ingestion of data into SPICE",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion",
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
      name: "create-account-customization",
      description:
        "Creates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize Amazon QuickSight by removing Amazon QuickSight sample assets and videos for all new users, see Customizing Amazon QuickSight in the Amazon QuickSight User Guide.  You can create customizations for your Amazon Web Services account or, if you specify a namespace, for a QuickSight namespace instead. Customizations that apply to a namespace always override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the  DescribeThemePermissions  API operation. To share the theme, grant permissions by using the  UpdateThemePermissions  API operation",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to customize Amazon QuickSight for",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that you want to add customizations to",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-customization",
          description:
            'The Amazon QuickSight customizations you\'re adding in the current Amazon Web Services Region. You can add these to an Amazon Web Services account and a QuickSight namespace.  For example, you can add a default theme by setting AccountCustomization to the midnight theme: "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" }. Or, you can add a custom theme by specifying "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" }',
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of the tags that you want to attach to this resource",
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
      name: "create-account-subscription",
      description:
        "Creates an Amazon QuickSight account, or subscribes to Amazon QuickSight Q. The Amazon Web Services Region for the account is derived from what is configured in the CLI or SDK. Before you use this operation, make sure that you can connect to an existing Amazon Web Services account. If you don't have an Amazon Web Services account, see Sign up for Amazon Web Services in the Amazon QuickSight User Guide. The person who signs up for Amazon QuickSight needs to have the correct Identity and Access Management (IAM) permissions. For more information, see IAM Policy Examples for Amazon QuickSight in the Amazon QuickSight User Guide. If your IAM policy includes both the Subscribe and CreateAccountSubscription actions, make sure that both actions are set to Allow. If either action is set to Deny, the Deny action prevails and your API call fails. You can't pass an existing IAM role to access other Amazon Web Services services using this API operation. To pass your existing IAM role to Amazon QuickSight, see Passing IAM roles to Amazon QuickSight in the Amazon QuickSight User Guide. You can't set default resource access on the new account from the Amazon QuickSight API. Instead, add default resource access from the Amazon QuickSight console. For more information about setting default resource access to Amazon Web Services services, see Setting default resource access to Amazon Web Services services in the Amazon QuickSight User Guide",
      options: [
        {
          name: "--edition",
          description:
            "The edition of Amazon QuickSight that you want your account to have. Currently, you can choose from ENTERPRISE or ENTERPRISE_AND_Q. If you choose ENTERPRISE_AND_Q, the following parameters are required:    FirstName     LastName     EmailAddress     ContactNumber",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-method",
          description:
            "The method that you want to use to authenticate your Amazon QuickSight account. If you choose ACTIVE_DIRECTORY, provide an ActiveDirectoryName and an AdminGroup associated with your Active Directory. If you choose IAM_IDENTITY_CENTER, provide an AdminGroup associated with your IAM Identity Center account",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account that you're using to create your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-name",
          description:
            "The name of your Amazon QuickSight account. This name is unique over all of Amazon Web Services, and it appears only when users sign in. You can't change AccountName value after the Amazon QuickSight account is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-email",
          description:
            "The email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--active-directory-name",
          description:
            "The name of your Active Directory. This field is required if ACTIVE_DIRECTORY is the selected authentication method of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--realm",
          description:
            "The realm of the Active Directory that is associated with your Amazon QuickSight account. This field is required if ACTIVE_DIRECTORY is the selected authentication method of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--directory-id",
          description:
            "The ID of the Active Directory that is associated with your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--admin-group",
          description:
            "The admin group associated with your Active Directory or IAM Identity Center account. Either this field or the AdminProGroup field is required if ACTIVE_DIRECTORY or IAM_IDENTITY_CENTER is the selected authentication method of the new Amazon QuickSight account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--author-group",
          description:
            "The author group associated with your Active Directory or IAM Identity Center account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--reader-group",
          description:
            "The reader group associated with your Active Directory or IAM Identity Center account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--admin-pro-group",
          description:
            "The admin pro group associated with your Active Directory or IAM Identity Center account. Either this field or the AdminGroup field is required if ACTIVE_DIRECTORY or IAM_IDENTITY_CENTER is the selected authentication method of the new Amazon QuickSight account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--author-pro-group",
          description:
            "The author pro group associated with your Active Directory or IAM Identity Center account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--reader-pro-group",
          description:
            "The reader pro group associated with your Active Directory or IAM Identity Center account. For more information about using IAM Identity Center in Amazon QuickSight, see Using IAM Identity Center with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide. For more information about using Active Directory in Amazon QuickSight, see Using Active Directory with Amazon QuickSight Enterprise Edition in the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--first-name",
          description:
            "The first name of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description:
            "The last name of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address",
          description:
            "The email address of the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--contact-number",
          description:
            "A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if ENTERPPRISE_AND_Q is the selected edition of the new Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-identity-center-instance-arn",
          description:
            "The Amazon Resource Name (ARN) for the IAM Identity Center instance",
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
      name: "create-analysis",
      description:
        "Creates an analysis in Amazon QuickSight. Analyses can be created either from a template or from an AnalysisDefinition",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account where you are creating an analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID for the analysis that you're creating. This ID displays in the URL of the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive name for the analysis that you're creating. This name displays for the analysis in the Amazon QuickSight console",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A structure that describes the principals and the resource-level permissions on an analysis. You can use the Permissions structure to grant permissions by providing a list of Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).  To specify no permissions, omit Permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets. Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The ARN for the theme to apply to the analysis that you're creating. To see the theme in the Amazon QuickSight console, make sure that you have access to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis",
          args: {
            name: "list",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of an analysis. A definition is the data model of all features in a Dashboard, Template, or Analysis. Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "The option to relax the validation needed to create an analysis with definition objects. This skips the validation step for specific errors",
          args: {
            name: "structure",
          },
        },
        {
          name: "--folder-arns",
          description:
            "When you create the analysis, Amazon QuickSight adds the analysis to these folders",
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
      name: "create-brand",
      description: "Creates an Amazon QuickSight brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-definition",
          description: "The definition of the brand",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs that are assigned to the brand",
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
      name: "create-custom-permissions",
      description: "Creates a custom permissions profile",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that you want to create the custom permissions profile in",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "The name of the custom permissions profile that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description:
            "A set of actions to include in the custom permissions profile",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "The tags to associate with the custom permissions profile",
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
      name: "create-dashboard",
      description:
        "Creates a dashboard from either a template or directly with a DashboardDefinition. To first create a template, see the  CreateTemplate  API operation. A dashboard is an entity in Amazon QuickSight that identifies Amazon QuickSight reports, created from analyses. You can share Amazon QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account where you want to create the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard, also added to the IAM policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name of the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.  To specify no permissions, omit the permissions list",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you create the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a SourceTemplate entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the  CreateTemplate  API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplateARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.  Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard",
          args: {
            name: "list",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for the first version of the dashboard being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-publish-options",
          description:
            "Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, Amazon QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of a dashboard. A definition is the data model of all features in a Dashboard, Template, or Analysis. Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "The option to relax the validation needed to create a dashboard with definition objects. This option skips the validation step for specific errors",
          args: {
            name: "structure",
          },
        },
        {
          name: "--folder-arns",
          description:
            "When you create the dashboard, Amazon QuickSight adds the dashboard to these folders",
          args: {
            name: "list",
          },
        },
        {
          name: "--link-sharing-configuration",
          description:
            "A structure that contains the permissions of a shareable link to the dashboard",
          args: {
            name: "structure",
          },
        },
        {
          name: "--link-entities",
          description:
            "A list of analysis Amazon Resource Names (ARNs) to be linked to the dashboard",
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
      name: "create-data-set",
      description:
        "Creates a dataset. This operation doesn't support datasets that include uploaded files as a source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "An ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--physical-table-map",
          description:
            "Declares the physical tables that are available in the underlying data sources",
          args: {
            name: "map",
          },
        },
        {
          name: "--logical-table-map",
          description:
            "Configures the combination and transformation of the data from the physical tables",
          args: {
            name: "map",
          },
        },
        {
          name: "--import-mode",
          description:
            "Indicates whether you want to import the data into SPICE",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-groups",
          description:
            "Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-folders",
          description:
            "The folder that contains fields and nested subfolders for your dataset",
          args: {
            name: "map",
          },
        },
        {
          name: "--permissions",
          description: "A list of resource permissions on the dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--row-level-permission-data-set",
          description:
            "The row-level security configuration for the data that you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--row-level-permission-tag-configuration",
          description:
            "The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--column-level-permission-rules",
          description:
            "A set of one or more definitions of a  ColumnLevelPermissionRule",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-set-usage-configuration",
          description:
            "The usage configuration to apply to child datasets that reference this dataset as a source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dataset-parameters",
          description: "The parameter declarations of the dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--folder-arns",
          description:
            "When you create the dataset, Amazon QuickSight adds the dataset to these folders",
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
      name: "create-data-source",
      description: "Creates a data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "An ID for the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the data source. To return a list of all data sources, use ListDataSources. Use AMAZON_ELASTICSEARCH for Amazon OpenSearch Service",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-parameters",
          description:
            "The parameters that Amazon QuickSight uses to connect to your underlying source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--credentials",
          description:
            "The credentials Amazon QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description: "A list of resource permissions on the data source",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-connection-properties",
          description:
            "Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ssl-properties",
          description:
            "Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the data source",
          args: {
            name: "list",
          },
        },
        {
          name: "--folder-arns",
          description:
            "When you create the data source, Amazon QuickSight adds the data source to these folders",
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
      name: "create-folder",
      description: "Creates an empty shared folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account where you want to create the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-type",
          description: "The type of folder. By default, folderType is SHARED",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-folder-arn",
          description:
            "The Amazon Resource Name (ARN) for the parent folder.  ParentFolderArn can be null. An empty parentFolderArn creates a root-level folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "A structure that describes the principals and the resource-level permissions of a folder. To specify no permissions, omit Permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description: "Tags for the folder",
          args: {
            name: "list",
          },
        },
        {
          name: "--sharing-model",
          description:
            "An optional parameter that determines the sharing scope of the folder. The default value for this parameter is ACCOUNT",
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
      name: "create-folder-membership",
      description:
        "Adds an asset, such as a dashboard, analysis, or dataset into a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The ID of the asset that you want to add to the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-type",
          description:
            "The member type of the asset that you want to add to a folder",
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
      name: "create-group",
      description:
        "Use the CreateGroup operation to create a group in Amazon QuickSight. You can create up to 10,000 groups in a namespace. If you want to create more than 10,000 groups in a namespace, contact Amazon Web Services Support. The permissions resource is arn:aws:quicksight:<your-region>:<relevant-aws-account-id>:group/default/<group-name> . The response is a group object",
      options: [
        {
          name: "--group-name",
          description: "A name for the group that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the group that you want to create",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want the group to be a part of",
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
      name: "create-group-membership",
      description:
        "Adds an Amazon QuickSight user to an Amazon QuickSight group",
      options: [
        {
          name: "--member-name",
          description:
            "The name of the user that you want to add to the group membership",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group that you want to add the user to",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want the user to be a part of",
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
      name: "create-iam-policy-assignment",
      description:
        "Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account where you want to assign an IAM policy to Amazon QuickSight users or groups",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description:
            "The name of the assignment, also called a rule. The name must be unique within the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description:
            "The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN for the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--identities",
          description:
            "The Amazon QuickSight users, groups, or both that you want to assign the policy to",
          args: {
            name: "map",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment",
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
      name: "create-ingestion",
      description:
        "Creates and starts a new SPICE ingestion for a dataset. You can manually refresh datasets in an Enterprise edition account 32 times in a 24-hour period. You can manually refresh datasets in a Standard edition account 8 times in a 24-hour period. Each 24-hour period is measured starting 24 hours before the current date and time. Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the Amazon Web Services Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-type",
          description: "The type of ingestion that you want to create",
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
      name: "create-namespace",
      description:
        "(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight. A namespace allows you to isolate the Amazon QuickSight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your Amazon Web Services account is subscribed to Amazon QuickSight. The namespace must be unique within the Amazon Web Services account. By default, there is a limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with Amazon Web Services Support",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create the Amazon QuickSight namespace in",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name that you want to use to describe the new namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store",
          description:
            "Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you want to associate with the namespace that you're creating",
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
      name: "create-refresh-schedule",
      description:
        "Creates a refresh schedule for a dataset. You can create up to 5 different schedules for a single dataset",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description: "The refresh schedule",
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
      name: "create-role-membership",
      description:
        "Use CreateRoleMembership to add an existing Amazon QuickSight group to an existing role",
      options: [
        {
          name: "--member-name",
          description: "The name of the group that you want to add to the role",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that the role belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role that you want to add a group to",
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
      name: "create-template",
      description:
        "Creates a template either from a TemplateDefinition or from an existing Amazon QuickSight analysis or template. You can use the resulting template to create additional dashboards, templates, or analyses. A template is an entity in Amazon QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. You use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "An ID for the template that you want to create. This template is unique per Amazon Web Services Region; in each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "A list of resource permissions to be set on the template",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you create the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.  Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the current template version being created. This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of a template. A definition is the data model of all features in a Dashboard, Template, or Analysis. Either a SourceEntity or a Definition must be provided in order for the request to be valid",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "TThe option to relax the validation needed to create a template with definition objects. This skips the validation step for specific errors",
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
      name: "create-template-alias",
      description: "Creates a template alias for a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template that you creating an alias for",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "An ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name that you want to give to the template alias that you're creating. Don't start the alias name with the $ character. Alias names that start with $ are reserved by Amazon QuickSight",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-version-number",
          description: "The version number of the template",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-theme",
      description:
        "Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon QuickSight in the Amazon QuickSight User Guide",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account where you want to store the new theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description:
            "An ID for the theme that you want to create. The theme ID is unique per Amazon Web Services Region in each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-theme-id",
          description:
            "The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within an analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the first version of the theme that you're creating. Every time UpdateTheme is called, a new version is created. Each version of the theme has a description of the version in the VersionDescription field",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The theme configuration, which contains the theme display properties",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A valid grouping of resource permissions to apply to the new theme",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs for the resource tag or tags that you want to add to the resource",
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
      name: "create-theme-alias",
      description: "Creates a theme alias for a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme for the new theme alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "An ID for the theme alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name that you want to give to the theme alias that you are creating. The alias name can't begin with a $. Alias names that start with $ are reserved by Amazon QuickSight",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-version-number",
          description: "The version number of the theme",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-topic",
      description: "Creates a new Q topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that you want to create a topic in",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID for the topic that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic",
          description: "The definition of a topic to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags that are assigned to the dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--folder-arns",
          description:
            "The Folder ARN of the folder that you want the topic to reside in",
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
      name: "create-topic-refresh-schedule",
      description: "Creates a topic refresh schedule",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic you're creating a refresh schedule for",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-arn",
          description: "The Amazon Resource Name (ARN) of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-name",
          description: "The name of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-schedule",
          description: "The definition of a refresh schedule",
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
      name: "create-vpc-connection",
      description: "Creates a new VPC connection",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account where you want to create a new VPC connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-connection-id",
          description:
            "The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the VPC connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "A list of subnet IDs for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "A list of security group IDs for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--dns-resolvers",
          description:
            "A list of IP addresses of DNS resolver endpoints for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description: "The IAM role to associate with the VPC connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs for the resource tag or tags assigned to the VPC connection",
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
      name: "delete-account-customization",
      description:
        "Deletes all Amazon QuickSight customizations in this Amazon Web Services Region for the specified Amazon Web Services account and Amazon QuickSight namespace",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to delete Amazon QuickSight customizations from in this Amazon Web Services Region",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that you're deleting the customizations from",
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
      name: "delete-account-subscription",
      description:
        "Use the DeleteAccountSubscription operation to delete an Amazon QuickSight account. This operation will result in an error message if you have configured your account termination protection settings to True. To change this setting and delete your account, call the UpdateAccountSettings API and set the value of the TerminationProtectionEnabled parameter to False, then make another call to the DeleteAccountSubscription API",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account that you want to delete",
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
      name: "delete-analysis",
      description:
        "Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. Amazon QuickSight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, Amazon QuickSight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the Amazon QuickSight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account where you want to delete an analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description: "The ID of the analysis that you're deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-window-in-days",
          description:
            "A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30",
          args: {
            name: "long",
          },
        },
        {
          name: "--force-delete-without-recovery",
          description:
            "This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted",
        },
        {
          name: "--no-force-delete-without-recovery",
          description:
            "This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-brand",
      description: "Deletes an Amazon QuickSight brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
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
      name: "delete-brand-assignment",
      description: "Deletes a brand assignment",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand assignment",
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
      name: "delete-custom-permissions",
      description: "Deletes a custom permissions profile",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permissions profile that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "The name of the custom permissions profile that you want to delete",
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
      name: "delete-dashboard",
      description: "Deletes a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-set",
      description: "Deletes a dataset",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "delete-data-set-refresh-properties",
      description: "Deletes the dataset refresh properties of the dataset",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
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
      name: "delete-data-source",
      description:
        "Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "delete-default-q-business-application",
      description:
        "Deletes a linked Amazon Q Business application from an Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon QuickSight account that you want to disconnect from a Amazon Q Business application",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that you want to delete a linked Amazon Q Business application from. If this field is left blank, the Amazon Q Business application is deleted from the default namespace. Currently, the default namespace is the only valid value for this parameter",
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
      name: "delete-folder",
      description: "Deletes an empty folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
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
      name: "delete-folder-membership",
      description:
        "Removes an asset, such as a dashboard, analysis, or dataset, from a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The Folder ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description: "The ID of the asset that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-type",
          description:
            "The member type of the asset that you want to delete from a folder",
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
      name: "delete-group",
      description: "Removes a user group from Amazon QuickSight",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the group that you want to delete",
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
      name: "delete-group-membership",
      description:
        "Removes a user from a group so that the user is no longer a member of the group",
      options: [
        {
          name: "--member-name",
          description:
            "The name of the user that you want to delete from the group membership",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to delete the user from",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the group that you want to remove a user from",
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
      name: "delete-iam-policy-assignment",
      description: "Deletes an existing IAM policy assignment",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID where you want to delete the IAM policy assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description: "The name of the assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment",
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
      name: "delete-identity-propagation-config",
      description:
        "Deletes all access scopes and authorized targets that are associated with a service from the Amazon QuickSight IAM Identity Center application. This operation is only supported for Amazon QuickSight accounts that use IAM Identity Center",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that you want to delete an identity propagation configuration from",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description:
            "The name of the Amazon Web Services service that you want to delete the associated access scopes and authorized targets from",
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
      name: "delete-namespace",
      description:
        "Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to delete the Amazon QuickSight namespace from",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want to delete",
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
      name: "delete-refresh-schedule",
      description: "Deletes a refresh schedule from a dataset",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-id",
          description: "The ID of the refresh schedule",
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
      name: "delete-role-custom-permission",
      description: "Removes custom permissions from the role",
      options: [
        {
          name: "--role",
          description: "The role that you want to remove permissions from",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that includes the role",
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
      name: "delete-role-membership",
      description: "Removes a group from a role",
      options: [
        {
          name: "--member-name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The role that you want to remove permissions from",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the role",
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
      name: "delete-template",
      description: "Deletes a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template that you're deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "An ID for the template you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-template-alias",
      description:
        "Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the item to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "The ID for the template that the specified alias is for",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter",
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
      name: "delete-theme",
      description: "Deletes a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme that you're deleting",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "An ID for the theme that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version of the theme that you want to delete.   Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-theme-alias",
      description:
        "Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme alias to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme that the specified alias is for",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The unique name for the theme alias to delete",
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
      name: "delete-topic",
      description: "Deletes a topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "delete-topic-refresh-schedule",
      description: "Deletes a topic refresh schedule",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
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
      name: "delete-user",
      description:
        "Deletes the Amazon QuickSight user that is associated with the identity of the IAM user or role that's making the call. The IAM user isn't deleted as a result of this call",
      options: [
        {
          name: "--user-name",
          description: "The name of the user that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
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
      name: "delete-user-by-principal-id",
      description: "Deletes a user identified by its principal ID",
      options: [
        {
          name: "--principal-id",
          description: "The principal ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
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
      name: "delete-user-custom-permission",
      description: "Deletes a custom permissions profile from a user",
      options: [
        {
          name: "--user-name",
          description:
            "The username of the user that you want to remove custom permissions from",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permission configuration that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that the user belongs to",
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
      name: "delete-vpc-connection",
      description: "Deletes a VPC connection",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account where you want to delete a VPC connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-connection-id",
          description:
            "The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account",
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
      name: "describe-account-customization",
      description:
        "Describes the customizations associated with the provided Amazon Web Services account and Amazon Amazon QuickSight namespace in an Amazon Web Services Region. The Amazon QuickSight console evaluates which customizations to apply by running this API operation with the Resolved flag included.  To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved.     Amazon Web Services account - The Amazon Web Services account exists at the top of the hierarchy. It has the potential to use all of the Amazon Web Services Regions and Amazon Web Services Services. When you subscribe to Amazon QuickSight, you choose one Amazon Web Services Region to use as your home Region. That's where your free SPICE capacity is located. You can use Amazon QuickSight in any supported Amazon Web Services Region.     Amazon Web Services Region - In each Amazon Web Services Region where you sign in to Amazon QuickSight at least once, Amazon QuickSight acts as a separate instance of the same service. If you have a user directory, it resides in us-east-1, which is the US East (N. Virginia). Generally speaking, these users have access to Amazon QuickSight in any Amazon Web Services Region, unless they are constrained to a namespace.  To run the command in a different Amazon Web Services Region, you change your Region settings. If you're using the CLI, you can use one of the following options:   Use command line options.    Use named profiles.    Run aws configure to change your default Amazon Web Services Region. Use Enter to key the same settings for your keys. For more information, see Configuring the CLI.      Namespace - A QuickSight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same Amazon Web Services account and Amazon Web Services Region.    Applied customizations - Within an Amazon Web Services Region, a set of Amazon QuickSight customizations can apply to an Amazon Web Services account or to a namespace. Settings that you apply to a namespace override settings that you apply to an Amazon Web Services account. All settings are isolated to a single Amazon Web Services Region. To apply them in other Amazon Web Services Regions, run the CreateAccountCustomization command in each Amazon Web Services Region where you want to apply the same customizations",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to describe Amazon QuickSight customizations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that you want to describe Amazon QuickSight customizations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolved",
          description:
            "The Resolved flag works with the other parameters to determine which view of Amazon QuickSight customizations is returned. You can add this flag to your command to use the same view that Amazon QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels",
        },
        {
          name: "--no-resolved",
          description:
            "The Resolved flag works with the other parameters to determine which view of Amazon QuickSight customizations is returned. You can add this flag to your command to use the same view that Amazon QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-account-settings",
      description:
        "Describes the settings that were used when your Amazon QuickSight subscription was first created in this Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the settings that you want to list",
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
      name: "describe-account-subscription",
      description:
        "Use the DescribeAccountSubscription operation to receive a description of an Amazon QuickSight account's subscription. A successful API call returns an AccountInfo object that includes an account's name, subscription status, authentication type, edition, and notification email address",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID associated with your Amazon QuickSight account",
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
      name: "describe-analysis",
      description: "Provides a summary of the metadata for an analysis",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis that you're describing. The ID is part of the URL of the analysis",
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
      name: "describe-analysis-definition",
      description:
        "Provides a detailed description of the definition of an analysis.  If you do not need to know details about the content of an Analysis, for instance if you are trying to check the status of a recently created or updated Analysis, use the  DescribeAnalysis  instead",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis. You must be using the Amazon Web Services account that the analysis is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis that you're describing. The ID is part of the URL of the analysis",
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
      name: "describe-analysis-permissions",
      description: "Provides the read and write permissions for an analysis",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis whose permissions you're describing. You must be using the Amazon Web Services account that the analysis is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis whose permissions you're describing. The ID is part of the analysis URL",
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
      name: "describe-asset-bundle-export-job",
      description:
        "Describes an existing export job. Poll job descriptions after a job starts to know the status of the job. When a job succeeds, a URL is provided to download the exported assets' data from. Download URLs are valid for five minutes after they are generated. You can call the DescribeAssetBundleExportJob API for a new download URL as needed. Job descriptions are available for 14 days after the job starts",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account the export job is executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-bundle-export-job-id",
          description:
            "The ID of the job that you want described. The job ID is set when you start a new job with a StartAssetBundleExportJob API call",
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
      name: "describe-asset-bundle-import-job",
      description:
        "Describes an existing import job. Poll job descriptions after starting a job to know when it has succeeded or failed. Job descriptions are available for 14 days after job starts",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account the import job was executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-bundle-import-job-id",
          description:
            "The ID of the job. The job ID is set when you start a new job with a StartAssetBundleImportJob API call",
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
      name: "describe-brand",
      description: "Describes a brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of the specific version. The default value is the latest version",
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
      name: "describe-brand-assignment",
      description: "Describes a brand assignment",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand assignment",
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
      name: "describe-brand-published-version",
      description: "Describes the published version of the brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
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
      name: "describe-custom-permissions",
      description: "Describes a custom permissions profile",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permissions profile that you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description: "The name of the custom permissions profile to describe",
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
      name: "describe-dashboard",
      description: "Provides a summary for a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description: "The alias name",
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
      name: "describe-dashboard-definition",
      description:
        "Provides a detailed description of the definition of a dashboard.  If you do not need to know details about the content of a dashboard, for instance if you are trying to check the status of a recently created or updated dashboard, use the  DescribeDashboard  instead",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description: "The alias name",
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
      name: "describe-dashboard-permissions",
      description: "Describes read and write permissions for a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're describing permissions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard, also added to the IAM policy",
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
      name: "describe-dashboard-snapshot-job",
      description:
        "Describes an existing snapshot job. Poll job descriptions after a job starts to know the status of the job. For information on available status codes, see JobStatus",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the dashboard snapshot job is executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID of the dashboard that you have started a snapshot job for",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-job-id",
          description:
            "The ID of the job to be described. The job ID is set when you start a new job with a StartDashboardSnapshotJob API call",
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
      name: "describe-dashboard-snapshot-job-result",
      description:
        "Describes the result of an existing snapshot job that has finished running. A finished snapshot job will return a COMPLETED or FAILED status when you poll the job with a DescribeDashboardSnapshotJob API call. If the job has not finished running, this operation returns a message that says Dashboard Snapshot Job with id <SnapshotjobId> has not reached a terminal state",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the dashboard snapshot job is executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID of the dashboard that you have started a snapshot job for",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-job-id",
          description:
            "The ID of the job to be described. The job ID is set when you start a new job with a StartDashboardSnapshotJob API call",
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
      name: "describe-dashboards-qa-configuration",
      description: "Describes an existing dashboard QA configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want described",
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
      name: "describe-data-set",
      description:
        "Describes a dataset. This operation doesn't support datasets that include uploaded files as a source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-data-set-permissions",
      description:
        "Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-data-set-refresh-properties",
      description: "Describes the refresh properties of a dataset",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
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
      name: "describe-data-source",
      description: "Describes a data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-data-source-permissions",
      description: "Describes the resource permissions for a data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-default-q-business-application",
      description:
        "Describes a Amazon Q Business application that is linked to an Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon QuickSight account that is linked to the Amazon Q Business application that you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that contains the linked Amazon Q Business application. If this field is left blank, the default namespace is used. Currently, the default namespace is the only valid value for this parameter",
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
      name: "describe-folder",
      description: "Describes a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
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
      name: "describe-folder-permissions",
      description: "Describes permissions for a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the folder whose permissions you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token for the next set of results",
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
      name: "describe-folder-resolved-permissions",
      description:
        "Describes the folder resolved permissions. Permissions consists of both folder direct permissions and the inherited permissions from the ancestor folders",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the folder whose permissions you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description: "A pagination token for the next set of results",
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
      name: "describe-group",
      description:
        "Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN)",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the group that you want described",
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
      name: "describe-group-membership",
      description:
        "Use the DescribeGroupMembership operation to determine if a user is a member of the specified group. If the user exists and is a member of the specified group, an associated GroupMember object is returned",
      options: [
        {
          name: "--member-name",
          description: "The user name of the user that you want to search for",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description: "The name of the group that you want to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace that includes the group you are searching within",
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
      name: "describe-iam-policy-assignment",
      description:
        "Describes an existing IAM policy assignment, as specified by the assignment name",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the assignment that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description: "The name of the assignment, also called a rule",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment",
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
      name: "describe-ingestion",
      description: "Describes a SPICE ingestion",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion",
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
      name: "describe-ip-restriction",
      description: "Provides a summary and status of IP rules",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the IP rules",
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
      name: "describe-key-registration",
      description:
        "Describes all customer managed key registrations in a Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the customer managed key registration that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-key-only",
          description:
            "Determines whether the request returns the default key only",
        },
        {
          name: "--no-default-key-only",
          description:
            "Determines whether the request returns the default key only",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-namespace",
      description: "Describes the current namespace",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the Amazon QuickSight namespace that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want to describe",
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
      name: "describe-q-personalization-configuration",
      description: "Describes a personalization configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the personalization configuration that the user wants described",
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
      name: "describe-quick-sight-q-search-configuration",
      description:
        "Describes the state of a Amazon QuickSight Q Search configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the Amazon QuickSight Q Search configuration that the user wants described",
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
      name: "describe-refresh-schedule",
      description: "Provides a summary of a refresh schedule",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-id",
          description: "The ID of the refresh schedule",
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
      name: "describe-role-custom-permission",
      description: "Describes all custom permissions that are mapped to a role",
      options: [
        {
          name: "--role",
          description:
            "The name of the role whose permissions you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the role",
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
      name: "describe-template",
      description: "Describes a template's metadata",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "(Optional) The number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the template is described",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates",
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
      name: "describe-template-alias",
      description: "Describes the template alias for a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template alias that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates",
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
      name: "describe-template-definition",
      description:
        "Provides a detailed description of the definition of a template.  If you do not need to know details about the content of a template, for instance if you are trying to check the status of a recently created or updated template, use the  DescribeTemplate  instead",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template. You must be using the Amazon Web Services account that the template is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID of the template that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version number of the template",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates",
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
      name: "describe-template-permissions",
      description: "Describes read and write permissions on a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
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
      name: "describe-theme",
      description: "Describes a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the theme is described",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes",
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
      name: "describe-theme-alias",
      description: "Describes the alias for a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme alias that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The name of the theme alias that you want to describe",
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
      name: "describe-theme-permissions",
      description: "Describes the read and write permissions for a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme that you're describing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description:
            "The ID for the theme that you want to describe permissions for",
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
      name: "describe-topic",
      description: "Describes a topic",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-topic-permissions",
      description: "Describes the permissions of a topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic that you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "describe-topic-refresh",
      description: "Describes the status of a topic refresh",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic whose refresh you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-id",
          description:
            "The ID of the refresh, which is performed when the topic is created or updated",
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
      name: "describe-topic-refresh-schedule",
      description: "Deletes a topic refresh schedule",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that contains the refresh schedule that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
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
      name: "describe-user",
      description: "Returns information about a user, given the user name",
      options: [
        {
          name: "--user-name",
          description: "The name of the user that you want to describe",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
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
      name: "describe-vpc-connection",
      description: "Describes a VPC connection",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account that contains the VPC connection that you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-connection-id",
          description:
            "The ID of the VPC connection that you're creating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account",
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
      name: "generate-embed-url-for-anonymous-user",
      description:
        "Generates an embed URL that you can use to embed an Amazon QuickSight dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the dashboard that you're embedding",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be in [15-600] minutes range",
          args: {
            name: "long",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that the anonymous user virtually belongs to. If you are not using an Amazon QuickSight custom namespace, set this to default",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-tags",
          description:
            "The session tags used for row-level security. Before you use this parameter, make sure that you have configured the relevant datasets using the DataSet$RowLevelPermissionTagConfiguration parameter so that session tags can be used to provide row-level security. These are not the tags used for the Amazon Web Services resource tagging feature. For more information, see Using Row-Level Security (RLS) with Tagsin the Amazon QuickSight User Guide",
          args: {
            name: "list",
          },
        },
        {
          name: "--authorized-resource-arns",
          description:
            "The Amazon Resource Names (ARNs) for the Amazon QuickSight resources that the user is authorized to access during the lifetime of the session. If you choose Dashboard embedding experience, pass the list of dashboard ARNs in the account that you want the user to be able to view. If you want to make changes to the theme of your embedded content, pass a list of theme ARNs that the anonymous users need access to. Currently, you can pass up to 25 theme ARNs in each API call",
          args: {
            name: "list",
          },
        },
        {
          name: "--experience-configuration",
          description:
            "The configuration of the experience that you are embedding",
          args: {
            name: "structure",
          },
        },
        {
          name: "--allowed-domains",
          description:
            "The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call. To include all subdomains under a specific domain to the allow list, use *. For example, https://*.sapp.amazon.com includes all subdomains under https://sapp.amazon.com",
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
      name: "generate-embed-url-for-registered-user",
      description:
        "Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user registered in an Amazon QuickSight account. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions. The following rules apply to the generated URL:   It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.   The URL validity period should not be confused with the actual session lifetime that can be customized using the  SessionLifetimeInMinutes  parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the dashboard that you're embedding",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be in [15-600] minutes range",
          args: {
            name: "long",
          },
        },
        {
          name: "--user-arn",
          description: "The Amazon Resource Name for the registered user",
          args: {
            name: "string",
          },
        },
        {
          name: "--experience-configuration",
          description:
            "The experience that you want to embed. For registered users, you can embed Amazon QuickSight dashboards, Amazon QuickSight visuals, the Amazon QuickSight Q search bar, the Amazon QuickSight Generative Q&A experience, or the entire Amazon QuickSight console",
          args: {
            name: "structure",
          },
        },
        {
          name: "--allowed-domains",
          description:
            "The domains that you want to add to the allow list for access to the generated URL that is then embedded. This optional parameter overrides the static domains that are configured in the Manage QuickSight menu in the Amazon QuickSight console. Instead, it allows only the domains that you include in this parameter. You can list up to three domains or subdomains in each API call. To include all subdomains under a specific domain to the allow list, use *. For example, https://*.sapp.amazon.com includes all subdomains under https://sapp.amazon.com",
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
      name: "generate-embed-url-for-registered-user-with-identity",
      description:
        "Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user that is registered in an Amazon QuickSight account that uses IAM Identity Center for authentication. This API requires identity-enhanced IAM Role sessions for the authenticated user that the API call is being made for. This API uses trusted identity propagation to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have trusted Identity Propagation enabled for Amazon QuickSight with the scope value set to quicksight:read. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions",
      options: [
        {
          name: "--aws-account-id",
          description: "The ID of the Amazon Web Services registered user",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description: "The validity of the session in minutes",
          args: {
            name: "long",
          },
        },
        {
          name: "--experience-configuration",
          description:
            "The type of experience you want to embed. For registered users, you can embed Amazon QuickSight dashboards or the Amazon QuickSight console.  Exactly one of the experience configurations is required. You can choose Dashboard or QuickSightConsole. You cannot choose more than one experience configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--allowed-domains",
          description:
            "A list of domains to be allowed to generate the embed URL",
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
      name: "get-dashboard-embed-url",
      description:
        "Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon QuickSight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions.  Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the generated URL:   They must be used together.   They can be used one time only.   They are valid for 5 minutes after you run this command.   You are charged only when the URL is used or there is interaction with Amazon QuickSight.   The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional SessionLifetimeInMinutes parameter to customize session duration.   For more information, see Embedding Analytics Using GetDashboardEmbedUrl in the Amazon QuickSight User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon QuickSight Developer Portal",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the dashboard that you're embedding",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID for the dashboard, also added to the Identity and Access Management (IAM) policy",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "The authentication method that the user uses to sign in",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be 15-600 minutes",
          args: {
            name: "long",
          },
        },
        {
          name: "--undo-redo-disabled",
          description:
            "Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button",
        },
        {
          name: "--no-undo-redo-disabled",
          description:
            "Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button",
        },
        {
          name: "--reset-disabled",
          description:
            "Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button",
        },
        {
          name: "--no-reset-disabled",
          description:
            "Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button",
        },
        {
          name: "--state-persistence-enabled",
          description:
            "Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE",
        },
        {
          name: "--no-state-persistence-enabled",
          description:
            "Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (Amazon QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in Amazon QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE",
        },
        {
          name: "--user-arn",
          description:
            "The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.   Omit this parameter for users in the third group \u2013 IAM users and IAM role-based sessions",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that contains the dashboard IDs in this request. If you're not using a custom namespace, set Namespace = default",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-dashboard-ids",
          description:
            'A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the IdentityType parameter must be set to ANONYMOUS because other identity types authenticate as Amazon QuickSight or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards',
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
      name: "get-session-embed-url",
      description:
        "Generates a session URL and authorization code that you can use to embed the Amazon Amazon QuickSight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon QuickSight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the  UpdateUser  API operation. Use  RegisterUser  API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon QuickSight User Guide:    Embedding Analytics     Customizing Access to the Amazon QuickSight Console",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account associated with your Amazon QuickSight subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--entry-point",
          description:
            "The URL you use to access the embedded session. The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId  - where DashboardId is the actual ID key from the Amazon QuickSight console URL of the dashboard    /analyses/AnalysisId  - where AnalysisId is the actual ID key from the Amazon QuickSight console URL of the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be 15-600 minutes",
          args: {
            name: "long",
          },
        },
        {
          name: "--user-arn",
          description:
            "The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any type of Amazon QuickSight users in your account (readers, authors, or admins). They need to be authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation   Omit this parameter for users in the third group, IAM users and IAM role-based sessions",
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
      name: "list-analyses",
      description:
        "Lists Amazon QuickSight analyses that exist in the specified Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analyses",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "list-asset-bundle-export-jobs",
      description:
        "Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleExportJobs only returns the most recent job that uses the repeated job ID",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the export jobs were executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-asset-bundle-import-jobs",
      description:
        "Lists all asset bundle import jobs that have taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, ListAssetBundleImportJobs only returns the most recent job that uses the repeated job ID",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the import jobs were executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-brands",
      description: "Lists all brands in an Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brands that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned in a single request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
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
      name: "list-custom-permissions",
      description: "Returns a list of all the custom permissions profiles",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permissions profiles that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
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
      name: "list-dashboard-versions",
      description:
        "Lists all the versions of the dashboards in the Amazon QuickSight subscription",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're listing versions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-dashboards",
      description: "Lists dashboards in an Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboards that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-data-sets",
      description:
        "Lists all of the datasets belonging to the current Amazon Web Services account in an Amazon Web Services Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-data-sources",
      description:
        "Lists data sources in current Amazon Web Services Region that belong to this Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-folder-members",
      description:
        "List all assets (DASHBOARD, ANALYSIS, and DATASET) in a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-folders",
      description: "Lists all folders in an account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-folders-for-resource",
      description: "List all folders that a resource is a member of",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) the resource whose folders you need to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-group-memberships",
      description: "Lists member users in a group",
      options: [
        {
          name: "--group-name",
          description:
            "The name of the group that you want to see a membership list of",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace of the group that you want a list of users from",
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
      name: "list-groups",
      description: "Lists all user groups in Amazon QuickSight",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want a list of groups from",
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
      name: "list-iam-policy-assignments",
      description:
        "Lists the IAM policy assignments in the current Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains these IAM policy assignments",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description: "The status of the assignments",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace for the assignments",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-iam-policy-assignments-for-user",
      description:
        "Lists all of the IAM policy assignments, including the Amazon Resource Names (ARNs), for the IAM policies assigned to the specified user and group, or groups that the user belongs to",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the assignments",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description: "The name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the assignment",
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
      name: "list-identity-propagation-configs",
      description:
        "Lists all services and authorized targets that the Amazon QuickSight IAM Identity Center application can access. This operation is only supported for Amazon QuickSight accounts that use IAM Identity Center",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contain the identity propagation configurations of",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
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
      name: "list-ingestions",
      description: "Lists the history of SPICE ingestions for a dataset",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-namespaces",
      description:
        "Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the Amazon QuickSight namespaces that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous ListNameSpaces API call if there is more data that can be returned. To receive the data, make another ListNamespaces API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a ListNamespaces API call with an expired token, you will receive a HTTP 400 InvalidNextTokenException error",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "list-refresh-schedules",
      description:
        "Lists the refresh schedules of a dataset. Each dataset can have up to 5 schedules",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
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
      name: "list-role-memberships",
      description: "Lists all groups that are associated with a role",
      options: [
        {
          name: "--role",
          description: "The name of the role",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that includes the role",
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
      description: "Lists the tags assigned to a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want a list of tags for",
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
      name: "list-template-aliases",
      description: "Lists all the aliases of a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template aliases that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-template-versions",
      description:
        "Lists all the versions of the templates in the current Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the templates that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-templates",
      description:
        "Lists all the templates in the current Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the templates that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-theme-aliases",
      description: "Lists all the aliases of a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme aliases that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-theme-versions",
      description:
        "Lists all the versions of the themes in the current Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the themes that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-themes",
      description:
        "Lists all the themes in the current Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the themes that you're listing",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--type",
          description:
            "The type of themes that you want to list. Valid options include the following:    ALL (default)- Display all existing themes.    CUSTOM - Display only the themes created by people using Amazon QuickSight.    QUICKSIGHT - Display only the starting themes defined by Amazon QuickSight",
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
      name: "list-topic-refresh-schedules",
      description: "Lists all of the refresh schedules for a topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic whose refresh schedule you want described",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID for the topic that you want to describe. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "list-topic-reviewed-answers",
      description: "Lists all reviewed answers for a Q Topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that containd the reviewed answers that you want listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID for the topic that contains the reviewed answer that you want to list. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
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
      name: "list-topics",
      description: "Lists all of the topics within an account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topics that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "list-user-groups",
      description:
        "Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of",
      options: [
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to list group memberships for",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request",
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
      name: "list-users",
      description:
        "Returns a list of all of the Amazon QuickSight users belonging to this account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
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
      name: "list-vpc-connections",
      description:
        "Lists all of the VPC connections in the current set Amazon Web Services Region of an Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account that contains the VPC connections that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "predict-qa-results",
      description:
        "Predicts existing visuals or generates new visuals to answer a given query",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the user wants to execute Predict QA results in",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description: "The query text to be used to predict QA results",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-quick-sight-q-index",
          description: "Indicates whether Q indicies are included or excluded",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-generated-answer",
          description:
            "Indicates whether generated answers are included or excluded",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-topics-to-consider",
          description:
            "The number of maximum topics to be considered to predict QA results",
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
      name: "put-data-set-refresh-properties",
      description:
        "Creates or updates the dataset refresh properties for the dataset",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-refresh-properties",
          description: "The dataset refresh properties",
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
      name: "register-user",
      description:
        "Creates an Amazon QuickSight user whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. When you register a new user from the Amazon QuickSight API, Amazon QuickSight generates a registration URL. The user accesses this registration URL to create their account. Amazon QuickSight doesn't send a registration email to users who are registered from the Amazon QuickSight API. If you want new users to receive a registration email, then add those users in the Amazon QuickSight console. For more information on registering a new user in the Amazon QuickSight console, see  Inviting users to access Amazon QuickSight",
      options: [
        {
          name: "--identity-type",
          description:
            "The identity type that your Amazon QuickSight account uses to manage the identity of users",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the user that you want to register",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-role",
          description:
            "The Amazon QuickSight role for the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    READER_PRO: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Amazon QuickSight, can build stories with Amazon Q, and can generate executive summaries from dashboards.    AUTHOR_PRO: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.    ADMIN_PRO: Admin Pros are Author Pros who can also manage Amazon QuickSight administrative settings. Admin Pro users are billed at Author Pro pricing.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-arn",
          description:
            "The ARN of the IAM user or role that you are registering with Amazon QuickSight",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-name",
          description:
            "You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the CLI Reference",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to create for the user you are registering",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   To add custom permissions to an existing user, use  UpdateUser  instead. A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Amazon QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a Amazon QuickSight user.  Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Amazon QuickSight users to one of the default security cohorts in Amazon QuickSight (admin, author, reader, admin pro, author pro, reader pro). This feature is available only to Amazon QuickSight Enterprise edition subscriptions",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-login-federation-provider-type",
          description:
            'The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.    COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the COGNITO provider type, don\u2019t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.    CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider. When choosing CUSTOM_OIDC type, use the CustomFederationProviderUrl parameter to provide the custom OIDC provider URL',
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-federation-provider-url",
          description:
            "The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should only be used when ExternalLoginFederationProviderType parameter is set to CUSTOM_OIDC",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-login-id",
          description:
            "The identity ID for a user in the external login provider",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tags to associate with the user",
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
      name: "restore-analysis",
      description: "Restores an analysis",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description: "The ID of the analysis that you're restoring",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-to-folders",
          description:
            "A boolean value that determines if the analysis will be restored to folders that it previously resided in. A True value restores analysis back to all folders that it previously resided in. A False value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to True",
        },
        {
          name: "--no-restore-to-folders",
          description:
            "A boolean value that determines if the analysis will be restored to folders that it previously resided in. A True value restores analysis back to all folders that it previously resided in. A False value restores the analysis but does not restore the analysis back to all previously resided folders. Restoring a restricted analysis requires this parameter to be set to True",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-analyses",
      description:
        "Searches for analyses that belong to the user specified in the filter.  This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analyses that you're searching for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The structure for the search filters that you want to apply to your search",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return",
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
      name: "search-dashboards",
      description:
        "Searches for dashboards that belong to a user.   This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the user whose dashboards you're searching for",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            'The filters to apply to the search. Currently, you can search only by user name, for example, "Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "search-data-sets",
      description:
        "Use the SearchDataSets operation to search for datasets that belong to an account",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "The filters to apply to the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "search-data-sources",
      description:
        "Use the SearchDataSources operation to search for data sources that belong to an account",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "The filters to apply to the search",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "search-folders",
      description: "Searches the subfolders in a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            'The filters to apply to the search. Currently, you can search only by the parent folder ARN. For example, "Filters": [ { "Name": "PARENT_FOLDER_ARN", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:folder/folderId" } ]',
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "search-groups",
      description:
        "Use the SearchGroups operation to search groups in a specified Amazon QuickSight namespace using the supplied filters",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want to search",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The structure for the search filters that you want to apply to your search",
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
      name: "search-topics",
      description:
        "Searches for any Q topic that exists in an Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic that you want to find",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The filters that you want to use to search for the topic",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request",
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
      name: "start-asset-bundle-export-job",
      description:
        "Starts an Asset Bundle export job. An Asset Bundle export job exports specified Amazon QuickSight assets. You can also choose to export any asset dependencies in the same job. Export jobs run asynchronously and can be polled with a DescribeAssetBundleExportJob API call. When a job is successfully completed, a download URL that contains the exported assets is returned. The URL is valid for 5 minutes and can be refreshed with a DescribeAssetBundleExportJob API call. Each Amazon QuickSight account can run up to 5 export jobs concurrently. The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account to export assets from",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-bundle-export-job-id",
          description:
            "The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arns",
          description:
            "An array of resource ARNs to export. The following resources are supported.    Analysis     Dashboard     DataSet     DataSource     RefreshSchedule     Theme     VPCConnection    The API caller must have the necessary permissions in their IAM role to access each resource before the resources can be exported",
          args: {
            name: "list",
          },
        },
        {
          name: "--include-all-dependencies",
          description:
            "A Boolean that determines whether all dependencies of each resource ARN are recursively exported with the job. For example, say you provided a Dashboard ARN to the ResourceArns parameter. If you set IncludeAllDependencies to TRUE, any theme, dataset, and data source resource that is a dependency of the dashboard is also exported",
        },
        {
          name: "--no-include-all-dependencies",
          description:
            "A Boolean that determines whether all dependencies of each resource ARN are recursively exported with the job. For example, say you provided a Dashboard ARN to the ResourceArns parameter. If you set IncludeAllDependencies to TRUE, any theme, dataset, and data source resource that is a dependency of the dashboard is also exported",
        },
        {
          name: "--export-format",
          description: "The export data format",
          args: {
            name: "string",
          },
        },
        {
          name: "--cloud-formation-override-property-configuration",
          description:
            "An optional collection of structures that generate CloudFormation parameters to override the existing resource property values when the resource is exported to a new CloudFormation template. Use this field if the ExportFormat field of a StartAssetBundleExportJobRequest API call is set to CLOUDFORMATION_JSON",
          args: {
            name: "structure",
          },
        },
        {
          name: "--include-permissions",
          description:
            "A Boolean that determines whether all permissions for each resource ARN are exported with the job. If you set IncludePermissions to TRUE, any permissions associated with each resource are exported",
        },
        {
          name: "--no-include-permissions",
          description:
            "A Boolean that determines whether all permissions for each resource ARN are exported with the job. If you set IncludePermissions to TRUE, any permissions associated with each resource are exported",
        },
        {
          name: "--include-tags",
          description:
            "A Boolean that determines whether all tags for each resource ARN are exported with the job. If you set IncludeTags to TRUE, any tags associated with each resource are exported",
        },
        {
          name: "--no-include-tags",
          description:
            "A Boolean that determines whether all tags for each resource ARN are exported with the job. If you set IncludeTags to TRUE, any tags associated with each resource are exported",
        },
        {
          name: "--validation-strategy",
          description:
            "An optional parameter that determines which validation strategy to use for the export job. If StrictModeForAllResources is set to TRUE, strict validation for every error is enforced. If it is set to FALSE, validation is skipped for specific UI errors that are shown as warnings. The default value for StrictModeForAllResources is FALSE",
          args: {
            name: "structure",
          },
        },
        {
          name: "--include-folder-memberships",
          description:
            "A Boolean that determines if the exported asset carries over information about the folders that the asset is a member of",
        },
        {
          name: "--no-include-folder-memberships",
          description:
            "A Boolean that determines if the exported asset carries over information about the folders that the asset is a member of",
        },
        {
          name: "--include-folder-members",
          description:
            "A setting that indicates whether you want to include folder assets. You can also use this setting to recusrsively include all subfolders of an exported folder",
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
      name: "start-asset-bundle-import-job",
      description:
        'Starts an Asset Bundle import job. An Asset Bundle import job imports specified Amazon QuickSight assets into an Amazon QuickSight account. You can also choose to import a naming prefix and specified configuration overrides. The assets that are contained in the bundle file that you provide are used to create or update a new or existing asset in your Amazon QuickSight account. Each Amazon QuickSight account can run up to 5 import jobs concurrently. The API caller must have the necessary "create", "describe", and "update" permissions in their IAM role to access each resource type that is contained in the bundle file before the resources can be imported',
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account to import assets into",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-bundle-import-job-id",
          description:
            "The ID of the job. This ID is unique while the job is running. After the job is completed, you can reuse this ID for another job",
          args: {
            name: "string",
          },
        },
        {
          name: "--asset-bundle-import-source",
          description:
            "The source of the asset bundle zip file that contains the data that you want to import. The file must be in QUICKSIGHT_JSON format. To specify a local file use --asset-bundle-import-source-bytes instead",
          args: {
            name: "structure",
          },
        },
        {
          name: "--override-parameters",
          description:
            "Optional overrides that are applied to the resource configuration before import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--failure-action",
          description:
            "The failure action for the import job. If you choose ROLLBACK, failed import jobs will attempt to undo any asset changes caused by the failed job. If you choose DO_NOTHING, failed import jobs will not attempt to roll back any asset changes caused by the failed job, possibly keeping the Amazon QuickSight account in an inconsistent state",
          args: {
            name: "string",
          },
        },
        {
          name: "--override-permissions",
          description:
            "Optional permission overrides that are applied to the resource configuration before import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--override-tags",
          description:
            "Optional tag overrides that are applied to the resource configuration before import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--override-validation-strategy",
          description:
            "An optional validation strategy override for all analyses and dashboards that is applied to the resource configuration before import",
          args: {
            name: "structure",
          },
        },
        {
          name: "--asset-bundle-import-source-bytes",
          description:
            "The content of the asset bundle to be uploaded. To specify the content of a local file use the fileb:// prefix. Example: fileb://asset-bundle.zip",
          args: {
            name: "blob",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "start-dashboard-snapshot-job",
      description:
        "Starts an asynchronous job that generates a snapshot of a dashboard's output. You can request one or several of the following format configurations in each API call.   1 Paginated PDF   1 Excel workbook that includes up to 5 table or pivot table visuals   5 CSVs from table or pivot table visuals   The status of a submitted job can be polled with the DescribeDashboardSnapshotJob API. When you call the DescribeDashboardSnapshotJob API, check the JobStatus field in the response. Once the job reaches a COMPLETED or FAILED status, use the DescribeDashboardSnapshotJobResult API to obtain the URLs for the generated files. If the job fails, the DescribeDashboardSnapshotJobResult API returns detailed information about the error that occurred.  StartDashboardSnapshotJob API throttling  Amazon QuickSight utilizes API throttling to create a more consistent user experience within a time span for customers when they call the StartDashboardSnapshotJob. By default, 12 jobs can run simlutaneously in one Amazon Web Services account and users can submit up 10 API requests per second before an account is throttled. If an overwhelming number of API requests are made by the same user in a short period of time, Amazon QuickSight throttles the API calls to maintin an optimal experience and reliability for all Amazon QuickSight users.  Common throttling scenarios  The following list provides information about the most commin throttling scenarios that can occur.    A large number of SnapshotExport API jobs are running simultaneously on an Amazon Web Services account. When a new StartDashboardSnapshotJob is created and there are already 12 jobs with the RUNNING status, the new job request fails and returns a LimitExceededException error. Wait for a current job to comlpete before you resubmit the new job.    A large number of API requests are submitted on an Amazon Web Services account. When a user makes more than 10 API calls to the Amazon QuickSight API in one second, a ThrottlingException is returned.   If your use case requires a higher throttling limit, contact your account admin or Amazon Web ServicesSupport to explore options to tailor a more optimal expereince for your account.  Best practices to handle throttling  If your use case projects high levels of API traffic, try to reduce the degree of frequency and parallelism of API calls as much as you can to avoid throttling. You can also perform a timing test to calculate an estimate for the total processing time of your projected load that stays within the throttling limits of the Amazon QuickSight APIs. For example, if your projected traffic is 100 snapshot jobs before 12:00 PM per day, start 12 jobs in parallel and measure the amount of time it takes to proccess all 12 jobs. Once you obtain the result, multiply the duration by 9, for example (12 minutes * 9 = 108 minutes). Use the new result to determine the latest time at which the jobs need to be started to meet your target deadline. The time that it takes to process a job can be impacted by the following factors:   The dataset type (Direct Query or SPICE).   The size of the dataset.   The complexity of the calculated fields that are used in the dashboard.   The number of visuals that are on a sheet.   The types of visuals that are on the sheet.   The number of formats and snapshots that are requested in the job configuration.   The size of the generated snapshots",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the dashboard snapshot job is executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID of the dashboard that you want to start a snapshot job for",
          args: {
            name: "string",
          },
        },
        {
          name: "--snapshot-job-id",
          description:
            "An ID for the dashboard snapshot job. This ID is unique to the dashboard while the job is running. This ID can be used to poll the status of a job with a DescribeDashboardSnapshotJob while the job runs. You can reuse this ID for another job 24 hours after the current job is completed",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-configuration",
          description:
            "A structure that contains information about the anonymous users that the generated snapshot is for. This API will not return information about registered Amazon QuickSight",
          args: {
            name: "structure",
          },
        },
        {
          name: "--snapshot-configuration",
          description:
            "A structure that describes the configuration of the dashboard snapshot",
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
      name: "start-dashboard-snapshot-job-schedule",
      description:
        "Starts an asynchronous job that runs an existing dashboard schedule and sends the dashboard snapshot through email.  Only one job can run simultaneously in a given schedule. Repeated requests are skipped with a 202 HTTP status code. For more information, see Scheduling and sending Amazon QuickSight reports by email and Configuring email report settings for a Amazon QuickSight dashboard in the Amazon QuickSight User Guide",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that the dashboard snapshot job is executed in",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID of the dashboard that you want to start a snapshot job schedule for",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule-id",
          description:
            "The ID of the schedule that you want to start a snapshot job schedule for. The schedule ID can be found in the Amazon QuickSight console in the Schedules pane of the dashboard that the schedule is configured for",
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
        "Assigns one or more tags (key-value pairs) to the specified Amazon QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. Amazon QuickSight supports tagging on data set, data source, dashboard, template, topic, and user.  Tagging for Amazon QuickSight works in a similar way to tagging for other Amazon Web Services services, except for the following:   Tags are used to track costs for users in Amazon QuickSight. You can't tag other resources that Amazon QuickSight costs are based on, such as storage capacoty (SPICE), session usage, alert consumption, or reporting units.   Amazon QuickSight doesn't currently support the tag editor for Resource Groups",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to tag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the resource",
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
      description: "Removes a tag or tags from a resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to untag",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys of the key-value pairs for the resource tag or tags assigned to the resource",
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
      name: "update-account-customization",
      description:
        "Updates Amazon QuickSight customizations for the current Amazon Web Services Region. Currently, the only customization that you can use is a theme. You can use customizations for your Amazon Web Services account or, if you specify a namespace, for a Amazon QuickSight namespace instead. Customizations that apply to a namespace override customizations that apply to an Amazon Web Services account. To find out which customizations apply, use the DescribeAccountCustomization API operation",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to update Amazon QuickSight customizations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace that you want to update Amazon QuickSight customizations for",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-customization",
          description:
            "The Amazon QuickSight customizations you're updating in the current Amazon Web Services Region",
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
      name: "update-account-settings",
      description:
        "Updates the Amazon QuickSight settings in your Amazon Web Services account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the Amazon QuickSight settings that you want to list",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-namespace",
          description:
            "The default namespace for this Amazon Web Services account. Currently, the default is default. IAM users that register for the first time with Amazon QuickSight provide an email address that becomes associated with the default namespace",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-email",
          description:
            "The email address that you want Amazon QuickSight to send notifications to regarding your Amazon Web Services account or Amazon QuickSight subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--termination-protection-enabled",
          description:
            "A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A True value doesn't allow the account to be deleted and results in an error message if a user tries to make a DeleteAccountSubscription request. A False value will allow the account to be deleted",
        },
        {
          name: "--no-termination-protection-enabled",
          description:
            "A boolean value that determines whether or not an Amazon QuickSight account can be deleted. A True value doesn't allow the account to be deleted and results in an error message if a user tries to make a DeleteAccountSubscription request. A False value will allow the account to be deleted",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-analysis",
      description: "Updates an analysis in Amazon QuickSight",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID for the analysis that you're updating. This ID displays in the URL of the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive name for the analysis that you're updating. This name displays for the analysis in the Amazon QuickSight console",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-entity",
          description:
            "A source entity to use for the analysis that you're updating. This metadata structure contains details that describe a source template and one or more datasets",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the Amazon QuickSight console, make sure that you have access to it",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of an analysis. A definition is the data model of all features in a Dashboard, Template, or Analysis",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "The option to relax the validation needed to update an analysis with definition objects. This skips the validation step for specific errors",
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
      name: "update-analysis-permissions",
      description: "Updates the read and write permissions for an analysis",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the analysis whose permissions you're updating. You must be using the Amazon Web Services account that the analysis is in",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A structure that describes the permissions to add and the principal to add them to",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A structure that describes the permissions to remove and the principal to remove them from",
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
      name: "update-application-with-token-exchange-grant",
      description:
        "Updates an Amazon QuickSight application with a token exchange grant. This operation only supports Amazon QuickSight applications that are registered with IAM Identity Center",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account to be updated with a token exchange grant",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the Amazon QuickSight application",
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
      name: "update-brand",
      description: "Updates a brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-definition",
          description: "The definition of the brand",
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
      name: "update-brand-assignment",
      description: "Updates a brand assignment",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-arn",
          description: "The Amazon Resource Name (ARN) of the brand",
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
      name: "update-brand-published-version",
      description: "Updates the published version of a brand",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that owns the brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--brand-id",
          description: "The ID of the Amazon QuickSight brand",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the published version",
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
      name: "update-custom-permissions",
      description: "Updates a custom permissions profile",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permissions profile that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "The name of the custom permissions profile that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--capabilities",
          description:
            "A set of actions to include in the custom permissions profile",
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
      name: "update-dashboard",
      description:
        "Updates a dashboard in an Amazon Web Services account.  Updating a Dashboard creates a new dashboard version but does not immediately publish the new version. You can update the published version of a dashboard by using the  UpdateDashboardPublishedVersion  API operation",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name of the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you update the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a SourceTemplate entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the  CreateTemplate  API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parameters",
          description:
            "A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values",
          args: {
            name: "structure",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for the first version of the dashboard being created",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-publish-options",
          description:
            "Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, Amazon QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same Amazon Web Services account where you create the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of a dashboard. A definition is the data model of all features in a Dashboard, Template, or Analysis",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "The option to relax the validation needed to update a dashboard with definition objects. This skips the validation step for specific errors",
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
      name: "update-dashboard-links",
      description: "Updates the linked analyses on a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard whose links you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--link-entities",
          description:
            "List of analysis Amazon Resource Names (ARNs) to be linked to the dashboard",
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
      name: "update-dashboard-permissions",
      description: "Updates read and write permissions on a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard whose permissions you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The permissions that you want to grant on this resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The permissions that you want to revoke from this resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--grant-link-permissions",
          description:
            "Grants link permissions to all users in a defined namespace",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-link-permissions",
          description:
            "Revokes link permissions from all users in a defined namespace",
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
      name: "update-dashboard-published-version",
      description: "Updates the published version of a dashboard",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version number of the dashboard",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-dashboards-qa-configuration",
      description: "Updates a Dashboard QA configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the dashboard QA configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboards-qa-status",
          description:
            "The status of dashboards QA configuration that you want to update",
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
      name: "update-data-set",
      description:
        "Updates a dataset. This operation doesn't support datasets that include uploaded files as a source. Partial updates are not supported by this operation",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--physical-table-map",
          description:
            "Declares the physical tables that are available in the underlying data sources",
          args: {
            name: "map",
          },
        },
        {
          name: "--logical-table-map",
          description:
            "Configures the combination and transformation of the data from the physical tables",
          args: {
            name: "map",
          },
        },
        {
          name: "--import-mode",
          description:
            "Indicates whether you want to import the data into SPICE",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-groups",
          description:
            "Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-folders",
          description:
            "The folder that contains fields and nested subfolders for your dataset",
          args: {
            name: "map",
          },
        },
        {
          name: "--row-level-permission-data-set",
          description:
            "The row-level security configuration for the data you want to create",
          args: {
            name: "structure",
          },
        },
        {
          name: "--row-level-permission-tag-configuration",
          description:
            "The configuration of tags on a dataset to set row-level security. Row-level security tags are currently supported for anonymous embedding only",
          args: {
            name: "structure",
          },
        },
        {
          name: "--column-level-permission-rules",
          description:
            "A set of one or more definitions of a  ColumnLevelPermissionRule",
          args: {
            name: "list",
          },
        },
        {
          name: "--data-set-usage-configuration",
          description:
            "The usage configuration to apply to child datasets that reference this dataset as a source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--dataset-parameters",
          description: "The parameter declarations of the dataset",
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
      name: "update-data-set-permissions",
      description:
        "Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset whose permissions you want to update. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The resource permissions that you want to grant to the dataset",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The resource permissions that you want to revoke from the dataset",
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
      name: "update-data-source",
      description: "Updates a data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-parameters",
          description:
            "The parameters that Amazon QuickSight uses to connect to your underlying source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--credentials",
          description:
            "The credentials that Amazon QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-connection-properties",
          description:
            "Use this parameter only when you want Amazon QuickSight to use a VPC connection when connecting to your underlying source",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ssl-properties",
          description:
            "Secure Socket Layer (SSL) properties that apply when Amazon QuickSight connects to your underlying source",
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
      name: "update-data-source-permissions",
      description: "Updates the permissions to a data source",
      options: [
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions that you want to grant on the data source",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions that you want to revoke on the data source",
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
      name: "update-default-q-business-application",
      description:
        "Updates a Amazon Q Business application that is linked to a Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon QuickSight account that is connected to the Amazon Q Business application that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The Amazon QuickSight namespace that contains the linked Amazon Q Business application. If this field is left blank, the default namespace is used. Currently, the default namespace is the only valid value for this parameter",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The ID of the Amazon Q Business application that you want to update",
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
      name: "update-folder",
      description: "Updates the name of a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the folder",
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
      name: "update-folder-permissions",
      description: "Updates permissions of a folder",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that contains the folder to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The permissions that you want to grant on a resource. Namespace ARNs are not supported Principal values for folder permissions",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The permissions that you want to revoke from a resource. Namespace ARNs are not supported Principal values for folder permissions",
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
      name: "update-group",
      description: "Changes a group description",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the group that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the group is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the group that you want to update",
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
      name: "update-iam-policy-assignment",
      description:
        "Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the IAM policy assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description:
            "The name of the assignment, also called a rule. The name must be unique within the Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description:
            "The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN for the IAM policy to apply to the Amazon QuickSight users and groups specified in this assignment",
          args: {
            name: "string",
          },
        },
        {
          name: "--identities",
          description:
            "The Amazon QuickSight users, groups, or both that you want to assign the policy to",
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
      name: "update-identity-propagation-config",
      description:
        "Adds or updates services and authorized targets to configure what the Amazon QuickSight IAM Identity Center application can access. This operation is only supported for Amazon QuickSight accounts using IAM Identity Center",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the identity propagation configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--service",
          description:
            "The name of the Amazon Web Services service that contains the authorized targets that you want to add or update",
          args: {
            name: "string",
          },
        },
        {
          name: "--authorized-targets",
          description:
            "Specifies a list of application ARNs that represent the authorized targets for a service",
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
      name: "update-ip-restriction",
      description:
        "Updates the content and status of IP rules. Traffic from a source is allowed when the source satisfies either the IpRestrictionRule, VpcIdRestrictionRule, or VpcEndpointIdRestrictionRule. To use this operation, you must provide the entire map of rules. You can use the DescribeIpRestriction operation to get the current rule map",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the IP rules",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-restriction-rule-map",
          description:
            "A map that describes the updated IP rules with CIDR ranges and descriptions",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-id-restriction-rule-map",
          description:
            "A map of VPC IDs and their corresponding rules. When you configure this parameter, traffic from all VPC endpoints that are present in the specified VPC is allowed",
          args: {
            name: "map",
          },
        },
        {
          name: "--vpc-endpoint-id-restriction-rule-map",
          description:
            "A map of allowed VPC endpoint IDs and their corresponding rule descriptions",
          args: {
            name: "map",
          },
        },
        {
          name: "--enabled",
          description: "A value that specifies whether IP rules are turned on",
        },
        {
          name: "--no-enabled",
          description: "A value that specifies whether IP rules are turned on",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-key-registration",
      description:
        "Updates a customer managed key in a Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the customer managed key registration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--key-registration",
          description:
            "A list of RegisteredCustomerManagedKey objects to be updated to the Amazon QuickSight account",
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
      name: "update-public-sharing-settings",
      description:
        "Use the UpdatePublicSharingSettings operation to turn on or turn off the public sharing settings of an Amazon QuickSight dashboard. To use this operation, turn on session capacity pricing for your Amazon QuickSight account. Before you can turn on public sharing on your account, make sure to give public sharing permissions to an administrative user in the Identity and Access Management (IAM) console. For more information on using IAM with Amazon QuickSight, see Using Amazon QuickSight with IAM in the Amazon QuickSight User Guide",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID associated with your Amazon QuickSight subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--public-sharing-enabled",
          description:
            "A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account",
        },
        {
          name: "--no-public-sharing-enabled",
          description:
            "A Boolean value that indicates whether public sharing is turned on for an Amazon QuickSight account",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-q-personalization-configuration",
      description: "Updates a personalization configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account account that contains the personalization configuration that the user wants to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--personalization-mode",
          description:
            "An option to allow Amazon QuickSight to customize data stories with user specific metadata, specifically location and job information, in your IAM Identity Center instance",
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
      name: "update-quick-sight-q-search-configuration",
      description:
        "Updates the state of a Amazon QuickSight Q Search configuration",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the Amazon QuickSight Q Search configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--q-search-status",
          description:
            "The status of the Amazon QuickSight Q Search configuration that the user wants to update",
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
      name: "update-refresh-schedule",
      description: "Updates a refresh schedule for a dataset",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The Amazon Web Services account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--schedule",
          description: "The refresh schedule",
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
      name: "update-role-custom-permission",
      description:
        "Updates the custom permissions that are associated with a role",
      options: [
        {
          name: "--custom-permissions-name",
          description:
            "The name of the custom permission that you want to update the role with",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description: "The name of role tht you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that you want to create a group in. The Amazon Web Services account ID that you provide must be the same Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace that contains the role that you want to update",
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
      name: "update-spice-capacity-configuration",
      description:
        "Updates the SPICE capacity configuration for a Amazon QuickSight account",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the SPICE configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--purchase-mode",
          description:
            "Determines how SPICE capacity can be purchased. The following options are available.     MANUAL: SPICE capacity can only be purchased manually.    AUTO_PURCHASE: Extra SPICE capacity is automatically purchased on your behalf as needed. SPICE capacity can also be purchased manually with this option",
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
      name: "update-template",
      description:
        "Updates a template from an existing Amazon QuickSight analysis or another template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you update the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any Amazon Web Services account and any Amazon QuickSight-supported Amazon Web Services Region;.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder",
          args: {
            name: "structure",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the current template version that is being updated. Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--definition",
          description:
            "The definition of a template. A definition is the data model of all features in a Dashboard, Template, or Analysis",
          args: {
            name: "structure",
          },
        },
        {
          name: "--validation-strategy",
          description:
            "The option to relax the validation needed to update a template with definition objects. This skips the validation step for specific errors",
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
      name: "update-template-alias",
      description: "Updates the template alias of a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template alias that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-version-number",
          description: "The version number of the template",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-template-permissions",
      description: "Updates the resource permissions for a template",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions to be granted on the template",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions to be revoked from the template",
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
      name: "update-theme",
      description: "Updates a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-theme-id",
          description:
            "The theme ID, defined by Amazon QuickSight, that a custom theme inherits from. All themes initially inherit from a default Amazon QuickSight theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the theme version that you're updating Every time that you call UpdateTheme, you create a new version of the theme. Each version of the theme maintains a description of the version in VersionDescription",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The theme configuration, which contains the theme display properties",
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
      name: "update-theme-alias",
      description: "Updates an alias of a theme",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme alias that you're updating",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The name of the theme alias that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-version-number",
          description:
            "The version number of the theme that the alias should reference",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-theme-permissions",
      description:
        'Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions:    User    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"      Owner    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"     "quicksight:DeleteTheme"     "quicksight:UpdateTheme"     "quicksight:CreateThemeAlias"     "quicksight:DeleteThemeAlias"     "quicksight:UpdateThemeAlias"     "quicksight:UpdateThemePermissions"     "quicksight:DescribeThemePermissions"      To specify no permissions, omit the permissions list',
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions to be granted for the theme",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions to be revoked from the theme",
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
      name: "update-topic",
      description: "Updates a topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic",
          description: "The definition of the topic that you want to update",
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
      name: "update-topic-permissions",
      description: "Updates the permissions of a topic",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic that you want to update the permissions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The resource permissions that you want to grant to the topic",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The resource permissions that you want to revoke from the topic",
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
      name: "update-topic-refresh-schedule",
      description: "Updates a topic refresh schedule",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the topic whose refresh schedule you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--topic-id",
          description:
            "The ID of the topic that you want to modify. This ID is unique per Amazon Web Services Region for each Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--dataset-id",
          description: "The ID of the dataset",
          args: {
            name: "string",
          },
        },
        {
          name: "--refresh-schedule",
          description: "The definition of a refresh schedule",
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
      name: "update-user",
      description: "Updates an Amazon QuickSight user",
      options: [
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the Amazon Web Services account that the user is in. Currently, you use the ID for the Amazon Web Services account that contains your Amazon QuickSight account",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The email address of the user that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon QuickSight role of the user. The role can be one of the following default security cohorts:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    READER_PRO: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Amazon QuickSight, can build stories with Amazon Q, and can generate executive summaries from dashboards.    AUTHOR_PRO: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards.    ADMIN_PRO: Admin Pros are Author Pros who can also manage Amazon QuickSight administrative settings. Admin Pro users are billed at Author Pro pricing.   The name of the Amazon QuickSight role is invisible to the user except for the console screens dealing with permissions",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the Amazon QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a Amazon QuickSight user.  Amazon QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning Amazon QuickSight users to one of the default security cohorts in Amazon QuickSight (admin, author, reader). This feature is available only to Amazon QuickSight Enterprise edition subscriptions",
          args: {
            name: "string",
          },
        },
        {
          name: "--unapply-custom-permissions",
          description:
            "A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value",
        },
        {
          name: "--no-unapply-custom-permissions",
          description:
            "A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value",
        },
        {
          name: "--external-login-federation-provider-type",
          description:
            'The type of supported external login provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. The type of supported external login provider can be one of the following.    COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. When choosing the COGNITO provider type, don\u2019t use the "CustomFederationProviderUrl" parameter which is only needed when the external provider is custom.    CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider. When choosing CUSTOM_OIDC type, use the CustomFederationProviderUrl parameter to provide the custom OIDC provider URL.    NONE: This clears all the previously saved external login information for a user. Use the  DescribeUser  API operation to check the external login information',
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-federation-provider-url",
          description:
            "The URL of the custom OpenID Connect (OIDC) provider that provides identity to let a user federate into Amazon QuickSight with an associated Identity and Access Management(IAM) role. This parameter should only be used when ExternalLoginFederationProviderType parameter is set to CUSTOM_OIDC",
          args: {
            name: "string",
          },
        },
        {
          name: "--external-login-id",
          description:
            "The identity ID for a user in the external login provider",
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
      name: "update-user-custom-permission",
      description: "Updates a custom permissions profile for a user",
      options: [
        {
          name: "--user-name",
          description:
            "The username of the user that you want to update custom permissions for",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID of the Amazon Web Services account that contains the custom permission configuration that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that the user belongs to",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "The name of the custom permissions that you want to update",
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
      name: "update-vpc-connection",
      description: "Updates a VPC connection",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The Amazon Web Services account ID of the account that contains the VPC connection that you want to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--vpc-connection-id",
          description:
            "The ID of the VPC connection that you're updating. This ID is a unique identifier for each Amazon Web Services Region in an Amazon Web Services account",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the VPC connection",
          args: {
            name: "string",
          },
        },
        {
          name: "--subnet-ids",
          description: "A list of subnet IDs for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--security-group-ids",
          description: "A list of security group IDs for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--dns-resolvers",
          description:
            "A list of IP addresses of DNS resolver endpoints for the VPC connection",
          args: {
            name: "list",
          },
        },
        {
          name: "--role-arn",
          description: "An IAM role associated with the VPC connection",
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
