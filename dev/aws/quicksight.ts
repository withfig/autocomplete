export const completionSpec: Fig.Spec = {
  name: "quicksight",
  description:
    "Amazon QuickSight API Reference Amazon QuickSight is a fully managed, serverless business intelligence service for the AWS Cloud that makes it easy to extend data and insights to every user in your organization. This API reference contains documentation for a programming interface that you can use to manage Amazon QuickSight.",
  subcommands: [
    {
      name: "cancel-ingestion",
      description: "Cancels an ongoing ingestion of data into SPICE.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates Amazon QuickSight customizations the current AWS Region. Currently, you can add a custom default theme by using the CreateAccountCustomization or UpdateAccountCustomization API operation. To further customize QuickSight by removing QuickSight sample assets and videos for all new users, see Customizing QuickSight in the Amazon QuickSight User Guide.  You can create customizations for your AWS account or, if you specify a namespace, for a QuickSight namespace instead. Customizations that apply to a namespace always override customizations that apply to an AWS account. To find out which customizations apply, use the DescribeAccountCustomization API operation. Before you use the CreateAccountCustomization API operation to add a theme as the namespace default, make sure that you first share the theme with the namespace. If you don't share it with the namespace, the theme isn't visible to your users even if you make it the default theme. To check if the theme is shared, view the current permissions by using the  DescribeThemePermissions  API operation. To share the theme, grant permissions by using the  UpdateThemePermissions  API operation.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to customize QuickSight for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The QuickSight namespace that you want to add customizations to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-customization",
          description:
            'The QuickSight customizations you\'re adding in the current AWS Region. You can add these to an AWS account and a QuickSight namespace.  For example, you can add a default theme by setting AccountCustomization to the midnight theme: "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight::aws:theme/MIDNIGHT" }. Or, you can add a custom theme by specifying "AccountCustomization": { "DefaultTheme": "arn:aws:quicksight:us-west-2:111122223333:theme/bdb844d0-0fe9-4d9d-b520-0fe602d93639" }.',
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "A list of the tags that you want to attach to this resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-analysis",
      description: "Creates an analysis in Amazon QuickSight.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account where you are creating an analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID for the analysis that you're creating. This ID displays in the URL of the analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive name for the analysis that you're creating. This name displays for the analysis in the QuickSight console.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A structure that describes the principals and the resource-level permissions on an analysis. You can use the Permissions structure to grant permissions by providing a list of AWS Identity and Access Management (IAM) action information for each principal listed by Amazon Resource Name (ARN).  To specify no permissions, omit Permissions.",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "A source entity to use for the analysis that you're creating. This metadata structure contains details that describe a source template and one or more datasets.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The ARN for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the analysis.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a dashboard from a template. To first create a template, see the  CreateTemplate  API operation. A dashboard is an entity in QuickSight that identifies QuickSight reports, created from analyses. You can share QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. If you have the correct permissions, you can create a dashboard from a template that exists in a different AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account where you want to create the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID for the dashboard, also added to the IAM policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name of the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameters for the creation of the dashboard, which you want to use to override the default settings. A dashboard can have any type of parameters, and some parameters might accept multiple values.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A structure that contains the permissions of the dashboard. You can use this structure for granting permissions by providing a list of IAM action information for each principal ARN.  To specify no permissions, omit the permissions list.",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you create the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only create a dashboard from a template, so you use a SourceTemplate entity. If you need to create a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplateARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.",
          args: {
            name: "list",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for the first version of the dashboard being created.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-publish-options",
          description:
            "Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that is used in the source entity. The theme ARN must exist in the same AWS account where you create the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-data-set",
      description: "Creates a dataset.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the dataset.",
          args: {
            name: "string",
          },
        },
        {
          name: "--physical-table-map",
          description:
            "Declares the physical tables that are available in the underlying data sources.",
          args: {
            name: "map",
          },
        },
        {
          name: "--logical-table-map",
          description:
            "Configures the combination and transformation of the data from the physical tables.",
          args: {
            name: "map",
          },
        },
        {
          name: "--import-mode",
          description:
            "Indicates whether you want to import the data into SPICE.",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-groups",
          description:
            "Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-folders",
          description:
            "The folder that contains fields and nested subfolders for your dataset.",
          args: {
            name: "map",
          },
        },
        {
          name: "--permissions",
          description: "A list of resource permissions on the dataset.",
          args: {
            name: "list",
          },
        },
        {
          name: "--row-level-permission-data-set",
          description:
            "The row-level security configuration for the data that you want to create.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--column-level-permission-rules",
          description:
            "A set of one or more definitions of a  ColumnLevelPermissionRule .",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-data-source",
      description: "Creates a data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "An ID for the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the data source.",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the data source. Currently, the supported types for this operation are: ATHENA, AURORA, AURORA_POSTGRESQL, AMAZON_ELASTICSEARCH, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA. Use ListDataSources to return a list of all data sources.  AMAZON_ELASTICSEARCH is for Amazon managed Elasticsearch Service.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-parameters",
          description:
            "The parameters that QuickSight uses to connect to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--credentials",
          description:
            "The credentials QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description: "A list of resource permissions on the data source.",
          args: {
            name: "list",
          },
        },
        {
          name: "--vpc-connection-properties",
          description:
            "Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ssl-properties",
          description:
            "Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates an Amazon QuickSight group. The permissions resource is arn:aws:quicksight:us-east-1:&lt;relevant-aws-account-id&gt;:group/default/&lt;group-name&gt; . The response is a group object.",
      options: [
        {
          name: "--group-name",
          description: "A name for the group that you want to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description for the group that you want to create.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Adds an Amazon QuickSight user to an Amazon QuickSight group.",
      options: [
        {
          name: "--member-name",
          description:
            "The name of the user that you want to add to the group membership.",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to add the user to.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon QuickSight. Assignment names are unique per AWS account. To avoid overwriting rules in other namespaces, use assignment names that are unique.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account where you want to assign an IAM policy to QuickSight users or groups.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description:
            "The name of the assignment, also called a rule. It must be unique within an AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description:
            "The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identities",
          description:
            "The QuickSight users, groups, or both that you want to assign the policy to.",
          args: {
            name: "map",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates and starts a new SPICE ingestion on a dataset Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see How do I create an IAM policy to control access to Amazon EC2 resources using tags? in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "(Enterprise edition only) Creates a new namespace for you to use with Amazon QuickSight. A namespace allows you to isolate the QuickSight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your AWS account is subscribed to QuickSight. The namespace must be unique within the AWS account. By default, there is a limit of 100 namespaces per AWS account. To increase your limit, create a ticket with AWS Support.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to create the QuickSight namespace in.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The name that you want to use to describe the new namespace.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-store",
          description:
            "Specifies the type of your user identity directory. Currently, this supports users with an identity type of QUICKSIGHT.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The tags that you want to associate with the namespace that you're creating.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a template from an existing QuickSight analysis or template. You can use the resulting template to create a dashboard. A template is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "An ID for the template that you want to create. This template is unique per AWS Region in each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--permissions",
          description:
            "A list of resource permissions to be set on the template.",
          args: {
            name: "list",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you create the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the current template version being created. This API operation creates the first version of the template. Every time UpdateTemplate is called, a new version is created. Each version of the template maintains a description of the version in the VersionDescription field.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-template-alias",
      description: "Creates a template alias for a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template that you creating an alias for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "An ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name that you want to give to the template alias that you're creating. Don't start the alias name with the $ character. Alias names that start with $ are reserved by QuickSight.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-version-number",
          description: "The version number of the template.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates a theme. A theme is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see Using Themes in Amazon QuickSight in the Amazon QuickSight User Guide.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account where you want to store the new theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description:
            "An ID for the theme that you want to create. The theme ID is unique per AWS Region in each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-theme-id",
          description:
            "The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use ListThemes or choose Themes from within a QuickSight analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the first version of the theme that you're creating. Every time UpdateTheme is called, a new version is created. Each version of the theme has a description of the version in the VersionDescription field.",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The theme configuration, which contains the theme display properties.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--permissions",
          description:
            "A valid grouping of resource permissions to apply to the new theme.",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "A map of the key-value pairs for the resource tag or tags that you want to add to the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-theme-alias",
      description: "Creates a theme alias for a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme for the new theme alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "An ID for the theme alias.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name that you want to give to the theme alias that you are creating. The alias name can't begin with a $. Alias names that start with $ are reserved by Amazon QuickSight.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-version-number",
          description: "The version number of the theme.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes all Amazon QuickSight customizations in this AWS Region for the specified AWS account and QuickSight namespace.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to delete QuickSight customizations from in this AWS Region.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The QuickSight namespace that you're deleting the customizations from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes an analysis from Amazon QuickSight. You can optionally include a recovery window during which you can restore the analysis. If you don't specify a recovery window value, the operation defaults to 30 days. QuickSight attaches a DeletionTime stamp to the response that specifies the end of the recovery window. At the end of the recovery window, QuickSight deletes the analysis permanently. At any time before recovery window ends, you can use the RestoreAnalysis API operation to remove the DeletionTime stamp and cancel the deletion of the analysis. The analysis remains visible in the API until it's deleted, so you can describe it but you can't make a template from it. An analysis that's scheduled for deletion isn't accessible in the QuickSight console. To access it in the console, restore it. Deleting an analysis doesn't delete the dashboards that you publish from it.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account where you want to delete an analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description: "The ID of the analysis that you're deleting.",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-window-in-days",
          description:
            "A value that specifies the number of days that QuickSight waits before it deletes the analysis. You can't use this parameter with the ForceDeleteWithoutRecovery option in the same API call. The default value is 30.",
          args: {
            name: "long",
          },
        },
        {
          name: "--force-delete-without-recovery",
          description:
            "This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted.",
        },
        {
          name: "--no-force-delete-without-recovery",
          description:
            "This option defaults to the value NoForceDeleteWithoutRecovery. To immediately delete the analysis, add the ForceDeleteWithoutRecovery option. You can't restore an analysis after it's deleted.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-dashboard",
      description: "Deletes a dashboard.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're deleting.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-data-set",
      description: "Deletes a dataset.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes the data source permanently. This operation breaks all the datasets that reference the deleted data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-group",
      description: "Removes a user group from Amazon QuickSight.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Removes a user from a group so that the user is no longer a member of the group.",
      options: [
        {
          name: "--member-name",
          description:
            "The name of the user that you want to delete from the group membership.",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-name",
          description:
            "The name of the group that you want to delete the user from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-iam-policy-assignment",
      description: "Deletes an existing IAM policy assignment.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The AWS account ID where you want to delete the IAM policy assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description: "The name of the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to delete the QuickSight namespace from.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-template",
      description: "Deletes a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template that you're deleting.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "An ID for the template you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "Specifies the version of the template that you want to delete. If you don't provide a version number, DeleteTemplate deletes all versions of the template.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the item to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description:
            "The ID for the template that the specified alias is for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name for the template alias. To delete a specific alias, you delete the version that the alias points to. You can specify the alias name, or specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-theme",
      description: "Deletes a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme that you're deleting.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "An ID for the theme that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version of the theme that you want to delete.   Note: If you don't provide a version number, you're using this call to DeleteTheme to delete all versions of the theme.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes the version of the theme that the specified theme alias points to. If you provide a specific alias, you delete the version of the theme that the alias points to.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme alias to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme that the specified alias is for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The unique name for the theme alias to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call.",
      options: [
        {
          name: "--user-name",
          description: "The name of the user that you want to delete.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user-by-principal-id",
      description: "Deletes a user identified by its principal ID.",
      options: [
        {
          name: "--principal-id",
          description: "The principal ID of the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Describes the customizations associated with the provided AWS account and Amazon QuickSight namespace in an AWS Region. The QuickSight console evaluates which customizations to apply by running this API operation with the Resolved flag included.  To determine what customizations display when you run this command, it can help to visualize the relationship of the entities involved.     AWS Account - The AWS account exists at the top of the hierarchy. It has the potential to use all of the AWS Regions and AWS Services. When you subscribe to QuickSight, you choose one AWS Region to use as your home Region. That's where your free SPICE capacity is located. You can use QuickSight in any supported AWS Region.     AWS Region - In each AWS Region where you sign in to QuickSight at least once, QuickSight acts as a separate instance of the same service. If you have a user directory, it resides in us-east-1, which is the US East (N. Virginia). Generally speaking, these users have access to QuickSight in any AWS Region, unless they are constrained to a namespace.  To run the command in a different AWS Region, you change your Region settings. If you're using the AWS CLI, you can use one of the following options:   Use command line options.    Use named profiles.    Run aws configure to change your default AWS Region. Use Enter to key the same settings for your keys. For more information, see Configuring the AWS CLI.      Namespace - A QuickSight namespace is a partition that contains users and assets (data sources, datasets, dashboards, and so on). To access assets that are in a specific namespace, users and groups must also be part of the same namespace. People who share a namespace are completely isolated from users and assets in other namespaces, even if they are in the same AWS account and AWS Region.    Applied customizations - Within an AWS Region, a set of QuickSight customizations can apply to an AWS account or to a namespace. Settings that you apply to a namespace override settings that you apply to an AWS account. All settings are isolated to a single AWS Region. To apply them in other AWS Regions, run the CreateAccountCustomization command in each AWS Region where you want to apply the same customizations.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to describe QuickSight customizations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The QuickSight namespace that you want to describe QuickSight customizations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--resolved",
          description:
            "The Resolved flag works with the other parameters to determine which view of QuickSight customizations is returned. You can add this flag to your command to use the same view that QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels.",
        },
        {
          name: "--no-resolved",
          description:
            "The Resolved flag works with the other parameters to determine which view of QuickSight customizations is returned. You can add this flag to your command to use the same view that QuickSight uses to identify which customizations to apply to the console. Omit this flag, or set it to no-resolved, to reveal customizations that are configured at different levels.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Describes the settings that were used when your QuickSight subscription was first created in this AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that contains the settings that you want to list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-analysis",
      description: "Provides a summary of the metadata for an analysis.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the analysis. You must be using the AWS account that the analysis is in.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis that you're describing. The ID is part of the URL of the analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-analysis-permissions",
      description: "Provides the read and write permissions for an analysis.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the analysis whose permissions you're describing. You must be using the AWS account that the analysis is in.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis whose permissions you're describing. The ID is part of the analysis URL.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-dashboard",
      description: "Provides a summary for a dashboard.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described.",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description: "The alias name.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-dashboard-permissions",
      description: "Describes read and write permissions for a dashboard.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're describing permissions for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID for the dashboard, also added to the IAM policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-data-set",
      description: "Describes a dataset.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Describes the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-data-source",
      description: "Describes a data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-data-source-permissions",
      description: "Describes the resource permissions for a data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN).",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Describes an existing IAM policy assignment, as specified by the assignment name.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the assignment that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description: "The name of the assignment, also called a rule.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that contains the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-ingestion",
      description: "Describes a SPICE ingestion.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--ingestion-id",
          description: "An ID for the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-namespace",
      description: "Describes the current namespace.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that contains the QuickSight namespace that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-template",
      description: "Describes a template's metadata.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "(Optional) The number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the template is described.",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-template-alias",
      description: "Describes the template alias for a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template alias that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-template-permissions",
      description: "Describes read and write permissions on a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-theme",
      description: "Describes a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The version number for the version to describe. If a VersionNumber parameter value isn't provided, the latest version of the theme is described.",
          args: {
            name: "long",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the theme that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the theme by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to themes.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-theme-alias",
      description: "Describes the alias for a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme alias that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The name of the theme alias that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-theme-permissions",
      description: "Describes the read and write permissions for a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme that you're describing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description:
            "The ID for the theme that you want to describe permissions for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-user",
      description: "Returns information about a user, given the user name.",
      options: [
        {
          name: "--user-name",
          description: "The name of the user that you want to describe.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Generates a session URL and authorization code that you can use to embed an Amazon QuickSight read-only dashboard in your web server code. Before you use this command, make sure that you have configured the dashboards and permissions.  Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the combination of URL and authorization code:   They must be used together.   They can be used one time only.   They are valid for 5 minutes after you run this command.   The resulting user session is valid for 10 hours.   For more information, see Embedded Analytics in the Amazon QuickSight User Guide.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that contains the dashboard that you're embedding.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description:
            "The ID for the dashboard, also added to the AWS Identity and Access Management (IAM) policy.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-type",
          description:
            "The authentication method that the user uses to sign in.",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be 15-600 minutes.",
          args: {
            name: "long",
          },
        },
        {
          name: "--undo-redo-disabled",
          description:
            "Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.",
        },
        {
          name: "--no-undo-redo-disabled",
          description:
            "Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.",
        },
        {
          name: "--reset-disabled",
          description:
            "Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.",
        },
        {
          name: "--no-reset-disabled",
          description:
            "Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.",
        },
        {
          name: "--state-persistence-enabled",
          description:
            "Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.",
        },
        {
          name: "--no-state-persistence-enabled",
          description:
            "Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (QuickSight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in QuickSight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.",
        },
        {
          name: "--user-arn",
          description:
            "The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.   Omit this parameter for users in the third group \u2013 IAM users and IAM role-based sessions.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            'The QuickSight namespace that contains the dashboard IDs in this request. If you\'re not using a custom namespace, set this to "default".',
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-dashboard-ids",
          description:
            'A list of one or more dashboard IDs that you want to add to a session that includes anonymous users. The IdentityType parameter must be set to ANONYMOUS for this to work, because other identity types authenticate as QuickSight or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards.',
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Generates a session URL and authorization code that you can use to embed the Amazon QuickSight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded QuickSight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the  UpdateUser  API operation. Use  RegisterUser  API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon QuickSight User Guide:    Embedding the Amazon QuickSight Console     Customizing Access to the Amazon QuickSight Console",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account associated with your QuickSight subscription.",
          args: {
            name: "string",
          },
        },
        {
          name: "--entry-point",
          description:
            "The URL you use to access the embedded session. The entry point URL is constrained to the following paths:    /start     /start/analyses     /start/dashboards     /start/favorites     /dashboards/DashboardId  - where DashboardId is the actual ID key from the QuickSight console URL of the dashboard    /analyses/AnalysisId  - where AnalysisId is the actual ID key from the QuickSight console URL of the analysis",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-lifetime-in-minutes",
          description:
            "How many minutes the session is valid. The session lifetime must be 15-600 minutes.",
          args: {
            name: "long",
          },
        },
        {
          name: "--user-arn",
          description:
            "The Amazon QuickSight user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any type of Amazon QuickSight users in your account (readers, authors, or admins). They need to be authenticated as one of the following:   Active Directory (AD) users or group members   Invited nonfederated users   AWS Identity and Access Management (IAM) users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation   Omit this parameter for users in the third group, IAM users and IAM role-based sessions.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists Amazon QuickSight analyses that exist in the specified AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description: "The ID of the AWS account that contains the analyses.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all the versions of the dashboards in the QuickSight subscription.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're listing versions for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-dashboards",
      description: "Lists dashboards in an AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboards that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all of the datasets belonging to the current AWS account in an AWS Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists data sources in current AWS Region that belong to this AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-group-memberships",
      description: "Lists member users in a group.",
      options: [
        {
          name: "--group-name",
          description:
            "The name of the group that you want to see a membership list of.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-groups",
      description: "Lists all user groups in Amazon QuickSight.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists IAM policy assignments in the current Amazon QuickSight account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains these IAM policy assignments.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description: "The status of the assignments.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace for the assignments.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the assignments.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description: "The name of the user.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-ingestions",
      description: "Lists the history of SPICE ingestions for a dataset.",
      options: [
        {
          name: "--data-set-id",
          description: "The ID of the dataset used in the ingestion.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-namespaces",
      description: "Lists the namespaces for the specified AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that contains the QuickSight namespaces that you want to list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-tags-for-resource",
      description: "Lists the tags assigned to a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want a list of tags for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-template-aliases",
      description: "Lists all the aliases of a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template aliases that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all the versions of the templates in the current Amazon QuickSight account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the templates that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all the templates in the current Amazon QuickSight account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the templates that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-theme-aliases",
      description: "Lists all the aliases of a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme aliases that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists all the versions of the themes in the current AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the themes that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "list-themes",
      description: "Lists all the themes in the current AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the themes that you're listing.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--type",
          description:
            "The type of themes that you want to list. Valid options include the following:    ALL (default)- Display all existing themes.    CUSTOM - Display only the themes created by people using Amazon QuickSight.    QUICKSIGHT - Display only the starting themes defined by QuickSight.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.",
      options: [
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to list group memberships for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The AWS account ID that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Returns a list of all of the Amazon QuickSight users belonging to this account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return from this request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request.",
      options: [
        {
          name: "--identity-type",
          description:
            "Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:    IAM: A user whose identity maps to an existing IAM user or role.     QUICKSIGHT: A user whose identity is owned and managed internally by Amazon QuickSight.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email address of the user that you want to register.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-role",
          description:
            "The Amazon QuickSight role for the user. The user role can be one of the following:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.    RESTRICTED_READER: This role isn't currently available for use.    RESTRICTED_AUTHOR: This role isn't currently available for use.",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-arn",
          description:
            "The ARN of the IAM user or role that you are registering with Amazon QuickSight.",
          args: {
            name: "string",
          },
        },
        {
          name: "--session-name",
          description:
            "You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see  assume-role  in the AWS CLI Reference.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to create for the user you are registering.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   To add custom permissions to an existing user, use  UpdateUser  instead. A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "restore-analysis",
      description: "Restores an analysis.",
      options: [
        {
          name: "--aws-account-id",
          description: "The ID of the AWS account that contains the analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description: "The ID of the analysis that you're restoring.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Searches for analyses that belong to the user specified in the filter.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the analyses that you're searching for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description:
            "The structure for the search filters that you want to apply to your search.",
          args: {
            name: "list",
          },
        },
        {
          name: "--next-token",
          description:
            "A pagination token that can be used in a subsequent request.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of results to return.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-dashboards",
      description: "Searches for dashboards that belong to a user.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the user whose dashboards you're searching for.",
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
            "The token for the next set of results, or null if there are no more results.",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to be returned per request.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--starting-token",
          description:
            "A token to specify where to start paginating.  This is the\nNextToken from a previously truncated response.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "string",
          },
        },
        {
          name: "--page-size",
          description:
            "The size of each page to get in the AWS service call.  This\ndoes not affect the number of items returned in the command's\noutput.  Setting a smaller page size results in more calls to\nthe AWS service, retrieving fewer items in each call.  This can\nhelp prevent the AWS service calls from timing out.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-items",
          description:
            "The total number of items to return in the command's output.\nIf the total number of items available is more than the value\nspecified, a NextToken is provided in the command's\noutput.  To resume pagination, provide the\nNextToken value in the starting-token\nargument of a subsequent command.  Do not use the\nNextToken response element directly outside of the\nAWS CLI.\nFor usage examples, see Pagination in the AWS Command Line Interface User\nGuide.",
          args: {
            name: "integer",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Assigns one or more tags (key-value pairs) to the specified QuickSight resource.  Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the TagResource operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag. You can associate as many as 50 tags with a resource. QuickSight supports tagging on data set, data source, dashboard, and template.  Tagging for QuickSight works in a similar way to tagging for other AWS services, except for the following:   You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight costs are based on users and SPICE capacity, which aren't taggable resources.   QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to tag.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "untag-resource",
      description: "Removes a tag or tags from a resource.",
      options: [
        {
          name: "--resource-arn",
          description:
            "The Amazon Resource Name (ARN) of the resource that you want to untag.",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description:
            "The keys of the key-value pairs for the resource tag or tags assigned to the resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Updates Amazon QuickSight customizations the current AWS Region. Currently, the only customization you can use is a theme. You can use customizations for your AWS account or, if you specify a namespace, for a QuickSight namespace instead. Customizations that apply to a namespace override customizations that apply to an AWS account. To find out which customizations apply, use the DescribeAccountCustomization API operation.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that you want to update QuickSight customizations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace that you want to update QuickSight customizations for.",
          args: {
            name: "string",
          },
        },
        {
          name: "--account-customization",
          description:
            "The QuickSight customizations you're updating in the current AWS Region.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Updates the Amazon QuickSight settings in your AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that contains the QuickSight settings that you want to list.",
          args: {
            name: "string",
          },
        },
        {
          name: "--default-namespace",
          description:
            "The default namespace for this AWS account. Currently, the default is default. AWS Identity and Access Management (IAM) users that register for the first time with QuickSight provide an email that becomes associated with the default namespace.",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-email",
          description:
            "The email address that you want QuickSight to send notifications to regarding your AWS account or QuickSight subscription.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
            "The ID of the AWS account that contains the analysis that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID for the analysis that you're updating. This ID displays in the URL of the analysis.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "A descriptive name for the analysis that you're updating. This name displays for the analysis in the QuickSight console.",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and override values that you want to use. An analysis can have any parameter type, and some parameters might accept multiple values.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--source-entity",
          description:
            "A source entity to use for the analysis that you're updating. This metadata structure contains details that describe a source template and one or more datasets.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) for the theme to apply to the analysis that you're creating. To see the theme in the QuickSight console, make sure that you have access to it.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-analysis-permissions",
      description: "Updates the read and write permissions for an analysis.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the analysis whose permissions you're updating. You must be using the AWS account that the analysis is in.",
          args: {
            name: "string",
          },
        },
        {
          name: "--analysis-id",
          description:
            "The ID of the analysis whose permissions you're updating. The ID is part of the analysis URL.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A structure that describes the permissions to add and the principal to add them to.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A structure that describes the permissions to remove and the principal to remove them from.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-dashboard",
      description: "Updates a dashboard in an AWS account.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name of the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you update the dashboard. In SourceEntity, you specify the type of object you're using as source. You can only update a dashboard from a template, so you use a SourceTemplate entity. If you need to update a dashboard from an analysis, first convert the analysis to a template by using the CreateTemplate API operation. For SourceTemplate, specify the Amazon Resource Name (ARN) of the source template. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--parameters",
          description:
            "A structure that contains the parameters of the dashboard. These are parameter overrides for a dashboard. A dashboard can have any type of parameters, and some parameters might accept multiple values.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--version-description",
          description:
            "A description for the first version of the dashboard being created.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-publish-options",
          description:
            "Options for publishing the dashboard when you create it:    AvailabilityStatus for AdHocFilteringOption - This status can be either ENABLED or DISABLED. When this is set to DISABLED, QuickSight disables the left filter pane on the published dashboard, which can be used for ad hoc (one-time) filtering. This option is ENABLED by default.     AvailabilityStatus for ExportToCSVOption - This status can be either ENABLED or DISABLED. The visual option to export data to .CSV format isn't enabled when this is set to DISABLED. This option is ENABLED by default.     VisibilityState for SheetControlsOption - This visibility state can be either COLLAPSED or EXPANDED. This option is COLLAPSED by default.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--theme-arn",
          description:
            "The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If you add a value for this field, it overrides the value that was originally associated with the entity. The theme ARN must exist in the same AWS account where you create the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-dashboard-permissions",
      description: "Updates read and write permissions on a dashboard.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard whose permissions you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The permissions that you want to grant on this resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The permissions that you want to revoke from this resource.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-dashboard-published-version",
      description: "Updates the published version of a dashboard.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the dashboard that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--dashboard-id",
          description: "The ID for the dashboard.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version number of the dashboard.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-set",
      description: "Updates a dataset.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset that you want to update. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The display name for the dataset.",
          args: {
            name: "string",
          },
        },
        {
          name: "--physical-table-map",
          description:
            "Declares the physical tables that are available in the underlying data sources.",
          args: {
            name: "map",
          },
        },
        {
          name: "--logical-table-map",
          description:
            "Configures the combination and transformation of the data from the physical tables.",
          args: {
            name: "map",
          },
        },
        {
          name: "--import-mode",
          description:
            "Indicates whether you want to import the data into SPICE.",
          args: {
            name: "string",
          },
        },
        {
          name: "--column-groups",
          description:
            "Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.",
          args: {
            name: "list",
          },
        },
        {
          name: "--field-folders",
          description:
            "The folder that contains fields and nested subfolders for your dataset.",
          args: {
            name: "map",
          },
        },
        {
          name: "--row-level-permission-data-set",
          description:
            "The row-level security configuration for the data you want to create.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--column-level-permission-rules",
          description:
            "A set of one or more definitions of a  ColumnLevelPermissionRule .",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Updates the permissions on a dataset. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/data-set-id.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-set-id",
          description:
            "The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "The resource permissions that you want to grant to the dataset.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "The resource permissions that you want to revoke from the dataset.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-source",
      description: "Updates a data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A display name for the data source.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-parameters",
          description:
            "The parameters that QuickSight uses to connect to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--credentials",
          description:
            "The credentials that QuickSight that uses to connect to your underlying source. Currently, only credentials based on user name and password are supported.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--vpc-connection-properties",
          description:
            "Use this parameter only when you want QuickSight to use a VPC connection when connecting to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--ssl-properties",
          description:
            "Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying source.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-data-source-permissions",
      description: "Updates the permissions to a data source.",
      options: [
        {
          name: "--aws-account-id",
          description: "The AWS account ID.",
          args: {
            name: "string",
          },
        },
        {
          name: "--data-source-id",
          description:
            "The ID of the data source. This ID is unique per AWS Region for each AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions that you want to grant on the data source.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions that you want to revoke on the data source.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-group",
      description: "Changes a group description.",
      options: [
        {
          name: "--group-name",
          description: "The name of the group that you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description for the group that you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request. This overwrites all of the users included in Identities.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the IAM policy assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-name",
          description:
            "The name of the assignment, also called a rule. This name must be unique within an AWS account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description: "The namespace of the assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--assignment-status",
          description:
            "The status of the assignment. Possible values are as follows:    ENABLED - Anything specified in this assignment is used when creating the data source.    DISABLED - This assignment isn't used when creating the data source.    DRAFT - This assignment is an unfinished draft and isn't used when creating the data source.",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy-arn",
          description:
            "The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment.",
          args: {
            name: "string",
          },
        },
        {
          name: "--identities",
          description:
            "The QuickSight users, groups, or both that you want to assign the policy to.",
          args: {
            name: "map",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        "Updates a template from an existing Amazon QuickSight analysis or another template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-entity",
          description:
            "The entity that you are using as a source when you update the template. In SourceEntity, you specify the type of object you're using as source: SourceTemplate for a template or SourceAnalysis for an analysis. Both of these require an Amazon Resource Name (ARN). For SourceTemplate, specify the ARN of the source template. For SourceAnalysis, specify the ARN of the source analysis. The SourceTemplate ARN can contain any AWS Account and any QuickSight-supported AWS Region.  Use the DataSetReferences entity within SourceTemplate or SourceAnalysis to list the replacement datasets for the placeholders listed in the original. The schema in each dataset must match its placeholder.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the current template version that is being updated. Every time you call UpdateTemplate, you create a new version of the template. Each version of the template maintains a description of the version in the VersionDescription field.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-template-alias",
      description: "Updates the template alias of a template.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the template alias that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description:
            "The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword $LATEST in the AliasName parameter. The keyword $PUBLISHED doesn't apply to templates.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-version-number",
          description: "The version number of the template.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-template-permissions",
      description: "Updates the resource permissions for a template.",
      options: [
        {
          name: "--aws-account-id",
          description: "The ID of the AWS account that contains the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--template-id",
          description: "The ID for the template.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions to be granted on the template.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions to be revoked from the template.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-theme",
      description: "Updates a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--base-theme-id",
          description:
            "The theme ID, defined by Amazon QuickSight, that a custom theme inherits from. All themes initially inherit from a default QuickSight theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-description",
          description:
            "A description of the theme version that you're updating Every time that you call UpdateTheme, you create a new version of the theme. Each version of the theme maintains a description of the version in VersionDescription.",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The theme configuration, which contains the theme display properties.",
          args: {
            name: "structure",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-theme-alias",
      description: "Updates an alias of a theme.",
      options: [
        {
          name: "--aws-account-id",
          description:
            "The ID of the AWS account that contains the theme alias that you're updating.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias-name",
          description: "The name of the theme alias that you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-version-number",
          description:
            "The version number of the theme that the alias should reference.",
          args: {
            name: "long",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
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
        'Updates the resource permissions for a theme. Permissions apply to the action to grant or revoke permissions on, for example "quicksight:DescribeTheme". Theme permissions apply in groupings. Valid groupings include the following for the three levels of permissions, which are user, owner, or no permissions:    User    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"      Owner    "quicksight:DescribeTheme"     "quicksight:DescribeThemeAlias"     "quicksight:ListThemeAliases"     "quicksight:ListThemeVersions"     "quicksight:DeleteTheme"     "quicksight:UpdateTheme"     "quicksight:CreateThemeAlias"     "quicksight:DeleteThemeAlias"     "quicksight:UpdateThemeAlias"     "quicksight:UpdateThemePermissions"     "quicksight:DescribeThemePermissions"      To specify no permissions, omit the permissions list.',
      options: [
        {
          name: "--aws-account-id",
          description: "The ID of the AWS account that contains the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--theme-id",
          description: "The ID for the theme.",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-permissions",
          description:
            "A list of resource permissions to be granted for the theme.",
          args: {
            name: "list",
          },
        },
        {
          name: "--revoke-permissions",
          description:
            "A list of resource permissions to be revoked from the theme.",
          args: {
            name: "list",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-user",
      description: "Updates an Amazon QuickSight user.",
      options: [
        {
          name: "--user-name",
          description:
            "The Amazon QuickSight user name that you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--aws-account-id",
          description:
            "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
          args: {
            name: "string",
          },
        },
        {
          name: "--namespace",
          description:
            "The namespace. Currently, you should set this to default.",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The email address of the user that you want to update.",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The Amazon QuickSight role of the user. The role can be one of the following default security cohorts:    READER: A user who has read-only access to dashboards.    AUTHOR: A user who can create data sources, datasets, analyses, and dashboards.    ADMIN: A user who is an author, who can also manage Amazon QuickSight settings.   The name of the QuickSight role is invisible to the user except for the console screens dealing with permissions.",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-permissions-name",
          description:
            "(Enterprise edition only) The name of the custom permissions profile that you want to assign to this user. Customized permissions allows you to control a user's access by restricting access the following operations:   Create and update data sources   Create and update datasets   Create and update email reports   Subscribe to email reports   A set of custom permissions includes any combination of these restrictions. Currently, you need to create the profile names for custom permission sets by using the QuickSight console. Then, you use the RegisterUser API operation to assign the named set of permissions to a QuickSight user.  QuickSight custom permissions are applied through IAM policies. Therefore, they override the permissions typically granted by assigning QuickSight users to one of the default security cohorts in QuickSight (admin, author, reader). This feature is available only to QuickSight Enterprise edition subscriptions that use SAML 2.0-Based Federation for Single Sign-On (SSO).",
          args: {
            name: "string",
          },
        },
        {
          name: "--unapply-custom-permissions",
          description:
            "A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.",
        },
        {
          name: "--no-unapply-custom-permissions",
          description:
            "A flag that you use to indicate that you want to remove all custom permissions from this user. Using this parameter resets the user to the state it was in before a custom permissions profile was applied. This parameter defaults to NULL and it doesn't accept any other value.",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally.",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command.",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
  ],
};
