const completionSpec: Fig.Spec = {
  name: "appconfig",
  description:
    "AppConfig feature flags and dynamic configurations help software builders quickly and securely adjust application behavior in production environments without full code deployments. AppConfig speeds up software release frequency, improves application resiliency, and helps you address emergent issues more quickly. With feature flags, you can gradually release new capabilities to users and measure the impact of those changes before fully deploying the new capabilities to all users. With operational flags and dynamic configurations, you can update block lists, allow lists, throttling limits, logging verbosity, and perform other operational tuning to quickly respond to issues in production environments.  AppConfig is a capability of Amazon Web Services Systems Manager.  Despite the fact that application configuration content can vary greatly from application to application, AppConfig supports the following use cases, which cover a broad spectrum of customer needs:    Feature flags and toggles - Safely release new capabilities to your customers in a controlled environment. Instantly roll back changes if you experience a problem.    Application tuning - Carefully introduce application changes while testing the impact of those changes with users in production environments.    Allow list or block list - Control access to premium features or instantly block specific users without deploying new code.     Centralized configuration storage - Keep your configuration data organized and consistent across all of your workloads. You can use AppConfig to deploy configuration data stored in the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Parameter Store, or Amazon S3.    How AppConfig works  This section provides a high-level description of how AppConfig works and how you get started.  1. Identify configuration values in code you want to manage in the cloud  Before you start creating AppConfig artifacts, we recommend you identify configuration data in your code that you want to dynamically manage using AppConfig. Good examples include feature flags or toggles, allow and block lists, logging verbosity, service limits, and throttling rules, to name a few. If your configuration data already exists in the cloud, you can take advantage of AppConfig validation, deployment, and extension features to further streamline configuration data management.  2. Create an application namespace  To create a namespace, you create an AppConfig artifact called an application. An application is simply an organizational construct like a folder.  3. Create environments  For each AppConfig application, you define one or more environments. An environment is a logical grouping of targets, such as applications in a Beta or Production environment, Lambda functions, or containers. You can also define environments for application subcomponents, such as the Web, Mobile, and Back-end. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.  4. Create a configuration profile  A configuration profile includes, among other things, a URI that enables AppConfig to locate your configuration data in its stored location and a profile type. AppConfig supports two configuration profile types: feature flags and freeform configurations. Feature flag configuration profiles store their data in the AppConfig hosted configuration store and the URI is simply hosted. For freeform configuration profiles, you can store your data in the AppConfig hosted configuration store or any Amazon Web Services service that integrates with AppConfig, as described in Creating a free form configuration profile in the the AppConfig User Guide. A configuration profile can also include optional validators to ensure your configuration data is syntactically and semantically correct. AppConfig performs a check using the validators when you start a deployment. If any errors are detected, the deployment rolls back to the previous configuration data.  5. Deploy configuration data  When you create a new deployment, you specify the following:   An application ID   A configuration profile ID   A configuration version   An environment ID where you want to deploy the configuration data   A deployment strategy ID that defines how fast you want the changes to take effect   When you call the StartDeployment API action, AppConfig performs the following tasks:   Retrieves the configuration data from the underlying data store by using the location URI in the configuration profile.   Verifies the configuration data is syntactically and semantically correct by using the validators you specified when you created your configuration profile.   Caches a copy of the data so it is ready to be retrieved by your application. This cached copy is called the deployed data.    6. Retrieve the configuration  You can configure AppConfig Agent as a local host and have the agent poll AppConfig for configuration updates. The agent calls the StartConfigurationSession and GetLatestConfiguration API actions and caches your configuration data locally. To retrieve the data, your application makes an HTTP call to the localhost server. AppConfig Agent supports several use cases, as described in Simplified retrieval methods in the the AppConfig User Guide. If AppConfig Agent isn't supported for your use case, you can configure your application to poll AppConfig for configuration updates by directly calling the StartConfigurationSession and GetLatestConfiguration API actions.    This reference is intended to be used with the AppConfig User Guide",
  subcommands: [
    {
      name: "create-application",
      description:
        "Creates an application. In AppConfig, an application is simply an organizational construct like a folder. This organizational construct has a relationship with some unit of executable code. For example, you could create an application called MyMobileApp to organize and manage configuration data for a mobile application installed by your users",
      options: [
        {
          name: "--name",
          description: "A name for the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata to assign to the application. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define",
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
      name: "create-configuration-profile",
      description:
        "Creates a configuration profile, which is information that enables AppConfig to access the configuration source. Valid configuration sources include the following:   Configuration data in YAML, JSON, and other formats stored in the AppConfig hosted configuration store   Configuration data stored as objects in an Amazon Simple Storage Service (Amazon S3) bucket   Pipelines stored in CodePipeline   Secrets stored in Secrets Manager   Standard and secure string parameters stored in Amazon Web Services Systems Manager Parameter Store   Configuration data in SSM documents stored in the Systems Manager document store   A configuration profile includes the following information:   The URI location of the configuration data.   The Identity and Access Management (IAM) role that provides access to the configuration data.   A validator for the configuration data. Available validators include either a JSON Schema or an Amazon Web Services Lambda function.   For more information, see Create a Configuration and a Configuration Profile in the AppConfig User Guide",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the configuration profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the configuration profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--location-uri",
          description:
            "A URI to locate the configuration. You can specify the following:   For the AppConfig hosted configuration store and for feature flags, specify hosted.   For an Amazon Web Services Systems Manager Parameter Store parameter, specify either the parameter name in the format ssm-parameter://<parameter name> or the ARN.   For an Amazon Web Services CodePipeline pipeline, specify the URI in the following format: codepipeline://<pipeline name>.   For an Secrets Manager secret, specify the URI in the following format: secretsmanager://<secret name>.   For an Amazon S3 object, specify the URI in the following format: s3://<bucket>/<objectKey> . Here is an example: s3://amzn-s3-demo-bucket/my-app/us-east-1/my-config.json    For an SSM document, specify either the document name in the format ssm-document://<document name> or the Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--retrieval-role-arn",
          description:
            "The ARN of an IAM role with permission to access the configuration at the specified LocationUri.  A retrieval role ARN is not required for configurations stored in the AppConfig hosted configuration store. It is required for all other sources that store your configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--validators",
          description: "A list of methods for validating the configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata to assign to the configuration profile. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
          },
        },
        {
          name: "--type",
          description:
            "The type of configurations contained in the profile. AppConfig supports feature flags and freeform configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for Type:  AWS.AppConfig.FeatureFlags   AWS.Freeform",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier for an Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-deployment-strategy",
      description:
        "Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time",
      options: [
        {
          name: "--name",
          description: "A name for the deployment strategy",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the deployment strategy",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-duration-in-minutes",
          description: "Total amount of time for a deployment to last",
          args: {
            name: "integer",
          },
        },
        {
          name: "--final-bake-time-in-minutes",
          description:
            "Specifies the amount of time AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AppConfig rolls back the deployment. You must configure permissions for AppConfig to roll back based on CloudWatch alarms. For more information, see Configuring permissions for rollback based on Amazon CloudWatch alarms in the AppConfig User Guide",
          args: {
            name: "integer",
          },
        },
        {
          name: "--growth-factor",
          description:
            "The percentage of targets to receive a deployed configuration during each interval",
          args: {
            name: "float",
          },
        },
        {
          name: "--growth-type",
          description:
            "The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:  Linear: For this type, AppConfig processes the deployment by dividing the total number of targets by the value specified for Step percentage. For example, a linear deployment that uses a Step percentage of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.  Exponential: For this type, AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:  2*(2^0)   2*(2^1)   2*(2^2)  Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--replicate-to",
          description:
            "Save the deployment strategy to a Systems Manager (SSM) document",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata to assign to the deployment strategy. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define",
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
      name: "create-environment",
      description:
        "Creates an environment. For each application, you define one or more environments. An environment is a deployment group of AppConfig targets, such as applications in a Beta or Production environment. You can also define environments for application subcomponents such as the Web, Mobile and Back-end components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "A name for the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitors",
          description:
            "Amazon CloudWatch alarms to monitor during the deployment process",
          args: {
            name: "list",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata to assign to the environment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define",
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
      name: "create-extension",
      description:
        "Creates an AppConfig extension. An extension augments your ability to inject logic or behavior at different points during the AppConfig workflow of creating or deploying a configuration. You can create your own extensions or use the Amazon Web Services authored extensions provided by AppConfig. For an AppConfig extension that uses Lambda, you must create a Lambda function to perform any computation and processing defined in the extension. If you plan to create custom versions of the Amazon Web Services authored notification extensions, you only need to specify an Amazon Resource Name (ARN) in the Uri field for the new extension version.   For a custom EventBridge notification extension, enter the ARN of the EventBridge default events in the Uri field.   For a custom Amazon SNS notification extension, enter the ARN of an Amazon SNS topic in the Uri field.   For a custom Amazon SQS notification extension, enter the ARN of an Amazon SQS message queue in the Uri field.    For more information about extensions, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--name",
          description:
            "A name for the extension. Each extension name in your account must be unique. Extension versions use the same name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Information about the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "The actions defined in the extension",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameters accepted by the extension. You specify parameter values when you associate the extension to an AppConfig resource by using the CreateExtensionAssociation API action. For Lambda extension actions, these parameters are included in the Lambda request object",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more tags for the specified extension. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
          },
        },
        {
          name: "--latest-version-number",
          description:
            "You can omit this field when you create an extension. When you create a new version, specify the most recent current version number. For example, you create version 3, enter 2 for this field",
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
      name: "create-extension-association",
      description:
        "When you create an extension or configure an Amazon Web Services authored extension, you associate the extension with an AppConfig application, environment, or configuration profile. For example, you can choose to run the AppConfig deployment events to Amazon SNS Amazon Web Services authored extension and receive notifications on an Amazon SNS topic anytime a configuration deployment is started for a specific application. Defining which extension to associate with an AppConfig resource is called an extension association. An extension association is a specified relationship between an extension and an AppConfig resource, such as an application or a configuration profile. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--extension-identifier",
          description:
            "The name, the ID, or the Amazon Resource Name (ARN) of the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--extension-version-number",
          description:
            "The version number of the extension. If not specified, AppConfig uses the maximum version of the extension",
          args: {
            name: "integer",
          },
        },
        {
          name: "--resource-identifier",
          description:
            "The ARN of an application, configuration profile, or environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and values defined in the extensions. Extension parameters marked Required must be entered for this field",
          args: {
            name: "map",
          },
        },
        {
          name: "--tags",
          description:
            "Adds one or more tags for the specified extension association. Tags are metadata that help you categorize resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define",
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
      name: "create-hosted-configuration-version",
      description:
        "Creates a new configuration in the AppConfig hosted configuration store. If you're creating a feature flag, we recommend you familiarize yourself with the JSON schema for feature flag data. For more information, see Type reference for AWS.AppConfig.FeatureFlags in the AppConfig User Guide",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--content",
          description:
            "The configuration data, as bytes.  AppConfig accepts any type of data, including text formats like JSON or TOML, or binary formats like protocol buffers or compressed data",
          args: {
            name: "blob",
          },
        },
        {
          name: "--content-type",
          description:
            "A standard MIME type describing the format of the configuration content. For more information, see Content-Type",
          args: {
            name: "string",
          },
        },
        {
          name: "--latest-version-number",
          description:
            "An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version",
          args: {
            name: "integer",
          },
        },
        {
          name: "--version-label",
          description:
            'An optional, user-defined label for the AppConfig hosted configuration version. This value must contain at least one non-numeric character. For example, "v2.2.0"',
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "delete-application",
      description: "Deletes an application",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-configuration-profile",
      description:
        "Deletes a configuration profile. To prevent users from unintentionally deleting actively-used configuration profiles, enable deletion protection",
      options: [
        {
          name: "--application-id",
          description:
            "The application ID that includes the configuration profile you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The ID of the configuration profile you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection-check",
          description:
            "A parameter to configure deletion protection. If enabled, deletion protection prevents a user from deleting a configuration profile if your application has called either GetLatestConfiguration or for the configuration profile during the specified interval.  This parameter supports the following values:    BYPASS: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it.     APPLY: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. APPLY also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks.     ACCOUNT_DEFAULT: The default setting, which instructs AppConfig to implement the deletion protection value specified in the UpdateAccountSettings API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-deployment-strategy",
      description: "Deletes a deployment strategy",
      options: [
        {
          name: "--deployment-strategy-id",
          description: "The ID of the deployment strategy you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-environment",
      description:
        "Deletes an environment. To prevent users from unintentionally deleting actively-used environments, enable deletion protection",
      options: [
        {
          name: "--environment-id",
          description: "The ID of the environment that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--application-id",
          description:
            "The application ID that includes the environment that you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--deletion-protection-check",
          description:
            "A parameter to configure deletion protection. If enabled, deletion protection prevents a user from deleting an environment if your application called either GetLatestConfiguration or in the environment during the specified interval.  This parameter supports the following values:    BYPASS: Instructs AppConfig to bypass the deletion protection check and delete a configuration profile even if deletion protection would have otherwise prevented it.     APPLY: Instructs the deletion protection check to run, even if deletion protection is disabled at the account level. APPLY also forces the deletion protection check to run against resources created in the past hour, which are normally excluded from deletion protection checks.     ACCOUNT_DEFAULT: The default setting, which instructs AppConfig to implement the deletion protection value specified in the UpdateAccountSettings API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-extension",
      description:
        "Deletes an AppConfig extension. You must delete all associations to an extension before you delete the extension",
      options: [
        {
          name: "--extension-identifier",
          description:
            "The name, ID, or Amazon Resource Name (ARN) of the extension you want to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "A specific version of an extension to delete. If omitted, the highest version is deleted",
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
      name: "delete-extension-association",
      description:
        "Deletes an extension association. This action doesn't delete extensions defined in the association",
      options: [
        {
          name: "--extension-association-id",
          description: "The ID of the extension association to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-hosted-configuration-version",
      description:
        "Deletes a version of a configuration from the AppConfig hosted configuration store",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The versions number to delete",
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
      name: "get-account-settings",
      description:
        "Returns information about the status of the DeletionProtection parameter",
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
      name: "get-application",
      description: "Retrieves information about an application",
      options: [
        {
          name: "--application-id",
          description: "The ID of the application you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-configuration",
      description:
        "(Deprecated) Retrieves the latest deployed configuration.  Note the following important information.   This API action is deprecated. Calls to receive configuration data should use the StartConfigurationSession and GetLatestConfiguration APIs instead.     GetConfiguration is a priced call. For more information, see Pricing",
      options: [
        {
          name: "--application",
          description:
            "The application to get. Specify either the application name or the application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment",
          description:
            "The environment to get. Specify either the environment name or the environment ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration",
          description:
            "The configuration to get. Specify either the configuration name or the configuration ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-id",
          description:
            "The clientId parameter in the following command is a unique, user-specified ID to identify the client for the configuration. This ID enables AppConfig to deploy the configuration in intervals, as defined in the deployment strategy",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-configuration-version",
          description:
            "The configuration version returned in the most recent GetConfiguration response.  AppConfig uses the value of the ClientConfigurationVersion parameter to identify the configuration version on your clients. If you don\u2019t send ClientConfigurationVersion with each call to GetConfiguration, your clients receive the current configuration. You are charged each time your clients receive a configuration. To avoid excess charges, we recommend you use the StartConfigurationSession and GetLatestConfiguration APIs, which track the client configuration version on your behalf. If you choose to continue using GetConfiguration, we recommend that you include the ClientConfigurationVersion value with every call to GetConfiguration. The value to use for ClientConfigurationVersion comes from the ConfigurationVersion attribute returned by GetConfiguration when there is new or updated data, and should be saved for subsequent calls to GetConfiguration.  For more information about working with configurations, see Retrieving feature flags and configuration data in AppConfig in the AppConfig User Guide",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-configuration-profile",
      description: "Retrieves information about a configuration profile",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application that includes the configuration profile you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description:
            "The ID of the configuration profile that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-deployment",
      description: "Retrieves information about a configuration deployment",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application that includes the deployment you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description:
            "The ID of the environment that includes the deployment you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-number",
          description: "The sequence number of the deployment",
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
      name: "get-deployment-strategy",
      description:
        "Retrieves information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time",
      options: [
        {
          name: "--deployment-strategy-id",
          description: "The ID of the deployment strategy to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-environment",
      description:
        "Retrieves information about an environment. An environment is a deployment group of AppConfig applications, such as applications in a Production environment or in an EU_Region environment. Each configuration deployment targets an environment. You can enable one or more Amazon CloudWatch alarms for an environment. If an alarm is triggered during a deployment, AppConfig roles back the configuration",
      options: [
        {
          name: "--application-id",
          description:
            "The ID of the application that includes the environment you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The ID of the environment that you want to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-extension",
      description: "Returns information about an AppConfig extension",
      options: [
        {
          name: "--extension-identifier",
          description:
            "The name, the ID, or the Amazon Resource Name (ARN) of the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description:
            "The extension version number. If no version number was defined, AppConfig uses the highest version",
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
      name: "get-extension-association",
      description:
        "Returns information about an AppConfig extension association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--extension-association-id",
          description: "The extension association ID to get",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-hosted-configuration-version",
      description:
        "Retrieves information about a specific configuration version",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-number",
          description: "The version",
          args: {
            name: "integer",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "list-applications",
      description: "Lists all applications in your Amazon Web Services account",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Next token is a pagination token generated by AppConfig to describe what page the previous List call ended on. For the first List request, the nextToken should not be set. On subsequent calls, the nextToken parameter should be set to the previous responses nextToken value. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-configuration-profiles",
      description: "Lists the configuration profiles for an application",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "A filter based on the type of configurations that the configuration profile contains. A configuration can be a feature flag or a freeform configuration",
          args: {
            name: "string",
          },
        },
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
      name: "list-deployment-strategies",
      description: "Lists deployment strategies",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-deployments",
      description:
        "Lists the deployments for an environment in descending deployment number order",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items that may be returned for this call. If there are items that have not yet been returned, the response will include a non-null NextToken that you can provide in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token returned by a prior call to this operation indicating the next set of results to be returned. If not specified, the operation will return the first set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-environments",
      description: "Lists the environments for an application",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-extension-associations",
      description:
        "Lists all AppConfig extension associations in the account. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--resource-identifier",
          description:
            "The ARN of an application, configuration profile, or environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--extension-identifier",
          description:
            "The name, the ID, or the Amazon Resource Name (ARN) of the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--extension-version-number",
          description:
            "The version number for the extension defined in the association",
          args: {
            name: "integer",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results or pass null to get the first set of results",
          args: {
            name: "string",
          },
        },
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
      name: "list-extensions",
      description:
        "Lists all custom and Amazon Web Services authored AppConfig extensions in the account. For more information about extensions, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The extension name",
          args: {
            name: "string",
          },
        },
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
      name: "list-hosted-configuration-versions",
      description:
        "Lists configurations stored in the AppConfig hosted configuration store by version",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to return for this call. If MaxResults is not provided in the call, AppConfig returns the maximum of 50. The call also returns a token that you can specify in a subsequent call to get the next set of results",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "A token to start the list. Use this token to get the next set of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-label",
          description:
            'An optional filter that can be used to specify the version label of an AppConfig hosted configuration version. This parameter supports filtering by prefix using a wildcard, for example "v2*". If you don\'t specify an asterisk at the end of the value, only an exact match is returned',
          args: {
            name: "string",
          },
        },
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
        "Retrieves the list of key-value tags assigned to the resource",
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
      name: "start-deployment",
      description: "Starts a deployment",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-strategy-id",
          description: "The deployment strategy ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-version",
          description:
            "The configuration version to deploy. If deploying an AppConfig hosted configuration version, you can specify either the version number or version label. For all other configurations, you must specify the version number",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the deployment",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "Metadata to assign to the deployment. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define",
          args: {
            name: "map",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this ID to encrypt the configuration data using a customer managed key",
          args: {
            name: "string",
          },
        },
        {
          name: "--dynamic-extension-parameters",
          description:
            "A map of dynamic extension parameter names to values to pass to associated extensions with PRE_START_DEPLOYMENT actions",
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
      name: "stop-deployment",
      description:
        "Stops a deployment. This API action works only on deployments that have a status of DEPLOYING, unless an AllowRevert parameter is supplied. If the AllowRevert parameter is supplied, the status of an in-progress deployment will be ROLLED_BACK. The status of a completed deployment will be REVERTED. AppConfig only allows a revert within 72 hours of deployment completion",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-number",
          description: "The sequence number of the deployment",
          args: {
            name: "integer",
          },
        },
        {
          name: "--allow-revert",
          description:
            "A Boolean that enables AppConfig to rollback a COMPLETED deployment to the previous configuration version. This action moves the deployment to a status of REVERTED",
        },
        {
          name: "--no-allow-revert",
          description:
            "A Boolean that enables AppConfig to rollback a COMPLETED deployment to the previous configuration version. This action moves the deployment to a status of REVERTED",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Assigns metadata to an AppConfig resource. Tags help organize and categorize your AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource for which to retrieve tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            "The key-value string map. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters",
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
      description: "Deletes a tag key and value from an AppConfig resource",
      options: [
        {
          name: "--resource-arn",
          description: "The ARN of the resource for which to remove tags",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys to delete",
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
      name: "update-account-settings",
      description: "Updates the value of the DeletionProtection parameter",
      options: [
        {
          name: "--deletion-protection",
          description:
            "A parameter to configure deletion protection. If enabled, deletion protection prevents a user from deleting a configuration profile or an environment if AppConfig has called either GetLatestConfiguration or for the configuration profile or from the environment during the specified interval. Deletion protection is disabled by default. The default interval for ProtectionPeriodInMinutes is 60",
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
      name: "update-application",
      description: "Updates an application",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the application",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-configuration-profile",
      description: "Updates a configuration profile",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The ID of the configuration profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the configuration profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the configuration profile",
          args: {
            name: "string",
          },
        },
        {
          name: "--retrieval-role-arn",
          description:
            "The ARN of an IAM role with permission to access the configuration at the specified LocationUri",
          args: {
            name: "string",
          },
        },
        {
          name: "--validators",
          description: "A list of methods for validating the configuration",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-identifier",
          description:
            "The identifier for a Key Management Service key to encrypt new configuration data versions in the AppConfig hosted configuration store. This attribute is only used for hosted configuration types. The identifier can be an KMS key ID, alias, or the Amazon Resource Name (ARN) of the key ID or alias. To encrypt data managed in other configuration stores, see the documentation for how to specify an KMS key for that particular service",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-deployment-strategy",
      description: "Updates a deployment strategy",
      options: [
        {
          name: "--deployment-strategy-id",
          description: "The deployment strategy ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the deployment strategy",
          args: {
            name: "string",
          },
        },
        {
          name: "--deployment-duration-in-minutes",
          description: "Total amount of time for a deployment to last",
          args: {
            name: "integer",
          },
        },
        {
          name: "--final-bake-time-in-minutes",
          description:
            "The amount of time that AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic rollback",
          args: {
            name: "integer",
          },
        },
        {
          name: "--growth-factor",
          description:
            "The percentage of targets to receive a deployed configuration during each interval",
          args: {
            name: "float",
          },
        },
        {
          name: "--growth-type",
          description:
            "The algorithm used to define how percentage grows over time. AppConfig supports the following growth types:  Linear: For this type, AppConfig processes the deployment by increments of the growth factor evenly distributed over the deployment time. For example, a linear deployment that uses a growth factor of 20 initially makes the configuration available to 20 percent of the targets. After 1/5th of the deployment time has passed, the system updates the percentage to 40 percent. This continues until 100% of the targets are set to receive the deployed configuration.  Exponential: For this type, AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:  2*(2^0)   2*(2^1)   2*(2^2)  Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-environment",
      description: "Updates an environment",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--environment-id",
          description: "The environment ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the environment",
          args: {
            name: "string",
          },
        },
        {
          name: "--monitors",
          description:
            "Amazon CloudWatch alarms to monitor during the deployment process",
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
      name: "update-extension",
      description:
        "Updates an AppConfig extension. For more information about extensions, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--extension-identifier",
          description:
            "The name, the ID, or the Amazon Resource Name (ARN) of the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Information about the extension",
          args: {
            name: "string",
          },
        },
        {
          name: "--actions",
          description: "The actions defined in the extension",
          args: {
            name: "map",
          },
        },
        {
          name: "--parameters",
          description:
            "One or more parameters for the actions called by the extension",
          args: {
            name: "map",
          },
        },
        {
          name: "--version-number",
          description: "The extension version number",
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
      name: "update-extension-association",
      description:
        "Updates an association. For more information about extensions and associations, see Extending workflows in the AppConfig User Guide",
      options: [
        {
          name: "--extension-association-id",
          description: "The system-generated ID for the association",
          args: {
            name: "string",
          },
        },
        {
          name: "--parameters",
          description:
            "The parameter names and values defined in the extension",
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
      name: "validate-configuration",
      description:
        "Uses the validators in a configuration profile to validate a configuration",
      options: [
        {
          name: "--application-id",
          description: "The application ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-profile-id",
          description: "The configuration profile ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--configuration-version",
          description: "The version of the configuration to validate",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
